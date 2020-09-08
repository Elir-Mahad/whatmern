import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBgDv5G8dqE3nDMOKUm8EUogIXxydL8b9w",
	authDomain: "whatsapp-b4438.firebaseapp.com",
	databaseURL: "https://whatsapp-b4438.firebaseio.com",
	projectId: "whatsapp-b4438",
	storageBucket: "whatsapp-b4438.appspot.com",
	messagingSenderId: "308175042117",
	appId: "1:308175042117:web:6e398e98f17284c483552c",
	measurementId: "G-EQWRHWLM0T"
});

const db = firebaseApp.firestore();
// to access the database - for storing data
const auth = firebase.auth();
// to access the authentication - for logging in and out
const storage = firebase.storage();
// to access the storage - for uploading content

export { firebase, db, auth, storage };
