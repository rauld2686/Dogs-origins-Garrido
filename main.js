/* Es un simulador de la cantidad de comida que debe comer el perro del usuario segun la marca de comida, edad del perro
y su peso, hasta este momento solo se ha agredado una marca 
*/

let marca;
let peso;
let meses;
let raza;
let genero;
const inputRaza = document.querySelector("#input-raza")
const inputMarca = document.querySelector("#input-marca")
const inputGenero = document.querySelector("#input-genero")
const inputEdad = document.querySelector("#input-edad")
const inputPeso = document.querySelector("#input-peso")
const botonCalcular = document.querySelector("#boton-submit")

function solicitarInfoPerro() {
    raza = inputRaza
    genero = inputGenero
    marca = inputMarca
    meses = inputEdad
    peso = inputPeso
}

class Perro{
    constructor(marca, meses, peso, raza, genero){
        this.marca = marca
        this.meses = meses
        this.peso = peso
        this.raza = raza
        this.genero = genero
    }
    
}

let info = new Perro();


function cantidadComidaDiaria(){
    //taste of the wild entre 3 y 4 meses
    if (marca.value == "taste of the wild" && meses.value >= 3 && meses.value <= 4 && peso.value >= 1.5 && peso.value <= 2.5){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 100 gramos al día ";
        document.body.appendChild(parrafo);
    } 
    else if (marca.value == "taste of the wild" && meses.value >= 3 && meses.value <= 4 && peso.value >= 2.5 && peso.value <= 4.5){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 160 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 3 && meses.value <= 4 && peso.value >= 5 && peso.value <= 10){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 270 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 3 && meses.value <= 4 && peso.value >= 10 && peso.value <= 15){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 375 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 3 && meses.value <= 4 && peso.value >= 15 && peso.value <= 20){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 475 gramos al día ";
        document.body.appendChild(parrafo);
    }
    //entre 5 y 7 meses
    else if (marca.value == "taste of the wild" && meses.value >= 5 && meses.value <= 7 && peso.value >= 1.5 && peso.value <= 2.5){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 70 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 5 && meses.value <= 7 && peso.value >= 2.5 && peso.value <= 4.5){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 110 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 5 && meses.value <= 7 && peso.value >= 5 && peso.value <= 10){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 175 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 5 && meses.value <= 7 && peso.value >= 10 && peso.value <= 15){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 275 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 5 && meses.value <= 7 && peso.value >= 15 && peso.value <= 20){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 335 gramos al día ";
        document.body.appendChild(parrafo);
    }
    //entre 8 y 10 meses
    else if (marca.value == "taste of the wild" && meses.value >= 8 && meses.value <= 12 && peso.value >= 1.5 && peso.value <= 2.5){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 75 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 8 && meses.value <= 12 && peso.value >= 2.5 && peso.value <= 4.5){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 90 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 8 && meses.value <= 12 && peso.value >= 5 && peso.value <= 10){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 155 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 8 && meses.value <= 12 && peso.value >= 10 && peso.value <= 15){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 210 gramos al día ";
        document.body.appendChild(parrafo);
    }
    else if (marca.value == "taste of the wild" && meses.value >= 8 && meses.value <= 12 && peso.value >= 15 && peso.value <= 20){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su perro debe comer 280 gramos al día ";
        document.body.appendChild(parrafo);
    }
}
function estadoPerro(){
    //estado del perro segun su peso y edad
    //husky macho
    if (raza.value == "husky" && genero.value == "macho" && meses.value >= 3 && meses.value < 6 && peso.value >= 10 && peso.value < 19){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta en buen peso de acuerdo a su edad ";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "macho" && meses.value >= 3 && meses.value < 6 && peso.value < 10){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta bajo de peso de acuerdo a su edad";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "macho" && meses.value >= 3 && meses.value < 6 && peso.value >= 19){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro tiene sobrepeso";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "macho" && meses.value >= 6 && meses.value < 9 && peso.value >= 19 && peso.value < 24){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta en buen peso de acuerdo a su edad ";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "macho" && meses.value >= 6 && meses.value < 9 && peso.value < 19){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta bajo de peso de acuerdo a su edad";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "macho" && meses.value >= 6 && meses.value < 9 && peso.value >= 24){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro tiene sobrepeso";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "macho" && meses.value >= 9 && meses.value < 12 && peso.value >= 24 && peso.value < 26){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta en buen peso de acuerdo a su edad ";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "macho" && meses.value >= 9 && meses.value < 12 && peso.value < 24){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta bajo de peso de acuerdo a su edad";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "macho" && meses.value >= 9 && meses.value < 12 && peso.value >= 26){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro tiene sobrepeso";
        document.body.appendChild(parrafo);
    }
    //husky hembra
    if (raza.value == "husky" && genero.value == "hembra" && meses.value >= 3 && meses.value < 6 && peso.value >= 9 && peso.value < 17){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta en buen peso de acuerdo a su edad ";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "hembra" && meses.value >= 3 && meses.value < 6 && peso.value < 9){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta bajo de peso de acuerdo a su edad";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "hembra" && meses.value >= 3 && meses.value < 6 && peso.value >= 17){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro tiene sobrepeso";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "hembra" && meses.value >= 6 && meses.value < 9 && peso.value >= 17 && peso.value < 21){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta en buen peso de acuerdo a su edad ";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "hembra" && meses.value >= 6 && meses.value < 9 && peso.value < 17){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta bajo de peso de acuerdo a su edad";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "hembra" && meses.value >= 6 && meses.value < 9 && peso.value >= 21){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro tiene sobrepeso";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "hembra" && meses.value >= 9 && meses.value < 12 && peso.value >= 21 && peso.value < 22.5){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta en buen peso de acuerdo a su edad ";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "hembra" && meses.value >= 9 && meses.value < 12 && peso.value < 21){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro esta bajo de peso de acuerdo a su edad";
        document.body.appendChild(parrafo);
    }
    else if (raza.value == "husky" && genero.value == "hembra" && meses.value >= 9 && meses.value < 12 && peso.value >= 22.5){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Su cachorro tiene sobrepeso";
        document.body.appendChild(parrafo);
    }
}

const URLG = "razas.json";
$("#boton-submit").on("click", (e) => {
    e.preventDefault();
    solicitarInfoPerro()
    cantidadComidaDiaria()
    estadoPerro()
    const primerArray = [];
    primerArray.push(raza, genero, marca, meses, peso)
    const ul = document.createElement("ul");
    const resumen = ["Marca del alimento: " + marca.value, "Meses del cachorro: " + meses.value, "Peso del cachorro: " + peso.value + " kg.", "Raza de perro: " + raza.value, "Genero del cachorro: " + genero.value,]
    for (let i = 0; i < 5; i++){
        let li = document.createElement("li")
        li.innerHTML = resumen[i];
        ul.appendChild(li);
    }   
    document.body.appendChild(ul);
    
    $.getJSON(URLG, function (respuesta, estado) {
        if(estado === "success"){
        let misDatos = respuesta;
        for (const inf of misDatos) {
        $("body").append(`<div>
        <h1>${inf.title}</h1>
        <p> ${inf.body}</p>
        </div>`)
        }
    }
    });
    
})



/*
//calculo de cantidad de cada porcion de comida dada al perro por dia
let porciones = 3
let cantidad = prompt("Ingrese la cantidad de comida diaria que le dio el sistema: ")
const cantidadPorcion = (a,b) => a / b ;
console.log(primerArray);
alert("Usted debe dar de comer a su perro 3 porciones diarias de " + cantidadPorcion(cantidad,porciones) + " gramos al día.")*/
