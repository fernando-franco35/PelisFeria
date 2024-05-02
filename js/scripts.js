/*validacion del formulario de registro*/

    function validacion(){
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let contraseña = document.getElementById("contraseña").value;
        let check = document.getElementById("check").checked;

        if( nombre == "" ){
            document.getElementById("nombre").style.backgroundColor = "#8b4a4a";
            document.getElementById("parrafoValidacion").style.color = "white";            
        }
        if( apellido == "" ){
            document.getElementById("apellido").style.backgroundColor = "#8b4a4a";
            document.getElementById("parrafoValidacion").style.color = "white";            
        }
        if( email == "" ){
            document.getElementById("email").style.backgroundColor = "#8b4a4a";
            document.getElementById("parrafoValidacion").style.color = "white";            
        }
        if( contraseña == "" ){
            document.getElementById("contraseña").style.backgroundColor = "#8b4a4a";
            document.getElementById("parrafoValidacion").style.color = "white";            
        }
        if( check != true ){
            document.querySelector('.check p').style.color = "#8b4a4a";
            document.getElementById("parrafoValidacion").style.color = "white";            
            document.getElementById("parrafoValidacion").innerHTML = "complete todos los campos";            
        }

        else{
            document.getElementById("parrafoValidacion").style.color = "white";            
            document.getElementById("parrafoValidacion").innerHTML = "ya estas registrado";            
        }
    }

   