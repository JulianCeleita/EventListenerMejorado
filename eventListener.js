
const lista = document.getElementById('lista');
const btnAgregar = document.getElementById('btn-agregar');

// Si agrego un evento al elemento padre, lo agregará a todos los hijos aunque sean nuevos. Por eso trabajo la lista completa
lista.addEventListener("click", (e) => {
    if (e.target && e.target.tagName ==="A"){           // para que solo tome elementos tipo A y no los espacios entre ellos
      e.target.classList.toggle("activo");
    }
});

 
btnAgregar.addEventListener('click', () => {
	const elemento = `
		<a href="#">
			Elemento <i class="bi bi-check-square-fill"></i>
		</a>
	`;

	lista.innerHTML += elemento;
});