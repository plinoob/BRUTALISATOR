function cl(a){if(arguments.length!=1) a=[...arguments];console.log(a)}

function addScript( src ) {

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


const BRUTALISATOR = "https://raw.githubusercontent.com/Ambryal/BRUTALISATOR/539bcc944bc4332b71987f14ba1e3393ffe2fa59/"

var url = window.location.href.split("/")


if(url.length==1){addScript(BRUTALISATOR+"custom.js")}

