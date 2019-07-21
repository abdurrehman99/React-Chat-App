 import firebase from 'firebase';
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCsAuLuC1kkbRzhwyy-b0ZFutvkSczrVQQ",
  authDomain: "chat-app-a0226.firebaseapp.com",
  databaseURL: "https://chat-app-a0226.firebaseio.com",
  projectId: "chat-app-a0226",
  storageBucket: "chat-app-a0226.appspot.com",
  messagingSenderId: "121585473195",
  appId: "1:121585473195:web:285eb5ec94f6a109"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);



export default fire;
