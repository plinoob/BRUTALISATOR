function cl(a){if(arguments.length!=1) a=[...arguments];console.log(a)}

function addScript( src ) {
	cl("addscript",src);
	fetch(src)
	  .then(response => response.text())
	  .then(html => {
	  
		  var s = document.createElement( 'script' );
		  s.setAttribute('text',"text/javascript");
		  s.setAttribute('type',"module");
		  s.textContent=html;
		  document.body.appendChild( s );
	  
	  })

	}


const BRUTALISATOR = "https://raw.githubusercontent.com/Ambryal/BRUTALISATOR/main/";

// Récupérer l'élément avec l'attribut aria-label="Afficher/masquer les logs"
const element = document.querySelector('[aria-label="Afficher/masquer les logs"]');

// Vérifier si l'élément existe, puis simuler un clic
if (element) {
  element.click();
  console.log("clicked !!!");
} else {
  console.log("Élément non trouvé");
}
