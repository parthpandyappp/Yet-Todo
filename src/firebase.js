import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyACXwzpDMTOgRNVvsPXWg_V-HXb5vYQ3Os",
    authDomain: "test-e-todo.firebaseapp.com",
    databaseURL: "https://test-e-todo-default-rtdb.firebaseio.com",
    projectId: "test-e-todo",
    storageBucket: "test-e-todo.appspot.com",
    messagingSenderId: "767259485491",
    appId: "1:767259485491:web:b941c9a8572fe567eb0a46"
};
firebase.initializeApp(config);
export default firebase;