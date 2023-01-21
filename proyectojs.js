/*alert("Por favor seleccona una opcion : 1 Piedra, 2 Papel , 3 Tijera")
let usuario = prompt("Por favor introduzca una opcion valida")


if(usuario == 1) {
	alert("Seleccionaste Piedra")
} else if (usuario == 2) {
	alert("Seleccionaste Papel")
} else if (usuario == 3) {
	alert("Selecionaste Tijera")
} else {
	alert("Por favor introduzca una opcion valida")
}

const aleatoria = function (min,max) {
	return(Math.floor(Math.random()*(max - min + 1)) + min)  
}

let pc = aleatoria(1,3)

if(pc == 1) {
	alert(" La PC selecciono  Piedra")
} else if (pc == 2) {
	alert(" La PC selecciono  Papel")
} else if (pc == 3) {
	alert(" La PC selecciono Tijera")
} 


//Usuario
// 1 Piedra, 2 Papel , 3 Tijera

if (usuario == pc) {
	alert("EMPATE")
} else if (usuario == 1 && pc == 2) {
	alert("Gano la PC")
} else if (usuario == 1 && pc == 3) {
	alert("Ganaste")
} else if (usuario == 2 && pc == 1) {
	alert("Ganaste")
} else if (usuario == 2 && pc == 3) {
	alert("Gano la PC")
} else if (usuario == 3 && pc == 1) {
	alert("Gano la PC")
} else if (usuario == 3 && pc == 2) {
	alert("Ganaste")
}  

*/


//USUARIO
function seleccion(){
	let usuario = Number(document.getElementById("input-1").value) ;
	if(usuario == 1) {
	document.getElementById("resultado").innerHTML = `<img src="Piedra.png" width="100px" height="100px">`
	document.getElementById("opcion-usuario").innerHTML = "Seleccionaste Piedra"
	} else if (usuario == 2) {
	document.getElementById("resultado").innerHTML = `<img src="Papel.png" width="100px" height="100px">`
	document.getElementById("opcion-usuario").innerHTML = "Seleccionaste Papel"
	} else if (usuario == 3) {
	document.getElementById("resultado").innerHTML = `<img src="Tijeras.png" width="100px" height="100px">`
	document.getElementById("opcion-usuario").innerHTML = "Seleccionaste Tijera"
	} else {
		alert("Por favor introduzca una opcion valida")
	}	

	const aleatoria = function (min,max) {
	return(Math.floor(Math.random()*(max - min + 1)) + min)  
}

	let pc = aleatoria(1,3)

	if(pc == 1) {
		document.getElementById("resultadopc").innerHTML = `<img src="Piedra.png" width="100px" height="100px">`
		document.getElementById("opcion-computadora").innerHTML = "Computadora selecciono  Piedra"
	} else if (pc == 2) {
		document.getElementById("resultadopc").innerHTML = `<img src="Papel.png" width="100px" height="100px">`
		document.getElementById("opcion-computadora").innerHTML = "Computadora selecciono  Papel"
	} else if (pc == 3) {
		document.getElementById("resultadopc").innerHTML = `<img src="Tijeras.png" width="100px" height="100px">`
		document.getElementById("opcion-computadora").innerHTML = "Computadora selecciono Tijera"
	} 


	if (usuario == pc) {
	document.getElementById("decision").innerHTML ="EMPATE"
	} else if (usuario == 1 && pc == 2) {
	document.getElementById("decision").innerHTML ="GANO LA COMPUTADORA"
	} else if (usuario == 1 && pc == 3) {
	document.getElementById("decision").innerHTML ="GANASTE"
	} else if (usuario == 2 && pc == 1) {
	document.getElementById("decision").innerHTML ="GANASTE"
	} else if (usuario == 2 && pc == 3) {
	document.getElementById("decision").innerHTML ="GANO LA COMPUTADORA"
	} else if (usuario == 3 && pc == 1) {
	document.getElementById("decision").innerHTML ="GANO LA COMPUTADORA"
	} else if (usuario == 3 && pc == 2) {
	document.getElementById("decision").innerHTML ="GANASTE"
	}  

let contador = [document.getElementById("decision").innerHTML];

for (let i of contador) {
	document.getElementById("contador").innerHTML = i
}




}




//COMPUTADORA

