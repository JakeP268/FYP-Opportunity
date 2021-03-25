import * as firebase from "firebase";
import { toast } from "./toast";


//Firebase SDK
const config = {
  apiKey: "AIzaSyB-JzoB-sxk2eoMSweptajI8J2d2aTrsVg",
  authDomain: "opportunity-68621.firebaseapp.com",
  databaseURL: "https://opportunity-68621.firebaseio.com",
  projectId: "opportunity-68621",
  storageBucket: "opportunity-68621.appspot.com",
  messagingSenderId: "537447820801",
  appId: "1:537447820801:web:1989ef654247c173b11a00",
  measurementId: "G-547ZEK3RPT",
};

//App is intialized.
firebase.initializeApp(config);

export default firebase;


export function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
}

//logout method
export function logoutUser() {
  return firebase.auth().signOut();
}

//login user method with email and password
export async function loginUser(emailAddress: string, password: string) {
  const email = emailAddress;
  try {
    //using the email and password authentication method from fiewbase
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    return res;
  } 
  //if login credendtials fail toast message error will pop up
  //and user will be unable to login till correct credentials are met.
  catch (error) {
    toast(error.message, 4000);
    return false;
  }
}

//register user method
export async function registerUser(emailAddress: string, password: string) {
  const email = emailAddress;
  try {
    //using the email and password authentication method from firebase
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } 
  //if registering credendtials fail toast message error will pop up
  //and user will be unable to register till correct credentials are met.
  catch (error) {
    toast(error.message, 4000);
    return false;
  }
}
