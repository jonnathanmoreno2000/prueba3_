function checkRut(rut, digitoVerificador) {
    
    var resultado = (rut.length <= 8 && digitoVerificador.length == 1);

    if (!resultado) return resultado;

    var suma = 0;
    var multiplo = 2;
    for(var i = rut.length -1; i >= 0; i--)
     {alert("del for " + multiplo +" "+ rut.charAt(i));
        suma += multiplo * rut.charAt(i);
        if (multiplo < 7) {
            multiplo++;
        


