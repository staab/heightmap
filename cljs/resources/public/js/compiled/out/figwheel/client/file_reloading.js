// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__23829_SHARP_,p2__23830_SHARP_){
var and__16096__auto__ = p1__23829_SHARP_;
if(cljs.core.truth_(and__16096__auto__)){
return p2__23830_SHARP_;
} else {
return and__16096__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16108__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16108__auto__){
return or__16108__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16108__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16108__auto__){
return or__16108__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16108__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17007__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17007__auto__,method_table__17003__auto__,prefer_table__17004__auto__,method_cache__17005__auto__,cached_hierarchy__17006__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23831){
var map__23832 = p__23831;
var map__23832__$1 = ((cljs.core.seq_QMARK_.call(null,map__23832))?cljs.core.apply.call(null,cljs.core.hash_map,map__23832):map__23832);
var file = cljs.core.get.call(null,map__23832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__23833){
var map__23834 = p__23833;
var map__23834__$1 = ((cljs.core.seq_QMARK_.call(null,map__23834))?cljs.core.apply.call(null,cljs.core.hash_map,map__23834):map__23834);
var namespace = cljs.core.get.call(null,map__23834__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17007__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17007__auto__,method_table__17003__auto__,prefer_table__17004__auto__,method_cache__17005__auto__,cached_hierarchy__17006__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e23835){if((e23835 instanceof Error)){
var e = e23835;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23835;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__23837 = arguments.length;
switch (G__23837) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23839,callback){
var map__23841 = p__23839;
var map__23841__$1 = ((cljs.core.seq_QMARK_.call(null,map__23841))?cljs.core.apply.call(null,cljs.core.hash_map,map__23841):map__23841);
var file_msg = map__23841__$1;
var request_url = cljs.core.get.call(null,map__23841__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23841,map__23841__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23841,map__23841__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23842){
var map__23844 = p__23842;
var map__23844__$1 = ((cljs.core.seq_QMARK_.call(null,map__23844))?cljs.core.apply.call(null,cljs.core.hash_map,map__23844):map__23844);
var file_msg = map__23844__$1;
var namespace = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16108__auto__ = meta_data;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16096__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16096__auto__){
var or__16108__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16108__auto____$1)){
return or__16108__auto____$1;
} else {
var and__16096__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16096__auto____$1){
var or__16108__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16108__auto____$2){
return or__16108__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16096__auto____$1;
}
}
}
} else {
return and__16096__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23845,callback){
var map__23847 = p__23845;
var map__23847__$1 = ((cljs.core.seq_QMARK_.call(null,map__23847))?cljs.core.apply.call(null,cljs.core.hash_map,map__23847):map__23847);
var file_msg = map__23847__$1;
var request_url = cljs.core.get.call(null,map__23847__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19118__auto___23934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___23934,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___23934,out){
return (function (state_23916){
var state_val_23917 = (state_23916[(1)]);
if((state_val_23917 === (1))){
var inst_23894 = cljs.core.nth.call(null,files,(0),null);
var inst_23895 = cljs.core.nthnext.call(null,files,(1));
var inst_23896 = files;
var state_23916__$1 = (function (){var statearr_23918 = state_23916;
(statearr_23918[(7)] = inst_23894);

(statearr_23918[(8)] = inst_23896);

(statearr_23918[(9)] = inst_23895);

return statearr_23918;
})();
var statearr_23919_23935 = state_23916__$1;
(statearr_23919_23935[(2)] = null);

(statearr_23919_23935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (2))){
var inst_23899 = (state_23916[(10)]);
var inst_23896 = (state_23916[(8)]);
var inst_23899__$1 = cljs.core.nth.call(null,inst_23896,(0),null);
var inst_23900 = cljs.core.nthnext.call(null,inst_23896,(1));
var inst_23901 = (inst_23899__$1 == null);
var inst_23902 = cljs.core.not.call(null,inst_23901);
var state_23916__$1 = (function (){var statearr_23920 = state_23916;
(statearr_23920[(10)] = inst_23899__$1);

(statearr_23920[(11)] = inst_23900);

return statearr_23920;
})();
if(inst_23902){
var statearr_23921_23936 = state_23916__$1;
(statearr_23921_23936[(1)] = (4));

} else {
var statearr_23922_23937 = state_23916__$1;
(statearr_23922_23937[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (3))){
var inst_23914 = (state_23916[(2)]);
var state_23916__$1 = state_23916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23916__$1,inst_23914);
} else {
if((state_val_23917 === (4))){
var inst_23899 = (state_23916[(10)]);
var inst_23904 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23899);
var state_23916__$1 = state_23916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23916__$1,(7),inst_23904);
} else {
if((state_val_23917 === (5))){
var inst_23910 = cljs.core.async.close_BANG_.call(null,out);
var state_23916__$1 = state_23916;
var statearr_23923_23938 = state_23916__$1;
(statearr_23923_23938[(2)] = inst_23910);

(statearr_23923_23938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (6))){
var inst_23912 = (state_23916[(2)]);
var state_23916__$1 = state_23916;
var statearr_23924_23939 = state_23916__$1;
(statearr_23924_23939[(2)] = inst_23912);

(statearr_23924_23939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (7))){
var inst_23900 = (state_23916[(11)]);
var inst_23906 = (state_23916[(2)]);
var inst_23907 = cljs.core.async.put_BANG_.call(null,out,inst_23906);
var inst_23896 = inst_23900;
var state_23916__$1 = (function (){var statearr_23925 = state_23916;
(statearr_23925[(12)] = inst_23907);

(statearr_23925[(8)] = inst_23896);

return statearr_23925;
})();
var statearr_23926_23940 = state_23916__$1;
(statearr_23926_23940[(2)] = null);

(statearr_23926_23940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19118__auto___23934,out))
;
return ((function (switch__19056__auto__,c__19118__auto___23934,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto____0 = (function (){
var statearr_23930 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23930[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto__);

(statearr_23930[(1)] = (1));

return statearr_23930;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto____1 = (function (state_23916){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_23916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e23931){if((e23931 instanceof Object)){
var ex__19060__auto__ = e23931;
var statearr_23932_23941 = state_23916;
(statearr_23932_23941[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23942 = state_23916;
state_23916 = G__23942;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto__ = function(state_23916){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto____1.call(this,state_23916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___23934,out))
})();
var state__19120__auto__ = (function (){var statearr_23933 = f__19119__auto__.call(null);
(statearr_23933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___23934);

return statearr_23933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___23934,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__23943,p__23944){
var map__23947 = p__23943;
var map__23947__$1 = ((cljs.core.seq_QMARK_.call(null,map__23947))?cljs.core.apply.call(null,cljs.core.hash_map,map__23947):map__23947);
var opts = map__23947__$1;
var url_rewriter = cljs.core.get.call(null,map__23947__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__23948 = p__23944;
var map__23948__$1 = ((cljs.core.seq_QMARK_.call(null,map__23948))?cljs.core.apply.call(null,cljs.core.hash_map,map__23948):map__23948);
var file_msg = map__23948__$1;
var file = cljs.core.get.call(null,map__23948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23949,opts){
var map__23952 = p__23949;
var map__23952__$1 = ((cljs.core.seq_QMARK_.call(null,map__23952))?cljs.core.apply.call(null,cljs.core.hash_map,map__23952):map__23952);
var eval_body__$1 = cljs.core.get.call(null,map__23952__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16096__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16096__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16096__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23953){var e = e23953;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23958,p__23959){
var map__24161 = p__23958;
var map__24161__$1 = ((cljs.core.seq_QMARK_.call(null,map__24161))?cljs.core.apply.call(null,cljs.core.hash_map,map__24161):map__24161);
var opts = map__24161__$1;
var before_jsload = cljs.core.get.call(null,map__24161__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24161__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__24161__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__24162 = p__23959;
var map__24162__$1 = ((cljs.core.seq_QMARK_.call(null,map__24162))?cljs.core.apply.call(null,cljs.core.hash_map,map__24162):map__24162);
var msg = map__24162__$1;
var files = cljs.core.get.call(null,map__24162__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function (state_24287){
var state_val_24288 = (state_24287[(1)]);
if((state_val_24288 === (7))){
var inst_24177 = (state_24287[(7)]);
var inst_24174 = (state_24287[(8)]);
var inst_24175 = (state_24287[(9)]);
var inst_24176 = (state_24287[(10)]);
var inst_24182 = cljs.core._nth.call(null,inst_24175,inst_24177);
var inst_24183 = figwheel.client.file_reloading.eval_body.call(null,inst_24182,opts);
var inst_24184 = (inst_24177 + (1));
var tmp24289 = inst_24174;
var tmp24290 = inst_24175;
var tmp24291 = inst_24176;
var inst_24174__$1 = tmp24289;
var inst_24175__$1 = tmp24290;
var inst_24176__$1 = tmp24291;
var inst_24177__$1 = inst_24184;
var state_24287__$1 = (function (){var statearr_24292 = state_24287;
(statearr_24292[(7)] = inst_24177__$1);

(statearr_24292[(8)] = inst_24174__$1);

(statearr_24292[(11)] = inst_24183);

(statearr_24292[(9)] = inst_24175__$1);

(statearr_24292[(10)] = inst_24176__$1);

return statearr_24292;
})();
var statearr_24293_24362 = state_24287__$1;
(statearr_24293_24362[(2)] = null);

(statearr_24293_24362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (20))){
var inst_24226 = (state_24287[(12)]);
var inst_24220 = (state_24287[(13)]);
var inst_24219 = (state_24287[(14)]);
var inst_24223 = (state_24287[(15)]);
var inst_24224 = (state_24287[(16)]);
var inst_24229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24231 = (function (){var all_files = inst_24219;
var files_SINGLEQUOTE_ = inst_24220;
var res_SINGLEQUOTE_ = inst_24223;
var res = inst_24224;
var files_not_loaded = inst_24226;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24226,inst_24220,inst_24219,inst_24223,inst_24224,inst_24229,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function (p__24230){
var map__24294 = p__24230;
var map__24294__$1 = ((cljs.core.seq_QMARK_.call(null,map__24294))?cljs.core.apply.call(null,cljs.core.hash_map,map__24294):map__24294);
var namespace = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24226,inst_24220,inst_24219,inst_24223,inst_24224,inst_24229,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
})();
var inst_24232 = cljs.core.map.call(null,inst_24231,inst_24224);
var inst_24233 = cljs.core.pr_str.call(null,inst_24232);
var inst_24234 = figwheel.client.utils.log.call(null,inst_24233);
var inst_24235 = (function (){var all_files = inst_24219;
var files_SINGLEQUOTE_ = inst_24220;
var res_SINGLEQUOTE_ = inst_24223;
var res = inst_24224;
var files_not_loaded = inst_24226;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24226,inst_24220,inst_24219,inst_24223,inst_24224,inst_24229,inst_24231,inst_24232,inst_24233,inst_24234,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24226,inst_24220,inst_24219,inst_24223,inst_24224,inst_24229,inst_24231,inst_24232,inst_24233,inst_24234,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
})();
var inst_24236 = setTimeout(inst_24235,(10));
var state_24287__$1 = (function (){var statearr_24295 = state_24287;
(statearr_24295[(17)] = inst_24234);

(statearr_24295[(18)] = inst_24229);

return statearr_24295;
})();
var statearr_24296_24363 = state_24287__$1;
(statearr_24296_24363[(2)] = inst_24236);

(statearr_24296_24363[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (27))){
var inst_24246 = (state_24287[(19)]);
var state_24287__$1 = state_24287;
var statearr_24297_24364 = state_24287__$1;
(statearr_24297_24364[(2)] = inst_24246);

(statearr_24297_24364[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (1))){
var inst_24166 = (state_24287[(20)]);
var inst_24163 = before_jsload.call(null,files);
var inst_24164 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24165 = (function (){return ((function (inst_24166,inst_24163,inst_24164,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function (p1__23954_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23954_SHARP_);
});
;})(inst_24166,inst_24163,inst_24164,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
})();
var inst_24166__$1 = cljs.core.filter.call(null,inst_24165,files);
var inst_24167 = cljs.core.not_empty.call(null,inst_24166__$1);
var state_24287__$1 = (function (){var statearr_24298 = state_24287;
(statearr_24298[(21)] = inst_24164);

(statearr_24298[(22)] = inst_24163);

(statearr_24298[(20)] = inst_24166__$1);

return statearr_24298;
})();
if(cljs.core.truth_(inst_24167)){
var statearr_24299_24365 = state_24287__$1;
(statearr_24299_24365[(1)] = (2));

} else {
var statearr_24300_24366 = state_24287__$1;
(statearr_24300_24366[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (24))){
var state_24287__$1 = state_24287;
var statearr_24301_24367 = state_24287__$1;
(statearr_24301_24367[(2)] = null);

(statearr_24301_24367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (4))){
var inst_24211 = (state_24287[(2)]);
var inst_24212 = (function (){return ((function (inst_24211,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function (p1__23955_SHARP_){
var and__16096__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23955_SHARP_);
if(cljs.core.truth_(and__16096__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23955_SHARP_));
} else {
return and__16096__auto__;
}
});
;})(inst_24211,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
})();
var inst_24213 = cljs.core.filter.call(null,inst_24212,files);
var state_24287__$1 = (function (){var statearr_24302 = state_24287;
(statearr_24302[(23)] = inst_24211);

(statearr_24302[(24)] = inst_24213);

return statearr_24302;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_24303_24368 = state_24287__$1;
(statearr_24303_24368[(1)] = (16));

} else {
var statearr_24304_24369 = state_24287__$1;
(statearr_24304_24369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (15))){
var inst_24201 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24305_24370 = state_24287__$1;
(statearr_24305_24370[(2)] = inst_24201);

(statearr_24305_24370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (21))){
var state_24287__$1 = state_24287;
var statearr_24306_24371 = state_24287__$1;
(statearr_24306_24371[(2)] = null);

(statearr_24306_24371[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (31))){
var inst_24254 = (state_24287[(25)]);
var inst_24264 = (state_24287[(2)]);
var inst_24265 = cljs.core.not_empty.call(null,inst_24254);
var state_24287__$1 = (function (){var statearr_24307 = state_24287;
(statearr_24307[(26)] = inst_24264);

return statearr_24307;
})();
if(cljs.core.truth_(inst_24265)){
var statearr_24308_24372 = state_24287__$1;
(statearr_24308_24372[(1)] = (32));

} else {
var statearr_24309_24373 = state_24287__$1;
(statearr_24309_24373[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (32))){
var inst_24254 = (state_24287[(25)]);
var inst_24267 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24254);
var inst_24268 = cljs.core.pr_str.call(null,inst_24267);
var inst_24269 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_24268)].join('');
var inst_24270 = figwheel.client.utils.log.call(null,inst_24269);
var state_24287__$1 = state_24287;
var statearr_24310_24374 = state_24287__$1;
(statearr_24310_24374[(2)] = inst_24270);

(statearr_24310_24374[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (33))){
var state_24287__$1 = state_24287;
var statearr_24311_24375 = state_24287__$1;
(statearr_24311_24375[(2)] = null);

(statearr_24311_24375[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (13))){
var inst_24187 = (state_24287[(27)]);
var inst_24191 = cljs.core.chunk_first.call(null,inst_24187);
var inst_24192 = cljs.core.chunk_rest.call(null,inst_24187);
var inst_24193 = cljs.core.count.call(null,inst_24191);
var inst_24174 = inst_24192;
var inst_24175 = inst_24191;
var inst_24176 = inst_24193;
var inst_24177 = (0);
var state_24287__$1 = (function (){var statearr_24312 = state_24287;
(statearr_24312[(7)] = inst_24177);

(statearr_24312[(8)] = inst_24174);

(statearr_24312[(9)] = inst_24175);

(statearr_24312[(10)] = inst_24176);

return statearr_24312;
})();
var statearr_24313_24376 = state_24287__$1;
(statearr_24313_24376[(2)] = null);

(statearr_24313_24376[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (22))){
var inst_24226 = (state_24287[(12)]);
var inst_24239 = (state_24287[(2)]);
var inst_24240 = cljs.core.not_empty.call(null,inst_24226);
var state_24287__$1 = (function (){var statearr_24314 = state_24287;
(statearr_24314[(28)] = inst_24239);

return statearr_24314;
})();
if(cljs.core.truth_(inst_24240)){
var statearr_24315_24377 = state_24287__$1;
(statearr_24315_24377[(1)] = (23));

} else {
var statearr_24316_24378 = state_24287__$1;
(statearr_24316_24378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (36))){
var state_24287__$1 = state_24287;
var statearr_24317_24379 = state_24287__$1;
(statearr_24317_24379[(2)] = null);

(statearr_24317_24379[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (29))){
var inst_24253 = (state_24287[(29)]);
var inst_24258 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24253);
var inst_24259 = cljs.core.pr_str.call(null,inst_24258);
var inst_24260 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24259)].join('');
var inst_24261 = figwheel.client.utils.log.call(null,inst_24260);
var state_24287__$1 = state_24287;
var statearr_24318_24380 = state_24287__$1;
(statearr_24318_24380[(2)] = inst_24261);

(statearr_24318_24380[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (6))){
var inst_24208 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24319_24381 = state_24287__$1;
(statearr_24319_24381[(2)] = inst_24208);

(statearr_24319_24381[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (28))){
var inst_24253 = (state_24287[(29)]);
var inst_24252 = (state_24287[(2)]);
var inst_24253__$1 = cljs.core.get.call(null,inst_24252,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24254 = cljs.core.get.call(null,inst_24252,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_24255 = cljs.core.get.call(null,inst_24252,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24256 = cljs.core.not_empty.call(null,inst_24253__$1);
var state_24287__$1 = (function (){var statearr_24320 = state_24287;
(statearr_24320[(30)] = inst_24255);

(statearr_24320[(29)] = inst_24253__$1);

(statearr_24320[(25)] = inst_24254);

return statearr_24320;
})();
if(cljs.core.truth_(inst_24256)){
var statearr_24321_24382 = state_24287__$1;
(statearr_24321_24382[(1)] = (29));

} else {
var statearr_24322_24383 = state_24287__$1;
(statearr_24322_24383[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (25))){
var inst_24285 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24287__$1,inst_24285);
} else {
if((state_val_24288 === (34))){
var inst_24255 = (state_24287[(30)]);
var inst_24273 = (state_24287[(2)]);
var inst_24274 = cljs.core.not_empty.call(null,inst_24255);
var state_24287__$1 = (function (){var statearr_24323 = state_24287;
(statearr_24323[(31)] = inst_24273);

return statearr_24323;
})();
if(cljs.core.truth_(inst_24274)){
var statearr_24324_24384 = state_24287__$1;
(statearr_24324_24384[(1)] = (35));

} else {
var statearr_24325_24385 = state_24287__$1;
(statearr_24325_24385[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (17))){
var inst_24213 = (state_24287[(24)]);
var state_24287__$1 = state_24287;
var statearr_24326_24386 = state_24287__$1;
(statearr_24326_24386[(2)] = inst_24213);

(statearr_24326_24386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (3))){
var state_24287__$1 = state_24287;
var statearr_24327_24387 = state_24287__$1;
(statearr_24327_24387[(2)] = null);

(statearr_24327_24387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (12))){
var inst_24204 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24328_24388 = state_24287__$1;
(statearr_24328_24388[(2)] = inst_24204);

(statearr_24328_24388[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (2))){
var inst_24166 = (state_24287[(20)]);
var inst_24173 = cljs.core.seq.call(null,inst_24166);
var inst_24174 = inst_24173;
var inst_24175 = null;
var inst_24176 = (0);
var inst_24177 = (0);
var state_24287__$1 = (function (){var statearr_24329 = state_24287;
(statearr_24329[(7)] = inst_24177);

(statearr_24329[(8)] = inst_24174);

(statearr_24329[(9)] = inst_24175);

(statearr_24329[(10)] = inst_24176);

return statearr_24329;
})();
var statearr_24330_24389 = state_24287__$1;
(statearr_24330_24389[(2)] = null);

(statearr_24330_24389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (23))){
var inst_24226 = (state_24287[(12)]);
var inst_24220 = (state_24287[(13)]);
var inst_24219 = (state_24287[(14)]);
var inst_24223 = (state_24287[(15)]);
var inst_24246 = (state_24287[(19)]);
var inst_24224 = (state_24287[(16)]);
var inst_24242 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24245 = (function (){var all_files = inst_24219;
var files_SINGLEQUOTE_ = inst_24220;
var res_SINGLEQUOTE_ = inst_24223;
var res = inst_24224;
var files_not_loaded = inst_24226;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24226,inst_24220,inst_24219,inst_24223,inst_24246,inst_24224,inst_24242,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function (p__24244){
var map__24331 = p__24244;
var map__24331__$1 = ((cljs.core.seq_QMARK_.call(null,map__24331))?cljs.core.apply.call(null,cljs.core.hash_map,map__24331):map__24331);
var meta_data = cljs.core.get.call(null,map__24331__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24226,inst_24220,inst_24219,inst_24223,inst_24246,inst_24224,inst_24242,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
})();
var inst_24246__$1 = cljs.core.group_by.call(null,inst_24245,inst_24226);
var inst_24247 = cljs.core.seq_QMARK_.call(null,inst_24246__$1);
var state_24287__$1 = (function (){var statearr_24332 = state_24287;
(statearr_24332[(19)] = inst_24246__$1);

(statearr_24332[(32)] = inst_24242);

return statearr_24332;
})();
if(inst_24247){
var statearr_24333_24390 = state_24287__$1;
(statearr_24333_24390[(1)] = (26));

} else {
var statearr_24334_24391 = state_24287__$1;
(statearr_24334_24391[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (35))){
var inst_24255 = (state_24287[(30)]);
var inst_24276 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24255);
var inst_24277 = cljs.core.pr_str.call(null,inst_24276);
var inst_24278 = [cljs.core.str("not required: "),cljs.core.str(inst_24277)].join('');
var inst_24279 = figwheel.client.utils.log.call(null,inst_24278);
var state_24287__$1 = state_24287;
var statearr_24335_24392 = state_24287__$1;
(statearr_24335_24392[(2)] = inst_24279);

(statearr_24335_24392[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (19))){
var inst_24220 = (state_24287[(13)]);
var inst_24219 = (state_24287[(14)]);
var inst_24223 = (state_24287[(15)]);
var inst_24224 = (state_24287[(16)]);
var inst_24223__$1 = (state_24287[(2)]);
var inst_24224__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24223__$1);
var inst_24225 = (function (){var all_files = inst_24219;
var files_SINGLEQUOTE_ = inst_24220;
var res_SINGLEQUOTE_ = inst_24223__$1;
var res = inst_24224__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_24220,inst_24219,inst_24223,inst_24224,inst_24223__$1,inst_24224__$1,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function (p1__23957_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23957_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_24220,inst_24219,inst_24223,inst_24224,inst_24223__$1,inst_24224__$1,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
})();
var inst_24226 = cljs.core.filter.call(null,inst_24225,inst_24223__$1);
var inst_24227 = cljs.core.not_empty.call(null,inst_24224__$1);
var state_24287__$1 = (function (){var statearr_24336 = state_24287;
(statearr_24336[(12)] = inst_24226);

(statearr_24336[(15)] = inst_24223__$1);

(statearr_24336[(16)] = inst_24224__$1);

return statearr_24336;
})();
if(cljs.core.truth_(inst_24227)){
var statearr_24337_24393 = state_24287__$1;
(statearr_24337_24393[(1)] = (20));

} else {
var statearr_24338_24394 = state_24287__$1;
(statearr_24338_24394[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (11))){
var state_24287__$1 = state_24287;
var statearr_24339_24395 = state_24287__$1;
(statearr_24339_24395[(2)] = null);

(statearr_24339_24395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (9))){
var inst_24206 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24340_24396 = state_24287__$1;
(statearr_24340_24396[(2)] = inst_24206);

(statearr_24340_24396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (5))){
var inst_24177 = (state_24287[(7)]);
var inst_24176 = (state_24287[(10)]);
var inst_24179 = (inst_24177 < inst_24176);
var inst_24180 = inst_24179;
var state_24287__$1 = state_24287;
if(cljs.core.truth_(inst_24180)){
var statearr_24341_24397 = state_24287__$1;
(statearr_24341_24397[(1)] = (7));

} else {
var statearr_24342_24398 = state_24287__$1;
(statearr_24342_24398[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (14))){
var inst_24187 = (state_24287[(27)]);
var inst_24196 = cljs.core.first.call(null,inst_24187);
var inst_24197 = figwheel.client.file_reloading.eval_body.call(null,inst_24196,opts);
var inst_24198 = cljs.core.next.call(null,inst_24187);
var inst_24174 = inst_24198;
var inst_24175 = null;
var inst_24176 = (0);
var inst_24177 = (0);
var state_24287__$1 = (function (){var statearr_24343 = state_24287;
(statearr_24343[(7)] = inst_24177);

(statearr_24343[(8)] = inst_24174);

(statearr_24343[(9)] = inst_24175);

(statearr_24343[(10)] = inst_24176);

(statearr_24343[(33)] = inst_24197);

return statearr_24343;
})();
var statearr_24344_24399 = state_24287__$1;
(statearr_24344_24399[(2)] = null);

(statearr_24344_24399[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (26))){
var inst_24246 = (state_24287[(19)]);
var inst_24249 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24246);
var state_24287__$1 = state_24287;
var statearr_24345_24400 = state_24287__$1;
(statearr_24345_24400[(2)] = inst_24249);

(statearr_24345_24400[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (16))){
var inst_24213 = (state_24287[(24)]);
var inst_24215 = (function (){var all_files = inst_24213;
return ((function (all_files,inst_24213,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function (p1__23956_SHARP_){
return cljs.core.update_in.call(null,p1__23956_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_24213,state_val_24288,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
})();
var inst_24216 = cljs.core.map.call(null,inst_24215,inst_24213);
var state_24287__$1 = state_24287;
var statearr_24346_24401 = state_24287__$1;
(statearr_24346_24401[(2)] = inst_24216);

(statearr_24346_24401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (30))){
var state_24287__$1 = state_24287;
var statearr_24347_24402 = state_24287__$1;
(statearr_24347_24402[(2)] = null);

(statearr_24347_24402[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (10))){
var inst_24187 = (state_24287[(27)]);
var inst_24189 = cljs.core.chunked_seq_QMARK_.call(null,inst_24187);
var state_24287__$1 = state_24287;
if(inst_24189){
var statearr_24348_24403 = state_24287__$1;
(statearr_24348_24403[(1)] = (13));

} else {
var statearr_24349_24404 = state_24287__$1;
(statearr_24349_24404[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (18))){
var inst_24220 = (state_24287[(13)]);
var inst_24219 = (state_24287[(14)]);
var inst_24219__$1 = (state_24287[(2)]);
var inst_24220__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_24219__$1);
var inst_24221 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24220__$1);
var state_24287__$1 = (function (){var statearr_24350 = state_24287;
(statearr_24350[(13)] = inst_24220__$1);

(statearr_24350[(14)] = inst_24219__$1);

return statearr_24350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24287__$1,(19),inst_24221);
} else {
if((state_val_24288 === (37))){
var inst_24282 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24351_24405 = state_24287__$1;
(statearr_24351_24405[(2)] = inst_24282);

(statearr_24351_24405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (8))){
var inst_24174 = (state_24287[(8)]);
var inst_24187 = (state_24287[(27)]);
var inst_24187__$1 = cljs.core.seq.call(null,inst_24174);
var state_24287__$1 = (function (){var statearr_24352 = state_24287;
(statearr_24352[(27)] = inst_24187__$1);

return statearr_24352;
})();
if(inst_24187__$1){
var statearr_24353_24406 = state_24287__$1;
(statearr_24353_24406[(1)] = (10));

} else {
var statearr_24354_24407 = state_24287__$1;
(statearr_24354_24407[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
;
return ((function (switch__19056__auto__,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto____0 = (function (){
var statearr_24358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24358[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto__);

(statearr_24358[(1)] = (1));

return statearr_24358;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto____1 = (function (state_24287){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24359){if((e24359 instanceof Object)){
var ex__19060__auto__ = e24359;
var statearr_24360_24408 = state_24287;
(statearr_24360_24408[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24409 = state_24287;
state_24287 = G__24409;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto__ = function(state_24287){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto____1.call(this,state_24287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
})();
var state__19120__auto__ = (function (){var statearr_24361 = f__19119__auto__.call(null);
(statearr_24361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_24361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__,map__24161,map__24161__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24162,map__24162__$1,msg,files))
);

return c__19118__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24412,link){
var map__24414 = p__24412;
var map__24414__$1 = ((cljs.core.seq_QMARK_.call(null,map__24414))?cljs.core.apply.call(null,cljs.core.hash_map,map__24414):map__24414);
var file = cljs.core.get.call(null,map__24414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24414,map__24414__$1,file){
return (function (p1__24410_SHARP_,p2__24411_SHARP_){
if(cljs.core._EQ_.call(null,p1__24410_SHARP_,p2__24411_SHARP_)){
return p1__24410_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24414,map__24414__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24418){
var map__24419 = p__24418;
var map__24419__$1 = ((cljs.core.seq_QMARK_.call(null,map__24419))?cljs.core.apply.call(null,cljs.core.hash_map,map__24419):map__24419);
var match_length = cljs.core.get.call(null,map__24419__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24419__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24415_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24415_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__24421 = arguments.length;
switch (G__24421) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24423){
var map__24425 = p__24423;
var map__24425__$1 = ((cljs.core.seq_QMARK_.call(null,map__24425))?cljs.core.apply.call(null,cljs.core.hash_map,map__24425):map__24425);
var f_data = map__24425__$1;
var file = cljs.core.get.call(null,map__24425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__24425__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16108__auto__ = request_url;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24426,files_msg){
var map__24448 = p__24426;
var map__24448__$1 = ((cljs.core.seq_QMARK_.call(null,map__24448))?cljs.core.apply.call(null,cljs.core.hash_map,map__24448):map__24448);
var opts = map__24448__$1;
var on_cssload = cljs.core.get.call(null,map__24448__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24449_24469 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24450_24470 = null;
var count__24451_24471 = (0);
var i__24452_24472 = (0);
while(true){
if((i__24452_24472 < count__24451_24471)){
var f_24473 = cljs.core._nth.call(null,chunk__24450_24470,i__24452_24472);
figwheel.client.file_reloading.reload_css_file.call(null,f_24473);

var G__24474 = seq__24449_24469;
var G__24475 = chunk__24450_24470;
var G__24476 = count__24451_24471;
var G__24477 = (i__24452_24472 + (1));
seq__24449_24469 = G__24474;
chunk__24450_24470 = G__24475;
count__24451_24471 = G__24476;
i__24452_24472 = G__24477;
continue;
} else {
var temp__4425__auto___24478 = cljs.core.seq.call(null,seq__24449_24469);
if(temp__4425__auto___24478){
var seq__24449_24479__$1 = temp__4425__auto___24478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24449_24479__$1)){
var c__16893__auto___24480 = cljs.core.chunk_first.call(null,seq__24449_24479__$1);
var G__24481 = cljs.core.chunk_rest.call(null,seq__24449_24479__$1);
var G__24482 = c__16893__auto___24480;
var G__24483 = cljs.core.count.call(null,c__16893__auto___24480);
var G__24484 = (0);
seq__24449_24469 = G__24481;
chunk__24450_24470 = G__24482;
count__24451_24471 = G__24483;
i__24452_24472 = G__24484;
continue;
} else {
var f_24485 = cljs.core.first.call(null,seq__24449_24479__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24485);

var G__24486 = cljs.core.next.call(null,seq__24449_24479__$1);
var G__24487 = null;
var G__24488 = (0);
var G__24489 = (0);
seq__24449_24469 = G__24486;
chunk__24450_24470 = G__24487;
count__24451_24471 = G__24488;
i__24452_24472 = G__24489;
continue;
}
} else {
}
}
break;
}

var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__,map__24448,map__24448__$1,opts,on_cssload){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__,map__24448,map__24448__$1,opts,on_cssload){
return (function (state_24459){
var state_val_24460 = (state_24459[(1)]);
if((state_val_24460 === (1))){
var inst_24453 = cljs.core.async.timeout.call(null,(100));
var state_24459__$1 = state_24459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24459__$1,(2),inst_24453);
} else {
if((state_val_24460 === (2))){
var inst_24455 = (state_24459[(2)]);
var inst_24456 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_24457 = on_cssload.call(null,inst_24456);
var state_24459__$1 = (function (){var statearr_24461 = state_24459;
(statearr_24461[(7)] = inst_24455);

return statearr_24461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24459__$1,inst_24457);
} else {
return null;
}
}
});})(c__19118__auto__,map__24448,map__24448__$1,opts,on_cssload))
;
return ((function (switch__19056__auto__,c__19118__auto__,map__24448,map__24448__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto____0 = (function (){
var statearr_24465 = [null,null,null,null,null,null,null,null];
(statearr_24465[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto__);

(statearr_24465[(1)] = (1));

return statearr_24465;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto____1 = (function (state_24459){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24466){if((e24466 instanceof Object)){
var ex__19060__auto__ = e24466;
var statearr_24467_24490 = state_24459;
(statearr_24467_24490[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24491 = state_24459;
state_24459 = G__24491;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto__ = function(state_24459){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto____1.call(this,state_24459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__,map__24448,map__24448__$1,opts,on_cssload))
})();
var state__19120__auto__ = (function (){var statearr_24468 = f__19119__auto__.call(null);
(statearr_24468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_24468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__,map__24448,map__24448__$1,opts,on_cssload))
);

return c__19118__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1468806597532