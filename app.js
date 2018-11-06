firebase.initializeApp({
  apiKey: 'AIzaSyA2BDOzTx-jk-98EPKZHfx8vD80579kZaA',
  authDomain: 'usuario0-2aa29.firebaseapp.com',
  projectId: 'usuario0-2aa29'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


function guardarUsuario(){

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var fecha = document.getElementById('fecha').value;

	db.collection("users").add({
	    first: nombre,
	    last: apellido,
	    born: fecha
	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	    limpiarUsuario();			

	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});	
}

function limpiarUsuario(){
	document.getElementById('nombre').value = '';
	document.getElementById('apellido').value = '';
	document.getElementById('fecha').value = '';
}





