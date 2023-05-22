

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