
import { initializeApp, getApps, getApp } from "firebase/app";
//   import { getReactNativePersistence,initializeAuth } from 'firebase/auth';
   import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth,initializeAuth,getReactNativePersistence } from 'firebase/auth';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDNPDUzd3TR6DQqFMqpWTDJXR327P_m-AA",
    authDomain: "final-5ccdd.firebaseapp.com",
    projectId: "final-5ccdd",
    storageBucket: "final-5ccdd.appspot.com",
    messagingSenderId: "110237721114",
    appId: "1:110237721114:web:e87add4b7a04daaa17e7a3",
    measurementId: "G-DBHQLYF0K8"
};

// const app = initializeApp(firebaseConfig);
// // For more information on how to access Firebase in your project,
// // see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// // initializeAuth(app,{
// //     persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// // });
// const auth = getAuth();
// export {auth};
let app, auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}
export {auth,app};