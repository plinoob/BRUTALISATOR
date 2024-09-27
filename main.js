
var MASTERS = ["heheheha","Tenebre-Obscure","Armiv1","Larron","MGE-spiritBLACK","Poubellas","MGE-Bof"]

function rien(){}

//chroma
// Fonction utilitaire pour l'interpolation entre deux valeurs numériques
function interpolate(start, end, factor) {
	var sqrtStart = start*start
	var sqrtEnd = end*end
	
    var res= sqrtStart + (sqrtEnd - sqrtStart)*factor; 
	//cl(start,end,factor,res*res)
	return Math.sqrt(res)
	}
var palette = setupColorInterpolation([
    [0, '#D32F2F'], // Rouge
    [0.25, '#ED6C02'], // Orange
    [0.66, '#733D2C'], // Vert
    [1, '#595FD1']  // Bleu
]);
var beforePalette = setupColorInterpolation([
    [0, '#B51111'], // Rouge
    [0.25, '#CF4E00'], // Orange
    [0.66, '#4E180B'], // Vert
    [1, '#2F336D']  // Bleu
]);
// Fonction pour convertir une couleur hexadécimale en composantes RGB
function hexToRgb(hex) {
    var bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// Fonction pour convertir les composantes RGB en couleur hexadécimale
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Fonction principale pour interpoler une couleur entre deux points
function interpolateColor(startColor, endColor, factor) {
    var startRgb = hexToRgb(startColor);
    var endRgb = hexToRgb(endColor);

    var r = Math.round(interpolate(startRgb[0], endRgb[0], factor));
    var g = Math.round(interpolate(startRgb[1], endRgb[1], factor));
    var b = Math.round(interpolate(startRgb[2], endRgb[2], factor));

    return rgbToHex(r, g, b);
}

// Fonction pour configurer l'interpolation avec n couleurs et points
function setupColorInterpolation(colors) {
    return function(coef) {
        // Trouver les deux points les plus proches
        for (let i = 1; i < colors.length; i++) {
            if (coef <= colors[i][0]) {
                // Interpolation entre colors[i - 1] et colors[i]
                var factor = (coef - colors[i - 1][0]) / (colors[i][0] - colors[i - 1][0]);
                return interpolateColor(colors[i - 1][1], colors[i][1], factor);
            }
        }
        return colors[colors.length - 1][1]; // Si coef est 1, retourner la dernière couleur
    };
}




//-----------------------------sort

var initialSort = Array.prototype.sort
function redefineSort(){
Array.prototype.sort = function(compareFn) {
    // Si aucune fonction de comparaison n'est fournie, utiliser une fonction par défaut
    compareFn = compareFn || function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };

    // Merge Sort
    var mergeSort = (array) => {
        if (array.length <= 1) {
            return array;
        }

        // Diviser le tableau en deux moitiés
        var mid = Math.floor(array.length / 2);
        var left = mergeSort(array.slice(0, mid));
        var right = mergeSort(array.slice(mid));

        // Fusionner les deux moitiés triées
        return merge(left, right, compareFn);
    };

    // Fonction pour fusionner deux tableaux triés
    var merge = (left, right, compareFn) => {
        let result = [];
        let i = 0, j = 0;

        // Comparer les éléments des deux moitiés et les fusionner dans le bon ordre
        while (i < left.length && j < right.length) {
            if (compareFn(left[i], right[j]) <= 0) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        // Ajouter les éléments restants
        return result.concat(left.slice(i)).concat(right.slice(j));
    };

    // Retourner le tableau trié
    var sortedArray = mergeSort(this);

    // Remplacer les éléments du tableau d'origine
    for (let i = 0; i < this.length; i++) {
        this[i] = sortedArray[i];
    }

    return this;
};}

//----------------------------FIGHT


var heheheha = {"id":"d34f1d14-6d7b-4d87-abd2-614947732ba6","name":"heheheha","deletedAt":null,"createdAt":"2024-05-22T21:19:56.004Z","willBeDeletedAt":null,"deletionReason":null,"destinyPath":["RIGHT","LEFT","LEFT","RIGHT","LEFT"],"previousDestinyPath":["RIGHT","LEFT","LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","LEFT","RIGHT","RIGHT"],"level":6,"xp":3,"hp":83,"enduranceStat":4,"enduranceModifier":1,"enduranceValue":4,"strengthStat":5,"strengthModifier":1,"strengthValue":5,"agilityStat":5,"agilityModifier":1.5,"agilityValue":7,"speedStat":6,"speedModifier":1,"speedValue":6,"ranking":9,"gender":"female","userId":"565e2141-9982-406d-81ba-9aafdd219dc4","body":"10001210601","colors":"00000003030303031301020204020312","weapons":["piopio"],"skills":["fistsOfFury","felineAgility"],"pets":[],"masterId":null,"pupilsCount":6,"clanId":null,"registeredForTournament":false,"nextTournamentDate":null,"currentTournamentDate":"2024-09-24T00:00:00.000Z","currentTournamentStepWatched":0,"globalTournamentWatchedDate":"2024-09-23T00:00:00.000Z","globalTournamentRoundWatched":999,"lastFight":"2024-09-24T00:00:00.000Z","fightsLeft":7,"victories":468,"opponentsGeneratedAt":"2024-09-24T00:00:00.000Z","canRankUpSince":null,"favorite":false,"wantToJoinClanId":null,"tournamentWins":0,"eventId":null,"resets":2,"master":null,"clan":null,"user":{"id":"565e2141-9982-406d-81ba-9aafdd219dc4","name":"Ambryal"},"tournaments":[{"id":"9fc44ffc-bee2-486b-84bf-613e199a03a1","date":"2024-09-24T00:00:00.000Z","type":"DAILY","rounds":6,"eventId":null}],"inventory":[{"type":"bossTicket","count":1}]}



async function genBrute({
	level,
	name=false,
	random
}){
	var template=heheheha
	if(!LOCAL && BRUTE){template = await getBrute(BRUTE)}
	
	name=name?name:(LOCAL?generateName():"_")
		
	var brute = createRandomBruteStats()
	
	brute.name=name
	brute.userId=brute.name
	brute.id=brute.name
	
	for(var chr in template){if(!(chr in brute)){brute[chr] = template[chr]}}
	
	var rnd=Math.random

	if(random){turnRandomToCHAOS(name);}
	
	brute.gender = getRandomProperty(Gender)
	brute.colors=getRandomColors(brute.gender)
	brute.body = getRandomBody(brute.gender)
	
	Math.random = rnd
	
	for(var i=1;i<level;i++){brute=levelUp(brute,random);}
	
	if(random){
	brute.weapons = shuffle(weapons.reduce((acc, obj) => {acc.push(obj.name);return acc;}, [])).slice(0,brute.weapons.length)
	for(var i of brute.pets){var pet = pets.find((p) => p.name === i);brute.enduranceStat+=pet.enduranceMalus;
	brute.enduranceValue = Math.floor(brute.enduranceStat * brute.enduranceModifier);}
	brute.pets = shuffle(pets.reduce((acc, obj) => {acc.push(obj.name);if(obj.name.startsWith("dog1")){acc.push(obj.name)};return acc;}, [])).slice(0,brute.pets.length)
	var boosters = skills.reduce((acc, obj) => {if(obj.type=="booster"){acc.push(obj.name)};return acc;}, [])
	var keepBoosters = brute.skills.reduce((acc, obj) => {if(boosters.includes(obj)){acc.push(obj)};return acc;}, [])
	var not_boosters = skills.reduce((acc, obj) => {if(obj.type!="booster"){acc.push(obj.name)};return acc;}, [])
	var not_boosterCount = brute.skills.reduce((acc, obj) => {if(not_boosters.includes(obj)){acc++};return acc;}, 0)
	not_boosters.splice(not_boosters.indexOf("spy"), 1)
	if(Math.random()*2>1){not_boosters.splice(not_boosters.indexOf("flashflood"), 1)};
    if(Math.random()*5>1){not_boosters.splice(not_boosters.indexOf("monk"), 1)};
    if(Math.random()*8>1){not_boosters.splice(not_boosters.indexOf("hideaway"), 1)};
	if(Math.random()*8>1){not_boosters.splice(not_boosters.indexOf("chef"), 1)};
	brute.skills = keepBoosters.concat(shuffle(not_boosters).slice(0,not_boosterCount))
	
	}
	return brute;
	
	
	var noms = objets


}


function levelUp(brute,random){
	var choices = getLevelUpChoices(brute)
	if(random && choices[0].type == "skill")	{
		var force='herculeanStrength'
		var boosters = skills.reduce((acc, obj) => {if(obj.type=="booster"){if(obj.name!="immortality" && obj.name!="reconnaissance"){acc.push(obj.name)}};return acc;}, [])
		if(boosters.includes(choices[0].skill)){
			if(choices[0].skill!=force && !brute.skills.includes(force) && Math.random()*3<1){choices[0].skill=force}
	}
	}
	var chosed = 0
	if(choices[0].type == "stats"){if(brute[choices[0].stat1+"Modifier"]>1){chosed = 0}else{chosed = 1}}
	var newbrute = updateBruteData(structuredClone(brute),choices[chosed])
	return newbrute
	
}


function combatIsOk(){var name1=brutes[0];var name2=brutes[1];if(name1.indexOf("@")!=-1){name1=name1.split("@")[1]};if(name2.indexOf("@")!=-1){name2=name2.split("@")[1]};
return isNameValid(name1) && isNameValid(name2) && brutes[0]!=brutes[1]}

	var combat_lancer = false

var defiDIV
var initialURL=""
var initialVERSUS=""
var versusGetsList=[]
if(typeof(window)!="undefined"){
initialURL = window.location.href
initialVERSUS = window.location.href.split("?")[0]

versusGetsList = window.location.href.split("?")

}
versusGetsList = versusGetsList[1]?versusGetsList[1].split("&"):[]

var versusGets = {};for(var v of versusGetsList){var agr = v.split("=");if(agr.length>1){versusGets[agr[0]]=agr[1]}}
var seed = versusGets.seed?versusGets.seed:0
var brutes = [(versusGets.b1)?versusGets.b1:"",(versusGets.b2)?versusGets.b2:""]
cl("BRUTES : ",brutes)
var bruteInputs = []
var bruteDIVS = []
var backups=[]


async function launchFight(){		
		if(combat_lancer) return
		if(!combatIsOk()) return
		combat_lancer = true
	stopLoading()
	brutes.sort()
	for(var i=0;i<2;i++){
if(brutes[i].indexOf("@")==-1){var brutename=brutes[i];turnRandomToCHAOS(seed,brutename)
	backups[i] = [await genBrute({level:randomLevel(17,6),name:brutename+"$",random:true})];
	brutes[i] = await genBrute({level:randomLevel(56,5),name:brutename,random:true});
	turnRandomToCHAOS(seed,brutes)
	if(Math.random()>0.5){backups[i]=[]}
	turnCHAOSToRandom();
	}
else{var brutename=brutes[i];brutes[i]=await getBrute(brutename.split("@")[1])}
	} 
			simulFights({
				fn:rien,
				rota1:[[brutes[0]]],
				rota2:[[brutes[1]]],//number = boss
				backups:{[brutes[0].userId]:backups[0],[brutes[1].userId]:backups[1]},
				fight_per_rota:1,
				fight_total:1,
				return_first_win:false,//undefined : nothing, true : first win, false : first fight
				seed:[brutes[0].name,brutes[1].name,seed],
				})}

function gaussianRandom() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Évite 0 pour `u`
    while (v === 0) v = Math.random(); // Évite 0 pour `v`
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}
// Exemple : générer un nombre gaussien avec une moyenne et un écart-type spécifique
function gaussianRandomWithMeanAndStd(mean, stdDev) {
    return mean + gaussianRandom() * stdDev;
}

function randomLevel(mean=33,std=3){return parseInt(Math.max(0,gaussianRandomWithMeanAndStd(mean,std)))}

//-----------------------------------------------------------------------------------------------------------------

var d32 = Math.pow(2,32)-1
function isara(a){return(Array.isArray(a))};
function int(a){return parseInt(a)}
var U = undefined

var Chaos
//Random generator
if(!Chaos){Chaos=class {
  constructor(...a){//Arguments : Anything            (INT FLOAT STRING et ARRAYS impacteront ; Objects impacteront en fonction de leur classe)
                    //L'objet vole 10 fois au départ... si non voulu : new Chaos().seed(_,_,_,_)
    var c=Chaos
	var l=Chaos.toSeed(a)
	while(l.length<4){l.push(0)}
	this.Seed=[l.shift(),l.shift(),l.shift(),l.shift()]
	this.flap(10)
	this.storm(l)
	this.flap(10)
	
  }
  
  static toSeed(...a){//Arguments : Anything            ->              [INT...]
  var l=[]
  for(var i of a){var p=typeof(i);if(p==="number"){if(Number.isInteger(i)){l.push(this.int(i))}else{i=i.toString().split(".");l.push(this.int(i[0]));l.push(this.int(i[1]))}}
  else if(p==="string"){for(var j=0;j<i.length;j++){l.push(this.int(i.charCodeAt(j)))};if(i.length===0){l.push(this.int(666))}}
  else if(isara(i)){l.push(...this.toSeed(...i))}
  else{l.push(...this.toSeed(p,(i!=null && i.constructor!=null && i.constructor.name)?i.constructor.name:0))}}
  if(l.length===0){l.push(this.int(333))}
  return l
  }
  static g=d32//2**32 -1
  static int(a){var b=int(a)%this.g;return b===0?this.g:b}//Int -> Int 1 - 2**32-1
  static trueSeed(){return this.int(Math.random() * this.g)}//crée une vraie seed
  static trueChaos(){return new Chaos(Chaos.trueSeed(),Chaos.trueSeed(),Chaos.trueSeed(),Chaos.trueSeed())}//crée un vrai chaos
    
  //seed([]/...)   change les seeds -> this
  seed(a){if(isara(a)){return this.seed(...a)}else{for(var i=0;i<arguments.length;i++){if(arguments[i]!==U){this.Seed[i]=Chaos.toSeed(arguments[i])[0]}}};return this}
  
  //secoue avec Anything arguments -> this
  storm(...a){var l=Chaos.toSeed(a);for(var i=0;i<l.length;i+=4){this.seed(this.Seed[0]+(l[i]?l[i]:0),this.Seed[1]+(l[i+1]?l[i+1]:0),this.Seed[2]+(l[i+2]?l[i+2]:0),this.Seed[3]+(l[i+3]?l[i+3]:0));this.flap(3)}
  return this}

  flap(a=1){//next(0+) -> this
	  for(var i=0;i<a;i++){
	  // uint64_t s1 = s[0]
	  var s1U = this.Seed[0], s1L = this.Seed[1];
	  // uint64_t s0 = s[1]
	  var s0U = this.Seed[2], s0L = this.Seed[3];

	  // result = s0 + s1
	  var sumL = (s0L >>> 0) + (s1L >>> 0);
	  var resU = (s0U + s1U + (sumL / 2 >>> 31)) >>> 0;
	  var resL = sumL >>> 0;

	  // s[0] = s0
	  this.Seed[0] = s0U;
	  this.Seed[1] = s0L;

	  // - t1 = [0, 0]
	  var t1U = 0, t1L = 0;
	  // - t2 = [0, 0]
	  var t2U = 0, t2L = 0;

	  // s1 ^= s1 << 23;
	  // :: t1 = s1 << 23
	  var a1 = 23;
	  var m1 = 0xFFFFFFFF << (32 - a1);
	  t1U = (s1U << a1) | ((s1L & m1) >>> (32 - a1));
	  t1L = s1L << a1;
	  // :: s1 = s1 ^ t1
	  s1U = s1U ^ t1U;
	  s1L = s1L ^ t1L;

	  // t1 = ( s1 ^ s0 ^ ( s1 >> 17 ) ^ ( s0 >> 26 ) )
	  // :: t1 = s1 ^ s0
	  t1U = s1U ^ s0U;
	  t1L = s1L ^ s0L;
	  // :: t2 = s1 >> 18
	  var a2 = 18;
	  var m2 = 0xFFFFFFFF >>> (32 - a2);
	  t2U = s1U >>> a2;
	  t2L = (s1L >>> a2) | ((s1U & m2) << (32 - a2));
	  // :: t1 = t1 ^ t2
	  t1U = t1U ^ t2U;
	  t1L = t1L ^ t2L;
	  // :: t2 = s0 >> 5
	  var a3 = 5;
	  var m3 = 0xFFFFFFFF >>> (32 - a3);
	  t2U = s0U >>> a3;
	  t2L = (s0L >>> a3) | ((s0U & m3) << (32 - a3));
	  // :: t1 = t1 ^ t2
	  t1U = t1U ^ t2U;
	  t1L = t1L ^ t2L;

	  // s[1] = t1
	  this.Seed[2] = t1U;
	  this.Seed[3] = t1L;}
	  
	  if(a>0){this.r=resU * 2.3283064365386963e-10 + (resL >>> 12) * 2.220446049250313e-16;};return this
	};
  
  //ran()->0,1           ran(10)->0,10            ran(5,8)->5,8              ran(5,8,3)->liste
  ran(a=1,b,c){if(arguments.length<2){return(this.ran(0,a))}else if(c!==U){var l=[];for(var i=0;i<c;i++){l.push(this.ran(a,b))};return l};return Math.floor(this.flap().r*(b-a+1)+a)}
  
  //fan()->0-1           fan(10)->0-10            fan(5,8)->5-8              fan(5,8,3)->liste
  fan(a=1,b,c){if(arguments.length<2){return(this.fan(0,a))}else if(c!==U){var l=[];for(var i=0;i<c;i++){l.push(this.fan(a,b))};return l};  return this.flap().r*(b-a)+a}
  
  //chaine de n lettres prises dans s
  string(s,n){var l=this.ran(0,s.length-1,n),r="";for(var i=0;i<n;i++){r+=s.charAt(l[i])};return r}
  
  //id à n lettres
  id(a=8){return this.string(lettres+LETTRES,a)}
  
  random(){return this.fan(0,1)}
  
}

}
var initialRandom
if(!initialRandom){initialRandom=Math.random}
function turnRandomToCHAOS(...args){
	redefineSort()
	var chaobject=new Chaos(...args)
	Math.random = chaobject.random.bind(chaobject)
}

function turnCHAOSToRandom(){Array.prototype.sort=initialSort;Math.random=initialRandom}

if(false){turnRandomToCHAOS()}


var nfps=60;var dicfps={};var dirfps=[];function fps(a){var f=dirfps.length;var t=function(){if(!(a in dicfps)){dicfps[a]=false;a(...arguments);setTimeout(function(){var b=dicfps[a];delk(dicfps,a);if(typeof(b)==typeof([])){dirfps[f](...b)}},nfps)}else{dicfps[a]=arguments;};};dirfps.push(t);return(t)};
function delk(a,b){if(typeof(a)==typeof([]) && (!Array.isArray(a))){var c=a;a=b;b=c};var c=b[a];delete b[a];return(c)}


var body
if(typeof(document)!="undefined"){
	
	!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
	body=$("body")
	}



function cl(a){if(arguments.length!=1) a=[...arguments];console.log(a)}
var fediv={
3:function(a,b,c){c.addClass(a[b])},
4:function(a,b,c){if(a[b]===0){a[b]=[0,0,0,0]}else if(a[b]===1){a[b]=[50,"","",50]}else if(a[b]===2){a[b]=["","","",""]};for(var i in a[b]){if(typeof(a[b][i])==typeof(1)){a[b][i]=a[b][i]+"%"}};c.css({"position":"absolute","top":a[b][0],"right":a[b][1],"bottom":a[b][2],"left":a[b][3]})},
5:function(a,b,c){if(a[b]===0){a[b]=[-50,-50]};for(var i in a[b]){if(typeof(a[b][i])==typeof(1)){a[b][i]=a[b][i]+"%"}};c.css("transform","translate("+a[b][0]+","+a[b][1]+")")},
50:function(a,b,c){c.css("text-align","center")},
13:function(a,b,c){c.css("z-index",a[b])},
12:function(a,b,c){if(a[b]===0){a[b]=["100%","100%"]};c.css({"width":a[b][0],"height":a[b][1]})},
10:function(a,b,c){c.css("background-color",a[b])},
16:function(a,b,c){if(a[b]===0){a[b]=police};c.css("font-family",a[b])},
15:function(a,b,c){if(a[b]===0){a[b]="pointer"};c.css("cursor",a[b])},
18:function(a,b,c){c.css("opacity",a[b])},
19:function(a,b,c){c.css("border-radius",a[b])},
24:function(a,b,c){c.css("font-size",a[b])},
20:function(a,b,c){c.attr("title",a[b])},
21:function(a,b,c){c.attr("placeholder",a[b])},
22:function(a,b,c){c.attr("src",a[b])},
23:function(a,b,c){c.css("color",a[b])},
26:function(a,b,c){if(a[b]===0){a[b]="nowrap"}else if(a[b]===1){a[b]="pre"};c.css("white-space",a[b])},
27:function(a,b,c){c.attr("type",a[b])},
28:function(a,b,c){for(var i in a[b]){c.attr("data-"+i,a[b][i])}},
33:function(a,b,c){if(typeof(a[b])==="string"){c[0].style.filter=a[b]}else{csi(c,33,a[b])}},
37:function(a,b,c){c.attr("oncontextmenu","return false");return;if(!clidroi){clidroi=true;$(document).on("mousedown",function(e){if(e.which===3 && e.pageX===0){dov({13:d32-3,6:{"mouseup mousedown mousemove":function(){var a=$(this);setTimeout(function(){a.remove()},16)}}})}})}},
42:function(a,b,c){c[0].style.position="absolute";if(Array.isArray(a[b])){anim(c,...a[b])}else if(a[b]!==0){anim(c,a[b],0)}},
44:function(a,b,c){c.attr("font-weight","bold")},
66:function(a,b,c){if(a[b]===0){a[b]="auto"}else if(a[b]===1){a[b]="hidden"}else if(a[b]===2){a[b]="visible"};c.css("overflow",a[b])},
70:function(a,b,c){c.css("maskImage",typeof(a[b])=="object"?gra(a[b]):a[b])},
71:function(a,b,c){if(a[b]===0){a[b]="100%"};c.css("line-height",a[b])},
79:function(a,b,c){if(typeof(a[b])==="number"){vado(c,a[b],0);}else{a[b][1]=c;vado(...a[b])}},
82:function(a,b,c){c.css("background",typeof(a[b])=="object"?gra(a[b]):a[b])},
8:function(a,b,c){c.attr(a[b])},
9:function(a,b,c){c.css(a[b])},
6:function(a,b,c){for(var i in a[b]){c.on(i,a[b][i])};},
7:function(a,b,c){if(a[b].length==1){c.hover(a[b][0])}else{c.hover(a[b][0],a[b][1])}},
99:function(a,b,c){if(a[b]===0){a[b]=[0]};for(var i in a[b]){if(i%2==0){c.fadeOut(a[b][i])}else{c.fadeIn(a[b][i])}};},
73:function(a,b,c){if(typeof(a[b])==typeof("")){if(vexist(typeof(ima_exist)) && (a[b] in ima)){a[b]={0:a[b]}}
else{a[b]=[a[b],"",[1,1,1],[0,0],[]]}};if(Array.isArray(a[b])){if(!isara(a[b][a[b].length-1])){fon(c,...a[b])}else{a[b].push(c);fonde(a[b])}}else{fon(c,a[b])}}
}

function dov(a=body,b={}){if(b===0){b={}};if(arguments.length===1){b=a;a=body};return(div(uni([{0:a,4:0},b])))}
function div(a){var fiv={0:body,1:"nvl_mc",2:"div",17:""};
for(var i in fiv){if(i in a){fiv[i]=a[i]}}
if(typeof(fiv[0])==typeof("1")){fiv[0]=$("#"+fiv[0])}
var f="";if(["input","img"].indexOf(fiv[2])==-1){f="</"+fiv[2]+">"}
fiv[0].append("<"+fiv[2]+" id='"+fiv[1]+"'>"+fiv[17]+f);
var b=$("#"+fiv[1]);if(fiv[1]==="nvl_mc"){b.removeAttr("id")};
for(var i in fediv){if(i in a){fediv[i](a,i,b)}};
return(b)}
function uni(a){var l={};for(var i in a){for(var j in a[i]){l[j]=a[i][j]}};return(l)}

function addScript( src ,src2) {
	cl("addscript",src);
	fetch(src)
	  .then(response => response.text())
	  .then(src2?function(html){
		  fetch(src2)
	  .then(response => response.text())
	  .then(function(html2){var s = document.createElement( 'script' );
		  s.setAttribute('text',"text/javascript");
		  s.setAttribute('type',"module");
		  s.textContent=html+html2;
		  document.body.appendChild( s );})
		  
		  
		  
	  }:(html => {
	  
		  var s = document.createElement( 'script' );
		  s.setAttribute('text',"text/javascript");
		  s.setAttribute('type',"module");
		  s.textContent=html;
		  document.body.appendChild( s );
	  
	  }))

	}
	
function openBruteCell(name){openNewTab(window.location.href.split(".org")[0]+".org/"+name+"/cell")}
function openNewTab(url) {
    // Vérifier si l'URL est définie
    if (url) {
        // Ouvrir un nouvel onglet avec l'URL spécifiée
        window.open(url, '_blank');
    } else {
        console.error('URL non spécifiée');
    }
}
function isTextInDOM(text,balise) {
  // Récupérer tous les éléments de la page
  var elements = document.querySelectorAll(balise);
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

function findTextInDOM(text,balise) {
  // Récupérer tous les éléments de la page
  var elements = document.querySelectorAll(balise);
  var elem
  // Parcourir tous les éléments et vérifier leur texte
  elements.forEach(element => {
    if (element.textContent.includes(text)) {
      console.log('Élément trouvé :', element.textContent);
	  elem = element
    }
  });
  return elem;
}

/*
simulFights({
	fn,
	rota1,
	rota2,//number = boss
	backups,
	fight_per_rota,
	fight_total,
	return_first_win//undefined : nothing, true : first win, false : first fight
	})
*/


var setInt
var fightWorker
	clearInterval(setInt);
	var urrl

if(typeof(window)!="undefined"){	urrl= window.location.href;
	setInt = setInterval(function(){if(fightWorker)fightWorker.postMessage(5);
	if(window.location.href!=urrl){urrl=window.location.href;	stopLoading();
	if(fightWorker)fightWorker.terminate()
		$("#mynetwork").remove()}
},333)}

var GENERATE_FIGHT
var generateFights

async function simulFights(arg){
	cl("SIMULFIGHTS",JSON.stringify(arg))
	if(!GENERATE_FIGHT){if(LOCAL){GENERATE_FIGHT = generateFights}else{cl("DL generateFight...");GENERATE_FIGHT = await fetch(BRUTALISATOR+"generateFights.js");
	GENERATE_FIGHT = await GENERATE_FIGHT.text();
	}}
	

	
	generateFights = GENERATE_FIGHT
	
	arg.generateFights = generateFights;simulFights_no_fetch(arg);
}


async function simulFights_no_fetch({generateFights,fn,rota1,rota2//number = boss
,backups,fight_per_rota,fight_total,return_first_win,loading=true,modifiers,seed}){

	if(fightWorker)fightWorker.terminate()
	if(typeof(rota2)=="number"){generateFights = generateFights.replace('var BOSS'+' = "brutes"','bosses['+rota2+'].startHP=100000;var BOSS = "bosses"'+";")
		generateFights = generateFights.replace("var TEAM2 ="+" []","var TEAM2 = [[bosses["+rota2+"]]];")
	}
	else{
		generateFights = generateFights.replace("var TEAM2 ="+" []","var TEAM2 = "+JSON.stringify(rota2)+";")

	}
	if(modifiers){generateFights = generateFights.replace("modifier"+"s: [],","modifiers: "+JSON.stringify(modifiers)+",")}
	generateFights = generateFights.replace("var TEAM1 ="+" []","var TEAM1 = "+JSON.stringify(rota1)+";")

	if(rota1[0].length+(rota2[0]?rota2[0].length:1)>2){generateFights = generateFights.replace('var CLANWAR'+' = false','var CLANWAR = true'+";")}
	if(backups){generateFights = generateFights.replace('var BACKUPS'+' = false','var BACKUPS = '+JSON.stringify(backups)+";")}
	if(return_first_win===true){generateFights = generateFights.replace('var RETURN_FIR'+'ST_WIN;','var RETURN_FIRST_WIN = true'+";")}
	if(return_first_win===false){generateFights = generateFights.replace('var RETURN_FIR'+'ST_WIN;','var RETURN_FIRST_WIN = false'+";")}
	
	generateFights = generateFights.replace("var FIGHTS_PER_ROTA"+" = 1","var FIGHTS_PER_ROTA = "+fight_per_rota+";")
	generateFights = generateFights.replace("var FIGHT_TOTAL"+" = 1","var FIGHT_TOTAL = "+fight_total+";")
	if(seed!==U){		generateFights = generateFights.replace("if(false){tur"+"nRandomToCHAOS()}","if(true){turnRandomToCHAOS("+JSON.stringify(seed)+")}")
}	

	var workerScript = 'var BRANCHE = "'+BRANCHE+'";'+generateFights

	// Créer un Blob contenant le script du worker
	var blob = new Blob([workerScript], { type: 'application/javascript' });

	// Créer une URL pour le Blob
	var workerUrl = URL.createObjectURL(blob);

	// Créer le worker à partir de l'URL du Blob
	fightWorker = new Worker(workerUrl);
	fightWorker.onmessage=function(e){if(e.data.firstwin){visualizeFight(e.data.firstwin);
	e.data.ended=true};if(e.data.ended){stopLoading();fightWorker.terminate()};fn(e.data.bilan,e.data.ended);}

	if(loading)startLoading();
	

	
	  }
	  
function setImageSrc(prevSrc,newSrc){
	$("img[src$='"+prevSrc+"']").attr("src",newSrc)
	
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var url
function parseURL(){
url=window.location.href.split("?")[0].split("/")
url.shift()
url.shift()
if(url[url.length-1] == ""){url.pop();}

if(url.length>2 && url[2] == "fight"){FIGHT_TYPE = "fight"}
if(url.length>6 && url[4] == "war" && url[6] == "fight"){FIGHT_TYPE = "war"}
}
var FIGHT_TYPE


var BRUTE
var CLAN

var MODIFIERS
var arenaRunning
var arenaBruteAc

var arenaInt
clearInterval(arenaInt);
if(typeof(window)!="undefined"){
	arenaInt = setInterval(function(){parseURL();
if(url.length==3 && url[2]=="arena"){BRUTE = url[1];if(!arenaRunning && arenaBruteAc==BRUTE){arena()}}else{arenaRunning=false}
},166)
}
async function arena(backups){arenaRunning=true
arenaBruteAc = BRUTE


	
	function makeInfoDiv(name){
		var res={div:div({9:{position:"relative",height:"30px"}})}
		
		
		
		
		var btn=div({0:res.div,4:1,5:[-50,-60],20:"Visiter la cellule",6:{click:function(){openBruteCell(name)}},2:"button",9:{
display: "block",
    margin: "8px auto",
    "border-radius": "4px",
    "border-width": "1px",
    "border-style": "solid",
    "border-image": "initial",
    "border-color": "rgb(55, 1, 0) rgb(115, 61, 44) rgb(115, 61, 44)",
    "background-color": "rgb(115, 61, 44)",
    color: "rgb(255, 255, 255)",
    padding: "4px 8px",
    cursor: "pointer",
    "text-transform": "uppercase",
    "font-family": "LaBrute",
    "font-size": "1rem",
    "box-shadow": "rgba(0, 0, 0, 0.3) 2px 3px",
    transition: "box-shadow 0.1s, top 0.1s, perspective 0.1s",
    perspective: "20px",
    "transform-style": "preserve-3d",
    "z-index": 1}})
	
	res.before=div({0:btn,9:{
        'position': 'absolute',
        'top': '-8px',
        'left': '2.5%',
        'width': '95%',
        'height': '8px',
        'background-color': 'rgb(85, 31, 14)',
        'transform': 'rotateX(20deg) translateZ(-1px)',
        'z-index': '-1',
        'transition': 'height 0.1s, top 0.1s'}})
res.tx=div({0:btn})

		
		
		return res}
	
		var searchString = "Niveau";  // Remplace "chaine" par la chaîne à rechercher
var elements = $("p").filter(function() {
    return $(this).text().startsWith(searchString);
});

var brutesNames = [BRUTE]
var brutesDivs={}

elements.each(function() {
	var name = $(this).parent().children(":first").text()
	brutesNames.push(name)
	brutesDivs[name] = makeInfoDiv(name)
brutesDivs[name].div.insertAfter($(this).parent().parent())
brutesDivs[name].tx.text("...")
});

if(brutesNames.length<7){arenaRunning=false;return}//DOM exists


if(!MODIFIERS){MODIFIERS=[];$("p").each(function(){if(MODIFIERS.length>0){return}
	if($(this).text().indexOf("Modificateurs actifs")!=-1){for(var i in FightModifier){if($(this).parent().parent().text().indexOf(FightModifier[i])!=-1){MODIFIERS.push(FightModifier[i])}}}
});cl("FIGHT MODIFIERS : ",MODIFIERS)}

var  brutes = await getAllBrutes(brutesNames)

var imged=true


var rota2 = [[brutes[0]]]
var rota1 = [] ; for(var b=1;b<brutes.length;b++) rota1.push([brutes[b]])

				simulFights({
					fn:function(res,ended){stopLoading();
					
					if(imged){imged=false
					if(Math.random()*50<1){setImageSrc(img_arbitre,img_lapin)}
else if(Math.random()*22<1){setImageSrc(img_arbitre,img_mains)}
else if(Math.random()*22<1){setImageSrc(img_arbitre,img_voyante)}
else if(Math.random()*2<1){setImageSrc(img_ours,img_ours1)}
else{setImageSrc(img_ours,img_ours2)}

					}
					var nombres = [],flag=true,precision=0
					while(flag && precision<8){flag=false;for(var b of res){
						var coef=1-b.v/b.j
						var tx = (coef*100).toFixed(precision)+""
						if(nombres.includes(tx)){flag=true}
						nombres.push(tx)
						brutesDivs[b.nom].tx.text(tx)
						brutesDivs[b.nom].before.css("background-color",beforePalette(coef))
						brutesDivs[b.nom].div.css("background-color",palette(coef))
						};precision++}
					
					},
					rota1:rota1,
					rota2:rota2,//number = boss
					backups:backups?backups:false,
					fight_per_rota:200,
					fight_total:10000,
					return_first_win:undefined,
					loading:false,
					modifiers:MODIFIERS
					})
		if(!backups){
						var userIds = [];for(var b of brutes){userIds.push(b.userId)}
						var users = await getAllProfiles(userIds)
						var renfort = {}
						for(var i=0;i<users.length;i++){var user=users[i];renfort[userIds[i]] = [];
							for(var brute of user.brutes){if(parseInt(brute.level)<parseInt(brutes[i].level)){
								renfort[userIds[i]].push(await getBrute(brute.name))
						}}}
						cl(renforts)
					}
	
}
	  
	  
	  
var LOCAL
var fightToVizualise
var fightSourceCode

async function getFightSourceCode(){if(!fightSourceCode){
	
	var response = await fetch("https://bru"+"te.eterna"+"ltwin.org/irma-noob/fight/45341f08-9f9b-4073-a708-19e06d0f3c6f");
    fightSourceCode = await response.text();
	
}
}
async function visualizeFight(fight){fightToVizualise = fight;cl(fight);if(LOCAL){return}
			await getFightSourceCode()
			    var fetchCode=`
				var originalFetch=window.fetch;
				window.fetch = async function(url, options) {
        console.log("Intercepted fetch call to:" +url);
        
        // Appeler le fetch original
        var response = await originalFetch(url, options);
        
        // Modifier la réponse (ici, on parse du JSON pour l'exemple)
        var data = await response.json();
        console.log('Original data:', data);
        
        // Exemple de modification des données
        //data.modified = true;
		if(data.winner && data.loser && data.steps && data.fighters){
			data.winner = fightToVizualise.winner
			data.loser = fightToVizualise.loser
			data.steps = fightToVizualise.steps
			data.fighters = fightToVizualise.fighters
			data.brute1Id = fightToVizualise.brute1.connect.id
			data.brute2Id = fightToVizualise.brute2.connect.id
			
		}
        // Retourner une nouvelle réponse modifiée
        return new Response(JSON.stringify(data), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });
    };`
	
				var iframe = document.createElement('iframe');
							iframe.src = 'about:blank'; 

			iframe.onload = () => {cl("IFRAME LOADED")
					var iframeWindow = iframe.contentWindow;
				iframeWindow.document.addEventListener('mousedown', function(){$(iframe).remove()}, false);
			}

			var codeSource = fightSourceCode.replace("<script","<script>history.pushState(null, '', '"+"https://bru"+"te.eterna"
			+"ltwin.org/irma-noob/fight/45341f08-9f9b-4073-a708-19e06d0f3c6f"+"');"+fetchCode+"var fightToVizualise = "
			+JSON.stringify(fightToVizualise)+";"+"</script><script")

			document.body.appendChild(iframe);
			$(iframe).css({"position":"absolute",top:0,bottom:0,left:0,right:0,"z-index":50000,width:"99.5%",height:"100%"})
			var iframeDoc = iframe.contentWindow.document;

			iframeDoc.open();
			
			iframeDoc.write(codeSource);
			iframeDoc.close();
	stopLoading()
    // Injecter le code dans l'iframe pour surcharger fetch

};

function findFirstParentDiv(element) {
  let parent = element.parentElement;
  
  while (parent) {
    if (parent.tagName.toLowerCase() === 'div') {
      return parent;
    }
    parent = parent.parentElement;
  }
  
  return null; // Si aucun parent <div> n'est trouvé
}

function insertDivAfterElement(newDiv,referenceDiv) {
  if (referenceDiv) {

    // Insérer la nouvelle div juste après la div parent trouvée
    referenceDiv.insertAdjacentElement('afterend', newDiv);
  }
}
var getRandomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
function addStyle(styleString) {
  var style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

async function getBrute(name) {
    var response = await fetch(`/api/brute/${name}/for-hook`);
    var html = await response.text();
    return JSON.parse(html);
}

async function getAllBrutes(names) {
    var results = await Promise.all(
        names.map(name => getBrute(name))
    );
    return results; // Tableau de résultats HTML correspondant à chaque nom
}
async function getProfile(userId) {
    var response = await fetch("/api/user/"+userId+"/profile");
    var html = await response.text();
    return JSON.parse(html);
}

async function getAllProfiles(names) {
    var results = await Promise.all(
        names.map(name => getProfile(name))
    );
    return results; // Tableau de résultats HTML correspondant à chaque nom
}


var textBoxCSS
var baseCSS
var shurikenDIV

if(typeof(document)!="undefined"){
	
	
LOCAL = window.location.href.startsWith("C:/")
	
	
	addStyle(`		#shuriken {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:300000000;
}

#shuriken-image {
  animation: organic-rotation 4s infinite;
}

@keyframes organic-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1800deg);
  }
}

#shuriken-image {
  animation-timing-function: cubic-bezier(0.42, 0.2, 0.44, 0.8); /* Courbe personnalisée */
}
	`)
$("#shuriken").remove()
shurikenDIV = div({0:body,1:"shuriken",9:{position:"fixed",top:"33px",right:"33px"}})
div({0:shurikenDIV,2:"img",22:SHURIKEN,1:"shuriken-image"})
  baseCSS= {	"font-family": "Roboto, Helvetica, Arial, sans-serif",
    "font-weight": "400",
    "font-size": "1rem",
    "line-height": "1.5",
    "letter-spacing": "0.00938em",
}

textBoxCSS = {color: "rgb(176, 107, 79)",
    "box-shadow": "rgb(222, 195, 127) 0px 0px 0px 1px, rgb(246, 238, 144) 0px 0px 1px 4.5px, rgb(114, 82, 84) 0px 0px 0px 6px, rgb(188, 123, 74) 3px 3px 0px 6px",
    "background-color": "rgb(251, 242, 175)",
    "border-radius": "5px",
    margin: "16px 8px",
padding: "0px"}

}
function stopLoading(){$(shurikenDIV).css("display","none")}
function startLoading(){$(shurikenDIV).css("display","")}

var BRUTALISATOR = "https://raw.githubusercontent.com/Ambryal/BRUTALISATOR/"+BRANCHE+"/";

var applySkillModifiers = (brute, skill) => {
    var updatedBrute = { ...brute };
    // Vitality modifier
    if (skill === 'vitality') {
        updatedBrute.enduranceModifier *= 1.5;
        updatedBrute.enduranceStat += 3;
    }
    // Immortality modifier
    if (skill === 'immortality') {
        updatedBrute.enduranceModifier *= 3.5;
        updatedBrute.strengthModifier *= 0.75;
        updatedBrute.agilityModifier *= 0.75;
        updatedBrute.speedModifier *= 0.75;
    }
    // Herculean strength modifier
    if (skill === 'herculeanStrength') {
        updatedBrute.strengthModifier *= 1.5;
        updatedBrute.strengthStat += 3;
    }
    // Feline agility modifier
    if (skill === 'felineAgility') {
        updatedBrute.agilityModifier *= 1.5;
        updatedBrute.agilityStat += 3;
    }
    // Lightning bolt modifier
    if (skill === 'lightningBolt') {
        updatedBrute.speedModifier *= 1.5;
        updatedBrute.speedStat += 3;
    }
    // Reconnaissance modifier
    if (skill === 'reconnaissance') {
        updatedBrute.speedModifier *= 2.5;
        updatedBrute.speedStat += 5;
    }
    // Armor modifier
    if (skill === 'armor') {
        updatedBrute.speedModifier *= 0.9;
    }
    return updatedBrute;
};
var WeaponName = /*exports.*//*$Enums.*/WeaponName = {
  fan: 'fan',
  keyboard: 'keyboard',
  knife: 'knife',
  leek: 'leek',
  mug: 'mug',
  sai: 'sai',
  racquet: 'racquet',
  axe: 'axe',
  bumps: 'bumps',
  flail: 'flail',
  fryingPan: 'fryingPan',
  hatchet: 'hatchet',
  mammothBone: 'mammothBone',
  morningStar: 'morningStar',
  trombone: 'trombone',
  baton: 'baton',
  halbard: 'halbard',
  lance: 'lance',
  trident: 'trident',
  whip: 'whip',
  noodleBowl: 'noodleBowl',
  piopio: 'piopio',
  shuriken: 'shuriken',
  broadsword: 'broadsword',
  scimitar: 'scimitar',
  sword: 'sword'
};
var WeaponId;
(function (WeaponId) {
    WeaponId[WeaponId["fan"] = 0] = "fan";
    WeaponId[WeaponId["keyboard"] = 1] = "keyboard";
    WeaponId[WeaponId["knife"] = 2] = "knife";
    WeaponId[WeaponId["leek"] = 3] = "leek";
    WeaponId[WeaponId["mug"] = 4] = "mug";
    WeaponId[WeaponId["sai"] = 5] = "sai";
    WeaponId[WeaponId["racquet"] = 6] = "racquet";
    WeaponId[WeaponId["axe"] = 7] = "axe";
    WeaponId[WeaponId["bumps"] = 8] = "bumps";
    WeaponId[WeaponId["flail"] = 9] = "flail";
    WeaponId[WeaponId["fryingPan"] = 10] = "fryingPan";
    WeaponId[WeaponId["hatchet"] = 11] = "hatchet";
    WeaponId[WeaponId["mammothBone"] = 12] = "mammothBone";
    WeaponId[WeaponId["morningStar"] = 13] = "morningStar";
    WeaponId[WeaponId["trombone"] = 14] = "trombone";
    WeaponId[WeaponId["baton"] = 15] = "baton";
    WeaponId[WeaponId["halbard"] = 16] = "halbard";
    WeaponId[WeaponId["lance"] = 17] = "lance";
    WeaponId[WeaponId["trident"] = 18] = "trident";
    WeaponId[WeaponId["whip"] = 19] = "whip";
    WeaponId[WeaponId["noodleBowl"] = 20] = "noodleBowl";
    WeaponId[WeaponId["piopio"] = 21] = "piopio";
    WeaponId[WeaponId["shuriken"] = 22] = "shuriken";
    WeaponId[WeaponId["broadsword"] = 23] = "broadsword";
    WeaponId[WeaponId["scimitar"] = 24] = "scimitar";
    WeaponId[WeaponId["sword"] = 25] = "sword";
})(WeaponId || (/*exports.*/WeaponId = WeaponId = {}));
var WeaponByName = {
    [WeaponName.fan]: WeaponId.fan,
    [WeaponName.keyboard]: WeaponId.keyboard,
    [WeaponName.knife]: WeaponId.knife,
    [WeaponName.leek]: WeaponId.leek,
    [WeaponName.mug]: WeaponId.mug,
    [WeaponName.sai]: WeaponId.sai,
    [WeaponName.racquet]: WeaponId.racquet,
    [WeaponName.axe]: WeaponId.axe,
    [WeaponName.bumps]: WeaponId.bumps,
    [WeaponName.flail]: WeaponId.flail,
    [WeaponName.fryingPan]: WeaponId.fryingPan,
    [WeaponName.hatchet]: WeaponId.hatchet,
    [WeaponName.mammothBone]: WeaponId.mammothBone,
    [WeaponName.morningStar]: WeaponId.morningStar,
    [WeaponName.trombone]: WeaponId.trombone,
    [WeaponName.baton]: WeaponId.baton,
    [WeaponName.halbard]: WeaponId.halbard,
    [WeaponName.lance]: WeaponId.lance,
    [WeaponName.trident]: WeaponId.trident,
    [WeaponName.whip]: WeaponId.whip,
    [WeaponName.noodleBowl]: WeaponId.noodleBowl,
    [WeaponName.piopio]: WeaponId.piopio,
    [WeaponName.shuriken]: WeaponId.shuriken,
    [WeaponName.broadsword]: WeaponId.broadsword,
    [WeaponName.scimitar]: WeaponId.scimitar,
    [WeaponName.sword]: WeaponId.sword,
};
var WeaponById = {
    [WeaponId.fan]: WeaponName.fan,
    [WeaponId.keyboard]: WeaponName.keyboard,
    [WeaponId.knife]: WeaponName.knife,
    [WeaponId.leek]: WeaponName.leek,
    [WeaponId.mug]: WeaponName.mug,
    [WeaponId.sai]: WeaponName.sai,
    [WeaponId.racquet]: WeaponName.racquet,
    [WeaponId.axe]: WeaponName.axe,
    [WeaponId.bumps]: WeaponName.bumps,
    [WeaponId.flail]: WeaponName.flail,
    [WeaponId.fryingPan]: WeaponName.fryingPan,
    [WeaponId.hatchet]: WeaponName.hatchet,
    [WeaponId.mammothBone]: WeaponName.mammothBone,
    [WeaponId.morningStar]: WeaponName.morningStar,
    [WeaponId.trombone]: WeaponName.trombone,
    [WeaponId.baton]: WeaponName.baton,
    [WeaponId.halbard]: WeaponName.halbard,
    [WeaponId.lance]: WeaponName.lance,
    [WeaponId.trident]: WeaponName.trident,
    [WeaponId.whip]: WeaponName.whip,
    [WeaponId.noodleBowl]: WeaponName.noodleBowl,
    [WeaponId.piopio]: WeaponName.piopio,
    [WeaponId.shuriken]: WeaponName.shuriken,
    [WeaponId.broadsword]: WeaponName.broadsword,
    [WeaponId.scimitar]: WeaponName.scimitar,
    [WeaponId.sword]: WeaponName.sword,
};
var WeaponTypes = ['fast', 'sharp', 'heavy', 'long', 'thrown', 'blunt'];
var WeaponType = {
    FAST: 'fast',
    SHARP: 'sharp',
    HEAVY: 'heavy',
    LONG: 'long',
    THROWN: 'thrown',
    BLUNT: 'blunt',
};
var WeaponTypeColor = {
    fast: '#8686ff',
    sharp: 'red',
    heavy: 'brown',
    long: 'green',
    thrown: 'purple',
    blunt: 'orange',
};
var WeaponAnimations = ['fist', 'slash', 'estoc', 'whip'];
var limitedWeapons = [
    'knife', 'broadsword', 'lance', 'baton', 'trident', 'hatchet',
    'scimitar', 'axe', 'sword', 'fan', 'shuriken', 'bumps',
    'morningStar', 'mammothBone', 'flail', 'whip',
];
var MAX_LIMITED_WEAPONS = limitedWeapons.length - 3;
var weapons = [
    {
        name: 'axe',
        odds: 3,
        types: ['heavy', 'blunt'],
        tempo: 2.3,
        reversal: -0.2,
        evasion: -0.4,
        dexterity: -0.3,
        block: -0.5,
        accuracy: 0.5,
        disarm: 0.1,
        combo: -0.4,
        deflect: 0,
        damage: 55,
        toss: 5,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'baton',
        odds: 70,
        types: ['long'],
        tempo: 1,
        reversal: 0.3,
        evasion: 0.05,
        dexterity: 0,
        block: 0.25,
        accuracy: 0,
        disarm: 0.25,
        combo: 0.1,
        deflect: 0,
        damage: 6,
        toss: 3,
        reach: 3,
        animation: 'estoc',
    },
    {
        name: 'broadsword',
        odds: 100,
        types: ['sharp'],
        tempo: 1.2,
        reversal: 0.1,
        evasion: 0,
        dexterity: 0,
        block: 0.15,
        accuracy: 0,
        disarm: 0.15,
        combo: 0,
        deflect: 0,
        damage: 10,
        toss: 5,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'bumps',
        odds: 50,
        types: ['heavy', 'blunt'],
        tempo: 2,
        reversal: -0.3,
        evasion: -0.3,
        dexterity: -0.35,
        block: -0.3,
        accuracy: 0.3,
        disarm: 0.1,
        combo: -0.6,
        deflect: 0,
        damage: 30,
        toss: 5,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'fan',
        odds: 2,
        types: ['fast'],
        tempo: 0.28,
        reversal: 0.5,
        evasion: 0.6,
        dexterity: 0.5,
        block: -0.5,
        accuracy: 0,
        disarm: -0.5,
        combo: 0.45,
        deflect: 0.25,
        damage: 4,
        toss: 5,
        reach: 0,
        animation: 'slash',
    },
    {
        name: 'flail',
        odds: 4,
        types: ['heavy', 'blunt'],
        tempo: 2.2,
        reversal: 0,
        evasion: -0.3,
        dexterity: -0.1,
        block: -0.5,
        accuracy: 1.5,
        disarm: -0.2,
        combo: 0.3,
        deflect: 0,
        damage: 36,
        toss: 5,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'fryingPan',
        odds: 0.4,
        types: ['heavy', 'blunt'],
        tempo: 1.2,
        reversal: 0,
        evasion: 0,
        dexterity: 0,
        block: 0.4,
        accuracy: 0,
        disarm: 0,
        combo: -0.4,
        deflect: 0.4,
        damage: 17,
        toss: 2,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'halbard',
        odds: 2,
        types: ['long', 'sharp'],
        tempo: 1.8,
        reversal: 0,
        evasion: 0,
        dexterity: -0.4,
        block: 0,
        accuracy: 0,
        disarm: 0.1,
        combo: 0.1,
        deflect: 0,
        damage: 24,
        toss: 2,
        reach: 4,
        animation: 'slash',
    },
    {
        name: 'hatchet',
        odds: 40,
        types: ['heavy', 'sharp'],
        tempo: 1.5,
        reversal: 0,
        evasion: 0,
        dexterity: 0,
        block: -0.1,
        accuracy: 0,
        disarm: 0,
        combo: 0,
        deflect: 0,
        damage: 17,
        toss: 3,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'keyboard',
        odds: 0.4,
        types: ['fast', 'blunt'],
        tempo: 1,
        reversal: 0,
        evasion: 0.1,
        dexterity: 0.2,
        block: 0,
        accuracy: 0,
        disarm: 0,
        combo: 0.5,
        deflect: 0.3,
        damage: 7,
        toss: 2,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'knife',
        odds: 80,
        types: ['fast', 'sharp'],
        tempo: 0.6,
        reversal: 0,
        evasion: 0.1,
        dexterity: 0.5,
        block: 0,
        accuracy: 0,
        disarm: 0,
        combo: 0.3,
        deflect: 0,
        damage: 7,
        toss: 5,
        reach: 0,
        animation: 'estoc',
    },
    {
        name: 'lance',
        odds: 40,
        types: ['long'],
        tempo: 1.2,
        reversal: -0.1,
        evasion: 0,
        dexterity: 0,
        block: 0,
        accuracy: 0,
        disarm: 0.1,
        combo: 0,
        deflect: 0,
        damage: 12,
        toss: 2,
        reach: 3,
        animation: 'estoc',
    },
    {
        name: 'leek',
        odds: 0.4,
        types: ['fast', 'blunt'],
        tempo: 1.1,
        reversal: 1,
        evasion: 0,
        dexterity: 1,
        block: -0.5,
        accuracy: 2,
        disarm: 0,
        combo: 2,
        deflect: 0,
        damage: 5,
        toss: 2,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'mammothBone',
        odds: 20,
        types: ['heavy', 'blunt'],
        tempo: 1.6,
        reversal: 0,
        evasion: 0,
        dexterity: 0,
        block: 0,
        accuracy: 0.5,
        disarm: 0.1,
        combo: -0.1,
        deflect: 0,
        damage: 14,
        toss: 5,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'morningStar',
        odds: 6,
        types: ['heavy', 'blunt'],
        tempo: 1.5,
        reversal: 0,
        evasion: -0.1,
        block: 0,
        accuracy: 0.3,
        dexterity: -0.05,
        disarm: 0.1,
        combo: 0,
        deflect: 0,
        damage: 20,
        toss: 5,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'mug',
        odds: 0.4,
        types: ['fast'],
        tempo: 0.9,
        reversal: 0,
        evasion: 0.15,
        dexterity: 0.3,
        block: -0.1,
        accuracy: 0,
        disarm: 0,
        combo: 0.4,
        deflect: 0,
        damage: 8,
        toss: 2,
        reach: 0,
        animation: 'estoc',
    },
    {
        name: 'noodleBowl',
        odds: 0.4,
        types: ['thrown'],
        tempo: 0.45,
        reversal: 0,
        evasion: 0.1,
        dexterity: 0,
        block: -0.1,
        accuracy: 0,
        disarm: 0,
        combo: 0.3,
        deflect: 0,
        damage: 10,
        toss: 2,
        reach: 0,
        animation: 'fist',
    },
    {
        name: 'piopio',
        odds: 0.4,
        types: ['thrown'],
        tempo: 0.32,
        reversal: 0,
        evasion: 0.5,
        dexterity: 0,
        block: -0.1,
        accuracy: 0,
        disarm: 0.5,
        combo: 0,
        deflect: 0,
        damage: 5,
        toss: 2,
        reach: 0,
        animation: 'fist',
    },
    {
        name: 'racquet',
        odds: 0.4,
        types: ['fast', 'blunt'],
        tempo: 0.8,
        reversal: 1,
        evasion: 0.1,
        dexterity: 0,
        block: 0.2,
        accuracy: 0,
        disarm: 0,
        combo: 0,
        deflect: 0.5,
        damage: 6,
        toss: 2,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'sai',
        odds: 6,
        types: ['fast'],
        tempo: 0.6,
        reversal: 0,
        evasion: 0.1,
        dexterity: 0.25,
        block: 0.3,
        accuracy: 0,
        disarm: 1,
        combo: 0.3,
        deflect: 0,
        damage: 8,
        toss: 5,
        reach: 0,
        animation: 'estoc',
    },
    {
        name: 'scimitar',
        odds: 6,
        types: ['sharp'],
        tempo: 0.8,
        reversal: 0,
        evasion: 0,
        dexterity: 0.2,
        block: 0.1,
        accuracy: 0,
        disarm: 0,
        combo: 0.15,
        deflect: 0,
        damage: 10,
        toss: 3,
        reach: 1,
        animation: 'slash',
    },
    {
        name: 'shuriken',
        odds: 8,
        types: ['thrown'],
        tempo: 0.12,
        reversal: 0,
        evasion: 0.15,
        dexterity: 0,
        block: -0.1,
        accuracy: 0,
        disarm: -0.5,
        combo: 0.3,
        deflect: 0,
        damage: 3,
        toss: 5,
        reach: 0,
        animation: 'fist',
    },
    {
        name: 'sword',
        odds: 4,
        types: ['sharp'],
        tempo: 1.8,
        reversal: 0,
        evasion: -0.2,
        dexterity: -0.1,
        block: 0,
        accuracy: -0.2,
        disarm: 0.1,
        combo: 0,
        deflect: 0,
        damage: 28,
        toss: 5,
        reach: 2,
        animation: 'slash',
    },
    {
        name: 'trident',
        odds: 10,
        types: ['long'],
        tempo: 1.4,
        reversal: 0.05,
        evasion: 0,
        dexterity: 0,
        block: 0,
        accuracy: 0,
        disarm: 0.2,
        combo: 0,
        deflect: 0,
        damage: 14,
        toss: 3,
        reach: 3,
        animation: 'estoc',
    },
    {
        name: 'trombone',
        odds: 0.4,
        types: ['heavy', 'blunt'],
        tempo: 2.5,
        reversal: 0,
        evasion: 0,
        dexterity: -0.1,
        block: 0.2,
        accuracy: 0.2,
        disarm: 0.5,
        combo: 0.3,
        deflect: 0,
        damage: 20,
        toss: 2,
        reach: 2,
        animation: 'slash',
    },
    {
        name: 'whip',
        odds: 3,
        types: ['long'],
        tempo: 1.5,
        reversal: -0.1,
        evasion: 0.3,
        dexterity: 0.3,
        block: -0.2,
        accuracy: -0.2,
        disarm: 0.3,
        combo: 0.35,
        deflect: 0,
        damage: 10,
        toss: 5,
        reach: 5,
        animation: 'whip',
    },
];
var WEAPONS_TOTAL_ODDS = weapons.reduce((acc, weapon) => acc + weapon.odds, 0);
var WEAPONS_SFX = {
    ...weapons.reduce((acc, weapon) => {
        acc[weapon.name] = [];
        // Special SFX for some weapons
        if (weapon.name === 'fryingPan') {
            acc[weapon.name] = ['fryingPan'];
            return acc;
        }
        if (weapon.name === 'lance') {
            acc[weapon.name] = ['lance1', 'lance2'];
            return acc;
        }
        if (weapon.name === 'piopio') {
            acc[weapon.name] = ['piopio'];
            return acc;
        }
        if (weapon.name === 'sword') {
            acc[weapon.name] = ['sword'];
            return acc;
        }
        if (weapon.name === 'trombone') {
            acc[weapon.name] = ['trombone1', 'trombone2'];
            return acc;
        }
        if (weapon.name === 'whip') {
            acc[weapon.name] = ['whip'];
            return acc;
        }
        // SFX depending on weapon type
        if (weapon.types.includes('sharp')) {
            acc[weapon.name].push('sharp1', 'sharp2', 'sharp3', 'sharp4', 'sharp5', 'sharp6', 'sharp7', 'sharp8');
        }
        else {
            acc[weapon.name].push('blunt1', 'blunt2', 'blunt3', 'blunt4', 'blunt5', 'blunt6', 'blunt7', 'blunt8');
        }
        return acc;
    }, {}),
};
if (typeof self.ExpectedError === 'undefined') {
  self.ExpectedError = class ExpectedError extends Error {
    constructor(message = '') {
      super(message);
    }
  };
}
var FightModifier = {
  noThrows: 'Mains collantes',
  focusOpponent: 'Concentration',
  alwaysUseSupers: 'Pouvoir illimité',
  drawEveryWeapon: 'Ravitaillement infini',
  doubleAgility: 'Gravité atténuée',
  randomSkill: 'Compétence opportune',
  randomWeapon: 'Arme opportune',
  bareHandsFirstHit: 'Combat honorable',
  startWithWeapon: 'Paré au combat'
};


var Gender = {
  male: 'male',
  female: 'female'
};
var getFinalStat = (brute, stat, modifiers, randomSkillIndex) => {
    var multiplier = stat === 'agility' ? modifiers.includes(FightModifier.doubleAgility) ? 2 : 1 : 1;
    var randomSkill = (0, getTempSkill)(brute, randomSkillIndex);
    // No random skill, return normal stat
    if (!randomSkill) {
        return brute[`${stat}Value`] * multiplier;
    }
    // Apply skill modifiers
    var newBrute = (0, applySkillModifiers)(brute, randomSkill);
    // Return new stat
    return Math.floor(newBrute[`${stat}Stat`] * newBrute[`${stat}Modifier`]) * multiplier;
};
var getFinalStat = getFinalStat;
var getFinalHP = (brute, randomSkillIndex) => {
    var randomSkill = (0, getTempSkill)(brute, randomSkillIndex);
    // No random skill, return normal HP
    if (!randomSkill) {
        return (0, getHP)(brute.level, brute.enduranceValue);
    }
    // Apply skill modifiers
    var newBrute = (0, applySkillModifiers)(brute, randomSkill);
    // Return new HP
    return (0, getHP)(newBrute.level, Math.floor(newBrute.enduranceStat * newBrute.enduranceModifier));
};
var getFinalHP = getFinalHP;
var getHP = (level, endurance) => Math.floor(50
    + (Math.max(endurance, 0)
        + level * 0.25) * 6);
var getHP = getHP;
var readableHPFormula = (level, endurance) => `50 + (max(${endurance}, 0) + ${level} * 0.25) * 6`;
var readableHPFormula = readableHPFormula;
var InventoryItemType = /*exports.*//*$Enums.*/InventoryItemType = {
  visualReset: 'visualReset',
  bossTicket: 'bossTicket',
  nameChange: 'nameChange',
  favoriteFight: 'favoriteFight'
};
var LogType = /*exports.*//*$Enums.*/LogType = {
  win: 'win',
  lose: 'lose',
  child: 'child',
  childup: 'childup',
  up: 'up',
  lvl: 'lvl',
  tournament: 'tournament',
  tournamentXp: 'tournamentXp',
  bossDefeat: 'bossDefeat'
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
var readBodyString = readBodyString;
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
var generateBodyString = generateBodyString;
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
var getColor = getColor;
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
var readColorString = readColorString;
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
var PetName = /*exports.*//*$Enums.*/PetName = {
  dog1: 'dog1',
  dog2: 'dog2',
  dog3: 'dog3',
  panther: 'panther',
  bear: 'bear'
};
var randomBetween = (min, max) => {
    if (min > max)
        return 0;
    if (min === max)
        return min;
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var randomItem = void 0;
var randomItem = (items) => {
    if (!items.length) {
        throw new Error('No items');
    }
    if (items.length === 1) {
        var item = items[0];
        if (!item) {
            throw new Error('No item');
        }
        return item;
    }
    var index = (0, randomBetween)(0, items.length - 1);
    var item = items[index];
    if (!item) {
        throw new Error('No item');
    }
    return item;
};
var randomItem = randomItem;
var SkillName = /*exports.*//*$Enums.*/SkillName = {
  herculeanStrength: 'herculeanStrength',
  felineAgility: 'felineAgility',
  lightningBolt: 'lightningBolt',
  vitality: 'vitality',
  immortality: 'immortality',
  reconnaissance: 'reconnaissance',
  weaponsMaster: 'weaponsMaster',
  martialArts: 'martialArts',
  sixthSense: 'sixthSense',
  hostility: 'hostility',
  fistsOfFury: 'fistsOfFury',
  shield: 'shield',
  armor: 'armor',
  toughenedSkin: 'toughenedSkin',
  untouchable: 'untouchable',
  sabotage: 'sabotage',
  shock: 'shock',
  bodybuilder: 'bodybuilder',
  relentless: 'relentless',
  survival: 'survival',
  leadSkeleton: 'leadSkeleton',
  balletShoes: 'balletShoes',
  determination: 'determination',
  firstStrike: 'firstStrike',
  resistant: 'resistant',
  counterAttack: 'counterAttack',
  ironHead: 'ironHead',
  thief: 'thief',
  fierceBrute: 'fierceBrute',
  tragicPotion: 'tragicPotion',
  net: 'net',
  bomb: 'bomb',
  hammer: 'hammer',
  cryOfTheDamned: 'cryOfTheDamned',
  hypnosis: 'hypnosis',
  flashFlood: 'flashFlood',
  tamer: 'tamer',
  regeneration: 'regeneration',
  chef: 'chef',
  spy: 'spy',
  saboteur: 'saboteur',
  backup: 'backup',
  hideaway: 'hideaway',
  monk: 'monk',
  vampirism: 'vampirism',
  chaining: 'chaining',
  haste: 'haste',
  treat: 'treat',
  repulse: 'repulse'
};
var weightedRandom = (items) => {
    var firstItem = items[0];
    if (!firstItem) {
        throw new Error('No items');
    }
    // Calculate total odds
    var totalOdds = items.reduce((acc, item) => acc + item.odds, 0);
    let i = 0;
    var weights = [];
    for (i = 0; i < items.length; i++) {
        weights[i] = ((items[i]?.odds || 0) / totalOdds) + (weights[i - 1] || 0);
    }
    var random = Math.random() * (weights[weights.length - 1] || 0);
    for (i = 0; i < weights.length; i++) {
        if ((weights[i] || 0) > random) {
            break;
        }
    }
    return items[i] || firstItem;
};
var pets = [
    {
        name: PetName.bear,
        odds: 1,
        enduranceMalus: 8,
        initiative: 3.6,
        strength: 40,
        agility: 2,
        speed: 1,
        hp: 110,
        counter: 0,
        combo: -0.2,
        block: -0.25,
        evasion: 0.1,
        accuracy: 0.2,
        disarm: 0.05,
        damage: 5,
    },
    {
        name: PetName.panther,
        odds: 1,
        enduranceMalus: 6,
        initiative: 0.6,
        strength: 23,
        agility: 16,
        speed: 24,
        hp: 26,
        counter: 0,
        combo: 0.7,
        block: 0,
        evasion: 0.2,
        accuracy: 0,
        disarm: 0,
        damage: 3,
    },
    {
        name: PetName.dog3,
        odds: 2,
        enduranceMalus: 2,
        initiative: 0.1,
        strength: 6,
        agility: 5,
        speed: 3,
        hp: 14,
        counter: 0,
        combo: 0.2,
        block: 0,
        evasion: 0,
        accuracy: 0,
        disarm: 0,
        damage: 3,
    },
    {
        name: PetName.dog2,
        odds: 8,
        enduranceMalus: 2,
        initiative: 0.1,
        strength: 6,
        agility: 5,
        speed: 3,
        hp: 14,
        counter: 0,
        combo: 0.2,
        block: 0,
        evasion: 0,
        accuracy: 0,
        disarm: 0,
        damage: 3,
    },
    {
        name: PetName.dog1,
        odds: 20,
        enduranceMalus: 2,
        initiative: 0.1,
        strength: 6,
        agility: 5,
        speed: 3,
        hp: 14,
        counter: 0,
        combo: 0.2,
        block: 0,
        evasion: 0,
        accuracy: 0,
        disarm: 0,
        damage: 3,
    },
];
var PETS_TOTAL_ODDS = pets.reduce((acc, pet) => acc + pet.odds, 0);
var scalingByPet = {
    [PetName.bear]: {
        strength: 0.4,
        agility: 0.1,
        speed: 0.1,
        hp: 0.4,
    },
    [PetName.panther]: {
        strength: 0.25,
        agility: 0.3,
        speed: 0.3,
        hp: 0.15,
    },
    [PetName.dog3]: {
        strength: 0.1,
        agility: 0.2,
        speed: 0.4,
        hp: 0.1,
    },
    [PetName.dog2]: {
        strength: 0.1,
        agility: 0.2,
        speed: 0.4,
        hp: 0.1,
    },
    [PetName.dog1]: {
        strength: 0.1,
        agility: 0.2,
        speed: 0.4,
        hp: 0.1,
    },
};
var petStatToBruteStat = {
    strength: 'strengthValue',
    agility: 'agilityValue',
    speed: 'speedValue',
    hp: 'hp',
};
var getPetStat = (brute, pet, stat) => {
    var base = pet[stat];
    var scaling = scalingByPet[pet.name][stat];
    var bruteStat = brute[petStatToBruteStat[stat]];
    return base + Math.ceil(scaling * bruteStat);
};
var getPetStat = getPetStat;
var SkillId;
(function (SkillId) {
    SkillId[SkillId["herculeanStrength"] = 0] = "herculeanStrength";
    SkillId[SkillId["felineAgility"] = 1] = "felineAgility";
    SkillId[SkillId["lightningBolt"] = 2] = "lightningBolt";
    SkillId[SkillId["vitality"] = 3] = "vitality";
    SkillId[SkillId["immortality"] = 4] = "immortality";
    SkillId[SkillId["reconnaissance"] = 5] = "reconnaissance";
    SkillId[SkillId["weaponsMaster"] = 6] = "weaponsMaster";
    SkillId[SkillId["martialArts"] = 7] = "martialArts";
    SkillId[SkillId["sixthSense"] = 8] = "sixthSense";
    SkillId[SkillId["hostility"] = 9] = "hostility";
    SkillId[SkillId["fistsOfFury"] = 10] = "fistsOfFury";
    SkillId[SkillId["shield"] = 11] = "shield";
    SkillId[SkillId["armor"] = 12] = "armor";
    SkillId[SkillId["toughenedSkin"] = 13] = "toughenedSkin";
    SkillId[SkillId["untouchable"] = 14] = "untouchable";
    SkillId[SkillId["sabotage"] = 15] = "sabotage";
    SkillId[SkillId["shock"] = 16] = "shock";
    SkillId[SkillId["bodybuilder"] = 17] = "bodybuilder";
    SkillId[SkillId["relentless"] = 18] = "relentless";
    SkillId[SkillId["survival"] = 19] = "survival";
    SkillId[SkillId["leadSkeleton"] = 20] = "leadSkeleton";
    SkillId[SkillId["balletShoes"] = 21] = "balletShoes";
    SkillId[SkillId["determination"] = 22] = "determination";
    SkillId[SkillId["firstStrike"] = 23] = "firstStrike";
    SkillId[SkillId["resistant"] = 24] = "resistant";
    SkillId[SkillId["counterAttack"] = 25] = "counterAttack";
    SkillId[SkillId["ironHead"] = 26] = "ironHead";
    SkillId[SkillId["thief"] = 27] = "thief";
    SkillId[SkillId["fierceBrute"] = 28] = "fierceBrute";
    SkillId[SkillId["tragicPotion"] = 29] = "tragicPotion";
    SkillId[SkillId["net"] = 30] = "net";
    SkillId[SkillId["bomb"] = 31] = "bomb";
    SkillId[SkillId["hammer"] = 32] = "hammer";
    SkillId[SkillId["cryOfTheDamned"] = 33] = "cryOfTheDamned";
    SkillId[SkillId["hypnosis"] = 34] = "hypnosis";
    SkillId[SkillId["flashFlood"] = 35] = "flashFlood";
    SkillId[SkillId["tamer"] = 36] = "tamer";
    SkillId[SkillId["regeneration"] = 37] = "regeneration";
    SkillId[SkillId["chef"] = 38] = "chef";
    SkillId[SkillId["spy"] = 39] = "spy";
    SkillId[SkillId["saboteur"] = 40] = "saboteur";
    SkillId[SkillId["backup"] = 41] = "backup";
    SkillId[SkillId["hideaway"] = 42] = "hideaway";
    SkillId[SkillId["monk"] = 43] = "monk";
    SkillId[SkillId["vampirism"] = 44] = "vampirism";
    SkillId[SkillId["chaining"] = 45] = "chaining";
    SkillId[SkillId["haste"] = 46] = "haste";
    SkillId[SkillId["treat"] = 47] = "treat";
    SkillId[SkillId["repulse"] = 48] = "repulse";
})(SkillId || (/*exports.*/SkillId = SkillId = {}));
var SkillByName = {
    [SkillName.herculeanStrength]: SkillId.herculeanStrength,
    [SkillName.felineAgility]: SkillId.felineAgility,
    [SkillName.lightningBolt]: SkillId.lightningBolt,
    [SkillName.vitality]: SkillId.vitality,
    [SkillName.immortality]: SkillId.immortality,
    [SkillName.reconnaissance]: SkillId.reconnaissance,
    [SkillName.weaponsMaster]: SkillId.weaponsMaster,
    [SkillName.martialArts]: SkillId.martialArts,
    [SkillName.sixthSense]: SkillId.sixthSense,
    [SkillName.hostility]: SkillId.hostility,
    [SkillName.fistsOfFury]: SkillId.fistsOfFury,
    [SkillName.shield]: SkillId.shield,
    [SkillName.armor]: SkillId.armor,
    [SkillName.toughenedSkin]: SkillId.toughenedSkin,
    [SkillName.untouchable]: SkillId.untouchable,
    [SkillName.sabotage]: SkillId.sabotage,
    [SkillName.shock]: SkillId.shock,
    [SkillName.bodybuilder]: SkillId.bodybuilder,
    [SkillName.relentless]: SkillId.relentless,
    [SkillName.survival]: SkillId.survival,
    [SkillName.leadSkeleton]: SkillId.leadSkeleton,
    [SkillName.balletShoes]: SkillId.balletShoes,
    [SkillName.determination]: SkillId.determination,
    [SkillName.firstStrike]: SkillId.firstStrike,
    [SkillName.resistant]: SkillId.resistant,
    [SkillName.counterAttack]: SkillId.counterAttack,
    [SkillName.ironHead]: SkillId.ironHead,
    [SkillName.thief]: SkillId.thief,
    [SkillName.fierceBrute]: SkillId.fierceBrute,
    [SkillName.tragicPotion]: SkillId.tragicPotion,
    [SkillName.net]: SkillId.net,
    [SkillName.bomb]: SkillId.bomb,
    [SkillName.hammer]: SkillId.hammer,
    [SkillName.cryOfTheDamned]: SkillId.cryOfTheDamned,
    [SkillName.hypnosis]: SkillId.hypnosis,
    [SkillName.flashFlood]: SkillId.flashFlood,
    [SkillName.tamer]: SkillId.tamer,
    [SkillName.regeneration]: SkillId.regeneration,
    [SkillName.chef]: SkillId.chef,
    [SkillName.spy]: SkillId.spy,
    [SkillName.saboteur]: SkillId.saboteur,
    [SkillName.backup]: SkillId.backup,
    [SkillName.hideaway]: SkillId.hideaway,
    [SkillName.monk]: SkillId.monk,
    [SkillName.vampirism]: SkillId.vampirism,
    [SkillName.chaining]: SkillId.chaining,
    [SkillName.haste]: SkillId.haste,
    [SkillName.treat]: SkillId.treat,
    [SkillName.repulse]: SkillId.repulse,
};
var SkillById = {
    [SkillId.herculeanStrength]: SkillName.herculeanStrength,
    [SkillId.felineAgility]: SkillName.felineAgility,
    [SkillId.lightningBolt]: SkillName.lightningBolt,
    [SkillId.vitality]: SkillName.vitality,
    [SkillId.immortality]: SkillName.immortality,
    [SkillId.reconnaissance]: SkillName.reconnaissance,
    [SkillId.weaponsMaster]: SkillName.weaponsMaster,
    [SkillId.martialArts]: SkillName.martialArts,
    [SkillId.sixthSense]: SkillName.sixthSense,
    [SkillId.hostility]: SkillName.hostility,
    [SkillId.fistsOfFury]: SkillName.fistsOfFury,
    [SkillId.shield]: SkillName.shield,
    [SkillId.armor]: SkillName.armor,
    [SkillId.toughenedSkin]: SkillName.toughenedSkin,
    [SkillId.untouchable]: SkillName.untouchable,
    [SkillId.sabotage]: SkillName.sabotage,
    [SkillId.shock]: SkillName.shock,
    [SkillId.bodybuilder]: SkillName.bodybuilder,
    [SkillId.relentless]: SkillName.relentless,
    [SkillId.survival]: SkillName.survival,
    [SkillId.leadSkeleton]: SkillName.leadSkeleton,
    [SkillId.balletShoes]: SkillName.balletShoes,
    [SkillId.determination]: SkillName.determination,
    [SkillId.firstStrike]: SkillName.firstStrike,
    [SkillId.resistant]: SkillName.resistant,
    [SkillId.counterAttack]: SkillName.counterAttack,
    [SkillId.ironHead]: SkillName.ironHead,
    [SkillId.thief]: SkillName.thief,
    [SkillId.fierceBrute]: SkillName.fierceBrute,
    [SkillId.tragicPotion]: SkillName.tragicPotion,
    [SkillId.net]: SkillName.net,
    [SkillId.bomb]: SkillName.bomb,
    [SkillId.hammer]: SkillName.hammer,
    [SkillId.cryOfTheDamned]: SkillName.cryOfTheDamned,
    [SkillId.hypnosis]: SkillName.hypnosis,
    [SkillId.flashFlood]: SkillName.flashFlood,
    [SkillId.tamer]: SkillName.tamer,
    [SkillId.regeneration]: SkillName.regeneration,
    [SkillId.chef]: SkillName.chef,
    [SkillId.spy]: SkillName.spy,
    [SkillId.saboteur]: SkillName.saboteur,
    [SkillId.backup]: SkillName.backup,
    [SkillId.hideaway]: SkillName.hideaway,
    [SkillId.monk]: SkillName.monk,
    [SkillId.vampirism]: SkillName.vampirism,
    [SkillId.chaining]: SkillName.chaining,
    [SkillId.haste]: SkillName.haste,
    [SkillId.treat]: SkillName.treat,
    [SkillId.repulse]: SkillName.repulse,
};
var FightStat = {
    REVERSAL: 'reversal',
    COUNTER: 'counter',
    EVASION: 'evasion',
    DEXTERITY: 'dexterity',
    BLOCK: 'block',
    ACCURACY: 'accuracy',
    DISARM: 'disarm',
    COMBO: 'combo',
    DEFLECT: 'deflect',
    ARMOR: 'armor',
    DAMAGE: 'damage',
    HIT_SPEED: 'hitSpeed',
    INITIATIVE: 'initiative',
    STRENGTH: 'strength',
    AGILITY: 'agility',
    SPEED: 'speed',
    ENDURANCE: 'endurance',
};
var skills = [
    {
        name: 'herculeanStrength',
        odds: 60,
        type: 'booster',
    },
    {
        name: 'felineAgility',
        odds: 60,
        type: 'booster',
    },
    {
        name: 'lightningBolt',
        odds: 60,
        type: 'booster',
    },
    {
        name: 'vitality',
        odds: 60,
        type: 'booster',
    },
    {
        name: 'immortality',
        odds: 0.14,
        type: 'booster',
    },
    {
        name: 'weaponsMaster',
        odds: 10,
        type: 'passive',
    },
    {
        name: 'martialArts',
        odds: 10,
        type: 'passive',
    },
    {
        name: 'sixthSense',
        odds: 20,
        type: 'passive',
    },
    {
        name: 'hostility',
        odds: 4,
        type: 'passive',
    },
    {
        name: 'fistsOfFury',
        odds: 10,
        type: 'passive',
    },
    {
        name: 'shield',
        odds: 10,
        type: 'passive',
    },
    {
        name: 'armor',
        odds: 4,
        type: 'passive',
    },
    {
        name: 'toughenedSkin',
        odds: 30,
        type: 'passive',
    },
    {
        name: 'untouchable',
        odds: 1,
        type: 'passive',
    },
    {
        name: 'sabotage',
        odds: 3,
        type: 'passive',
    },
    {
        name: 'shock',
        odds: 4,
        type: 'passive',
    },
    {
        name: 'bodybuilder',
        odds: 5,
        type: 'passive',
    },
    {
        name: 'relentless',
        odds: 4,
        type: 'passive',
    },
    {
        name: 'survival',
        odds: 4,
        type: 'passive',
    },
    {
        name: 'leadSkeleton',
        odds: 4,
        type: 'passive',
    },
    {
        name: 'balletShoes',
        odds: 4,
        type: 'passive',
    },
    {
        name: 'determination',
        odds: 4,
        type: 'passive',
    },
    {
        name: 'firstStrike',
        odds: 8,
        type: 'passive',
    },
    {
        name: 'resistant',
        odds: 3,
        type: 'passive',
    },
    {
        name: 'reconnaissance',
        odds: 1,
        type: 'booster',
    },
    {
        name: 'counterAttack',
        odds: 10,
        type: 'passive',
    },
    {
        name: 'ironHead',
        odds: 4,
        type: 'passive',
    },
    {
        name: 'thief',
        odds: 2.5,
        type: 'super',
        toss: 8,
        uses: 2,
    },
    {
        name: 'fierceBrute',
        odds: 20,
        type: 'super',
        toss: 5,
        uses: 1,
    },
    {
        name: 'tragicPotion',
        odds: 8,
        type: 'super',
        toss: 10,
        uses: 1,
    },
    {
        name: 'net',
        odds: 16,
        type: 'super',
        toss: 10,
        uses: 1,
    },
    {
        name: 'bomb',
        odds: 6,
        type: 'super',
        toss: 2,
        uses: 2,
    },
    {
        name: 'hammer',
        odds: 1,
        type: 'super',
        toss: 2,
        uses: 1,
    },
    {
        name: 'cryOfTheDamned',
        odds: 4,
        type: 'super',
        toss: 8,
        uses: 2,
    },
    {
        name: 'hypnosis',
        odds: 0.5,
        type: 'super',
        toss: 3,
        uses: 1,
    },
    {
        name: 'flashFlood',
        odds: 0.5,
        type: 'super',
        toss: 2,
        uses: 3,
    },
    {
        name: 'tamer',
        odds: 4,
        type: 'super',
        toss: 20,
        uses: 4,
    },
    {
        name: 'regeneration',
        odds: 3,
        type: 'talent',
    },
    {
        name: 'chef',
        odds: 1,
        type: 'talent',
    },
    {
        name: 'spy',
        odds: 3,
        type: 'talent',
    },
    {
        name: 'saboteur',
        odds: 3,
        type: 'talent',
    },
    {
        name: 'backup',
        odds: 5,
        type: 'talent',
    },
    {
        name: 'hideaway',
        odds: 5,
        type: 'talent',
    },
    {
        name: 'monk',
        odds: 5,
        type: 'talent',
    },
    {
        name: 'vampirism',
        odds: 10,
        type: 'super',
        uses: 1,
        toss: 5,
    },
    {
        name: 'chaining',
        odds: 5,
        type: 'passive',
    },
    {
        name: 'haste',
        odds: 5,
        type: 'super',
        uses: 1,
        toss: 3,
    },
    {
        name: 'treat',
        odds: 20,
        type: 'super',
        uses: 4,
        toss: 5,
    },
    {
        name: 'repulse',
        odds: 10,
        type: 'passive',
    },
];
var SKILLS_TOTAL_ODDS = skills.reduce((acc, skill) => acc + skill.odds, 0);
var SkillModifiers = {
    [SkillName.herculeanStrength]: [
        { stat: FightStat.STRENGTH, value: 3 },
        { stat: FightStat.STRENGTH, value: 50, percent: true },
    ],
    [SkillName.felineAgility]: [
        { stat: FightStat.AGILITY, value: 3 },
        { stat: FightStat.AGILITY, value: 50, percent: true },
    ],
    [SkillName.lightningBolt]: [
        { stat: FightStat.SPEED, value: 3 },
        { stat: FightStat.SPEED, value: 50, percent: true },
    ],
    [SkillName.vitality]: [
        { stat: FightStat.ENDURANCE, value: 3 },
        { stat: FightStat.ENDURANCE, value: 50, percent: true },
    ],
    [SkillName.immortality]: [
        { stat: FightStat.ENDURANCE, value: 250, percent: true },
        { stat: FightStat.STRENGTH, value: -25, percent: true },
        { stat: FightStat.AGILITY, value: -25, percent: true },
        { stat: FightStat.SPEED, value: -25, percent: true },
    ],
    [SkillName.weaponsMaster]: [
        { stat: FightStat.DAMAGE, weaponType: WeaponType.SHARP, value: 50, percent: true },
    ],
    [SkillName.martialArts]: [
        { stat: FightStat.DAMAGE, weaponType: null, value: 100, percent: true },
    ],
    [SkillName.sixthSense]: [
        { stat: FightStat.COUNTER, value: 10, percent: true },
    ],
    [SkillName.hostility]: [
        { stat: FightStat.REVERSAL, value: 30, percent: true },
    ],
    [SkillName.fistsOfFury]: [
        { stat: FightStat.COMBO, value: 20, percent: true },
    ],
    [SkillName.shield]: [
        { stat: FightStat.BLOCK, value: 45, percent: true },
    ],
    [SkillName.armor]: [
        { stat: FightStat.ARMOR, value: 25, percent: true },
        { stat: FightStat.SPEED, value: -10, percent: true },
    ],
    [SkillName.toughenedSkin]: [
        { stat: FightStat.ARMOR, value: 10, percent: true },
    ],
    [SkillName.untouchable]: [
        { stat: FightStat.EVASION, value: 30, percent: true },
    ],
    [SkillName.sabotage]: [],
    [SkillName.shock]: [
        { stat: FightStat.DISARM, value: 50, percent: true },
    ],
    [SkillName.bodybuilder]: [
        { stat: FightStat.HIT_SPEED, weaponType: WeaponType.HEAVY, value: 25, percent: true },
        { stat: FightStat.DEXTERITY, weaponType: WeaponType.HEAVY, value: 10, percent: true },
    ],
    [SkillName.relentless]: [
        { stat: FightStat.ACCURACY, value: 30, percent: true },
    ],
    [SkillName.survival]: [],
    [SkillName.leadSkeleton]: [],
    [SkillName.balletShoes]: [
        { stat: FightStat.EVASION, value: 10, percent: true },
    ],
    [SkillName.determination]: [],
    [SkillName.firstStrike]: [
        { stat: FightStat.INITIATIVE, value: 200 },
    ],
    [SkillName.resistant]: [],
    [SkillName.reconnaissance]: [
        { stat: FightStat.INITIATIVE, value: -200 },
        { stat: FightStat.SPEED, value: 5 },
        { stat: FightStat.SPEED, value: 150, percent: true },
    ],
    [SkillName.counterAttack]: [
        { stat: FightStat.BLOCK, value: 10, percent: true },
        { stat: FightStat.REVERSAL, value: 90, percent: true, details: 'afterBlock' },
    ],
    [SkillName.ironHead]: [],
    [SkillName.thief]: [],
    [SkillName.fierceBrute]: [],
    [SkillName.tragicPotion]: [],
    [SkillName.net]: [],
    [SkillName.bomb]: [],
    [SkillName.hammer]: [],
    [SkillName.cryOfTheDamned]: [],
    [SkillName.hypnosis]: [],
    [SkillName.flashFlood]: [],
    [SkillName.tamer]: [],
    [SkillName.regeneration]: [],
    [SkillName.chef]: [],
    [SkillName.spy]: [],
    [SkillName.saboteur]: [],
    [SkillName.backup]: [],
    [SkillName.hideaway]: [],
    [SkillName.monk]: [
        { stat: FightStat.COUNTER, value: 40, percent: true },
        { stat: FightStat.INITIATIVE, value: -200 },
        { stat: FightStat.HIT_SPEED, value: -100, percent: true },
    ],
    [SkillName.vampirism]: [],
    [SkillName.chaining]: [],
    [SkillName.haste]: [],
    [SkillName.treat]: [],
    [SkillName.repulse]: [
        { stat: FightStat.DEFLECT, value: 30, percent: true },
    ],
};
var FIGHTS_PER_DAY = 6;
var ARENA_OPPONENTS_COUNT = 6;
var ARENA_OPPONENTS_MAX_GAP = 2;
var BRUTE_STARTING_POINTS = 11;
var PERKS_TOTAL_ODDS = WEAPONS_TOTAL_ODDS + PETS_TOTAL_ODDS + SKILLS_TOTAL_ODDS;
var SHIELD_BLOCK_ODDS = 0.45;
var NO_WEAPON_TOSS = 10;
var Animations = [
    'arrive', 'attack', 'block', 'death', 'drink', 'eat',
    'equip', 'evade', 'grab', 'grabbed', 'hit', 'hit-0', 'hit-1', 'hit-2',
    'idle', 'launch', 'monk', 'prepare-throw', 'run',
    'stolen', 'steal', 'strengthen', 'throw', 'train', 'train2', 'trapped',
    'trash', 'win', ...WeaponAnimations,
];
var BruteRankings = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var GLOBAL_TOURNAMENT_START_HOUR = 6;
var PERK_ODDS = [
    { name: 'pet', odds: PETS_TOTAL_ODDS },
    { name: 'skill', odds: SKILLS_TOTAL_ODDS },
    { name: 'weapon', odds: WEAPONS_TOTAL_ODDS },
];
var NEW_BRUTE_BASE_COST = 500;
var FIGHTER_HEIGHT = {
    brute: 80,
    [PetName.bear]: 130,
    [PetName.panther]: 60,
    dog: 40,
};
var FIGHTER_WIDTH = {
    brute: 50,
    [PetName.bear]: 100,
    [PetName.panther]: 80,
    dog: 60,
};
var FIGHTER_HIT_ANCHOR = {
    brute: { x: 5, y: 40 },
    [PetName.bear]: { x: 60, y: 100 },
    [PetName.panther]: { x: 45, y: 45 },
    dog: { x: 30, y: 30 },
};
var MAX_FAVORITE_BRUTES = 3;
var BASE_FIGHTER_STATS = {
    reversal: 0,
    evasion: 0.1,
    dexterity: 0.2,
    block: -0.25,
    accuracy: 0,
    disarm: 0.05,
    combo: 0,
    deflect: 0,
    tempo: 1.2,
};
var BARE_HANDS_DAMAGE = 5;
var RESET_PRICE = 100;
var CLAN_SIZE_LIMIT = 50;
var BOSS_XP_REWARD = 500;
var BOSS_GOLD_REWARD = 500;
var BruteDeletionReason;
(function (BruteDeletionReason) {
    BruteDeletionReason["DUPLICATE_NAME"] = "DUPLICATE_NAME";
    BruteDeletionReason["INNAPROPRIATE_NAME"] = "INNAPROPRIATE_NAME";
    BruteDeletionReason["BANNED_USER"] = "BANNED_USER";
    BruteDeletionReason["EVENT_LOSS"] = "EVENT_LOSS";
})(BruteDeletionReason || (/*exports.*/BruteDeletionReason = BruteDeletionReason = {}));
var DailyModifierOdds = [
    { modifier: FightModifier.noThrows, odds: 1 },
    { modifier: FightModifier.focusOpponent, odds: 1 },
    { modifier: FightModifier.alwaysUseSupers, odds: 1 },
    { modifier: FightModifier.drawEveryWeapon, odds: 1 },
    { modifier: FightModifier.doubleAgility, odds: 1 },
    { modifier: FightModifier.randomSkill, odds: 1 },
    { modifier: FightModifier.randomWeapon, odds: 1 },
    { modifier: FightModifier.bareHandsFirstHit, odds: 1 },
    { modifier: FightModifier.startWithWeapon, odds: 1 },
];
var DailyModifierCountOdds = [
    { count: 1, odds: 50 },
    { count: 2, odds: 25 },
    { count: 3, odds: 15 },
    { count: 4, odds: 10 },
];
var DailyModifierSpawnChance = 4 / 30;
var BanReason;
(function (BanReason) {
    BanReason["INNAPROPRIATE_NAME"] = "innapropriateName";
    BanReason["INNAPROPRIATE_BRUTE_NAME"] = "innapropriateBruteName";
    BanReason["MULTIPLE_ACCOUNTS"] = "multipleAccounts";
})(BanReason || (/*exports.*/BanReason = BanReason = {}));
var FightLogTemplateCount = 48;
var ClanWarMaxParticipants = 7;
var ClanWarPointReward = 1000;
var EventPauseDuration = 3;
var EventFightsPerDay = 10;
var EventFreeResets = 3;
var BossName = /*exports.*//*$Enums.*/BossName = {
  GoldClaw: 'GoldClaw',
  EmberFang: 'EmberFang'
};
var availableBodyParts = {
    male: {
        p2: 7,
        p3: 11,
        p4: 4,
        p7: 6,
        p1: 1,
        p1a: 1,
        p1b: 1,
        p6: 1,
        p8: 4,
        p7b: 2,
        p5: 1,
    },
    female: {
        p2: 0,
        p3: 11,
        p4: 3,
        p7: 6,
        p1: 1,
        p1a: 1,
        p1b: 1,
        p6: 0,
        p8: 4,
        p7b: 2,
        p5: 1,
    },
};

var checkBodyPart = (value, expected) => value >= 0 && value <= expected;
var checkBody = (user, gender, bodyString) => {
    // Convert every char from hex to number
    var inputs = {
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
    };
    if (!checkBodyPart(inputs.p2, availableBodyParts[gender].p2)
        || !checkBodyPart(inputs.p3, availableBodyParts[gender].p3)
        || !checkBodyPart(inputs.p4, availableBodyParts[gender].p4)
        || !checkBodyPart(inputs.p7, availableBodyParts[gender].p7)
        || !checkBodyPart(inputs.p1, availableBodyParts[gender].p1)
        || !checkBodyPart(inputs.p1a, availableBodyParts[gender].p1a)
        || !checkBodyPart(inputs.p1b, availableBodyParts[gender].p1b)
        || !checkBodyPart(inputs.p6, availableBodyParts[gender].p6)
        || !checkBodyPart(inputs.p8, availableBodyParts[gender].p8)
        || !checkBodyPart(inputs.p7b, availableBodyParts[gender].p7b)
        || !checkBodyPart(inputs.p5, availableBodyParts[gender].p5)) {
        alert("L'utilisateur Ambryal a été pris la main dans le sac a modifier des fringues !!!");
    }
};
var isValid = (value, array) => value >= 0 && value < array.length;
var isValidWithSpecials = (value, array) => value >= 0 && (value < array.length || (value < 100 && value > (99 - colors.special.length)));
var checkColors = (user, gender, colorString, includeSpecials = false) => {
    // Split colors every 2 characters
    var inputs = {
        col0: +colorString.slice(0, 2),
        col0a: +colorString.slice(2, 4),
        col0c: +colorString.slice(4, 6),
        col1: +colorString.slice(6, 8),
        col1a: +colorString.slice(8, 10),
        col1b: +colorString.slice(10, 12),
        col1c: +colorString.slice(12, 14),
        col1d: +colorString.slice(14, 16),
        col2: +colorString.slice(16, 18),
        col2a: +colorString.slice(18, 20),
        col2b: +colorString.slice(20, 22),
        col3: +colorString.slice(22, 24),
        col3b: +colorString.slice(24, 26),
        col4: +colorString.slice(26, 28),
        col4a: +colorString.slice(28, 30),
        col4b: +colorString.slice(30, 32),
    };
    var check = includeSpecials ? isValidWithSpecials : isValid;
    if (!check(inputs.col0, colors[gender].skin)
        || !check(inputs.col0a, colors[gender].skin)
        || !check(inputs.col0c, colors[gender].skin)
        || !check(inputs.col1, colors[gender].hair)
        || !check(inputs.col1a, colors[gender].hair)
        || !check(inputs.col1b, colors[gender].hair)
        || !check(inputs.col1c, colors[gender].hair)
        || !check(inputs.col1d, colors[gender].hair)
        || !check(inputs.col3, colors[gender].clothing)
        || !check(inputs.col2, colors[gender].clothing)
        || !check(inputs.col2b, colors[gender].clothing)
        || !check(inputs.col3b, colors[gender].clothing)
        || !check(inputs.col2a, colors[gender].clothing)
        || !check(inputs.col4, colors[gender].clothing)
        || !check(inputs.col4a, colors[gender].clothing)
        || !check(inputs.col4b, colors[gender].clothing)) {
        alert("L'utilisateur Ambryal a été pris la main dans le sac a modifier des couleurs !!!");
    }
    // col0, col0a, col0c must be the same
    if (inputs.col0 !== inputs.col0a || inputs.col0 !== inputs.col0c) {
        alert("L'utilisateur Ambryal a été pris la main dans le sac a modifier des couleurs !!! (col0, col0a, col0c must be the same)");
    }
    // col1, col1a, col1b, col1c, col1d must be the same
    if (inputs.col1 !== inputs.col1a
        || inputs.col1 !== inputs.col1b
        || inputs.col1 !== inputs.col1c
        || inputs.col1 !== inputs.col1d) {
        alert("L'utilisateur Ambryal a été pris la main dans le sac a modifier des couleurs !!! (col1, col1a, col1b, col1c, col1d must be the same)");

    }
	console.log("couleurs conformes");
};
var colors = {
    male: {
        skin: [
            '#996600',
            '#eccd57',
            '#cb841b',
            '#d79b75',
            '#fbe6c8',
            '#f8d198',
        ],
        hair: [
            '#784129',
            '#fff9ae',
            '#b85f1d',
            '#4f677d',
            '#df7e37',
            '#fbcd15',
            '#ffaa1e',
            '#952f04',
            '#a2886f',
            '#fff2df',
        ],
        clothing: [
            '#7bad30',
            '#b78104',
            '#bb1111',
            '#559399',
            '#fae31f',
            '#784129',
            '#7a73c8',
            '#fff9ae',
            '#f0dc99',
            '#b6e7a9',
            '#d31818',
            '#b85f1d',
            '#97cbff',
            '#8ba3d7',
            '#df7e37',
            '#d5eaff',
            '#ffaa1e',
            '#cbff97',
            '#ffcc79',
            '#fff2df',
        ],
    },
    female: {
        skin: [
            '#996600',
            '#f8cdc2',
            '#cb841b',
            '#eaaca6',
            '#fbe6c8',
            '#f8d198',
        ],
        hair: [
            '#fff9ae',
            '#b85f1d',
            '#eea2c9',
            '#8e63ad',
            '#fbcd15',
            '#ffaa1e',
            '#952f04',
            '#a2886f',
            '#fff2df',
        ],
        clothing: [
            '#7bad30',
            '#b78104',
            '#bb1111',
            '#559399',
            '#fae31f',
            '#784129',
            '#7a73c8',
            '#fff9ae',
            '#f0dc99',
            '#b6e7a9',
            '#d31818',
            '#b85f1d',
            '#97cbff',
            '#8ba3d7',
            '#df7e37',
            '#d5eaff',
            '#ffaa1e',
            '#cbff97',
            '#ffcc79',
            '#fff2df',
        ],
    },
    special: [
        '#000000',
    ],
};
var getRandomBody = (gender) => (0, generateBodyString)({
    p2: (0, randomBetween)(0, availableBodyParts[gender].p2),
    p3: (0, randomBetween)(0, availableBodyParts[gender].p3),
    p4: (0, randomBetween)(0, availableBodyParts[gender].p4),
    p7: (0, randomBetween)(0, availableBodyParts[gender].p7),
    p1: (0, randomBetween)(0, availableBodyParts[gender].p1),
    p1a: (0, randomBetween)(0, availableBodyParts[gender].p1a),
    p1b: (0, randomBetween)(0, availableBodyParts[gender].p1b),
    p6: (0, randomBetween)(0, availableBodyParts[gender].p6),
    p8: (0, randomBetween)(0, availableBodyParts[gender].p8),
    p7b: (0, randomBetween)(0, availableBodyParts[gender].p7b),
    p5: (0, randomBetween)(0, availableBodyParts[gender].p5),
});
var getRandomColors = (gender) => {
    var col0 = (0, randomBetween)(0, colors[gender].skin.length - 1);
    var col0a = col0;
    var col0c = col0;
    var col1 = (0, randomBetween)(0, colors[gender].hair.length - 1);
    var col1a = col1;
    var col1b = col1;
    var col1c = col1;
    var col1d = col1;
    var col3 = (0, randomBetween)(0, colors[gender].clothing.length - 1);
    var col2 = (0, randomBetween)(0, colors[gender].clothing.length - 1);
    var col2b = (0, randomBetween)(0, colors[gender].clothing.length - 1);
    var col3b = (0, randomBetween)(0, colors[gender].clothing.length - 1);
    var col2a = (0, randomBetween)(0, colors[gender].clothing.length - 1);
    var col4 = (0, randomBetween)(0, colors[gender].clothing.length - 1);
    var col4a = (0, randomBetween)(0, colors[gender].clothing.length - 1);
    var col4b = (0, randomBetween)(0, colors[gender].clothing.length - 1);
    return (0, generateColorString)({
        col0,
        col0a,
        col0c,
        col1,
        col1a,
        col1b,
        col1c,
        col1d,
        col2,
        col2a,
        col2b,
        col3,
        col3b,
        col4,
        col4a,
        col4b,
    });
};

var bodyParts = {
					p1:{
						name :
						{
							male:"Armor",
							female:"Armor"
						},
						type : "clothing"
					},
					p1a:{
						name :
						{
							male:"Belt",
							female:"Belt"
						},
						type : "clothing"
					},
					p1b:{
						name :
						{
							male:"Roman Belt",
							female:"Roman Belt"
						},
						type : "clothing"
					},
					p2:{
						name :
						{
							male:"Size",
							female:"Size"
						},
						type : "skin"
					},
					p3:{
						name :
						{
							male:"Hair",
							female:"Hair"
						},
						type : "hair"
					},
					p4:{
						name :
						{
							male:"Beard",
							female:"Front Hair"
						},
						type : "hair"
					},
					p5:{
						name :
						{
							male:"Shirt",
							female:"Shirt"
						},
						type : "clothing"
					},
					p6:{
						name :
						{
							male:"Short",
							female:"Short"
						},
						type : "clothing"
					},
					p7:{
						name :
						{
							male:"Clothing",
							female:"Clothing"
						},
						type : "clothing"
					},
					p7b:{
						name :
						{
							male:"Shoes",
							female:"Shoes"
						},
						type : "clothing"
					},
					p8:{
						name :
						{
							male:"Nothing",
							female:"Nothing"
						},
						type : "clothing"
					},
					
}
var getTempWeapon = (brute, weaponIndex) => {return 0
};

var getTempSkill = (brute, skillIndex) => {return 0
};var DestinyChoiceType = /*exports.*//*$Enums.*/DestinyChoiceType = {
  skill: 'skill',
  weapon: 'weapon',
  pet: 'pet',
  stats: 'stats'
};
var BruteStat = /*exports.*//*$Enums.*/BruteStat = {
  endurance: 'endurance',
  strength: 'strength',
  agility: 'agility',
  speed: 'speed'
};
var getLevelUpChoices = (brute) => {
    let preventPerk = false;
    let perkType = null;
    let perkName = null;
    // First choice (Weapon/Skill/Pet)
    // (+1/+1 Stats if picked something already learned)
    let firstChoice = null;
    var bruteStats = Object.values(BruteStat);
    // Second choice (+2 Stat)
    let secondChoice = {
        type: 'stats',
        stat1: bruteStats[(0, randomBetween)(0, bruteStats.length - 1)],
        stat1Value: 2,
    };
    // Less likely to get a perk the more high level the brute is
    if (brute.level >= 80 && (0, randomBetween)(0, brute.level) >= 80) {
        preventPerk = true;
    }
    if (!preventPerk) {
        var perk = (0, getRandomBonus)(brute);
        if (perk) {
            perkType = perk.type;
            perkName = perk.name;
        }
        preventPerk = !perk;
    }
    // Chose +1/+1 stat instead
    if (preventPerk) {
        var { [(0, randomBetween)(0, bruteStats.length - 1)]: firstStat } = bruteStats;
        let { [(0, randomBetween)(0, bruteStats.length - 1)]: secondStat } = bruteStats;
        // Avoid duplicates
        while (secondStat === firstStat) {
            secondStat = bruteStats[(0, randomBetween)(0, bruteStats.length - 1)];
        }
        // Swap +1/+1 with +2
        firstChoice = secondChoice;
        secondChoice = {
            type: 'stats',
            stat1: firstStat,
            stat1Value: 1,
            stat2: secondStat,
            stat2Value: 1,
        };
    }
    else {
        if (!perkType || !perkName) {
            throw new Error('No perk type or name');
        }
        firstChoice = {
            type: perkType,
            skill: perkType === 'skill' ? perkName : undefined,
            pet: perkType === 'pet' ? perkName : undefined,
            weapon: perkType === 'weapon' ? perkName : undefined,
        };
    }
    return [firstChoice, secondChoice];
};
var createRandomBruteStats = (baseStats, perkType, perkName) => {
    let brute = {
        level: 1,
        xp: 0,
        hp: 0,
        enduranceStat: 0,
        enduranceModifier: 1,
        enduranceValue: 0,
        strengthStat: 0,
        strengthModifier: 1,
        strengthValue: 0,
        agilityStat: 0,
        agilityModifier: 1,
        agilityValue: 0,
        speedStat: 0,
        speedModifier: 1,
        speedValue: 0,
        skills: [],
        pets: [],
        ranking: BruteRankings[0],
        weapons: [],
    };
    let perk = null;
    // Predefined perk
    if (perkType && perkName) {
        perk = { type: perkType, name: perkName };
        if (perkType === DestinyChoiceType.pet) {
            brute.pets = [perkName];
        }
        else if (perkType === DestinyChoiceType.skill) {
            brute.skills = [perkName];
        }
        else {
            brute.weapons = [perkName];
        }
    }
    else {
        // Random perk
        perk = (0, getRandomBonus)(brute, true);
        if (!perk) {
            throw new Error('No bonus found');
        }
        // Pet
        brute.pets = perk.type === DestinyChoiceType.pet ? [perk.name] : [];
        // Skill
        brute.skills = perk.type === DestinyChoiceType.skill ? [perk.name] : [];
        // Weapon
        brute.weapons = perk.type === DestinyChoiceType.weapon ? [perk.name] : [];
    }
    // Stats boosters
    if (perk.type === 'skill') {
        var skill = brute.skills[0];
        if (!skill) {
            throw new Error('Skill not found');
        }
        brute = (0, applySkillModifiers)(brute, skill);
    }
    // Starting stats
    var startingStats = baseStats || (0, getRandomStartingStats)();
    brute.enduranceStat += startingStats.endurance;
    brute.strengthStat += startingStats.strength;
    brute.agilityStat += startingStats.agility;
    brute.speedStat += startingStats.speed;
    // Take into account the endurance malus from the pet
    if (perk.type === DestinyChoiceType.pet) {
        var pet = pets.find((p) => p.name === perk?.name);
        if (!pet) {
            throw new Error('Pet not found');
        }
        // Can go into negatives
        brute.enduranceStat -= pet.enduranceMalus;
    }
    // Final stat values
    brute.enduranceValue = Math.floor(brute.enduranceStat * brute.enduranceModifier);
    brute.strengthValue = Math.floor(brute.strengthStat * brute.strengthModifier);
    brute.agilityValue = Math.floor(brute.agilityStat * brute.agilityModifier);
    brute.speedValue = Math.floor(brute.speedStat * brute.speedModifier);
    // Final HP
    brute.hp = (0, getHP)(1, brute.enduranceValue);
    return brute;
};
var getRandomStartingStats = void 0;
var getRandomStartingStats = () => {
    // Starting budget
    let availablePoints = BRUTE_STARTING_POINTS;
    // Enrudance (2 to 5)
    var endurance = (0, randomBetween)(2, 5);
    availablePoints -= endurance;
    // Strength (2 to 5)
    var strength = Math.min((0, randomBetween)(2, 5), availablePoints - 2 * 2);
    availablePoints -= strength;
    // Agility (2 to 5)
    var agility = Math.min((0, randomBetween)(2, 5), availablePoints - 2 * 1);
    availablePoints -= agility;
    // Speed (2 to 5)
    var speed = availablePoints;
    return {
        endurance,
        strength,
        agility,
        speed,
    };
};
var getRandomStartingStats = getRandomStartingStats;
var updateStat = (brute, stat, value) => {
    switch (stat) {
        case 'endurance':
            return {
                ...brute,
                enduranceStat: brute.enduranceStat + value,
            };
        case 'strength':
            return {
                ...brute,
                strengthStat: brute.strengthStat + value,
            };
        case 'agility':
            return {
                ...brute,
                agilityStat: brute.agilityStat + value,
            };
        case 'speed':
            return {
                ...brute,
                speedStat: brute.speedStat + value,
            };
        default:
            throw new Error('Invalid stat');
    }
};
var updateBruteData = (brute, destinyChoice) => {
    let updatedBrute = {
        ...brute,
        pets: [...brute.pets],
        skills: [...brute.skills],
        weapons: [...brute.weapons],
        xp: 0,
        level: brute.level + 1,
    };
    // New skill
    if (destinyChoice.type === 'skill') {
        var skillName = destinyChoice.skill;
        if (!skillName) {
            throw new Error('No skill provided');
        }
        // Handle +2 fights for `regeneration`
        if (skillName === SkillName.regeneration) {
            updatedBrute.fightsLeft = (0, getFightsLeft)(updatedBrute, null) + 2;
        }
        updatedBrute.skills.push(skillName);
        // STATS MODIFIERS
        updatedBrute = (0, applySkillModifiers)(updatedBrute, skillName);
    }
    else if (destinyChoice.type === 'weapon') {
        // New weapon
        updatedBrute.weapons.push(destinyChoice.weapon);
    }
    else if (destinyChoice.type === 'pet') {
        // New pet
        var pet = pets.find((p) => p.name === destinyChoice.pet);
        if (!pet) {
            throw new Error('Pet not found');
        }
        updatedBrute.pets.push(destinyChoice.pet);
        // Take into account the endurance malus from the pet
        updatedBrute.enduranceStat -= pet.enduranceMalus;
    }
    else if (destinyChoice.stat1 && !destinyChoice.stat2) {
        // +X stat
        var stat = destinyChoice.stat1;
        updatedBrute = updateStat(updatedBrute, stat, destinyChoice.stat1Value);
    }
    else {
        // +X/+X
        if (!destinyChoice.stat1 || !destinyChoice.stat2
            || !destinyChoice.stat1Value || !destinyChoice.stat2Value) {
            throw new Error('No stats provided');
        }
        updatedBrute = updateStat(updatedBrute, destinyChoice.stat1, destinyChoice.stat1Value);
        updatedBrute = updateStat(updatedBrute, destinyChoice.stat2, destinyChoice.stat2Value);
    }
    // Final stat values
    updatedBrute.enduranceValue = Math.floor(updatedBrute.enduranceStat * updatedBrute.enduranceModifier);
    updatedBrute.strengthValue = Math.floor(updatedBrute.strengthStat * updatedBrute.strengthModifier);
    updatedBrute.agilityValue = Math.floor(updatedBrute.agilityStat * updatedBrute.agilityModifier);
    updatedBrute.speedValue = Math.floor(updatedBrute.speedStat * updatedBrute.speedModifier);
    // Final HP
    updatedBrute.hp = (0, getHP)(updatedBrute.level, updatedBrute.enduranceValue);
    return updatedBrute;
};
var isNameValid = void 0;
var isNameValid = (name) => {
    if (!name?.match(/^[a-zA-Z0-9_-]*$/) || name.length < 3 || name.length > 16) {
        return false;
    }
    return true;
};
var isNameValid = isNameValid;
function getFightsLeft(){}var preventSomeBonuses = (brute, perkType, perkName) => {
    let preventPerk = false;
    // Check if the perk should be prevented
    if (perkType === 'pet') {
        switch (perkName) {
            case 'dog1':
                preventPerk = brute.pets.includes('dog1');
                break;
            case 'dog2':
                preventPerk = !brute.pets.includes('dog1') || brute.pets.includes('dog2');
                break;
            case 'dog3':
                preventPerk = !brute.pets.includes('dog1') || !brute.pets.includes('dog2') || brute.pets.includes('dog3');
                break;
            case 'panther':
                // Allow for both panther and bear at a 1/1000 chance
                preventPerk = brute.pets.includes('panther')
                    || ((0, randomBetween)(1, 1000) > 1 ? brute.pets.includes('bear') : false);
                break;
            case 'bear':
                // Allow for both panther and bear at a 1/1000 chance
                preventPerk = brute.pets.includes('bear')
                    || ((0, randomBetween)(1, 1000) > 1 ? brute.pets.includes('panther') : false);
                break;
            default:
                break;
        }
    }
    else if (perkType === 'skill') {
        var selectedSkill = skills.find((skill) => skill.name === perkName);
        var hasSkill = brute.skills.includes(perkName);
        if (hasSkill) {
            preventPerk = true;
        }
        else if (selectedSkill?.type === 'booster') {
            // Decrease booster chances
            var boosters = skills.filter((skill) => skill.type === 'booster');
            var gottenBoosters = brute.skills.filter((skill) => boosters.find((booster) => booster.name === skill));
            switch (gottenBoosters.length) {
                case 0:
                    preventPerk = false;
                    break;
                case 1:
                    // 5% chance of getting a second booster
                    preventPerk = (0, randomBetween)(1, 100) < 95;
                    break;
                case 2:
                    // 2% chance of getting a third booster
                    preventPerk = (0, randomBetween)(1, 100) < 98;
                    break;
                case 3:
                    // 0.1% chance of getting a fourth booster
                    preventPerk = (0, randomBetween)(1, 1000) < 999;
                    break;
                case 4:
                    // 0.1% chance of getting a fifth booster
                    preventPerk = (0, randomBetween)(1, 1000) < 999;
                    break;
                case 5:
                    // 0.1% chance of getting a sixth booster
                    preventPerk = (0, randomBetween)(1, 1000) < 999;
                    break;
                default:
                    preventPerk = false;
                    break;
            }
        }
        else {
            preventPerk = false;
        }
    }
    else {
        // Limit some weapons
        var gottenLimitedWeapons = brute.weapons.filter((weapon) => limitedWeapons.includes(weapon));
        if (limitedWeapons.find((w) => w === perkName)
            && gottenLimitedWeapons.length >= MAX_LIMITED_WEAPONS) {
            preventPerk = true;
        }
        else {
            // Prevent unlocking a weapon if the brute already has it
            preventPerk = brute.weapons.includes(perkName);
        }
    }
    return preventPerk;
};
var getRandomBonus = (brute, rerollUntilFound = false, disabledSkills = [], disabledWeapons = [], disabledPets = []) => {
    var enabledSkills = skills.filter((skill) => !disabledSkills.includes(skill.name));
    var enabledWeapons = weapons.filter((weapon) => !disabledWeapons.includes(weapon.name));
    var enabledPets = pets.filter((pet) => !disabledPets.includes(pet.name));
    var enabledPerksOdds = [
        { name: 'pet', odds: enabledPets.reduce((acc, pet) => acc + pet.odds, 0) },
        { name: 'skill', odds: enabledSkills.reduce((acc, skill) => acc + skill.odds, 0) },
        { name: 'weapon', odds: enabledWeapons.reduce((acc, weapon) => acc + weapon.odds, 0) },
    ];
    let perkName = null;
    let perkType = null;
    // Weapon/Skill/Pet ?
    perkType = (0, weightedRandom)(enabledPerksOdds).name;
    // Perk name ?
    perkName = perkType === 'pet'
        ? (0, weightedRandom)(pets).name
        : perkType === 'skill'
            ? (0, weightedRandom)(skills).name
            : (0, weightedRandom)(weapons).name;
    // Prevent some perks
    let found = !preventSomeBonuses(brute, perkType, perkName);
    while (rerollUntilFound && !found) {
        // Reroll perk type
        perkType = (0, weightedRandom)(enabledPerksOdds).name;
        // Reroll perk name
        perkName = perkType === 'pet'
            ? (0, weightedRandom)(pets).name
            : perkType === 'skill'
                ? (0, weightedRandom)(skills).name
                : (0, weightedRandom)(weapons).name;
        // Prevent some perks
        found = !preventSomeBonuses(brute, perkType, perkName);
    }
    return found ? {
        type: perkType,
        name: perkName,
    } : null;
};
var shuffle = (array) => {
    var shuffledArray = [...array];
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var iItem = shuffledArray[i];
        var jItem = shuffledArray[j];
        if (typeof iItem === 'undefined' || typeof jItem === 'undefined') {
            throw new Error('Item not found while shuffling array');
        }
        shuffledArray[i] = jItem;
        shuffledArray[j] = iItem;
    }
    return shuffledArray;
};






//---------------------------------------------------


var img_mains = "data:image/jpg;base64,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CjTvESX1v4Z8UX+lQXk1iUedLe4eIOyiQgEhMkAkDNdX+2t/yeL8Vv8Aso2t/wDpdNXx+PjGjjJwgkknpofqWVVKmIy2lUqNuTim35n3T8FP+CBPw3+Jfwl8K/EnWv2jdegk8QeHLHUprW00OBViaeBJSgLO2QC2Mkdq/QH9k/8A5NZ+Gv8A2T/Rv/SGGvrqeW4HlT9mj80xOfZxHETiqzsm107+h8g6D/wby/sv2cofxD8afH18vdLeSxgB/wDJdzX39Wn9n4H/AJ9x+45nnucP/l/L7z4/8I/8ENf+Cf8A4anSfVvB/iLXihzt1bxPOqt9RbeUDX2BWkcHhI7U4/cv8jGWbZpPevP/AMCf+Z8TfHL/AIIL/sQfEyznvPhppWqeBdYZc291p99JfWwcdC8F075HtG8Z96+2ac8Lh6kbSgvuCjmuZUJXhVl99/wd0fz/APjfwr+1f/wSt/agbTLDxJNoniDTwlxY6pp7M1jrliWO1ijYE0LFWVo3GVZWHDKGr7p/4OJvB/hy4+Dnw78fyQxLq9p4ouNOhk2je9tNavK656kB7eM+2T6189mOCeWxWIw0nFXs1f7vVd07n22R5ss8csJjaak0rp2Wq0Tv2eujVj7C/Yt/ai8Pfth/s7aD8b9DtFs7i9ja31rTVYt9ivojtmiBPJXOGUnko6E4JxXyV/wbut4jP7Pfj5bzzP7KHjSP7Du+75/2OLzsf8B8jNezluKqYzCKpNa3afna2v4/efK8Q5bRyzMPZ0n7rSaXa99Pw0P0KorvPDCigAooAKKACigAooAKKACigAooAKKACigAooAKKACigCn4g0HR/FWg33hfxFp8d3p+pWclrfWsv3ZoZEKOh9ipIP1q5QG2qPhX9j//AIIy3P7Jf7WNr8fNE/aGnvND0n7UumaKmjiO5uIponi8m5lMjKyqHySqAsyKRs6V91Vy0cFhaFR1KcbN+v5bfgenic4zLGYdUK1Tmj5pdPO1/wAQorqPMCigAooAKKAPgL9pL/ghN4Q+O37SGrfGfQ/jrdaBo/iTVW1HXNE/sNZ5knkbdObebzVVQ7FmG9G2Fj94YUfftclTA4OtU9pOCb/rdbP5nq0M7zXDUPY06rUe2mno2rr5Mz/CfhjRvBPhbTfBnhy18jT9I0+GysId2fLhiQIi574VQK0K6zym29WFFABRQAUUAfL3/BSv/gnXq37fekeFoNI+MsnhibwzPcstrcaX9qtbkT+WGcqroyyKI8KdxGGYYGc19Q1jXw9HFRUasbpev6HbgswxmXzcsPLlb0eif5pnmH7Hv7LXgz9jn4D6T8DvBeoS3yWTyXGo6tcRCOS/u5W3STMoJCjoqrk7URRk4yfT60p04UoKEFZLoYYjEVsVWdWrJyk92woqjEKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooA//2Q=="
var img_lapin = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAXgBeAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAW8cAAAD6AABbxwAAAPocGFpbnQubmV0IDUuMC42AP/bAEMAAgEBAQEBAgEBAQICAgICBAMCAgICBQQEAwQGBQYGBgUGBgYHCQgGBwkHBgYICwgJCgoKCgoGCAsMCwoMCQoKCv/bAEMBAgICAgICBQMDBQoHBgcKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCv/AABEIAPUA1AMBEgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP3Ior8PPcCigAooAKKACigAooAKKACigAooAKKACigAr8/f+CnP/BdDwN+yT4vuv2Zf2XPC9r8Rvi8qbdQtWuCNK8NE/wAV7KhBaQZyYFII/iZSQrdFPD1qkea1l3ei+9npZfk+Z5pUVPDUpTb7Jn6BV/N78WPjl+2R+1DqUmu/tT/tYeLta89y/wDwjPh3VpNJ0a2B/gS3tim/HTc3JHXmpksLHepf0Tf52P0TL/B/izGRUqkY0/8AE/0V3+B/SBHPDKf3Uqt67Wziv5m/DPhm38FXC33gvXvEGjXS8reaT4mvracH18yOYNn3zWPtMP3f3L/M9j/iB+fct1iIX+Z/TNX4U/s8/wDBWv8A4KB/svahCtz8RP8AhbvhaNh9o8L+PZwNRWPuLbU1XzN+OguBKp9R1rSMKcvhmvnp+en4nzOZ+FfF2WxcvZKaXWLv+Gj/AAP3Wrwf9hb/AIKKfs5/t/8Agm41/wCD+tXFjr2kBF8UeCdcQQarosp7SxZO6Mn7syFo3HQ5yAVKVSn8SsfAYjCYrB1HTrwcWujVj3iiszmCigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACmXNzb2dvJd3c6RQxIXkkkYKqKBkkk9ABQA+vB/+Ccv7Zui/t2/s5yfG7R5LdvJ8Xa1pEn2VSqmO2vZVtnwSSN9qbaTrz5mehrSpSqUZcs1Z/5mlajUw8uWas9H957xRWZmFFABVHxN4j0bwf4c1Dxb4ivltdP0uxlvL65k+7FDGhd3PsFUn8KPi0CN5aI+C/8Aguz/AMFR/EX7Gnw40v8AZp/Zv1Rf+FxfEiF49LnjILeH9OJKSagf7shw6xEjgpI/PlgN+R+s/GvxP+2x+1F8Qv25vHjStJ4o1qa08K2szEjT9KhOyKJfTCKiHHVkc9WNehUjRy+KdRc1R7LovXufsXAPhvUz2X1nFaUk9fN9l3fd7L1Ifhn8NdO+HGivbLdyX2p3spuNa1i6YtPf3DHLSOxyTyTgEnrk5JJO9qWp6do9lJqOq6hDa28QzJPcShEX6kkAV5VSticVO8m2/wCtkf0tgMuyfIcPyUIxppbvRN+re/zJq831L9qn4SQ6r/YHhi71DxFqH8Nn4f097h3/AN3AAb8Ca2hl2OnqqcvuOevxVw7h9KmJj8mn+Vz0iuJ03xv+0H4kBfwf+xZ8SLqPOFkvNFktwf8AvtP61p/ZGYfy/iv8zz5cecKx/wCYhfc/8jtq5OW6/bBgTfN+wn422+q4Y/kEqv7JzD+Vfev8yP8AX/hP/n/+Ev8AI6jw/wCIfib8IviVpP7QX7PXi9/DfxA8ONu0nVY8+VdxZy9ldp0mtpB8rI2cZyMEVyp8T/tF2vz6t+xN8S40Vdztb6K8pH4BRmt6WDzShpFadU2mn8rnhZxm3h7xBRdLGTjK/XlakvR2/PQ/f3/gmt/wUC8Cf8FD/wBnuH4naNpy6L4o0e4/s3x54Rkm3S6NqSj5k9WhfBeKT+JePvKwH4UfsSf8FGU/YF/br8L/ABp1LQPE3hnR/FBTQ/ih4Z8RaLNZvdaaWGy/VWwHktmO8EZYqCvAY10VMurVKbnGDi1uunyf6H898T8LYLL6zqZZXjVpvZJ+8vJre/5/gf0uVDp2oWGr6fBq2mXkdxa3UKy29xCwZJY2GVZSOCCCCD3FeSfBk1FABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABXxX8B/219J8Zf8ABbT41/sjW/iya4tdL+GehTWVlJeM0EN/aO73YiTO1XKajCHwASYOc4GOiWHqRw6qvZto6pYWpDCxrvZtr+vX9DT/AOCzeqftQD9mdvCvwc0+5sfh9qyTRfGzxtoMiza3oHhvCi6ewtmK+azRGXzJFLvFGrMsUjYA+sfF2gw+KvCmqeGLqKOSLUtPmtZEkGVZZIyhB9sHmueXNUpSgpODkmuaNuaF+seZSSl2bTtvuaZdjI4HFRqypxnbpK9vwa/re6Phj9gzx5f6R+1zrXw2/Y6+EV1q/wAH7PSbPR/iD4iW6htdH0TWrO1VbZdPLfPfTm1MUN0qLsUJa4kV0kRvo/8A4J6fsk6Z+w1+xv4F/ZgsprO4uPDOk7dWvLGMrFdX0sjTXEq5AJBlkfBIB2gZx0rx+H8ijw3gJYX6zUxLlJylOq7+823JxTu4qTblK8pNybk3dnqcQZth8yxFqVKMYx0T3lbS12rJpJWWiSSske0UV7B86Ffnf/wWF/4K1+P/ANmvxxafse/shz6evxGvdMXUfFPijULQXNv4UsX/ANVtiPyy3cv3kR8qqYYq24EbRoylT53pHu/6u/ke5kvDucZ/iPZYKk5P8F6s1v8Ag4J/4KD/AA9/ZO/Y18SfAcPqF142+KXhW/0/R7XTVU/YbJgsNxe3DFh5cWJfLXGWZ2wBhWI/DP8Aby+NXxl+KPi/Xtc/aI+M2seNNauPCml22k6t4g8lZPs638ss0MSwoiKisQ20Ln5u/FetluFo1JxqJ82r2vpZX9deh9ZLgnFZDWn/AGg0qkFGUYp3T5nbfq11tsa2k+Prj4a+DPCPwV+GvhabxJ411TTrePTtCsULMZZE3l5MdASWbGRwCSVUFh7r/wAE7/2f/Ff7K3xs8I+I/jjZwza98XvCN81lLeQ5uNFurZo5ls9553zWrF3UY2m228hc11Sy/D80q9X35X2vZLt6n2VTjvMcPgKeAy9KlCKtdK8m+rvayv5a+ZB8FP2BPhJ4m+IsOjft1/tCaTr3jzy47iL4W6f4gS2hsUf5kDKrLJMcf3NqkHBL/ePE/wDBV/xJ8N7H9vHR9P8AjZ4QvtS8Of8ACAWcfnaLefZ7/T3ku7km9tm+5JKhQYjlBRgCuUJEi91OKVG8Vy6/ZS8vR/ifJYrHY/FydSvUlJ+bbf4s/Rb4ffCX4XfCTSE0H4Y/DvRfD9nH9230nTY4B9TtAJPqTkmvlH/glB+2pqnxgj1r9m/4g+M5te1TwurT+F/EV9GY7jV9KWTy8yhiT5seUySSxWRQxZlZjz1qdWPvN3Xc5j7QOW+8xNFc4BjnOaKAAcdKKAOD/ab+G3ww+KnwO8TeHfi7pVrcaQuiXU011cQq72WyJmFxGTykiEbgwwQRWN+3PLcRfsZ/FSS2ZlceA9Txt6j/AEd8/pW2H5nWik7XYHv3/Btx/wAFAdE/ao/Yk0v9nzxh4iZviB8K7CPT761umxNd6TnFndLk5ZVQrAx/hMak/fUn8iP2CfjZ4/1T9svWPjJ+yi8mj+OvDfgrTb7wXZ3DBbfVI9NtbWzvdKukVgHju4u+cq6q+Qy5rHGZbHEXqw91t7dPL0v9x4mOyuOIftafuyd9Oj/yb/ruf1HV4r+wP+3P8I/+CgP7P2n/ABu+F00lpcq5s/FHhm+bF7oGpoP31nOpwQyn7rEDeuDgcgeBWo1KEuWasz5qpRqUZcslZntVFZGYUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAfN//BS7/gpH8Kv+CdPwUPivX4W1zxxr26z+HvgOwDSXuu6gxCRosaZfyg7JvYDuFXLsqnnf28f+CVHw5/av+Idr+1d8PfGeseDfjh4V0cQ+BPGFveGezt5Y/NMcNxZzBonhczSJJtVXKuSGyBWsbKjJws6tvdU24wv05pRUpJd7Rb6ea9HLv7NdWLxfNbsrfm3/AMNvrsfIPwC/Z1+Nf7IvwP8ABv7bHjXR7zXvjJpfxDvPiH8WrPT4jNeana6qjW+radGoZ97wWToyRRHbJPYoFHzUnhX9rv8Aac/4KI+J/A/7H37IWuWHgPxzPoMmqfHrxkbdb0+Alt5jbTWNvGw2PeS3CSKgk5WPa2Bv8xPxbJ8N4tYrjfEZliKcKaivZVI1G1QcUk4wppOU7a+0jKCdpNubanNS/ScdUyWOUww+JbVB2lFK3Nu/eWiTlq4vm6e6rcseX9Wfh/4/8FfFXwTpPxJ+HHiiz1rQdcsIr3SdW0+YSQ3dvIoZJEYdQQfw7815R+wp+wh8M/2BPhhd/Db4a+N/GGv/ANrag2o6vqPi3XnumnvHLNLNHCNsNt5juzMIkXcTltxANftFSNNSXJ8+1/J2V/Wy9EfluIjh4VGqMnKPS6s7eau7el/me318z/tO/twp8D/27PgP+y9ZXEklt4/k1RvFSw2YkWwgMIi06WV8HyRNffuUOQHbK8nAojSlKDn209Xa9l30TfomwpYWtWozqxjpBXl5K6V382l6tHrf7T37R3ww/ZJ+A3ib9ob4waylloPhjTXurglgHuJOkdvGP4pZJCsaL3ZhXzJ/wVF/4JefF/8A4Kb/ABb+H/hDxd+0DD4b+CHhpXvvEvhnS7d/7T1XUt5AYOR5QUQnYrtkxlpCEcsNu2Gp4eXvVZWS6dWaYWnhZe9XlZLot2fjH8NPH/xt/bP+L3iz4o+BPhD4q+JXxF8f69LrfiKz8H6S9zDpaSEi2tZLhtsUMcMQWMBm+XGK/ou+FPwd/Zx/Yd+A7eEPhh4T0fwT4H8K6bLd3jQpsjihiQvLczyHLSvtUs8jlmOMkmtcRWw9aorQbtolfT7l/mfe5X4jZhkOFWFyujGC6yavJvzvdeiR/P8A+OP2Gv2hvCH7ZfwL8BftQeEtC0LVNQvLjxM3gux1BL++03S7PDrPezx/ulEs6LGsKFhlGLHOBX0J+zx8TtT/AG6P2u/ix/wUl122mTSfEGof8Iv8MYbqPa1voVm2C4H8PmOqll7SLJ1zXsYWn9TwzXKoyl0XRed7u7N8VneeZ3apmNTml0VklFdtOr6+RP8At9yS+GfD3w5+MNo/lzeD/izok7Sbf+Xe7lNhOv0Md0fxA+lVv+CpUj2/7FHiW+hOJbbVtFmhb+666rakEe9b4WX7xxezTX+X4nnzjzbbrXY53/gpf/wT/wBU/bB0LSfFvwz1Kxs/GPh1ZILddSYxwahZuwZoXdVYoysNyNgjllON25fqO2YtbxsW5KAt+VZ0q06eiNPM/PX9hT/gmN+1N+zh8fvCvxw8X614dht7S+urXWtHsdRaWX7DLaSr5m/YFY+d5Q8sZOBu3DGK/Q2rliZypuNlqT7ztr+X+QUVzFBRQAUUAZPj7wdpXxF8Daz8P9d3fYdc0u4sLzZjcI5Y2jYjPGcNx71qhlYkKwO3hsHpTV46oD4u0D9i74W/sUftf/BHW/gta6ksHiJta0LxFcalqElw91J/ZzXEUmCdseTbyEqgA59hX1V8T/hPoPxSh0q51C+vLDVPD+oNqHh3WNPm2y6feGCWDzgpykg8uaRTG4ZGDcjpjpjiOanKE3vt6/1cmXNdWPE/G3xO+In/AASj/aztf+Cg3wX0ue9+H/iq8g0744eD7aTEdxGzBY9QjX7qygnhuMSYB+WaQ16V4E1y2+OPgzxR8F/jXoFjNrGl7tH8ZaXHCwtb2GaLdHdQq+T5E8Tb1GW8tw8ZZmjJqGoyioVlePT/AID/AEMa1CjiY8k1f+unY/Wz4XfEzwP8Zvh1ofxY+GfiG31bw/4i0uHUNH1K1bKXFvKgZGHocHkHkHIOCCK/L/8A4N//AI8+KP2b/jN46/4JI/F/xBNdRaD5niX4R6heyfNeaVK26aAcYypPmbR/GLk4AArxMZgZYW04axez/R+Z8rjsvng5cy1i+vbyZ+r1FeeeaFFABRQAUUAFFABRQAUUAFFABRQAUUAFFAHxz/wS8/Yu1j9nH42/tN/G3xZ4NfSbr4lfGzULjQxPGA8+jwuzwzj/AGJJbi4YeoCn0r7GratiKlaMYy2irI6K2KqYiMIy2irIhv8A7d9hm/swRfafKb7P9oz5fmY+XdjnbnGcc4qasTnPyD8VRfEL4W/Ev4kfDb9sLRLzxt+1N8Wtc02Lwjp/gu/jW3vrCJ5JNIn0Zp1UWNnp7xTTTyzqXimhkkbzA8W77q/at8Mfs3/AL9oPR/8Agpv+0p8UdN8O6V8O/h/qXh+1+3w/M015cRSb4yCXll2RyxJCilm85sV4uZcL4HPM6w2Z1qlXnw6tCnCbVNu696y1i2lafI486Ub7Pm+uy7iOvh8rnhadOLk3ZWjvFqz5ktJWu7c1/iktU1b2D9nxvjw/wZ8Pf8NN23huPx4unIviX/hEbiaTT2uBwWhMyI4B4JUjAJIBIAJ/K/4tf8Fif29v23v7Qvf2JPD1p8EfhDaRyySfFbxpp6XOrahbIpLT2ts+Y0XaM5+YY5EuQVH1v9m4qpLmklG/T/gK7PHhlOMrS5mlH+u2rPXP+DiX9q7xBZ/Crwx/wTe+CF+rePPjlfJa6i0Zy2m6Cj5nmcdhIUZfeOG4HXFfB/8AwTF8MfEX9oL4i+LP2+fjt8RvEXjTUNQuJtB8D654suTLeS6dFIRJOcnCbiFjCAAIUlA4avSo4CGXy56nvT6dl5nsYHK4YaXPN3l07L/g/kfWnwl+GXhf4M/DPQ/hT4LtfJ0vQdNis7Vf4mCLgu3qzHLE9yxNdFTlKUpXZ6x89/8ABS94tS/Z40zwGz/vPFPxE8N6VDH/AM9C+pwuR7/LGx/Ck/aOYfEv9sv4J/Be3Ec0Og3Go+N9ajY8xx20P2W1yP8AamuCR/uGujDfu4yqvorL1f8AVzOp71orqfQuwR/ulHC8CiuU0CigCHUbC11bT7jSr+MvBdQtFMoYruRgQRkYI4PUcipqAPnmDx/8R/2KZm0D403WreKfharY0fx/sa6vvDsfa21RRmSaFeAl4oYgf67BBkb6FeKOdTDPEro42ujrkMp6gjuK6PbRl8av5rR/18jONP2atH8df6/I8M8R/tt+BvHs6/Dr9kPVdN+InjLUIc2/9lzmTS9HjPH2zULhfljiXqI1JlkI2qvVlr/8E8PC+leH/g/4mvtO0K1s2v8A4peKGZrW1SPzI49WuIowdoHCqm1R0AGBgVVaNGjZJXdk9X3V9iacpVFfbp93zPTPgj8I7X4O+Cv7Cm1241rWL+6fUPEniC8X9/quoSAebcMBwo+VURB8scaIi4CgV2Fc8pSk7s2tbYKKkDxXVNQPh3/goXo+n6cqr/wlXwlvjq23/lobDUIDbE/7ovLgf8D9q+c/jf8AEnW/En7Q2vftweD9VuP7B+E+raf4f0eSGZhBqdml0V1yXHAkjCzsinkb7XI6Cu6NPmw/I/ibuvS369DLX2nOttv69DsP29PEHirwTqfhf9uP4beJdS8M+I/hD8RG0bVtW8PugvodHuSkbkCRXRnIlRlV1KlLg5BBIPrH7XXwL8B/GfwJ4k8KWuralp3iDxF4MvmhOmXbRxalFbrGyC4j5jlCySQhWI8wBiFYDIqKcqb92S0ej9ejHKMZXUtU/wAv+B0P1B/YM+OnjH43/CHVIfiJ4i0/XNe8H+Kbrw/qHibSbcQ22upHHDcW1+kQJELTWtzbu8YJCSmRRwAK+Sv+DbH9qDRPiF+xd4f+ANx8MrTw/qmj6G+s2upafeGaPxDbvfT2013LuG6O6WeHbIhLDa8LIdp2J89jsPLD1rW8vn8tj4/MsNLD1tFptfSzfottOnzP0iorhPPCigAooAKKACigAooAKKACigAooAKKACsL4nfE3wJ8Gvh5rXxW+J/ia10bw/4f02W+1jVLyTbHbwRruZj68cADJJIABJAqoxlOVkVGMpSsldnI/tcftafBX9iX4Fa1+0H8evFC6boejxYSNMNcX9wwPlWtumR5k0hGFUe7EhVYj8pL/wCIfjr/AIKl/Hyz/bV+N+lXNj8N/DtxJ/wov4e3y4jjh3Y/ty7j6Pcy4DRg5CLtIzhWr1qGW8vvV3byW/z7fme5g8llL3qzt5Lf5vp+Jj694Y+OH/BTP4s237V37fmkvY+G7ORpPhn8E5JC1no1q3K3F+pwJrpxgsrD/eAAWKP37Nd0ZRpx5aaUV5fq9z6Cjh6OHj+7jY+Wf+CsHxG1vwz+znpvwD+HbLFr3xS1+18MaXDHhQlvI6+aMAcIRsiOBwJa5/4nyL8bP+CwvgXwFM6yaf8AC/wTca3JH1xdzcYP08y1Yf7orsw8VTpuvL5epsfUXwf+Gfh/4MfC3w/8J/C8Oyx8P6TDY2/q+xQC59SzZYnuWNdFNPDbQNc3EqxxxqWkkY4CqBkk+gArjlKUpXfUBzsqKZHYKqjLM3QD1rwX9sX4o6x4j0Dw/wDsz/BrWCvir4rK1vbahb7s6Vom0Ne6kSMFNsJKRnjMki46GtKdGVS72S3fYlyirHH/ALDPxa+HP7Rv7Svxg+O2l+M7G81JtQtvD3h/SRMvnQaHZqStyq9SlxO8sm4ZGFUHByK+Zfh18E/h78Jf2rtN+F+u2Wk3Ol6f4mm8H2Pkh9I1uKN1WRNT+128yMtyAm7cNqtDK2MF9tddf6rKMaVOb0V2rP779X8zangcd9UnjJwSp83KndNy6bbpX7p97n6iV43dfsianeP9lk/ay+Ly6aRt/suPxRAo2/3fPFv9o6d/M3d85ri5Y9zLU9iM8In+ymZPOK7hFuG4r6464rxXxd+wh8HtU8LW1r4Ev9a8L+KNMuPtWj/ECz1ae51iC47+bc3Du9zE3R4ZS0bLwAMAhxjRel/w/wCCL3rHoHxu8BeN/iR8Obzwv8OPitqHgnXGZJdN8QabbxzNBIjZCvHICskbdGXgkHgg14nZfHr9tv8AZ7Y6J+0P+zxN8RtJtwRF44+F6q88qA4DT6dIQ6vjlvLJGegNaxpVIyvFp/d+T/yJ5oy0d/69C/4P8A/8FPLFxoHir9oP4XTWS4X+3v8AhDrmW+ZR/F5SyxQhz75APYitfTf+ChnwD1ArBN4b+I9reMvzafN8LdYMyn0wlswP4Eiq5cR/J/5KLmpv7X4mf4b+Df7X37O8c3hf4GeMvCPjTw1dXVxem38ftLp99aXlxK89y4nsYWjmjknkkkCGJSm8qGKgAR+Ef2tPFf7WOr678P8A9ljRZ9CXQbxbPxN4w8ZWJgl0xm3ZS209v3stwApH77yo0JBIfBjJ+83qJfP+rlfavqdxoXxUv/hX4ev9c/au+Nnw+0+YTbo4dNk+xW9hGB/q2e4nZ53z/Ftj7AJ62f2DvgR+yb+y9+2/pPgj4u/BLwv4q0n4tfu/D/jbxtotvqWpad4uhVpGja6nVmC38W91UYVZ7faoHmgVzYiUadNTSbS3tZW/ruc2KxUsJT5+VyXrt/X/AA54t+1H+0h8V/iP8HrPxP8ABPwX4m0P4S654qsvDXiD40T2LWan7YzRhNLSYK8obBRrwL5ce4bdzEEfsl+3B+yZ4O/bR/ZI8afss+I/Js7XxJobW+m3Sx8WF3GRJazqAOPLmSNsDqAR3rjo5lT9slKNl3vdrz7fgeXRzzmxC542j99v+AfjD8e/h74b8LfsceM/ht4P0eKz02w8A6hbafZw8iNUtX2j3ORkk8k8ms/w94k8ceIv2fvHXwo+LujyWPxA8D6fqfhrxtpcq/Ol9BbuglHA3JKm2RWHynccE4r0Yc0a0Z3vqmn38z6LmhUo3WqaPoy+8OQ+LfA3hHWLTxeNF1qOxhXR9SaFJRK81sPMt3iYgTRuq5ZMg/uwwKlQRl6ToWueN/gP8PPGHgaW1m1fQ7DS9Y0mHUJWjt7tvsXlPC7qCUDwzSKHw2xirFWAKmdqklf+rmSXuo3v+DWI/CHQvDXxY8B3epXknxG0fxVdWKw3W9bZdCgn4FkD8qqLuWVpVUlgZIN3BQmp/wAG0Hwb+JXjHUfGX7TGrWdjpvhTSfHXiyz0uFbzzby+v9Ql0151cAbVggSzjAIJ8x5icAR88OdcvtFrrZafLV/1ufO53y3jd62Wl/xt939I/X+ivDPACigAooAKKACigAooAKKACigAooAK+S/+CzP7fkv7AX7G+peKvBUnnfELxhcf8I/8O9PjXdK+oTjb56r/ABCFTvHYv5an79b4bD1MVU5IL/gep0YfD1sVU5IL/Jep8g/8FRf2jrz/AIKN/ten/gn38N9Xkb4Q/Cu+h1D4yanZt+713V0bMGjbv4o42B8wDPzLIDgpGx5f9in9nNf2ZvgNpvgvVrj7X4k1GRtU8Yam775LzU5/mlZnPLheI1J5KoCeSa96jRo4ONqesusv8ux9bg8vo4SOmr7/ANbI9WtLW2sbWOysraOGGGNY4YYlCqigYCgDoAOAKkpHeFFAHxr+xVLF41/4KW/tJePmO9tOk0/SreQ87VG6NlHoP9EFV/8Agn7eXHhv44/tVeK101rq7s/HE8q28Qy84ja8kWMe56D613V/93pwROmnp+v/AAD6K+OXx7+HPws0TxQfiTIkOh6H4UF/r1w821njuXlggt4lx+8klaKVRyMHYACW4+Z7fUNO/wCChX7Wnh8DXpk8GfD/AEljD4k8OtD5WveIIvstwxCS+YsltbmQFCyMBISM/PzMaMaceappr/XoHMdV+wx8B/iN4t1ix/aw+MWo2j65fSbLWG4hk/tDSrG2gmsodJcMqpEELySzFADJKRkALk/UXg7wjpHgbw/D4b0QTGGOSSV5biYySzSySNJLK7HlneR2Zj3LHp0rOtiJVNFsKMbbnjPxv+I/ws/ZT+IHi74sfEj9izwz8XdQ+KXhe28I+ELzxBew7dGuoob2WSGWGaJgLeRSJWmiIk/c7OMqR2f7Wfwjg+NPwC8ReEoPDy6lq8OnzXvhmP7S8DxapFGzW0iSoQyHfgcHBDFTlSRWP8SKj1W2rsn52aKp0MHUxMJ4pSlBPVRdn8t1f1RkfsK/EC38ffsxeGbaSbUW1Lw3ZJoWvLqzh7gXtqixyMzBm3q/yyK2SWR1J5zXx/8AsyftN6d+y98TZtLZPiBeeF7PSbiT4m2+s2Ukcljqb/Z3jvDBdmNkYRidpEt15RkwjfLXpY7L5YWNOU6kZSn0jK+v9dNTmy7GSzuviJYPC1YUqT3qQauu9+q87Lofo9TYJ4rmCO5t5A0ciK8bL0ZSMg/iK8s6h1FABvcDIkb86Kd2B8a/s6X1p4P/AOClvjrwdolvNa2Wqf2xuWchoJJFezuitu2fM3+bc3Ekgk+UFiIztFeU658aPGGkf8FHPiBr/wCzT4Ssde1W1nl0rWNY1KXdDphnitU86UBwsscf2KTZHGVdmXY7rkZ9/DZZjsyw0aeGp8z8lqvWW3oumx5uJzDB4OpevNq2ivNONu0Yr3k9rvZ7rQ+4/wBpjwVpHjz4Maxo+peMLfw7c26Jf6H4juLpYf7J1K2cT2l2rsQFaOZEbr0BHQ18ZXH7MuofFfW4/HH7XXxS1X4lawsnmw6feObbRrFstgQWUZ2cBtpaQsWABIBr6PBeHubS96rOMP8AyZ/hp+J4GI4wwEdKcHL8P6+4/SD4Uf8ABzn/AME91+AfgvVvjJ421e4+JF/osa+JvCPg/wAM3F/JBqEY2TiN1UQsjOpdNrt8jpnvXxP4U8H+EfAulx6F4J8Lado9nFxHa6XYxwRrzk4VAACSc13w8K8tdRyqV5O/RJK3zbeh8zWzylKTlCja/TmuvyT/ABHft+f8FAv2bf2h/wBo7Tf2tP2df2fvip4ffULD+wfi83ibwtDa2uraXt229+iLO0rXNszbSRGd0JwSNgzcuYIL+0ksr2FZoZo2SaKVdyyIwwVIPUEHBFd1Pw3y+jTcKdaXldJ2ffodeF4sxGFioxpq3q/w7Ho37NPxG0XQv2APDXj6TXIbu18PfD3FxqEcm5JPsUDRM4J7Ewk18T+MvjDc/s+/sbfE3/gn/wCHZV/t268RWtj8OLaSYB77R9ZnLlFLuS7ROtxCznHLIcc5r4XHcO47C5zHByWsmrNbO/a9vT10PtMLnWFxGXvFp/Duuqt0f+ex+tX/AAbT/E/9n+x/4JxeE/hdonxz8K6l46vdU1PVvE3hu21uA6hbXE90+Fkg3CQHykiP3cc1+Z97+xJ+z5feH9M09fB/9m6tpdrGlv4o0G4ay1ETrGENy00f+slyN26XfluSCea97MPC/FYqp7WGIjzO17p289r7dNNfLY+LxPEGExmIc5wlH7ntt2P6TK/CX9nz/go5/wAFNP8Agn88Fv8A8JlcftDfDWzA+0eGfFtxs8S2NuoUf6LegE3LBdxCuGJ4VUyc18fjvDziTB6xpe0X913f3blU8Xgq3w1EvX3f+B+J+7VeBfsF/wDBSj9lf/gor4Cm8V/AHxmf7W0v5PE3g7V1+z6tok+dpjuIMk43DaHUlD0znIHx+Iw2Jw0uWtBx9TodOUVrsdL+3R+0Av7Lf7IPxE+O8N95N9oHhe6k0MeSJGm1N08qyhRDnzHe5eFAmDuLAd6+W/8AgqnoPxYt/wBo34b/ABZ/aQ8Q6Vb/ALL/AIR1SC+uoLC8EUlt4nXcbG/1rzlAbT4pPli8lsrcvC0gK5K+VmuYf2LldTH+wnX5NqdNXk3bRvflgn8ckpOK15Xax7GRZZDMsXGM6kVrs3q9tEur7K6vsfYH7Lfxhj/aB/Zx8D/GpY2jl8TeF7O+vLeSMo9vcvEvnwspAKvHLvRlIBDKQQMV8/8A/BK3Xfjl4s0fxJ49tfhtH4f+B/iu+l174Xxa9fMutSNdSmW5uBarHtt7C6dmuoY5ZPPUzsWVVkVIrwGKrZhl9PFVaEqEpLWlNrni9Lp21tfbmUZNauMW7GOcYCngMZKFOpGcbv4dbfpe2/K5Lomz68orqPLCigAooAKKACvnz/gqf+1gn7FX7BXxG+PltfrBq1jobWXhss3J1K6IgtyPXY8gkP8AsxtWlGlOtUUI7s2w9GpiKqpw3Z+X37SXxfb/AIKWf8FldY1+2uftnwz/AGcYW0zQY926C71jeyyTjghiZkkbIP3bS3PeqP8AwSo+Ckvwi/ZF0fXtZjk/trxtM3iHVpZmJkbzwPIDbuciARk/7TMe9fT+zp4On7Gnv1fc+0wuFp4WnyQ+b7v+tj6SorA6gooAKKAPz28WfE3xd+zp8bP2mvh98ObXb4y8eeJvD9p4Bh3APLdanDKGnUYPEQ8yQnGAVGa+p/EH7H3g7xH+2fov7YOoXiPeaN4Vk0yHTWgzm63t5d2GzgFYpJo8YydynI2890K1P2MXLVx0S6epPKzW/Zb/AGW/hl+yz8MtN8D+CPDtjHqEOnQw61rkdqq3GpzgZeWV8bmy+SBnAGAOlemVyyqSqSvJlBRWYBRQB8s/tw/sP2HxBtNS+LPw10vXL7V9S1Sxn8WeFdMvokh8QWyGOKU4kG4SiBF+VJEWQJtYEkV9TZrow+Ilh60anKpOO11f+kTiPrGIy+rhI1JQjUWvK2vK+j38z45/4J//ALVWgaHe3X7PHjaw1fSLWTXtVPg3UfEGoIYkiglSOTTmMkhkikSXzikbZGwbVI2ha6z9o7/gnP4L+I2vN49+Edjoul61f3d42uWniCOe6027W7TbNMltv2Qz7wspZFHmHeGIL7x2yqYfMMZOpWkoJ6qydr9rJ7Pp2OGVOOU5LQw+DhKrUi7ScpK7jf4rtXbS3u9eh9NDJGRX5c/Hb4IftLfsKfC3VPit4w8RXx03RLW3tfD+q+H/AB3cBV1ZZdsepzWkjIrNL8itEBL8qur5Qljnhcvjieblmk1sn9r0te3zsbZjio5f7Gyc/aNKTWip/wCK9vwT8j6V/bi/aW8c+KfHcf7GP7OOuzafrV5bef8AEDxjZ/N/wjWnsoPkxsMAXcwICjO5FfdgZ3L5V+y78Pdc8E6Hear45v8A7d4t8STvq3jDVCzMbm/lI3Dk8KgwgC4TglVXdtH6jw/wLh8NFVseuaXSPRevd+W3qfB5vxVWrTdPCPlX83V+l1dHafC/4WeBPg34Rt/BHw80KOxsYfnkKgGS5lIAaaV8ZkkOBlm54A4AAHRV+hQhCnFQgrJbJKyXofHylKpLmk7vuworQkKKACigDx7xT+zfqXjD9snQ/wBoPWXsW0XQPCotbS3BzPJfLLKUZlZMbFWdmDKwIZF6gnHsNc0sLRliY15K8oppeV92vN7X7adXfaNepGi6Sdk3d+dtr+X9dgorpMQrmPi/8UdB+DXw61b4ieIWUw6bZPNHC0qoZ5AMKgJxgsxVe+SwAyxAONbEUcNTc6slGK6t2/r0NKVGrXqKFOLbfRHn1pe6pH+0r4i+Kn7JnxTtfC/xe8FQ2UtjrFmskbedz5treqiLHc28kaQpuczFd8gZMIin1C1/Yl8Ufsw/s3/Dj9rvx7pFroniDxhfXx+K0M1naxyWy6lP5+l/abhmh2NAcW7hELTT3KZQnDD8TybxO4B484xxfDXtFUnBJwbS5W1ZTjCaeri7NrRXfu81ny/b43h3OMjyOnjY6f8APyN7vXWLlB6Wto3q1dKSjdJ/fX7Pn7UvhH/gut+wd44/ZD+LOnN8Ovil9htrP4geGby1ZjFGl3Gx1CyBYedbStC6q6syxyYBLDazfm/4/wBa+LP7OnxS8Oftzfs2Xslv42+HTPNfaZGpMXiPSSB9p0+ZV5bKA7cZPUAFthXbP/Dmtgb4rK5NpfZ6r06P+tN2cGX5tTqVI3/dz6P7L/yf4eh/RJouj6Z4d0a08P6LZpb2djax29pbxrhYo0UKqj2AAFcL+yh+0z8Nv2xf2dvCf7Sfwk1Dz9D8WaTHeW6MwMltJ92W3kx0kjkDxt7oe2K/I6lOpTqOM1Zrc6qkZ05OM1qeiV89/ta/tuaJ+zT+0l8B/gbd3duZPit4wu9Mv4Wj3PDaraOsU2Qf3YN7LZx7jwfMI60U6NSpCUorSO5pTo1KkJSitI6s+hKKzMQrL8ceN/Cfw08Gar8Q/Huv2uk6JoenzX2raleSbYrW3iQvJIx7AKCaIxlKVkNJydkalfhr8f8A/goF+3f/AMFhPiJqnhn9lfx3qvwf/Z702+ezPiK13wap4hCEh23IVck/88lZYowcSNI4Kj06eV1pRTqNR9d/uPXo5Niqms7R9d/uPT/+Dnb4nz/GLxz8B/8Agnf4U1TzG8XeLP7X8TQWsw3RwI32aIsB0wj3r8/88ga+JP2Rv2bfA/hP/grB4g8M+DbvV9U034Y+GvMutW1y8+0XFzqk0EUZlZsADIuJQFAABjOK9nC4Onl9N1b3b20se1gcvhg03e7el7WsuvVn6IaZp1lo+nwaTpkCx21rCkNvGowEjVQqqPoAKmrnvc9IKKACigAooAKKACuJ0n4nareftGa58G7myt1sdP8ABem6zZ3Cq3myST3d7BKpOdu1RBERgA5Zs54xXLLl5ugHbUVIBRQAV534l+Msi+PNd+GelWXlz6RY2M0l95mebgTHbtxwQI1Ocn7/ALctxaimOK5tjsNc8YaH4fbyby63S/8APGIbm/8ArfjXlju8jmSRizMcszHkmkX7PufO37f3xLtfjr+1L8Mv2fbSNhpfhW3m8aa9bzMwaSVG8iyI2nHyzMSVY4IbkHvweiX194q/bX+M3ia8XdBpj6Pomny/3Vjt3kkQf8CdT+Nfqnh/k9OSljaqvbSPr39V5rqmtUfn/GGYuNRYSm9Ov6L0tY9Z8InGoSKT96I/zFQeHJhFq8YP/LQMv6f/AFq/VD4M6qigAooAKKACigAooAKKAPOPGXhnxZ4T+Pvg79pqPwjpHj3SfBGpLeXHw916f7PbyIF/4/IXdvKN5ESzxmYiFQBhUYNJJ6NtVso6BlbhlPcelfM8ScJZHxZl9XB5lTc4VI8r96a0025ZK3ytc9bK87zLJayq4SfK077L87XPfP2+v+CkXg/UPh1oPwH/AGdPh3ovxI1b4seDf7Skk8RW8smg6VotzbSPDPfeUjFmuNjpFFlA5RtzoACfhD9iDw94l/sTxb448c6realqV74uvrK3vtSsokcWlvOyJHCyD/j3yCVjAjjjbeI41HzP/OfAX0XeEsnx1bGZnUniOWpL2SvyKKTsm+W3NJWa5/dTeqp03HX7zNvEPGRVL+z4qnJpOT3ab1sr7Jq2j5nbRzkm7ekfBbwt8Q/Bvw90/Qvij40i17WIoALq6t7dY4UbJ+SP5VJQDABYZOGOFBCr1lf1ZQoU8PT5IXsu7cvxk27eVz8xq1Z1qjnK132SX4JJHuH/AAbtfG2b4D/tJ/Fb/gnDqd6q6HqEH/CefDOzklCrbxSMIry0QAfKgk27VAICwuepNfOfwz8Yaj8Dv+Cmf7NPx9067aCBvHDeFNcZV4ktdTUW6hj/AHVLucHuwr8h8SOG6MaSzGgrXdpLu97/AHJ+lvPT6fJsRLGYaeHnrOmuaL/uq118r3X3H018T9Z8YaJ8Zfi94r/4KK6Tq3/C6vE1pp2h/C3wh4DjS78vSJrqQ6TH4dkfHm3LX6M9xJL5Zjlt0klWOJUc/oF8W/2NND+LX7b/AMJ/2vtaubJv+FW+H9etLOzkty00t3frbRxyhugWONbn33SLjvX8953w5heIMfhcZVxNWn9X1jTpyUYyk9p3s2pPaT15o+6uXVv7XK+I1l+W1aCpRbdujtK6s1JJ6pK9l3bvdaHXfsu+If2hvEnwK8Par+1X4F0nwz48ayVfEGl6Pqv2y3Eo48wPGNqlx8xjBcISVDuAGPoVe7Ul7Sbei8lsfK1Jc0m9F5LY/Nf/AIOBvih4p+Kcnwx/4Jn/AA912409/ilqMms/EC8s2IktvDlgysyZzx502AOo3QgHIJFed/Ha/k+LH/BYb42/EO8/fW/w/wDC/h/wVosjNnyjJb/2jdqvpl5o8469+gr3cvoxo4f27XvS28l1fqfSZNg4xp+3lu9vJf5v8jZ8F+DfC/w78Kab4G8F6JDpukaTaR21hZ2ybUhiUYAH9T1J5NX7sObWQL18s4x9K35pSldnvHxn/wAEoLdvG3xO+P3x5vpmluNc+I0thHI3aGF5ZVH/AHzOg+iipP8AgiNE8X7O3jYXI/0j/hZt8Lrd97eLa1zmu3HP4YrZIdrW16H2ZRXCIKKACigBsxmELG3C+ZtPl+YSF3Y4zjtTqAOX+FXxV0b4oaXffZ4Gs9W0PUn03xFos7Zm068QAmNumVZWWSN8ASRujDg15D+0JeH9nP8Aad8E/tIWTmHQvGlzD4M+IEaqdhZy7aZetjo0cxeEt3WcAn5RW/s41KblDdbr9V/kZ80oytL+vU3PFOqSeGv+Cgng+FnVYfFXwv1e1bj/AFk1ne2kyDPsk8v5mvO/2ufH1zoHxp+DnxvkiZbHw/8AEaPTLr5seXaajDJaMzf8DaMn6e1XSj7SjKHVar9f68ipxcZKXyPq6ggjgiuUoKKAPlLwV4iuNd/a8+OVrcTFl0/W9GtYVP8ACi6XEcf99M5/GuS+B2oxzftz/tHab83mR+ItKlOemDasv/stdVaPLRp26p/mVR967/rQ9yorlNj48+FJCfHT41W8qYmj+IbMwP8Ada2jK/pTW00+Bv2//ir4evGVD4t0fSdf02NcnfDFGbaVicYz5rkY54AIJyQP23w/xFKeTuivii7v52X6O+nbuflfGFGrHNPaPaS0+Wrv83p5eh6TbztbXEdwvWNg35Go6+7PkztopFmjWVD8rKCKzPC18J7H7GzfNDwPde3+FIDVopgFFABRQAUUAFFABRQBHDDFbJ5cEKxruJ2xqFGSck8epJP1NSUAFFAHkn7UxuIfFXwTvrIMLmD49eHGt2H8Lb5f1rt9J8BW/wAbv27/ANmP4GJFJNNefF638QTRouR9k0uJridjx02t7da+N46xVHC8N1VUinzWS8nvdfdb5nt8Pxl/aHtE7KMZN+elrfNs/oUor+ZT2QooA/JfTdKlg/az/aQ1m43NNqHxsui3HRI9OsYkH02r+tdx+2Z/wQh/aJ/aj/aS8afEzwZ/wUO1LwL4L8Za4mq3XhPRvDciyxXH2aGCTM8V1G0u7yQfmO3n7vc+9RxWF+rwUp2srWs2fUYHMcLSwsYzlZpbWf8AkeK/tNfts/s//sp+H5NS+Ivi+G41byy1j4Y02ZZb+8bsBHn92uesj7VHr2r6Q/ZA/wCDa3/gnz+zPr8Hjz4iWOrfFbxJDMJxdeNHQ2Imznf9jjAWQ55/fNLzTeOwNPvL5WRpUzrCR+G7+X+f+R+cP/BE74h23iSw+LXh3+y20+abxkmvx6ezFjBDeowVASBuC+TjdgZ4OBmvo79tH4eWn7K3/Bd24uNLhhs9B+O3w1iu4LeJQkY1GyHllFHAB2Wrtgf89q7PrCx2GVVbrRr8juweKp4qipxVujXb+ketUVgdQUUAFFABRQB4D/wVA0+O7/Yb8dX/AJ/kzaVb2mpWU3dLi3vIZYyPfcuPxrF/4KX69B4p8A+Ff2XdNfztU+JXiqzgmtkf5o9LtJkurydh/cCxqnuZMV1YNP2nO9lv/l8yZdEc7+1r4Evfi3+yl4m0GyjkOoNoS6jpvlsVcXUG24jwex3oB+NeoGGHyvs5iBj27Nh7rjGPyrGnUlTqKSOm142Os/Zc+MFr8fP2ePB/xdtZFZta0GCW8VG3eXchdk6fVZVcfhXzv/wS/wDFX/Cs/HnxS/Yq1i42N4T8RSax4XhbCg6XdkPsQdSEZkYn1m/CtMRTUWpw+F/1Ywty6H2NRXOB8I/CGf8Asv8A4Ka/tDaFLJ810NLuo1bIyBAhz/5FFQ+NYovAH/BZXVoWfy4/GXw8hmA/56SrGij6nFm35Gu6p+8wcX20Kp26f11PoyiuE2PmD9v3TZ/hr47+H/7UlplbHSdSOg+LX3Kirp92QEmkYgnZFJ82O5IGRzn6B+J3w78N/Fv4e6x8NPF9r52m61p8lrdL3UMOHX0ZThgexAr3MhzmtkuOVaO3VdLdb/1vZ9Dy82yunmuFdJ7rZ9meODBOa88+B+t+IPDE97+z18S5BF4o8G7bSNri+WSbVrBEjEd+g4bY29V6NgkAszh6/esszXBZth1VoST01XVeq/XqfkOOy/FZdW9nWjbs+j9Gel6ffS6ddrdxD7vDL/eXuKgr0jhO0tbmK8gW5gbcrDIrmdF1mXSpdrAtCx+dfT3HvQB1VR211BeRCe2kDKe4oAkooAKKACigAooAKKACsuSTxX41+JPhv9nj4Q2qX3xA8dX32HwzYGMyJajGZdQuACCLW3QNK5yCwQqpycjhx2YYLLcO62KmoRXd7+SXV+htRw9bEStTi3+nq+h9Hf8ABDz9ndvjl+3P40/bM8SeHJJvDvwp0f8A4RDwHqVwsMkEuuXIdtVntiMuskEDJaOxwP37oDkSCv0w/ZK/Zj+Hv7HX7Pfhn9nf4ZpLJpvh2x8ua/uubjUrp233F5O2SWmmmZ5GYk/M3X0/nPi7iytxFirQ0px0ir77avpr/wAPsrfUYWhHB0fZx1b1b7+nkj0aivjTYKKACigAooA/PT/g4O/Yf+KPx9+B/hX9rD9m3T5Lr4kfBDVH1nT7K1jZpdQ047HuIVVfmkZTEknljl0EqjJYA/oXXVhMXUws7x1T3XRnZg8ZWwc7x1T3Xc/HX9lb9p74fftX/Cez+JPga8jW42LFrekNIDNpl2AN8Mg64zyrdGUgjrXvX7dn/BCrT/HnxJvv2r/+CePxKT4R/FK4ZptW02OP/iQ+I3JLEXECqREzEklgrKSS2wOTJXqxxmDrdeV9nqvvX6n0VDOMLU0k+V+f+a/4Bx9fLviv9tP9pD9i/wAUw/DT/gpn+yjrngu4aXyrbxx4btWvNHv8Z/eJtLZBxnbE8jDPKr0rpjT5tYNP0aZ6VOtTqRvFp+jv+R9Ka34o8M+GohN4k8RWGnoylla+vEhBA6n5iOlecR6L+xx+2/4esPGk+heC/iRZ2AdLG6urOG8ax37S6YYboSdq5UgH5RkcVUYwjpUuvl/wUOTqc3u2+/8A4BzXxW/4KK/s9+Cr9fBXww1aX4leMrpjHpvhPwKv26aSTIH72WPMcCAkFmZsgZIBxXqXwt+GHwZ+HOkfZPg34G8OaLYyOyN/wj+nwwozKxVgTEBkhgQcnggg8070Y9G/V2/r7x+8fF/hXxv45+Hvxk1r49ft6fD7xF4Z8TaxH9g0fVJNNFz4f0LSw25LaK6t2kWIsTmSSbZub2zX1x4G+N+hfGXw74usfBWgSNrvhfU7zSdW8L69iB1u4gfLSQgOPJmXY6SAMCkgOMgqNZVOaKjONl0s7L9QT973TkNM1TTdb06HV9H1GC6tLmMSW91ayiSOVD0ZWGQQfUV5p4eg8DaZ4Dk/ad/Zi0i8sfCy3k0fxI+GbQhW0W5icrdzQQAkQXEDBmmhj+SZAzxguQXxlR5XZb9n+nRmtOpzbnl/7WWvX37K37WXw3/bV0yKT+yXk/4R7xsIs/NZvkhiADnCGRh3LQRjvXuHxz+E/hr9oH4O6x8NtZuI/sur2O61vlwwglGHhnX/AHWCt7j61phq0VF057P8C5RUj6Wsryz1Gzi1CwuVmgnjWSGaNsq6MMhge4IINfKP/BKH43+Jde+GOrfst/FSTy/F/wAK7pdPkRpN3n6ac/Z3U4G5UwYweSUEbH79Z1qMqPmnszE4X/gpvaH4X/tn/Af9oVLXbbzX0mialddgDKFRSf8ArndTt/wE16V/wV9+EVx8Tf2MdW8RaVCzal4Lv4NdtZI2w0caZjnb8IZHb6oPSujByjJOlLqVHRndEEHFcv8ABHx9B8Uvg94Y+Itv/wAxjQ7a6kX+7I0Y3qfcNuH4VxyjKEnF9Da9zqKKkD4n/wCCr3i+z8CeP/hv4q8IW0Nv4vsftlzHqu3LC0GxPs8g/ijdnbgg4G/HU14v/wAFIfGd94//AGoNcvYYZG0zw+IdBt7hcmMzRp50qg9A2+VgR1+T8vay3FYrL7VKM3GT7O2hz4jB0cXT/ewUo7ao95+AH7Sngj486X9l0+ZbHXrSAPqmhzN86DOPMj/56xZ/iXO3K7sFgT8IaZqOp6Hq1rr+hajcWV/Zy+ZZ31rJslhYgglT2yCQRyCDyO1foGW8eVIxUMZT5v70dH/4Ds36NI+Lx/BtOpLnwkuX+69V8nv+Z+m3AFfKfwi/4KC6rpcEOifG3w/JqCjan9v6PCqyH7i7poMhWP32Zo9owAAhJwPrsLxRkeKimqyi+0tGvv0+5tHyuI4dzjD/ABUm1/d1/Ba/gfWNre3Vk/m2szL/ACP1FcV4C+PfwW+KCRf8IR8StKu5pFLLZPcCG62g4J8mXbIORjleexr3KdanWjenJS9GnueROnUpu0016qx6VbeMJ1G27s1b/ajbH6VjhGI3IjEevrWliDoF8X6fty0Ey/gD/WudndLWIz3Uiwxry0kjbVH4mgDpD4t0ofwzf98j/GvE/H37Wf7P/wAPophf/EGz1K8i3KunaG32yd3UZKHyyURs/wB9lAOASCRXNWxeEw/8WpGPrJL82b0cLicR/Dg5eib/ACPbP+Eu0ztHN/3yP8a+C/jL+3L8S/HouPD3w8tf+EX0pnlia8hnMl/cxkFQwfCi2ypB+TLggYfGc+Fi+Lsjwsfdqc77RV+3V2X4/joe1huF84xErOHIu8n+iu/wPpD9pb9uTwT8FtPuPDfg6GHWvGDDZDprTDybEsAfNuipyqgEERgh2yoG0NvHwEqBGdzuZpJGkleRiWkdjlmYnkknqSSTXyGO48xlX3cJBQXd6v8AHT8GfT4PgzC07PEzcvJaL/P8j9//APg1+8Gfs0fEDwB4z/amm+IMniz47aheGw8aHU7cRSeHtPLE29taJkgW8oTeZFxlk8vA8v5vib/g1x+MPhz4Wf8ABR+Twp4t8RzabH488E3ukaPEy4gvr5JoLhImJIG7ZDLt6ncQvVufzDiCrjcbL6xWqSm/N7ef/AO7NMsjhcNF0FywXRLT1/4e5/R/RXy586FFABRQAUUAFFABRQAUUAZPjnwF4H+J3he78EfEfwfpevaNfxmO+0rWLGO5t519HjkBVvxFa1VGUo6oqMpQd0fl/wDtaf8ABuj4R0TxVN+0T/wS7+JNx8J/HltmZfDNxdSS6FqmOfIIO5oFY8bWEkQ4wifeH6gV1U8wxVLRSuuz1X4nZSzHF0tp39dfzP55v+CdPxJ+Lv7PXxs8a/sF/th+Hrjwr40XXLjWdD0/U1EYmkuHaW6ggIysiMxNxGVZg6vIVJC1+y/7f3/BNP8AZr/4KK+BLXw78ZtHutP1/RW87wr430GUW+q6LNncGilx8ybgGMbZXIBG1gGHpRzSniLKurPuv8j18PnVPapHl81t93/Dn5i67oi/DL/goj4f8U6LH5Nn8UPAt9Ya9GigLLfaY8UttMfV/JmmTPcKPSu68Zf8EUf+Ct/g7x74b1/4e/tZ/C/4jWvg66un8O3vxA0u7sbwJPCYWFx9lR/NIjPB8wnPJJ6V0xxWFlRcPaLut9PvXU71mGClJSU1/XyPPLbQI/gp/wAFAPsulHb4e+NHhW7utW087vKj1rTfKBnAztUzWspV8AbjDk55r6U+Fn/BD79oL4yfFPw58Wv+Ch/7RehT2/heG5is/BXwjs7uwt7yO42CaO6vZ5POaNxGqssaoSu4BxuNKWMwsaPLKd7bWu7d+yIqZpgqWsZX8l1/A/OT4Y+F/Dn7V2pax4X+KvxEuvDPwV+Eunw2WqRx6p9gXWbty/lie43Ai3jtxF8vG4upznp65+1d8Btb/ZO/4K26h8CPiH4dsdJ+FXxM+ICePfCeoTKsNhdyW1i4i04ZAjHkXRiIjyCpghIGHWuujWp1qPtKene29+iOjD4iOJoxlB9r67Pz/QtW3/BNTwv8DPEsfxm/Ya8ZXPg7xRb2TQrpuuXUuo6Rq0DFWNtcCQtNGrFF+eNsoeQpxiu3/Y/8TeJfijrXxG+OHizxLcSRX3ji90PQdJa6LW2mafpkz2y7Uzt8yWXzZnfGWDoMkIuFUlWpxSk731s9d9t+pvGXtPk+/U9d1XQLXxf4RuPDPjKwgkh1PTmttUtY2Lxsske2RAWA3LywGQCRXK/Ff9p/4BfBKx+1fEb4o6TZzNxa6ZDcie9un7Rw28e6SVyeAqqcmuWMakpe6i7xWh8d/svfEbwt+yt4b8Tfsv8Axj126s7z4e+KLm0tbqbT7iZJ9Pnb7RaymSONlXersQpIPB44r9Nv+CKn7Pn7SM3xB+KX7b37Q/ga88G6f8TLPS9M8E+B9YtxHfw6TYmdorq8jx+7kkM7MEb5gGbPy7CVj8ZRhyt6ye9nt+D1PMxebRwbUY2k+uu35nwrpn7S0PxDW8t/2d/g/wCOPiFeWdvJPcSaL4ZuILG1jRC7Sz3tyscEMSqCS5boO9fpd/wXe+Pzfs7f8ExvH0Xh64W31rxtFD4Q8PxxMEZ59QfypNuO4t/Pbj+7XNh8Wq9RQjD1bd7Lq9EjPC5tisdiI0aMNX53/RH4M/B/wVo/xA+CF5q3xNso5v8AhLNWvNb1KRmK7JJZWIlVuqkKAQfQ1qaz4bm8YXOk/sx+DrhobO206BvFl9D/AMummqAohBHSWcqVHcLuaujL8szbiPNL4VNRWieySR+1cQcUcG+FvBqp5w4TqSXM4Ozbk1orb6bK2voj518O/s++I/iRFq2r/DGVLizsb4x2sGpyeTcT27DdFMPlCkMvuBxX1FeWVn4N/aVvPDOmWaW1jqXgexls4YxhV+yzSQlQPZHSva4rwWN4aqwppqV0rtrr+B+f+DeZ8P8AiphcRWqRdOSk+VRa0St0affT03Z8i6/8Efi54ZYrq3w71ZVH8cFqZl/76j3D9a+5gSOhr5WOfVvtQXyuv8z9ireFOAl/CryXqk/ysfnnc6bd2F4sl5p8lvcRMDG0kRjkQ9iM4INfZnxUSH4i/EPwv8BVRpIdWuP7Q8RbPvJp8HzbSeo8yQBcjnr619BkUsdnmIVGjTtfrfT8j8t8QsuyPw8yyWMxuK5ra8qjZ/m9X0VtfRNnxdpFzceHoja6Bq95Yx7tzR2eoSxKT9FYDPvX2L8FdK0qwm1z4QeKtCsZ9S8H6m1tDLNaozTWLkvbSZK8/Idv4DNa5pm2ZZLiPq9XnVu0mkVwXwnlHHWVQx+BrU7SSdnFXSfp93rofGmoQ22r3keoazPJeXEY2pLeXTysvOeCzE9fSv0Jg8NeHLU5ttAsY+c/u7OMfyFeVU4qqVVafM/WTfY+0p+D8qcuZVYL0h/wx8C6R4d1bUz5GgaDdXHP+rsbNpP0QGv0HREi+WJFRf8AZGAK45cQyltT/H/gHoU/CeMV7+J0XaP/AAT4UsPhR49vNet/D954fm0+abyd0mpxtDHCJWZImkJH7sO6lVyOW4HWvrb9nbw7o3xi0j4heMfFNit1p/irWX0y3XcfnsbZPLTaf4fmZ2BHIbnrX6JkHDeOzvLZ4i6hL7Keqv5n8w+IniNw/wAB8U0cAk61Ju9RppSUdrpa76tJ7r1PPfh/+w/oGmyx3/xJ19tRdef7Psd0UOfRnPzt+G2vSvA2r674b8RXnwa8fXTS6tpUfm6XqUn/ADF9PzhJ/wDrov3JB2YZ6MK/P88w+f5TiHSxN4+aVk/n/wAE/prw9xXhnxhl8MXlfLNtXcZSvJPzTdtPT5HJ/GLSPEfw58Y/Dnx78EnXRtb8KatJP4b+wxhBFdQoLuJQBjq1uR7k4Oc10nx+uX0XwPb+N4A2/wAN65Y6oSo58uOdRL+cbOD7Gs+G61OpjvYYh+7Pq317mni5kko8M/XMBSXPRvaKWkoveNlbfp5tH9Hn7GH7THhX9sf9lnwP+0v4OaNbXxd4fhvJreNs/ZbrGy4gPvHMsif8Br8+f+DcX44N4K8S/FT9g3WdQzaafeJ428ARyMOdNvWEd3CnosVwEIA/57E9zWufZLiMlxjpzWj2fl/Wx/J2FxmCzTAwxuEd4T0a6wkvihLzT+9H6qUV4RqFFABRQAUUAFFABRQAUUAFFABRQAUUAFFAHA/tGfstfs8ftceAW+GX7Sfwh0Xxhofm+bHZ6xa7zBJjHmROMPE+ONyMpxxmu+q41alKV4tp+RUKlSm7xbXofC6f8G5P/BKeC4Y2Pwd8S2tm0m5tLtfiFq0dt/3wLj+tfdFb/XMX/wA/Jfezo+vYr+eX3s8H/Zp/4JhfsCfsgagmu/s9fsr+FdB1WMYj1xrE3d+n+7c3BklX/gLCveKyniK9T4pN+rZlKtWqfHJv1bCisjI/En/g6J/ajuLr9pv4O/sseHbKTVH8O2kvie50e363Wp3Ba3sI27DZ5Ujk9llJrzf/AIKSeGNag/4LXfFDWvjlpqw6xPo+nXHw3yp+zz6OLRITNEW6ygo6N6N5uOM1+gcG8P0c4k4Tmknvrq12S/MzzjjCXAOSxzKhRdSrJtRaXuwa25n07pbvyPN/gr8MG+GHhNoNWvvt2uapcG98Q6l3uLpuoHoiDCIOyr7muur9+y/LcHleHVHDwUUvvfqfyLxJxVnnFmYyxuZVnOUu+y8kun9XPH/j7HLo3xx+HPilTtiujqOkXDevmRLLGP8AvqM1a/a+thbfDvR/GuWDeG/F2m3zMvZDMIX/AA2ymvhfEjK/ruU+2W8f+HX+R++fRf4u/sHjJ4OcrRq2a82tGvJWbfrY2i6qNzMFA5JPauD/AGkfGtz4M+FGoNpG5tS1Zl07S44z87zTfL8vuF3Ee4FfzzgcHWx2IjRgt/wP9NeIM+wfD+VzxlZqyXura7/y6t7Jbh+yVbN8QviJ40+P9yu6C6vBo+gMy9LWHBdlPox8v8Q1eofBT4d2/wAJ/hZongGAL5lhZqLto1wJLhvmlb8XLV/TnB/DtPJcCpTj78l9y/zfU/ya8avEzFcdZ9OlTqXoQb16Tl39FtFdtbJtnB/HXRR4D+Lnhv41WY22epbfD/iTGcBZGzazHtxL8hPo6+lelfEfwPp/xJ8B6r4F1RtsWp2bwiVfvRP1SQe6sAw9xU8XcK4fP8G3BWqJaPv/AF/wDTwX8Xsy8O88hGpJvDSfvL+W+7Xk+q+e6OdPBxXN/CfxRqPijwTbya8gj1bT5JNP1qH+5dwt5cn4MRvHqrA1/MuMwdfA4iVGsrSR/rLkGeZfxFldPHYOalCaT0d7abCfGPxQfBfws17xKkvlyW+myC3Y/wDPRhsT/wAeYVxX7YE9xqXgbR/h7YyYuPFHiK2sVUddu7r+DmOu3JMFLHY+MUrpP/hkfOeInENPIeH6knLlc01ftFK8n8l+J6p+yj4VXwf+zz4V0sQtHJNpou5lYciSdjKc/wDfdd7YWMOmWEGmWq7Y7WFYowOyqMD9BX9YZTgY5dl9Oit0tfXqf448YZ9U4k4kxGPm9JSfKu0Vol9xxnx0+FNz8SNAt9U8MXMdn4o0KRrrw7qDcBZcfNC57xSD5WH0Pau4pZllOBzbDujiIKS/FehXCvGPEHB2YRxeV1nBpq6v7srdGv13XRnhtjrlp8bfhPrWi3Vg9jqElncabrOlzf6yxu9hVoz+OCp7gg1t/GfwFqfhDxM3x8+HulSXFwkKxeLdHtV+bU7NekyL3niHI7uoK9cV+GcQ+HuPyir9bwHvxTvZbo/0C8M/pKcP8a4H+x+IbUqs1y8z+GTfn6+j9dzu/wDgnp+0PN8GPir8Bf2xJtQZIdGuIdA8cSDo+lXuLG8Zx6QzCO456eSa8b+FXijw9YfAvx54Xhgj1i1XXrq20GxtfnOpDUUSW1gjA6s8lxsAHevr+XAcScI82Kkozpq13uvLv/wT+f8AOMDmvBHihUwOCg6uGxb5mo2a1es4vaNndp9tHoz+pgEEcVyPwA8P+MfCHwI8E+FPiJqLXniDS/COm2muXkjZae8jtY0mcnuTIGP41+FyXLJpO59xKPLUaTvbqddRUkhRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQB8p/wDBVP8A4Je+Cf8Ago38MNPm0rxB/wAIr8TPB8j3XgHxtDHlrSU4LW04AzJbSEDcOSp+YAjcj/VnNdGExmJwdRVKMnF+RUZNRcHZxejTSaa7NO6a9T+cPxnqPxZ/Zm+If/Cg/wBtv4ezeAvGEbFLO/uR/wASjXlDbRPZ3X+rZW4+UnIJ29QQP6DPjn+z58Ef2l/Alx8Mfj78LNF8WaDdf6zTdcsVmRWx99CRujcdnQhh2Ir9Cy3xMzbCxUa8VNee/wB/+Z8Hm3hvwnmsnOMHRk+sHp/4C7r7mkfz1/HLwy/jn4K+JvDVltkkvdDuPsp6gyBCyEf8CUV+gPxx/wCDabwZYz3Gs/sL/tW+KPhusnMfhPxFGNa0defuRiUiWFe2cyGvpqniNk+ZYOdHEU3HmVuj1Pn8r8McZkOdUcwy/GpunJO0otNpdNOZfkj8l/htLD+0Z8aPDurKPO0DwXo9vqN0eqS6pPGpjjPYmMDd6gr719a6N/wQ3/4K1fsj6LdeFPhh8J/hr8RNKa8kuftGh+KPsV1MzY5YXQiHAAUADgADJ614PCOI4Vyus69efvXurrT+l0Vj9g8XeIOOONMDTwOWOKpKKjJ86UmrfCk7Wv1d7vyRztN1T9nv/gqr4VkeHxX/AMEvfG0jL/FoeqQ3yn8YgR+tfqEeNeG5bV19z/yP5fl4U8aR/wCXEX6Tg/ykOrJl8G/t9QP5c/8AwTB+NCt/s+HZGH57K0/1w4d/5/x/H/Ix/wCIX8af9A//AJNH/M8x8Z2H/CsvjvHqqjy9H8fRrHI38MOrwpx9POhH/fUPvXc/EH9nP9v34v8Agy68Jn/gmP8AGKFptstneSaR5TWlwjB4plLL1VwD7jI6GvzzjKjwvn1N18PXjGqvXX8D+lPA3inxB8O8XHA5hQc8JJ/zxbh8r6r01XTqjyS709/iH+2H4X8Phd1r4Q0ebVrz5cr5rnZGp9Dny2H0NeqfAr/gnd/wV40PxT4g8YL/AME69cv9Z8TTQfaLzVNetdNit4ok2pGFmc8ZyxOR29K8Xgp5Hk9T2uNqpSWttXd9Nu35n2fjzxHn3GuH+p5HFOE1ytuUVaO7WrWsnvbol3Oyr03wj/wSD/4LR/Em5jj1LwV8J/h3ayH95NrniKTUJox7LaiRSR6Hg1+mVfEDhuntNv0R/JlHwh4on/ElTh6zT/JM8yr7A+E3/BtHqviOeHUf20P26vFfiaHfum8N+A7JNGs2H/PNpfmeRP8AgCn3ryMR4oZPT/hQlL8P8z2MP4M4rfEYyC8oqTf4qK/Fnwn4g+MvhTTfE1t8PfC1tf8AirxZfyiLTfCXhSza+1C6lPRBHHnbn1bAr94v2T/2A/2Pf2IdA/sD9mT4D6H4ZaSIR3WqQ25mv7of9NbqUtM474LbR2Ar5rG+KeNqRaw9JR83q/8AI+oy7wn4awclKvUqVWvNQX3K7/FHwH/wSG/4ITaz8N/i8v7cH7ZfhO10XWv7QXVfBvwns7wXFtol5swt/eEfu3uxlmSNBtiZyxO7Cp+rx+lfnWNzfHY6cnUlvq0lZfcj9QhUlSw8KFPSMVypXbduzk2216sKK8szCigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooC4UUAFFABRQAUUAFFABRQAUUAFFAH/2Q=="
var img_voyante = "data:image/jpg;base64,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"
var img_ours1 = "data:image/jpg;base64,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"
var img_ours2 = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDUuMC42AP/bAEMAAgEBAQEBAgEBAQICAgICBAMCAgICBQQEAwQGBQYGBgUGBgYHCQgGBwkHBgYICwgJCgoKCgoGCAsMCwoMCQoKCv/bAEMBAgICAgICBQMDBQoHBgcKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCv/AABEIANkAtwMBEgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP3Ior8N2PcCir5rgFFABRSuwCvhL/grz/wVn8XfsX69ov7M/wCy/wCHtJ1j4r+I7D+0rq71+JptO8NaWJNomuYo3V5JJ2VkiTcq4SRyWKLFJ04fB4mv7zVo9zfD4XFYt2pRufY/xl+Mnwy/Z9+GOsfGX4yeM7Hw/wCGdBtftGqarfuQkS5CqAACXZnZUVFBZ3ZVUFmAr8Qbnwt/wVB/4KkRXWkap8ada+Ilj4V1SPUX8OzR6NpGkw6hGjeSPJEcMkxUSK6q8kmwsjkllQ12xy+KV5TXyPZjkFajZ4qSgvVN/dc+mvGv/Bxz4x1fxEy/s/fsRQ6joJZha6p468eHSLq6XjbILWGyuDCrckeY4fGMqpyK+FfFXhDxN8KvEk3gb45+ENU8N6pp9zF/b+k3QMdxaRgq8hVsYbKllSRQUckFSQc11exwsY/An85f5nvf6v5LLDe1pTlPyR95eEv+DjvVPD5v4fj5+xfqFpJJC8fh1vAvi7+1obm+48m2uWntrY2iysdom2uikc5yK8n1X/gov/wSv8J/Dn/hFfCX7D+i+JmWFUZLzwMGunK9JHurifzQQcEMCzKVGBXL7LDyl7tJ/fL/ADPI/s3Cp60Jv5jtC/4Kxf8ABWz49fEO28I/CeP4e2mqX+oEaT4Z8L+AbnUJCqAkQyTz3Y3xqo+eQJCnBYlBxXyvB/wUDj+H/wAa9H+Pv7JXwgHw/NvCS2jah4kutTiKSIyOEZiksO4HoZHClRtwPlrotWloqa+49D6nheW2Ewmv9+/+Z+wH7Pv7cf7avg74fXUn7f8A+wp4t0O60ti954w+G+nx6xp91b4B806da3FxqEEgJIMMaXCKg3CQnKj4j/Yw/bd/bx/4KO/tQaB8Drj9pvWPh3p19pup6rquoeB7G2e6jhsxAioH1BLkbGkuowQQSTtAIzmonR5neenf+unlofO4vLsRg/4qUfx/O5+u3we+MHws+P8A8PbH4qfBvx1p/iLQtQMi2+oabcrKgkjcxyRsVJ2SJIro8bYZGVlYAgivDP2Tv+CcGsfsrfHnxF8drr9rDxx4xm8XaYIPEmk69YabbW+o3KlBFezLY28CtPHGnliQKHZG2yNIqRLHwVI4e2k7/wBf1/wTyj6X8v3pVXb3rjAWigAooAKKACigAooAKKACigAooAKKACigAooAKKL3AKKOW4BRVKIHB/tSfH/Qv2Wf2cfG37RHiW2knsvBvhu61eS3jkVWuGhjLJCm7AMkj7Y1GRlnFfFf/Be/4+eJdItfhF+x3o8Fv/Z3xQ8V/b/EE3nSLcfZdHntr8IoVSPLeZIYpM8kTKBjnPrYHD+1fM/hW7/rudGFofWsSqZ+WP7Rnjv4r/Ejxb/w0t8b9Pax+JPxE1O41nxE0KyCOyhjcQWNhEz8BIraONWUKDuOW5PHP/tE/Fe/+J/xAu5YLr/iW2O6DSouxX+KY+7kD8EUdq9SMVFabH6DhMMsBH91obXwU/bo/ak+Ckl34V+E/i+WZb66FxdafJ4divsThAgkT5flbYqrwQvyA4zknB0z9ojV/CXwUj+Ffh7QrDT5mSddQ8RTXGZJDLIWZ1i2YD7WZdxLYG3GAAKzlKhHeIq/+0PVR+4uSftAfta/tgNp3wq8f/E+88Rm4uWurWPVliT+zoYgW85JI4N0OOFIUqrbwGD7ia5/wd8Pfjdpetx+IPBngPxdbzLG0Ed7Z6fJbOEfG4fvQuM4HXFSpUh08PyxspJFH4wfC/x58MJrLQNYvtLjudShaYW9vevJKsC4zKQE2hfmGMsN3OOhr174ffsT654oQeLfit461CHULw7ryCymE0r+gmuJvMLuOQQowp3Dc3a1Uo/zEX5Tk/gj8GfgTq3hDT/FHjv4zXNjA2o+Tcabo89q01vBE5iIVTG8gYhN6sR0I4Oaxv2hfhZr3guz8SfDD4I+Iryf+0Lmz0u48yFZb77Tc5X7LbxwxoJLiV5beIA4IMynJIBGsZRctzSUuTCTq9j9Yf8Ag3Z/Z6tfD3gT4mftQad8MJNF8OePtagsfh3qmqszare6HZxmNpXdsYhluTNKuFAYsSCY1iNfaX7CXwx+JHwX/Y++Hnwt+MmvWGqeKtF8M21vr15pOnxWtr9oVAGiijijjQJHjyxtjQYUfKK8XM8T0j0PgMZjZ4yV2j1iivJjJvocadwopp3GFFMAooAKKACigAoz2oAK8l/a9/bh/Zo/Yd8Ef8Jn+0D8RYdNlud66LoFtC1xqmsSrt/dWlrHmSdvmGdoIQEFiq8ivY4qpK1KFxxjKWyPWq/A/wDbo/4KB/tSft2/EbT/ABjY+NfFnwl8DaPJNHpPhXw34gkt769gdCjy6hcW0u3zZP8AnnESIUBVZWZy49GOXcv8WXL+J7+G4ZzbEq6hy+un/B/A/cDxz+0H8Cfhloq+JPiF8Z/Cei6dJefY49Q1PxFbW8DXIUs0O+R1G8Afdzn1A4z/ADO+HNH/AGf/AIdX0iaJpL3RW4lliku5mukg8yRnMcPmkiNMtyEADcEkkZo/s+PST+7/AIJ3R4RxMXarUUfxP6cPhz8Wvhf8XtHPiL4V/EXQvEun+YUGoeH9WivISw6rvjJGR3Ffz7/s66v8cPCPjTUf2jf2HrTUovEngu2gvPEF9o1nLLYvYqzfuNTii/19tIPMQ7wzRhmljMbJ5iv+zb/a/D/gnNmHDv1P+HWUvw+7uf0VV8z/ALEH/BVv9kf9uLSNF0Lwd4/tNE8f6hp6Tal8Odcn8jU7SUD98saOFN3EjAjzoQyMCpyCcDjr4TFUdo3Pm+WVP+IrH0xRXO/d3EFFABRQAV53+1p+0n4O/ZA/Zs8aftJ+PpWXS/B2gT6nNHGRumkjX93CoPBeRysa5IG51z14rCxeMly0tQPy1/4LS/F+LxH+2b4yW1uobq3+G/w703w3p/lyqzWWq6hK97fcHcFZLcaZL0BIAJJ4x8e/Gn4jeKdU/ZdsfHXjPVLhvFXxW1STxB4wurmMhry5uj9qnOCSY41JihjRuUhiSPoor6yhSjh6Pslr5n2mT4L2VBVGzw+Nprm9hs7ZGuLq6nWG2tohuknlY4SNB3ZmIUDuWAqb4aePB8PfiJoHj46cbz+w9btdQ+yed5fn+TKsnl7sNtzt+9g4ODg4wZ17HvSqOUdj6z+DP7KGjfBG4i1Xx3Z2t94vi2tNcW8m6HT2Kg+VBkdVPyNJjLlGwdpxUHi//goJ8Dde16bXrPRPEkK32JmtZtPQyQufvIzeZt+9uw2QpHeuGtTxFTaJwSu2erWxwtfKvxB/b38T63ZSad8NvDL6LvJWW8vpklm8vj7qrlEb33PjqMHBrnjhcR1FyyPdvjV8abD4V6IdM0nbe+KNSRotB0lG+YykHErnB2xp94kjsAMkgV8p+B/D/jnVWt9SjuH/AOEi8Zazp+gaJrF0HnlS6vLpLdbjCglkjMgfaoG7G1QuQK7KOH5dWzSVH2OH9vWdon3l/wAG/v7K2gftR/GvxP8AtT/GrSNYuG+E/iRbfwnZ3UKLp99r0ySyXeqSFWJnkh37IomAWFZFfLOyiD9XvgB8Gvgr+xR+z54b+A/gQ2Oh+G/DVj5Ns15cJH58hO+WeWRsB5ZJGaR5GO53dmJJNcNbHSxHuYdf8H+vu+Z8bisxxWIlyqXudj0iviX9s3/gv1/wT2/Y3uZtEvvHs3jrWLO4SPUtH8D3FrPLaq6BlkLTTRxyAhhxGzsOflyCKzjl+Mq9Dz+Xuj7ar8p/jt/wccfDO88VfBr4qfsfa5ZeMPCuuXGq2PxJ+Gt9Clp4ljKRQyQz2ivIF3KI7krIN1vK6rF5qliyUssxFpaWtbfQf1fES+CDfyP1Yrjfg98f/g18d/hDpnx5+FXxBsNW8I6tatcW+srJ5ccKodrrMJNpgkRgUeNwHjZWVgCCK4fZVb2sRySS1Oyr87fiv/wcwfsIeF/jMPgf8BfAnxF+NOqDeGvPhjocF1auUG5xC888TXIVAzFoVdMKfmwM11rK8wevJ97saUcPiK/8ODfom/0P0Sr5N/ZC/wCC1X7B/wC1945X4MaX4+vvAvxGVQtx8PPiRpraTqSzYYmCPzD5VxIApJWJ3YDkgCsMRg8VQV/Zya720+8ycZ0/4isfWVfI/wDwVL/4KzeA/wDgm9oei+H9D+Gl58QviN4o81PDng7SdRihaNVVWNzdNkvDbcgGQIwyR0GSDC4PFYv+HH79DXD4XEYr+FG59GfF747/AAU/Z+8Of8Jj8dPi14b8HaSdwTUvE2twWMDMq7ioeZ1BOPSv59P2nv2g/wBqj/gpCNP1T9uu9sf7D0zUPtvhr4f6BCltp2nSbXTzGZN1xLLsfaS9w6HqEXgDujlsaetafyir/wCX6+h7WH4bzDEaNcvqfov+2b/wX28AaTDN8PP+Cfel6b8QPEKy7Lzx3qEcv/COaOhUESRNhW1SQllwluRHw26ZCAD+Zfhvw5oPhbT10nw3pFvY2yqv7m3jChmChd59WKqoJPoK6o0sJGOkL/4tT6LD8JYOhrXqOX4f5mh4l1fxx8TPiLqPxn+Nvji88ZeM9W2i98SaxGvmpGCxFvBGoEdtbqWcrDEqopdjyzMx4X4xa7dWf2XQi+3zIpHuo/rujH/ju/8AOtNdux71Cng8ErUYWMPx/wDEG98W3M2nabctHZo3yr617R+z1+zl8NPEfwp0vxd4205dZvNWhF0FuHkVbSNvuxqEYc45ZmyST2AAA5xj8RlUxiOP0z9nb4T6x8JNO8eaB8X0s76Oz8/WLjUn3wQgqpltjDkCMo3AYHdwckgkVX/aB/Zbk+F+nXfxB8G6gt5o8LK93a6hHvuLKPkbxLkeZGrFB8wDIvOWxVqpSl9o872uI5ruRP8AsYft4/HP9h3xzdeMPhfpWj3em6t5I1TTb29lie58nzDFzsGza0jZBEiuCQV6EYZ+HnwUT9nK++Jt58VGbxIbUtBZrepB9nuCq/6P5Emd+xs5kI+YEyAhMBX7rMa9LC42yrRufRtj8GfBP/BSrxnrPib9kl9E+H3iZo21Gw8E6trTQzabrSO7rLo95DGVQM+JYtxjMbiRCAuM+I/8E/P2efjV+0V8b5PCfwK8W3EfiSy0ia8stWk8QnThabSqhFkg2MZJZGjjRTlSx+bABINVpDQ4cVTr4OLjRqWh2mv1P6A/2G/2gLn9oD9m/QfEfiotb+NNJtY9I+JGj3Nm1vdaT4hgijW+tZ4mOVYS7mVuUkjaOSNnjdHb5J/4Ij/Db9re28Z658Zfj58bo/E15qPh9fDHxM8Pa1ax2+t6T4j0m4McC3KRFY3DWsrPFN5atJatagtKqRyt4+YYTllo/wDL8dT4mT953P0TorzwCigD4v8A+C/HjnxB4V/4JreJ/CfhvT4bybxx4g0Xwtc2sjLuktb6/hiuAgYj52h8xA45QuHGNua+Zf8Ag4T/AGrtBtv2o/hB+yWdThRdHtb3xTqiyXEaNDPcQS2dvdEMflWGxXXHO4Y3vbklQRn6HKaco1HXtt/X4fnbuejg8L9ZqLWx8L/t32esQ6Z4MW+u4pLeO0mT9y/yPMBGJGC/wrwuDk5z2xzb/bZh8PWvwl8NeIrWyls7qdYLbT7WRceRbtG0jxFTkBt3l5OMgRqARzXbLc+9jpFI+bFAzw1V1vJ4gRC+3d1qipVI2L1Zpvo5bprKW9UzL8whb5W2nvj3qOUz5ol6cxyMDmqMhf8Av1YRkl0Os8I+NP2o5fi94Z8e/s5fEC18OyeBbh7yDXbqztblobyaJolWCCSNgdkW5VYgAO8mGBGa5XwL4q1vRbHU5NFmhhtdWvmlZUs4/wB4q/IDkqT2J5J61cakoxaSWvlczrUcNire1UnbpfT7rHtfxR8I+KPjj4ql+JX7RPxY8Q+MvEF1crdFvH2qR3tuJ1AUsLdSkars+QJGVCgKOi7T43dahd3shmup2kY92asoxrR2l+B0xpZbTX7qikdj4t8PabeLbLonxm03RYtrM0PhyEWasxxknyzIWzjnce3HeuR8P6FqXirxJp3hfSIfMudSvorWBf8AaeRVyfYAlj7KaiUZRFOtH+U92+AP7NGk+ONbs/iFcfEPxNNpNlJILdtUaGd55NhUyWzzW+Y1VsoXX75DKQNoNfRS6OPhb8Eb7xjp+nW8fhXwT4fWWfUr26W2jmhQsg8gHcZWeRWjG0EGXMed3Fc8p1IqyRwOuqnuRXvdhuifBX4CaRoN54Xb4daheafqcgm1mxuvGWqNa6lMVVHmntVuFt5HZFC58vAAAxgAV6F+wZ4W+HX7dvxr1D4V+BPjFpsum6VoNhqWp6zoNnLdKyXaXTpbI03kNDcRi1/eK8bhDKqkFlZRzyrYqlZvQ4MXGGDfNWhJfI5vTfgf+wLJvbWv2MvBMW3HliDwzZSbuufvIuO3rn2r7E+Af7G37I/xG+GPiTxV4rjufGEN7421Dwnp02rTFEgaLU5NOaRY4SiEhuScHHlM0bgMpW/rmNtfmOSOOpR0UJW9D82fjR/wTm/Yy8Ta1Ya/+zX4h1z4V/ECG6jvfBrWlz59q+owsssO+FpHliIdAqPC6hDJvKsqkV9kftU/sEeGP2VPjU3x/wD2dbK307wHovjey0bxFoYdi2nrPaQTu0buzNKhmljyCdyu4UblJAccdjIy+I6Y1svr0FOnLml/JazPzN+E/g/4u+JvF+pftF/tMeO9S8RePvE1415qV5eXJ/dsUxggYBZckLj93EgWOEIq4r0TxRLaeH9Q1N9VuvLFjfTw3bEf6tkkZT/LP0I9a6a1eeI6WPrMHg8LhMOqtKNhzS2sQT7VceX5kyxR/L95z0H44rzD4seOmsvFlvbaeP3mmrJ5b7uBI6kbvqOn1BHbNTGjZHofW0dH8UPiFp/hbSptLtbgNqM0JCLuwsa92Y9u3HU145eX95qV3JeXs5kklOWZutXy8pxV8RzbGj4j8SXWtamup3S/vPs0UTHd12LjP4nJ9s96z2UsM55FOK5jmvzLVnvX7Iv7Qeg+FNPX4WeOr77JbyXTvpWozN+6SSTDGBv7u6TeynuX2D+EV4R8OfAfxe/aUuZvBn7Lfwh8QfETWlkijuLTw3pss1vbM5bC3FyqGGDhWx5jAMRgZPFVWwcqyte3mebisRhcOruon8z731/xl8OYbG68P+KPGmhw2+oWzQXFveajEnnRHhlw7Dj86+jv2OP+Dan9mR/gl4b8X/taeKfiFq/i3VNJt7zWPDcesQ6Pa6PcvGGa3VNOdmYozFSWuJVbbkHB589fVaLs539NTxP7bw0tk/uPyT0bVrnw78V18OfCzw5ceMtRhvL1fDel6b4bn1aa+gUMPOihhjc7lQA7ypVSASGBBr+jD9kD/gl3+xT+wp4mvvG37PHwgFrr2oQtby69resXeqXkdsxRngjlu5ZGjjZkRmVCFYqCQTzVf2hg4bXf4f5nJUzaU/hifnH+wd/wQy/bF+LumeH/ANrT4h/tETfAi58VSPqN34Q8NeHJ4NctLKSQ7Y2nluvKt5ZYRFI0cts/lmQq8W4EV+zwODnFccs1rtvlUbeh5tTGYiW8j5J+DP7D37UX7PX7Ylh8c7D9rZvHPhi/0GbS/GUHi7SLe31fVIkjb7FLPJZJDb3U0EmxI5GhikSF51Z5gYUh+umG4YrP+0cQ6XJZfccsvMKK4SQoprRhufil/wAHK/7PnhDSf2lfAHxP8A+BdRvPGXjbwprKa5q7TM9raabpqWiyL/06hra4u0DLgvJJEM5VQ36Q/wDBW9rSw/4Jo/HDxHLp8M82l/DPVbmESr12Rb9ue2WVeeenSvdynFOVb2Kjv5/oehgcRKjWSWp+Q/7QHhzTfi78K/8AhJPDVz9qWK1uE0/zImWPfIwhaViR9xYvMYPgrtbeCNqk5+gfD15PhF4e+FPiLxFJp+n6B8P7b/hIr60udpWZ4VRyBypUxi6+Y52iVSOa9eVPW6PvPso+JPEmo2mhpNLbObpVmaO1wNpuD/AAOcFjxjnHXoCa1PF8Wh614mu/EHhnw19j0y2vGbT441Z1gjIZI97knLuBktk5IbgZpW5TM5PRdP1LSJ5tR8T6pbi4vrpUjXzOh7IP9kdvSnjw/pKa5JryWuJnUDBO7BGecnnPPrgdgMnIVE2LhJ5IHS3n8qRoyEk252N2OO+KyPGGoz2fh65uU+WPy9sjemSAKaVx3EtGNhrFjoccskdva2u2Eq3Fw4XJLeycYPPzOKkubCJ75NQaR2ZYtiqzZVfXHpmnykG0syN3rJ3Sf89DSsVqa0vxCufhb4c1H4o6HqXlalbxf2ZoO1dzR3t0rg3AGePKt0lweR5k0eRxXG+OtW/szWPDNk9pN9jtbi41XLcLIzSCBcHvg2n9KXuxTlI9HL8u+vYhQ5rR7/0zR+NH7RP7QHx911fGPxznvmt7PSbPTbTT49Ja10+C3gVgqiNBtXLM7njl5GIwMAbPhjx54c8VaxHot7p8qQy/8fAlON8I5kC+rbeQO+KylUi7aH2uG4dwuD1pPU+s/wDg3e+Pmn/sy+Kfjl+0BrQabT/BPwuk1u4szMkYu5Io5RFAC3HmSXEohT/alFZmo/svX9h8LdW+DXwd1u8h0X4oabbvpN7cR+c109rLJcQ2KiNQVgkmSKQt82DalQp+UVNWjGtZ22PAz3I/reKo0qs7wTu1bbZ/O58j6L+1D+0NoOrw6r4d+OXim0Wx8Uf8JJDb2+tzLarrG8sb4RBggmOcGTG4jIzgkVyOieFNTv8AULzRb22uLY2LNHeQXFvtdZgxAiPPDdm/u5K+9R7C0bHuYrGZRhcHK1OLm1a1u2h+1037XWteG/8AgiF4B+Jf7Rfiq71LxF43+IU9xrVwsAku9U2m4uFkIUDc37m35OAoCgkEED88/j5+0Zd+M/gZ8I/2d9GvvM0nwD4fvbq5t5rXZt1TUZjLMep3KsK26oeOHk4+bjOOH1Pyj6nz5o8X8P8AdWi+45345/GJvix44utf0LSJdH0y4VS2n+eW82YKF858fIGIAwF6e/FcKLod1raNHlPYj3LVxcz3UzXE8rM7HLMx61GrBuVNbKKQOrLYkNwYhyKm8G+DfiR8YPix4b+BHwb8IS614m8W362WnwrA0kVpvdE+1ThQSsKF13NjgE9SADfs9G3scmKx1HDr97Kx7x/wTt/4J9/Ff/gpX8bJPhl4I1Ofw74P0FY5viF44jh3tp0LrkWVp1WS7mHQtlIkPmOGykcn9BH7En7Hfwq/YV/Z00L9nr4T2TfZtNh83VtWuW3XOr6g4BuL2dv4pJHycABUXaihVRVHkYjH4fD6YXV9/wCv1PlcXnGIqXVL3TY/Za/ZC/Z4/Yu+F8Pwf/Zt+Gth4b0WNxJMttGWuL2bYqme5nYmS4mIUZkckmvSI68mWKxNXWrK540ptjFXb3qWuclRsRkA9RRQVcKKA1YUUAFFAAKo+KfE/h3wR4X1Lxn4u1eDT9L0mxlu9QvrqQJFbwxoXeR2JAVVVSSTwAK1p0fbLQPtWPin/guH8ZoYfgr4Z/ZG8O3dz/bXxV8TRwalDayEeV4esnju9QkkGMNHIFgsyCR816nU/Kfy1/bv/bR8YftQ+J/iF+1oNYk0uPWNuieCbVsxz6Nom9pLa3GOUuZ1J1C6AAKtJDASdmV93B4P6u+Z7/l/wfy9dvdyrBudb2kkdtfaf4c+NnhjUdBTxj5Nt4okkvrhrFFaW60xH8pNrN9xJEjVhwch2/vDHnf7NXiLT9Q+B3jT4weI7i40nT7pZ9O0tbWTbNY6VZWgt7ZYzgbX3+f2/wBZ616Z9efPXx08XeHNV8ZXXhb4e6bHp3hnR7hrbSbG3+66p8jTservIyklmJbAUFjtBriry+S8vJrwQRx+dMz+XCu1Vyc7QOwHYUJXFdFOOwtodRudTiTEl1s83/gK4H9ae15tPC1rySC6G65osOu6TPpFy+I5oyPu9G/hb8DzS/bv+mX/AI9RzWII7K8kvLq7tp4dkltceWVz1XAIb6HJ/Ks4xzrrn9pRvHHDNbCO43t/Ep+Rvwy1UnzDTsbfldi1Y3gzw9rnxO1WPw3Esogvlmled4vlEKoXSMc8koq7jxjeeOaylKMdw5uf4Fc+k/2QP2cvgN+078M/FHhb4iagmk+JNF0fUj4T1Ca68qSS+eMTwq5/5aImyUqrEr/rcg4ryv4M+Lrn4aa3Z+L9VtJbvw7f3Qtb+KEfvAU2S+fGP+ekJwwzwQWUjDVyVJOp8Jzxp4ynLmpVJRXc9W8L/wDBLP4i/C5v2hvEPxffT7zTfg18Mhcx6pYyNJY3+r6lawNaQI7BctHFcPIeMrJEny/MpP214RvtQ+J37NknwLufHnhrxl4S8TJb3GqWt9PPptzeW+5GEUE+6VZSVj2qxGYkbYTwjDn9rKnujtrZ1m1HEQjOpzxW72v20e1j5R/YF/aE07xT8P8ATfg98Rw/n2cyXOhszbZ3kHzJy25kZcRMApHmKU5BVSPYv2n/AAX8NPjB4pm8C6V+ybp/hu9R4BZ+JrPVvLW2t4LRIVgMlovkzjZD8iSEhSSRhlOKWMXY9rB8Txrf73S+akn/AJHiHxp/Y90HWfiWdS8L/Erwb4TbWru5u7tfFmuGwh3sA7eWNrKF3+Y+QAcynOQFC89+2J+ydovwx8Aaf428EeJdavLG4m+zeKtPupItsMjY8t0eNQ/luQyFTnBKDJBIPVQqqtujTG4rJ8VH2tK/N5K36s8BtL83MEVx5W3zIlfbnpntmo4yuNqDAHC10cqPmy2JGPzA0yPuCaLGtu4arrFvommTaldNujgjZ5DnooUkn9K5z4ia9pen6BdaTfNumvtPuTDE3G8Rx7mGfpx+NaU4ylJJeRzYqv8AV43P2h/4NZf2f9P1bwr8Sv209Rs45m1jVIfCnhiaaEELY2kay3MkZJJxLPOI2OcH7IuAOa+5/wDgkP8Asm+Gv2Lv2BPBPwT8I/EKPxRpn+maxp+uxwhPtdvf3Ml5ExAJBIjmRSwwCVJHGK+ZzqssRWjTo7R/4Fz4fHYv6xXc7H0jU7R89a8mFTujz+ZsZRQaBRQHtAooAKKACigAooA/Ov8A4OQvi58bdH/ZX8G/su/BNY7WX40eNV0LxBrMkiFbTTIYHurhTGWDOjrH842uhijljbBlQH4//wCC237Vnir9ob/gpvb/ALKvwzW+vNO8I29p4Uvb+PcqaZJfRHUtWmLr8pmlsbWKCEjBBt7wj5gK+oyfB+xw/tm76affv+h6WW0r4hT+5dzwr9pv4c6Hof7M2iaN4WnU+G/DlubuaaebdJqGoSt5aSbsZkd2mmkkc5PDH+LIt/8ABQ3xxp/hX4RaX8MtKEccmqTRmNY5d2y1hG7B47sykH/ZNeg7OVz7rmjZaHhfij413eh/sjeFfhB4bk8m41TxJfnV9mcNbpI06D3zI6H/ALZY5BIryWTVJbpYInX/AFEPkx88BAzMPxyxz60GZJ57AYxUYORmrsiLsd5ntRGwPANL3Rq7Dy/eui8C/DnXPH9tqdxowz/ZlqryLtzvkLY8vrxwGOefu+/E8/mbewla9jjdcHmC3tm+7NMqSe6kiqevazbw6zpNvPx5l22G+kbf41pH3nc55aHtn7Kui6dJ4nv7qK2Ctb2IWNvTcwOf/HaP2UNbto/EeoafL/rLyNEhHptSV2J9gFPPqR61zYyOmh3ZXyqRN+1D4RPhD4faDo/hVdltb6pcMI9v95TIB+BUf8BX259I+NXg+48dfDq90ayP+lIyzWa7eWlXPGe2VLDv1ripVJU90eljKPNTsjyP4IftCfGf4Swrpng/XFvNNtbfzLnStSj8yBVHVo8ENH16BipPJBwK7bwt8MX8K6v4V8Tw2m2aPTXtNWUdvMjZsH/ZDMFJx3z7VqqkOqPMWBk0cv8AFH9rD49/Gq5bQLTxQmk2dz8s9h4cmaFpGAAKPKcuwHYZwdxyDxjJPw4k+GP7Uel6TZ/8g7Vb5LqxH90q37z69fyQH+LA1Sw/LexzfV/9o9kc74h8GazF4XsfGEl1NeWt3cNBLcB2WSK4zgpJyc5xkHPIPQZr3X4veCtJj+FviOPTYPs/mK2pyLn5Vmi2OXUdi3lAHrnc1HPGPwo7q2WvD0fac1/I+dI9yrkmooXVwTn6V0U7vU8+NTlZQ8c+MR4P8LXmtL/rFj2W/OMSHof0r2r9j79ka+/bJ0b4yeJNJ0CTV9N+F/wP8Q6+sMMIkefV5baW1sIFTOWck3Ui4BO+3XHOAeymqfMnPa55ObZhWw+kWejf8EUv2SPgr/wUe/a28XfAL4t6NJe+H1+E+tQ3F5DhZ9L1AajpYt7mBs8SoyllboRlWBVmB/Xz/gib/wAEvPg1+x78EfBv7TNl4R1DR/iT47+EujQeOrK6mUxR3ZVbmaUJt3RztIwVyGwRCny7t7P5OYZjRo3hRdtfXa60fbU+ax2OxGO5Xe1j6I/4J+/s2/Ef9j39kLwT+zH8T/iVZeLNQ8D6V/ZFrrdjpZs0lsYXZbRPKLuyMtv5SnLHkEjg5PtLNu7V8viK7xeIdWrrc4Iq4sdEdY+hpyDaKACigAooAKKACigAooA/E/8A4Lu+M/hx4L/4KC+Af2dfg54RtdL17Xf+J54qGmwqkmr3Wqzpby6hMfvSSQ6bpd5DuJJAvUA4yB7v/wAFkv2OfhH8MfiJpX7ddzeXFx4g8UfEbQ9N1KbUGXyNI0+DSdQh8qAgZRJZnjaQuSCwjzwoFfU5bXofV/ZXvLt/XzPUyat7HEQptXv+Hofk3/wUB8SrrHx7l0mCRmi0jS7e1G5dvzMnnkn1J84fgF9K6/8Ab/8Ahtbf8JfosnhfS4zearb6rq+pSbRub7PaW5fnsgjgLBegZnI+9gd59ofLbALzurtNd+G1trvwE0343+Fi0n9l3B0rxXbxx8wv5jG1nAz9xo3ijPoyr94scAnocXbSXNzcx2NlbeZJNIEVd2PxrU+F3iO18M+OLTU723jeKSOW2dpFz5XmoU8z2wTyfQkd8hjpfvCt4N0c+K/GOl+H5Id0V5qEMUxz0UyKSMfQE/hVTQtSm0HUV1W2dlmjjcW8itgpIRgN+Gc/hWdSNzL2tpan11o/g7SvDw1aPTo9sesXUlxdJ/tFVH49P1rz7wp8Wtd+Ivwc1a70qRbfxBplms8v/TXadxb6Nt2kdzx0IY48ktz3va4WWH56bufNnjXwrJpl7NJPD/pmj3Txqp/vo43fon611HjrxFZeLPEU3iK1h8t7xUluow2Qk20BwOBxkZ9t1dNN6bngT1F+EfjxPB3iqx8XRRmWFcmSNWwZIWUj+v6VxEct94Y1VoLqXfYzSf8AEvx/yyYk/u29j2PrgdTVSpuSFh8T9Wlfc+0PAvju21vwBJ4kik+0R2P2vzps7d/lyPt9cZQL9PevHPg34ws9N+E/jLw9fzv+502Se3hjb5mDx+W5A9isf/fXtXG6N5HvUMZ7ah7Rr5H0HpWow6pptvq9n81vdwLLDID94Ef/AKq81/ZY8XTa34KuPDdxNvbSLnbD7QuzMo+mQ2PbA7VjUounojrw9WFddjrtM8F6dqOt2fiHWNP/ANL0LVr1tPk3fehnXJU+2HA/7Zr6Vz/jP47eHNK+Dk3xDtrnyZJvPisDuztkVmQHpz8nz/p71UaMpIXtcNCj7Xm26Gv8V/iD4L0TwFqkuo6pIsczXGk7ordpCLoxOdmB9K+c/HGrRz/D7w3oC3M0k0k11qd00kmQWkdkU4xx0YjnkEVUcPK+5wYjM1Ww8Zcu/mc1d6omk6XPqMvzC1gaVl9VVST/AE/Ou9/ZH+C1z+0f+1p8LvgJBo/26HxZ4+0uy1G33Y3WKzrPd/8AktDMfwr1Yy5Y81tj53FVvY4dzP3N/wCDbj/gnh8Z/wBgf9lDxY37ROh2tr4u8ceLE1DzILhJmOmx2yC2RnUnOHkuH2nBUzEEcV+ikFvDZ28dnbIFjiQKijsBXxmZY/EZhL949ux8S3qx1FcJIUUAFFABRQAUUAFFABRQAUUAFFZkJ2Plf/gsX+xL4v8A29f2J9d+DPgX4gf8I5qdnIdXtbsW4k86S3hkZIOo275CikgghS30P1R1G0jIPBB713YXH1sLJOm7GsKijJNn89fw78efDT9qq6uZoLjzrzw7ocUKr12W+saXaXG/t1/eJj1Q89q9B/bS/YJ0j/gj38W9Q/ai1zxlJqngP4m+PtYs2tbGwZX0e3+zxXmlWzqW2mO3hg1SPeoyVCYDYr6qOIw9ZXoy5u59nhMyw9eNnofnp8OPHWrfDyLxt8M79Fjh13w/NYzI3IW7jO+LHvgSKO37zHeum/bO+E7fDb4qXnjCyjVbbXtYupYJI23LIwWGclT/AHQLlVx2IbmtI6nZ7ZS2PF6ikn2kqRVc0TK99iUtzyapm6GetUpW6A4s09K8W6r4X1RdQ0G8McwjeOTurxupV0I7gqSPUZ4IOCMPHzbs1nzx7Gly2upHHKVVqfeAmv44dUs5LK5iDRyDDbqIyCSBWnNIzHWGpahpcZjtbjG+HypGYcsvfJ/z+eCCpHF8ux0Xw9+It14Q/tYwybf7Q0l7Vf8AeaROR7hN+D71yFperd2qXHkbd+4qN2cruIU/iAD7ZolG+5r7Z2sW/GvjvVJ/Clh4KeEzQ+dMtsu/HlmZ18xunJPyrjjrnNZun2sGtXv/AAkE6fu28s2aMfmRUztYj3LMw9iO+QKUY099zGTbOg8U6/bLbtrd2nlx2trBB97OFVVjH5tlsdAXOB6854n0E+MWsfBSahHayavfR20dxN92NnYKhI648wpkjOM10Yeiqm+h5+KxjwtHmsfov/wbx/sF/Hzxf+398P8A9s/VvAlw/wANbR/EE2k69EpaOO9srZtPaOUHGws125Trkwtj7pr9eP8Aghf8KrX4Q/8ABJ34K6VDBNHNrXhQeILxJpHJE2pSvfvw33fmuTx26c142Z5jy3w0Y7aN3+/bpfb5Hz1fFVsR1PrSivljktYKKACigAooAKKACigAooAKKACigAorMhK4V4Z/wUU/bk8Df8E9f2WvEH7RfjXSX1OSyh8jRdGjVt1/fMMpGSqsVjVVeSRgrFYonYKxUKezD4GvitKauaRjeVkjxr/gub4l/Zx8Rfsmyfs6fGfS7jxBrni6/t7rwj4T0+5jhmuprK4ime5nleOQWthF8q3FwUYqsyogeaWKKT8mvj/+0P4w8U/C3XPj/wDtVyy3/jr4nQwzT6U7NBOLUO3lWbqrBrHT4xIgFqjbgSweSSaeaST6TA4b6no9X93/AAfy+Z9Bl+B5re1fL+J4x8ff2k/DGg/C3w/+z54fbTPHGo+H7GGC98Z6rpu5FmWIxt9nV2Jdipx5j5UAZUNwy+N/Cb4TeJfi74sjls7may0+1uVe+1WM4MR5wsf/AE04JB4ACsSeMHpqVLu59FTwb5e6PRPhT8EvAus2jarr2g694guGYFIprCeysz15VpvLLj34HHI5Fe5+F/Dsfhbw9a+HYtUvbxbVMfa9RummnlP952J5P0AA6AAYFclSs47H0OHy2hTjqrnnHjH9k74e6/bR3PhRBoN0277QF8649Nv3pQPXtXqrRccGsfrVQ3lgcNKVrHyB4t+CfiTwpcywnXNDvfL/AIbfWIlkHs0cjKwP+yAxr3D9pzxV4C8E+Fo7rxH4YsdS1S9jkj0uK5twxDLt3OW6qq5UcdSyiu3DSqVtzycTl9Cgrpny2ZS/BWoZ5zMc4xXoqCieIqm9iZrbzP8AlvIvvG2M1RE+RnbR7MC69iZIGtmvJ9kn3l8zrVNZt38NHJyk82pNc6etwI49+2NGBaPb9/HQfTOM+o46E1F5zZx/WoHzLc0tNtDe38Vi0yQ+dIEWaZsRqx6bj/CPfoO+BzVrwPe3f9psn/CGSa5a7c3VnHDI3y+u6Mboz1w3I9QeMTKXLui8PH2hufCrwZrug/tb+AdV8UeGwq+C/F+i6vd2F4MpqUP9uabbGFCPvZNwpO0NkA4zzj6P+HkXh/x54W0W70621bSdW8LahBd6LeXsP+l6RcRNvhaJ5E2sARypUqw+R1IytKnjlTpyjbf/AC/phmXDuKzHDqpRktOlz+mbQ9L0Twp4ds9I0DS7ax0+2tYo7OwtIVjjtolRQERVACqoHCgADsBX5mfAf/g4DsNE0i38M/ttfBfXLOW1ZU1H4heArcX2nXEflri5lsFY3VqzMHBjhS4UbMhsZ2/NfU69SblJf1+Z8jisrzTD70m/kfplJ4jeEs7IjJu46jHNfHP7ZP8AwVL+D/wR+COh+Nf2Ztc0b4qeJviJHLH8NdI0fVElt7vYAJb26kjP7m1gJHmE4cviIAOTj18l4XzLiKu6WBoubXxPZR/xSdkvK7u+lzxMVjcPgafPiJqK82fVnxg/aA+CH7PvgSb4nfHL4r6B4R8Pw8Sat4g1SO1hLf3VMhG5vRVyT2FfzK/tifHz4gP8ZIfiv+2H8RdQ+J3xDjVr2PS4yrWWhWqgsY7W1/1NrEFBxxlgCSznIr9Ny/wPxcrTx+JUVs1BX17cztq/8L+Z5ceIMPXX+z+959P6+Z+0HxI/4ONP+CaOjwXGl+CfiJ4z8QzH5I9S8MfDvUbq2VvUSmJVYYB5Un1r+e/4rf8ABSv4p+P/ABBdeJvCHgfQfC9pI0AXQ7SSWeGPYnlr5asQeFHJYkjce2APpaXg3kOGnCrN1LdU2pPey+GFvPyIlmmKkmlb+vU/oM/Z6/4L8/8ABOP4n+OYfC/iL9p//hGdVmYRtpvxC0e50UIGAKnfMgiU9MZYZH1r+dX4IfHKX4nfGD7J8Sfh/wD2/rHiKa1sdNTS9KNxKcFgIFiO4sGZ+wPIAPyjisw8J+H6lOfvzpxSvf3UvXZfi7BHM8TG2if3n9jXhvxP4d8YaLB4k8Ka3a6lp90m+1vrKZZIZlPRkdchlPqCQa/lX/Y6/wCCw3xQ/wCCcfxwur/4GeLtS174a3erwrq/wo1KOYWiwmP9/LbPIcWsyyDAVV2sT8wKjFfnua+EuLo1H/Z1f2qte0ouLfkmm439XE7aOaxlG9SNv6/ruf1bZryP9i79qf4W/tg/AnQfjd8FdaTUPDetWAmtZmYiaGTOJLeZP+WcsbblZexHGRgn8wzLK8blOIdHEwcZJ2s1Z/cenTqwrR5ou565RXnGgUUAFFABRWexKifAP/Bxb+0r4S+B37FWk+AvFEzLF458YW0F8sO0ytptmrXt1EitgM1wIo7HBIyb8DvXsH/BVz9hnwv+21+zFr2ix+FNBuvGWleF9WtvBmseJLiVbXSnvYUhuZdqZUyGFCFYqxQjKlTzXu5PiKFOtz1XY6sLP2WI5tz+er9qr4l+I9S+E3hHRfFGo+Z4j8UW/wDbvi5mOLi3WVfMtLA9dkcUU5AXuRvIUsRXFfGjT5T4L8H+MdY1SWebXPDlrcPNdczXd5Mr3t5OfRQ9yqDGRgbQR5e0fQzj7zsfbR+FM9u+COt+ErLw7Y/DrQnj8/TdFtbm4ZOkzSrud89zuzn6ivnb4AeOo/A3xY026vJGWxvVe0vivZHxhj/sq21iewBNc06cpbHuZbiox0sfYdfO/wATf2j9H17x/b6A1zt8L6bdrLdSW6/vNUaL5l46sjSLtHOOQTwfl5pYatLoddfNsPRlrr+X3ns/xO+I+ifC3wlP4p1o79ny21qrYa4kPRBwfqTg4AJ5r5C+K3xU1z4reI21jV32RR5W0tIz+7gXPYf3jj5m74HQAAaRwaOLGZth5aUtS18fPH8vxH+KWoazK263tpDaWK9vIjZgrfUncfxrrP2VP2Af20f23biaT9lz9nTxB4o022ult77xERFZ6XbvuCuv2q4dI5WTcGdIi7qvJXkA+jh6fsY3f+R83jsww/c8nzjrX6Ct/wAGvP8AwVfuYY5JLD4WQsyAtFJ46udyn0OLE1brUXL44/ejz4Zlhorf8H/kfnw0iKMlq+0viX/wbkf8Fcfh95kmmfA3w/4sjj/i8K+NrVmf/dW8+zlvTA5yCMcVSxGHf24/ev8AM6FmGBf2/wAD4pW7yeQK6L44fs7ftC/sy67F4b/aS+Bfi7wHdTXLQWz+JtDltre7ZcEiCcjyZ8ZGdjkA5GeK232NvbYeW1RfeYW5SPvCsxJ2h+U81nezNd9j0v4IR+A77xNDo3iTUNR0m+nmP9m6xp99sKt2iKuGUZ7MB1475HnyTBk3AcelZ1o+10Rvh60aErs+/tCstW0zT1stV11tQZeRcSW6xuxPUtswuTx0UV4j+z/+0tpyeDrXw/42ulN1a3yWq3ckmCbdlbY78c7XARm/6aAnoSfJxFDEUdlc+lwuYYeorbHuUmUby0aq9/JcSBvsaeZIUPlpuxubHAr08ny+WY1KdPROclFX82khZhmUMHh6lZq6hFydvJXZ5r4D8Z2HgDQ/FXxo8F31vda5rOrXGk6DCluA8MUSkPcSFOXLfKxfbkkxhh8oJw/AngLW/CMEekeC49Qkmvroym2/szdLyAvmB0JwN+7OcfLg98D+68g4VwnDuFp4KhFRp04+WsusnprJvXW/bbQ/z/4u42/tzHPEzlGUb3d3ZJXvy6aWSts1p3eq5KP9mnxL8dfidYaPc36x3XiG6O691K8EYjmEbMC0jlVUtjG5iAOMmutmgu9T8Rw3PizUZtQltb6OfULe4uJNt0QSSj9GIY9WVhx07Ee9mGHeMoXhHlna90rq66WfLvt09UeVgM9xGDj71Vcn2Ur3s+t1dW772fRnkfj39jrV9P0TVr3RPssl5a3SKySXIjUsCU+XOCNxJwG5JC57171bfDWDxppra3qgCQtM08MqzFoyEbKR54fJ+YE5zjHNZyyujTo+6nzW76+e+n5kUePMwwmK/fYhWva3K2rva6Vnr5WtvseO/Gnwb4D/AGgv2gNN8Tfs2+ArnwDoWl+HdMtLzw/qX2eN7GWKGNJvLksyWmLndKZJisrO7BumBD8d9E+IU2n3qeFtSsZA10k3/EqufLvVMWzJ6gn77gZY5IYDpXgZdkOEy2M4qM6ut7OTbtJ6u7u3r3e3ayPt1xLmue0YKlUp4fmTV3q7pbJO1vJ+m9zy74s6Bofgbx7deC/DHha4a5UtDb37yNiVZE2sSXyrNuYqNo4zjIYV04+AGq+IfG9n4F0vxlb6tPfLcNpkd3cbIh+7kk/eSybVRnZdvzYG58nnrnm2HlhpOtVlGnTVrJRXZbvVvXa3L6ns5BiKMsLCkqsq1RaSbckr37N8qsna13ft2/SL/g1m/a0+Jfwr+M2tfsgalcY0P4l6XNrPhSG4mRlg1WzjUzmMA7V822O5gQCTCp5yTXzX/wAEcfAniXw//wAFNfg38S/ht8Nm0nSdN1y3s9QvJ9QZzdq8UkVxJtYlvmDOANoGOw7/AJV4ocNYbN+GpZh7FOrQjzRlumlbmV9E4tPTqnulc+gyXPKFPMVh5VlecrKGikvVXk76eStsf1BaX4ikjC6fq7A3a4EwjHAJrkYdVvNT1NtScMvACqG+6or+UKmXxceaWj7LY/QVM9Iqto8nm6XBIIim6MEKzFv1NeNOPJJx7GpZoqQCqPifX7bwp4b1DxTf2tzNbabYy3VxHZWsk87qi7iscUalpHIBwoGScDvw1TUtirx6HxX/AMF+fGv7UvhP9iYaR+zL410nRZPE2vW2ha8Z5JV1C9hu5EhS2szHhkyXZ5pQytHbxyspDAMv57/8Flv+C5f7Nn7aeh+DvhH+zF4b8YzXvgrxle6tqmpa3o66fHFMdI1HTo4RFM4m8xZbzcwKABUIzuIWvpMtwFejeVdcvbz1X/DnbluHnLEqSPz1/aX+IF14y+Ih0ia9tZrfwxp8Oi2cmn2a20EiQLtZ4oVJWKJpN7Iin5U2Dtk8PqHh/wARWioLnQryPdkxs1nJtkXsysFwwPqMj3r1dOp9alK2xnhyoyVqrc6tb+c1pCu6SH/Xr/cX+/8A7vvW0ZRBc6VhZZBJJgCqt7qNvp9u13eNtjTG5vTJCj9SK6ox5tDGUuU9j/YW/Ys+JP8AwUB/ai8M/st/DmKSFdYn+1eJdeWMldE0iF0+1XfAOZAJFSNcYaSRFJUEsP2i/wCDU39nnw14K/Yl8TftKiC1l8RfELxjc2zX2CZYNP05zbxQHLH5fPFzJngnzcfwivIzDGLLk404+91XY+ezDMsRKr7NbH6PfAT4G/DL9mr4QeHfgV8HPDMWkeG/C2kwadpNjGxYpDEu0FnbLSOeWZmJZiSSSSSewhAOcivj6mIlKTlLdnlDo02jJp1c0pNgQSw7cfNU9OM2gON+MvwT+Fv7Qvw51b4R/GjwTp3iLw3rdlJa6lpeqWaTRyI38Q3A7HHVWHKnBHIBHYOFVd2K3p4iUJJroB/HD+2R+zxf/sgfta/ET9mC11mTxJpvgPxZJYHxJbqJVS1cK1o1w6KEErIyRuvygTLIozjn94/+DhP9l79nj4P/APBJb42eJPh/8JNJ0nV/GXjTQdV13VtPtUjubzUJNZtE+0SyFWaQhZJFwSABI2MZOftsuzDD5jOMJ/G09fTy9Duw+Or0XFXvY/ng80x8betRh9wxjpXY9z6iPvRTLkEgKBgn61Umn1CHb9h037Rn737zbt/Q5pWuGsdj3v4M/tCTRHwz4V8QPJNcWWpLa28+0fv7aVdixO2eCr+UQ2MFV5weT4v4VmurXU7a/wBQ1BoWjkDRtDkeSwGQy4IIOcc5461vh4RlXhyPl1WprLG1KdKSkubTbv0sfoJ8IfB/jbRfEup+JPEmnT2Phaa3jSx1i6BjyQz/ACIzcEFSoyAcEciuP/Ye/bY8J6J4Bh+Anxx8Uw3FvcXyyaPc6wzu1ldMwBVZOflcYOHwFZSc/Ocf1Pw34jUcy5KGYzUJpJXbSU3prd2Sb7dW9D+KvFLwgzXCy+t5VQdbDqTklH3p0018Mkk3KK+zJL3VrK3X2DTdW8D+PPgVffDseDbO98QaPfzX+h6vNZooUuyo8TNkNKwQb1GMFgBjAwfT7/8Aah/Z6+Dvwh1Xwx4D/sm48RTLJJdLDCnzzncUYncW3ICuD0DAkcnj62ObSxmKjVwtJpvR80kk4/8AbvMn3T+R+P8A9kyy7EqDrvRJrli/isnrzcjSWz01eu2/z34G8ERa9qkXhnx54gXTbGaTN1deQBFbMxO+bav3sZJCqCSeAOgq78AP2qfAN78SP+FjfFW3n17UtP8A30NrDarue9WTdFxvCSAqMsW2hQOQ3UdnE3EmW8M5PLFZhWjRXwqXMkrtXSTktdukZW6xsmellvCPFmeZpCnhKEq0pPnajFttJpNytK0Vr9qaTtZSu0eXyfAU6/eX83hTTbVtNbWpLbTdWuWaFUtxIYxcPLKFRIuQzMxG3HIUAivf4/Gnwi/aW8K+MtbtfiHp+ga81758uj68/wBjkKzS7mgiw3lyBTjaAAOCG9TzZXxTl+Z5fSr4TERnGaspxfPFNLW7VrtdU7fI+mx2XZ7luaOhjcNOm42k4STg5K9la6aSeuquvWx5/wDsMfsUeD/j1oPjLRrgWuqeK9JuGfTdOukxHJsVkeeK5U4cknKgfKdqtg5xXqf7Blv4X+Gv7S1mfBvxK0nURqV99g0u1n1xP3t+4CRowTAwzMBgE52npWefZ1TwOFjiFiIwtb42oxfrdp/+Tf8AB48Zhs6zPFJYanUej92Ccml6qL082vPQ9G/4I9/sp3sP7at1rvibwZqllD4H0ubUVW6f93FPPuhiyR99iTIwDDohPUCv1e+D3wbtPDPhhYBDbrdTRqdQuLdcJNJycKepRdxC59SeCTX86+Jni1h88wLyjAq0G1zzV/eSs+WK7X1be9rJW1f7F4deHuOyqtTzTNG/axXuQvflvpeT6ytoldpeui6TSfh/c/avtF7eFYcKyxxtnPPQ9v59a6jTrNNPso7KNiyxrgFjmv56rY6vL3Yy09D9pUIkwAAwBRXCWFFAH48f8Frf+CmGq+L/AIv+Iv2Jv+Em8T/DnwT4a0xLjxVq0WmS28/i1jtVoYpWjKvYIz7PLUk3Mu9HCQxMLjzr/g59+B/j/wAU/tz/AAS1BZzp2gePNEt/C1jrcse60i1FNQb5Zm3KFYJeeYqEgsI5MfdOPpsrwuH+q+1Uf6/Q9PL/AKrT1cT8+Ph14f8Ah5rfxIs9X0S90ixs0hH2W18QTC+vbxm6PIpVIo8hdqxqxKnC/N1Hrf8AwWZ/Zr/ZH/Y7+Ouh/DT9jm58RQta+CYdR8QPrWpC5ZL12YJIjYzHIQreYuSudu1VHL91N/WHofVZfmVO/Ko2Ogul1PTV+y6Rr2jWFov/AB728mlMMd2+5Kq9ST90da9U/wCCVv8AwSsj/wCChGh+LtR1j4oS6DY+FVtrPS72z09bp729dHciXdIn7tV2cDl95wy7TnixOKoYd8vMevXzrC4PSqrHlK6PpBtrjVvFlrpFxLaRGX7Z/ZK/uk6OcMzZyDjqPxrzH4wad4k+GV74u+E2ta0LyTQ9W1DRrqS1uM2880EzQh4gRlVdkyMjO1lPUEVUakrXudKzCLoKqolX46/sh+BfF9mYPh/p0mh32oMVf7LAslru7AxGRPLBz1jDHj7p4r6M/YG/4Jyaj+3T4U8ea9pfxj0/w3d+EbVX0mwutN87+1Ls28k4jLGWNoVAVRv2vnc5UHyzmo46VOS988/MK2WyjbFaXPuD/g1D0T4qeC/2F/G/w4+JOsW9xHoPxSu4NPs47otJYFrW2eWF48fIHc/aFbJEiXKsMZwPO/8Ag19u/EGrfF744a3BfXU2kN4f8LrIZlk2fbBLqJ2/N8vmLCYdwHzBGhDYAUVhn0niIwl/Ndfdb/M+FzTBwwOI5E7rdM/YqivmzyohRQWlcKKB8oUUGdzyX9un9kD4f/t6fsp+L/2U/iXeTWem+KrONI9TtVzNp91DMk9vcpyMlJoo22k4YAqeCa9arfD4nEYR3pOxOp/Ox4u/4NTv+ClemeJr3TfA/wAUPhDrmkwzbLHU7rWL6wnuI8DDyQfY5RExyflEj4x1r+iXy/evV/tzEdYR/H/M9COZYhaXP5ofiF/wbQ/8Fa/AOijWNN+GfgvxXJ83/Et8L+NozcHCk5AvIrdDnGAA5JPav6YKP7cr3+Bfj/mNZliF1P4/fHn7If7Wnwn1o+Gfib+y58RtFvhnEV14LvXV8dSkkUbRyjkco7DnnByK/r8u9N0+/niub2yjmkg3eS0iBimcZxnpnAreOe093T19dDb+2cR/KvuP5HrX4CfGvWtU8OahrP7I3xS0rw3b2NvA2q2fw9voWvGJZ2nNy8AjYtK5Akb7sSqMEpz/AFkePPF3w18J2thYfEjW9JsbfWr4aZp8OrSIsd3PIjt5Ch+GLIjnb3CmumpxTWqUuXk2Vk77fcvv6kUcwqxk+WG7u93/AF2XRH8437Lv/BPX9uz9q7xRDF+zp+zZdS+F1kje48aeLL1dMsEkkhU7EmkQSXCgsC0sEEozuwM9P2r/AOCU/ijQodA+K/wO8KatFqmi+BfilfReH9U0+4kuLFrC7VbuK3gmYlW8ne0bKnCfKvXJPhwzKLipezXN1bvrr6JW7b+bbPQzLHY6jJKDtGSuu/mtW9Vt08j8rP2qf+CGf7dv7NHhLWfi8nxK8E6t4S8P6GdUvdSsd0FxbsQiTx+UzLllEjFCp+cIfusyg/sX/wAFJfhB8RPjv+xz4r+GHwy8OR6zqGoSWElxo7XQhkv7SC9gnnt4nYhVkeONkXcQMt1r0KOe1kuStRpTX96lB+m66Hn4XEYipXSnWkl5Ta/G6/E/OT4M/wDBt74/1HTbHxJ8fv2mdPvLPUIo5/snhPwaVu3SRVcq0107eUxyM/u2wc/Wv12+HGq65rvw/wBE1rxN4Ll8OajdaVBLfeH57xLh9OlaMFrdpE+V2Q/KWXgkcVnPPanK6f1eikv5aVNfio/kcssZjo1G/bT/APA2/wBbH5e/E7/gm/8AC/8A4Jp/F74XftIfAHVLxtSuvGEOhal4a1y4tr+8uLa+IhkvrK2SAF7iEEkLnYB/CTwfoL9oD4k/DW0/4KoaRrXx7uE8P6H8KfhhP4g0OS+t3mXW7ibzle4hVM/PbIJlUEFtzsFBLDHk1Mb7SdoRjB+St8r3Tfla6720v7GFqYqpgZ1K0pVE9FFvm179bW80r6b3Ps/QdPutJ0W10291D7XNBAqTXXkrH5zAcvtX5VyecDgdsCovCPirQfHfhTTPG/hW/W60vWNPhvtNulUgTQSoJI3wQCMqwOCM81k+a+p4cr8zuv0NCikSFFABRQB55+1d+zB8MP2wvgJrnwD+LGjQ3Oma3p8sUN00KtPpt1g+Te27MD5c8Mm2RH7Mgr0cf6pP90/zNbxqSi7oIVGtj80/hj/wb4fBH492Op/F7/gp5Y3HjD4o67fmPVZPCvjDUbTS4rOCNLeCOJEMWd8cQmbcGZXmZdzBQa/SqSt/7QxUNKUuX00KlUluj8kdN/Yv/bf/AOCP+m+JPh3+zzq2rfFPwv8AEC4msPAOr6BotzHqvhzWnjWGzbVmt1kj+yuu0z3g8uNGtlLRp5lfrYelbLHe01qwUvw/KxrHGYirpN3sflT+zV/wbFeA4tSudf8A2+fjXdePGlhLWfhnwotzpNrbztn9/NdiZri5lQ4KbTEgb5ijHbt/VKPrWUc0xMttPTQuticRiP4k395+U99/wRo/af8A2KfHt9pn7FPxOvvGvh34m6XL4c1W88XQ2K3Hg5mlQwaxIYRD9qSCKS8bylTfJIY048xpE/Vg9aIZliJq80nbyB4zESVqj5vXU8p/Ys/Yt+Av7BvwPsvgR+z/AOFvsOnW8huNS1C5kMt5q14yqsl3dSt80srBFHZURUjRURFUesR159fFYjFytVlexw8zlIdRRGNkaBRTUgCigAooAKKACigAooAKKAOX+L3wX+Fnx78GSfD34xeB7HxBo8s8c5sr6MkJKhykiMCGRxzhlIIyeeTXUUFQqTpyvFtPyOd+FPwk+GnwN8CWPwy+EXgrT/D+g6arLZ6XpsIjjj3Esx9WYkkliSSTkk10VNylLVhKUpyvJ3YUUiQooA4P43/swfs+/tJW1jafHP4TaP4lXTZfMsZNQt8yQZPKq6kNsbA3Jna2BuBrvKDSFWpT+CTXo7EOnadp+j6fb6TpNjDa2trCsNtbW8YSOKNRhUVRwFAAAA4AFTUGYUUAFFABRQB//9k="

var img_arbitre = "/images/arena/referee.webp"
var img_ours = "/images/arena/bear.webp"

var VERSION = "v2.72.4"
var ERROR_VERSION = "Mauvaise version de 💪BRUTALISATOR : "+VERSION+")"
var ERROR_WEBSITE = "Utilise 💪BRUTALISATOR sur une page Labrute !"
var NOTHING_TO_DO = "💪BRUTALISATOR n'a pas encore de fonctionnalité pour cette page ! \n============== FONCTIONNALITÉS ================\n\n• CRÉATION : Customisation de l'apparence, choix du maître\n• CLAN : Estimation des dégâts journaliers\n• COMBAT : Récapitulatif des dommages\n• VERSUS : Génération et partage de combats entre brutes fictives\n• DESTINÉE : Meilleure visualisation"
function alertAndStop(error){stopLoading();alert(error);throw new Error(error);}
cl("START")
if(!(window.location.href.startsWith("https://"+"b"+"rut"))){alertAndStop(ERROR_WEBSITE);}
if(!isTextInDOM(VERSION,"p")){alertAndStop(ERROR_VERSION);};

parseURL()

if(combatIsOk()){launchFight()}
else if(url.length==1){
	
	var ah=div({4:1,5:0,2:"textarea"})
	var bh=div({4:[80,40,10,40],10:"#ff0000",15:0,6:{click:function(){
		
		var s = document.createElement( 'script' );
		  s.setAttribute('text',"text/javascript");
		  s.setAttribute('type',"module");
		  s.textContent=ah.val()
		  document.body.appendChild( s );
		
	}}})
	
	
	
	//addScript(BRUTALISATOR+"custom.js")
	}
else if(url.length==3 && url[2]=="destiny"){BRUTE = url[1];addScript(BRUTALISATOR+"destiny.js")}
else if(url.length==3 && url[2]=="arena" && BRANCHE=="dev"){BRUTE = url[1];arena()}
else if(url.length==4 && url[2]=="versus"){BRUTE = url[1];addScript(BRUTALISATOR+"fight.js")}
else if(url.length==4 && url[2]=="clan"){CLAN = url[3];addScript(BRUTALISATOR+"bossDamage.js")}
else if(/*BRANCHE == "dev" && */url.length==3 && url[1]=="user"){addScript(BRUTALISATOR+"devTools.js")}
else if(FIGHT_TYPE){addScript(BRUTALISATOR+"damageChart.js")}

else{alertAndStop(NOTHING_TO_DO)}