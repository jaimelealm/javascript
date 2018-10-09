//alert("probando recargo")
var n=0;

function mostrar(){
	alert("Hay "+n+" alummnos");
	for (let i=n;i>=1;i--){
		alert(i)
		console.log(i)
	}
}

function leerDatos(){
	for(;;){
		var x=parseInt(prompt("Numero de Alumnos: "));
		if (isNaN(x))
			alert("Numero invalido");
		else{
			n=x;
			return;
		}
	}
} 