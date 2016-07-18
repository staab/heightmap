(ns ^:figwheel-always tgen.core
    (:require [figwheel.client :as fw]
              three
              stats
              [tgen.scene :refer [create-scene]]))

(enable-console-print!)

;; There's a little debugging counter in here. This state variable
;; tracks a couple of components: the three.js renderer and the stats object.
(defonce STATE (atom {:stats nil :renderer nil :stopper nil}))

(defn start-app
  []
  ; Stats
  (when-not (:stats @STATE)
    (let [stats (js/Stats.)]
      (set! (.. stats -domElement -style -position) "absolute")
      (set! (.. stats -domElement -style -left) "0px")
      (set! (.. stats -domElement -style -top) "0px")
      (.appendChild (.-body js/document) (.-domElement stats))
      (swap! STATE assoc :stats stats)))
  ; Scene
  (let [geometry (js/THREE.BoxGeometry. 1 1 1)
        material (js/THREE.MeshBasicMaterial. (clj->js {:color 0x00FF00
                                                        :wireframe false}))
        cube (js/THREE.Mesh. geometry material)
        init (fn [scene] (.add scene cube))
        render (fn []
                 (set! (.. cube -rotation -x)
                       (+ 0.1 (.. cube -rotation -x)))
                 (set! (.. cube -rotation -y)
                       (+ 0.1 (.. cube -rotation -y)))
                 (.update (:stats @STATE)))]
    (swap! STATE merge (create-scene 10 init render))))

(defn stop-app
  []
  (if-let [stopper (:stopper @STATE)]
    (stopper)
    (swap! STATE dissoc :stopper))
  (if-let [renderer (:renderer @STATE)]
    (.. js/document -body (removeChild (.-domElement renderer)))
    (swap! STATE dissoc :renderer))
  (if-let [stats (:stats @STATE)]
    (.removeChild (.-body js/document) (.-domElement stats))
    (swap! STATE dissoc :stats)))



(fw/start {:on-jsload #(do (stop-app) (start-app))})

(start-app)