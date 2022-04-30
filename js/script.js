document.body.style.background = "#000"
document.body.style.overflowY = "hidden"
document.documentElement.style.fontFamily = "Acme"

//ESTILOS DEL CONTENEDOR DE PARTICULAS
const $particulas = document.getElementById("particles-js");

$particulas.style.height = "100vh";
$particulas.style.width = "100%";
$particulas.style.zIndex = "-1";
$particulas.style.position = "fixed";

//ESTILOS DE LA APLICACION
const $app = document.getElementById("app");
$app.zIndex = "99";
$app.style.height = "100vh";
$app.style.display = "flex";
$app.style.justifyContent = "center";
$app.style.alignItems = "center";

//ESTILOS DE LA SECCION
const $section = document.createElement("section");

$section.style.background = "#fff9"
$section.style.height = "80vh";
$section.style.width = "70%";
$section.style.border = "1px solid #fff"
$section.style.boxShadow = "0 0 10px #000 inset"
$section.style.display = "flex"
$section.style.flexDirection = "column"
$section.style.justifyContent = "space-bettwen"

//CREANDO ELEMENTOS
const $titulo = document.createElement("h1");
$titulo.style.color = "#007F0EFF";
$titulo.textContent = "INDICE DE MASA CORPORAL";
$titulo.style.textAlign = "center";
$titulo.style.textShadow = "0 2px 0 #000"
const $parrafo = document.createElement("p");
$parrafo.textContent = `El índice de masa corporal (IMC) es un método utilizado
 para estimar la cantidad de grasa
 corporal que tiene una persona, y determinar por tanto si el peso
 está dentro del rango normal, o por el contrario,
 se tiene sobrepeso o delgadez. Para ello, 
 se pone en relación la estatura y el peso actual del individuo.`;
$parrafo.style.color = "#000";
$parrafo.style.marginLeft = "30px"
$parrafo.style.marginRight = "30px"

const $subtitulo = document.createElement("h2");
$subtitulo.style.color = "#007F0EFF"
$subtitulo.textContent = "CALCULE SU IMC"
$subtitulo.style.textAlign = "center"
$subtitulo.style.textShadow = "0 2px 0 #000"


const $contenedor = document.createElement("div");
$contenedor.style.display = "flex"
$contenedor.style.justifyContent = "center"
$contenedor.style.flexWrap = "wrap"
$contenedor.style.gap = "30px"
$contenedor.style.width = "100%";

const $img = document.createElement("img")
$img.setAttribute("src", "./img/imagen.png")
$img.style.width = "170px";
$img.style.filter = "drop-shadow(0 0 10px #000)"

const $contenedorIMG = document.createElement("div");

const $contenedorInputs = document.createElement("div")
$contenedorInputs.style.display = "flex";
$contenedorInputs.style.flexDirection = "column"
$contenedorInputs.style.justifyContent = "space-around"
$contenedorInputs.style.gap = "20px"
$contenedorInputs.style.padding = "10px"

const $tituloCalculo = document.createElement("h3");
$tituloCalculo.textContent = "CALCULO";
$tituloCalculo.style.margin = "4px"
$tituloCalculo.style.textShadow = "0 2px 0 #404040FF"


const $labelAltura = document.createElement("label");
const $accion1 = document.createElement("p")
$accion1.textContent = "Introduzca su estatura(M)";
$accion1.style.margin = "0"
const $inputEstatura = document.createElement("input");
$inputEstatura.style.height = "20px"
$inputEstatura.style.textAlign = "center"
$inputEstatura.style.outline = "none"
$inputEstatura.style.borderRadius = "4px"
$inputEstatura.style.border = "3px solid transparent"
$inputEstatura.style.boxShadow = "0 2px 4px #000"

const $labelPeso = document.createElement("label");
const $accion2 = document.createElement("p");
$accion2.style.margin = "0"
$accion2.textContent = "Introduzca su peso(KG)"

const $inputPeso = document.createElement("input");
$inputPeso.setAttribute("type", "number")
$inputPeso.style.height = "20px"
$inputPeso.style.textAlign = "center"
$inputPeso.style.outline = "none"
$inputPeso.style.borderRadius = "4px"
$inputPeso.style.border = "3px solid transparent"
$inputPeso.style.boxShadow = "0 2px 4px #000"


const $btnCalcular = document.createElement("input");
$btnCalcular.setAttribute("type", "submit")
$btnCalcular.setAttribute("value", "Calcular")
$btnCalcular.style.border = "none"
$btnCalcular.style.height = "30px"
$btnCalcular.style.background = "#000"
$btnCalcular.style.outline = "none";
$btnCalcular.style.color = "#fff"
$btnCalcular.style.borderRadius = "4px"
$btnCalcular.style.cursor = "pointer"
$btnCalcular.style.border = "3px solid transparent"
$btnCalcular.style.boxShadow = "0 2px 4px #000"


const $contenedorResultados = document.createElement("div");
$contenedorResultados.style.width = "300px"
$contenedorResultados.style.maxWidth = "400px"
$contenedorResultados.style.display = "none"

const $autor = document.createElement("p");
$autor.textContent = "Autor:"
$autor.style.margin = "3px"
$autor.style.textAlign = "center"
$autor.style.textShadow = "0 2px 3px #404040FF"

const $linkGit = document.createElement("a")
$linkGit.setAttribute("href", "https://github.com/Ginto11")
$linkGit.setAttribute("target", "Blank")
$linkGit.textContent = "Nelson Muñoz"
$linkGit.style.marginLeft = "3px"
$linkGit.style.textDecoration = "none"
$linkGit.style.color = "#000"


//AGREGANDO ELEMENTOS
$section.appendChild($titulo)
$section.appendChild($parrafo)
$section.appendChild($subtitulo)

$contenedorIMG.appendChild($img)
$contenedor.appendChild($contenedorIMG)

$contenedorInputs.appendChild($tituloCalculo)

$labelAltura.appendChild($accion1)
$labelAltura.appendChild($inputEstatura)

$labelPeso.appendChild($accion2)
$labelPeso.appendChild($inputPeso)

$contenedorInputs.appendChild($labelAltura)
$contenedorInputs.appendChild($labelPeso)
$contenedorInputs.appendChild($btnCalcular)


$contenedor.appendChild($contenedorInputs)
$contenedor.appendChild($contenedorResultados)
$section.appendChild($contenedor)

$autor.appendChild($linkGit)

$section.appendChild($autor)
$app.appendChild($section)


$btnCalcular.addEventListener("click", ()=>{
	let estatura = $inputEstatura.value;
	let peso = $inputPeso.value;

	let indice = peso / Math.pow(estatura, 2);

	$descripcion = document.createElement("p");
	
	if (indice < 18.5) {
		$descripcion.innerHTML = 
		`<h3 style="text-shadow: 0 2px 0 #404040FF">RESULTADO</h3>
		<p>Su IMC es <b>17.8</b>, lo que indica que su peso está en la categoría de Bajo peso para adultos de su misma estatura.
		Para su estatura, un peso normal variaría entre 49.8  a  67 kilogramos.
		Hable con su proveedor de atención médica para establecer las posibles causas del bajo peso y si necesita ganar peso.</p>
		<h4>Nivel de peso: Bajo peso </h4>
		`
	} else if(indice >= 18.5 && indice <= 24.9){
		$descripcion.innerHTML = 
		`<h3 style="text-shadow: 0 2px 0 #404040FF">RESULTADO</h3>
		<p>Su IMC es <b>21.1</b>, lo que indica que su peso está en la categoría Normal para adultos de su misma estatura.
		Para su estatura, un peso normal variaría entre 56  a  75.4 kilogramos.
		Mantener un peso saludable puede reducir el riesgo de enfermedades crónicas asociadas al sobrepeso y la obesidad.</p>
		<h4>Nivel de peso: Normal </h4>
		`
	} else if(indice >= 25.0 && indice < 29.9){
		$descripcion.innerHTML = 
		`<h3 style="text-shadow: 0 2px 0 #404040FF">RESULTADO</h3>
		<p>Su IMC es <b>29.4</b>, lo que indica que su peso está en la categoría de Sobrepeso para adultos de su misma estatura.
		Para su estatura, un peso normal variaría entre 56 a 75.4 kilogramos.
		Las personas que tienen sobrepeso o son obesas tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto.  </p>
		<h4>Nivel de peso: Sobrepeso</h4>
		`
	} else {
		$descripcion.innerHTML = 
		`<h3 style="text-shadow: 0 2px 0 #404040FF">RESULTADO</h3>
		<p> Su IMC es <b>33</b>, lo que indica que su peso está en la categoría de Obeso para adultos de su misma estatura.
		Para su estatura, un peso normal variaría entre 56 a 75.4 kilogramos.
		Las personas que tienen sobrepeso o son obesas tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto. </p>
		<h4>Nivel de peso: Obeso</h4>
		`
	}
	$contenedorResultados.appendChild($descripcion)
	$contenedorResultados.style.display = "block"
})


$inputEstatura.onfocus = ()=>{
	$inputEstatura.style.borderColor = "#007F0EFF"
	$inputEstatura.style.transition = ".4s ease all"
}

$inputEstatura.onblur = () =>{
	$inputEstatura.style.borderColor = "transparent"
	$inputEstatura.style.transition = ".4s ease all"
}

$inputPeso.onfocus = () =>{
	$inputPeso.style.borderColor = "#007F0EFF"
	$inputPeso.style.transition = ".4s ease all"
}

$inputPeso.onblur = () =>{
	$inputPeso.style.borderColor = "transparent"
	$inputPeso.style.transition = ".4s ease all"
}

$btnCalcular.onfocus = () => {
	$btnCalcular.style.borderColor = "#fff3"
	$btnCalcular.style.transition = ".4s ease all"
}

$btnCalcular.onblur = () =>{
	$btnCalcular.style.borderColor = "transparent"
	$btnCalcular.style.transition = ".4s ease all"
}

$linkGit.onmouseover = () => {
	$linkGit.style.color = "#0009";
	$linkGit.style.textDecoration = "underline"
}

$linkGit.onmouseout = () => {
	$linkGit.style.color = "#000"
	$linkGit.style.textDecoration = "none"
}