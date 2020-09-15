var VERSION = 1;
var ICONS = {np:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-07/Startnp.png",
            crit:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-07/Critdmg.png",
            arts:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-07/Artsup.png",
            def:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-07/Shieldup.png",
            atk:"https://gamepress.gg/randorder/sites/grandorder/files/styles/45x45/public/2017-07/Dmg_up.png",
            guts:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-07/Guts.png",
            divinity:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-07/Divinity.png",
            np_gen:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-07/Npacqui.png",
			orderchange: "https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-12/Orderchange.png",
			stun: "https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-07/Stun.png",
			shuffle: "https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-12/Commandshuffle.png",
			np_dmg: "https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2017-07/Npdmg.png",
			buster_stars: "https://gamepress.gg/grandorder/sites/grandorder/files/styles/45x45/public/2019-06/BusterStarGatherUp.png",
			}
var EFFECTS = {
	np_gain:"NP Gain",
	arts:"Arts",
	np_gauge:"NP Gauge",
	atk:"Attack",
	dmg:"Damage +",
	def_down:"Defense Down",
	dragon_dmg:"Dragon Damage",
	heal:"Heal"
}
var CLASSES_ICONS = {
	saber:"https://gamepress.gg/grandorder/sites/grandorder/files/images/saber.png",
	archer:"https://gamepress.gg/grandorder/sites/grandorder/files/images/archer.png",
	lancer:"https://gamepress.gg/grandorder/sites/grandorder/files/images/lancer.png",
	rider:"https://gamepress.gg/grandorder/sites/grandorder/files/images/rider.png",
	caster:"https://gamepress.gg/grandorder/sites/grandorder/files/images/caster.png",
	assassin:"https://gamepress.gg/grandorder/sites/grandorder/files/images/assassin.png",
	berserker:"https://gamepress.gg/grandorder/sites/grandorder/files/images/berserker.png",
	ruler:"https://gamepress.gg/grandorder/sites/grandorder/files/images/ruler.png",
	avenger:"https://gamepress.gg/grandorder/sites/grandorder/files/images/avenger.png?v3",
	alter_ego:"https://gamepress.gg/grandorder/sites/grandorder/files/2019-02/alter-ego.png",
	moon_cancer:"https://gamepress.gg/grandorder/sites/grandorder/files/2018-08/mooncancer.png",
	foreigner:"https://gamepress.gg/grandorder/sites/grandorder/files/2019-06/Class-Foreigner-Gold.png",
	empty:"//:0"
}

var CLASSES_NUM = {saber:0, archer:1, lancer:2, rider:3, caster:4, assassin:5, berserker:6, ruler:7, avenger:8, alter_ego:9, moon_cancer:10, foreigner:11,empty:12 };
var NUM_CLASS = ["saber", "archer", "lancer", "rider", "caster", "assassin", "berserker", "ruler", "avenger", "alter_ego", "moon_cancer", "foreigner","empty"];

var ATTR_NUM = {beast:0, earth:1, man:2, sky:3, star:4};
var NUM_ATTR = ["beast", "earth", "man", "sky", "star"];

var MYSTIC_CODES = [
{name : "Chaldea Combat Uniform", pic:"https://gamepress.gg/grandorder/sites/grandorder/files/2017-12/Chaldeacombat2.png",
skill1: {name: "Reinforce All", icon: "atk", target:["all"], effect:["atk"], turns:[1],values:[[20],[21],[22],[23],[24],[25],[26],[27],[28],[30]]},
skill2: {name: "Gandr", icon: "stun", target:["single"], effect:["stun"], turns:[1],values:[[500],[500],[500],[500],[500],[500],[500],[500],[500],[500]]},
skill3: {name: "Order Change", icon: "orderchange", target:["orderchange"], effect:["orderchange"], turns:[0],values:[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]},
},
{name : "Mage's Association Uniform", pic:"https://gamepress.gg/grandorder/sites/grandorder/files/2017-12/Mage2.png",
skill1: {name: "Cure-All", icon: "heal", target:["all"], effect:["heal"], turns:[0],values:[[800],[1000],[1200],[1400],[1600],[1800],[2000],[2200],[2400],[2800]]},
skill2: {name: "Spiritron Transfer", icon: "np", target:["target"], effect:["np_gauge"], turns:[0],values:[[20],[20],[20],[20],[20],[20],[20],[20],[20],[20]]},
skill3: {name: "Command Shuffle", icon: "shuffle", target:["shuffle"], effect:["shuffle"], turns:[0],values:[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]},
},
{name : "A Fragment of 2004", pic:"https://gamepress.gg/grandorder/sites/grandorder/files/2019-10/Fragment2004F.png",
skill1: {name: "Code: F", icon: "np_dmg", target:["target"], effect:["np_dmg"], turns:[1],values:[[30],[32],[34],[36],[38],[40],[42],[44],[46],[50]]},
skill2: {name: "Code: U", icon: "buster_stars", target:["target"], effect:["buster_stars"], turns:[1],values:[[5000],[5500],[6000],[6500],[7000],[7500],[8000],[8500],[9000],[10000]]},
skill3: {name: "Code: H", icon: "np_gain", target:["target"], effect:["np_gain"], turns:[1],values:[[30],[32],[34],[36],[38],[40],[42],[44],[46],[50]]},
},
];
var SERVANTS = [
{name : "Sieg", attack: 8394,class:"caster",tier:4,q:1,a:2,b:2,qh:3,ah:2,np_perhit:.78,np_type:"arts",np_hits:3,np_dmg:[450,600,675,712.5,750],np_effects:[["def_down",3,20]],
pic:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2018-08/208_Sieg_4.png",
                    skills: [["arts",6.5]],
                    skill1: {name:"Artificial Hero (Fake) B+",  icon:"np_gen",  target:["self"],        effect:["np_gain"],                turns:[3],   values:[[20],[21],[22],[23],[24],[25],[26],[27],[28],[30]]},
                    skill2: {name:"Magecraft C",                icon:"arts",    target:["self"],        effect:["arts"],                  turns:[1],   values:[[22],[23.4],[24.8],[26.2],[27.6],[29],[30.4],[31.8],[33.2],[36]]},
                    skill3: {name:"Dead-Count Shapeshifter EX", icon:"divinity",target:["self","self"], effect:["np_gauge","dragon_dmg"], turns:[0,1], values:[[20,50],[21,55],[22,60],[23,65],[24,70],[25,75],[26,80],[27,85],[28,90],[30,100]]}
},
{name: "Paracelsus", attack: 6711,class:"caster",tier:3,q:1,a:3,b:1,qh:2,ah:2,np_perhit:.55,np_type:"arts",np_hits:3,np_dmg:[400,500,550,575,600],np_effects:[],
pic:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-12/0794.jpg",
                    skills: [["arts",10]],
                    skill1: {name:"Rapid Casting A",        icon:"np",   target:["self"],  effect:["np_gauge"], turns: [0], values:[[55],[57.5],[60],[62.5],[65],[67.5],[70],[72.5],[75],[80]]},
                    skill2: {name:"Elemental A+",           icon:"arts", target:["all"],   effect:["arts"], turns:[3],values:[[10],[11],[12],[13],[14],[15],[16],[17],[18],[20]]},
                    skill3: {name:"Philosopher's Stone A+", icon:"guts", target:["taget"], effect:["np_gain"],turns:[3],values:[[30],[32],[34],[36],[38],[40],[42],[44],[46],[50]]}
},
{name:"Waver", attack: 10598,class:"caster",tier:5,q:1,a:3,b:1,qh:2,ah:1,np_perhit:1.64,np_type:"arts",np_hits:0,np_dmg:[0,0,0,0,0],np_effects:["def_down",3,30],
pic:"https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/037%20Zhuge%20Liang%20%28El-Melloi%20II%29%201.png",
                    skills: [["arts",10]],
                    skill1: {name:"Discerning Eye A",        icon:"crit",   target:["target"],  effect:["np_gauge"], turns: [0], values:[[30],[30],[30],[30],[30],[30],[30],[30],[30],[30]]},
                    skill2: {name:"Tactician's Advice A+",   icon:"def",    target:["all"],     effect:["np_gauge"], turns: [0], values:[[10],[10],[10],[10],[10],[10],[10],[10],[10],[10]]},
                    skill3: {name:"Tactician's Command A+",  icon:"atk",    target:["all"],     effect:["np_gain","atk","dmg"],turns:[0,3,3],values:[[10,20,200],[10,21,230],[10,22,260],[10,23,290],[10,24,320],[10,25,350],[10,26,380],[10,27,410],[10,28,440],[10,30,500]]}
}];
var CES = [
{name: "Kaleidoscope", effect:["np_gauge"], values:[[80],[100]], atk:[500,2000],
pic: "https://vignette.wikia.nocookie.net/fategrandorder/images/8/86/Kaleidoscope.png/revision/latest/scale-to-width-down/292?cb=20180519064310"},
{name: "Imaginary Element", effect:["np_gauge"], values:[[60],[75]], atk:[200,750],
pic: "https://vignette.wikia.nocookie.net/fategrandorder/images/8/86/Kaleidoscope.png/revision/latest/scale-to-width-down/292?cb=20180519064310"},
{name: "Black Grail", effect:["np_dmg"], values:[[60],[80]], atk:[600,2400],
pic: "https://vignette.wikia.nocookie.net/fategrandorder/images/b/bd/Black_grail.png/revision/latest/scale-to-width-down/292?cb=20180519063950"},
{name: "CKT", effect:["arts","quick","np_dmg"], values:[[10,10,10],[15,15,15]], atk:[250,1000],
pic: "https://vignette.wikia.nocookie.net/fategrandorder/images/3/30/CE900.png/revision/latest/scale-to-width-down/292?cb=20180919135715"},
{name: "Return Match", effect:["atk"], values:[[100],[200]], atk:[500,2000],
pic: "https://vignette.wikia.nocookie.net/fategrandorder/images/5/5b/CE899.png/revision/latest/scale-to-width-down/292?cb=20180919135816"},
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
// enemies health
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
var ACTIONS=[];

// UNSAVED DATA
// ------------
// current order of party, first three are in battle
var PARTY_CUR=[0,1,2,3,4,5];
// 1 for available, 0 for if skills have been used
var SKILLS_CUR=[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]];

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
				SKILLS[i][j]=skill;
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
	var nextAction = readNum(URL_READ,2);
	while(!isNaN(nextAction)){
		
		nextAction = readNum(URL_READ,2);
	}
}
function displayServant(pos)
{
	if(PARTY[pos] >= 0){
		$("#serv_sel_div_"+pos).css("background","url("+SERVANTS[PARTY[pos]].pic+")");
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
	PARTY[pos]=servant;
	displayServant(pos,servant);
	writeFull();
}
function setNP(pos,level){
	PARTY_NP[pos]=level;
	writeFull();
}
function displaySkill(pos,skill){
	//TODO
}
function setSkill(pos,skill,level){
	SKILLS[pos][skill]=level;
	displaySkill(pos,skill);
	writeFull();
}
function displayCE(pos)
{
	if(PARTY_CES[pos] >= 0){
		$("#ce_sel_div_"+pos).css("background","url("+CES[PARTY_CES[pos]].pic+")");
	}
	else{
		$("#ce_sel_div_"+pos).css("background","grey");
	}
}
function setCE(pos,ce){
	PARTY_CES[pos]=ce;
	displayCE(pos);
	writeFull();
}
function displayCELevel(pos){
	if(PARTY_CE_LEVEL[pos]==0){
		$("#ce_lvl_"+pos).attr("class","ce_lvl ce_lvl_1");
	}
	else if(PARTY_CE_LEVEL[pos]==1){
		$("#ce_lvl_"+pos).attr("class","ce_lvl ce_mlb");
	}
	else{
		$("#ce_lvl_"+pos).attr("class","ce_lvl ce_lvl_100");
	}
}
function changeCELevel(pos){
	PARTY_CE_LEVEL[pos]=PARTY_CE_LEVEL[pos]+1;
	if(PARTY_CE_LEVEL[pos]>2){
		PARTY_CE_LEVEL[pos]=0;
	}
	displayCELevel(pos);
	writeFull();
}
function displayMystic(){
	if(MYSTIC_CODE >= 0){
		$("#mystic_sel_div").css("background","url("+MYSTIC_CODES[MYSTIC_CODE].pic+")");
	}
	else{
		$("#mystic_sel_div").css("background","grey");
	}
}
function setMystic(mystic){
	MYSTIC_CODE = mystic;
	displayMystic();
	writeFull();
}
function setMysticLevel(level){
	MYSTIC_CODE_LEVEL = level;
	displayMystic();
	writeFull();
}
function displayEnemy(stage,enemy){
	$("#enemy_img_"+stage+"_"+enemy).attr("src",CLASSES_ICONS[NUM_CLASS[ENEMIES_CLASS[stage][enemy]]]);
}
function setEnemy(stage,enemy,value){
	ENEMIES_CLASS[stage][enemy] = value;
	displayEnemy(stage,enemy);
	writeFull();
}
function setEnemyAttr(stage,enemy,value){
	ENEMIES_ATTR[stage][enemy] = value;
	writeFull();
}
function setEnemyHP(stage,enemy,value){
	ENEMIES_HP[stage][enemy] = value;
	writeFull();
}
$( document ).ready(function (){
	readFull();
	// initialize servant displays
	for(var p=0;p<6;p++)
	{
		var html = `<div id = "part_sel_div_`+p+`" class = "party_sel_div"><div id = "serv_sel_div_`+p+`" class = "servant_sel_div" style="background:`+(PARTY[p]>=0?"url("+SERVANTS[PARTY[p]].pic+")":"grey")+`">
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
				<option value = -1>empty</option>
			</select><select onchange = "setNP(`+p+`,this.value)" id = "servant_np_sel_`+p+` class = "servant_np_sel"">`;
		for(var i=0;i<5;i++){
			html+=`<option value="`+i+`"`+(PARTY_NP[p]==i?" selected":"")+`>NP `+(i+1)+`</option>`;
		}
		html+=`</select>
		</div><div id = "ce_sel_div_`+p+`" class = "ce_sel_div"><select onchange = "setCE(`+p+`,this.value)" class = "ce_sel" id = "ce_sel_`+p+`"><option value=-1>Empty</option></select>
		<div class="ce_lvl" id = "ce_lvl_`+p+`" onclick="changeCELevel(`+p+`)"></div>
		</div></div>`;
		$("#serv_sel_main").append(html);
		for(var i=0;i<SERVANTS.length;i++){
			$("#servant_sel_"+p).append("<option value = "+i+""+(PARTY[p]==i?" selected":"")+">"+SERVANTS[i].name+"</option>");
		}
		for(var i=0;i<CES.length;i++){
			$("#ce_sel_"+p).append("<option value = "+i+""+(PARTY_CES[p]==i?" selected":"")+">"+CES[i].name+"</option>");
		}
		displayCE(p);
		displayCELevel(p);
		displayServant(p);
	}
	//initialize mystic code display
	var html = `<div id = "mystic_sel_div" class = "servant_sel_div" style="background:`+(MYSTIC_CODE>=0?"url("+MYSTIC_CODES[MYSTIC_CODE].pic+")":"grey")+`">
	<div class ="servant_portrait"></div>`;
	html+=`<select id = "mystic_skill_sel" class = "skill_sel" onchange="setMysticLevel(this.value)">`;
	for(var i=0;i<10;i++){
		html += `<option `+(i==MYSTIC_CODE_LEVEL?"selected ":"")+`value = `+i+`>`+(i+1)+`</option>`;
	}
	html+=`</select>`;
	
	html += `<br><select id = "mystic_sel" class = "servant_sel" onchange="setMystic(parseInt(this.value))">
		</select>
	</div>`;
	$("#serv_sel_main").append(html);
	for(var i=0;i<MYSTIC_CODES.length;i++){
		$("#mystic_sel").append("<option value = "+i+""+(MYSTIC_CODE==i?" selected":"")+">"+MYSTIC_CODES[i].name+"</option>");
	}
	for(var stage=0;stage<3;stage++){
		$("#enemy_sel_main").append("<div class = \"enemy_stage\" id = \"enemy_stage_"+stage+"\"><div class = \"stage_header\">Wave "+(stage+1)+"/3</div></div>");
		for(var enemy=0;enemy<3;enemy++){
			$("#enemy_stage_"+stage).append("<div class = \"enemy_div\" id = \"enemy_div_"+stage+"_"+enemy+"\"><img class = \"enemy_img\" id =\"enemy_img_"+stage+"_"+enemy+"\"><select class = \"enemy_sel\" id = \"enemy_sel_"+stage+"_"+enemy+"\" onchange=\"setEnemy("+stage+","+enemy+",this.value)\"></select><select class = \"enemy_attr_sel\" id = \"enemy_attr_sel_"+stage+"_"+enemy+"\" onchange=\"setEnemyAttr("+stage+","+enemy+",this.value)\"></select><input class = \"enemy_hp\" type = \"number\" step = \"1\" value = \""+ENEMIES_HP[stage][enemy]+"\" onchange=\"setEnemyHP("+stage+","+enemy+",this.value)\"/></div>");
			for(var i=0;i<NUM_CLASS.length;i++){
				$("#enemy_sel_"+stage+"_"+enemy).append("<option value="+i+(ENEMIES_CLASS[stage][enemy]==i?" selected":"")+">"+NUM_CLASS[i]+"</option>");
			}
			for(var i=0;i<NUM_ATTR.length;i++){
				$("#enemy_attr_sel_"+stage+"_"+enemy).append("<option value="+i+(ENEMIES_ATTR[stage][enemy]==i?" selected":"")+">"+NUM_ATTR[i]+"</option>");
			}
			displayEnemy(stage,enemy);
		}
	}
});









