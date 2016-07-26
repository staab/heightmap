// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22727__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22728__i = 0, G__22728__a = new Array(arguments.length -  0);
while (G__22728__i < G__22728__a.length) {G__22728__a[G__22728__i] = arguments[G__22728__i + 0]; ++G__22728__i;}
  args = new cljs.core.IndexedSeq(G__22728__a,0);
} 
return G__22727__delegate.call(this,args);};
G__22727.cljs$lang$maxFixedArity = 0;
G__22727.cljs$lang$applyTo = (function (arglist__22729){
var args = cljs.core.seq(arglist__22729);
return G__22727__delegate(args);
});
G__22727.cljs$core$IFn$_invoke$arity$variadic = G__22727__delegate;
return G__22727;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22730){
var map__22732 = p__22730;
var map__22732__$1 = ((cljs.core.seq_QMARK_.call(null,map__22732))?cljs.core.apply.call(null,cljs.core.hash_map,map__22732):map__22732);
var message = cljs.core.get.call(null,map__22732__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22732__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16108__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16096__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16096__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16096__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19118__auto___22861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___22861,ch){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___22861,ch){
return (function (state_22835){
var state_val_22836 = (state_22835[(1)]);
if((state_val_22836 === (7))){
var inst_22831 = (state_22835[(2)]);
var state_22835__$1 = state_22835;
var statearr_22837_22862 = state_22835__$1;
(statearr_22837_22862[(2)] = inst_22831);

(statearr_22837_22862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (1))){
var state_22835__$1 = state_22835;
var statearr_22838_22863 = state_22835__$1;
(statearr_22838_22863[(2)] = null);

(statearr_22838_22863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (4))){
var inst_22799 = (state_22835[(7)]);
var inst_22799__$1 = (state_22835[(2)]);
var state_22835__$1 = (function (){var statearr_22839 = state_22835;
(statearr_22839[(7)] = inst_22799__$1);

return statearr_22839;
})();
if(cljs.core.truth_(inst_22799__$1)){
var statearr_22840_22864 = state_22835__$1;
(statearr_22840_22864[(1)] = (5));

} else {
var statearr_22841_22865 = state_22835__$1;
(statearr_22841_22865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (13))){
var state_22835__$1 = state_22835;
var statearr_22842_22866 = state_22835__$1;
(statearr_22842_22866[(2)] = null);

(statearr_22842_22866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (6))){
var state_22835__$1 = state_22835;
var statearr_22843_22867 = state_22835__$1;
(statearr_22843_22867[(2)] = null);

(statearr_22843_22867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (3))){
var inst_22833 = (state_22835[(2)]);
var state_22835__$1 = state_22835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22835__$1,inst_22833);
} else {
if((state_val_22836 === (12))){
var inst_22806 = (state_22835[(8)]);
var inst_22819 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22806);
var inst_22820 = cljs.core.first.call(null,inst_22819);
var inst_22821 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22820);
var inst_22822 = console.warn("Figwheel: Not loading code with warnings - ",inst_22821);
var state_22835__$1 = state_22835;
var statearr_22844_22868 = state_22835__$1;
(statearr_22844_22868[(2)] = inst_22822);

(statearr_22844_22868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (2))){
var state_22835__$1 = state_22835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22835__$1,(4),ch);
} else {
if((state_val_22836 === (11))){
var inst_22815 = (state_22835[(2)]);
var state_22835__$1 = state_22835;
var statearr_22845_22869 = state_22835__$1;
(statearr_22845_22869[(2)] = inst_22815);

(statearr_22845_22869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (9))){
var inst_22805 = (state_22835[(9)]);
var inst_22817 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22805,opts);
var state_22835__$1 = state_22835;
if(cljs.core.truth_(inst_22817)){
var statearr_22846_22870 = state_22835__$1;
(statearr_22846_22870[(1)] = (12));

} else {
var statearr_22847_22871 = state_22835__$1;
(statearr_22847_22871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (5))){
var inst_22805 = (state_22835[(9)]);
var inst_22799 = (state_22835[(7)]);
var inst_22801 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22802 = (new cljs.core.PersistentArrayMap(null,2,inst_22801,null));
var inst_22803 = (new cljs.core.PersistentHashSet(null,inst_22802,null));
var inst_22804 = figwheel.client.focus_msgs.call(null,inst_22803,inst_22799);
var inst_22805__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22804);
var inst_22806 = cljs.core.first.call(null,inst_22804);
var inst_22807 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22805__$1,opts);
var state_22835__$1 = (function (){var statearr_22848 = state_22835;
(statearr_22848[(9)] = inst_22805__$1);

(statearr_22848[(8)] = inst_22806);

return statearr_22848;
})();
if(cljs.core.truth_(inst_22807)){
var statearr_22849_22872 = state_22835__$1;
(statearr_22849_22872[(1)] = (8));

} else {
var statearr_22850_22873 = state_22835__$1;
(statearr_22850_22873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (14))){
var inst_22825 = (state_22835[(2)]);
var state_22835__$1 = state_22835;
var statearr_22851_22874 = state_22835__$1;
(statearr_22851_22874[(2)] = inst_22825);

(statearr_22851_22874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (10))){
var inst_22827 = (state_22835[(2)]);
var state_22835__$1 = (function (){var statearr_22852 = state_22835;
(statearr_22852[(10)] = inst_22827);

return statearr_22852;
})();
var statearr_22853_22875 = state_22835__$1;
(statearr_22853_22875[(2)] = null);

(statearr_22853_22875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (8))){
var inst_22806 = (state_22835[(8)]);
var inst_22809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22810 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22806);
var inst_22811 = cljs.core.async.timeout.call(null,(1000));
var inst_22812 = [inst_22810,inst_22811];
var inst_22813 = (new cljs.core.PersistentVector(null,2,(5),inst_22809,inst_22812,null));
var state_22835__$1 = state_22835;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22835__$1,(11),inst_22813);
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
});})(c__19118__auto___22861,ch))
;
return ((function (switch__19056__auto__,c__19118__auto___22861,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19057__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19057__auto____0 = (function (){
var statearr_22857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22857[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19057__auto__);

(statearr_22857[(1)] = (1));

return statearr_22857;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19057__auto____1 = (function (state_22835){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_22835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e22858){if((e22858 instanceof Object)){
var ex__19060__auto__ = e22858;
var statearr_22859_22876 = state_22835;
(statearr_22859_22876[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22877 = state_22835;
state_22835 = G__22877;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19057__auto__ = function(state_22835){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19057__auto____1.call(this,state_22835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19057__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19057__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___22861,ch))
})();
var state__19120__auto__ = (function (){var statearr_22860 = f__19119__auto__.call(null);
(statearr_22860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___22861);

return statearr_22860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___22861,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22878_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22878_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_22885 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22885){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_22883 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22884 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22883,_STAR_print_newline_STAR_22884,base_path_22885){
return (function() { 
var G__22886__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22887__i = 0, G__22887__a = new Array(arguments.length -  0);
while (G__22887__i < G__22887__a.length) {G__22887__a[G__22887__i] = arguments[G__22887__i + 0]; ++G__22887__i;}
  args = new cljs.core.IndexedSeq(G__22887__a,0);
} 
return G__22886__delegate.call(this,args);};
G__22886.cljs$lang$maxFixedArity = 0;
G__22886.cljs$lang$applyTo = (function (arglist__22888){
var args = cljs.core.seq(arglist__22888);
return G__22886__delegate(args);
});
G__22886.cljs$core$IFn$_invoke$arity$variadic = G__22886__delegate;
return G__22886;
})()
;})(_STAR_print_fn_STAR_22883,_STAR_print_newline_STAR_22884,base_path_22885))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22884;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22883;
}}catch (e22882){if((e22882 instanceof Error)){
var e = e22882;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22885], null));
} else {
var e = e22882;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22885))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22889){
var map__22894 = p__22889;
var map__22894__$1 = ((cljs.core.seq_QMARK_.call(null,map__22894))?cljs.core.apply.call(null,cljs.core.hash_map,map__22894):map__22894);
var opts = map__22894__$1;
var build_id = cljs.core.get.call(null,map__22894__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22894,map__22894__$1,opts,build_id){
return (function (p__22895){
var vec__22896 = p__22895;
var map__22897 = cljs.core.nth.call(null,vec__22896,(0),null);
var map__22897__$1 = ((cljs.core.seq_QMARK_.call(null,map__22897))?cljs.core.apply.call(null,cljs.core.hash_map,map__22897):map__22897);
var msg = map__22897__$1;
var msg_name = cljs.core.get.call(null,map__22897__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22896,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22896,map__22897,map__22897__$1,msg,msg_name,_,map__22894,map__22894__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22896,map__22897,map__22897__$1,msg,msg_name,_,map__22894,map__22894__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22894,map__22894__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22901){
var vec__22902 = p__22901;
var map__22903 = cljs.core.nth.call(null,vec__22902,(0),null);
var map__22903__$1 = ((cljs.core.seq_QMARK_.call(null,map__22903))?cljs.core.apply.call(null,cljs.core.hash_map,map__22903):map__22903);
var msg = map__22903__$1;
var msg_name = cljs.core.get.call(null,map__22903__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22902,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22904){
var map__22912 = p__22904;
var map__22912__$1 = ((cljs.core.seq_QMARK_.call(null,map__22912))?cljs.core.apply.call(null,cljs.core.hash_map,map__22912):map__22912);
var on_compile_warning = cljs.core.get.call(null,map__22912__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22912__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22912,map__22912__$1,on_compile_warning,on_compile_fail){
return (function (p__22913){
var vec__22914 = p__22913;
var map__22915 = cljs.core.nth.call(null,vec__22914,(0),null);
var map__22915__$1 = ((cljs.core.seq_QMARK_.call(null,map__22915))?cljs.core.apply.call(null,cljs.core.hash_map,map__22915):map__22915);
var msg = map__22915__$1;
var msg_name = cljs.core.get.call(null,map__22915__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22914,(1));
var pred__22916 = cljs.core._EQ_;
var expr__22917 = msg_name;
if(cljs.core.truth_(pred__22916.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22917))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22916.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22917))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22912,map__22912__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__,msg_hist,msg_names,msg){
return (function (state_23118){
var state_val_23119 = (state_23118[(1)]);
if((state_val_23119 === (7))){
var inst_23052 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23120_23161 = state_23118__$1;
(statearr_23120_23161[(2)] = inst_23052);

(statearr_23120_23161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (20))){
var inst_23080 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23080)){
var statearr_23121_23162 = state_23118__$1;
(statearr_23121_23162[(1)] = (22));

} else {
var statearr_23122_23163 = state_23118__$1;
(statearr_23122_23163[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (27))){
var inst_23092 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23093 = figwheel.client.heads_up.display_warning.call(null,inst_23092);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(30),inst_23093);
} else {
if((state_val_23119 === (1))){
var inst_23040 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23040)){
var statearr_23123_23164 = state_23118__$1;
(statearr_23123_23164[(1)] = (2));

} else {
var statearr_23124_23165 = state_23118__$1;
(statearr_23124_23165[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (24))){
var inst_23108 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23125_23166 = state_23118__$1;
(statearr_23125_23166[(2)] = inst_23108);

(statearr_23125_23166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (4))){
var inst_23116 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23118__$1,inst_23116);
} else {
if((state_val_23119 === (15))){
var inst_23068 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23069 = figwheel.client.format_messages.call(null,inst_23068);
var inst_23070 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23071 = figwheel.client.heads_up.display_error.call(null,inst_23069,inst_23070);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(18),inst_23071);
} else {
if((state_val_23119 === (21))){
var inst_23110 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23126_23167 = state_23118__$1;
(statearr_23126_23167[(2)] = inst_23110);

(statearr_23126_23167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (31))){
var inst_23099 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(34),inst_23099);
} else {
if((state_val_23119 === (32))){
var state_23118__$1 = state_23118;
var statearr_23127_23168 = state_23118__$1;
(statearr_23127_23168[(2)] = null);

(statearr_23127_23168[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (33))){
var inst_23104 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23128_23169 = state_23118__$1;
(statearr_23128_23169[(2)] = inst_23104);

(statearr_23128_23169[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (13))){
var inst_23058 = (state_23118[(2)]);
var inst_23059 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23060 = figwheel.client.format_messages.call(null,inst_23059);
var inst_23061 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23062 = figwheel.client.heads_up.display_error.call(null,inst_23060,inst_23061);
var state_23118__$1 = (function (){var statearr_23129 = state_23118;
(statearr_23129[(7)] = inst_23058);

return statearr_23129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(14),inst_23062);
} else {
if((state_val_23119 === (22))){
var inst_23082 = figwheel.client.heads_up.clear.call(null);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(25),inst_23082);
} else {
if((state_val_23119 === (29))){
var inst_23106 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23130_23170 = state_23118__$1;
(statearr_23130_23170[(2)] = inst_23106);

(statearr_23130_23170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (6))){
var inst_23048 = figwheel.client.heads_up.clear.call(null);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(9),inst_23048);
} else {
if((state_val_23119 === (28))){
var inst_23097 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23097)){
var statearr_23131_23171 = state_23118__$1;
(statearr_23131_23171[(1)] = (31));

} else {
var statearr_23132_23172 = state_23118__$1;
(statearr_23132_23172[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (25))){
var inst_23084 = (state_23118[(2)]);
var inst_23085 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23086 = figwheel.client.heads_up.display_warning.call(null,inst_23085);
var state_23118__$1 = (function (){var statearr_23133 = state_23118;
(statearr_23133[(8)] = inst_23084);

return statearr_23133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(26),inst_23086);
} else {
if((state_val_23119 === (34))){
var inst_23101 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23134_23173 = state_23118__$1;
(statearr_23134_23173[(2)] = inst_23101);

(statearr_23134_23173[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (17))){
var inst_23112 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23135_23174 = state_23118__$1;
(statearr_23135_23174[(2)] = inst_23112);

(statearr_23135_23174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (3))){
var inst_23054 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23054)){
var statearr_23136_23175 = state_23118__$1;
(statearr_23136_23175[(1)] = (10));

} else {
var statearr_23137_23176 = state_23118__$1;
(statearr_23137_23176[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (12))){
var inst_23114 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23138_23177 = state_23118__$1;
(statearr_23138_23177[(2)] = inst_23114);

(statearr_23138_23177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (2))){
var inst_23042 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23042)){
var statearr_23139_23178 = state_23118__$1;
(statearr_23139_23178[(1)] = (5));

} else {
var statearr_23140_23179 = state_23118__$1;
(statearr_23140_23179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (23))){
var inst_23090 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23090)){
var statearr_23141_23180 = state_23118__$1;
(statearr_23141_23180[(1)] = (27));

} else {
var statearr_23142_23181 = state_23118__$1;
(statearr_23142_23181[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (19))){
var inst_23077 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23078 = figwheel.client.heads_up.append_message.call(null,inst_23077);
var state_23118__$1 = state_23118;
var statearr_23143_23182 = state_23118__$1;
(statearr_23143_23182[(2)] = inst_23078);

(statearr_23143_23182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (11))){
var inst_23066 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23066)){
var statearr_23144_23183 = state_23118__$1;
(statearr_23144_23183[(1)] = (15));

} else {
var statearr_23145_23184 = state_23118__$1;
(statearr_23145_23184[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (9))){
var inst_23050 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23146_23185 = state_23118__$1;
(statearr_23146_23185[(2)] = inst_23050);

(statearr_23146_23185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (5))){
var inst_23044 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(8),inst_23044);
} else {
if((state_val_23119 === (14))){
var inst_23064 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23147_23186 = state_23118__$1;
(statearr_23147_23186[(2)] = inst_23064);

(statearr_23147_23186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (26))){
var inst_23088 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23148_23187 = state_23118__$1;
(statearr_23148_23187[(2)] = inst_23088);

(statearr_23148_23187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (16))){
var inst_23075 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23075)){
var statearr_23149_23188 = state_23118__$1;
(statearr_23149_23188[(1)] = (19));

} else {
var statearr_23150_23189 = state_23118__$1;
(statearr_23150_23189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (30))){
var inst_23095 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23151_23190 = state_23118__$1;
(statearr_23151_23190[(2)] = inst_23095);

(statearr_23151_23190[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (10))){
var inst_23056 = figwheel.client.heads_up.clear.call(null);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(13),inst_23056);
} else {
if((state_val_23119 === (18))){
var inst_23073 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23152_23191 = state_23118__$1;
(statearr_23152_23191[(2)] = inst_23073);

(statearr_23152_23191[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (8))){
var inst_23046 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23153_23192 = state_23118__$1;
(statearr_23153_23192[(2)] = inst_23046);

(statearr_23153_23192[(1)] = (7));


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
});})(c__19118__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19056__auto__,c__19118__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto____0 = (function (){
var statearr_23157 = [null,null,null,null,null,null,null,null,null];
(statearr_23157[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto__);

(statearr_23157[(1)] = (1));

return statearr_23157;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto____1 = (function (state_23118){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_23118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e23158){if((e23158 instanceof Object)){
var ex__19060__auto__ = e23158;
var statearr_23159_23193 = state_23118;
(statearr_23159_23193[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23194 = state_23118;
state_23118 = G__23194;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto__ = function(state_23118){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto____1.call(this,state_23118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__,msg_hist,msg_names,msg))
})();
var state__19120__auto__ = (function (){var statearr_23160 = f__19119__auto__.call(null);
(statearr_23160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_23160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__,msg_hist,msg_names,msg))
);

return c__19118__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19118__auto___23257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___23257,ch){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___23257,ch){
return (function (state_23240){
var state_val_23241 = (state_23240[(1)]);
if((state_val_23241 === (1))){
var state_23240__$1 = state_23240;
var statearr_23242_23258 = state_23240__$1;
(statearr_23242_23258[(2)] = null);

(statearr_23242_23258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (2))){
var state_23240__$1 = state_23240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23240__$1,(4),ch);
} else {
if((state_val_23241 === (3))){
var inst_23238 = (state_23240[(2)]);
var state_23240__$1 = state_23240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23240__$1,inst_23238);
} else {
if((state_val_23241 === (4))){
var inst_23228 = (state_23240[(7)]);
var inst_23228__$1 = (state_23240[(2)]);
var state_23240__$1 = (function (){var statearr_23243 = state_23240;
(statearr_23243[(7)] = inst_23228__$1);

return statearr_23243;
})();
if(cljs.core.truth_(inst_23228__$1)){
var statearr_23244_23259 = state_23240__$1;
(statearr_23244_23259[(1)] = (5));

} else {
var statearr_23245_23260 = state_23240__$1;
(statearr_23245_23260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (5))){
var inst_23228 = (state_23240[(7)]);
var inst_23230 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23228);
var state_23240__$1 = state_23240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23240__$1,(8),inst_23230);
} else {
if((state_val_23241 === (6))){
var state_23240__$1 = state_23240;
var statearr_23246_23261 = state_23240__$1;
(statearr_23246_23261[(2)] = null);

(statearr_23246_23261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (7))){
var inst_23236 = (state_23240[(2)]);
var state_23240__$1 = state_23240;
var statearr_23247_23262 = state_23240__$1;
(statearr_23247_23262[(2)] = inst_23236);

(statearr_23247_23262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (8))){
var inst_23232 = (state_23240[(2)]);
var state_23240__$1 = (function (){var statearr_23248 = state_23240;
(statearr_23248[(8)] = inst_23232);

return statearr_23248;
})();
var statearr_23249_23263 = state_23240__$1;
(statearr_23249_23263[(2)] = null);

(statearr_23249_23263[(1)] = (2));


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
});})(c__19118__auto___23257,ch))
;
return ((function (switch__19056__auto__,c__19118__auto___23257,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19057__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19057__auto____0 = (function (){
var statearr_23253 = [null,null,null,null,null,null,null,null,null];
(statearr_23253[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19057__auto__);

(statearr_23253[(1)] = (1));

return statearr_23253;
});
var figwheel$client$heads_up_plugin_$_state_machine__19057__auto____1 = (function (state_23240){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_23240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e23254){if((e23254 instanceof Object)){
var ex__19060__auto__ = e23254;
var statearr_23255_23264 = state_23240;
(statearr_23255_23264[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23265 = state_23240;
state_23240 = G__23265;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19057__auto__ = function(state_23240){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19057__auto____1.call(this,state_23240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19057__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19057__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___23257,ch))
})();
var state__19120__auto__ = (function (){var statearr_23256 = f__19119__auto__.call(null);
(statearr_23256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___23257);

return statearr_23256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___23257,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_23286){
var state_val_23287 = (state_23286[(1)]);
if((state_val_23287 === (1))){
var inst_23281 = cljs.core.async.timeout.call(null,(3000));
var state_23286__$1 = state_23286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23286__$1,(2),inst_23281);
} else {
if((state_val_23287 === (2))){
var inst_23283 = (state_23286[(2)]);
var inst_23284 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23286__$1 = (function (){var statearr_23288 = state_23286;
(statearr_23288[(7)] = inst_23283);

return statearr_23288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23286__$1,inst_23284);
} else {
return null;
}
}
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19057__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19057__auto____0 = (function (){
var statearr_23292 = [null,null,null,null,null,null,null,null];
(statearr_23292[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19057__auto__);

(statearr_23292[(1)] = (1));

return statearr_23292;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19057__auto____1 = (function (state_23286){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_23286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e23293){if((e23293 instanceof Object)){
var ex__19060__auto__ = e23293;
var statearr_23294_23296 = state_23286;
(statearr_23294_23296[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23297 = state_23286;
state_23286 = G__23297;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19057__auto__ = function(state_23286){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19057__auto____1.call(this,state_23286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19057__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19057__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_23295 = f__19119__auto__.call(null);
(statearr_23295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_23295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__23298){
var map__23304 = p__23298;
var map__23304__$1 = ((cljs.core.seq_QMARK_.call(null,map__23304))?cljs.core.apply.call(null,cljs.core.hash_map,map__23304):map__23304);
var ed = map__23304__$1;
var formatted_exception = cljs.core.get.call(null,map__23304__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__23304__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__23304__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23305_23309 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23306_23310 = null;
var count__23307_23311 = (0);
var i__23308_23312 = (0);
while(true){
if((i__23308_23312 < count__23307_23311)){
var msg_23313 = cljs.core._nth.call(null,chunk__23306_23310,i__23308_23312);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23313);

var G__23314 = seq__23305_23309;
var G__23315 = chunk__23306_23310;
var G__23316 = count__23307_23311;
var G__23317 = (i__23308_23312 + (1));
seq__23305_23309 = G__23314;
chunk__23306_23310 = G__23315;
count__23307_23311 = G__23316;
i__23308_23312 = G__23317;
continue;
} else {
var temp__4425__auto___23318 = cljs.core.seq.call(null,seq__23305_23309);
if(temp__4425__auto___23318){
var seq__23305_23319__$1 = temp__4425__auto___23318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23305_23319__$1)){
var c__16893__auto___23320 = cljs.core.chunk_first.call(null,seq__23305_23319__$1);
var G__23321 = cljs.core.chunk_rest.call(null,seq__23305_23319__$1);
var G__23322 = c__16893__auto___23320;
var G__23323 = cljs.core.count.call(null,c__16893__auto___23320);
var G__23324 = (0);
seq__23305_23309 = G__23321;
chunk__23306_23310 = G__23322;
count__23307_23311 = G__23323;
i__23308_23312 = G__23324;
continue;
} else {
var msg_23325 = cljs.core.first.call(null,seq__23305_23319__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23325);

var G__23326 = cljs.core.next.call(null,seq__23305_23319__$1);
var G__23327 = null;
var G__23328 = (0);
var G__23329 = (0);
seq__23305_23309 = G__23326;
chunk__23306_23310 = G__23327;
count__23307_23311 = G__23328;
i__23308_23312 = G__23329;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__23330){
var map__23332 = p__23330;
var map__23332__$1 = ((cljs.core.seq_QMARK_.call(null,map__23332))?cljs.core.apply.call(null,cljs.core.hash_map,map__23332):map__23332);
var w = map__23332__$1;
var message = cljs.core.get.call(null,map__23332__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16096__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16096__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16096__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__23339 = cljs.core.seq.call(null,plugins);
var chunk__23340 = null;
var count__23341 = (0);
var i__23342 = (0);
while(true){
if((i__23342 < count__23341)){
var vec__23343 = cljs.core._nth.call(null,chunk__23340,i__23342);
var k = cljs.core.nth.call(null,vec__23343,(0),null);
var plugin = cljs.core.nth.call(null,vec__23343,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23345 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23339,chunk__23340,count__23341,i__23342,pl_23345,vec__23343,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23345.call(null,msg_hist);
});})(seq__23339,chunk__23340,count__23341,i__23342,pl_23345,vec__23343,k,plugin))
);
} else {
}

var G__23346 = seq__23339;
var G__23347 = chunk__23340;
var G__23348 = count__23341;
var G__23349 = (i__23342 + (1));
seq__23339 = G__23346;
chunk__23340 = G__23347;
count__23341 = G__23348;
i__23342 = G__23349;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23339);
if(temp__4425__auto__){
var seq__23339__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23339__$1)){
var c__16893__auto__ = cljs.core.chunk_first.call(null,seq__23339__$1);
var G__23350 = cljs.core.chunk_rest.call(null,seq__23339__$1);
var G__23351 = c__16893__auto__;
var G__23352 = cljs.core.count.call(null,c__16893__auto__);
var G__23353 = (0);
seq__23339 = G__23350;
chunk__23340 = G__23351;
count__23341 = G__23352;
i__23342 = G__23353;
continue;
} else {
var vec__23344 = cljs.core.first.call(null,seq__23339__$1);
var k = cljs.core.nth.call(null,vec__23344,(0),null);
var plugin = cljs.core.nth.call(null,vec__23344,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23354 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23339,chunk__23340,count__23341,i__23342,pl_23354,vec__23344,k,plugin,seq__23339__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23354.call(null,msg_hist);
});})(seq__23339,chunk__23340,count__23341,i__23342,pl_23354,vec__23344,k,plugin,seq__23339__$1,temp__4425__auto__))
);
} else {
}

var G__23355 = cljs.core.next.call(null,seq__23339__$1);
var G__23356 = null;
var G__23357 = (0);
var G__23358 = (0);
seq__23339 = G__23355;
chunk__23340 = G__23356;
count__23341 = G__23357;
i__23342 = G__23358;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__23360 = arguments.length;
switch (G__23360) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17148__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17148__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__23363){
var map__23364 = p__23363;
var map__23364__$1 = ((cljs.core.seq_QMARK_.call(null,map__23364))?cljs.core.apply.call(null,cljs.core.hash_map,map__23364):map__23364);
var opts = map__23364__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq23362){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23362));
});

//# sourceMappingURL=client.js.map?rel=1468806596100