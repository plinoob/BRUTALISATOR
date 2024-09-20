var Gender = {
  male: 'male',
  female: 'female'
};
var pad = (n, width, z = '0') => {
    var nString = `${n}`;
    return nString.length >= width
        ? nString
        : new Array(width - nString.length + 1).join(z) + n.toString();
};
var readBodyString = (bodyString) => ({
    p1: parseInt(bodyString[0] || '0', 16),
    p1a: parseInt(bodyString[1] || '0', 16),
    p1b: parseInt(bodyString[2] || '0', 16),
    p2: parseInt(bodyString[3] || '0', 16),
    p3: parseInt(bodyString[4] || '0', 16),
    p4: parseInt(bodyString[5] || '0', 16),
    p5: parseInt(bodyString[6] || '0', 16),
    p6: parseInt(bodyString[7] || '0', 16),
    p7: parseInt(bodyString[8] || '0', 16),
    p7b: parseInt(bodyString[9] || '0', 16),
    p8: parseInt(bodyString[10] || '0', 16),
});
var generateBodyString = (body) => [
    body.p1.toString(16),
    body.p1a.toString(16),
    body.p1b.toString(16),
    body.p2.toString(16),
    body.p3.toString(16),
    body.p4.toString(16),
    body.p5.toString(16),
    body.p6.toString(16),
    body.p7.toString(16),
    body.p7b.toString(16),
    body.p8.toString(16),
].join('');
var getColor = (gender, part, color) => {
    var skinParts = ['col0', 'col0a', 'col0c'];
    var hairParts = ['col1', 'col1a', 'col1b', 'col1c', 'col1d'];
    var clothingParts = ['col2', 'col2a', 'col2b', 'col3', 'col3b', 'col4', 'col4a', 'col4b'];
    let colorArray = [];
    if (skinParts.includes(part))
        colorArray = colors[gender].skin;
    else if (hairParts.includes(part))
        colorArray = colors[gender].hair;
    else if (clothingParts.includes(part))
        colorArray = colors[gender].clothing;
    var normalColor = colorArray[color];
    if (normalColor)
        return normalColor;
    return colors.special[99 - color] || '#ffffff';
};
var readColorString = (gender, colorsString) => ({
    col0: (0, getColor)(gender, 'col0', +colorsString.slice(0, 2)),
    col0a: (0, getColor)(gender, 'col0a', +colorsString.slice(2, 4)),
    col0c: (0, getColor)(gender, 'col0c', +colorsString.slice(4, 6)),
    col1: (0, getColor)(gender, 'col1', +colorsString.slice(6, 8)),
    col1a: (0, getColor)(gender, 'col1a', +colorsString.slice(8, 10)),
    col1b: (0, getColor)(gender, 'col1b', +colorsString.slice(10, 12)),
    col1c: (0, getColor)(gender, 'col1c', +colorsString.slice(12, 14)),
    col1d: (0, getColor)(gender, 'col1d', +colorsString.slice(14, 16)),
    col2: (0, getColor)(gender, 'col2', +colorsString.slice(16, 18)),
    col2a: (0, getColor)(gender, 'col2a', +colorsString.slice(18, 20)),
    col2b: (0, getColor)(gender, 'col2b', +colorsString.slice(20, 22)),
    col3: (0, getColor)(gender, 'col3', +colorsString.slice(22, 24)),
    col3b: (0, getColor)(gender, 'col3b', +colorsString.slice(24, 26)),
    col4: (0, getColor)(gender, 'col4', +colorsString.slice(26, 28)),
    col4a: (0, getColor)(gender, 'col4a', +colorsString.slice(28, 30)),
    col4b: (0, getColor)(gender, 'col4b', +colorsString.slice(30, 32)),
});
var generateColorString = (colorObject) => [
    (0, pad)(colorObject.col0, 2),
    (0, pad)(colorObject.col0a, 2),
    (0, pad)(colorObject.col0c, 2),
    (0, pad)(colorObject.col1, 2),
    (0, pad)(colorObject.col1a, 2),
    (0, pad)(colorObject.col1b, 2),
    (0, pad)(colorObject.col1c, 2),
    (0, pad)(colorObject.col1d, 2),
    (0, pad)(colorObject.col2, 2),
    (0, pad)(colorObject.col2a, 2),
    (0, pad)(colorObject.col2b, 2),
    (0, pad)(colorObject.col3, 2),
    (0, pad)(colorObject.col3b, 2),
    (0, pad)(colorObject.col4, 2),
    (0, pad)(colorObject.col4a, 2),
    (0, pad)(colorObject.col4b, 2),
].join('');
var randomBetween = (min, max) => {
    if (min > max)
        return 0;
    if (min === max)
        return min;
    return Math.floor(Math.random() * (max - min + 1) + min);
};



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
		var newColor = "getChoosedColors)";
		var bodyflag = ".getRandomBody)";
		var newBody = "getChoosedBody)";
		
		js=js.split(colorflag);
		
		for(var i in js){
			if(i==js.length-1)break;
			while(!js[i].endsWith(",")){js[i]=js[i].substring(0, js[i].length - 1);}
		}

		js = js.join(newColor);
		
		js=js.split(bodyflag);
		cl(js.length,"BODY FOUND");
		for(var i in js){
			if(i==js.length-1)break;
			while(!js[i].endsWith(",")){js[i]=js[i].substring(0, js[i].length - 1);}
		}

		js = js.join(newBody);
		
		fetch(BRUTALISATOR+"color.js")
		  .then(response => response.text())
		  .then(color => {
			  
			var url = window.location.href.split("?")
			var master = ""
			if(url.length>1){url=url[1].split("&");
			for(var argstr of url){
				var argsplit=argstr.split("=");
				if(argsplit.length>1){if(argsplit[0]=="ref"){master=argsplit[1]}}
				
			}
			
			}
			  
			codeSource = codeSource.split(pos+jsfile+mid+end);
			codeSource = codeSource[0]+'<script type="module">var MASTER = "'+master+'";'+'var BRANCHE = "'+BRANCHE+'";'+'var SHURIKEN = "'+SHURIKEN+'";'+color+js+"\nconsole.log('FIN');"+codeSource[1];
			  
			var iframe = document.createElement('iframe');
			
			iframe.src = 'about:blank'; 

			document.body.appendChild(iframe);
			$(iframe).css({"position":"absolute",top:0,bottom:0,left:0,right:0,"z-index":50000,width:"99.5%",height:"100%"})
			var iframeDoc = iframe.contentWindow.document;

			iframeDoc.open();
			
			iframeDoc.write(codeSource);
			iframeDoc.close();
			stopLoading();
			setInterval(() => {
    try {
        var iframeUrl = iframe.contentWindow.location.href;
        if(iframeUrl.endsWith("cell")){window.location.href = iframeUrl;}
        // Redirige la page principale vers l'URL de l'iframe
        
    } catch (e) {
        console.error('Impossible d\'accéder à l\'URL de l\'iframe.', e);
    }
}, 1000);
		  })
		

	  
	  })
	
	

	
	
  })
  .catch(error => {
    console.error('Erreur:', error);
  });