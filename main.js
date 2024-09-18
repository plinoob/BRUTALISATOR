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


const BRUTALISATOR = "https://raw.githubusercontent.com/Ambryal/BRUTALISATOR/main/"

var url = window.location.href.split("/")
cl(url)
if(url[url.length-1] == ""){url.pop();}

if(url.length==1){addScript(BRUTALISATOR+"custom.js")}

