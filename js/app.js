// Se añade un listener que escucha los cambios dentro del input para activar la función de forma dinámica
document.getElementById("main__text").addEventListener("input", function() {
    // Definimos la función que eliminará los acentos
    function removeAccents(text) {
        // Se descomponen las letras con acentos para después eliminar el acento reemplazandoló con una cadena vacía
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    
    // Convertir el texto a minúsculas
    let text = this.value.toLowerCase();
    // Eliminar acentos actualizando el input
    this.value = removeAccents(text);
});


// Función de encriptado de texto
function encrypt(){
    
    // Obtenemos el valor del textarea y lo guardamos en una variable
    let text = document.getElementById("main__text").value;
    // Obtenemos el párrafo vacio que contendrá el mensaje encriptado
    mainEnc = document.getElementById("main__enc");
    // Obtenemos la imagen del encriptado para modificarla
    imageMessage = document.getElementById("main__image");
    // Obtenemos el valor del mensaje de encriptado
    titleMessage = document.getElementById("main__message-title");
    // Obtenemos el valor del párrafo 
    paragraphMessage = document.getElementById("main__message-paragraph");
    // Obtenemos el botón de copiar
    copyButton = document.getElementById("main__btn-copy");

    // Evaluamos la existencia de los caracteres especiales en el texto
    let espChars = /[!@#$%^&*(),.?":{}|<>]/.test(text);

    // Evaluamos el valor de espChars
    if(espChars == false){

        // Usamos la función .replace() para evaluar las vocales en las palabras y sustituirlas
        let textEncrypted = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        
        // Evaluamos que el usuario haya escrito algo
        if (text.length !=0){

            // Agregamos eñ texto encriptado a el párrafo vació
            mainEnc.textContent = textEncrypted;
            // Modificamos el panel de encriptado para mostrar el texto encriptado
            imageMessage.style.display = "none";
            titleMessage.innerHTML = "Texto encriptado correctamente";
            paragraphMessage.textContent = "";

            // Mostramos el botón de copiar texto
            copyButton.style.display = "block";

        }else{

            // Modificando el panel de encriptado 
            changeEncryptPanel();
            // Alerta de input vacio
            alertMessage("Ingresa un texto para encriptar");

        }
        
    }else{
        
        // Modificando el panel de encriptado 
        changeEncryptPanel();
        // Alerta de carácteres especiales
        charAlert("Error, no se aceptan carácteres especiales");
        // Limpiando el textarea
        clearTextArea();

    }
}


// Función desarrollada para desencriptar el texto
function decrypt(){
    
    // Obtenemos el valor del textarea y lo guardamos en una variable
    let text = document.getElementById("main__text").value;
    // Obtenemos el párrafo vacio que contendrá el emnsaje encriptado
    mainEnc = document.getElementById("main__enc");
    // Obtenemos la imagen del encriptado para modificarla
    imageMessage = document.getElementById("main__image");
    // Obtenemos el valor del mensaje de encriptado
    titleMessage = document.getElementById("main__message-title");
    // Obtenemos el valor del párrafo 
    paragraphMessage = document.getElementById("main__message-paragraph");
    // Obtenemos el botón de copiar
    copyButton = document.getElementById("main__btn-copy");

    // Evaluamos la existencia de los caracteres especiales en el texto
    let espChars = /[!@#$%^&*(),.?":{}|<>]/.test(text);

    // Evaluamos el valor de espChars
    if(espChars == false){

        // Usamos la función .replace() para evaluar las letras agregadas y sustituirlas
        textEncrypted = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

        if (text.length !=0){

            // Agregamos eñ texto encriptado a el párrafo vació
            mainEnc.textContent = textEncrypted;
            // Modificamos el panel de encriptado para mostrar el texto encriptado
            imageMessage.style.display = "none";
            titleMessage.textContent = "Texto desencriptado correctamente!";
            paragraphMessage.textContent = "";

            // Mostramos el botón de copiar texto
            copyButton.style.display = "block";

        }else{

            // Modificando el panel de encriptado //
            changeEncryptPanel();
            // Alerta de input vacio
            alertMessage("Ingresa un texto para desencriptar");

        }

    }else{

        // Modificando el panel de encriptado //
        changeEncryptPanel();
        // Alerta de carácteres especiales
        alertMessage("Error, no se aceptan carácteres especiales");
        // Limpiando el textarea
        clearTextArea();
   
    }
}


function clearTextArea(){
    // Reseteamos el inpuut que estaba ingresado en el textarea
    document.getElementById("main__text").value = "";
}


function alertMessage(alertMessage){
    // Alerta de carácteres especiales
    Swal.fire({
        title: `${alertMessage}`,
        text: "",
        icon: "info"
    });
}


function changeEncryptPanel(){
    // Limpiamos el parrafo de encriptado
    mainEnc.textContent = "";
    // Seteamos la imagen 
    imageMessage.style.display = "block";
    // Seteamos el título
    titleMessage.textContent = "Ningún mensaje encontrado";
    // Seteamos el párrafo a como estaba
    paragraphMessage.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    // Mostramos el botón de copiar texto
    copyButton.style.display = "none";
}


function resetViews(){
    clearTextArea();
    changeEncryptPanel();
}


// Con esta función copiamos el codigo encriptado
function copy(){
     // Obtener el texti encriptado
    let copiedText = document.getElementById("main__enc").textContent;
    // Usar la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(copiedText).then(function() {
        // Mostrar una alerta de copiado
        alertMessage("Texto copiado correctamente");
    }).catch(function(error) {
        // Mostrar una alerta de error
        alertMessage("Error al copiar el texto");
    });
}