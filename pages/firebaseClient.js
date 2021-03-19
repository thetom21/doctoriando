import firebaseClient from "firebase/app";
import "firebase/auth";

/*
Copy/paste your *client-side* Firebase credentials below. 
To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.
*/
const CLIENT_CONFIG = {
  apiKey: "AIzaSyBt5AnAmYQC2s-obEodnPryouCw9mkBf98",
  authDomain: "doctoriando.firebaseapp.com",
  projectId: "doctoriando",
  storageBucket: "doctoriando.appspot.com",
  messagingSenderId: "946441593424",
  appId: "1:946441593424:web:5dc994498117ef87c6a755",
  measurementId: "G-ZLY83CXNDX"
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window).firebase = firebaseClient;
}

export { firebaseClient };