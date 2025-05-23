
//inicio codigo
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
/*Codigo del carrusel */
const main_slider = document.querySelector(".main-slider")
const punto = document.querySelectorAll(".punto")//retorna una coleccion o array de etiquetas li o circulos 

punto.forEach((cadaPunto,i)=>{
    punto[i].addEventListener("click",()=>{
        let posicion = i
        let operacion= i * -33.3
        main_slider.style.transform = `translateX(${operacion}%)`
        //volvemos a recorrer el array de puntos para desactivar las clases activo y añadirla a la que se le hizo click
        punto.forEach((cadaPunto,i)=>{
            punto[i].classList.remove("activo")
        })
        punto[i].classList.add("activo")
    })
})
/*Codigo animacion acordeon */
const bloque    = document.querySelectorAll(".bloque")
const titular   = document.querySelectorAll(".titular")

//Click en el titular
    //quitar la clase activo de todos los bloques
    //añadir la clase activo al bloque con la posicion titular que se le dio click

titular.forEach((CadaTitular,i) =>{
    titular[i].addEventListener("click",()=>{
        //esta condicion es en dado caso quiera cerrar la pestaña que se abrio 
        if(bloque[i].classList.contains("activo")){ // se verifica si el bloque ya tiene la clase
            //si tiene la clase se lo quita 
            bloque[i].classList.remove("activo");
        }
        else{
            bloque.forEach((CadaBloque,i)=>{
                bloque[i].classList.remove("activo");
            })
            bloque[i].classList.add("activo");
        }
    })
})
/*Codigo envio de formulario */
    const $form = document.querySelector("#form")
    $form.addEventListener("submit",handleSubmit)
    async function handleSubmit(event){
        event.preventDefault()
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method:this.method,
            body:form,
            headers:{
                'Accept': 'application/json'
            }
        })
        if(response.ok) {
            this.reset()
            alert("Gracias por contactarme, te escribire pronto")
        }
    }
