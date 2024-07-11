/*VALIDACIONES PARA INICIO DE SESION */
function validacion () {
    let form = document.getElementById("form");
    form.addEventListener("submit", (event)=>{
    // Evitar que se envíe el formulario automáticamente
    event.preventDefault();
    });

    let email = document.getElementById("email").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();
    
    let valid = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //estructura texto@texto.texto
    let resultado = emailPattern.test(email);

    //verifico cada campo 
    if( email == "" || contraseña == ""){
        campovacio();
        valid = false;                        
    }else{   
    if( resultado != true ){
        document.getElementById("parrafoValidacion").style.color = "white";            
        document.getElementById("parrafoValidacion").innerHTML = "email no valido";
        setTimeout(()=>{
        document.getElementById("parrafoValidacion").innerHTML = "";                
        },3000);
        valid = false;            
    }
    if(valid){            
        document.getElementById("parrafoValidacion").style.color = "white";            
        limpiarCampos();
        }
    }
};

function campovacio(){
    document.getElementById("parrafoValidacion").style.color = "white";        
    document.getElementById("parrafoValidacion").innerHTML = "complete todos los campos";                
    setTimeout(()=>{
    document.getElementById("parrafoValidacion").innerHTML = "";                
    },3000);
}

function limpiarCampos(){
    let campos = document.querySelectorAll(".inputs");
    campos.forEach((campo) => {
        campo.value = "";
    });
    let inputs = document.querySelectorAll(".inputs");
    inputs.forEach((input) => {
        input.style.backgroundColor = "dimgray";
    });
    document.getElementById("parrafoValidacion").innerHTML = "te registraste con exito";            
        setTimeout(()=>{
        document.getElementById("parrafoValidacion").innerHTML = "";            
    },3000);
}