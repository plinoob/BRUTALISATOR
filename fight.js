
var heheheha = {"id":"d34f1d14-6d7b-4d87-abd2-614947732ba6","name":"heheheha","deletedAt":null,"createdAt":"2024-05-22T21:19:56.004Z","willBeDeletedAt":null,"deletionReason":null,"destinyPath":["RIGHT","LEFT","LEFT","RIGHT","LEFT"],"previousDestinyPath":["RIGHT","LEFT","LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","LEFT","RIGHT","RIGHT"],"level":6,"xp":3,"hp":83,"enduranceStat":4,"enduranceModifier":1,"enduranceValue":4,"strengthStat":5,"strengthModifier":1,"strengthValue":5,"agilityStat":5,"agilityModifier":1.5,"agilityValue":7,"speedStat":6,"speedModifier":1,"speedValue":6,"ranking":9,"gender":"female","userId":"565e2141-9982-406d-81ba-9aafdd219dc4","body":"10001210601","colors":"00000003030303031301020204020312","weapons":["piopio"],"skills":["fistsOfFury","felineAgility"],"pets":[],"masterId":null,"pupilsCount":6,"clanId":null,"registeredForTournament":false,"nextTournamentDate":null,"currentTournamentDate":"2024-09-24T00:00:00.000Z","currentTournamentStepWatched":0,"globalTournamentWatchedDate":"2024-09-23T00:00:00.000Z","globalTournamentRoundWatched":999,"lastFight":"2024-09-24T00:00:00.000Z","fightsLeft":7,"victories":468,"opponentsGeneratedAt":"2024-09-24T00:00:00.000Z","canRankUpSince":null,"favorite":false,"wantToJoinClanId":null,"tournamentWins":0,"eventId":null,"resets":2,"master":null,"clan":null,"user":{"id":"565e2141-9982-406d-81ba-9aafdd219dc4","name":"Ambryal"},"tournaments":[{"id":"9fc44ffc-bee2-486b-84bf-613e199a03a1","date":"2024-09-24T00:00:00.000Z","type":"DAILY","rounds":6,"eventId":null}],"inventory":[{"type":"bossTicket","count":1}]}

var exports = {};
function uniqueNamesGenerator(){var a=a=>{a=1831565813+(a|=0)|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};class e{constructor(a){this.dictionaries=void 0,this.length=void 0,this.separator=void 0,this.style=void 0,this.seed=void 0;const{length:e,separator:i,dictionaries:n,style:l,seed:r}=a;this.dictionaries=n,this.separator=i,this.length=e,this.style=l,this.seed=r}generate(){if(!this.dictionaries)throw new Error('Cannot find any dictionary. Please provide at least one, or leave the "dictionary" field empty in the config object');if(this.length<=0)throw new Error("Invalid length provided");if(this.length>this.dictionaries.length)throw new Error(`The length cannot be bigger than the number of dictionaries.\nLength provided: ${this.length}. Number of dictionaries provided: ${this.dictionaries.length}`);let e=this.seed;return this.dictionaries.slice(0,this.length).reduce((i,n)=>{let l;e?(l=(e=>{if("string"==typeof e){var i=e.split("").map(a=>a.charCodeAt(0)).reduce((a,e)=>a+e,1),n=Math.floor(Number(i));return a(n)}return a(e)})(e),e=4294967296*l):l=Math.random();let r=n[Math.floor(l*n.length)]||"";if("lowerCase"===this.style)r=r.toLowerCase();else if("capital"===this.style){const[a,...e]=r.split("");r=a.toUpperCase()+e.join("")}else"upperCase"===this.style&&(r=r.toUpperCase());return i?`${i}${this.separator}${r}`:`${r}`},"")}}var i={separator:"_",dictionaries:[]};/*exports.*/NumberDictionary=class{static generate(a={}){let e=a.min||1,i=a.max||999;if(a.length){var n=Math.pow(10,a.length);return e=n/10,i=n-1,[`${Math.floor(Math.random()*(i-e))+e}`]}return[`${Math.floor(Math.random()*(i-e))+e}`]}},/*exports.*/adjectives=["able","above","absent","absolute","abstract","abundant","academic","acceptable","accepted","accessible","accurate","accused","active","actual","acute","added","additional","adequate","adjacent","administrative","adorable","advanced","adverse","advisory","aesthetic","afraid","aggregate","aggressive","agreeable","agreed","agricultural","alert","alive","alleged","allied","alone","alright","alternative","amateur","amazing","ambitious","amused","ancient","angry","annoyed","annual","anonymous","anxious","appalling","apparent","applicable","appropriate","arbitrary","architectural","armed","arrogant","artificial","artistic","ashamed","asleep","assistant","associated","atomic","attractive","automatic","autonomous","available","average","awake","aware","awful","awkward","back","bad","balanced","bare","basic","beautiful","beneficial","better","bewildered","big","binding","biological","bitter","bizarre","blank","blind","blonde","bloody","blushing","boiling","bold","bored","boring","bottom","brainy","brave","breakable","breezy","brief","bright","brilliant","broad","broken","bumpy","burning","busy","calm","capable","capitalist","careful","casual","causal","cautious","central","certain","changing","characteristic","charming","cheap","cheerful","chemical","chief","chilly","chosen","christian","chronic","chubby","circular","civic","civil","civilian","classic","classical","clean","clear","clever","clinical","close","closed","cloudy","clumsy","coastal","cognitive","coherent","cold","collective","colonial","colorful","colossal","coloured","colourful","combative","combined","comfortable","coming","commercial","common","communist","compact","comparable","comparative","compatible","competent","competitive","complete","complex","complicated","comprehensive","compulsory","conceptual","concerned","concrete","condemned","confident","confidential","confused","conscious","conservation","conservative","considerable","consistent","constant","constitutional","contemporary","content","continental","continued","continuing","continuous","controlled","controversial","convenient","conventional","convinced","convincing","cooing","cool","cooperative","corporate","correct","corresponding","costly","courageous","crazy","creative","creepy","criminal","critical","crooked","crowded","crucial","crude","cruel","cuddly","cultural","curious","curly","current","curved","cute","daily","damaged","damp","dangerous","dark","dead","deaf","deafening","dear","decent","decisive","deep","defeated","defensive","defiant","definite","deliberate","delicate","delicious","delighted","delightful","democratic","dependent","depressed","desirable","desperate","detailed","determined","developed","developing","devoted","different","difficult","digital","diplomatic","direct","dirty","disabled","disappointed","disastrous","disciplinary","disgusted","distant","distinct","distinctive","distinguished","disturbed","disturbing","diverse","divine","dizzy","domestic","dominant","double","doubtful","drab","dramatic","dreadful","driving","drunk","dry","dual","due","dull","dusty","dutch","dying","dynamic","eager","early","eastern","easy","economic","educational","eerie","effective","efficient","elaborate","elated","elderly","eldest","electoral","electric","electrical","electronic","elegant","eligible","embarrassed","embarrassing","emotional","empirical","empty","enchanting","encouraging","endless","energetic","enormous","enthusiastic","entire","entitled","envious","environmental","equal","equivalent","essential","established","estimated","ethical","ethnic","eventual","everyday","evident","evil","evolutionary","exact","excellent","exceptional","excess","excessive","excited","exciting","exclusive","existing","exotic","expected","expensive","experienced","experimental","explicit","extended","extensive","external","extra","extraordinary","extreme","exuberant","faint","fair","faithful","familiar","famous","fancy","fantastic","far","fascinating","fashionable","fast","fat","fatal","favourable","favourite","federal","fellow","female","feminist","few","fierce","filthy","final","financial","fine","firm","fiscal","fit","fixed","flaky","flat","flexible","fluffy","fluttering","flying","following","fond","foolish","foreign","formal","formidable","forthcoming","fortunate","forward","fragile","frail","frantic","free","frequent","fresh","friendly","frightened","front","frozen","full","fun","functional","fundamental","funny","furious","future","fuzzy","gastric","gay","general","generous","genetic","gentle","genuine","geographical","giant","gigantic","given","glad","glamorous","gleaming","global","glorious","golden","good","gorgeous","gothic","governing","graceful","gradual","grand","grateful","greasy","great","grieving","grim","gross","grotesque","growing","grubby","grumpy","guilty","handicapped","handsome","happy","hard","harsh","head","healthy","heavy","helpful","helpless","hidden","high","hilarious","hissing","historic","historical","hollow","holy","homeless","homely","hon","honest","horizontal","horrible","hostile","hot","huge","human","hungry","hurt","hushed","husky","icy","ideal","identical","ideological","ill","illegal","imaginative","immediate","immense","imperial","implicit","important","impossible","impressed","impressive","improved","inadequate","inappropriate","inc","inclined","increased","increasing","incredible","independent","indirect","individual","industrial","inevitable","influential","informal","inherent","initial","injured","inland","inner","innocent","innovative","inquisitive","instant","institutional","insufficient","intact","integral","integrated","intellectual","intelligent","intense","intensive","interested","interesting","interim","interior","intermediate","internal","international","intimate","invisible","involved","irrelevant","isolated","itchy","jealous","jittery","joint","jolly","joyous","judicial","juicy","junior","just","keen","key","kind","known","labour","large","late","latin","lazy","leading","left","legal","legislative","legitimate","lengthy","lesser","level","lexical","liable","liberal","light","like","likely","limited","linear","linguistic","liquid","literary","little","live","lively","living","local","logical","lonely","long","loose","lost","loud","lovely","low","loyal","ltd","lucky","mad","magic","magnetic","magnificent","main","major","male","mammoth","managerial","managing","manual","many","marginal","marine","marked","married","marvellous","marxist","mass","massive","mathematical","mature","maximum","mean","meaningful","mechanical","medical","medieval","melodic","melted","mental","mere","metropolitan","mid","middle","mighty","mild","military","miniature","minimal","minimum","ministerial","minor","miserable","misleading","missing","misty","mixed","moaning","mobile","moderate","modern","modest","molecular","monetary","monthly","moral","motionless","muddy","multiple","mushy","musical","mute","mutual","mysterious","naked","narrow","nasty","national","native","natural","naughty","naval","near","nearby","neat","necessary","negative","neighbouring","nervous","net","neutral","new","nice","noble","noisy","normal","northern","nosy","notable","novel","nuclear","numerous","nursing","nutritious","nutty","obedient","objective","obliged","obnoxious","obvious","occasional","occupational","odd","official","ok","okay","old","olympic","only","open","operational","opposite","optimistic","oral","ordinary","organic","organisational","original","orthodox","other","outdoor","outer","outrageous","outside","outstanding","overall","overseas","overwhelming","painful","pale","panicky","parallel","parental","parliamentary","partial","particular","passing","passive","past","patient","payable","peaceful","peculiar","perfect","permanent","persistent","personal","petite","philosophical","physical","plain","planned","plastic","pleasant","pleased","poised","polite","political","poor","popular","positive","possible","potential","powerful","practical","precious","precise","preferred","pregnant","preliminary","premier","prepared","present","presidential","pretty","previous","prickly","primary","prime","primitive","principal","printed","prior","private","probable","productive","professional","profitable","profound","progressive","prominent","promising","proper","proposed","prospective","protective","protestant","proud","provincial","psychiatric","psychological","public","puny","pure","purring","puzzled","quaint","qualified","quarrelsome","querulous","quick","quickest","quiet","quintessential","quixotic","racial","radical","rainy","random","rapid","rare","raspy","rational","ratty","raw","ready","real","realistic","rear","reasonable","recent","reduced","redundant","regional","registered","regular","regulatory","related","relative","relaxed","relevant","reliable","relieved","religious","reluctant","remaining","remarkable","remote","renewed","representative","repulsive","required","resident","residential","resonant","respectable","respective","responsible","resulting","retail","retired","revolutionary","rich","ridiculous","right","rigid","ripe","rising","rival","roasted","robust","rolling","romantic","rotten","rough","round","royal","rubber","rude","ruling","running","rural","sacred","sad","safe","salty","satisfactory","satisfied","scared","scary","scattered","scientific","scornful","scrawny","screeching","secondary","secret","secure","select","selected","selective","selfish","semantic","senior","sensible","sensitive","separate","serious","severe","sexual","shaggy","shaky","shallow","shared","sharp","sheer","shiny","shivering","shocked","short","shrill","shy","sick","significant","silent","silky","silly","similar","simple","single","skilled","skinny","sleepy","slight","slim","slimy","slippery","slow","small","smart","smiling","smoggy","smooth","social","socialist","soft","solar","sole","solid","sophisticated","sore","sorry","sound","sour","southern","soviet","spare","sparkling","spatial","special","specific","specified","spectacular","spicy","spiritual","splendid","spontaneous","sporting","spotless","spotty","square","squealing","stable","stale","standard","static","statistical","statutory","steady","steep","sticky","stiff","still","stingy","stormy","straight","straightforward","strange","strategic","strict","striking","striped","strong","structural","stuck","stupid","subjective","subsequent","substantial","subtle","successful","successive","sudden","sufficient","suitable","sunny","super","superb","superior","supporting","supposed","supreme","sure","surprised","surprising","surrounding","surviving","suspicious","sweet","swift","symbolic","sympathetic","systematic","tall","tame","tart","tasteless","tasty","technical","technological","teenage","temporary","tender","tense","terrible","territorial","testy","then","theoretical","thick","thin","thirsty","thorough","thoughtful","thoughtless","thundering","tight","tiny","tired","top","tory","total","tough","toxic","traditional","tragic","tremendous","tricky","tropical","troubled","typical","ugliest","ugly","ultimate","unable","unacceptable","unaware","uncertain","unchanged","uncomfortable","unconscious","underground","underlying","unemployed","uneven","unexpected","unfair","unfortunate","unhappy","uniform","uninterested","unique","united","universal","unknown","unlikely","unnecessary","unpleasant","unsightly","unusual","unwilling","upper","upset","uptight","urban","urgent","used","useful","useless","usual","vague","valid","valuable","variable","varied","various","varying","vast","verbal","vertical","very","vicarious","vicious","victorious","violent","visible","visiting","visual","vital","vitreous","vivacious","vivid","vocal","vocational","voiceless","voluminous","voluntary","vulnerable","wandering","warm","wasteful","watery","weak","wealthy","weary","wee","weekly","weird","welcome","well","western","wet","whispering","whole","wicked","wide","widespread","wild","wilful","willing","willowy","wily","wise","wispy","wittering","witty","wonderful","wooden","working","worldwide","worried","worrying","worthwhile","worthy","written","wrong","xenacious","xenial","xenogeneic","xenophobic","xeric","xerothermic","yabbering","yammering","yappiest","yappy","yawning","yearling","yearning","yeasty","yelling","yelping","yielding","yodelling","young","youngest","youthful","ytterbic","yucky","yummy","zany","zealous","zeroth","zestful","zesty","zippy","zonal","zoophagous","zygomorphic","zygotic"],/*exports.*/animals=["aardvark","aardwolf","albatross","alligator","alpaca","amphibian","anaconda","angelfish","anglerfish","ant","anteater","antelope","antlion","ape","aphid","armadillo","asp","baboon","badger","bandicoot","barnacle","barracuda","basilisk","bass","bat","bear","beaver","bedbug","bee","beetle","bird","bison","blackbird","boa","boar","bobcat","bobolink","bonobo","booby","bovid","bug","butterfly","buzzard","camel","canid","canidae","capybara","cardinal","caribou","carp","cat","caterpillar","catfish","catshark","cattle","centipede","cephalopod","chameleon","cheetah","chickadee","chicken","chimpanzee","chinchilla","chipmunk","cicada","clam","clownfish","cobra","cockroach","cod","condor","constrictor","coral","cougar","cow","coyote","crab","crane","crawdad","crayfish","cricket","crocodile","crow","cuckoo","damselfly","deer","dingo","dinosaur","dog","dolphin","donkey","dormouse","dove","dragon","dragonfly","duck","eagle","earthworm","earwig","echidna","eel","egret","elephant","elk","emu","ermine","falcon","felidae","ferret","finch","firefly","fish","flamingo","flea","fly","flyingfish","fowl","fox","frog","galliform","gamefowl","gayal","gazelle","gecko","gerbil","gibbon","giraffe","goat","goldfish","goose","gopher","gorilla","grasshopper","grouse","guan","guanaco","guineafowl","gull","guppy","haddock","halibut","hamster","hare","harrier","hawk","hedgehog","heron","herring","hippopotamus","hookworm","hornet","horse","hoverfly","hummingbird","hyena","iguana","impala","jackal","jaguar","jay","jellyfish","junglefowl","kangaroo","kingfisher","kite","kiwi","koala","koi","krill","ladybug","lamprey","landfowl","lark","leech","lemming","lemur","leopard","leopon","limpet","lion","lizard","llama","lobster","locust","loon","louse","lungfish","lynx","macaw","mackerel","magpie","mammal","manatee","mandrill","marlin","marmoset","marmot","marsupial","marten","mastodon","meadowlark","meerkat","mink","minnow","mite","mockingbird","mole","mollusk","mongoose","monkey","moose","mosquito","moth","mouse","mule","muskox","narwhal","newt","nightingale","ocelot","octopus","opossum","orangutan","orca","ostrich","otter","owl","ox","panda","panther","parakeet","parrot","parrotfish","partridge","peacock","peafowl","pelican","penguin","perch","pheasant","pig","pigeon","pike","pinniped","piranha","planarian","platypus","pony","porcupine","porpoise","possum","prawn","primate","ptarmigan","puffin","puma","python","quail","quelea","quokka","rabbit","raccoon","rat","rattlesnake","raven","reindeer","reptile","rhinoceros","roadrunner","rodent","rook","rooster","roundworm","sailfish","salamander","salmon","sawfish","scallop","scorpion","seahorse","shark","sheep","shrew","shrimp","silkworm","silverfish","skink","skunk","sloth","slug","smelt","snail","snake","snipe","sole","sparrow","spider","spoonbill","squid","squirrel","starfish","stingray","stoat","stork","sturgeon","swallow","swan","swift","swordfish","swordtail","tahr","takin","tapir","tarantula","tarsier","termite","tern","thrush","tick","tiger","tiglon","toad","tortoise","toucan","trout","tuna","turkey","turtle","tyrannosaurus","unicorn","urial","vicuna","viper","vole","vulture","wallaby","walrus","warbler","wasp","weasel","whale","whippet","whitefish","wildcat","wildebeest","wildfowl","wolf","wolverine","wombat","woodpecker","worm","wren","xerinae","yak","zebra"],colors=["amaranth","amber","amethyst","apricot","aqua","aquamarine","azure","beige","black","blue","blush","bronze","brown","chocolate","coffee","copper","coral","crimson","cyan","emerald","fuchsia","gold","gray","green","harlequin","indigo","ivory","jade","lavender","lime","magenta","maroon","moccasin","olive","orange","peach","pink","plum","purple","red","rose","salmon","sapphire","scarlet","silver","tan","teal","tomato","turquoise","violet","white","yellow"],/*exports.*/countries=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua & Barbuda","Argentina","Armenia","Aruba","Ascension Island","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Canary Islands","Cape Verde","Caribbean Netherlands","Cayman Islands","Central African Republic","Ceuta & Melilla","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Côte d'Ivoire","Croatia","Cuba","Curaçao","Cyprus","Czechia","Denmark","Diego Garcia","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Eurozone","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong SAR China","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau SAR China","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territories","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Réunion","Romania","Russia","Rwanda","Samoa","San Marino","São Tomé & Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia & South Sandwich Islands","South Korea","South Sudan","Spain","Sri Lanka","St. Barthélemy","St. Helena","St. Kitts & Nevis","St. Lucia","St. Martin","St. Pierre & Miquelon","St. Vincent & Grenadines","Sudan","Suriname","Svalbard & Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad & Tobago","Tristan da Cunha","Tunisia","Turkey","Turkmenistan","Turks & Caicos Islands","Tuvalu","U.S. Outlying Islands","U.S. Virgin Islands","Uganda","Ukraine","United Arab Emirates","United Kingdom","United Nations","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis & Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],/*exports.*/languages=["Akan","Amharic","Arabic","Assamese","Awadhi","Azerbaijani","Balochi","Belarusian","Bengali","Bhojpuri","Burmese","Cebuano","Chewa","Chhattisgarhi","Chittagonian","Czech","Deccan","Dhundhari","Dutch","English","French","Fula","Gan","German","Greek","Gujarati","Hakka","Haryanvi","Hausa","Hiligaynon","Hindi","Hmong","Hungarian","Igbo","Ilocano","Italian","Japanese","Javanese","Jin","Kannada","Kazakh","Khmer","Kinyarwanda","Kirundi","Konkani","Korean","Kurdish","Madurese","Magahi","Maithili","Malagasy","Malay","Malayalam","Mandarin","Marathi","Marwari","Min","Mossi","Nepali","Odia","Oromo","Pashto","Persian","Polish","Portuguese","Punjabi","Quechua","Romanian","Russian","Saraiki","Shona","Sindhi","Sinhala","Somali","Spanish","Sundanese","Swedish","Sylheti","Tagalog","Tamil","Telugu","Thai","Turkish","Turkmen","Ukrainian","Urdu","Uyghur","Uzbek","Vietnamese","Wu","Xhosa","Xiang","Yoruba","Yue","Zhuang","Zulu"],/*exports.*/names=["Aaren","Aarika","Abagael","Abagail","Abbe","Abbey","Abbi","Abbie","Abby","Abbye","Abigael","Abigail","Abigale","Abra","Ada","Adah","Adaline","Adan","Adara","Adda","Addi","Addia","Addie","Addy","Adel","Adela","Adelaida","Adelaide","Adele","Adelheid","Adelice","Adelina","Adelind","Adeline","Adella","Adelle","Adena","Adey","Adi","Adiana","Adina","Adora","Adore","Adoree","Adorne","Adrea","Adria","Adriaens","Adrian","Adriana","Adriane","Adrianna","Adrianne","Adriena","Adrienne","Aeriel","Aeriela","Aeriell","Afton","Ag","Agace","Agata","Agatha","Agathe","Aggi","Aggie","Aggy","Agna","Agnella","Agnes","Agnese","Agnesse","Agneta","Agnola","Agretha","Aida","Aidan","Aigneis","Aila","Aile","Ailee","Aileen","Ailene","Ailey","Aili","Ailina","Ailis","Ailsun","Ailyn","Aime","Aimee","Aimil","Aindrea","Ainslee","Ainsley","Ainslie","Ajay","Alaine","Alameda","Alana","Alanah","Alane","Alanna","Alayne","Alberta","Albertina","Albertine","Albina","Alecia","Aleda","Aleece","Aleen","Alejandra","Alejandrina","Alena","Alene","Alessandra","Aleta","Alethea","Alex","Alexa","Alexandra","Alexandrina","Alexi","Alexia","Alexina","Alexine","Alexis","Alfi","Alfie","Alfreda","Alfy","Ali","Alia","Alica","Alice","Alicea","Alicia","Alida","Alidia","Alie","Alika","Alikee","Alina","Aline","Alis","Alisa","Alisha","Alison","Alissa","Alisun","Alix","Aliza","Alla","Alleen","Allegra","Allene","Alli","Allianora","Allie","Allina","Allis","Allison","Allissa","Allix","Allsun","Allx","Ally","Allyce","Allyn","Allys","Allyson","Alma","Almeda","Almeria","Almeta","Almira","Almire","Aloise","Aloisia","Aloysia","Alta","Althea","Alvera","Alverta","Alvina","Alvinia","Alvira","Alyce","Alyda","Alys","Alysa","Alyse","Alysia","Alyson","Alyss","Alyssa","Amabel","Amabelle","Amalea","Amalee","Amaleta","Amalia","Amalie","Amalita","Amalle","Amanda","Amandi","Amandie","Amandy","Amara","Amargo","Amata","Amber","Amberly","Ambur","Ame","Amelia","Amelie","Amelina","Ameline","Amelita","Ami","Amie","Amii","Amil","Amitie","Amity","Ammamaria","Amy","Amye","Ana","Anabal","Anabel","Anabella","Anabelle","Analiese","Analise","Anallese","Anallise","Anastasia","Anastasie","Anastassia","Anatola","Andee","Andeee","Anderea","Andi","Andie","Andra","Andrea","Andreana","Andree","Andrei","Andria","Andriana","Andriette","Andromache","Andy","Anestassia","Anet","Anett","Anetta","Anette","Ange","Angel","Angela","Angele","Angelia","Angelica","Angelika","Angelina","Angeline","Angelique","Angelita","Angelle","Angie","Angil","Angy","Ania","Anica","Anissa","Anita","Anitra","Anjanette","Anjela","Ann","Ann-marie","Anna","Anna-diana","Anna-diane","Anna-maria","Annabal","Annabel","Annabela","Annabell","Annabella","Annabelle","Annadiana","Annadiane","Annalee","Annaliese","Annalise","Annamaria","Annamarie","Anne","Anne-corinne","Anne-marie","Annecorinne","Anneliese","Annelise","Annemarie","Annetta","Annette","Anni","Annice","Annie","Annis","Annissa","Annmaria","Annmarie","Annnora","Annora","Anny","Anselma","Ansley","Anstice","Anthe","Anthea","Anthia","Anthiathia","Antoinette","Antonella","Antonetta","Antonia","Antonie","Antonietta","Antonina","Anya","Appolonia","April","Aprilette","Ara","Arabel","Arabela","Arabele","Arabella","Arabelle","Arda","Ardath","Ardeen","Ardelia","Ardelis","Ardella","Ardelle","Arden","Ardene","Ardenia","Ardine","Ardis","Ardisj","Ardith","Ardra","Ardyce","Ardys","Ardyth","Aretha","Ariadne","Ariana","Aridatha","Ariel","Ariela","Ariella","Arielle","Arlana","Arlee","Arleen","Arlen","Arlena","Arlene","Arleta","Arlette","Arleyne","Arlie","Arliene","Arlina","Arlinda","Arline","Arluene","Arly","Arlyn","Arlyne","Aryn","Ashely","Ashia","Ashien","Ashil","Ashla","Ashlan","Ashlee","Ashleigh","Ashlen","Ashley","Ashli","Ashlie","Ashly","Asia","Astra","Astrid","Astrix","Atalanta","Athena","Athene","Atlanta","Atlante","Auberta","Aubine","Aubree","Aubrette","Aubrey","Aubrie","Aubry","Audi","Audie","Audra","Audre","Audrey","Audrie","Audry","Audrye","Audy","Augusta","Auguste","Augustina","Augustine","Aundrea","Aura","Aurea","Aurel","Aurelea","Aurelia","Aurelie","Auria","Aurie","Aurilia","Aurlie","Auroora","Aurora","Aurore","Austin","Austina","Austine","Ava","Aveline","Averil","Averyl","Avie","Avis","Aviva","Avivah","Avril","Avrit","Ayn","Bab","Babara","Babb","Babbette","Babbie","Babette","Babita","Babs","Bambi","Bambie","Bamby","Barb","Barbabra","Barbara","Barbara-anne","Barbaraanne","Barbe","Barbee","Barbette","Barbey","Barbi","Barbie","Barbra","Barby","Bari","Barrie","Barry","Basia","Bathsheba","Batsheva","Bea","Beatrice","Beatrisa","Beatrix","Beatriz","Bebe","Becca","Becka","Becki","Beckie","Becky","Bee","Beilul","Beitris","Bekki","Bel","Belia","Belicia","Belinda","Belita","Bell","Bella","Bellanca","Belle","Bellina","Belva","Belvia","Bendite","Benedetta","Benedicta","Benedikta","Benetta","Benita","Benni","Bennie","Benny","Benoite","Berenice","Beret","Berget","Berna","Bernadene","Bernadette","Bernadina","Bernadine","Bernardina","Bernardine","Bernelle","Bernete","Bernetta","Bernette","Berni","Bernice","Bernie","Bernita","Berny","Berri","Berrie","Berry","Bert","Berta","Berte","Bertha","Berthe","Berti","Bertie","Bertina","Bertine","Berty","Beryl","Beryle","Bess","Bessie","Bessy","Beth","Bethanne","Bethany","Bethena","Bethina","Betsey","Betsy","Betta","Bette","Bette-ann","Betteann","Betteanne","Betti","Bettina","Bettine","Betty","Bettye","Beulah","Bev","Beverie","Beverlee","Beverley","Beverlie","Beverly","Bevvy","Bianca","Bianka","Bibbie","Bibby","Bibbye","Bibi","Biddie","Biddy","Bidget","Bili","Bill","Billi","Billie","Billy","Billye","Binni","Binnie","Binny","Bird","Birdie","Birgit","Birgitta","Blair","Blaire","Blake","Blakelee","Blakeley","Blanca","Blanch","Blancha","Blanche","Blinni","Blinnie","Blinny","Bliss","Blisse","Blithe","Blondell","Blondelle","Blondie","Blondy","Blythe","Bobbe","Bobbee","Bobbette","Bobbi","Bobbie","Bobby","Bobbye","Bobette","Bobina","Bobine","Bobinette","Bonita","Bonnee","Bonni","Bonnibelle","Bonnie","Bonny","Brana","Brandais","Brande","Brandea","Brandi","Brandice","Brandie","Brandise","Brandy","Breanne","Brear","Bree","Breena","Bren","Brena","Brenda","Brenn","Brenna","Brett","Bria","Briana","Brianna","Brianne","Bride","Bridget","Bridgette","Bridie","Brier","Brietta","Brigid","Brigida","Brigit","Brigitta","Brigitte","Brina","Briney","Brinn","Brinna","Briny","Brit","Brita","Britney","Britni","Britt","Britta","Brittan","Brittaney","Brittani","Brittany","Britte","Britteny","Brittne","Brittney","Brittni","Brook","Brooke","Brooks","Brunhilda","Brunhilde","Bryana","Bryn","Bryna","Brynn","Brynna","Brynne","Buffy","Bunni","Bunnie","Bunny","Cacilia","Cacilie","Cahra","Cairistiona","Caitlin","Caitrin","Cal","Calida","Calla","Calley","Calli","Callida","Callie","Cally","Calypso","Cam","Camala","Camel","Camella","Camellia","Cami","Camila","Camile","Camilla","Camille","Cammi","Cammie","Cammy","Candace","Candi","Candice","Candida","Candide","Candie","Candis","Candra","Candy","Caprice","Cara","Caralie","Caren","Carena","Caresa","Caressa","Caresse","Carey","Cari","Caria","Carie","Caril","Carilyn","Carin","Carina","Carine","Cariotta","Carissa","Carita","Caritta","Carla","Carlee","Carleen","Carlen","Carlene","Carley","Carlie","Carlin","Carlina","Carline","Carlita","Carlota","Carlotta","Carly","Carlye","Carlyn","Carlynn","Carlynne","Carma","Carmel","Carmela","Carmelia","Carmelina","Carmelita","Carmella","Carmelle","Carmen","Carmencita","Carmina","Carmine","Carmita","Carmon","Caro","Carol","Carol-jean","Carola","Carolan","Carolann","Carole","Carolee","Carolin","Carolina","Caroline","Caroljean","Carolyn","Carolyne","Carolynn","Caron","Carree","Carri","Carrie","Carrissa","Carroll","Carry","Cary","Caryl","Caryn","Casandra","Casey","Casi","Casie","Cass","Cassandra","Cassandre","Cassandry","Cassaundra","Cassey","Cassi","Cassie","Cassondra","Cassy","Catarina","Cate","Caterina","Catha","Catharina","Catharine","Cathe","Cathee","Catherin","Catherina","Catherine","Cathi","Cathie","Cathleen","Cathlene","Cathrin","Cathrine","Cathryn","Cathy","Cathyleen","Cati","Catie","Catina","Catlaina","Catlee","Catlin","Catrina","Catriona","Caty","Caye","Cayla","Cecelia","Cecil","Cecile","Ceciley","Cecilia","Cecilla","Cecily","Ceil","Cele","Celene","Celesta","Celeste","Celestia","Celestina","Celestine","Celestyn","Celestyna","Celia","Celie","Celina","Celinda","Celine","Celinka","Celisse","Celka","Celle","Cesya","Chad","Chanda","Chandal","Chandra","Channa","Chantal","Chantalle","Charil","Charin","Charis","Charissa","Charisse","Charita","Charity","Charla","Charlean","Charleen","Charlena","Charlene","Charline","Charlot","Charlotta","Charlotte","Charmain","Charmaine","Charmane","Charmian","Charmine","Charmion","Charo","Charyl","Chastity","Chelsae","Chelsea","Chelsey","Chelsie","Chelsy","Cher","Chere","Cherey","Cheri","Cherianne","Cherice","Cherida","Cherie","Cherilyn","Cherilynn","Cherin","Cherise","Cherish","Cherlyn","Cherri","Cherrita","Cherry","Chery","Cherye","Cheryl","Cheslie","Chiarra","Chickie","Chicky","Chiquia","Chiquita","Chlo","Chloe","Chloette","Chloris","Chris","Chrissie","Chrissy","Christa","Christabel","Christabella","Christal","Christalle","Christan","Christean","Christel","Christen","Christi","Christian","Christiana","Christiane","Christie","Christin","Christina","Christine","Christy","Christye","Christyna","Chrysa","Chrysler","Chrystal","Chryste","Chrystel","Cicely","Cicily","Ciel","Cilka","Cinda","Cindee","Cindelyn","Cinderella","Cindi","Cindie","Cindra","Cindy","Cinnamon","Cissiee","Cissy","Clair","Claire","Clara","Clarabelle","Clare","Claresta","Clareta","Claretta","Clarette","Clarey","Clari","Claribel","Clarice","Clarie","Clarinda","Clarine","Clarissa","Clarisse","Clarita","Clary","Claude","Claudelle","Claudetta","Claudette","Claudia","Claudie","Claudina","Claudine","Clea","Clem","Clemence","Clementia","Clementina","Clementine","Clemmie","Clemmy","Cleo","Cleopatra","Clerissa","Clio","Clo","Cloe","Cloris","Clotilda","Clovis","Codee","Codi","Codie","Cody","Coleen","Colene","Coletta","Colette","Colleen","Collen","Collete","Collette","Collie","Colline","Colly","Con","Concettina","Conchita","Concordia","Conni","Connie","Conny","Consolata","Constance","Constancia","Constancy","Constanta","Constantia","Constantina","Constantine","Consuela","Consuelo","Cookie","Cora","Corabel","Corabella","Corabelle","Coral","Coralie","Coraline","Coralyn","Cordelia","Cordelie","Cordey","Cordi","Cordie","Cordula","Cordy","Coreen","Corella","Corenda","Corene","Coretta","Corette","Corey","Cori","Corie","Corilla","Corina","Corine","Corinna","Corinne","Coriss","Corissa","Corliss","Corly","Cornela","Cornelia","Cornelle","Cornie","Corny","Correna","Correy","Corri","Corrianne","Corrie","Corrina","Corrine","Corrinne","Corry","Cortney","Cory","Cosetta","Cosette","Costanza","Courtenay","Courtnay","Courtney","Crin","Cris","Crissie","Crissy","Crista","Cristabel","Cristal","Cristen","Cristi","Cristie","Cristin","Cristina","Cristine","Cristionna","Cristy","Crysta","Crystal","Crystie","Cthrine","Cyb","Cybil","Cybill","Cymbre","Cynde","Cyndi","Cyndia","Cyndie","Cyndy","Cynthea","Cynthia","Cynthie","Cynthy","Dacey","Dacia","Dacie","Dacy","Dael","Daffi","Daffie","Daffy","Dagmar","Dahlia","Daile","Daisey","Daisi","Daisie","Daisy","Dale","Dalenna","Dalia","Dalila","Dallas","Daloris","Damara","Damaris","Damita","Dana","Danell","Danella","Danette","Dani","Dania","Danica","Danice","Daniela","Daniele","Daniella","Danielle","Danika","Danila","Danit","Danita","Danna","Danni","Dannie","Danny","Dannye","Danya","Danyelle","Danyette","Daphene","Daphna","Daphne","Dara","Darb","Darbie","Darby","Darcee","Darcey","Darci","Darcie","Darcy","Darda","Dareen","Darell","Darelle","Dari","Daria","Darice","Darla","Darleen","Darlene","Darline","Darlleen","Daron","Darrelle","Darryl","Darsey","Darsie","Darya","Daryl","Daryn","Dasha","Dasi","Dasie","Dasya","Datha","Daune","Daveen","Daveta","Davida","Davina","Davine","Davita","Dawn","Dawna","Dayle","Dayna","Ddene","De","Deana","Deane","Deanna","Deanne","Deb","Debbi","Debbie","Debby","Debee","Debera","Debi","Debor","Debora","Deborah","Debra","Dede","Dedie","Dedra","Dee","Deeann","Deeanne","Deedee","Deena","Deerdre","Deeyn","Dehlia","Deidre","Deina","Deirdre","Del","Dela","Delcina","Delcine","Delia","Delila","Delilah","Delinda","Dell","Della","Delly","Delora","Delores","Deloria","Deloris","Delphine","Delphinia","Demeter","Demetra","Demetria","Demetris","Dena","Deni","Denice","Denise","Denna","Denni","Dennie","Denny","Deny","Denys","Denyse","Deonne","Desdemona","Desirae","Desiree","Desiri","Deva","Devan","Devi","Devin","Devina","Devinne","Devon","Devondra","Devonna","Devonne","Devora","Di","Diahann","Dian","Diana","Diandra","Diane","Diane-marie","Dianemarie","Diann","Dianna","Dianne","Diannne","Didi","Dido","Diena","Dierdre","Dina","Dinah","Dinnie","Dinny","Dion","Dione","Dionis","Dionne","Dita","Dix","Dixie","Dniren","Dode","Dodi","Dodie","Dody","Doe","Doll","Dolley","Dolli","Dollie","Dolly","Dolores","Dolorita","Doloritas","Domeniga","Dominga","Domini","Dominica","Dominique","Dona","Donella","Donelle","Donetta","Donia","Donica","Donielle","Donna","Donnamarie","Donni","Donnie","Donny","Dora","Doralia","Doralin","Doralyn","Doralynn","Doralynne","Dore","Doreen","Dorelia","Dorella","Dorelle","Dorena","Dorene","Doretta","Dorette","Dorey","Dori","Doria","Dorian","Dorice","Dorie","Dorine","Doris","Dorisa","Dorise","Dorita","Doro","Dorolice","Dorolisa","Dorotea","Doroteya","Dorothea","Dorothee","Dorothy","Dorree","Dorri","Dorrie","Dorris","Dorry","Dorthea","Dorthy","Dory","Dosi","Dot","Doti","Dotti","Dottie","Dotty","Dre","Dreddy","Dredi","Drona","Dru","Druci","Drucie","Drucill","Drucy","Drusi","Drusie","Drusilla","Drusy","Dulce","Dulcea","Dulci","Dulcia","Dulciana","Dulcie","Dulcine","Dulcinea","Dulcy","Dulsea","Dusty","Dyan","Dyana","Dyane","Dyann","Dyanna","Dyanne","Dyna","Dynah","Eachelle","Eada","Eadie","Eadith","Ealasaid","Eartha","Easter","Eba","Ebba","Ebonee","Ebony","Eda","Eddi","Eddie","Eddy","Ede","Edee","Edeline","Eden","Edi","Edie","Edin","Edita","Edith","Editha","Edithe","Ediva","Edna","Edwina","Edy","Edyth","Edythe","Effie","Eileen","Eilis","Eimile","Eirena","Ekaterina","Elaina","Elaine","Elana","Elane","Elayne","Elberta","Elbertina","Elbertine","Eleanor","Eleanora","Eleanore","Electra","Eleen","Elena","Elene","Eleni","Elenore","Eleonora","Eleonore","Elfie","Elfreda","Elfrida","Elfrieda","Elga","Elianora","Elianore","Elicia","Elie","Elinor","Elinore","Elisa","Elisabet","Elisabeth","Elisabetta","Elise","Elisha","Elissa","Elita","Eliza","Elizabet","Elizabeth","Elka","Elke","Ella","Elladine","Elle","Ellen","Ellene","Ellette","Elli","Ellie","Ellissa","Elly","Ellyn","Ellynn","Elmira","Elna","Elnora","Elnore","Eloisa","Eloise","Elonore","Elora","Elsa","Elsbeth","Else","Elset","Elsey","Elsi","Elsie","Elsinore","Elspeth","Elsy","Elva","Elvera","Elvina","Elvira","Elwira","Elyn","Elyse","Elysee","Elysha","Elysia","Elyssa","Em","Ema","Emalee","Emalia","Emelda","Emelia","Emelina","Emeline","Emelita","Emelyne","Emera","Emilee","Emili","Emilia","Emilie","Emiline","Emily","Emlyn","Emlynn","Emlynne","Emma","Emmalee","Emmaline","Emmalyn","Emmalynn","Emmalynne","Emmeline","Emmey","Emmi","Emmie","Emmy","Emmye","Emogene","Emyle","Emylee","Engracia","Enid","Enrica","Enrichetta","Enrika","Enriqueta","Eolanda","Eolande","Eran","Erda","Erena","Erica","Ericha","Ericka","Erika","Erin","Erina","Erinn","Erinna","Erma","Ermengarde","Ermentrude","Ermina","Erminia","Erminie","Erna","Ernaline","Ernesta","Ernestine","Ertha","Eryn","Esma","Esmaria","Esme","Esmeralda","Essa","Essie","Essy","Esta","Estel","Estele","Estell","Estella","Estelle","Ester","Esther","Estrella","Estrellita","Ethel","Ethelda","Ethelin","Ethelind","Etheline","Ethelyn","Ethyl","Etta","Etti","Ettie","Etty","Eudora","Eugenia","Eugenie","Eugine","Eula","Eulalie","Eunice","Euphemia","Eustacia","Eva","Evaleen","Evangelia","Evangelin","Evangelina","Evangeline","Evania","Evanne","Eve","Eveleen","Evelina","Eveline","Evelyn","Evey","Evie","Evita","Evonne","Evvie","Evvy","Evy","Eyde","Eydie","Ezmeralda","Fae","Faina","Faith","Fallon","Fan","Fanchette","Fanchon","Fancie","Fancy","Fanechka","Fania","Fanni","Fannie","Fanny","Fanya","Fara","Farah","Farand","Farica","Farra","Farrah","Farrand","Faun","Faunie","Faustina","Faustine","Fawn","Fawne","Fawnia","Fay","Faydra","Faye","Fayette","Fayina","Fayre","Fayth","Faythe","Federica","Fedora","Felecia","Felicdad","Felice","Felicia","Felicity","Felicle","Felipa","Felisha","Felita","Feliza","Fenelia","Feodora","Ferdinanda","Ferdinande","Fern","Fernanda","Fernande","Fernandina","Ferne","Fey","Fiann","Fianna","Fidela","Fidelia","Fidelity","Fifi","Fifine","Filia","Filide","Filippa","Fina","Fiona","Fionna","Fionnula","Fiorenze","Fleur","Fleurette","Flo","Flor","Flora","Florance","Flore","Florella","Florence","Florencia","Florentia","Florenza","Florette","Flori","Floria","Florida","Florie","Florina","Florinda","Floris","Florri","Florrie","Florry","Flory","Flossi","Flossie","Flossy","Flss","Fran","Francene","Frances","Francesca","Francine","Francisca","Franciska","Francoise","Francyne","Frank","Frankie","Franky","Franni","Frannie","Franny","Frayda","Fred","Freda","Freddi","Freddie","Freddy","Fredelia","Frederica","Fredericka","Frederique","Fredi","Fredia","Fredra","Fredrika","Freida","Frieda","Friederike","Fulvia","Gabbey","Gabbi","Gabbie","Gabey","Gabi","Gabie","Gabriel","Gabriela","Gabriell","Gabriella","Gabrielle","Gabriellia","Gabrila","Gaby","Gae","Gael","Gail","Gale","Galina","Garland","Garnet","Garnette","Gates","Gavra","Gavrielle","Gay","Gaye","Gayel","Gayla","Gayle","Gayleen","Gaylene","Gaynor","Gelya","Gena","Gene","Geneva","Genevieve","Genevra","Genia","Genna","Genni","Gennie","Gennifer","Genny","Genovera","Genvieve","George","Georgeanna","Georgeanne","Georgena","Georgeta","Georgetta","Georgette","Georgia","Georgiana","Georgianna","Georgianne","Georgie","Georgina","Georgine","Geralda","Geraldine","Gerda","Gerhardine","Geri","Gerianna","Gerianne","Gerladina","Germain","Germaine","Germana","Gerri","Gerrie","Gerrilee","Gerry","Gert","Gerta","Gerti","Gertie","Gertrud","Gertruda","Gertrude","Gertrudis","Gerty","Giacinta","Giana","Gianina","Gianna","Gigi","Gilberta","Gilberte","Gilbertina","Gilbertine","Gilda","Gilemette","Gill","Gillan","Gilli","Gillian","Gillie","Gilligan","Gilly","Gina","Ginelle","Ginevra","Ginger","Ginni","Ginnie","Ginnifer","Ginny","Giorgia","Giovanna","Gipsy","Giralda","Gisela","Gisele","Gisella","Giselle","Giuditta","Giulia","Giulietta","Giustina","Gizela","Glad","Gladi","Gladys","Gleda","Glen","Glenda","Glenine","Glenn","Glenna","Glennie","Glennis","Glori","Gloria","Gloriana","Gloriane","Glory","Glyn","Glynda","Glynis","Glynnis","Gnni","Godiva","Golda","Goldarina","Goldi","Goldia","Goldie","Goldina","Goldy","Grace","Gracia","Gracie","Grata","Gratia","Gratiana","Gray","Grayce","Grazia","Greer","Greta","Gretal","Gretchen","Grete","Gretel","Grethel","Gretna","Gretta","Grier","Griselda","Grissel","Guendolen","Guenevere","Guenna","Guglielma","Gui","Guillema","Guillemette","Guinevere","Guinna","Gunilla","Gus","Gusella","Gussi","Gussie","Gussy","Gusta","Gusti","Gustie","Gusty","Gwen","Gwendolen","Gwendolin","Gwendolyn","Gweneth","Gwenette","Gwenneth","Gwenni","Gwennie","Gwenny","Gwenora","Gwenore","Gwyn","Gwyneth","Gwynne","Gypsy","Hadria","Hailee","Haily","Haleigh","Halette","Haley","Hali","Halie","Halimeda","Halley","Halli","Hallie","Hally","Hana","Hanna","Hannah","Hanni","Hannie","Hannis","Hanny","Happy","Harlene","Harley","Harli","Harlie","Harmonia","Harmonie","Harmony","Harri","Harrie","Harriet","Harriett","Harrietta","Harriette","Harriot","Harriott","Hatti","Hattie","Hatty","Hayley","Hazel","Heath","Heather","Heda","Hedda","Heddi","Heddie","Hedi","Hedvig","Hedvige","Hedwig","Hedwiga","Hedy","Heida","Heidi","Heidie","Helaina","Helaine","Helen","Helen-elizabeth","Helena","Helene","Helenka","Helga","Helge","Helli","Heloise","Helsa","Helyn","Hendrika","Henka","Henrie","Henrieta","Henrietta","Henriette","Henryetta","Hephzibah","Hermia","Hermina","Hermine","Herminia","Hermione","Herta","Hertha","Hester","Hesther","Hestia","Hetti","Hettie","Hetty","Hilary","Hilda","Hildagard","Hildagarde","Hilde","Hildegaard","Hildegarde","Hildy","Hillary","Hilliary","Hinda","Holli","Hollie","Holly","Holly-anne","Hollyanne","Honey","Honor","Honoria","Hope","Horatia","Hortense","Hortensia","Hulda","Hyacinth","Hyacintha","Hyacinthe","Hyacinthia","Hyacinthie","Hynda","Ianthe","Ibbie","Ibby","Ida","Idalia","Idalina","Idaline","Idell","Idelle","Idette","Ileana","Ileane","Ilene","Ilise","Ilka","Illa","Ilsa","Ilse","Ilysa","Ilyse","Ilyssa","Imelda","Imogen","Imogene","Imojean","Ina","Indira","Ines","Inesita","Inessa","Inez","Inga","Ingaberg","Ingaborg","Inge","Ingeberg","Ingeborg","Inger","Ingrid","Ingunna","Inna","Iolande","Iolanthe","Iona","Iormina","Ira","Irena","Irene","Irina","Iris","Irita","Irma","Isa","Isabel","Isabelita","Isabella","Isabelle","Isadora","Isahella","Iseabal","Isidora","Isis","Isobel","Issi","Issie","Issy","Ivett","Ivette","Ivie","Ivonne","Ivory","Ivy","Izabel","Jacenta","Jacinda","Jacinta","Jacintha","Jacinthe","Jackelyn","Jacki","Jackie","Jacklin","Jacklyn","Jackquelin","Jackqueline","Jacky","Jaclin","Jaclyn","Jacquelin","Jacqueline","Jacquelyn","Jacquelynn","Jacquenetta","Jacquenette","Jacquetta","Jacquette","Jacqui","Jacquie","Jacynth","Jada","Jade","Jaime","Jaimie","Jaine","Jami","Jamie","Jamima","Jammie","Jan","Jana","Janaya","Janaye","Jandy","Jane","Janean","Janeczka","Janeen","Janel","Janela","Janella","Janelle","Janene","Janenna","Janessa","Janet","Janeta","Janetta","Janette","Janeva","Janey","Jania","Janice","Janie","Janifer","Janina","Janine","Janis","Janith","Janka","Janna","Jannel","Jannelle","Janot","Jany","Jaquelin","Jaquelyn","Jaquenetta","Jaquenette","Jaquith","Jasmin","Jasmina","Jasmine","Jayme","Jaymee","Jayne","Jaynell","Jazmin","Jean","Jeana","Jeane","Jeanelle","Jeanette","Jeanie","Jeanine","Jeanna","Jeanne","Jeannette","Jeannie","Jeannine","Jehanna","Jelene","Jemie","Jemima","Jemimah","Jemmie","Jemmy","Jen","Jena","Jenda","Jenelle","Jeni","Jenica","Jeniece","Jenifer","Jeniffer","Jenilee","Jenine","Jenn","Jenna","Jennee","Jennette","Jenni","Jennica","Jennie","Jennifer","Jennilee","Jennine","Jenny","Jeralee","Jere","Jeri","Jermaine","Jerrie","Jerrilee","Jerrilyn","Jerrine","Jerry","Jerrylee","Jess","Jessa","Jessalin","Jessalyn","Jessamine","Jessamyn","Jesse","Jesselyn","Jessi","Jessica","Jessie","Jessika","Jessy","Jewel","Jewell","Jewelle","Jill","Jillana","Jillane","Jillayne","Jilleen","Jillene","Jilli","Jillian","Jillie","Jilly","Jinny","Jo","Jo-ann","Jo-anne","Joan","Joana","Joane","Joanie","Joann","Joanna","Joanne","Joannes","Jobey","Jobi","Jobie","Jobina","Joby","Jobye","Jobyna","Jocelin","Joceline","Jocelyn","Jocelyne","Jodee","Jodi","Jodie","Jody","Joeann","Joela","Joelie","Joell","Joella","Joelle","Joellen","Joelly","Joellyn","Joelynn","Joete","Joey","Johanna","Johannah","Johna","Johnath","Johnette","Johnna","Joice","Jojo","Jolee","Joleen","Jolene","Joletta","Joli","Jolie","Joline","Joly","Jolyn","Jolynn","Jonell","Joni","Jonie","Jonis","Jordain","Jordan","Jordana","Jordanna","Jorey","Jori","Jorie","Jorrie","Jorry","Joscelin","Josee","Josefa","Josefina","Josepha","Josephina","Josephine","Josey","Josi","Josie","Josselyn","Josy","Jourdan","Joy","Joya","Joyan","Joyann","Joyce","Joycelin","Joye","Jsandye","Juana","Juanita","Judi","Judie","Judith","Juditha","Judy","Judye","Juieta","Julee","Juli","Julia","Juliana","Juliane","Juliann","Julianna","Julianne","Julie","Julienne","Juliet","Julieta","Julietta","Juliette","Julina","Juline","Julissa","Julita","June","Junette","Junia","Junie","Junina","Justina","Justine","Justinn","Jyoti","Kacey","Kacie","Kacy","Kaela","Kai","Kaia","Kaila","Kaile","Kailey","Kaitlin","Kaitlyn","Kaitlynn","Kaja","Kakalina","Kala","Kaleena","Kali","Kalie","Kalila","Kalina","Kalinda","Kalindi","Kalli","Kally","Kameko","Kamila","Kamilah","Kamillah","Kandace","Kandy","Kania","Kanya","Kara","Kara-lynn","Karalee","Karalynn","Kare","Karee","Karel","Karen","Karena","Kari","Karia","Karie","Karil","Karilynn","Karin","Karina","Karine","Kariotta","Karisa","Karissa","Karita","Karla","Karlee","Karleen","Karlen","Karlene","Karlie","Karlotta","Karlotte","Karly","Karlyn","Karmen","Karna","Karol","Karola","Karole","Karolina","Karoline","Karoly","Karon","Karrah","Karrie","Karry","Kary","Karyl","Karylin","Karyn","Kasey","Kass","Kassandra","Kassey","Kassi","Kassia","Kassie","Kat","Kata","Katalin","Kate","Katee","Katerina","Katerine","Katey","Kath","Katha","Katharina","Katharine","Katharyn","Kathe","Katherina","Katherine","Katheryn","Kathi","Kathie","Kathleen","Kathlin","Kathrine","Kathryn","Kathryne","Kathy","Kathye","Kati","Katie","Katina","Katine","Katinka","Katleen","Katlin","Katrina","Katrine","Katrinka","Katti","Kattie","Katuscha","Katusha","Katy","Katya","Kay","Kaycee","Kaye","Kayla","Kayle","Kaylee","Kayley","Kaylil","Kaylyn","Keeley","Keelia","Keely","Kelcey","Kelci","Kelcie","Kelcy","Kelila","Kellen","Kelley","Kelli","Kellia","Kellie","Kellina","Kellsie","Kelly","Kellyann","Kelsey","Kelsi","Kelsy","Kendra","Kendre","Kenna","Keri","Keriann","Kerianne","Kerri","Kerrie","Kerrill","Kerrin","Kerry","Kerstin","Kesley","Keslie","Kessia","Kessiah","Ketti","Kettie","Ketty","Kevina","Kevyn","Ki","Kiah","Kial","Kiele","Kiersten","Kikelia","Kiley","Kim","Kimberlee","Kimberley","Kimberli","Kimberly","Kimberlyn","Kimbra","Kimmi","Kimmie","Kimmy","Kinna","Kip","Kipp","Kippie","Kippy","Kira","Kirbee","Kirbie","Kirby","Kiri","Kirsten","Kirsteni","Kirsti","Kirstin","Kirstyn","Kissee","Kissiah","Kissie","Kit","Kitti","Kittie","Kitty","Kizzee","Kizzie","Klara","Klarika","Klarrisa","Konstance","Konstanze","Koo","Kora","Koral","Koralle","Kordula","Kore","Korella","Koren","Koressa","Kori","Korie","Korney","Korrie","Korry","Kris","Krissie","Krissy","Krista","Kristal","Kristan","Kriste","Kristel","Kristen","Kristi","Kristien","Kristin","Kristina","Kristine","Kristy","Kristyn","Krysta","Krystal","Krystalle","Krystle","Krystyna","Kyla","Kyle","Kylen","Kylie","Kylila","Kylynn","Kym","Kynthia","Kyrstin","Lacee","Lacey","Lacie","Lacy","Ladonna","Laetitia","Laina","Lainey","Lana","Lanae","Lane","Lanette","Laney","Lani","Lanie","Lanita","Lanna","Lanni","Lanny","Lara","Laraine","Lari","Larina","Larine","Larisa","Larissa","Lark","Laryssa","Latashia","Latia","Latisha","Latrena","Latrina","Laura","Lauraine","Laural","Lauralee","Laure","Lauree","Laureen","Laurel","Laurella","Lauren","Laurena","Laurene","Lauretta","Laurette","Lauri","Laurianne","Laurice","Laurie","Lauryn","Lavena","Laverna","Laverne","Lavina","Lavinia","Lavinie","Layla","Layne","Layney","Lea","Leah","Leandra","Leann","Leanna","Leanor","Leanora","Lebbie","Leda","Lee","Leeann","Leeanne","Leela","Leelah","Leena","Leesa","Leese","Legra","Leia","Leigh","Leigha","Leila","Leilah","Leisha","Lela","Lelah","Leland","Lelia","Lena","Lenee","Lenette","Lenka","Lenna","Lenora","Lenore","Leodora","Leoine","Leola","Leoline","Leona","Leonanie","Leone","Leonelle","Leonie","Leonora","Leonore","Leontine","Leontyne","Leora","Leshia","Lesley","Lesli","Leslie","Lesly","Lesya","Leta","Lethia","Leticia","Letisha","Letitia","Letizia","Letta","Letti","Lettie","Letty","Lexi","Lexie","Lexine","Lexis","Lexy","Leyla","Lezlie","Lia","Lian","Liana","Liane","Lianna","Lianne","Lib","Libbey","Libbi","Libbie","Libby","Licha","Lida","Lidia","Liesa","Lil","Lila","Lilah","Lilas","Lilia","Lilian","Liliane","Lilias","Lilith","Lilla","Lilli","Lillian","Lillis","Lilllie","Lilly","Lily","Lilyan","Lin","Lina","Lind","Linda","Lindi","Lindie","Lindsay","Lindsey","Lindsy","Lindy","Linea","Linell","Linet","Linette","Linn","Linnea","Linnell","Linnet","Linnie","Linzy","Lira","Lisa","Lisabeth","Lisbeth","Lise","Lisetta","Lisette","Lisha","Lishe","Lissa","Lissi","Lissie","Lissy","Lita","Liuka","Liv","Liva","Livia","Livvie","Livvy","Livvyy","Livy","Liz","Liza","Lizabeth","Lizbeth","Lizette","Lizzie","Lizzy","Loella","Lois","Loise","Lola","Loleta","Lolita","Lolly","Lona","Lonee","Loni","Lonna","Lonni","Lonnie","Lora","Lorain","Loraine","Loralee","Loralie","Loralyn","Loree","Loreen","Lorelei","Lorelle","Loren","Lorena","Lorene","Lorenza","Loretta","Lorette","Lori","Loria","Lorianna","Lorianne","Lorie","Lorilee","Lorilyn","Lorinda","Lorine","Lorita","Lorna","Lorne","Lorraine","Lorrayne","Lorri","Lorrie","Lorrin","Lorry","Lory","Lotta","Lotte","Lotti","Lottie","Lotty","Lou","Louella","Louisa","Louise","Louisette","Loutitia","Lu","Luce","Luci","Lucia","Luciana","Lucie","Lucienne","Lucila","Lucilia","Lucille","Lucina","Lucinda","Lucine","Lucita","Lucky","Lucretia","Lucy","Ludovika","Luella","Luelle","Luisa","Luise","Lula","Lulita","Lulu","Lura","Lurette","Lurleen","Lurlene","Lurline","Lusa","Luz","Lyda","Lydia","Lydie","Lyn","Lynda","Lynde","Lyndel","Lyndell","Lyndsay","Lyndsey","Lyndsie","Lyndy","Lynea","Lynelle","Lynett","Lynette","Lynn","Lynna","Lynne","Lynnea","Lynnell","Lynnelle","Lynnet","Lynnett","Lynnette","Lynsey","Lyssa","Mab","Mabel","Mabelle","Mable","Mada","Madalena","Madalyn","Maddalena","Maddi","Maddie","Maddy","Madel","Madelaine","Madeleine","Madelena","Madelene","Madelin","Madelina","Madeline","Madella","Madelle","Madelon","Madelyn","Madge","Madlen","Madlin","Madonna","Mady","Mae","Maegan","Mag","Magda","Magdaia","Magdalen","Magdalena","Magdalene","Maggee","Maggi","Maggie","Maggy","Mahala","Mahalia","Maia","Maible","Maiga","Maighdiln","Mair","Maire","Maisey","Maisie","Maitilde","Mala","Malanie","Malena","Malia","Malina","Malinda","Malinde","Malissa","Malissia","Mallissa","Mallorie","Mallory","Malorie","Malory","Malva","Malvina","Malynda","Mame","Mamie","Manda","Mandi","Mandie","Mandy","Manon","Manya","Mara","Marabel","Marcela","Marcelia","Marcella","Marcelle","Marcellina","Marcelline","Marchelle","Marci","Marcia","Marcie","Marcile","Marcille","Marcy","Mareah","Maren","Marena","Maressa","Marga","Margalit","Margalo","Margaret","Margareta","Margarete","Margaretha","Margarethe","Margaretta","Margarette","Margarita","Margaux","Marge","Margeaux","Margery","Marget","Margette","Margi","Margie","Margit","Margo","Margot","Margret","Marguerite","Margy","Mari","Maria","Mariam","Marian","Mariana","Mariann","Marianna","Marianne","Maribel","Maribelle","Maribeth","Marice","Maridel","Marie","Marie-ann","Marie-jeanne","Marieann","Mariejeanne","Mariel","Mariele","Marielle","Mariellen","Marietta","Mariette","Marigold","Marijo","Marika","Marilee","Marilin","Marillin","Marilyn","Marin","Marina","Marinna","Marion","Mariquilla","Maris","Marisa","Mariska","Marissa","Marita","Maritsa","Mariya","Marj","Marja","Marje","Marji","Marjie","Marjorie","Marjory","Marjy","Marketa","Marla","Marlane","Marleah","Marlee","Marleen","Marlena","Marlene","Marley","Marlie","Marline","Marlo","Marlyn","Marna","Marne","Marney","Marni","Marnia","Marnie","Marquita","Marrilee","Marris","Marrissa","Marsha","Marsiella","Marta","Martelle","Martguerita","Martha","Marthe","Marthena","Marti","Martica","Martie","Martina","Martita","Marty","Martynne","Mary","Marya","Maryann","Maryanna","Maryanne","Marybelle","Marybeth","Maryellen","Maryjane","Maryjo","Maryl","Marylee","Marylin","Marylinda","Marylou","Marylynne","Maryrose","Marys","Marysa","Masha","Matelda","Mathilda","Mathilde","Matilda","Matilde","Matti","Mattie","Matty","Maud","Maude","Maudie","Maura","Maure","Maureen","Maureene","Maurene","Maurine","Maurise","Maurita","Maurizia","Mavis","Mavra","Max","Maxi","Maxie","Maxine","Maxy","May","Maybelle","Maye","Mead","Meade","Meagan","Meaghan","Meara","Mechelle","Meg","Megan","Megen","Meggi","Meggie","Meggy","Meghan","Meghann","Mehetabel","Mei","Mel","Mela","Melamie","Melania","Melanie","Melantha","Melany","Melba","Melesa","Melessa","Melicent","Melina","Melinda","Melinde","Melisa","Melisande","Melisandra","Melisenda","Melisent","Melissa","Melisse","Melita","Melitta","Mella","Melli","Mellicent","Mellie","Mellisa","Mellisent","Melloney","Melly","Melodee","Melodie","Melody","Melonie","Melony","Melosa","Melva","Mercedes","Merci","Mercie","Mercy","Meredith","Meredithe","Meridel","Meridith","Meriel","Merilee","Merilyn","Meris","Merissa","Merl","Merla","Merle","Merlina","Merline","Merna","Merola","Merralee","Merridie","Merrie","Merrielle","Merrile","Merrilee","Merrili","Merrill","Merrily","Merry","Mersey","Meryl","Meta","Mia","Micaela","Michaela","Michaelina","Michaeline","Michaella","Michal","Michel","Michele","Michelina","Micheline","Michell","Michelle","Micki","Mickie","Micky","Midge","Mignon","Mignonne","Miguela","Miguelita","Mikaela","Mil","Mildred","Mildrid","Milena","Milicent","Milissent","Milka","Milli","Millicent","Millie","Millisent","Milly","Milzie","Mimi","Min","Mina","Minda","Mindy","Minerva","Minetta","Minette","Minna","Minnaminnie","Minne","Minni","Minnie","Minnnie","Minny","Minta","Miquela","Mira","Mirabel","Mirabella","Mirabelle","Miran","Miranda","Mireielle","Mireille","Mirella","Mirelle","Miriam","Mirilla","Mirna","Misha","Missie","Missy","Misti","Misty","Mitzi","Modesta","Modestia","Modestine","Modesty","Moina","Moira","Moll","Mollee","Molli","Mollie","Molly","Mommy","Mona","Monah","Monica","Monika","Monique","Mora","Moreen","Morena","Morgan","Morgana","Morganica","Morganne","Morgen","Moria","Morissa","Morna","Moselle","Moyna","Moyra","Mozelle","Muffin","Mufi","Mufinella","Muire","Mureil","Murial","Muriel","Murielle","Myra","Myrah","Myranda","Myriam","Myrilla","Myrle","Myrlene","Myrna","Myrta","Myrtia","Myrtice","Myrtie","Myrtle","Nada","Nadean","Nadeen","Nadia","Nadine","Nadiya","Nady","Nadya","Nalani","Nan","Nana","Nananne","Nance","Nancee","Nancey","Nanci","Nancie","Nancy","Nanete","Nanette","Nani","Nanice","Nanine","Nannette","Nanni","Nannie","Nanny","Nanon","Naoma","Naomi","Nara","Nari","Nariko","Nat","Nata","Natala","Natalee","Natalie","Natalina","Nataline","Natalya","Natasha","Natassia","Nathalia","Nathalie","Natividad","Natka","Natty","Neala","Neda","Nedda","Nedi","Neely","Neila","Neile","Neilla","Neille","Nelia","Nelie","Nell","Nelle","Nelli","Nellie","Nelly","Nerissa","Nerita","Nert","Nerta","Nerte","Nerti","Nertie","Nerty","Nessa","Nessi","Nessie","Nessy","Nesta","Netta","Netti","Nettie","Nettle","Netty","Nevsa","Neysa","Nichol","Nichole","Nicholle","Nicki","Nickie","Nicky","Nicol","Nicola","Nicole","Nicolea","Nicolette","Nicoli","Nicolina","Nicoline","Nicolle","Nikaniki","Nike","Niki","Nikki","Nikkie","Nikoletta","Nikolia","Nina","Ninetta","Ninette","Ninnetta","Ninnette","Ninon","Nissa","Nisse","Nissie","Nissy","Nita","Nixie","Noami","Noel","Noelani","Noell","Noella","Noelle","Noellyn","Noelyn","Noemi","Nola","Nolana","Nolie","Nollie","Nomi","Nona","Nonah","Noni","Nonie","Nonna","Nonnah","Nora","Norah","Norean","Noreen","Norene","Norina","Norine","Norma","Norri","Norrie","Norry","Novelia","Nydia","Nyssa","Octavia","Odele","Odelia","Odelinda","Odella","Odelle","Odessa","Odetta","Odette","Odilia","Odille","Ofelia","Ofella","Ofilia","Ola","Olenka","Olga","Olia","Olimpia","Olive","Olivette","Olivia","Olivie","Oliy","Ollie","Olly","Olva","Olwen","Olympe","Olympia","Olympie","Ondrea","Oneida","Onida","Oona","Opal","Opalina","Opaline","Ophelia","Ophelie","Ora","Oralee","Oralia","Oralie","Oralla","Oralle","Orel","Orelee","Orelia","Orelie","Orella","Orelle","Oriana","Orly","Orsa","Orsola","Ortensia","Otha","Othelia","Othella","Othilia","Othilie","Ottilie","Page","Paige","Paloma","Pam","Pamela","Pamelina","Pamella","Pammi","Pammie","Pammy","Pandora","Pansie","Pansy","Paola","Paolina","Papagena","Pat","Patience","Patrica","Patrice","Patricia","Patrizia","Patsy","Patti","Pattie","Patty","Paula","Paule","Pauletta","Paulette","Pauli","Paulie","Paulina","Pauline","Paulita","Pauly","Pavia","Pavla","Pearl","Pearla","Pearle","Pearline","Peg","Pegeen","Peggi","Peggie","Peggy","Pen","Penelopa","Penelope","Penni","Pennie","Penny","Pepi","Pepita","Peri","Peria","Perl","Perla","Perle","Perri","Perrine","Perry","Persis","Pet","Peta","Petra","Petrina","Petronella","Petronia","Petronilla","Petronille","Petunia","Phaedra","Phaidra","Phebe","Phedra","Phelia","Phil","Philipa","Philippa","Philippe","Philippine","Philis","Phillida","Phillie","Phillis","Philly","Philomena","Phoebe","Phylis","Phyllida","Phyllis","Phyllys","Phylys","Pia","Pier","Pierette","Pierrette","Pietra","Piper","Pippa","Pippy","Polly","Pollyanna","Pooh","Poppy","Portia","Pris","Prisca","Priscella","Priscilla","Prissie","Pru","Prudence","Prudi","Prudy","Prue","Queenie","Quentin","Querida","Quinn","Quinta","Quintana","Quintilla","Quintina","Rachael","Rachel","Rachele","Rachelle","Rae","Raeann","Raf","Rafa","Rafaela","Rafaelia","Rafaelita","Rahal","Rahel","Raina","Raine","Rakel","Ralina","Ramona","Ramonda","Rana","Randa","Randee","Randene","Randi","Randie","Randy","Ranee","Rani","Rania","Ranice","Ranique","Ranna","Raphaela","Raquel","Raquela","Rasia","Rasla","Raven","Ray","Raychel","Raye","Rayna","Raynell","Rayshell","Rea","Reba","Rebbecca","Rebe","Rebeca","Rebecca","Rebecka","Rebeka","Rebekah","Rebekkah","Ree","Reeba","Reena","Reeta","Reeva","Regan","Reggi","Reggie","Regina","Regine","Reiko","Reina","Reine","Remy","Rena","Renae","Renata","Renate","Rene","Renee","Renell","Renelle","Renie","Rennie","Reta","Retha","Revkah","Rey","Reyna","Rhea","Rheba","Rheta","Rhetta","Rhiamon","Rhianna","Rhianon","Rhoda","Rhodia","Rhodie","Rhody","Rhona","Rhonda","Riane","Riannon","Rianon","Rica","Ricca","Rici","Ricki","Rickie","Ricky","Riki","Rikki","Rina","Risa","Rita","Riva","Rivalee","Rivi","Rivkah","Rivy","Roana","Roanna","Roanne","Robbi","Robbie","Robbin","Robby","Robbyn","Robena","Robenia","Roberta","Robin","Robina","Robinet","Robinett","Robinetta","Robinette","Robinia","Roby","Robyn","Roch","Rochell","Rochella","Rochelle","Rochette","Roda","Rodi","Rodie","Rodina","Rois","Romola","Romona","Romonda","Romy","Rona","Ronalda","Ronda","Ronica","Ronna","Ronni","Ronnica","Ronnie","Ronny","Roobbie","Rora","Rori","Rorie","Rory","Ros","Rosa","Rosabel","Rosabella","Rosabelle","Rosaleen","Rosalia","Rosalie","Rosalind","Rosalinda","Rosalinde","Rosaline","Rosalyn","Rosalynd","Rosamond","Rosamund","Rosana","Rosanna","Rosanne","Rose","Roseann","Roseanna","Roseanne","Roselia","Roselin","Roseline","Rosella","Roselle","Rosemaria","Rosemarie","Rosemary","Rosemonde","Rosene","Rosetta","Rosette","Roshelle","Rosie","Rosina","Rosita","Roslyn","Rosmunda","Rosy","Row","Rowe","Rowena","Roxana","Roxane","Roxanna","Roxanne","Roxi","Roxie","Roxine","Roxy","Roz","Rozalie","Rozalin","Rozamond","Rozanna","Rozanne","Roze","Rozele","Rozella","Rozelle","Rozina","Rubetta","Rubi","Rubia","Rubie","Rubina","Ruby","Ruperta","Ruth","Ruthann","Ruthanne","Ruthe","Ruthi","Ruthie","Ruthy","Ryann","Rycca","Saba","Sabina","Sabine","Sabra","Sabrina","Sacha","Sada","Sadella","Sadie","Sadye","Saidee","Sal","Salaidh","Sallee","Salli","Sallie","Sally","Sallyann","Sallyanne","Saloma","Salome","Salomi","Sam","Samantha","Samara","Samaria","Sammy","Sande","Sandi","Sandie","Sandra","Sandy","Sandye","Sapphira","Sapphire","Sara","Sara-ann","Saraann","Sarah","Sarajane","Saree","Sarena","Sarene","Sarette","Sari","Sarina","Sarine","Sarita","Sascha","Sasha","Sashenka","Saudra","Saundra","Savina","Sayre","Scarlet","Scarlett","Sean","Seana","Seka","Sela","Selena","Selene","Selestina","Selia","Selie","Selina","Selinda","Seline","Sella","Selle","Selma","Sena","Sephira","Serena","Serene","Shae","Shaina","Shaine","Shalna","Shalne","Shana","Shanda","Shandee","Shandeigh","Shandie","Shandra","Shandy","Shane","Shani","Shanie","Shanna","Shannah","Shannen","Shannon","Shanon","Shanta","Shantee","Shara","Sharai","Shari","Sharia","Sharity","Sharl","Sharla","Sharleen","Sharlene","Sharline","Sharon","Sharona","Sharron","Sharyl","Shaun","Shauna","Shawn","Shawna","Shawnee","Shay","Shayla","Shaylah","Shaylyn","Shaylynn","Shayna","Shayne","Shea","Sheba","Sheela","Sheelagh","Sheelah","Sheena","Sheeree","Sheila","Sheila-kathryn","Sheilah","Shel","Shela","Shelagh","Shelba","Shelbi","Shelby","Shelia","Shell","Shelley","Shelli","Shellie","Shelly","Shena","Sher","Sheree","Sheri","Sherie","Sherill","Sherilyn","Sherline","Sherri","Sherrie","Sherry","Sherye","Sheryl","Shina","Shir","Shirl","Shirlee","Shirleen","Shirlene","Shirley","Shirline","Shoshana","Shoshanna","Siana","Sianna","Sib","Sibbie","Sibby","Sibeal","Sibel","Sibella","Sibelle","Sibilla","Sibley","Sibyl","Sibylla","Sibylle","Sidoney","Sidonia","Sidonnie","Sigrid","Sile","Sileas","Silva","Silvana","Silvia","Silvie","Simona","Simone","Simonette","Simonne","Sindee","Siobhan","Sioux","Siouxie","Sisely","Sisile","Sissie","Sissy","Siusan","Sofia","Sofie","Sondra","Sonia","Sonja","Sonni","Sonnie","Sonnnie","Sonny","Sonya","Sophey","Sophi","Sophia","Sophie","Sophronia","Sorcha","Sosanna","Stace","Stacee","Stacey","Staci","Stacia","Stacie","Stacy","Stafani","Star","Starla","Starlene","Starlin","Starr","Stefa","Stefania","Stefanie","Steffane","Steffi","Steffie","Stella","Stepha","Stephana","Stephani","Stephanie","Stephannie","Stephenie","Stephi","Stephie","Stephine","Stesha","Stevana","Stevena","Stoddard","Storm","Stormi","Stormie","Stormy","Sue","Suellen","Sukey","Suki","Sula","Sunny","Sunshine","Susan","Susana","Susanetta","Susann","Susanna","Susannah","Susanne","Susette","Susi","Susie","Susy","Suzann","Suzanna","Suzanne","Suzette","Suzi","Suzie","Suzy","Sybil","Sybila","Sybilla","Sybille","Sybyl","Sydel","Sydelle","Sydney","Sylvia","Tabatha","Tabbatha","Tabbi","Tabbie","Tabbitha","Tabby","Tabina","Tabitha","Taffy","Talia","Tallia","Tallie","Tallou","Tallulah","Tally","Talya","Talyah","Tamar","Tamara","Tamarah","Tamarra","Tamera","Tami","Tamiko","Tamma","Tammara","Tammi","Tammie","Tammy","Tamqrah","Tamra","Tana","Tandi","Tandie","Tandy","Tanhya","Tani","Tania","Tanitansy","Tansy","Tanya","Tara","Tarah","Tarra","Tarrah","Taryn","Tasha","Tasia","Tate","Tatiana","Tatiania","Tatum","Tawnya","Tawsha","Ted","Tedda","Teddi","Teddie","Teddy","Tedi","Tedra","Teena","Teirtza","Teodora","Tera","Teresa","Terese","Teresina","Teresita","Teressa","Teri","Teriann","Terra","Terri","Terrie","Terrijo","Terry","Terrye","Tersina","Terza","Tess","Tessa","Tessi","Tessie","Tessy","Thalia","Thea","Theadora","Theda","Thekla","Thelma","Theo","Theodora","Theodosia","Theresa","Therese","Theresina","Theresita","Theressa","Therine","Thia","Thomasa","Thomasin","Thomasina","Thomasine","Tiena","Tierney","Tiertza","Tiff","Tiffani","Tiffanie","Tiffany","Tiffi","Tiffie","Tiffy","Tilda","Tildi","Tildie","Tildy","Tillie","Tilly","Tim","Timi","Timmi","Timmie","Timmy","Timothea","Tina","Tine","Tiphani","Tiphanie","Tiphany","Tish","Tisha","Tobe","Tobey","Tobi","Toby","Tobye","Toinette","Toma","Tomasina","Tomasine","Tomi","Tommi","Tommie","Tommy","Toni","Tonia","Tonie","Tony","Tonya","Tonye","Tootsie","Torey","Tori","Torie","Torrie","Tory","Tova","Tove","Tracee","Tracey","Traci","Tracie","Tracy","Trenna","Tresa","Trescha","Tressa","Tricia","Trina","Trish","Trisha","Trista","Trix","Trixi","Trixie","Trixy","Truda","Trude","Trudey","Trudi","Trudie","Trudy","Trula","Tuesday","Twila","Twyla","Tybi","Tybie","Tyne","Ula","Ulla","Ulrica","Ulrika","Ulrikaumeko","Ulrike","Umeko","Una","Ursa","Ursala","Ursola","Ursula","Ursulina","Ursuline","Uta","Val","Valaree","Valaria","Vale","Valeda","Valencia","Valene","Valenka","Valentia","Valentina","Valentine","Valera","Valeria","Valerie","Valery","Valerye","Valida","Valina","Valli","Vallie","Vally","Valma","Valry","Van","Vanda","Vanessa","Vania","Vanna","Vanni","Vannie","Vanny","Vanya","Veda","Velma","Velvet","Venita","Venus","Vera","Veradis","Vere","Verena","Verene","Veriee","Verile","Verina","Verine","Verla","Verna","Vernice","Veronica","Veronika","Veronike","Veronique","Vevay","Vi","Vicki","Vickie","Vicky","Victoria","Vida","Viki","Vikki","Vikky","Vilhelmina","Vilma","Vin","Vina","Vinita","Vinni","Vinnie","Vinny","Viola","Violante","Viole","Violet","Violetta","Violette","Virgie","Virgina","Virginia","Virginie","Vita","Vitia","Vitoria","Vittoria","Viv","Viva","Vivi","Vivia","Vivian","Viviana","Vivianna","Vivianne","Vivie","Vivien","Viviene","Vivienne","Viviyan","Vivyan","Vivyanne","Vonni","Vonnie","Vonny","Vyky","Wallie","Wallis","Walliw","Wally","Waly","Wanda","Wandie","Wandis","Waneta","Wanids","Wenda","Wendeline","Wendi","Wendie","Wendy","Wendye","Wenona","Wenonah","Whitney","Wileen","Wilhelmina","Wilhelmine","Wilie","Willa","Willabella","Willamina","Willetta","Willette","Willi","Willie","Willow","Willy","Willyt","Wilma","Wilmette","Wilona","Wilone","Wilow","Windy","Wini","Winifred","Winna","Winnah","Winne","Winni","Winnie","Winnifred","Winny","Winona","Winonah","Wren","Wrennie","Wylma","Wynn","Wynne","Wynnie","Wynny","Xaviera","Xena","Xenia","Xylia","Xylina","Yalonda","Yasmeen","Yasmin","Yelena","Yetta","Yettie","Yetty","Yevette","Ynes","Ynez","Yoko","Yolanda","Yolande","Yolane","Yolanthe","Yoshi","Yoshiko","Yovonnda","Ysabel","Yvette","Yvonne","Zabrina","Zahara","Zandra","Zaneta","Zara","Zarah","Zaria","Zarla","Zea","Zelda","Zelma","Zena","Zenia","Zia","Zilvia","Zita","Zitella","Zoe","Zola","Zonda","Zondra","Zonnya","Zora","Zorah","Zorana","Zorina","Zorine","Zsazsa","Zulema","Zuzana"],/*exports.*/starWars=["Ackbar","Adi Gallia","Anakin Skywalker","Arvel Crynyd","Ayla Secura","Bail Prestor Organa","Barriss Offee","Ben Quadinaros","Beru Whitesun lars","Bib Fortuna","Biggs Darklighter","Boba Fett","Bossk","C-3PO","Chewbacca","Cliegg Lars","Cordé","Darth Maul","Darth Vader","Dexter Jettster","Dooku","Dormé","Dud Bolt","Eeth Koth","Finis Valorum","Gasgano","Greedo","Gregar Typho","Grievous","Han Solo","IG-88","Jabba Desilijic Tiure","Jango Fett","Jar Jar Binks","Jek Tono Porkins","Jocasta Nu","Ki-Adi-Mundi","Kit Fisto","Lama Su","Lando Calrissian","Leia Organa","Lobot","Luke Skywalker","Luminara Unduli","Mace Windu","Mas Amedda","Mon Mothma","Nien Nunb","Nute Gunray","Obi-Wan Kenobi","Owen Lars","Padmé Amidala","Palpatine","Plo Koon","Poggle the Lesser","Quarsh Panaka","Qui-Gon Jinn","R2-D2","R4-P17","R5-D4","Ratts Tyerel","Raymus Antilles","Ric Olié","Roos Tarpals","Rugor Nass","Saesee Tiin","San Hill","Sebulba","Shaak Ti","Shmi Skywalker","Sly Moore","Tarfful","Taun We","Tion Medon","Wat Tambor","Watto","Wedge Antilles","Wicket Systri Warrick","Wilhuff Tarkin","Yarael Poof","Yoda","Zam Wesell"],/*exports.*/uniqueNamesGenerator=a=>{var n=[...a&&a.dictionaries||i.dictionaries],l={...i,...a,length:a&&a.length||n.length,dictionaries:n};if(!a||!a.dictionaries||!a.dictionaries.length)throw new Error('A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide');return new e(l).generate()};
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
    }
    return array;
}

uniqueNamesGenerator()

var nicks=[]
var dics=[colors, /*exports.*/adjectives, /*exports.*/animals]//, /*exports.*/names]
function generateName(){
var generatedName
shuffleArray(dics)
    while (!generatedName || nicks.includes(generatedName)) {
      generatedName = /*exports.*/uniqueNamesGenerator({
        dictionaries: dics,//, /*exports.*/languages, /*exports.*/starWars],
        style: 'capital',
        separator: '_',
        length: 2,
      }).replace(/\s/g, '').substring(0, 16);
    }
	return generatedName
	}

async function genBrute({
	level,
	name=false,
	
}){
	var template=heheheha
	if(!LOCAL){template = await getBrute(BRUTE)}
	
	
	
	var brute = createRandomBruteStats()
	brute.gender = getRandomProperty(Gender)
	brute.colors=getRandomColors(brute.gender)
	brute.body = getRandomBody(brute.gender)
	brute.name=name?name:generateName()
	brute.userId=brute.name
	brute.id=brute.name
	
	
	
	for(var chr in template){if(!(chr in brute)){brute[chr] = template[chr]}}
	
	
	
	
	for(var i=1;i<level;i++){brute=levelUp(brute);}
	
	return brute;
	
	
	
}


function levelUp(brute){
	var choices = getLevelUpChoices(brute)
	var newbrute = updateBruteData(structuredClone(brute),choices[0])
	return newbrute
	
}var weaponImages = {
  fan: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNTQuNHB4IiB3aWR0aD0iNjAuNzVweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAxLjMsIC04LjM1KSI+DQogICAgPHBhdGggZD0iTTQuNzUgMTEuNDUgUTE2Ljc1IDEzLjU1IDI4LjY1IDE2LjM1IEw1MC4xNSAyMS40IDU0LjY1IDIyLjM1IFE1My41NSAyNi44IDUxLjggMzAuOTUgTDMxLjQgMjIuMTUgUTI1LjEgMTkuNDUgMTguNTUgMTcuMSBMMTUuNSAxNi4wIDQuNzUgMTEuNDUgTTQ4Ljk1IDM2LjYgUTQ3LjI1IDM5LjU1IDQ1LjE1IDQyLjMgTDQ0LjIgNDMuNTUgNDIuNyA0Mi4xIFEzNi41NSAzNi4xNSAyNS45NSAyOC4zIDE3LjE1IDIxLjc1IDEwLjcgMTcuMjUgTDMuOCAxMi4wNSAxNS4xNSAxOC4wIFEyMi4wNSAyMS41IDMzLjE1IDI3LjY1IDQ0LjI1IDMzLjc1IDQ4Ljk1IDM2LjYgTTM1LjIgNTEuNCBRMjkuNyA1NC4wNSAyNi42NSA1NC45IEwyNS42NSA1NS4yIFEyMi43IDQ5LjA1IDE2LjAgMzYuNDUgTDMuMyAxMi43IDkuMCAxOC43NSBRMTkuMyAyOS45NSAyNi4zIDM5LjEgMzMuMyA0OC4yNSAzNS4yIDUxLjQgTTE1LjA1IDU3LjEgTDMuNyA1Ny42IDIuNCAxNC45IDkuNCAzOC4wNSAxNS4wNSA1Ny4xIiBmaWxsPSIjZmZmZmNjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0yLjQ1IDExLjA1IEwyLjkgMTEuMTUgNC43NSAxMS40NSAxNS41IDE2LjAgMTguNTUgMTcuMSBRMjUuMSAxOS40NSAzMS40IDIyLjE1IEw1MS44IDMwLjk1IDQ4Ljk1IDM2LjYgUTQ0LjI1IDMzLjc1IDMzLjE1IDI3LjY1IDIyLjA1IDIxLjUgMTUuMTUgMTguMCBMMy44IDEyLjA1IDEwLjcgMTcuMjUgUTE3LjE1IDIxLjc1IDI1Ljk1IDI4LjMgMzYuNTUgMzYuMTUgNDIuNyA0Mi4xIEw0NC4yIDQzLjU1IFEzOS4yNSA0OS41IDM1LjIgNTEuNCAzMy4zIDQ4LjI1IDI2LjMgMzkuMSAxOS4zIDI5Ljk1IDkuMCAxOC43NSBMMy4zIDEyLjcgMTYuMCAzNi40NSBRMjIuNyA0OS4wNSAyNS42NSA1NS4yIEwxNS4wNSA1Ny4xIDkuNCAzOC4wNSAyLjQgMTQuOSAyLjMgMTEuMDUgMi40IDExLjA1IDIuNDUgMTEuMDUiIGZpbGw9IiNlOGQ0YWQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTU0LjY1IDIyLjM1IEw1MC4xNSAyMS40IDI4LjY1IDE2LjM1IFExNi43NSAxMy41NSA0Ljc1IDExLjQ1IEwyLjkgMTEuMTUgMi40NSAxMS4wNSAyLjQgMTEuMDUgMi4yNSAxMC41NSAzLjU1IDkuMzUgMjIuMiAxMi4zIFEzNC43IDE0LjQgNTguNDUgMjAuMTUgNTguMiAyMS42IDU3LjE1IDIyLjggTDU0LjY1IDIyLjM1IE0zLjcgNTcuNiBMMy43IDYxLjc1IDAuNiA2MS43NSBRMC44NSA1MC4xIDAuMjUgMzguNSAtMC40NSAyNS44NSAtMC4yNSAxMy4zIEwtMC4wNSAxMC44NSAyLjE1IDEwLjU1IDIuMjUgMTAuNTUgMi4zIDExLjA1IDIuNCAxNC45IDMuNyA1Ny42IiBmaWxsPSIjNzI1MzI3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik00Ljc1IDExLjQ1IFExNi43NSAxMy41NSAyOC42NSAxNi4zNSBMNTAuMTUgMjEuNCA1NC42NSAyMi4zNSA1Ny4xNSAyMi44IFE1OC4yIDIxLjYgNTguNDUgMjAuMTUgMzQuNyAxNC40IDIyLjIgMTIuMyBMMy41NSA5LjM1IDIuMjUgMTAuNTUgMi40IDExLjA1IDIuNDUgMTEuMDUgMi45IDExLjE1IDQuNzUgMTEuNDUgTTUxLjggMzAuOTUgUTUzLjU1IDI2LjggNTQuNjUgMjIuMzUgTTU4LjQ1IDIwLjE1IEw1OC40NSAxOS45IDU4LjQ1IDIwLjE1IE00OC45NSAzNi42IEw1MS44IDMwLjk1IE00OC45NSAzNi42IFE0Ny4yNSAzOS41NSA0NS4xNSA0Mi4zIEw0NC4yIDQzLjU1IFEzOS4yNSA0OS41IDM1LjIgNTEuNCAyOS43IDU0LjA1IDI2LjY1IDU0LjkgTDI1LjY1IDU1LjIgMTUuMDUgNTcuMSAzLjcgNTcuNiAzLjcgNjEuNzUgMC42IDYxLjc1IFEwLjg1IDUwLjEgMC4yNSAzOC41IC0wLjQ1IDI1Ljg1IC0wLjI1IDEzLjMgTC0wLjA1IDEwLjg1IDIuMTUgMTAuNTUgMi4yNSAxMC41NSAyLjMgMTEuMDUgMi40IDE0LjkgMy43IDU3LjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgPC9nPg0KPC9zdmc+DQo8IS0tIDEgLS0+',
  keyboard: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNjguNDVweCIgd2lkdGg9IjkycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMCwgMC4wLCAwLjAsIDEuMCwgMjQuNjUsIC0zLjI1KSI+DQogICAgPHBhdGggZD0iTTQ5Ljc1IDQzLjk1IFE0Ny41IDQzLjE1IDQ3LjMgNDIuOCBMNDcuMCA0My40IDMzLjkgMzYuMCAzNi4xNSAzNS43IDQ5LjE1IDQyLjEgNDkuMjUgNDIuMCA0OS45IDQxLjUgNTAuNzUgNDIuMiA0OS43NSA0My45NSBNNDUuMyA2OC41NSBMNDkuMiA2MS43NSA1Ny4zNSA0Ny42IDU5LjQ1IDQzLjk1IDU5Ljg1IDQzLjI1IDU5LjQgNDMuMDUgNTguOTUgNDIuOCA2NC45IDQzLjA1IDQ5LjIgNzAuNyA0NS4zIDY4LjU1IE0tMTIuOSAxNC41NSBMLTEyLjY1IDE0LjA1IC0xMi4zIDEzLjIgLTExLjc1IDEzLjIgLTkuOCAxNC40IC04LjcgMTIuNzUgLTcuNDUgMTIuODUgUS02LjY1IDE0LjA1IC03Ljc1IDE0Ljk1IC0xMC40NSAxNy4zIC0xMi45IDE0LjU1IE0xMC43IDIyLjA1IEwxMS41NSAyMS41IDEyLjA1IDIxLjkgOS44IDI0LjkgUTQuNyAyNC4zIDMuMyAxOS43NSBMMy43NSAxOS45NSA5Ljg1IDIyLjc1IDEwLjcgMjIuMDUgTTI4LjY1IDMxLjc1IEwzMS42IDMxLjIgUTI5LjU1IDM0LjI1IDI2LjAgMzMuMiAyMS42IDMxLjggMTguNCAyOC4yNSBMMTguODUgMjcuMzUgMjguNjUgMzEuNzUgTTQuNDUgMzUuMyBMNC45IDM0LjU1IDYuNSAzNS4xIDkuMDUgMzMuNzUgUTkuNTUgMzUuNyA3LjcgMzYuNDUgNS4zIDM3LjUgNC40NSAzNS4zIE0zMi42NSA2MS42NSBMMzIuNCA2MS41IDMwLjEgNjAuMjUgMjkuODUgNTkuMiBRMjkuODUgNTcuMyAzMi44NSA1OC4xNSAzNS44IDU5LjAgMzUuOCA2MC41NSAzNS44IDYxLjcgMzMuOSA2MS43IEwzMi42NSA2MS42NSBNMjEuMjUgNTUuNCBMLTUuMTUgNDAuOTUgLTIuNyAzNi43IDI0LjQgNTEuMSAyMS4yNSA1NS40IE00Mi4yIDY2Ljg1IEwzOS43NSA2NC42NSBRMzkuODUgNjMuODUgNDAuNDUgNjMuNDUgTDQxLjU1IDYzLjIgUTQ0LjAgNjMuNzUgNDUuNyA2Ni4wNSBMNDUuODUgNjcuMSA0NS4wIDY3LjggNDMuMjUgNjcuNDUgNDIuMiA2Ni44NSBNNDUuNiA1OS43NSBMNDYuNDUgNTcuMDUgNDQuNSA1NS42NSA0My41IDU3LjEgNDIuNyA1Ni40IDQzLjMgNTQuOCBRNDEuODUgNTQuMSA0Mi42NSA1My4yNSBMNDQuMiA1My4zIDQ3LjMgNDkuNyA0NS4yIDU0LjQ1IDQ1LjQ1IDU0LjAgNDcuMzUgNTUuNTUgNDkuODUgNTIuOSA0OS45NSA1My4zNSBRNDkuOTUgNTUuMyA0OC43NSA1Ni41NSBMNTAuOCA1OC42NSA0OS43IDU4Ljk1IDQ3LjkgNTguMCA0Ni40NSA2MC4yIDQ1LjYgNTkuNzUiIGZpbGw9IiNjN2M2OGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTQ3LjMgNDIuOCBRNDcuNSA0My4xNSA0OS43NSA0My45NSBMNTAuNzUgNDIuMiA0OS45IDQxLjUgNDkuMjUgNDIuMCA0OS4xNSA0Mi4xIDM2LjE1IDM1LjcgMzMuOSAzNi4wIDQ3LjAgNDMuNCA0Ny4zIDQyLjggTTU5LjQ1IDQzLjk1IEw1Ny4zNSA0Ny42IDQ5LjIgNjEuNzUgNDUuMyA2OC41NSA0My4yNSA2Ny40NSA0NS4wIDY3LjggNDUuODUgNjcuMSA0NS43IDY2LjA1IFE0NC4wIDYzLjc1IDQxLjU1IDYzLjIgTDQwLjQ1IDYzLjQ1IFEzOS44NSA2My44NSAzOS43NSA2NC42NSBMNDIuMiA2Ni44NSAzMi42NSA2MS42NSAzMy45IDYxLjcgUTM1LjggNjEuNyAzNS44IDYwLjU1IDM1LjggNTkuMCAzMi44NSA1OC4xNSAyOS44NSA1Ny4zIDI5Ljg1IDU5LjIgTDMwLjEgNjAuMjUgMjEuMjUgNTUuNCAyNC40IDUxLjEgLTIuNyAzNi43IC01LjE1IDQwLjk1IC0yMS4xIDMyLjI1IC0yMy42NSAzMC44NSAtMTEuNTUgNS4yNSAtOS45IDQuMjUgNDcuMzUgMzAuODUgNjYuMzUgNDAuNSA2NC45IDQzLjA1IDU4Ljk1IDQyLjggNTkuNCA0My4wNSA1OS44NSA0My4yNSA1OS40NSA0My45NSBNNTcuMzUgNDcuNiBRNTIuMCA0NC43NSA0OS43NSA0My45NSA1Mi4wIDQ0Ljc1IDU3LjM1IDQ3LjYgTTQ5LjI1IDQyLjAgTDUwLjggMzguOTUgNTkuNCA0My4wNSA1MC44IDM4Ljk1IDQ5LjI1IDQyLjAgTS0xMi45IDE0LjU1IEwtMjEuMSAzMi4yNSAtMTIuOSAxNC41NSBRLTEwLjQ1IDE3LjMgLTcuNzUgMTQuOTUgLTYuNjUgMTQuMDUgLTcuNDUgMTIuODUgTC04LjcgMTIuNzUgLTkuOCAxNC40IC0xMS43NSAxMy4yIC0xMi4zIDEzLjIgLTEyLjY1IDE0LjA1IC0xMi45IDE0LjU1IE01MC44IDM4Ljk1IEwzNi4yNSAzMi4wIDMwLjIgMjkuMSAxNS42NSAyMi4xNSAxMS44IDIwLjMgLTQuMSAxMi43IC03LjggMTAuOTUgLTEwLjY1IDkuNiAtMTIuMiAxMy4wNSAtMTIuMyAxMy4yIC0xMi4yIDEzLjA1IC0xMC42NSA5LjYgLTcuOCAxMC45NSAtNC4xIDEyLjcgMTEuOCAyMC4zIDE1LjY1IDIyLjE1IDMwLjIgMjkuMSAzNi4yNSAzMi4wIDUwLjggMzguOTUgTTMuNzUgMTkuOTUgTDMuMyAxOS43NSBRNC43IDI0LjMgOS44IDI0LjkgTDEyLjA1IDIxLjkgMTEuNTUgMjEuNSAxMC43IDIyLjA1IDkuODUgMjIuNzUgMy43NSAxOS45NSAtNS41NSAxNS40IC00LjEgMTIuNyAtNS41NSAxNS40IDMuNzUgMTkuOTUgTTE1LjY1IDIyLjE1IEwxNC41IDI1LjAgMTguODUgMjcuMzUgMTQuNSAyNS4wIDE1LjY1IDIyLjE1IE0xMS44IDIwLjMgTDExLjQgMjAuNzUgUTExLjc1IDIwLjYgMTEuMDUgMjEuNiBMMTAuNyAyMi4wNSAxMS4wNSAyMS42IFExMS43NSAyMC42IDExLjQgMjAuNzUgTDExLjggMjAuMyBNMTguODUgMjcuMzUgTDE4LjQgMjguMjUgUTIxLjYgMzEuOCAyNi4wIDMzLjIgMjkuNTUgMzQuMjUgMzEuNiAzMS4yIEwyOC42NSAzMS43NSAxOC44NSAyNy4zNSBNMy45IDIzLjg1IFEyLjMgMjQuNzUgMy4xIDI2LjQgMy43IDI3LjcgNS40NSAyNy40IEw2LjggMjYuMzUgNS40NSAyNy40IFEzLjcgMjcuNyAzLjEgMjYuNCAyLjMgMjQuNzUgMy45IDIzLjg1IE00LjQ1IDM1LjMgUTUuMyAzNy41IDcuNyAzNi40NSA5LjU1IDM1LjcgOS4wNSAzMy43NSBMNi41IDM1LjEgNC45IDM0LjU1IDQuNDUgMzUuMyBNMzUuNDUgNDQuMSBMMzQuNyA0NS4yIDMyLjIgNTEuNTUgMzcuMzUgNTQuMDUgUTQwLjI1IDUxLjA1IDQxLjEgNDYuNSBMMzUuNDUgNDQuMSA0MS4xIDQ2LjUgUTQwLjI1IDUxLjA1IDM3LjM1IDU0LjA1IEwzMi4yIDUxLjU1IDM0LjcgNDUuMiAzNS40NSA0NC4xIE0yMS45NSA0MS4yIFEyMC42NSA0Mi4yNSAyMS41IDQzLjA1IDIyLjI1IDQzLjcgMjMuOSA0My44NSAyMi4yNSA0My43IDIxLjUgNDMuMDUgMjAuNjUgNDIuMjUgMjEuOTUgNDEuMiBNMjguNjUgMzEuNzUgTDMwLjIgMjkuMSAyOC42NSAzMS43NSBNMjMuOCAzMy42NSBMMjIuOCAzNC40NSBRMjMuNzUgMzYuNDUgMjYuMDUgMzYuNTUgMjMuNzUgMzYuNDUgMjIuOCAzNC40NSBMMjMuOCAzMy42NSBNMzYuMjUgMzIuMCBMMzUuMDUgMzUuMTUgMzYuMTUgMzUuNyAzNS4wNSAzNS4xNSAzNi4yNSAzMi4wIE0xMS4zNSAzNy42IEwxMC44NSAzOC42NSAxMS40NSAzOC45NSBRMTMuODUgMzkuMTUgMTYuMDUgMzguMjUgMTMuODUgMzkuMTUgMTEuNDUgMzguOTUgTDEwLjg1IDM4LjY1IDExLjM1IDM3LjYgTTI3LjQgNTEuMyBMMjguMTUgNTEuNyBRMzAuMzUgNTIuOCAzMS4yIDU0LjggTDI4LjYgNTguMTUgMzEuMiA1NC44IFEzMC4zNSA1Mi44IDI4LjE1IDUxLjcgTDI3LjQgNTEuMyBNNDYuNDUgNjAuMiBMNDcuOSA1OC4wIDQ5LjcgNTguOTUgNTAuOCA1OC42NSA0OC43NSA1Ni41NSBRNDkuOTUgNTUuMyA0OS45NSA1My4zNSBMNDkuODUgNTIuOSA0Ny4zNSA1NS41NSA0NS40NSA1NC4wIDQ1LjIgNTQuNDUgNDcuMyA0OS43IDQ0LjIgNTMuMyA0Mi42NSA1My4yNSBRNDEuODUgNTQuMSA0My4zIDU0LjggTDQyLjcgNTYuNCA0My41IDU3LjEgNDQuNSA1NS42NSA0Ni40NSA1Ny4wNSA0NS42IDU5Ljc1IDQ2LjQ1IDYwLjIgNDkuMiA2MS43NSA0Ni40NSA2MC4yIE00Ny4wIDQzLjQgTDQwLjE1IDU2LjcgNDUuNiA1OS43NSA0MC4xNSA1Ni43IDQ3LjAgNDMuNCBNLTEyLjUgMTguNzUgTC0xMi4yNSAxOS4zIC04Ljk1IDIwLjU1IC03Ljg1IDE5LjEgLTguOTUgMjAuNTUgLTEyLjI1IDE5LjMgLTEyLjUgMTguNzUgTS0xMi4yIDEzLjA1IEwtMTEuNzUgMTMuMiAtMTIuMiAxMy4wNSBNLTEwLjk1IDMxLjUgTC0xMS4yNSAzMS4zNSBRLTEzLjcgMjkuNjUgLTE2LjggMzAuMSAtMTMuNyAyOS42NSAtMTEuMjUgMzEuMzUgTC0xMC45NSAzMS41IE0tNi4zNSAyOC41IEwtNy4wIDI5LjYgUS03LjAgMzAuMTUgLTYuMCAzMC43IC00LjggMzEuNCAtMy4yNSAzMS4xNSAtNC44IDMxLjQgLTYuMCAzMC43IC03LjAgMzAuMTUgLTcuMCAyOS42IEwtNi4zNSAyOC41IE0tNi40IDM1LjY1IFEtNy4xNSAzNC43NSAtOC4yNSAzNC40IC0xMC40IDMzLjYgLTExLjA1IDM1LjcgLTEwLjQgMzMuNiAtOC4yNSAzNC40IC03LjE1IDM0Ljc1IC02LjQgMzUuNjUgTS04LjcgMTIuNzUgTC03LjggMTAuOTUgLTguNyAxMi43NSBNLTMuNyAyMC43IFEtNS4wNSAyMS41NSAtNS4wNSAyMi44NSAtNS4wNSAyMy4zIC00LjEgMjMuNzUgLTIuOTUgMjQuMyAtMS44IDI0LjA1IC0yLjk1IDI0LjMgLTQuMSAyMy43NSAtNS4wNSAyMy4zIC01LjA1IDIyLjg1IC01LjA1IDIxLjU1IC0zLjcgMjAuNyIgZmlsbD0iI2ZmZmZjYyIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNDcuMyA0Mi44IFE0Ny41IDQzLjE1IDQ5Ljc1IDQzLjk1IDUyLjAgNDQuNzUgNTcuMzUgNDcuNiBMNDkuMiA2MS43NSA0NS4zIDY4LjU1IDQ5LjIgNzAuNyA2NC45IDQzLjA1IDY2LjM1IDQwLjUgNDcuMzUgMzAuODUgLTkuOSA0LjI1IC0xMS41NSA1LjI1IC0yMy42NSAzMC44NSAtMjEuMSAzMi4yNSAtMTIuOSAxNC41NSBNNDkuMjUgNDIuMCBMNDkuMTUgNDIuMSAzNi4xNSAzNS43IDM1LjA1IDM1LjE1IDM2LjI1IDMyLjAgNTAuOCAzOC45NSA0OS4yNSA0Mi4wIE01OS40NSA0My45NSBMNTcuMzUgNDcuNiBNNTkuNCA0My4wNSBMNTkuODUgNDMuMjUgTTU5LjQgNDMuMDUgTDUwLjggMzguOTUgTS0xMi42NSAxNC4wNSBMLTEyLjMgMTMuMiAtMTIuMiAxMy4wNSAtMTAuNjUgOS42IC03LjggMTAuOTUgLTQuMSAxMi43IDExLjggMjAuMyAxNS42NSAyMi4xNSAzMC4yIDI5LjEgMzYuMjUgMzIuMCBNMy43NSAxOS45NSBMLTUuNTUgMTUuNCAtNC4xIDEyLjcgTTMuNzUgMTkuOTUgTDkuODUgMjIuNzUgMTAuNyAyMi4wNSAxMS4wNSAyMS42IFExMS43NSAyMC42IDExLjQgMjAuNzUgTDExLjggMjAuMyBNMTguODUgMjcuMzUgTDE0LjUgMjUuMCAxNS42NSAyMi4xNSBNMjguNjUgMzEuNzUgTDE4Ljg1IDI3LjM1IE02LjggMjYuMzUgTDUuNDUgMjcuNCBRMy43IDI3LjcgMy4xIDI2LjQgMi4zIDI0Ljc1IDMuOSAyMy44NSBNMTYuMDUgMzguMjUgUTEzLjg1IDM5LjE1IDExLjQ1IDM4Ljk1IEwxMC44NSAzOC42NSAxMS4zNSAzNy42IE0yNi4wNSAzNi41NSBRMjMuNzUgMzYuNDUgMjIuOCAzNC40NSBMMjMuOCAzMy42NSBNMzAuMiAyOS4xIEwyOC42NSAzMS43NSBNMjMuOSA0My44NSBRMjIuMjUgNDMuNyAyMS41IDQzLjA1IDIwLjY1IDQyLjI1IDIxLjk1IDQxLjIgTTM1LjQ1IDQ0LjEgTDQxLjEgNDYuNSBRNDAuMjUgNTEuMDUgMzcuMzUgNTQuMDUgTDMyLjIgNTEuNTUgMzQuNyA0NS4yIDM1LjQ1IDQ0LjEgTTMwLjEgNjAuMjUgTDMyLjQgNjEuNSBNMzAuMSA2MC4yNSBMMjEuMjUgNTUuNCAtNS4xNSA0MC45NSAtMjEuMSAzMi4yNSBNMjEuMjUgNTUuNCBMMjQuNCA1MS4xIC0yLjcgMzYuNyAtNS4xNSA0MC45NSBNMjguNiA1OC4xNSBMMzEuMiA1NC44IFEzMC4zNSA1Mi44IDI4LjE1IDUxLjcgTDI3LjQgNTEuMyBNNDIuMiA2Ni44NSBMNDMuMjUgNjcuNDUgNDUuMyA2OC41NSBNNDUuNiA1OS43NSBMNDYuNDUgNjAuMiA0OS4yIDYxLjc1IE00NS42IDU5Ljc1IEw0MC4xNSA1Ni43IDQ3LjAgNDMuNCBNNDIuMiA2Ni44NSBMMzIuNjUgNjEuNjUgTS0xMS43NSAxMy4yIEwtMTIuMiAxMy4wNSBNLTcuODUgMTkuMSBMLTguOTUgMjAuNTUgLTEyLjI1IDE5LjMgLTEyLjUgMTguNzUgTS05LjggMTQuNCBMLTExLjc1IDEzLjIgTS0xLjggMjQuMDUgUS0yLjk1IDI0LjMgLTQuMSAyMy43NSAtNS4wNSAyMy4zIC01LjA1IDIyLjg1IC01LjA1IDIxLjU1IC0zLjcgMjAuNyBNLTcuOCAxMC45NSBMLTguNyAxMi43NSBNLTExLjA1IDM1LjcgUS0xMC40IDMzLjYgLTguMjUgMzQuNCAtNy4xNSAzNC43NSAtNi40IDM1LjY1IE0tMy4yNSAzMS4xNSBRLTQuOCAzMS40IC02LjAgMzAuNyAtNy4wIDMwLjE1IC03LjAgMjkuNiBMLTYuMzUgMjguNSBNLTE2LjggMzAuMSBRLTEzLjcgMjkuNjUgLTExLjI1IDMxLjM1IEwtMTAuOTUgMzEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  knife: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNDMuOXB4IiB3aWR0aD0iNjguODVweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAxNi42NSwgMi42NSkiPg0KICAgIDxwYXRoIGQ9Ik0xNS41NSAxOC4zNSBMNTEuMSAzOS42NSA1MS4yIDM5LjcgNTAuODUgMzkuNzUgNTAuODUgMzkuNyA0OC4wIDM5LjM1IFE0Ny4wNSAzOS4zNSA0NS40IDM4LjYgNDMuNyAzNy44IDQyLjk1IDM3LjggTDM4LjUgMzcuNTUgMzguNTUgMzcuNDUgUTM3LjMgMzcuNDUgMzQuNCAzNi4yNSAzMS40NSAzNS4wNSAzMC42NSAzNC4wIDI5Ljg1IDMyLjk1IDI2LjA1IDMyLjA1IDIyLjI1IDMxLjEgMjEuNTUgMjkuMCAyMC44NSAyNi45IDE4LjY1IDI2LjUgTDE0Ljk1IDI1LjQ1IFExMy4yIDIzLjY1IDEzLjIgMjIuNiBMMTIuOTUgMjEuOSAxNS41NSAxOC4zNSBNNy43IDE3LjkgUTcuNyAxNi4zNSA5LjM1IDE2LjQgMTAuOTUgMTYuNSAxMC45NSAxNy44IDEwLjggMTkuNiA5LjUgMTkuNiA3LjcgMTkuNiA3LjcgMTcuOSIgZmlsbD0iI2UwZThlYiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTUuNTUgMTguMzUgTDEyLjk1IDIxLjkgMTEuMjUgMjQuMTUgLTE1LjY1IDQuMTUgLTExLjM1IC0xLjY1IDE1LjU1IDE4LjM1IE03LjcgMTMuNjUgUTcuNyAxMi45NSAzLjIgMTAuNCBMLTIuODUgNy4wNSAtNS4zNSA1LjUgUS03LjAgNC40NSAtNy44IDMuNTUgLTkuMiAxLjkgLTEwLjI1IDEuODUgLTExLjIgMS44NSAtMTEuMiAyLjkgLTExLjIgNC4wIC05LjAgNS45NSBMLTQuNDUgOS4wNSBRNi4xNSAxNC44IDYuNSAxNC44IDcuNyAxNC44IDcuNyAxMy42NSBNNy43IDE3LjkgUTcuNyAxOS42IDkuNSAxOS42IDEwLjggMTkuNiAxMC45NSAxNy44IDEwLjk1IDE2LjUgOS4zNSAxNi40IDcuNyAxNi4zNSA3LjcgMTcuOSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTIuOTUgMjEuOSBMMTMuMiAyMi42IFExMy4yIDIzLjY1IDE0Ljk1IDI1LjQ1IEwxOC42NSAyNi41IFEyMC44NSAyNi45IDIxLjU1IDI5LjAgMjIuMjUgMzEuMSAyNi4wNSAzMi4wNSAyOS44NSAzMi45NSAzMC42NSAzNC4wIDMxLjQ1IDM1LjA1IDM0LjQgMzYuMjUgMzcuMyAzNy40NSAzOC41NSAzNy40NSBMMzguNSAzNy41NSA0Mi45NSAzNy44IFE0My43IDM3LjggNDUuNCAzOC42IDQ3LjA1IDM5LjM1IDQ4LjAgMzkuMzUgTDUwLjg1IDM5LjcgNTAuODUgMzkuNzUgUTQwLjI1IDQxLjM1IDMwLjQ1IDM3LjY1IDIwLjQ1IDMzLjg1IDExLjI1IDI0LjE1IEwxMi45NSAyMS45IiBmaWxsPSIjYjhjOWNmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik03LjcgMTMuNjUgUTcuNyAxNC44IDYuNSAxNC44IDYuMTUgMTQuOCAtNC40NSA5LjA1IEwtOS4wIDUuOTUgUS0xMS4yIDQuMCAtMTEuMiAyLjkgLTExLjIgMS44NSAtMTAuMjUgMS44NSAtOS4yIDEuOSAtNy44IDMuNTUgLTcuMCA0LjQ1IC01LjM1IDUuNSBMLTIuODUgNy4wNSAzLjIgMTAuNCBRNy43IDEyLjk1IDcuNyAxMy42NSIgZmlsbD0iIzZiNWE1MCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNTAuODUgMzkuNzUgTDUxLjIgMzkuNyA1MS4xIDM5LjY1IDE1LjU1IDE4LjM1IDEyLjk1IDIxLjkgMTEuMjUgMjQuMTUgLTE1LjY1IDQuMTUgLTExLjM1IC0xLjY1IDE1LjU1IDE4LjM1IE01MC44NSAzOS43NSBRNDAuMjUgNDEuMzUgMzAuNDUgMzcuNjUgMjAuNDUgMzMuODUgMTEuMjUgMjQuMTUgTTcuNyAxNy45IFE3LjcgMTkuNiA5LjUgMTkuNiAxMC44IDE5LjYgMTAuOTUgMTcuOCAxMC45NSAxNi41IDkuMzUgMTYuNCA3LjcgMTYuMzUgNy43IDE3LjkgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  leek: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNjYuM3B4IiB3aWR0aD0iMTAyLjI1cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMCwgMC4wLCAwLjAsIDEuMCwgMjQuMzUsIDMuNTUpIj4NCiAgICA8cGF0aCBkPSJNLTE0LjIgLTAuNDUgTC0xMy41IC0wLjE1IC0xMC40IDIuOCAtOC44IDMuNiBRLTUuMSA1LjUgLTEuMiA2LjkgTDkuMjUgMTAuMzUgMTkuNzUgMTMuMTUgMzEuMjUgMTYuMyA0Mi40NSAxOS43IFE0Ny41IDIxLjIgNTIuNCAyMy4wIEw2Mi40IDI2LjkgUTY3LjcgMjkuMCA3Mi40NSAzMi4wIEw3MS40IDM0LjQ1IDcxLjkgMzQuNCA3Ni45IDM4LjQgNzMuNCA0NC45NSA2MS43NSAzNy40IDczLjUgNTcuMjUgNjcuNSA2MS43NSA2My4yNSA1NC4zNSA1OC42IDQ3LjA1IFE1NS45NSA0My4xNSA1Mi42IDM5Ljk1IEw1Ny4zNSA0Ni4xIFE2MS4xNSA1MS4zNSA2NC4xIDU3LjMgTDYwLjkgNTguNSA1Ny43NSA1My4wNSBRNTQuNjUgNDguMTUgNTAuMzUgNDQuMSBMNTYuNTUgNTkuNiA1MS45IDYwLjc1IDQ4LjkgNTUuOCA0Ny4xIDU3LjEgNDMuMyA1MC44NSA0MS4zNSA0OC4yNSBRMzcuMyA0My41IDMyLjg1IDM5LjE1IEwyNC40NSAzMS4yIDE4LjggMjYuMzUgUTE1LjA1IDIzLjEgMTEuMCAyMC4yIDYuNTUgMTcuMCAxLjggMTQuMjUgLTIuNiAxMS43NSAtNy41NSAxMC41NSBMLTEwLjcgMTAuMiAtMTIuOTUgOS45IC0xOS44NSA5LjM1IC0yMC4zIDkuMDUgLTIwLjYgOC4zIC0yMC43NSA4LjM1IFEtMjEuMyA4LjQ1IC0yMS4yIDcuNzUgTC0yMS44IDcuNSAtMjIuOTUgNS4yIFEtMjMuNDUgNC4wIC0yMy4zNSAyLjk1IC0yMy4zIDEuOTUgLTIyLjggMS4yIC0yMi4xNSAwLjI1IC0yMS4xNSAtMC40IEwtMTkuMiAtMS40NSBRLTE3LjU1IC0yLjIgLTE2LjEgLTEuNDUgTC0xNC4yIC0wLjQ1IC0xMy45NSAwLjQ1IC0xNC4yIC0wLjQ1IE00OC45IDU1LjggTDQ5LjggNTUuMyA0OC41IDUyLjg1IFE0NS45NSA0OC42NSA0Mi43NSA0NC45NSAzOS4xNSA0MC43IDM1LjA1IDM2Ljg1IDMxLjY1IDMzLjU1IDI3LjUgMzEuMCAzMS42NSAzMy41NSAzNS4wNSAzNi44NSAzOS4xNSA0MC43IDQyLjc1IDQ0Ljk1IDQ1Ljk1IDQ4LjY1IDQ4LjUgNTIuODUgTDQ5LjggNTUuMyA0OC45IDU1LjggTTUyLjYgMzkuOTUgUTQ5LjA1IDM2LjYgNDQuNzUgMzMuOTUgNDAuOTUgMzEuNjUgMzcuMSAzMC4zIDQwLjk1IDMxLjY1IDQ0Ljc1IDMzLjk1IDQ5LjA1IDM2LjYgNTIuNiAzOS45NSBNNzEuNCAzNC40NSBMNzAuNCAzNy4yIFE2Ni43NSAzNC42IDYyLjc1IDMyLjcgNTcuNiAzMC4zNSA1Mi4yNSAyOC4xNSBMNDUuOSAyNS43NSAzOS4zIDIzLjI1IDMyLjIgMjAuODUgMzkuMyAyMy4yNSA0NS45IDI1Ljc1IDUyLjI1IDI4LjE1IFE1Ny42IDMwLjM1IDYyLjc1IDMyLjcgNjYuNzUgMzQuNiA3MC40IDM3LjIgTDcxLjQgMzQuNDUgTTYxLjc1IDM3LjQgUTU2LjkgMzQuNjUgNTEuODUgMzIuNTUgNDcuNTUgMzAuNjUgNDMuMTUgMjkuMCBMMzMuMzUgMjUuMyA0My4xNSAyOS4wIFE0Ny41NSAzMC42NSA1MS44NSAzMi41NSA1Ni45IDM0LjY1IDYxLjc1IDM3LjQgTTUwLjM1IDQ0LjEgTDQ0LjYgMzguNyA1MC4zNSA0NC4xIE0tMTkuOCAyLjcgTC0yMi41IDIuMjUgLTE5LjggMi43IE0tOS40NSAzLjc1IEwtMTAuNCAyLjggLTkuNDUgMy43NSBNLTEwLjk1IDkuMCBMLTExLjcgOS4wIFEtMTIuNTUgOS4xNSAtMTIuOTUgOS45IC0xMi41NSA5LjE1IC0xMS43IDkuMCBMLTEwLjk1IDkuMCBNLTE1Ljk1IDkuMCBMLTE5Ljg1IDkuMzUgLTE1Ljk1IDkuMCBNLTEyLjMgNS40IEwtMTMuMjUgNS42IC0xNS43NSA1LjAgLTEzLjI1IDUuNiAtMTIuMyA1LjQiIGZpbGw9InVybCgjZ3JhZGllbnQwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNLTE0LjIgLTAuNDUgTC0xMy41IC0wLjE1IC0xMC40IDIuOCAtOC44IDMuNiBRLTUuMSA1LjUgLTEuMiA2LjkgTDkuMjUgMTAuMzUgMTkuNzUgMTMuMTUgMzEuMjUgMTYuMyA0Mi40NSAxOS43IFE0Ny41IDIxLjIgNTIuNCAyMy4wIEw2Mi40IDI2LjkgUTY3LjcgMjkuMCA3Mi40NSAzMi4wIEw3MS40IDM0LjQ1IDcxLjkgMzQuNCA3Ni45IDM4LjQgNzMuNCA0NC45NSA2MS43NSAzNy40IDczLjUgNTcuMjUgNjcuNSA2MS43NSA2My4yNSA1NC4zNSA1OC42IDQ3LjA1IFE1NS45NSA0My4xNSA1Mi42IDM5Ljk1IEw1Ny4zNSA0Ni4xIFE2MS4xNSA1MS4zNSA2NC4xIDU3LjMgTDYwLjkgNTguNSA1Ny43NSA1My4wNSBRNTQuNjUgNDguMTUgNTAuMzUgNDQuMSBMNTYuNTUgNTkuNiA1MS45IDYwLjc1IDQ4LjkgNTUuOCA0Ny4xIDU3LjEgNDMuMyA1MC44NSA0MS4zNSA0OC4yNSBRMzcuMyA0My41IDMyLjg1IDM5LjE1IEwyNC40NSAzMS4yIDE4LjggMjYuMzUgUTE1LjA1IDIzLjEgMTEuMCAyMC4yIDYuNTUgMTcuMCAxLjggMTQuMjUgLTIuNiAxMS43NSAtNy41NSAxMC41NSBMLTEwLjcgMTAuMiAtMTIuOTUgOS45IC0xMy40NSAxMC42IC0xNy4zIDExLjE1IE0tMTIuOTUgOS45IEwtMTkuODUgOS4zNSAtMjAuMyA5LjA1IC0yMC42IDguMyAtMjAuNzUgOC4zNSBRLTIxLjMgOC40NSAtMjEuMiA3Ljc1IEwtMjEuOCA3LjUgLTIyLjk1IDUuMiBRLTIzLjQ1IDQuMCAtMjMuMzUgMi45NSAtMjMuMyAxLjk1IC0yMi44IDEuMiAtMjIuMTUgMC4yNSAtMjEuMTUgLTAuNCBMLTE5LjIgLTEuNDUgUS0xNy41NSAtMi4yIC0xNi4xIC0xLjQ1IEwtMTQuMiAtMC40NSAtMTYuMzUgLTIuNTUgTS0xNS43NSA1LjAgTC0xMy4yNSA1LjYgLTEyLjMgNS40IE0tMTkuODUgOS4zNSBMLTE1Ljk1IDkuMCBNLTEyLjk1IDkuOSBRLTEyLjU1IDkuMTUgLTExLjcgOS4wIEwtMTAuOTUgOS4wIE0tMTAuNCAyLjggTC05LjQ1IDMuNzUgTS0yMi41IDIuMjUgTC0xOS44IDIuNyBNNDQuNiAzOC43IEw1MC4zNSA0NC4xIE0zMy4zNSAyNS4zIEw0My4xNSAyOS4wIFE0Ny41NSAzMC42NSA1MS44NSAzMi41NSA1Ni45IDM0LjY1IDYxLjc1IDM3LjQgTTMyLjIgMjAuODUgTDM5LjMgMjMuMjUgNDUuOSAyNS43NSA1Mi4yNSAyOC4xNSBRNTcuNiAzMC4zNSA2Mi43NSAzMi43IDY2Ljc1IDM0LjYgNzAuNCAzNy4yIEw3MS40IDM0LjQ1IE0zNy4xIDMwLjMgUTQwLjk1IDMxLjY1IDQ0Ljc1IDMzLjk1IDQ5LjA1IDM2LjYgNTIuNiAzOS45NSBNMjcuNSAzMS4wIFEzMS42NSAzMy41NSAzNS4wNSAzNi44NSAzOS4xNSA0MC43IDQyLjc1IDQ0Ljk1IDQ1Ljk1IDQ4LjY1IDQ4LjUgNTIuODUgTDQ5LjggNTUuMyA0OC45IDU1LjggTS0xNC4yIC0wLjQ1IEwtMTMuOTUgMC40NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQogIDxkZWZzPg0KICAgIDxyYWRpYWxHcmFkaWVudCBjeD0iMCIgY3k9IjAiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC4xNDksIDAuMCwgMC4wLCAwLjE0OSwgLTE4LjUsIDIuNikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iZ3JhZGllbnQwIiByPSI4MTkuMiIgc3ByZWFkTWV0aG9kPSJwYWQiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjE4ODIzNTI5NDExNzY0NzA2IiBzdG9wLWNvbG9yPSIjZmZmZmNjIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEuMCIgc3RvcC1jb2xvcj0iIzE2NTgyMyIvPg0KICAgIDwvcmFkaWFsR3JhZGllbnQ+DQogIDwvZGVmcz4NCjwvc3ZnPg0KPCEtLSAxIC0tPg==',
  mug: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iMzkuMTVweCIgd2lkdGg9IjM4LjJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAyNi4xLCAtNi42NSkiPg0KICAgIDxwYXRoIGQ9Ik05LjMgMTcuNTUgTDkuMDUgMTcuNjUgUTcuMiAxOC40IDYuMTUgMTguNCBMNS4xIDE4LjA1IDQuNDUgMTcuNyAyLjc1IDE2LjEgMi42IDE1Ljc1IFEyLjYgMTUuNjUgMC4wIDE0LjA1IEwtNC42NSAxMi4xNSAtNy41IDExLjMgLTguNSAxMS4wIC05LjMgMTEuNCAtOC44IDExLjE1IC0xMC4xNSAxMC45IFEtMTIuMyAxMC42NSAtMTIuMyA5Ljc1IEwtMTIuNSA4LjggLTExLjY1IDcuOTUgLTkuNjUgNy42NSBRLTMuMCA5LjYgMi4zNSAxMi4wIDYuMDUgMTMuNiA3LjY1IDE0Ljg1IDguNyAxNS43NSA5LjE1IDE2Ljk1IEw5LjMgMTcuMTUgOS4zIDE3LjU1IE0zLjEgMjAuMTUgTDIuOSAyMC43NSBRMy4yIDIxLjg1IDQuMjUgMjIuNSA1LjI1IDIzLjE1IDYuMyAyMy4xNSBMNy41NSAyMy4wIDguMiAyMS45NSBRMTAuMSAyMi43IDEwLjEgMjIuOTUgTDEwLjMgMjMuMzUgMTAuNSAyMy45NSAxMC42NSAyNC40NSAxMS4xIDI3LjM1IFExMS4xIDMzLjE1IDYuNDUgMzkuMyAyLjQ1IDQ0LjU1IDAuOCA0NC41NSBMMC4yNSA0NC44IC0wLjI1IDQ0LjA1IFEtMS4yIDQyLjcgLTEuMiA0MS41NSBMLTEuMzUgNDAuMSAtMC4wNSAzNi43IDEuMjUgMzMuNDUgUTEuMjUgMzMuMCAtMi41NSAzMS4xIC02LjQgMjkuMiAtMTAuOCAyNy4yIC0xNS4xNSAyNS4yIC0xNy43IDIzLjY1IEwtMjAuOSAyMS41NSBRLTIxLjU1IDIxLjA1IC0yMi45NSAyMC4wNSBMLTIxLjk1IDE4LjE1IC0xOS41IDE0LjYgUS0xNy43IDEyLjI1IC0xNy41IDEyLjM1IEwtMTcuMyAxMi4zIC0xNy4wIDExLjg1IC0xNi4xIDExLjc1IC0xNS42IDEyLjAgLTE1LjEgMTIuMzUgLTE0LjI1IDEyLjc1IC0xNC4zNSAxMy4xNSAtMTQuNDUgMTMuNCBRLTE0LjMgMTQuMyAtMTMuOTUgMTQuNjUgLTEzLjUgMTUuMTUgLTEyLjY1IDE1LjE1IEwtMTAuODUgMTQuMyAtMTAuOSAxNC4zNSAtMTAuMSAxNC43IC0wLjYgMTguNjUgMy4xIDIwLjE1IE05LjU1IDI4LjUgTDkuNSAyNS44IDkuNSAyNC44NSA5LjQgMjQuNyA5LjEgMjQuNzUgUTguOSAyNC43NSA4LjUgMjUuMCBMOC4zIDI1LjM1IDIuMjUgMzUuMCBRLTAuMDUgMzguNzUgMC4yIDQzLjM1IDMuODUgNDEuNiA2LjcgMzYuMCA5LjU1IDMwLjQgOS41NSAyOC41IiBmaWxsPSIjZmZmZmNjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0yLjc1IDE2LjEgTDQuNDUgMTcuNyA1LjEgMTguMDUgNi4xNSAxOC40IFE3LjIgMTguNCA5LjA1IDE3LjY1IEw5LjMgMTcuNTUgOS4yIDE4LjggUTguOTUgMjAuNDUgOC4yIDIxLjk1IEw3LjU1IDIzLjAgNi4zIDIzLjE1IFE1LjI1IDIzLjE1IDQuMjUgMjIuNSAzLjIgMjEuODUgMi45IDIwLjc1IEwzLjEgMjAuMTUgMy41NSAxOC4zNSAzLjU1IDE4LjA1IDMuMSAxNi44IDIuNzUgMTYuMSBNLTEyLjUgOC44IEwtMTIuMyA5Ljc1IFEtMTIuMyAxMC42NSAtMTAuMTUgMTAuOSBMLTguOCAxMS4xNSAtOS4zIDExLjQgLTkuNyAxMS41NSAtOS43IDExLjYgLTEwLjg1IDE0LjMgLTEyLjY1IDE1LjE1IFEtMTMuNSAxNS4xNSAtMTMuOTUgMTQuNjUgLTE0LjMgMTQuMyAtMTQuNDUgMTMuNCBMLTE0LjM1IDEzLjE1IC0xNC4yNSAxMi43NSAtMTMuMiAxMC4xIC0xMy4wIDkuNzUgLTEzLjAgOS42NSAtMTIuNSA4LjggTTAuMjUgNDQuOCBMMC4yIDQ0LjggLTEuNyA0NC4xNSAtNi45NSA0MS43IFEtMTMuMjUgMzguNjUgLTE2Ljg1IDM2LjQ1IEwtMjEuMzUgMzMuNCBRLTI0LjMgMzAuNzUgLTI0LjkgMjguNzUgLTI1LjU1IDI2Ljc1IC0yNC4yIDIzLjE1IEwtMjMuMzUgMjEuMCAtMjIuOTUgMjAuMDUgUS0yMS41NSAyMS4wNSAtMjAuOSAyMS41NSBMLTE3LjcgMjMuNjUgUS0xNS4xNSAyNS4yIC0xMC44IDI3LjIgLTYuNCAyOS4yIC0yLjU1IDMxLjEgMS4yNSAzMy4wIDEuMjUgMzMuNDUgTC0wLjA1IDM2LjcgLTEuMzUgNDAuMSAtMS4yIDQxLjU1IFEtMS4yIDQyLjcgLTAuMjUgNDQuMDUgTDAuMjUgNDQuOCIgZmlsbD0iI2NiYjk5MiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNOS41NSAyOC41IFE5LjU1IDMwLjQgNi43IDM2LjAgMy44NSA0MS42IDAuMiA0My4zNSAtMC4wNSAzOC43NSAyLjI1IDM1LjAgTDguMyAyNS4zNSA4LjUgMjUuMCBROC45IDI0Ljc1IDkuMSAyNC43NSBMOS40IDI0LjcgOS41IDI0Ljg1IDkuNSAyNS44IDkuNTUgMjguNSIgZmlsbD0iIzkzNmIzMSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNOS4zIDE3LjU1IEw5LjMgMTcuMTUgOS4xNSAxNi45NSBROC43IDE1Ljc1IDcuNjUgMTQuODUgNi4wNSAxMy42IDIuMzUgMTIuMCAtMy4wIDkuNiAtOS42NSA3LjY1IEwtMTEuNjUgNy45NSAtMTIuNSA4LjggLTEzLjAgOS42NSAtMTMuMCA5Ljc1IC0xMy4yIDEwLjEgLTE0LjI1IDEyLjc1IC0xNC4zNSAxMy4xNSAtMTQuNDUgMTMuNCBRLTE0LjMgMTQuMyAtMTMuOTUgMTQuNjUgLTEzLjUgMTUuMTUgLTEyLjY1IDE1LjE1IEwtMTAuODUgMTQuMyAtMTAuOSAxNC4zNSAtMTAuMSAxNC43IC0wLjYgMTguNjUgMy4xIDIwLjE1IDIuOSAyMC43NSBRMy4yIDIxLjg1IDQuMjUgMjIuNSA1LjI1IDIzLjE1IDYuMyAyMy4xNSBMNy41NSAyMy4wIDguMiAyMS45NSBROC45NSAyMC40NSA5LjIgMTguOCBMOS4zIDE3LjU1IE0tOS4zIDExLjQgTC04LjUgMTEuMCAtNy41IDExLjMgLTQuNjUgMTIuMTUgMC4wIDE0LjA1IFEyLjYgMTUuNjUgMi42IDE1Ljc1IEwyLjc1IDE2LjEgMy4xIDE2LjggMy41NSAxOC4wNSAzLjU1IDE4LjM1IDMuMSAyMC4xNSBNOC4yIDIxLjk1IFExMC4xIDIyLjcgMTAuMSAyMi45NSBMMTAuMyAyMy4zNSAxMC41IDIzLjk1IDEwLjY1IDI0LjQ1IDExLjEgMjcuMzUgUTExLjEgMzMuMTUgNi40NSAzOS4zIDIuNDUgNDQuNTUgMC44IDQ0LjU1IEwwLjI1IDQ0LjggMC4yIDQ0LjggLTEuNyA0NC4xNSAtNi45NSA0MS43IFEtMTMuMjUgMzguNjUgLTE2Ljg1IDM2LjQ1IEwtMjEuMzUgMzMuNCBRLTI0LjMgMzAuNzUgLTI0LjkgMjguNzUgLTI1LjU1IDI2Ljc1IC0yNC4yIDIzLjE1IEwtMjMuMzUgMjEuMCAtMjIuOTUgMjAuMDUgLTIxLjk1IDE4LjE1IC0xOS41IDE0LjYgUS0xNy43IDEyLjI1IC0xNy41IDEyLjM1IEwtMTcuMyAxMi4zIC0xNy4wIDExLjg1IC0xNi4xIDExLjc1IC0xNS42IDEyLjAgLTE1LjEgMTIuMzUgLTE0LjI1IDEyLjc1IE05LjU1IDI4LjUgTDkuNSAyNS44IDkuNSAyNC44NSA5LjQgMjQuNyA5LjEgMjQuNzUgUTguOSAyNC43NSA4LjUgMjUuMCBMOC4zIDI1LjM1IDIuMjUgMzUuMCBRLTAuMDUgMzguNzUgMC4yIDQzLjM1IDMuODUgNDEuNiA2LjcgMzYuMCA5LjU1IDMwLjQgOS41NSAyOC41IE0tOS4zIDExLjQgTC05LjcgMTEuNTUgLTkuNyAxMS42IC0xMC44NSAxNC4zIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0KPCEtLSAxIC0tPg==',
  sai: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNDIuM3B4IiB3aWR0aD0iNjUuM3B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAsIDAuMCwgMC4wLCAxLjAsIDExLjA1LCAtMC41NSkiPg0KICAgIDxwYXRoIGQ9Ik01Mi4zNSA0MS43NSBMNTIuMiA0MS43NSA1MS44IDQxLjg1IDQ0Ljc1IDQwLjcgNDQuNSA0MC41NSA5LjcgMTguNSA5LjUgMjQuMjUgMjQuNDUgMzMuNyBRMjQuNyAzMy44NSAyNC43NSAzNC4yNSBMMjQuNiAzNC42NSAyMy44NSAzNS44NSAyMy41NSAzNi4xNSAyMy4yIDM2LjIgMTcuMjUgMzUuNDUgMTcuMDUgMzUuMyA0LjU1IDI3LjQgNC4yNSAyNy4wNSA0LjA1IDI2LjkgMy45NSAyNi41NSA0LjYgMTUuMiA0LjI1IDE1LjAgNy4xIDEwLjUgNy4zIDEwLjY1IDguNyAxMC4wIDE1LjggNi4yIDMzLjg1IDE3LjY1IDM0LjM1IDE4LjYgMzQuNCAxOC45NSAzNC40IDE5LjI1IDMzLjYgMjAuNDUgMzMuMiAyMC44NSAzMi43IDIwLjY1IDE3Ljc1IDExLjIgMTIuNDUgMTMuOSAxNS45IDE2LjEgMTQuNzUgMTcuOSA1Mi4zNSA0MS43NSBNLTcuMjUgNy43NSBRLTguNDUgNi45NSAtOS44IDYuMSBMLTEwLjA1IDUuNzUgLTEwLjAgNS4xNSAtNy44NSAxLjg1IFEtNy43IDEuNiAtNy40NSAxLjY1IEwtNi45NSAxLjYgUS01LjYgMi40NSAtNC40IDMuMjUgTC03LjI1IDcuNzUiIGZpbGw9IiNiOGM5Y2YiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTE1LjkgMTYuMSBMNTIuOTUgMzkuNiA1My4yNSA0MC4xIDUzLjE1IDQwLjU1IDUyLjUgNDEuNTUgNTIuMzUgNDEuNzUgMTQuNzUgMTcuOSAxNS45IDE2LjEgTTE1LjggNi4yIEwxNy40IDUuMzUgMTcuOCA1LjMgMTguMDUgNS4zIDE4LjUgNS40IDMxLjAgMTMuMyAzMS4xIDEzLjU1IDMzLjg1IDE3LjY1IDE1LjggNi4yIiBmaWxsPSIjZTBlOGViIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik00LjI1IDE1LjAgTC03LjI1IDcuNzUgLTQuNCAzLjI1IDcuMSAxMC41IDQuMjUgMTUuMCIgZmlsbD0iI2RlOWYxMCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTUuOSAxNi4xIEw1Mi45NSAzOS42IDUzLjI1IDQwLjEgNTMuMTUgNDAuNTUgNTIuNSA0MS41NSA1Mi4zNSA0MS43NSA1Mi4yIDQxLjc1IDUxLjggNDEuODUgNDQuNzUgNDAuNyA0NC41IDQwLjU1IDkuNyAxOC41IDkuNSAyNC4yNSAyNC40NSAzMy43IFEyNC43IDMzLjg1IDI0Ljc1IDM0LjI1IEwyNC42IDM0LjY1IDIzLjg1IDM1Ljg1IDIzLjU1IDM2LjE1IDIzLjIgMzYuMiAxNy4yNSAzNS40NSAxNy4wNSAzNS4zIDQuNTUgMjcuNCA0LjI1IDI3LjA1IDQuMDUgMjYuOSAzLjk1IDI2LjU1IDQuNiAxNS4yIDQuMjUgMTUuMCAtNy4yNSA3Ljc1IFEtOC40NSA2Ljk1IC05LjggNi4xIEwtMTAuMDUgNS43NSAtMTAuMCA1LjE1IC03Ljg1IDEuODUgUS03LjcgMS42IC03LjQ1IDEuNjUgTC02Ljk1IDEuNiBRLTUuNiAyLjQ1IC00LjQgMy4yNSBMNy4xIDEwLjUgOC43IDEwLjAgMTUuOCA2LjIgMTcuNCA1LjM1IDE3LjggNS4zIDE4LjA1IDUuMyAxOC41IDUuNCAzMS4wIDEzLjMgMzEuMSAxMy41NSAzMy44NSAxNy42NSAzNC4zNSAxOC42IDM0LjQgMTguOTUgMzQuNCAxOS4yNSAzMy42IDIwLjQ1IDMzLjIgMjAuODUgMzIuNyAyMC42NSAxNy43NSAxMS4yIDEyLjQ1IDEzLjkgMTUuOSAxNi4xIE03LjEgMTAuNSBMNy4zIDEwLjY1IDguNyAxMC4wIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0KPCEtLSAxIC0tPg==',
  racquet: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNjQuMXB4IiB3aWR0aD0iODQuNDVweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAxMy43LCAtMS45KSI+DQogICAgPHBhdGggZD0iTTIwLjYgMjIuODUgTDE3LjcgMjYuNjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICA8cGF0aCBkPSJNMzIuMCAxNi4xNSBMMjIuMTUgMjIuMDUgMjAuMSAyMy42IDIzLjg1IDE5LjU1IDIzLjQgMTkuNDUgMTQuNSAxOS41NSAxMS41IDE5LjkgMTIuNiAyMy4xNSAxMy40IDI1LjQ1IDE0LjQgMjguNiBRMTQuNiAyOS4zIDE1LjMgMjkuNzUgTDE3LjIgMjcuMTUgUTE2LjI1IDI4LjkgMTUuNzUgMzEuMCAxNC44NSAzNS4wNSAxMy40IDM5LjA1IDEzLjA1IDM0LjQ1IDEyLjQgMzEuNCAxMS43NSAyOC4zNSA5LjY1IDI1LjAgNy41IDIxLjYgMy42IDE4LjA1IC00LjY1IDEzLjggLTEwLjEgOS45NSAtMTUuNTUgNi4xIC05LjY1IDIuOSAtNy4xNSA0LjYgLTUuMyA2LjE1IC0wLjggMTAuMSA0LjIgMTMuMDUgOS4xIDE2LjA1IDE0LjUgMTYuNyBMMzIuMCAxNi4xNSIgZmlsbD0iIzVmNjZhOSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMzIuMCAxNi4xNSBMMTQuNSAxNi43IFE5LjEgMTYuMDUgNC4yIDEzLjA1IC0wLjggMTAuMSAtNS4zIDYuMTUgLTcuMTUgNC42IC05LjY1IDIuOSAtMTUuNTUgNi4xIC0xMC4xIDkuOTUgLTQuNjUgMTMuOCAzLjYgMTguMDUgNy41IDIxLjYgOS42NSAyNS4wIDExLjc1IDI4LjM1IDEyLjQgMzEuNCAxMy4wNSAzNC40NSAxMy40IDM5LjA1IE0xNy4yIDI3LjE1IEwxNS4zIDI5Ljc1IFExNC42IDI5LjMgMTQuNCAyOC42IEwxMy40IDI1LjQ1IDEyLjYgMjMuMTUgMTEuNSAxOS45IDE0LjUgMTkuNTUgMjMuNCAxOS40NSAyMy44NSAxOS41NSAyMC4xIDIzLjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICA8cGF0aCBkPSJNNTIuMCA2Mi43IFE0MS4xNSA2NS40IDMwLjM1IDYwLjIgMTkuNiA1NS4wNSAxNS4yNSA0NS4xNSAxMC45IDM1LjIgMTUuNTUgMjYuMjUgMjAuMTUgMTcuMyAzMC45NSAxNC42IDQxLjc1IDExLjk1IDUyLjUgMTcuMDUgNjMuMyAyMi4yNSA2Ny42NSAzMi4xNSA3Mi4wIDQyLjE1IDY3LjQgNTEuMSA2Mi44IDYwLjA1IDUyLjAgNjIuNyBNNTAuNzUgNTkuODUgUTYwLjIgNTcuNDUgNjQuMjUgNDkuNjUgNjguMzUgNDEuNyA2NC41NSAzMi45IDYwLjY1IDI0LjI1IDUxLjIgMTkuNiA0MS43IDE1LjE1IDMyLjIgMTcuNSAyMi43NSAxOS45IDE4LjY1IDI3Ljc1IDE0LjYgMzUuNjUgMTguNCA0NC40IDIyLjI1IDUzLjEgMzEuNjUgNTcuNiA0MS4yIDYyLjE1IDUwLjc1IDU5Ljg1IiBmaWxsPSIjNWY2NmE5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik01Mi4wIDYyLjcgUTQxLjE1IDY1LjQgMzAuMzUgNjAuMiAxOS42IDU1LjA1IDE1LjI1IDQ1LjE1IDEwLjkgMzUuMiAxNS41NSAyNi4yNSAyMC4xNSAxNy4zIDMwLjk1IDE0LjYgNDEuNzUgMTEuOTUgNTIuNSAxNy4wNSA2My4zIDIyLjI1IDY3LjY1IDMyLjE1IDcyLjAgNDIuMTUgNjcuNCA1MS4xIDYyLjggNjAuMDUgNTIuMCA2Mi43IE01MC43NSA1OS44NSBRNDEuMiA2Mi4xNSAzMS42NSA1Ny42IDIyLjI1IDUzLjEgMTguNCA0NC40IDE0LjYgMzUuNjUgMTguNjUgMjcuNzUgMjIuNzUgMTkuOSAzMi4yIDE3LjUgNDEuNyAxNS4xNSA1MS4yIDE5LjYgNjAuNjUgMjQuMjUgNjQuNTUgMzIuOSA2OC4zNSA0MS43IDY0LjI1IDQ5LjY1IDYwLjIgNTcuNDUgNTAuNzUgNTkuODUgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgIDxwYXRoIGQ9Ik0zMi4zIDE2Ljc1IEw0MC44IDE2LjA1IDQ5LjY1IDE3Ljk1IDU2LjcgMjEuNyA2Mi4yNSAyNy4yIDY2LjE1IDM0LjcgNjYuOSA0Mi44IDYyLjEgMzkuMTUgNjYuMTUgMzQuNyA2Mi4xIDM5LjE1IDY2LjkgNDIuOCA2Ni44IDQzLjM1IDYwLjY1IDUwLjMgNTUuNyA0Ni4yNSA2Mi4xIDM5LjE1IDU2LjAgMzQuNDUgNjIuMjUgMjcuMiA1Ni4wIDM0LjQ1IDYyLjEgMzkuMTUgNTUuNyA0Ni4yNSA2MC42NSA1MC4zIDY2LjggNDMuMzUgUTY2LjggNDkuOSA2My41NSA1NC41NSA2MC4yNSA1OS4yIDU1LjY1IDU5LjIgTDUwLjc1IDYxLjMgNDIuMSA2Mi42IFEzMi42IDYyLjYgMjUuOSA1OC4xNSAxOS4yIDUzLjY1IDE5LjIgNDcuMyBMMTcuMjUgNDIuNzUgMTYuNTUgMzguMDUgMTUuNDUgMzEuMCAxNy42IDI2LjU1IDIzLjYgMjAuNTUgMzAuOTUgMTcuMSAyNi44IDIzLjAgMjMuNiAyMC41NSAyNi44IDIzLjAgMzAuOTUgMTcuMSAzMi4zIDE2Ljc1IDM3LjUgMjAuNSAzMi41IDI3LjUgMjYuOCAyMy4wIDIyLjEgMjkuOSAxNy42IDI2LjU1IDIyLjEgMjkuOSAyNi44IDIzLjAgMzIuNSAyNy41IDM3LjUgMjAuNSAzMi4zIDE2Ljc1IE01MC4xIDQxLjcgTDU1LjcgNDYuMjUgNTAuOSA1MS42IDQ1LjM1IDQ3LjUgNTAuMSA0MS43IDQ0LjI1IDM2Ljk1IDM5LjQgNDMuMCAzNC4xIDM4Ljk1IDM4LjcgMzIuNSA0NC4yNSAzNi45NSA1MC4wIDI5Ljg1IDU2LjAgMzQuNDUgNTAuMSA0MS43IDU2LjAgMzQuNDUgNTAuMCAyOS44NSA0NC4yNSAzNi45NSAzOC43IDMyLjUgMzQuMSAzOC45NSAzOS40IDQzLjAgNDQuMjUgMzYuOTUgNTAuMSA0MS43IDQ1LjM1IDQ3LjUgNTAuOSA1MS42IDU1LjcgNDYuMjUgNTAuMSA0MS43IE01Ni43IDIxLjcgTDUwLjAgMjkuODUgNDQuMCAyNS4zIDQ5LjY1IDE3Ljk1IDQ0LjAgMjUuMyA1MC4wIDI5Ljg1IDU2LjcgMjEuNyBNNDAuOCAxNi4wNSBMMzcuNSAyMC41IDQ0LjAgMjUuMyAzOC43IDMyLjUgMzIuNSAyNy41IDI3Ljk1IDM0LjMgMjIuMSAyOS45IDE5LjEgMzQuMyAxNS40NSAzMS4wIDE5LjEgMzQuMyAyMi4xIDI5LjkgMjcuOTUgMzQuMyAzMi41IDI3LjUgMzguNyAzMi41IDQ0LjAgMjUuMyAzNy41IDIwLjUgNDAuOCAxNi4wNSBNNjAuNjUgNTAuMyBMNTYuMjUgNTUuMyA1MC45IDUxLjYgNDcuOTUgNTUuMCA0Mi4zIDUxLjM1IDQ1LjM1IDQ3LjUgMzkuNCA0My4wIDM2LjEgNDcuMTUgMzAuOTUgNDMuNSAzNC4xIDM4Ljk1IDI3Ljk1IDM0LjMgMjQuOTUgMzkuMDUgMTkuMSAzNC4zIDE2LjU1IDM4LjA1IDE5LjEgMzQuMyAyNC45NSAzOS4wNSAyNy45NSAzNC4zIDM0LjEgMzguOTUgMzAuOTUgNDMuNSAzNi4xIDQ3LjE1IDM5LjQgNDMuMCA0NS4zNSA0Ny41IDQyLjMgNTEuMzUgNDcuOTUgNTUuMCA1MC45IDUxLjYgNTYuMjUgNTUuMyA2MC42NSA1MC4zIE0xOS4yIDQ3LjMgTDIwLjAgNDYuMjUgMjYuMTUgNTEuNDUgMzAuMyA1NC41IDI4LjIgNTcuMiAzMC4zIDU0LjUgMjYuMTUgNTEuNDUgMjAuMCA0Ni4yNSAxOS4yIDQ3LjMgTTQzLjYgNjAuNTUgTDQ3Ljk1IDU1LjAgNTMuNiA1OC4yNSA1Ni4yNSA1NS4zIDUzLjYgNTguMjUgNTUuNjUgNTkuMiA1My42IDU4LjI1IDUwLjc1IDYxLjMgNTMuNiA1OC4yNSA0Ny45NSA1NS4wIDQzLjYgNjAuNTUgTTI2LjE1IDUxLjQ1IEwzMC45NSA0My41IDI0Ljk1IDM5LjA1IDIwLjAgNDYuMjUgMTcuMjUgNDIuNzUgMjAuMCA0Ni4yNSAyNC45NSAzOS4wNSAzMC45NSA0My41IDI2LjE1IDUxLjQ1IE0zNy42NSA1Ny41IEw0Mi4zIDUxLjM1IDM2LjEgNDcuMTUgMzAuMyA1NC41IDQyLjEgNjIuNiAzMC4zIDU0LjUgMzYuMSA0Ny4xNSA0Mi4zIDUxLjM1IDM3LjY1IDU3LjUiIGZpbGw9IiNkMGQwZDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTY2LjkgNDIuOCBMNjcuMSA0My4wIDY5LjI1IDQwLjU1IE00OS42NSAxNy45NSBMNDQuMCAyNS4zIDUwLjAgMjkuODUgNTYuNyAyMS43IE00NC4yNSAzNi45NSBMNTAuMSA0MS43IDU2LjAgMzQuNDUgNTAuMCAyOS44NSA0NC4yNSAzNi45NSAzOC43IDMyLjUgMzQuMSAzOC45NSAzOS40IDQzLjAgNDQuMjUgMzYuOTUgTTUwLjEgNDEuNyBMNDUuMzUgNDcuNSA1MC45IDUxLjYgNTUuNyA0Ni4yNSA1MC4xIDQxLjcgTTY2LjE1IDM0LjcgTDYyLjEgMzkuMTUgNjYuOSA0Mi44IE02Ni44IDQzLjM1IEw2Ny4xIDQzLjAgTTYyLjI1IDI3LjIgTDU2LjAgMzQuNDUgNjIuMSAzOS4xNSA1NS43IDQ2LjI1IDYwLjY1IDUwLjMgNjYuOCA0My4zNSBNNDIuMSA2Mi42IEw0NC41NSA2NC4yIE0yMy42IDIwLjU1IEwyNi44IDIzLjAgMzAuOTUgMTcuMSAzMi4zIDE2Ljc1IDM3LjUgMjAuNSA0MC44IDE2LjA1IE0xNy42IDI2LjU1IEwyMi4xIDI5LjkgMjYuOCAyMy4wIDMyLjUgMjcuNSAzNy41IDIwLjUgNDQuMCAyNS4zIDM4LjcgMzIuNSAzMi41IDI3LjUgMjcuOTUgMzQuMyAzNC4xIDM4Ljk1IDMwLjk1IDQzLjUgMzYuMSA0Ny4xNSAzOS40IDQzLjAgNDUuMzUgNDcuNSA0Mi4zIDUxLjM1IDQ3Ljk1IDU1LjAgNTAuOSA1MS42IDU2LjI1IDU1LjMgNjAuNjUgNTAuMyBNMTUuNDUgMzEuMCBMMTkuMSAzNC4zIDIyLjEgMjkuOSAyNy45NSAzNC4zIDI0Ljk1IDM5LjA1IDMwLjk1IDQzLjUgMjYuMTUgNTEuNDUgMjAuMCA0Ni4yNSAxOS4yIDQ3LjMgMTguMCA0OC45IE0xMy41IDI5LjAgTDE1LjQ1IDMxLjAgTTE2LjU1IDM4LjA1IEwxOS4xIDM0LjMgMjQuOTUgMzkuMDUgMjAuMCA0Ni4yNSAxNy4yNSA0Mi43NSBNMjguMiA1Ny4yIEwzMC4zIDU0LjUgMjYuMTUgNTEuNDUgTTQyLjEgNjIuNiBMMzAuMyA1NC41IDM2LjEgNDcuMTUgNDIuMyA1MS4zNSAzNy42NSA1Ny41IE01Ni4yNSA1NS4zIEw1My42IDU4LjI1IDU1LjY1IDU5LjIgTTUzLjYgNTguMjUgTDUwLjc1IDYxLjMgTTUzLjYgNTguMjUgTDQ3Ljk1IDU1LjAgNDMuNiA2MC41NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgIDxwYXRoIGQ9Ik01MS4zIDIxLjUgTDUwLjQgMjEuMCBRNDAuOSAxNi41NSAzMS40IDE4LjkgMjEuOTUgMjEuMyAxNy44NSAyOS4xNSAxMy44IDM3LjA1IDE3LjYgNDUuOCAyMS40NSA1NC41IDMwLjg1IDU5LjAgNDAuNCA2My41NSA0OS45NSA2MS4yNSA1OS40IDU4Ljg1IDYzLjQ1IDUxLjA1IDY3LjU1IDQzLjEgNjMuNzUgMzQuMyBMNjMuMDUgMzIuODUgUTU5LjI1IDI1LjY1IDUxLjMgMjEuNSBNNTUuMyAyMC40NSBRNjEuMTUgMjQuMSA2Mi45NSAyNi44NSBMNjQuOCAyOS43NSA2NS4wNSAzMC4xIDY1LjMgMzAuNSA2NS41NSAzMC45IDY2Ljg1IDMzLjU1IFE3MS4yIDQzLjU1IDY2LjYgNTIuNSA2Mi4wIDYxLjQ1IDUxLjIgNjQuMSA0MC4zNSA2Ni44IDI5LjU1IDYxLjYgMTguOCA1Ni40NSAxNC40NSA0Ni41NSAxMC4xIDM2LjYgMTQuNzUgMjcuNjUgMTkuMzUgMTguNyAzMC4xNSAxNi4wIDQwLjk1IDEzLjM1IDUxLjcgMTguNDUgTDU0LjUgMTkuOTUgNTUuMyAyMC40NSIgZmlsbD0iIzVmNjZhOSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNTQuNSAxOS45NSBMNTUuMyAyMC40NSA1NC41IDE5Ljk1IiBmaWxsPSIjZTNlNGYwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik01MS4zIDIxLjUgUTU5LjI1IDI1LjY1IDYzLjA1IDMyLjg1IEw2My43NSAzNC4zIFE2Ny41NSA0My4xIDYzLjQ1IDUxLjA1IDU5LjQgNTguODUgNDkuOTUgNjEuMjUgNDAuNCA2My41NSAzMC44NSA1OS4wIDIxLjQ1IDU0LjUgMTcuNiA0NS44IDEzLjggMzcuMDUgMTcuODUgMjkuMTUgMjEuOTUgMjEuMyAzMS40IDE4LjkgNDAuOSAxNi41NSA1MC40IDIxLjAgTDUxLjMgMjEuNSBNNTUuMyAyMC40NSBRNjEuMTUgMjQuMSA2Mi45NSAyNi44NSBMNjQuOCAyOS43NSA2NS4wNSAzMC4xIDY1LjMgMzAuNSA2NS41NSAzMC45IDY2Ljg1IDMzLjU1IFE3MS4yIDQzLjU1IDY2LjYgNTIuNSA2Mi4wIDYxLjQ1IDUxLjIgNjQuMSA0MC4zNSA2Ni44IDI5LjU1IDYxLjYgMTguOCA1Ni40NSAxNC40NSA0Ni41NSAxMC4xIDM2LjYgMTQuNzUgMjcuNjUgMTkuMzUgMTguNyAzMC4xNSAxNi4wIDQwLjk1IDEzLjM1IDUxLjcgMTguNDUgTDU0LjUgMTkuOTUgNTUuMyAyMC40NSBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0KPCEtLSAxIC0tPg==',
  axe: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNTcuNHB4IiB3aWR0aD0iODhweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAxOC40NSwgMC4zNSkiPg0KICAgIDxwYXRoIGQ9Ik02Mi40IDI3Ljg1IEw2Ni4xNSAyOS4yIDY0Ljk1IDMyLjY1IDYxLjE1IDMxLjM1IDYyLjQgMjcuODUgTS0xNS44IDQuOTUgTC0xNC4zIDAuNjUgMzguMSAxOS4yNSAzNi43NSAyMi45NSAtMTUuOCA0Ljk1IiBmaWxsPSIjNzI1MzI3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik02NC45NSAzMi42NSBMNjMuMCAzOC4wNSA1OS4yNSAzNi43IDYxLjE1IDMxLjM1IDY0Ljk1IDMyLjY1IE0zNC45NSAyOC4xIEwtMTcuNDUgOS41IC0xNS44IDQuOTUgMzYuNzUgMjIuOTUgMzQuOTUgMjguMSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNDAuODUgMTEuNTUgTDQ0LjI1IDEuODUgNjguNTUgMTAuNSA2NS40NSAxOS4xNSBRNjEuOTUgMTguODUgNTMuOSAxNi4wNSBMNDAuODUgMTEuNTUiIGZpbGw9IiNlMGU4ZWIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTQwLjg1IDExLjU1IEw1My45IDE2LjA1IFE2MS45NSAxOC44NSA2NS40NSAxOS4xNSBMNjIuNCAyNy44NSA2MS4xNSAzMS4zNSA1OS4yNSAzNi43IDUyLjM1IDU2LjA1IDI4LjA1IDQ3LjQgMzQuOTUgMjguMSAzNi43NSAyMi45NSAzOC4xIDE5LjI1IDQwLjg1IDExLjU1IiBmaWxsPSIjYjhjOWNmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik02NS40NSAxOS4xNSBMNjguNTUgMTAuNSA0NC4yNSAxLjg1IDQwLjg1IDExLjU1IDM4LjEgMTkuMjUgMzYuNzUgMjIuOTUgMzQuOTUgMjguMSAtMTcuNDUgOS41IC0xNS44IDQuOTUgLTE0LjMgMC42NSAzOC4xIDE5LjI1IE02NS40NSAxOS4xNSBMNjIuNCAyNy44NSA2Ni4xNSAyOS4yIDY0Ljk1IDMyLjY1IDYxLjE1IDMxLjM1IDU5LjI1IDM2LjcgNTIuMzUgNTYuMDUgMjguMDUgNDcuNCAzNC45NSAyOC4xIE02Mi40IDI3Ljg1IEw2MS4xNSAzMS4zNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  bumps: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNjIuMTVweCIgd2lkdGg9Ijk0LjZweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAxNC42LCAtMS4yNSkiPg0KICAgIDxwYXRoIGQ9Ik00My4xNSAxNS40IEw0MS4wIDE1LjcgUTQwLjM1IDE1LjcgMzkuMCAxNi40IEwzNy42IDE3LjA1IFEzNS42NSAxOC4zIDM0LjkgMTguMyBMMzIuMzUgMTguNzUgMjkuNyAxOC40IDI5LjY1IDE4LjY1IDMzLjYgMTkuODUgMzIuNDUgMTkuOCBRMzAuOSAxOS44IDI5LjggMjEuOCAyOS4wIDIzLjMgMjkuMCAyNC4yIEwyOS4yNSAyNC43NSAyOS40NSAyNS4yNSAyOS44NSAyNy4wIDMwLjI1IDI4Ljk1IDMwLjQ1IDI5LjUgMzAuNjUgMzAuMDUgMzQuOTUgMzIuODUgUTM5Ljk1IDM2LjE1IDQyLjg1IDM5LjM1IEw0MS43IDQwLjI1IDM5LjUgNDAuNjUgNDEuMjUgNDEuMSA0NC4wIDQxLjU1IDQ3LjkgNDEuMDUgUTUxLjU1IDQxLjA1IDU0LjIgNDUuNCA1Ni44NSA0OS43IDYxLjIgNDkuNyBMNjguNzUgNDguOSA2OS42IDQ5LjEgUTcwLjI1IDQ5LjMgNzAuMjUgNDkuNDUgTDcwLjc1IDQ5LjggNzEuNiA0OS44IDcyLjE1IDQ5LjYgNzIuNjUgNDkuMzUgUTcyLjkgNDkuMzUgNzMuMiA0OS4xNSA3My41IDQ4LjkgNzMuNzUgNDguOSA3NS40IDQ4LjkgNzcuMyA0NS43IDc4LjUgNDMuNiA3OC45NSA0MS44NSA3OS42IDQ5LjQ1IDc0LjM1IDU2LjMgNjguNSA2MS4zNSA1NS42NSA2Mi4zNSA0Mi4zNSA2My4zIDI1LjQgNDMuOTUgMTYuNyAzMy45NSA4LjIgMjEuMyBMMi43NSAxNS40IFEwLjU1IDEzLjMgLTIuNiAxMi4wIEwtOC41NSAxMC4xNSBRLTEzLjYgOC4yIC0xMy42IDYuMyBMLTEzLjEgNC4yNSBRLTEyLjUgMi42IC0xMS43NSAyLjYgTC0xMC45NSAyLjM1IC0xMC43NSAyLjI1IFEtMTAuNjUgMi4yIC02LjU1IDQuMiAtMi40NSA2LjE1IDUuODUgOC43IDE0LjE1IDExLjI1IDI0LjkgMTMuMSBMMzQuOTUgMTQuNSAzNS45IDE0LjYgNDAuMyAxNS4wNSA0My4xNSAxNS40IiBmaWxsPSIjNzUzYzI0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik00My4xNSAxNS40IFE1MS43NSAxNi42IDYwLjEgMTkuMzUgNzIuNCAyMy4zNSA3Ny4xNSAzNC43NSA3OC42NSAzOC4zNSA3OC45NSA0MS44NSA3OC41IDQzLjYgNzcuMyA0NS43IDc1LjQgNDguOSA3My43NSA0OC45IDczLjUgNDguOSA3My4yIDQ5LjE1IDcyLjkgNDkuMzUgNzIuNjUgNDkuMzUgTDcyLjE1IDQ5LjYgNzEuNiA0OS44IDcwLjc1IDQ5LjggNzAuMjUgNDkuNDUgUTcwLjI1IDQ5LjMgNjkuNiA0OS4xIEw2OC43NSA0OC45IDYxLjIgNDkuNyBRNTYuODUgNDkuNyA1NC4yIDQ1LjQgNTEuNTUgNDEuMDUgNDcuOSA0MS4wNSBMNDQuMCA0MS41NSA0MS4yNSA0MS4xIDM5LjUgNDAuNjUgNDEuNyA0MC4yNSA0Mi44NSAzOS4zNSBRMzkuOTUgMzYuMTUgMzQuOTUgMzIuODUgTDMwLjY1IDMwLjA1IDMwLjQ1IDI5LjUgMzAuMjUgMjguOTUgMjkuODUgMjcuMCAyOS40NSAyNS4yNSAyOS4yNSAyNC43NSAyOS4wIDI0LjIgUTI5LjAgMjMuMyAyOS44IDIxLjggMzAuOSAxOS44IDMyLjQ1IDE5LjggTDMzLjYgMTkuODUgMjkuNjUgMTguNjUgMjkuNyAxOC40IDMyLjM1IDE4Ljc1IDM0LjkgMTguMyBRMzUuNjUgMTguMyAzNy42IDE3LjA1IEwzOS4wIDE2LjQgUTQwLjM1IDE1LjcgNDEuMCAxNS43IEw0My4xNSAxNS40IiBmaWxsPSIjOTY0ZDJlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik03OC45NSA0MS44NSBRNzguNjUgMzguMzUgNzcuMTUgMzQuNzUgNzIuNCAyMy4zNSA2MC4xIDE5LjM1IDUxLjc1IDE2LjYgNDMuMTUgMTUuNCBMNDAuMyAxNS4wNSAzNS45IDE0LjYgMzQuOTUgMTQuNSAyNC45IDEzLjEgUTE0LjE1IDExLjI1IDUuODUgOC43IC0yLjQ1IDYuMTUgLTYuNTUgNC4yIC0xMC42NSAyLjIgLTEwLjc1IDIuMjUgTC0xMC45NSAyLjM1IC0xMS43NSAyLjYgUS0xMi41IDIuNiAtMTMuMSA0LjI1IEwtMTMuNiA2LjMgUS0xMy42IDguMiAtOC41NSAxMC4xNSBMLTIuNiAxMi4wIFEwLjU1IDEzLjMgMi43NSAxNS40IEw4LjIgMjEuMyBRMTYuNyAzMy45NSAyNS40IDQzLjk1IDQyLjM1IDYzLjMgNTUuNjUgNjIuMzUgNjguNSA2MS4zNSA3NC4zNSA1Ni4zIDc5LjYgNDkuNDUgNzguOTUgNDEuODUgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  flail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iOTUuNnB4IiB3aWR0aD0iOTkuODVweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAxOS44NSwgMS42KSI+DQogICAgPHBhdGggZD0iTTU2LjEgNDcuNCBRNTYuMjUgNDQuNzUgNjAuNyA0MC4zNSBMNjAuOCA0MC4zIFE2MS4wIDM1LjggNjQuMyAzNS45NSA2NS42IDM2LjAgNjYuNzUgMzYuOCA2Ny44NSAzNy42IDY3Ljg1IDM4LjUgNjcuODUgMzkuNCA2Ni42NSA0MS4zIEw2Ni4yNSA0MS45IFE2Ni45IDQyLjM1IDY2LjkgNDMuNSA2Ni45IDQ0LjYgNjUuOTUgNDYuOCBMNjUuMzUgNDguMDUgUTY2LjQ1IDQ5LjEgNjYuNDUgNTIuMiA2Ni40NSA1My41NSA2NS45NSA1NC45NSA2NS42IDU2LjAgNjUuMSA1Ni41IDY1LjYgNTcuMSA2NS42IDU4LjggNjUuNiA1OS41NSA2NC45NSA2MC4zIDY0LjM1IDYxLjA1IDYzLjg1IDYxLjA1IDYyLjQ1IDYxLjA1IDYyLjE1IDYwLjIgTDYyLjEgNTkuMjUgUTYyLjEgNTcuNTUgNjIuODUgNTYuOCA2MS44NSA1Ni4zIDYxLjQgNTQuOSBMNjEuMSA1Mi43NSBRNjEuMSA1MC4yNSA2MS43IDQ4LjkgTDYxLjM1IDQ4LjYgNjEuMiA0OC40IDU5LjIgNDkuNjUgNTYuNzUgNTIuODUgNTMuOCA1NS44NSA1My44NSA1Ny4zNSBRNTMuODUgNTkuMyA1Mi4yIDYxLjggNTAuOTUgNjMuNjUgNDkuMzUgNjQuNDUgTDQ5LjM1IDY0Ljk1IFE0OS4zNSA2Ni42NSA0Ny45NSA2OS4yIDQ2LjE1IDcyLjM1IDQzLjggNzIuMzUgNDIuMDUgNzIuMzUgNDEuNTUgNzEuNDUgTDQxLjQgNzAuNSBRNDEuNCA2Ny4yIDQ1LjQgNjMuNiBMNDUuNSA2My41IFE0NS42NSA1OC41IDQ5LjcgNTQuNDUgTDUxLjE1IDUzLjM1IFE1MS44IDUwLjk1IDU1LjMgNDguMDUgTDU2LjEgNDcuNCIgZmlsbD0iIzQwNDA0MCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNjguMSAzOS43NSBMLTE4Ljg1IDYuMyAtMTYuMiAtMC42IDcwLjcgMzIuODUgNjguMSAzOS43NSIgZmlsbD0iIzk2NGQyZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNjguMSAzOS43NSBMLTE4Ljg1IDYuMyAtMTYuMiAtMC42IDcwLjcgMzIuODUgNjguMSAzOS43NSBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgPHBhdGggZD0iTTMxLjcgNjQuODUgTDMxLjg1IDY0Ljc1IDMxLjcgNjQuODUiIGZpbGw9IiNlMGU4ZWIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTQ5LjAgNzAuNSBMNTAuMSA2OS42NSA1MS4xIDY4Ljk1IFE1Mi4xNSA2OC45NSA1My4yIDcwLjQgTDUzLjM1IDcwLjY1IDUzLjU1IDcwLjk1IDUzLjggNzEuNCA1Mi40IDcyLjAgNTAuNDUgNzIuNzUgNTAuMDUgNzIuMCA0OS45NSA3MS44IDQ5LjAgNzAuNSA0OS45NSA3MS44IDUwLjA1IDcyLjAgNTAuNDUgNzIuNzUgNTEuNDUgNzUuMzUgUTUyLjAgNzcuNyA1MS42IDgwLjI1IEw0OS4zNSA4MS43NSBRNDYuNjUgODMuMjUgNDQuMzUgODMuMjUgTDQzLjY1IDgzLjIgNDQuMyA4NC4wNSA0NC44NSA4NS4xNSBRNDQuODUgODYuNCA0My42IDg3LjQgNDIuMzUgODguNDUgNDAuNzUgODguNDUgMzkuNyA4OC40NSAzOC44NSA4Ny42IDM4LjA1IDg2LjggMzguMDUgODYuMCAzOC4wNSA4NC44NSAzOS43IDgzLjggNDAuNTUgODMuMjUgNDEuMzUgODMuMCBMNDIuNSA4Mi44IDQzLjY1IDgzLjIgNDIuNSA4Mi44IDQxLjM1IDgzLjAgNDAuNDUgODIuOTUgUTM5LjEgODIuOTUgMzYuOSA4MS43IDM1LjAgODAuNjUgMzQuNSA4MC4wIEwzNC41NSA4MC42NSBRMzQuNTUgODEuNTUgMzMuOTUgODIuNDUgMzMuMyA4My40IDMyLjQ1IDgzLjQgMzEuNjUgODMuNCAzMC43IDgyLjE1IDI5LjU1IDgwLjcgMjkuNTUgNzkuMDUgTDI5LjU1IDc4LjY1IFEyOS41IDc4LjU1IDMwLjAgNzcuMiBMMzAuMDUgNzcuMiAzMC43NSA3Ni43NSAzMS43IDc2LjYgMzEuOSA3Ni42IDMxLjcgNzYuMzUgUTI5Ljk1IDc0LjAgMjkuOTUgNzMuMyBMMjkuOSA3My4xIDI5LjggNzIuODUgMjkuNjUgNzEuNzUgMjkuNyA3MC42IDI5Ljc1IDcwLjM1IDMwLjc1IDY5LjMgMzEuMzUgNjguNzUgUTMyLjI1IDY4LjA1IDMzLjI1IDY3LjUgTDMzLjYgNjcuMjUgMzMuNjUgNjcuMjUgMzMuNjUgNjcuMiAzMy4yNSA2Ni42NSAzMS43IDY0Ljg1IDMxLjg1IDY0Ljc1IDM0LjQ1IDYzLjc1IDM1LjM1IDYzLjY1IDM1Ljg1IDYzLjggMzYuMTUgNjMuOTUgMzYuMiA2NC4zIDM2LjMgNjQuNjUgMzYuNjUgNjUuNjUgMzYuODUgNjYuMSA0Mi4yNSA2Ni4yNSBRNDYuNDUgNjcuMjUgNDkuMCA3MC41IE0zOC4zIDcxLjIgUTM3Ljk1IDcxLjIgMzcuNzUgNzEuNzUgTDM3LjU1IDcyLjc1IFEzNy41NSA3NC4yIDM4LjQgNzUuNiAzOS44IDc4LjA1IDQzLjIgNzguMDUgNDQuNiA3OC4wNSA0NS40IDc2LjY1IDQ1Ljk1IDc1LjY1IDQ1Ljk1IDc0Ljc1IDQ1LjcgNzIuODUgNDUuMiA3Mi44NSBMNDUuMjUgNzMuMiA0NS4wNSA3NC4wNSA0NC42IDc0LjcgUTQzLjg1IDc1LjQgNDIuNyA3NS40IDQxLjE1IDc1LjQgMzkuNzUgNzQuMSAzOC43IDczLjE1IDM4LjQgNzIuMSBMMzguMyA3MS4zIDM4LjMgNzEuMiBNMzguMyA3MS4zIFEzOC42IDY5Ljc1IDQxLjA1IDY5Ljc1IDQyLjQgNjkuNzUgNDMuNzUgNzAuNjUgNDUuMDUgNzEuNiA0NS4yIDcyLjg1IDQ1LjA1IDcxLjYgNDMuNzUgNzAuNjUgNDIuNCA2OS43NSA0MS4wNSA2OS43NSAzOC42IDY5Ljc1IDM4LjMgNzEuMyBNMzYuODUgNjYuMSBRMzUuMiA2Ni40NSAzMy42NSA2Ny4yNSAzNS4yIDY2LjQ1IDM2Ljg1IDY2LjEgTTM0LjUgODAuMCBRMzQuMyA3OC44NSAzMy42IDc3Ljg1IDMyLjggNzYuNyAzMS45IDc2LjYgMzIuOCA3Ni43IDMzLjYgNzcuODUgMzQuMyA3OC44NSAzNC41IDgwLjAiIGZpbGw9IiM4ZTkyOTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTUwLjQ1IDcyLjc1IEw1Mi40IDcyLjAgNTMuOCA3MS40IDUzLjk1IDcxLjY1IDU0LjM1IDcyLjYgNTQuMzUgNzIuNjUgNTQuNDUgNzQuMDUgNTQuNCA3NC43IDU0LjMgNzQuNyA1Mi45IDc1LjA1IDUxLjQ1IDc1LjM1IDUwLjQ1IDcyLjc1IE01MS42IDgwLjI1IEw1MS40IDgxLjE1IFE1MC44NSA4My41IDQ5LjU1IDg1LjQgTDUwLjg1IDg2LjA1IFE1MS44IDg2LjUgNTEuOCA4Ny4xNSA1MS44IDg3Ljc1IDUwLjggODkuNCA0OS44NSA5MC45NSA0OC40NSA5MS4yNSBMNDcuNSA5MS4yIFE0Ni44NSA5MC44NSA0Ni4wIDg4Ljc1IEw0NS44NSA4OC44NSBRNDEuNSA5MS41NSAzNi40NSA5MC4zIEwzNS44NSA5MC4xNSAzNS4zNSA5MS41NSAzNC43IDkyLjggUTM0LjYgOTIuOCAzNC41NSA5Mi45IEwzNC40IDkzLjAgUTMzLjQ1IDkzLjAgMzEuNyA5Mi4xIDI5LjY1IDkxLjAgMjkuNjUgODkuOSBMMjkuNSA4OS40IDI5LjU1IDg5LjM1IDMwLjI1IDg4LjUgMzEuMSA4Ny42IDI4Ljc1IDg0Ljc1IDI3Ljc1IDgyLjcgMjYuNzUgODIuMTUgUTI1LjkgODEuMzUgMjUuOSA3OS45IEwyNi4zIDc3Ljk1IFEyNi43IDc2LjY1IDI3LjEgNzYuNDUgTDI3LjMgNzUuMzUgUTI4LjAgNzIuNDUgMjkuNzUgNzAuMzUgTDI5LjcgNzAuNiAyOS42NSA3MS43NSAyOS44IDcyLjg1IDI5LjkgNzMuMSAyOS45NSA3My4zIFEyOS45NSA3NC4wIDMxLjcgNzYuMzUgTDMxLjkgNzYuNiAzMS43IDc2LjYgMzAuNzUgNzYuNzUgMzAuMDUgNzcuMiAzMC4wIDc3LjIgUTI5LjUgNzguNTUgMjkuNTUgNzguNjUgTDI5LjU1IDc5LjA1IFEyOS41NSA4MC43IDMwLjcgODIuMTUgMzEuNjUgODMuNCAzMi40NSA4My40IDMzLjMgODMuNCAzMy45NSA4Mi40NSAzNC41NSA4MS41NSAzNC41NSA4MC42NSBMMzQuNSA4MC4wIFEzNS4wIDgwLjY1IDM2LjkgODEuNyAzOS4xIDgyLjk1IDQwLjQ1IDgyLjk1IEw0MS4zNSA4My4wIFE0MC41NSA4My4yNSAzOS43IDgzLjggMzguMDUgODQuODUgMzguMDUgODYuMCAzOC4wNSA4Ni44IDM4Ljg1IDg3LjYgMzkuNyA4OC40NSA0MC43NSA4OC40NSA0Mi4zNSA4OC40NSA0My42IDg3LjQgNDQuODUgODYuNCA0NC44NSA4NS4xNSBMNDQuMyA4NC4wNSA0My42NSA4My4yIDQ0LjM1IDgzLjI1IFE0Ni42NSA4My4yNSA0OS4zNSA4MS43NSBMNTEuNiA4MC4yNSBNMzEuMzUgNjguNzUgTDI5Ljg1IDY2Ljg1IDI5LjcgNjYuNSAzMS43IDY0Ljg1IDMzLjI1IDY2LjY1IDMzLjY1IDY3LjIgMzMuNjUgNjcuMjUgMzMuNiA2Ny4yNSAzMy4yNSA2Ny41IFEzMi4yNSA2OC4wNSAzMS4zNSA2OC43NSBNNDUuMiA3Mi44NSBRNDUuNyA3Mi44NSA0NS45NSA3NC43NSA0NS45NSA3NS42NSA0NS40IDc2LjY1IDQ0LjYgNzguMDUgNDMuMiA3OC4wNSAzOS44IDc4LjA1IDM4LjQgNzUuNiAzNy41NSA3NC4yIDM3LjU1IDcyLjc1IEwzNy43NSA3MS43NSBRMzcuOTUgNzEuMiAzOC4zIDcxLjIgTDM4LjMgNzEuMyAzOC40IDcyLjEgUTM4LjcgNzMuMTUgMzkuNzUgNzQuMSA0MS4xNSA3NS40IDQyLjcgNzUuNCA0My44NSA3NS40IDQ0LjYgNzQuNyBMNDUuMDUgNzQuMDUgNDUuMjUgNzMuMiA0NS4yIDcyLjg1IE00Ni4wIDg4Ljc1IFE0OC4yIDg3LjM1IDQ5LjU1IDg1LjQgNDguMiA4Ny4zNSA0Ni4wIDg4Ljc1IE0zMS4xIDg3LjYgUTMzLjEgODkuMzUgMzUuODUgOTAuMTUgMzMuMSA4OS4zNSAzMS4xIDg3LjYgTTI3LjEgNzYuNDUgUTI2LjYgNzkuNyAyNy43NSA4Mi43IDI2LjYgNzkuNyAyNy4xIDc2LjQ1IiBmaWxsPSIjNWM1ZjVmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik01My44IDcxLjQgTDUzLjU1IDcwLjk1IDUzLjM1IDcwLjY1IDUzLjIgNzAuNCBRNTIuMTUgNjguOTUgNTEuMSA2OC45NSBMNTAuMSA2OS42NSA0OS4wIDcwLjUgNDkuOTUgNzEuOCA1MC4wNSA3Mi4wIDUwLjQ1IDcyLjc1IDUxLjQ1IDc1LjM1IFE1Mi4wIDc3LjcgNTEuNiA4MC4yNSBMNTEuNCA4MS4xNSBRNTAuODUgODMuNSA0OS41NSA4NS40IEw1MC44NSA4Ni4wNSBRNTEuOCA4Ni41IDUxLjggODcuMTUgNTEuOCA4Ny43NSA1MC44IDg5LjQgNDkuODUgOTAuOTUgNDguNDUgOTEuMjUgTDQ3LjUgOTEuMiBRNDYuODUgOTAuODUgNDYuMCA4OC43NSBMNDUuODUgODguODUgUTQxLjUgOTEuNTUgMzYuNDUgOTAuMyBMMzUuODUgOTAuMTUgMzUuMzUgOTEuNTUgMzQuNyA5Mi44IFEzNC42IDkyLjggMzQuNTUgOTIuOSBMMzQuNCA5My4wIFEzMy40NSA5My4wIDMxLjcgOTIuMSAyOS42NSA5MS4wIDI5LjY1IDg5LjkgTDI5LjUgODkuNCAyOS41NSA4OS4zNSAzMC4yNSA4OC41IDMxLjEgODcuNiAyOC43NSA4NC43NSAyNy43NSA4Mi43IDI2Ljc1IDgyLjE1IFEyNS45IDgxLjM1IDI1LjkgNzkuOSBMMjYuMyA3Ny45NSBRMjYuNyA3Ni42NSAyNy4xIDc2LjQ1IEwyNy4zIDc1LjM1IFEyOC4wIDcyLjQ1IDI5Ljc1IDcwLjM1IEwzMC43NSA2OS4zIDMxLjM1IDY4Ljc1IDI5Ljg1IDY2Ljg1IDI5LjcgNjYuNSAzMS43IDY0Ljg1IDMxLjg1IDY0Ljc1IDM0LjQ1IDYzLjc1IDM1LjM1IDYzLjY1IDM1Ljg1IDYzLjggMzYuMTUgNjMuOTUgMzYuMiA2NC4zIDM2LjMgNjQuNjUgMzYuNjUgNjUuNjUgMzYuODUgNjYuMSA0Mi4yNSA2Ni4yNSBRNDYuNDUgNjcuMjUgNDkuMCA3MC41IE01My44IDcxLjQgTDUzLjk1IDcxLjY1IDU0LjM1IDcyLjYgNTQuMzUgNzIuNjUgNTQuNDUgNzQuMDUgNTQuNCA3NC43IDU0LjMgNzQuNyA1Mi45IDc1LjA1IDUxLjQ1IDc1LjM1IE00NS4yIDcyLjg1IEw0NS4yNSA3My4yIDQ1LjA1IDc0LjA1IDQ0LjYgNzQuNyBRNDMuODUgNzUuNCA0Mi43IDc1LjQgNDEuMTUgNzUuNCAzOS43NSA3NC4xIDM4LjcgNzMuMTUgMzguNCA3Mi4xIEwzOC4zIDcxLjMgMzguMyA3MS4yIE00NS4yIDcyLjg1IFE0NS4wNSA3MS42IDQzLjc1IDcwLjY1IDQyLjQgNjkuNzUgNDEuMDUgNjkuNzUgMzguNiA2OS43NSAzOC4zIDcxLjMgTTQ5LjU1IDg1LjQgUTQ4LjIgODcuMzUgNDYuMCA4OC43NSBNNDEuMzUgODMuMCBRNDAuNTUgODMuMjUgMzkuNyA4My44IDM4LjA1IDg0Ljg1IDM4LjA1IDg2LjAgMzguMDUgODYuOCAzOC44NSA4Ny42IDM5LjcgODguNDUgNDAuNzUgODguNDUgNDIuMzUgODguNDUgNDMuNiA4Ny40IDQ0Ljg1IDg2LjQgNDQuODUgODUuMTUgTDQ0LjMgODQuMDUgNDMuNjUgODMuMiA0Mi41IDgyLjggNDEuMzUgODMuMCBNMzQuNSA4MC4wIEwzNC41NSA4MC42NSBRMzQuNTUgODEuNTUgMzMuOTUgODIuNDUgMzMuMyA4My40IDMyLjQ1IDgzLjQgMzEuNjUgODMuNCAzMC43IDgyLjE1IDI5LjU1IDgwLjcgMjkuNTUgNzkuMDUgTDI5LjU1IDc4LjY1IFEyOS41IDc4LjU1IDMwLjAgNzcuMiBMMzAuMDUgNzcuMiAzMC43NSA3Ni43NSAzMS43IDc2LjYgMzEuOSA3Ni42IFEzMi44IDc2LjcgMzMuNiA3Ny44NSAzNC4zIDc4Ljg1IDM0LjUgODAuMCBNMzEuODUgNjQuNzUgTDMxLjcgNjQuODUgTTMzLjY1IDY3LjI1IFEzNS4yIDY2LjQ1IDM2Ljg1IDY2LjEgTTMxLjM1IDY4Ljc1IFEzMi4yNSA2OC4wNSAzMy4yNSA2Ny41IEwzMy42IDY3LjI1IDMzLjY1IDY3LjI1IE0yNy43NSA4Mi43IFEyNi42IDc5LjcgMjcuMSA3Ni40NSBNMzUuODUgOTAuMTUgUTMzLjEgODkuMzUgMzEuMSA4Ny42IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgPHBhdGggZD0iTTU2LjI1IDU0Ljc1IEw1Ni40IDU0LjY1IDU2LjI1IDU0Ljc1IiBmaWxsPSIjZTBlOGViIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik03My41NSA2MC40IEw3NC42NSA1OS41NSA3NS42NSA1OC44NSBRNzYuNyA1OC44NSA3Ny43NSA2MC4zIEw3Ny45IDYwLjU1IDc4LjEgNjAuODUgNzguMzUgNjEuMyA3Ni45NSA2MS45IDc1LjAgNjIuNjUgNzQuNiA2MS45IDc0LjUgNjEuNyA3My41NSA2MC40IDc0LjUgNjEuNyA3NC42IDYxLjkgNzUuMCA2Mi42NSA3Ni4wIDY1LjI1IFE3Ni41NSA2Ny42IDc2LjE1IDcwLjE1IEw3My45IDcxLjY1IFE3MS4yIDczLjE1IDY4LjkgNzMuMTUgTDY4LjIgNzMuMSA2OC44NSA3My45NSA2OS40IDc1LjA1IFE2OS40IDc2LjMgNjguMTUgNzcuMyA2Ni45IDc4LjM1IDY1LjMgNzguMzUgNjQuMjUgNzguMzUgNjMuNCA3Ny41IDYyLjYgNzYuNyA2Mi42IDc1LjkgNjIuNiA3NC43NSA2NC4yNSA3My43IDY1LjEgNzMuMTUgNjUuOSA3Mi45IEw2Ny4wNSA3Mi43IFE2Ny40NSA3Mi43IDY4LjIgNzMuMSA2Ny40NSA3Mi43IDY3LjA1IDcyLjcgTDY1LjkgNzIuOSA2NS4wIDcyLjg1IFE2My42NSA3Mi44NSA2MS40NSA3MS42IDU5LjU1IDcwLjU1IDU5LjA1IDY5LjkgTDU5LjEgNzAuNTUgUTU5LjEgNzEuNDUgNTguNSA3Mi4zNSA1Ny44NSA3My4zIDU3LjAgNzMuMyA1Ni4yIDczLjMgNTUuMjUgNzIuMDUgNTQuMSA3MC42IDU0LjEgNjguOTUgTDU0LjEgNjguNTUgNTQuNTUgNjcuMSA1NC42IDY3LjEgNTUuMyA2Ni42NSA1Ni4yNSA2Ni41IDU2LjQ1IDY2LjUgNTYuMjUgNjYuMjUgUTU0LjUgNjMuOSA1NC41IDYzLjIgTDU0LjQ1IDYzLjAgNTQuMzUgNjIuNzUgNTQuMiA2MS42NSA1NC4yNSA2MC41IDU0LjMgNjAuMjUgNTUuMyA1OS4yIDU1LjkgNTguNjUgNTcuOCA1Ny40IDU4LjE1IDU3LjE1IDU4LjIgNTcuMTUgNTguMiA1Ny4xIDU3LjggNTYuNTUgNTYuMjUgNTQuNzUgNTYuNCA1NC42NSA1OS4wIDUzLjY1IDU5LjkgNTMuNTUgNjAuNCA1My43IDYwLjcgNTMuODUgNjAuNzUgNTQuMiA2MC44NSA1NC41NSA2MS4yIDU1LjU1IDYxLjQgNTYuMCA2Ni44IDU2LjE1IFE3MS4wIDU3LjE1IDczLjU1IDYwLjQgTTY5Ljc1IDYyLjc1IEw2OS44IDYzLjEgNjkuNiA2My45NSA2OS4xNSA2NC42IFE2OC40IDY1LjMgNjcuMjUgNjUuMyA2NS43IDY1LjMgNjQuMyA2NC4wIDYzLjI1IDYzLjA1IDYyLjk1IDYyLjAgTDYyLjg1IDYxLjIgNjIuODUgNjEuMSBRNjIuNSA2MS4xIDYyLjMgNjEuNjUgTDYyLjEgNjIuNjUgUTYyLjEgNjQuMSA2Mi45NSA2NS41IDY0LjM1IDY3Ljk1IDY3Ljc1IDY3Ljk1IDY5LjE1IDY3Ljk1IDY5Ljk1IDY2LjU1IDcwLjUgNjUuNTUgNzAuNSA2NC42NSA3MC4yNSA2Mi43NSA2OS43NSA2Mi43NSA2OS42IDYxLjUgNjguMyA2MC41NSA2Ni45NSA1OS42NSA2NS42IDU5LjY1IDYzLjE1IDU5LjY1IDYyLjg1IDYxLjIgNjMuMTUgNTkuNjUgNjUuNiA1OS42NSA2Ni45NSA1OS42NSA2OC4zIDYwLjU1IDY5LjYgNjEuNSA2OS43NSA2Mi43NSBNNjEuNCA1Ni4wIFE1OS43NSA1Ni4zNSA1OC4yIDU3LjE1IDU5Ljc1IDU2LjM1IDYxLjQgNTYuMCBNNTkuMDUgNjkuOSBRNTguODUgNjguNzUgNTguMTUgNjcuNzUgNTcuMzUgNjYuNiA1Ni40NSA2Ni41IDU3LjM1IDY2LjYgNTguMTUgNjcuNzUgNTguODUgNjguNzUgNTkuMDUgNjkuOSIgZmlsbD0iIzhlOTI5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNzUuMCA2Mi42NSBMNzYuOTUgNjEuOSA3OC4zNSA2MS4zIDc4LjUgNjEuNTUgNzguOSA2Mi41IDc4LjkgNjIuNTUgNzkuMCA2My45NSA3OC45NSA2NC42IDc4Ljg1IDY0LjYgNzcuNDUgNjQuOTUgNzYuMCA2NS4yNSA3NS4wIDYyLjY1IE03Ni4xNSA3MC4xNSBMNzUuOTUgNzEuMDUgUTc1LjQgNzMuNCA3NC4xIDc1LjMgTDc1LjQgNzUuOTUgUTc2LjM1IDc2LjQgNzYuMzUgNzcuMDUgNzYuMzUgNzcuNjUgNzUuMzUgNzkuMyA3NC40IDgwLjg1IDczLjAgODEuMTUgTDcyLjA1IDgxLjEgUTcxLjQgODAuNzUgNzAuNTUgNzguNjUgTDcwLjQgNzguNzUgUTY2LjA1IDgxLjQ1IDYxLjAgODAuMiBMNjAuNCA4MC4wNSA1OS45IDgxLjQ1IDU5LjI1IDgyLjcgNTkuMSA4Mi44IDU4Ljk1IDgyLjkgUTU4LjAgODIuOSA1Ni4yNSA4Mi4wIDU0LjIgODAuOSA1NC4yIDc5LjggTDU0LjA1IDc5LjMgNTQuMSA3OS4yNSA1NC44IDc4LjQgNTUuNjUgNzcuNSBRNTQuMzUgNzYuMyA1My4zIDc0LjY1IEw1Mi4zIDcyLjYgNTEuMyA3Mi4wNSBRNTAuNDUgNzEuMjUgNTAuNDUgNjkuOCBMNTAuODUgNjcuODUgUTUxLjI1IDY2LjU1IDUxLjY1IDY2LjM1IEw1MS44NSA2NS4yNSBRNTIuNTUgNjIuMzUgNTQuMyA2MC4yNSBMNTQuMjUgNjAuNSA1NC4yIDYxLjY1IDU0LjM1IDYyLjc1IDU0LjQ1IDYzLjAgNTQuNSA2My4yIFE1NC41IDYzLjkgNTYuMjUgNjYuMjUgTDU2LjQ1IDY2LjUgNTYuMjUgNjYuNSA1NS4zIDY2LjY1IDU0LjYgNjcuMSA1NC41NSA2Ny4xIDU0LjEgNjguNTUgNTQuMSA2OC45NSBRNTQuMSA3MC42IDU1LjI1IDcyLjA1IDU2LjIgNzMuMyA1Ny4wIDczLjMgNTcuODUgNzMuMyA1OC41IDcyLjM1IDU5LjEgNzEuNDUgNTkuMSA3MC41NSBMNTkuMDUgNjkuOSBRNTkuNTUgNzAuNTUgNjEuNDUgNzEuNiA2My42NSA3Mi44NSA2NS4wIDcyLjg1IEw2NS45IDcyLjkgUTY1LjEgNzMuMTUgNjQuMjUgNzMuNyA2Mi42IDc0Ljc1IDYyLjYgNzUuOSA2Mi42IDc2LjcgNjMuNCA3Ny41IDY0LjI1IDc4LjM1IDY1LjMgNzguMzUgNjYuOSA3OC4zNSA2OC4xNSA3Ny4zIDY5LjQgNzYuMyA2OS40IDc1LjA1IEw2OC44NSA3My45NSA2OC4yIDczLjEgNjguOSA3My4xNSBRNzEuMiA3My4xNSA3My45IDcxLjY1IEw3Ni4xNSA3MC4xNSBNNTUuOSA1OC42NSBMNTQuNCA1Ni43NSA1NC4yNSA1Ni40IDU2LjI1IDU0Ljc1IDU3LjggNTYuNTUgNTguMiA1Ny4xIDU4LjIgNTcuMTUgNTguMTUgNTcuMTUgNTcuOCA1Ny40IDU1LjkgNTguNjUgTTYyLjg1IDYxLjEgTDYyLjg1IDYxLjIgNjIuOTUgNjIuMCBRNjMuMjUgNjMuMDUgNjQuMyA2NC4wIDY1LjcgNjUuMyA2Ny4yNSA2NS4zIDY4LjQgNjUuMyA2OS4xNSA2NC42IEw2OS42IDYzLjk1IDY5LjggNjMuMSA2OS43NSA2Mi43NSBRNzAuMjUgNjIuNzUgNzAuNSA2NC42NSA3MC41IDY1LjU1IDY5Ljk1IDY2LjU1IDY5LjE1IDY3Ljk1IDY3Ljc1IDY3Ljk1IDY0LjM1IDY3Ljk1IDYyLjk1IDY1LjUgNjIuMSA2NC4xIDYyLjEgNjIuNjUgTDYyLjMgNjEuNjUgUTYyLjUgNjEuMSA2Mi44NSA2MS4xIE03MC41NSA3OC42NSBRNzIuNzUgNzcuMjUgNzQuMSA3NS4zIDcyLjc1IDc3LjI1IDcwLjU1IDc4LjY1IE01NS42NSA3Ny41IFE1Ny42NSA3OS4yNSA2MC40IDgwLjA1IDU3LjY1IDc5LjI1IDU1LjY1IDc3LjUgTTUxLjY1IDY2LjM1IFE1MS4xNSA2OS42IDUyLjMgNzIuNiA1MS4xNSA2OS42IDUxLjY1IDY2LjM1IiBmaWxsPSIjNWM1ZjVmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik03OC4zNSA2MS4zIEw3OC4xIDYwLjg1IDc3LjkgNjAuNTUgNzcuNzUgNjAuMyBRNzYuNyA1OC44NSA3NS42NSA1OC44NSBMNzQuNjUgNTkuNTUgNzMuNTUgNjAuNCA3NC41IDYxLjcgNzQuNiA2MS45IDc1LjAgNjIuNjUgNzYuMCA2NS4yNSBRNzYuNTUgNjcuNiA3Ni4xNSA3MC4xNSBMNzUuOTUgNzEuMDUgUTc1LjQgNzMuNCA3NC4xIDc1LjMgTDc1LjQgNzUuOTUgUTc2LjM1IDc2LjQgNzYuMzUgNzcuMDUgNzYuMzUgNzcuNjUgNzUuMzUgNzkuMyA3NC40IDgwLjg1IDczLjAgODEuMTUgTDcyLjA1IDgxLjEgUTcxLjQgODAuNzUgNzAuNTUgNzguNjUgTDcwLjQgNzguNzUgUTY2LjA1IDgxLjQ1IDYxLjAgODAuMiBMNjAuNCA4MC4wNSA1OS45IDgxLjQ1IDU5LjI1IDgyLjcgNTkuMSA4Mi44IDU4Ljk1IDgyLjkgUTU4LjAgODIuOSA1Ni4yNSA4Mi4wIDU0LjIgODAuOSA1NC4yIDc5LjggTDU0LjA1IDc5LjMgNTQuMSA3OS4yNSA1NC44IDc4LjQgNTUuNjUgNzcuNSBRNTQuMzUgNzYuMyA1My4zIDc0LjY1IEw1Mi4zIDcyLjYgNTEuMyA3Mi4wNSBRNTAuNDUgNzEuMjUgNTAuNDUgNjkuOCBMNTAuODUgNjcuODUgUTUxLjI1IDY2LjU1IDUxLjY1IDY2LjM1IEw1MS44NSA2NS4yNSBRNTIuNTUgNjIuMzUgNTQuMyA2MC4yNSBMNTUuMyA1OS4yIDU1LjkgNTguNjUgNTQuNCA1Ni43NSA1NC4yNSA1Ni40IDU2LjI1IDU0Ljc1IDU2LjQgNTQuNjUgNTkuMCA1My42NSA1OS45IDUzLjU1IDYwLjQgNTMuNyA2MC43IDUzLjg1IDYwLjc1IDU0LjIgNjAuODUgNTQuNTUgNjEuMiA1NS41NSA2MS40IDU2LjAgNjYuOCA1Ni4xNSBRNzEuMCA1Ny4xNSA3My41NSA2MC40IE03OC4zNSA2MS4zIEw3OC41IDYxLjU1IDc4LjkgNjIuNSA3OC45IDYyLjU1IDc5LjAgNjMuOTUgNzguOTUgNjQuNiA3OC44NSA2NC42IDc3LjQ1IDY0Ljk1IDc2LjAgNjUuMjUgTTY5Ljc1IDYyLjc1IEw2OS44IDYzLjEgNjkuNiA2My45NSA2OS4xNSA2NC42IFE2OC40IDY1LjMgNjcuMjUgNjUuMyA2NS43IDY1LjMgNjQuMyA2NC4wIDYzLjI1IDYzLjA1IDYyLjk1IDYyLjAgTDYyLjg1IDYxLjIgNjIuODUgNjEuMSBNNjkuNzUgNjIuNzUgUTY5LjYgNjEuNSA2OC4zIDYwLjU1IDY2Ljk1IDU5LjY1IDY1LjYgNTkuNjUgNjMuMTUgNTkuNjUgNjIuODUgNjEuMiBNNjUuOSA3Mi45IFE2NS4xIDczLjE1IDY0LjI1IDczLjcgNjIuNiA3NC43NSA2Mi42IDc1LjkgNjIuNiA3Ni43IDYzLjQgNzcuNSA2NC4yNSA3OC4zNSA2NS4zIDc4LjM1IDY2LjkgNzguMzUgNjguMTUgNzcuMyA2OS40IDc2LjMgNjkuNCA3NS4wNSBMNjguODUgNzMuOTUgNjguMiA3My4xIFE2Ny40NSA3Mi43IDY3LjA1IDcyLjcgTDY1LjkgNzIuOSBNNTkuMDUgNjkuOSBMNTkuMSA3MC41NSBRNTkuMSA3MS40NSA1OC41IDcyLjM1IDU3Ljg1IDczLjMgNTcuMCA3My4zIDU2LjIgNzMuMyA1NS4yNSA3Mi4wNSA1NC4xIDcwLjYgNTQuMSA2OC45NSBMNTQuMSA2OC41NSA1NC41NSA2Ny4xIDU0LjYgNjcuMSA1NS4zIDY2LjY1IDU2LjI1IDY2LjUgNTYuNDUgNjYuNSBRNTcuMzUgNjYuNiA1OC4xNSA2Ny43NSA1OC44NSA2OC43NSA1OS4wNSA2OS45IE03NC4xIDc1LjMgUTcyLjc1IDc3LjI1IDcwLjU1IDc4LjY1IE01Ni40IDU0LjY1IEw1Ni4yNSA1NC43NSBNNTguMiA1Ny4xNSBRNTkuNzUgNTYuMzUgNjEuNCA1Ni4wIE01NS45IDU4LjY1IEw1Ny44IDU3LjQgNTguMTUgNTcuMTUgNTguMiA1Ny4xNSBNNTIuMyA3Mi42IFE1MS4xNSA2OS42IDUxLjY1IDY2LjM1IE02MC40IDgwLjA1IFE1Ny42NSA3OS4yNSA1NS42NSA3Ny41IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0KPCEtLSAxIC0tPg==',
  fryingPan: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNjEuN3B4IiB3aWR0aD0iODEuNnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAsIDAuMCwgMC4wLCAxLjAsIDExLjYsIC00LjU1KSI+DQogICAgPHBhdGggZD0iTTU2LjE1IDE2LjA1IEw1Ny4xIDE2LjYgUTU4LjY1IDE3LjYgNjAuMDUgMTguODUgTDYwLjQ1IDE5LjI1IDYwLjcgMTkuNDUgNjAuODUgMTkuNjUgNjAuOTUgMTkuNzUgNjEuMTUgMTkuOTUgNjEuNCAyMC4yIDYxLjY1IDIwLjQ1IDYxLjM1IDIwLjg1IFE2MC4yNSAyMi4xIDU4LjYgMjEuOSA1Ni45NSAyMS43IDU1LjIgMjAuMzUgNTQuNSAxOC41NSA1NC41NSAxNy45IDU0LjYgMTcuMiA1Ni4xNSAxNi4wNSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNjEuNjUgMjAuNDUgTDYxLjcgMjAuNSA2MS45IDIwLjcgNjIuMDUgMjAuOSA2Mi4zIDIxLjIgNjIuNSAyMS40IDYyLjcgMjEuNjUgNjIuOTUgMjEuOTUgNjMuNTUgMjIuNzUgNjMuOCAyMy4wNSA2NC4wIDIzLjM1IDY0LjE1IDIzLjYgNjQuMjUgMjMuNzUgNjQuMzUgMjMuODUgNjQuNjUgMjQuMyA2NC44NSAyNC43IDY1LjAgMjQuOSA2NS4wNSAyNS4wIDYyLjk1IDI2LjEgNjAuOCAyNy4yNSBRNTUuOTUgMjAuMDUgNDcuNjUgMTcuOCBMNDguOSAxNS42NSA1MC4zNSAxMy41IDUwLjk1IDEzLjcgUTUzLjcgMTQuNiA1Ni4xNSAxNi4wNSA1NC42IDE3LjIgNTQuNTUgMTcuOSA1NC41IDE4LjU1IDU1LjIgMjAuMzUgNTYuOTUgMjEuNyA1OC42IDIxLjkgNjAuMjUgMjIuMSA2MS4zNSAyMC44NSBMNjEuNjUgMjAuNDUiIGZpbGw9IiNmZTlmNzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTY1LjA1IDI1LjAgUTcwLjc1IDM0LjM1IDY4LjIgNDQuOSA2NS42NSA1NS41IDU2LjI1IDYxLjI1IDQ2LjkgNjcuMCAzNi4yNSA2NC40NSAyNS42NSA2MS45IDE5LjkgNTIuNSAxNC43NSA0NC4wNSAxNi4zNSAzNC42IEwxNy42IDI5Ljc1IDE4LjEgMjguNiAxOS44IDI1LjMgMjEuMDUgMjMuMiAyMi41NSAyMS4yNSAyNS40IDE4LjYgMjcuMCAxNy4zNSAyOS41IDE1LjcgUTM4LjQ1IDEwLjU1IDQ4LjYgMTMuMCBMNTAuMzUgMTMuNSA0OC45IDE1LjY1IDQ3LjY1IDE3LjggNDYuODUgMTcuNiBRMzkuMTUgMTUuNzUgMzIuMjUgMTguODUgTDI5LjI1IDIwLjU1IDI3LjI1IDIxLjg1IDI1LjQ1IDIzLjMgMjMuOSAyNS4wIDIyLjUgMjYuNyAyMS4zIDI4LjU1IDIwLjIgMzAuNTUgMTkuNCAzMi43IDE4LjYgMzUuMTUgUTE2LjQ1IDQ0LjQgMjEuNDUgNTIuNTUgMjYuNTUgNjAuOSAzNS45IDYzLjE1IDQ1LjM1IDY1LjQgNTMuNiA2MC4zIDYxLjk1IDU1LjIgNjQuMiA0NS44NSA2Ni40NSAzNi40NSA2MS4zNSAyOC4xNSBMNjAuOCAyNy4yNSA2Mi45NSAyNi4xIDY1LjA1IDI1LjAiIGZpbGw9IiNhOTMzMDEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTYwLjggMjcuMjUgTDYxLjM1IDI4LjE1IFE2Ni40NSAzNi40NSA2NC4yIDQ1Ljg1IDYxLjk1IDU1LjIgNTMuNiA2MC4zIDQ1LjM1IDY1LjQgMzUuOSA2My4xNSAyNi41NSA2MC45IDIxLjQ1IDUyLjU1IDE2LjQ1IDQ0LjQgMTguNiAzNS4xNSBMMTkuNCAzMi43IDIwLjIgMzAuNTUgMjEuMyAyOC41NSAyMi41IDI2LjcgMjMuOSAyNS4wIDI1LjQ1IDIzLjMgMjcuMjUgMjEuODUgMjkuMjUgMjAuNTUgMzIuMjUgMTguODUgUTM5LjE1IDE1Ljc1IDQ2Ljg1IDE3LjYgTDQ3LjY1IDE3LjggUTU1Ljk1IDIwLjA1IDYwLjggMjcuMjUgTTUzLjAgMzMuMyBRNTAuMCAyOC40NSA0NC41NSAyNy4xNSA0MC4xIDI2LjEgMzYuMSAyNy45IEwzNC4zNSAyOC44NSAzMy4yIDI5LjYgMzIuMTUgMzAuNDUgMzEuMjUgMzEuNDUgMzAuNDUgMzIuNDUgMjkuNzUgMzMuNSAyOS4xIDM0LjY1IDI4LjY1IDM1LjkgMjguMiAzNy4zNSBRMjYuOTUgNDIuNyAyOS44NSA0Ny40NSAzMi44IDUyLjI1IDM4LjIgNTMuNTUgNDMuNyA1NC45IDQ4LjUgNTEuOSA1My4zNSA0OC45NSA1NC42NSA0My41NSA1NS45NSAzOC4xIDUzLjAgMzMuMyIgZmlsbD0iIzRlNDg0MyIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNDkuNzUgMzkuNSBRNTAuNSAzOS42IDUwLjYgNDAuMCBMNTAuNjUgNDAuNiA1MS4wIDQwLjcgNTEuNCA0MC41NSA1MS45IDQwLjM1IDUyLjc1IDQwLjU1IDUyLjc1IDQwLjQ1IFE1Mi41IDM5LjcgNTAuMTUgMzkuMCA0OS4zIDM4LjcgNDkuMjUgMzkuNCA0OS4yIDQwLjIgNDguNzUgNDAuMiBMNDguNDUgNDAuMSA0OC4xNSAzOS43NSA0OC4wIDM5Ljg1IDQ4LjA1IDQwLjM1IFE0OC4yIDQwLjY1IDQ4LjcgNDAuNjUgNDkuNSA0MC42NSA0OS43NSAzOS41IE00MC42IDMyLjQgTDQxLjM1IDMyLjQ1IDQxLjQgMzIuMCA0MS4xIDMxLjcgNDAuNzUgMzEuNCBRNDAuNzUgMzAuNDUgMzkuNzUgMjkuNDUgMzguNzUgMjguNDUgMzguNzUgMjkuNSAzOC43NSAzMC4wNSAzOS44NSAzMS4wIDM5LjAgMzEuNzUgMzkuMCAzMi4wNSAzOS4wIDMyLjYgMzkuOCAzMi42IEw0MC42IDMyLjQgTTQ1LjIgMjkuOCBMNDMuOSAyOS44NSA0My42NSAyOS44NSBRNDQuMDUgMzAuODUgNDMuMjUgMzEuMzUgNDIuMzUgMzEuODUgNDIuMzUgMzIuMiBMNDIuOSAzMy4wIDQ0LjAgMzMuNzUgNDQuMyAzMy40NSA0My42NSAzMi4zNSBRNDQuMSAzMi4wIDQ1LjEgMzEuNSA0NS42NSAzMS4yNSA0NS42NSAzMC44NSA0NS42NSAyOS45IDQ1LjIgMjkuOCBNNTEuNCAzNC4xNSBRNTEuMSAzMy42NSA1MC43IDMzLjY1IDUwLjAgMzMuNjUgNDkuMjUgMzQuNSA0OC42NSAzNS4yNSA0OC42NSAzNS41IEw0OC4zNSAzNS40IDQ4LjM1IDM1LjMgNDkuMjUgMzQuNDUgUTQ5LjY1IDM0LjA1IDQ5LjY1IDMzLjQgNDkuNjUgMzIuMSA0OC42NSAzMi4xNSA0Ny42IDMyLjI1IDQ3LjYgMzMuMyA0Ny42IDMzLjk1IDQ3LjI1IDM0LjA1IEw0Ny4zIDM0LjEgUTQ3LjggMzQuMSA0OC4wIDM0LjQgTDQ3LjE1IDM0Ljk1IFE0Ni45IDM1LjA1IDQ2LjkgMzUuMzUgTDQ3LjUgMzYuMCBRNDguMjUgMzYuNjUgNDkuMCAzNi42NSA0OS4zNSAzNi42NSA0OS44IDM1LjY1IDUwLjIgMzQuNiA1MC44IDM0LjYgTDUxLjM1IDM0LjY1IDUxLjQgMzQuMTUgTTQ3LjEgNDEuNzUgUTQ3LjcgMzkuMzUgNDYuNCAzNy4zIDQ1LjE1IDM1LjIgNDIuOCAzNC42NSBMMzkuMSAzNC45NSAzOC4zNSAzNS40IDM3Ljg1IDM1LjcgMzcuNCAzNi4xIDM3LjA1IDM2LjUgMzYuNyAzNi45NSAzNi40IDM3LjQgMzYuMSAzNy45IDM1LjkgMzguNDUgMzUuNyAzOS4wNSBRMzUuMTUgNDEuMzUgMzYuNCA0My40IDM3LjcgNDUuNSA0MC4wNSA0Ni4wNSA0Mi40IDQ2LjYgNDQuNDUgNDUuMzUgNDYuNTUgNDQuMDUgNDcuMSA0MS43NSBNNTMuMCAzMy4zIFE1NS45NSAzOC4xIDU0LjY1IDQzLjU1IDUzLjM1IDQ4Ljk1IDQ4LjUgNTEuOSA0My43IDU0LjkgMzguMiA1My41NSAzMi44IDUyLjI1IDI5Ljg1IDQ3LjQ1IDI2Ljk1IDQyLjcgMjguMiAzNy4zNSBMMjguNjUgMzUuOSAyOS4xIDM0LjY1IDI5Ljc1IDMzLjUgMzAuNDUgMzIuNDUgMzEuMjUgMzEuNDUgMzIuMTUgMzAuNDUgMzMuMiAyOS42IDM0LjM1IDI4Ljg1IDM2LjEgMjcuOSBRNDAuMSAyNi4xIDQ0LjU1IDI3LjE1IDUwLjAgMjguNDUgNTMuMCAzMy4zIE0zOC44NSA1MS4yNSBRMzkuMiA1MS45IDQwLjA1IDUxLjkgNDAuNSA1MS45IDQxLjEgNTEuNSA0MS43NSA1MS4xIDQyLjE1IDUxLjEgTDQ0LjIgNTEuOTUgNDQuMiA1MS40NSA0My4zIDUwLjYgUTQyLjUgNTAuMDUgNDIuMSA1MC4wNSBMNDEuNTUgNTAuMzUgNDEuMCA1MC42NSA0MC42NSA1MC4xNSA0MC4yNSA0OS43NSA0MC41IDQ5LjI1IDQwLjQ1IDQ5LjIgMzkuMyA0OS44IFEzOC43IDUwLjA1IDM4LjcgNTAuNTUgTDM4Ljg1IDUxLjI1IE0zNS4zIDQ4LjI1IEwzNC45NSA0Ny42IDM0LjU1IDQ3LjEgMzUuNzUgNDUuNSBRMzUuNzUgNDQuNCAzNC42NSA0NS42IDMzLjUgNDYuNzUgMzMuNSA0Ny4wIEwzMy45NSA0Ny43IDM0LjQgNDguNDUgMzQuMDUgNDguODUgMzMuNjUgNDkuNSBRMzMuNjUgNTAuMjUgMzUuMzUgNTAuMjUgMzYuMzUgNTAuMjUgMzcuMiA0OS41IDM4LjAgNDguOCAzOC4wIDQ4LjIgTDM3LjYgNDcuOCAzNi44NSA0OC44IFEzNi40NSA0OS4zNSAzNS40IDQ5LjQgTDM1LjAgNDkuMjUgMzUuMyA0OC4yNSBNMjkuOCA0My40NSBMMzAuMyA0My41NSBRMzAuOCA0My42NSAzMC44IDQzLjg1IEwzMC42NSA0NC40IDMwLjQ1IDQ1LjE1IDMwLjk1IDQ2LjA1IFEzMS41NSA0Ni45NSAzMi4yNSA0Ni45NSBMMzIuNiA0Ni43IDMxLjEgNDUuMTUgMzEuNTUgNDQuMCBRMzEuNTUgNDMuMiAyOS43IDQyLjggTDMwLjkgNDEuNTUgMzAuNzUgNDEuMCAzMC42NSA0MS4wIDI5Ljg1IDQxLjk1IDI5LjEgNDIuNzUgMjkuMjUgNDMuMSAyOS44IDQzLjQ1IiBmaWxsPSIjOGY4ODgxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xMy43NSAyNi42NSBMMTMuNjUgMjYuNSAxMi45NSAyNS42IDEyLjI1IDI0Ljk1IDYuODUgMjAuMTUgNi4wIDE5LjQ1IDUuMSAxOC41NSBRNS4xIDE4LjMgNC45IDE4LjQgTDQuNyAxOC4yNSBRNC43IDE4LjA1IC0yLjYgMTQuNCAtOS45NSAxMC43NSAtOS45NSAxMC4wIC0xMC42IDkuMCAtMTAuNiA4LjAgTC0xMC4yNSA3LjAgLTkuMjUgNS41NSAtNy41IDYuMCBRLTYuMSA2LjQgLTYuMSA2Ljk1IEw0LjYgMTMuOCBRNy4zIDE1LjI1IDEzLjE1IDE2Ljk1IEwxNC45IDE3LjQ1IDE4Ljk1IDE4LjYgMTguMTUgMTkuOSAxNi40NSAyMi44NSAxNC44NSAyNS4zIDEzLjc1IDI2LjY1IE01MS40IDM0LjE1IEw1MS4zNSAzNC42NSA1MC44IDM0LjYgUTUwLjIgMzQuNiA0OS44IDM1LjY1IDQ5LjM1IDM2LjY1IDQ5LjAgMzYuNjUgNDguMjUgMzYuNjUgNDcuNSAzNi4wIEw0Ni45IDM1LjM1IFE0Ni45IDM1LjA1IDQ3LjE1IDM0Ljk1IEw0OC4wIDM0LjQgUTQ3LjggMzQuMSA0Ny4zIDM0LjEgTDQ3LjI1IDM0LjA1IFE0Ny42IDMzLjk1IDQ3LjYgMzMuMyA0Ny42IDMyLjI1IDQ4LjY1IDMyLjE1IDQ5LjY1IDMyLjEgNDkuNjUgMzMuNCA0OS42NSAzNC4wNSA0OS4yNSAzNC40NSBMNDguMzUgMzUuMyA0OC4zNSAzNS40IDQ4LjY1IDM1LjUgUTQ4LjY1IDM1LjI1IDQ5LjI1IDM0LjUgNTAuMCAzMy42NSA1MC43IDMzLjY1IDUxLjEgMzMuNjUgNTEuNCAzNC4xNSBNNDUuMiAyOS44IFE0NS42NSAyOS45IDQ1LjY1IDMwLjg1IDQ1LjY1IDMxLjI1IDQ1LjEgMzEuNSA0NC4xIDMyLjAgNDMuNjUgMzIuMzUgTDQ0LjMgMzMuNDUgNDQuMCAzMy43NSA0Mi45IDMzLjAgNDIuMzUgMzIuMiBRNDIuMzUgMzEuODUgNDMuMjUgMzEuMzUgNDQuMDUgMzAuODUgNDMuNjUgMjkuODUgTDQzLjkgMjkuODUgNDUuMiAyOS44IE00MC42IDMyLjQgTDM5LjggMzIuNiBRMzkuMCAzMi42IDM5LjAgMzIuMDUgMzkuMCAzMS43NSAzOS44NSAzMS4wIDM4Ljc1IDMwLjA1IDM4Ljc1IDI5LjUgMzguNzUgMjguNDUgMzkuNzUgMjkuNDUgNDAuNzUgMzAuNDUgNDAuNzUgMzEuNCBMNDEuMSAzMS43IDQxLjQgMzIuMCA0MS4zNSAzMi40NSA0MC42IDMyLjQgTTQ5Ljc1IDM5LjUgUTQ5LjUgNDAuNjUgNDguNyA0MC42NSA0OC4yIDQwLjY1IDQ4LjA1IDQwLjM1IEw0OC4wIDM5Ljg1IDQ4LjE1IDM5Ljc1IDQ4LjQ1IDQwLjEgNDguNzUgNDAuMiBRNDkuMiA0MC4yIDQ5LjI1IDM5LjQgNDkuMyAzOC43IDUwLjE1IDM5LjAgNTIuNSAzOS43IDUyLjc1IDQwLjQ1IEw1Mi43NSA0MC41NSA1MS45IDQwLjM1IDUxLjQgNDAuNTUgNTEuMCA0MC43IDUwLjY1IDQwLjYgNTAuNiA0MC4wIFE1MC41IDM5LjYgNDkuNzUgMzkuNSBNMjkuOCA0My40NSBMMjkuMjUgNDMuMSAyOS4xIDQyLjc1IDI5Ljg1IDQxLjk1IDMwLjY1IDQxLjAgMzAuNzUgNDEuMCAzMC45IDQxLjU1IDI5LjcgNDIuOCBRMzEuNTUgNDMuMiAzMS41NSA0NC4wIEwzMS4xIDQ1LjE1IDMyLjYgNDYuNyAzMi4yNSA0Ni45NSBRMzEuNTUgNDYuOTUgMzAuOTUgNDYuMDUgTDMwLjQ1IDQ1LjE1IDMwLjY1IDQ0LjQgMzAuOCA0My44NSBRMzAuOCA0My42NSAzMC4zIDQzLjU1IEwyOS44IDQzLjQ1IE0zNS4zIDQ4LjI1IEwzNS4wIDQ5LjI1IDM1LjQgNDkuNCBRMzYuNDUgNDkuMzUgMzYuODUgNDguOCBMMzcuNiA0Ny44IDM4LjAgNDguMiBRMzguMCA0OC44IDM3LjIgNDkuNSAzNi4zNSA1MC4yNSAzNS4zNSA1MC4yNSAzMy42NSA1MC4yNSAzMy42NSA0OS41IEwzNC4wNSA0OC44NSAzNC40IDQ4LjQ1IDMzLjk1IDQ3LjcgMzMuNSA0Ny4wIFEzMy41IDQ2Ljc1IDM0LjY1IDQ1LjYgMzUuNzUgNDQuNCAzNS43NSA0NS41IEwzNC41NSA0Ny4xIDM0Ljk1IDQ3LjYgMzUuMyA0OC4yNSBNMzguODUgNTEuMjUgTDM4LjcgNTAuNTUgUTM4LjcgNTAuMDUgMzkuMyA0OS44IEw0MC40NSA0OS4yIDQwLjUgNDkuMjUgNDAuMjUgNDkuNzUgNDAuNjUgNTAuMTUgNDEuMCA1MC42NSA0MS41NSA1MC4zNSA0Mi4xIDUwLjA1IFE0Mi41IDUwLjA1IDQzLjMgNTAuNiBMNDQuMiA1MS40NSA0NC4yIDUxLjk1IDQyLjE1IDUxLjEgUTQxLjc1IDUxLjEgNDEuMSA1MS41IDQwLjUgNTEuOSA0MC4wNSA1MS45IDM5LjIgNTEuOSAzOC44NSA1MS4yNSIgZmlsbD0iIzYwNWE1MyIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNDcuMSA0MS43NSBRNDYuNTUgNDQuMDUgNDQuNDUgNDUuMzUgNDIuNCA0Ni42IDQwLjA1IDQ2LjA1IDM3LjcgNDUuNSAzNi40IDQzLjQgMzUuMTUgNDEuMzUgMzUuNyAzOS4wNSBMMzUuOSAzOC40NSAzNi4xIDM3LjkgMzYuNCAzNy40IDM2LjcgMzYuOTUgMzcuMDUgMzYuNSAzNy40IDM2LjEgMzcuODUgMzUuNyAzOC4zNSAzNS40IDM5LjEgMzQuOTUgNDIuOCAzNC42NSBRNDUuMTUgMzUuMiA0Ni40IDM3LjMgNDcuNyAzOS4zNSA0Ny4xIDQxLjc1IiBmaWxsPSIjOWE3Yzc2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xNy42IDI5Ljc1IEwxNi44NSAyOS40NSAxMy45NSAyNy4yIDEzLjc1IDI2LjY1IDE0Ljg1IDI1LjMgMTYuNDUgMjIuODUgMTguMTUgMTkuOSAxOC45NSAxOC42IDE5LjMgMTguNiAyMS4wIDE5LjQgUTIyLjM1IDIwLjAgMjIuNTUgMjEuMjUgTDIxLjA1IDIzLjIgMTkuOCAyNS4zIDE4LjEgMjguNiAxNy42IDI5Ljc1IiBmaWxsPSIjOTk5OTk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik01Ni4xNSAxNi4wNSBMNTcuMSAxNi42IFE1OC42NSAxNy42IDYwLjA1IDE4Ljg1IEw2MC40NSAxOS4yNSA2MC43IDE5LjQ1IDYwLjg1IDE5LjY1IDYwLjk1IDE5Ljc1IDYxLjE1IDE5Ljk1IDYxLjQgMjAuMiA2MS42NSAyMC40NSA2MS43IDIwLjUgNjEuOSAyMC43IDYyLjA1IDIwLjkgNjIuMyAyMS4yIDYyLjUgMjEuNCA2Mi43IDIxLjY1IDYyLjk1IDIxLjk1IDYzLjU1IDIyLjc1IDYzLjggMjMuMDUgNjQuMCAyMy4zNSA2NC4xNSAyMy42IDY0LjI1IDIzLjc1IDY0LjM1IDIzLjg1IDY0LjY1IDI0LjMgNjQuODUgMjQuNyA2NS4wIDI0LjkgNjUuMDUgMjUuMCBRNzAuNzUgMzQuMzUgNjguMiA0NC45IDY1LjY1IDU1LjUgNTYuMjUgNjEuMjUgNDYuOSA2Ny4wIDM2LjI1IDY0LjQ1IDI1LjY1IDYxLjkgMTkuOSA1Mi41IDE0Ljc1IDQ0LjA1IDE2LjM1IDM0LjYgTDE3LjYgMjkuNzUgMTYuODUgMjkuNDUgMTMuOTUgMjcuMiAxMy43NSAyNi42NSAxMy42NSAyNi41IDEyLjk1IDI1LjYgMTIuMjUgMjQuOTUgNi44NSAyMC4xNSA2LjAgMTkuNDUgNS4xIDE4LjU1IFE1LjEgMTguMyA0LjkgMTguNCBMNC43IDE4LjI1IFE0LjcgMTguMDUgLTIuNiAxNC40IC05Ljk1IDEwLjc1IC05Ljk1IDEwLjAgLTEwLjYgOS4wIC0xMC42IDguMCBMLTEwLjI1IDcuMCAtOS4yNSA1LjU1IC03LjUgNi4wIFEtNi4xIDYuNCAtNi4xIDYuOTUgTDQuNiAxMy44IFE3LjMgMTUuMjUgMTMuMTUgMTYuOTUgTDE0LjkgMTcuNDUgMTguOTUgMTguNiAxOS4zIDE4LjYgMjEuMCAxOS40IFEyMi4zNSAyMC4wIDIyLjU1IDIxLjI1IEwyNS40IDE4LjYgMjcuMCAxNy4zNSAyOS41IDE1LjcgUTM4LjQ1IDEwLjU1IDQ4LjYgMTMuMCBMNTAuMzUgMTMuNSA1MC45NSAxMy43IFE1My43IDE0LjYgNTYuMTUgMTYuMDUgTTYwLjggMjcuMjUgTDYxLjM1IDI4LjE1IFE2Ni40NSAzNi40NSA2NC4yIDQ1Ljg1IDYxLjk1IDU1LjIgNTMuNiA2MC4zIDQ1LjM1IDY1LjQgMzUuOSA2My4xNSAyNi41NSA2MC45IDIxLjQ1IDUyLjU1IDE2LjQ1IDQ0LjQgMTguNiAzNS4xNSBMMTkuNCAzMi43IDIwLjIgMzAuNTUgMjEuMyAyOC41NSAyMi41IDI2LjcgMjMuOSAyNS4wIDI1LjQ1IDIzLjMgMjcuMjUgMjEuODUgMjkuMjUgMjAuNTUgMzIuMjUgMTguODUgUTM5LjE1IDE1Ljc1IDQ2Ljg1IDE3LjYgTDQ3LjY1IDE3LjggUTU1Ljk1IDIwLjA1IDYwLjggMjcuMjUgTTIyLjU1IDIxLjI1IEwyMS4wNSAyMy4yIDE5LjggMjUuMyAxOC4xIDI4LjYgMTcuNiAyOS43NSBNMTMuNzUgMjYuNjUgTDE0Ljg1IDI1LjMgMTYuNDUgMjIuODUgMTguMTUgMTkuOSAxOC45NSAxOC42IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0KPCEtLSAxIC0tPg==',
  hatchet: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNTMuNTVweCIgd2lkdGg9IjcxLjk1cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMCwgMC4wLCAwLjAsIDEuMCwgMTguMSwgLTEuMjk5OTk5OTk5OTk5OTk5OCkiPg0KICAgIDxwYXRoIGQ9Ik00MS4yIDIwLjEgUTM4Ljc1IDIzLjM1IDM2LjE1IDMwLjIgMzUuMSAzMi41IDMzLjMgMzguMSAzMS42IDQzLjIgMzEuNiA0My42IEwzMS43IDQ0LjE1IDMxLjY1IDQ0LjI1IDMxLjk1IDQ0LjM1IFEzMy40NSA0NC4zNSAzNS4wNSA0MC4wNSAzNi41IDM1LjI1IDM2LjkgMzQuMjUgMzcuMjUgMzMuMyAzOS41IDI4LjY1IEw0MS40NSAyNC4yIDQyLjY1IDIzLjEgUTQzLjg1IDIxLjg1IDQzLjg1IDIwLjk1IDQzLjg1IDE2LjY1IDQxLjIgMjAuMSBNMzguMiAxNi43NSBMMzguNCAxNS42IFE0MS45NSAxNS41IDQ1LjAgMTYuOSA0Ni4wIDE3LjQgNDcuMCAxNy45NSBMNDcuMiAxOC40IFE0MC40NSAyOS44NSA0OC42NSA0MC4yIEw1MC4wNSA0MS43NSA1Mi4wIDQzLjQgNTIuODUgNDQuMCA1MC4zNSA0Ny40NSA0Ny44NSA0NS4wNSA0Ny4wIDQ0LjEgNDUuNyA0NS4zIDQzLjY1IDQ2LjcgNDAuNDUgNDcuNTUgMzYuMTUgNDguMjUgMzMuMCA0OC42NSBRMzEuMCA0OC42NSAyNy4wIDQ2LjcgMjMuMiA0NC44NSAyMS43NSA0My40IEwxOS42NSA0MC44NSAxNy42NSAzOC4zIDE3LjY1IDM4LjI1IDIwLjggMzguNDUgUTI2LjEgMzguNDUgMzEuMCAzNC4xNSAzNC40NSAzMS4xNSAzNS43IDI4LjQgMzcuNzUgMjAuMSAzOC4yIDE2Ljc1IiBmaWxsPSIjZTBlOGViIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik00MS4yIDIwLjEgUTQzLjg1IDE2LjY1IDQzLjg1IDIwLjk1IDQzLjg1IDIxLjg1IDQyLjY1IDIzLjEgTDQxLjQ1IDI0LjIgMzkuNSAyOC42NSBRMzcuMjUgMzMuMyAzNi45IDM0LjI1IDM2LjUgMzUuMjUgMzUuMDUgNDAuMDUgMzMuNDUgNDQuMzUgMzEuOTUgNDQuMzUgTDMxLjY1IDQ0LjI1IDMxLjcgNDQuMTUgMzEuNiA0My42IFEzMS42IDQzLjIgMzMuMyAzOC4xIDM1LjEgMzIuNSAzNi4xNSAzMC4yIDM4Ljc1IDIzLjM1IDQxLjIgMjAuMSBNNTAuMzUgNDcuNDUgUTQzLjA1IDU1LjcgMzAuNSA1My4zIDEyLjE1IDUwLjA1IDguOCAzMi4zIEw5LjEgMzEuOTUgUTIxLjQgMzYuMDUgMzAuNzUgMjguNTUgMzIuOTUgMjYuOCAzNC41NSAyNC43IDM3LjIgMjEuMTUgMzguMiAxNi43NSAzNy43NSAyMC4xIDM1LjcgMjguNCAzNC40NSAzMS4xNSAzMS4wIDM0LjE1IDI2LjEgMzguNDUgMjAuOCAzOC40NSBMMTcuNjUgMzguMjUgMTcuNjUgMzguMyAxOS42NSA0MC44NSAyMS43NSA0My40IFEyMy4yIDQ0Ljg1IDI3LjAgNDYuNyAzMS4wIDQ4LjY1IDMzLjAgNDguNjUgTDM2LjE1IDQ4LjI1IDQwLjQ1IDQ3LjU1IDQzLjY1IDQ2LjcgNDUuNyA0NS4zIDQ3LjAgNDQuMSA0Ny44NSA0NS4wNSA1MC4zNSA0Ny40NSIgZmlsbD0iI2I4YzljZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMzguMiAxNi43NSBMMzguNCAxNS42IFE0MS45NSAxNS41IDQ1LjAgMTYuOSA0Ni4wIDE3LjQgNDcuMCAxNy45NSBMNDcuMiAxOC40IFE0MC40NSAyOS44NSA0OC42NSA0MC4yIEw1MC4wNSA0MS43NSA1Mi4wIDQzLjQgNTIuODUgNDQuMCA1MC4zNSA0Ny40NSBRNDMuMDUgNTUuNyAzMC41IDUzLjMgMTIuMTUgNTAuMDUgOC44IDMyLjMgTDkuMSAzMS45NSBRMjEuNCAzNi4wNSAzMC43NSAyOC41NSAzMi45NSAyNi44IDM0LjU1IDI0LjcgMzcuMiAyMS4xNSAzOC4yIDE2Ljc1IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICA8cGF0aCBkPSJNLTE1Ljc1IDQuOCBMLTE0LjkgMi4zIDQ4Ljk1IDI1LjEgNDguMCAyNy43NSAtMTUuNzUgNC44IiBmaWxsPSIjNmI1YTUwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik00OC4wIDI3Ljc1IEw0Ni43NSAzMS4yNSAtMTcuMSA4LjQ1IC0xNS43NSA0LjggNDguMCAyNy43NSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNLTE1Ljc1IDQuOCBMLTE0LjkgMi4zIDQ4Ljk1IDI1LjEgNDguMCAyNy43NSA0Ni43NSAzMS4yNSAtMTcuMSA4LjQ1IC0xNS43NSA0LjggWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  mammothBone: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNTYuMXB4IiB3aWR0aD0iMTA0LjM1cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMCwgMC4wLCAwLjAsIDEuMCwgMjIuNCwgMy4xKSI+DQogICAgPHBhdGggZD0iTS0xNy40IDEuNzUgTC0xNy41NSAyLjIgUS0xNy41NSAzLjAgLTE2LjUgMy4wIC0xNC45IDMuMCAtMTQuOSAwLjQ1IEwtMTUuMjUgLTAuNiBRLTE1LjI1IC0xLjIgLTE1LjY1IC0xLjAgTC0xNS44IC0wLjYgUS0xNS40NSAtMi4xIC0xMy44IC0yLjEgTC0xMi4xNSAtMS43IFEtMTEuMjUgLTEuMiAtMTEuMjUgLTAuNiAtMTEuMjUgMC44NSAtMTEuNCAxLjU1IEwtMTEuOTUgMy43IFEtMTAuNDUgNC43IDAuMDUgOS40NSAxMi4yNSAxNC45NSAxMy44IDE1LjMgTDMwLjc1IDIwLjIgUTQyLjQ1IDIzLjQgNDguNDUgMjMuNCBMNTIuNjUgMjIuODUgUTUzLjMgMjIuODUgNTguMiAxOS44IDYzLjA1IDE2LjcgNjcuMzUgMTYuNyA3MS42IDE2LjcgNzYuMSAyMC4zIDc5LjIgMjIuOCA4MC4zNSAyNS41NSBMNzYuNyAyOC4zNSA3NS4yIDI5LjIgUTcwLjUgMzAuNDUgNjUuODUgMjkuNzUgNjMuNiAyOS4yNSA2Mi4zIDI3LjI1IEw2MS4yIDI1LjkgUTYwLjg1IDI1LjYgNjAuNSAyNS40IEw1OS41IDI1LjcgNTguOSAyOS43IDYxLjkgMzMuOTUgUTYzLjggMzYuMzUgNjYuOCAzNi4zNSBMNjcuMiAzNi4yNSBRNjcuNzUgNDAuMjUgNjQuNDUgNDIuMzUgNjIuNiA0My41IDYwLjUgNDQuMDUgNTguMSA0NC42IDU1LjggNDQuMDUgNTUuMTUgNDMuOTUgNTQuNzUgNDMuNDUgNTQuMiA0Mi44NSA1My45NSA0Mi4xIEw1My40IDM5Ljk1IDUzLjA1IDM3LjI1IFE1Mi41NSAzMi44IDQ4LjkgMzAuNyBMNDUuMDUgMjguOTUgUTM5LjcgMjcuMCAzNC4yIDI1LjYgTDI3LjM1IDIzLjggUTIyLjY1IDIyLjYgMTguMyAyMC41NSBMMy45IDEzLjcgUS0yLjE1IDEwLjkgLTguNSA4LjU1IC0xMS43IDcuNSAtMTQuNzUgNS44NSAtMTYuOSA0LjYgLTE4LjkgMy4wIC0yMC4xIDIuMDUgLTIxLjM1IDEuNzUgTC0yMS4wIDEuMSBRLTIwLjUgMC41IC0xOS43IDAuNSAtMTguOSAwLjUgLTE4LjEgMS4xIEwtMTcuNCAxLjc1IE0tMTIuMDUgNC4wNSBMLTExLjk1IDMuNyAtMTIuMiAzLjQ1IFEtMTIuMiAyLjk1IC0xMi40NSAyLjggTC0xMi45IDIuNyAtMTIuOTUgMy4wIC0xMi45IDIuNyAtMTIuNDUgMi44IFEtMTIuMiAyLjk1IC0xMi4yIDMuNDUgTC0xMS45NSAzLjcgLTEyLjA1IDQuMDUiIGZpbGw9IiNmZmZmY2MiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTS0xNy40IDEuNzUgTC0xNi41IDIuNzUgLTE1LjggLTAuNTUgLTE1LjggLTAuNiAtMTUuNjUgLTEuMCBRLTE1LjI1IC0xLjIgLTE1LjI1IC0wLjYgTC0xNC45IDAuNDUgUS0xNC45IDMuMCAtMTYuNSAzLjAgLTE3LjU1IDMuMCAtMTcuNTUgMi4yIEwtMTcuNCAxLjc1IE04MC4zNSAyNS41NSBRODEuOTUgMjkuOCA3OS4yNSAzMy40IEw3OC4yIDM0LjU1IFE3Ni4wNSAzNi40NSA3My4yIDM2LjM1IEw2OS44IDM2LjkgUTY5LjQgMzYuODUgNjguOSAzNy4xNSA2Ny44NSAzNy43IDY3LjcgMzkuMTUgTDY3LjQgNDEuNyA2Ni43NSA0NC44NSBRNjYuMSA0Ny4wIDY0LjY1IDQ4LjYgNjMuMSA1MC40IDYwLjggNTEuMSA1OC4wIDUxLjk1IDU1LjM1IDUyLjAgNTIuNSA1Mi4xNSA1MC4zIDUwLjY1IDQ4LjYgNDkuNTUgNDcuODUgNDcuNSA0Ni4zNSA0My4zIDQzLjggMzkuNiA0Mi42IDM3LjkgNDAuNjUgMzYuNDUgMzkuMSAzNS4zNSAzNy40NSAzNC41IDMzLjQ1IDMyLjIgMjkuMyAzMC4xIEwyMi41NSAyNi43NSAxMy45IDIxLjk1IDYuNzUgMTcuNiBRMy4zIDE1LjMgLTAuNyAxMy45NSBMLTkuNCAxMC44NSBRLTEwLjAgMTAuNiAtMTAuNTUgMTAuNCAtMTQuOTUgOC40NSAtMTkuMjUgNi4wNSBMLTIwLjAgNS4zNSAtMjAuODUgNC4wNSBRLTIxLjU1IDIuOTUgLTIxLjM1IDEuNzUgLTIwLjEgMi4wNSAtMTguOSAzLjAgLTE2LjkgNC42IC0xNC43NSA1Ljg1IC0xMS43IDcuNSAtOC41IDguNTUgLTIuMTUgMTAuOSAzLjkgMTMuNyBMMTguMyAyMC41NSBRMjIuNjUgMjIuNiAyNy4zNSAyMy44IEwzNC4yIDI1LjYgUTM5LjcgMjcuMCA0NS4wNSAyOC45NSBMNDguOSAzMC43IFE1Mi41NSAzMi44IDUzLjA1IDM3LjI1IEw1My40IDM5Ljk1IDUzLjk1IDQyLjEgUTU0LjIgNDIuODUgNTQuNzUgNDMuNDUgNTUuMTUgNDMuOTUgNTUuOCA0NC4wNSA1OC4xIDQ0LjYgNjAuNSA0NC4wNSA2Mi42IDQzLjUgNjQuNDUgNDIuMzUgNjcuNzUgNDAuMjUgNjcuMiAzNi4yNSBMNjYuOCAzNi4zNSBRNjMuOCAzNi4zNSA2MS45IDMzLjk1IEw1OC45IDI5LjcgNTkuNSAyNS43IDYwLjUgMjUuNCBRNjAuODUgMjUuNiA2MS4yIDI1LjkgTDYyLjMgMjcuMjUgUTYzLjYgMjkuMjUgNjUuODUgMjkuNzUgNzAuNSAzMC40NSA3NS4yIDI5LjIgTDc2LjcgMjguMzUgODAuMzUgMjUuNTUiIGZpbGw9IiNjYmI0OTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTS0xNS44IC0wLjYgTC0xNS44IC0wLjU1IC0xNi41IDIuNzUgLTE3LjQgMS43NSAtMTguMSAxLjEgUS0xOC45IDAuNSAtMTkuNyAwLjUgLTIwLjUgMC41IC0yMS4wIDEuMSBMLTIxLjM1IDEuNzUgUS0yMS41NSAyLjk1IC0yMC44NSA0LjA1IEwtMjAuMCA1LjM1IC0xOS4yNSA2LjA1IFEtMTQuOTUgOC40NSAtMTAuNTUgMTAuNCAtMTAuMCAxMC42IC05LjQgMTAuODUgTC0wLjcgMTMuOTUgUTMuMyAxNS4zIDYuNzUgMTcuNiBMMTMuOSAyMS45NSAyMi41NSAyNi43NSAyOS4zIDMwLjEgUTMzLjQ1IDMyLjIgMzcuNDUgMzQuNSAzOS4xIDM1LjM1IDQwLjY1IDM2LjQ1IDQyLjYgMzcuOSA0My44IDM5LjYgNDYuMzUgNDMuMyA0Ny44NSA0Ny41IDQ4LjYgNDkuNTUgNTAuMyA1MC42NSA1Mi41IDUyLjE1IDU1LjM1IDUyLjAgNTguMCA1MS45NSA2MC44IDUxLjEgNjMuMSA1MC40IDY0LjY1IDQ4LjYgNjYuMSA0Ny4wIDY2Ljc1IDQ0Ljg1IEw2Ny40IDQxLjcgNjcuNyAzOS4xNSBRNjcuODUgMzcuNyA2OC45IDM3LjE1IDY5LjQgMzYuODUgNjkuOCAzNi45IEw3My4yIDM2LjM1IFE3Ni4wNSAzNi40NSA3OC4yIDM0LjU1IEw3OS4yNSAzMy40IFE4MS45NSAyOS44IDgwLjM1IDI1LjU1IDc5LjIgMjIuOCA3Ni4xIDIwLjMgNzEuNiAxNi43IDY3LjM1IDE2LjcgNjMuMDUgMTYuNyA1OC4yIDE5LjggNTMuMyAyMi44NSA1Mi42NSAyMi44NSBMNDguNDUgMjMuNCBRNDIuNDUgMjMuNCAzMC43NSAyMC4yIEwxMy44IDE1LjMgUTEyLjI1IDE0Ljk1IDAuMDUgOS40NSAtMTAuNDUgNC43IC0xMS45NSAzLjcgTC0xMi4wNSA0LjA1IE0tMTUuOCAtMC42IFEtMTUuNDUgLTIuMSAtMTMuOCAtMi4xIEwtMTIuMTUgLTEuNyBRLTExLjI1IC0xLjIgLTExLjI1IC0wLjYgLTExLjI1IDAuODUgLTExLjQgMS41NSBMLTExLjk1IDMuNyAtMTIuMiAzLjQ1IFEtMTIuMiAyLjk1IC0xMi40NSAyLjggTC0xMi45IDIuNyAtMTIuOTUgMy4wIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0KPCEtLSAxIC0tPg==',
  morningStar: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNzIuMjVweCIgd2lkdGg9IjEyNC4xNXB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAsIDAuMCwgMC4wLCAxLjAsIDE5Ljg1LCAxLjYpIj4NCiAgICA8cGF0aCBkPSJNNjguMSAzOS43NSBMLTE4Ljg1IDYuMyAtMTYuMiAtMC42IDcwLjcgMzIuODUgNjguMSAzOS43NSIgZmlsbD0iIzk2NGQyZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNNjguMSAzOS43NSBMLTE4Ljg1IDYuMyAtMTYuMiAtMC42IDcwLjcgMzIuODUgNjguMSAzOS43NSBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgPHBhdGggZD0iTTQ1LjU1IDE3LjM1IEw0NS44NSAxNy4wIDQ1Ljc1IDE3LjUgNDUuNTUgMTcuMzUgTTY1LjcgMTkuMSBMNjUuNjUgMTguOSA2NS43IDE4LjkgNjUuNyAxOC45NSA2NS43IDE5LjEgTTU0Ljg1IDkuNjUgTDU0LjkgOS43NSA1NC44IDkuNzUgNTQuODUgOS42NSIgZmlsbD0iIzVjNWY1ZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNOTYuMyAyOC41NSBROTcuNjUgMzQuMSA5Ni42IDQwLjAgOTQuNyA0MS43IDkxLjUgNDMuNSA4NS4xIDQ2Ljk1IDc5LjggNDYuOTUgTDc4LjIgNDYuODUgNzguMTUgNDYuODUgUTc2LjQgNDYuMCA3NS40NSA0Ni4wIEw3Mi43NSA0Ni40NSA3NS40NSA0Ni4wIFE3Ni40IDQ2LjAgNzguMTUgNDYuODUgTDc4LjIgNDYuODUgNzkuNyA0OC44IFE4MC45NSA1MC42IDgwLjk1IDUxLjM1IDgwLjk1IDU0LjMgNzguMDUgNTYuNjUgNzUuMTUgNTkuMDUgNzEuMzUgNTkuMDUgNjguOTUgNTkuMDUgNjYuOTUgNTcuMDUgNjUuMSA1NS4yIDY1LjEgNTMuMzUgNjUuMSA1MC43NSA2OC45IDQ4LjMgNzAuOSA0Ny4wIDcyLjc1IDQ2LjQ1IEw3MC43IDQ2LjI1IFE2Ny41NSA0Ni4yNSA2Mi40IDQzLjM1IDU4LjA1IDQwLjkgNTYuODUgMzkuMzUgTDU2Ljk1IDQwLjk1IFE1Ni45NSA0My4wNSA1NS41NSA0NS4xIDU0LjAgNDcuMyA1Mi4xNSA0Ny4zIDUwLjMgNDcuMyA0Ny45NSA0NC40IDQ1LjQgNDEuMSA0NS40IDM3LjIgTDQ1LjM1IDM2LjIgUTQ1LjMgMzYuMCA0Ni40IDMyLjk1IEw0Ni41NSAzMi44NSA0OC4xIDMxLjg1IDUwLjM1IDMxLjQ1IDUwLjggMzEuNSA1MC4zIDMwLjkgUTQ2LjI1IDI1LjUgNDYuMjUgMjMuOSBMNDYuMSAyMy4zNSA0NS45NSAyMi44IDQ1LjU1IDIwLjIgNDUuNzUgMTcuNSA0NS44NSAxNy4wIDQ4LjE1IDE0LjUgNDkuNiAxMy4yNSBRNTEuNTUgMTEuNiA1NC4wIDEwLjMgTDU0LjggOS43NSA1NC45IDkuNzUgNTQuODUgOS42NSA1My45NSA4LjM1IDUwLjMgNC4yIDUwLjY1IDMuOTUgNTYuOCAxLjYgNTguOSAxLjQgUTU5LjMgMS40IDYwLjAgMS43IEw2MC43IDIuMDUgNjAuODUgMi45IDYxLjA1IDMuNyA2MS44NSA2LjAgNjIuMyA3LjA1IFE2OC4zNSA1LjggNzQuOSA3LjM1IDg0Ljc1IDkuNzUgOTAuNjUgMTcuMjUgTDkzLjE1IDE1LjM1IFE5NS4yIDEzLjcgOTUuNTUgMTMuNyA5Ny45IDEzLjcgMTAwLjM1IDE3LjEgTDEwMC43IDE3LjY1IDEwMS4yIDE4LjM1IDEwMS44NSAxOS40NSA5OC41NSAyMC44IDk0LjAgMjIuNTUgUTk1LjUgMjUuNDUgOTYuMyAyOC41NSBNODYuNTUgMTguNDUgUTg2LjU1IDE2LjEgODMuNiAxNS43NSA4MC42NSAxNS40IDgwLjY1IDE3LjYgODAuNjUgMTguNDUgODEuNSAxOS4yNSA4Mi41IDIwLjE1IDg0LjAgMjAuMTUgODQuODUgMjAuMTUgODUuNyAxOS41NSA4Ni41NSAxOS4wIDg2LjU1IDE4LjQ1IE04OC4wIDI0LjM1IEw4OC4zIDIzLjUgUTg4LjMgMjIuMCA4Ni4zNSAyMS40IDg0LjM1IDIwLjggODQuMzUgMjIuOCA4NC4zNSAyNC43NSA4Ny4zNSAyNC43NSA4Ny43IDI0Ljc1IDg4LjAgMjQuMzUgTTgxLjggMjIuNzUgTDgxLjg1IDIzLjU1IFE4MS44NSAyNC42IDgxLjQ1IDI1LjYgTDgwLjM1IDI3LjA1IFE3OC42NSAyOC43IDc1LjkgMjguNyA3Mi40IDI4LjcgNjkuMSAyNS43IDY2LjcgMjMuNSA2Ni4wIDIxLjA1IDY1LjcgMjAuMSA2NS43IDE5LjEgNjYuNCAxNS42IDcyLjEgMTUuNiA3NS4zIDE1LjYgNzguMzUgMTcuNyA4MS40NSAxOS44IDgxLjggMjIuNzUgODEuNDUgMTkuOCA3OC4zNSAxNy43IDc1LjMgMTUuNiA3Mi4xIDE1LjYgNjYuNCAxNS42IDY1LjcgMTkuMSBMNjUuNyAxOC45NSA2NS43IDE4LjkgNjUuNjUgMTguOSBRNjQuOSAxOS4wIDY0LjQ1IDIwLjIgNjQuMSAyMS40IDY0LjAgMjIuNiA2NC4wIDI1Ljk1IDY1LjkgMjkuMTUgNjkuMjUgMzQuODUgNzcuMTUgMzQuODUgODAuNDUgMzQuODUgODIuMjUgMzEuNjUgODMuNSAyOS4zNSA4My41IDI3LjIgODIuOTUgMjIuNzUgODEuOCAyMi43NSBNOTQuMCAyMi41NSBMOTMuMDUgMjAuOCA5Mi43NSAyMC4zIFE5MS44IDE4LjcgOTAuNjUgMTcuMjUgOTEuOCAxOC43IDkyLjc1IDIwLjMgTDkzLjA1IDIwLjggOTQuMCAyMi41NSBNNjIuMyA3LjA1IFE1OC41IDcuODUgNTQuOSA5Ljc1IDU4LjUgNy44NSA2Mi4zIDcuMDUgTTU2Ljg1IDM5LjM1IFE1Ni40NSAzNi43NSA1NC44IDM0LjQgNTIuODUgMzEuNzUgNTAuOCAzMS41IDUyLjg1IDMxLjc1IDU0LjggMzQuNCA1Ni40NSAzNi43NSA1Ni44NSAzOS4zNSIgZmlsbD0iIzZjNzA3MSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTAxLjg1IDE5LjQ1IEwxMDIuMSAxOS45NSAxMDMuMSAyMi4yIDEwMy4xIDIyLjMgUTEwMy40IDI0LjA1IDEwMy4zIDI1LjYgTDEwMy4yIDI3LjEgMTAyLjk1IDI3LjA1IDk5LjcgMjcuOTUgOTYuMyAyOC41NSBROTUuNSAyNS40NSA5NC4wIDIyLjU1IEw5OC41NSAyMC44IDEwMS44NSAxOS40NSBNOTYuNiA0MC4wIEw5Ni4yIDQyLjEgUTk0LjkgNDcuNiA5MS45NSA1MS45NSBMOTQuOTUgNTMuNSBROTcuMSA1NC42IDk3LjEgNTYuMDUgOTcuMDUgNTcuNSA5NC44NSA2MS4yNSA5Mi42NSA2NC45NSA4OS4zIDY1LjU1IEw4Ny4xNSA2NS41IFE4NS42NSA2NC42NSA4My41NSA1OS44IEw4My4yNSA2MC4wIFE3My4xIDY2LjI1IDYxLjQgNjMuNCBMNjAuMCA2My4wNSA1OC44IDY2LjI1IFE1Ny43IDY5LjI1IDU3LjMgNjkuMjUgNTcuMSA2OS4yNSA1Ny4wIDY5LjQ1IEw1Ni42IDY5LjY1IFE1NC40IDY5LjY1IDUwLjMgNjcuNSA0NS42IDY1LjA1IDQ1LjYgNjIuNCBMNDUuMyA2MS4zNSA0NS4zNSA2MS4xNSA0Ny4wIDU5LjIgNDkuMCA1Ny4wNSBRNDUuOSA1NC4zIDQzLjU1IDUwLjQ1IDQyLjEgNDguMTUgNDEuMTUgNDUuNzUgMzkuNzUgNDUuMTUgMzguODUgNDQuMzUgMzYuODUgNDIuNSAzNi44NSAzOS4yNSAzNi44NSAzNy42IDM3LjggMzQuNiAzOC42NSAzMS42NSAzOS42IDMxLjIgTDQwLjEgMjguNjUgUTQxLjY1IDIyLjE1IDQ1LjU1IDE3LjM1IEw0NS43NSAxNy41IDQ1LjU1IDIwLjIgNDUuOTUgMjIuOCA0Ni4xIDIzLjM1IDQ2LjI1IDIzLjkgUTQ2LjI1IDI1LjUgNTAuMyAzMC45IEw1MC44IDMxLjUgNTAuMzUgMzEuNDUgNDguMSAzMS44NSA0Ni41NSAzMi44NSA0Ni40IDMyLjk1IFE0NS4zIDM2LjAgNDUuMzUgMzYuMiBMNDUuNCAzNy4yIFE0NS40IDQxLjEgNDcuOTUgNDQuNCA1MC4zIDQ3LjMgNTIuMTUgNDcuMyA1NC4wIDQ3LjMgNTUuNTUgNDUuMSA1Ni45NSA0My4wNSA1Ni45NSA0MC45NSBMNTYuODUgMzkuMzUgUTU4LjA1IDQwLjkgNjIuNCA0My4zNSA2Ny41NSA0Ni4yNSA3MC43IDQ2LjI1IEw3Mi43NSA0Ni40NSBRNzAuOSA0Ny4wIDY4LjkgNDguMyA2NS4xIDUwLjc1IDY1LjEgNTMuMzUgNjUuMSA1NS4yIDY2Ljk1IDU3LjA1IDY4Ljk1IDU5LjA1IDcxLjM1IDU5LjA1IDc1LjE1IDU5LjA1IDc4LjA1IDU2LjY1IDgwLjk1IDU0LjMgODAuOTUgNTEuMzUgODAuOTUgNTAuNiA3OS43IDQ4LjggTDc4LjIgNDYuODUgNzkuOCA0Ni45NSBRODUuMSA0Ni45NSA5MS41IDQzLjUgOTQuNyA0MS43IDk2LjYgNDAuMCBNNDkuNiAxMy4yNSBMNDYuMCA4LjggNDUuNjUgOC4wIDUwLjMgNC4yIDUzLjk1IDguMzUgNTQuODUgOS42NSA1NC44IDkuNzUgNTQuMCAxMC4zIFE1MS41NSAxMS42IDQ5LjYgMTMuMjUgTTY1LjcgMTkuMSBRNjUuNyAyMC4xIDY2LjAgMjEuMDUgNjYuNyAyMy41IDY5LjEgMjUuNyA3Mi40IDI4LjcgNzUuOSAyOC43IDc4LjY1IDI4LjcgODAuMzUgMjcuMDUgTDgxLjQ1IDI1LjYgUTgxLjg1IDI0LjYgODEuODUgMjMuNTUgTDgxLjggMjIuNzUgUTgyLjk1IDIyLjc1IDgzLjUgMjcuMiA4My41IDI5LjM1IDgyLjI1IDMxLjY1IDgwLjQ1IDM0Ljg1IDc3LjE1IDM0Ljg1IDY5LjI1IDM0Ljg1IDY1LjkgMjkuMTUgNjQuMCAyNS45NSA2NC4wIDIyLjYgNjQuMSAyMS40IDY0LjQ1IDIwLjIgNjQuOSAxOS4wIDY1LjY1IDE4LjkgTDY1LjcgMTkuMSBNODMuNTUgNTkuOCBRODguNyA1Ni41NSA5MS45NSA1MS45NSA4OC43IDU2LjU1IDgzLjU1IDU5LjggTTM5LjYgMzEuMiBRMzguNDUgMzguNzUgNDEuMTUgNDUuNzUgMzguNDUgMzguNzUgMzkuNiAzMS4yIE00OS4wIDU3LjA1IFE1My42IDYxLjIgNjAuMCA2My4wNSA1My42IDYxLjIgNDkuMCA1Ny4wNSIgZmlsbD0iIzQwNDA0MCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNODguMCAyNC4zNSBRODcuNyAyNC43NSA4Ny4zNSAyNC43NSA4NC4zNSAyNC43NSA4NC4zNSAyMi44IDg0LjM1IDIwLjggODYuMzUgMjEuNCA4OC4zIDIyLjAgODguMyAyMy41IEw4OC4wIDI0LjM1IE04Ni41NSAxOC40NSBRODYuNTUgMTkuMCA4NS43IDE5LjU1IDg0Ljg1IDIwLjE1IDg0LjAgMjAuMTUgODIuNSAyMC4xNSA4MS41IDE5LjI1IDgwLjY1IDE4LjQ1IDgwLjY1IDE3LjYgODAuNjUgMTUuNCA4My42IDE1Ljc1IDg2LjU1IDE2LjEgODYuNTUgMTguNDUiIGZpbGw9IiNkN2RmZTMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEwMS44NSAxOS40NSBMMTAyLjEgMTkuOTUgMTAzLjEgMjIuMiAxMDMuMSAyMi4zIFExMDMuNCAyNC4wNSAxMDMuMyAyNS42IEwxMDMuMiAyNy4xIDEwMi45NSAyNy4wNSA5OS43IDI3Ljk1IDk2LjMgMjguNTUgUTk3LjY1IDM0LjEgOTYuNiA0MC4wIEw5Ni4yIDQyLjEgUTk0LjkgNDcuNiA5MS45NSA1MS45NSBMOTQuOTUgNTMuNSBROTcuMSA1NC42IDk3LjEgNTYuMDUgOTcuMDUgNTcuNSA5NC44NSA2MS4yNSA5Mi42NSA2NC45NSA4OS4zIDY1LjU1IEw4Ny4xNSA2NS41IFE4NS42NSA2NC42NSA4My41NSA1OS44IEw4My4yNSA2MC4wIFE3My4xIDY2LjI1IDYxLjQgNjMuNCBMNjAuMCA2My4wNSA1OC44IDY2LjI1IFE1Ny43IDY5LjI1IDU3LjMgNjkuMjUgNTcuMSA2OS4yNSA1Ny4wIDY5LjQ1IEw1Ni42IDY5LjY1IFE1NC40IDY5LjY1IDUwLjMgNjcuNSA0NS42IDY1LjA1IDQ1LjYgNjIuNCBMNDUuMyA2MS4zNSA0NS4zNSA2MS4xNSA0Ny4wIDU5LjIgNDkuMCA1Ny4wNSBRNDUuOSA1NC4zIDQzLjU1IDUwLjQ1IDQyLjEgNDguMTUgNDEuMTUgNDUuNzUgMzkuNzUgNDUuMTUgMzguODUgNDQuMzUgMzYuODUgNDIuNSAzNi44NSAzOS4yNSAzNi44NSAzNy42IDM3LjggMzQuNiAzOC42NSAzMS42NSAzOS42IDMxLjIgTDQwLjEgMjguNjUgUTQxLjY1IDIyLjE1IDQ1LjU1IDE3LjM1IEw0NS44NSAxNy4wIDQ4LjE1IDE0LjUgNDkuNiAxMy4yNSA0Ni4wIDguOCA0NS42NSA4LjAgNTAuMyA0LjIgNTAuNjUgMy45NSA1Ni44IDEuNiA1OC45IDEuNCBRNTkuMyAxLjQgNjAuMCAxLjcgTDYwLjcgMi4wNSA2MC44NSAyLjkgNjEuMDUgMy43IDYxLjg1IDYuMCA2Mi4zIDcuMDUgUTY4LjM1IDUuOCA3NC45IDcuMzUgODQuNzUgOS43NSA5MC42NSAxNy4yNSBMOTMuMTUgMTUuMzUgUTk1LjIgMTMuNyA5NS41NSAxMy43IDk3LjkgMTMuNyAxMDAuMzUgMTcuMSBMMTAwLjcgMTcuNjUgMTAxLjIgMTguMzUgMTAxLjg1IDE5LjQ1IE05NC4wIDIyLjU1IFE5NS41IDI1LjQ1IDk2LjMgMjguNTUgTTY1LjcgMTkuMSBRNjUuNyAyMC4xIDY2LjAgMjEuMDUgNjYuNyAyMy41IDY5LjEgMjUuNyA3Mi40IDI4LjcgNzUuOSAyOC43IDc4LjY1IDI4LjcgODAuMzUgMjcuMDUgTDgxLjQ1IDI1LjYgUTgxLjg1IDI0LjYgODEuODUgMjMuNTUgTDgxLjggMjIuNzUgUTgxLjQ1IDE5LjggNzguMzUgMTcuNyA3NS4zIDE1LjYgNzIuMSAxNS42IDY2LjQgMTUuNiA2NS43IDE5LjEgTDY1LjcgMTguOTUgTTkwLjY1IDE3LjI1IFE5MS44IDE4LjcgOTIuNzUgMjAuMyBMOTMuMDUgMjAuOCA5NC4wIDIyLjU1IE05MS45NSA1MS45NSBRODguNyA1Ni41NSA4My41NSA1OS44IE01NC45IDkuNzUgUTU4LjUgNy44NSA2Mi4zIDcuMDUgTTQ5LjYgMTMuMjUgUTUxLjU1IDExLjYgNTQuMCAxMC4zIEw1NC44IDkuNzUgNTQuOSA5Ljc1IE01MC44IDMxLjUgUTUyLjg1IDMxLjc1IDU0LjggMzQuNCA1Ni40NSAzNi43NSA1Ni44NSAzOS4zNSBMNTYuOTUgNDAuOTUgUTU2Ljk1IDQzLjA1IDU1LjU1IDQ1LjEgNTQuMCA0Ny4zIDUyLjE1IDQ3LjMgNTAuMyA0Ny4zIDQ3Ljk1IDQ0LjQgNDUuNCA0MS4xIDQ1LjQgMzcuMiBMNDUuMzUgMzYuMiBRNDUuMyAzNi4wIDQ2LjQgMzIuOTUgTDQ2LjU1IDMyLjg1IDQ4LjEgMzEuODUgNTAuMzUgMzEuNDUgNTAuOCAzMS41IE03Mi43NSA0Ni40NSBMNzUuNDUgNDYuMCBRNzYuNCA0Ni4wIDc4LjE1IDQ2Ljg1IEw3OC4yIDQ2Ljg1IDc5LjcgNDguOCBRODAuOTUgNTAuNiA4MC45NSA1MS4zNSA4MC45NSA1NC4zIDc4LjA1IDU2LjY1IDc1LjE1IDU5LjA1IDcxLjM1IDU5LjA1IDY4Ljk1IDU5LjA1IDY2Ljk1IDU3LjA1IDY1LjEgNTUuMiA2NS4xIDUzLjM1IDY1LjEgNTAuNzUgNjguOSA0OC4zIDcwLjkgNDcuMCA3Mi43NSA0Ni40NSBNNjAuMCA2My4wNSBRNTMuNiA2MS4yIDQ5LjAgNTcuMDUgTTQxLjE1IDQ1Ljc1IFEzOC40NSAzOC43NSAzOS42IDMxLjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgPC9nPg0KPC9zdmc+DQo8IS0tIDEgLS0+',
  trombone: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iOTguMzVweCIgd2lkdGg9IjE0Ny42NXB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAsIDAuMCwgMC4wLCAxLjAsIDI0LjA1LCAyLjcpIj4NCiAgICA8cGF0aCBkPSJNLTE2LjMgNS40IEwtMTguMTUgNC43IC0xNi44NSAwLjcgUS0xNi41NSAtMC4xNSAtMTUuNjUgLTAuNSBMLTEzLjAgLTEuNyBRLTExLjMgLTEuNDUgLTExLjU1IDAuMTUgTC0xMS43IDIuMDUgLTQuMCA3LjEgLTkuMyA2LjE1IFEtMTEuMTUgNS42NSAtMTIuOTUgNS40NSAtMTQuNjUgNS4wNSAtMTYuMyA1LjQgLTE0LjY1IDUuMDUgLTEyLjk1IDUuNDUgLTExLjE1IDUuNjUgLTkuMyA2LjE1IEwtNC4wIDcuMSAwLjg1IDkuNyBRNC43IDExLjggOC43NSAxMy43IEwxNi4yIDE3LjM1IDIzLjE1IDIwLjggMzAuMzUgMjQuMjUgMzcuNyAyNy44NSBRNDEuODUgMjcuOCA0NS44IDI5LjUgTDUyLjkgMzIuNiA1OS41NSAzNi4xIDY2Ljg1IDQwLjE1IFE3MC43IDQyLjE1IDc0Ljc1IDQzLjk1IDc3Ljk1IDQ1LjI1IDgxLjMgNDYuMTUgTDg1LjUgNDcuMSA5MC41NSA0NS45NSA5OC45NSA0My4wIDEwNi4xNSA0MC4zNSAxMDkuNSAzOS42IFExMTMuOCAzOC42IDExNy45NSAzOS41IDExOC40NSAzOS42NSAxMTguOTUgMzkuOTUgMTIwLjc1IDQwLjk1IDEyMS41IDQyLjkgMTIyLjQ1IDQ1LjI1IDEyMi41NSA0OC4wNSAxMjIuNzUgNTIuNiAxMjEuNSA1Ny4wIEwxMTkuOSA2Mi4wIFExMTguNSA2NS45IDExNi41NSA2OS43NSAxMTQuNzUgNzMuMyAxMTIuMiA3Ni40NSBMMTA4LjggODAuNDUgMTAzLjkgODUuMzUgUTEwMy41IDg0LjY1IDEwMy43IDgzLjg1IEwxMDMuNSA4My45NSAxMDMuMiA4NC4xNSAxMDMuMTUgODQuMTUgMTAzLjAgODQuMTUgUTEwMi4yIDgzLjk1IDEwMi4yIDgzLjEgMTAyLjIgODIuNCAxMDIuOSA4MS4xNSBMMTA1LjIgNzcuNzUgMTA4LjYgNzMuNTUgMTEzLjE1IDY3LjY1IDExMy45NSA2Ni43IDExMy41IDY3Ljc1IDExNS43IDYyLjI1IDExOC4xNSA1NC44NSBRMTE4Ljc1IDUyLjY1IDExOC43IDUwLjUgMTE4LjY1IDQ4LjQgMTE3Ljk1IDQ2LjUgTDExNi40NSA0NS43NSAxMTIuMiA0Ni4wIDExMi4yIDQ2LjEgMTEyLjE1IDQ2LjAgUTEwOS45NSA0Ni44NSAxMDguMjUgNDguMiBMMTA2Ljc1IDQ5LjQgUTEwNC4yIDUxLjcgMTAwLjk1IDU1LjU1IDk0LjM1IDYzLjMgOTEuMCA2OS4zIEw4Ny4zNSA3NS42IDg3LjEgNzUuNTUgODYuMyA3NS4yNSA4Ni4zIDc1LjIgODYuMDUgNzQuNiA4NS43NSA3My4yNSBRODUuNjUgNzIuNSA4NS44NSA3MS43IDg2LjMgNjkuOSA4Ny4wNSA2OC4zIDg4LjcgNjQuOTUgOTAuNzUgNjEuOTUgTDkzLjk1IDU3LjQ1IFE5Mi4zIDU5LjQgOTAuMDUgNjAuNSBMODkuODUgNjAuNiA4OS4xNSA2MS4yIDg4LjggNjIuMCBRODcuMyA2Mi42IDg1Ljg1IDYzLjQgTDg1LjIgNjMuNjUgODMuMyA2My43NSA4Mi4yNSA2My41IDgyLjA1IDYzLjEgODIuNCA2Mi4wNSBRODIuODUgNjAuODUgODIuMyA1OS43NSBMNzcuNzUgNjAuMDUgUTc3LjE1IDU4Ljk1IDc2Ljk1IDU3LjUgTDc2LjQ1IDUzLjUgUTc2LjE1IDUxLjM1IDc0LjQ1IDUwLjEgNzIuMzUgNDguNiA3MC4xIDQ3LjY1IEw2Ny4zIDQ2LjYgUTY0LjQgNDMuNiA2MC44IDQxLjMgTDU2LjI1IDM4LjQ1IDQ4LjIgMzMuNTUgNDIuMCAzMC4xIDM4LjE1IDI4LjE1IDM3LjcgMjcuODUgMzguMTUgMjguMTUgNDIuMCAzMC4xIDQ4LjIgMzMuNTUgNTYuMjUgMzguNDUgNjAuOCA0MS4zIFE2NC40IDQzLjYgNjcuMyA0Ni42IEw2MS43NSA0NC45IDU5LjI1IDQzLjAgNTcuMyA0MS43IDU2Ljc1IDQxLjQgNTYuMyA0MS4xNSA1Ni4xNSA0MS4wNSA1MC41IDM3Ljg1IFE1MS44IDM3Ljg1IDUxLjggMzcuMCA1MS44IDM2LjAgNDkuODUgMzUuMDUgTDQ2LjY1IDM0LjkgNDguNiAzNi41NSA0OS45NSAzNy41NSA0OS43IDM3LjQgNDQuNiAzNC43IFE0MS41NSAzMy4xIDM4LjM1IDMxLjYgTDM0LjggMjkuOCAyOC4yIDI2LjUgMjIuMzUgMjMuMzUgMjIuMTUgMjMuMjUgMjEuNzUgMjMuMCAyMS43IDIzLjAgMTkuODUgMjIuMCAxNy43NSAyMC44NSAxNC40NSAxOS4xIDExLjEgMTcuMzUgNi44NSAxNS4yIDUuNTUgMTQuNiA1LjU1IDE0LjU1IDQuNCAxNC4wNSAxLjA1IDEyLjQ1IFEtMi4yNSAxMS4wIC01LjY1IDkuNjUgTC03LjMgOS4wIC03Ljg1IDguOCAtNy45NSA4Ljc1IFEtMTAuNCA3LjkgLTEyLjk1IDcuMzUgTC0xNi40NSA3LjAgLTIwLjE1IDYuOCBRLTE4LjYgNS41NSAtMTYuMyA1LjQgTTEwMS4yNSA0OC4wIFExMDIuNTUgNDYuNzUgMTA0LjkgNDUuNDUgTDEwNi43IDQ0LjU1IFExMTAuMTUgNDMuMSAxMTIuNzUgNDEuMjUgTDEwNS42NSA0Mi40IDEwNC40IDQyLjc1IFE5OS42IDQ0LjMgOTguMTUgNDUuOSBMOTQuOCA1MC4yIFE5Mi4zNSA1My41IDkyLjM1IDU0LjEgTDkyLjUgNTQuNyBROTIuNzUgNTUuMjUgOTMuNCA1NS4yNSA5NC44NSA1NS4yNSA5Ny45NSA1MS44NSBMMTAxLjI1IDQ4LjAgTTExOC44NSA0Ny4xNSBMMTE3Ljk1IDQ2LjUgMTE4Ljg1IDQ3LjE1IE0xMTEuNDUgNzEuODUgTDExMS40NSA3MS45IDExMS41NSA3MS43NSAxMTEuNDUgNzEuODUgTTgzLjI1IDUwLjkgUTg0LjM1IDUwLjUgODQuMzUgNDkuOSA4NC4zIDQ4LjUgODIuNiA0OC41IDgyLjE1IDQ4LjUgNzguMCA0Ni42IDc1LjEgNDUuMyA3NS4xIDQ3LjQ1IDc1LjEgNDcuOTUgNzcuMjUgNDkuNSA3OS42NSA1MS4yNSA4MS40NSA1MS4yNSBMODMuMjUgNTAuOSBNNTAuNTUgNDQuNyBRNTAuNjUgNDMuMSA1MS41IDQ0LjM1IDUyLjM1IDQ1LjU1IDUyLjQgNDYuMiBMNTIuMzUgNDYuNiA1MS40IDQ5LjMgUTUwLjQgNTEuOSA1MC40IDU1LjE1IEw1MC4yIDU4LjYgNDkuOTUgNjIuNSA1MC4yNSA2NC40IDQ5Ljk1IDY1LjAgNDkuNjUgNjUuOSBRNDkuOCA2Ni4wIDQ5LjQgNjYuMCA0OC45IDY2LjAgNDguODUgNjUuNDUgTDQ4LjkgNjQuODUgNDguNCA2MS44NSA0OC40NSA2MS42NSA0OC44NSA1OS44NSA0OC45IDU4LjM1IDQ5LjUgNTAuMSA0OS40NSA0OS43IDUwLjAgNDguMTUgNTAuNCA0Ni43NSA1MC43IDQ1LjYgNTAuNyA0NS40NSA1MC43IDQ1LjMgNTAuNyA0NS4xNSA1MC41NSA0NC43IiBmaWxsPSIjZmZmN2FhIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xMDMuOSA4NS4zNSBMMTAxLjggODcuMCA5Ni45IDkwLjQgUTkzLjM1IDkyLjY1IDg5LjI1IDkzLjcgODQuNDUgOTQuODUgNzkuNSA5NC42IDc3LjY1IDk0LjU1IDc1LjkgOTMuNiA3My45NSA5Mi42IDczLjE1IDkwLjU1IDcyLjIgODguMSA3Mi4zNSA4NS40IEw3Mi44IDc4Ljk1IDczLjIgNzMuOCA3My41IDY4LjY1IDczLjQgNjMuNDUgUTczLjM1IDYyLjMgNzIuMiA2MS4wIDcxLjIgNjIuNSA2OS44IDYzLjQgNjguMTUgNjQuNCA2NS45NSA2NC41NSBMNjEuODUgNjQuMzUgUTU3LjIgNjMuMyA1Mi45IDYxLjY1IEw1MC41IDYwLjc1IDUwLjEgNjcuMTUgNTAuMyA3MC4zNSA0OC4xNSA2OS45IDQ4LjggNzAuMDUgNDkuMSA2OS44NSA0OS40NSA2OS4xNSBRNDkuNDUgNjguMSA0Ny4wNSA2Ny4yIDQ0LjY1IDY2LjMgNDQuNjUgNjcuOSBMNDUuMCA2OS4wIDQ1LjI1IDY5LjMgNDQuMyA2OS4xIDQ1LjIgNjQuMjUgNDUuNiA2NC4zNSBRNDcuODUgNjMuMyA0OC40IDYxLjg1IEw0OC45IDY0Ljg1IDQ4Ljg1IDY1LjQ1IFE0OC45IDY2LjAgNDkuNCA2Ni4wIDQ5LjggNjYuMCA0OS42NSA2NS45IEw0OS45NSA2NS4wIDUwLjI1IDY0LjQgNDkuOTUgNjIuNSA1MC4yIDU4LjYgNTAuNCA1NS4xNSBRNTAuNCA1MS45IDUxLjQgNDkuMyBMNTIuMzUgNDYuNiA1MS4xIDU1LjE1IDUwLjY1IDU5LjAgNTkuMCA2MC4zIFE1OS4yIDYxLjQgNjAuNjUgNjEuNjUgTDYyLjM1IDYxLjY1IFE2NC40IDYxLjY1IDY2LjUgNTguNjUgNjguMzUgNTYuMCA2OC4zNSA1NC42IDY4LjM1IDUyLjIgNjcuNiA1MC43IDY2LjM1IDQ4LjIgNjIuNyA0NS45IEw1OS45IDQzLjUgNTkuMjUgNDMuMCA2MS43NSA0NC45IDY3LjMgNDYuNiA2OC4zIDQ3LjY1IFE2OS45IDQ5LjUgNzEuMSA1MS41NSA3MS44IDUyLjM1IDcyLjEgNTMuMTUgTDcyLjMgNTMuOSA3My4xIDU1Ljg1IDczLjQ1IDU3LjU1IFE3My40NSA1OC40NSA3My4wNSA1OS4zIEw3Mi45IDU5LjcgNzIuOSA1OS44IFE3My41NSA2Mi43NSA3Ny4yIDYyLjc1IEw3OC45NSA2My4wIDc5LjEgNjMuNzUgNzguOSA2NS4xIDc4Ljg1IDY2LjggUTc5LjA1IDY3LjggODAuNTUgNjguNSA4Mi4wNSA2OS4yNSA4Mi4yNSA3MC40NSBMODIuOTUgNzQuNjUgUTgzLjg1IDc3LjM1IDg2LjEgNzcuMzUgTDg2LjMgNzcuMzUgODQuNSA4MC4zNSBRODAuNCA4Ny41NSA4MC40IDkwLjA1IDgwLjQgOTAuNzUgODEuMTUgOTEuMjUgODEuOSA5MS43IDgyLjggOTEuNyBMODYuMiA5MC43NSA4Ny4yNSA5MC45NSA5MC4xNSA5MC4yNSA5My4yNSA4Ny45NSA5OC40IDg0LjYgMTAyLjE1IDgxLjc1IDEwMi45IDgxLjE1IFExMDIuMiA4Mi40IDEwMi4yIDgzLjEgMTAyLjIgODMuOTUgMTAzLjAgODQuMTUgTDEwMi41IDg0LjU1IDEwMy4xNSA4NC4xNSAxMDMuMiA4NC4xNSAxMDMuNSA4My45NSAxMDMuNyA4My44NSBRMTAzLjUgODQuNjUgMTAzLjkgODUuMzUgTTQ2LjE1IDU4LjkgTDQzLjIgNTcuNTUgMzcuMzUgNTQuOCAzMC45IDUxLjcgMjMuNSA0Ny45IDE1LjE1IDQzLjQ1IDEwLjcgNDEuMCA0LjM1IDM3LjQgLTEuMyAzNC4xNSAtNy45NSAyOS45NSBRLTEyLjAgMjcuMyAtMTUuOCAyNC4yNSBMLTE5LjA1IDIxLjMgLTIxLjg1IDE3LjcgUS0yMi44IDE2LjIgLTIzLjA1IDE0LjU1IC0yMy4xNSAxMy41IC0yMi43NSAxMi41IC0yMi4wIDguMzUgLTIwLjM1IDYuOTUgTC0yMC4xNSA2LjggLTE2LjQ1IDcuMCAtMTIuOTUgNy4zNSBRLTEwLjQgNy45IC03Ljk1IDguNzUgTC04LjE1IDguNyBRLTE0LjEgNi45IC0xNC4xIDguOTUgTC0xMC44NSAxMC40IC0xNC4zNSA5LjQgLTE5LjAgOC41NSBRLTIwLjQ1IDEwLjk1IC0yMC43NSAxMy42NSAtMjAuOCAxNC4zNSAtMjAuNDUgMTUuMDUgTC0xOS4wIDE3LjE1IC0xOC44NSAxNy4zNSBRLTE4LjQ1IDE5LjQ1IC0xNy4wNSAyMS4zIC0xNC44NSAyNC4yNSAtMTEuNTUgMjYuNDUgTC00LjcgMzAuNiAtMS4wNSAzMi43NSA2LjA1IDM3LjAgUTkuNSAzOS4xNSAxMy41NSA0MC44IEwyMS40IDQzLjggUTIzLjcgNDQuNiAyNS43IDQ1LjggTDMyLjA1IDQ5Ljk1IDMxLjk1IDUwLjQgMzcuNiA1Mi43NSAzNy4yIDUzLjU1IDQyLjE1IDU0LjE1IDQyLjAgNTUuNTUgNDIuOSA1NS43IDQzLjQ1IDU2LjQ1IDQ2LjMgNTYuNzUgNDYuMTUgNTguOSBNODcuMSA3NS41NSBMODcuMzUgNzUuNiA4Ny4zIDc1Ljc1IDg3LjEgNzUuNTUgTTcxLjk1IDYwLjggTDcyLjIgNjEuMCA3Mi45IDU5LjcgNzIuMiA2MS4wIDcxLjk1IDYwLjggTTUwLjUgNjAuNzUgTDUwLjY1IDU5LjAgNTAuNSA2MC43NSBNMjEuNyAyMy4wIEwxOC4zIDIyLjI1IDE4LjIgMjIuMjUgMTguMTUgMjIuNSBRMTguMTUgMjMuMTUgMjEuNTUgMjQuMyAyNi41NSAyNS45NSAzMC4zNSAyOC4xNSBMMzYuMCAzMS45IDQyLjU1IDM1Ljk1IFE0NS4zIDM3LjM1IDUxLjggNDAuMzUgNTcuMiA0Mi45NSA1OC42NSA0NC40IEw2My43IDQ4LjU1IFE2Ni4yNSA1MC41NSA2Ni4yNSA1Mi4yIEw2Ni4wIDUzLjMgUTY0LjQ1IDQ5Ljk1IDYxLjQgNDcuNyBMNTguNDUgNDUuNiA1Mi45NSA0Mi40IDUyLjQgNDYuMiBRNTIuMzUgNDUuNTUgNTEuNSA0NC4zNSA1MC42NSA0My4xIDUwLjU1IDQ0LjcgNTAuMTUgNDMuNzUgNDguODUgNDMuMTUgTDQ3LjcgNDIuODUgNDguMDUgMzkuNyA0NS43IDM4LjUgNDAuNCA1MC4wNSA0NC41IDUyLjA1IDQ1LjY1IDUyLjYgNDIuNiA1Mi44NSAxOC40NSAzOS40NSAyNC45NSA0Mi41IDI2Ljc1IDM5LjM1IDI2LjY1IDQwLjk1IDI2LjggNDIuMiBRMjcuMTUgNDMuMzUgMjguMiA0My4zNSAyOS40NSA0My4zNSAzMC45IDM5LjM1IDMyLjE1IDM1Ljg1IDMyLjE1IDM0LjY1IDMyLjE1IDMzLjggMzEuMyAzMy41IDMwLjQgMzMuMiAyOS40IDMzLjggTDMxLjAgMzAuODUgMjEuODUgMjYuMCAxOC4yNSAyNC4yIDIxLjg1IDI2LjAgMTUuNjUgMzguMTUgMTIuMjUgMzYuNiAxMy4zNSAzNC4zNSAxMy40IDM0LjcgUTEzLjggMzUuOTUgMTUuMCAzNS45NSAxNi4yIDM1Ljk1IDE3LjUgMzIuNiAxOC42IDI5Ljc1IDE4LjYgMjguNyAxOC42IDI3LjU1IDE3Ljc1IDI3LjIgTDE2Ljg1IDI3LjEgMTguMjUgMjQuMiAxMC41NSAyMC4zIDEyLjE1IDIwLjUgMTUuMiAyMS41IFExNy40NSAyMi4yNSAxOC45NSAyMi4yNSBMMTkuODUgMjIuMCAyMS43IDIzLjAgTTYzLjU1IDU5LjAgUTYzLjAgNTkuNDUgNjIuNDUgNTkuNDUgTDYyLjEgNTkuNCA2Mi4xNSA1OS4zNSA2Mi4xNSA1OC45NSA2My41NSA1OS4wIE01NS4wNSA1Ni44IEw1NC40NSA1Ni44NSA1NC4wNSA1Ni44IDU0LjAgNTYuOCA1NC4wNSA1Ni43NSA1NC42IDU2LjY1IDU1LjA1IDU2LjggTTQ4LjA1IDM5LjcgTDUyLjk1IDQyLjQgNDguMDUgMzkuNyBNMzguOCA0My4zNSBMMzguNzUgNDQuMTUgUTM4Ljc1IDQ1LjA1IDM4LjAgNDYuNyBMMzguMiA0Ny4yIFEzOC40NSA0Ny42IDM4LjkgNDcuNiA0MC4zNSA0Ny42IDQxLjQgNDQuNiA0Mi4xNSA0Mi4zNSA0Mi4xNSA0MC45NSA0Mi4xNSAzNy4zNSA0MC45NSAzOC42NSBMNDAuNyAzOS4yIDQxLjkgMzYuNSAzNS40NSAzMy4xNSAyOS43IDQ0LjggMzYuNiA0OC4yIDM4LjggNDMuMzUgTTQwLjQgNTAuMDUgTDM2LjYgNDguMiA0MC40IDUwLjA1IE00OS40NSA0OS43IEw0OS4yIDQ5LjM1IFE0OC45IDQ5LjA1IDQ4LjkgNDguNiBMNDkuOCA0Ny41NSA1MC40IDQ2Ljc1IDUwLjAgNDguMTUgNDkuNDUgNDkuNyBNNDkuMDUgNDUuNiBMNDguOSA0NS4wNSA0OS4xIDQ1LjYgNDkuMDUgNDUuNiBNNDUuNyAzOC41IEw0MS45IDM2LjUgNDUuNyAzOC41IE0xNC40NSAxOS4xIFE5LjUgMTguMTUgNy44IDE2LjkgTDUuNTUgMTQuNiA2Ljg1IDE1LjIgMTEuMSAxNy4zNSAxNC40NSAxOS4xIE0tOC44IDExLjE1IEwtNi42NSAxMS45IFExLjQ1IDE0Ljc1IDIuNTUgMTUuNCBMNC44IDE3LjIgNS4yNSAxNy42NSAtMC41IDE0Ljk1IFEtMy4yNSAxMy42IC02LjAgMTIuMzUgTC04LjggMTEuMTUgTTM1LjQ1IDMzLjE1IEwzMS4wIDMwLjg1IDM1LjQ1IDMzLjE1IE0yNC45NSA0Mi41IEwyOS43IDQ0LjggMjQuOTUgNDIuNSBNNzEuMSA1MS41NSBMNzIuMyA1My45IDcxLjEgNTEuNTUgTS0xOS4wIDguNTUgUS0yMS4zNSA5LjcgLTIyLjYgMTIuMTUgTC0yMi43NSAxMi41IC0yMi42IDEyLjE1IFEtMjEuMzUgOS43IC0xOS4wIDguNTUiIGZpbGw9IiNmZmI0NDQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTQ4LjE1IDY5LjkgTDQ1LjI1IDY5LjMgNDUuMCA2OS4wIDQ0LjY1IDY3LjkgUTQ0LjY1IDY2LjMgNDcuMDUgNjcuMiA0OS40NSA2OC4xIDQ5LjQ1IDY5LjE1IEw0OS4xIDY5Ljg1IDQ4LjggNzAuMDUgNDguMTUgNjkuOSBNNDUuMiA2NC4yNSBMNDUuMzUgNjMuMzUgNDUuNSA2Mi40IDQ1LjU1IDYyLjQgNDYuMTUgNTguOSA0Ni4zIDU2Ljc1IDQzLjQ1IDU2LjQ1IDQyLjkgNTUuNyA0Mi4wIDU1LjU1IDQyLjE1IDU0LjE1IDM3LjIgNTMuNTUgMzcuNiA1Mi43NSAzMS45NSA1MC40IDMyLjA1IDQ5Ljk1IDI1LjcgNDUuOCBRMjMuNyA0NC42IDIxLjQgNDMuOCBMMTMuNTUgNDAuOCBROS41IDM5LjE1IDYuMDUgMzcuMCBMLTEuMDUgMzIuNzUgLTQuNyAzMC42IC0xMS41NSAyNi40NSBRLTE0Ljg1IDI0LjI1IC0xNy4wNSAyMS4zIC0xOC40NSAxOS40NSAtMTguODUgMTcuMzUgTC0xMi4yIDIyLjQ1IC03Ljk1IDI1LjIgLTIuOSAyOC4zIDIuMSAzMS4yNSBRNC42IDMyLjcgNy4yNSAzMy45NSBMMTIuMjUgMzYuNiAxNS42NSAzOC4xNSAxOC40NSAzOS40NSA0Mi42IDUyLjg1IDQ1LjY1IDUyLjYgNDYuNTUgNTMuMDUgNDcuNSA0NC44IDQ3LjUgNDQuNiA0Ny43IDQyLjg1IDQ4Ljg1IDQzLjE1IFE1MC4xNSA0My43NSA1MC41NSA0NC43IEw1MC43IDQ1LjE1IDUwLjcgNDUuMyA1MC43IDQ1LjQ1IDUwLjcgNDUuNiA1MC40IDQ2Ljc1IDQ5LjggNDcuNTUgNDguOSA0OC42IFE0OC45IDQ5LjA1IDQ5LjIgNDkuMzUgTDQ5LjQ1IDQ5LjcgNDkuNSA1MC4xIDQ4LjkgNTguMzUgNDguODUgNTkuODUgNDguNDUgNjEuNjUgNDguNCA2MS44NSBRNDcuODUgNjMuMyA0NS42IDY0LjM1IEw0NS4yIDY0LjI1IE04Ny4zNSA3NS42IEw5MS4wIDY5LjMgUTk0LjM1IDYzLjMgMTAwLjk1IDU1LjU1IDEwNC4yIDUxLjcgMTA2Ljc1IDQ5LjQgTDEwOC4yNSA0OC4yIFExMDkuOTUgNDYuODUgMTEyLjE1IDQ2LjAgTDExMi4yIDQ2LjEgMTEyLjIgNDYuMCAxMTYuNDUgNDUuNzUgMTE3Ljk1IDQ2LjUgUTExOC42NSA0OC40IDExOC43IDUwLjUgMTE4Ljc1IDUyLjY1IDExOC4xNSA1NC44NSBMMTE1LjcgNjIuMjUgMTEzLjUgNjcuNzUgMTEzLjk1IDY2LjcgMTEzLjE1IDY3LjY1IDEwOC42IDczLjU1IDEwNS4yIDc3Ljc1IDEwMi45IDgxLjE1IDEwMi4xNSA4MS43NSA5OC40IDg0LjYgOTMuMjUgODcuOTUgOTAuMTUgOTAuMjUgODcuMjUgOTAuOTUgODYuMiA5MC43NSA4Mi44IDkxLjcgUTgxLjkgOTEuNyA4MS4xNSA5MS4yNSA4MC40IDkwLjc1IDgwLjQgOTAuMDUgODAuNCA4Ny41NSA4NC41IDgwLjM1IEw4Ni4zIDc3LjM1IDg3LjMgNzUuNzUgODYuMyA3Ny4zNSA4Ni4xIDc3LjM1IFE4My44NSA3Ny4zNSA4Mi45NSA3NC42NSBMODIuMjUgNzAuNDUgUTgyLjA1IDY5LjI1IDgwLjU1IDY4LjUgNzkuMDUgNjcuOCA3OC44NSA2Ni44IEw3OC45IDY1LjEgNzkuMSA2My43NSA3OC45NSA2My4wIDc3LjIgNjIuNzUgUTczLjU1IDYyLjc1IDcyLjkgNTkuOCBMNzIuOSA1OS43IDczLjA1IDU5LjMgUTczLjQ1IDU4LjQ1IDczLjQ1IDU3LjU1IEw3My4xIDU1Ljg1IDcyLjMgNTMuOSA3Mi4xIDUzLjE1IFE3MS44IDUyLjM1IDcxLjEgNTEuNTUgNjkuOSA0OS41IDY4LjMgNDcuNjUgTDY3LjMgNDYuNiA3MC4xIDQ3LjY1IFE3Mi4zNSA0OC42IDc0LjQ1IDUwLjEgNzYuMTUgNTEuMzUgNzYuNDUgNTMuNSBMNzYuOTUgNTcuNSBRNzcuMTUgNTguOTUgNzcuNzUgNjAuMDUgTDgyLjMgNTkuNzUgUTgyLjg1IDYwLjg1IDgyLjQgNjIuMDUgTDgyLjA1IDYzLjEgODIuMjUgNjMuNSA4My4zIDYzLjc1IDg1LjIgNjMuNjUgODUuODUgNjMuNCBRODcuMyA2Mi42IDg4LjggNjIuMCBMODkuMTUgNjEuMiA4OS44NSA2MC42IDkwLjA1IDYwLjUgUTkyLjMgNTkuNCA5My45NSA1Ny40NSBMOTAuNzUgNjEuOTUgUTg4LjcgNjQuOTUgODcuMDUgNjguMyA4Ni4zIDY5LjkgODUuODUgNzEuNyA4NS42NSA3Mi41IDg1Ljc1IDczLjI1IEw4Ni4wNSA3NC42IDg2LjMgNzUuMiA4Ni4zIDc1LjI1IDg3LjEgNzUuNTUgODcuMyA3NS43NSA4Ny4zNSA3NS42IE0xMDkuMCA2MC4yNSBRMTEwLjk1IDU1LjA1IDExMS44NSA1MC42NSBMMTEyLjE1IDQ2LjAgMTExLjg1IDUwLjY1IFExMTAuOTUgNTUuMDUgMTA5LjAgNjAuMjUgTTkwLjM1IDg5LjYgTDg2LjIgOTAuNzUgOTAuMzUgODkuNiBNNTkuMjUgNDMuMCBMNTkuOSA0My41IDYyLjcgNDUuOSBRNjYuMzUgNDguMiA2Ny42IDUwLjcgNjguMzUgNTIuMiA2OC4zNSA1NC42IDY4LjM1IDU2LjAgNjYuNSA1OC42NSA2NC40IDYxLjY1IDYyLjM1IDYxLjY1IEw2MC42NSA2MS42NSBRNTkuMiA2MS40IDU5LjAgNjAuMyBMNTAuNjUgNTkuMCA1MS4xIDU1LjE1IDU0LjE1IDU2LjQ1IDU0LjYgNTYuNjUgNTQuMDUgNTYuNzUgNTQuMCA1Ni44IDU0LjA1IDU2LjggNTQuNDUgNTYuODUgNTUuMDUgNTYuOCA1NS42NSA1Ny4wNSA1Ny40IDU3LjY1IDYxLjYgNTguOCA2MS45IDU4LjkgNjIuMTUgNTguOTUgNjIuMTUgNTkuMzUgNjIuMSA1OS40IDYyLjQ1IDU5LjQ1IFE2My4wIDU5LjQ1IDYzLjU1IDU5LjAgTDY1LjA1IDU4Ljc1IDY2LjEgNTguMSBRNjYuODUgNTcuMyA2Ny4xNSA1Ni4yNSBMNjYuNSA1NC40NSA2Ni4wIDUzLjMgNjYuMjUgNTIuMiBRNjYuMjUgNTAuNTUgNjMuNyA0OC41NSBMNTguNjUgNDQuNCBRNTcuMiA0Mi45NSA1MS44IDQwLjM1IDQ1LjMgMzcuMzUgNDIuNTUgMzUuOTUgTDM2LjAgMzEuOSAzMC4zNSAyOC4xNSBRMjYuNTUgMjUuOTUgMjEuNTUgMjQuMyAxOC4xNSAyMy4xNSAxOC4xNSAyMi41IEwxOC4yIDIyLjI1IDE4LjMgMjIuMjUgMjEuNyAyMy4wIDIxLjc1IDIzLjAgMjIuMTUgMjMuMjUgMjIuMzUgMjMuMzUgMjguMiAyNi41IDM0LjggMjkuOCAzOC4zNSAzMS42IFE0MS41NSAzMy4xIDQ0LjYgMzQuNyBMNDkuNyAzNy40IDQ5Ljk1IDM3LjU1IDUwLjUgMzcuODUgNTYuMTUgNDEuMDUgNTYuMyA0MS4xNSA1Ni43NSA0MS40IDU3LjMgNDEuNyA1OS4yNSA0My4wIE00MC43IDM5LjIgTDQwLjk1IDM4LjY1IFE0Mi4xNSAzNy4zNSA0Mi4xNSA0MC45NSA0Mi4xNSA0Mi4zNSA0MS40IDQ0LjYgNDAuMzUgNDcuNiAzOC45IDQ3LjYgMzguNDUgNDcuNiAzOC4yIDQ3LjIgTDM4LjAgNDYuNyBRMzguNzUgNDUuMDUgMzguNzUgNDQuMTUgTDM4LjggNDMuMzUgNDAuNyAzOS4yIE00OS4wNSA0NS42IEw0OS4xIDQ1LjYgNDguOSA0NS4wNSA0OS4wNSA0NS42IE01LjU1IDE0LjYgTDcuOCAxNi45IFE5LjUgMTguMTUgMTQuNDUgMTkuMSBMMTcuNzUgMjAuODUgMTkuODUgMjIuMCAxOC45NSAyMi4yNSBRMTcuNDUgMjIuMjUgMTUuMiAyMS41IEwxMi4xNSAyMC41IDEwLjU1IDIwLjMgOS43IDE5Ljg1IDcuMTUgMTguNTUgNS43NSAxNy45IDUuMjUgMTcuNjUgNC44IDE3LjIgMi41NSAxNS40IFExLjQ1IDE0Ljc1IC02LjY1IDExLjkgTC04LjggMTEuMTUgUS05Ljc1IDEwLjc1IC0xMC42NSAxMC41IEwtMTAuODUgMTAuNCAtMTQuMSA4Ljk1IFEtMTQuMSA2LjkgLTguMTUgOC43IEwtNy45NSA4Ljc1IC03Ljg1IDguOCAtNy4zIDkuMCAtNS42NSA5LjY1IFEtMi4yNSAxMS4wIDEuMDUgMTIuNDUgTDQuNCAxNC4wNSA1LjU1IDE0LjU1IDUuNTUgMTQuNiBNMTYuODUgMjcuMSBMMTcuNzUgMjcuMiBRMTguNiAyNy41NSAxOC42IDI4LjcgMTguNiAyOS43NSAxNy41IDMyLjYgMTYuMiAzNS45NSAxNS4wIDM1Ljk1IDEzLjggMzUuOTUgMTMuNCAzNC43IEwxMy4zNSAzNC4zNSAxNi44NSAyNy4xIE0xMi4yNSAzNi42IEwxMi4wNSAzNi45IDEyLjI1IDM2LjYgTTQ2LjU1IDUzLjA1IEw0Ni4zIDU2Ljc1IDQ2LjU1IDUzLjA1IE0yNi43NSAzOS4zNSBMMjcuOSAzNy4wIDI5LjQgMzMuOCBRMzAuNCAzMy4yIDMxLjMgMzMuNSAzMi4xNSAzMy44IDMyLjE1IDM0LjY1IDMyLjE1IDM1Ljg1IDMwLjkgMzkuMzUgMjkuNDUgNDMuMzUgMjguMiA0My4zNSAyNy4xNSA0My4zNSAyNi44IDQyLjIgTDI2LjY1IDQwLjk1IDI2Ljc1IDM5LjM1IE00NS41NSA2Mi40IEw0NS4zNSA2My4zNSA0NS41NSA2Mi40IiBmaWxsPSIjYWY2YTAzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xMDEuMjUgNDguMCBMOTcuOTUgNTEuODUgUTk0Ljg1IDU1LjI1IDkzLjQgNTUuMjUgOTIuNzUgNTUuMjUgOTIuNSA1NC43IEw5Mi4zNSA1NC4xIFE5Mi4zNSA1My41IDk0LjggNTAuMiBMOTguMTUgNDUuOSBROTkuNiA0NC4zIDEwNC40IDQyLjc1IEwxMDUuNjUgNDIuNCAxMTIuNzUgNDEuMjUgUTExMC4xNSA0My4xIDEwNi43IDQ0LjU1IEwxMDQuOSA0NS40NSBRMTAyLjU1IDQ2Ljc1IDEwMS4yNSA0OC4wIE04My4yNSA1MC45IEw4MS40NSA1MS4yNSBRNzkuNjUgNTEuMjUgNzcuMjUgNDkuNSA3NS4xIDQ3Ljk1IDc1LjEgNDcuNDUgNzUuMSA0NS4zIDc4LjAgNDYuNiA4Mi4xNSA0OC41IDgyLjYgNDguNSA4NC4zIDQ4LjUgODQuMzUgNDkuOSA4NC4zNSA1MC41IDgzLjI1IDUwLjkgTTQ5Ljk1IDM3LjU1IEw0OC42IDM2LjU1IDQ2LjY1IDM0LjkgNDkuODUgMzUuMDUgUTUxLjggMzYuMCA1MS44IDM3LjAgNTEuOCAzNy44NSA1MC41IDM3Ljg1IEw0OS45NSAzNy41NSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTAzLjAgODQuMTUgTDEwMy4xNSA4NC4xNSAxMDIuNSA4NC41NSAxMDMuMCA4NC4xNSBNMTExLjQ1IDcxLjg1IEwxMTEuNTUgNzEuNzUgMTExLjQ1IDcxLjkgMTExLjQ1IDcxLjg1IE01NS42NSA1Ny4wNSBMNTUuMDUgNTYuOCA1NS4xIDU2LjggNTUuNjUgNTcuMDUgTTUuMjUgMTcuNjUgTDUuNzUgMTcuOSA1LjMgMTcuNjUgNS4yNSAxNy42NSIgZmlsbD0iI2QyN2UwMiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNLTQuMCA3LjEgTC0xMS43IDIuMDUgLTExLjU1IDAuMTUgUS0xMS4zIC0xLjQ1IC0xMy4wIC0xLjcgTC0xNS42NSAtMC41IFEtMTYuNTUgLTAuMTUgLTE2Ljg1IDAuNyBMLTE4LjE1IDQuNyAtMTYuMyA1LjQgUS0xNC42NSA1LjA1IC0xMi45NSA1LjQ1IC0xMS4xNSA1LjY1IC05LjMgNi4xNSBMLTQuMCA3LjEgMC44NSA5LjcgUTQuNyAxMS44IDguNzUgMTMuNyBMMTYuMiAxNy4zNSAyMy4xNSAyMC44IDMwLjM1IDI0LjI1IDM3LjcgMjcuODUgUTQxLjg1IDI3LjggNDUuOCAyOS41IEw1Mi45IDMyLjYgNTkuNTUgMzYuMSA2Ni44NSA0MC4xNSBRNzAuNyA0Mi4xNSA3NC43NSA0My45NSA3Ny45NSA0NS4yNSA4MS4zIDQ2LjE1IEw4NS41IDQ3LjEgOTAuNTUgNDUuOTUgOTguOTUgNDMuMCAxMDYuMTUgNDAuMzUgMTA5LjUgMzkuNiBRMTEzLjggMzguNiAxMTcuOTUgMzkuNSAxMTguNDUgMzkuNjUgMTE4Ljk1IDM5Ljk1IDEyMC43NSA0MC45NSAxMjEuNSA0Mi45IDEyMi40NSA0NS4yNSAxMjIuNTUgNDguMDUgMTIyLjc1IDUyLjYgMTIxLjUgNTcuMCBMMTE5LjkgNjIuMCBRMTE4LjUgNjUuOSAxMTYuNTUgNjkuNzUgMTE0Ljc1IDczLjMgMTEyLjIgNzYuNDUgTDEwOC44IDgwLjQ1IDEwMy45IDg1LjM1IDEwMS44IDg3LjAgOTYuOSA5MC40IFE5My4zNSA5Mi42NSA4OS4yNSA5My43IDg0LjQ1IDk0Ljg1IDc5LjUgOTQuNiA3Ny42NSA5NC41NSA3NS45IDkzLjYgNzMuOTUgOTIuNiA3My4xNSA5MC41NSA3Mi4yIDg4LjEgNzIuMzUgODUuNCBMNzIuOCA3OC45NSA3My4yIDczLjggNzMuNSA2OC42NSA3My40IDYzLjQ1IFE3My4zNSA2Mi4zIDcyLjIgNjEuMCA3MS4yIDYyLjUgNjkuOCA2My40IDY4LjE1IDY0LjQgNjUuOTUgNjQuNTUgTDYxLjg1IDY0LjM1IFE1Ny4yIDYzLjMgNTIuOSA2MS42NSBMNTAuNSA2MC43NSA1MC4xIDY3LjE1IDUwLjMgNzAuMzUgNDguMTUgNjkuOSA0NS4yNSA2OS4zIDQ0LjMgNjkuMSA0NS4yIDY0LjI1IDQ1LjM1IDYzLjM1IDQ1LjU1IDYyLjQgNDYuMTUgNTguOSA0My4yIDU3LjU1IDM3LjM1IDU0LjggMzAuOSA1MS43IDIzLjUgNDcuOSAxNS4xNSA0My40NSAxMC43IDQxLjAgNC4zNSAzNy40IC0xLjMgMzQuMTUgLTcuOTUgMjkuOTUgUS0xMi4wIDI3LjMgLTE1LjggMjQuMjUgTC0xOS4wNSAyMS4zIC0yMS44NSAxNy43IFEtMjIuOCAxNi4yIC0yMy4wNSAxNC41NSAtMjMuMTUgMTMuNSAtMjIuNzUgMTIuNSAtMjIuMCA4LjM1IC0yMC4zNSA2Ljk1IEwtMjAuMTUgNi44IFEtMTguNiA1LjU1IC0xNi4zIDUuNCBNODcuMzUgNzUuNiBMOTEuMCA2OS4zIFE5NC4zNSA2My4zIDEwMC45NSA1NS41NSAxMDQuMiA1MS43IDEwNi43NSA0OS40IEwxMDguMjUgNDguMiBRMTA5Ljk1IDQ2Ljg1IDExMi4xNSA0Ni4wIEwxMTIuMiA0Ni4xIDExMi4yIDQ2LjAgMTE2LjQ1IDQ1Ljc1IDExNy45NSA0Ni41IDExOC44NSA0Ny4xNSBNMTEyLjE1IDQ2LjAgTDExMS44NSA1MC42NSBRMTEwLjk1IDU1LjA1IDEwOS4wIDYwLjI1IE04Ny4zNSA3NS42IEw4Ny4zIDc1Ljc1IDg2LjMgNzcuMzUgODQuNSA4MC4zNSBRODAuNCA4Ny41NSA4MC40IDkwLjA1IDgwLjQgOTAuNzUgODEuMTUgOTEuMjUgODEuOSA5MS43IDgyLjggOTEuNyBMODYuMiA5MC43NSA5MC4zNSA4OS42IE03Mi45IDU5LjcgTDcyLjIgNjEuMCA3MS45NSA2MC44IE0zNy43IDI3Ljg1IEwzOC4xNSAyOC4xNSA0Mi4wIDMwLjEgNDguMiAzMy41NSA1Ni4yNSAzOC40NSA2MC44IDQxLjMgUTY0LjQgNDMuNiA2Ny4zIDQ2LjYgTDY4LjMgNDcuNjUgUTY5LjkgNDkuNSA3MS4xIDUxLjU1IEw3Mi4zIDUzLjkgNzMuMSA1NS44NSA3My40NSA1Ny41NSBRNzMuNDUgNTguNDUgNzMuMDUgNTkuMyBMNzIuOSA1OS43IE01MC42NSA1OS4wIEw1MC41IDYwLjc1IE02Ni4wIDUzLjMgTDY2LjUgNTQuNDUgNjcuMTUgNTYuMjUgUTY2Ljg1IDU3LjMgNjYuMSA1OC4xIEw2NS4wNSA1OC43NSA2My41NSA1OS4wIDYyLjE1IDU4Ljk1IE02MS45IDU4LjkgTDYxLjYgNTguOCA1Ny40IDU3LjY1IDU1LjY1IDU3LjA1IDU1LjA1IDU2LjggNTQuNiA1Ni42NSA1NC4xNSA1Ni40NSA1MS4xIDU1LjE1IDUwLjY1IDU5LjAgTTQ3LjcgNDIuODUgTDQ4LjA1IDM5LjcgNDUuNyAzOC41IDQwLjQgNTAuMDUgNDQuNSA1Mi4wNSA0NS42NSA1Mi42IDQ2LjU1IDUzLjA1IDQ3LjUgNDQuOCBNNDcuNSA0NC42IEw0Ny43IDQyLjg1IE01Mi40IDQ2LjIgTDUyLjk1IDQyLjQgNDguMDUgMzkuNyBNMzguOCA0My4zNSBMMzYuNiA0OC4yIDQwLjQgNTAuMDUgTTUyLjQgNDYuMiBMNTIuMzUgNDYuNiA1MS4xIDU1LjE1IE02Ni4wIDUzLjMgUTY0LjQ1IDQ5Ljk1IDYxLjQgNDcuNyBMNTguNDUgNDUuNiA1Mi45NSA0Mi40IE00MC43IDM5LjIgTDQxLjkgMzYuNSAzNS40NSAzMy4xNSAyOS43IDQ0LjggMzYuNiA0OC4yIE00MS45IDM2LjUgTDQ1LjcgMzguNSBNLTEwLjg1IDEwLjQgTC0xMC42NSAxMC41IFEtOS43NSAxMC43NSAtOC44IDExLjE1IEwtNi4wIDEyLjM1IFEtMy4yNSAxMy42IC0wLjUgMTQuOTUgTDUuMjUgMTcuNjUgNS43NSAxNy45IDcuMTUgMTguNTUgOS43IDE5Ljg1IDEwLjU1IDIwLjMgMTguMjUgMjQuMiAyMS44NSAyNi4wIDMxLjAgMzAuODUgMzUuNDUgMzMuMTUgTTEzLjM1IDM0LjM1IEwxMi4yNSAzNi42IDE1LjY1IDM4LjE1IDIxLjg1IDI2LjAgTTEyLjA1IDM2LjkgTDEyLjI1IDM2LjYgNy4yNSAzMy45NSBRNC42IDMyLjcgMi4xIDMxLjI1IEwtMi45IDI4LjMgLTcuOTUgMjUuMiAtMTIuMiAyMi40NSAtMTguODUgMTcuMzUgLTE5LjAgMTcuMTUgLTIwLjQ1IDE1LjA1IFEtMjAuOCAxNC4zNSAtMjAuNzUgMTMuNjUgLTIwLjQ1IDEwLjk1IC0xOS4wIDguNTUgTC0xNC4zNSA5LjQgLTEwLjg1IDEwLjQgTTQ2LjMgNTYuNzUgTDQ2LjU1IDUzLjA1IE0xMy4zNSAzNC4zNSBMMTYuODUgMjcuMSAxOC4yNSAyNC4yIE0xNS42NSAzOC4xNSBMMTguNDUgMzkuNDUgMjQuOTUgNDIuNSAyNi43NSAzOS4zNSAyNy45IDM3LjAgMjkuNCAzMy44IDMxLjAgMzAuODUgTTI5LjcgNDQuOCBMMjQuOTUgNDIuNSBNNDYuMTUgNTguOSBMNDYuMyA1Ni43NSBNMzguOCA0My4zNSBMNDAuNyAzOS4yIE0tMjIuNzUgMTIuNSBMLTIyLjYgMTIuMTUgUS0yMS4zNSA5LjcgLTE5LjAgOC41NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  baton: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNTQuNHB4IiB3aWR0aD0iMTM3LjdweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAyNC4zNSwgLTAuNjAwMDAwMDAwMDAwMDAwMSkiPg0KICAgIDxwYXRoIGQ9Ik0tMjIuNDUgMy44NSBMLTIxLjY1IDEuNiA1Mi44NSAyOC4wNSA1Mi41NSAyOS4zIDUyLjg1IDI4LjA1IDExMi4wIDQ5LjE1IDExMi4zNSA0OS4xIDExMS40IDUxLjg1IC0yMi40NSAzLjg1IiBmaWxsPSIjNmI1YTUwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xMTEuNCA1MS44NSBMMTEwLjYgNTQuMCA1MS42NSAzMy4wIC0yMy4zNSA2LjMgLTIyLjQ1IDMuODUgMTExLjQgNTEuODUiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTS0yMi40NSAzLjg1IEwtMjEuNjUgMS42IDUyLjg1IDI4LjA1IDUyLjU1IDI5LjMgNTIuODUgMjguMDUgMTEyLjAgNDkuMTUgMTEyLjM1IDQ5LjEgMTExLjQgNTEuODUgMTEwLjYgNTQuMCA1MS42NSAzMy4wIC0yMy4zNSA2LjMgLTIyLjQ1IDMuODUgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  halbard: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iOTcuNTVweCIgd2lkdGg9IjIzNC4ycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMCwgMC4wLCAwLjAsIDEuMCwgMzUuMzUsIDQuMzUpIj4NCiAgICA8cGF0aCBkPSJNLTMzLjEgLTAuNTUgTC0zMi4xIC0zLjM1IC0zMC40NSAtMi44IC0zMS40NSAwLjA1IC0zMy4xIC0wLjU1IE0xMTUuOCA0OS4zIFExMTguMjUgNDcuNCAxMjEuMzUgNDcuMjUgTDEyMy4zIDUwLjUgUTEyOS44NSA1My41IDEzNi43IDU1Ljg1IEwxNDkuMDUgNjAuMCAxNjMuMSA2NC41IFExNzAuMiA2Ni43NSAxNzcuNTUgNjguMTUgTDE5MS40IDcwLjYgMTkxLjcgNzAuNjUgMTkzLjcgNzAuODUgMTkxLjcgNzMuNiAxODcuOTUgNzcuNiBRMTg2LjAgODAuMSAxODQuMzUgODEuNCAxODAuNyA4NC4xNSAxNzYuMSA4NC4xNSBMMTY5LjcgODIuNjUgUTE2OC42NSA4Mi42NSAxNjYuMCA4My41NSAxNjMuNCA4NC40NSAxNjEuNCA4NC40NSAxNTcuNjUgODQuNDUgMTUxLjI1IDgwLjAgMTQ0Ljg1IDc1LjUgMTQwLjYgNzUuNSAxMzUuMTUgNzUuNSAxMzIuNCA3MS43NSAxMjkuOCA2Ni44NSAxMjcuOTUgNjQuNTUgMTI3LjQ1IDY0LjAgMTIzLjE1IDYyLjE1IEwxMjEuNiA2MS4yNSAxMjAuOCA1OS44NSAxMjAuMTUgNTguMCAxMTkuNzUgNTguNyAxMTcuNTUgNTkuOCAxMTUuNyA2MC45NSAxMTQuOTUgNTkuNiBRMTEzLjUgNjEuNDUgMTEwLjM1IDYzLjg1IDEwNC4xNSA2OC42IDk5LjMgNjguNiA5Mi44NSA2OC42IDg3LjE1IDY0LjkgTDg1LjggNjQuMCBRODMuNTUgNjEuMjUgODIuOSA1Ny43NSBMODIuNjUgNTYuMTUgUTgzLjEgNTcuMyA4My43IDU4LjMgODUuNSA2MS4yNSA4OC42NSA2Mi44IDkyLjkgNjQuOCA5Ny41NSA2My4zIDEwMi4wNSA2MS45NSAxMDYuMzUgNTkuOSAxMDkuMDUgNTguNSAxMTAuMzUgNTUuNyBMMTEwLjkgNTQuNTUgMTExLjcgNTQuOCAxMTEuNyA1NC43IDExMi41IDU1LjA1IDExMi44IDU0LjU1IDExNC4yIDUyLjM1IDExNC4zIDUyLjEgMTE0LjIgNTIuMzUgMTE0LjE1IDUyLjM1IDExNC4zIDUyLjEgMTE1LjggNDkuNCAxMTYuMSA0OS40NSAxMTUuOSA0OS4zNSAxMTUuOCA0OS4zIE0xMjEuNCA1NS40IEwxMjguNSA1OC41IFExMzMuOTUgNjAuOSAxNDEuMjUgNjMuNCAxNDguNTUgNjUuOSAxNjIuNCA2OS42NSAxNzYuMiA3My40IDE3Ni4yIDcxLjY1IEwxNzYuMCA3MS4xIFExNzMuMjUgNzAuNjUgMTUwLjQgNjMuMiAxMjcuNSA1NS43NSAxMjIuNSA1Mi45IEwxMjIuNDUgNTIuODUgMTIxLjQgNTUuNCAxMjEuMyA1NS41NSAxMjAuMTUgNTguMCAxMjEuMyA1NS41NSAxMjEuNCA1NS40IE0xMTQuOTUgNTkuNiBMMTE0LjkgNTkuNTUgMTE0LjA1IDU3LjggMTEyLjggNTQuNTUgMTE0LjA1IDU3LjggMTE0LjkgNTkuNTUgMTE0Ljk1IDU5LjYgTTEyMy4zIDUwLjUgTDEyMy4wNSA1MS4yIDEyMi41IDUyLjkgMTIzLjA1IDUxLjIgMTIzLjMgNTAuNSIgZmlsbD0iI2UwZThlYiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTkzLjcgNzAuODUgTDE5Ny44NSA3MS43IFExOTMuNTUgNzkuMDUgMTg3LjkgODUuMiAxODUuMDUgODguMjUgMTgxLjEgODkuOCAxNzYuNSA5MS43IDE3MS41IDkyLjAgMTY1LjU1IDkyLjYgMTU5LjcgOTEuMyBMMTU0LjA1IDkwLjI1IFExNDkuMjUgODkuNCAxNDQuOTUgODcuMDUgMTQwLjM1IDg0LjYgMTM2LjM1IDgxLjUgMTI3LjI1IDc0LjM1IDEyMS4zIDY0LjYgMTE5LjQgNjguNiAxMTUuMzUgNzEuMjUgMTEyLjEgNzMuNDUgMTA4LjI1IDczLjc1IDEwMS43NSA3NC4wNSA5NS44NSA3MS40NSA5MC4xNSA2OC45NSA4Ni4xNSA2NC40IEw4NS44IDY0LjAgODcuMTUgNjQuOSBROTIuODUgNjguNiA5OS4zIDY4LjYgMTA0LjE1IDY4LjYgMTEwLjM1IDYzLjg1IDExMy41IDYxLjQ1IDExNC45NSA1OS42IEwxMTUuNyA2MC45NSAxMTcuNTUgNTkuOCAxMTkuNzUgNTguNyAxMjAuMTUgNTguMCAxMjAuOCA1OS44NSAxMjEuNiA2MS4yNSAxMjMuMTUgNjIuMTUgUTEyNy40NSA2NC4wIDEyNy45NSA2NC41NSAxMjkuOCA2Ni44NSAxMzIuNCA3MS43NSAxMzUuMTUgNzUuNSAxNDAuNiA3NS41IDE0NC44NSA3NS41IDE1MS4yNSA4MC4wIDE1Ny42NSA4NC40NSAxNjEuNCA4NC40NSAxNjMuNCA4NC40NSAxNjYuMCA4My41NSAxNjguNjUgODIuNjUgMTY5LjcgODIuNjUgTDE3Ni4xIDg0LjE1IFExODAuNyA4NC4xNSAxODQuMzUgODEuNCAxODYuMCA4MC4xIDE4Ny45NSA3Ny42IEwxOTEuNyA3My42IDE5My43IDcwLjg1IE0tMzIuNyAzLjQ1IEwtMzQuMzUgMi45IC0zMy4xIC0wLjU1IC0zMS40NSAwLjA1IC0zMi43IDMuNDUgTTEyMi40NSA1Mi44NSBMMTIyLjUgNTIuOSBRMTI3LjUgNTUuNzUgMTUwLjQgNjMuMiAxNzMuMjUgNzAuNjUgMTc2LjAgNzEuMSBMMTc2LjIgNzEuNjUgUTE3Ni4yIDczLjQgMTYyLjQgNjkuNjUgMTQ4LjU1IDY1LjkgMTQxLjI1IDYzLjQgMTMzLjk1IDYwLjkgMTI4LjUgNTguNSBMMTIxLjQgNTUuNCAxMjIuNDUgNTIuODUiIGZpbGw9IiNiOGM5Y2YiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTExMC45IDU0LjU1IEwtMzIuNyAzLjQ1IC0zMS40NSAwLjA1IDgxLjQ1IDQwLjQ1IDExNC4zIDUyLjEgMTE0LjE1IDUyLjM1IDExNC4yIDUyLjM1IDExMi44IDU0LjU1IDExMi41IDU1LjA1IDExMS43IDU0LjcgMTExLjcgNTQuOCAxMTAuOSA1NC41NSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTE1LjggNDkuNCBMMTE1LjkgNDkuMzUgMTE2LjEgNDkuNDUgMTE1LjggNDkuNCIgZmlsbD0iIzcyNTMyNyIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNLTMwLjQ1IC0yLjggTDExNS44IDQ5LjMgMTE1LjkgNDkuMzUgMTE1LjggNDkuNCAxMTQuMyA1Mi4xIDgxLjQ1IDQwLjQ1IC0zMS40NSAwLjA1IC0zMC40NSAtMi44IiBmaWxsPSIjNmI1YTUwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0tMzMuMSAtMC41NSBMLTMyLjEgLTMuMzUgLTMwLjQ1IC0yLjggMTE1LjggNDkuMyBRMTE4LjI1IDQ3LjQgMTIxLjM1IDQ3LjI1IEwxMjMuMyA1MC41IFExMjkuODUgNTMuNSAxMzYuNyA1NS44NSBMMTQ5LjA1IDYwLjAgMTYzLjEgNjQuNSBRMTcwLjIgNjYuNzUgMTc3LjU1IDY4LjE1IEwxOTEuNCA3MC42IDE5MS43IDcwLjY1IDE5My43IDcwLjg1IDE5Ny44NSA3MS43IFExOTMuNTUgNzkuMDUgMTg3LjkgODUuMiAxODUuMDUgODguMjUgMTgxLjEgODkuOCAxNzYuNSA5MS43IDE3MS41IDkyLjAgMTY1LjU1IDkyLjYgMTU5LjcgOTEuMyBMMTU0LjA1IDkwLjI1IFExNDkuMjUgODkuNCAxNDQuOTUgODcuMDUgMTQwLjM1IDg0LjYgMTM2LjM1IDgxLjUgMTI3LjI1IDc0LjM1IDEyMS4zIDY0LjYgMTE5LjQgNjguNiAxMTUuMzUgNzEuMjUgMTEyLjEgNzMuNDUgMTA4LjI1IDczLjc1IDEwMS43NSA3NC4wNSA5NS44NSA3MS40NSA5MC4xNSA2OC45NSA4Ni4xNSA2NC40IEw4NS44IDY0LjAgUTgzLjU1IDYxLjI1IDgyLjkgNTcuNzUgTDgyLjY1IDU2LjE1IFE4My4xIDU3LjMgODMuNyA1OC4zIDg1LjUgNjEuMjUgODguNjUgNjIuOCA5Mi45IDY0LjggOTcuNTUgNjMuMyAxMDIuMDUgNjEuOTUgMTA2LjM1IDU5LjkgMTA5LjA1IDU4LjUgMTEwLjM1IDU1LjcgTDExMC45IDU0LjU1IC0zMi43IDMuNDUgLTM0LjM1IDIuOSAtMzMuMSAtMC41NSBNLTMxLjQ1IDAuMDUgTC0zMC40NSAtMi44IE0tMzIuNyAzLjQ1IEwtMzEuNDUgMC4wNSBNMTE0LjMgNTIuMSBMMTE1LjggNDkuNCBNMTE1LjkgNDkuMzUgTDExNS44IDQ5LjMgTTEyMC4xNSA1OC4wIEwxMTkuNzUgNTguNyAxMTcuNTUgNTkuOCAxMTUuNyA2MC45NSAxMTQuOTUgNTkuNiAxMTQuOSA1OS41NSAxMTQuMDUgNTcuOCAxMTIuOCA1NC41NSAxMTQuMiA1Mi4zNSAxMTQuMyA1Mi4xIE0xMjIuNDUgNTIuODUgTDEyMS40IDU1LjQgMTIxLjMgNTUuNTUgMTIwLjE1IDU4LjAgTTExNi4xIDQ5LjQ1IEwxMTUuOSA0OS4zNSBNMTExLjcgNTQuNyBMMTEyLjUgNTUuMDUgMTEyLjggNTQuNTUgTTExMC45IDU0LjU1IEwxMTEuNyA1NC44IE0xMjIuNSA1Mi45IEwxMjMuMDUgNTEuMiAxMjMuMyA1MC41IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0KPCEtLSAxIC0tPg==',
  lance: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNTkuNDVweCIgd2lkdGg9IjE1NC44NXB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAsIDAuMCwgMC4wLCAxLjAsIDI1LjYsIC0wLjE5OTk5OTk5OTk5OTk5OTk2KSI+DQogICAgPHBhdGggZD0iTTg4LjMgNDAuODUgTDg4LjUgNDAuOSA5OC45NSA0MC42IDEyNi41NSA1Ny42IDEwNC43IDQ5LjQgODcuMTUgNDIuOSA4OC4zIDQwLjg1IE0tMjEuNjUgMS42IEwtMjIuNCAzLjc1IC0yMy42NSAzLjMgLTIyLjkgMS4yIC0yMS42NSAxLjYiIGZpbGw9IiNlMGU4ZWIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTg4LjM1IDQwLjggTDg4LjMgNDAuODUgODcuMTUgNDIuOSA4NS44IDQyLjQgLTIyLjQgMy43NSAtMjEuNjUgMS42IDg2LjM1IDQwLjA1IDg4LjM1IDQwLjgiIGZpbGw9IiM2YjVhNTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTg4LjMgNDAuODUgTDg4LjM1IDQwLjggODguNSA0MC45IDg4LjMgNDAuODUiIGZpbGw9IiM3MjUzMjciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTS0yMi40IDMuNzUgTDg1LjggNDIuNCA4Ny4xNSA0Mi45IDg1LjggNDUuMSA4NS4yIDQ0Ljg1IDg1LjIgNDQuOSAtMjMuMzUgNi4zIC0yMi40IDMuNzUiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEyNi41NSA1Ny42IEwxMjguMjUgNTguNjUgOTEuODUgNTIuMyA4Ni40NSA0Ni4xNSA4NS4zNSA0NS44IDg1LjggNDUuMSA4Ny4xNSA0Mi45IDEwNC43IDQ5LjQgMTI2LjU1IDU3LjYgTS0yMy4zNSA2LjMgTC0yNC42IDUuOSAtMjMuNjUgMy4zIC0yMi40IDMuNzUgLTIzLjM1IDYuMyIgZmlsbD0iI2I4YzljZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNODguMyA0MC44NSBMODguNSA0MC45IDg4LjM1IDQwLjggODYuMzUgNDAuMDUgLTIxLjY1IDEuNiAtMjIuNCAzLjc1IC0yMy4zNSA2LjMgLTI0LjYgNS45IC0yMy42NSAzLjMgLTIyLjkgMS4yIC0yMS42NSAxLjYgTTg3LjE1IDQyLjkgTDg4LjMgNDAuODUgTTg1LjggNDUuMSBMODUuMzUgNDUuOCA4Ni40NSA0Ni4xNSA5MS44NSA1Mi4zIDEyOC4yNSA1OC42NSAxMjYuNTUgNTcuNiA5OC45NSA0MC42IDg4LjUgNDAuOSBNODcuMTUgNDIuOSBMODUuOCA0NS4xIDg1LjIgNDQuODUgTTg1LjIgNDQuOSBMLTIzLjM1IDYuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  trident: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNzIuNzVweCIgd2lkdGg9IjE1My43cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMCwgMC4wLCAwLjAsIDEuMCwgMjUuNiwgLTAuMTk5OTk5OTk5OTk5OTk5OTYpIj4NCiAgICA8cGF0aCBkPSJNMTI2LjIgMzkuOCBMMTIyLjcgNDMuNCAxMjAuNSAzOS42NSA5Ny45IDM0LjY1IDkzLjg1IDM5LjUgMTEyLjY1IDUzLjAgODYuMSA0NS4zNSA4Ni4xIDQ1LjMgOTYuNTUgNDYuMzUgODcuMTUgNDIuOCA4OS41NSAzOC44NSA5MS4yIDM2LjQgOTIuMjUgMzQuOTUgOTYuMTUgMzEuNTUgMTI2LjIgMzkuOCBNOTAuMDUgNTAuNiBMOTAuMiA1Ni44NSAxMTAuOSA2Ny4yIDExNC45NSA2NS42NSAxMTUuMzUgNzAuNiA4NS4yNSA1Ny4wNSA4NS4yNSA1MC42IDkwLjA1IDUwLjYgTS0yMy4zNSA2LjMgTC0yNC42IDUuOSAtMjIuOSAxLjIgLTIxLjY1IDEuNiAtMjIuMzUgMy42IC0yMy4zNSA2LjMiIGZpbGw9IiNlMGU4ZWIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTExMi42NSA1My4wIEw5MC4xIDUwLjQ1IDkwLjA1IDUwLjQ1IDkwLjA1IDUwLjYgODUuMjUgNTAuNiA4NS4yNSA1Ny4wNSAxMTUuMzUgNzAuNiAxMTUuNDUgNzEuOTUgODEuNyA2MC4wIDgyLjIgNDUuNDUgODEuOCA0My43NSA4Mi43IDQxLjM1IDgzLjUgMzkuMCA5My4zNSAyNi44IDEyNy4xIDM4LjggMTI2LjIgMzkuOCA5Ni4xNSAzMS41NSA5Mi4yNSAzNC45NSA5MS4yIDM2LjQgODkuNTUgMzguODUgODcuMTUgNDIuOCA5Ni41NSA0Ni4zNSA4Ni4xIDQ1LjMgODYuMSA0NS4zNSAxMTIuNjUgNTMuMCIgZmlsbD0iI2I4YzljZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNLTIxLjY1IDEuNiBMMzcuNTUgMjIuNiA4My41IDM5LjAgODIuNyA0MS4zNSAtMjIuMzUgMy42IC0yMS42NSAxLjYiIGZpbGw9IiNmZmNjMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTgxLjggNDMuNzUgTDM2LjM1IDI3LjU1IC0yMy4zNSA2LjMgLTIyLjM1IDMuNiA4Mi43IDQxLjM1IDgxLjggNDMuNzUiIGZpbGw9IiNkZTlmMTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEyNi4yIDM5LjggTDEyMi43IDQzLjQgMTIwLjUgMzkuNjUgOTcuOSAzNC42NSA5My44NSAzOS41IDExMi42NSA1My4wIDkwLjEgNTAuNDUgOTAuMDUgNTAuNDUgOTAuMDUgNTAuNiA5MC4yIDU2Ljg1IDExMC45IDY3LjIgMTE0Ljk1IDY1LjY1IDExNS4zNSA3MC42IDExNS40NSA3MS45NSA4MS43IDYwLjAgODIuMiA0NS40NSA4MS44IDQzLjc1IDM2LjM1IDI3LjU1IC0yMy4zNSA2LjMgLTIyLjM1IDMuNiAtMjEuNjUgMS42IDM3LjU1IDIyLjYgODMuNSAzOS4wIDkzLjM1IDI2LjggMTI3LjEgMzguOCAxMjYuMiAzOS44IE04MS44IDQzLjc1IEw4Mi43IDQxLjM1IDgzLjUgMzkuMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  whip: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNjguMnB4IiB3aWR0aD0iODIuNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAsIDAuMCwgMC4wLCAxLjAsIDM0LjQ1LCAtMC4xOTk5OTk5OTk5OTk5OTk5NikiPg0KICAgIDxwYXRoIGQ9Ik04LjggMTEuNTUgTDEzLjEgMTIuNzUgMTYuMyAxMy44NSAyMC4xIDE0LjkgUTIxLjQ1IDE0LjkgMjUuNSAxNy41IDMwLjIgMjAuNTUgMzQuNSAyNC43NSA0Mi4wIDMyLjEgNDQuOSAzOS43IDQ2LjU1IDQ0LjkgNDYuOSA1MC41NSA0Ny40IDU5LjQ1IDQwLjMgNjQuMCAzMi42IDY4Ljg1IDIzLjggNjYuNzUgMTUuMSA2NC43NSAxMC40IDU3LjAgNi4xNSA1MC4wIDQuNSA0Mi4wNSAzLjIgMzUuMjUgMy4yIDI2LjkgMS4yIDE4LjggLTEuMDUgMTUuNzUgLTEuODUgMTQuNjUgLTQuMjUgMTQuMDUgTC03LjggMTMuNTUgUS0xMy40NSAxMy41NSAtMjEuMyAxNy40IC0yOS43IDIxLjQ1IC0yOS43IDI1LjE1IC0yOS43IDI2LjIgLTMwLjYgMjYuNyBMLTMxLjY1IDI3LjAgUS0zMi40IDI3LjAgLTMzLjAgMjUuOTUgTC0zMy40NSAyNC41NSBRLTMzLjQ1IDIyLjggLTI4LjQ1IDE5LjE1IC0yNC4xNSAxNi4wNSAtMjAuOSAxNC42IC0xNi4zNSAxMi41NSAtMTQuMCAxMS45NSAtMTEuMzUgMTEuMjUgLTcuNSAxMS4yNSAtMC4wNSAxMS4yNSAzLjM1IDE5LjYgNC45NSAyMy42IDcuNCAzNy45IEw4LjE1IDQxLjggOS4wNSA0NS43IFExMS4yIDU0LjY1IDE5LjY1IDU5LjU1IDI3LjUgNjQuMCAzNS43NSA1OS41NSAzNy43IDU4LjQ1IDM4LjcgNTYuMyA0Mi42IDQ4LjQgMzguMCA0MC4xIDM1LjEgMzQuMSAyOS4zIDI4LjM1IDE5LjM1IDE4LjUgMTAuNTUgMTYuODUgOC4zIDE2LjQ1IDIuOCAxMy42NSAtMi41NSAxMC45NSAtNC45NSAxMC42NSAtOC43IDEwLjIgLTEzLjc1IDguMjUgLTE5LjggNS45NSAtMTkuOCAzLjkgLTE5LjggMi4yIC0xOC41IDEuNSBMLTE3LjE1IDEuMiBRLTE2LjAgMS4yIC0xMi41IDIuNSBMLTkuMTUgMy43NSBRLTguMiAzLjc1IDQuNSA5LjkgTDYuMyAxMC44IDguOCAxMS41NSIgZmlsbD0iIzU0NTY1NiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgPC9nPg0KPC9zdmc+DQo8IS0tIDEgLS0+',
  noodleBowl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNDEuM3B4IiB3aWR0aD0iNDYuM3B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAsIDAuMCwgMC4wLCAxLjAsIDIwLjM1LCAtNC4zKSI+DQogICAgPHBhdGggZD0iTS0xOC4xIDI3LjEgTC0xOC4xNSAyNy4xIC0xOC4yNSAyNi41NSAtMTguMSAyNy4xIiBmaWxsPSIjOTdjZjQxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0tMTMuMiAzNS40IEwtMTMuMTUgMzUuNCAtMTMuMTUgMzUuNDUgLTEzLjIgMzUuNCBNLTUuMzUgNDAuNTUgTC01LjMgNDAuNSAtNS4xNSA0MC42NSAtNS4zNSA0MC41NSBNLTIuOSAzOC43NSBMLTMuNjUgMzguOTUgLTIuOTUgMzguNzUgLTIuOSAzOC43NSIgZmlsbD0iI2NjZWU5OSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTMuOTUgMjAuMzUgTDEyLjQ1IDE5LjA1IDguMCAxNi4wIFE1LjU1IDE0LjUgMi45IDEzLjI1IEwxLjM1IDEyLjU1IC0wLjk1IDExLjY1IC0xLjA1IDExLjYgLTIuNTUgMTEuMDUgLTQuOTUgMTAuMiAtNS42NSA5Ljk1IC03LjY1IDkuMjUgLTkuOCA4LjU1IC0xMS42IDcuOTUgUS00LjA1IDIyLjIgNy40NSAyNi43NSAxOC45IDMxLjMgMjIuNCAzMC43NSBMMjIuNTUgMzAuMTUgMjIuMDUgMjkuOCAyMi4wNSAyOS43NSAyMS45NSAyOS4yNSAxOS4yNSAyNS42NSAxOC4wIDI0LjI1IDE3LjIgMjMuNCAxNS44IDIyLjAgMTQuNzUgMjEuMDUgMTMuOTUgMjAuMzUgTS0xOS4yNSAxOS42IFEtMTkuMSAxNy42NSAtMTguMzUgMTUuNyAtMTcuMDUgMTIuMiAtMTUuMzUgOC45IEwtMTUuMyA4LjggLTEzLjI1IDUuMyAtNy4wIDYuMjUgLTQuNyA2LjggLTMuOCA3LjA1IFEtMC4wNSA4LjEgMy40IDkuODUgTDkuNjUgMTMuNDUgMTUuNCAxNy40IFExOC4yNSAxOS40IDIwLjY1IDIxLjk1IDIzLjAgMjQuNDUgMjQuMjUgMjcuMyAyNS41IDMwLjE1IDI0LjU1IDMyLjIgTDI0LjUgMzIuNCAyNC4yIDMyLjk1IDI0LjQ1IDMyLjQgMjIuOTUgMzIuNSAyMS42NSAzMi43NSAyMS41NSAzMi4zNSAyMS4zIDMyLjI1IFEyMC45IDMyLjI1IDIwLjY1IDMyLjkgTDE4LjUgMzMuMiBRMTguNCAzMS43NSAxNy4xNSAzMS43NSAxNS42NSAzMS43NSAxNC42NSAzMi45NSBMMTEuMyAzMi4yIFExMS4wNSAyOS44NSA4Ljk1IDMxLjMgTDguOSAzMS4zNSA4LjQgMzEuMTUgOC42NSAyOS44NSA4LjYgMjkuNCA4LjUgMjkuNCA4LjM1IDI4LjY1IDYuNTUgMjguNiBRNS42NSAyOC42IDQuMjUgMzAuNjUgTDMuOTUgMzEuMTUgMi4yIDMyLjI1IFEyLjk1IDMwLjMgMi45NSAyOC45NSBMMi45NSAyOC43IDMuMjUgMjcuNiBRMy4yNSAyNC42IC0wLjU1IDI2LjQgLTQuNCAyOC4yIC00LjQgMzEuMCBMLTQuMjUgMzEuNCAtMy44NSAzMS4zNSBRLTUuMSAzMi45IC01Ljc1IDM0LjMgLTcuODUgMzMuNyAtOS43NSAzMi41IC04LjcgMzEuMjUgLTcuODUgMjkuMDUgTC03LjggMjkuMCAtNy4yIDI5LjE1IC02LjggMjkuMSAtNi44IDI5LjA1IFEtNi43NSAyNy45IC01LjM1IDI1LjMgTC0zLjkgMjIuNiBRLTMuODUgMjIuMDUgLTQuMSAyMS41NSAtNC42IDIwLjU1IC02LjI1IDIwLjU1IEwtNi44IDIxLjA1IFEtNy4xIDIwLjMgLTcuNyAyMC4yNSAtOC43NSAyMC4yIC0xMC40IDIyLjA1IEwtMTEuNTUgMjMuNTUgLTExLjY1IDIzLjEgUS0xMS42NSAyMi4wNSAtOS45NSAxOS42NSBMLTguMyAxNy4xNSBRLTguMyAxNi45IC04Ljg1IDE1Ljk1IC05LjUgMTQuOCAtMTAuMTUgMTQuOCBMLTExLjU1IDE0Ljk1IC0xMS40IDE0LjI1IFEtMTEuNCAxMi4yIC0xMi40NSAxMi40IC0xMy4xIDEyLjUgLTEzLjkgMTMuMzUgLTEzLjE1IDExLjU1IC0xMy4xNSAxMC44NSBMLTEzLjI1IDEwLjQgLTEzLjUgMTAuMjUgUS0xNC4yNSAxMC44NSAtMTUuNDUgMTMuNyBMLTE2LjUgMTYuOSAtMTYuNDUgMTcuMSBRLTE3Ljc1IDE5LjU1IC0xOC4wNSAyMi4xIEwtMTkuMjUgMTkuNiBNNy4yIDMwLjc1IEw1LjggMzAuMyBRNi4xNSAyOS45IDYuNDUgMjkuOSBMNy4zNSAzMC4wIDcuMzUgMzAuMDUgNy4yIDMwLjc1IE0xLjEgMjYuOSBRMC4wIDI3LjM1IC0xLjcgMjkuMCBMLTMuMjUgMzAuNiAtMi4xIDI4LjggUS0wLjk1IDI2LjggMC4xNSAyNi44IEwxLjEgMjYuOSBNLTEyLjI1IDE3LjA1IFEtMTEuNjUgMTUuOCAtMTAuNTUgMTUuOCBMLTEwLjAgMTYuMjUgUS05LjUgMTYuNzUgLTkuNSAxNy4yNSBMLTExLjE1IDE5LjM1IFEtMTIuOCAyMS42NSAtMTIuOCAyMy4yIEwtMTIuMjUgMjQuNTUgUS0xMy42IDI2LjYgLTE0LjA1IDI4LjU1IEwtMTYuMiAyNS43IFEtMTUuMyAyNC4xIC0xMy45NSAyMS4wIEwtMTIuMjUgMTcuMDUgTS02LjUgMjIuNyBMLTYuMDUgMjIuMCBRLTUuNSAyMi4wIC01LjM1IDIyLjQgTC02LjYgMjQuNyAtNi41IDIzLjEgLTYuNSAyMi43IiBmaWxsPSIjZmJlZWJmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0yNC4yIDMyLjk1IEwyNC4xNSAzMy4wNSAyMy4wIDM1LjEgMjIuNiAzNS44IDIyLjMgMzYuMiBRMjEuMDUgMzguMCAxOC41IDQwLjIgMTUuOSA0Mi40IDExLjg1IDQzLjA1IDcuNzUgNDMuNyAzLjYgNDMuMjUgTDEuNDUgNDIuOSBRMS4xIDQ0LjYgMC41NSA0NC42IEwtMy40IDQzLjUgLTYuODUgNDIuMjUgUS0xMy41NSAzNy42IC0xMy41NSAzNy4xNSBMLTE4LjEgMzEuMjUgLTE3Ljk1IDMwLjY1IC0xNy41IDMwLjA1IC0xNy4wNSAyOS45IC0xOC4xIDI3LjEgLTE4LjI1IDI2LjU1IC0xOC4zIDI2LjQ1IC0xOC40NSAyNi4wNSAtMTkuMCAyMy44IFEtMTkuNSAyMS43IC0xOS4yNSAxOS42IEwtMTguMDUgMjIuMSBRLTE3Ljc1IDE5LjU1IC0xNi40NSAxNy4xIEwtMTUuOTUgMTcuOTUgUS0xNS4zNSAxOC41IC0xNC40IDE4LjUgLTEzLjA1IDE4LjUgLTEyLjM1IDE3LjE1IEwtMTIuMjUgMTcuMDUgLTEzLjk1IDIxLjAgUS0xNS4zIDI0LjEgLTE2LjIgMjUuNyBMLTE0LjA1IDI4LjU1IFEtMTMuNiAyNi42IC0xMi4yNSAyNC41NSAtMTEuNSAyNi4xNSAtMTAuNCAyNi4xNSAtOC44IDI2LjE1IC02LjUgMjIuNyBMLTYuNSAyMy4xIC02LjYgMjQuNyAtNi45IDI1LjE1IFEtOC4xIDI3LjE1IC04LjEgMjguMTUgTC04LjA1IDI4LjcgLTcuOCAyOS4wIC03Ljg1IDI5LjA1IFEtOC43IDMxLjI1IC05Ljc1IDMyLjUgLTcuODUgMzMuNyAtNS43NSAzNC4zIC01LjEgMzIuOSAtMy44NSAzMS4zNSBMLTMuOCAzMS4zNSAtMy4yNSAzMC42IC0xLjcgMjkuMCBRMC4wIDI3LjM1IDEuMSAyNi45IEwxLjU1IDI3LjA1IDIuMCAyNy42IDEuMCAyOS42IFEwLjAgMzEuNCAwLjAgMzIuOSAwLjk1IDM0LjQgMy4yNSAzNC40IEw1LjE1IDMxLjMgNS41NSAzMC42IDUuOCAzMC4zIDcuMiAzMC43NSA2LjE1IDM1LjAgUTYuMCAzNi4wNSA4LjAgMzYuMDUgOS40NSAzNi4wNSAxMC42IDM0LjQ1IEwxMS42IDMyLjU1IDExLjM1IDMyLjQgMTEuMTUgMzIuMzUgMTAuMCAzMy43IFE5LjE1IDM0LjQgNy41IDM0Ljc1IEw3LjUgMzQuNSA4LjE1IDMyLjA1IDguNCAzMS4xNSA4LjkgMzEuMzUgOC45NSAzMS4zIFExMS4wNSAyOS44NSAxMS4zIDMyLjIgTDE0LjY1IDMyLjk1IDE0LjEgMzMuOCBRMTMuMyAzNS4zNSAxMy4zIDM2Ljc1IDEzLjMgMzcuMzUgMTMuNCAzNy4xIEwxNC4wIDM3LjEgMTQuOSAzNC43IFExNS40NSAzMy40IDE3LjE1IDMzLjMgTDE3LjE1IDMzLjUgMTYuODUgMzQuNyAxNi42IDM1Ljc1IFExNi42IDM2LjI1IDE3LjAgMzYuNiAxNy41IDM3LjA1IDE4LjU1IDM3LjA1IDIwLjMgMzcuMDUgMjEuMSAzNS4yNSAyMS42NSAzNC4wNSAyMS42NSAzMi44IEwyMS42NSAzMi43NSAyMi45NSAzMi41IDI0LjQ1IDMyLjQgMjQuMiAzMi45NSBNLTEzLjkgMTMuMzUgUS0xMy4xIDEyLjUgLTEyLjQ1IDEyLjQgLTExLjQgMTIuMiAtMTEuNCAxNC4yNSBMLTExLjU1IDE0Ljk1IFEtMTIuNyAxNS4yNSAtMTMuMTUgMTYuMSAtMTMuOCAxNy40IC0xNC4yNSAxNy40IEwtMTQuOSAxNy4yIC0xNS4zNSAxNi44IC0xNC4xNSAxMy45IC0xMy45IDEzLjM1IE0tMTEuNTUgMjMuNTUgTC0xMC40IDIyLjA1IFEtOC43NSAyMC4yIC03LjcgMjAuMjUgLTcuMSAyMC4zIC02LjggMjEuMDUgTC04LjAgMjIuNCAtMTAuMyAyNC45IC0xMS4yIDI0LjIgLTExLjU1IDIzLjU1IE0yLjk1IDI4LjcgTDIuOTUgMjguOTUgUTIuOTUgMzAuMyAyLjIgMzIuMjUgTDMuOTUgMzEuMTUgMi45IDMzLjA1IDEuNCAzMi41NSAyLjM1IDMwLjE1IDIuOTUgMjguNyBNMTguNSAzMy4yIEwyMC42NSAzMi45IDIwLjM1IDMzLjggUTE5Ljk1IDM1LjQ1IDE4Ljc1IDM1Ljc1IEwxOC4wIDM1LjM1IDE4LjUgMzMuMjUgMTguNSAzMy4yIE0tMTcuMDUgMjkuOSBMLTE2LjY1IDMwLjc1IC0xNi4zIDMxLjQgLTE0LjEgMzQuNDUgLTEzLjIgMzUuNCAtMTQuMSAzNC40NSAtMTYuMyAzMS40IC0xNi42NSAzMC43NSAtMTcuMDUgMjkuOSBNLTEzLjE1IDM1LjQ1IEwtMTMuMTUgMzUuNCAtMTMuMiAzNS40IC0xMy4xNSAzNS40NSAtMTIuNDUgMzYuMSBRLTEwLjQgMzcuOSAtNy4xNSAzOS42NSBMLTUuMzUgNDAuNTUgLTcuMTUgMzkuNjUgUS0xMC40IDM3LjkgLTEyLjQ1IDM2LjEgTC0xMy4xNSAzNS40NSBNLTUuMTUgNDAuNjUgTC01LjMgNDAuNSAtNS4zNSA0MC41NSAtNS4xNSA0MC42NSBRLTEuNzUgNDIuMjUgMS40NSA0Mi45IC0xLjc1IDQyLjI1IC01LjE1IDQwLjY1IE0tMi45IDM4Ljc1IEwtMi45NSAzOC43NSAtMy42NSAzOC45NSAtMi45IDM4Ljc1IiBmaWxsPSIjZGFhZjUwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xOC4wIDI0LjI1IEwxOS4yNSAyNS42NSAyMS45NSAyOS4yNSAyMi4wNSAyOS43NSAyMi4wNSAyOS44IDIyLjU1IDMwLjE1IDIyLjQgMzAuNzUgUTE4LjkgMzEuMyA3LjQ1IDI2Ljc1IC00LjA1IDIyLjIgLTExLjYgNy45NSBMLTkuOCA4LjU1IC03LjY1IDkuMjUgLTUuNjUgOS45NSAtNC45NSAxMC4yIC0yLjU1IDExLjA1IC0xLjA1IDExLjYgLTAuOTUgMTEuNjUgMS4zNSAxMi41NSAyLjkgMTMuMjUgUTUuNTUgMTQuNSA4LjAgMTYuMCBMMTIuNDUgMTkuMDUgMTMuOTUgMjAuMzUgMTQuNzUgMjEuMDUgMTUuOCAyMi4wIDE3LjIgMjMuNCAxOC4wIDI0LjI1IiBmaWxsPSIjOWM3MTMwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0tMTYuNDUgMTcuMSBMLTE2LjUgMTYuOSAtMTUuNDUgMTMuNyBRLTE0LjI1IDEwLjg1IC0xMy41IDEwLjI1IEwtMTMuMjUgMTAuNCAtMTMuMTUgMTAuODUgUS0xMy4xNSAxMS41NSAtMTMuOSAxMy4zNSBMLTE0LjE1IDEzLjkgLTE1LjM1IDE2LjggLTE0LjkgMTcuMiAtMTQuMjUgMTcuNCBRLTEzLjggMTcuNCAtMTMuMTUgMTYuMSAtMTIuNyAxNS4yNSAtMTEuNTUgMTQuOTUgTC0xMC4xNSAxNC44IFEtOS41IDE0LjggLTguODUgMTUuOTUgLTguMyAxNi45IC04LjMgMTcuMTUgTC05Ljk1IDE5LjY1IFEtMTEuNjUgMjIuMDUgLTExLjY1IDIzLjEgTC0xMS41NSAyMy41NSAtMTEuMiAyNC4yIC0xMC4zIDI0LjkgLTguMCAyMi40IC02LjggMjEuMDUgLTYuMjUgMjAuNTUgUS00LjYgMjAuNTUgLTQuMSAyMS41NSAtMy44NSAyMi4wNSAtMy45IDIyLjYgTC01LjM1IDI1LjMgUS02Ljc1IDI3LjkgLTYuOCAyOS4wNSBMLTYuOCAyOS4xIC03LjIgMjkuMTUgLTcuOCAyOS4wIC04LjA1IDI4LjcgLTguMSAyOC4xNSBRLTguMSAyNy4xNSAtNi45IDI1LjE1IEwtNi42IDI0LjcgLTUuMzUgMjIuNCBRLTUuNSAyMi4wIC02LjA1IDIyLjAgTC02LjUgMjIuNyBRLTguOCAyNi4xNSAtMTAuNCAyNi4xNSAtMTEuNSAyNi4xNSAtMTIuMjUgMjQuNTUgTC0xMi44IDIzLjIgUS0xMi44IDIxLjY1IC0xMS4xNSAxOS4zNSBMLTkuNSAxNy4yNSBRLTkuNSAxNi43NSAtMTAuMCAxNi4yNSBMLTEwLjU1IDE1LjggUS0xMS42NSAxNS44IC0xMi4yNSAxNy4wNSBMLTEyLjM1IDE3LjE1IFEtMTMuMDUgMTguNSAtMTQuNCAxOC41IC0xNS4zNSAxOC41IC0xNS45NSAxNy45NSBMLTE2LjQ1IDE3LjEgTS0zLjg1IDMxLjM1IEwtNC4yNSAzMS40IC00LjQgMzEuMCBRLTQuNCAyOC4yIC0wLjU1IDI2LjQgMy4yNSAyNC42IDMuMjUgMjcuNiBMMi45NSAyOC43IDIuMzUgMzAuMTUgMS40IDMyLjU1IDIuOSAzMy4wNSAzLjk1IDMxLjE1IDQuMjUgMzAuNjUgUTUuNjUgMjguNiA2LjU1IDI4LjYgTDguMzUgMjguNjUgOC41IDI5LjQgOC42IDI5LjQgOC42NSAyOS44NSA4LjQgMzEuMTUgOC4xNSAzMi4wNSA3LjUgMzQuNSA3LjUgMzQuNzUgUTkuMTUgMzQuNCAxMC4wIDMzLjcgTDExLjE1IDMyLjM1IDExLjM1IDMyLjQgMTEuNiAzMi41NSAxMC42IDM0LjQ1IFE5LjQ1IDM2LjA1IDguMCAzNi4wNSA2LjAgMzYuMDUgNi4xNSAzNS4wIEw3LjIgMzAuNzUgNy4zNSAzMC4wNSA3LjM1IDMwLjAgNi40NSAyOS45IFE2LjE1IDI5LjkgNS44IDMwLjMgTDUuNTUgMzAuNiA1LjE1IDMxLjMgMy4yNSAzNC40IFEwLjk1IDM0LjQgMC4wIDMyLjkgMC4wIDMxLjQgMS4wIDI5LjYgTDIuMCAyNy42IDEuNTUgMjcuMDUgMS4xIDI2LjkgMC4xNSAyNi44IFEtMC45NSAyNi44IC0yLjEgMjguOCBMLTMuMjUgMzAuNiAtMy44IDMxLjM1IC0zLjg1IDMxLjM1IE0xNC42NSAzMi45NSBRMTUuNjUgMzEuNzUgMTcuMTUgMzEuNzUgMTguNCAzMS43NSAxOC41IDMzLjIgTDE4LjUgMzMuMjUgMTguMCAzNS4zNSAxOC43NSAzNS43NSBRMTkuOTUgMzUuNDUgMjAuMzUgMzMuOCBMMjAuNjUgMzIuOSBRMjAuOSAzMi4yNSAyMS4zIDMyLjI1IEwyMS41NSAzMi4zNSAyMS42NSAzMi43NSAyMS42NSAzMi44IFEyMS42NSAzNC4wNSAyMS4xIDM1LjI1IDIwLjMgMzcuMDUgMTguNTUgMzcuMDUgMTcuNSAzNy4wNSAxNy4wIDM2LjYgMTYuNiAzNi4yNSAxNi42IDM1Ljc1IEwxNi44NSAzNC43IDE3LjE1IDMzLjUgMTcuMTUgMzMuMyBRMTUuNDUgMzMuNCAxNC45IDM0LjcgTDE0LjAgMzcuMSAxMy40IDM3LjEgUTEzLjMgMzcuMzUgMTMuMyAzNi43NSAxMy4zIDM1LjM1IDE0LjEgMzMuOCBMMTQuNjUgMzIuOTUiIGZpbGw9IiM5OTAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEzLjk1IDIwLjM1IEwxMi40NSAxOS4wNSA4LjAgMTYuMCBRNS41NSAxNC41IDIuOSAxMy4yNSBMMS4zNSAxMi41NSAtMC45NSAxMS42NSAtMS4wNSAxMS42IC0yLjU1IDExLjA1IC00Ljk1IDEwLjIgLTUuNjUgOS45NSAtNy42NSA5LjI1IC05LjggOC41NSAtMTEuNiA3Ljk1IFEtNC4wNSAyMi4yIDcuNDUgMjYuNzUgMTguOSAzMS4zIDIyLjQgMzAuNzUgTDIyLjU1IDMwLjE1IDIyLjA1IDI5LjggMjIuMDUgMjkuNzUgMjEuOTUgMjkuMjUgMTkuMjUgMjUuNjUgMTguMCAyNC4yNSBNMTcuMiAyMy40IEwxNS44IDIyLjAgMTQuNzUgMjEuMDUgTS0xOS4yNSAxOS42IFEtMTkuMSAxNy42NSAtMTguMzUgMTUuNyAtMTcuMDUgMTIuMiAtMTUuMzUgOC45IEwtMTUuMyA4LjggLTEzLjI1IDUuMyAtNy4wIDYuMjUgLTQuNyA2LjggLTMuOCA3LjA1IFEtMC4wNSA4LjEgMy40IDkuODUgTDkuNjUgMTMuNDUgMTUuNCAxNy40IFExOC4yNSAxOS40IDIwLjY1IDIxLjk1IDIzLjAgMjQuNDUgMjQuMjUgMjcuMyAyNS41IDMwLjE1IDI0LjU1IDMyLjIgTDI0LjUgMzIuNCAyNC4yIDMyLjk1IDI0LjE1IDMzLjA1IDIzLjAgMzUuMSAyMi42IDM1LjggMjIuMyAzNi4yIFEyMS4wNSAzOC4wIDE4LjUgNDAuMiAxNS45IDQyLjQgMTEuODUgNDMuMDUgNy43NSA0My43IDMuNiA0My4yNSBMMS40NSA0Mi45IFExLjEgNDQuNiAwLjU1IDQ0LjYgTC0zLjQgNDMuNSAtNi44NSA0Mi4yNSBRLTEzLjU1IDM3LjYgLTEzLjU1IDM3LjE1IEwtMTguMSAzMS4yNSAtMTcuOTUgMzAuNjUgLTE3LjUgMzAuMDUgLTE3LjA1IDI5LjkgLTE4LjEgMjcuMSAtMTguMjUgMjYuNTUgLTE4LjMgMjYuNDUgLTE4LjQ1IDI2LjA1IC0xOS4wIDIzLjggUS0xOS41IDIxLjcgLTE5LjI1IDE5LjYgTS0xMy4yIDM1LjQgTC0xNC4xIDM0LjQ1IC0xNi4zIDMxLjQgLTE2LjY1IDMwLjc1IC0xNy4wNSAyOS45IE0tMTMuMiAzNS40IEwtMTMuMTUgMzUuNDUgLTEyLjQ1IDM2LjEgUS0xMC40IDM3LjkgLTcuMTUgMzkuNjUgTC01LjM1IDQwLjU1IC01LjE1IDQwLjY1IFEtMS43NSA0Mi4yNSAxLjQ1IDQyLjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICA8cGF0aCBkPSJNNy43IDE5Ljg1IEwxMS4xIDE5LjYgUTExLjYgMTkuMjUgMTIuNDUgMTkuMDUgTDE0LjYgMTguODUgUTE1LjQgMTguODUgMTYuMCAxOS4yNSAxNi41NSAxOS42IDE2LjU1IDIwLjE1IEwxNS45IDIxLjcgMTUuOCAyMi4wIDE1LjQgMjMuMCAxNS4zIDIzLjQgMTUuMiAyNC4xIFExNS4yIDI0Ljk1IDE2LjAgMjUuNCAxNi42NSAyNS44IDE3LjYgMjUuOCBMMTguNCAyNS43NSAxOC4wIDI0LjI1IDE3LjIgMjMuNCBNLTUuOCAxNC42IFEtNy42NSAxMS43IC03LjY1IDkuMjUgTC03LjY1IDguNjUgLTcuMCA2LjI1IC02Ljk1IDYuMCAtNy4wNSA1Ljk1IC02Ljc1IDUuODUgUS01LjUgNS44NSAtNC42IDYuMzUgTC0zLjggNy4wNSAtMy42NSA3LjcgUS0zLjY1IDguNTUgLTUuNjUgOS45NSBMLTYuMzUgMTAuNCBRLTUuOSAxMi4wIC0zLjc1IDExLjkgTC0yLjc1IDExLjg1IC0yLjU1IDExLjA1IC0yLjQ1IDEwLjcgLTEuODUgOC44NSBRLTEuNyA4Ljc1IC0yLjIgOC43NSBMLTQuNDUgOS41NSBRLTQuNzUgOS41NSAtNC44IDkuNyBMLTQuOTUgMTAuMiBNLTUuOSAxNC45NSBMLTYuOSAxNC41NSAtNi45IDEzLjk1IFEtNi45IDExLjk1IC04LjQ1IDkuOSAtOS4xIDkuMDUgLTkuOCA4LjU1IC0xMS4xIDcuNTUgLTEyLjcgNy41NSAtMTMuNDUgNy41NSAtMTUuMyA4LjggTC0xNy45IDEwLjc1IE0tMi43NSAxMS44NSBMLTMuMDUgMTQuMTUgUS0zLjA1IDE1LjI1IC0yLjE1IDE2LjI1IC0xLjI1IDE3LjIgLTAuMzUgMTcuMiBMMC42IDE2LjMgMC4wIDE1LjY1IDEuNyAxMS43NSAxLjU1IDExLjY1IDAuNSAxMS40NSAtMC45NSAxMS42NSAtMi43NSAxMS44NSBNMC42IDE2LjMgUTEuMyAxNi43NSAyLjk1IDE3LjIgNS42NSAxOC4wIDcuNjUgMTguMCBMOC4xIDE2Ljg1IDguMCAxNi4wIFE3Ljc1IDE0Ljc1IDYuNyAxMy45IDUuNCAxMi44IDMuNjUgMTIuOCAzLjM1IDEyLjggMi45IDEzLjI1IEwxLjUgMTUuMCAwLjYgMTYuMyBNLTIuNjUgMTkuMDUgTC0wLjg1IDE4LjY1IDIuMzUgMTguMiBRMy4wIDE4LjIgMy4xIDE5LjQ1IEwzLjMgMjIuMiBRMy44NSAyNi4xNSA3LjcgMjYuMTUgTDEwLjUgMjUuNyBROS4xNSAyNS4xIDguMyAyMy4yNSA3LjA1IDIwLjUgNC43NSAyMC41IE04LjA1IDE3Ljk1IEw3LjY1IDE4LjAgNy4wNSAxOC42IFE1LjkgMTkuNyA0LjYgMTkuNyBMMy43NSAxOS41IE0xNS40IDIzLjAgUTE1LjM1IDIxLjggMTQuNzUgMjEuMDUgTDEzLjk1IDIwLjM1IDEzLjU1IDIwLjEgUTEyLjUgMTkuNiAxMS4xIDE5LjYgTTExLjk1IDIyLjM1IFExMi4zNSAyNC44IDEwLjUgMjUuNyBMMTEuOCAyNS45NSBRMTMuMTUgMjUuOTUgMTQuMiAyNS4zNSAxNC41IDI2LjE1IDE1LjA1IDI2Ljc1IEwxNS4zIDI3LjAgMTYuNiAyNy44IDE3LjQ1IDI3Ljk1IDE4LjMgMjcuNzUgMTguNDUgMjYuOSAxOC40IDI1Ljc1IDE5LjI1IDI1LjY1IDIyLjAgMjUuMzUgUTIzLjUgMjUuMzUgMjIuNTUgMjguNDUgTTE1LjMgMjcuMCBMMTUuNzUgMjcuMzUgMTYuNiAyNy44IDE3Ljg1IDI4LjYgUTE5LjcgMjkuNTUgMjIuMDUgMjkuNzUgTDIyLjk1IDI5LjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZjYyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICA8cGF0aCBkPSJNLTYuOCAxMS43IFEtNi44IDkuNTUgLTIuNTUgMTEuMDUgMS42NSAxMi41NSAxLjY1IDE0Ljg1IDEuNjUgMTYuMCAtMC4zIDE2LjAgLTIuNjUgMTYuMCAtNC43IDE0LjY1IC02LjggMTMuMjUgLTYuOCAxMS43IE0tNC4wIDEyLjM1IEwtMy42IDEyLjMgLTMuMTUgMTIuNTUgLTIuNDUgMTIuNTUgLTIuNCAxMi40IFEtMy4wIDExLjg1IC0zLjkgMTEuNyAtNC45IDExLjU1IC00LjkgMTIuMjUgTC0zLjcgMTMuNSBRLTIuNCAxNC42IC0xLjY1IDE0LjYgTC0xLjEgMTQuMzUgLTAuOSAxMy44NSBRLTAuOSAxMy42IC0xLjE1IDEzLjMgLTEuNDUgMTIuOSAtMS45IDEyLjkgTC0yLjMgMTMuMCAtMS42IDEzLjggLTEuNyAxMy44NSAtMy4wNSAxMy4xNSAtNC4wIDEyLjM1IE0xMC40NSAyNS40NSBRMTEuMyAyNS44IDExLjMgMjYuMiBMMTEuMDUgMjYuNyAxMC40IDI3LjAgUTkuNiAyNy4wIDcuOCAyNi4wNSA1Ljk1IDI1LjA1IDUuOTUgMjQuNiA1Ljk1IDIzLjcgNy44IDIzLjggOS42IDIzLjg1IDkuNiAyNC45NSA5LjYgMjUuMSAxMC40NSAyNS40NSBNOS4xIDI1LjI1IEw5LjA1IDI1LjAgOC43IDI1LjAgOC4xNSAyNS4xIDguMzUgMjUuMjUgOC44IDI1LjQgOS4xIDI1LjI1IiBmaWxsPSIjZmY5OTk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0tNC4wIDEyLjM1IEwtMy4wNSAxMy4xNSAtMS43IDEzLjg1IC0xLjYgMTMuOCAtMi4zIDEzLjAgLTEuOSAxMi45IFEtMS40NSAxMi45IC0xLjE1IDEzLjMgLTAuOSAxMy42IC0wLjkgMTMuODUgTC0xLjEgMTQuMzUgLTEuNjUgMTQuNiBRLTIuNCAxNC42IC0zLjcgMTMuNSBMLTQuOSAxMi4yNSBRLTQuOSAxMS41NSAtMy45IDExLjcgLTMuMCAxMS44NSAtMi40IDEyLjQgTC0yLjQ1IDEyLjU1IC0zLjE1IDEyLjU1IC0zLjYgMTIuMyAtNC4wIDEyLjM1IE05LjEgMjUuMjUgTDguOCAyNS40IDguMzUgMjUuMjUgOC4xNSAyNS4xIDguNyAyNS4wIDkuMDUgMjUuMCA5LjEgMjUuMjUiIGZpbGw9IiNmZmZmY2MiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogIDwvZz4NCjwvc3ZnPg0KPCEtLSAxIC0tPg==',
  piopio: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iMzMuMjVweCIgd2lkdGg9IjMyLjNweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAxNi4xNSwgMTYuNikiPg0KICAgIDxwYXRoIGQ9Ik0tMTAuNiAtOS43IEwtMTAuMTUgLTEwLjUgUS03LjMgLTE1LjMgLTUuMTUgLTE1LjMgTC00LjAgLTE1LjYgLTEuOCAtMTUuNDUgMC45NSAtMTQuNTUgUTguMDUgLTEyLjQ1IDEwLjc1IC0xMS4xIDEyLjM1IC05Ljk1IDEzLjQ1IC03Ljk1IDEyLjM1IC00LjAgMTEuMyAtMi4wIDkuNiAxLjMgNy4zNSAxLjMgTDYuOTUgMS40NSBRNi4zIDEuNDUgNS42NSAyLjA1IEw1LjE1IDIuNTUgUTQuOCAxLjI1IDMuNjUgMC40IDIuNSAtMC41IDEuNTUgLTAuNSAwLjg1IC0wLjUgLTAuMyAwLjIgLTAuODUgMC40NSAtMS4yNSAxLjM1IEwtMS42IDIuODUgLTIuNDUgMy4zNSAtMy42IDQuMyAtNC4yNSA0LjA1IFEtNS41NSAzLjUgLTcuMDUgMS43NSBMLTcuOTUgMC42IC03LjUgLTAuMDUgLTYuNyAtMS41NSBRLTUuOTUgLTIuNzUgLTUuNTUgLTQuMjUgTC01LjQ1IC00Ljg1IC01LjcgLTYuMiBRLTYuMCAtNy4xIC02LjkgLTcuNSBMLTguNzUgLTguNjUgUS0xMC4wNSAtOS42NSAtMTAuNiAtOS43IE0tMTMuNDUgLTAuMDUgTC0xMy40NSAtMC4zNSAtMTMuNCAtMC44IC0xMy4xNSAtMC4xIC0xMy40NSAtMC4wNSIgZmlsbD0iI2ZjYzRiNiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTMuNDUgLTcuOTUgTDE0LjYgLTUuMzUgUTE1LjkgLTEuNSAxNC4yIDEuNTUgTDExLjk1IDUuMTUgUTEyLjEgMTAuOCAxMS45IDE0LjcgTDExLjg1IDE1LjY1IDEwLjggMTIuMiA5LjggOS43IFE5LjI1IDExLjYgNS45IDEyLjkgTDAuOTUgMTQuMyAwLjcgMTQuMiA0LjE1IDkuOTUgNC4zIDkuOSA0LjI1IDkuNjUgNC4yNSA5LjU1IFEyLjk1IDEwLjc1IDIuNyAxMC43NSBMMS40IDExLjAgLTAuMyAxMS4zIFEtNC4zNSAxMS4zIC04LjM1IDguODUgLTEwLjMgNy43IC0xMS41IDYuMSAtMTMuNTUgMy41IC0xMy40NSAtMC4wNSBMLTEzLjE1IC0wLjEgLTEzLjQgLTAuOCBRLTEzLjE1IC00LjIgLTExLjY1IC03LjYgTC0xMS4yNSAtNi45IC0xMC40NSAtNi4wIC0xMC4zNSAtNS45IC04LjQ1IC00LjYgLTguNTUgLTQuMzUgLTEwLjE1IC0xLjg1IFEtMTEuNjUgMC42IC0xMS43IDEuNyAtMTEuNzUgMi42IC0xMC45NSAyLjYgLTkuNiAyLjYgLTcuOTUgMC42IEwtNy4wNSAxLjc1IFEtNS41NSAzLjUgLTQuMjUgNC4wNSBMLTMuNiA0LjMgLTIuNDUgMy4zNSAtMS42IDIuODUgLTEuNiAzLjI1IC0xLjYgMy40IC0xLjU1IDMuOCAtMS4yIDQuNzUgLTAuNiA1LjU1IFEwLjQ1IDYuNTUgMi4wIDYuNTUgNS4yIDYuNTUgNS4zIDQuMDUgTDUuMTUgMi41NSA1LjY1IDIuMDUgUTYuMyAxLjQ1IDYuOTUgMS40NSBMNy4zNSAxLjMgUTkuNiAxLjMgMTEuMyAtMi4wIDEyLjM1IC00LjAgMTMuNDUgLTcuOTUiIGZpbGw9IiNlMWE0OTUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTS0xMS42NSAtOS4zIEwtMTEuNiAtOS40IC0xMC45NSAtOS44NSAtMTAuNiAtOS43IFEtMTAuMDUgLTkuNjUgLTguNzUgLTguNjUgTC02LjkgLTcuNSBRLTYuMCAtNy4xIC01LjcgLTYuMiBMLTUuNDUgLTQuODUgLTUuNTUgLTQuMjUgUS01Ljk1IC0yLjc1IC02LjcgLTEuNTUgTC03LjUgLTAuMDUgLTcuOTUgMC42IFEtOS42IDIuNiAtMTAuOTUgMi42IC0xMS43NSAyLjYgLTExLjcgMS43IC0xMS42NSAwLjYgLTEwLjE1IC0xLjg1IEwtOC41NSAtNC4zNSAtNy4xNSAtNC4xNSBRLTYuNSAtNC4xNSAtNi42IC01LjI1IC02Ljc1IC02LjM1IC05LjggLTguMyBMLTExLjY1IC05LjMgTS0xMS4yNSAtNi45IEwtMTAuMzUgLTUuOTUgLTEwLjM1IC01LjkgLTEwLjQ1IC02LjAgLTExLjI1IC02LjkiIGZpbGw9IiNmZmNjMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTS0xMS42NSAtNy42IFEtMTEuOTUgLTguMTUgLTExLjkgLTguNjUgTC0xMS42NSAtOS4zIC05LjggLTguMyBRLTYuNzUgLTYuMzUgLTYuNiAtNS4yNSAtNi41IC00LjE1IC03LjE1IC00LjE1IEwtOC41NSAtNC4zNSAtOC40NSAtNC42IC0xMC4zNSAtNS45IC0xMC4zNSAtNS45NSAtMTEuMjUgLTYuOSAtMTEuNjUgLTcuNiIgZmlsbD0iI2U0YTUxMiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNLTExLjUgNi4xIFEtMTIuMTUgNi43IC0xMy4wIDYuNyAtMTMuNyA2LjcgLTE0LjM1IDYuMiAtMTUuMiA1LjU1IC0xNS4xNSA0LjI1IC0xNC45NSAwLjIgLTEzLjQ1IC0wLjA1IC0xMy41NSAzLjUgLTExLjUgNi4xIE0tMS42IDIuODUgTC0xLjI1IDEuMzUgUS0wLjg1IDAuNDUgLTAuMyAwLjIgMC44NSAtMC41IDEuNTUgLTAuNSAyLjUgLTAuNSAzLjY1IDAuNCA0LjggMS4yNSA1LjE1IDIuNTUgTDUuMyA0LjA1IFE1LjIgNi41NSAyLjAgNi41NSAwLjQ1IDYuNTUgLTAuNiA1LjU1IEwtMS4yIDQuNzUgLTEuNTUgMy44IC0xLjYgMy40IC0xLjYgMy4yNSAtMS42IDIuODUgTTAuNyA0LjU1IEwwLjkgNC4yNSBRMC45IDMuNDUgMC4zIDMuNDUgLTAuMyAzLjQ1IC0wLjMgNC4zIEwwLjIgNC43NSAwLjcgNC41NSBNMS44IDIuMTUgUTIuMjUgMy42IDMuMzUgMy42IDQuNTUgMy42IDQuNTUgMi42IDQuNTUgMC43IDMuMiAwLjY1IDEuOCAwLjU1IDEuOCAyLjE1IiBmaWxsPSIjNjYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xLjggMi4xNSBRMS44IDAuNTUgMy4yIDAuNjUgNC41NSAwLjcgNC41NSAyLjYgNC41NSAzLjYgMy4zNSAzLjYgMi4yNSAzLjYgMS44IDIuMTUgTTAuNyA0LjU1IEwwLjIgNC43NSAtMC4zIDQuMyBRLTAuMyAzLjQ1IDAuMyAzLjQ1IDAuOSAzLjQ1IDAuOSA0LjI1IEwwLjcgNC41NSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNLTEwLjYgLTkuNyBMLTEwLjE1IC0xMC41IFEtNy4zIC0xNS4zIC01LjE1IC0xNS4zIEwtNC4wIC0xNS42IC0xLjggLTE1LjQ1IDAuOTUgLTE0LjU1IFE4LjA1IC0xMi40NSAxMC43NSAtMTEuMSAxMi4zNSAtOS45NSAxMy40NSAtNy45NSBMMTQuNiAtNS4zNSBRMTUuOSAtMS41IDE0LjIgMS41NSBMMTEuOTUgNS4xNSBRMTIuMSAxMC44IDExLjkgMTQuNyBMMTEuODUgMTUuNjUgMTAuOCAxMi4yIDkuOCA5LjcgUTkuMjUgMTEuNiA1LjkgMTIuOSBMMC45NSAxNC4zIDAuNyAxNC4yIDQuMTUgOS45NSA0LjMgOS45IDQuMjUgOS42NSA0LjI1IDkuNTUgUTIuOTUgMTAuNzUgMi43IDEwLjc1IEwxLjQgMTEuMCAtMC4zIDExLjMgUS00LjM1IDExLjMgLTguMzUgOC44NSAtMTAuMyA3LjcgLTExLjUgNi4xIC0xMi4xNSA2LjcgLTEzLjAgNi43IC0xMy43IDYuNyAtMTQuMzUgNi4yIC0xNS4yIDUuNTUgLTE1LjE1IDQuMjUgLTE0Ljk1IDAuMiAtMTMuNDUgLTAuMDUgTC0xMy40NSAtMC4zNSAtMTMuNCAtMC44IFEtMTMuMTUgLTQuMiAtMTEuNjUgLTcuNiAtMTEuOTUgLTguMTUgLTExLjkgLTguNjUgTC0xMS42NSAtOS4zIC0xMS42IC05LjQgLTEwLjk1IC05Ljg1IC0xMC42IC05LjcgUS0xMC4wNSAtOS42NSAtOC43NSAtOC42NSBMLTYuOSAtNy41IFEtNi4wIC03LjEgLTUuNyAtNi4yIEwtNS40NSAtNC44NSAtNS41NSAtNC4yNSBRLTUuOTUgLTIuNzUgLTYuNyAtMS41NSBMLTcuNSAtMC4wNSAtNy45NSAwLjYgUS05LjYgMi42IC0xMC45NSAyLjYgLTExLjc1IDIuNiAtMTEuNyAxLjcgLTExLjY1IDAuNiAtMTAuMTUgLTEuODUgTC04LjU1IC00LjM1IC04LjQ1IC00LjYgLTEwLjM1IC01LjkgLTEwLjQ1IC02LjAgLTExLjI1IC02LjkgLTExLjY1IC03LjYgTS0xLjYgMi44NSBMLTEuMjUgMS4zNSBRLTAuODUgMC40NSAtMC4zIDAuMiAwLjg1IC0wLjUgMS41NSAtMC41IDIuNSAtMC41IDMuNjUgMC40IDQuOCAxLjI1IDUuMTUgMi41NSBMNS4zIDQuMDUgUTUuMiA2LjU1IDIuMCA2LjU1IDAuNDUgNi41NSAtMC42IDUuNTUgTC0xLjIgNC43NSAtMS41NSAzLjggLTEuNiAzLjQgLTEuNiAzLjI1IC0xLjYgMi44NSBNLTEzLjE1IC0wLjEgTC0xMy40NSAtMC4wNSBRLTEzLjU1IDMuNSAtMTEuNSA2LjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgPC9nPg0KPC9zdmc+DQo8IS0tIDEgLS0+',
  shuriken: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iMzMuOHB4IiB3aWR0aD0iMzMuOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAsIDAuMCwgMC4wLCAxLjAsIDExLjE1LCAtNC4yKSI+DQogICAgPHBhdGggZD0iTTIxLjY1IDEzLjU1IEwyMS42IDEzLjUgOC42NSAxOS43NSA4LjYgMTkuNjUgUTcuOTUgMTguNSA2LjYgMTguMiA1LjMgMTcuOSA0LjEgMTguNiBMMy45IDE4Ljc1IC0xLjU1IDUuNTUgMy4wIDEwLjM1IDMuNDUgMTAuOCA3Ljc1IDE1LjQgMjEuNiAxMy41IDIxLjY1IDEzLjUgMjEuNjUgMTMuNTUgTTkuMSAyMS4zIEwxMS41NSAyMi45NSAxMS40IDIzLjEgMTMuMjUgMzYuNyA3LjQgMjQuMjUgNy41NSAyNC4xNSBROC43IDIzLjQ1IDkuMCAyMi4xNSBMOS4xIDIxLjcgOS4xIDIxLjYgOS4xIDIxLjMiIGZpbGw9IiNlMGU4ZWIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTguNjUgMTkuNzUgTDIxLjYgMTMuNSAyMS42NSAxMy41NSAxMS41NSAyMi45NSA5LjEgMjEuMyA4LjY1IDE5Ljc1IE0tMS41NSA1LjU1IEwzLjkgMTguNzUgUTIuOSAxOS40NSAyLjY1IDIwLjU1IEwyLjYgMjAuNjUgUTIuMyAyMS45NSAzLjAgMjMuMSAzLjc1IDI0LjMgNS4wNSAyNC42IDYuMyAyNC45IDcuNCAyNC4yNSBMMTMuMjUgMzYuNyAxMy4zIDM3LjAgMy43IDI2Ljc1IC0xMC4xNSAyOC42NSAwLjA1IDE5LjA1IC0xLjg1IDUuMiAtMS41NSA1LjU1IiBmaWxsPSIjYjhjOWNmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik05LjEgMjEuNyBMOS4xIDIxLjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICA8cGF0aCBkPSJNOC42NSAxOS43NSBMOS4xIDIxLjMgOS4xIDIxLjYgTTExLjU1IDIyLjk1IEwyMS42NSAxMy41NSAyMS42NSAxMy41IDIxLjYgMTMuNSA3Ljc1IDE1LjQgMy40NSAxMC44IE0zLjAgMTAuMzUgTC0xLjU1IDUuNTUgLTEuODUgNS4yIDAuMDUgMTkuMDUgLTEwLjE1IDI4LjY1IDMuNyAyNi43NSAxMy4zIDM3LjAgMTMuMjUgMzYuNyAxMS40IDIzLjEgMTEuNTUgMjIuOTUgTTMuOSAxOC43NSBMNC4xIDE4LjYgUTUuMyAxNy45IDYuNiAxOC4yIDcuOTUgMTguNSA4LjYgMTkuNjUgTDguNjUgMTkuNzUgTTMuOSAxOC43NSBRMi45IDE5LjQ1IDIuNjUgMjAuNTUgTDIuNiAyMC42NSBRMi4zIDIxLjk1IDMuMCAyMy4xIDMuNzUgMjQuMyA1LjA1IDI0LjYgNi4zIDI0LjkgNy40IDI0LjI1IEw3LjU1IDI0LjE1IFE4LjcgMjMuNDUgOS4wIDIyLjE1IEw5LjEgMjEuNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  broadsword: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNDUuMTVweCIgd2lkdGg9Ijg2LjdweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wLCAwLjAsIDAuMCwgMS4wLCAxNy44NSwgMS4wNSkiPg0KICAgIDxwYXRoIGQ9Ik02NS45NSAzOS43IEw2NC45NSAzOS44NSA2Mi41NSA0MC4yIDU2Ljg1IDQwLjYgNTYuMSA0MC41IDU1LjM1IDQwLjYgNTIuNiA0MC4xNSBRNTEuODUgNDAuMTUgNDUuNTUgMzcuMTUgTDMzLjggMzEuNSBRMzEuNTUgMzAuNCAyOC4xIDI5LjA1IEwyMy4yNSAyNy4wNSAxOC4wIDI0LjkgUTE1LjMgMjMuNjUgMTUuMTUgMjIuMyBMMTUuMTUgMjIuMiAxNS44IDIyLjM1IDE2LjI1IDIyLjQ1IDM5LjMgMzAuMTUgNDkuOTUgMzMuOTUgNTQuNiAzNS43NSA1OC42IDM3LjE1IDU4LjkgMzcuMSA1OC45NSAzNi45NSA1OC40NSAzNi42IDU3LjkgMzYuNCA1Mi4yIDMzLjAgNDYuNCAyOS42IFE0NC4yNSAyOC4zNSA0MS4zIDI2Ljg1IEwzNi4wNSAyNC4xIFEyOS40IDIwLjM1IDI2LjA1IDE4LjggTDE3Ljk1IDE0Ljc1IDIwLjI1IDkuNiA1Ny4wNSAyNy4xIDY1Ljk1IDM5LjciIGZpbGw9IiNlMGU4ZWIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTE3LjY1IDE1LjQ1IEwxMi4xNSAyNy42IDQuMyAzMS40IDYuMyAyMi4yIC0xNi44NSA3LjEgLTEzLjk1IDAuNSAxMy42IDcuMTUgMTguNzUgLTAuMDUgMjAuMjUgOS42IDE3Ljk1IDE0Ljc1IDE3LjY1IDE1LjQ1IE0xNy4zIDMuNDUgUTE2LjYgMy45IDE2LjM1IDUuNSBMMTUuOSA3LjA1IDE1LjUgOS4wIDEzLjIgMTUuOCAxNC4zIDE2LjQgUTE0LjkgMTYuNCAxNS44IDE0LjAgTDE2Ljg1IDEwLjYgMTcuNSA3LjcgMTcuOTUgNC41IFExNy45NSAyLjk1IDE3LjMgMy40NSBNMTEuMTUgOS44IEwxMS41IDkuNSAxMS42NSA5LjA1IFExMS42NSA4LjUgMTEuMiA4LjQ1IEwxMC4zNSA4LjUgMi42IDYuMiBRLTUuMjUgMy45IC01Ljk1IDMuOSBMLTguNSAzLjUgLTEwLjggMy4wNSBRLTExLjI1IDMuMDUgLTExLjM1IDMuNCBMLTExLjMgMy4zIFEtMTEuOSAzLjYgLTExLjkgNC4wIC0xMS45IDQuOTUgLTEwLjkgNS4zNSAtOC43NSA2LjAgLTYuNiA2LjggLTMuODUgNy44IC0xLjMgOS4yIDAuMzUgOS45IDQuNSAxMi40NSA4LjE1IDE0Ljc1IDguNiAxNC43NSA5LjQgMTQuNzUgMTAuMTUgMTIuMCBMMTEuMTUgOS44IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xNy45NSAxNC43NSBMMjYuMDUgMTguOCBRMjkuNCAyMC4zNSAzNi4wNSAyNC4xIEw0MS4zIDI2Ljg1IFE0NC4yNSAyOC4zNSA0Ni40IDI5LjYgTDUyLjIgMzMuMCA1Ny45IDM2LjQgNTguNDUgMzYuNiA1OC45NSAzNi45NSA1OC45IDM3LjEgNTguNiAzNy4xNSA1NC42IDM1Ljc1IDQ5Ljk1IDMzLjk1IDM5LjMgMzAuMTUgMTYuMjUgMjIuNDUgMTUuOCAyMi4zNSAxNS4xNSAyMi4yIDE1LjE1IDIyLjMgUTE1LjMgMjMuNjUgMTguMCAyNC45IEwyMy4yNSAyNy4wNSAyOC4xIDI5LjA1IFEzMS41NSAzMC40IDMzLjggMzEuNSBMNDUuNTUgMzcuMTUgUTUxLjg1IDQwLjE1IDUyLjYgNDAuMTUgTDU1LjM1IDQwLjYgNTYuMSA0MC41IDU2Ljg1IDQwLjYgNjIuNTUgNDAuMiA2NC45NSAzOS44NSA2NS45NSAzOS43IDY3Ljg1IDQyLjM1IDUxLjIgNDMuMSAxMi4xNSAyNy42IDE3LjY1IDE1LjQ1IDE3Ljk1IDE0Ljc1IDE3LjY1IDE1LjQ1IDE3Ljk1IDE0Ljc1IiBmaWxsPSIjYjhjOWNmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xMS4xNSA5LjggTDEwLjE1IDEyLjAgUTkuNCAxNC43NSA4LjYgMTQuNzUgOC4xNSAxNC43NSA0LjUgMTIuNDUgMC4zNSA5LjkgLTEuMyA5LjIgLTMuODUgNy44IC02LjYgNi44IC04Ljc1IDYuMCAtMTAuOSA1LjM1IC0xMS45IDQuOTUgLTExLjkgNC4wIC0xMS45IDMuNiAtMTEuMyAzLjMgTC0xMS4zNSAzLjQgUS0xMS4yNSAzLjA1IC0xMC44IDMuMDUgTC04LjUgMy41IC01Ljk1IDMuOSBRLTUuMjUgMy45IDIuNiA2LjIgTDEwLjM1IDguNSAxMS4yIDguNDUgUTExLjY1IDguNSAxMS42NSA5LjA1IEwxMS41IDkuNSAxMS4xNSA5LjggTTE3LjMgMy40NSBRMTcuOTUgMi45NSAxNy45NSA0LjUgTDE3LjUgNy43IDE2Ljg1IDEwLjYgMTUuOCAxNC4wIFExNC45IDE2LjQgMTQuMyAxNi40IEwxMy4yIDE1LjggMTUuNSA5LjAgMTUuOSA3LjA1IDE2LjM1IDUuNSBRMTYuNiAzLjkgMTcuMyAzLjQ1IiBmaWxsPSIjNmI1YTUwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xNy45NSAxNC43NSBMMTcuNjUgMTUuNDUgMTIuMTUgMjcuNiA1MS4yIDQzLjEgNjcuODUgNDIuMzUgNjUuOTUgMzkuNyA1Ny4wNSAyNy4xIDIwLjI1IDkuNiAxNy45NSAxNC43NSBNMjAuMjUgOS42IEwxOC43NSAtMC4wNSAxMy42IDcuMTUgLTEzLjk1IDAuNSAtMTYuODUgNy4xIDYuMyAyMi4yIDQuMyAzMS40IDEyLjE1IDI3LjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgPC9nPg0KPC9zdmc+DQo8IS0tIDEgLS0+',
  scimitar: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNDguNHB4IiB3aWR0aD0iMTAzLjE1cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMCwgMC4wLCAwLjAsIDEuMCwgMTguMSwgLTEuMjk5OTk5OTk5OTk5OTk5OCkiPg0KICAgIDxwYXRoIGQ9Ik03OS4xIDQxLjU1IEw3OC41IDQxLjYgNzQuNzUgNDIuMzUgNzMuODUgNDIuNTUgNzIuOTUgNDIuNzUgNzIuODUgNDIuNzUgNzEuNDUgNDIuNjUgNjguNCA0Mi45NSA2NS4xIDQzLjQ1IFE2MS4zNSA0My40NSA1NS42NSA0MC42IEw0Ny4wIDM1LjkgNDEuNiAzMi45IDM2LjM1IDI5Ljc1IDI0LjIgMjIuMjUgMTguOTUgMTkuMjUgMTYuMSAxNy42NSAxNC45NSAxNy4wIDE2LjIgMTMuNCA2MS40NSAzNi45NSA3Mi45IDM0Ljc1IDc0LjM1IDQxLjMgNzkuMSA0MS41NSIgZmlsbD0iI2UwZThlYiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNMTQuOTUgMTcuMCBMMTYuMSAxNy42NSAxOC45NSAxOS4yNSAyNC4yIDIyLjI1IDM2LjM1IDI5Ljc1IDQxLjYgMzIuOSA0Ny4wIDM1LjkgNTUuNjUgNDAuNiBRNjEuMzUgNDMuNDUgNjUuMSA0My40NSBMNjguNCA0Mi45NSA3MS40NSA0Mi42NSA3Mi44NSA0Mi43NSA3Mi45NSA0Mi43NSA3My44NSA0Mi41NSA3NC43NSA0Mi4zNSA3OC41IDQxLjYgNzkuMSA0MS41NSA4NC4wNSA0MS43NSA3NC45NSA0Ny43IDYwLjc1IDQ4LjcgNTIuODUgNDUuODUgMTQuMCAxOS41NSAxNC45NSAxNy4wIiBmaWxsPSIjYjhjOWNmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xNC45NSAxNy4wIEwxNC4wIDE5LjU1IC0xNy4xIDguNDUgLTE1LjggNC45NSBRMTQuMCAxNi40IDE0Ljk1IDE3LjAiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTE2LjIgMTMuNCBMMTQuOTUgMTcuMCBRMTQuMCAxNi40IC0xNS44IDQuOTUgTC0xNC44NSAyLjMgMTYuMiAxMy40IiBmaWxsPSIjNmI1YTUwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xNC45NSAxNy4wIEwxNC4wIDE5LjU1IDUyLjg1IDQ1Ljg1IDYwLjc1IDQ4LjcgNzQuOTUgNDcuNyA4NC4wNSA0MS43NSA3OS4xIDQxLjU1IDc0LjM1IDQxLjMgNzIuOSAzNC43NSA2MS40NSAzNi45NSAxNi4yIDEzLjQgMTQuOTUgMTcuMCBNLTE1LjggNC45NSBMLTE3LjEgOC40NSAxNC4wIDE5LjU1IE0xNi4yIDEzLjQgTC0xNC44NSAyLjMgLTE1LjggNC45NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCjwhLS0gMSAtLT4=',
  sword: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmZmZGVjPSJodHRwczovL3d3dy5mcmVlLWRlY29tcGlsZXIuY29tL2ZsYXNoIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmZkZWM6b2JqZWN0VHlwZT0ic2hhcGUiIGhlaWdodD0iNTUuOTVweCIgd2lkdGg9IjEyMS45NXB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAsIDAuMCwgMC4wLCAxLjAsIDE4LjksIDIuNTUpIj4NCiAgICA8cGF0aCBkPSJNMTguODUgOS4wIEw4OS42NSAzNC4yIDEwMi4wNSA0Ni43NSAxMDEuNiA0Ny4wNSAxNi4zIDE2LjI1IDE4Ljg1IDkuMCIgZmlsbD0iI2UwZThlYiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiLz4NCiAgICA8cGF0aCBkPSJNLTE1LjYgNC40NSBMLTEzLjUgLTEuNTUgMTEuOSA3LjIgMTMuMyAzLjIgMjAuMDUgNS42IDE4Ljg1IDkuMCAxNi4zIDE2LjI1IC0xNS42IDQuNDUiIGZpbGw9IiM3MjUzMjciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEwMS42IDQ3LjA1IEw5My44IDUyLjQgMTMuNiAyMy45IDE2LjMgMTYuMjUgMTAxLjYgNDcuMDUiIGZpbGw9IiNiOGM5Y2YiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEzLjYgMjMuOSBMMTIuNiAyNi43NSA2LjA1IDI0LjQ1IDcuMzUgMjAuNyAtMTcuOSAxMC45NSAtMTUuNiA0LjQ1IDE2LjMgMTYuMjUgMTMuNiAyMy45IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIvPg0KICAgIDxwYXRoIGQ9Ik0xOC44NSA5LjAgTDg5LjY1IDM0LjIgMTAyLjA1IDQ2Ljc1IDEwMS42IDQ3LjA1IDkzLjggNTIuNCAxMy42IDIzLjkgMTIuNiAyNi43NSA2LjA1IDI0LjQ1IDcuMzUgMjAuNyAtMTcuOSAxMC45NSAtMTUuNiA0LjQ1IC0xMy41IC0xLjU1IDExLjkgNy4yIDEzLjMgMy4yIDIwLjA1IDUuNiAxOC44NSA5LjAgMTYuMyAxNi4yNSAxMy42IDIzLjkgTS0xNS42IDQuNDUgTDE2LjMgMTYuMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgPC9nPg0KPC9zdmc+DQo8IS0tIDEgLS0+'
};var applySkillModifiers = (brute, skill) => {
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
}var FightModifier = /*exports.*//*$Enums.*/FightModifier = {
  noThrows: 'noThrows',
  focusOpponent: 'focusOpponent',
  alwaysUseSupers: 'alwaysUseSupers',
  drawEveryWeapon: 'drawEveryWeapon',
  doubleAgility: 'doubleAgility',
  randomSkill: 'randomSkill',
  randomWeapon: 'randomWeapon',
  bareHandsFirstHit: 'bareHandsFirstHit',
  startWithWeapon: 'startWithWeapon'
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

var applySpy = (fightData, brute, opponent) => {
    if (brute.skills.find((skill) => skill.name === 'spy')) {
        var opponentWeaponsCount = opponent.weapons.length;
        var bruteWeaponsCount = brute.weapons.length;
        var weaponsToSwap = Math.min(opponentWeaponsCount, bruteWeaponsCount);
        if (weaponsToSwap === 0) {
            return;
        }
        // Only swap the amount of weapons the spy has (maxed at opponent's weapons count)
        var opponentWeaponsToSwap = (0, shuffle)(opponent.weapons)
            .slice(0, weaponsToSwap);
        var bruteWeaponsToSwap = (0, shuffle)(brute.weapons)
            .slice(0, weaponsToSwap);
        fightData.steps.push({
            a: StepType.Spy,
            b: brute.index,
            t: opponent.index,
            s: bruteWeaponsToSwap.map((weapon) => WeaponByName[weapon.name]),
            r: opponentWeaponsToSwap.map((weapon) => WeaponByName[weapon.name]),
        });
        // Swap weapons
        for (var weaponToSwap of bruteWeaponsToSwap) {
            var index = brute.weapons.findIndex((weapon) => weapon.name === weaponToSwap.name);
            if (index === -1) {
                throw new Error('Weapon not found');
            }
            brute.weapons.splice(index, 1);
            opponent.weapons.push(weaponToSwap);
        }
        for (var weaponToSwap of opponentWeaponsToSwap) {
            var index = opponent.weapons.findIndex((weapon) => weapon.name === weaponToSwap.name);
            if (index === -1) {
                throw new Error('Weapon not found');
            }
            opponent.weapons.splice(index, 1);
            brute.weapons.push(weaponToSwap);
        }
        // Add own weapons to opponent damaged weapons
        opponent.damagedWeapons.push(...bruteWeaponsToSwap.map((weapon) => weapon.name));
    }
};
var tournamentBackground = {
    name: '3.png',
    odds: 0,
};
var bossBackground = {
    name: '4.png',
    odds: 0,
};
var fightBackgrounds = [
    { name: '1.jpg', odds: 100 },
    { name: '2.jpg', odds: 2 },
    tournamentBackground,
    bossBackground,
    { name: '5.png', odds: 2 },
    { name: '6.png', odds: 2 },
    { name: '7.png', odds: 2 },
    { name: '8.png', odds: 2 },
    { name: '9.png', odds: 2 },
    { name: '10.png', odds: 2 },
    { name: '11.png', odds: 2 },
    { name: '12.png', odds: 2 },
    { name: '13.png', odds: 2 },
];
var bear = pets.find((p) => p.name === PetName.bear);
var panther = pets.find((p) => p.name === PetName.panther);
var bosses = [
    {
        name: BossName.GoldClaw,
        base: PetName.bear,
        scale: 2,
        initiative: -0.5,
        strength: bear.strength * 10,
        agility: bear.agility,
        speed: bear.speed,
        hp: 100000,
        counter: bear.counter,
        combo: bear.combo,
        block: bear.block,
        evasion: bear.evasion,
        accuracy: 0.75,
        disarm: bear.disarm,
        damage: bear.damage,
        reach: 3,
    },
    {
        name: BossName.EmberFang,
        base: PetName.panther,
        scale: 3,
        initiative: -0.5,
        strength: panther.strength * 2,
        agility: panther.agility,
        speed: panther.speed * 10,
        hp: 50000,
        counter: panther.counter,
        combo: panther.combo,
        block: panther.block,
        evasion: panther.evasion,
        accuracy: 0.75,
        disarm: panther.disarm,
        damage: panther.damage,
        reach: 3,
    },
];
var getFighterStat = (fighter, stat, onlyStat) => {
    // Special case for dexterity as it only exists on weapons
    if (stat === 'dexterity') {
        if (onlyStat === 'fighter')
            return 0;
        if (fighter.activeWeapon) {
            var weaponStat = fighter.activeWeapon[stat];
            // +10% dexterity if `bodybuilder` and using a heavy weapon
            if (fighter.bodybuilder && fighter.activeWeapon.types.includes(WeaponType.HEAVY)) {
                return weaponStat + 0.1;
            }
            return weaponStat;
        }
        return fighter.type === 'brute' ? BASE_FIGHTER_STATS[stat] : 0;
    }
    // Special case for tempo as it's either weapon or base
    if (stat === 'tempo') {
        if (fighter.activeWeapon) {
            return fighter.activeWeapon[stat];
        }
        return BASE_FIGHTER_STATS[stat];
    }
    let total = onlyStat === 'weapon' ? 0 : fighter[stat];
    if (onlyStat !== 'fighter') {
        if (fighter.activeWeapon) {
            total += fighter.activeWeapon[stat];
        }
        else {
            total += fighter.type === 'brute'
                ? BASE_FIGHTER_STATS[stat]
                : fighter.type === 'boss'
                    ? fighter[stat]
                    : 0;
        }
    }
    return total;
};
var resetOthersStats = (stats, excludedFighter, stat) => {
    for (var [bruteId, bruteStats] of Object.entries(stats)) {
        if (bruteId !== excludedFighter) {
            bruteStats[stat] = 0;
        }
    }
};
var updateStats = (stats, bruteId, stat, value, masterId) => {
    // Special case for hits, add to otherTeamMembersHits if not master
    if (stat === 'hits' && masterId) {
        var master = stats[masterId];
        if (master) {
            master.otherTeamMembersHits = (master.otherTeamMembersHits || 0) + value;
        }
        return;
    }
    var current = stats[bruteId];
    if (!current)
        return;
    if (value === 0) {
        current[stat] = 0;
    }
    else {
        current[stat] = (current[stat] || 0) + value;
    }
};
var checkAchievements = (stats, achievements) => {
    for (var [bruteId, stat] of Object.entries(stats)) {
        var achievement = achievements[bruteId];
        if (!achievement) {
            continue;
        }
        // Consecutive counters
        if (stat.consecutiveCounters && stat.consecutiveCounters >= 4) {
            (0, updateAchievement)(achievements, 'counter4b2b', 1, bruteId);
            stat.consecutiveCounters = 0;
        }
        // Consecutive reversals
        if (stat.consecutiveReversals && stat.consecutiveReversals >= 4) {
            (0, updateAchievement)(achievements, 'reversal4b2b', 1, bruteId);
            stat.consecutiveReversals = 0;
        }
        // Consecutive blocks
        if (stat.consecutiveBlocks && stat.consecutiveBlocks >= 4) {
            (0, updateAchievement)(achievements, 'block4b2b', 1, bruteId);
            stat.consecutiveBlocks = 0;
        }
        // Consecutive evades
        if (stat.consecutiveEvades && stat.consecutiveEvades >= 4) {
            (0, updateAchievement)(achievements, 'evade4b2b', 1, bruteId);
            stat.consecutiveEvades = 0;
        }
        // Consecutive throws
        if (stat.consecutiveThrows && stat.consecutiveThrows >= 10) {
            (0, updateAchievement)(achievements, 'throw10b2b', 1, bruteId);
            stat.consecutiveThrows = 0;
        }
    }
};
var getOpponents = ({ fightData, fighter, bruteOnly, petOnly, }) => {
    let opponents = [];
    // Remove backups not arrived yet and dead fighters
    opponents = fightData.fighters.filter((f) => !f.arrivesAtInitiative
        && f.hp > 0
        && f.team !== fighter.team);
    // Allow bosses too
    if (bruteOnly) {
        opponents = opponents.filter((f) => f.type === 'brute' || f.type === 'boss');
    }
    if (petOnly) {
        opponents = opponents.filter((f) => f.type === 'pet');
    }
    return opponents;
};
var getOpponents = getOpponents;
var getRandomOpponent = ({ fightData, fighter, bruteOnly, petOnly, nonTrappedOnly, }) => {
    let opponents = (0, getOpponents)({
        fightData,
        fighter,
        bruteOnly: bruteOnly || fightData.modifiers.includes(FightModifier.focusOpponent),
        petOnly,
    });
    // Filter out trapped pets
    opponents = opponents.filter((f) => f.type !== 'pet' || !f.trapped);
    if (nonTrappedOnly) {
        // Filter out trapped brutes
        opponents = opponents.filter((f) => !f.trapped);
    }
    if (!opponents.length) {
        return null;
    }
    return (0, randomItem)(opponents);
};
var saboteur = (fightData, achievements) => {
    fightData.fighters.filter((fighter) => fighter.type === 'brute' && !fighter.master).forEach((fighter) => {
        if (fighter.saboteur) {
            var opponent = getRandomOpponent({ fightData, fighter, bruteOnly: true });
            if (opponent && opponent.weapons.length > 0) {
                var sabotagedWeapon = (0, randomItem)(opponent.weapons);
                opponent.sabotagedWeapon = sabotagedWeapon;
                (0, updateAchievement)(achievements, 'saboteur', 1, fighter.id);
            }
        }
    });
};
var saboteur = saboteur;
var orderFighters = (fightData) => {
    fightData.fighters = fightData.fighters.sort((a, b) => {
        // Last if hp <= 0
        if (a.hp <= 0)
            return 1;
        if (b.hp <= 0)
            return -1;
        // Last if stunned
        if (a.stunned)
            return 1;
        if (b.stunned)
            return -1;
        // Random is initiatives are equal
        if (a.initiative === b.initiative) {
            return Math.random() > 0.5 ? 1 : -1;
        }
        // Lower initiative first
        return a.initiative - b.initiative;
    });
};
var orderFighters = orderFighters;
var randomlyGetSuper = (fightData, fighter) => {
    let supers = fighter.skills.filter((skill) => skill.uses);
    if (!supers.length)
        return null;
    // Filter out tamer if no dead pets
    if (fightData.fighters.filter((f) => f.type === 'pet' && f.hp <= 0).length === 0) {
        supers = supers.filter((skill) => skill.name !== SkillName.tamer);
    }
    // Filter out thief if opponents have no weapons in hand
    if ((0, getOpponents)({ fightData, fighter, bruteOnly: true })
        .filter((f) => f.activeWeapon).length === 0) {
        supers = supers.filter((skill) => skill.name !== SkillName.thief);
    }
    // Filter out tragicPotion if not poisoned or lost less than 50 HP
    if (!fighter.poisoned && fighter.hp > fighter.maxHp / 2) {
        supers = supers.filter((skill) => skill.name !== SkillName.tragicPotion);
    }
    // Filter out cryOfTheDamned and hypnosis if opponent has no non-trapped pets
    if ((0, getOpponents)({ fightData, fighter, petOnly: true })
        .filter((f) => !f.trapped).length === 0) {
        supers = supers.filter((skill) => skill.name !== SkillName.cryOfTheDamned
            && skill.name !== SkillName.hypnosis);
    }
    // Filter out flashFlood if less than 3 weapons
    if (fighter.weapons.length < 3) {
        supers = supers.filter((skill) => skill.name !== SkillName.flashFlood);
    }
    // Filter out net if no non-trapped fighters
    if ((0, getOpponents)({ fightData, fighter }).filter((f) => !f.trapped).length === 0) {
        supers = supers.filter((skill) => skill.name !== SkillName.net);
    }
    // Filter out vampirism if more than 50% hp
    if (fighter.hp > fighter.maxHp / 2) {
        supers = supers.filter((skill) => skill.name !== SkillName.vampirism);
    }
    // Filter out vampirism if no brute opponent
    if ((0, getOpponents)({ fightData, fighter, bruteOnly: true }).length === 0) {
        supers = supers.filter((skill) => skill.name !== SkillName.vampirism);
    }
    // Filter out treat if no pets lost hp and not trapped
    if (fightData.fighters.filter((f) => f.type === 'pet' && f.team === fighter.team && f.hp < f.maxHp && !f.trapped).length === 0) {
        supers = supers.filter((skill) => skill.name !== SkillName.treat);
    }
    if (!supers.length)
        return null;
    var NO_SUPER_TOSS = fightData.modifiers.includes(FightModifier.alwaysUseSupers) ? 0 : 10;
    var randomSuper = (0, randomBetween)(0, supers.reduce((acc, skill) => acc + (skill.toss || 0), -1) + NO_SUPER_TOSS);
    let toss = 0;
    for (let i = 0; i < supers.length; i += 1) {
        toss += supers[i]?.toss || 0;
        if (randomSuper < toss) {
            return supers[i];
        }
    }
    return null;
};
var randomlyDrawWeapon = (fightData, weapons, forceDraw) => {
    if (!weapons.length)
        return null;
    let totalToss = weapons.reduce((acc, weapon) => acc + (weapon.toss || 0), -1);
    if (!forceDraw && !fightData.modifiers.includes(FightModifier.drawEveryWeapon)) {
        totalToss += NO_WEAPON_TOSS;
    }
    var randomWeapon = (0, randomBetween)(0, totalToss);
    let toss = 0;
    for (let i = 0; i < weapons.length; i += 1) {
        toss += weapons[i]?.toss || 0;
        if (randomWeapon < toss) {
            return weapons[i];
        }
    }
    return null;
};
var randomlyDrawWeapon = randomlyDrawWeapon;
var healFighter = (stats, fighter, amount) => {
    fighter.hp += amount;
    // Heal stat
    updateStats(stats, fighter.id, 'hpHealed', amount);
};
var increaseInitiative = (fighter) => {
    var random = (0, randomBetween)(0, 10);
    let tempo = getFighterStat(fighter, 'tempo')
        * fighter.tempo
        + (random / 100);
    // Reduce tempo lost if fighter has `bodybuilder` and is using a heavy weapon
    if (fighter.activeWeapon && fighter.bodybuilder && fighter.activeWeapon.types.includes('heavy')) {
        tempo *= 0.75;
    }
    // Increase tempo lost if fighter has `monk`
    if (fighter.monk) {
        tempo *= 2;
    }
    fighter.initiative += tempo;
};
var fighterArrives = (fightData, fighter) => {
    var arriveWithWeapon = fightData.modifiers.includes(FightModifier.startWithWeapon);
    var step = {
        a: StepType.Arrive,
        f: fighter.index,
    };
    if (arriveWithWeapon) {
        // Randomly draw a weapon for the fighter
        var possibleWeapon = (0, randomlyDrawWeapon)(fightData, fighter.weapons, true);
        if (possibleWeapon) {
            // Equip weapon
            fighter.activeWeapon = possibleWeapon;
            fighter.keepWeaponChance = 0.5;
            // Remove weapon from possible weapons
            var weaponIndex = fighter.weapons.findIndex((w) => w.name === possibleWeapon.name);
            fighter.weapons.splice(weaponIndex, 1);
            // Add weapon to step
            step.w = WeaponByName[possibleWeapon.name];
        }
    }
    // Poison fighters (not for bosses)
    if (fighter.skills.find((skill) => skill.name === SkillName.chef)) {
        (0, getOpponents)({ fightData, fighter }).forEach((opponent) => {
            if (opponent.type !== 'boss') {
                opponent.poisoned = true;
            }
        });
    }
    fightData.steps.push(step);
};
var fighterArrives = fighterArrives;
var registerHit = (fightData, stats, achievements, fighter, opponents, damage, thrown, sourceName, flashFloodWeapon) => {
    var bombDamageRangeOnPets = {
        [PetName.dog1]: [90, 150],
        [PetName.dog2]: [90, 150],
        [PetName.dog3]: [90, 150],
        [PetName.panther]: [40, 80],
        [PetName.bear]: [15, 30],
    };
    var actualDamage = opponents.reduce((acc, opponent) => ({
        ...acc,
        [opponent.index]: (sourceName === 'bomb' && opponent.type === 'pet')
            ? Math.round((((0, randomBetween)(...bombDamageRangeOnPets[opponent.name]) / 100) * opponent.maxHp))
            : damage,
    }), {});
    opponents.forEach((opponent) => {
        // Remove the net and reset initiative
        if (opponent.trapped) {
            opponent.trapped = false;
            opponent.initiative = fightData.initiative + 0.5;
        }
        if (opponent.skills.find((sk) => sk.name === 'resistant')) {
            // Max damage to 20% of opponent's health if `resistant`
            actualDamage[opponent.index] = Math.min(damage, Math.floor(opponent.maxHp * 0.2));
            if ((actualDamage[opponent.index] ?? damage) < damage) {
                // Add resist step
                fightData.steps.push({
                    a: StepType.Resist,
                    b: opponent.index,
                });
            }
        }
        var opponentDamage = actualDamage[opponent.index] ?? damage;
        // Reduce backup leave time instead of reducing hp
        if (opponent.leavesAtInitiative) {
            opponent.leavesAtInitiative -= opponentDamage * 0.05;
        }
        else {
            opponent.hp -= opponentDamage;
        }
    });
    if (sourceName === 'bomb') {
        // Add bomb step
        fightData.steps.push({
            a: StepType.Bomb,
            f: fighter.index,
            t: opponents.map((opponent) => opponent.index),
            d: opponents.reduce((acc, curr) => {
                acc[curr.index] = actualDamage[curr.index] ?? damage;
                return acc;
            }, {}),
        });
    }
    else if (sourceName === 'vampirism') {
        var opponent = opponents[0];
        if (!opponent) {
            throw new Error('No opponent found');
        }
        // HP healed (100 - 200% of damage)
        var finalDamage = actualDamage[opponent.index] ?? damage;
        var heal = Math.floor(Math.min(finalDamage * (1 + Math.random()), fighter.maxHp - fighter.hp));
        healFighter(stats, fighter, heal);
        // Add vampirism step
        fightData.steps.push({
            a: StepType.Vampirism,
            b: fighter.index,
            t: opponent.index,
            d: actualDamage[opponent.index] ?? damage,
            h: heal,
        });
    }
    else if (sourceName === 'haste') {
        var opponent = opponents[0];
        if (!opponent) {
            throw new Error('No opponent found');
        }
        // Add haste step
        fightData.steps.push({
            a: StepType.Haste,
            b: fighter.index,
            t: opponent.index,
            d: actualDamage[opponent.index] ?? damage,
        });
    }
    else {
        opponents.forEach((opponent) => {
            var stepType = sourceName === 'hammer'
                ? StepType.Hammer
                : sourceName === 'flashFlood'
                    ? StepType.FlashFlood
                    : sourceName === 'poison'
                        ? StepType.Poison
                        : StepType.Hit;
            var step = {
                a: stepType,
                f: fighter.index,
                t: opponent.index,
                w: sourceName
                    ? (flashFloodWeapon
                        ? WeaponByName[flashFloodWeapon.name]
                        : undefined)
                    : fighter.activeWeapon ? WeaponByName[fighter.activeWeapon.name] : undefined,
                d: actualDamage[opponent.index] ?? damage,
            };
            // Reset consecutive hits
            if (sourceName !== 'poison') {
                fighter.hitBy[opponent.index] = 0;
            }
            // Remove stun if hit while stunned
            if (opponent.stunned) {
                opponent.stunned = false;
            }
            if (!thrown && !sourceName && !flashFloodWeapon && opponent.type === 'brute') {
                // Update consecutive hits
                opponent.hitBy[fighter.index] = (opponent.hitBy[fighter.index] || 0) + 1;
                // Stun opponent if 3 hits in a row
                if (fighter.skills.find((s) => s.name === SkillName.chaining)
                    && (opponent.hitBy[fighter.index] || 0) === 3) {
                    step.s = 1;
                    opponent.stunned = true;
                    opponent.hitBy[fighter.index] = 0;
                }
            }
            // Add hit step
            fightData.steps.push(step);
        });
    }
    // 50 Damage achievement
    var moreThan50 = Object.values(actualDamage).filter((d) => d >= 50).length;
    if (moreThan50) {
        (0, updateAchievement)(achievements, 'damage50once', moreThan50, fighter.id);
    }
    // 100 Damage achievement
    var moreThan100 = Object.values(actualDamage).filter((d) => d >= 100).length;
    if (moreThan100) {
        (0, updateAchievement)(achievements, 'damage100once', moreThan100, fighter.id);
    }
    // Max damage achievement
    var maxDamage = Math.max(...Object.values(actualDamage));
    if ((stats[fighter.id]?.maxDamage || 0) < maxDamage) {
        updateStats(stats, fighter.id, 'maxDamage', maxDamage - (stats[fighter.id]?.maxDamage || 0));
    }
    opponents.forEach((opponent) => {
        // Survive with 1 HP if `survival` skill
        if (opponent.survival && opponent.hp <= 1) {
            opponent.survival = false;
            opponent.hp = 1;
            // Add survival step
            fightData.steps.push({
                a: StepType.Survive,
                b: opponent.index,
            });
        }
    });
    // Update stats
    updateStats(stats, fighter.id, 'hits', 1, fighter.master);
};
var activateSuper = (fightData, fighter, skill, stats, achievements) => {
    // No uses left (should never happen)
    if (!skill.uses)
        return false;
    switch (skill.name) {
        // Steal opponent's weapon if he has one
        case SkillName.thief: {
            // Choose brute opponent
            var opponent = getRandomOpponent({ fightData, fighter, bruteOnly: true });
            if (!opponent) {
                return false;
            }
            // Abort if no weapon
            if (!opponent.activeWeapon)
                return false;
            // 20% chance to steal if fighter already has a weapon
            if (fighter.activeWeapon && (0, randomBetween)(1, 5) !== 1) {
                return false;
            }
            // Remove own weapon
            if (fighter.activeWeapon) {
                // Add trash step
                fightData.steps.push({
                    a: StepType.Trash,
                    b: fighter.index,
                    w: WeaponByName[fighter.activeWeapon.name],
                });
                fighter.activeWeapon = null;
            }
            // Add steal step
            fightData.steps.push({
                a: StepType.Steal,
                b: fighter.index,
                w: WeaponByName[opponent.activeWeapon.name],
                t: opponent.index,
            });
            // Set own weapon
            fighter.activeWeapon = opponent.activeWeapon;
            // Force keep weapon for the next turn
            fighter.keepWeaponChance = 1;
            // Remove opponent's weapon
            opponent.activeWeapon = null;
            // Increase opponent initiative
            opponent.initiative += 0.3 + opponent.tempo;
            // Update stats
            updateStats(stats, fighter.id, 'weaponsStolen', 1);
            break;
        }
        case SkillName.fierceBrute: {
            // Add skill to active skills
            fighter.activeSkills.push(skill);
            // Add skill activation step
            fightData.steps.push({
                a: StepType.SkillActivate,
                b: fighter.index,
                s: SkillByName[skill.name],
            });
            break;
        }
        case SkillName.tragicPotion: {
            let hpHealed = Math.floor(fighter.maxHp * (0.25 + Math.random() * 0.25));
            let poisonHeal = false;
            // Limit hp to max
            hpHealed = Math.min(hpHealed, fighter.maxHp - fighter.hp);
            healFighter(stats, fighter, hpHealed);
            if (fighter.poisoned) {
                fighter.poisoned = false;
                poisonHeal = true;
            }
            // Increas own initiative
            fighter.initiative += 0.15;
            // Add heal step
            fightData.steps.push({
                a: StepType.Heal,
                b: fighter.index,
                h: hpHealed,
                c: poisonHeal ? 1 : 0,
            });
            break;
        }
        case SkillName.net: {
            // Target pet first
            let opponent = getRandomOpponent({
                fightData, fighter, petOnly: true, nonTrappedOnly: true,
            });
            if (!opponent) {
                // Choose brute opponent if no pet
                opponent = getRandomOpponent({
                    fightData, fighter, bruteOnly: true, nonTrappedOnly: true,
                });
                if (!opponent) {
                    return false;
                }
            }
            // Set opponent's trapped status
            opponent.trapped = true;
            // Increase opponent initiative
            opponent.initiative += 1000;
            // Increase own initiative
            fighter.initiative += 0.2 * fighter.tempo;
            // Add trap step
            fightData.steps.push({
                a: StepType.Trap,
                b: fighter.index,
                t: opponent.index,
            });
            break;
        }
        case SkillName.bomb: {
            // Get opponents
            var opponents = (0, getOpponents)({ fightData, fighter });
            // Set random bomb damage
            var damage = 15 + (0, randomBetween)(0, 10);
            // Hit every opponent
            registerHit(fightData, stats, achievements, fighter, opponents, damage, true, 'bomb');
            // Increase own initiative
            fighter.initiative += 0.5 * fighter.tempo;
            break;
        }
        case SkillName.hammer: {
            // Only 20% to use the skill if fighter has a weapon
            if (fighter.activeWeapon) {
                if ((0, randomBetween)(1, 5) === 1) {
                    // Add trash step
                    fightData.steps.push({
                        a: StepType.Trash,
                        b: fighter.index,
                        w: WeaponByName[fighter.activeWeapon.name],
                    });
                    fighter.activeWeapon = null;
                }
                else {
                    return false;
                }
            }
            // Choose opponent
            var opponent = getRandomOpponent({ fightData, fighter, bruteOnly: true });
            if (!opponent) {
                return false;
            }
            // Add to active skills
            fighter.activeSkills.push(skill);
            // Get damage
            var damage = (0, getDamage)(fighter, opponent);
            // Add skill activation step
            fightData.steps.push({
                a: StepType.SkillActivate,
                b: fighter.index,
                s: SkillByName[skill.name],
            });
            // Add move step
            fightData.steps.push({
                a: StepType.Move,
                f: fighter.index,
                t: opponent.index,
                s: 1,
            });
            registerHit(fightData, stats, achievements, fighter, [opponent], damage, false, 'hammer');
            // Add move back step
            fightData.steps.push({
                a: StepType.MoveBack,
                f: fighter.index,
            });
            // Increase own initiative
            fighter.initiative += 1 * fighter.tempo;
            // Add skill expire step
            fightData.steps.push({
                a: StepType.SkillExpire,
                b: fighter.index,
                s: SkillByName[skill.name],
            });
            // Remove skill from active skills
            fighter.activeSkills = fighter.activeSkills.filter((s) => s.name !== skill.name);
            break;
        }
        case SkillName.cryOfTheDamned: {
            // Get opponent's non trapped pets
            var opponentPets = (0, getOpponents)({ fightData, fighter, petOnly: true })
                .filter((f) => !f.trapped);
            // Abort if no pet
            if (opponentPets.length === 0)
                return false;
            // Keep track of fear steps
            var fearSteps = [];
            for (var pet of opponentPets) {
                // 50% chance to fear the pet
                if ((0, randomBetween)(0, 1) === 0) {
                    fearSteps.push({
                        a: StepType.Leave,
                        f: pet.index,
                    });
                    // Remove pet from fight
                    fightData.fighters = fightData.fighters
                        .filter((f) => f.index !== pet.index);
                }
            }
            // Abort if no pet feared
            if (fearSteps.length === 0)
                return false;
            // Add skill activation step
            fightData.steps.push({
                a: StepType.SkillActivate,
                b: fighter.index,
                s: SkillByName[skill.name],
            });
            // Add fear steps
            fightData.steps = fightData.steps.concat(fearSteps);
            break;
        }
        case SkillName.hypnosis: {
            // Get opponent's non trapped pets
            var opponentPets = (0, getOpponents)({ fightData, fighter, petOnly: true })
                .filter((f) => !f.trapped);
            // Keep track of hypnotised pets
            var hypnotisedPets = [];
            for (var pet of opponentPets) {
                hypnotisedPets.push(pet.index);
                // Change pet owner
                pet.master = fighter.id;
                pet.team = fighter.team;
            }
            // Abort if no pet hypnotised
            if (hypnotisedPets.length === 0)
                return false;
            // Add hypnotise step
            fightData.steps.push({
                a: StepType.Hypnotise,
                b: fighter.index,
                p: hypnotisedPets,
            });
            break;
        }
        case SkillName.flashFlood: {
            // Choose opponent
            var opponent = getRandomOpponent({ fightData, fighter, bruteOnly: true });
            if (!opponent) {
                return false;
            }
            // Shuffle weapons
            var shuffledWeapons = [...fighter.weapons].sort(() => Math.random() - 0.5);
            // Get 3 weapons
            var weaponsToThrow = shuffledWeapons.slice(0, fighter.activeWeapon ? 2 : 3);
            // Remove those weapons from the fighter
            weaponsToThrow.forEach((w) => {
                var weaponIndex = fighter.weapons.findIndex((weapon) => weapon.name === w.name);
                fighter.weapons.splice(weaponIndex, 1);
            });
            // Add active weapon as first weapon if any
            if (fighter.activeWeapon) {
                weaponsToThrow.unshift(fighter.activeWeapon);
                fighter.activeWeapon = null;
            }
            // Add skill activation step
            fightData.steps.push({
                a: StepType.SkillActivate,
                b: fighter.index,
                s: SkillByName[skill.name],
            });
            // Get damages for each weapon
            var damages = [];
            weaponsToThrow.forEach((w) => {
                var damage = Math.floor((0, getDamage)(fighter, opponent, w) * 1.5);
                damages.push(damage);
                registerHit(fightData, stats, achievements, fighter, [opponent], damage, true, 'flashFlood', w);
            });
            // Add skill expire step
            fightData.steps.push({
                a: StepType.SkillExpire,
                b: fighter.index,
                s: SkillByName[skill.name],
            });
            // Increase own initiative
            fighter.initiative += 2 * fighter.tempo;
            break;
        }
        case SkillName.tamer: {
            // Get non eaten dead pets
            var deadPets = fightData.fighters.filter((f) => f.type === 'pet' && f.hp <= 0 && !f.eaten);
            if (deadPets.length === 0)
                return false;
            // Abort if less than 20 HP lost
            if (fighter.hp > fighter.maxHp - 20)
                return false;
            // Get random dead pet
            var pet = (0, randomItem)(deadPets);
            let healPercentage = 0;
            switch (pet.name) {
                case 'dog1':
                case 'dog2':
                case 'dog3':
                    // Heal 20% for a dog
                    healPercentage = 0.2;
                    break;
                case 'panther':
                    // Heal 30% for a panther
                    healPercentage = 0.3;
                    break;
                case 'bear':
                    // Heal 50% for a bear
                    healPercentage = 0.5;
                    break;
                default:
                    return false;
            }
            // Don't overheal
            var heal = Math.min(fighter.maxHp - fighter.hp, Math.floor(fighter.maxHp * healPercentage));
            // Heal fighter
            healFighter(stats, fighter, heal);
            // Increase own initiative
            fighter.initiative += 0.15;
            // Set pet as eaten
            pet.eaten = true;
            // Add move step
            fightData.steps.push({
                a: StepType.Move,
                f: fighter.index,
                t: pet.index,
                s: 1,
            });
            // Add eat step
            fightData.steps.push({
                a: StepType.Eat,
                b: fighter.index,
                t: pet.index,
                h: heal,
            });
            // Add moveBack step
            fightData.steps.push({
                a: StepType.MoveBack,
                f: fighter.index,
            });
            break;
        }
        case SkillName.vampirism: {
            // Choose opponent
            var opponent = getRandomOpponent({ fightData, fighter, bruteOnly: true });
            if (!opponent) {
                return false;
            }
            // Damage done (25% own missing hp)
            var damage = Math.floor((fighter.maxHp - fighter.hp) * 0.25);
            registerHit(fightData, stats, achievements, fighter, [opponent], damage, false, 'vampirism');
            // Increase own initiative
            fighter.initiative += 0.3 + fighter.tempo;
            break;
        }
        case SkillName.haste: {
            // Choose random opponent
            var opponent = getRandomOpponent({ fightData, fighter });
            if (!opponent) {
                return false;
            }
            // Damage done (usual + speed)
            var damage = (0, getDamage)(fighter, opponent) + fighter.speed;
            registerHit(fightData, stats, achievements, fighter, [opponent], damage, false, 'haste');
            // Increase own initiative
            fighter.initiative += 0.3 + fighter.tempo;
            break;
        }
        case SkillName.treat: {
            // Choose random ally pet
            var pets = fightData.fighters.filter((f) => f.type === 'pet' && f.team === fighter.team && f.hp > 0);
            var pet = pets.find((p) => p.hp < p.maxHp && !p.trapped);
            if (!pet) {
                return false;
            }
            // HP healed (max 50%)
            var heal = Math.min(Math.floor(pet.maxHp * 0.5), pet.maxHp - pet.hp);
            pet.hp += heal;
            // Add move step
            fightData.steps.push({
                a: StepType.Move,
                f: fighter.index,
                t: pet.index,
                s: 1,
            });
            // Add treat step
            fightData.steps.push({
                a: StepType.Treat,
                b: fighter.index,
                t: pet.index,
                h: heal,
            });
            // Add moveBack step
            fightData.steps.push({
                a: StepType.MoveBack,
                f: fighter.index,
            });
            // Increase own initiative
            fighter.initiative += 0.3 + fighter.tempo;
            break;
        }
        default:
            return false;
    }
    // Spend one use
    skill.uses -= 1;
    // Update stats
    updateStats(stats, fighter.id, 'skillsUsed', 1);
    // Remove skill if no uses left
    if (!skill.uses) {
        fighter.skills.splice(fighter.skills.findIndex((s) => s.name === skill.name), 1);
    }
    return true;
};
var counterAttack = (fighter, opponent) => {
    // No counter attack if opponent is dead
    if (opponent.hp <= 0)
        return false;
    // No counter attack if opponent is trapped
    if (opponent.trapped)
        return false;
    // No counter attack if opponent is stunned
    if (opponent.stunned)
        return false;
    var random = Math.random();
    var valueToBeat = (opponent.counter * 10
        + ((opponent.reach + (opponent.activeWeapon?.reach || 0))
            - (fighter.reach + (fighter.activeWeapon?.reach || 0)))) * 0.1;
    return random < valueToBeat;
};
// Returns true if weapon was sabotaged
var drawWeapon = (fightData, fighter) => {
    var bareHandsFirstHit = fightData.modifiers.includes(FightModifier.bareHandsFirstHit);
    // Don't draw a weapon if the fighter hasn't hit yet
    if (bareHandsFirstHit && !fighter.bareHandHit) {
        return false;
    }
    var drawEveryWeapon = fightData.modifiers.includes(FightModifier.drawEveryWeapon);
    // Don't always draw a weapon if the fighter is already holding a weapon
    if (fighter.activeWeapon
        && !drawEveryWeapon
        && (0, randomBetween)(0, fighter.weapons.length * 2) === 0)
        return false;
    // Draw a weapon
    var possibleWeapon = (0, randomlyDrawWeapon)(fightData, fighter.weapons);
    // Decrease `keepWeaponChance` each turn and abort until true
    if (!drawEveryWeapon && Math.random() < fighter.keepWeaponChance) {
        fighter.keepWeaponChance *= 0.5;
        return false;
    }
    // Abort if no weapon drawn
    if (!possibleWeapon)
        return false;
    // Trash old weapon if there is one
    if (fighter.activeWeapon) {
        // Add trash step
        fightData.steps.push({
            a: StepType.Trash,
            b: fighter.index,
            w: WeaponByName[fighter.activeWeapon.name],
        });
        // Remove weapon from fighter
        fighter.activeWeapon = null;
    }
    // Equip new weapon
    fighter.activeWeapon = possibleWeapon;
    // Set the chance to keep the weapon to 50%
    fighter.keepWeaponChance = 0.5;
    // Remove weapon from possible weapons
    var weaponIndex = fighter.weapons.findIndex((w) => w.name === possibleWeapon.name);
    fighter.weapons.splice(weaponIndex, 1);
    // Add equip step
    fightData.steps.push({
        a: StepType.Equip,
        b: fighter.index,
        w: WeaponByName[possibleWeapon.name],
    });
    // Check if weapon was sabotaged
    if (fighter.sabotagedWeapon?.name === possibleWeapon.name) {
        // Add saboteur step
        fightData.steps.push({
            a: StepType.Saboteur,
            b: fighter.index,
            w: WeaponByName[possibleWeapon.name],
        });
        // Remove weapon from fighter
        fighter.activeWeapon = null;
        fighter.sabotagedWeapon = null;
        // Increase own initiative
        fighter.initiative += 1;
        return true;
    }
    return false;
};
var block = (fighter, opponent, ease = 1) => {
    // No block if opponent is dead
    if (opponent.hp <= 0)
        return false;
    // No block if opponent is trapped
    if (opponent.trapped)
        return false;
    // No block if opponent is stunned
    if (opponent.stunned)
        return false;
    // No block for pets and bosses
    if (opponent.type === 'pet' || opponent.type === 'boss')
        return false;
    return Math.random() * ease
        < (getFighterStat(opponent, 'block')
            - getFighterStat(fighter, 'accuracy', 'weapon'));
};
var evade = (fighter, opponent, difficulty = 1) => {
    // No evasion if opponent is dead
    if (opponent.hp <= 0)
        return false;
    // No evasion if opponent is trapped
    if (opponent.trapped)
        return false;
    // No evasion if opponent is stunned
    if (opponent.stunned)
        return false;
    // Automatically evade if `balletShoes`
    if (opponent.balletShoes) {
        // Disable ballet shoes
        opponent.balletShoes = false;
        return true;
    }
    // Get agility difference (-40 > diff > 40)
    var agilityDifference = Math.min(Math.max(-40, (opponent.agility - fighter.agility) * 2), 40);
    var random = Math.random();
    return random * difficulty
        < Math.min((getFighterStat(opponent, 'evasion')
            + agilityDifference * 0.01
            - getFighterStat(fighter, 'accuracy', 'fighter')
            - getFighterStat(fighter, 'dexterity')), 0.9);
};
var breakShield = (fighter, opponent) => {
    // Can't break someone's shield if they are not holding a shield >.>
    if (!opponent.shield)
        return false;
    return getFighterStat(fighter, 'disarm') * 100 >= (0, randomBetween)(1, 300);
};
var disarm = (fighter, opponent, thrown) => {
    // Can't disarm someone if they are not holding a weapon >.>
    if (!opponent.activeWeapon)
        return false;
    return getFighterStat(fighter, 'disarm', thrown ? 'weapon' : undefined) * 100 >= (0, randomBetween)(1, 100);
};
var disarmAttacker = (fighter, opponent) => {
    // Can't disarm someone if they are not holding a weapon >.>
    if (!fighter.activeWeapon)
        return false;
    // Only disarm if opponent has `ironHead`
    if (!opponent.ironHead)
        return false;
    // 50% chance to disarm the attacker
    return Math.random() < 0.5;
};
var reversal = (opponent, blocked) => {
    // No reversal if stunned
    if (opponent.stunned)
        return false;
    var random = Math.random();
    let reversalStat = getFighterStat(opponent, 'reversal');
    // Special case when blocking with counterAttack (+90%)
    if (blocked && opponent.skills.find((sk) => sk.name === SkillName.counterAttack)) {
        reversalStat += 0.9;
    }
    return random < reversalStat;
};
var deflectProjectile = (fighter) => {
    // No deflect if dead
    if (fighter.hp <= 0)
        return false;
    // No deflect if trapped
    if (fighter.trapped)
        return false;
    // No deflect if stunned
    if (fighter.stunned)
        return false;
    var random = Math.random();
    return random < getFighterStat(fighter, 'deflect');
};
var attack = (fightData, fighter, opponent, stats, achievements, isCounter = false) => {
    // Abort if fighter is dead
    if (fighter.hp <= 0)
        return { blocked: false };
    // Get damage
    let damage = (0, getDamage)(fighter, opponent);
    var blocked = block(fighter, opponent);
    var evaded = evade(fighter, opponent);
    var brokeShield = breakShield(fighter, opponent);
    // Prepare attempt step
    var attemptStep = {
        a: StepType.AttemptHit,
        f: fighter.index,
        t: opponent.index,
        w: fighter.activeWeapon ? WeaponByName[fighter.activeWeapon.name] : undefined,
    };
    // Check if opponent evaded
    if (evaded) {
        // Add attempt step as is
        fightData.steps.push(attemptStep);
        damage = 0;
        // Add evade step
        fightData.steps.push({
            a: StepType.Evade,
            f: opponent.index,
        });
        // Update evasion stat
        updateStats(stats, opponent.id, 'evades', 1);
        updateStats(stats, opponent.id, 'consecutiveEvades', 1);
        checkAchievements(stats, achievements);
    }
    else {
        // Reset evasion stat
        updateStats(stats, opponent.id, 'consecutiveEvades', 0);
        // Check if the opponent shield broke
        if (brokeShield) {
            // Update disarm stat
            updateStats(stats, fighter.id, 'disarms', 1);
            // Add attempt step with shield break
            attemptStep.b = 1;
            fightData.steps.push(attemptStep);
            // Remove shield from opponent
            opponent.shield = false;
            opponent.block -= SHIELD_BLOCK_ODDS;
        }
        else {
            // Add attempt step as is
            fightData.steps.push(attemptStep);
        }
        // Check if opponent blocked
        if (blocked) {
            damage = 0;
            // Add block step
            fightData.steps.push({
                a: StepType.Block,
                f: opponent.index,
            });
            // Update block stat
            updateStats(stats, opponent.id, 'blocks', 1);
            updateStats(stats, opponent.id, 'consecutiveBlocks', 1);
            checkAchievements(stats, achievements);
        }
        else {
            // Reset block stat
            updateStats(stats, opponent.id, 'consecutiveBlocks', 0);
        }
    }
    // Check if the fighter sabotages an opponent's weapon
    if (damage && fighter.sabotage) {
        // 90% chance to sabotage
        if (opponent.weapons.length && Math.random() < 0.9) {
            // Remove a random weapon
            var weapon = opponent.weapons.splice((0, randomBetween)(0, opponent.weapons.length - 1), 1)[0];
            if (!weapon) {
                throw new Error('No weapon found');
            }
            // Add sabotage step
            fightData.steps.push({
                a: StepType.Sabotage,
                f: fighter.index,
                t: opponent.index,
                w: WeaponByName[weapon.name],
            });
        }
    }
    // Check if the fighter disarms the opponent
    if (damage && disarm(fighter, opponent)) {
        if (opponent.activeWeapon) {
            // Add disarm step
            fightData.steps.push({
                a: StepType.Disarm,
                f: fighter.index,
                t: opponent.index,
                w: WeaponByName[opponent.activeWeapon.name],
            });
            // Remove weapon from opponent
            opponent.activeWeapon = null;
            // Update disarm stat
            updateStats(stats, fighter.id, 'disarms', 1);
        }
    }
    // Register hit if damage was done
    if (damage) {
        registerHit(fightData, stats, achievements, fighter, [opponent], damage);
        // Register first bare hands hit
        if (!fighter.activeWeapon && !fighter.bareHandHit) {
            fighter.bareHandHit = true;
        }
    }
    // Check if the fighter gets disarmed
    if (damage && disarmAttacker(fighter, opponent)) {
        if (fighter.activeWeapon) {
            // Add disarm step
            fightData.steps.push({
                a: StepType.Disarm,
                f: opponent.index,
                t: fighter.index,
                w: WeaponByName[fighter.activeWeapon.name],
            });
            // Remove weapon from fighter
            fighter.activeWeapon = null;
            // Update disarm stat
            updateStats(stats, opponent.id, 'disarms', 1);
        }
    }
    // Randomly trigger another attack if the fighter has `determination`
    if (!isCounter && !damage && fighter.determination && Math.random() < 0.7) {
        fighter.retryAttack = true;
    }
    var reversed = reversal(opponent, blocked);
    return {
        blocked: !evaded && blocked,
        reversed: !evaded && reversed,
    };
};
var checkDeaths = (fightData, stats) => {
    for (var fighter of fightData.fighters) {
        // Only add death step if fighter is dead and hasn't died yet
        if (fighter.hp <= 0 && fightData.steps.filter((step) => step.a === StepType.Death
            && step.f === fighter.index).length === 0) {
            // Add death step
            fightData.steps.push({
                a: StepType.Death,
                f: fighter.index,
            });
            // Update pet kills stat
            if (fighter.type === 'pet') {
                var { master } = fighter;
                if (!master) {
                    throw new Error('Pet without master');
                }
                var opponents = (0, getOpponents)({ fightData, fighter, bruteOnly: true });
                opponents.forEach((opponent) => {
                    updateStats(stats, opponent.id, 'petsKilled', 1);
                });
            }
            // Set loser if team has no brutes or bosses alive
            if (!fightData.loser && fightData.fighters.filter((f) => f.team === fighter.team
                && !f.master
                && f.hp > 0).length === 0) {
                fightData.loser = fighter.id;
            }
        }
    }
};
var checkDeaths = checkDeaths;
var startAttack = (fightData, stats, achievements, fighter, opponent, isCounter) => {
    // Keep track of initial fighter HP
    var initialFighterHp = fighter.hp;
    // Was opponent trapped ?
    let opponentWasTrapped = opponent.trapped;
    var attackResult = {
        blocked: false,
        reversed: false,
    };
    // Trigger fighter attack
    var { blocked, reversed, } = attack(fightData, fighter, opponent, stats, achievements, isCounter);
    // Keep track of attack status
    if (blocked)
        attackResult.blocked = true;
    if (reversed)
        attackResult.reversed = true;
    // Keep track of attacks
    let attacksCount = 1;
    // Get combo chances
    let combo = getFighterStat(fighter, 'combo') + (fighter.agility * 0.01);
    // Repeat attack only if not countering
    if (!isCounter) {
        let random = Math.random();
        while (!attackResult.reversed && (random < combo || fighter.retryAttack)) {
            // Reset retry attack flag
            fighter.retryAttack = false;
            // Stop the combo if the fighter took a hit
            if (fighter.hp < initialFighterHp) {
                break;
            }
            // Decrease combo chances
            combo *= 0.5;
            // Trigger fighter attack
            var { blocked: comboBlocked, reversed: comboReversed, } = attack(fightData, fighter, opponent, stats, achievements);
            attacksCount++;
            // Keep track of attack status
            if (comboBlocked)
                attackResult.blocked = true;
            if (comboReversed)
                attackResult.reversed = true;
            // Opponent cannot be trapped starting from the second attack
            opponentWasTrapped = false;
            random = Math.random();
        }
        // Check if the opponent reverses the attack
        if (!opponentWasTrapped && attackResult.reversed) {
            // Update reversal stat
            updateStats(stats, opponent.id, 'consecutiveReversals', 1);
            checkAchievements(stats, achievements);
            // Check if the opponent has less reach than the fighter, and move them closer
            var opponentReach = opponent.activeWeapon?.reach ?? 0;
            var fighterReach = fighter.activeWeapon?.reach ?? 0;
            if (opponentReach < fighterReach) {
                // Add move step
                fightData.steps.push({
                    a: StepType.Move,
                    f: opponent.index,
                    t: fighter.index,
                    r: 1,
                });
            }
            // Trigger fighter attack
            attack(fightData, opponent, fighter, stats, achievements);
        }
        else {
            // Reset reversal stat
            updateStats(stats, opponent.id, 'consecutiveReversals', 0);
        }
        // Achievement for combos
        if (attacksCount === 3) {
            (0, updateAchievement)(achievements, 'combo3', 1, fighter.id);
        }
        else if (attacksCount === 4) {
            (0, updateAchievement)(achievements, 'combo4', 1, fighter.id);
        }
        else if (attacksCount >= 5) {
            (0, updateAchievement)(achievements, 'combo5', 1, fighter.id);
        }
    }
    // Reset retry attack flag
    fighter.retryAttack = false;
    // Check if a fighter is dead
    (0, checkDeaths)(fightData, stats);
};
var playFighterTurn = (fightData, stats, achievements) => {
    var fighter = fightData.fighters[0];
    if (!fighter) {
        throw new Error('No fighter found');
    }
    // Reset throw counter
    resetOthersStats(stats, fighter.id, 'consecutiveThrows');
    // Check if backup should leave
    if (fighter.leavesAtInitiative && fighter.leavesAtInitiative <= fightData.initiative) {
        // Add backup leave step
        fightData.steps.push({
            a: StepType.Leave,
            f: fighter.index,
        });
        fightData.fighters.shift();
        return;
    }
    // Check if backup should arrive
    if (fighter.arrivesAtInitiative) {
        fighter.arrivesAtInitiative = undefined;
        // Add backup arrive step
        (0, fighterArrives)(fightData, fighter);
    }
    // Super activation
    var possibleSuper = randomlyGetSuper(fightData, fighter);
    if (possibleSuper) {
        // End turn if super activated
        if (activateSuper(fightData, fighter, possibleSuper, stats, achievements)) {
            return;
        }
    }
    // Draw weapon
    var sabotaged = drawWeapon(fightData, fighter);
    // End turn if weapon was sabotaged
    if (sabotaged) {
        return;
    }
    // Get attack type (more chances to throw a weapon the less damage it does)
    let attackType = fighter.activeWeapon?.types.includes('thrown')
        ? 'thrown'
        : fighter.activeWeapon
            ? fighter.skills.find((s) => s.name === 'hideaway')
                // 50% chance to throw a weapon if the fighter has `hideaway`
                ? (0, randomBetween)(0, 1) === 0
                    ? 'thrown'
                    : 'melee'
                // 1/28 chance to throw a weapon otherwise
                : (0, randomBetween)(0, 27) === 0
                    ? 'thrown' : 'melee'
            : 'melee';
    if (attackType === 'thrown' && fightData.modifiers.includes(FightModifier.noThrows)) {
        attackType = 'melee';
    }
    // Get opponent
    var opponent = getRandomOpponent({ fightData, fighter });
    if (!opponent) {
        return;
    }
    // Melee attack
    if (attackType === 'melee') {
        var countered = !opponent.trapped && counterAttack(fighter, opponent);
        // Add move step
        fightData.steps.push({
            a: StepType.Move,
            f: fighter.index,
            t: opponent.index,
            c: countered ? 1 : 0,
        });
        // Check if opponent is not trapped and countered
        if (countered) {
            // Update counter stat
            updateStats(stats, opponent.id, 'counters', 1);
            updateStats(stats, fighter.id, 'countersTriggered', 1);
            updateStats(stats, opponent.id, 'consecutiveCounters', 1);
            checkAchievements(stats, achievements);
            // Add counter step
            fightData.steps.push({
                a: StepType.Counter,
                f: opponent.index,
                t: fighter.index,
            });
            // Opponent attacks fighter
            startAttack(fightData, stats, achievements, opponent, fighter, true);
        }
        else {
            // Reset counter stat
            updateStats(stats, opponent.id, 'consecutiveCounters', 0);
            // Fighter attacks opponent
            startAttack(fightData, stats, achievements, fighter, opponent);
        }
        // Check if fighter is not dead
        if (fighter.hp > 0) {
            // Add moveBack step
            fightData.steps.push({
                a: StepType.MoveBack,
                f: fighter.index,
            });
        }
    }
    else {
        // Throw attack
        if (!fighter.activeWeapon) {
            throw new Error('Trying to throw a weapon but no weapon is active');
        }
        // Keep weapon if it's a thrown weapon or the fighter has `hideaway`
        var keepWeapon = fighter.activeWeapon.types.includes('thrown') || !!fighter.skills.find((s) => s.name === 'hideaway');
        let firstThrow = true;
        // Get combo chances
        let combo = getFighterStat(fighter, 'combo') + (fighter.agility * 0.01);
        let random = Math.random();
        while (firstThrow || (keepWeapon && random < combo)) {
            if (!fighter.activeWeapon) {
                break;
            }
            // Check if fighter is not dead (hit by a deflected weapond for example)
            if (fighter.hp <= 0) {
                break;
            }
            var thrownWeapon = fighter.activeWeapon;
            let deflected = null;
            let currentFighter = fighter;
            let currentOpponent = opponent;
            let timesDeflected = 0;
            while (deflected === null || deflected) {
                // Add throw step
                fightData.steps.push({
                    a: StepType.Throw,
                    f: currentFighter.index,
                    t: currentOpponent.index,
                    w: WeaponByName[thrownWeapon.name],
                    k: keepWeapon ? 1 : 0,
                    r: deflected ? 1 : 0,
                });
                deflected = deflectProjectile(currentOpponent);
                let damage = 0;
                // Get damage
                if (!deflected) {
                    damage = (0, getDamage)(currentFighter, currentOpponent, thrownWeapon);
                    // Increase damage by 50% for each deflection
                    damage = Math.floor(damage * (1.5 ** timesDeflected));
                }
                // Update consecutive throw stat
                updateStats(stats, currentFighter.id, 'consecutiveThrows', 1);
                checkAchievements(stats, achievements);
                // Check if opponent blocked (harder than melee)
                if (!deflected && block(currentFighter, currentOpponent, 2)) {
                    damage = 0;
                    // Add block step
                    fightData.steps.push({
                        a: StepType.Block,
                        f: currentOpponent.index,
                    });
                    // Update block stat
                    updateStats(stats, currentOpponent.id, 'blocks', 1);
                    updateStats(stats, currentOpponent.id, 'consecutiveBlocks', 1);
                    checkAchievements(stats, achievements);
                }
                else {
                    // Reset block stat
                    updateStats(stats, currentOpponent.id, 'consecutiveBlocks', 0);
                }
                // Check if opponent evaded (harder than melee)
                if (damage && evade(currentFighter, currentOpponent, 2)) {
                    damage = 0;
                    // Add evade step
                    fightData.steps.push({
                        a: StepType.Evade,
                        f: currentOpponent.index,
                    });
                    // Update evade stat
                    updateStats(stats, currentOpponent.id, 'consecutiveEvades', 1);
                    checkAchievements(stats, achievements);
                }
                else {
                    // Reset evade stat
                    updateStats(stats, currentOpponent.id, 'consecutiveEvades', 0);
                }
                // Register hit if damage was done
                if (damage) {
                    registerHit(fightData, stats, achievements, currentFighter, [currentOpponent], damage, true);
                    // Disarm
                    if (disarm(currentFighter, currentOpponent, true)) {
                        if (currentOpponent.activeWeapon) {
                            // Add disarm step
                            fightData.steps.push({
                                a: StepType.Disarm,
                                f: currentFighter.index,
                                t: currentOpponent.index,
                                w: WeaponByName[currentOpponent.activeWeapon.name],
                            });
                            // Remove weapon from opponent
                            currentOpponent.activeWeapon = null;
                            // Update disarm stat
                            updateStats(stats, currentFighter.id, 'disarms', 1);
                        }
                    }
                }
                // Swap fighters if the weapon was returned
                if (deflected) {
                    [currentFighter, currentOpponent] = [currentOpponent, currentFighter];
                    timesDeflected++;
                }
            }
            // Remove fighter weapon
            if (!keepWeapon) {
                fighter.activeWeapon = null;
            }
            firstThrow = false;
            combo *= 0.5;
            random = Math.random();
        }
        // Check if a fighter is dead
        (0, checkDeaths)(fightData, stats);
    }
    // Check if fighter is poisoned
    if (!fightData.loser && fighter.hp > 0 && fighter.poisoned) {
        // Get poison damage
        var poisonDamage = Math.ceil(fighter.maxHp / 50);
        // Get poisoner
        var poisoner = (0, getOpponents)({ fightData, fighter, bruteOnly: true })
            .find((f) => f.skills.find((s) => s.name === SkillName.chef))
            || getRandomOpponent({ fightData, fighter, bruteOnly: true });
        if (poisoner) {
            // Register the hit
            registerHit(fightData, stats, achievements, poisoner, [fighter], poisonDamage, false, 'poison');
        }
    }
    increaseInitiative(fighter);
    // Remove active skills
    fighter.activeSkills.forEach((skill) => {
        // Add skill expire step
        fightData.steps.push({
            a: StepType.SkillExpire,
            b: fighter.index,
            s: SkillByName[skill.name],
        });
    });
    fighter.activeSkills = [];
};
var playFighterTurn = playFighterTurn;
var generateFight = async ({ prisma, team1, team2, modifiers, backups, achievements, tournament, clanId, clanWar, }) => {
    if (team1.brutes?.some((brute) => team2.brutes?.some((b) => b.id === brute.id))) {
        throw new ExpectedError('Attempted to created a fight between the same brutes');
    }
    var background = (team1.bosses?.length || team2.bosses?.length)
        ? bossBackground
        : tournament
            ? tournamentBackground
            : (0, weightedRandom)(fightBackgrounds);
    // Achievements
    var achievementsStore = {};
    // Stats
    var stats = {};
    team1.brutes?.concat(team2.brutes ?? []).forEach((brute) => {
        achievementsStore[brute.id] = {
            userId: brute.userId,
            achievements: {},
        };
        stats[brute.id] = {
            userId: brute.userId,
        };
    });
    // Get brute backups
    var team1Backups = [];
    var team2Backups = [];
    if (backups) {
        var brute1 = team1.brutes?.[0];
        var brute2 = team2.brutes?.[0];
        if (!brute1) {
            throw new Error('No brute 1');
        }
        var brute1Backups = await prisma.brute.findMany({
            where: {
                skills: { has: 'backup' },
                level: { lt: brute1.level },
                userId: brute1.userId,
                deletedAt: null,
            },
        });
        if (brute1Backups.length) {
            team1Backups.push((0, randomItem)(brute1Backups));
        }
        if (brute2) {
            var brute2Backups = await prisma.brute.findMany({
                where: {
                    skills: { has: 'backup' },
                    level: { lt: brute2.level },
                    userId: brute2.userId,
                    deletedAt: null,
                },
            });
            if (brute2Backups.length) {
                team2Backups.push((0, randomItem)(brute2Backups));
            }
        }
    }
    // Global fight data
    var fightDataFighters = await (0, getFighters)({
        prisma,
        team1: { brutes: team1.brutes ?? [], backups: team1Backups, bosses: team1.bosses ?? [] },
        team2: { brutes: team2.brutes ?? [], backups: team2Backups, bosses: team2.bosses ?? [] },
        modifiers,
        clanFight: clanWar,
    });
    var fightData = {
        modifiers,
        fighters: fightDataFighters,
        initialFighters: JSON.parse(JSON.stringify(fightDataFighters)),
        steps: [],
        initiative: 0,
        winner: null,
        loser: null,
    };
    // Add arrive step for all fighters
    fightData.fighters.forEach((fighter) => {
        // Ignore backups
        if (fighter.type === 'brute' && fighter.master) {
            return;
        }
        (0, fighterArrives)(fightData, fighter);
    });
    // Add spy steps (only 1v1)
    if (team1.brutes?.length === 1 && team2.brutes?.length === 1) {
        var leftFighter = fightData.fighters.find((fighter) => fighter.id === team1.brutes?.[0]?.id);
        var rightFighter = fightData.fighters.find((fighter) => fighter.id === team2.brutes?.[0]?.id);
        if (!leftFighter || !rightFighter) {
            throw new Error('Fighter not found');
        }
        (0, applySpy)(fightData, leftFighter, rightFighter);
        (0, applySpy)(fightData, rightFighter, leftFighter);
    }
    // Pre-fight saboteur
    (0, saboteur)(fightData, achievementsStore);
    let turn = 0;
    // Fight loop
    while (!fightData.loser && turn < 2000) {
        // Order fighters by initiative (random if equal)
        (0, orderFighters)(fightData);
        var firstFighter = fightData.fighters[0];
        if (!firstFighter) {
            // No fighters left
            break;
        }
        // Set current initiative to first fighter
        fightData.initiative = firstFighter.initiative;
        // Poison fighters if turn > 1000
        if (turn > 1000) {
            fightData.fighters.forEach((fighter) => {
                fighter.poisoned = true;
            });
        }
        // Play fighter turn
        (0, playFighterTurn)(fightData, stats, achievementsStore);
        // Check deaths
        (0, checkDeaths)(fightData, stats);
        turn += 1;
    }
    if (!fightData.loser) {
        throw new Error('Fight not finished');
    }
    // Get loser
    var loser = fightData.fighters.find((fighter) => fighter.id === fightData.loser);
    if (!loser) {
        throw new Error('No loser found');
    }
    // Get winner
    var winner = loser.team === 'L'
        ? fightData.fighters.find((fighter) => fighter.team === 'R' && (fighter.type === 'boss' || fighter.id === team2.brutes?.[0]?.id))
        : fightData.fighters.find((fighter) => fighter.team === 'L' && (fighter.type === 'boss' || fighter.id === team1.brutes?.[0]?.id));
    if (!winner) {
        throw new Error('No winner found');
    }
    // Set fight winner and loser
    fightData.winner = winner.id;
    // Add end step
    fightData.steps.push({
        a: StepType.End,
        w: winner.index,
        l: loser.index,
    });
    // Reduce the size of the fighters data
    var fighters = fightData.initialFighters.map((fighter) => ({
        id: fighter.id,
        index: fighter.index,
        team: fighter.team,
        name: fighter.name,
        gender: fighter.gender,
        body: fighter.body,
        colors: fighter.colors,
        rank: fighter.rank,
        level: fighter.level,
        agility: fighter.agility,
        strength: fighter.strength,
        speed: fighter.speed,
        type: fighter.type,
        master: fighter.master,
        maxHp: fighter.maxHp,
        hp: fighter.hp,
        weapons: fighter.weapons.map((weapon) => WeaponByName[weapon.name]),
        skills: fighter.skills.map((skill) => SkillByName[skill.name]),
        shield: fighter.shield,
    }));
    var brute1 = team1.brutes?.[0];
    var brute2 = team2.brutes?.[0];
    if (!brute1) {
        throw new Error('No brute 1');
    }
    var result = {
        data: {
            brute1: { connect: { id: brute1.id } },
            winner: winner.name,
            loser: loser.name,
            steps: JSON.stringify(fightData.steps),
            fighters: JSON.stringify(fighters),
            background: background.name,
        },
    };
    if (brute2) {
        result.data.brute2 = { connect: { id: brute2.id } };
    }
    if (team1.bosses?.length || team2.bosses?.length) {
        // Update clan limit and boss if boss slain
        var bossFighter = fightData.fighters.find((fighter) => fighter.type === 'boss');
        if (bossFighter && bossFighter.hp <= 0) {
            var clan = await prisma.clan.findUnique({
                where: { id: clanId },
                select: {
                    limit: true,
                    brutes: {
                        select: {
                            id: true,
                            userId: true,
                        },
                    },
                    bossDamages: {
                        select: {
                            brute: {
                                select: {
                                    id: true,
                                    userId: true,
                                },
                            },
                        },
                    },
                },
            });
            if (!clan) {
                throw new Error('Clan not found');
            }
            // Combine all bruteIds
            var bruteIds = new Set(clan.brutes.map((brute) => brute.id));
            clan.bossDamages.forEach((damage) => {
                bruteIds.add(damage.brute.id);
            });
            // Get brutes that already have a BossTicket
            var brutesWithTicket = await prisma.inventoryItem.findMany({
                where: {
                    bruteId: { in: Array.from(bruteIds) },
                    type: InventoryItemType.bossTicket,
                },
                select: {
                    bruteId: true,
                },
            });
            // Add 1x BossTicket to those brutes
            await prisma.inventoryItem.updateMany({
                where: {
                    bruteId: { in: brutesWithTicket.map((brute) => brute.bruteId ?? '') },
                    type: InventoryItemType.bossTicket,
                },
                data: {
                    count: { increment: 1 },
                },
            });
            // Get brutes that don't have a BossTicket
            var brutesWithoutTicket = Array.from(bruteIds)
                .filter((bruteId) => !brutesWithTicket.find((brute) => brute.bruteId === bruteId));
            // Add 1x BossTicket to those brutes
            await prisma.inventoryItem.createMany({
                data: brutesWithoutTicket.map((bruteId) => ({
                    bruteId,
                    type: InventoryItemType.bossTicket,
                    count: 1,
                })),
            });
            // Update clan
            await prisma.clan.update({
                where: { id: clanId },
                data: {
                    // Set new boss
                    boss: (0, randomItem)(bosses).name,
                    damageOnBoss: 0,
                    // Increase clan limit
                    limit: Math.min(CLAN_SIZE_LIMIT, clan.limit + 5),
                    // +1000 points
                    points: { increment: 1000 },
                    // Reset boss damages
                    bossDamages: {
                        deleteMany: {},
                    },
                },
            });
            // Give gold to users
            var userIds = new Set(clan.brutes.map((brute) => brute.userId || ''));
            clan.bossDamages.forEach((damage) => {
                userIds.add(damage.brute.userId || '');
            });
            var goldGains = Math.floor(BOSS_GOLD_REWARD / userIds.size);
            await prisma.user.updateMany({
                where: { id: { in: Array.from(userIds) } },
                data: {
                    gold: { increment: goldGains },
                },
            });
            // Add log
            await prisma.log.createMany({
                data: Array.from(bruteIds).map((bruteId) => ({
                    type: LogType.bossDefeat,
                    gold: goldGains,
                    currentBruteId: bruteId,
                })),
            });
            result.boss = {
                xp: 0,
                gold: goldGains,
            };
        }
        else {
            // Update damage on boss + store it
            var initialBoss = fightData.initialFighters.find((fighter) => fighter.type === 'boss');
            var finalBoss = fightData.fighters.find((fighter) => fighter.type === 'boss');
            if (!initialBoss || !finalBoss) {
                throw new Error('Boss not found');
            }
            if (!clanId) {
                throw new Error('Clan ID not found');
            }
            var damage = initialBoss.hp - finalBoss.hp;
            await prisma.clan.update({
                where: { id: clanId },
                data: {
                    damageOnBoss: { increment: damage },
                    bossDamages: {
                        upsert: {
                            where: {
                                bruteId_clanId: {
                                    bruteId: winner.type === 'brute' ? winner.id : loser.id,
                                    clanId,
                                },
                            },
                            update: { damage: { increment: damage } },
                            create: {
                                damage,
                                bruteId: winner.type === 'brute' ? winner.id : loser.id,
                            },
                        },
                    },
                },
            });
        }
    }
    // Add achievements from stats
    (0, handleStats)(fightData, stats, achievementsStore, tournament);
    // Update achievements
    if (achievements) {
        await (0, updateAchievements)(prisma, achievementsStore, !!tournament);
    }
    return result;
};var getDamage = (fighter, opponent, thrown) => {
    var base = thrown
        ? thrown.damage
        : (fighter.activeWeapon?.damage || fighter.baseDamage);
    let skillsMultiplier = 1;
    // Using Piledriver ?
    var piledriver = fighter.activeSkills.find((sk) => sk.name === 'hammer');
    // +50% damage for `weaponsMaster` on sharp weapons
    if (fighter.activeWeapon?.types.includes('sharp') && fighter.skills.find((sk) => sk.name === 'weaponsMaster') && !thrown) {
        skillsMultiplier += 0.5;
    }
    if (!piledriver) {
        // +100% damage for `martialArts` without a weapon or with a mug
        if ((!fighter.activeWeapon || fighter.activeWeapon.name === 'mug') && fighter.skills.find((sk) => sk.name === 'martialArts') && !thrown) {
            skillsMultiplier += 1;
        }
    }
    // -30% damage if opponent has `leadSkeleton` and weapon is blunt
    if (opponent.skills.find((sk) => sk.name === 'leadSkeleton') && fighter.activeWeapon?.types.includes('blunt') && !thrown) {
        skillsMultiplier -= 0.3;
    }
    // x2 damage for if skill `fierceBrute` is active
    if (fighter.activeSkills.find((sk) => sk.name === 'fierceBrute')) {
        skillsMultiplier *= 2;
    }
    // x4 damage for `piledriver`
    if (piledriver) {
        skillsMultiplier *= 4;
    }
    let damage = 0;
    if (thrown) {
        damage = Math.floor((base + fighter.strength * 0.1 + fighter.agility * 0.15)
            * (1 + Math.random() * 0.5) * skillsMultiplier);
    }
    else if (piledriver) {
        damage = Math.floor((10 + opponent.strength * 0.6)
            * (0.8 + Math.random() * 0.4) * skillsMultiplier);
    }
    else {
        damage = Math.floor((base + fighter.strength * (0.2 + base * 0.05))
            * (0.8 + Math.random() * 0.4) * skillsMultiplier);
    }
    // -25% damage if fighter uses a damaged weapon
    if (fighter.activeWeapon && fighter.damagedWeapons.includes(fighter.activeWeapon.name)) {
        damage = Math.floor(damage * 0.75);
    }
    // Reduce damage with opponent's armor if not thrown
    if (!thrown) {
        damage = Math.ceil(damage * (1 - opponent.armor));
    }
    // Set minimum damage to 1
    if (damage < 1) {
        damage = 1;
    }
    return damage;
};
var handleSkills = (brute, fighter) => {
    /* INITIATIVE */
    // -2 initiative for `firstStrike`
    if (brute.skills.includes(SkillName.firstStrike)) {
        fighter.initiative -= 2;
    }
    // +2 initiative for `reconnaissance`
    if (brute.skills.includes(SkillName.reconnaissance)) {
        fighter.initiative += 2;
    }
    /* COUNTER */
    // +10% counter for `sixthSense`
    if (brute.skills.includes(SkillName.sixthSense)) {
        fighter.counter += 0.1;
    }
    // +40% counter / +2 initiative for `monk`
    if (brute.skills.includes(SkillName.monk)) {
        fighter.counter += 0.4;
        fighter.initiative += 2;
    }
    /* COMBO */
    // +20% combo for `fistsOfFury`
    if (brute.skills.includes(SkillName.fistsOfFury)) {
        fighter.combo += 0.2;
    }
    /* REVERSAL */
    // +30% reversal for `hostility`
    if (brute.skills.includes(SkillName.hostility)) {
        fighter.reversal += 0.30;
    }
    /* BLOCK */
    // +XX% block for `shield`
    if (brute.skills.includes(SkillName.shield)) {
        fighter.block += SHIELD_BLOCK_ODDS;
        fighter.shield = true;
    }
    // +10% block for `counterAttack`
    if (brute.skills.includes(SkillName.counterAttack)) {
        fighter.block += 0.1;
    }
    /* ACCURACY */
    // +30% accuracy for `relentless`
    if (brute.skills.includes(SkillName.relentless)) {
        fighter.accuracy += 0.3;
    }
    /* ARMOR */
    // +25% armor for `armor`
    if (brute.skills.includes(SkillName.armor)) {
        fighter.armor += 0.25;
    }
    // +10% armor for `toughenedSkin`
    if (brute.skills.includes(SkillName.toughenedSkin)) {
        fighter.armor += 0.1;
    }
    /* DISARM */
    // +50% disarm for `shock`
    if (brute.skills.includes(SkillName.shock)) {
        fighter.disarm += 0.5;
    }
    /* EVASION */
    // +30% evasion for `untouchable`
    if (brute.skills.includes(SkillName.untouchable)) {
        fighter.evasion += 0.3;
    }
    // +10% evasion for `balletShoes
    if (brute.skills.includes(SkillName.balletShoes)) {
        fighter.evasion += 0.1;
    }
    /* DEFLECT */
    // +30% deflect for `repulse`
    if (brute.skills.includes(SkillName.repulse)) {
        fighter.deflect += 0.3;
    }
    /* PASSIVES */
    if (brute.skills.includes(SkillName.saboteur)) {
        fighter.saboteur = true;
    }
    if (brute.skills.includes(SkillName.sabotage)) {
        fighter.sabotage = true;
    }
    if (brute.skills.includes(SkillName.bodybuilder)) {
        fighter.bodybuilder = true;
    }
    if (brute.skills.includes(SkillName.survival)) {
        fighter.survival = true;
    }
    if (brute.skills.includes(SkillName.balletShoes)) {
        fighter.balletShoes = true;
    }
    if (brute.skills.includes(SkillName.determination)) {
        fighter.determination = true;
    }
    if (brute.skills.includes(SkillName.ironHead)) {
        fighter.ironHead = true;
    }
    if (brute.skills.includes(SkillName.resistant)) {
        fighter.resistant = true;
    }
    if (brute.skills.includes(SkillName.monk)) {
        fighter.monk = true;
    }
};
var handleModifiers = (brute, randomWeaponIndex, randomSkillIndex) => {
    var randomWeaponName = (0, getTempWeapon)(brute, randomWeaponIndex);
    if (randomWeaponName) {
        var randomWeapon = weapons.find((weapon) => weapon.name === randomWeaponName);
        if (!randomWeapon) {
            throw new Error('Random weapon not found');
        }
        brute.weapons.push(randomWeaponName);
    }
    var randomSkillName = (0, getTempSkill)(brute, randomSkillIndex);
    if (randomSkillName) {
        var randomSkill = skills.find((skill) => skill.name === randomSkillName);
        if (!randomSkill) {
            throw new Error('Random skill not found');
        }
        brute.skills.push(randomSkillName);
    }
};
var getTempo = (speed) => 0.10 + (20 / (10 + (speed * 1.5))) * 0.90;
var getFighters = async ({ prisma, team1, team2, modifiers, clanFight, }) => {
    var randomWeaponIndex = await ServerState.getRandomWeapon(prisma);
    var randomSkillIndex = await ServerState.getRandomSkill(prisma);
    let spawnedPets = 0;
    var fighters = [];
    let positiveIndex = 0;
    [team1, team2].forEach((team, teamIndex) => {
        var { brutes } = team;
        for (var brute of brutes) {
            var teamSide = teamIndex === 0 ? 'L' : 'R';
            // Restore endurance lost by pets for clan fights, which do not have pets
            if (clanFight) {
                for (var petName of brute.pets) {
                    var pet = pets.find((p) => p.name === petName);
                    if (!pet) {
                        throw new Error(`Pet ${petName} not found`);
                    }
                    brute.enduranceStat += pet.enduranceMalus;
                    brute.enduranceValue = Math.floor(brute.enduranceStat * brute.enduranceModifier);
                }
            }
            // Fetch brute stats before handling modifiers,
            // as both depend on the skills, which get modified
            var bruteHP = (0, getFinalHP)(brute, randomSkillIndex);
            var bruteSpeed = (0, getFinalStat)(brute, 'speed', modifiers, randomSkillIndex);
            var bruteStrength = (0, getFinalStat)(brute, 'strength', modifiers, randomSkillIndex);
            var bruteAgility = (0, getFinalStat)(brute, 'agility', modifiers, randomSkillIndex);
            handleModifiers(brute, randomWeaponIndex, randomSkillIndex);
            // Brute stats
            positiveIndex++;
            var fighter = {
                id: brute.id,
                index: positiveIndex,
                team: teamSide,
                name: brute.name,
                // Add minimal visual data to still be able to display the fight if the brute was deleted
                gender: brute.gender,
                colors: brute.colors,
                body: brute.body,
                rank: brute.ranking,
                level: brute.level,
                type: 'brute',
                maxHp: bruteHP,
                hp: bruteHP,
                strength: bruteStrength,
                agility: bruteAgility,
                speed: bruteSpeed,
                initiative: ((0, randomBetween)(0, 10) - bruteSpeed) / 100,
                tempo: getTempo(bruteSpeed),
                baseDamage: BARE_HANDS_DAMAGE,
                counter: 0,
                combo: 0,
                deflect: 0,
                reversal: 0,
                block: 0,
                accuracy: 0,
                armor: 0,
                disarm: 0,
                evasion: 0,
                reach: 0,
                sabotage: false,
                bodybuilder: false,
                survival: false,
                balletShoes: false,
                determination: false,
                retryAttack: false,
                ironHead: false,
                resistant: false,
                monk: false,
                skills: skills
                    .filter((skill) => brute.skills.includes(skill.name))
                    .map((skill) => ({ ...skill })),
                weapons: weapons
                    .filter((weapon) => brute.weapons.includes(weapon.name)),
                shield: false,
                activeSkills: [],
                activeWeapon: null,
                keepWeaponChance: 0,
                saboteur: false,
                sabotagedWeapon: null,
                poisoned: false,
                trapped: false,
                damagedWeapons: [],
                hitBy: {},
            };
            handleSkills(brute, fighter);
            fighters.push(fighter);
            // No pets in clan fights
            if (clanFight) {
                continue;
            }
            // Pets stats
            for (var petName of brute.pets) {
                var pet = pets.find((p) => p.name === petName);
                if (!pet) {
                    throw new Error(`Pet ${petName} not found`);
                }
                spawnedPets++;
                fighters.push({
                    id: `${-spawnedPets}`,
                    index: -spawnedPets,
                    team: teamSide,
                    name: petName,
                    rank: 0,
                    level: 0,
                    type: 'pet',
                    master: brute.id,
                    maxHp: (0, getPetStat)(brute, pet, 'hp'),
                    hp: (0, getPetStat)(brute, pet, 'hp'),
                    strength: (0, getPetStat)(brute, pet, 'strength'),
                    agility: (0, getPetStat)(brute, pet, 'agility'),
                    speed: (0, getPetStat)(brute, pet, 'speed'),
                    initiative: pet.initiative + (0, randomBetween)(0, 10) / 100,
                    tempo: getTempo((0, getPetStat)(brute, pet, 'speed')),
                    baseDamage: pet.damage,
                    counter: pet.counter,
                    combo: pet.combo,
                    deflect: 0,
                    reversal: pet.counter,
                    block: pet.block,
                    accuracy: pet.accuracy,
                    reach: 0,
                    armor: 0,
                    disarm: pet.disarm,
                    evasion: pet.evasion,
                    sabotage: false,
                    bodybuilder: false,
                    survival: false,
                    balletShoes: false,
                    determination: false,
                    retryAttack: false,
                    ironHead: false,
                    resistant: false,
                    monk: false,
                    skills: [],
                    weapons: [],
                    shield: false,
                    activeSkills: [],
                    activeWeapon: null,
                    keepWeaponChance: 0,
                    saboteur: false,
                    sabotagedWeapon: null,
                    poisoned: false,
                    trapped: false,
                    damagedWeapons: [],
                    hitBy: {},
                });
            }
        }
        // Backup stats
        for (var backup of team.backups) {
            var backupMaster = team.brutes[0];
            if (!backupMaster) {
                throw new Error('Backup master not found');
            }
            // Arrives at a random time
            var arrivesAt = (0, randomBetween)(1, 500) / 100;
            // Fetch backup stats before handling modifiers,
            // as both depend on the skills, which get modified
            var backupHP = (0, getFinalHP)(backup, randomSkillIndex);
            var backupSpeed = (0, getFinalStat)(backup, 'speed', modifiers, randomSkillIndex);
            var backupStrength = (0, getFinalStat)(backup, 'strength', modifiers, randomSkillIndex);
            var backupAgility = (0, getFinalStat)(backup, 'agility', modifiers, randomSkillIndex);
            handleModifiers(backup, randomWeaponIndex, randomSkillIndex);
            spawnedPets++;
            var backupFighter = {
                id: `${-spawnedPets}`,
                index: -spawnedPets,
                team: teamIndex === 0 ? 'L' : 'R',
                name: backup.name,
                // Add minimal visual data to still be able to display the fight if the brute was deleted
                gender: backup.gender,
                colors: backup.colors,
                body: backup.body,
                rank: backup.ranking,
                level: backup.level,
                type: 'brute',
                master: backupMaster.id,
                arrivesAtInitiative: arrivesAt,
                leavesAtInitiative: arrivesAt + 2.8,
                maxHp: backupHP,
                hp: backupHP,
                strength: backupStrength,
                agility: backupAgility,
                speed: backupSpeed,
                initiative: arrivesAt,
                tempo: getTempo(backupSpeed),
                baseDamage: BARE_HANDS_DAMAGE,
                counter: 0,
                combo: 0,
                deflect: 0,
                reversal: 0,
                block: 0,
                accuracy: 0,
                armor: 0,
                disarm: 0,
                evasion: 0,
                reach: 0,
                sabotage: false,
                bodybuilder: false,
                survival: false,
                balletShoes: false,
                determination: false,
                retryAttack: false,
                ironHead: false,
                resistant: false,
                monk: false,
                skills: skills
                    .filter((skill) => backup.skills.includes(skill.name))
                    .map((skill) => ({ ...skill })),
                weapons: weapons.filter((weapon) => backup.weapons.includes(weapon.name)),
                shield: false,
                activeSkills: [],
                activeWeapon: null,
                keepWeaponChance: 0,
                saboteur: false,
                sabotagedWeapon: null,
                poisoned: false,
                trapped: false,
                damagedWeapons: [],
                hitBy: {},
            };
            handleSkills(backup, backupFighter);
            // Reset initiative to arrive at the desired time
            backupFighter.initiative = arrivesAt;
            fighters.push(backupFighter);
        }
        // Boss
        positiveIndex++;
        for (var boss of team.bosses) {
            spawnedPets++;
            fighters.push({
                id: `${-spawnedPets}`,
                index: positiveIndex,
                team: teamIndex === 0 ? 'L' : 'R',
                name: boss.name,
                rank: 0,
                level: 0,
                type: 'boss',
                maxHp: boss.hp,
                hp: boss.startHP,
                strength: boss.strength,
                agility: boss.agility,
                speed: boss.speed,
                initiative: boss.initiative + (0, randomBetween)(0, 10) / 100,
                tempo: getTempo(boss.speed),
                baseDamage: boss.damage,
                counter: boss.counter,
                combo: boss.combo,
                deflect: 0,
                reversal: boss.counter,
                block: boss.block,
                accuracy: boss.accuracy,
                reach: boss.reach,
                armor: 0,
                disarm: boss.disarm,
                evasion: boss.evasion,
                sabotage: false,
                bodybuilder: false,
                survival: false,
                balletShoes: false,
                determination: false,
                retryAttack: false,
                ironHead: false,
                resistant: false,
                monk: false,
                skills: [],
                weapons: [],
                shield: false,
                activeSkills: [],
                activeWeapon: null,
                keepWeaponChance: 0,
                saboteur: false,
                sabotagedWeapon: null,
                poisoned: false,
                trapped: false,
                damagedWeapons: [],
                hitBy: {},
            });
        }
    });
    return fighters;
};
var handleStats = (fightData, stats, achievements, tournament) => {
    var winner = fightData.fighters.find((f) => f.id === fightData.winner);
    if (!winner) {
        throw new Error('Winner not found');
    }
    var loser = fightData.fighters.find((f) => f.id === fightData.loser);
    if (!loser) {
        throw new Error('Loser not found');
    }
    for (var [bruteId, stat] of Object.entries(stats)) {
        var achievement = achievements[bruteId];
        if (!achievement) {
            continue;
        }
        // Win / defeat
        if (bruteId === winner.id) {
            achievement.achievements.wins = 1;
        }
        else {
            achievement.achievements.defeats = 1;
        }
        // Max damage
        if (stat.maxDamage) {
            achievement.achievements.maxDamage = stat.maxDamage;
        }
        // Flawless
        if (bruteId === winner.id && winner.hp === winner.maxHp) {
            achievement.achievements.flawless = 1;
        }
        // Win with 1hp
        if (bruteId === winner.id
            && winner.hp === 1
            && !winner.skills.find((s) => s.name === SkillName.survival)) {
            achievement.achievements.winWith1HP = 1;
        }
        // Steal 2 weapons
        if (stat.weaponsStolen && stat.weaponsStolen >= 2) {
            achievement.achievements.steal2Weapons = 1;
        }
        // Single hit win
        if (bruteId === winner.id && stat.hits === 1) {
            // Only apply if other team member didn't hit
            if (!stat.otherTeamMembersHits) {
                achievement.achievements.singleHitWin = 1;
            }
        }
        // Hit 20 times
        if (stat.hits && stat.hits >= 20) {
            achievement.achievements.hit20times = 1;
        }
        // 10 Skills used
        if (stat.skillsUsed && stat.skillsUsed >= 10) {
            achievement.achievements.use10skills = 1;
        }
        // 5 counters
        if (stat.counters && stat.counters >= 5) {
            achievement.achievements.counter5 = 1;
        }
        // 10 evades
        if (stat.evades && stat.evades >= 10) {
            achievement.achievements.evade10 = 1;
        }
        // 25 blocks
        if (stat.blocks && stat.blocks >= 25) {
            achievement.achievements.block25 = 1;
        }
        // 4 disarms
        if (stat.disarms && stat.disarms >= 4) {
            achievement.achievements.disarm4 = 1;
        }
        // 8 disarms
        if (stat.disarms && stat.disarms >= 8) {
            achievement.achievements.disarm8 = 1;
        }
        // Kill 3 pets
        if (stat.petsKilled && stat.petsKilled >= 3) {
            achievement.achievements.kill3pets = 1;
        }
        // HP healed
        if (stat.hpHealed) {
            achievement.achievements.hpHealed = stat.hpHealed;
        }
        // Tournament achievements
        if (tournament) {
            if (tournament === 'finals') {
                if (bruteId === winner.id && winner.level <= 15) {
                    // Win as Lv15-
                    achievement.achievements.winTournamentAs15 = 1;
                }
                else if (bruteId === winner.id && winner.level <= 20) {
                    // Win as Lv20-
                    achievement.achievements.winTournamentAs20 = 1;
                }
                // Win as a lower level
                if (bruteId === winner.id && winner.level < loser.level) {
                    achievement.achievements.winAsLower = 1;
                }
                // Win
                if (bruteId === winner.id) {
                    achievement.achievements.win = 1;
                }
            }
            if (bruteId === loser.id && loser.level >= winner.level * 4) {
                // Loose against 1/4 level
                achievement.achievements.looseAgainst4 = 1;
            }
            else if (bruteId === loser.id && loser.level >= winner.level * 3) {
                // Loose against 1/3 level
                achievement.achievements.looseAgainst3 = 1;
            }
            else if (bruteId === loser.id && loser.level >= winner.level * 2) {
                // Loose against 1/2 level
                achievement.achievements.looseAgainst2 = 1;
            }
            if (bruteId === winner.id && winner.level * 4 <= loser.level) {
                // Win against 4x level
                achievement.achievements.winAgainst4 = 1;
            }
            else if (bruteId === winner.id && winner.level * 3 <= loser.level) {
                // Win against 3x level
                achievement.achievements.winAgainst3 = 1;
            }
            else if (bruteId === winner.id && winner.level * 2 <= loser.level) {
                // Win against 2x level
                achievement.achievements.winAgainst2 = 1;
            }
        }
    }
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
var StepType;
(function (StepType) {
    StepType[StepType["Saboteur"] = 0] = "Saboteur";
    StepType[StepType["Leave"] = 1] = "Leave";
    StepType[StepType["Arrive"] = 2] = "Arrive";
    StepType[StepType["Trash"] = 3] = "Trash";
    StepType[StepType["Steal"] = 4] = "Steal";
    StepType[StepType["Trap"] = 5] = "Trap";
    StepType[StepType["Heal"] = 6] = "Heal";
    StepType[StepType["Resist"] = 7] = "Resist";
    StepType[StepType["Survive"] = 8] = "Survive";
    StepType[StepType["Hit"] = 9] = "Hit";
    StepType[StepType["FlashFlood"] = 10] = "FlashFlood";
    StepType[StepType["Hammer"] = 11] = "Hammer";
    StepType[StepType["Poison"] = 12] = "Poison";
    StepType[StepType["Bomb"] = 13] = "Bomb";
    StepType[StepType["Hypnotise"] = 14] = "Hypnotise";
    StepType[StepType["Move"] = 15] = "Move";
    StepType[StepType["Eat"] = 16] = "Eat";
    StepType[StepType["MoveBack"] = 17] = "MoveBack";
    StepType[StepType["Equip"] = 18] = "Equip";
    StepType[StepType["AttemptHit"] = 19] = "AttemptHit";
    StepType[StepType["Block"] = 20] = "Block";
    StepType[StepType["Evade"] = 21] = "Evade";
    StepType[StepType["Sabotage"] = 22] = "Sabotage";
    StepType[StepType["Disarm"] = 23] = "Disarm";
    StepType[StepType["Death"] = 24] = "Death";
    StepType[StepType["Throw"] = 25] = "Throw";
    StepType[StepType["End"] = 26] = "End";
    StepType[StepType["Counter"] = 27] = "Counter";
    StepType[StepType["SkillActivate"] = 28] = "SkillActivate";
    StepType[StepType["SkillExpire"] = 29] = "SkillExpire";
    StepType[StepType["Spy"] = 30] = "Spy";
    StepType[StepType["Vampirism"] = 31] = "Vampirism";
    StepType[StepType["Haste"] = 32] = "Haste";
    StepType[StepType["Treat"] = 33] = "Treat";
})(StepType || (/*exports.*/StepType = StepType = {}));
//# sourceMappingURL=types.js.map
var weaponsFR={"fan": "Éventail",
  "keyboard": "Clavier",
  "knife": "Couteau",
  "leek": "Poireau",
  "mug": "Mug",
  "sai": "Sai",
  "racquet": "Raquette",
  "axe": "Marteau",
  "bumps": "Massue",
  "flail": "Fléau",
  "fryingPan": "Poêle",
  "hatchet": "Hache",
  "mammothBone": "Os de mammouth",
  "morningStar": "Étoile du matin",
  "trombone": "Trombone",
  "baton": "Bâton",
  "halbard": "Hallebarde",
  "lance": "Lance",
  "trident": "Trident",
  "whip": "Fouet",
  "noodleBowl": "Bol de nouilles",
  "piopio": "Piou Piou",
  "shuriken": "Shuriken",
  "broadsword": "Glaive",
"scimitar": "Cimeterre",
 "sword": "Épée",};



function makeInputDIV(n){$(".inputDIV").remove();return div({0:div({3:"inputDIV",2:"img",22:"/images/creation/input.svg"}),2:"input",4:1,5:0,})}









var defiDIV


var brutes = ["",""]
var bruteInputs = []
var bruteDIVS = []


$("h2").each(function(){cl($(this).text())
	if($(this).text().indexOf("Vous avez osé défier")!=-1)defiDIV = $(this)
})
$("h3").each(function(){
	bruteDIVS.push($(this));$(this).text("")
})
defiDiv.text("")
$("h5").each(function(){
	if($(this).text().indexOf("Niveau")!=-1){
		$(this).text("Niveau ???")
		var nimput = bruteInputs.length
		makeInputDIV(nimput).insertAfter($(this))
	}
})


