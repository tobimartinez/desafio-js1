
let nombre="";
let nombreProducto="";
let numeroDePedido ;

function saludar(){
    alert(
        "Bienvenidos a metropizza macarenna " +  nombre +
        "                                            Te dejamos a continuacion las siguientes opciones"
    );
    
}
function comprarProducto(){
    if(opcion === "1"){
        alert("usted eligio la Opcion numero 1 (Menu)");
    }else if(opcion === "2"){
        alert("elegiste Opcion numero 2 (Seguir pedido)");
    }else if(opcion === "3"){
        alert("usted eligio la Opcion numero 3 (Salir)");
    }
}
function seguimientoDecomprar(){
    if(opcion ==="1"){    
        while(nombreProducto.toUpperCase()!="ESC"){
         nombreProducto=prompt("Que producto de nuestro menu le interesa? ESC PARA SALIR");
         valorProducto=parseInt(prompt("Ingresar valor del Producto: "));
         alert("ingresaste " + nombreProducto + " $ " + valorProducto);
        }
    }
}
function seguirEnvio(){
    numeroDePedido=parseInt(prompt("Ingresar numero de pedido"));
    alert("Fue ingresado su Numero de Pedido: " + numeroDePedido  + " A nombre de " + nombre);
    alert("Su pedido esta en camino se encuentra en X lugar");
}

nombre=prompt("Ingrese su nombre");
alert("El nombre que ingresaste fue: " + nombre);
saludar();
let opcion=prompt("elegi una de las siguientes opciones \n 1:Menu   \n 2: Seguir Pedido  \n 3: Salir");
while( opcion !=="3"){
    if( opcion === "1"){
        comprarProducto();
        seguimientoDecomprar();
    }
    else if( opcion ==="2"){
        seguirEnvio();
    }
     else if( opcion ==="3"){
        break;
    }
}