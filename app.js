let inicio = "ArmonyViajes";

//alerta de bienvenida al usuario
alert("Bienvenido a Viajes");

//indicar al usuario que ingrese su nombre y saludarlo
let nombre = prompt("Ingresa tu nombre");
alert("Hola " + nombre + " ¿Cómo estás,Queres viajar hacia algun lugar del mundo?");

let resultado = confirm("¿Eres mayor de 18 años?");

if (resultado) {
    console.log("Eres mayor de 18 años");
}   else { 
    console.log("Eres menor de 18 años");            
}       
//indicar al usuario que ingrese su edad y si es menor de 18 no continuar


 
const edad = prompt("Ingresa fecha de nacimento para verificar tu edad");

edad === 18 ? console.log("Edad válida") : console.log("Edad inválida");

if (edad < 18) {
    console.log("No puedes continuar");
} else if (edad <= 18) {
    console.log("Puedes continuar");            
} 


 
//indicar al usuario que ingrese su mail (opcional)
let mail = prompt("Ingresa tu mail si deseas  registrarte y recibir nuestras promociones,caso contrario ingresa cualquier tecla y continua");
if (mail.includes("@")) {
    console.log("Mail registrado con éxito");
} else {
    console.log("Mail inválido");
}        
//indicar al usuario que ingrese su numero de telefono y si es incorrecto no continuar
let numer = prompt("Ingresa tu número de teléfono para poder realizar tu compra online y estar en contacto,si no ingresas aqui tu numero no vamos a poder tener en cuenta tu pedido.");
if (numer.length === 10) {
    console.log("Número registrado con éxito");
} else {     
    console.log("Número inválido");
}
//indicar al usuario que ingrese su dirección
let direccion = prompt("Ingresa tu dirección para poder recibir tu pedido");            
if (direccion.length > 0) {
    console.log("Dirección registrada con éxito");
} else {    
    console.log("Dirección inválida");
     

}   


let destinos = ["Japón", "Italia", "Francia", "España", "Grecia", "Australia", "Nueva Zelanda", "Estados Unidos", "Canadá", "México"];
console.log("Destinos disponibles: " + destinos.length);
    
for (let i = 0; i < destinos.length; i++) {
    console.log(destinos[i]);
}
 
let destinoElegido = prompt("Elegí un destino: \n 1. Japón \n 2. Italia \n 3. Francia \n 4. España \n 5. Grecia \n 6. Australia \n 7. Nueva Zelanda \n 8. Estados Unidos \n 9. Canadá \n 10. México");
if (destinoElegido === "1") {
    console.log("Japón");
}
else if (destinoElegido === "2") {
    console.log("Italia");
}
else if (destinoElegido === "3") {
    console.log("Francia");
}
else if (destinoElegido === "4") {
    console.log("España");
}
else if (destinoElegido === "5") {
    console.log("Grecia");
}
else if (destinoElegido === "6") {
    console.log("Australia");
}
else if (destinoElegido === "7") {
    console.log("Nueva Zelanda");
}
else if (destinoElegido === "8") {
    console.log("Estados Unidos");
}
else if (destinoElegido === "9") {
    console.log("Canadá");
}
else if (destinoElegido === "10") {
    console.log("México");
}
else {
    console.log("Opción inválida");
}

let transporte = ["Avión", "Barco", "Tren", "Auto", "Bicicleta", "Caminando"];
console.log("Medios de transporte disponibles: " + transporte.length);

for (let i = 0; i < transporte.length; i++) {
    console.log(transporte[i]);
}

let transporteElegido = prompt("Elegí un medio de transporte: \n 1. Avión \n 2. Barco \n 3. Tren \n 4. Auto \n 5. Bicicleta \n 6. Caminando");
if (transporteElegido === "1") {
    console.log("Avión");
}
else if (transporteElegido === "2") {
    console.log("Barco");
}
else if (transporteElegido === "3") {
    console.log("Tren");
}
else if (transporteElegido === "4") {
    console.log("Auto");
}
else if (transporteElegido === "5") {
    console.log("Bicicleta");
}
else if (transporteElegido === "6") {
    console.log("Caminando");
}
else {
    console.log("Opción inválida");
}




















let mediodepago = ["Efectivo", "Tarjeta de crédito", "Tarjeta de débito", "MercadoPago", "PayPal"];
 

console.log("Cantidad de medios de pago disponibles: " + mediodepago.length);

for (let i = 0; i < mediodepago.length; i++) {
    console.log(mediodepago[i]);

}

mediodepago.push("Bitcoin");

console.log("Cantidad de medios de pago disponibles: " + mediodepago.length);   

for (let i = 0; i < mediodepago.length; i++) {
    console.log(mediodepago[i]);
   
}   

let mediodepagoElegido = prompt("Elegí un medio de pago: \n 1. Efectivo \n 2. Tarjeta de crédito \n 3. Tarjeta de débito \n 4. MercadoPago \n 5. PayPal \n 6. Bitcoin");

if (mediodepagoElegido === "1") {
    console.log("Efectivo");
}
else if (mediodepagoElegido === "2") {
    console.log("Tarjeta de crédito");
}
else if (mediodepagoElegido === "3") {
    console.log("Tarjeta de débito");
}
else if (mediodepagoElegido === "4") {
    console.log("MercadoPago");
}
else if (mediodepagoElegido === "5") {
    console.log("PayPal");
}
else if (mediodepagoElegido === "6") {
    console.log("Bitcoin");
}
else {
    console.log("Opción inválida");
}


