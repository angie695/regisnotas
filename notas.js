function calcularNotas(){
    
    let identi=document.getElementById("Ident").value
    let nom= document.getElementById("nomtx").value
    let apelli=document.getElementById("apeltx").value
    let not1p=document.getElementById("not1").value
    let not2p=document.getElementById("not2").value
    let not3p=document.getElementById("not3").value
    let not1d=document.getElementById("notd1").value
    let not2d=document.getElementById("notd2").value
    let notc=document.getElementById("notc1").value
    let acumuladoNP,AcumuladoNotaD,promedioNp, promedioNotaD,porcentajeND,porcentajeNP,porcentajeNC
    var notaDef   


    acumuladoNP = parseFloat(not1d) + parseFloat(not2p) + parseFloat(not3p)
    promedioNp = parseInt(acumuladoNP / 3) 
    porcentajeNP = parseInt(promedioNp * 0.4)

    AcumuladoNotaD = parseFloat(not1d) + parseFloat(not2d)
    promedioNotaD = parseFloat(AcumuladoNotaD / 2) 
    porcentajeND = parseFloat(promedioNotaD * 0.3)
    
    porcentajeNC = parseFloat(notc * 0.3)

    notaDef = porcentajeNP + porcentajeND + porcentajeNC
  
    document.getElementById("promprod").value=porcentajeNP;
    document.getElementById("promprodñ").value=porcentajeND;
    document.getElementById("promprodc").value=porcentajeNC;
    document.getElementById("notdefi").value = notaDef;
    
    if(notaDef>=7.0){
        toastr.success("Aprobo la materia");
        document.getElementById("notaDef").focus
    }else{
        toastr.error("Ha reprobado la materia");
        document.getElementById("notaDef").focus
    }
    
 
}
function LimpiarCampos(){
    document.getElementById("Ident").value=""
    document.getElementById("nomtx").value=""
    document.getElementById("apeltx").value=""
    document.getElementById("not1").value=""
    document.getElementById("not2").value=""
    document.getElementById("not3").value=""
    document.getElementById("notd1").value=""
    document.getElementById("notd2").value=""
    document.getElementById("notc1").value=""   
    document.getElementById("promprod").value=""
    document.getElementById("promprodñ").value=""
    document.getElementById("promprodc").value=""
    document.getElementById("notdefi").value=""
    alert("Se limpiaron los campos")
}

