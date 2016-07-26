// Compiled by ClojureScript 0.0-3297 {}
goog.provide('tgen.scene');
goog.require('cljs.core');
goog.require('three');
tgen.scene.create_scene = (function tgen$scene$create_scene(world_size,init,render){
var width = window.innerWidth;
var height = window.innerHeight;
var scene = (new THREE.Scene());
var camera = (new THREE.PerspectiveCamera((50),(width / height),(1),Math.pow(world_size,(2))));
var ambient = (new THREE.AmbientLight((4202528)));
var point1 = (new THREE.PointLight((13421823),(1),Math.pow(world_size,(2))));
var point2 = (new THREE.PointLight((13421823),(1),Math.pow(world_size,(2))));
var renderer = (new THREE.WebGLRenderer());
var cam_dist = world_size;
var RUNNING = cljs.core.atom.call(null,true);
point1.position.set((300),(300),(1000));

point2.position.set((-300),(-300),(1000));

camera.position.set(cam_dist,cam_dist,cam_dist);

renderer.setSize(width,height);

document.body.appendChild(renderer.domElement);

camera.lookAt((new THREE.Vector3((0),(0),(0))));

scene.add(camera);

scene.add(ambient);

scene.add(point1);

scene.add(point2);

init.call(null,scene);

var animate = ((function (width,height,scene,camera,ambient,point1,point2,renderer,cam_dist,RUNNING){
return (function tgen$scene$create_scene_$_animate(){
if(cljs.core.truth_(cljs.core.deref.call(null,RUNNING))){
setTimeout(((function (width,height,scene,camera,ambient,point1,point2,renderer,cam_dist,RUNNING){
return (function (){
return requestAnimationFrame(tgen$scene$create_scene_$_animate);
});})(width,height,scene,camera,ambient,point1,point2,renderer,cam_dist,RUNNING))
,(100));
} else {
}

render.call(null);

return renderer.render(scene,camera);
});})(width,height,scene,camera,ambient,point1,point2,renderer,cam_dist,RUNNING))
;
animate.call(null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stopper","stopper",-304934685),((function (width,height,scene,camera,ambient,point1,point2,renderer,cam_dist,RUNNING){
return (function (){
return cljs.core.reset_BANG_.call(null,RUNNING,false);
});})(width,height,scene,camera,ambient,point1,point2,renderer,cam_dist,RUNNING))
,new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer], null);
});

//# sourceMappingURL=scene.js.map?rel=1468860060646