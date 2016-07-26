// Compiled by ClojureScript 0.0-3297 {}
goog.provide('tgen.core');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('three');
goog.require('stats');
goog.require('tgen.scene');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tgen.core.STATE !== 'undefined'){
} else {
tgen.core.STATE = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stats","stats",-85643011),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"stopper","stopper",-304934685),null], null));
}
tgen.core.start_app = (function tgen$core$start_app(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tgen.core.STATE)))){
} else {
var stats_23323 = (new Stats());
stats_23323.domElement.style.position = "absolute";

stats_23323.domElement.style.left = "0px";

stats_23323.domElement.style.top = "0px";

document.body.appendChild(stats_23323.domElement);

cljs.core.swap_BANG_.call(null,tgen.core.STATE,cljs.core.assoc,new cljs.core.Keyword(null,"stats","stats",-85643011),stats_23323);
}

var geometry = (new THREE.BoxGeometry((1),(1),(1)));
var material = (new THREE.MeshBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(65280),new cljs.core.Keyword(null,"wireframe","wireframe",1009957322),false], null))));
var cube = (new THREE.Mesh(geometry,material));
var init = ((function (geometry,material,cube){
return (function (scene){
return scene.add(cube);
});})(geometry,material,cube))
;
var render = ((function (geometry,material,cube,init){
return (function (){
cube.rotation.x = (0.1 + cube.rotation.x);

cube.rotation.y = (0.1 + cube.rotation.y);

return new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tgen.core.STATE)).update();
});})(geometry,material,cube,init))
;
return cljs.core.swap_BANG_.call(null,tgen.core.STATE,cljs.core.merge,tgen.scene.create_scene.call(null,(10),init,render));
});
tgen.core.stop_app = (function tgen$core$stop_app(){
var temp__4423__auto___23324 = new cljs.core.Keyword(null,"stopper","stopper",-304934685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tgen.core.STATE));
if(cljs.core.truth_(temp__4423__auto___23324)){
var stopper_23325 = temp__4423__auto___23324;
stopper_23325.call(null);
} else {
cljs.core.swap_BANG_.call(null,tgen.core.STATE,cljs.core.dissoc,new cljs.core.Keyword(null,"stopper","stopper",-304934685));
}

var temp__4423__auto___23326 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tgen.core.STATE));
if(cljs.core.truth_(temp__4423__auto___23326)){
var renderer_23327 = temp__4423__auto___23326;
document.body.removeChild(renderer_23327.domElement);
} else {
cljs.core.swap_BANG_.call(null,tgen.core.STATE,cljs.core.dissoc,new cljs.core.Keyword(null,"renderer","renderer",336841071));
}

var temp__4423__auto__ = new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tgen.core.STATE));
if(cljs.core.truth_(temp__4423__auto__)){
var stats = temp__4423__auto__;
return document.body.removeChild(stats.domElement);
} else {
return cljs.core.swap_BANG_.call(null,tgen.core.STATE,cljs.core.dissoc,new cljs.core.Keyword(null,"stats","stats",-85643011));
}
});
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
tgen.core.stop_app.call(null);

return tgen.core.start_app.call(null);
})], null));
tgen.core.start_app.call(null);

//# sourceMappingURL=core.js.map?rel=1468860576811