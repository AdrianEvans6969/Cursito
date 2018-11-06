firebase.initializeApp({
  apiKey: 'AIzaSyA2BDOzTx-jk-98EPKZHfx8vD80579kZaA',
  authDomain: 'usuario0-2aa29.firebaseapp.com',
  projectId: 'usuario0-2aa29'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});





