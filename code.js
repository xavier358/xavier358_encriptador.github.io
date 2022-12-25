
// Definimos las constantes para usar en las funciones

const BotonEncriptar = document.querySelector(".boton-encriptar");
const BotonDesencriptar = document.querySelector(".boton-desencriptar");
const BotonCopiar = document.querySelector(".boton-copiar")
const hombre = document.querySelector(".area-hombre");
const parrafo1 = document.querySelector(".area-parrafo1");
const parrafo2 = document.querySelector(".area-parrafo2");
const resultado = document.querySelector(".texto-resultado")

// Vinculamos los botones al hacer click con sus respectivamos funciones creadas

BotonEncriptar.onclick = encriptar

BotonDesencriptar.onclick = desencriptar

BotonCopiar.onclick = copiar

// función para extraer el texto del área donde se escribe

function extraerTexto(){
    const area = document.querySelector(".texto-inicial");
    return area.value 
}

// función para ocultar la imagen y los dos parrafos

function ocultar(){
    hombre.classList.add("ocultar");
    parrafo1.classList.add("ocultar");
    parrafo2.classList.add("ocultar");
}  

function rotar(){
    
    const areaResultado = document.querySelector(".area-seccion2");
    areaResultado.style.transition = 'transform 0.6s';
    areaResultado.style.transformOrigin = '50% 50%';
    areaResultado.style.transform = 'rotateY(180deg)';
    areaResultado.addEventListener('transitionend', function() {  
    areaResultado.style.transform = 'rotateY(0deg)';
    });
    
}

// función para encriptar el texto

function EncriptarTexto(text){
// Reemplazamos las vocales por palabras
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    return text;
    }

// 4to paso: función final de encriptar

function encriptar(){
    ocultar();
    rotar();
    resultado.textContent = EncriptarTexto(extraerTexto());
    document.querySelector(".texto-inicial").value="";
}

// función para desencriptar el texto

function DesencriptarTexto(text){
    // Reemplazamos las palabras por las vocales originales       
        text = text.replace(/enter/g, "e"); 
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");       
        return text;
        }

// función final de desencriptar

function desencriptar(){
    ocultar();
    rotar();
    resultado.textContent = DesencriptarTexto(extraerTexto()) ;
    document.querySelector(".texto-inicial").value="";
}


function copiar(){
    const contenidoACopiar = document.querySelector('.texto-resultado').value;

    // Asignamos el contenido al elemento de destino
    
    document.querySelector('.texto-inicial').value = contenidoACopiar;


    // Limpiamos el area de texto
    document.querySelector('.texto-resultado').innerText = "";

}
