'use strict'

window.addEventListener('load', function(){
	//Formulario
	var form = document.querySelector("#form");
	//Contenedor
	var container = document.querySelector("#container");
	//Lista Input
	var List = document.querySelector('#List');
	//Boton
	var submit = document.querySelector("#submit");
	//Div de mostrar datos
	const ul = document.querySelector("ul");
	var MostrarDatos = document.querySelector("#MostrarDatos");
	// Cerrar
	var Close = document.querySelector("#Close");

	submit.addEventListener("click", (e) =>{
		e.preventDefault();
		const text = List.value;
		const li = document.createElement("li");
		const p = document.createElement("p");

		if (text === ""){
			List.className = "error";
			List.setAttribute("placeholder","Agregar una tarea")
		}else{
			p.textContent = text;
			li.appendChild(p);
			li.appendChild(addDeleteBtn());
			ul.appendChild(li);
			List.classList.remove("error");
			List.classList.add("backgroundTransparent");
		}



	});

	function addDeleteBtn(){
		var deleteBtn = document.createElement("button");

		deleteBtn.textContent = "X";
		deleteBtn.className = "delete";

		deleteBtn.addEventListener('click', (e) =>{
			var item = e.target.parentElement;
			ul.removeChild(item);
		});
		return deleteBtn;
	}

});