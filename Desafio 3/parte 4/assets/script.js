const sectionKey = document.getElementById("key");
let evento;
addEventListener("keydown",eventoClick)

function eventoClick(event){
    evento = event.key;
    if(evento=="a"){
        sectionKey.style.background ="pink"
    }else if(evento=="s"){
        sectionKey.style.background ="orange"
    }else if(evento=="d"){
        sectionKey.style.background ="rgb(17, 246, 242)" 
    }
    
}


addEventListener("keydown",nuevaSection);
let cont = document.getElementById("nueva")

function nuevaSection(event){
    cont.innerHTML ="";
    let nuevaSect = document.createElement("section")
    let toque;
    toque = event.key;
    if( toque=="q"){
        toque="green";
        nuevaSect.style.width ="200px";
        nuevaSect.style.height="200px";
        nuevaSect.style.background=toque;
        console.log(nuevaSect)
        cont.appendChild(nuevaSect)
    }else if( toque=="w"){
        toque="brown";
        nuevaSect.style.width ="200px";
        nuevaSect.style.height="200px";
        nuevaSect.style.background= toque;
        console.log(nuevaSect)
        cont.appendChild(nuevaSect)
    }else if( toque=="e"){
        toque="purple";
        nuevaSect.style.width ="200px";
        nuevaSect.style.height="200px";
        nuevaSect.style.background= toque;
        console.log(nuevaSect)
        cont.appendChild(nuevaSect)
    }}