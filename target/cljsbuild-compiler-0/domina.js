// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_6096 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_6097 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_6098 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6098,opt_wrapper_6096,table_section_wrapper_6097,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_6096,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_6097,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6097,cell_wrapper_6098,table_section_wrapper_6097,table_section_wrapper_6097]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3431__auto__ = div.firstChild;if(cljs.core.truth_(and__3431__auto__))
{return div.firstChild.childNodes;
} else
{return and__3431__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__6103 = cljs.core.seq.call(null,tbody);var chunk__6104 = null;var count__6105 = 0;var i__6106 = 0;while(true){
if((i__6106 < count__6105))
{var child = cljs.core._nth.call(null,chunk__6104,i__6106);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6107 = seq__6103;
var G__6108 = chunk__6104;
var G__6109 = count__6105;
var G__6110 = (i__6106 + 1);
seq__6103 = G__6107;
chunk__6104 = G__6108;
count__6105 = G__6109;
i__6106 = G__6110;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6103);if(temp__4126__auto__)
{var seq__6103__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6103__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6103__$1);{
var G__6111 = cljs.core.chunk_rest.call(null,seq__6103__$1);
var G__6112 = c__4191__auto__;
var G__6113 = cljs.core.count.call(null,c__4191__auto__);
var G__6114 = 0;
seq__6103 = G__6111;
chunk__6104 = G__6112;
count__6105 = G__6113;
i__6106 = G__6114;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__6103__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6115 = cljs.core.next.call(null,seq__6103__$1);
var G__6116 = null;
var G__6117 = 0;
var G__6118 = 0;
seq__6103 = G__6115;
chunk__6104 = G__6116;
count__6105 = G__6117;
i__6106 = G__6118;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__6120 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__6120,0,null);var start_wrap = cljs.core.nth.call(null,vec__6120,1,null);var end_wrap = cljs.core.nth.call(null,vec__6120,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__6121 = wrapper.lastChild;
var G__6122 = (level - 1);
wrapper = G__6121;
level = G__6122;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3431__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3431__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj6124 = {};return obj6124;
})();
domina.nodes = (function nodes(content){if((function (){var and__3431__auto__ = content;if(and__3431__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3431__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4070__auto__ = (((content == null))?null:content);return (function (){var or__3443__auto__ = (domina.nodes[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.nodes["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3431__auto__ = nodeseq;if(and__3431__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3431__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4070__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3443__auto__ = (domina.single_node[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.single_node["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3431__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3431__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3431__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__6125){
var mesg = cljs.core.seq(arglist__6125);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6126){
var mesg = cljs.core.seq(arglist__6126);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__6127){
var contents = cljs.core.seq(arglist__6127);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__6128_SHARP_){return p1__6128_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__6129_SHARP_,p2__6130_SHARP_){return goog.dom.insertChildAt(p1__6129_SHARP_,p2__6130_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__6132_SHARP_,p2__6131_SHARP_){return goog.dom.insertSiblingBefore(p2__6131_SHARP_,p1__6132_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__6134_SHARP_,p2__6133_SHARP_){return goog.dom.insertSiblingAfter(p2__6133_SHARP_,p1__6134_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__6136_SHARP_,p2__6135_SHARP_){return goog.dom.replaceNode(p2__6135_SHARP_,p1__6136_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__6141_6145 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6142_6146 = null;var count__6143_6147 = 0;var i__6144_6148 = 0;while(true){
if((i__6144_6148 < count__6143_6147))
{var n_6149 = cljs.core._nth.call(null,chunk__6142_6146,i__6144_6148);goog.style.setStyle(n_6149,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6150 = seq__6141_6145;
var G__6151 = chunk__6142_6146;
var G__6152 = count__6143_6147;
var G__6153 = (i__6144_6148 + 1);
seq__6141_6145 = G__6150;
chunk__6142_6146 = G__6151;
count__6143_6147 = G__6152;
i__6144_6148 = G__6153;
continue;
}
} else
{var temp__4126__auto___6154 = cljs.core.seq.call(null,seq__6141_6145);if(temp__4126__auto___6154)
{var seq__6141_6155__$1 = temp__4126__auto___6154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6141_6155__$1))
{var c__4191__auto___6156 = cljs.core.chunk_first.call(null,seq__6141_6155__$1);{
var G__6157 = cljs.core.chunk_rest.call(null,seq__6141_6155__$1);
var G__6158 = c__4191__auto___6156;
var G__6159 = cljs.core.count.call(null,c__4191__auto___6156);
var G__6160 = 0;
seq__6141_6145 = G__6157;
chunk__6142_6146 = G__6158;
count__6143_6147 = G__6159;
i__6144_6148 = G__6160;
continue;
}
} else
{var n_6161 = cljs.core.first.call(null,seq__6141_6155__$1);goog.style.setStyle(n_6161,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6162 = cljs.core.next.call(null,seq__6141_6155__$1);
var G__6163 = null;
var G__6164 = 0;
var G__6165 = 0;
seq__6141_6145 = G__6162;
chunk__6142_6146 = G__6163;
count__6143_6147 = G__6164;
i__6144_6148 = G__6165;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6166){
var content = cljs.core.first(arglist__6166);
arglist__6166 = cljs.core.next(arglist__6166);
var name = cljs.core.first(arglist__6166);
var value = cljs.core.rest(arglist__6166);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__6171_6175 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6172_6176 = null;var count__6173_6177 = 0;var i__6174_6178 = 0;while(true){
if((i__6174_6178 < count__6173_6177))
{var n_6179 = cljs.core._nth.call(null,chunk__6172_6176,i__6174_6178);n_6179.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6180 = seq__6171_6175;
var G__6181 = chunk__6172_6176;
var G__6182 = count__6173_6177;
var G__6183 = (i__6174_6178 + 1);
seq__6171_6175 = G__6180;
chunk__6172_6176 = G__6181;
count__6173_6177 = G__6182;
i__6174_6178 = G__6183;
continue;
}
} else
{var temp__4126__auto___6184 = cljs.core.seq.call(null,seq__6171_6175);if(temp__4126__auto___6184)
{var seq__6171_6185__$1 = temp__4126__auto___6184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6171_6185__$1))
{var c__4191__auto___6186 = cljs.core.chunk_first.call(null,seq__6171_6185__$1);{
var G__6187 = cljs.core.chunk_rest.call(null,seq__6171_6185__$1);
var G__6188 = c__4191__auto___6186;
var G__6189 = cljs.core.count.call(null,c__4191__auto___6186);
var G__6190 = 0;
seq__6171_6175 = G__6187;
chunk__6172_6176 = G__6188;
count__6173_6177 = G__6189;
i__6174_6178 = G__6190;
continue;
}
} else
{var n_6191 = cljs.core.first.call(null,seq__6171_6185__$1);n_6191.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6192 = cljs.core.next.call(null,seq__6171_6185__$1);
var G__6193 = null;
var G__6194 = 0;
var G__6195 = 0;
seq__6171_6175 = G__6192;
chunk__6172_6176 = G__6193;
count__6173_6177 = G__6194;
i__6174_6178 = G__6195;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__6196){
var content = cljs.core.first(arglist__6196);
arglist__6196 = cljs.core.next(arglist__6196);
var name = cljs.core.first(arglist__6196);
var value = cljs.core.rest(arglist__6196);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__6201_6205 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6202_6206 = null;var count__6203_6207 = 0;var i__6204_6208 = 0;while(true){
if((i__6204_6208 < count__6203_6207))
{var n_6209 = cljs.core._nth.call(null,chunk__6202_6206,i__6204_6208);n_6209.removeAttribute(cljs.core.name.call(null,name));
{
var G__6210 = seq__6201_6205;
var G__6211 = chunk__6202_6206;
var G__6212 = count__6203_6207;
var G__6213 = (i__6204_6208 + 1);
seq__6201_6205 = G__6210;
chunk__6202_6206 = G__6211;
count__6203_6207 = G__6212;
i__6204_6208 = G__6213;
continue;
}
} else
{var temp__4126__auto___6214 = cljs.core.seq.call(null,seq__6201_6205);if(temp__4126__auto___6214)
{var seq__6201_6215__$1 = temp__4126__auto___6214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6201_6215__$1))
{var c__4191__auto___6216 = cljs.core.chunk_first.call(null,seq__6201_6215__$1);{
var G__6217 = cljs.core.chunk_rest.call(null,seq__6201_6215__$1);
var G__6218 = c__4191__auto___6216;
var G__6219 = cljs.core.count.call(null,c__4191__auto___6216);
var G__6220 = 0;
seq__6201_6205 = G__6217;
chunk__6202_6206 = G__6218;
count__6203_6207 = G__6219;
i__6204_6208 = G__6220;
continue;
}
} else
{var n_6221 = cljs.core.first.call(null,seq__6201_6215__$1);n_6221.removeAttribute(cljs.core.name.call(null,name));
{
var G__6222 = cljs.core.next.call(null,seq__6201_6215__$1);
var G__6223 = null;
var G__6224 = 0;
var G__6225 = 0;
seq__6201_6205 = G__6222;
chunk__6202_6206 = G__6223;
count__6203_6207 = G__6224;
i__6204_6208 = G__6225;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__6227 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__6227,0,null);var v = cljs.core.nth.call(null,vec__6227,1,null);if(cljs.core.truth_((function (){var and__3431__auto__ = k;if(cljs.core.truth_(and__3431__auto__))
{return v;
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__6228_SHARP_){var attr = attrs__$1.item(p1__6228_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__6235_6241 = cljs.core.seq.call(null,styles);var chunk__6236_6242 = null;var count__6237_6243 = 0;var i__6238_6244 = 0;while(true){
if((i__6238_6244 < count__6237_6243))
{var vec__6239_6245 = cljs.core._nth.call(null,chunk__6236_6242,i__6238_6244);var name_6246 = cljs.core.nth.call(null,vec__6239_6245,0,null);var value_6247 = cljs.core.nth.call(null,vec__6239_6245,1,null);domina.set_style_BANG_.call(null,content,name_6246,value_6247);
{
var G__6248 = seq__6235_6241;
var G__6249 = chunk__6236_6242;
var G__6250 = count__6237_6243;
var G__6251 = (i__6238_6244 + 1);
seq__6235_6241 = G__6248;
chunk__6236_6242 = G__6249;
count__6237_6243 = G__6250;
i__6238_6244 = G__6251;
continue;
}
} else
{var temp__4126__auto___6252 = cljs.core.seq.call(null,seq__6235_6241);if(temp__4126__auto___6252)
{var seq__6235_6253__$1 = temp__4126__auto___6252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6235_6253__$1))
{var c__4191__auto___6254 = cljs.core.chunk_first.call(null,seq__6235_6253__$1);{
var G__6255 = cljs.core.chunk_rest.call(null,seq__6235_6253__$1);
var G__6256 = c__4191__auto___6254;
var G__6257 = cljs.core.count.call(null,c__4191__auto___6254);
var G__6258 = 0;
seq__6235_6241 = G__6255;
chunk__6236_6242 = G__6256;
count__6237_6243 = G__6257;
i__6238_6244 = G__6258;
continue;
}
} else
{var vec__6240_6259 = cljs.core.first.call(null,seq__6235_6253__$1);var name_6260 = cljs.core.nth.call(null,vec__6240_6259,0,null);var value_6261 = cljs.core.nth.call(null,vec__6240_6259,1,null);domina.set_style_BANG_.call(null,content,name_6260,value_6261);
{
var G__6262 = cljs.core.next.call(null,seq__6235_6253__$1);
var G__6263 = null;
var G__6264 = 0;
var G__6265 = 0;
seq__6235_6241 = G__6262;
chunk__6236_6242 = G__6263;
count__6237_6243 = G__6264;
i__6238_6244 = G__6265;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__6272_6278 = cljs.core.seq.call(null,attrs);var chunk__6273_6279 = null;var count__6274_6280 = 0;var i__6275_6281 = 0;while(true){
if((i__6275_6281 < count__6274_6280))
{var vec__6276_6282 = cljs.core._nth.call(null,chunk__6273_6279,i__6275_6281);var name_6283 = cljs.core.nth.call(null,vec__6276_6282,0,null);var value_6284 = cljs.core.nth.call(null,vec__6276_6282,1,null);domina.set_attr_BANG_.call(null,content,name_6283,value_6284);
{
var G__6285 = seq__6272_6278;
var G__6286 = chunk__6273_6279;
var G__6287 = count__6274_6280;
var G__6288 = (i__6275_6281 + 1);
seq__6272_6278 = G__6285;
chunk__6273_6279 = G__6286;
count__6274_6280 = G__6287;
i__6275_6281 = G__6288;
continue;
}
} else
{var temp__4126__auto___6289 = cljs.core.seq.call(null,seq__6272_6278);if(temp__4126__auto___6289)
{var seq__6272_6290__$1 = temp__4126__auto___6289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6272_6290__$1))
{var c__4191__auto___6291 = cljs.core.chunk_first.call(null,seq__6272_6290__$1);{
var G__6292 = cljs.core.chunk_rest.call(null,seq__6272_6290__$1);
var G__6293 = c__4191__auto___6291;
var G__6294 = cljs.core.count.call(null,c__4191__auto___6291);
var G__6295 = 0;
seq__6272_6278 = G__6292;
chunk__6273_6279 = G__6293;
count__6274_6280 = G__6294;
i__6275_6281 = G__6295;
continue;
}
} else
{var vec__6277_6296 = cljs.core.first.call(null,seq__6272_6290__$1);var name_6297 = cljs.core.nth.call(null,vec__6277_6296,0,null);var value_6298 = cljs.core.nth.call(null,vec__6277_6296,1,null);domina.set_attr_BANG_.call(null,content,name_6297,value_6298);
{
var G__6299 = cljs.core.next.call(null,seq__6272_6290__$1);
var G__6300 = null;
var G__6301 = 0;
var G__6302 = 0;
seq__6272_6278 = G__6299;
chunk__6273_6279 = G__6300;
count__6274_6280 = G__6301;
i__6275_6281 = G__6302;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__6307_6311 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6308_6312 = null;var count__6309_6313 = 0;var i__6310_6314 = 0;while(true){
if((i__6310_6314 < count__6309_6313))
{var node_6315 = cljs.core._nth.call(null,chunk__6308_6312,i__6310_6314);goog.dom.classes.add(node_6315,class$);
{
var G__6316 = seq__6307_6311;
var G__6317 = chunk__6308_6312;
var G__6318 = count__6309_6313;
var G__6319 = (i__6310_6314 + 1);
seq__6307_6311 = G__6316;
chunk__6308_6312 = G__6317;
count__6309_6313 = G__6318;
i__6310_6314 = G__6319;
continue;
}
} else
{var temp__4126__auto___6320 = cljs.core.seq.call(null,seq__6307_6311);if(temp__4126__auto___6320)
{var seq__6307_6321__$1 = temp__4126__auto___6320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6307_6321__$1))
{var c__4191__auto___6322 = cljs.core.chunk_first.call(null,seq__6307_6321__$1);{
var G__6323 = cljs.core.chunk_rest.call(null,seq__6307_6321__$1);
var G__6324 = c__4191__auto___6322;
var G__6325 = cljs.core.count.call(null,c__4191__auto___6322);
var G__6326 = 0;
seq__6307_6311 = G__6323;
chunk__6308_6312 = G__6324;
count__6309_6313 = G__6325;
i__6310_6314 = G__6326;
continue;
}
} else
{var node_6327 = cljs.core.first.call(null,seq__6307_6321__$1);goog.dom.classes.add(node_6327,class$);
{
var G__6328 = cljs.core.next.call(null,seq__6307_6321__$1);
var G__6329 = null;
var G__6330 = 0;
var G__6331 = 0;
seq__6307_6311 = G__6328;
chunk__6308_6312 = G__6329;
count__6309_6313 = G__6330;
i__6310_6314 = G__6331;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__6336_6340 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6337_6341 = null;var count__6338_6342 = 0;var i__6339_6343 = 0;while(true){
if((i__6339_6343 < count__6338_6342))
{var node_6344 = cljs.core._nth.call(null,chunk__6337_6341,i__6339_6343);goog.dom.classes.remove(node_6344,class$);
{
var G__6345 = seq__6336_6340;
var G__6346 = chunk__6337_6341;
var G__6347 = count__6338_6342;
var G__6348 = (i__6339_6343 + 1);
seq__6336_6340 = G__6345;
chunk__6337_6341 = G__6346;
count__6338_6342 = G__6347;
i__6339_6343 = G__6348;
continue;
}
} else
{var temp__4126__auto___6349 = cljs.core.seq.call(null,seq__6336_6340);if(temp__4126__auto___6349)
{var seq__6336_6350__$1 = temp__4126__auto___6349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6336_6350__$1))
{var c__4191__auto___6351 = cljs.core.chunk_first.call(null,seq__6336_6350__$1);{
var G__6352 = cljs.core.chunk_rest.call(null,seq__6336_6350__$1);
var G__6353 = c__4191__auto___6351;
var G__6354 = cljs.core.count.call(null,c__4191__auto___6351);
var G__6355 = 0;
seq__6336_6340 = G__6352;
chunk__6337_6341 = G__6353;
count__6338_6342 = G__6354;
i__6339_6343 = G__6355;
continue;
}
} else
{var node_6356 = cljs.core.first.call(null,seq__6336_6350__$1);goog.dom.classes.remove(node_6356,class$);
{
var G__6357 = cljs.core.next.call(null,seq__6336_6350__$1);
var G__6358 = null;
var G__6359 = 0;
var G__6360 = 0;
seq__6336_6340 = G__6357;
chunk__6337_6341 = G__6358;
count__6338_6342 = G__6359;
i__6339_6343 = G__6360;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__6365_6369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6366_6370 = null;var count__6367_6371 = 0;var i__6368_6372 = 0;while(true){
if((i__6368_6372 < count__6367_6371))
{var node_6373 = cljs.core._nth.call(null,chunk__6366_6370,i__6368_6372);goog.dom.classes.toggle(node_6373,class$);
{
var G__6374 = seq__6365_6369;
var G__6375 = chunk__6366_6370;
var G__6376 = count__6367_6371;
var G__6377 = (i__6368_6372 + 1);
seq__6365_6369 = G__6374;
chunk__6366_6370 = G__6375;
count__6367_6371 = G__6376;
i__6368_6372 = G__6377;
continue;
}
} else
{var temp__4126__auto___6378 = cljs.core.seq.call(null,seq__6365_6369);if(temp__4126__auto___6378)
{var seq__6365_6379__$1 = temp__4126__auto___6378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6365_6379__$1))
{var c__4191__auto___6380 = cljs.core.chunk_first.call(null,seq__6365_6379__$1);{
var G__6381 = cljs.core.chunk_rest.call(null,seq__6365_6379__$1);
var G__6382 = c__4191__auto___6380;
var G__6383 = cljs.core.count.call(null,c__4191__auto___6380);
var G__6384 = 0;
seq__6365_6369 = G__6381;
chunk__6366_6370 = G__6382;
count__6367_6371 = G__6383;
i__6368_6372 = G__6384;
continue;
}
} else
{var node_6385 = cljs.core.first.call(null,seq__6365_6379__$1);goog.dom.classes.toggle(node_6385,class$);
{
var G__6386 = cljs.core.next.call(null,seq__6365_6379__$1);
var G__6387 = null;
var G__6388 = 0;
var G__6389 = 0;
seq__6365_6369 = G__6386;
chunk__6366_6370 = G__6387;
count__6367_6371 = G__6388;
i__6368_6372 = G__6389;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_6398__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__6394_6399 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6395_6400 = null;var count__6396_6401 = 0;var i__6397_6402 = 0;while(true){
if((i__6397_6402 < count__6396_6401))
{var node_6403 = cljs.core._nth.call(null,chunk__6395_6400,i__6397_6402);goog.dom.classes.set(node_6403,classes_6398__$1);
{
var G__6404 = seq__6394_6399;
var G__6405 = chunk__6395_6400;
var G__6406 = count__6396_6401;
var G__6407 = (i__6397_6402 + 1);
seq__6394_6399 = G__6404;
chunk__6395_6400 = G__6405;
count__6396_6401 = G__6406;
i__6397_6402 = G__6407;
continue;
}
} else
{var temp__4126__auto___6408 = cljs.core.seq.call(null,seq__6394_6399);if(temp__4126__auto___6408)
{var seq__6394_6409__$1 = temp__4126__auto___6408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6394_6409__$1))
{var c__4191__auto___6410 = cljs.core.chunk_first.call(null,seq__6394_6409__$1);{
var G__6411 = cljs.core.chunk_rest.call(null,seq__6394_6409__$1);
var G__6412 = c__4191__auto___6410;
var G__6413 = cljs.core.count.call(null,c__4191__auto___6410);
var G__6414 = 0;
seq__6394_6399 = G__6411;
chunk__6395_6400 = G__6412;
count__6396_6401 = G__6413;
i__6397_6402 = G__6414;
continue;
}
} else
{var node_6415 = cljs.core.first.call(null,seq__6394_6409__$1);goog.dom.classes.set(node_6415,classes_6398__$1);
{
var G__6416 = cljs.core.next.call(null,seq__6394_6409__$1);
var G__6417 = null;
var G__6418 = 0;
var G__6419 = 0;
seq__6394_6399 = G__6416;
chunk__6395_6400 = G__6417;
count__6396_6401 = G__6418;
i__6397_6402 = G__6419;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__6424_6428 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6425_6429 = null;var count__6426_6430 = 0;var i__6427_6431 = 0;while(true){
if((i__6427_6431 < count__6426_6430))
{var node_6432 = cljs.core._nth.call(null,chunk__6425_6429,i__6427_6431);goog.dom.setTextContent(node_6432,value);
{
var G__6433 = seq__6424_6428;
var G__6434 = chunk__6425_6429;
var G__6435 = count__6426_6430;
var G__6436 = (i__6427_6431 + 1);
seq__6424_6428 = G__6433;
chunk__6425_6429 = G__6434;
count__6426_6430 = G__6435;
i__6427_6431 = G__6436;
continue;
}
} else
{var temp__4126__auto___6437 = cljs.core.seq.call(null,seq__6424_6428);if(temp__4126__auto___6437)
{var seq__6424_6438__$1 = temp__4126__auto___6437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6424_6438__$1))
{var c__4191__auto___6439 = cljs.core.chunk_first.call(null,seq__6424_6438__$1);{
var G__6440 = cljs.core.chunk_rest.call(null,seq__6424_6438__$1);
var G__6441 = c__4191__auto___6439;
var G__6442 = cljs.core.count.call(null,c__4191__auto___6439);
var G__6443 = 0;
seq__6424_6428 = G__6440;
chunk__6425_6429 = G__6441;
count__6426_6430 = G__6442;
i__6427_6431 = G__6443;
continue;
}
} else
{var node_6444 = cljs.core.first.call(null,seq__6424_6438__$1);goog.dom.setTextContent(node_6444,value);
{
var G__6445 = cljs.core.next.call(null,seq__6424_6438__$1);
var G__6446 = null;
var G__6447 = 0;
var G__6448 = 0;
seq__6424_6428 = G__6445;
chunk__6425_6429 = G__6446;
count__6426_6430 = G__6447;
i__6427_6431 = G__6448;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__6453_6457 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6454_6458 = null;var count__6455_6459 = 0;var i__6456_6460 = 0;while(true){
if((i__6456_6460 < count__6455_6459))
{var node_6461 = cljs.core._nth.call(null,chunk__6454_6458,i__6456_6460);goog.dom.forms.setValue(node_6461,value);
{
var G__6462 = seq__6453_6457;
var G__6463 = chunk__6454_6458;
var G__6464 = count__6455_6459;
var G__6465 = (i__6456_6460 + 1);
seq__6453_6457 = G__6462;
chunk__6454_6458 = G__6463;
count__6455_6459 = G__6464;
i__6456_6460 = G__6465;
continue;
}
} else
{var temp__4126__auto___6466 = cljs.core.seq.call(null,seq__6453_6457);if(temp__4126__auto___6466)
{var seq__6453_6467__$1 = temp__4126__auto___6466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6453_6467__$1))
{var c__4191__auto___6468 = cljs.core.chunk_first.call(null,seq__6453_6467__$1);{
var G__6469 = cljs.core.chunk_rest.call(null,seq__6453_6467__$1);
var G__6470 = c__4191__auto___6468;
var G__6471 = cljs.core.count.call(null,c__4191__auto___6468);
var G__6472 = 0;
seq__6453_6457 = G__6469;
chunk__6454_6458 = G__6470;
count__6455_6459 = G__6471;
i__6456_6460 = G__6472;
continue;
}
} else
{var node_6473 = cljs.core.first.call(null,seq__6453_6467__$1);goog.dom.forms.setValue(node_6473,value);
{
var G__6474 = cljs.core.next.call(null,seq__6453_6467__$1);
var G__6475 = null;
var G__6476 = 0;
var G__6477 = 0;
seq__6453_6457 = G__6474;
chunk__6454_6458 = G__6475;
count__6455_6459 = G__6476;
i__6456_6460 = G__6477;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3431__auto__ = allows_inner_html_QMARK_;if(and__3431__auto__)
{var and__3431__auto____$1 = (function (){var or__3443__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3431__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
})()))
{var value_6488 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__6484_6489 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6485_6490 = null;var count__6486_6491 = 0;var i__6487_6492 = 0;while(true){
if((i__6487_6492 < count__6486_6491))
{var node_6493 = cljs.core._nth.call(null,chunk__6485_6490,i__6487_6492);node_6493.innerHTML = value_6488;
{
var G__6494 = seq__6484_6489;
var G__6495 = chunk__6485_6490;
var G__6496 = count__6486_6491;
var G__6497 = (i__6487_6492 + 1);
seq__6484_6489 = G__6494;
chunk__6485_6490 = G__6495;
count__6486_6491 = G__6496;
i__6487_6492 = G__6497;
continue;
}
} else
{var temp__4126__auto___6498 = cljs.core.seq.call(null,seq__6484_6489);if(temp__4126__auto___6498)
{var seq__6484_6499__$1 = temp__4126__auto___6498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6484_6499__$1))
{var c__4191__auto___6500 = cljs.core.chunk_first.call(null,seq__6484_6499__$1);{
var G__6501 = cljs.core.chunk_rest.call(null,seq__6484_6499__$1);
var G__6502 = c__4191__auto___6500;
var G__6503 = cljs.core.count.call(null,c__4191__auto___6500);
var G__6504 = 0;
seq__6484_6489 = G__6501;
chunk__6485_6490 = G__6502;
count__6486_6491 = G__6503;
i__6487_6492 = G__6504;
continue;
}
} else
{var node_6505 = cljs.core.first.call(null,seq__6484_6499__$1);node_6505.innerHTML = value_6488;
{
var G__6506 = cljs.core.next.call(null,seq__6484_6499__$1);
var G__6507 = null;
var G__6508 = 0;
var G__6509 = 0;
seq__6484_6489 = G__6506;
chunk__6485_6490 = G__6507;
count__6486_6491 = G__6508;
i__6487_6492 = G__6509;
continue;
}
}
} else
{}
}
break;
}
}catch (e6483){if((e6483 instanceof Error))
{var e_6510 = e6483;domina.replace_children_BANG_.call(null,content,value_6488);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6483;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3431__auto__ = bubble;if(cljs.core.truth_(and__3431__auto__))
{return (value == null);
} else
{return and__3431__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3443__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__6517_6521 = cljs.core.seq.call(null,children);var chunk__6518_6522 = null;var count__6519_6523 = 0;var i__6520_6524 = 0;while(true){
if((i__6520_6524 < count__6519_6523))
{var child_6525 = cljs.core._nth.call(null,chunk__6518_6522,i__6520_6524);frag.appendChild(child_6525);
{
var G__6526 = seq__6517_6521;
var G__6527 = chunk__6518_6522;
var G__6528 = count__6519_6523;
var G__6529 = (i__6520_6524 + 1);
seq__6517_6521 = G__6526;
chunk__6518_6522 = G__6527;
count__6519_6523 = G__6528;
i__6520_6524 = G__6529;
continue;
}
} else
{var temp__4126__auto___6530 = cljs.core.seq.call(null,seq__6517_6521);if(temp__4126__auto___6530)
{var seq__6517_6531__$1 = temp__4126__auto___6530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6517_6531__$1))
{var c__4191__auto___6532 = cljs.core.chunk_first.call(null,seq__6517_6531__$1);{
var G__6533 = cljs.core.chunk_rest.call(null,seq__6517_6531__$1);
var G__6534 = c__4191__auto___6532;
var G__6535 = cljs.core.count.call(null,c__4191__auto___6532);
var G__6536 = 0;
seq__6517_6521 = G__6533;
chunk__6518_6522 = G__6534;
count__6519_6523 = G__6535;
i__6520_6524 = G__6536;
continue;
}
} else
{var child_6537 = cljs.core.first.call(null,seq__6517_6531__$1);frag.appendChild(child_6537);
{
var G__6538 = cljs.core.next.call(null,seq__6517_6531__$1);
var G__6539 = null;
var G__6540 = 0;
var G__6541 = 0;
seq__6517_6521 = G__6538;
chunk__6518_6522 = G__6539;
count__6519_6523 = G__6540;
i__6520_6524 = G__6541;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6511_SHARP_,p2__6512_SHARP_){return f.call(null,p1__6511_SHARP_,p2__6512_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3431__auto__ = obj;if(cljs.core.truth_(and__3431__auto__))
{var and__3431__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3431__auto____$1)
{return obj.length;
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6543 = list_thing;if(G__6543)
{var bit__4093__auto__ = (G__6543.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__6543.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6543.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6543);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6543);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6544 = content;if(G__6544)
{var bit__4093__auto__ = (G__6544.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__6544.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6544.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6544);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6544);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__6545 = content;if(G__6545)
{var bit__4093__auto__ = (G__6545.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__6545.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6545.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6545);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6545);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
