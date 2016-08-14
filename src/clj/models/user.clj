(ns models.user
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.result :refer [ok? has-error?]]
            [monger.conversion :refer [from-db-object]]))

(def conn (mg/connect))
(def db (mg/get-db conn "homework1")) ;; database name
(def document "hw1") ;; document

(defn add-user
  [quiz-result]
  (mc/insert-and-return db document quiz-result))

(defn get-user
  [search-criteria]
  (mc/find-maps db document search-criteria))

(defn exist-user?
  [username]
  (if (empty? (get-user {:uname username}))
    false
    true))

(exist-user? "saggy3@gmail.com")

