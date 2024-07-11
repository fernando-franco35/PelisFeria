// Espero que cargue el DOM para validar los campos
document.addEventListener("DOMContentLoaded",()=>{
    
    // Guardo el formulario
    const form = document.getElementById("form");
    
    // Evitar que se envíe el formulario automáticamente
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
            });
    
    // Ejecuto el codigo una vez que se presiona el boton agregar
    botonagregar.addEventListener("click", ()=>{
        // Guardo en una variable los valores de los campos
        const titulo = document.getElementById("titulo").value.trim();
        const genero = document.getElementById("genero").value.trim();
        const duracion = document.getElementById("duracion").value.trim();
        const director = document.getElementById("director").value.trim();
        const reparto = document.getElementById("reparto").value.trim();
        const sinopsis = document.getElementById("sinopsis").value.trim();
        const imagen = document.getElementById("imagen").value.trim();
        const botonagregar = document.getElementById("botonagregar");
        const inputs = document.querySelectorAll("#form input");
        
        // Expresiones regulares para validacion de cada campo
        const expresiones = {
            usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
            nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            password: /^.{4,12}$/, // 4 a 12 digitos.
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            telefono: /^\d{7,14}$/ // 7 a 14 numeros.
        }
        // Recorro cada input y valido que no este vacio
        inputs.forEach((input) => {
            let validar = true;
            if(input == "" || sinopsis == ""){
                validar = false;
                error(validar);
            }else{
                limpiarCampos(validar);
            }
        });
            /*input.addEventListener("keyup",validarformulario);
            input.addEventListener("blur",validarformulario);*/
        
        // Funciones de errores y campos validos
        function error(validar){
            document.getElementById("parrafoValidacion").innerHTML = "faltan completar campos";   
        };

        function limpiarCampos(){
            let campos = document.querySelectorAll("#form input");
            campos.forEach((campo) => {
                campo.value = "";
            });
            let textarea = document.querySelector("#form textarea");
            textarea.value = "";
            document.getElementById("parrafoValidacion").innerHTML = "completaste todo con exito";
        };

    });
});
