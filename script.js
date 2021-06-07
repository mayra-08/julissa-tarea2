


function toggleBloque() {
    
    
    var demo = document.getElementById("operacionesContenedor");


     if (demo.style.display === "none") {
         demo.style.display = "block";
         document.getElementById("toggleBloque").textContent = "Ocultar texto";
         
    } else {
       
         demo.style.display = "none"; 
         document.getElementById("toggleBloque").textContent = "Mostrar texto";
    }
}

function sumar() {
    var x = parseInt(document.getElementById("minumero1").value);
    var y = parseInt(document.getElementById("minumero2").value);
    document.getElementById("resultado").innerHTML = x+y;


    
}

function restar() {
    var x = parseInt(document.getElementById("minumero1").value);
    var y  = parseInt(document.getElementById("minumero2").value);
    document.getElementById("resultado").innerHTML = x-y;
    
}

function multiplicar() {
    var x = parseInt(document.getElementById("minumero1").value);
    var y = parseInt(document.getElementById("minumero2").value);
    document.getElementById("resultado").innerHTML = x*y;

}



   

