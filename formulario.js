
//VALIDACION DE APELLIDO-NOMBRE

    function ValidarForm(){

        if (document.formulario.nombre.value.length==0){
            alert("Ingresa tu nombre, es obligatorio")
            document.formulario.nombre.focus()
            return false;
        }

        if (document.formulario.apellido.value==0){
            alert("Ingresa tu apellido, es obligatorio")
            document.formulario.apellido.focus()
            return false;
        }

// VALIDACION EMAIL

    var checkemail= /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  valor= document.getElementById('email').value;
  if (!(checkemail.test(valor)) ){
    alert('Es necesario un email')
    return false; }

//VALIDACION GENERO
    var valido= true;

     if (document.getElementById("Femenino").checked){
  valid=true;
}
     else if (document.getElementById("Masculino").checked){
  valid=true;
}



    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();
    }