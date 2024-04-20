function guardar(){
    db.collection("usuario").add({
        nombre: document.getElementById("name").value,
        apellidos: document.getElementById("last").value,
       
    })
    .then((docRef) => {
        alert("registro existoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
}