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

        // valido que no ningun campo este vacio
            if(titulo == "" || genero == "" || duracion == "" || director == "" || reparto == "" || sinopsis == "" || imagen == ""){
                validar = false;
                error(validar);
            }else{
                limpiarCampos(validar);
            }
        
        // Funciones de errores y campos validos
        function error(validar){
            document.getElementById("parrafoValidacion").innerHTML = "faltan completar campos";   
            setTimeout(()=>{
            document.getElementById("parrafoValidacion").innerHTML = "";   
            },3000);
                
        };

        function limpiarCampos(){
            let campos = document.querySelectorAll("#form input");
            // limpio los valores de cada campo
            campos.forEach((campo) => {
                campo.value = "";
            });
            let textarea = document.querySelector("#form textarea");
            textarea.value = "";
            document.getElementById("parrafoValidacion").innerHTML = "completaste todo con exito";
            // elimino el texto despues de 3 segundos
            setTimeout(()=>{
            document.getElementById("parrafoValidacion").innerHTML = "";   
            },3000);   
        };

    });
});
