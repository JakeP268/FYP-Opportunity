import * as firebase from 'firebase'
import { toast } from './toast';
const config = {
    apiKey: "AIzaSyBZzarZikYMUHBwL3vF1DI-ebjBfOwilko",
    authDomain: "opportunity-hybrid.firebaseapp.com",
    databaseURL: "https://opportunity-hybrid.firebaseio.com",
    projectId: "opportunity-hybrid",
    storageBucket: "opportunity-hybrid.appspot.com",
    messagingSenderId: "224663713973",
    appId: "1:224663713973:web:05379957cc90b39cb366fc"
};

firebase.initializeApp(config)

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                resolve(user)
            } else {
                resolve(null)
            }
            unsubscribe()
        })
    })
}

export function logoutUser() {
    return firebase.auth().signOut()
}

export async function loginUser(username: string, password: string) {
    const email = `${username}@opportunity.com`
    try{
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)

   
    return res
} catch(error) {
    toast(error.message)
    return false
}
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@opportunity.com`
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)  
        return true 
    } catch(error) {
        toast(error.message)
        return false

    }
}