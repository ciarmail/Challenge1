//capturo los componentes del html
var txtCifrar = document.getElementById("inpCifrar");
var txtDescifrar = document.getElementById("inpDescifrar");

var bntCifrar = document.getElementById("btnCifrar");
var bntDescifrar = document.getElementById("btnDescifrar");
var bntCopiar = document.getElementById("btnCopiar");

//validar texto ingresado 
function Validar(texto) {
    var i=0;
    var exito = true;
    console.log("Validando");

    //en ascii las minusculas van del 97 al 122 y el espacio es 32
    while (i < texto.length) {
        var ascii = texto[i].charCodeAt(0);
        if (ascii < 97 || ascii > 122) {
            if (ascii != 32) {
                alert("Texto con caracteres no permitidos!!");
                exito = false;
                break;    
            }
        }   
        ++i;
    }
    return exito;
}


//****************************CIFRADO*********************************/
//cifrado de una letra
function CifrarLetra(letra) {
    if (letra == "a") {
        return "ai";
    } else if(letra == "e" ) {
        return "enter";
    } else if(letra == "i" ) {
        return "imes";
    }else if(letra == "o" ) {
        return "ober";
    }else if(letra == "u" ) {
        return "ufat";
    }else {
        return letra;
    }    
}


function Cifrar(texto) {
    var i=0;
    var cifrado = "";
    console.log("Cifrando");
    while (i < texto.length) {
        cifrado = cifrado + CifrarLetra(texto[i]);
        ++i;
    }
    return cifrado;
}


//funcion del boton CIFRAR
function Encriptar() {
    txtDescifrar.value ="";
    var texto = txtCifrar.value;
    if (Validar(texto) ) {
        var textoCifrado = Cifrar(texto);
        txtDescifrar.value = textoCifrado;
    }
    console.log("Finalizando Encriptar");
}

bntCifrar.onclick = Encriptar;


//****************************DESCIFRADO*********************************/
bntDescifrar.onclick= Desencriptar;

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//Descifrado de toda la frase
function Descifrar(texto) {
    var textoDescifrado = texto;
    var indice = 0;
    if (texto.indexOf("ai") >= 0 ) {
        textoDescifrado = textoDescifrado.replaceAll("ai", "a");
    } 
    if (texto.indexOf("enter") >= 0 ) {
        textoDescifrado = textoDescifrado.replaceAll("enter", "e");
    }
    if (texto.indexOf("imes") >= 0 ) {
        textoDescifrado = textoDescifrado.replaceAll("imes", "i");
    }
    if (texto.indexOf("ober") >= 0 ) {
        textoDescifrado = textoDescifrado.replaceAll("ober", "o");
    }
    if (texto.indexOf("ufat") >= 0 ) {
        textoDescifrado = textoDescifrado.replaceAll("ufat", "u");
    }
    return textoDescifrado;
    
}

//Para el botón de descifrar
function Desencriptar() {
    txtDescifrar.value ="";
    var texto = txtCifrar.value;
    if (Validar(texto) ) {
        var textoDescifrado = Descifrar(texto);
        txtDescifrar.value = textoDescifrado;
    }
    console.log("Finalizando Desencriptar");    
}

/*************************COPIAR**************** */
function CopiarTexto2() {
    txtDescifrar.select();
    txtDescifrar.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(txtDescifrar.value);
  } 

bntCopiar.onclick = CopiarTexto2;


txtCifrar.focus();
