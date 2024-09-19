var fightLog = ""


// Créer un observer qui surveille les changements dans le DOM
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    // Parcourir les nouveaux nœuds ajoutés
    mutation.addedNodes.forEach(node => {
      // Vérifier si le nœud est une div
      if (node.nodeName === 'DIV') {
        // Vérifier si la div contient des balises <p>
        const pElements = node.querySelectorAll('p');
        
        if (fightLog=="") {
          // Loguer le contenu de chaque balise <p>
          pElements.forEach(p => {
            //console.log('Contenu de la balise <p>:', p.innerText);
			fightLog += p.innerText+"\n"
          });
          
          // Rendre la div invisible
          node.style.display = 'none';
		  
		  analyzeText(fightLog);
		  
		  var allDIV = div({0:body,17="HAHAHAHA\nHHEHHDEHF",9:uni([textBoxCSS,baseCSS])});
			insertDivAfterElement(allDIV,findFirstParentDiv(findTextInDOM("Cellule de ","p")));

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
const rows = document.querySelectorAll('tr');

// Parcourir chaque élément <tr>
rows.forEach(row => {
  // Récupérer les deux premiers <td> du <tr>
  const tds = row.querySelectorAll('td');

  if (tds.length >= 2) {
    // Pour chacun des deux premiers <td>
    for (let i = 0; i < 2; i++) {
      const td = tds[i];
      
      // Récupérer le premier <p> dans le <td>
      const p = td.querySelector('p');
      
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
const spans = document.querySelectorAll('span');
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
	

function analyzeText(text){
	
	
	var chart = {}

	

	var currentTeam = team1
	
	var lines=text.split("\n")
	for(var l of lines){if(l=="" || l=="\r")continue;
	
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
			chart[roxeur] = (chart[roxeur] || 0) + dmg
			continue
		}
		
		var bomb =  l.split(" dégâts avec une bombe")
		if(bomb.length>1){
			var bomb = bomb[0].split(" a infligé ")
			var dmg=bomb[1].split(", ").reduce((acc, val) => acc + parseInt(val, 10), 0);
			var roxeur = bomb[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			//console.log("bomb "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + dmg
			continue
		}
		
		var rox = l.split(" a infligé ")
		if(rox.length>1){
			var dmg=parseInt(rox[1].split(" ")[0])
			var roxeur = rox[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			//console.log("_ "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + dmg
			continue
		}
		if(/\d/.test(names.reduce((acc, name) => acc.replace(new RegExp(name.replace(" ",""), 'g'), ''), l))) console.log("SUS "+l)
	}
	for(var team of teams) {
		for(var j in team) team[j] = chart[j] || 0
		var sorted = Object.entries(team).sort(([, a], [, b]) => b-a).reduce((result, [key, value]) => {
  result[key] = value;
  return result;
}, {})
		
		teams[team] = []
		for(var i in sorted) {
			teams[team].push(
			[i.replace(" ",""),parseInt(sorted[i]),
	(Math.round((sorted[i]-parseInt(sorted[i])) * 1000)==0)?"":"  ("+Math.round((sorted[i]-parseInt(sorted[i])) * 1000)+" choc)"])}
		console.log("")
		}
	}
	
if(FIGHT_TYPE == "war") getClanNames();
else{getBrutesNames();}
// Récupérer l'élément avec l'attribut aria-label="Afficher/masquer les logs"
const element = document.querySelector('[aria-label="Afficher/masquer les logs"]');

// Vérifier si l'élément existe, puis simuler un clic
if (element) {
  element.click();setTimeout(function(){element.click();},200)
} else {
  console.log("LOGS non trouvés");
}