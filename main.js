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

function findTextInDOM(text,balise) {
  // Récupérer tous les éléments de la page
  const elements = document.querySelectorAll(balise);
  var found = false
  // Parcourir tous les éléments et vérifier leur texte
  elements.forEach(element => {
    if (element.textContent.includes(text)) {
      console.log('Élément trouvé :', element.textContent);
	  found = true
    }
  });
  return found;
}



const BRUTALISATOR = "https://raw.githubusercontent.com/Ambryal/BRUTALISATOR/main/";



const VERSION = "v2.72.4"
const ERROR = "Mauvaise version (version de 💪BRUTALISATOR : "+VERSION+")"

if(!findTextInDOM("v2.72.4","p")){alert(ERROR);throw new Error(ERROR);};

var url = window.location.href.split("/")
url.shift()
url.shift()



var FIGHT_TYPE

if(url[url.length-1] == ""){url.pop();}

if(url.length==1){addScript(BRUTALISATOR+"custom.js")}

if(url.length>2 && url[2] == "fight"){FIGHT_TYPE = "fight"}
if(url.length>4 && url[4] == "war"){FIGHT_TYPE = "war"}
if(FIGHT_TYPE){addScript(BRUTALISATOR+"damageChart.js")}

