(ns client-server.client
  (:require [goog.net.XhrIo :as xhr]
            [domina :as d]
            [domina.events :as events]))

(def resultuser-id "evaluser-result")
(def resultpass-id "evalpass-result")
(def uname-id "eval-uname")
(def pass-id "eval-pass")
(def url "/eval")
(def url1 "/evalpass")

(defn serialize [m] (str m))
(defn de-serialize [s] (reader/read-string s))

(defn receive-result [event]
  (d/set-text! (d/by-id resultpass-id)
               (.getResponseText (.-target event))))

(defn receiveuser-result [event]
  (d/set-text! (d/by-id resultuser-id)
               (.getResponseText (.-target event))))

(defn post-for-eval [expr-str]
  (xhr/send url receiveuser-result "POST" expr-str))

(defn post-for-evalpass [expr-str]
  (xhr/send url1 receive-result "POST" expr-str))

(defn get-expr []
  (serialize {:user (.-value (d/by-id uname-id))}))

(defn getpass-expr []

  (serialize {:pass (.-value (d/by-id pass-id))}))

(defn ^:export main []
  (events/listen! (d/by-id uname-id)
                  :keyup
                  (fn [event]
                    (post-for-eval (get-expr))
                    (events/stop-propagation event)))

  (events/listen! (d/by-id pass-id)
                  :keyup
                  (fn [event]
                    (post-for-evalpass (getpass-expr))
                    (events/stop-propagation event))))

