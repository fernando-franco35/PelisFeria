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
            // limpio los valores de cada campo
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
            // elimino el texto despues de 3 segundos
            setTimeout(()=>{
            document.getElementById("parrafoValidacion").innerHTML = "";            
            },3000);    
        };

    });
});


/*
Expresiones regulares para validacion de cada campo si a futuro se requiere
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    estructura texto@texto.texto
    let resultado = emailPattern.test(email);

    const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
*/