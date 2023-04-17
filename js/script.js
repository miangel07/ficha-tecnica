function comprobar(){
    let producto, linea, veranterior, veractual ,modulo, objetivo,descrgeneral, arquitectura,hardware,hardware2,software2, software, otros,otros2, version,naturaleza,felaboracion,fevaloracion,aprobo,valido
    producto=document.getElementById("producto").value 
    document.getElementById("respuesta1").innerHTML="<h2>nombre del producto:"+producto+"<h2>"
    console.log(producto)

  linea=document.getElementById("linea").value
 document.getElementById("respuesta2").innerHTML="<h2>linea del producto: "+linea+"</h2>"
console.log(linea)

veranterior=document.getElementById("veranterior").value
document.getElementById("respuesta3").innerHTML="<h2>version anterior: "+veranterior+"</h2>"
console.log(veranterior)

veractual=document.getElementById("veractual").value
document.getElementById("respuesta4").innerHTML="<h2>version actual: "+veractual+"</h2>"
console.log(veractual)

modulo=document.getElementById("modulo").value
document.getElementById("respuesta5").innerHTML="<h2>modulo: "+modulo+"</h2>"
console.log(modulo)

objetivo=document.getElementById("objetivo").value
document.getElementById("respuesta6").innerHTML="<h2>objetivo: "+objetivo+"</h2>"
console.log(objetivo)

descrgeneral=document.getElementById("descrgeneral").value
document.getElementById("respuesta7").innerHTML="<h2>descripcion general : "+descrgeneral+"</h2>"
console.log(descrgeneral)


arquitectura=document.getElementById("arquitectura").value
document.getElementById("respuesta8").innerHTML="<h2>arquitectura: "+arquitectura+"</h2>"
console.log( arquitectura)

hardware=document.getElementById("hardware").value
document.getElementById("respuesta.9").innerHTML="<h2>hardware: "+ hardware+"</h2>"
console.log(hardware)

software=document.getElementById("software").value
document.getElementById("respuesta10").innerHTML="<h2>software: "+software+"</h2>"
console.log(linea)

otros=document.getElementById("otros").value
document.getElementById("respuesta11").innerHTML="<h2>otros: "+otros+"</h2>"
console.log(otros)

version=document.getElementById("version").value
document.getElementById("respuesta12").innerHTML="<h2>version: "+version+"</h2>"
console.log(version)

naturaleza=document.getElementById("naturaleza").value
document.getElementById("respuesta15").innerHTML="<h2>naturaleza: "+naturaleza+"</h2>"
console.log(naturaleza)

felaboracion=document.getElementById("felaboracion").value
document.getElementById("respuesta16").innerHTML="<h2>fecha de alaboracion: "+felaboracion+"</h2>"
console.log(felaboracion)

fevaloracion=document.getElementById("fevaloracion").value
document.getElementById("respuesta17").innerHTML="<h2>fecha de valoracion: "+fevaloracion+"</h2>"
console.log(fevaloracion)

aprobo=document.getElementById("aprobo").value
document.getElementById("respuesta18").innerHTML="<h2>Aprobo: "+aprobo+"</h2>"
console.log(aprobo)

valido=document.getElementById("valido").value
document.getElementById("respuesta19").innerHTML="<h2>Valido: "+valido+"</h2>"
console.log(valido)

hardware2=document.getElementById("hardware2").value
document.getElementById("respuesta12").innerHTML="<h2>Hardware: "+hardware2+"</h2>"
console.log(hardware2)

software2=document.getElementById("software2").value
document.getElementById("respuesta13").innerHTML="<h2>Software: "+software2+"</h2>"
console.log(software2)


otros2=document.getElementById("otros2").value
document.getElementById("respuesta14").innerHTML="<h2>Otros: "+otros2+"</h2>"
console.log(otros2)
}