import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXeonrSIS68-BLTMKScQNXUSJUqAszr7I",
    authDomain: "cs-course-scheduler-da8a9.firebaseapp.com",
    databaseURL: "https://cs-course-scheduler-da8a9.firebaseio.com",
    projectId: "cs-course-scheduler-da8a9",
    storageBucket: "cs-course-scheduler-da8a9.appspot.com",
    messagingSenderId: "514173636909",
    appId: "1:514173636909:web:f55551a73c44dedfb683a4"
  };  

firebase.initializeApp(firebaseConfig);

export default firebase
