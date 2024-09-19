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
            console.log('Contenu de la balise <p>:', p.innerText);
			fightLog += p.innerText+"\n"
          });
          
          // Rendre la div invisible
          node.style.display = 'none';
		  
		  analyzeText(fightLog);
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


// Récupérer l'élément avec l'attribut aria-label="Afficher/masquer les logs"
const element = document.querySelector('[aria-label="Afficher/masquer les logs"]');

// Vérifier si l'élément existe, puis simuler un clic
if (element) {
  element.click();setTimeout(function(){element.click();},200)
} else {
  console.log("LOGS non trouvés");
}


function analyzeText(text){
	
	var names_with_num = ["Armiv1","Armiv2","MGE-2Gaul"]
	
	var chart = {}
	var t1 = {}
	var t2 = {}
	
	var lines=text.split("\n")
	for(var l of lines){
		
		var brute = l.split(" est arrivé !")
		if(brute.length>1){
			var nom = brute[0]
			if(parseInt(nom).toString() == nom) nom = " "+nom;
			((Object.keys(t1).length<7)?t1:t2)[nom] = 0
		}
		
		
		
		var choc =  l.split(" a fait tomber ")
		if(choc.length>1){
			var roxeur = choc[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
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
			console.log("vamp "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + dmg
			continue
		}
		
		var bomb =  l.split(" dégâts avec une bombe")
		if(bomb.length>1){
			var bomb = bomb[0].split(" a infligé ")
			var dmg=bomb[1].split(", ").reduce((acc, val) => acc + parseInt(val, 10), 0);
			var roxeur = bomb[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			console.log("bomb "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + dmg
			continue
		}
		
		var rox = l.split(" a infligé ")
		if(rox.length>1){
			var dmg=parseInt(rox[1].split(" ")[0])
			var roxeur = rox[0];if(parseInt(roxeur).toString() == roxeur) roxeur = " "+roxeur;
			console.log("_ "+dmg)
			chart[roxeur] = (chart[roxeur] || 0) + dmg
			continue
		}
		if(/\d/.test(names_with_num.reduce((acc, name) => acc.replace(new RegExp(name, 'g'), ''), l))) console.log("SUS "+l)
	}
	
	for(var i of [t1,t2]) {
		for(var j in i) i[j] = chart[j] || 0
		var sorted = Object.entries(i).sort(([, a], [, b]) => b-a).reduce((result, [key, value]) => {
  result[key] = value;
  return result;
}, {})
		for(var i in sorted) console.log(i,parseInt(sorted[i]),
		(Math.round((sorted[i]-parseInt(sorted[i])) * 1000)==0)?"":"  ("+Math.round((sorted[i]-parseInt(sorted[i])) * 1000)+" choc)")
		console.log("")
		}
	}