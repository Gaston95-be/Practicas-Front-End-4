const btnEnviar = document.getElementById("enviar_nota");

btnEnviar.addEventListener("click",()=>{
	let resultado,mensaje;
	try {
		resultadoPrev = parseInt(document.getElementById(`nota_alumno`).value);
		if (isNaN(resultadoPrev)){
			throw "no toques ahi maquinola";
		}
		mensaje = mensajeDeSalida(resultadoPrev);
		resultado = verificarAprobado(8,5,resultadoPrev);
	} catch (error){
		resultado = "error";
		mensaje = "hubo un error";
	}
	abrirModal(resultado,mensaje);
	
})

const mensajeDeSalida = (rp)=>{
	let resultado;
	switch (rp){
		case 1: resultado = "Pesima nota";
		break;
		case 2: resultado = "pesima nota";
		break;
		case 3: resultado = "pesima nota";
		break;
		case 4: resultado = "mala nota";
		break;
		case 5: resultado = "mala nota";
		break;
		case 6: resultado = "mala nota";
		break;
		case 7: resultado = "nota regular";
		break;
		case 8: resultado = "Buena nota";
		break;
		case 9: resultado = "Buena nota";
		break; 
		case 10: resultado = "Excelente nota";
		break;
		default: resultado = null;
	}
	return resultado;

}

const verificarAprobado = (nota1,nota2,resultadoPrev)=>{
	prom = (nota1 + nota2 + resultadoPrev) / 3;
	if (prom >= 7){
		return "<span class='green'>Aprobado</span>";
	}
	return "<span class='red'>Desaprobado</span>";
}

const abrirModal = (res,msj)=>{
	document.querySelector(".resultado").innerHTML = res;
	document.querySelector(".mensaje").innerHTML = "Tú evalaución: " + msj;
	let modal = document.querySelector(".modal_background");
	modal.style.animation = "mostrar 1s forwards";
	modal.style.display = "flex";
}