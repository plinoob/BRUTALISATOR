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
var fightLog = ""


// Créer un observer qui surveille les changements dans le DOM
var observer = new MutationObserver((mutationsList) => {
  for (var mutation of mutationsList) {
    // Parcourir les nouveaux nœuds ajoutés
    mutation.addedNodes.forEach(node => {
      // Vérifier si le nœud est une div
      if (node.nodeName === 'DIV') {
        // Vérifier si la div contient des balises <p>
        var pElements = node.querySelectorAll('p');
        
        if (fightLog=="") {
          // Loguer le contenu de chaque balise <p>
          pElements.forEach(p => {
            //console.log('Contenu de la balise <p>:', p.innerText);
			fightLog += p.innerText+"\n"
          });
          
          // Rendre la div invisible
          node.style.display = 'none';
		  
		  analyzeText(fightLog);
		  
			function getNamesFromTeam(team){var s = "";
			for(var i of team){var bruteSTR = " <b>"+i[0]+'</b>'+"\n"
			s+=bruteSTR
			}
			return s}
			
			function getDamageFromTeam(team){var s = "";
			for(var i of team){var bruteSTR = '<font opacity="0.88" font-size="0.751429rem" color="rgb(140, 81, 64)"><b>'+i[1]+"</b></font>"+"\n"
			s+=bruteSTR
			}
			return s}

			function getChocFromTeam(team){var s = "";
			for(var i of team){var bruteSTR = '<font text-align="center">'+i[2]+"</font>"+"\n"
			s+=bruteSTR
			}
			return s}
			$("#dmgChartDIV").remove()
			var allDIV = div({1:"dmgChartDIV",0:body,26:1,9:uni([{ "font-size":"0.821429rem"
			,display: "flex","flex-direction": "line"},
			textBoxCSS,baseCSS,{"margin": "16px 40px"}])})
			
			div({0:allDIV,17:getNamesFromTeam(teams[0])})
			div({0:allDIV,17:"   "})
			div({0:allDIV,17:getDamageFromTeam(teams[0])})
			div({0:allDIV,17:" "})
			div({0:allDIV,17:getChocFromTeam(teams[0])})
			div({0:allDIV,17:(teams[2].length!=0)?"      ":"         "})
			div({0:allDIV,17:getNamesFromTeam(teams[2])})
			div({0:allDIV,17:"   "})
			div({0:allDIV,17:getDamageFromTeam(teams[2])})
			div({0:allDIV,17:" "})
			div({0:allDIV,17:getChocFromTeam(teams[2])})
			div({0:allDIV,17:(teams[2].length!=0)?"      ":"         "})
			div({0:allDIV,17:getNamesFromTeam(teams[1])})
			div({0:allDIV,17:"   "})
			div({0:allDIV,17:getDamageFromTeam(teams[1])})
			div({0:allDIV,17:" "})
			div({0:allDIV,17:getChocFromTeam(teams[1])})
			
			insertDivAfterElement(allDIV[0],findFirstParentDiv(findTextInDOM("Cellule de ","span")));
			
		    $(findTextInDOM("Plus de jeux EternalTwin","p")).css("visibility","hidden");
		    $(findTextInDOM(VERSION,"p")).css("visibility","hidden");
			$(document.querySelector('[role="alert"]')).css("visibility","hidden");
		
			stopLoading();
			observer.disconnect();
        }
      }
    });
  }
});

// Configurer l'observer pour surveiller les ajouts d'enfants dans tout le document
observer.observe(document.body, {
  childList: true,
  subtree: true
});

function decentName(name){var nom;if(parseInt(name).toString() == name){ nom= " "+name}else{nom= name};if(names.indexOf(nom)==-1){names.push(nom)};return nom}

var pre_team1 = {}
var pre_team2 = {}
	

function getClanNames(){
var rows = document.querySelectorAll('tr');

// Parcourir chaque élément <tr>
rows.forEach(row => {
  // Récupérer les deux premiers <td> du <tr>
  var tds = row.querySelectorAll('td');

  if (tds.length >= 2) {
    // Pour chacun des deux premiers <td>
    for (let i = 0; i < 2; i++) {
      var td = tds[i];
      
      // Récupérer le premier <p> dans le <td>
      var p = td.querySelector('p');
      
      if (p) {
        // Afficher le contenu du <p>
        if(i==0){pre_team1[decentName(p.textContent)]=0}
		else{pre_team2[decentName(p.textContent)]=0}
      } else {
        console.log(`Pas de <p> dans le ${i + 1}er <td>`);
      }
    }
  }
});

}

function getBrutesNames(){
var spans = document.querySelectorAll('span');
var nbBrutes = 0
// Parcourir chaque élément <tr>
spans.forEach(spans => {
	var spanText = spans.textContent.split("Cellule de ");
	if(spanText.length>1){console.log("BRUTE : ",spanText[1]);
	nbBrutes++;
	if(nbBrutes>1){pre_team2[decentName(spanText[1])]=0}else{pre_team1[decentName(spanText[1])]=0}
	
	}
	
});

}




var team1 = {}
var team2 = {}
var names = []
	
var renforts = {}
var teams = [team1,team2,renforts]
var detailedDamage = {}

function addDetailed(roxeurEspace,arme,dmg){
	var roxeur = roxeurEspace.replace(" ","")
	if(!(roxeur in detailedDamage))detailedDamage[roxeur] = {}
	detailedDamage[roxeur][arme] = (detailedDamage[roxeur][arme] || 0) + dmg
	cl(detailedDamage)
}

function analyzeText(text){
	
	
	var chart = {}

	

	var currentTeam = team1
	var prec_line = ""
	var act_line = ""
	var last_failure = -1
	var line_nb = 0
	var lines=text.split("\n")
	for(var l of lines){
		
		prec_line = act_line
		act_line = l
		
		line_nb ++
		if(l=="" || l=="\r")continue;
	
		var brute = l.split(" est arrivé !")
		if(brute.length>1){
			var nom = decentName(brute[0])
			
			if(nom in pre_team1){currentTeam = team1}else if(nom in pre_team2){currentTeam = team2};
			currentTeam[nom] = 0;
		}
		else{currentTeam = renforts}
		
		
		
		var choc =  l.split(" a fait tomber ")
		if(choc.length>1){
			var roxeur = choc[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			//console.log("choc "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + 0.001
			continue
		}
		
		var choc =  l.split(" a brisé le bouclier")
		if(choc.length>1){
			var boubou = choc[0].split(" ");
			var roxeur = boubou[boubou.length-1];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			//console.log("choc "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + 0.001
			continue
		}
		
		var vol =  l.split(" a volé ")
		if(vol.length>1){
			var roxeur = vol[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			//console.log("choc "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + 0.001
			continue
		}
		
		var vamp =  l.split(" a sucé le sang ")
		if(vamp.length>1){
			var dmg=parseInt(vamp[1].split(" infligeant ")[1].split(" ")[0])
			var roxeur = vamp[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			//console.log("vamp "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + dmg;
			addDetailed(roxeur,"🩸",dmg)
			continue
		}
		
		var bomb =  l.split(" dégâts avec une bombe")
		if(bomb.length>1){
			var bomb = bomb[0].split(" a infligé ")
			var dmg=bomb[1].split(", ").reduce((acc, val) => acc + parseInt(val, 10), 0);
			var roxeur = bomb[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			//console.log("bomb "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + dmg
			addDetailed(roxeur,"💣",dmg)
			continue
		}
		
		var rox = l.split(" a infligé ")
		if(rox.length>1){
			var dmg=parseInt(rox[1].split(" ")[0])
			var roxeur = rox[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			//console.log("_ "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + dmg
			
			if(l.indexOf(" poison ")!=-1) addDetailed(roxeur,"🧪",dmg)
			else {
				var arme = l.split(" ")[l.split(" ").length - 1].split(".")[0].toLowerCase()
				if(arme in weaponImages)addDetailed(roxeur,arme,dmg)
				else{
					
					arme = prec_line.split(" a lancé ")
					if(arme.length>1){
						arme=arme[1].split(" sur ")[0].toLowerCase()
					}
					else arme = arme[0]
					
					if(last_failure == line_nb-1 && arme in weaponImages) addDetailed(roxeur,arme,dmg)
					
				else{
					addDetailed(roxeur,"👊",dmg)
				}
				}
			}
			
			continue
		}
		last_failure = line_nb
		if(/\d/.test(names.reduce((acc, name) => acc.replace(new RegExp(name.replace(" ",""), 'g'), ''), l))) console.log("SUS "+l)
	}
	for(var team_number in teams) {var team = teams[team_number];
		for(var j in team) team[j] = chart[j] || 0
		var sorted = Object.entries(team).sort(([, a], [, b]) => b-a).reduce((result, [key, value]) => {
  result[key] = value;
  return result;
}, {})
		
		teams[team_number] = []
		for(var i in sorted) {
			
			var choc = (Math.round((sorted[i]-parseInt(sorted[i])) * 1000)==0)?"":"  ("+Math.round((sorted[i]-parseInt(sorted[i])) * 1000)+" choc)";
			choc=choc.replace("(1 choc)","     💥").replace("(2 choc)","  💥💥").replace("(3 choc)","💥💥💥").replace(" choc)","</b>💥").replace("(","  <b>")
			teams[team_number].push(
			[i.replace(" ",""),parseInt(sorted[i]),choc
	])}
		console.log("")
		}
	}
	
if(FIGHT_TYPE == "war") getClanNames();
else{getBrutesNames();}
// Récupérer l'élément avec l'attribut aria-label="Afficher/masquer les logs"
var element = document.querySelector('[aria-label="Afficher/masquer les logs"]');

// Vérifier si l'élément existe, puis simuler un clic
if (element) {
  element.click();setTimeout(function(){element.click();},200)
} else {
  console.log("LOGS non trouvés");
}