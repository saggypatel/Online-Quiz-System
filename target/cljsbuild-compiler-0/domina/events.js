// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj6563 = {};return obj6563;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3431__auto__ = evt;if(and__3431__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3431__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4070__auto__ = (((evt == null))?null:evt);return (function (){var or__3443__auto__ = (domina.events.prevent_default[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.events.prevent_default["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3431__auto__ = evt;if(and__3431__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3431__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4070__auto__ = (((evt == null))?null:evt);return (function (){var or__3443__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3431__auto__ = evt;if(and__3431__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3431__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4070__auto__ = (((evt == null))?null:evt);return (function (){var or__3443__auto__ = (domina.events.target[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.events.target["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3431__auto__ = evt;if(and__3431__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3431__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4070__auto__ = (((evt == null))?null:evt);return (function (){var or__3443__auto__ = (domina.events.current_target[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.events.current_target["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3431__auto__ = evt;if(and__3431__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3431__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4070__auto__ = (((evt == null))?null:evt);return (function (){var or__3443__auto__ = (domina.events.event_type[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.events.event_type["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3431__auto__ = evt;if(and__3431__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3431__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4070__auto__ = (((evt == null))?null:evt);return (function (){var or__3443__auto__ = (domina.events.raw_event[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.events.raw_event["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t6567 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t6567 = (function (evt,f,create_listener_function,meta6568){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta6568 = meta6568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t6567.cljs$lang$type = true;
domina.events.t6567.cljs$lang$ctorStr = "domina.events/t6567";
domina.events.t6567.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"domina.events/t6567");
});
domina.events.t6567.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t6567.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3443__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return not_found;
}
});
domina.events.t6567.prototype.domina$events$Event$ = true;
domina.events.t6567.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t6567.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t6567.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t6567.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t6567.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t6567.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t6567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6569){var self__ = this;
var _6569__$1 = this;return self__.meta6568;
});
domina.events.t6567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6569,meta6568__$1){var self__ = this;
var _6569__$1 = this;return (new domina.events.t6567(self__.evt,self__.f,self__.create_listener_function,meta6568__$1));
});
domina.events.__GT_t6567 = (function __GT_t6567(evt__$1,f__$1,create_listener_function__$1,meta6568){return (new domina.events.t6567(evt__$1,f__$1,create_listener_function__$1,meta6568));
});
}
return (new domina.events.t6567(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4160__auto__ = (function iter__6574(s__6575){return (new cljs.core.LazySeq(null,(function (){var s__6575__$1 = s__6575;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6575__$1);if(temp__4126__auto__)
{var s__6575__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6575__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6575__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6577 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6576 = 0;while(true){
if((i__6576 < size__4159__auto__))
{var node = cljs.core._nth.call(null,c__4158__auto__,i__6576);cljs.core.chunk_append.call(null,b__6577,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__6578 = (i__6576 + 1);
i__6576 = G__6578;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6577),iter__6574.call(null,cljs.core.chunk_rest.call(null,s__6575__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6577),null);
}
} else
{var node = cljs.core.first.call(null,s__6575__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__6574.call(null,cljs.core.rest.call(null,s__6575__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__6587 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6588 = null;var count__6589 = 0;var i__6590 = 0;while(true){
if((i__6590 < count__6589))
{var node = cljs.core._nth.call(null,chunk__6588,i__6590);goog.events.removeAll(node);
{
var G__6595 = seq__6587;
var G__6596 = chunk__6588;
var G__6597 = count__6589;
var G__6598 = (i__6590 + 1);
seq__6587 = G__6595;
chunk__6588 = G__6596;
count__6589 = G__6597;
i__6590 = G__6598;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6587);if(temp__4126__auto__)
{var seq__6587__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6587__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6587__$1);{
var G__6599 = cljs.core.chunk_rest.call(null,seq__6587__$1);
var G__6600 = c__4191__auto__;
var G__6601 = cljs.core.count.call(null,c__4191__auto__);
var G__6602 = 0;
seq__6587 = G__6599;
chunk__6588 = G__6600;
count__6589 = G__6601;
i__6590 = G__6602;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__6587__$1);goog.events.removeAll(node);
{
var G__6603 = cljs.core.next.call(null,seq__6587__$1);
var G__6604 = null;
var G__6605 = 0;
var G__6606 = 0;
seq__6587 = G__6603;
chunk__6588 = G__6604;
count__6589 = G__6605;
i__6590 = G__6606;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__6591 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6592 = null;var count__6593 = 0;var i__6594 = 0;while(true){
if((i__6594 < count__6593))
{var node = cljs.core._nth.call(null,chunk__6592,i__6594);goog.events.removeAll(node,type__$1);
{
var G__6607 = seq__6591;
var G__6608 = chunk__6592;
var G__6609 = count__6593;
var G__6610 = (i__6594 + 1);
seq__6591 = G__6607;
chunk__6592 = G__6608;
count__6593 = G__6609;
i__6594 = G__6610;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6591);if(temp__4126__auto__)
{var seq__6591__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6591__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6591__$1);{
var G__6611 = cljs.core.chunk_rest.call(null,seq__6591__$1);
var G__6612 = c__4191__auto__;
var G__6613 = cljs.core.count.call(null,c__4191__auto__);
var G__6614 = 0;
seq__6591 = G__6611;
chunk__6592 = G__6612;
count__6593 = G__6613;
i__6594 = G__6614;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__6591__$1);goog.events.removeAll(node,type__$1);
{
var G__6615 = cljs.core.next.call(null,seq__6591__$1);
var G__6616 = null;
var G__6617 = 0;
var G__6618 = 0;
seq__6591 = G__6615;
chunk__6592 = G__6616;
count__6593 = G__6617;
i__6594 = G__6618;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__6619 = parent;
var G__6620 = cljs.core.cons.call(null,parent,so_far);
n = G__6619;
so_far = G__6620;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node.call(null,source);
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__6629_6637 = cljs.core.seq.call(null,ancestors);var chunk__6630_6638 = null;var count__6631_6639 = 0;var i__6632_6640 = 0;while(true){
if((i__6632_6640 < count__6631_6639))
{var n_6641 = cljs.core._nth.call(null,chunk__6630_6638,i__6632_6640);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6641;
goog.events.fireListeners(n_6641,evt.type,true,evt);
}
{
var G__6642 = seq__6629_6637;
var G__6643 = chunk__6630_6638;
var G__6644 = count__6631_6639;
var G__6645 = (i__6632_6640 + 1);
seq__6629_6637 = G__6642;
chunk__6630_6638 = G__6643;
count__6631_6639 = G__6644;
i__6632_6640 = G__6645;
continue;
}
} else
{var temp__4126__auto___6646 = cljs.core.seq.call(null,seq__6629_6637);if(temp__4126__auto___6646)
{var seq__6629_6647__$1 = temp__4126__auto___6646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6629_6647__$1))
{var c__4191__auto___6648 = cljs.core.chunk_first.call(null,seq__6629_6647__$1);{
var G__6649 = cljs.core.chunk_rest.call(null,seq__6629_6647__$1);
var G__6650 = c__4191__auto___6648;
var G__6651 = cljs.core.count.call(null,c__4191__auto___6648);
var G__6652 = 0;
seq__6629_6637 = G__6649;
chunk__6630_6638 = G__6650;
count__6631_6639 = G__6651;
i__6632_6640 = G__6652;
continue;
}
} else
{var n_6653 = cljs.core.first.call(null,seq__6629_6647__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6653;
goog.events.fireListeners(n_6653,evt.type,true,evt);
}
{
var G__6654 = cljs.core.next.call(null,seq__6629_6647__$1);
var G__6655 = null;
var G__6656 = 0;
var G__6657 = 0;
seq__6629_6637 = G__6654;
chunk__6630_6638 = G__6655;
count__6631_6639 = G__6656;
i__6632_6640 = G__6657;
continue;
}
}
} else
{}
}
break;
}
var seq__6633_6658 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__6634_6659 = null;var count__6635_6660 = 0;var i__6636_6661 = 0;while(true){
if((i__6636_6661 < count__6635_6660))
{var n_6662 = cljs.core._nth.call(null,chunk__6634_6659,i__6636_6661);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6662;
goog.events.fireListeners(n_6662,evt.type,false,evt);
}
{
var G__6663 = seq__6633_6658;
var G__6664 = chunk__6634_6659;
var G__6665 = count__6635_6660;
var G__6666 = (i__6636_6661 + 1);
seq__6633_6658 = G__6663;
chunk__6634_6659 = G__6664;
count__6635_6660 = G__6665;
i__6636_6661 = G__6666;
continue;
}
} else
{var temp__4126__auto___6667 = cljs.core.seq.call(null,seq__6633_6658);if(temp__4126__auto___6667)
{var seq__6633_6668__$1 = temp__4126__auto___6667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6633_6668__$1))
{var c__4191__auto___6669 = cljs.core.chunk_first.call(null,seq__6633_6668__$1);{
var G__6670 = cljs.core.chunk_rest.call(null,seq__6633_6668__$1);
var G__6671 = c__4191__auto___6669;
var G__6672 = cljs.core.count.call(null,c__4191__auto___6669);
var G__6673 = 0;
seq__6633_6658 = G__6670;
chunk__6634_6659 = G__6671;
count__6635_6660 = G__6672;
i__6636_6661 = G__6673;
continue;
}
} else
{var n_6674 = cljs.core.first.call(null,seq__6633_6668__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6674;
goog.events.fireListeners(n_6674,evt.type,false,evt);
}
{
var G__6675 = cljs.core.next.call(null,seq__6633_6668__$1);
var G__6676 = null;
var G__6677 = 0;
var G__6678 = 0;
seq__6633_6658 = G__6675;
chunk__6634_6659 = G__6676;
count__6635_6660 = G__6677;
i__6636_6661 = G__6678;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3431__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3431__auto__))
{return o.dispatchEvent;
} else
{return and__3431__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__6685_6691 = cljs.core.seq.call(null,evt_map);var chunk__6686_6692 = null;var count__6687_6693 = 0;var i__6688_6694 = 0;while(true){
if((i__6688_6694 < count__6687_6693))
{var vec__6689_6695 = cljs.core._nth.call(null,chunk__6686_6692,i__6688_6694);var k_6696 = cljs.core.nth.call(null,vec__6689_6695,0,null);var v_6697 = cljs.core.nth.call(null,vec__6689_6695,1,null);(evt[k_6696] = v_6697);
{
var G__6698 = seq__6685_6691;
var G__6699 = chunk__6686_6692;
var G__6700 = count__6687_6693;
var G__6701 = (i__6688_6694 + 1);
seq__6685_6691 = G__6698;
chunk__6686_6692 = G__6699;
count__6687_6693 = G__6700;
i__6688_6694 = G__6701;
continue;
}
} else
{var temp__4126__auto___6702 = cljs.core.seq.call(null,seq__6685_6691);if(temp__4126__auto___6702)
{var seq__6685_6703__$1 = temp__4126__auto___6702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6685_6703__$1))
{var c__4191__auto___6704 = cljs.core.chunk_first.call(null,seq__6685_6703__$1);{
var G__6705 = cljs.core.chunk_rest.call(null,seq__6685_6703__$1);
var G__6706 = c__4191__auto___6704;
var G__6707 = cljs.core.count.call(null,c__4191__auto___6704);
var G__6708 = 0;
seq__6685_6691 = G__6705;
chunk__6686_6692 = G__6706;
count__6687_6693 = G__6707;
i__6688_6694 = G__6708;
continue;
}
} else
{var vec__6690_6709 = cljs.core.first.call(null,seq__6685_6703__$1);var k_6710 = cljs.core.nth.call(null,vec__6690_6709,0,null);var v_6711 = cljs.core.nth.call(null,vec__6690_6709,1,null);(evt[k_6710] = v_6711);
{
var G__6712 = cljs.core.next.call(null,seq__6685_6703__$1);
var G__6713 = null;
var G__6714 = 0;
var G__6715 = 0;
seq__6685_6691 = G__6712;
chunk__6686_6692 = G__6713;
count__6687_6693 = G__6714;
i__6688_6694 = G__6715;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__6716_SHARP_){return goog.events.getListeners(p1__6716_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
