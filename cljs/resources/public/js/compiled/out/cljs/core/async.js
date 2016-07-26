// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24542 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24542 = (function (fn_handler,f,meta24543){
this.fn_handler = fn_handler;
this.f = f;
this.meta24543 = meta24543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24544,meta24543__$1){
var self__ = this;
var _24544__$1 = this;
return (new cljs.core.async.t24542(self__.fn_handler,self__.f,meta24543__$1));
});

cljs.core.async.t24542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24544){
var self__ = this;
var _24544__$1 = this;
return self__.meta24543;
});

cljs.core.async.t24542.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24543","meta24543",739633167,null)], null);
});

cljs.core.async.t24542.cljs$lang$type = true;

cljs.core.async.t24542.cljs$lang$ctorStr = "cljs.core.async/t24542";

cljs.core.async.t24542.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t24542");
});

cljs.core.async.__GT_t24542 = (function cljs$core$async$fn_handler_$___GT_t24542(fn_handler__$1,f__$1,meta24543){
return (new cljs.core.async.t24542(fn_handler__$1,f__$1,meta24543));
});

}

return (new cljs.core.async.t24542(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__24546 = buff;
if(G__24546){
var bit__16782__auto__ = null;
if(cljs.core.truth_((function (){var or__16108__auto__ = bit__16782__auto__;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return G__24546.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24546.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24546);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24546);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__24548 = arguments.length;
switch (G__24548) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__24551 = arguments.length;
switch (G__24551) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24553 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24553);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24553,ret){
return (function (){
return fn1.call(null,val_24553);
});})(val_24553,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__24555 = arguments.length;
switch (G__24555) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16993__auto___24557 = n;
var x_24558 = (0);
while(true){
if((x_24558 < n__16993__auto___24557)){
(a[x_24558] = (0));

var G__24559 = (x_24558 + (1));
x_24558 = G__24559;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24560 = (i + (1));
i = G__24560;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24564 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24564 = (function (alt_flag,flag,meta24565){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24565 = meta24565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24566,meta24565__$1){
var self__ = this;
var _24566__$1 = this;
return (new cljs.core.async.t24564(self__.alt_flag,self__.flag,meta24565__$1));
});})(flag))
;

cljs.core.async.t24564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24566){
var self__ = this;
var _24566__$1 = this;
return self__.meta24565;
});})(flag))
;

cljs.core.async.t24564.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24564.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24565","meta24565",362140153,null)], null);
});})(flag))
;

cljs.core.async.t24564.cljs$lang$type = true;

cljs.core.async.t24564.cljs$lang$ctorStr = "cljs.core.async/t24564";

cljs.core.async.t24564.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t24564");
});})(flag))
;

cljs.core.async.__GT_t24564 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24564(alt_flag__$1,flag__$1,meta24565){
return (new cljs.core.async.t24564(alt_flag__$1,flag__$1,meta24565));
});})(flag))
;

}

return (new cljs.core.async.t24564(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24570 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24570 = (function (alt_handler,flag,cb,meta24571){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24571 = meta24571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24572,meta24571__$1){
var self__ = this;
var _24572__$1 = this;
return (new cljs.core.async.t24570(self__.alt_handler,self__.flag,self__.cb,meta24571__$1));
});

cljs.core.async.t24570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24572){
var self__ = this;
var _24572__$1 = this;
return self__.meta24571;
});

cljs.core.async.t24570.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24571","meta24571",-236897573,null)], null);
});

cljs.core.async.t24570.cljs$lang$type = true;

cljs.core.async.t24570.cljs$lang$ctorStr = "cljs.core.async/t24570";

cljs.core.async.t24570.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t24570");
});

cljs.core.async.__GT_t24570 = (function cljs$core$async$alt_handler_$___GT_t24570(alt_handler__$1,flag__$1,cb__$1,meta24571){
return (new cljs.core.async.t24570(alt_handler__$1,flag__$1,cb__$1,meta24571));
});

}

return (new cljs.core.async.t24570(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24573_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24573_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24574_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24574_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16108__auto__ = wport;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24575 = (i + (1));
i = G__24575;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16108__auto__ = ret;
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16096__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16096__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16096__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17148__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17148__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24578){
var map__24579 = p__24578;
var map__24579__$1 = ((cljs.core.seq_QMARK_.call(null,map__24579))?cljs.core.apply.call(null,cljs.core.hash_map,map__24579):map__24579);
var opts = map__24579__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24576){
var G__24577 = cljs.core.first.call(null,seq24576);
var seq24576__$1 = cljs.core.next.call(null,seq24576);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24577,seq24576__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__24581 = arguments.length;
switch (G__24581) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19118__auto___24630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___24630){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___24630){
return (function (state_24605){
var state_val_24606 = (state_24605[(1)]);
if((state_val_24606 === (7))){
var inst_24601 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
var statearr_24607_24631 = state_24605__$1;
(statearr_24607_24631[(2)] = inst_24601);

(statearr_24607_24631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (1))){
var state_24605__$1 = state_24605;
var statearr_24608_24632 = state_24605__$1;
(statearr_24608_24632[(2)] = null);

(statearr_24608_24632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (4))){
var inst_24584 = (state_24605[(7)]);
var inst_24584__$1 = (state_24605[(2)]);
var inst_24585 = (inst_24584__$1 == null);
var state_24605__$1 = (function (){var statearr_24609 = state_24605;
(statearr_24609[(7)] = inst_24584__$1);

return statearr_24609;
})();
if(cljs.core.truth_(inst_24585)){
var statearr_24610_24633 = state_24605__$1;
(statearr_24610_24633[(1)] = (5));

} else {
var statearr_24611_24634 = state_24605__$1;
(statearr_24611_24634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (13))){
var state_24605__$1 = state_24605;
var statearr_24612_24635 = state_24605__$1;
(statearr_24612_24635[(2)] = null);

(statearr_24612_24635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (6))){
var inst_24584 = (state_24605[(7)]);
var state_24605__$1 = state_24605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24605__$1,(11),to,inst_24584);
} else {
if((state_val_24606 === (3))){
var inst_24603 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24605__$1,inst_24603);
} else {
if((state_val_24606 === (12))){
var state_24605__$1 = state_24605;
var statearr_24613_24636 = state_24605__$1;
(statearr_24613_24636[(2)] = null);

(statearr_24613_24636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (2))){
var state_24605__$1 = state_24605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24605__$1,(4),from);
} else {
if((state_val_24606 === (11))){
var inst_24594 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
if(cljs.core.truth_(inst_24594)){
var statearr_24614_24637 = state_24605__$1;
(statearr_24614_24637[(1)] = (12));

} else {
var statearr_24615_24638 = state_24605__$1;
(statearr_24615_24638[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (9))){
var state_24605__$1 = state_24605;
var statearr_24616_24639 = state_24605__$1;
(statearr_24616_24639[(2)] = null);

(statearr_24616_24639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (5))){
var state_24605__$1 = state_24605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24617_24640 = state_24605__$1;
(statearr_24617_24640[(1)] = (8));

} else {
var statearr_24618_24641 = state_24605__$1;
(statearr_24618_24641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (14))){
var inst_24599 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
var statearr_24619_24642 = state_24605__$1;
(statearr_24619_24642[(2)] = inst_24599);

(statearr_24619_24642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (10))){
var inst_24591 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
var statearr_24620_24643 = state_24605__$1;
(statearr_24620_24643[(2)] = inst_24591);

(statearr_24620_24643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (8))){
var inst_24588 = cljs.core.async.close_BANG_.call(null,to);
var state_24605__$1 = state_24605;
var statearr_24621_24644 = state_24605__$1;
(statearr_24621_24644[(2)] = inst_24588);

(statearr_24621_24644[(1)] = (10));


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
});})(c__19118__auto___24630))
;
return ((function (switch__19056__auto__,c__19118__auto___24630){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_24625 = [null,null,null,null,null,null,null,null];
(statearr_24625[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_24625[(1)] = (1));

return statearr_24625;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_24605){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24626){if((e24626 instanceof Object)){
var ex__19060__auto__ = e24626;
var statearr_24627_24645 = state_24605;
(statearr_24627_24645[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24646 = state_24605;
state_24605 = G__24646;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_24605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_24605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___24630))
})();
var state__19120__auto__ = (function (){var statearr_24628 = f__19119__auto__.call(null);
(statearr_24628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___24630);

return statearr_24628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___24630))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24830){
var vec__24831 = p__24830;
var v = cljs.core.nth.call(null,vec__24831,(0),null);
var p = cljs.core.nth.call(null,vec__24831,(1),null);
var job = vec__24831;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19118__auto___25013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___25013,res,vec__24831,v,p,job,jobs,results){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___25013,res,vec__24831,v,p,job,jobs,results){
return (function (state_24836){
var state_val_24837 = (state_24836[(1)]);
if((state_val_24837 === (1))){
var state_24836__$1 = state_24836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24836__$1,(2),res,v);
} else {
if((state_val_24837 === (2))){
var inst_24833 = (state_24836[(2)]);
var inst_24834 = cljs.core.async.close_BANG_.call(null,res);
var state_24836__$1 = (function (){var statearr_24838 = state_24836;
(statearr_24838[(7)] = inst_24833);

return statearr_24838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24836__$1,inst_24834);
} else {
return null;
}
}
});})(c__19118__auto___25013,res,vec__24831,v,p,job,jobs,results))
;
return ((function (switch__19056__auto__,c__19118__auto___25013,res,vec__24831,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_24842 = [null,null,null,null,null,null,null,null];
(statearr_24842[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_24842[(1)] = (1));

return statearr_24842;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24836){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24843){if((e24843 instanceof Object)){
var ex__19060__auto__ = e24843;
var statearr_24844_25014 = state_24836;
(statearr_24844_25014[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25015 = state_24836;
state_24836 = G__25015;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___25013,res,vec__24831,v,p,job,jobs,results))
})();
var state__19120__auto__ = (function (){var statearr_24845 = f__19119__auto__.call(null);
(statearr_24845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25013);

return statearr_24845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___25013,res,vec__24831,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24846){
var vec__24847 = p__24846;
var v = cljs.core.nth.call(null,vec__24847,(0),null);
var p = cljs.core.nth.call(null,vec__24847,(1),null);
var job = vec__24847;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16993__auto___25016 = n;
var __25017 = (0);
while(true){
if((__25017 < n__16993__auto___25016)){
var G__24848_25018 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24848_25018) {
case "compute":
var c__19118__auto___25020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25017,c__19118__auto___25020,G__24848_25018,n__16993__auto___25016,jobs,results,process,async){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (__25017,c__19118__auto___25020,G__24848_25018,n__16993__auto___25016,jobs,results,process,async){
return (function (state_24861){
var state_val_24862 = (state_24861[(1)]);
if((state_val_24862 === (1))){
var state_24861__$1 = state_24861;
var statearr_24863_25021 = state_24861__$1;
(statearr_24863_25021[(2)] = null);

(statearr_24863_25021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (2))){
var state_24861__$1 = state_24861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24861__$1,(4),jobs);
} else {
if((state_val_24862 === (3))){
var inst_24859 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24861__$1,inst_24859);
} else {
if((state_val_24862 === (4))){
var inst_24851 = (state_24861[(2)]);
var inst_24852 = process.call(null,inst_24851);
var state_24861__$1 = state_24861;
if(cljs.core.truth_(inst_24852)){
var statearr_24864_25022 = state_24861__$1;
(statearr_24864_25022[(1)] = (5));

} else {
var statearr_24865_25023 = state_24861__$1;
(statearr_24865_25023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (5))){
var state_24861__$1 = state_24861;
var statearr_24866_25024 = state_24861__$1;
(statearr_24866_25024[(2)] = null);

(statearr_24866_25024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (6))){
var state_24861__$1 = state_24861;
var statearr_24867_25025 = state_24861__$1;
(statearr_24867_25025[(2)] = null);

(statearr_24867_25025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24862 === (7))){
var inst_24857 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
var statearr_24868_25026 = state_24861__$1;
(statearr_24868_25026[(2)] = inst_24857);

(statearr_24868_25026[(1)] = (3));


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
});})(__25017,c__19118__auto___25020,G__24848_25018,n__16993__auto___25016,jobs,results,process,async))
;
return ((function (__25017,switch__19056__auto__,c__19118__auto___25020,G__24848_25018,n__16993__auto___25016,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_24872 = [null,null,null,null,null,null,null];
(statearr_24872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_24872[(1)] = (1));

return statearr_24872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24861){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24873){if((e24873 instanceof Object)){
var ex__19060__auto__ = e24873;
var statearr_24874_25027 = state_24861;
(statearr_24874_25027[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25028 = state_24861;
state_24861 = G__25028;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(__25017,switch__19056__auto__,c__19118__auto___25020,G__24848_25018,n__16993__auto___25016,jobs,results,process,async))
})();
var state__19120__auto__ = (function (){var statearr_24875 = f__19119__auto__.call(null);
(statearr_24875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25020);

return statearr_24875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(__25017,c__19118__auto___25020,G__24848_25018,n__16993__auto___25016,jobs,results,process,async))
);


break;
case "async":
var c__19118__auto___25029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25017,c__19118__auto___25029,G__24848_25018,n__16993__auto___25016,jobs,results,process,async){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (__25017,c__19118__auto___25029,G__24848_25018,n__16993__auto___25016,jobs,results,process,async){
return (function (state_24888){
var state_val_24889 = (state_24888[(1)]);
if((state_val_24889 === (1))){
var state_24888__$1 = state_24888;
var statearr_24890_25030 = state_24888__$1;
(statearr_24890_25030[(2)] = null);

(statearr_24890_25030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (2))){
var state_24888__$1 = state_24888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24888__$1,(4),jobs);
} else {
if((state_val_24889 === (3))){
var inst_24886 = (state_24888[(2)]);
var state_24888__$1 = state_24888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24888__$1,inst_24886);
} else {
if((state_val_24889 === (4))){
var inst_24878 = (state_24888[(2)]);
var inst_24879 = async.call(null,inst_24878);
var state_24888__$1 = state_24888;
if(cljs.core.truth_(inst_24879)){
var statearr_24891_25031 = state_24888__$1;
(statearr_24891_25031[(1)] = (5));

} else {
var statearr_24892_25032 = state_24888__$1;
(statearr_24892_25032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (5))){
var state_24888__$1 = state_24888;
var statearr_24893_25033 = state_24888__$1;
(statearr_24893_25033[(2)] = null);

(statearr_24893_25033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (6))){
var state_24888__$1 = state_24888;
var statearr_24894_25034 = state_24888__$1;
(statearr_24894_25034[(2)] = null);

(statearr_24894_25034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (7))){
var inst_24884 = (state_24888[(2)]);
var state_24888__$1 = state_24888;
var statearr_24895_25035 = state_24888__$1;
(statearr_24895_25035[(2)] = inst_24884);

(statearr_24895_25035[(1)] = (3));


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
});})(__25017,c__19118__auto___25029,G__24848_25018,n__16993__auto___25016,jobs,results,process,async))
;
return ((function (__25017,switch__19056__auto__,c__19118__auto___25029,G__24848_25018,n__16993__auto___25016,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_24899 = [null,null,null,null,null,null,null];
(statearr_24899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_24899[(1)] = (1));

return statearr_24899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24888){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24900){if((e24900 instanceof Object)){
var ex__19060__auto__ = e24900;
var statearr_24901_25036 = state_24888;
(statearr_24901_25036[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25037 = state_24888;
state_24888 = G__25037;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(__25017,switch__19056__auto__,c__19118__auto___25029,G__24848_25018,n__16993__auto___25016,jobs,results,process,async))
})();
var state__19120__auto__ = (function (){var statearr_24902 = f__19119__auto__.call(null);
(statearr_24902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25029);

return statearr_24902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(__25017,c__19118__auto___25029,G__24848_25018,n__16993__auto___25016,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25038 = (__25017 + (1));
__25017 = G__25038;
continue;
} else {
}
break;
}

var c__19118__auto___25039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___25039,jobs,results,process,async){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___25039,jobs,results,process,async){
return (function (state_24924){
var state_val_24925 = (state_24924[(1)]);
if((state_val_24925 === (1))){
var state_24924__$1 = state_24924;
var statearr_24926_25040 = state_24924__$1;
(statearr_24926_25040[(2)] = null);

(statearr_24926_25040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (2))){
var state_24924__$1 = state_24924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24924__$1,(4),from);
} else {
if((state_val_24925 === (3))){
var inst_24922 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24924__$1,inst_24922);
} else {
if((state_val_24925 === (4))){
var inst_24905 = (state_24924[(7)]);
var inst_24905__$1 = (state_24924[(2)]);
var inst_24906 = (inst_24905__$1 == null);
var state_24924__$1 = (function (){var statearr_24927 = state_24924;
(statearr_24927[(7)] = inst_24905__$1);

return statearr_24927;
})();
if(cljs.core.truth_(inst_24906)){
var statearr_24928_25041 = state_24924__$1;
(statearr_24928_25041[(1)] = (5));

} else {
var statearr_24929_25042 = state_24924__$1;
(statearr_24929_25042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (5))){
var inst_24908 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24924__$1 = state_24924;
var statearr_24930_25043 = state_24924__$1;
(statearr_24930_25043[(2)] = inst_24908);

(statearr_24930_25043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (6))){
var inst_24905 = (state_24924[(7)]);
var inst_24910 = (state_24924[(8)]);
var inst_24910__$1 = cljs.core.async.chan.call(null,(1));
var inst_24911 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24912 = [inst_24905,inst_24910__$1];
var inst_24913 = (new cljs.core.PersistentVector(null,2,(5),inst_24911,inst_24912,null));
var state_24924__$1 = (function (){var statearr_24931 = state_24924;
(statearr_24931[(8)] = inst_24910__$1);

return statearr_24931;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24924__$1,(8),jobs,inst_24913);
} else {
if((state_val_24925 === (7))){
var inst_24920 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
var statearr_24932_25044 = state_24924__$1;
(statearr_24932_25044[(2)] = inst_24920);

(statearr_24932_25044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (8))){
var inst_24910 = (state_24924[(8)]);
var inst_24915 = (state_24924[(2)]);
var state_24924__$1 = (function (){var statearr_24933 = state_24924;
(statearr_24933[(9)] = inst_24915);

return statearr_24933;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24924__$1,(9),results,inst_24910);
} else {
if((state_val_24925 === (9))){
var inst_24917 = (state_24924[(2)]);
var state_24924__$1 = (function (){var statearr_24934 = state_24924;
(statearr_24934[(10)] = inst_24917);

return statearr_24934;
})();
var statearr_24935_25045 = state_24924__$1;
(statearr_24935_25045[(2)] = null);

(statearr_24935_25045[(1)] = (2));


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
});})(c__19118__auto___25039,jobs,results,process,async))
;
return ((function (switch__19056__auto__,c__19118__auto___25039,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_24939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24939[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_24939[(1)] = (1));

return statearr_24939;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24924){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e24940){if((e24940 instanceof Object)){
var ex__19060__auto__ = e24940;
var statearr_24941_25046 = state_24924;
(statearr_24941_25046[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25047 = state_24924;
state_24924 = G__25047;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___25039,jobs,results,process,async))
})();
var state__19120__auto__ = (function (){var statearr_24942 = f__19119__auto__.call(null);
(statearr_24942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25039);

return statearr_24942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___25039,jobs,results,process,async))
);


var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__,jobs,results,process,async){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__,jobs,results,process,async){
return (function (state_24980){
var state_val_24981 = (state_24980[(1)]);
if((state_val_24981 === (7))){
var inst_24976 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_24982_25048 = state_24980__$1;
(statearr_24982_25048[(2)] = inst_24976);

(statearr_24982_25048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (20))){
var state_24980__$1 = state_24980;
var statearr_24983_25049 = state_24980__$1;
(statearr_24983_25049[(2)] = null);

(statearr_24983_25049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (1))){
var state_24980__$1 = state_24980;
var statearr_24984_25050 = state_24980__$1;
(statearr_24984_25050[(2)] = null);

(statearr_24984_25050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (4))){
var inst_24945 = (state_24980[(7)]);
var inst_24945__$1 = (state_24980[(2)]);
var inst_24946 = (inst_24945__$1 == null);
var state_24980__$1 = (function (){var statearr_24985 = state_24980;
(statearr_24985[(7)] = inst_24945__$1);

return statearr_24985;
})();
if(cljs.core.truth_(inst_24946)){
var statearr_24986_25051 = state_24980__$1;
(statearr_24986_25051[(1)] = (5));

} else {
var statearr_24987_25052 = state_24980__$1;
(statearr_24987_25052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (15))){
var inst_24958 = (state_24980[(8)]);
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24980__$1,(18),to,inst_24958);
} else {
if((state_val_24981 === (21))){
var inst_24971 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_24988_25053 = state_24980__$1;
(statearr_24988_25053[(2)] = inst_24971);

(statearr_24988_25053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (13))){
var inst_24973 = (state_24980[(2)]);
var state_24980__$1 = (function (){var statearr_24989 = state_24980;
(statearr_24989[(9)] = inst_24973);

return statearr_24989;
})();
var statearr_24990_25054 = state_24980__$1;
(statearr_24990_25054[(2)] = null);

(statearr_24990_25054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (6))){
var inst_24945 = (state_24980[(7)]);
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24980__$1,(11),inst_24945);
} else {
if((state_val_24981 === (17))){
var inst_24966 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
if(cljs.core.truth_(inst_24966)){
var statearr_24991_25055 = state_24980__$1;
(statearr_24991_25055[(1)] = (19));

} else {
var statearr_24992_25056 = state_24980__$1;
(statearr_24992_25056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (3))){
var inst_24978 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24980__$1,inst_24978);
} else {
if((state_val_24981 === (12))){
var inst_24955 = (state_24980[(10)]);
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24980__$1,(14),inst_24955);
} else {
if((state_val_24981 === (2))){
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24980__$1,(4),results);
} else {
if((state_val_24981 === (19))){
var state_24980__$1 = state_24980;
var statearr_24993_25057 = state_24980__$1;
(statearr_24993_25057[(2)] = null);

(statearr_24993_25057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (11))){
var inst_24955 = (state_24980[(2)]);
var state_24980__$1 = (function (){var statearr_24994 = state_24980;
(statearr_24994[(10)] = inst_24955);

return statearr_24994;
})();
var statearr_24995_25058 = state_24980__$1;
(statearr_24995_25058[(2)] = null);

(statearr_24995_25058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (9))){
var state_24980__$1 = state_24980;
var statearr_24996_25059 = state_24980__$1;
(statearr_24996_25059[(2)] = null);

(statearr_24996_25059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (5))){
var state_24980__$1 = state_24980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24997_25060 = state_24980__$1;
(statearr_24997_25060[(1)] = (8));

} else {
var statearr_24998_25061 = state_24980__$1;
(statearr_24998_25061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (14))){
var inst_24958 = (state_24980[(8)]);
var inst_24960 = (state_24980[(11)]);
var inst_24958__$1 = (state_24980[(2)]);
var inst_24959 = (inst_24958__$1 == null);
var inst_24960__$1 = cljs.core.not.call(null,inst_24959);
var state_24980__$1 = (function (){var statearr_24999 = state_24980;
(statearr_24999[(8)] = inst_24958__$1);

(statearr_24999[(11)] = inst_24960__$1);

return statearr_24999;
})();
if(inst_24960__$1){
var statearr_25000_25062 = state_24980__$1;
(statearr_25000_25062[(1)] = (15));

} else {
var statearr_25001_25063 = state_24980__$1;
(statearr_25001_25063[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (16))){
var inst_24960 = (state_24980[(11)]);
var state_24980__$1 = state_24980;
var statearr_25002_25064 = state_24980__$1;
(statearr_25002_25064[(2)] = inst_24960);

(statearr_25002_25064[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (10))){
var inst_24952 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_25003_25065 = state_24980__$1;
(statearr_25003_25065[(2)] = inst_24952);

(statearr_25003_25065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (18))){
var inst_24963 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_25004_25066 = state_24980__$1;
(statearr_25004_25066[(2)] = inst_24963);

(statearr_25004_25066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (8))){
var inst_24949 = cljs.core.async.close_BANG_.call(null,to);
var state_24980__$1 = state_24980;
var statearr_25005_25067 = state_24980__$1;
(statearr_25005_25067[(2)] = inst_24949);

(statearr_25005_25067[(1)] = (10));


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
});})(c__19118__auto__,jobs,results,process,async))
;
return ((function (switch__19056__auto__,c__19118__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_25009 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__);

(statearr_25009[(1)] = (1));

return statearr_25009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1 = (function (state_24980){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_24980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25010){if((e25010 instanceof Object)){
var ex__19060__auto__ = e25010;
var statearr_25011_25068 = state_24980;
(statearr_25011_25068[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25069 = state_24980;
state_24980 = G__25069;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__ = function(state_24980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1.call(this,state_24980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__,jobs,results,process,async))
})();
var state__19120__auto__ = (function (){var statearr_25012 = f__19119__auto__.call(null);
(statearr_25012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_25012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__,jobs,results,process,async))
);

return c__19118__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__25071 = arguments.length;
switch (G__25071) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__25074 = arguments.length;
switch (G__25074) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__25077 = arguments.length;
switch (G__25077) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19118__auto___25129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___25129,tc,fc){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___25129,tc,fc){
return (function (state_25103){
var state_val_25104 = (state_25103[(1)]);
if((state_val_25104 === (7))){
var inst_25099 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
var statearr_25105_25130 = state_25103__$1;
(statearr_25105_25130[(2)] = inst_25099);

(statearr_25105_25130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (1))){
var state_25103__$1 = state_25103;
var statearr_25106_25131 = state_25103__$1;
(statearr_25106_25131[(2)] = null);

(statearr_25106_25131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (4))){
var inst_25080 = (state_25103[(7)]);
var inst_25080__$1 = (state_25103[(2)]);
var inst_25081 = (inst_25080__$1 == null);
var state_25103__$1 = (function (){var statearr_25107 = state_25103;
(statearr_25107[(7)] = inst_25080__$1);

return statearr_25107;
})();
if(cljs.core.truth_(inst_25081)){
var statearr_25108_25132 = state_25103__$1;
(statearr_25108_25132[(1)] = (5));

} else {
var statearr_25109_25133 = state_25103__$1;
(statearr_25109_25133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (13))){
var state_25103__$1 = state_25103;
var statearr_25110_25134 = state_25103__$1;
(statearr_25110_25134[(2)] = null);

(statearr_25110_25134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (6))){
var inst_25080 = (state_25103[(7)]);
var inst_25086 = p.call(null,inst_25080);
var state_25103__$1 = state_25103;
if(cljs.core.truth_(inst_25086)){
var statearr_25111_25135 = state_25103__$1;
(statearr_25111_25135[(1)] = (9));

} else {
var statearr_25112_25136 = state_25103__$1;
(statearr_25112_25136[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (3))){
var inst_25101 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25103__$1,inst_25101);
} else {
if((state_val_25104 === (12))){
var state_25103__$1 = state_25103;
var statearr_25113_25137 = state_25103__$1;
(statearr_25113_25137[(2)] = null);

(statearr_25113_25137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (2))){
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25103__$1,(4),ch);
} else {
if((state_val_25104 === (11))){
var inst_25080 = (state_25103[(7)]);
var inst_25090 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25103__$1,(8),inst_25090,inst_25080);
} else {
if((state_val_25104 === (9))){
var state_25103__$1 = state_25103;
var statearr_25114_25138 = state_25103__$1;
(statearr_25114_25138[(2)] = tc);

(statearr_25114_25138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (5))){
var inst_25083 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25084 = cljs.core.async.close_BANG_.call(null,fc);
var state_25103__$1 = (function (){var statearr_25115 = state_25103;
(statearr_25115[(8)] = inst_25083);

return statearr_25115;
})();
var statearr_25116_25139 = state_25103__$1;
(statearr_25116_25139[(2)] = inst_25084);

(statearr_25116_25139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (14))){
var inst_25097 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
var statearr_25117_25140 = state_25103__$1;
(statearr_25117_25140[(2)] = inst_25097);

(statearr_25117_25140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (10))){
var state_25103__$1 = state_25103;
var statearr_25118_25141 = state_25103__$1;
(statearr_25118_25141[(2)] = fc);

(statearr_25118_25141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (8))){
var inst_25092 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
if(cljs.core.truth_(inst_25092)){
var statearr_25119_25142 = state_25103__$1;
(statearr_25119_25142[(1)] = (12));

} else {
var statearr_25120_25143 = state_25103__$1;
(statearr_25120_25143[(1)] = (13));

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
});})(c__19118__auto___25129,tc,fc))
;
return ((function (switch__19056__auto__,c__19118__auto___25129,tc,fc){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_25124 = [null,null,null,null,null,null,null,null,null];
(statearr_25124[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_25124[(1)] = (1));

return statearr_25124;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_25103){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25125){if((e25125 instanceof Object)){
var ex__19060__auto__ = e25125;
var statearr_25126_25144 = state_25103;
(statearr_25126_25144[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25145 = state_25103;
state_25103 = G__25145;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_25103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_25103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___25129,tc,fc))
})();
var state__19120__auto__ = (function (){var statearr_25127 = f__19119__auto__.call(null);
(statearr_25127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25129);

return statearr_25127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___25129,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_25192){
var state_val_25193 = (state_25192[(1)]);
if((state_val_25193 === (1))){
var inst_25178 = init;
var state_25192__$1 = (function (){var statearr_25194 = state_25192;
(statearr_25194[(7)] = inst_25178);

return statearr_25194;
})();
var statearr_25195_25210 = state_25192__$1;
(statearr_25195_25210[(2)] = null);

(statearr_25195_25210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (2))){
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25192__$1,(4),ch);
} else {
if((state_val_25193 === (3))){
var inst_25190 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25192__$1,inst_25190);
} else {
if((state_val_25193 === (4))){
var inst_25181 = (state_25192[(8)]);
var inst_25181__$1 = (state_25192[(2)]);
var inst_25182 = (inst_25181__$1 == null);
var state_25192__$1 = (function (){var statearr_25196 = state_25192;
(statearr_25196[(8)] = inst_25181__$1);

return statearr_25196;
})();
if(cljs.core.truth_(inst_25182)){
var statearr_25197_25211 = state_25192__$1;
(statearr_25197_25211[(1)] = (5));

} else {
var statearr_25198_25212 = state_25192__$1;
(statearr_25198_25212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (5))){
var inst_25178 = (state_25192[(7)]);
var state_25192__$1 = state_25192;
var statearr_25199_25213 = state_25192__$1;
(statearr_25199_25213[(2)] = inst_25178);

(statearr_25199_25213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (6))){
var inst_25181 = (state_25192[(8)]);
var inst_25178 = (state_25192[(7)]);
var inst_25185 = f.call(null,inst_25178,inst_25181);
var inst_25178__$1 = inst_25185;
var state_25192__$1 = (function (){var statearr_25200 = state_25192;
(statearr_25200[(7)] = inst_25178__$1);

return statearr_25200;
})();
var statearr_25201_25214 = state_25192__$1;
(statearr_25201_25214[(2)] = null);

(statearr_25201_25214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (7))){
var inst_25188 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
var statearr_25202_25215 = state_25192__$1;
(statearr_25202_25215[(2)] = inst_25188);

(statearr_25202_25215[(1)] = (3));


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
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19057__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19057__auto____0 = (function (){
var statearr_25206 = [null,null,null,null,null,null,null,null,null];
(statearr_25206[(0)] = cljs$core$async$reduce_$_state_machine__19057__auto__);

(statearr_25206[(1)] = (1));

return statearr_25206;
});
var cljs$core$async$reduce_$_state_machine__19057__auto____1 = (function (state_25192){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25207){if((e25207 instanceof Object)){
var ex__19060__auto__ = e25207;
var statearr_25208_25216 = state_25192;
(statearr_25208_25216[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25217 = state_25192;
state_25192 = G__25217;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19057__auto__ = function(state_25192){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19057__auto____1.call(this,state_25192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19057__auto____0;
cljs$core$async$reduce_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19057__auto____1;
return cljs$core$async$reduce_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_25209 = f__19119__auto__.call(null);
(statearr_25209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_25209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__25219 = arguments.length;
switch (G__25219) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_25244){
var state_val_25245 = (state_25244[(1)]);
if((state_val_25245 === (7))){
var inst_25226 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
var statearr_25246_25270 = state_25244__$1;
(statearr_25246_25270[(2)] = inst_25226);

(statearr_25246_25270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (1))){
var inst_25220 = cljs.core.seq.call(null,coll);
var inst_25221 = inst_25220;
var state_25244__$1 = (function (){var statearr_25247 = state_25244;
(statearr_25247[(7)] = inst_25221);

return statearr_25247;
})();
var statearr_25248_25271 = state_25244__$1;
(statearr_25248_25271[(2)] = null);

(statearr_25248_25271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (4))){
var inst_25221 = (state_25244[(7)]);
var inst_25224 = cljs.core.first.call(null,inst_25221);
var state_25244__$1 = state_25244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25244__$1,(7),ch,inst_25224);
} else {
if((state_val_25245 === (13))){
var inst_25238 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
var statearr_25249_25272 = state_25244__$1;
(statearr_25249_25272[(2)] = inst_25238);

(statearr_25249_25272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (6))){
var inst_25229 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
if(cljs.core.truth_(inst_25229)){
var statearr_25250_25273 = state_25244__$1;
(statearr_25250_25273[(1)] = (8));

} else {
var statearr_25251_25274 = state_25244__$1;
(statearr_25251_25274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (3))){
var inst_25242 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25244__$1,inst_25242);
} else {
if((state_val_25245 === (12))){
var state_25244__$1 = state_25244;
var statearr_25252_25275 = state_25244__$1;
(statearr_25252_25275[(2)] = null);

(statearr_25252_25275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (2))){
var inst_25221 = (state_25244[(7)]);
var state_25244__$1 = state_25244;
if(cljs.core.truth_(inst_25221)){
var statearr_25253_25276 = state_25244__$1;
(statearr_25253_25276[(1)] = (4));

} else {
var statearr_25254_25277 = state_25244__$1;
(statearr_25254_25277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (11))){
var inst_25235 = cljs.core.async.close_BANG_.call(null,ch);
var state_25244__$1 = state_25244;
var statearr_25255_25278 = state_25244__$1;
(statearr_25255_25278[(2)] = inst_25235);

(statearr_25255_25278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (9))){
var state_25244__$1 = state_25244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25256_25279 = state_25244__$1;
(statearr_25256_25279[(1)] = (11));

} else {
var statearr_25257_25280 = state_25244__$1;
(statearr_25257_25280[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (5))){
var inst_25221 = (state_25244[(7)]);
var state_25244__$1 = state_25244;
var statearr_25258_25281 = state_25244__$1;
(statearr_25258_25281[(2)] = inst_25221);

(statearr_25258_25281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (10))){
var inst_25240 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
var statearr_25259_25282 = state_25244__$1;
(statearr_25259_25282[(2)] = inst_25240);

(statearr_25259_25282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (8))){
var inst_25221 = (state_25244[(7)]);
var inst_25231 = cljs.core.next.call(null,inst_25221);
var inst_25221__$1 = inst_25231;
var state_25244__$1 = (function (){var statearr_25260 = state_25244;
(statearr_25260[(7)] = inst_25221__$1);

return statearr_25260;
})();
var statearr_25261_25283 = state_25244__$1;
(statearr_25261_25283[(2)] = null);

(statearr_25261_25283[(1)] = (2));


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
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_25265 = [null,null,null,null,null,null,null,null];
(statearr_25265[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_25265[(1)] = (1));

return statearr_25265;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_25244){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25266){if((e25266 instanceof Object)){
var ex__19060__auto__ = e25266;
var statearr_25267_25284 = state_25244;
(statearr_25267_25284[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25285 = state_25244;
state_25244 = G__25285;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_25244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_25244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_25268 = f__19119__auto__.call(null);
(statearr_25268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_25268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25287 = {};
return obj25287;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16096__auto__ = _;
if(and__16096__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16096__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16744__auto__ = (((_ == null))?null:_);
return (function (){var or__16108__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25289 = {};
return obj25289;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t25511 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25511 = (function (mult,ch,cs,meta25512){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25512 = meta25512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25513,meta25512__$1){
var self__ = this;
var _25513__$1 = this;
return (new cljs.core.async.t25511(self__.mult,self__.ch,self__.cs,meta25512__$1));
});})(cs))
;

cljs.core.async.t25511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25513){
var self__ = this;
var _25513__$1 = this;
return self__.meta25512;
});})(cs))
;

cljs.core.async.t25511.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25511.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25511.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25511.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25511.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25511.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25512","meta25512",-1001862809,null)], null);
});})(cs))
;

cljs.core.async.t25511.cljs$lang$type = true;

cljs.core.async.t25511.cljs$lang$ctorStr = "cljs.core.async/t25511";

cljs.core.async.t25511.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t25511");
});})(cs))
;

cljs.core.async.__GT_t25511 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25511(mult__$1,ch__$1,cs__$1,meta25512){
return (new cljs.core.async.t25511(mult__$1,ch__$1,cs__$1,meta25512));
});})(cs))
;

}

return (new cljs.core.async.t25511(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19118__auto___25732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___25732,cs,m,dchan,dctr,done){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___25732,cs,m,dchan,dctr,done){
return (function (state_25644){
var state_val_25645 = (state_25644[(1)]);
if((state_val_25645 === (7))){
var inst_25640 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25646_25733 = state_25644__$1;
(statearr_25646_25733[(2)] = inst_25640);

(statearr_25646_25733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (20))){
var inst_25545 = (state_25644[(7)]);
var inst_25555 = cljs.core.first.call(null,inst_25545);
var inst_25556 = cljs.core.nth.call(null,inst_25555,(0),null);
var inst_25557 = cljs.core.nth.call(null,inst_25555,(1),null);
var state_25644__$1 = (function (){var statearr_25647 = state_25644;
(statearr_25647[(8)] = inst_25556);

return statearr_25647;
})();
if(cljs.core.truth_(inst_25557)){
var statearr_25648_25734 = state_25644__$1;
(statearr_25648_25734[(1)] = (22));

} else {
var statearr_25649_25735 = state_25644__$1;
(statearr_25649_25735[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (27))){
var inst_25516 = (state_25644[(9)]);
var inst_25587 = (state_25644[(10)]);
var inst_25592 = (state_25644[(11)]);
var inst_25585 = (state_25644[(12)]);
var inst_25592__$1 = cljs.core._nth.call(null,inst_25585,inst_25587);
var inst_25593 = cljs.core.async.put_BANG_.call(null,inst_25592__$1,inst_25516,done);
var state_25644__$1 = (function (){var statearr_25650 = state_25644;
(statearr_25650[(11)] = inst_25592__$1);

return statearr_25650;
})();
if(cljs.core.truth_(inst_25593)){
var statearr_25651_25736 = state_25644__$1;
(statearr_25651_25736[(1)] = (30));

} else {
var statearr_25652_25737 = state_25644__$1;
(statearr_25652_25737[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (1))){
var state_25644__$1 = state_25644;
var statearr_25653_25738 = state_25644__$1;
(statearr_25653_25738[(2)] = null);

(statearr_25653_25738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (24))){
var inst_25545 = (state_25644[(7)]);
var inst_25562 = (state_25644[(2)]);
var inst_25563 = cljs.core.next.call(null,inst_25545);
var inst_25525 = inst_25563;
var inst_25526 = null;
var inst_25527 = (0);
var inst_25528 = (0);
var state_25644__$1 = (function (){var statearr_25654 = state_25644;
(statearr_25654[(13)] = inst_25525);

(statearr_25654[(14)] = inst_25562);

(statearr_25654[(15)] = inst_25526);

(statearr_25654[(16)] = inst_25528);

(statearr_25654[(17)] = inst_25527);

return statearr_25654;
})();
var statearr_25655_25739 = state_25644__$1;
(statearr_25655_25739[(2)] = null);

(statearr_25655_25739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (39))){
var state_25644__$1 = state_25644;
var statearr_25659_25740 = state_25644__$1;
(statearr_25659_25740[(2)] = null);

(statearr_25659_25740[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (4))){
var inst_25516 = (state_25644[(9)]);
var inst_25516__$1 = (state_25644[(2)]);
var inst_25517 = (inst_25516__$1 == null);
var state_25644__$1 = (function (){var statearr_25660 = state_25644;
(statearr_25660[(9)] = inst_25516__$1);

return statearr_25660;
})();
if(cljs.core.truth_(inst_25517)){
var statearr_25661_25741 = state_25644__$1;
(statearr_25661_25741[(1)] = (5));

} else {
var statearr_25662_25742 = state_25644__$1;
(statearr_25662_25742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (15))){
var inst_25525 = (state_25644[(13)]);
var inst_25526 = (state_25644[(15)]);
var inst_25528 = (state_25644[(16)]);
var inst_25527 = (state_25644[(17)]);
var inst_25541 = (state_25644[(2)]);
var inst_25542 = (inst_25528 + (1));
var tmp25656 = inst_25525;
var tmp25657 = inst_25526;
var tmp25658 = inst_25527;
var inst_25525__$1 = tmp25656;
var inst_25526__$1 = tmp25657;
var inst_25527__$1 = tmp25658;
var inst_25528__$1 = inst_25542;
var state_25644__$1 = (function (){var statearr_25663 = state_25644;
(statearr_25663[(18)] = inst_25541);

(statearr_25663[(13)] = inst_25525__$1);

(statearr_25663[(15)] = inst_25526__$1);

(statearr_25663[(16)] = inst_25528__$1);

(statearr_25663[(17)] = inst_25527__$1);

return statearr_25663;
})();
var statearr_25664_25743 = state_25644__$1;
(statearr_25664_25743[(2)] = null);

(statearr_25664_25743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (21))){
var inst_25566 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25668_25744 = state_25644__$1;
(statearr_25668_25744[(2)] = inst_25566);

(statearr_25668_25744[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (31))){
var inst_25592 = (state_25644[(11)]);
var inst_25596 = done.call(null,null);
var inst_25597 = cljs.core.async.untap_STAR_.call(null,m,inst_25592);
var state_25644__$1 = (function (){var statearr_25669 = state_25644;
(statearr_25669[(19)] = inst_25596);

return statearr_25669;
})();
var statearr_25670_25745 = state_25644__$1;
(statearr_25670_25745[(2)] = inst_25597);

(statearr_25670_25745[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (32))){
var inst_25584 = (state_25644[(20)]);
var inst_25587 = (state_25644[(10)]);
var inst_25586 = (state_25644[(21)]);
var inst_25585 = (state_25644[(12)]);
var inst_25599 = (state_25644[(2)]);
var inst_25600 = (inst_25587 + (1));
var tmp25665 = inst_25584;
var tmp25666 = inst_25586;
var tmp25667 = inst_25585;
var inst_25584__$1 = tmp25665;
var inst_25585__$1 = tmp25667;
var inst_25586__$1 = tmp25666;
var inst_25587__$1 = inst_25600;
var state_25644__$1 = (function (){var statearr_25671 = state_25644;
(statearr_25671[(20)] = inst_25584__$1);

(statearr_25671[(10)] = inst_25587__$1);

(statearr_25671[(21)] = inst_25586__$1);

(statearr_25671[(12)] = inst_25585__$1);

(statearr_25671[(22)] = inst_25599);

return statearr_25671;
})();
var statearr_25672_25746 = state_25644__$1;
(statearr_25672_25746[(2)] = null);

(statearr_25672_25746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (40))){
var inst_25612 = (state_25644[(23)]);
var inst_25616 = done.call(null,null);
var inst_25617 = cljs.core.async.untap_STAR_.call(null,m,inst_25612);
var state_25644__$1 = (function (){var statearr_25673 = state_25644;
(statearr_25673[(24)] = inst_25616);

return statearr_25673;
})();
var statearr_25674_25747 = state_25644__$1;
(statearr_25674_25747[(2)] = inst_25617);

(statearr_25674_25747[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (33))){
var inst_25603 = (state_25644[(25)]);
var inst_25605 = cljs.core.chunked_seq_QMARK_.call(null,inst_25603);
var state_25644__$1 = state_25644;
if(inst_25605){
var statearr_25675_25748 = state_25644__$1;
(statearr_25675_25748[(1)] = (36));

} else {
var statearr_25676_25749 = state_25644__$1;
(statearr_25676_25749[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (13))){
var inst_25535 = (state_25644[(26)]);
var inst_25538 = cljs.core.async.close_BANG_.call(null,inst_25535);
var state_25644__$1 = state_25644;
var statearr_25677_25750 = state_25644__$1;
(statearr_25677_25750[(2)] = inst_25538);

(statearr_25677_25750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (22))){
var inst_25556 = (state_25644[(8)]);
var inst_25559 = cljs.core.async.close_BANG_.call(null,inst_25556);
var state_25644__$1 = state_25644;
var statearr_25678_25751 = state_25644__$1;
(statearr_25678_25751[(2)] = inst_25559);

(statearr_25678_25751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (36))){
var inst_25603 = (state_25644[(25)]);
var inst_25607 = cljs.core.chunk_first.call(null,inst_25603);
var inst_25608 = cljs.core.chunk_rest.call(null,inst_25603);
var inst_25609 = cljs.core.count.call(null,inst_25607);
var inst_25584 = inst_25608;
var inst_25585 = inst_25607;
var inst_25586 = inst_25609;
var inst_25587 = (0);
var state_25644__$1 = (function (){var statearr_25679 = state_25644;
(statearr_25679[(20)] = inst_25584);

(statearr_25679[(10)] = inst_25587);

(statearr_25679[(21)] = inst_25586);

(statearr_25679[(12)] = inst_25585);

return statearr_25679;
})();
var statearr_25680_25752 = state_25644__$1;
(statearr_25680_25752[(2)] = null);

(statearr_25680_25752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (41))){
var inst_25603 = (state_25644[(25)]);
var inst_25619 = (state_25644[(2)]);
var inst_25620 = cljs.core.next.call(null,inst_25603);
var inst_25584 = inst_25620;
var inst_25585 = null;
var inst_25586 = (0);
var inst_25587 = (0);
var state_25644__$1 = (function (){var statearr_25681 = state_25644;
(statearr_25681[(20)] = inst_25584);

(statearr_25681[(10)] = inst_25587);

(statearr_25681[(21)] = inst_25586);

(statearr_25681[(27)] = inst_25619);

(statearr_25681[(12)] = inst_25585);

return statearr_25681;
})();
var statearr_25682_25753 = state_25644__$1;
(statearr_25682_25753[(2)] = null);

(statearr_25682_25753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (43))){
var state_25644__$1 = state_25644;
var statearr_25683_25754 = state_25644__$1;
(statearr_25683_25754[(2)] = null);

(statearr_25683_25754[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (29))){
var inst_25628 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25684_25755 = state_25644__$1;
(statearr_25684_25755[(2)] = inst_25628);

(statearr_25684_25755[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (44))){
var inst_25637 = (state_25644[(2)]);
var state_25644__$1 = (function (){var statearr_25685 = state_25644;
(statearr_25685[(28)] = inst_25637);

return statearr_25685;
})();
var statearr_25686_25756 = state_25644__$1;
(statearr_25686_25756[(2)] = null);

(statearr_25686_25756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (6))){
var inst_25576 = (state_25644[(29)]);
var inst_25575 = cljs.core.deref.call(null,cs);
var inst_25576__$1 = cljs.core.keys.call(null,inst_25575);
var inst_25577 = cljs.core.count.call(null,inst_25576__$1);
var inst_25578 = cljs.core.reset_BANG_.call(null,dctr,inst_25577);
var inst_25583 = cljs.core.seq.call(null,inst_25576__$1);
var inst_25584 = inst_25583;
var inst_25585 = null;
var inst_25586 = (0);
var inst_25587 = (0);
var state_25644__$1 = (function (){var statearr_25687 = state_25644;
(statearr_25687[(20)] = inst_25584);

(statearr_25687[(10)] = inst_25587);

(statearr_25687[(21)] = inst_25586);

(statearr_25687[(30)] = inst_25578);

(statearr_25687[(12)] = inst_25585);

(statearr_25687[(29)] = inst_25576__$1);

return statearr_25687;
})();
var statearr_25688_25757 = state_25644__$1;
(statearr_25688_25757[(2)] = null);

(statearr_25688_25757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (28))){
var inst_25603 = (state_25644[(25)]);
var inst_25584 = (state_25644[(20)]);
var inst_25603__$1 = cljs.core.seq.call(null,inst_25584);
var state_25644__$1 = (function (){var statearr_25689 = state_25644;
(statearr_25689[(25)] = inst_25603__$1);

return statearr_25689;
})();
if(inst_25603__$1){
var statearr_25690_25758 = state_25644__$1;
(statearr_25690_25758[(1)] = (33));

} else {
var statearr_25691_25759 = state_25644__$1;
(statearr_25691_25759[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (25))){
var inst_25587 = (state_25644[(10)]);
var inst_25586 = (state_25644[(21)]);
var inst_25589 = (inst_25587 < inst_25586);
var inst_25590 = inst_25589;
var state_25644__$1 = state_25644;
if(cljs.core.truth_(inst_25590)){
var statearr_25692_25760 = state_25644__$1;
(statearr_25692_25760[(1)] = (27));

} else {
var statearr_25693_25761 = state_25644__$1;
(statearr_25693_25761[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (34))){
var state_25644__$1 = state_25644;
var statearr_25694_25762 = state_25644__$1;
(statearr_25694_25762[(2)] = null);

(statearr_25694_25762[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (17))){
var state_25644__$1 = state_25644;
var statearr_25695_25763 = state_25644__$1;
(statearr_25695_25763[(2)] = null);

(statearr_25695_25763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (3))){
var inst_25642 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25644__$1,inst_25642);
} else {
if((state_val_25645 === (12))){
var inst_25571 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25696_25764 = state_25644__$1;
(statearr_25696_25764[(2)] = inst_25571);

(statearr_25696_25764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (2))){
var state_25644__$1 = state_25644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25644__$1,(4),ch);
} else {
if((state_val_25645 === (23))){
var state_25644__$1 = state_25644;
var statearr_25697_25765 = state_25644__$1;
(statearr_25697_25765[(2)] = null);

(statearr_25697_25765[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (35))){
var inst_25626 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25698_25766 = state_25644__$1;
(statearr_25698_25766[(2)] = inst_25626);

(statearr_25698_25766[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (19))){
var inst_25545 = (state_25644[(7)]);
var inst_25549 = cljs.core.chunk_first.call(null,inst_25545);
var inst_25550 = cljs.core.chunk_rest.call(null,inst_25545);
var inst_25551 = cljs.core.count.call(null,inst_25549);
var inst_25525 = inst_25550;
var inst_25526 = inst_25549;
var inst_25527 = inst_25551;
var inst_25528 = (0);
var state_25644__$1 = (function (){var statearr_25699 = state_25644;
(statearr_25699[(13)] = inst_25525);

(statearr_25699[(15)] = inst_25526);

(statearr_25699[(16)] = inst_25528);

(statearr_25699[(17)] = inst_25527);

return statearr_25699;
})();
var statearr_25700_25767 = state_25644__$1;
(statearr_25700_25767[(2)] = null);

(statearr_25700_25767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (11))){
var inst_25545 = (state_25644[(7)]);
var inst_25525 = (state_25644[(13)]);
var inst_25545__$1 = cljs.core.seq.call(null,inst_25525);
var state_25644__$1 = (function (){var statearr_25701 = state_25644;
(statearr_25701[(7)] = inst_25545__$1);

return statearr_25701;
})();
if(inst_25545__$1){
var statearr_25702_25768 = state_25644__$1;
(statearr_25702_25768[(1)] = (16));

} else {
var statearr_25703_25769 = state_25644__$1;
(statearr_25703_25769[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (9))){
var inst_25573 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25704_25770 = state_25644__$1;
(statearr_25704_25770[(2)] = inst_25573);

(statearr_25704_25770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (5))){
var inst_25523 = cljs.core.deref.call(null,cs);
var inst_25524 = cljs.core.seq.call(null,inst_25523);
var inst_25525 = inst_25524;
var inst_25526 = null;
var inst_25527 = (0);
var inst_25528 = (0);
var state_25644__$1 = (function (){var statearr_25705 = state_25644;
(statearr_25705[(13)] = inst_25525);

(statearr_25705[(15)] = inst_25526);

(statearr_25705[(16)] = inst_25528);

(statearr_25705[(17)] = inst_25527);

return statearr_25705;
})();
var statearr_25706_25771 = state_25644__$1;
(statearr_25706_25771[(2)] = null);

(statearr_25706_25771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (14))){
var state_25644__$1 = state_25644;
var statearr_25707_25772 = state_25644__$1;
(statearr_25707_25772[(2)] = null);

(statearr_25707_25772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (45))){
var inst_25634 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25708_25773 = state_25644__$1;
(statearr_25708_25773[(2)] = inst_25634);

(statearr_25708_25773[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (26))){
var inst_25576 = (state_25644[(29)]);
var inst_25630 = (state_25644[(2)]);
var inst_25631 = cljs.core.seq.call(null,inst_25576);
var state_25644__$1 = (function (){var statearr_25709 = state_25644;
(statearr_25709[(31)] = inst_25630);

return statearr_25709;
})();
if(inst_25631){
var statearr_25710_25774 = state_25644__$1;
(statearr_25710_25774[(1)] = (42));

} else {
var statearr_25711_25775 = state_25644__$1;
(statearr_25711_25775[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (16))){
var inst_25545 = (state_25644[(7)]);
var inst_25547 = cljs.core.chunked_seq_QMARK_.call(null,inst_25545);
var state_25644__$1 = state_25644;
if(inst_25547){
var statearr_25712_25776 = state_25644__$1;
(statearr_25712_25776[(1)] = (19));

} else {
var statearr_25713_25777 = state_25644__$1;
(statearr_25713_25777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (38))){
var inst_25623 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25714_25778 = state_25644__$1;
(statearr_25714_25778[(2)] = inst_25623);

(statearr_25714_25778[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (30))){
var state_25644__$1 = state_25644;
var statearr_25715_25779 = state_25644__$1;
(statearr_25715_25779[(2)] = null);

(statearr_25715_25779[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (10))){
var inst_25526 = (state_25644[(15)]);
var inst_25528 = (state_25644[(16)]);
var inst_25534 = cljs.core._nth.call(null,inst_25526,inst_25528);
var inst_25535 = cljs.core.nth.call(null,inst_25534,(0),null);
var inst_25536 = cljs.core.nth.call(null,inst_25534,(1),null);
var state_25644__$1 = (function (){var statearr_25716 = state_25644;
(statearr_25716[(26)] = inst_25535);

return statearr_25716;
})();
if(cljs.core.truth_(inst_25536)){
var statearr_25717_25780 = state_25644__$1;
(statearr_25717_25780[(1)] = (13));

} else {
var statearr_25718_25781 = state_25644__$1;
(statearr_25718_25781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (18))){
var inst_25569 = (state_25644[(2)]);
var state_25644__$1 = state_25644;
var statearr_25719_25782 = state_25644__$1;
(statearr_25719_25782[(2)] = inst_25569);

(statearr_25719_25782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (42))){
var state_25644__$1 = state_25644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25644__$1,(45),dchan);
} else {
if((state_val_25645 === (37))){
var inst_25603 = (state_25644[(25)]);
var inst_25612 = (state_25644[(23)]);
var inst_25516 = (state_25644[(9)]);
var inst_25612__$1 = cljs.core.first.call(null,inst_25603);
var inst_25613 = cljs.core.async.put_BANG_.call(null,inst_25612__$1,inst_25516,done);
var state_25644__$1 = (function (){var statearr_25720 = state_25644;
(statearr_25720[(23)] = inst_25612__$1);

return statearr_25720;
})();
if(cljs.core.truth_(inst_25613)){
var statearr_25721_25783 = state_25644__$1;
(statearr_25721_25783[(1)] = (39));

} else {
var statearr_25722_25784 = state_25644__$1;
(statearr_25722_25784[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25645 === (8))){
var inst_25528 = (state_25644[(16)]);
var inst_25527 = (state_25644[(17)]);
var inst_25530 = (inst_25528 < inst_25527);
var inst_25531 = inst_25530;
var state_25644__$1 = state_25644;
if(cljs.core.truth_(inst_25531)){
var statearr_25723_25785 = state_25644__$1;
(statearr_25723_25785[(1)] = (10));

} else {
var statearr_25724_25786 = state_25644__$1;
(statearr_25724_25786[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19118__auto___25732,cs,m,dchan,dctr,done))
;
return ((function (switch__19056__auto__,c__19118__auto___25732,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19057__auto__ = null;
var cljs$core$async$mult_$_state_machine__19057__auto____0 = (function (){
var statearr_25728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25728[(0)] = cljs$core$async$mult_$_state_machine__19057__auto__);

(statearr_25728[(1)] = (1));

return statearr_25728;
});
var cljs$core$async$mult_$_state_machine__19057__auto____1 = (function (state_25644){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e25729){if((e25729 instanceof Object)){
var ex__19060__auto__ = e25729;
var statearr_25730_25787 = state_25644;
(statearr_25730_25787[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25788 = state_25644;
state_25644 = G__25788;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19057__auto__ = function(state_25644){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19057__auto____1.call(this,state_25644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19057__auto____0;
cljs$core$async$mult_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19057__auto____1;
return cljs$core$async$mult_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___25732,cs,m,dchan,dctr,done))
})();
var state__19120__auto__ = (function (){var statearr_25731 = f__19119__auto__.call(null);
(statearr_25731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___25732);

return statearr_25731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___25732,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__25790 = arguments.length;
switch (G__25790) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj25793 = {};
return obj25793;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16096__auto__ = m;
if(and__16096__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16744__auto__ = (((m == null))?null:m);
return (function (){var or__16108__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17148__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17148__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25798){
var map__25799 = p__25798;
var map__25799__$1 = ((cljs.core.seq_QMARK_.call(null,map__25799))?cljs.core.apply.call(null,cljs.core.hash_map,map__25799):map__25799);
var opts = map__25799__$1;
var statearr_25800_25803 = state;
(statearr_25800_25803[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25799,map__25799__$1,opts){
return (function (val){
var statearr_25801_25804 = state;
(statearr_25801_25804[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25799,map__25799__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25802_25805 = state;
(statearr_25802_25805[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25794){
var G__25795 = cljs.core.first.call(null,seq25794);
var seq25794__$1 = cljs.core.next.call(null,seq25794);
var G__25796 = cljs.core.first.call(null,seq25794__$1);
var seq25794__$2 = cljs.core.next.call(null,seq25794__$1);
var G__25797 = cljs.core.first.call(null,seq25794__$2);
var seq25794__$3 = cljs.core.next.call(null,seq25794__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25795,G__25796,G__25797,seq25794__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25925 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25925 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25926){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25926 = meta25926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25927,meta25926__$1){
var self__ = this;
var _25927__$1 = this;
return (new cljs.core.async.t25925(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25926__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25927){
var self__ = this;
var _25927__$1 = this;
return self__.meta25926;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25925.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25925.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25925.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25925.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25925.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25925.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25925.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25925.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25926","meta25926",-279367153,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25925.cljs$lang$type = true;

cljs.core.async.t25925.cljs$lang$ctorStr = "cljs.core.async/t25925";

cljs.core.async.t25925.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t25925");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25925 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t25925(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25926){
return (new cljs.core.async.t25925(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25926));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25925(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19118__auto___26044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25997){
var state_val_25998 = (state_25997[(1)]);
if((state_val_25998 === (7))){
var inst_25941 = (state_25997[(7)]);
var inst_25946 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25941);
var state_25997__$1 = state_25997;
var statearr_25999_26045 = state_25997__$1;
(statearr_25999_26045[(2)] = inst_25946);

(statearr_25999_26045[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (20))){
var inst_25956 = (state_25997[(8)]);
var state_25997__$1 = state_25997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25997__$1,(23),out,inst_25956);
} else {
if((state_val_25998 === (1))){
var inst_25931 = (state_25997[(9)]);
var inst_25931__$1 = calc_state.call(null);
var inst_25932 = cljs.core.seq_QMARK_.call(null,inst_25931__$1);
var state_25997__$1 = (function (){var statearr_26000 = state_25997;
(statearr_26000[(9)] = inst_25931__$1);

return statearr_26000;
})();
if(inst_25932){
var statearr_26001_26046 = state_25997__$1;
(statearr_26001_26046[(1)] = (2));

} else {
var statearr_26002_26047 = state_25997__$1;
(statearr_26002_26047[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (24))){
var inst_25949 = (state_25997[(10)]);
var inst_25941 = inst_25949;
var state_25997__$1 = (function (){var statearr_26003 = state_25997;
(statearr_26003[(7)] = inst_25941);

return statearr_26003;
})();
var statearr_26004_26048 = state_25997__$1;
(statearr_26004_26048[(2)] = null);

(statearr_26004_26048[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (4))){
var inst_25931 = (state_25997[(9)]);
var inst_25937 = (state_25997[(2)]);
var inst_25938 = cljs.core.get.call(null,inst_25937,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25939 = cljs.core.get.call(null,inst_25937,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25940 = cljs.core.get.call(null,inst_25937,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25941 = inst_25931;
var state_25997__$1 = (function (){var statearr_26005 = state_25997;
(statearr_26005[(7)] = inst_25941);

(statearr_26005[(11)] = inst_25938);

(statearr_26005[(12)] = inst_25940);

(statearr_26005[(13)] = inst_25939);

return statearr_26005;
})();
var statearr_26006_26049 = state_25997__$1;
(statearr_26006_26049[(2)] = null);

(statearr_26006_26049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (15))){
var state_25997__$1 = state_25997;
var statearr_26007_26050 = state_25997__$1;
(statearr_26007_26050[(2)] = null);

(statearr_26007_26050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (21))){
var inst_25949 = (state_25997[(10)]);
var inst_25941 = inst_25949;
var state_25997__$1 = (function (){var statearr_26008 = state_25997;
(statearr_26008[(7)] = inst_25941);

return statearr_26008;
})();
var statearr_26009_26051 = state_25997__$1;
(statearr_26009_26051[(2)] = null);

(statearr_26009_26051[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (13))){
var inst_25993 = (state_25997[(2)]);
var state_25997__$1 = state_25997;
var statearr_26010_26052 = state_25997__$1;
(statearr_26010_26052[(2)] = inst_25993);

(statearr_26010_26052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (22))){
var inst_25991 = (state_25997[(2)]);
var state_25997__$1 = state_25997;
var statearr_26011_26053 = state_25997__$1;
(statearr_26011_26053[(2)] = inst_25991);

(statearr_26011_26053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (6))){
var inst_25995 = (state_25997[(2)]);
var state_25997__$1 = state_25997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25997__$1,inst_25995);
} else {
if((state_val_25998 === (25))){
var state_25997__$1 = state_25997;
var statearr_26012_26054 = state_25997__$1;
(statearr_26012_26054[(2)] = null);

(statearr_26012_26054[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (17))){
var inst_25971 = (state_25997[(14)]);
var state_25997__$1 = state_25997;
var statearr_26013_26055 = state_25997__$1;
(statearr_26013_26055[(2)] = inst_25971);

(statearr_26013_26055[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (3))){
var inst_25931 = (state_25997[(9)]);
var state_25997__$1 = state_25997;
var statearr_26014_26056 = state_25997__$1;
(statearr_26014_26056[(2)] = inst_25931);

(statearr_26014_26056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (12))){
var inst_25957 = (state_25997[(15)]);
var inst_25971 = (state_25997[(14)]);
var inst_25950 = (state_25997[(16)]);
var inst_25971__$1 = inst_25950.call(null,inst_25957);
var state_25997__$1 = (function (){var statearr_26015 = state_25997;
(statearr_26015[(14)] = inst_25971__$1);

return statearr_26015;
})();
if(cljs.core.truth_(inst_25971__$1)){
var statearr_26016_26057 = state_25997__$1;
(statearr_26016_26057[(1)] = (17));

} else {
var statearr_26017_26058 = state_25997__$1;
(statearr_26017_26058[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (2))){
var inst_25931 = (state_25997[(9)]);
var inst_25934 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25931);
var state_25997__$1 = state_25997;
var statearr_26018_26059 = state_25997__$1;
(statearr_26018_26059[(2)] = inst_25934);

(statearr_26018_26059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (23))){
var inst_25982 = (state_25997[(2)]);
var state_25997__$1 = state_25997;
if(cljs.core.truth_(inst_25982)){
var statearr_26019_26060 = state_25997__$1;
(statearr_26019_26060[(1)] = (24));

} else {
var statearr_26020_26061 = state_25997__$1;
(statearr_26020_26061[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (19))){
var inst_25979 = (state_25997[(2)]);
var state_25997__$1 = state_25997;
if(cljs.core.truth_(inst_25979)){
var statearr_26021_26062 = state_25997__$1;
(statearr_26021_26062[(1)] = (20));

} else {
var statearr_26022_26063 = state_25997__$1;
(statearr_26022_26063[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (11))){
var inst_25956 = (state_25997[(8)]);
var inst_25962 = (inst_25956 == null);
var state_25997__$1 = state_25997;
if(cljs.core.truth_(inst_25962)){
var statearr_26023_26064 = state_25997__$1;
(statearr_26023_26064[(1)] = (14));

} else {
var statearr_26024_26065 = state_25997__$1;
(statearr_26024_26065[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (9))){
var inst_25949 = (state_25997[(10)]);
var inst_25949__$1 = (state_25997[(2)]);
var inst_25950 = cljs.core.get.call(null,inst_25949__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25951 = cljs.core.get.call(null,inst_25949__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25952 = cljs.core.get.call(null,inst_25949__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25997__$1 = (function (){var statearr_26025 = state_25997;
(statearr_26025[(17)] = inst_25951);

(statearr_26025[(10)] = inst_25949__$1);

(statearr_26025[(16)] = inst_25950);

return statearr_26025;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25997__$1,(10),inst_25952);
} else {
if((state_val_25998 === (5))){
var inst_25941 = (state_25997[(7)]);
var inst_25944 = cljs.core.seq_QMARK_.call(null,inst_25941);
var state_25997__$1 = state_25997;
if(inst_25944){
var statearr_26026_26066 = state_25997__$1;
(statearr_26026_26066[(1)] = (7));

} else {
var statearr_26027_26067 = state_25997__$1;
(statearr_26027_26067[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (14))){
var inst_25957 = (state_25997[(15)]);
var inst_25964 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25957);
var state_25997__$1 = state_25997;
var statearr_26028_26068 = state_25997__$1;
(statearr_26028_26068[(2)] = inst_25964);

(statearr_26028_26068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (26))){
var inst_25987 = (state_25997[(2)]);
var state_25997__$1 = state_25997;
var statearr_26029_26069 = state_25997__$1;
(statearr_26029_26069[(2)] = inst_25987);

(statearr_26029_26069[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (16))){
var inst_25967 = (state_25997[(2)]);
var inst_25968 = calc_state.call(null);
var inst_25941 = inst_25968;
var state_25997__$1 = (function (){var statearr_26030 = state_25997;
(statearr_26030[(7)] = inst_25941);

(statearr_26030[(18)] = inst_25967);

return statearr_26030;
})();
var statearr_26031_26070 = state_25997__$1;
(statearr_26031_26070[(2)] = null);

(statearr_26031_26070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (10))){
var inst_25956 = (state_25997[(8)]);
var inst_25957 = (state_25997[(15)]);
var inst_25955 = (state_25997[(2)]);
var inst_25956__$1 = cljs.core.nth.call(null,inst_25955,(0),null);
var inst_25957__$1 = cljs.core.nth.call(null,inst_25955,(1),null);
var inst_25958 = (inst_25956__$1 == null);
var inst_25959 = cljs.core._EQ_.call(null,inst_25957__$1,change);
var inst_25960 = (inst_25958) || (inst_25959);
var state_25997__$1 = (function (){var statearr_26032 = state_25997;
(statearr_26032[(8)] = inst_25956__$1);

(statearr_26032[(15)] = inst_25957__$1);

return statearr_26032;
})();
if(cljs.core.truth_(inst_25960)){
var statearr_26033_26071 = state_25997__$1;
(statearr_26033_26071[(1)] = (11));

} else {
var statearr_26034_26072 = state_25997__$1;
(statearr_26034_26072[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (18))){
var inst_25951 = (state_25997[(17)]);
var inst_25957 = (state_25997[(15)]);
var inst_25950 = (state_25997[(16)]);
var inst_25974 = cljs.core.empty_QMARK_.call(null,inst_25950);
var inst_25975 = inst_25951.call(null,inst_25957);
var inst_25976 = cljs.core.not.call(null,inst_25975);
var inst_25977 = (inst_25974) && (inst_25976);
var state_25997__$1 = state_25997;
var statearr_26035_26073 = state_25997__$1;
(statearr_26035_26073[(2)] = inst_25977);

(statearr_26035_26073[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25998 === (8))){
var inst_25941 = (state_25997[(7)]);
var state_25997__$1 = state_25997;
var statearr_26036_26074 = state_25997__$1;
(statearr_26036_26074[(2)] = inst_25941);

(statearr_26036_26074[(1)] = (9));


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
});})(c__19118__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19056__auto__,c__19118__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19057__auto__ = null;
var cljs$core$async$mix_$_state_machine__19057__auto____0 = (function (){
var statearr_26040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26040[(0)] = cljs$core$async$mix_$_state_machine__19057__auto__);

(statearr_26040[(1)] = (1));

return statearr_26040;
});
var cljs$core$async$mix_$_state_machine__19057__auto____1 = (function (state_25997){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_25997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26041){if((e26041 instanceof Object)){
var ex__19060__auto__ = e26041;
var statearr_26042_26075 = state_25997;
(statearr_26042_26075[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26076 = state_25997;
state_25997 = G__26076;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19057__auto__ = function(state_25997){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19057__auto____1.call(this,state_25997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19057__auto____0;
cljs$core$async$mix_$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19057__auto____1;
return cljs$core$async$mix_$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19120__auto__ = (function (){var statearr_26043 = f__19119__auto__.call(null);
(statearr_26043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26044);

return statearr_26043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26044,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26078 = {};
return obj26078;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16096__auto__ = p;
if(and__16096__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16096__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16744__auto__ = (((p == null))?null:p);
return (function (){var or__16108__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16096__auto__ = p;
if(and__16096__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16096__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16744__auto__ = (((p == null))?null:p);
return (function (){var or__16108__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__26080 = arguments.length;
switch (G__26080) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16096__auto__ = p;
if(and__16096__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16096__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16744__auto__ = (((p == null))?null:p);
return (function (){var or__16108__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16096__auto__ = p;
if(and__16096__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16096__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16744__auto__ = (((p == null))?null:p);
return (function (){var or__16108__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16744__auto__)]);
if(or__16108__auto__){
return or__16108__auto__;
} else {
var or__16108__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16108__auto____$1){
return or__16108__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__26084 = arguments.length;
switch (G__26084) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16108__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16108__auto__)){
return or__16108__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16108__auto__,mults){
return (function (p1__26082_SHARP_){
if(cljs.core.truth_(p1__26082_SHARP_.call(null,topic))){
return p1__26082_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26082_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16108__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26085 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26085 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26086){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26086 = meta26086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26087,meta26086__$1){
var self__ = this;
var _26087__$1 = this;
return (new cljs.core.async.t26085(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26086__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26087){
var self__ = this;
var _26087__$1 = this;
return self__.meta26086;
});})(mults,ensure_mult))
;

cljs.core.async.t26085.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26085.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26085.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26085.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26085.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26085.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26086","meta26086",699229069,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t26085.cljs$lang$type = true;

cljs.core.async.t26085.cljs$lang$ctorStr = "cljs.core.async/t26085";

cljs.core.async.t26085.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26085");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26085 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26086){
return (new cljs.core.async.t26085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26086));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26085(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19118__auto___26208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26208,mults,ensure_mult,p){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26208,mults,ensure_mult,p){
return (function (state_26159){
var state_val_26160 = (state_26159[(1)]);
if((state_val_26160 === (7))){
var inst_26155 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
var statearr_26161_26209 = state_26159__$1;
(statearr_26161_26209[(2)] = inst_26155);

(statearr_26161_26209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (20))){
var state_26159__$1 = state_26159;
var statearr_26162_26210 = state_26159__$1;
(statearr_26162_26210[(2)] = null);

(statearr_26162_26210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (1))){
var state_26159__$1 = state_26159;
var statearr_26163_26211 = state_26159__$1;
(statearr_26163_26211[(2)] = null);

(statearr_26163_26211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (24))){
var inst_26138 = (state_26159[(7)]);
var inst_26147 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26138);
var state_26159__$1 = state_26159;
var statearr_26164_26212 = state_26159__$1;
(statearr_26164_26212[(2)] = inst_26147);

(statearr_26164_26212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (4))){
var inst_26090 = (state_26159[(8)]);
var inst_26090__$1 = (state_26159[(2)]);
var inst_26091 = (inst_26090__$1 == null);
var state_26159__$1 = (function (){var statearr_26165 = state_26159;
(statearr_26165[(8)] = inst_26090__$1);

return statearr_26165;
})();
if(cljs.core.truth_(inst_26091)){
var statearr_26166_26213 = state_26159__$1;
(statearr_26166_26213[(1)] = (5));

} else {
var statearr_26167_26214 = state_26159__$1;
(statearr_26167_26214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (15))){
var inst_26132 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
var statearr_26168_26215 = state_26159__$1;
(statearr_26168_26215[(2)] = inst_26132);

(statearr_26168_26215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (21))){
var inst_26152 = (state_26159[(2)]);
var state_26159__$1 = (function (){var statearr_26169 = state_26159;
(statearr_26169[(9)] = inst_26152);

return statearr_26169;
})();
var statearr_26170_26216 = state_26159__$1;
(statearr_26170_26216[(2)] = null);

(statearr_26170_26216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (13))){
var inst_26114 = (state_26159[(10)]);
var inst_26116 = cljs.core.chunked_seq_QMARK_.call(null,inst_26114);
var state_26159__$1 = state_26159;
if(inst_26116){
var statearr_26171_26217 = state_26159__$1;
(statearr_26171_26217[(1)] = (16));

} else {
var statearr_26172_26218 = state_26159__$1;
(statearr_26172_26218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (22))){
var inst_26144 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
if(cljs.core.truth_(inst_26144)){
var statearr_26173_26219 = state_26159__$1;
(statearr_26173_26219[(1)] = (23));

} else {
var statearr_26174_26220 = state_26159__$1;
(statearr_26174_26220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (6))){
var inst_26138 = (state_26159[(7)]);
var inst_26090 = (state_26159[(8)]);
var inst_26140 = (state_26159[(11)]);
var inst_26138__$1 = topic_fn.call(null,inst_26090);
var inst_26139 = cljs.core.deref.call(null,mults);
var inst_26140__$1 = cljs.core.get.call(null,inst_26139,inst_26138__$1);
var state_26159__$1 = (function (){var statearr_26175 = state_26159;
(statearr_26175[(7)] = inst_26138__$1);

(statearr_26175[(11)] = inst_26140__$1);

return statearr_26175;
})();
if(cljs.core.truth_(inst_26140__$1)){
var statearr_26176_26221 = state_26159__$1;
(statearr_26176_26221[(1)] = (19));

} else {
var statearr_26177_26222 = state_26159__$1;
(statearr_26177_26222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (25))){
var inst_26149 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
var statearr_26178_26223 = state_26159__$1;
(statearr_26178_26223[(2)] = inst_26149);

(statearr_26178_26223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (17))){
var inst_26114 = (state_26159[(10)]);
var inst_26123 = cljs.core.first.call(null,inst_26114);
var inst_26124 = cljs.core.async.muxch_STAR_.call(null,inst_26123);
var inst_26125 = cljs.core.async.close_BANG_.call(null,inst_26124);
var inst_26126 = cljs.core.next.call(null,inst_26114);
var inst_26100 = inst_26126;
var inst_26101 = null;
var inst_26102 = (0);
var inst_26103 = (0);
var state_26159__$1 = (function (){var statearr_26179 = state_26159;
(statearr_26179[(12)] = inst_26103);

(statearr_26179[(13)] = inst_26101);

(statearr_26179[(14)] = inst_26100);

(statearr_26179[(15)] = inst_26125);

(statearr_26179[(16)] = inst_26102);

return statearr_26179;
})();
var statearr_26180_26224 = state_26159__$1;
(statearr_26180_26224[(2)] = null);

(statearr_26180_26224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (3))){
var inst_26157 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26159__$1,inst_26157);
} else {
if((state_val_26160 === (12))){
var inst_26134 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
var statearr_26181_26225 = state_26159__$1;
(statearr_26181_26225[(2)] = inst_26134);

(statearr_26181_26225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (2))){
var state_26159__$1 = state_26159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26159__$1,(4),ch);
} else {
if((state_val_26160 === (23))){
var state_26159__$1 = state_26159;
var statearr_26182_26226 = state_26159__$1;
(statearr_26182_26226[(2)] = null);

(statearr_26182_26226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (19))){
var inst_26090 = (state_26159[(8)]);
var inst_26140 = (state_26159[(11)]);
var inst_26142 = cljs.core.async.muxch_STAR_.call(null,inst_26140);
var state_26159__$1 = state_26159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26159__$1,(22),inst_26142,inst_26090);
} else {
if((state_val_26160 === (11))){
var inst_26100 = (state_26159[(14)]);
var inst_26114 = (state_26159[(10)]);
var inst_26114__$1 = cljs.core.seq.call(null,inst_26100);
var state_26159__$1 = (function (){var statearr_26183 = state_26159;
(statearr_26183[(10)] = inst_26114__$1);

return statearr_26183;
})();
if(inst_26114__$1){
var statearr_26184_26227 = state_26159__$1;
(statearr_26184_26227[(1)] = (13));

} else {
var statearr_26185_26228 = state_26159__$1;
(statearr_26185_26228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (9))){
var inst_26136 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
var statearr_26186_26229 = state_26159__$1;
(statearr_26186_26229[(2)] = inst_26136);

(statearr_26186_26229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (5))){
var inst_26097 = cljs.core.deref.call(null,mults);
var inst_26098 = cljs.core.vals.call(null,inst_26097);
var inst_26099 = cljs.core.seq.call(null,inst_26098);
var inst_26100 = inst_26099;
var inst_26101 = null;
var inst_26102 = (0);
var inst_26103 = (0);
var state_26159__$1 = (function (){var statearr_26187 = state_26159;
(statearr_26187[(12)] = inst_26103);

(statearr_26187[(13)] = inst_26101);

(statearr_26187[(14)] = inst_26100);

(statearr_26187[(16)] = inst_26102);

return statearr_26187;
})();
var statearr_26188_26230 = state_26159__$1;
(statearr_26188_26230[(2)] = null);

(statearr_26188_26230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (14))){
var state_26159__$1 = state_26159;
var statearr_26192_26231 = state_26159__$1;
(statearr_26192_26231[(2)] = null);

(statearr_26192_26231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (16))){
var inst_26114 = (state_26159[(10)]);
var inst_26118 = cljs.core.chunk_first.call(null,inst_26114);
var inst_26119 = cljs.core.chunk_rest.call(null,inst_26114);
var inst_26120 = cljs.core.count.call(null,inst_26118);
var inst_26100 = inst_26119;
var inst_26101 = inst_26118;
var inst_26102 = inst_26120;
var inst_26103 = (0);
var state_26159__$1 = (function (){var statearr_26193 = state_26159;
(statearr_26193[(12)] = inst_26103);

(statearr_26193[(13)] = inst_26101);

(statearr_26193[(14)] = inst_26100);

(statearr_26193[(16)] = inst_26102);

return statearr_26193;
})();
var statearr_26194_26232 = state_26159__$1;
(statearr_26194_26232[(2)] = null);

(statearr_26194_26232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (10))){
var inst_26103 = (state_26159[(12)]);
var inst_26101 = (state_26159[(13)]);
var inst_26100 = (state_26159[(14)]);
var inst_26102 = (state_26159[(16)]);
var inst_26108 = cljs.core._nth.call(null,inst_26101,inst_26103);
var inst_26109 = cljs.core.async.muxch_STAR_.call(null,inst_26108);
var inst_26110 = cljs.core.async.close_BANG_.call(null,inst_26109);
var inst_26111 = (inst_26103 + (1));
var tmp26189 = inst_26101;
var tmp26190 = inst_26100;
var tmp26191 = inst_26102;
var inst_26100__$1 = tmp26190;
var inst_26101__$1 = tmp26189;
var inst_26102__$1 = tmp26191;
var inst_26103__$1 = inst_26111;
var state_26159__$1 = (function (){var statearr_26195 = state_26159;
(statearr_26195[(12)] = inst_26103__$1);

(statearr_26195[(17)] = inst_26110);

(statearr_26195[(13)] = inst_26101__$1);

(statearr_26195[(14)] = inst_26100__$1);

(statearr_26195[(16)] = inst_26102__$1);

return statearr_26195;
})();
var statearr_26196_26233 = state_26159__$1;
(statearr_26196_26233[(2)] = null);

(statearr_26196_26233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (18))){
var inst_26129 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
var statearr_26197_26234 = state_26159__$1;
(statearr_26197_26234[(2)] = inst_26129);

(statearr_26197_26234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (8))){
var inst_26103 = (state_26159[(12)]);
var inst_26102 = (state_26159[(16)]);
var inst_26105 = (inst_26103 < inst_26102);
var inst_26106 = inst_26105;
var state_26159__$1 = state_26159;
if(cljs.core.truth_(inst_26106)){
var statearr_26198_26235 = state_26159__$1;
(statearr_26198_26235[(1)] = (10));

} else {
var statearr_26199_26236 = state_26159__$1;
(statearr_26199_26236[(1)] = (11));

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
});})(c__19118__auto___26208,mults,ensure_mult,p))
;
return ((function (switch__19056__auto__,c__19118__auto___26208,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26203[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26203[(1)] = (1));

return statearr_26203;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26159){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26204){if((e26204 instanceof Object)){
var ex__19060__auto__ = e26204;
var statearr_26205_26237 = state_26159;
(statearr_26205_26237[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26238 = state_26159;
state_26159 = G__26238;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26208,mults,ensure_mult,p))
})();
var state__19120__auto__ = (function (){var statearr_26206 = f__19119__auto__.call(null);
(statearr_26206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26208);

return statearr_26206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26208,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__26240 = arguments.length;
switch (G__26240) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__26243 = arguments.length;
switch (G__26243) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__26246 = arguments.length;
switch (G__26246) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19118__auto___26316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26316,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26316,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26285){
var state_val_26286 = (state_26285[(1)]);
if((state_val_26286 === (7))){
var state_26285__$1 = state_26285;
var statearr_26287_26317 = state_26285__$1;
(statearr_26287_26317[(2)] = null);

(statearr_26287_26317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (1))){
var state_26285__$1 = state_26285;
var statearr_26288_26318 = state_26285__$1;
(statearr_26288_26318[(2)] = null);

(statearr_26288_26318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (4))){
var inst_26249 = (state_26285[(7)]);
var inst_26251 = (inst_26249 < cnt);
var state_26285__$1 = state_26285;
if(cljs.core.truth_(inst_26251)){
var statearr_26289_26319 = state_26285__$1;
(statearr_26289_26319[(1)] = (6));

} else {
var statearr_26290_26320 = state_26285__$1;
(statearr_26290_26320[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (15))){
var inst_26281 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
var statearr_26291_26321 = state_26285__$1;
(statearr_26291_26321[(2)] = inst_26281);

(statearr_26291_26321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (13))){
var inst_26274 = cljs.core.async.close_BANG_.call(null,out);
var state_26285__$1 = state_26285;
var statearr_26292_26322 = state_26285__$1;
(statearr_26292_26322[(2)] = inst_26274);

(statearr_26292_26322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (6))){
var state_26285__$1 = state_26285;
var statearr_26293_26323 = state_26285__$1;
(statearr_26293_26323[(2)] = null);

(statearr_26293_26323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (3))){
var inst_26283 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26285__$1,inst_26283);
} else {
if((state_val_26286 === (12))){
var inst_26271 = (state_26285[(8)]);
var inst_26271__$1 = (state_26285[(2)]);
var inst_26272 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26271__$1);
var state_26285__$1 = (function (){var statearr_26294 = state_26285;
(statearr_26294[(8)] = inst_26271__$1);

return statearr_26294;
})();
if(cljs.core.truth_(inst_26272)){
var statearr_26295_26324 = state_26285__$1;
(statearr_26295_26324[(1)] = (13));

} else {
var statearr_26296_26325 = state_26285__$1;
(statearr_26296_26325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (2))){
var inst_26248 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26249 = (0);
var state_26285__$1 = (function (){var statearr_26297 = state_26285;
(statearr_26297[(9)] = inst_26248);

(statearr_26297[(7)] = inst_26249);

return statearr_26297;
})();
var statearr_26298_26326 = state_26285__$1;
(statearr_26298_26326[(2)] = null);

(statearr_26298_26326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (11))){
var inst_26249 = (state_26285[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26285,(10),Object,null,(9));
var inst_26258 = chs__$1.call(null,inst_26249);
var inst_26259 = done.call(null,inst_26249);
var inst_26260 = cljs.core.async.take_BANG_.call(null,inst_26258,inst_26259);
var state_26285__$1 = state_26285;
var statearr_26299_26327 = state_26285__$1;
(statearr_26299_26327[(2)] = inst_26260);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (9))){
var inst_26249 = (state_26285[(7)]);
var inst_26262 = (state_26285[(2)]);
var inst_26263 = (inst_26249 + (1));
var inst_26249__$1 = inst_26263;
var state_26285__$1 = (function (){var statearr_26300 = state_26285;
(statearr_26300[(7)] = inst_26249__$1);

(statearr_26300[(10)] = inst_26262);

return statearr_26300;
})();
var statearr_26301_26328 = state_26285__$1;
(statearr_26301_26328[(2)] = null);

(statearr_26301_26328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (5))){
var inst_26269 = (state_26285[(2)]);
var state_26285__$1 = (function (){var statearr_26302 = state_26285;
(statearr_26302[(11)] = inst_26269);

return statearr_26302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26285__$1,(12),dchan);
} else {
if((state_val_26286 === (14))){
var inst_26271 = (state_26285[(8)]);
var inst_26276 = cljs.core.apply.call(null,f,inst_26271);
var state_26285__$1 = state_26285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26285__$1,(16),out,inst_26276);
} else {
if((state_val_26286 === (16))){
var inst_26278 = (state_26285[(2)]);
var state_26285__$1 = (function (){var statearr_26303 = state_26285;
(statearr_26303[(12)] = inst_26278);

return statearr_26303;
})();
var statearr_26304_26329 = state_26285__$1;
(statearr_26304_26329[(2)] = null);

(statearr_26304_26329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (10))){
var inst_26253 = (state_26285[(2)]);
var inst_26254 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26285__$1 = (function (){var statearr_26305 = state_26285;
(statearr_26305[(13)] = inst_26253);

return statearr_26305;
})();
var statearr_26306_26330 = state_26285__$1;
(statearr_26306_26330[(2)] = inst_26254);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (8))){
var inst_26267 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
var statearr_26307_26331 = state_26285__$1;
(statearr_26307_26331[(2)] = inst_26267);

(statearr_26307_26331[(1)] = (5));


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
});})(c__19118__auto___26316,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19056__auto__,c__19118__auto___26316,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26311[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26311[(1)] = (1));

return statearr_26311;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26285){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26312){if((e26312 instanceof Object)){
var ex__19060__auto__ = e26312;
var statearr_26313_26332 = state_26285;
(statearr_26313_26332[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26333 = state_26285;
state_26285 = G__26333;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26316,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19120__auto__ = (function (){var statearr_26314 = f__19119__auto__.call(null);
(statearr_26314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26316);

return statearr_26314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26316,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__26336 = arguments.length;
switch (G__26336) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26391,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26391,out){
return (function (state_26366){
var state_val_26367 = (state_26366[(1)]);
if((state_val_26367 === (7))){
var inst_26346 = (state_26366[(7)]);
var inst_26345 = (state_26366[(8)]);
var inst_26345__$1 = (state_26366[(2)]);
var inst_26346__$1 = cljs.core.nth.call(null,inst_26345__$1,(0),null);
var inst_26347 = cljs.core.nth.call(null,inst_26345__$1,(1),null);
var inst_26348 = (inst_26346__$1 == null);
var state_26366__$1 = (function (){var statearr_26368 = state_26366;
(statearr_26368[(7)] = inst_26346__$1);

(statearr_26368[(8)] = inst_26345__$1);

(statearr_26368[(9)] = inst_26347);

return statearr_26368;
})();
if(cljs.core.truth_(inst_26348)){
var statearr_26369_26392 = state_26366__$1;
(statearr_26369_26392[(1)] = (8));

} else {
var statearr_26370_26393 = state_26366__$1;
(statearr_26370_26393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26367 === (1))){
var inst_26337 = cljs.core.vec.call(null,chs);
var inst_26338 = inst_26337;
var state_26366__$1 = (function (){var statearr_26371 = state_26366;
(statearr_26371[(10)] = inst_26338);

return statearr_26371;
})();
var statearr_26372_26394 = state_26366__$1;
(statearr_26372_26394[(2)] = null);

(statearr_26372_26394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26367 === (4))){
var inst_26338 = (state_26366[(10)]);
var state_26366__$1 = state_26366;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26366__$1,(7),inst_26338);
} else {
if((state_val_26367 === (6))){
var inst_26362 = (state_26366[(2)]);
var state_26366__$1 = state_26366;
var statearr_26373_26395 = state_26366__$1;
(statearr_26373_26395[(2)] = inst_26362);

(statearr_26373_26395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26367 === (3))){
var inst_26364 = (state_26366[(2)]);
var state_26366__$1 = state_26366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26366__$1,inst_26364);
} else {
if((state_val_26367 === (2))){
var inst_26338 = (state_26366[(10)]);
var inst_26340 = cljs.core.count.call(null,inst_26338);
var inst_26341 = (inst_26340 > (0));
var state_26366__$1 = state_26366;
if(cljs.core.truth_(inst_26341)){
var statearr_26375_26396 = state_26366__$1;
(statearr_26375_26396[(1)] = (4));

} else {
var statearr_26376_26397 = state_26366__$1;
(statearr_26376_26397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26367 === (11))){
var inst_26338 = (state_26366[(10)]);
var inst_26355 = (state_26366[(2)]);
var tmp26374 = inst_26338;
var inst_26338__$1 = tmp26374;
var state_26366__$1 = (function (){var statearr_26377 = state_26366;
(statearr_26377[(11)] = inst_26355);

(statearr_26377[(10)] = inst_26338__$1);

return statearr_26377;
})();
var statearr_26378_26398 = state_26366__$1;
(statearr_26378_26398[(2)] = null);

(statearr_26378_26398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26367 === (9))){
var inst_26346 = (state_26366[(7)]);
var state_26366__$1 = state_26366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26366__$1,(11),out,inst_26346);
} else {
if((state_val_26367 === (5))){
var inst_26360 = cljs.core.async.close_BANG_.call(null,out);
var state_26366__$1 = state_26366;
var statearr_26379_26399 = state_26366__$1;
(statearr_26379_26399[(2)] = inst_26360);

(statearr_26379_26399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26367 === (10))){
var inst_26358 = (state_26366[(2)]);
var state_26366__$1 = state_26366;
var statearr_26380_26400 = state_26366__$1;
(statearr_26380_26400[(2)] = inst_26358);

(statearr_26380_26400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26367 === (8))){
var inst_26346 = (state_26366[(7)]);
var inst_26345 = (state_26366[(8)]);
var inst_26347 = (state_26366[(9)]);
var inst_26338 = (state_26366[(10)]);
var inst_26350 = (function (){var cs = inst_26338;
var vec__26343 = inst_26345;
var v = inst_26346;
var c = inst_26347;
return ((function (cs,vec__26343,v,c,inst_26346,inst_26345,inst_26347,inst_26338,state_val_26367,c__19118__auto___26391,out){
return (function (p1__26334_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26334_SHARP_);
});
;})(cs,vec__26343,v,c,inst_26346,inst_26345,inst_26347,inst_26338,state_val_26367,c__19118__auto___26391,out))
})();
var inst_26351 = cljs.core.filterv.call(null,inst_26350,inst_26338);
var inst_26338__$1 = inst_26351;
var state_26366__$1 = (function (){var statearr_26381 = state_26366;
(statearr_26381[(10)] = inst_26338__$1);

return statearr_26381;
})();
var statearr_26382_26401 = state_26366__$1;
(statearr_26382_26401[(2)] = null);

(statearr_26382_26401[(1)] = (2));


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
});})(c__19118__auto___26391,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26391,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26386[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26386[(1)] = (1));

return statearr_26386;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26366){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26387){if((e26387 instanceof Object)){
var ex__19060__auto__ = e26387;
var statearr_26388_26402 = state_26366;
(statearr_26388_26402[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26403 = state_26366;
state_26366 = G__26403;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26391,out))
})();
var state__19120__auto__ = (function (){var statearr_26389 = f__19119__auto__.call(null);
(statearr_26389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26391);

return statearr_26389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26391,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__26405 = arguments.length;
switch (G__26405) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26453,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26453,out){
return (function (state_26429){
var state_val_26430 = (state_26429[(1)]);
if((state_val_26430 === (7))){
var inst_26411 = (state_26429[(7)]);
var inst_26411__$1 = (state_26429[(2)]);
var inst_26412 = (inst_26411__$1 == null);
var inst_26413 = cljs.core.not.call(null,inst_26412);
var state_26429__$1 = (function (){var statearr_26431 = state_26429;
(statearr_26431[(7)] = inst_26411__$1);

return statearr_26431;
})();
if(inst_26413){
var statearr_26432_26454 = state_26429__$1;
(statearr_26432_26454[(1)] = (8));

} else {
var statearr_26433_26455 = state_26429__$1;
(statearr_26433_26455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (1))){
var inst_26406 = (0);
var state_26429__$1 = (function (){var statearr_26434 = state_26429;
(statearr_26434[(8)] = inst_26406);

return statearr_26434;
})();
var statearr_26435_26456 = state_26429__$1;
(statearr_26435_26456[(2)] = null);

(statearr_26435_26456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (4))){
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26429__$1,(7),ch);
} else {
if((state_val_26430 === (6))){
var inst_26424 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
var statearr_26436_26457 = state_26429__$1;
(statearr_26436_26457[(2)] = inst_26424);

(statearr_26436_26457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (3))){
var inst_26426 = (state_26429[(2)]);
var inst_26427 = cljs.core.async.close_BANG_.call(null,out);
var state_26429__$1 = (function (){var statearr_26437 = state_26429;
(statearr_26437[(9)] = inst_26426);

return statearr_26437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26429__$1,inst_26427);
} else {
if((state_val_26430 === (2))){
var inst_26406 = (state_26429[(8)]);
var inst_26408 = (inst_26406 < n);
var state_26429__$1 = state_26429;
if(cljs.core.truth_(inst_26408)){
var statearr_26438_26458 = state_26429__$1;
(statearr_26438_26458[(1)] = (4));

} else {
var statearr_26439_26459 = state_26429__$1;
(statearr_26439_26459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (11))){
var inst_26406 = (state_26429[(8)]);
var inst_26416 = (state_26429[(2)]);
var inst_26417 = (inst_26406 + (1));
var inst_26406__$1 = inst_26417;
var state_26429__$1 = (function (){var statearr_26440 = state_26429;
(statearr_26440[(8)] = inst_26406__$1);

(statearr_26440[(10)] = inst_26416);

return statearr_26440;
})();
var statearr_26441_26460 = state_26429__$1;
(statearr_26441_26460[(2)] = null);

(statearr_26441_26460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (9))){
var state_26429__$1 = state_26429;
var statearr_26442_26461 = state_26429__$1;
(statearr_26442_26461[(2)] = null);

(statearr_26442_26461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (5))){
var state_26429__$1 = state_26429;
var statearr_26443_26462 = state_26429__$1;
(statearr_26443_26462[(2)] = null);

(statearr_26443_26462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (10))){
var inst_26421 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
var statearr_26444_26463 = state_26429__$1;
(statearr_26444_26463[(2)] = inst_26421);

(statearr_26444_26463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (8))){
var inst_26411 = (state_26429[(7)]);
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26429__$1,(11),out,inst_26411);
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
});})(c__19118__auto___26453,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26453,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26448[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26448[(1)] = (1));

return statearr_26448;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26429){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26449){if((e26449 instanceof Object)){
var ex__19060__auto__ = e26449;
var statearr_26450_26464 = state_26429;
(statearr_26450_26464[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26465 = state_26429;
state_26429 = G__26465;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26453,out))
})();
var state__19120__auto__ = (function (){var statearr_26451 = f__19119__auto__.call(null);
(statearr_26451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26453);

return statearr_26451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26453,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26473 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26473 = (function (map_LT_,f,ch,meta26474){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26474 = meta26474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26475,meta26474__$1){
var self__ = this;
var _26475__$1 = this;
return (new cljs.core.async.t26473(self__.map_LT_,self__.f,self__.ch,meta26474__$1));
});

cljs.core.async.t26473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26475){
var self__ = this;
var _26475__$1 = this;
return self__.meta26474;
});

cljs.core.async.t26473.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26473.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26476 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26476 = (function (map_LT_,f,ch,meta26474,_,fn1,meta26477){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26474 = meta26474;
this._ = _;
this.fn1 = fn1;
this.meta26477 = meta26477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26478,meta26477__$1){
var self__ = this;
var _26478__$1 = this;
return (new cljs.core.async.t26476(self__.map_LT_,self__.f,self__.ch,self__.meta26474,self__._,self__.fn1,meta26477__$1));
});})(___$1))
;

cljs.core.async.t26476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26478){
var self__ = this;
var _26478__$1 = this;
return self__.meta26477;
});})(___$1))
;

cljs.core.async.t26476.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26466_SHARP_){
return f1.call(null,(((p1__26466_SHARP_ == null))?null:self__.f.call(null,p1__26466_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26476.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26474","meta26474",-366484339,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26477","meta26477",361714426,null)], null);
});})(___$1))
;

cljs.core.async.t26476.cljs$lang$type = true;

cljs.core.async.t26476.cljs$lang$ctorStr = "cljs.core.async/t26476";

cljs.core.async.t26476.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26476");
});})(___$1))
;

cljs.core.async.__GT_t26476 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26476(map_LT___$1,f__$1,ch__$1,meta26474__$1,___$2,fn1__$1,meta26477){
return (new cljs.core.async.t26476(map_LT___$1,f__$1,ch__$1,meta26474__$1,___$2,fn1__$1,meta26477));
});})(___$1))
;

}

return (new cljs.core.async.t26476(self__.map_LT_,self__.f,self__.ch,self__.meta26474,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16096__auto__ = ret;
if(cljs.core.truth_(and__16096__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16096__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26473.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26474","meta26474",-366484339,null)], null);
});

cljs.core.async.t26473.cljs$lang$type = true;

cljs.core.async.t26473.cljs$lang$ctorStr = "cljs.core.async/t26473";

cljs.core.async.t26473.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26473");
});

cljs.core.async.__GT_t26473 = (function cljs$core$async$map_LT__$___GT_t26473(map_LT___$1,f__$1,ch__$1,meta26474){
return (new cljs.core.async.t26473(map_LT___$1,f__$1,ch__$1,meta26474));
});

}

return (new cljs.core.async.t26473(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26482 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26482 = (function (map_GT_,f,ch,meta26483){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26483 = meta26483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26484,meta26483__$1){
var self__ = this;
var _26484__$1 = this;
return (new cljs.core.async.t26482(self__.map_GT_,self__.f,self__.ch,meta26483__$1));
});

cljs.core.async.t26482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26484){
var self__ = this;
var _26484__$1 = this;
return self__.meta26483;
});

cljs.core.async.t26482.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26482.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26482.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26483","meta26483",-1501976814,null)], null);
});

cljs.core.async.t26482.cljs$lang$type = true;

cljs.core.async.t26482.cljs$lang$ctorStr = "cljs.core.async/t26482";

cljs.core.async.t26482.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26482");
});

cljs.core.async.__GT_t26482 = (function cljs$core$async$map_GT__$___GT_t26482(map_GT___$1,f__$1,ch__$1,meta26483){
return (new cljs.core.async.t26482(map_GT___$1,f__$1,ch__$1,meta26483));
});

}

return (new cljs.core.async.t26482(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26488 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26488 = (function (filter_GT_,p,ch,meta26489){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26489 = meta26489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26490,meta26489__$1){
var self__ = this;
var _26490__$1 = this;
return (new cljs.core.async.t26488(self__.filter_GT_,self__.p,self__.ch,meta26489__$1));
});

cljs.core.async.t26488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26490){
var self__ = this;
var _26490__$1 = this;
return self__.meta26489;
});

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26489","meta26489",-847964930,null)], null);
});

cljs.core.async.t26488.cljs$lang$type = true;

cljs.core.async.t26488.cljs$lang$ctorStr = "cljs.core.async/t26488";

cljs.core.async.t26488.cljs$lang$ctorPrWriter = (function (this__16687__auto__,writer__16688__auto__,opt__16689__auto__){
return cljs.core._write.call(null,writer__16688__auto__,"cljs.core.async/t26488");
});

cljs.core.async.__GT_t26488 = (function cljs$core$async$filter_GT__$___GT_t26488(filter_GT___$1,p__$1,ch__$1,meta26489){
return (new cljs.core.async.t26488(filter_GT___$1,p__$1,ch__$1,meta26489));
});

}

return (new cljs.core.async.t26488(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__26492 = arguments.length;
switch (G__26492) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26535,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26535,out){
return (function (state_26513){
var state_val_26514 = (state_26513[(1)]);
if((state_val_26514 === (7))){
var inst_26509 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26515_26536 = state_26513__$1;
(statearr_26515_26536[(2)] = inst_26509);

(statearr_26515_26536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (1))){
var state_26513__$1 = state_26513;
var statearr_26516_26537 = state_26513__$1;
(statearr_26516_26537[(2)] = null);

(statearr_26516_26537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (4))){
var inst_26495 = (state_26513[(7)]);
var inst_26495__$1 = (state_26513[(2)]);
var inst_26496 = (inst_26495__$1 == null);
var state_26513__$1 = (function (){var statearr_26517 = state_26513;
(statearr_26517[(7)] = inst_26495__$1);

return statearr_26517;
})();
if(cljs.core.truth_(inst_26496)){
var statearr_26518_26538 = state_26513__$1;
(statearr_26518_26538[(1)] = (5));

} else {
var statearr_26519_26539 = state_26513__$1;
(statearr_26519_26539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (6))){
var inst_26495 = (state_26513[(7)]);
var inst_26500 = p.call(null,inst_26495);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26500)){
var statearr_26520_26540 = state_26513__$1;
(statearr_26520_26540[(1)] = (8));

} else {
var statearr_26521_26541 = state_26513__$1;
(statearr_26521_26541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (3))){
var inst_26511 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26513__$1,inst_26511);
} else {
if((state_val_26514 === (2))){
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(4),ch);
} else {
if((state_val_26514 === (11))){
var inst_26503 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26522_26542 = state_26513__$1;
(statearr_26522_26542[(2)] = inst_26503);

(statearr_26522_26542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (9))){
var state_26513__$1 = state_26513;
var statearr_26523_26543 = state_26513__$1;
(statearr_26523_26543[(2)] = null);

(statearr_26523_26543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (5))){
var inst_26498 = cljs.core.async.close_BANG_.call(null,out);
var state_26513__$1 = state_26513;
var statearr_26524_26544 = state_26513__$1;
(statearr_26524_26544[(2)] = inst_26498);

(statearr_26524_26544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (10))){
var inst_26506 = (state_26513[(2)]);
var state_26513__$1 = (function (){var statearr_26525 = state_26513;
(statearr_26525[(8)] = inst_26506);

return statearr_26525;
})();
var statearr_26526_26545 = state_26513__$1;
(statearr_26526_26545[(2)] = null);

(statearr_26526_26545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (8))){
var inst_26495 = (state_26513[(7)]);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26513__$1,(11),out,inst_26495);
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
});})(c__19118__auto___26535,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26535,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26530 = [null,null,null,null,null,null,null,null,null];
(statearr_26530[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26530[(1)] = (1));

return statearr_26530;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26513){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26531){if((e26531 instanceof Object)){
var ex__19060__auto__ = e26531;
var statearr_26532_26546 = state_26513;
(statearr_26532_26546[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26547 = state_26513;
state_26513 = G__26547;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26535,out))
})();
var state__19120__auto__ = (function (){var statearr_26533 = f__19119__auto__.call(null);
(statearr_26533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26535);

return statearr_26533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26535,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__26549 = arguments.length;
switch (G__26549) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto__){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto__){
return (function (state_26716){
var state_val_26717 = (state_26716[(1)]);
if((state_val_26717 === (7))){
var inst_26712 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26718_26759 = state_26716__$1;
(statearr_26718_26759[(2)] = inst_26712);

(statearr_26718_26759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (20))){
var inst_26682 = (state_26716[(7)]);
var inst_26693 = (state_26716[(2)]);
var inst_26694 = cljs.core.next.call(null,inst_26682);
var inst_26668 = inst_26694;
var inst_26669 = null;
var inst_26670 = (0);
var inst_26671 = (0);
var state_26716__$1 = (function (){var statearr_26719 = state_26716;
(statearr_26719[(8)] = inst_26668);

(statearr_26719[(9)] = inst_26693);

(statearr_26719[(10)] = inst_26671);

(statearr_26719[(11)] = inst_26670);

(statearr_26719[(12)] = inst_26669);

return statearr_26719;
})();
var statearr_26720_26760 = state_26716__$1;
(statearr_26720_26760[(2)] = null);

(statearr_26720_26760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (1))){
var state_26716__$1 = state_26716;
var statearr_26721_26761 = state_26716__$1;
(statearr_26721_26761[(2)] = null);

(statearr_26721_26761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (4))){
var inst_26657 = (state_26716[(13)]);
var inst_26657__$1 = (state_26716[(2)]);
var inst_26658 = (inst_26657__$1 == null);
var state_26716__$1 = (function (){var statearr_26722 = state_26716;
(statearr_26722[(13)] = inst_26657__$1);

return statearr_26722;
})();
if(cljs.core.truth_(inst_26658)){
var statearr_26723_26762 = state_26716__$1;
(statearr_26723_26762[(1)] = (5));

} else {
var statearr_26724_26763 = state_26716__$1;
(statearr_26724_26763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (15))){
var state_26716__$1 = state_26716;
var statearr_26728_26764 = state_26716__$1;
(statearr_26728_26764[(2)] = null);

(statearr_26728_26764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (21))){
var state_26716__$1 = state_26716;
var statearr_26729_26765 = state_26716__$1;
(statearr_26729_26765[(2)] = null);

(statearr_26729_26765[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (13))){
var inst_26668 = (state_26716[(8)]);
var inst_26671 = (state_26716[(10)]);
var inst_26670 = (state_26716[(11)]);
var inst_26669 = (state_26716[(12)]);
var inst_26678 = (state_26716[(2)]);
var inst_26679 = (inst_26671 + (1));
var tmp26725 = inst_26668;
var tmp26726 = inst_26670;
var tmp26727 = inst_26669;
var inst_26668__$1 = tmp26725;
var inst_26669__$1 = tmp26727;
var inst_26670__$1 = tmp26726;
var inst_26671__$1 = inst_26679;
var state_26716__$1 = (function (){var statearr_26730 = state_26716;
(statearr_26730[(8)] = inst_26668__$1);

(statearr_26730[(14)] = inst_26678);

(statearr_26730[(10)] = inst_26671__$1);

(statearr_26730[(11)] = inst_26670__$1);

(statearr_26730[(12)] = inst_26669__$1);

return statearr_26730;
})();
var statearr_26731_26766 = state_26716__$1;
(statearr_26731_26766[(2)] = null);

(statearr_26731_26766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (22))){
var state_26716__$1 = state_26716;
var statearr_26732_26767 = state_26716__$1;
(statearr_26732_26767[(2)] = null);

(statearr_26732_26767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (6))){
var inst_26657 = (state_26716[(13)]);
var inst_26666 = f.call(null,inst_26657);
var inst_26667 = cljs.core.seq.call(null,inst_26666);
var inst_26668 = inst_26667;
var inst_26669 = null;
var inst_26670 = (0);
var inst_26671 = (0);
var state_26716__$1 = (function (){var statearr_26733 = state_26716;
(statearr_26733[(8)] = inst_26668);

(statearr_26733[(10)] = inst_26671);

(statearr_26733[(11)] = inst_26670);

(statearr_26733[(12)] = inst_26669);

return statearr_26733;
})();
var statearr_26734_26768 = state_26716__$1;
(statearr_26734_26768[(2)] = null);

(statearr_26734_26768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (17))){
var inst_26682 = (state_26716[(7)]);
var inst_26686 = cljs.core.chunk_first.call(null,inst_26682);
var inst_26687 = cljs.core.chunk_rest.call(null,inst_26682);
var inst_26688 = cljs.core.count.call(null,inst_26686);
var inst_26668 = inst_26687;
var inst_26669 = inst_26686;
var inst_26670 = inst_26688;
var inst_26671 = (0);
var state_26716__$1 = (function (){var statearr_26735 = state_26716;
(statearr_26735[(8)] = inst_26668);

(statearr_26735[(10)] = inst_26671);

(statearr_26735[(11)] = inst_26670);

(statearr_26735[(12)] = inst_26669);

return statearr_26735;
})();
var statearr_26736_26769 = state_26716__$1;
(statearr_26736_26769[(2)] = null);

(statearr_26736_26769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (3))){
var inst_26714 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26716__$1,inst_26714);
} else {
if((state_val_26717 === (12))){
var inst_26702 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26737_26770 = state_26716__$1;
(statearr_26737_26770[(2)] = inst_26702);

(statearr_26737_26770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (2))){
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26716__$1,(4),in$);
} else {
if((state_val_26717 === (23))){
var inst_26710 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26738_26771 = state_26716__$1;
(statearr_26738_26771[(2)] = inst_26710);

(statearr_26738_26771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (19))){
var inst_26697 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26739_26772 = state_26716__$1;
(statearr_26739_26772[(2)] = inst_26697);

(statearr_26739_26772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (11))){
var inst_26668 = (state_26716[(8)]);
var inst_26682 = (state_26716[(7)]);
var inst_26682__$1 = cljs.core.seq.call(null,inst_26668);
var state_26716__$1 = (function (){var statearr_26740 = state_26716;
(statearr_26740[(7)] = inst_26682__$1);

return statearr_26740;
})();
if(inst_26682__$1){
var statearr_26741_26773 = state_26716__$1;
(statearr_26741_26773[(1)] = (14));

} else {
var statearr_26742_26774 = state_26716__$1;
(statearr_26742_26774[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (9))){
var inst_26704 = (state_26716[(2)]);
var inst_26705 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26716__$1 = (function (){var statearr_26743 = state_26716;
(statearr_26743[(15)] = inst_26704);

return statearr_26743;
})();
if(cljs.core.truth_(inst_26705)){
var statearr_26744_26775 = state_26716__$1;
(statearr_26744_26775[(1)] = (21));

} else {
var statearr_26745_26776 = state_26716__$1;
(statearr_26745_26776[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (5))){
var inst_26660 = cljs.core.async.close_BANG_.call(null,out);
var state_26716__$1 = state_26716;
var statearr_26746_26777 = state_26716__$1;
(statearr_26746_26777[(2)] = inst_26660);

(statearr_26746_26777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (14))){
var inst_26682 = (state_26716[(7)]);
var inst_26684 = cljs.core.chunked_seq_QMARK_.call(null,inst_26682);
var state_26716__$1 = state_26716;
if(inst_26684){
var statearr_26747_26778 = state_26716__$1;
(statearr_26747_26778[(1)] = (17));

} else {
var statearr_26748_26779 = state_26716__$1;
(statearr_26748_26779[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (16))){
var inst_26700 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26749_26780 = state_26716__$1;
(statearr_26749_26780[(2)] = inst_26700);

(statearr_26749_26780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (10))){
var inst_26671 = (state_26716[(10)]);
var inst_26669 = (state_26716[(12)]);
var inst_26676 = cljs.core._nth.call(null,inst_26669,inst_26671);
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26716__$1,(13),out,inst_26676);
} else {
if((state_val_26717 === (18))){
var inst_26682 = (state_26716[(7)]);
var inst_26691 = cljs.core.first.call(null,inst_26682);
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26716__$1,(20),out,inst_26691);
} else {
if((state_val_26717 === (8))){
var inst_26671 = (state_26716[(10)]);
var inst_26670 = (state_26716[(11)]);
var inst_26673 = (inst_26671 < inst_26670);
var inst_26674 = inst_26673;
var state_26716__$1 = state_26716;
if(cljs.core.truth_(inst_26674)){
var statearr_26750_26781 = state_26716__$1;
(statearr_26750_26781[(1)] = (10));

} else {
var statearr_26751_26782 = state_26716__$1;
(statearr_26751_26782[(1)] = (11));

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
});})(c__19118__auto__))
;
return ((function (switch__19056__auto__,c__19118__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____0 = (function (){
var statearr_26755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26755[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__);

(statearr_26755[(1)] = (1));

return statearr_26755;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____1 = (function (state_26716){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26756){if((e26756 instanceof Object)){
var ex__19060__auto__ = e26756;
var statearr_26757_26783 = state_26716;
(statearr_26757_26783[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26784 = state_26716;
state_26716 = G__26784;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__ = function(state_26716){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____1.call(this,state_26716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19057__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto__))
})();
var state__19120__auto__ = (function (){var statearr_26758 = f__19119__auto__.call(null);
(statearr_26758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto__);

return statearr_26758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto__))
);

return c__19118__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__26786 = arguments.length;
switch (G__26786) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__26789 = arguments.length;
switch (G__26789) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__26792 = arguments.length;
switch (G__26792) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26842,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26842,out){
return (function (state_26816){
var state_val_26817 = (state_26816[(1)]);
if((state_val_26817 === (7))){
var inst_26811 = (state_26816[(2)]);
var state_26816__$1 = state_26816;
var statearr_26818_26843 = state_26816__$1;
(statearr_26818_26843[(2)] = inst_26811);

(statearr_26818_26843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (1))){
var inst_26793 = null;
var state_26816__$1 = (function (){var statearr_26819 = state_26816;
(statearr_26819[(7)] = inst_26793);

return statearr_26819;
})();
var statearr_26820_26844 = state_26816__$1;
(statearr_26820_26844[(2)] = null);

(statearr_26820_26844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (4))){
var inst_26796 = (state_26816[(8)]);
var inst_26796__$1 = (state_26816[(2)]);
var inst_26797 = (inst_26796__$1 == null);
var inst_26798 = cljs.core.not.call(null,inst_26797);
var state_26816__$1 = (function (){var statearr_26821 = state_26816;
(statearr_26821[(8)] = inst_26796__$1);

return statearr_26821;
})();
if(inst_26798){
var statearr_26822_26845 = state_26816__$1;
(statearr_26822_26845[(1)] = (5));

} else {
var statearr_26823_26846 = state_26816__$1;
(statearr_26823_26846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (6))){
var state_26816__$1 = state_26816;
var statearr_26824_26847 = state_26816__$1;
(statearr_26824_26847[(2)] = null);

(statearr_26824_26847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (3))){
var inst_26813 = (state_26816[(2)]);
var inst_26814 = cljs.core.async.close_BANG_.call(null,out);
var state_26816__$1 = (function (){var statearr_26825 = state_26816;
(statearr_26825[(9)] = inst_26813);

return statearr_26825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26816__$1,inst_26814);
} else {
if((state_val_26817 === (2))){
var state_26816__$1 = state_26816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26816__$1,(4),ch);
} else {
if((state_val_26817 === (11))){
var inst_26796 = (state_26816[(8)]);
var inst_26805 = (state_26816[(2)]);
var inst_26793 = inst_26796;
var state_26816__$1 = (function (){var statearr_26826 = state_26816;
(statearr_26826[(10)] = inst_26805);

(statearr_26826[(7)] = inst_26793);

return statearr_26826;
})();
var statearr_26827_26848 = state_26816__$1;
(statearr_26827_26848[(2)] = null);

(statearr_26827_26848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (9))){
var inst_26796 = (state_26816[(8)]);
var state_26816__$1 = state_26816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26816__$1,(11),out,inst_26796);
} else {
if((state_val_26817 === (5))){
var inst_26796 = (state_26816[(8)]);
var inst_26793 = (state_26816[(7)]);
var inst_26800 = cljs.core._EQ_.call(null,inst_26796,inst_26793);
var state_26816__$1 = state_26816;
if(inst_26800){
var statearr_26829_26849 = state_26816__$1;
(statearr_26829_26849[(1)] = (8));

} else {
var statearr_26830_26850 = state_26816__$1;
(statearr_26830_26850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (10))){
var inst_26808 = (state_26816[(2)]);
var state_26816__$1 = state_26816;
var statearr_26831_26851 = state_26816__$1;
(statearr_26831_26851[(2)] = inst_26808);

(statearr_26831_26851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (8))){
var inst_26793 = (state_26816[(7)]);
var tmp26828 = inst_26793;
var inst_26793__$1 = tmp26828;
var state_26816__$1 = (function (){var statearr_26832 = state_26816;
(statearr_26832[(7)] = inst_26793__$1);

return statearr_26832;
})();
var statearr_26833_26852 = state_26816__$1;
(statearr_26833_26852[(2)] = null);

(statearr_26833_26852[(1)] = (2));


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
});})(c__19118__auto___26842,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26842,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26837[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26837[(1)] = (1));

return statearr_26837;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26816){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26838){if((e26838 instanceof Object)){
var ex__19060__auto__ = e26838;
var statearr_26839_26853 = state_26816;
(statearr_26839_26853[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26854 = state_26816;
state_26816 = G__26854;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26842,out))
})();
var state__19120__auto__ = (function (){var statearr_26840 = f__19119__auto__.call(null);
(statearr_26840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26842);

return statearr_26840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26842,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__26856 = arguments.length;
switch (G__26856) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___26925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___26925,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___26925,out){
return (function (state_26894){
var state_val_26895 = (state_26894[(1)]);
if((state_val_26895 === (7))){
var inst_26890 = (state_26894[(2)]);
var state_26894__$1 = state_26894;
var statearr_26896_26926 = state_26894__$1;
(statearr_26896_26926[(2)] = inst_26890);

(statearr_26896_26926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (1))){
var inst_26857 = (new Array(n));
var inst_26858 = inst_26857;
var inst_26859 = (0);
var state_26894__$1 = (function (){var statearr_26897 = state_26894;
(statearr_26897[(7)] = inst_26859);

(statearr_26897[(8)] = inst_26858);

return statearr_26897;
})();
var statearr_26898_26927 = state_26894__$1;
(statearr_26898_26927[(2)] = null);

(statearr_26898_26927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (4))){
var inst_26862 = (state_26894[(9)]);
var inst_26862__$1 = (state_26894[(2)]);
var inst_26863 = (inst_26862__$1 == null);
var inst_26864 = cljs.core.not.call(null,inst_26863);
var state_26894__$1 = (function (){var statearr_26899 = state_26894;
(statearr_26899[(9)] = inst_26862__$1);

return statearr_26899;
})();
if(inst_26864){
var statearr_26900_26928 = state_26894__$1;
(statearr_26900_26928[(1)] = (5));

} else {
var statearr_26901_26929 = state_26894__$1;
(statearr_26901_26929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (15))){
var inst_26884 = (state_26894[(2)]);
var state_26894__$1 = state_26894;
var statearr_26902_26930 = state_26894__$1;
(statearr_26902_26930[(2)] = inst_26884);

(statearr_26902_26930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (13))){
var state_26894__$1 = state_26894;
var statearr_26903_26931 = state_26894__$1;
(statearr_26903_26931[(2)] = null);

(statearr_26903_26931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (6))){
var inst_26859 = (state_26894[(7)]);
var inst_26880 = (inst_26859 > (0));
var state_26894__$1 = state_26894;
if(cljs.core.truth_(inst_26880)){
var statearr_26904_26932 = state_26894__$1;
(statearr_26904_26932[(1)] = (12));

} else {
var statearr_26905_26933 = state_26894__$1;
(statearr_26905_26933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (3))){
var inst_26892 = (state_26894[(2)]);
var state_26894__$1 = state_26894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26894__$1,inst_26892);
} else {
if((state_val_26895 === (12))){
var inst_26858 = (state_26894[(8)]);
var inst_26882 = cljs.core.vec.call(null,inst_26858);
var state_26894__$1 = state_26894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26894__$1,(15),out,inst_26882);
} else {
if((state_val_26895 === (2))){
var state_26894__$1 = state_26894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26894__$1,(4),ch);
} else {
if((state_val_26895 === (11))){
var inst_26874 = (state_26894[(2)]);
var inst_26875 = (new Array(n));
var inst_26858 = inst_26875;
var inst_26859 = (0);
var state_26894__$1 = (function (){var statearr_26906 = state_26894;
(statearr_26906[(7)] = inst_26859);

(statearr_26906[(8)] = inst_26858);

(statearr_26906[(10)] = inst_26874);

return statearr_26906;
})();
var statearr_26907_26934 = state_26894__$1;
(statearr_26907_26934[(2)] = null);

(statearr_26907_26934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (9))){
var inst_26858 = (state_26894[(8)]);
var inst_26872 = cljs.core.vec.call(null,inst_26858);
var state_26894__$1 = state_26894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26894__$1,(11),out,inst_26872);
} else {
if((state_val_26895 === (5))){
var inst_26862 = (state_26894[(9)]);
var inst_26859 = (state_26894[(7)]);
var inst_26858 = (state_26894[(8)]);
var inst_26867 = (state_26894[(11)]);
var inst_26866 = (inst_26858[inst_26859] = inst_26862);
var inst_26867__$1 = (inst_26859 + (1));
var inst_26868 = (inst_26867__$1 < n);
var state_26894__$1 = (function (){var statearr_26908 = state_26894;
(statearr_26908[(12)] = inst_26866);

(statearr_26908[(11)] = inst_26867__$1);

return statearr_26908;
})();
if(cljs.core.truth_(inst_26868)){
var statearr_26909_26935 = state_26894__$1;
(statearr_26909_26935[(1)] = (8));

} else {
var statearr_26910_26936 = state_26894__$1;
(statearr_26910_26936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (14))){
var inst_26887 = (state_26894[(2)]);
var inst_26888 = cljs.core.async.close_BANG_.call(null,out);
var state_26894__$1 = (function (){var statearr_26912 = state_26894;
(statearr_26912[(13)] = inst_26887);

return statearr_26912;
})();
var statearr_26913_26937 = state_26894__$1;
(statearr_26913_26937[(2)] = inst_26888);

(statearr_26913_26937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (10))){
var inst_26878 = (state_26894[(2)]);
var state_26894__$1 = state_26894;
var statearr_26914_26938 = state_26894__$1;
(statearr_26914_26938[(2)] = inst_26878);

(statearr_26914_26938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (8))){
var inst_26858 = (state_26894[(8)]);
var inst_26867 = (state_26894[(11)]);
var tmp26911 = inst_26858;
var inst_26858__$1 = tmp26911;
var inst_26859 = inst_26867;
var state_26894__$1 = (function (){var statearr_26915 = state_26894;
(statearr_26915[(7)] = inst_26859);

(statearr_26915[(8)] = inst_26858__$1);

return statearr_26915;
})();
var statearr_26916_26939 = state_26894__$1;
(statearr_26916_26939[(2)] = null);

(statearr_26916_26939[(1)] = (2));


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
});})(c__19118__auto___26925,out))
;
return ((function (switch__19056__auto__,c__19118__auto___26925,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_26920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26920[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_26920[(1)] = (1));

return statearr_26920;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26894){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e26921){if((e26921 instanceof Object)){
var ex__19060__auto__ = e26921;
var statearr_26922_26940 = state_26894;
(statearr_26922_26940[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26941 = state_26894;
state_26894 = G__26941;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___26925,out))
})();
var state__19120__auto__ = (function (){var statearr_26923 = f__19119__auto__.call(null);
(statearr_26923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___26925);

return statearr_26923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___26925,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__26943 = arguments.length;
switch (G__26943) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19118__auto___27016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19118__auto___27016,out){
return (function (){
var f__19119__auto__ = (function (){var switch__19056__auto__ = ((function (c__19118__auto___27016,out){
return (function (state_26985){
var state_val_26986 = (state_26985[(1)]);
if((state_val_26986 === (7))){
var inst_26981 = (state_26985[(2)]);
var state_26985__$1 = state_26985;
var statearr_26987_27017 = state_26985__$1;
(statearr_26987_27017[(2)] = inst_26981);

(statearr_26987_27017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (1))){
var inst_26944 = [];
var inst_26945 = inst_26944;
var inst_26946 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26985__$1 = (function (){var statearr_26988 = state_26985;
(statearr_26988[(7)] = inst_26945);

(statearr_26988[(8)] = inst_26946);

return statearr_26988;
})();
var statearr_26989_27018 = state_26985__$1;
(statearr_26989_27018[(2)] = null);

(statearr_26989_27018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (4))){
var inst_26949 = (state_26985[(9)]);
var inst_26949__$1 = (state_26985[(2)]);
var inst_26950 = (inst_26949__$1 == null);
var inst_26951 = cljs.core.not.call(null,inst_26950);
var state_26985__$1 = (function (){var statearr_26990 = state_26985;
(statearr_26990[(9)] = inst_26949__$1);

return statearr_26990;
})();
if(inst_26951){
var statearr_26991_27019 = state_26985__$1;
(statearr_26991_27019[(1)] = (5));

} else {
var statearr_26992_27020 = state_26985__$1;
(statearr_26992_27020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (15))){
var inst_26975 = (state_26985[(2)]);
var state_26985__$1 = state_26985;
var statearr_26993_27021 = state_26985__$1;
(statearr_26993_27021[(2)] = inst_26975);

(statearr_26993_27021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (13))){
var state_26985__$1 = state_26985;
var statearr_26994_27022 = state_26985__$1;
(statearr_26994_27022[(2)] = null);

(statearr_26994_27022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (6))){
var inst_26945 = (state_26985[(7)]);
var inst_26970 = inst_26945.length;
var inst_26971 = (inst_26970 > (0));
var state_26985__$1 = state_26985;
if(cljs.core.truth_(inst_26971)){
var statearr_26995_27023 = state_26985__$1;
(statearr_26995_27023[(1)] = (12));

} else {
var statearr_26996_27024 = state_26985__$1;
(statearr_26996_27024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (3))){
var inst_26983 = (state_26985[(2)]);
var state_26985__$1 = state_26985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26985__$1,inst_26983);
} else {
if((state_val_26986 === (12))){
var inst_26945 = (state_26985[(7)]);
var inst_26973 = cljs.core.vec.call(null,inst_26945);
var state_26985__$1 = state_26985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26985__$1,(15),out,inst_26973);
} else {
if((state_val_26986 === (2))){
var state_26985__$1 = state_26985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26985__$1,(4),ch);
} else {
if((state_val_26986 === (11))){
var inst_26949 = (state_26985[(9)]);
var inst_26953 = (state_26985[(10)]);
var inst_26963 = (state_26985[(2)]);
var inst_26964 = [];
var inst_26965 = inst_26964.push(inst_26949);
var inst_26945 = inst_26964;
var inst_26946 = inst_26953;
var state_26985__$1 = (function (){var statearr_26997 = state_26985;
(statearr_26997[(11)] = inst_26965);

(statearr_26997[(7)] = inst_26945);

(statearr_26997[(8)] = inst_26946);

(statearr_26997[(12)] = inst_26963);

return statearr_26997;
})();
var statearr_26998_27025 = state_26985__$1;
(statearr_26998_27025[(2)] = null);

(statearr_26998_27025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (9))){
var inst_26945 = (state_26985[(7)]);
var inst_26961 = cljs.core.vec.call(null,inst_26945);
var state_26985__$1 = state_26985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26985__$1,(11),out,inst_26961);
} else {
if((state_val_26986 === (5))){
var inst_26949 = (state_26985[(9)]);
var inst_26946 = (state_26985[(8)]);
var inst_26953 = (state_26985[(10)]);
var inst_26953__$1 = f.call(null,inst_26949);
var inst_26954 = cljs.core._EQ_.call(null,inst_26953__$1,inst_26946);
var inst_26955 = cljs.core.keyword_identical_QMARK_.call(null,inst_26946,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26956 = (inst_26954) || (inst_26955);
var state_26985__$1 = (function (){var statearr_26999 = state_26985;
(statearr_26999[(10)] = inst_26953__$1);

return statearr_26999;
})();
if(cljs.core.truth_(inst_26956)){
var statearr_27000_27026 = state_26985__$1;
(statearr_27000_27026[(1)] = (8));

} else {
var statearr_27001_27027 = state_26985__$1;
(statearr_27001_27027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (14))){
var inst_26978 = (state_26985[(2)]);
var inst_26979 = cljs.core.async.close_BANG_.call(null,out);
var state_26985__$1 = (function (){var statearr_27003 = state_26985;
(statearr_27003[(13)] = inst_26978);

return statearr_27003;
})();
var statearr_27004_27028 = state_26985__$1;
(statearr_27004_27028[(2)] = inst_26979);

(statearr_27004_27028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (10))){
var inst_26968 = (state_26985[(2)]);
var state_26985__$1 = state_26985;
var statearr_27005_27029 = state_26985__$1;
(statearr_27005_27029[(2)] = inst_26968);

(statearr_27005_27029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (8))){
var inst_26949 = (state_26985[(9)]);
var inst_26945 = (state_26985[(7)]);
var inst_26953 = (state_26985[(10)]);
var inst_26958 = inst_26945.push(inst_26949);
var tmp27002 = inst_26945;
var inst_26945__$1 = tmp27002;
var inst_26946 = inst_26953;
var state_26985__$1 = (function (){var statearr_27006 = state_26985;
(statearr_27006[(14)] = inst_26958);

(statearr_27006[(7)] = inst_26945__$1);

(statearr_27006[(8)] = inst_26946);

return statearr_27006;
})();
var statearr_27007_27030 = state_26985__$1;
(statearr_27007_27030[(2)] = null);

(statearr_27007_27030[(1)] = (2));


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
});})(c__19118__auto___27016,out))
;
return ((function (switch__19056__auto__,c__19118__auto___27016,out){
return (function() {
var cljs$core$async$state_machine__19057__auto__ = null;
var cljs$core$async$state_machine__19057__auto____0 = (function (){
var statearr_27011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27011[(0)] = cljs$core$async$state_machine__19057__auto__);

(statearr_27011[(1)] = (1));

return statearr_27011;
});
var cljs$core$async$state_machine__19057__auto____1 = (function (state_26985){
while(true){
var ret_value__19058__auto__ = (function (){try{while(true){
var result__19059__auto__ = switch__19056__auto__.call(null,state_26985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19059__auto__;
}
break;
}
}catch (e27012){if((e27012 instanceof Object)){
var ex__19060__auto__ = e27012;
var statearr_27013_27031 = state_26985;
(statearr_27013_27031[(5)] = ex__19060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27032 = state_26985;
state_26985 = G__27032;
continue;
} else {
return ret_value__19058__auto__;
}
break;
}
});
cljs$core$async$state_machine__19057__auto__ = function(state_26985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19057__auto____1.call(this,state_26985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19057__auto____0;
cljs$core$async$state_machine__19057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19057__auto____1;
return cljs$core$async$state_machine__19057__auto__;
})()
;})(switch__19056__auto__,c__19118__auto___27016,out))
})();
var state__19120__auto__ = (function (){var statearr_27014 = f__19119__auto__.call(null);
(statearr_27014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19118__auto___27016);

return statearr_27014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19120__auto__);
});})(c__19118__auto___27016,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1468806599669