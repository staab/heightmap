// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23760_23772 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23761_23773 = null;
var count__23762_23774 = (0);
var i__23763_23775 = (0);
while(true){
if((i__23763_23775 < count__23762_23774)){
var f_23776 = cljs.core._nth.call(null,chunk__23761_23773,i__23763_23775);
cljs.core.println.call(null,"  ",f_23776);

var G__23777 = seq__23760_23772;
var G__23778 = chunk__23761_23773;
var G__23779 = count__23762_23774;
var G__23780 = (i__23763_23775 + (1));
seq__23760_23772 = G__23777;
chunk__23761_23773 = G__23778;
count__23762_23774 = G__23779;
i__23763_23775 = G__23780;
continue;
} else {
var temp__4425__auto___23781 = cljs.core.seq.call(null,seq__23760_23772);
if(temp__4425__auto___23781){
var seq__23760_23782__$1 = temp__4425__auto___23781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23760_23782__$1)){
var c__16893__auto___23783 = cljs.core.chunk_first.call(null,seq__23760_23782__$1);
var G__23784 = cljs.core.chunk_rest.call(null,seq__23760_23782__$1);
var G__23785 = c__16893__auto___23783;
var G__23786 = cljs.core.count.call(null,c__16893__auto___23783);
var G__23787 = (0);
seq__23760_23772 = G__23784;
chunk__23761_23773 = G__23785;
count__23762_23774 = G__23786;
i__23763_23775 = G__23787;
continue;
} else {
var f_23788 = cljs.core.first.call(null,seq__23760_23782__$1);
cljs.core.println.call(null,"  ",f_23788);

var G__23789 = cljs.core.next.call(null,seq__23760_23782__$1);
var G__23790 = null;
var G__23791 = (0);
var G__23792 = (0);
seq__23760_23772 = G__23789;
chunk__23761_23773 = G__23790;
count__23762_23774 = G__23791;
i__23763_23775 = G__23792;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23793 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16108__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23793);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23793)))?cljs.core.second.call(null,arglists_23793):arglists_23793));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23764 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23765 = null;
var count__23766 = (0);
var i__23767 = (0);
while(true){
if((i__23767 < count__23766)){
var vec__23768 = cljs.core._nth.call(null,chunk__23765,i__23767);
var name = cljs.core.nth.call(null,vec__23768,(0),null);
var map__23769 = cljs.core.nth.call(null,vec__23768,(1),null);
var map__23769__$1 = ((cljs.core.seq_QMARK_.call(null,map__23769))?cljs.core.apply.call(null,cljs.core.hash_map,map__23769):map__23769);
var doc = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23794 = seq__23764;
var G__23795 = chunk__23765;
var G__23796 = count__23766;
var G__23797 = (i__23767 + (1));
seq__23764 = G__23794;
chunk__23765 = G__23795;
count__23766 = G__23796;
i__23767 = G__23797;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23764);
if(temp__4425__auto__){
var seq__23764__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23764__$1)){
var c__16893__auto__ = cljs.core.chunk_first.call(null,seq__23764__$1);
var G__23798 = cljs.core.chunk_rest.call(null,seq__23764__$1);
var G__23799 = c__16893__auto__;
var G__23800 = cljs.core.count.call(null,c__16893__auto__);
var G__23801 = (0);
seq__23764 = G__23798;
chunk__23765 = G__23799;
count__23766 = G__23800;
i__23767 = G__23801;
continue;
} else {
var vec__23770 = cljs.core.first.call(null,seq__23764__$1);
var name = cljs.core.nth.call(null,vec__23770,(0),null);
var map__23771 = cljs.core.nth.call(null,vec__23770,(1),null);
var map__23771__$1 = ((cljs.core.seq_QMARK_.call(null,map__23771))?cljs.core.apply.call(null,cljs.core.hash_map,map__23771):map__23771);
var doc = cljs.core.get.call(null,map__23771__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23771__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23802 = cljs.core.next.call(null,seq__23764__$1);
var G__23803 = null;
var G__23804 = (0);
var G__23805 = (0);
seq__23764 = G__23802;
chunk__23765 = G__23803;
count__23766 = G__23804;
i__23767 = G__23805;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1468806597003