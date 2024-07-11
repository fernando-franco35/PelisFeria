//espero que cargue el DOM 
document.addEventListener("DOMContentLoaded",()=>{
    let boton = document.getElementById("boton");
    
    // Evitar que se envíe el formulario automáticamente
    let form = document.getElementById("form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
    });

    boton.addEventListener("click", () => {
        //tomo los valores ingresados en cada campo despues de hacer CLICK
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let email = document.getElementById("email").value.trim();
        let contraseña = document.getElementById("contraseña").value.trim();
        let check = document.getElementById("check").checked;
        const inputs = document.querySelectorAll("#form .js");
    
        //let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // estructura texto@texto.texto
        //let resultado = emailPattern.test(email);

        // Recorro todos los campos y verifico que no esten vacios
        for (let index = 0; index < inputs.length; index++) {
            let validar = true;
            if(nombre == "" || apellido == "" || email == "" || contraseña == "" || check == false){
                validar = false;
                error(validar);
            }else{
                limpiarCampos(validar);
            }            
        }
        
        // Funciones error y limpiar los campos
        function error(validar){
            document.getElementById("parrafoValidacion").style.color = "white";            
            document.getElementById("parrafoValidacion").innerHTML = "complete todos los campos"; 
            validar = false;
            setTimeout(()=>{
            document.getElementById("parrafoValidacion").innerHTML = ""; 
            },2000);    
        };

        function limpiarCampos(validar){
            let campos = document.querySelectorAll(".inputs");
            campos.forEach((campo) => {
            campo.value = "";
            });
            let check = document.getElementById("check");
            check.checked = false;
            let inputs = document.querySelectorAll(".inputs");
            inputs.forEach((input) => {
            input.style.backgroundColor = "dimgray";
            });
            document.getElementById("parrafoValidacion").innerHTML = "te registraste con exito";                        
            setTimeout(()=>{
            document.getElementById("parrafoValidacion").innerHTML = "";            
            },3000);    
        };

    });
});