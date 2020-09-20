var VERSION = 1;
var SKILL_ICONS = {
	np:"icons/skills/np.png",
	crit:"icons/skills/Critdmg.png",
	arts:"icons/skills/Artsup.png",
	def:"icons/skills/Shieldup.png",
	atk:"icons/skills/Dmg_up.png",
	guts:"icons/skills/Guts.png",
	divinity:"icons/skills/Divinity.png",
	np_gain:"icons/skills/Npacqui.png",
	orderchange: "icons/skills/Orderchange.png",
	stun: "icons/skills/Stun.png",
	shuffle: "icons/skills/Commandshuffle.png",
	np_dmg: "icons/skills/Npdmg.png",
	buster_stars: "icons/skills/BusterStarGatherUp.png",
	heal:"icons/skills/Heal.png",
	np_arts:"icons/skills/Command_Card_Arts_0.png",
	np_quick:"icons/skills/Command_Card_Quick.png",
	np_buster:"icons/skills/Command_Card_Buster.png"
}
var BUFF_ICONS = {
	atk: "icons/effects/Attackup.png",
	dmg: "icons/effects/Powerup.png",
	buffchance: "icons/effects/Statusup.png",
	debuffchance: "icons/effects/Statusup.png",
	quick: "icons/effects/Quickupstatus.png",
	arts: "icons/effects/Artsupstatus.png",
	buster: "icons/effects/Busterupstatus.png",
	np_gain: "icons/effects/Npchargeup.png",
	np_regen: "icons/effects/Npgainturn.png",
	np_dmg: "icons/effects/Nppowerup.png",
	crit: "icons/effects/Critdmgup.png",
	dragon_dmg:"icons/effects/Powerup.png",
	buster_stars:"icons/effects/Powerup.png",
}
var EFFECTS = {
	np_gain:"NP Gain",
	np_gauge:"NP Gauge",
	np_dmg:"NP Damage",
	np_regen:"NP Regeneration",
	arts:"Arts",
	buster:"Buster",
	quick:"Quick",
	atk:"Attack",
	dmg:"Damage+",
	def_down:"Defense Down",
	dragon_dmg:"Dragon Damage",
	heal:"Heal",
	crit:"Crit Damage",
	buffchance:"Buff Chance Up",
	np_arts: "Arts NP",
	np_buster: "Buster NP",
	np_quick: "Quick NP",
	orderchange:"",
	shuffle: "",
	stun : "Stun",
	buster_stars: "Buster Absorb",
}
var EFFECT_FLAT ={
	dmg: true,
	orderchange: true,
	shuffle: true,
	atk: false,
	buffchance: false,
	debuffchance: false,
	quick: false,
	arts: false,
	buster: false,
	np_gain: false,
	np_regen: false,
	np_dmg: false,
	crit: false,
}
var CLASSES_ICONS = {
	saber:"icons/classes/saber.png",
	archer:"icons/classes/archer.png",
	lancer:"icons/classes/lancer.png",
	rider:"icons/classes/rider.png",
	caster:"icons/classes/caster.png",
	assassin:"icons/classes/assassin.png",
	berserker:"icons/classes/berserker.png",
	ruler:"icons/classes/ruler.png",
	avenger:"icons/classes/avenger.png",
	alter_ego:"icons/classes/alter-ego.png",
	moon_cancer:"icons/classes/mooncancer.png",
	foreigner:"icons/classes/Class-Foreigner-Gold.png",
	empty:"//:0"
}
var CLASSES_NP_GEN = {
	saber:1,
	archer:1,
	lancer:1,
	rider:1.1,
	caster:1.2,
	assassin:.9,
	berserker:.8,
	ruler:1,
	avenger:1,
	alter_ego:1,
	moon_cancer:1.2,
	foreigner:1,
}
var CLASSES_ATTACK = {
	saber:1,
	archer:.95,
	lancer:1.05,
	rider:1,
	caster:.9,
	assassin:.9,
	berserker:1.1,
	ruler:1.1,
	avenger:1.1,
	alter_ego:1,
	moon_cancer:1,
	foreigner:1,
}
// DAMAGE FROM -> TO
var CLASSES_TRIANGLE = {
	saber:{saber:1, archer:.5, lancer:2, rider:1, caster:1, assassin:1, berserker:2, ruler:.5, avenger:1, alter_ego:1, moon_cancer:1, foreigner:1},
	archer:{saber:2, archer:1, lancer:.5, rider:1, caster:1, assassin:1, berserker:2, ruler:.5, avenger:1, alter_ego:1, moon_cancer:1, foreigner:1},
	lancer:{saber:.5, archer:2, lancer:1, rider:1, caster:1, assassin:1, berserker:2, ruler:.5, avenger:1, alter_ego:1, moon_cancer:1, foreigner:1},
	rider:{saber:1, archer:1, lancer:1, rider:1, caster:2, assassin:.5, berserker:2, ruler:.5, avenger:1, alter_ego:1, moon_cancer:1, foreigner:1},
	caster:{saber:1, archer:1, lancer:1, rider:.5, caster:1, assassin:2, berserker:2, ruler:.5, avenger:1, alter_ego:1, moon_cancer:1, foreigner:1},
	assassin:{saber:1, archer:1, lancer:1, rider:2, caster:.5, assassin:1, berserker:2, ruler:.5, avenger:1, alter_ego:1, moon_cancer:1, foreigner:1},
	berserker:{saber:1.5, archer:1.5, lancer:1.5, rider:1.5, caster:1.5, assassin:1.5, berserker:1.5, ruler:1.5, avenger:1.5, alter_ego:1.5, moon_cancer:1.5, foreigner:.5},
	ruler:{saber:1, archer:1, lancer:1, rider:1, caster:1, assassin:1, berserker:2, ruler:1, avenger:.5, alter_ego:1, moon_cancer:2, foreigner:1},
	avenger:{saber:1, archer:1, lancer:1, rider:1, caster:1, assassin:1, berserker:2, ruler:2, avenger:1, alter_ego:1, moon_cancer:.5, foreigner:1},
	moon_cancer:{saber:1, archer:1, lancer:1, rider:1, caster:1, assassin:1, berserker:2, ruler:.5, avenger:2, alter_ego:1, moon_cancer:1, foreigner:1},
	alter_ego:{saber:.5, archer:.5, lancer:.5, rider:1.5, caster:1.5, assassin:1.5, berserker:2, ruler:.5, avenger:2, alter_ego:1, moon_cancer:1, foreigner:2},
	foreigner:{saber:1, archer:1, lancer:1, rider:1, caster:1, assassin:1, berserker:2, ruler:1, avenger:1, alter_ego:.5, moon_cancer:1, foreigner:2},
}
var CLASSES_NAME = {
	saber:"Saber",
	archer:"Archer",
	lancer:"Lancer",
	rider:"Rider",
	caster:"Caster",
	assassin:"Assassin",
	berserker:"Berserker",
	ruler:"Ruler",
	avenger:"Avenger",
	alter_ego:"Alter Ego",
	moon_cancer:"Moon Cancer",
	foreigner:"Foreigner",
}
var CLASSES_NUM = {saber:0, archer:1, lancer:2, rider:3, caster:4, assassin:5, berserker:6, ruler:7, avenger:8, alter_ego:9, moon_cancer:10, foreigner:11,empty:12 };
var NUM_CLASS = ["saber", "archer", "lancer", "rider", "caster", "assassin", "berserker", "ruler", "avenger", "alter_ego", "moon_cancer", "foreigner","empty"];

var ATTR_NUM = {beast:0, earth:1, man:2, sky:3, star:4};
var NUM_ATTR = ["beast", "earth", "man", "sky", "star"];
// DAMAGE FROM -> TO
var ATTR_DMG = {
	man:{man:1,earth:.9,sky:1.1,star:1,beast:1},
	sky:{man:.9,earth:1.1,sky:1,star:1,beast:1},
	earth:{man:1.1,earth:1,sky:.9,star:1,beast:1},
	star:{man:1,earth:1,sky:1,star:1,beast:1.1},
	beast:{man:1,earth:1,sky:1,star:1.1,beast:1},
}

var MYSTIC_CODES = [
{name : "Chaldea Combat Uniform", pic:"icons/mystic/Chaldeacombat2.png",
skill1: {name: "Reinforce All", icon: "atk",target_real:"all", target:["all"], effect:["atk"], turns:[1],values:[[20],[21],[22],[23],[24],[25],[26],[27],[28],[30]]},
skill2: {name: "Gandr", icon: "stun",target_real:"single", target:["single"], effect:["stun"], turns:[1],values:[[500],[500],[500],[500],[500],[500],[500],[500],[500],[500]]},
skill3: {name: "Order Change", icon: "orderchange",target_real:"orderchange", target:["orderchange"], effect:["orderchange"], turns:[0],values:[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]},
},
{name : "Mage's Association Uniform", pic:"icons/mystic/Mage2.png",
skill1: {name: "Cure-All", icon: "heal",target_real:"none", target:[], effect:[], turns:[0],values:[[],[],[],[],[],[],[],[],[],[]]},
skill2: {name: "Spiritron Transfer", icon: "np",target_real:"target", target:["target"], effect:["np_gauge"], turns:[0],values:[[20],[20],[20],[20],[20],[20],[20],[20],[20],[20]]},
skill3: {name: "Command Shuffle", icon: "shuffle",target_real:"shuffle", target:["shuffle"], effect:["shuffle"], turns:[0],values:[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]},
},
{name : "A Fragment of 2004", pic:"icons/mystic/Fragment2004F.png",
skill1: {name: "Code: F", icon: "np_dmg",target_real:"target", target:["target"], effect:["np_dmg"], turns:[1],values:[[30],[32],[34],[36],[38],[40],[42],[44],[46],[50]]},
skill2: {name: "Code: U", icon: "buster_stars",target_real:"none", target:[], effect:[], turns:[0],values:[[],[],[],[],[],[],[],[],[],[]]},
skill3: {name: "Code: H", icon: "np_gain",target_real:"target", target:["target"], effect:["np_gain"], turns:[1],values:[[30],[32],[34],[36],[38],[40],[42],[44],[46],[50]]},
},
];
var SERVANTS = [
{
	name : "Sieg", atk: 8394,class:"caster",attr:"man",tier:4,q:1,a:2,b:2,qh:3,ah:2,np_perhit:.78,pic:"icons/servants/cardboard.png",
	np: {type:"np_arts", name:"", hits:[16,33,51], dmg:[450,600,675,712.5,750], target_dmg:"aoe", target:["aoe"], effect:["def_down"], turns:[3],values:[20,20,20,20,20]},
	skills: [["arts",6.5]],
	skill1: {name:"Artificial Hero (Fake) B+",  icon:"np_gain",  target_real:"self" ,target:["self"], effect:["np_gain"], turns:[3],   values:[[20],[21],[22],[23],[24],[25],[26],[27],[28],[30]]},
	skill2: {name:"Magecraft C",   icon:"arts",  target_real:"self",  target:["self"],        effect:["arts"], turns:[1],   values:[[22],[23.4],[24.8],[26.2],[27.6],[29],[30.4],[31.8],[33.2],[36]]},
	skill3: {name:"Dead-Count Shapeshifter EX",  target_real:"self", icon:"divinity",target:["self","self"], effect:["np_gauge","dragon_dmg"], turns:[0,1], values:[[20,50],[21,55],[22,60],[23,65],[24,70],[25,75],[26,80],[27,85],[28,90],[30,100]]}
},
{
	name: "Paracelsus", atk: 6711,class:"caster",attr:"man",tier:3,q:1,a:3,b:1,qh:2,ah:2,np_perhit:.55,pic:"icons/servants/para.jpg",
	np:{type:"np_arts", name:"", hits:[16,33,51],dmg:[400,500,550,575,600],target_dmg: "aoe", target:[], effect:[], turns:[],values:[]},
	skills: [["arts",10]],
	skill1: {name:"Rapid Casting A",        icon:"np",  target_real:"self",   target:["self"],  effect:["np_gauge"], turns: [0], values:[[55],[57.5],[60],[62.5],[65],[67.5],[70],[72.5],[75],[80]]},
	skill2: {name:"Elemental A+",           icon:"arts",  target_real:"all", target:["all"],   effect:["arts"], turns:[3],values:[[10],[11],[12],[13],[14],[15],[16],[17],[18],[20]]},
	skill3: {name:"Philosopher's Stone A+", icon:"guts",  target_real:"target", target:["target"], effect:["np_gain"],turns:[3],values:[[30],[32],[34],[36],[38],[40],[42],[44],[46],[50]]}
},
{
	name:"Waver", atk: 10598,class:"caster",attr:"man",tier:5,q:1,a:3,b:1,qh:2,ah:1,np_perhit:1.64,pic:"icons/servants/waver.png",
	np:{type:"np_arts", name:"", hits:[], dmg:[0,0,0,0,0], target_dmg: "none", target:["aoe"], effect:[["def_down"]], turns:[[3]],values:[[30],[40],[45],[47.5],[50]]},
	skills: [["arts",10]],
	skill1: {name:"Discerning Eye A",        icon:"crit",  target_real:"target",   target:["target"],  effect:["np_gauge"], turns: [0], values:[[30],[30],[30],[30],[30],[30],[30],[30],[30],[30]]},
	skill2: {name:"Tactician's Advice A+",   icon:"def",  target_real:"all",    target:["all"],     effect:["np_gauge"], turns: [0], values:[[10],[10],[10],[10],[10],[10],[10],[10],[10],[10]]},
	skill3: {name:"Tactician's Command A+",  icon:"atk",  target_real:"all",    target:["all","all","all"],     effect:["np_gauge","atk","dmg"],turns:[0,3,3],values:[[10,20,200],[10,21,230],[10,22,260],[10,23,290],[10,24,320],[10,25,350],[10,26,380],[10,27,410],[10,28,440],[10,30,500]]}
}];
var CES = [
{name: "Kaleidoscope", effect:["np_gauge"], values:[[80],[100]], atk:[500,2000],
pic: "icons/ces/Kaleidoscope.png"},
{name: "Imaginary Element", effect:["np_gauge"], values:[[60],[75]], atk:[200,750],
pic: "icons/ces/Hollow_magic.png"},
{name: "Black Grail", effect:["np_dmg"], values:[[60],[80]], atk:[600,2400],
pic: "icons/ces/Black_grail.png"},
{name: "CKT", effect:["arts","quick","np_dmg"], values:[[10,10,10],[15,15,15]], atk:[250,1000],
pic: "icons/ces/CE900.png"},
{name: "Return Match", effect:["atk"], values:[[100],[200]], atk:[500,2000],
pic: "icons/ces/CE899.png"},
];
// 63, 4095
function writeNum(num,size,str){
	var numSO = "";
	for(var i=0;i<size;i++){
		var numN = num % 64;
		num = Math.floor(num/64);
		var numS='0';
		if(numN == 0){numN='0';}
		else if(numN == 1){numS='1';}
		else if(numN == 2){numS='2';}
		else if(numN == 3){numS='3';}
		else if(numN == 4){numS='4';}
		else if(numN == 5){numS='5';}
		else if(numN == 6){numS='6';}
		else if(numN == 7){numS='7';}
		else if(numN == 8){numS='8';}
		else if(numN == 9){numS='9';}
		else if(numN == 10){numS='a';}
		else if(numN == 11){numS='b';}
		else if(numN == 12){numS='c';}
		else if(numN == 13){numS='d';}
		else if(numN == 14){numS='e';}
		else if(numN == 15){numS='f';}
		else if(numN == 16){numS='g';}
		else if(numN == 17){numS='h';}
		else if(numN == 18){numS='i';}
		else if(numN == 19){numS='j';}
		else if(numN == 20){numS='k';}
		else if(numN == 21){numS='l';}
		else if(numN == 22){numS='m';}
		else if(numN == 23){numS='n';}
		else if(numN == 24){numS='o';}
		else if(numN == 25){numS='p';}
		else if(numN == 26){numS='q';}
		else if(numN == 27){numS='r';}
		else if(numN == 28){numS='s';}
		else if(numN == 29){numS='t';}
		else if(numN == 30){numS='u';}
		else if(numN == 31){numS='v';}
		else if(numN == 32){numS='w';}
		else if(numN == 33){numS='x';}
		else if(numN == 34){numS='y';}
		else if(numN == 35){numS='z';}
		else if(numN == 36){numS='A';}
		else if(numN == 37){numS='B';}
		else if(numN == 38){numS='C';}
		else if(numN == 39){numS='D';}
		else if(numN == 40){numS='E';}
		else if(numN == 41){numS='F';}
		else if(numN == 42){numS='G';}
		else if(numN == 43){numS='H';}
		else if(numN == 44){numS='I';}
		else if(numN == 45){numS='J';}
		else if(numN == 46){numS='K';}
		else if(numN == 47){numS='L';}
		else if(numN == 48){numS='M';}
		else if(numN == 49){numS='N';}
		else if(numN == 50){numS='O';}
		else if(numN == 51){numS='P';}
		else if(numN == 52){numS='Q';}
		else if(numN == 53){numS='R';}
		else if(numN == 54){numS='S';}
		else if(numN == 55){numS='T';}
		else if(numN == 56){numS='U';}
		else if(numN == 57){numS='V';}
		else if(numN == 58){numS='W';}
		else if(numN == 59){numS='X';}
		else if(numN == 60){numS='Y';}
		else if(numN == 61){numS='Z';}
		else if(numN == 62){numS='_';}
		else if(numN == 63){numS='-';}
		else{console.log("WTF:"+numN);}
		numSO = numS + numSO;
 	}
	str.str+=numSO;
}
function readNum(str,size){
	var i;var numS;var numN;var numT=0;
	for (i=size-1;i>=0;i--){
		numS = str.str.substr(0,1);
		str.str = str.str.substr(1);
		if(numS == '0'){numN=0;}
		else if(numS == '1'){numN=1;}
		else if(numS == '2'){numN=2;}
		else if(numS == '3'){numN=3;}
		else if(numS == '4'){numN=4;}
		else if(numS == '5'){numN=5;}
		else if(numS == '6'){numN=6;}
		else if(numS == '7'){numN=7;}
		else if(numS == '8'){numN=8;}
		else if(numS == '9'){numN=9;}
		else if(numS == 'a'){numN=10;}
		else if(numS == 'b'){numN=11;}
		else if(numS == 'c'){numN=12;}
		else if(numS == 'd'){numN=13;}
		else if(numS == 'e'){numN=14;}
		else if(numS == 'f'){numN=15;}
		else if(numS == 'g'){numN=16;}
		else if(numS == 'h'){numN=17;}
		else if(numS == 'i'){numN=18;}
		else if(numS == 'j'){numN=19;}
		else if(numS == 'k'){numN=20;}
		else if(numS == 'l'){numN=21;}
		else if(numS == 'm'){numN=22;}
		else if(numS == 'n'){numN=23;}
		else if(numS == 'o'){numN=24;}
		else if(numS == 'p'){numN=25;}
		else if(numS == 'q'){numN=26;}
		else if(numS == 'r'){numN=27;}
		else if(numS == 's'){numN=28;}
		else if(numS == 't'){numN=29;}
		else if(numS == 'u'){numN=30;}
		else if(numS == 'v'){numN=31;}
		else if(numS == 'w'){numN=32;}
		else if(numS == 'x'){numN=33;}
		else if(numS == 'y'){numN=34;}
		else if(numS == 'z'){numN=35;}
		else if(numS == 'A'){numN=36;}
		else if(numS == 'B'){numN=37;}
		else if(numS == 'C'){numN=38;}
		else if(numS == 'D'){numN=39;}
		else if(numS == 'E'){numN=40;}
		else if(numS == 'F'){numN=41;}
		else if(numS == 'G'){numN=42;}
		else if(numS == 'H'){numN=43;}
		else if(numS == 'I'){numN=44;}
		else if(numS == 'J'){numN=45;}
		else if(numS == 'K'){numN=46;}
		else if(numS == 'L'){numN=47;}
		else if(numS == 'M'){numN=48;}
		else if(numS == 'N'){numN=49;}
		else if(numS == 'O'){numN=50;}
		else if(numS == 'P'){numN=51;}
		else if(numS == 'Q'){numN=52;}
		else if(numS == 'R'){numN=53;}
		else if(numS == 'S'){numN=54;}
		else if(numS == 'T'){numN=55;}
		else if(numS == 'U'){numN=56;}
		else if(numS == 'V'){numN=57;}
		else if(numS == 'W'){numN=58;}
		else if(numS == 'X'){numN=59;}
		else if(numS == 'Y'){numN=60;}
		else if(numS == 'Z'){numN=61;}
		else if(numS == '_'){numN=62;}
		else if(numS == '-'){numN=63;}
		else{return NaN;}
		numT += numN * (64 ** i);
 	}
	return numT;
}
var URL = {str:""}
var URL_READ = {str:""}
function readUrlText() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	URL.str = urlParams.get('id');
	if(URL.str == null){URL.str="";}
	URL_READ.str=URL.str;
}
// SAVED DATA
// ----------
// array of all servants in order. Does not change throughout run
var PARTY= [];
// array of all servants np levels in order. Does not change
var PARTY_NP= [];
// level of the skills each servant has. does not change
var SKILLS=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
// enemies max health
var ENEMIES_HP=[[0,0,0],[0,0,0],[0,0,0]];
// enemies class
var ENEMIES_CLASS=[[0,0,0],[0,0,0],[0,0,0]];
// enemies attribute
var ENEMIES_ATTR=[[0,0,0],[0,0,0],[0,0,0]];
//mystic code
var MYSTIC_CODE = 0;
//mystic code level
var MYSTIC_CODE_LEVEL = 0;
// ALL CEs
var PARTY_CES = [-1,-1,-1,-1,-1,-1];
// level of ces, 0=lvl1, 1 = mlb, 2= lvl MAX
var PARTY_CE_LEVEL=[0,0,0,0,0,0];
// list of all actions taken like skills, nps, fishing or finishing
var ACTIONS_RAW=[[]];

// CALCULATED DATA
// ---------------
//calculated attack of servants /w CE & 1000 fous
var PARTY_ATTACK=[];
// order of party servants after this action
// example: [0,1,2,3,4,5] is default
// 			[1,0,2,3,4,5] means 0 and 1 are swapped
//			ACTION_ORDER[0..2] are frontline, [3..5] are backline
var ACTION_ORDER=[0,1,2,3,4,5];
// np gauge of each servant after the last action
var ACTION_NP=[0,0,0,0,0,0];
// buffs on each servant after the last action
var ACTION_BUFFS=[{}];
// which skills are currently avaiblible, [6] is mystic code
var ACTION_SKILLS=[[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]]];
// current action we are viewing, 0 is beginning, default
var ACTION_CURRENT=0;
// used to store ACTION_CURRENT for recalculation
var ACTION_PREV=0;
// all actions taken, in more readable format
var ACTIONS = [[]];
// represents if a servant is able to np yet in a given wave
// 1= NP possible, 0 = NP Already used
// NOTE: Even if value is 1, NP GAUGE must still be > 100 to actually NP
var WAVE_NP = [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]];

var WAVE_CURRENT = 0;
var WAVE_MAX = 0;

// special mode which makes everything ignore input while javascript does its magic
var MASTER_MODE=false;

// fixes tooltips that might be offscreen
function fixToolTips(){
	$("#style_holder").empty();
	$(".tooltiptext").each(function(i,el){
		el.id = "tooltiptext_"+i;
		var xpos = el.getBoundingClientRect().x;
		if(el.getBoundingClientRect().x < 0){
			$(el).css("transform","translateX("+(-1*xpos)+"px)");
			$("#style_holder").append("<style>#tooltiptext_"+i+"::after{transform:translateX("+xpos+"px);}</style>")
		}
	});
}
function writeFull() {
	URL = {str:""};
	//write version
	writeNum(VERSION,2,URL);
	// write mystic code
	writeNum(MYSTIC_CODE,1,URL);
	writeNum(MYSTIC_CODE_LEVEL,1,URL);
	//write servants
	for(var i=0;i<6;i++){
		if(PARTY[i]==-1){
			writeNum(4095,2,URL);
		}
		else{
			writeNum(PARTY[i],2,URL);
		}
	}
	//write servant np levels
	for(var i=0;i<6;i++){
		writeNum(PARTY_NP[i],1,URL);
	}
	//write ces
	for(var i=0;i<6;i++){
		if(PARTY_CES[i]==-1){
			writeNum(4095,2,URL);
		}
		else{
			writeNum(PARTY_CES[i],2,URL);
		}
	}
	//write ce levels
	for(var i=0;i<6;i++){
		writeNum(PARTY_CE_LEVEL[i],1,URL);
	}
	//write skill levels
	for(var i=0;i<6;i++){
		for(var j=0;j<3;j++){
			writeNum(SKILLS[i][j],1,URL);
		}
	}
	//write enemies classes
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			writeNum(ENEMIES_CLASS[i][j],1,URL);
		}
	}
	//write enemies attributes
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			writeNum(ENEMIES_ATTR[i][j],1,URL);
		}
	}
	//write enemies HP
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			writeNum(ENEMIES_HP[i][j],5,URL);
		}
	}
	window.history.replaceState(null,"","index.html?id="+URL.str);
}
function readFull() {
	readUrlText();
	//read version
	var read_version = readNum(URL_READ,2);
	if(read_version != VERSION){
		console.log("This was created in a different version of 3T simulator, and some attributes or servants may be incorrect. Please check through everything to make sure it is accurate!");
	}
	// read mystic code
	MYSTIC_CODE = readNum(URL_READ,1);
	if(isNaN(MYSTIC_CODE)){MYSTIC_CODE=0;}
	MYSTIC_CODE_LEVEL = readNum(URL_READ,1);
	if(isNaN(MYSTIC_CODE_LEVEL)){MYSTIC_CODE_LEVEL=0;}
	// read party
	for(var i=0;i<6;i++){
		var serv = readNum(URL_READ,2);
		
		if(!isNaN(serv) && serv != 4095){ PARTY[i]=serv; }
		else { PARTY[i]=-1; }
	}
	// read np levels
	for(var i=0;i<6;i++){
		var np_lvl = readNum(URL_READ,1);
		
		if(!isNaN(np_lvl)){ PARTY_NP[i]=np_lvl; }
		else { PARTY_NP[i]=0; }
	}
	// read ces
	for(var i=0;i<6;i++){
		var ce = readNum(URL_READ,2);
		
		if(!isNaN(ce) && ce != 4095){ PARTY_CES[i]=ce; }
		else { PARTY_CES[i]=-1; }
	}
	// read ce levels
	for(var i=0;i<6;i++){
		var ce = readNum(URL_READ,1);
		if(isNaN(ce)){ce=0;}
		PARTY_CE_LEVEL[i]=ce;
	}
	//read skill levels
	for(var i=0;i<6;i++){
		for(var j=0;j<3;j++){
			var skill = readNum(URL_READ,1);
			if(!isNaN(skill)){
				SKILLS[i][j]=parseInt(skill);
			} else{ SKILLS[i][j]=0; }
		}
	}
	//read enemies classes
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			ENEMIES_CLASS[i][j] = readNum(URL_READ,1);
			if(isNaN(ENEMIES_CLASS[i][j])){
				ENEMIES_CLASS[i][j]=0;
			}
		}
	}
	//read enemies attributes
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			ENEMIES_ATTR[i][j] = readNum(URL_READ,1);
			if(isNaN(ENEMIES_ATTR[i][j])){
				ENEMIES_ATTR[i][j]=0;
			}
		}
	}
	//read enemies HP
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			ENEMIES_HP[i][j] = readNum(URL_READ,5);
			if(isNaN(ENEMIES_HP[i][j])){
				ENEMIES_HP[i][j]=1;
			}
		}
	}
	//read all actions
	ACTIONS_RAW = [[]];
	var nextAction = [readNum(URL_READ,1),readNum(URL_READ,1)];
	while(!isNaN(nextAction[1])){
		ACTIONS_RAW.push(nextAction);
		nextAction = [readNum(URL_READ,1),readNum(URL_READ,1)];
	}
}
function positionPopup(){
	$("#popup").attr("viewBox","0 0 "+$("body").width()+" "+$("body").height());
	$("#mask_back").attr("width",$("body").width());
	$("#mask_back").attr("height",$("body").height());
	$("#cut_back").attr("width",$("body").width());
	$("#cut_back").attr("height",$("body").height());
	
	for(var p=0;p<6;p++){
		$("#cut_serv_"+p).attr("x",$("#part_sel_div_"+p).offset().left);
		$("#cut_serv_"+p).attr("y",$("#part_sel_div_"+p).offset().top);
		$("#cut_serv_"+p).attr("height",$("#part_sel_div_"+p).height());
		$("#cut_serv_"+p).attr("width",$("#part_sel_div_"+p).width());
		
		$("#serv_btn_"+p).css("left",$("#part_sel_div_"+p).offset().left+"px");
		$("#serv_btn_"+p).css("top",$("#part_sel_div_"+p).offset().top+"px");
		$("#serv_btn_"+p).css("height",$("#part_sel_div_"+p).height()+"px");
		$("#serv_btn_"+p).css("width",$("#part_sel_div_"+p).width()+"px");
	}
	for(var w=0;w<3;w++){
		for(var e=0;e<3;e++){
			$("#cut_enemy_"+w+"_"+e).css("transform","translateX(0)");
			$("#cut_enemy_"+w+"_"+e).attr("x",$("#enemy_"+w+"_"+e).offset().left);
			$("#cut_enemy_"+w+"_"+e).attr("y",$("#enemy_"+w+"_"+e).offset().top);
			$("#cut_enemy_"+w+"_"+e).attr("height",$("#enemy_"+w+"_"+e).height());
			$("#cut_enemy_"+w+"_"+e).attr("width",$("#enemy_"+w+"_"+e).width());
			
			$("#enemy_btn_"+w+"_"+e).css("left",$("#enemy_"+w+"_"+e).offset().left+"px");
			$("#enemy_btn_"+w+"_"+e).css("top",$("#enemy_"+w+"_"+e).offset().top+"px");
			$("#enemy_btn_"+w+"_"+e).css("height",$("#enemy_"+w+"_"+e).height()+"px");
			$("#enemy_btn_"+w+"_"+e).css("width",$("#enemy_"+w+"_"+e).width()+"px");
		}
	}
}

function popupReturn(value,action,extraValue){
	// hide popup
	$("#popup_div").css("display","none");
	$("#popup_text").css("display","none");
	action(value,extraValue);
}
// mode: 
// 0 = frontline servants
// 1 = all servants
// 2 = wave 0
// 3 = wave 1
// 4 = wave 2
function popup(mode,action,text,extraValue){
	for(var p=0;p<6;p++){
		if((p<3&&mode==0 || mode == 1)){
			$("#serv_btn_"+p).addClass("cut_btn_active");
			$("#serv_btn_"+p).attr("onclick","popupReturn("+p+","+action+","+extraValue+")");
			$("#cut_serv_"+p).attr("fill","#000");
		}
		else{
			$("#serv_btn_"+p).removeClass("cut_btn_active");
			$("#serv_btn_"+p).attr("onclick","");
			$("#cut_serv_"+p).attr("fill","#FFF");
		}
	}
	for(var w=0;w<3;w++){
		if(w == (mode-2)){
			for(var e=0;e<3;e++){
				$("#enemy_btn_"+w+"_"+e).addClass("cut_btn_active");
				$("#enemy_btn_"+w+"_"+e).attr("onclick","popupReturn("+e+","+action+","+extraValue+")");
				$("#cut_enemy_"+w+"_"+e).attr("fill","#000");
			}
		}
		else{
			for(var e=0;e<3;e++){
				$("#enemy_btn_"+w+"_"+e).removeClass("cut_btn_active");
				$("#enemy_btn_"+w+"_"+e).attr("onclick","");
				$("#cut_enemy_"+w+"_"+e).attr("fill","#FFF");
			}
		}
	}
	// enable popup
	$("#popup_text").text(text);
	$("#popup_text").css("display","block");
	$("#popup_div").css("display","block");
}
//remove action but do not calculate/view
function removeAction(){
	if(ACTION_CURRENT>0){
		//scoot them all down
		for(var i=ACTION_CURRENT;i<ACTIONS.length-1;i++){
			ACTIONS[i]=ACTIONS[i+1];
		}
		//get rid of the duplicate last element
		ACTIONS.pop();
		ACTION_CURRENT-=1;
	}
}

function displayAttack(){
	// fake pos
	for(var p=0;p<6;p++)
	{
		var real_pos = ACTION_ORDER[ACTION_CURRENT][p];
		if(PARTY[real_pos]>=0){
			$("#atk_"+p).css("display","inline-block");
			$("#atk_num_"+p).text(PARTY_ATTACK[real_pos]);
		}
		else{
			$("#atk_"+p).css("display","none");
		}
	}
}
function displayBuffs(){
	for(var p=0;p<6;p++){
		var real_pos = ACTION_ORDER[ACTION_CURRENT][p];
		var buffs = ACTION_BUFFS[ACTION_CURRENT][real_pos];
		var str = "";
		$("#buffs_div_"+p).empty();
		for(buff in buffs){
			str += `<div class = "buff tooltip" style= "background-image:url(`+BUFF_ICONS[buff]+`)"><span class = 'tooltiptext'>`;
			var causes = "";
			var total = 0;
			var suf = EFFECT_FLAT[buff]?"":"%";
			for(const cause of buffs[buff]){
				total+=parseFloat(cause[0]);
				if(cause[1]==-1){
					causes+=`<br>`+cause[0]+suf+` - `+cause[2];
				}
				else{
					causes+=`<br>`+cause[0]+suf+` - `+cause[2]+` for `+cause[1]+` turn(s)`;
				}
			}
			str+=EFFECTS[buff]+`: `+total+suf+causes+`</span></div>`;
		}
		$("#buffs_div_"+p).append(str);
	}
}
function displayServant(pos)
{
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	if(PARTY[real_pos] >= 0){
		$("#serv_sel_div_"+pos).css("background","url("+SERVANTS[PARTY[real_pos]].pic+")");
	}
	else{
		$("#serv_sel_div_"+pos).css("background","grey");
	}
	displaySkill(pos,0);
	displaySkill(pos,1);
	displaySkill(pos,2);
}
function setServant(pos,servant)
{
	if(MASTER_MODE){return;}
	PARTY[pos]=servant;
	displayServant(pos,servant);
	calcFull();
	writeFull();
}
function setNP(pos,level){
	if(MASTER_MODE){return;}
	PARTY_NP[pos]=level;
	calcFull();
	writeFull();
}
function displaySkill(pos,skill){
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	if(PARTY[real_pos]>=0){
		var skill_object = SERVANTS[PARTY[real_pos]]["skill"+(skill+1)];
		if(ACTION_SKILLS[ACTION_CURRENT][real_pos][skill]==1){
			$("#skill_"+pos+"_"+skill).css("background","url("+SKILL_ICONS[skill_object.icon]+")");
			$("#skill_"+pos+"_"+skill).removeClass("disabled");
		}
		else{
			$("#skill_"+pos+"_"+skill).css("background","linear-gradient(black, black),url("+SKILL_ICONS[skill_object.icon]+")");
			$("#skill_"+pos+"_"+skill).addClass("disabled");
		}
		$("#skill_"+pos+"_"+skill).addClass("tooltip");
		var skill_text = skill_object.name+" ("+(SKILLS[real_pos][skill]+1)+")";
		for(var i=0;i<skill_object.effect.length;i++){
			skill_text+="<br>"+EFFECTS[skill_object.effect[i]]+" ("+skill_object.target[i]+"): "+skill_object.values[SKILLS[real_pos][skill]][i]+(EFFECT_FLAT[skill_object.effect[i]]?"":"%")+(skill_object.turns[i]==0?"":" ("+skill_object.turns[i]+" turn"+(skill_object.turns[i]==1?"":"s")+")");
		}
		$("#skill_"+pos+"_"+skill+" > .tooltiptext").html(skill_text);
	}
	else{
		$("#skill_"+pos+"_"+skill).removeClass("tooltip");
		$("#skill_"+pos+"_"+skill+" > .tooltiptext").html("");
		$("#skill_"+pos+"_"+skill).css("background","grey");
		$("#skill_"+pos+"_"+skill).addClass("disabled");
	}
}
function setSkill(pos,skill,level){
	if(MASTER_MODE){return;}
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	SKILLS[real_pos][skill]=parseInt(level);
	displaySkill(pos,skill);
	calcFull();
	writeFull();
}
function displayCE(pos)
{
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	if(PARTY_CES[real_pos] >= 0){
		$("#ce_sel_div_"+pos).css("background","url("+CES[PARTY_CES[real_pos]].pic+")");
	}
	else{
		$("#ce_sel_div_"+pos).css("background","grey");
	}
}
function setCE(pos,ce){
	if(MASTER_MODE){return;}
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	PARTY_CES[real_pos]=ce;
	displayCE(pos);
	calcFull();
	writeFull();
}
function displayCELevel(pos){
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	if(PARTY_CE_LEVEL[real_pos]==0){
		$("#ce_lvl_"+pos).attr("class","ce_lvl ce_lvl_1 tooltip");
		$("#ce_lvl_"+pos+" > .tooltiptext").text("Level 1");
	}
	else if(PARTY_CE_LEVEL[real_pos]==1){
		$("#ce_lvl_"+pos).attr("class","ce_lvl ce_mlb tooltip");
		$("#ce_lvl_"+pos+" > .tooltiptext").text("MLB");
	}
	else{
		$("#ce_lvl_"+pos).attr("class","ce_lvl ce_lvl_100 tooltip");
		$("#ce_lvl_"+pos+" > .tooltiptext").text("MAX Level");
	}
}
function changeCELevel(pos){
	if(MASTER_MODE){return;}
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	PARTY_CE_LEVEL[real_pos]=PARTY_CE_LEVEL[real_pos]+1;
	if(PARTY_CE_LEVEL[real_pos]>2){
		PARTY_CE_LEVEL[real_pos]=0;
	}
	displayCELevel(pos);
	calcFull();
	writeFull();
}
function displayMysticSkills(){
	for(var skill=0;skill<3;skill++){
		var skill_object = MYSTIC_CODES[MYSTIC_CODE]["skill"+(skill+1)];
		if(ACTION_SKILLS[ACTION_CURRENT][6][skill]==1){
			$("#mystic_skill_"+skill).css("background","url("+SKILL_ICONS[MYSTIC_CODES[MYSTIC_CODE]["skill"+(skill+1)].icon]+")");
			$("#mystic_skill_"+skill).removeClass("disabled");
		}
		else{
			$("#mystic_skill_"+skill).css("background","linear-gradient(black, black),url("+SKILL_ICONS[MYSTIC_CODES[MYSTIC_CODE]["skill"+(skill+1)].icon]+")");
			$("#mystic_skill_"+skill).addClass("disabled");
		}
		var skill_text = skill_object.name+" ("+(parseInt(MYSTIC_CODE_LEVEL)+1)+")";
		for(var i=0;i<skill_object.effect.length;i++){
			skill_text+="<br>"+EFFECTS[skill_object.effect[i]]+" ("+skill_object.target[i]+"): "+skill_object.values[MYSTIC_CODE_LEVEL][i]+(EFFECT_FLAT[skill_object.effect[i]]?"":"%")+(skill_object.turns[i]==0?"":" ("+skill_object.turns[i]+" turn"+(skill_object.turns[i]==1?"":"s")+")");
		}
		$("#mystic_skill_"+skill + " > .tooltiptext").html(skill_text);
	}
}
function displayMystic(){
	if(MYSTIC_CODE >= 0){
		$("#mystic_sel_div").css("background","url("+MYSTIC_CODES[MYSTIC_CODE].pic+")");
		displayMysticSkills();
	}
	else{
		$("#mystic_sel_div").css("background","grey");
	}
}
function setMystic(mystic){
	if(MASTER_MODE){return;}
	MYSTIC_CODE = mystic;
	displayMystic();
	calcFull();
	writeFull();
}
function setMysticLevel(level){
	if(MASTER_MODE){return;}
	MYSTIC_CODE_LEVEL = level;
	displayMystic();
	calcFull();
	writeFull();
}
function displayEnemy(stage,enemy){
	$("#enemy_img_"+stage+"_"+enemy).attr("src",CLASSES_ICONS[NUM_CLASS[ENEMIES_CLASS[stage][enemy]]]);
}
function setEnemy(stage,enemy,value){
	if(MASTER_MODE){return;}
	ENEMIES_CLASS[stage][enemy] = value;
	displayEnemy(stage,enemy);
	calcFull();
	writeFull();
}
function setEnemyAttr(stage,enemy,value){
	if(MASTER_MODE){return;}
	ENEMIES_ATTR[stage][enemy] = value;
	calcFull();
	writeFull();
}
function setEnemyHP(stage,enemy,value){
	if(MASTER_MODE){return;}
	ENEMIES_HP[stage][enemy] = value;
	calcFull();
	writeFull();
}
function displayAllNP(){
	for(var i=0;i<6;i++){
		displayNP(i);
	}
}
// expects fake pos
function displayNP(pos){
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	var width = ACTION_NP[ACTION_CURRENT][real_pos];
	if(width>100){width=100;}
	$("#np_value_"+pos).css("width","calc("+width+"% - 2px)");
	$("#np_text_"+pos).text(ACTION_NP[ACTION_CURRENT][real_pos]+"%");
	// check if it's possible to NP
	if(pos < 3 && WAVE_NP[WAVE_CURRENT][real_pos] == 1 && ACTION_NP[ACTION_CURRENT][real_pos] >= 100){
		$("#np_click_"+pos).css("display","block");
		$("#np_value_"+pos).addClass("gauge_active");
		$("#np_value_"+pos).attr("onclick","clickAction("+pos+",3)");
	}
	else{
		$("#np_click_"+pos).css("display","none");
		$("#np_value_"+pos).removeClass("gauge_active");
		$("#np_value_"+pos).attr("onclick","");
	}
}
// -1 turns = infinite, assumes pos is the "real" pos
function applyBuff(action,pos,name,value,turns,source)
{
	//console.log("[action: \""+action+"\", pos: \""+pos+"\", name: \""+name+"\", value: \""+value+"\", turns: \""+turns+"\", source: \""+source+"\"]");
	if(name == "np_gauge"){
		ACTION_NP[action][pos]+=parseInt(value);
	}
	else{
		// buff already exists
		if(ACTION_BUFFS[action][pos].hasOwnProperty(name)){
			ACTION_BUFFS[action][pos][name].push([value,turns,source]);
		}
		// buff must be created
		else{
			ACTION_BUFFS[action][pos][name] = [[value,turns,source]];
		}
	}
}
// function to display everything happening on ACTION_CURRENT
function viewAction(){
	MASTER_MODE=true;
	//display servants/ces in correct order for the action
	for(var p=0;p<6;p++)
	{
		var real_pos = ACTION_ORDER[ACTION_CURRENT][p];
		// change icons
		// ------------
		displayServant(p);
		displayNP(p);
		displayCE(p);
		displayCELevel(p);
		
		// change select options
		// ---------------------
		// SERVANT SELECT
		$("#servant_sel_"+p).val(PARTY[real_pos]);
		// CE SELECT
		$("#ce_sel_"+p).val(PARTY_CES[real_pos]);
		// NP LEVEL SELECT
		$("#np_sel_"+p).val(PARTY_NP[real_pos]);
		// SKILL LEVEL SELECTS
		for(var s =0;s<3;s++){
			$("#skill_sel_"+p+"_"+s).val(SKILLS[real_pos][s]);
		}
	}
	displayBuffs();
	displayAttack();
	displayMysticSkills();
	
	// actions viewer
	$(".actions").empty();
	var cur_wave=0;
	for(var a =1;a<ACTIONS.length;a++){
		if(ACTIONS[a][0] < 3){	//servant
			var servant = PARTY[ACTION_ORDER[a][ACTIONS[a][0]]];
			if(ACTIONS[a][1]<3){ // skill
				var skill = SERVANTS[servant]["skill"+(1+ACTIONS[a][1])];
				$("#actions_"+cur_wave).append(`<div class = "`+(ACTION_CURRENT==a?"action-active ":"")+`action tooltip" id = "action_`+a+`" style = "background-image:url(`+SKILL_ICONS[skill.icon]+`)"><span class = "tooltiptext">`+skill.name+`<br>`+SERVANTS[servant].name+` (slot `+(ACTION_ORDER[a][ACTIONS[a][0]]+1)+`)<br><div class = "action_delete">Delete</div></span></div>`);
			}
			else if(ACTIONS[a][1] == 3){ // np
				var np = SERVANTS[servant].np;
				$("#actions_"+cur_wave).append(`<div class = "`+(ACTION_CURRENT==a?"action-active ":"")+`action tooltip" id = "action_`+a+`" onclick="setViewAction(`+a+`)" style = "background-image:url(`+SKILL_ICONS[np.type]+`)"><span class = "tooltiptext">`+np.name+`<br>`+SERVANTS[servant].name+` (slot `+(ACTION_ORDER[a][ACTIONS[a][0]]+1)+`)<br><div class = "action_delete">Delete</div></span></div>`);
			}
		}
		if(ACTIONS[a][0] == 3){	//mystic code
			if(ACTIONS[a][1]<3){ // skill
				var skill = MYSTIC_CODES[MYSTIC_CODE]["skill"+(1+ACTIONS[a][1])];
				$("#actions_"+cur_wave).append(`<div class = "`+(ACTION_CURRENT==a?"action-active ":"")+`action tooltip" id = "action_`+a+`" onclick="setViewAction(`+a+`)" style = "background-image:url(`+SKILL_ICONS[skill.icon]+`)"><span class = "tooltiptext">`+skill.name+`<br>`+MYSTIC_CODES[MYSTIC_CODE].name+`<br><div class = "action_delete">Delete</div></span></div>`);
			}
		}
		$("#action_"+a).attr("onclick",`(function(e){ if(e.target === e.currentTarget){ setViewAction(`+a+`); }})(event)`);
	}
	$(".action_delete").click(clickRemoveAction);
	fixToolTips();
	MASTER_MODE=false;
}
function setViewAction(action){
	ACTION_CURRENT = action;
	viewAction();
}
function printArray(array){
	console.log("[");
	for(var i=0;i<array.length;i++){
		console.log(array[i]);
	}
	console.log("]");
}
// targets/pos assumed to be current_pos NOT real_pos
// old is if the action already exists and we are recalculating
function addAction(pos,action,target1,target2,old){
	console.log(pos+","+action+","+target1+","+target2+","+old);
	var last = ACTIONS.length-1;
	if(!old){ // adding a fresh action onto the stack
		// NOT PUSHING DIRECTLY INTO 
		if(last != ACTION_CURRENT){
			console.log("CANNOT ADD ACTIONS IN BETWEEN OTHER ACTIONS!");
			ACTION_CURRENT=last;
			//viewAction();
		}
		// push onto stack
		
		ACTIONS.push([pos,action,target1,target2]);
		ACTION_CURRENT = ACTIONS.length-1;
	}
	else{ // the stack already exists, we are just recalculating
		last = ACTION_CURRENT;
		ACTION_CURRENT+=1;
	}
	// duplicate previous records
	ACTION_BUFFS.push(JSON.parse(JSON.stringify(ACTION_BUFFS[last])));
	ACTION_NP.push(ACTION_NP[last].slice());
	ACTION_ORDER.push(ACTION_ORDER[last].slice());
	ACTION_SKILLS.push(ACTION_SKILLS[last].slice());
	// calculate new values:
	if(pos >= 0 && pos <= 2)				// 			servant action
	{
		// servant's real pos in PARTY[]
		var real_pos = ACTION_ORDER[last][pos];
		if(action >=0 && action <= 2) 			// 		servant skill
		{
			// console.log("BEFORE");
			// printArray(ACTION_NP);
			// APPLY THE ACTUAL BUFFS/DEBUFFS
			var skill = SERVANTS[PARTY[real_pos]]["skill"+(action+1)];
			for(var e=0;e<skill.target.length;e++){// loop over each skill effect
				if(skill.target[e] == "all"){
					for(var i=0;i<3;i++){
						applyBuff(ACTION_CURRENT,ACTION_ORDER[ACTION_CURRENT][i],skill.effect[e],skill.values[SKILLS[real_pos][action]][e],skill.turns[e],skill.name);
					}
				}
				else if(skill.target[e] == "target"){
					applyBuff(ACTION_CURRENT,ACTION_ORDER[ACTION_CURRENT][target1],skill.effect[e],skill.values[SKILLS[real_pos][action]][e],skill.turns[e],skill.name);
				}
				else if(skill.target[e] == "self"){
					applyBuff(ACTION_CURRENT,real_pos,skill.effect[e],skill.values[SKILLS[real_pos][action]][e],skill.turns[e],skill.name);
				}
			}
			// console.log("AFTER");
			// printArray(ACTION_NP);
			// disable the skill
			ACTION_SKILLS[ACTION_CURRENT][real_pos][action]=0;
		}
		else if(action == 3)// 				servant NP
		{	
			console.log("NPS NOT YET ADDED");
		}
		else if(action == 4)//				fishing for NP
		{
			console.log("FISHING NOT YET ADDED");
		}
		else{
			console.log("ACTION ERROR");
		}
	}
	else if(pos == 3){ // 					mystic code action
		var skill = MYSTIC_CODES[MYSTIC_CODE]["skill"+(action+1)];
		for(var e=0;e<skill.target.length;e++){// loop over each skill effect
			if(skill.target[e] == "all"){
				for(var i=0;i<3;i++){
					applyBuff(ACTION_CURRENT,ACTION_ORDER[ACTION_CURRENT][i],skill.effect[e],skill.values[MYSTIC_CODE_LEVEL][e],skill.turns[e],skill.name);
				}
			}
			else if(skill.target[e] == "target"){
				applyBuff(ACTION_CURRENT,ACTION_ORDER[ACTION_CURRENT][target1],skill.effect[e],skill.values[MYSTIC_CODE_LEVEL][e],skill.turns[e],skill.name);
			}
			else if(skill.target[e] == "orderchange"){
				var tar1 = ACTION_ORDER[ACTION_CURRENT][target1];
				ACTION_ORDER[ACTION_CURRENT][target1] = ACTION_ORDER[ACTION_CURRENT][target2];
				ACTION_ORDER[ACTION_CURRENT][target2] = tar1;
			}
		}
		//console.log("AFTER");
		//printArray(ACTION_NP);
			// disable the skill
		ACTION_SKILLS[ACTION_CURRENT][6][action]=0;
	}
	else{
		console.log("INVALID ACTION!");
	}
	if(!old){//view it if its fresh
		viewAction();
	}
}
function calcFull(noview){
	//reset all data
	ACTION_ORDER=[[0,1,2,3,4,5]];
	ACTION_NP=[[0,0,0,0,0,0]];
	ACTION_BUFFS=[[{},{},{},{},{},{}]];
	ACTION_SKILLS=[[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]]];
	WAVE_NP = [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]];
	//calculate party attack values
	PARTY_ATTACK=[];
	for(var p=0;p<6;p++){
		if(PARTY[p]>=0){
			PARTY_ATTACK[p]=SERVANTS[PARTY[p]].atk;
			PARTY_ATTACK[p]+=1000;//add 1000 fous
			if(PARTY_CES[p]>=0){//if there is a ce, add atk value
				if(PARTY_CE_LEVEL[p]==0){
					PARTY_ATTACK[p]+=CES[PARTY_CES[p]].atk[0];
				}
				else if(PARTY_CE_LEVEL[p]==2){
					PARTY_ATTACK[p]+=CES[PARTY_CES[p]].atk[1];
				}
				else{
					PARTY_ATTACK[p]+=Math.floor(CES[PARTY_CES[p]].atk[0]*.85+CES[PARTY_CES[p]].atk[1]*.15);
				}
			}
		}
		else{
			PARTY_ATTACK[p]=0;
		}
	}
	for(var p=0;p<6;p++)
	{
		// calculate class skill buffs
		if(PARTY[p]>=0){
			for(const skill of SERVANTS[PARTY[p]].skills){
				applyBuff(0,p,skill[0],skill[1],-1,"Passive");
			}
		}
		//calculate buffs from CES
		var ce = PARTY_CES[p];
		if(ce < 0 || ce > CES.length){continue;} // skip if no ce given
		for(var i=0;i<CES[ce].effect.length;i++){
			applyBuff(0,p,CES[ce].effect[i],CES[ce].values[PARTY_CE_LEVEL[p]==0?0:1][i],-1,CES[ce].name);
		}
	}
	// recalculate all actions, skipping action 0, its filler
	ACTION_CURRENT=0;
	for(var a =1;a<ACTIONS.length;a++){
		addAction(ACTIONS[a][0],ACTIONS[a][1],ACTIONS[a][2],ACTIONS[a][3],true);
	}
	if(noview){
		return;
	}
	viewAction();
}
function clickAction(pos,action){
	
	//TARGET SELECT
	if(pos >= 0 && pos <= 2)				// 			servant action
	{
		//MAKE SURE ITS VALID
		var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
		if(PARTY[real_pos]<0){
			return;
		}
		if(ACTION_SKILLS[ACTION_SKILLS.length-1][real_pos][action]==0){
			// TODO: WARNING DIALOGUE
			return;
		}
		if(action >=0 && action <= 2) 			// 		servant skill
		{
			var skill = SERVANTS[PARTY[real_pos]]["skill"+(action+1)];
			if(skill.target_real == "aoe" || skill.target_real == "all" || skill.target_real == "self")
			{
				// JUST ADD THE ACTION, NO TARGETING POPUP
				addAction(pos,action,0,0);
			}
			else if(skill.target_real == "target")
			{
				// need a current servants popup
				popup(0,"function(tar){addAction("+pos+","+action+",tar,0)}","Select target for "+skill.name);
			}
			else if(skill.target_real == "st")
			{
				// need a current servants popup
				// TODO: ADD OTHER WAVES
				popup(2,"function(tar){addAction("+pos+","+action+",tar,0)}","Select target for "+skill.name);
			}
		}
		else if(action == 3)// 				servant NP
		{
			var np = SERVANTS[PARTY[real_pos]].np;
			if(np.target_dmg == "aoe" || np.target_dmg == "all" || np.target_dmg == "self" || np.target_dmg == "none")
			{
				// JUST ADD THE ACTION, NO TARGETING POPUP
				addAction(pos,action,0,0);
			}
			else if(skill.target_real == "target")
			{
				// need a current servants popup
				popup(0,"function(tar){addAction("+pos+","+action+",tar,0)}","Select target for "+np.name);
			}
			else if(skill.target_real == "st")
			{
				// need a current servants popup
				// TODO: ADD OTHER WAVES
				popup(2,"function(tar){addAction("+pos+","+action+",tar,0)}","Select target for "+np.name);
			}
		}
	}
	else if(pos == 3){ // 					mystic code action
		if(ACTION_SKILLS[ACTION_SKILLS.length-1][6][action]==0){
			// TODO: WARNING DIALOGUE
			return;
		}
		var skill = MYSTIC_CODES[MYSTIC_CODE]["skill"+(action+1)];
		if(skill.target_real == "aoe" || skill.target_real == "all" || skill.target_real == "self" || skill.target_real == "none")
		{
			// JUST ADD THE ACTION, NO TARGETING POPUP
			addAction(pos,action,0,0);
		}
		else if(skill.target_real == "target")
		{
			// need a current servants popup
			popup(0,"function(tar){addAction("+pos+","+action+",tar,0)}","Select target for "+skill.name);
		}
		else if(skill.target_real == "single")
		{
			// need a current servants popup
			// TODO: CURRENT WAVE
			popup(2,"function(tar){addAction("+pos+","+action+",tar,0)}","Select target for "+skill.name);
		}
		else if(skill.target_real == "orderchange")
		{
			// need an order change
			popup(1,`
			function(tar1){
				popup(1,
					function(tar2,tar1){
						addAction(`+pos+`,`+action+`,tar1,tar2,false)
					},
					"Select second servant for order change",
					tar1
				);
			}`,"Select first servant for order change");
		}
	}
	else{
		console.log("INVALID ACTION!");
	}
}
// resets all actions
function resetActions(){
	ACTIONS=[[]];
	calcFull();
}
// removes ACTION_CURRENT
function clickRemoveAction(){
	if(ACTION_CURRENT>0)
	{
		removeAction();
		ACTION_PREV=ACTION_CURRENT;
		calcFull(true);
		ACTION_CURRENT=ACTION_PREV;
		viewAction();
	}
}

$( document ).ready(function (){
	readFull();
	// initialize servant displays
	for(var p=0;p<6;p++)
	{
		//servant Portrait / selection
		var html = `<div id = "part_sel_div_`+p+`" class = "party_sel_div"><div id = "serv_sel_div_`+p+`" class = "servant_sel_div" style="background:`+(PARTY[p]>=0?"url("+SERVANTS[PARTY[p]].pic+")":"grey")+`">
		<div class = "atk_stat" id = "atk_`+p+`"><img src = "`+BUFF_ICONS['atk']+`" class = "atk_stat_img"><div class = "atk_stat_num" id = "atk_num_`+p+`"></div></div>
		<div class ="servant_portrait"></div>`;
		for(var s =0;s<3;s++){
			html+=`<select id = "skill_sel_`+p+`_`+s+`" class = "skill_sel" onchange="setSkill(`+p+`,`+s+`,this.value)">`;
			for(var i=0;i<10;i++){
				html += `<option `+(i==SKILLS[p][s]?"selected ":"")+`value = `+i+`>`+(i+1)+`</option>`;
			}
			html+=`</select>`;
			if(s<2){html+="<p class = \"slash\">/</p>";}
		}
		
		html += `<br><select id = "servant_sel_`+p+`" class = "servant_sel" onchange="setServant(`+p+`,this.value)">
				<option value = -1>Empty</option>
			</select><select onchange = "setNP(`+p+`,this.value)" id = "servant_np_sel_`+p+` class = "servant_np_sel"">`;
		for(var i=0;i<5;i++){
			html+=`<option value="`+i+`"`+(PARTY_NP[p]==i?" selected":"")+`>NP `+(i+1)+`</option>`;
		}
		// CE SELECTION
		html+=`</select>
		</div><div id = "ce_sel_div_`+p+`" class = "ce_sel_div"><select onchange = "setCE(`+p+`,this.value)" class = "ce_sel" id = "ce_sel_`+p+`"><option value=-1>Empty</option></select>
		<div class="ce_lvl tooltip" id = "ce_lvl_`+p+`" onclick="changeCELevel(`+p+`)"><span id = "ce_lvl_tip_`+p+`" class = "tooltiptext"></span></div>
		</div><div class = "np_gauge" id = "np_gauge_`+p+`"><div class="np_text"><div class="np_text_in" id="np_text_`+p+`">100%</div><div id = "np_click_`+p+`" class="np_text_in">Click to NP<img></div></div><div class = "np_value" id = "np_value_`+p+`"></div></div>
		<div class = "skills_div" id = "skills_div_`+p+`">`;
		// SKILLS
		for(var i=0;i<3;i++){
			if(p < 3){ // is frontline member
				html+=`<div onclick="clickAction(`+p+`,`+i+`)" id = "skill_`+p+`_`+i+`" class = "skill tooltip"><span class = "tooltiptext" id = "skill_tip_`+p+`_`+i+`"></span></div>`;
			}
			else{
				html+=`<div style = "cursor:default!important" id = "skill_`+p+`_`+i+`" class = "skill tooltip disabled"><span class = "tooltiptext" id = "skill_tip_`+p+`_`+i+`"></span></div>`;
			}
		}
		html+=`</div><div id = "buffs_div_`+p+`" class = "buffs_div"></div></div>`;
		$("#serv_sel_main").append(html);
		for(var i=0;i<SERVANTS.length;i++){
			$("#servant_sel_"+p).append("<option value = "+i+""+(PARTY[p]==i?" selected":"")+">"+SERVANTS[i].name+"</option>");
		}
		for(var i=0;i<CES.length;i++){
			$("#ce_sel_"+p).append("<option value = "+i+""+(PARTY_CES[p]==i?" selected":"")+">"+CES[i].name+"</option>");
		}
	}
	//initialize mystic code display
	var html = `<div id = "mystic_div"><div id = "mystic_sel_div" class = "servant_sel_div" style="background:`+(MYSTIC_CODE>=0?"url("+MYSTIC_CODES[MYSTIC_CODE].pic+")":"grey")+`">
	<div id = "mystic_portrait" class ="servant_portrait"></div>`;
	html+=`<select id = "mystic_skill_sel" class = "skill_sel" onchange="setMysticLevel(this.value)">`;
	for(var i=0;i<10;i++){
		html += `<option `+(i==MYSTIC_CODE_LEVEL?"selected ":"")+`value = `+i+`>`+(i+1)+`</option>`;
	}
	html+=`</select>`;
	
	html += `<br><select id = "mystic_sel" class = "servant_sel" onchange="setMystic(parseInt(this.value))">
		</select><div class = "skills_div" id = "mystic_skills_div">`;
	// MYSTIC SKILLS
	for(var i=0;i<3;i++){
		html+=`<div id = "mystic_skill_`+i+`" onclick="clickAction(3,`+i+`)" class = "skill tooltip"><span class = "tooltiptext" id = "mystic_skill_tip_`+i+`"></span></div>`;
	}
	html+=`</div></div></div>`;
	$("#serv_sel_main").append(html);
	for(var i=0;i<MYSTIC_CODES.length;i++){
		$("#mystic_sel").append("<option value = "+i+""+(MYSTIC_CODE==i?" selected":"")+">"+MYSTIC_CODES[i].name+"</option>");
	}
	displayMysticSkills();
	
	// INITIALIZE ENEMY DISPLAY
	for(var stage=0;stage<3;stage++){
		for(var enemy=0;enemy<3;enemy++){
			
			$("#enemy_"+stage+"_"+enemy).append("<img class = \"enemy_img\" id =\"enemy_img_"+stage+"_"+enemy+"\"><select class = \"enemy_sel\" id = \"enemy_sel_"+stage+"_"+enemy+"\" onchange=\"setEnemy("+stage+","+enemy+",this.value)\"></select><select class = \"enemy_attr_sel\" id = \"enemy_attr_sel_"+stage+"_"+enemy+"\" onchange=\"setEnemyAttr("+stage+","+enemy+",this.value)\"></select><input class = \"enemy_hp\" type = \"number\" step = \"1\" value = \""+ENEMIES_HP[stage][enemy]+"\" onchange=\"setEnemyHP("+stage+","+enemy+",this.value)\"/>");
			for(var i=0;i<NUM_CLASS.length;i++){
				$("#enemy_sel_"+stage+"_"+enemy).append("<option value="+i+(ENEMIES_CLASS[stage][enemy]==i?" selected":"")+">"+NUM_CLASS[i]+"</option>");
			}
			for(var i=0;i<NUM_ATTR.length;i++){
				$("#enemy_attr_sel_"+stage+"_"+enemy).append("<option value="+i+(ENEMIES_ATTR[stage][enemy]==i?" selected":"")+">"+NUM_ATTR[i]+"</option>");
			}
			displayEnemy(stage,enemy);
		}
	}
	// INITIALIZE POPUP
	for(var p=0;p<6;p++){
		$("#popup_div").append(`<div class = "cut_btn serv_btn" id = "serv_btn_`+p+`"></div>`);
	}
	for(var w=0;w<3;w++){
		for(var e=0;e<3;e++){
			$("#popup_div").append(`<div class = "cut_btn enemy_btn" id = "enemy_btn_`+w+`_`+e+`"></div>`);
		}
	}
	positionPopup();
	// calculate entire run
	calcFull();
	viewAction();
});
window.addEventListener("resize", positionPopup);