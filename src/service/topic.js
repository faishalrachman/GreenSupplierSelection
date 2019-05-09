import db from './db'

var ref = db.ref("topics");

export default {
  getTopics() {
    return new Promise(function (resolve, reject) {
      // Do async job
      db.ref("topics").once("value").then(snapshot => {
        let data = []
        snapshot.forEach(element => {
          let topic = element.val()
          topic['topic_id'] = element.key
          data.push(topic)
        })
        resolve(data)
      })
    })
  },
  getTopic(topic_id) {
    return new Promise(function (resolve, reject) {
        // Do async job
        db.ref("topics").child(topic_id).once("value").then(snapshot => {
          let data = snapshot.val();
          data['topic_id'] = snapshot.key;
          resolve(data)
        })
      })
  },
  setTopic(topic_id,topic){
      return ref.child(topic_id).set(topic)
  },
  addTopic(topic){
      return ref.push(topic)
  },
  deleteTopic(topic_id){
    var child = ref.child(topic_id)
    return child.remove()
  }
}