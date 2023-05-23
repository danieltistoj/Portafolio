

var divMenu = document.getElementById("id-contenedor-menu")
divMenu.addEventListener("click", function(){
    console.log("menu clicked")
    var id_ul = document.getElementById("id-ul")
    if(id_ul.classList.contains("show")){
        console.log("tiene la clase")
        id_ul.classList.remove("show")
    }else{
        console.log("no tiene la clase")
        id_ul.classList.add("show")
    }
})

const main_slider = document.querySelector(".main-slider")
const punto = document.querySelectorAll(".punto")//retorna una coleccion o array de etiquetas li o circulos 

punto.forEach((cadaPunto,i)=>{
    punto[i].addEventListener("click",()=>{
        let posicion = i
        let operacion= i * -33.3
        main_slider.style.transform = `translateX(${operacion}%)`
    })
})