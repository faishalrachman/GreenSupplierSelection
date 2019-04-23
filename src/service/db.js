import firebase from 'firebase/app'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyDTlO77StV5iLGCVNooVeykhbrhT-VowyA",
    authDomain: "tasipe-360bf.firebaseapp.com",
    databaseURL: "https://tasipe-360bf.firebaseio.com",
    projectId: "tasipe-360bf",
    storageBucket: "tasipe-360bf.appspot.com",
    messagingSenderId: "137400278379"
};
firebase.initializeApp(config);
var db = firebase.database();
export default db