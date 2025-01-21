// alert("MORTADELO, FILEMÓN!!!!");
// Vicente
let arrayCorreos=Array(["Pepito Pérez","correo@prueba.com","1234contra"],["aa","test@test.com","contraseña"]);
// 

$("#vueltaRegistro").click(
    $(".registro").css("display","block"),
    $(".login").css("display","none")
)
$("#vueltaLogin").click(
    $(".login").css("display","block"),
    $(".registro").css("display","none"),
)
$("#cierreSesion").click(
    localStorage.clear()
)
$().ready(
$("#Identificarse").click(
    // comparar pareja email-contraseña con entrantes
    function comparaParejas(correVal,contraVal){
        let val=false;
        for (let i = 0; i < array.length; i++) {
            let correoGuar = array[i,1];
            let contraGuar = array[i,2];
            // arrayCorreos.forEach(element => {
            if (correVal==correoGuar && contraVal==contraGuar) {
                location.replace("admin.html")
                break;val=true;
            }
        }
        (val)?null:alert("Correo o Contraseña no válidos")
    }

)
)
// Ojo ve
// https://media.istockphoto.com/id/845329690/es/vector/icono-ojos-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=pfsZSCSwlqhdkgNrWqZYnmC98AHQsLTzDAQD8LO9SBs=
// Ojo NO ve
// https://cdn0.iconfinder.com/data/icons/interface-thin-line/32/ico-eye-closed-512.png