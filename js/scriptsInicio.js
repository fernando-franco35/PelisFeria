/*VALIDACIONES PARA INICIO DE SESION */

function validacion () {
    let form = document.getElementById("form");
    form.addEventListener("submit", (event)=>{
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        /*function resetErrorMessages() {
            //console.log("voy a limpiar los divs");
            let errorElements = document.getElementById("parrafoValidacion");
            errorElements.forEach((element)=> {
                element.innerText = "";
            });*/
            });

    let email = document.getElementById("email").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();
    
    let valid = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // estructura texto@texto.texto
    let resultado = emailPattern.test(email);
    console.log(resultado);

    if( email == "" ){
        document.getElementById("email").style.backgroundColor = "#8b4a4a";
        document.getElementById("parrafoValidacion").style.color = "white";
        document.getElementById("parrafoValidacion").innerHTML = "complete todos los campos";            
        valid = false;                        
    }
    if( resultado != true ){
        document.getElementById("email").style.backgroundColor = "#8b4a4a";
        document.getElementById("parrafoValidacion").style.color = "white";            
        document.getElementById("parrafoValidacion").innerHTML = "email no valido";
        valid = false;            
    }
    if( contraseña == "" ){
        document.getElementById("contraseña").style.backgroundColor = "#8b4a4a";
        document.getElementById("parrafoValidacion").style.color = "white";        
        document.getElementById("parrafoValidacion").innerHTML = "complete todos los campos";                
        valid = false;            
    }
    if(valid){            
        document.getElementById("parrafoValidacion").style.color = "white";
        limpiarCampos();
        alert("te registraste con exito");
        //document.getElementById("parrafoValidacion").innerHTML = "ya estas registrado";            
    }
};

function limpiarCampos(){
    let campos = document.querySelectorAll(".inputs");
    campos.forEach((campo) => {
        campo.value = "";
    });
    let inputs = document.querySelectorAll(".inputs");
    inputs.forEach((input) => {
        input.style.backgroundColor = "dimgray";
    });
    document.getElementById("parrafoValidacion").innerHTML = " ";            
}