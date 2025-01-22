// Vicente; main.js

// alert("MORTADELO, FILEMÓN!!!!");

// localStorage
let arrayCorreos;
if(localStorage.getItem("arrayCorreos")===null){
    arrayCorreos=Array(Array("correo@prueba.com","1234contra"),Array("test@test.com","contraseña"));
    localStorage.setItem("arrayCorreos",JSON.stringify(arrayCorreos))
}else{
    // JSON parse se encarga de pasar la información de JSON a otros tipos,
    // en este caso se ha usado para volver a tener Arrays útiles (partiendo de JSON)
    arrayCorreos=JSON.parse(localStorage.getItem("arrayCorreos"));
}
// Visibilidad Contraseñas, no funciona
// function contraVisible(){
//     if(document.getElementById("revela").type==="password"){
//         document.getElementById("revela").type ="text";
//         document.getElementById("revela2").type="text";
//     }else{
//         document.getElementById("revela").type ="password";
//         document.getElementById("revela2").type="password";
//     }
// }

// Cierre sesion admin.html
$("#cierreSesion").click(
    localStorage.removeItem("correoUsado"),
)


// DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready

// DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready DOM ready

$().ready(
    ()=>{
        let ubicacion=window.location.pathname.split("/").pop();
        if (ubicacion==="admin.html") {
            let arrayCorreos2=JSON.parse(localStorage.getItem("arrayCorreos"));
            //  Husmear es la tabla de admin.html
            // alert("FUNCIONA?");
            for (let index = 0; index < arrayCorreos.length; index++) {
                // console.log(`<tr><td>${arrayCorreos2[index][0]}</td><td>${arrayCorreos2[index][1]}</td><td><button class='btn btn-danger'>Eliminar</button></td></tr>`);
                $("#Husmear").append(`<tr><td>${arrayCorreos2[index][0]}</td><td>${arrayCorreos2[index][1]}</td><td><button class='btn btn-danger'>Eliminar</button></td></tr>`);
            }
            $("#Husmear").DataTable({
                language: {
                    processing: "Procesando...",
                    search: "Buscar:",
                    lengthMenu: "Mostrar _MENU_ registros",
                    info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
                    infoFiltered: "(filtrado de un total de _MAX_ registros)",
                    loadingRecords: "Cargando...",
                    zeroRecords: "No se encontraron resultados",
                    emptyTable: "Ningún dato disponible en esta tabla",
                    paginate: {
                        first: "Primero",
                        previous: "Anterior",
                        next: "Siguiente",
                        last: "Último"
                    },
                    aria: {
                        sortAscending: ": Activar para ordenar la columna de manera ascendente",
                        sortDescending: ": Activar para ordenar la columna de manera descendente"
                    }
                }
            });
        }else{
    




    $("#ocultaLogin").click(function(){
        // alert("click"),
        $(".registro").css("display","inline"),
        $(".login").css("display","none"),
        $("#TITULAR").text("Bienvenido al Registro")
    }
),
$("#ocultaRegistro").click(function(){
    // alert("Noclick"),
    $(".login").css("display","block"),
    $(".registro").css("display","none"),
    $("#TITULAR").text("Bienvenido al Login")
    }
),

// comprobaciones extra: 4-12 caracteres contraseña, no cuentas repetidas
// 
    setInterval(function(){
        let cor=$("#correo").val();
        
        let patronImportado=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // let conVal=$.contains(con,$("#id").val().replace(/ /g,'').length)
        if(!patronImportado.test(cor)){
            $("#textoAviso").text("El correo no es válido")
            $("#textoAviso").css("display","block")
            $("#textoAviso").css("color","red")
        }else{
            $("#textoAviso").css("display","none")
        }
    },500),
    // document.write($("#correo").val()),
    setInterval(function(){
        let con=$("#contra").val();
        let con2=$("#contra2").val();
        // let conVal=$.contains(con,$("#id").val().replace(/ /g,'').length)
        if(!(con==con2) && con2!==""){
            $("#textoNoContra").text("Las contraseñas no coinciden")
            $("#textoNoContra").css("color","red")
            $("#textoNoContra").css("display","block")
        }else{
            $("#textoNoContra").css("display","none")
        }
    },500),

    // console.log($("#contra2").val(),$("#contra2").val()==""),


    // LOGIN 
    $("#identificarse").on("click",()=>{
        // comparar pareja email-contraseña con entrante
        // alert("login")
        
            function comparaParejas(corrP,conP) {
                console.log(arrayCorreos);
                let val=false;
                // let vuelta=0;
                for (let i = 0; i < arrayCorreos.length; i++) {
                    if(arrayCorreos[i][0]==corrP && arrayCorreos[i][1]==conP){
                        val=true;
                    }else{
                        console.log("NO HA SIDO IDENTIFICADO, posicion "+i)
                        // console.log("i",i)
                        // console.log("arrayCorreos[i][0] ",arrayCorreos[i][0])
                        // console.log("arrayCorreos[i][1]",arrayCorreos[i][1])
                        // console.log("vuelta",vuelta++)
                    }
                }
                val?(localStorage.setItem("correoUsado",corrP),                        
                window.location.href="admin.html")
                
                :null;
            }
            // (val)?console.log("éxito"):alert("Correo o Contraseña no válidos");
        comparaParejas($("#correo").val(),$("#contra").val())
    }),
    $("#Registrarse").on("click",()=>{
        // alert("registro");
        function esValido(con1,con2){
            if(con1==con2){
                arrayCorreos.push([$("#correo").val(),con1])
                localStorage.setItem("arrayCorreos",JSON.stringify(arrayCorreos))
                window.location.href="index.html"
            }else{
                alert("La pareja de contraseñas no es idéntica")
            }
        }
        esValido($("#contra").val(),$("#contra2").val())
    }),
    // Qué hay en localStorage
    console.log(" localStorage: "+localStorage.getItem("arrayCorreos"))

    // function (){
    //     if(window.location.pathname.endsWith("admin.html")){
    //         // arrayCorreos; Husmear es la tabla de admin.html
    //         alert("FUNCIONA?")
    //         for (let index = 0; index < arrayCorreos.length; index++) {
    //             console.log(arrayCorreos[index][0])
    //             $("#Husmear").append("<tr><td>${arrayCorreos["+index+"][0]}</td><td>${arrayCorreos["+index+"][1]}</td>"+"<td><button class='btn btn-danger'>Eliminar</button></td></tr>")
    //         }
    //         $("#Husmear").DataTable({
    //             language: {
    //                 processing: "Procesando...",
    //                 search: "Buscar:",
    //                 lengthMenu: "Mostrar _MENU_ registros",
    //                 info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    //                 infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
    //                 infoFiltered: "(filtrado de un total de _MAX_ registros)",
    //                 loadingRecords: "Cargando...",
    //                 zeroRecords: "No se encontraron resultados",
    //                 emptyTable: "Ningún dato disponible en esta tabla",
    //                 paginate: {
    //                     first: "Primero",
    //                     previous: "Anterior",
    //                     next: "Siguiente",
    //                     last: "Último"
    //                 },
    //                 aria: {
    //                     sortAscending: ": Activar para ordenar la columna de manera ascendente",
    //                     sortDescending: ": Activar para ordenar la columna de manera descendente"
    //                 }
    //             }
    //         });
            
    //     }
    // }
    
    
    
        }
    }




)




// DOM Datatables

// function cambio(){
//     location.replace("admin.html")
// }
// Ojo ve
// https://media.istockphoto.com/id/845329690/es/vector/icono-ojos-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=pfsZSCSwlqhdkgNrWqZYnmC98AHQsLTzDAQD8LO9SBs=
// Ojo NO ve
// https://cdn0.iconfinder.com/data/icons/interface-thin-line/32/ico-eye-closed-512.png