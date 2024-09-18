



fetch(window.location.href)
  .then(response => response.text())
  .then(html => {
    var codeSource = html; 
	
	
	var pos = '<script defer="defer" src="';
	var jsfile = "/static/js/main.";
	var end = '.js">';
	var num = codeSource.split(pos+jsfile);
	if(num.length != 2){cl("trouve pas le .js",pos+jsfile);return}
	
	var mid = num[1].split(end)[0];
	
	cl("fetching : ",jsfile+mid+end);
	fetch(jsfile+mid+".js")
	  .then(response => response.text())
	  .then(html2 => {
	  		
		var js = html2;
		
		
		
		var colorflag = ".getRandomColors)";
		var newColor = "GET_RANDOM_COLOR)";
		
		js=js.split(colorflag);
		
		for(var i in js){
			if(i==js.length-1)break;
			while(!js[i].endsWith(",")){js[i]=js[i].substring(0, js[i].length - 1);}
		}

		js = js.join(newColor);
		
		fetch(BRUTALISATOR+"color.js")
		  .then(response => response.text())
		  .then(color => {
			codeSource = codeSource.split(pos+jsfile+mid+end);
			codeSource = codeSource[0]+'<script type="module">'+color+js+"\nconsole.log('FIN');"+codeSource[1];
			  
			var iframe = document.createElement('iframe');

			iframe.src = 'about:blank'; 

			document.body.appendChild(iframe);

			var iframeDoc = iframe.contentWindow.document;

			iframeDoc.open();
			
			iframeDoc.write(codeSource);
			iframeDoc.close();
			cl(iframe);
		  })
		

	  
	  })
	
	

	
	
  })
  .catch(error => {
    console.error('Erreur:', error);
  });
