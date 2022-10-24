import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCq2ZHVNPGnTcJczTWt2_YxyisR2gCSPFI",
    authDomain: "olx-project-76e5d.firebaseapp.com",
    projectId: "olx-project-76e5d",
    storageBucket: "olx-project-76e5d.appspot.com",
    messagingSenderId: "399941026023",
    appId: "1:399941026023:web:1d81a70461fc0d84bf6242",
    measurementId: "G-N30CVXXKWY"
  };

 export default firebase.initializeApp(firebaseConfig)