// Compiled by ClojureScript 0.0-2173
goog.provide('client_server.quiz');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
client_server.quiz.button_gen_integer_id = "button-gen-integer";
client_server.quiz.quiz_integer_var_id = "quiz-integer-var";
client_server.quiz.quiz_answer_id = "quiz-answer";
client_server.quiz.button_answer_id = "button-answer";
client_server.quiz.quiz_result_id = "quiz-result";
client_server.quiz.max_int = 10;
client_server.quiz.url = "/check-answer";
client_server.quiz.serialize = (function serialize(m){return [cljs.core.str(m)].join('');
});
client_server.quiz.de_serialize = (function de_serialize(s){return cljs.reader.read_string.call(null,s);
});
client_server.quiz.receive_result = (function receive_result(event){return domina.set_text_BANG_.call(null,domina.by_id.call(null,client_server.quiz.quiz_result_id),event.target.getResponseText());
});
client_server.quiz.post_for_eval = (function post_for_eval(expr_str){return goog.net.XhrIo.send(client_server.quiz.url,client_server.quiz.receive_result,"POST",expr_str);
});
client_server.quiz.get_expr = (function get_expr(){var n = domina.by_id.call(null,client_server.quiz.quiz_integer_var_id).innerHTML;var a = domina.by_id.call(null,client_server.quiz.quiz_answer_id).value;console.log([cljs.core.str("n: "),cljs.core.str(n)].join(''));
console.log([cljs.core.str("a: "),cljs.core.str(a)].join(''));
return client_server.quiz.serialize.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",4274507451),n,new cljs.core.Keyword(null,"answer","answer",3896062768),a], null));
});
client_server.quiz.update_text_field = (function update_text_field(){var rnd_number = cljs.core.rand_int.call(null,client_server.quiz.max_int);console.log([cljs.core.str("random number: "),cljs.core.str(rnd_number)].join(''));
return domina.set_text_BANG_.call(null,domina.by_id.call(null,client_server.quiz.quiz_integer_var_id),rnd_number);
});
client_server.quiz.main = (function main(){domina.events.listen_BANG_.call(null,domina.by_id.call(null,client_server.quiz.button_gen_integer_id),new cljs.core.Keyword(null,"click","click",1108654330),(function (event){client_server.quiz.update_text_field.call(null);
domina.events.stop_propagation.call(null,event);
return domina.events.prevent_default.call(null,event);
}));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,client_server.quiz.button_answer_id),new cljs.core.Keyword(null,"click","click",1108654330),(function (event){client_server.quiz.post_for_eval.call(null,client_server.quiz.get_expr.call(null));
domina.events.stop_propagation.call(null,event);
return domina.events.prevent_default.call(null,event);
}));
});
goog.exportSymbol('client_server.quiz.main', client_server.quiz.main);