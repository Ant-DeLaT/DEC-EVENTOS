// Vicente

// alert("MORTADELO, FILEMÓN!!!!");

// 
let arrayCorreos;
if(localStorage.getItem("arrayCorreos")===null){
    arrayCorreos=Array(["correo@prueba.com","1234contra"],["test@test.com","contraseña"]);
    localStorage.setItem("arrayCorreos",JSON.stringify(arrayCorreos))
}else{
    arrayCorreos=localStorage.getItem("arrayCorreos");
}
function contraVisible(){
    if(document.getElementById("revela").type==="password"){
        document.getElementById("revela").type ="text";
        document.getElementById("revela2").type="text";
    }else{
        document.getElementById("revela").type ="password";
        document.getElementById("revela2").type="password";
    }
}
// DOM ready
$().ready(
    $("#ocultaLogin").click(function(){
        // alert("click"),
        $(".registro").css("display","block"),
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
$("#cierreSesion").click(
    localStorage.removeItem("correoNuevo"),
    localStorage.removeItem("contraNueva")
),
    setInterval(function(){
        let cor=$("#correo").val();
        
        let corVal=($.contains(cor,"@"));
        // let conVal=$.contains(con,$("#id").val().replace(/ /g,'').length)
        if(!corVal){
            $("#textoAviso").text("El correo no es válido")
            $("#textoAviso").css("display","block")
            $("#textoAviso").css("color","red")
        }else{
            $("#textoAviso").css("display","none")
        }
    },500),
    document.write($("#correo").val()),
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
    console.log($("#contra2").val(),$("#contra2").val()==""),
    $("#identificarse").on("click",()=>{
        // comparar pareja email-contraseña con entrante
        // alert("login")
            function comparaParejas(valP,conP) {
                arrayCorreos.forEach(ele => {
                    if(ele[0]==valP && ele[1]==conP){
                        alert("AVISO")
                        document.write("coincidencia\n");
                        window.location("admin.html")
                    }
                });
            }
            // (val)?console.log("éxito"):alert("Correo o Contraseña no válidos");
        comparaParejas($("#correo").val(),$("#contra").val())
    }),
    $("#Registrarse").on("click",()=>{
        // alert("registro");
        function esValido(con1,con2){
            if(con1==con2){
                arrayCorreos.push([$("#contra").val(),con1])
                localStorage.setItem("arrayCorreos",JSON.stringify(arrayCorreos))
                window.location="admin.html"
            }else{
                alert("La pareja de contraseñas no es idéntica")
            }
        }
    esValido($("#contra").val(),$("#contra2").val())
    }),

    


)
// function cambio(){
//     location.replace("admin.html")
// }
// Ojo ve
// https://media.istockphoto.com/id/845329690/es/vector/icono-ojos-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=pfsZSCSwlqhdkgNrWqZYnmC98AHQsLTzDAQD8LO9SBs=
// Ojo NO ve
// https://cdn0.iconfinder.com/data/icons/interface-thin-line/32/ico-eye-closed-512.png