// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17148__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17148__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23517_23525 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23518_23526 = null;
var count__23519_23527 = (0);
var i__23520_23528 = (0);
while(true){
if((i__23520_23528 < count__23519_23527)){
var k_23529 = cljs.core._nth.call(null,chunk__23518_23526,i__23520_23528);
e.setAttribute(cljs.core.name.call(null,k_23529),cljs.core.get.call(null,attrs,k_23529));

var G__23530 = seq__23517_23525;
var G__23531 = chunk__23518_23526;
var G__23532 = count__23519_23527;
var G__23533 = (i__23520_23528 + (1));
seq__23517_23525 = G__23530;
chunk__23518_23526 = G__23531;
count__23519_23527 = G__23532;
i__23520_23528 = G__23533;
continue;
} else {
var temp__4425__auto___23534 = cljs.core.seq.call(null,seq__23517_23525);
if(temp__4425__auto___23534){
var seq__23517_23535__$1 = temp__4425__auto___23534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23517_23535__$1)){
var c__16893__auto___23536 = cljs.core.chunk_first.call(null,seq__23517_23535__$1);
var G__23537 = cljs.core.chunk_rest.call(null,seq__23517_23535__$1);
var G__23538 = c__16893__auto___23536;
var G__23539 = cljs.core.count.call(null,c__16893__auto___23536);
var G__23540 = (0);
seq__23517_23525 = G__23537;
chunk__23518_23526 = G__23538;
count__23519_23527 = G__23539;
i__23520_23528 = G__23540;
continue;
} else {
var k_23541 = cljs.core.first.call(null,seq__23517_23535__$1);
e.setAttribute(cljs.core.name.call(null,k_23541),cljs.core.get.call(null,attrs,k_23541));

var G__23542 = cljs.core.next.call(null,seq__23517_23535__$1);
var G__23543 = null;
var G__23544 = (0);
var G__23545 = (0);
seq__23517_23525 = G__23542;
chunk__23518_23526 = G__23543;
count__23519_23527 = G__23544;
i__23520_23528 = G__23545;
continue;
}
} else {
}
}
break;
}

var seq__23521_23546 = cljs.core.seq.call(null,children);
var chunk__23522_23547 = null;
var count__23523_23548 = (0);
var i__23524_23549 = (0);
while(true){
if((i__23524_23549 < count__23523_23548)){
var ch_23550 = cljs.core._nth.call(null,chunk__23522_23547,i__23524_23549);
e.appendChild(ch_23550);

var G__23551 = seq__23521_23546;
var G__23552 = chunk__23522_23547;
var G__23553 = count__23523_23548;
var G__23554 = (i__23524_23549 + (1));
seq__23521_23546 = G__23551;
chunk__23522_23547 = G__23552;
count__23523_23548 = G__23553;
i__23524_23549 = G__23554;
continue;
} else {
var temp__4425__auto___23555 = cljs.core.seq.call(null,seq__23521_23546);
if(temp__4425__auto___23555){
var seq__23521_23556__$1 = temp__4425__auto___23555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23521_23556__$1)){
var c__16893__auto___23557 = cljs.core.chunk_first.call(null,seq__23521_23556__$1);
var G__23558 = cljs.core.chunk_rest.call(null,seq__23521_23556__$1);
var G__23559 = c__16893__auto___23557;
var G__23560 = cljs.core.count.call(null,c__16893__auto___23557);
var G__23561 = (0);
seq__23521_23546 = G__23558;
chunk__23522_23547 = G__23559;
count__23523_23548 = G__23560;
i__23524_23549 = G__23561;
continue;
} else {
var ch_23562 = cljs.core.first.call(null,seq__23521_23556__$1);
e.appendChild(ch_23562);

var G__23563 = cljs.core.next.call(null,seq__23521_23556__$1);
var G__23564 = null;
var G__23565 = (0);
var G__23566 = (0);
seq__23521_23546 = G__23563;
chunk__23522_23547 = G__23564;
count__23523_23548 = G__23565;
i__23524_23549 = G__23566;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23514){
var G__23515 = cljs.core.first.call(null,seq23514);
var seq23514__$1 = cljs.core.next.call(null,seq23514);
var G__23516 = cljs.core.first.call(null,seq23514__$1);
var seq23514__$2 = cljs.core.next.call(null,seq23514__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23515,G__23516,seq23514__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17007__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17003__auto__,prefer_table__17004__auto__,method_cache__17005__auto__,cached_hierarchy__17006__auto__,hierarchy__17007__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17003__auto__,prefer_table__17004__auto__,method_cache__17005__auto__,cached_hierarchy__17006__auto__,hierarchy__17007__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17007__auto__,method_table__17003__auto__,prefer_table__17004__auto__,method_cache__17005__auto__,cached_hierarchy__17006__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23567 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23567.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23567.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_23567.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23567);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23568,st_map){
var map__23572 = p__23568;
var map__23572__$1 = ((cljs.core.seq_QMARK_.call(null,map__23572))?cljs.core.apply.call(null,cljs.core.hash_map,map__23572):map__23572);
var container_el = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23572,map__23572__$1,container_el){
return (function (p__23573){
var vec__23574 = p__23573;
var k = cljs.core.nth.call(null,vec__23574,(0),null);
var v = cljs.core.nth.call(null,vec__23574,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23572,map__23572__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23575,dom_str){
var map__23577 = p__23575;
var map__23577__$1 = ((cljs.core.seq_QMARK_.call(null,map__23577))?cljs.core.apply.call(null,cljs.core.hash_map,map__23577):map__23577);
var c = map__23577__$1;
var content_area_el = cljs.core.get.call(null,map__23577__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23578){
var map__23580 = p__23578;
var map__23580__$1 = ((cljs.core.seq_QMARK_.call(null,map__23580))?cljs.core.apply.call(null,cljs.core.hash_map,map__23580):map__23580);
var content_area_el = cljs.core.get.call(null,map__23580__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_23622){
var state_val_23623 = (state_23622[(1)]);
if((state_val_23623 === (1))){
var inst_23607 = (state_23622[(7)]);
var inst_23607__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23608 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23609 = ["10px","10px","100%","68px","1.0"];
var inst_23610 = cljs.core.PersistentHashMap.fromArrays(inst_23608,inst_23609);
var inst_23611 = cljs.core.merge.call(null,inst_23610,style);
var inst_23612 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23607__$1,inst_23611);
var inst_23613 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23607__$1,msg);
var inst_23614 = cljs.core.async.timeout.call(null,(300));
var state_23622__$1 = (function (){var statearr_23624 = state_23622;
(statearr_23624[(8)] = inst_23613);

(statearr_23624[(7)] = inst_23607__$1);

(statearr_23624[(9)] = inst_23612);

return statearr_23624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23622__$1,(2),inst_23614);
} else {
if((state_val_23623 === (2))){
var inst_23607 = (state_23622[(7)]);
var inst_23616 = (state_23622[(2)]);
var inst_23617 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23618 = ["auto"];
var inst_23619 = cljs.core.PersistentHashMap.fromArrays(inst_23617,inst_23618);
var inst_23620 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23607,inst_23619);
var state_23622__$1 = (function (){var statearr_23625 = state_23622;
(statearr_23625[(10)] = inst_23616);

return statearr_23625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23622__$1,inst_23620);
} else {
return null;
}
}
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto____0 = (function (){
var statearr_23629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23629[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto__);

(statearr_23629[(1)] = (1));

return statearr_23629;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto____1 = (function (state_23622){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_23622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e23630){if((e23630 instanceof Object)){
var ex__19060__auto__ = e23630;
var statearr_23631_23633 = state_23622;
(statearr_23631_23633[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23634 = state_23622;
state_23622 = G__23634;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto__ = function(state_23622){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto____1.call(this,state_23622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_23632 = f__19119__auto__.call(null);
(statearr_23632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_23632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__23636 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__23636,(0),null);
var ln = cljs.core.nth.call(null,vec__23636,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23639 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23639,(0),null);
var file_line = cljs.core.nth.call(null,vec__23639,(1),null);
var file_column = cljs.core.nth.call(null,vec__23639,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23639,file_name,file_line,file_column){
return (function (p1__23637_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23637_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23639,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16108__auto__ = file_line;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
var and__16096__auto__ = cause;
if(cljs.core.truth_(and__16096__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16096__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__23641 = figwheel.client.heads_up.ensure_container.call(null);
var map__23641__$1 = ((cljs.core.seq_QMARK_.call(null,map__23641))?cljs.core.apply.call(null,cljs.core.hash_map,map__23641):map__23641);
var content_area_el = cljs.core.get.call(null,map__23641__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_23688){
var state_val_23689 = (state_23688[(1)]);
if((state_val_23689 === (1))){
var inst_23671 = (state_23688[(7)]);
var inst_23671__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23672 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23673 = ["0.0"];
var inst_23674 = cljs.core.PersistentHashMap.fromArrays(inst_23672,inst_23673);
var inst_23675 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23671__$1,inst_23674);
var inst_23676 = cljs.core.async.timeout.call(null,(300));
var state_23688__$1 = (function (){var statearr_23690 = state_23688;
(statearr_23690[(8)] = inst_23675);

(statearr_23690[(7)] = inst_23671__$1);

return statearr_23690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23688__$1,(2),inst_23676);
} else {
if((state_val_23689 === (2))){
var inst_23671 = (state_23688[(7)]);
var inst_23678 = (state_23688[(2)]);
var inst_23679 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23680 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23681 = cljs.core.PersistentHashMap.fromArrays(inst_23679,inst_23680);
var inst_23682 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23671,inst_23681);
var inst_23683 = cljs.core.async.timeout.call(null,(200));
var state_23688__$1 = (function (){var statearr_23691 = state_23688;
(statearr_23691[(9)] = inst_23678);

(statearr_23691[(10)] = inst_23682);

return statearr_23691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23688__$1,(3),inst_23683);
} else {
if((state_val_23689 === (3))){
var inst_23671 = (state_23688[(7)]);
var inst_23685 = (state_23688[(2)]);
var inst_23686 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23671,"");
var state_23688__$1 = (function (){var statearr_23692 = state_23688;
(statearr_23692[(11)] = inst_23685);

return statearr_23692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23688__$1,inst_23686);
} else {
return null;
}
}
}
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19057__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19057__auto____0 = (function (){
var statearr_23696 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23696[(0)] = figwheel$client$heads_up$clear_$_state_machine__19057__auto__);

(statearr_23696[(1)] = (1));

return statearr_23696;
});
var figwheel$client$heads_up$clear_$_state_machine__19057__auto____1 = (function (state_23688){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_23688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e23697){if((e23697 instanceof Object)){
var ex__19060__auto__ = e23697;
var statearr_23698_23700 = state_23688;
(statearr_23698_23700[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23701 = state_23688;
state_23688 = G__23701;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19057__auto__ = function(state_23688){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19057__auto____1.call(this,state_23688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19057__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19057__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_23699 = f__19119__auto__.call(null);
(statearr_23699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_23699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_23733){
var state_val_23734 = (state_23733[(1)]);
if((state_val_23734 === (1))){
var inst_23723 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23733__$1 = state_23733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23733__$1,(2),inst_23723);
} else {
if((state_val_23734 === (2))){
var inst_23725 = (state_23733[(2)]);
var inst_23726 = cljs.core.async.timeout.call(null,(400));
var state_23733__$1 = (function (){var statearr_23735 = state_23733;
(statearr_23735[(7)] = inst_23725);

return statearr_23735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23733__$1,(3),inst_23726);
} else {
if((state_val_23734 === (3))){
var inst_23728 = (state_23733[(2)]);
var inst_23729 = figwheel.client.heads_up.clear.call(null);
var state_23733__$1 = (function (){var statearr_23736 = state_23733;
(statearr_23736[(8)] = inst_23728);

return statearr_23736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23733__$1,(4),inst_23729);
} else {
if((state_val_23734 === (4))){
var inst_23731 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23733__$1,inst_23731);
} else {
return null;
}
}
}
}
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto____0 = (function (){
var statearr_23740 = [null,null,null,null,null,null,null,null,null];
(statearr_23740[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto__);

(statearr_23740[(1)] = (1));

return statearr_23740;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto____1 = (function (state_23733){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_23733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e23741){if((e23741 instanceof Object)){
var ex__19060__auto__ = e23741;
var statearr_23742_23744 = state_23733;
(statearr_23742_23744[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23745 = state_23733;
state_23733 = G__23745;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto__ = function(state_23733){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto____1.call(this,state_23733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_23743 = f__19119__auto__.call(null);
(statearr_23743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_23743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1468806596915