let precioProductos= 0;
let limite= 4500;
let suma_total= 0;
let nombreProducto= "";


while(nombreProducto.toUpperCase()!="ESC" ){
    nombreProducto= prompt("Ingrese nombre de Producto:  ESC para salir");
    precioProductos= parseInt(prompt("Ingrese valor del producto:  ESC para salir"));
    alert("Ingresaste: "+ nombreProducto + "$" + precioProductos);
    suma_total+=precioProductos;
    if (suma_total > limite){
        break;
    }   
    if ((precioProductos== null) || (precioProductos== "")){
        break;
    }
    console.log("Total"+ suma_total);
}
alert("El total es: $"+ suma_total);


function seguimientoDecomprar(){
    if(producto ==="1"){
        if(nombreProducto.toUpperCase()!="ESC"){
        nombreProducto=prompt("Que producto de nuestro menu le interesa? ESC PARA SALIR");
        valorProducto=parseInt(prompt("Ingresar valor del Producto: "));
        alert("ingresaste " + nombreProducto + " $ " + valorProducto);
        }
    }
}
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