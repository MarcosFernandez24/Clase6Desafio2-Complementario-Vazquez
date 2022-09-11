

let bienvenido = "Bienvenido"

let nombre = prompt("Ingrese su nombre y apellido para continuar o escriba SALIR para cancelar")

let salir = "SALIR"
let montoActual = 100.00

function Juegos(nombreJuego, precioJuego)
{
this.nombreJuego = nombreJuego
this.precioJuego = precioJuego

}
const juegoN1 = new Juegos("Cyberpunk 2077", 24.99)
const juegoN2 = new Juegos("Assasins Creed Valhala", 29.99)
const juegoN3 = new Juegos("God Of War 4", 9.99)
const juegoN4 = new Juegos("Bloodborne", 9.99)
const juegoN5 = new Juegos("Metro Exodus", 14.99)

function precioJuego1(montoActual, juegoN1){

    montoActual = montoActual - juegoN1.precioJuego
    console.log(`${montoActual}`)
    
        
    }
    function precioJuego2(montoActual, juegoN2){

        montoActual = montoActual - juegoN2.precioJuego;
        console.log(`${montoActual}`)
        
       }
        function precioJuego3(montoActual, juegoN3){

            montoActual = montoActual - juegoN3.precioJuego
            console.log(`${montoActual}`)
            
       }
            function precioJuego4(montoActual, juegoN4){

                montoActual = montoActual - juegoN4.precioJuego
                console.log(`${montoActual}`)
       }
       function precioJuego5(montoActual, juegoN5){

        montoActual = montoActual - juegoN5.precioJuego
        console.log(`${montoActual}`)
        
            
        }
let arrayGames = [juegoN1.nombreJuego , juegoN2.nombreJuego, juegoN3.nombreJuego, juegoN4.nombreJuego, juegoN5.nombreJuego]

while(nombre !== salir){
    let bienvenida = bienvenido + " " + nombre



let tarjeta = prompt("Ingrese una tarjeta de 8 digitos.")

while (tarjeta <= 9999999 || tarjeta >= 99999999) {

    tarjeta = prompt("Por favor, ingrese una tarjeta valida.")

}

console.log(bienvenida)
alert(`${bienvenida}, su tarjeta fue tomada con exito.`)


let game = prompt(`Elija una de las ofertas disponibles:

1.${arrayGames[0]} (${juegoN1.precioJuego} USD$)
2.${arrayGames[1]} (${juegoN2.precioJuego} USD$)
3.${arrayGames[2]} (${juegoN3.precioJuego} USD$)
4.${arrayGames[3]} (${juegoN4.precioJuego} USD$)
5.${arrayGames[4]} (${juegoN5.precioJuego} USD$)

MONTO DISPONIBLE(100,00 USD$)`)

while (game <= 0 || game >= 6 ) {

    alert("Por favor asegurese de seleccionar uno de los productos que hay dentro del catalogo.")

    game = prompt(`Elija una de las ofertas disponibles:

1.${arrayGames[0]} (${juegoN1.precioJuego} USD$)
2.${arrayGames[1]} (${juegoN2.precioJuego} USD$)
3.${arrayGames[2]} (${juegoN3.precioJuego} USD$)
4.${arrayGames[3]} (${juegoN4.precioJuego} USD$)
5.${arrayGames[4]} (${juegoN5.precioJuego} USD$)
    
MONTO DISPONIBLE(100,00 USD$)`)

}

switch (game) {
    case "1":
        console.log("Gracias por su compra(Cyberpunk 2077)")
            precioJuego1(montoActual, juegoN1)
        alert(`Gracias por comprar ${juegoN1.nombreJuego}(${arrayGames[0]} ${juegoN1.precioJuego} $USD)
        Monto actual en el monedero ${montoActual - juegoN1.precioJuego} USD$`)
        break;
    case "2":
        console.log("Gracias por su compra(Assasins Creed Valhala)")
            precioJuego2(montoActual, juegoN2)
        alert(`Gracias por comprar ${juegoN2.nombreJuego}(${arrayGames[1]} ${juegoN2.precioJuego} $USD) 
        Monto actual en el monedero ${montoActual - juegoN2.precioJuego} USD$`)
        break
    case "3":
        console.log("Gracias por su compra(God Of War)")
        
            precioJuego3(montoActual, juegoN3)
        alert(`Gracias por comprar ${juegoN3.nombreJuego}(${arrayGames[2]} ${juegoN3.precioJuego} $USD)
        Monto actual en el monedero ${montoActual - juegoN3.precioJuego} USD$`)
        break
    case "4":
        console.log("Gracias por su compra(Bloodborne)")
            precioJuego4(montoActual, juegoN4)
        alert(`Gracias por comprar ${juegoN4.nombreJuegov}(${arrayGames[3]} ${juegoN4.precioJuego} $USD)
        Monto actual en el monedero ${montoActual - juegoN4.precioJuego} USD$`)
        break
    case "5":
        console.log("Gracias por su compra(Metro Exodus)")
            precioJuego5(montoActual, juegoN5)
        alert(`Gracias por comprar ${juegoN5.nombreJuego}(${arrayGames[4]} ${juegoN5.precioJuego} $USD)
        Monto actual en el monedero ${montoActual - juegoN5.precioJuego} USD$`)
        break
    default:
        console.log("No se selecciono ninguna opcion valida, por favor recargue la pagina e intente nuevamente")
        alert("No se selecciono ninguna opcion valida, por favor recargue la pagina e intente nuevamente")
        break;

        
}
break
}
if(nombre === salir){
    
}

    








