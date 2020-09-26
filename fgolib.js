// TODO
// SERVANT SELECT (JP FILTER)
// INFO
// VERSION WARNING
// Fishing
// card damage
// servant death
// reset button
// set all classes/attr
// delayed stun

// current version of script
var VERSION = 1;
// earliest version that will work with this version
var LAST_WORKING_VERSION = 1;
var SKILL_ICONS = {
	np_gauge:"icons/skills/np.png",
	crit:"icons/skills/Critdmg.png",
	arts:"icons/skills/Artsup.png",
	quick:"icons/skills/Quickup.png",
	buster:"icons/skills/Busterup.png",
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
	np_buster:"icons/skills/Command_Card_Buster.png",
	np_drain:"icons/skills/NPDrain.png",
	ignore_invinc:"icons/skills/Shieldbreak.png",
	invinc:"icons/skills/Invishield.png",
	def_down:"icons/skills/Shielddown.png",
	start:"icons/skills/start.png",
	star_gather:"icons/skills/Starzoom.png",
	star_drop:"icons/skills/Critgem.png",
	evade:"icons/skills/Dodge.png",
	atkdef:"icons/skills/AtkDefUp.png",
	np_regen:"icons/skills/NPturn.png",
	taunt:"icons/skills/Taunt.png",
	charm:"icons/skills/Charm.png",
	buffchance:"icons/skills/Staffup.png",
	cleanse:"icons/skills/Bubbles.png",
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
	power:"icons/effects/Powerup.png",
	def_down:"icons/effects/Defensedown.png",
	h_threat_dmg:"icons/effects/Powerup.png",
	np_type_quick:"icons/effects/np_type_quick.png",
	np_type_arts:"icons/effects/np_type_arts.png",
	np_type_buster:"icons/effects/np_type_buster.png",
	stun:"icons/effects/Stunstatus.png",
	delayed_stun:"icons/effects/DelayedDebuff.png",
	debuff_immune:"icons/effects/DebuffImmune.png",
}
var CARD_TYPES = ["arts","quick","buster"];
var CARD_ICONS = {
	arts:"icons/cards/arts.png",
	quick:"icons/cards/quick.png",
	buster:"icons/cards/buster.png",
};
var CARD_NUM = {"arts":0,"quick":1,"buster":2};
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
	power: "Power",
	h_threat_dmg:"Threat to Humanity Attack",
	np_type_quick:"Change NP Type to Quick",
	np_type_arts:"Change NP Type to Arts",
	np_type_buster:"Change NP Type to Buster",
	self_np_type:"Change own NP Type",
	delayed_stun:"Stun after x turns",
	debuff_immune:"Debuff Immune"
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
	def_down: false,
	h_threat_dmg:false,
}
var EFFECT_NONE = ["np_type_quick","np_type_arts","np_type_buster","self_np_type","debuff_immune","cleanse"];
var TARGETS = {
	"self": "Self",
	"all": "All",
	"target": "Target",
	"aoe": "All Enemies",
	"single": "One Enemy",
	"not_self":"Not Self",
	"self_np_type":"Self"
}
var CLASSES_ICONS = {
	saber:"icons/classes/Class-Saber-Gold.png",
	archer:"icons/classes/Class-Archer-Gold.png",
	lancer:"icons/classes/Class-Lancer-Gold.png",
	rider:"icons/classes/Class-Rider-Gold.png",
	caster:"icons/classes/Class-Caster-Gold.png",
	assassin:"icons/classes/Class-Assassin-Gold.png",
	berserker:"icons/classes/Class-Berserker-Gold.png",
	ruler:"icons/classes/Class-Ruler-Gold.png",
	avenger:"icons/classes/Class-Avenger-Gold.png",
	alter_ego:"icons/classes/alter-ego.png",
	moon_cancer:"icons/classes/mooncancer.png",
	foreigner:"icons/classes/Class-Foreigner-Gold.png",
	all:"icons/classes/Icon_Class_All.png",
	empty:"icons/empty.png",
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
skill1: {name: "Reinforce All", icon: "atk",target_real:"all", target:["all"], effect:["atk"], turns:[1],values:[[20,21,22,23,24,25,26,27,28,30]]},
skill2: {name: "Gandr", icon: "stun",target_real:"single", target:["single"], effect:["stun"], turns:[1],values:[[500,500,500,500,500,500,500,500,500,500]]},
skill3: {name: "Order Change", icon: "orderchange",target_real:"orderchange", target:["orderchange"], effect:["orderchange"], turns:[0],values:[[0,0,0,0,0,0,0,0,0,0]]},
},
{name : "Mage's Association Uniform", pic:"icons/mystic/Mage2.png",
skill1: {name: "Cure-All", icon: "heal",target_real:"none", target:[], effect:[], turns:[0],values:[[],[],[],[],[],[],[],[],[],[]]},
skill2: {name: "Spiritron Transfer", icon: "np_gauge",target_real:"target", target:["target"], effect:["np_gauge"], turns:[0],values:[[20,20,20,20,20,20,20,20,20,20]]},
skill3: {name: "Command Shuffle", icon: "shuffle",target_real:"shuffle", target:["shuffle"], effect:["shuffle"], turns:[0],values:[[0,0,0,0,0,0,0,0,0,0]]},
},
{name : "A Fragment of 2004", pic:"icons/mystic/Fragment2004F.png",
skill1: {name: "Code: F", icon: "np_dmg",target_real:"target", target:["target"], effect:["np_dmg"], turns:[1],values:[[30,32,34,36,38,40,42,44,46,50]]},
skill2: {name: "Code: U", icon: "buster_stars",target_real:"none", target:[], effect:[], turns:[0],values:[]},
skill3: {name: "Code: H", icon: "np_gain",target_real:"target", target:["target"], effect:["np_gain"], turns:[1],values:[[30,32,34,36,38,40,42,44,46,50]]},
},
];
var SERVANTS = [
{
	name : "Sieg", jp:false, atk: 8394,class:"caster",attr:"man",rarity:4,q:1,a:2,b:2,qh:3,ah:2,np_perhit:.78,pic:"icons/servants/cardboard.png",
	np: {type:"np_arts", name:"Ákafiloga All-gríð", hits:[16,33,51], dmg:[450,600,675,712.5,750], target_dmg:"aoe", target:["aoe"],before:[true], effect:["def_down"],oc:[true], turns:[3],values:[[20],[25],[30],[35],[40]]},
	skills: [["arts",6.5]],
	skill1: {name:"Artificial Hero (Fake) B+",  icon:"np_gain",  target_real:"self" ,target:["self"], effect:["np_gain"], turns:[3],   values:[[20,21,22,23,24,25,26,27,28,30]]},
	skill2: {name:"Magecraft C",   icon:"arts",  target_real:"self",  target:["self"],        effect:["arts"], turns:[1],   values:[[22,23.4,24.8,26.2,27.6,29,30.4,31.8,33.2,36]]},
	skill3: {name:"Dead-Count Shapeshifter EX",  target_real:"self", icon:"divinity",target:["self","self"], effect:["np_gauge","dragon_dmg"], turns:[0,1], values:[[20,21,22,23,24,25,26,27,28,30],[50,55,60,65,70,75,80,85,90,100]]}
},
{
	name: "Paracelsus", jp:false, atk: 6711,class:"caster",attr:"man",rarity:3,q:1,a:3,b:1,qh:2,ah:2,np_perhit:.55,pic:"icons/servants/para.jpg",
	np:{type:"np_arts", name:"Sword of Paracelsus", hits:[16,33,51],dmg:[400,500,550,575,600],target_dmg: "aoe", target:[],oc:[], effect:[], turns:[],values:[]},
	skills: [["arts",10]],
	skill1: {name:"Rapid Casting A",        icon:"np_gauge",  target_real:"self",   target:["self"],  effect:["np_gauge"], turns: [0], values:[[55,57.5,60,62.5,65,67.5,70,72.5,75,80]]},
	skill2: {name:"Elemental A+",           icon:"arts",  target_real:"all", target:["all"],   effect:["arts"], turns:[3],values:[[10,11,12,13,14,15,16,17,18,20]]},
	skill3: {name:"Philosopher's Stone A+", icon:"guts",  target_real:"target", target:["target"], effect:["np_gain"],turns:[3],values:[[30,32,34,36,38,40,42,44,46,50]]}
},
{
	name:"Waver", jp:false, atk: 10598,class:"caster",attr:"man",rarity:5,q:1,a:3,b:1,qh:2,ah:1,np_perhit:1.64,pic:"icons/servants/waver.png",
	np:{type:"np_arts", name:"Unreturning Formation", hits:[], dmg:[0,0,0,0,0], target_dmg: "none", target:["aoe"],before:[true], effect:["def_down"],oc:[false], turns:[3],values:[[30,40,45,47.5,50]]},
	skills: [["arts",10]],
	skill1: {name:"Discerning Eye A",        icon:"crit",  target_real:"target",   target:["target"],  effect:["np_gauge"], turns: [0], values:[[30,30,30,30,30,30,30,30,30,30]]},
	skill2: {name:"Tactician's Advice A+",   icon:"def",  target_real:"all",    target:["all"],     effect:["np_gauge"], turns: [0], values:[[10,10,10,10,10,10,10,10,10,10]]},
	skill3: {name:"Tactician's Command A+",  icon:"atk",  target_real:"all",    target:["all","all","all"],     effect:["np_gauge","atk","dmg"],turns:[0,3,3],values:[[10,10,10,10,10,10,10,10,10,10],[20,21,22,23,24,25,26,27,28,30],[200,230,260,290,320,350,380,410,440,500]]}
},
{
	name:"Scathach-Skadi", jp:false, atk: 10753,class:"caster",attr:"sky",rarity:5,q:2,a:2,b:1,qh:4,ah:3,np_perhit:.67,pic:"icons/servants/skadi.png",
	np:{type:"np_arts", name:"Gate of Skye", hits:[], dmg:[0,0,0,0,0], target_dmg: "none", target:[],before:[], effect:[],oc:[], turns:[],values:[[],[],[],[],[]]},
	skills: [["arts",12],["dmg",250]],
	skill1: {name:"Primordial Rune",        icon:"quick",  target_real:"target",   target:["target"],  effect:["quick"], turns: [3], values:[[30,32,34,36,38,40,42,44,46,50]]},
	skill2: {name:"Shivering Blizzard B",   icon:"def_down",  target_real:"aoe",    target:["aoe"],     effect:["def_down"], turns: [3], values:[[20,21,22,23,24,25,26,27,28,30]]},
	skill3: {name:"Allfather's Wisdom B+",  icon:"np_gauge",  target_real:"target",    target:["target"],     effect:["np_gauge"],turns:[0],values:[[30,32,34,36,38,40,42,44,46,50]]}
},
{
	name:"Merlin", jp:false, atk: 10546,class:"caster",attr:"earth",rarity:5,q:1,a:3,b:1,qh:3,ah:2,np_perhit:.81,pic:"icons/servants/merlin.jpg",
	np:{type:"np_arts", name:"Garden of Avalon", hits:[], dmg:[0,0,0,0,0], target_dmg: "none", target:["all"],before:[true],oc:[false], effect:["np_regen"], turns:[5],values:[[5,5,5,5,5]]},
	skills: [["arts",6],["np_regen",5]],
	skill1: {name:"Dreamlike Charisma A",   icon:"atk",  target_real:"all",   target:["all","all"],  effect:["atk","np_gauge"], turns: [3,0], values:[[10,11,12,13,14,15,16,17,18,20],[20,20,20,20,20,20,20,20,20,20]]},
	skill2: {name:"Illusion A",   icon:"invinc",  target_real:"none",    target:[],     effect:[], turns: [], values:[]},
	skill3: {name:"Hero Creation EX",  icon:"buster",  target_real:"target",    target:["target"],     effect:["buster"], turns:[3],values:[[30,32,34,36,38,40,42,44,46,50]]}
},
{
	name:"Edmond Dantes", jp:false, atk: 12641,class:"avenger",attr:"man",rarity:5,q:2,a:1,b:2,qh:4,ah:2,np_perhit:.62,pic:"icons/servants/dantes.png",
	np:{type:"np_quick", name:"Enfer Château d'If", hits:[3,6,10,13,16,13,10,29], dmg:[800,1000,1100,1150,1200], target_dmg: "aoe", target:["aoe"],before:[false],oc:[true], effect:["def_down"], turns:[3],values:[[20,25,30,35,40]]},
	skills: [["np_regen",3]],
	skill1: {name:"Iron Determination EX",   icon:"ignore_invinc",  target_real:"self",   target:["self"],  effect:["atk"], turns: [1], values:[[30,32,34,36,38,40,42,44,46,50]]},
	skill2: {name:"Golden Rule A",   icon:"np_gain",  target_real:"self",    target:["self"],     effect:["np_gain"], turns: [3], values:[[30,32,34,36,38,40,42,44,46,50]]},
	skill3: {name:"Wisdom of Crisis A",  icon:"np_drain",  target_real:"none",    target:["none"],     effect:[], turns:[],values:[[],[],[],[],[],[],[],[],[],[]]}
},
{
	name:"Artoria (Caster)", jp:true, atk: 10546,class:"caster",attr:"star",rarity:5,q:1,a:3,b:1,qh:3,ah:3,np_perhit:.54,pic:"icons/servants/Artoria_Caster.png",
	np:{type:"np_arts", name:"Around Caliburn", hits:[], dmg:[], target_dmg: "none", target:["all"],before:[false],oc:[false], effect:["atk"], turns:[3],values:[[30,40,45,47.5,50]]},
	skills: [["arts",12]],
	skill1: {name:"Charisma of Hope B",   icon:"atk",  target_real:"all",   target:["all","all"],  effect:["atk","np_gauge"], turns: [3,0], values:[[10,11,12,13,14,15,16,17,18,20],[20,21,22,23,24,25,26,27,28,30]]},
	skill2: {name:"Blessing of the Lake A",   icon:"np_gauge",  target_real:"target",    target:["target","all"],     effect:["np_gauge","np_gain"], turns: [0,3], values:[[10,11,12,13,14,15,16,17,18,20],[20,21,22,23,24,25,26,27,28,30]]},
	skill3: {name:"Sword of Selection EX",  icon:"arts",  target_real:"target",    target:["target","target"],     effect:["arts","h_threat_dmg"], turns:[3,3],values:[[30,32,34,36,38,40,42,44,46,50],[30,32,34,36,38,40,42,44,46,50]]}
},
{
	name:"Space Ishtar", jp:true, atk: 12612,class:"avenger",attr:"star",rarity:5,q:1,a:2,b:2,qh:4,ah:2,np_perhit:.69,pic:"icons/servants/Spaceishtar.png",
	np:{type:"np_arts", name:"Edin Shugurra Quasar (Arts)", hits:[16,33,51], dmg:[450,600,675,712.5,750], target_dmg: "aoe", target:["self"],before:[true],oc:[true], effect:["np_dmg"], turns:[3],values:[[20,30,40,50,60]]},
	np2:{type:"np_quick", name:"Edin Shugurra Quasar (Quick)", hits:[16,33,51], dmg:[600,800,900,950,1000], target_dmg: "aoe", target:["self"],before:[true],oc:[true], effect:["np_dmg"], turns:[3],values:[[20,30,40,50,60]]},
	np3:{type:"np_buster", name:"Edin Shugurra Quasar (Buster)", hits:[16,33,51], dmg:[300,400,450,475,500], target_dmg: "aoe", target:["self"],before:[true],oc:[true], effect:["np_dmg"], turns:[3],values:[[20,30,40,50,60]]},
	nps:{"arts":"np","quick":"np2","buster":"np3"},
	skills: [["np_regen",3.5],["dmg",270]],
	skill1: {name:"Devil's Sugar A",   icon:"atk",  target_real:"self",   target:["self","not_self"],  effect:["atk","atk"], turns: [3,3], values:[[10,11,12,13,14,15,16,17,18,20],[20,21,22,23,24,25,26,27,28,30]]},
	skill2: {name:"Venus Driver B",   icon:"np_dmg",  target_real:"self_np_type", card_options:["arts","quick","buster"],    target:["self","self_np_type"],     effect:["np_dmg","self_np_type"], turns: [-1,3],times:[1,-1], values:[[10,11,12,13,14,15,16,17,18,20]]},
	skill3: {name:"Multiple Star-ring EX",  icon:"np_gauge",  target_real:"self",    target:["self","self","self","self"], rng:[[100,100,100,100,100,100,100,100,100,100],[80,80,80,80,80,80,80,80,80,80],[80,80,80,80,80,80,80,80,80,80],[80,80,80,80,80,80,80,80,80,80]],    effect:["np_gauge","buster","arts","quick"], turns:[0,3,3,3],values:[[30,32,34,36,38,40,42,44,46,50],[20,20,20,20,20,20,20,20,20,20],[20,20,20,20,20,20,20,20,20,20],[20,20,20,20,20,20,20,20,20,20]]}
},
{
	name:"Lancelot", jp:false, atk: 10477,class:"berserker",attr:"earth",rarity:4,q:1,a:1,b:3,qh:2,ah:2,np_perhit:.5,pic:"icons/servants/Lancelot.png",
	np:{type:"np_quick", name:"Knight of Owner", hits:[3,5,3,7,8,10,12,14,16,22], dmg:[600,800,900,950,1000], target_dmg: "aoe", target:["self"],before:[true],oc:[true], effect:["atk"], turns:[3],values:[[10,15,20,25,30]]},
	skills: [["buster",6]],
	skill1: {name:"Eternal Arms Mastery A+",   icon:"star_gather",  target_real:"none",   target:[],  effect:[], turns: [], values:[]},
	skill2: {name:"Protection of the Spirits A",   icon:"star_drop",  target_real:"none",    target:[],     effect:[], turns: [], values:[]},
	skill3: {name:"Mana Reversal A",  icon:"np_gain",  target_real:"self",    target:["self"],     effect:["np_gain"], turns:[1],values:[[50,55,60,65,70,75,80,85,90,100]]}
},
{
	name:"Jeanne (Archer)", jp:false, atk: 10525,class:"archer",attr:"man",rarity:5,q:1,a:2,b:2,qh:4,ah:2,np_perhit:.68,pic:"icons/servants/Jeanne_Archer.png",
	np:{type:"np_arts", name:"Des Océans d'Allégresse", hits:[10,20,30,40], dmg:[450,600,675,712.5,750], target_dmg: "aoe", target:[],before:[],oc:[], effect:[], turns:[],values:[]},
	skills: [],
	skill1: {name:"Enjoying Endless Summer! A",   icon:"arts",  target_real:"self",   target:["self"],  effect:["arts"], turns: [3], values:[[20,21,22,23,24,25,26,27,28,30]]},
	skill2: {name:"Saint of the Shore (Dolphin) A+",   icon:"np_gauge",  target_real:"self",    target:["self","self"],     effect:["np_gauge","np_dmg"], turns: [0,3], values:[[20,22,24,26,28,30,32,34,36,40],[10,11,12,13,14,15,16,17,18,20]]},
	skill3: {name:"Servant Cheer! B",  icon:"atk",  target_real:"all",    target:["all"],     effect:["atk"], turns:[3],values:[[10,11,12,13,14,15,16,17,18,20]]}
},
{
	name:"Atalante", jp:false, atk: 8633,class:"archer",attr:"earth",rarity:4,q:2,a:2,b:1,qh:3,ah:2,np_perhit:.5,pic:"icons/servants/Atalante.png",
	np:{type:"np_quick", name:"Phoebus Catastrophe", hits:[3,5,3,7,8,10,12,14,16,22], dmg:[800,1000,1100,1150,1200], target_dmg: "aoe", target:[],before:[],oc:[], effect:[], turns:[],values:[]},
	skills: [],
	skill1: {name:"Beyond Arcadia A",   icon:"quick",  target_real:"all",   target:["all"],  effect:["quick"], turns: [1], values:[[30,32,34,36,38,40,42,44,46,50]]},
	skill2: {name:"Hunter's Aesthetic C",   icon:"star_gather",  target_real:"none",    target:[],     effect:[], turns: [], values:[]},
	skill3: {name:"Calydonian Hunt A",  icon:"evade",  target_real:"self",    target:["self"],     effect:["np_gain"], turns:[3],values:[[30,32,34,36,38,40,42,44,46,50]]}
},
{
	name:"Parvati", jp:false, atk: 8127,class:"lancer",attr:"sky",rarity:4,q:2,a:1,b:2,qh:3,ah:2,np_perhit:1.08,pic:"icons/servants/Parvati.jpg",
	np:{type:"np_quick", name:"Trishula Shakti", hits:[10,20,30,40], dmg:[600,800,900,950,1000], target_dmg: "aoe", target:["all"],before:[false],oc:[true], effect:["np_gauge"], turns:[0],values:[[10,15,20,25,30]]},
	skills: [["dmg",225]],
	skill1: {name:"Imaginary Around EX",   icon:"quick",  target_real:"self",   target:["self","self"],  effect:["quick","np_gain"], turns: [3,3], values:[[20,21,22,23,24,25,26,27,28,30],[20,21,22,23,24,25,26,27,28,30]]},
	skill2: {name:"Ash of Kama EX",   icon:"atkdef",  target_real:"self",    target:["self"],     effect:["atk"], turns: [1], values:[[30,32,34,36,38,40,42,44,46,50]]},
	skill3: {name:"Blessing of a Goddess A+",  icon:"np_gauge",  target_real:"target",    target:["target","self"],     effect:["np_gauge","np_gauge"], turns:[0,0],values:[[10,11,12,13,14,15,16,17,18,20],[-10,-10,-10,-10,-10,-10,-10,-10,-10,-10]]}
},
{
	name:"Valkyrie", jp:false, atk: 8037,class:"lancer",attr:"sky",rarity:4,q:2,a:1,b:2,qh:3,ah:2,np_perhit:.86,pic:"icons/servants/Valkyrie.png",
	np:{type:"np_quick", name:"Ragnarök Lífþrasir", hits:[3,7,10,14,17,21,28], dmg:[600,800,900,950,1000], target_dmg: "aoe", target:[],before:[],oc:[], effect:[], turns:[],values:[]},
	skills: [["dmg",200]],
	skill1: {name:"Primordial Rune (Valkyrie)",   icon:"quick",  target_real:"self",   target:["self","self"],  effect:["quick","np_dmg"], turns: [3,3], values:[[20,21,22,23,24,25,26,27,28,30],[10,11,12,13,14,15,16,17,18,20]]},
	skill2: {name:"Swan Mystic Code A",   icon:"evade",  target_real:"none",    target:[],     effect:[], turns: [], values:[]},
	skill3: {name:"Fate Weaver B",  icon:"np_regen",  target_real:"self",    target:["self"],     effect:["np_regen"], turns:[3],values:[[5,5.5,6,6.5,7,7.5,8,8.5,9,10]]}
},
{
	name:"Achilles", jp:false, atk: 11883,class:"rider",attr:"earth",rarity:5,q:2,a:2,b:1,qh:4,ah:3,np_perhit:.57,pic:"icons/servants/Achilles.png",
	np:{type:"np_quick", name:"Troias Tragōidia", hits:[6,13,20,26,35], dmg:[600,800,900,950,1000], target_dmg: "aoe", target:["self"],before:[true],oc:[true], effect:["quick"], turns:[1],values:[[20,30,40,50,60]]},
	skills: [["quick",11],["dmg",150]],
	skill1: {name:"Drómos Komḗtēs A+",   icon:"quick",  target_real:"self",   target:["self"],  effect:["quick"], turns: [3], values:[[20,21,22,23,24,25,26,27,28,30]]},
	skill2: {name:"Andreíos Amárantos B",   icon:"invinc",  target_real:"none",    target:[],     effect:[], turns: [], values:[]},
	skill3: {name:"Diatrekhōn Astēr Lonkhē",  icon:"taunt",  target_real:"self",    target:["self","self"],     effect:["np_gauge","np_gain"], turns:[0,1],values:[[20,21,22,23,24,25,26,27,28,30],[20,21,22,23,24,25,26,27,28,30]]}
},
{
	name:"Marie Antoinette", jp:false, atk: 8293,class:"rider",attr:"man",rarity:4,q:2,a:2,b:1,qh:2,ah:1,np_perhit:1,pic:"icons/servants/Marie.png",
	np:{type:"np_quick", name:"Guillotine Breaker", hits:[6,13,20,26,35], dmg:[800,1000,1100,1150,1200], target_dmg: "aoe", target:[],before:[],oc:[], effect:[], turns:[],values:[]},
	skills: [["quick",11]],
	skill1: {name:"Siren Song C",   icon:"charm",  target_real:"none",   target:[],  effect:[], turns: [], values:[]},
	skill2: {name:"Beautiful Princess A",   icon:"invinc",  target_real:"none",    target:[],     effect:[], turns: [], values:[]},
	skill3: {name:"God's Grace B",  icon:"buffchance",  target_real:"none",    target:[],     effect:[], turns:[],values:[]}
},
{
	name:"Frankenstein", jp:false, atk: 9441,class:"berserker",attr:"earth",rarity:5,q:1,a:1,b:3,qh:2,ah:2,np_perhit:.83,pic:"icons/servants/Frankenstein.jpg",
	np:{type:"np_quick", name:"Blasted Tree", hits:[4,9,14,19,23,31], dmg:[900,1100,1200,1250,1300], target_dmg: "aoe", target:["self"],before:[false],oc:[false], effect:["stun"], turns:[2],values:[[500,500,500,500,500]]},
	skills: [["buster",4]],
	skill1: {name:"Galvanism B",   icon:"np_gain",  target_real:"self",   target:["self"],  effect:["np_gain"], turns: [3], values:[[25,27,29,31,33,35,37,39,41,45]]},
	skill2: {name:"Wail of the Living Dead C",   icon:"stun",  target_real:"none",    target:[],     effect:[], turns: [], values:[]},
	skill3: {name:"Overload C",  icon:"np_dmg",  target_real:"self",    target:["self"],     effect:["np_dmg"], turns:[1],values:[[20,21,22,23,24,25,26,27,28,30]]}
},
{
	name:"BB", jp:false, atk: 8197,class:"moon_cancer",attr:"man",rarity:4,q:2,a:2,b:1,qh:4,ah:3,np_perhit:.61,pic:"icons/servants/BB.jpg",
	np:{type:"np_arts", name:"C.C.C.", hits:[6,13,20,26,35], dmg:[900,1200,1350,1425,1500], target_dmg: "single", target:["all"],before:[false],oc:[false], effect:["np_gauge"], turns:[0],values:[[20,20,20,20,20]]},
	skills: [["arts",10]],
	skill1: {name:"Domina Cornam D",   icon:"cleanse",  target_real:"target",   target:["target","target"],  effect:["cleanse","debuff_immune"], turns: [0,3],times:[0,1], values:[[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]]},
	skill2: {name:"Aurea Poculum C",   icon:"stun",  target_real:"none",    target:[],     effect:[], turns: [], values:[]},
	skill3: {name:"Self-Modification EX",  icon:"crit",  target_real:"none",    target:[],     effect:[], turns: [], values:[]}
},
];
var CES = [
{name: "Kaleidoscope", rarity: 5, effect:["np_gauge"], values:[[80,100]], atk:[500,2000],
pic: "icons/ces/Kaleidoscope.png"},
{name: "Imaginary Element", rarity: 4, effect:["np_gauge"], values:[[60,75]], atk:[200,750],
pic: "icons/ces/Hollow_magic.png"},
{name: "Black Grail", rarity: 5, effect:["np_dmg"], values:[[60,80]], atk:[600,2400],
pic: "icons/ces/Black_grail.png"},
{name: "CKT", rarity: 5, effect:["arts","quick","np_dmg"], values:[[10,15],[10,15],[10,15]], atk:[250,1000],
pic: "icons/ces/CE900.png"},
{name: "Return Match", rarity: 5, effect:["power"], values:[[100,200]], atk:[500,2000],
pic: "icons/ces/CE899.png"},
{name: "Vessel of the Saint", rarity: 5, effect:["debuff_immune","np_gain"], times:[3,-1], values:[[1,1],[15,20]], atk:[250,1000],
pic: "icons/ces/Vessel_of_the_Saint.png"},
];
function packNum(num1,num2){
	return Math.min(Math.max(num1,0),7)*8+Math.min(Math.max(num2,0),7);
}
function unpackNum(num){
	return [Math.floor(num/8),num%8];
}
// pack 6 bits into one number
function packBin(nums){
	return Math.min(parseInt(nums.join(""),2),63);
}
// unpack a number into 6 bits
function unpackBin(num){
	var s = num.toString(2).padStart(6,0);
	var ret = [0,0,0,0,0,0];
	for(var i=0;i<6;i++){
		if(s[i]=="1"){ret[i]=1;}
	}
	return ret;
}
// pack 3 bits into one number
function packBinSmall(nums){
	return Math.min(parseInt(nums.join(""),2),7);
}
// unpack a number into 3 bits
function unpackBinSmall(num){
	var s = num.toString(2).padStart(3,0);
	var ret = [0,0,0];
	for(var i=0;i<3;i++){
		if(s[i]=="1"){ret[i]=1;}
	}
	return ret;
}
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
// buffs on each enemy after the last action
var ACTION_DEBUFFS= [ [ [{},{},{}],[{},{},{}],[{},{},{}] ] ];
// which skills are currently avaiblible, [6] is mystic code
var ACTION_SKILLS=[[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]]];
// current action we are viewing, 0 is beginning, default
var ACTION_CURRENT=0;
// all actions taken, in more readable format
var ACTIONS = [[-1,-1,-1,-1]];
// represents if a servant is able to np yet in a given wave
// 1= NP possible, 0 = NP Already used
// NOTE: Even if value is 1, NP GAUGE must still be > 100 to actually NP
var WAVE_NP = [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]];
// hp of all enemies currently, negative if doesnt exist
var MAX_HP = [[1,1,1],[1,1,1],[1,1,1]];
var MIN_HP = [[1,1,1],[1,1,1],[1,1,1]];
// data about each np that happens
var ALL_NPS = [];

var TOTAL_CHANCE = 100;

var WAVE_CURRENT = 0;
var WAVE_MAX = 0;
// Global RNG Multiplier to use
var RNG = 1;

var SELECTING_REALPOS = 0;

// special mode which makes everything ignore input while javascript does its magic
var MASTER_MODE=false;

// fixes tooltips that might be offscreen
function fixToolTips(){
	$("#style_holder").empty();
	var styles="";
	$(".tooltiptext").each(function(i,el){
		el.id = "tooltiptext_"+i;
		$(el).css("transform","translateX(0px)");
		var xpos = el.getBoundingClientRect().x;
		if(xpos < 0){
			$(el).css("transform","translateX("+(-1*xpos)+"px)");
			styles+="<style>#tooltiptext_"+i+"::after{transform:translateX("+xpos+"px);}</style>";
		}
	});
	$("#style_holder").html(styles);
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
	// write actions
	for(var a = 1; a< ACTIONS.length;a++){
		writeNum(packNum(ACTIONS[a][0],ACTIONS[a][1]),1,URL);
		writeNum(packNum(ACTIONS[a][2],ACTIONS[a][3]),1,URL);
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
	ACTIONS = [[]];
	var nextAction = unpackNum(readNum(URL_READ,1)).concat(unpackNum(readNum(URL_READ,1)));
	while(!isNaN(nextAction[3])){
		ACTIONS.push(nextAction);
		nextAction = unpackNum(readNum(URL_READ,1)).concat(unpackNum(readNum(URL_READ,1)));
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
function calcTotalBuff(action,real_pos,buff_type){
	var total = 0;
	if(ACTION_BUFFS[action][real_pos][buff_type] != undefined){
		for(var buff of ACTION_BUFFS[action][real_pos][buff_type]){
			total+=buff[0];
		}
	}
	return total;
}
function calcTotalDebuff(action,wave,enemy,debuff_type){
	var total = 0;
	if(ACTION_DEBUFFS[action][wave][enemy][debuff_type] != undefined){
		for(var debuff of ACTION_DEBUFFS[action][wave][enemy][debuff_type]){
			total+=debuff[0];
		}
	}
	return total;
}
function getHitNPGen(type,np_rate,card_up,np_gain,enemyClass,overkill){
	var cardNpValue =0;
	if(type == "np_quick"){cardNpValue=1;}
	else if(type == "np_arts"){cardNpValue=3;}
	return np_rate * (cardNpValue * (1 + (card_up*.01))) * CLASSES_NP_GEN[enemyClass] * (1 + (np_gain*.01)) * (overkill?1.5:1);
}
function getHitNPDamage(base_atk,np_dmg_base,type,cardMod,srv_class,enemy_class,srv_attr,enemy_attr,atkMod,defMod,npDamageMod,powerMod,dmgPlusAdd,superMod,isSuper,rng)
{
	var cardDamageValue=1.5;
	if(type == "np_quick"){cardDamageValue=.8;}
	else if(type == "np_arts"){cardDamageValue=1;}
	return Math.floor((base_atk * (np_dmg_base*.01) * (cardDamageValue * (1 + (cardMod*.01))) * CLASSES_ATTACK[srv_class] * CLASSES_TRIANGLE[srv_class][enemy_class] * ATTR_DMG[srv_attr][enemy_attr] * rng * 0.23 * (1 + (atkMod*.01) + (defMod*.01)) * (1 + (powerMod*.01) + (npDamageMod*.01)) * (1 + (((superMod*.01) - 1) * isSuper))) + dmgPlusAdd);
}
//function calcNPRefund(np_total_damage,)

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

function cardPopup(cards,action){
	// set options
	for(var type of CARD_TYPES){
		if(cards.hasOwnProperty(type))
		{
			$("#card_popup_"+type).css("display","table-cell");
			$("#card_popup_"+type).attr("onclick","cardPopupReturn('"+type+"',"+action+")");
		}
		else
		{
			$("#card_popup_"+type).css("display","none");
		}
	}
	//open popup
	$("#card_popup_div").css("display","table");
}
function cardPopupReturn(card,action){
	// close popup
	$("#card_popup_div").css("display","none");
	// do action
	action(card);
}
function getNP(action,real_pos){
	//console.log("action:"+action+",pos:"+real_pos);
	var servant = SERVANTS[PARTY[real_pos]];
	if(ACTION_BUFFS[action][real_pos].hasOwnProperty("np_type_arts")){
		return servant[servant.nps["arts"]];
	}
	else if(ACTION_BUFFS[action][real_pos].hasOwnProperty("np_type_quick")){
		return servant[servant.nps["quick"]];
	}
	else if(ACTION_BUFFS[action][real_pos].hasOwnProperty("np_type_buster")){
		return servant[servant.nps["buster"]];
	}
	else{
		return servant.np;
	}
}
//remove action but do not calculate/view
function removeAction(action){
	if(action>0){
		//scoot them all down
		for(var i=action;i<ACTIONS.length-1;i++){
			ACTIONS[i]=ACTIONS[i+1];
		}
		//get rid of the duplicate last element
		ACTIONS.pop();
		if(ACTION_CURRENT>=action){
			ACTION_CURRENT--;
		}
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
				causes+=`<br>`;
				if(!EFFECT_NONE.includes(buff)){ // display no numbers about effect
					causes+=cause[0]+suf;
				}
				if(cause[1]!=-1 && cause[2]!=-1){ // has turns and times
					causes+=" ("+cause[1]+" turn"+(cause[1]==1?"":"s")+", "+cause[2]+" time"+(cause[2]==1?"":"s")+")";
				}
				else if(cause[1]!=-1){
					causes+=" ("+cause[1]+" turn"+(cause[1]==1?"":"s")+")";
				}
				else if(cause[2]!=-1){
					causes+=" ("+cause[2]+" time"+(cause[2]==1?"":"s")+")";
				}
				causes+=` - `+cause[3];
			}
			if(EFFECT_NONE.includes(buff)){
				str+=EFFECTS[buff]+causes+`</span></div>`;
			}
			else{
				str+=EFFECTS[buff]+`: `+total+suf+causes+`</span></div>`;
			}
		}
		$("#buffs_div_"+p).append(str);
	}
}
function displayDebuffs(){
	for(var w=0;w<3;w++){
		for(var e=0;e<3;e++){
			var debuffs = ACTION_DEBUFFS[ACTION_CURRENT][w][e];
			var str = "";
			$("#debuffs_"+w+"_"+e).empty();
			for(debuff in debuffs){
				str += `<div class = "buff tooltip" style= "background-image:url(`+BUFF_ICONS[debuff]+`)"><span class = 'tooltiptext'>`;
				var causes = "";
				var total = 0;
				var suf = EFFECT_FLAT[buff]?"":"%";
				for(const cause of debuffs[debuff]){
					total+=parseFloat(cause[0]);
					causes+=`<br>`+cause[0]+suf+` - `+cause[1];
				}
				str+=EFFECTS[debuff]+`: `+total+suf+causes+`</span></div>`;
			}
			$("#debuffs_"+w+"_"+e).append(str);
		}
	}
}
function displayServant(pos)
{
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	if(PARTY[real_pos] >= 0){
		$("#serv_sel_div_"+pos).css("background","url("+SERVANTS[PARTY[real_pos]].pic+")");
		$("#serv_name_"+pos).text(SERVANTS[PARTY[real_pos]].name);
	}
	else{
		$("#serv_sel_div_"+pos).css("background","grey");
		$("#serv_name_"+pos).text("Select Servant");
	}
	displaySkill(pos,0);
	displaySkill(pos,1);
	displaySkill(pos,2);
}
function setServant(pos,servant)
{
	if(MASTER_MODE){return;}
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	PARTY[real_pos]=servant;
	displayServant(pos,servant);
	calcFull();
}
function setNP(pos,level){
	if(MASTER_MODE){return;}
	var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
	PARTY_NP[real_pos]=level;
	calcFull();
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
			if(!(EFFECT_NONE.includes(skill_object.effect[i]))){
				skill_text+="<br>"+EFFECTS[skill_object.effect[i]]+" ("+TARGETS[skill_object.target[i]]+"): "+skill_object.values[i][SKILLS[real_pos][skill]]+(EFFECT_FLAT[skill_object.effect[i]]?"":"%")+(skill_object.turns[i]==0?"":" ("+skill_object.turns[i]+" turn"+(skill_object.turns[i]==1?"":"s")+")");
				if(skill_object.rng!=undefined && skill_object.rng[i][SKILLS[real_pos][skill]] < 100){ // has rng
					skill_text+=", "+skill_object.rng[i][SKILLS[real_pos][skill]]+"% chance";
				}
			}
			else{ // display no values
				skill_text+="<br>"+EFFECTS[skill_object.effect[i]]+" ("+TARGETS[skill_object.target[i]]+"): "+(skill_object.turns[i]==0?"":" ("+skill_object.turns[i]+" turn"+(skill_object.turns[i]==1?"":"s")+")");
			}
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
			skill_text+="<br>"+EFFECTS[skill_object.effect[i]]+" ("+skill_object.target[i]+"): "+skill_object.values[i][MYSTIC_CODE_LEVEL]+(EFFECT_FLAT[skill_object.effect[i]]?"":"%")+(skill_object.turns[i]==0?"":" ("+skill_object.turns[i]+" turn"+(skill_object.turns[i]==1?"":"s")+")");
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
}
function setMysticLevel(level){
	if(MASTER_MODE){return;}
	MYSTIC_CODE_LEVEL = level;
	displayMystic();
	calcFull();
}
function displayEnemy(stage,enemy){
	$("#enemy_img_"+stage+"_"+enemy).attr("src",CLASSES_ICONS[NUM_CLASS[ENEMIES_CLASS[stage][enemy]]]);
}
function setEnemy(stage,enemy,value){
	if(MASTER_MODE){return;}
	ENEMIES_CLASS[stage][enemy] = value;
	displayEnemy(stage,enemy);
	calcFull();
}
function setEnemyAttr(stage,enemy,value){
	if(MASTER_MODE){return;}
	ENEMIES_ATTR[stage][enemy] = value;
	calcFull();
}
function setEnemyHP(stage,enemy,value){
	if(MASTER_MODE){return;}
	ENEMIES_HP[stage][enemy] = value;
	calcFull();
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
	$("#np_text_"+pos).text(Math.floor(ACTION_NP[ACTION_CURRENT][real_pos])+"%");
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
function applyBuff(action,pos,name,value,turns,times,source)
{
	//console.log("[action: \""+action+"\", pos: \""+pos+"\", name: \""+name+"\", value: \""+value+"\", turns: \""+turns+"\", source: \""+source+"\"]");
	if(name == "np_gauge"){
		ACTION_NP[action][pos]+=parseFloat(value);
		if(ACTION_NP[action][pos] >= 99 && ACTION_NP[action][pos] < 100){
			ACTION_NP[action][pos]=100;
		}
	}
	else if(name == "cleanse"){
		for(var buff in ACTION_BUFFS[action][pos]){
			if(buff == "stun"){ // all debuffs, all more
				delete ACTION_BUFFS[action][pos][buff];
			}
		}
	}
	else{
		if(name == "stun"){ // is a debuff, add more later
			if(calcTotalBuff(action,pos,"debuff_immune") > 0){
				// decrement debuff immune times
				if(ACTION_BUFFS[action][pos]["debuff_immune"][0][2] != -1){
					ACTION_BUFFS[action][pos]["debuff_immune"][0][2]--;
				}
				if(ACTION_BUFFS[action][pos]["debuff_immune"][0][2] == 0){ // out of debuff immune!
					delete ACTION_BUFFS[action][pos]["debuff_immune"];
				}
				// dont actually apply the debuff
				return;
			}
		}
		// buff already exists
		if(ACTION_BUFFS[action][pos].hasOwnProperty(name)){
			if(name == "debuff_immune" || name == "stun"){return;}//cannot add more than one of these, add more later
			ACTION_BUFFS[action][pos][name].push([value,turns,times,source]);
		}
		// buff must be created
		else{
			ACTION_BUFFS[action][pos][name] = [[value,turns,times,source]];
		}
	}
}
function applyDebuff(action,wave,enemy,name,value,source)
{
	// debuff already exists
	if(ACTION_DEBUFFS[action][wave][enemy].hasOwnProperty(name)){
		ACTION_DEBUFFS[action][wave][enemy][name].push([value,source]);
	}
	// debuff must be created
	else{
		ACTION_DEBUFFS[action][wave][enemy][name] = [[value,source]];
	}
}
function setCurrentRNG(effect,value){
	var curRNG = unpackBinSmall(ACTIONS[ACTION_CURRENT][3]);
	curRNG[effect] = (value?1:0);
	ACTIONS[ACTION_CURRENT][3] = packBinSmall(curRNG);
	calcFull();
}
// function to display everything happening on ACTION_CURRENT
function viewAction(){
	MASTER_MODE=true;
	// enemies viewer
	for(var w=0;w<3;w++){
		for(var e=0;e<3;e++){
			if(ENEMIES_CLASS[w][e] == CLASSES_NUM['empty']){ // EMPTY
				$("#enemy_damage_"+w+"_"+e).text("");
				$("#enemy_"+w+"_"+e).css("background-color","#f1f1f1");
			}
			else if(MAX_HP[w][e]<=0){ // DEAD
				$("#enemy_damage_"+w+"_"+e).text("100% Chance to Kill");
				$("#enemy_"+w+"_"+e).css("background-color","rgb(70,180,70)");
			}
			else if(MIN_HP[w][e]>0){ // NOT DEAD
				$("#enemy_damage_"+w+"_"+e).text("0% Chance to Kill; MAX HP: "+MAX_HP[w][e]+", MIN HP: "+MIN_HP[w][e]);
				$("#enemy_"+w+"_"+e).css("background-color","rgb(180,70,70)");
			}
			else{ // SCHRODINGERS CAT
				var chance = (-MIN_HP[w][e])/(MAX_HP[w][e] - MIN_HP[w][e]);
				$("#enemy_damage_"+w+"_"+e).text(Math.floor(chance*100)+"% Chance to Kill; MAX HP: "+MAX_HP[w][e]);
				$("#enemy_"+w+"_"+e).css("background-color","rgb("+(110*(1-chance)+70)+","+(110*(chance)+70)+",70)");
			}
		}
	}
	// actions viewer
	$(".actions").empty();
	var disp_np = -1;
	var disp_rng = false;
	var cur_skill = undefined;
	var cur_skill_level = -1;
	var cur_wave=0;
	for(var a =0;a<ACTIONS.length;a++){
		if(a == 0){ // ACTION 0
			$("#actions_"+cur_wave).append(`<div class = "`+(ACTION_CURRENT==a?"action-active ":"")+`action tooltip" id = "action_`+a+`" onclick="setViewAction(`+a+`)" style = "background-image:url(`+SKILL_ICONS["start"]+`)"><span class = "tooltiptext">Start of Wave 1</span></div>`);
		}
		else if(ACTIONS[a][0] < 3){	//servant
			var real_pos = ACTION_ORDER[a][ACTIONS[a][0]];
			var servant = SERVANTS[PARTY[real_pos]];
			if(ACTIONS[a][1]<3){ // skill
				var prev_action = Math.max(0,a-1);
				var invalid = (ACTION_SKILLS[prev_action][real_pos][ACTIONS[a][1]] == 0) || (calcTotalBuff(prev_action,real_pos,"stun") > 0);//already used or stunned
				var skill = servant["skill"+(1+ACTIONS[a][1])];
				if(a == ACTION_CURRENT && skill.rng != undefined){ // viewed action has rng setting
					cur_skill_level = SKILLS[real_pos][ACTIONS[a][1]];
					for(var rng_effect_values of skill.rng){
						for(var rngvalue of rng_effect_values){
							if(rngvalue != 100){ // at least one of the effects actually is rng
								cur_skill = skill;
								disp_rng = true;
							}
						}
					}
				}
				$("#actions_"+cur_wave).append(`<div class = "`+(ACTION_CURRENT==a?"action-active ":"")+`action tooltip" id = "action_`+a+`" style = "background-image:`+(invalid?"url(icons/skills/invalid.png),":"")+`url(`+SKILL_ICONS[skill.icon]+`)"><span class = "tooltiptext">`+skill.name+`<br>`+servant.name+` (slot `+(ACTION_ORDER[a][ACTIONS[a][0]]+1)+`)<br><div class = "action_delete" onclick="clickRemoveAction(`+a+`)">Delete</div></span></div>`);
			}
			else if(ACTIONS[a][1] == 3){ // np
				var prev_action = Math.max(0,a-1);
				var invalid = (ACTION_NP[prev_action][real_pos] < 100) || (calcTotalBuff(prev_action,real_pos,"stun") > 0);//np not full yet or stunned;
				if(a == ACTION_CURRENT){ // currently viewing this np
					disp_np = ACTIONS[a][3];
				}
				var np = getNP(a,ACTION_ORDER[a][ACTIONS[a][0]]);
				$("#actions_"+cur_wave).append(`<div class = "`+(ACTION_CURRENT==a?"action-active ":"")+`action tooltip" id = "action_`+a+`" onclick="setViewAction(`+a+`)" style = "background-image:`+(invalid?"url(icons/skills/invalid.png),":"")+`url(`+SKILL_ICONS[np.type]+`)"><span class = "tooltiptext">`+np.name+`<br>`+servant.name+` (slot `+(ACTION_ORDER[a][ACTIONS[a][0]]+1)+`)<br><div class = "action_delete" onclick="clickRemoveAction(`+a+`)">Delete</div></span></div>`);
			}
		}
		else if(ACTIONS[a][0] == 3){	//mystic code
			var invalid = false;
			if(ACTION_SKILLS[a][6][ACTIONS[a][1]] == 0){ //skill cannot be used
				invalid=true;
			}
			if(ACTIONS[a][1]<3){ // skill
				var skill = MYSTIC_CODES[MYSTIC_CODE]["skill"+(1+ACTIONS[a][1])];
				$("#actions_"+cur_wave).append(`<div class = "`+(ACTION_CURRENT==a?"action-active ":"")+`action tooltip" id = "action_`+a+`" onclick="setViewAction(`+a+`)" style = "background-image:url(`+SKILL_ICONS[skill.icon]+`)"><span class = "tooltiptext">`+skill.name+`<br>`+MYSTIC_CODES[MYSTIC_CODE].name+`<br><div class = "action_delete" onclick="clickRemoveAction(`+a+`)">Delete</div></span></div>`);
			}
		}
		else if(ACTIONS[a][0] == 7){//wave boundary
			cur_wave++;
			if(cur_wave>2){break;}
			//insert wave break
			$("#actions_"+cur_wave).append(`<div class = "`+(ACTION_CURRENT==a?"action-active ":"")+`action tooltip" id = "action_`+a+`" onclick="setViewAction(`+a+`)" style = "background-image:url(`+SKILL_ICONS["start"]+`)"><span class = "tooltiptext">Start of Wave `+(cur_wave+1)+`</span></div>`);
		}
		if(a==ACTION_CURRENT){
			WAVE_CURRENT=cur_wave;
		}
		$("#action_"+a).attr("onclick",`(function(e){ if(e.target === e.currentTarget){ setViewAction(`+a+`); }})(event)`);
	}
	// display np info if it's current
	if(disp_np != -1){
		$("#np_info_div").css("display","block");
		for(var e =0; e<3;e++){
			$("#np_0_"+e).text(ALL_NPS[disp_np].min_dmg[e]);
			$("#np_1_"+e).text(ALL_NPS[disp_np].avg_dmg[e]);
			$("#np_2_"+e).text(ALL_NPS[disp_np].max_dmg[e]);
		}
		$("#np_overkill").text(ALL_NPS[disp_np].overkill_hits+" Overkill Hit"+(ALL_NPS[disp_np].overkill_hits==1?"":"s"));
	}
	else{
		$("#np_info_div").css("display","none");
	}
	if(disp_rng == true){
		var rngs = unpackBinSmall(ACTIONS[ACTION_CURRENT][3]);
		for(var e=0; e<3; e++){
			$("#rng_"+e).css("display","none");
		}
		var cur_rng = 0;
		for(var e=0; e<cur_skill.effect.length; e++){
			if(cur_skill.rng[e][cur_skill_level] != undefined && cur_skill.rng[e][cur_skill_level] < 100){ // is an actual rng effect
				$("#rng_"+cur_rng).css("display","table-row");
				$("#rng_name_"+cur_rng).text(EFFECTS[cur_skill.effect[e]]);
				$("#rng_chance_"+cur_rng).text(cur_skill.rng[e][cur_skill_level]+"%");
				$("#is_rng_"+cur_rng).prop('checked',(rngs[cur_rng]==1));
				cur_rng++;
			}
		}
		$("#rng_info_div").css("display","block");
	}
	else{
		$("#rng_info_div").css("display","none");
	}
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
		$("#servant_np_sel_"+p).val(PARTY_NP[real_pos]);
		// SKILL LEVEL SELECTS
		for(var s =0;s<3;s++){
			$("#skill_sel_"+p+"_"+s).val(SKILLS[real_pos][s]);
		}
	}
	$("#total_chance").text(TOTAL_CHANCE.toFixed(1)+"% Chance to clear");
	displayBuffs();
	displayDebuffs();
	displayAttack();
	displayMysticSkills();
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
function addAction(where,pos,action,target1,target2,nocalc){
	if(where == ACTIONS.length-1){
		ACTIONS.push([pos,action,target1,target2]);
		where+=1;
	}
	else{
		ACTIONS.push([pos,action,target1,target2]);
		for(var i=ACTIONS.length-2;i>where;i--){
			ACTIONS[i+1] = ACTIONS[i];
		}
		ACTIONS[where+1]=[pos,action,target1,target2];
	}
	if(nocalc != undefined && nocalc == true){console.log("SKIPPED");return;}
	else{
		console.log("CALCING");
		ACTION_CURRENT+=1;
		calcFull();
	}
}
function calcFull(noview){
	//reset all data
	ACTION_ORDER=[[0,1,2,3,4,5]];
	ACTION_NP=[[0,0,0,0,0,0]];
	ACTION_BUFFS=[[{},{},{},{},{},{}]];
	ACTION_DEBUFFS= [ [ [{},{},{}],[{},{},{}],[{},{},{}] ] ];
	ACTION_SKILLS=[[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]]];
	WAVE_NP = [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]];
	MAX_HP = [[0,0,0],[0,0,0],[0,0,0]];
	MIN_HP = [[0,0,0],[0,0,0],[0,0,0]];
	ALL_NPS = [];
	TOTAL_CHANCE = 100;
	// set enemy HP
	for(var w =0;w<3;w++){
		for(var e =0;e<3;e++){
			if(ENEMIES_CLASS[w][e]!=CLASSES_NUM["empty"]){ // enemy exists
				MAX_HP[w][e]=ENEMIES_HP[w][e];
				MIN_HP[w][e]=ENEMIES_HP[w][e];
			}
		}
	}
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
				applyBuff(0,p,skill[0],skill[1],-1,-1,"Passive");
			}
		}
		//calculate buffs from CES
		var ce = PARTY_CES[p];
		if(ce < 0 || ce > CES.length){continue;} // skip if no ce given
		for(var i=0;i<CES[ce].effect.length;i++){
			applyBuff(0,p,CES[ce].effect[i],CES[ce].values[i][PARTY_CE_LEVEL[p]==0?0:1],(CES[ce].turns == undefined?-1:CES[ce].turns[i]),(CES[ce].times == undefined?-1:CES[ce].times[i]),CES[ce].name);
		}
	}
	var wave=0;
	// how many previous actions have been nps in a row
	var lastNP = 0;
	var cur_np = 0;
	// recalculate all actions, skipping action 0
	for(var a =1;a<ACTIONS.length;a++)
	{
		var pos = ACTIONS[a][0];
		var action = ACTIONS[a][1];
		var target1 = ACTIONS[a][2];
		var target2 = ACTIONS[a][3];
		// make sure it's valid before pushing
		//var out = "[";
		//for(var i = 1; i<ACTIONS.length;i++){
		//	out+= "("+ACTIONS[i][0]+","+ACTIONS[i][1]+"),";
		//}
		//console.log(out+"]");
		//console.log("BEFORE: a:"+a+",aa:"+ACTIONS[a][1]+",w:"+wave);
		if(wave>2){ // action goes past the last np
			removeAction(a);
			a--;
			continue;
		}
		if(lastNP > 0)					// last action was an np
		{
			if(pos <= 2 && action == 3) // followed by another np
			{
				//console.log("another np");
				lastNP++;
				if(lastNP>3){			// too many nps in a row, remove this one
					//console.log("removing np");
					removeAction(a);
					// need to re-check a, so decrement then loop again to get a back to a
					a--;
					continue;
				}
			}
			else if(pos != 7) {			// followed by a regular action instead of a wave switch
				//insert wave switch
				//console.log("inserting switch!");
				a--;
				addAction(a,7,0,0,0,true);
				//move ACTION_CURRENT if it was on the wave switch
				if(ACTION_CURRENT==a+1){ACTION_CURRENT+=1;}
				wave+=1;
				continue;
			}
			else{						// followed correctly by a wave switch
				//console.log("correct switch");
				lastNP=0;
				wave+=1;
			}
		}
		else{// last action was not an np
			if(pos <= 2 && action == 3) // followed by np
			{
				lastNP=1;
				//console.log("lastnp start");
			}
			else if(pos == 7) {			// wave switch not led by an np
				//console.log("incorrect switch");
				//remove wave switch
				removeAction(a);
				a--;
				continue;
			}
			else{
				//console.log("reg skill");
			}
		}
		//console.log("a:"+a+",aa:"+ACTIONS[a][0]+",w:"+wave+",ac:"+ACTION_CURRENT);
		// duplicate previous action's data
		ACTION_BUFFS.push(JSON.parse(JSON.stringify(ACTION_BUFFS[a-1])));
		ACTION_DEBUFFS.push(JSON.parse(JSON.stringify(ACTION_DEBUFFS[a-1])));
		ACTION_NP.push(ACTION_NP[a-1].slice());
		ACTION_ORDER.push(ACTION_ORDER[a-1].slice());
		ACTION_SKILLS.push(JSON.parse(JSON.stringify(ACTION_SKILLS[a-1])));
		if(a == ACTION_CURRENT){
			console.log("PUSHING CURRENT WAVE");
			WAVE_CURRENT=wave;
		}
		// calculate new values:
		if(pos >= 0 && pos <= 2)				// 			servant action
		{
			// servant's real pos in PARTY[]
			var real_pos = ACTION_ORDER[a][pos];
			if(action >=0 && action <= 2) 			// 		servant skill
			{
				if(ACTION_SKILLS[a][real_pos][action] == 0 || (calcTotalBuff(a,real_pos,"stun") > 0)){// skill cannot be used (already used or stunned)
					continue;
				}
				// APPLY THE ACTUAL BUFFS/DEBUFFS
				var skill = SERVANTS[PARTY[real_pos]]["skill"+(action+1)];
				var rngs = [0,0,0];var cur_rng=-2;
				if(skill.rng != undefined){ // is rng skill
					cur_rng = -1; var rngs = unpackBinSmall(ACTIONS[a][3]);
				}
				for(var e=0;e<skill.target.length;e++){// loop over each skill effect
					if(cur_rng!=-2){//has rng
						var chance = skill.rng[e][SKILLS[real_pos][action]];
						if(chance < 100){ // this effect is rng
							cur_rng++;if(cur_rng>2){console.log("WARNING SKILL HAS TOO MANY RNG ELEMENTS");}
							if(rngs[cur_rng] == 1){ // this effect is depended on
								TOTAL_CHANCE *= (chance*.01);
							}
							else{ // effect not depended on, skip
								continue;
							}
						}
					}
					if(skill.target[e] == "all"){
						for(var i=0;i<3;i++){
							applyBuff(a,ACTION_ORDER[a][i],skill.effect[e],skill.values[e][SKILLS[real_pos][action]],skill.turns[e],(skill.times == undefined?-1:skill.times[e]),skill.name);
						}
					}
					else if(skill.target[e] == "target"){
						applyBuff(a,ACTION_ORDER[a][target1],skill.effect[e],skill.values[e][SKILLS[real_pos][action]],skill.turns[e],(skill.times == undefined?-1:skill.times[e]),skill.name);
					}
					else if(skill.target[e] == "self"){
						applyBuff(a,real_pos,skill.effect[e],skill.values[e][SKILLS[real_pos][action]],skill.turns[e],(skill.times == undefined?-1:skill.times[e]),skill.name);
					}
					else if(skill.target[e] == "aoe"){
						for(var enemy=0;enemy<3;enemy++){
							applyDebuff(a,wave,enemy,skill.effect[e],skill.values[e][SKILLS[real_pos][action]],(skill.times == undefined?-1:skill.times[e]),skill.name);
						}
					}
					else if(skill.target[e] == "single"){
						applyDebuff(a,wave,target1,skill.effect[e],skill.values[e][SKILLS[real_pos][action]],(skill.times == undefined?-1:skill.times[e]),skill.name);
					}
					else if(skill.target[e] == "self_np_type"){
						applyBuff(a,real_pos,"np_type_"+CARD_TYPES[target1],0,skill.turns[e],(skill.times == undefined?-1:skill.times[e]),skill.name);
					}
				}
				// disable the skill
				ACTION_SKILLS[a][real_pos][action]=0;
			}
			else if(action == 3)// 				servant NP
			{
				var servant = SERVANTS[PARTY[real_pos]];
				var np = getNP(a,real_pos);
				var fakeNp=false;//servant cannot actually NP, but we will do it anyway, it will just do 0 damage and get 0 refund
				if(ACTION_NP[a][real_pos] < 100 || (calcTotalBuff(a,real_pos,"stun") > 0)){
					console.log("FAKE NP");
					fakeNp=true;
				}
				// calculate oc level
				var oc = Math.floor((ACTION_NP[a][real_pos]-100)/100);
				oc += lastNP-1;
				ACTION_NP[a][real_pos]=0;
				WAVE_NP[wave][real_pos]=0;
				var min_damage = [0,0,0];
				var avg_damage = [0,0,0];
				var max_damage = [0,0,0];
				var overkill_hits = 0;
				var normal_hits = 0;
				var totalRefund=0;
				if(!fakeNp)
				{
					//apply effects that trigger before NP
					for(var e=0;e<np.effect.length;e++){
						if(np.before[e]){//applies before
							var effect_level=0;
							if(np.oc[e]){ // is an oc effect
								effect_level = oc;
							}
							else{ // is an np level effect
								effect_level = PARTY_NP[real_pos];
							}
							if(np.target[e] == "all"){
								for(var i=0;i<3;i++){
									applyBuff(a,ACTION_ORDER[a][i],np.effect[e],np.values[e][effect_level],np.turns[e],(np.times == undefined?-1:np.times[e]),np.name);
								}
							}
							else if(np.target[e] == "target"){
								applyBuff(a,ACTION_ORDER[a][target1],np.effect[e],np.values[e][effect_level],np.turns[e],(np.times == undefined?-1:np.times[e]),np.name);
							}
							else if(np.target[e] == "self"){
								applyBuff(a,real_pos,np.effect[e],np.values[e][effect_level],np.turns[e],(np.times == undefined?-1:np.times[e]),np.name);
							}
							else if(np.target[e] == "aoe"){
								for(var enemy=0;enemy<3;enemy++){
									applyDebuff(a,wave,enemy,np.effect[e],np.values[e][effect_level],np.name);
								}
							}
							else if(np.target[e] == "single"){
								applyDebuff(a,wave,target1,np.effect[e],np.values[e][effect_level],np.name);
							}
						}
					}
					
					//deal damage to all enemies
					if(np.target_dmg == "aoe")
					{
						//console.log("AOE NP");
						
						// get np type
					
						var cardType = "";
						if(     np.type=="np_arts"  ){cardType="arts";}
						else if(np.type=="np_quick" ){cardType="quick";}
						else if(np.type=="np_buster"){cardType="buster";}
						
						//calcluate mods
						var cardMod = calcTotalBuff(a,real_pos,cardType);
						var atkMod = calcTotalBuff(a,real_pos,"atk");
						var npDmgMod = calcTotalBuff(a,real_pos,"np_dmg");
						var powerMod = calcTotalBuff(a,real_pos,"power");
						var dmgPlus = calcTotalBuff(a,real_pos,"dmg");
						var npGainMod = calcTotalBuff(a,real_pos,"np_gain");
					
						for(var e = 0;e<3;e++){
							if(MAX_HP[wave][e]<=0){//if enemy was dead before this NP
								continue;
							}
							var defDownMod = calcTotalDebuff(a,wave,e,"def_down");
							var dmgMods = [PARTY_ATTACK[real_pos],np.dmg[PARTY_NP[real_pos]],np.type,cardMod, servant.class, NUM_CLASS[ENEMIES_CLASS[wave][e]],
							  servant.attr, NUM_ATTR[ENEMIES_ATTR[wave][e]],atkMod, defDownMod,      npDmgMod,    powerMod, dmgPlus,    0,        0,       1];
							  //console.log(dmgMods);
							var baseDamage = getHitNPDamage(
							/*base_atk,              np_dmg_base,                       type,           cardMod, srv_class,     enemy_class,*/
							  PARTY_ATTACK[real_pos],np.dmg[PARTY_NP[real_pos]],np.type,cardMod, servant.class, NUM_CLASS[ENEMIES_CLASS[wave][e]],
							/*srv_attr,     enemy_attr,                     atkMod, defMod,    npDamageMod, powerMod, dmgPlusAdd, superMod, isSuper, rng*/
							  servant.attr, NUM_ATTR[ENEMIES_ATTR[wave][e]],atkMod, defDownMod,npDmgMod,    powerMod, dmgPlus,    0,        0,       1);
							//console.log(baseDamage);
							//                              type,            np_rate,           card_up, np_gain,   enemyClass,                       overkill
							var baseHitRefund = getHitNPGen(np.type, servant.np_perhit, cardMod, npGainMod, NUM_CLASS[ENEMIES_CLASS[wave][e]],false);
							var refundMods = [np.type, servant.np_perhit, cardMod, npGainMod, NUM_CLASS[ENEMIES_CLASS[wave][e]],false];
							  //console.log(refundMods);
							//console.log(baseHitRefund);
							// deal each hit
							var hitDmg=0;
							for(var hitPercent of np.hits){
								var hitDamage = hitPercent*(.01)*baseDamage;
								hitDmg+=hitDamage;
								//console.log("HIT DID:"+hitDamage);
								MIN_HP[wave][e] -= hitDamage*1.1;
								MAX_HP[wave][e] -= hitDamage*.9;
								
								min_damage[e] += hitDamage*.9;
								avg_damage[e] += hitDamage;
								max_damage[e] += hitDamage*1.1;
								
								if(MAX_HP[wave][e] <=0){ // overkill
									totalRefund+=baseHitRefund*1.5;
									overkill_hits++;
								}
								else{//not overkill
									totalRefund+=baseHitRefund;
								}
								normal_hits++;
							}
							//console.log("DID "+baseDamage+" damage, "+hitDmg+" in hits");
							MAX_HP[wave][e] = Math.floor(MAX_HP[wave][e]);
							MIN_HP[wave][e] = Math.floor(MIN_HP[wave][e]);
							
							min_damage[e] = Math.floor(min_damage[e]);
							avg_damage[e] = Math.floor(avg_damage[e]);
							max_damage[e] = Math.floor(max_damage[e]);
						}
					}
					// refund NP
					ACTION_NP[a][real_pos] += totalRefund;
					//apply effects after NP
					for(var e=0;e<np.effect.length;e++){
						if(!np.before[e]){//applies after
							var effect_level=0;
							if(np.oc[e]){ // is an oc effect
								effect_level = oc;
							}
							else{ // is an np level effect
								effect_level = PARTY_NP[real_pos];
							}
							if(np.target[e] == "all"){
								for(var i=0;i<3;i++){
									applyBuff(a,ACTION_ORDER[a][i],np.effect[e],np.values[e][effect_level],np.turns[e],(np.times == undefined?-1:np.times[e]),np.name);
								}
							}
							else if(np.target[e] == "target"){
								applyBuff(a,ACTION_ORDER[a][target1],np.effect[e],np.values[e][effect_level],np.turns[e],(np.times == undefined?-1:np.times[e]),np.name);
							}
							else if(np.target[e] == "self"){
								applyBuff(a,real_pos,np.effect[e],np.values[e][effect_level],np.turns[e],(np.times == undefined?-1:np.times[e]),np.name);
							}
							else if(np.target[e] == "aoe"){
								for(var enemy=0;enemy<3;enemy++){
									applyDebuff(a,wave,enemy,np.effect[e],np.values[e][effect_level],np.name);
								}
							}
							else if(np.target[e] == "single"){
								applyDebuff(a,wave,target1,np.effect[e],np.values[e][effect_level],np.name);
							}
						}
					}
					// tick down effects that buffed NP
					for(buff in ACTION_BUFFS[a][real_pos]){
						if(buff == "np_dmg"){
							var buffs = ACTION_BUFFS[a][real_pos][buff];
							for(var i=0;i<buffs.length;i++){
								if(buffs[i][2]!=-1 && buffs[i][2]!=63){//effect has limited times
									buffs[i][2]--;
									if(buffs[i][2]==0){//this was the last time, remove effect
										buffs.splice(i,1);
										i--;
									}
								}
							}
							if(buffs.length == 0){//if buff no longer applies to servant at all, remove it
								delete ACTION_BUFFS[a][real_pos][buff];
							}
						}
					}
				}
				//update the NP RECORD
				ALL_NPS.push({"min_dmg":min_damage,"max_dmg":max_damage,"avg_dmg":avg_damage,"overkill_hits":overkill_hits,"np_refund":Math.floor(totalRefund)});
				ACTIONS[a][3]=cur_np;
				cur_np++;
			}
			else{
				//console.log("ACTION ERROR");
			}
		}
		else if(pos == 3){ // 					mystic code action
			if(ACTION_SKILLS[a][6][action] == 0){ //skill cannot be used
				continue;
			}
			var skill = MYSTIC_CODES[MYSTIC_CODE]["skill"+(action+1)];
			for(var e=0;e<skill.target.length;e++){// loop over each skill effect
				if(skill.target[e] == "all"){
					for(var i=0;i<3;i++){
						applyBuff(a,ACTION_ORDER[a][i],skill.effect[e],skill.values[e][MYSTIC_CODE_LEVEL],skill.turns[e],(skill.times == undefined?-1:skill.times[e]),skill.name);
					}
				}
				else if(skill.target[e] == "target"){
					applyBuff(a,ACTION_ORDER[a][target1],skill.effect[e],skill.values[e][MYSTIC_CODE_LEVEL],skill.turns[e],(skill.times == undefined?-1:skill.times[e]),skill.name);
				}
				else if(skill.target[e] == "orderchange"){
					var tar1 = ACTION_ORDER[a][target1];
					ACTION_ORDER[a][target1] = ACTION_ORDER[a][target2];
					ACTION_ORDER[a][target2] = tar1;
				}
			}
			//console.log("AFTER");
			//printArray(ACTION_NP);
				// disable the skill
			ACTION_SKILLS[a][6][action]=0;
		}
		else if(pos == 7){
			// activate per turn effects
			for(var p=0;p<6;p++){
				var real_pos = ACTION_ORDER[a][p];
				var np_regen_total=0;
				if(ACTION_BUFFS[a][real_pos].np_regen != undefined){
					for(effect of ACTION_BUFFS[a][real_pos].np_regen){
						np_regen_total+=effect[0];
					}
				}
				ACTION_NP[a][real_pos]+=np_regen_total;
			}
			// tick down the remaining turns of effects
			for(var p=0;p<6;p++){
				var real_pos = ACTION_ORDER[a][p];
				for(buff in ACTION_BUFFS[a][real_pos]){
					var buffs = ACTION_BUFFS[a][real_pos][buff];
					for(var i=0;i<buffs.length;i++){
						if(buffs[i][1]!=-1 && buffs[i][1]!=63){//effect is not infinte turns
							buffs[i][1]--;
							if(buffs[i][1]==0){//this was the last turn, remove effect
								buffs.splice(i,1);
								i--;
							}
						}
					}
					if(buffs.length == 0){//if buff no longer applies to servant at all, remove it
						delete ACTION_BUFFS[a][real_pos][buff];
					}
				}
			}
			//console.log("WAVE SWITCH!");
		}
		else{
			//console.log("INVALID ACTION!");
		}
		//console.log("----------------");
		// insert a wave break if actions ends on an np
		if(wave != 2 && lastNP > 0 && a ==ACTIONS.length-1){
			//console.log("inserting switch at the end!");
			addAction(ACTIONS.length-1,7,0,0,0,true);
		}
	}
	// calc TOTAL_CHANCE for each enemy
	for(var w=0;w<3;w++){
		for(var e=0;e<3;e++){
			if(MIN_HP[w][e]>0){ // NOT DEAD
				TOTAL_CHANCE=0;
			}
			else if(MAX_HP[w][e]>0){ // SCHRODINGERS CAT
				TOTAL_CHANCE *= ((-MIN_HP[w][e])/(MAX_HP[w][e] - MIN_HP[w][e]));
			}
		}
	}
	writeFull();
	if(noview){ return; }
	viewAction();
}
function clickAction(pos,action)
{
	//TARGET SELECT
	if(pos >= 0 && pos <= 2)				// 			servant action
	{
		//MAKE SURE ITS VALID
		var real_pos = ACTION_ORDER[ACTION_CURRENT][pos];
		if(PARTY[real_pos]<0){
			return;
		}
		if(ACTION_SKILLS[ACTION_SKILLS.length-1][real_pos][action]==0){
			// Can't use skill
			return;
		}
		if(action >=0 && action <= 2) 			// 		servant skill
		{
			var servant = SERVANTS[PARTY[real_pos]];
			var skill = servant["skill"+(action+1)];
			if(skill.target_real == "aoe" || skill.target_real == "all" || skill.target_real == "self")
			{
				// JUST ADD THE ACTION, NO TARGETING POPUP
				addAction(ACTION_CURRENT,pos,action,0,0);
			}
			else if(skill.target_real == "target")
			{
				// need a current servants popup
				popup(0,"function(tar){addAction(ACTION_CURRENT,"+pos+","+action+",tar,0)}","Select target for "+skill.name);
			}
			else if(skill.target_real == "single")
			{
				// need a current servants popup
				// TODO: MAKE SURE THIS WAVE WORKS
				popup(2+WAVE_CURRENT,"function(tar){addAction(ACTION_CURRENT,"+pos+","+action+",tar,0)}","Select target for "+skill.name);
			}
			else if(skill.target_real == "self_np_type")
			{
				// need a current servants popup
				cardPopup(servant.nps,"function(tar){addAction(ACTION_CURRENT,"+pos+","+action+",CARD_NUM[tar],0)}","Select NP Type for "+servant.name);
			}
		}
		else if(action == 3)// 				servant NP
		{
			var np = getNP(ACTION_CURRENT,real_pos);
			if(np.target_dmg == "aoe" || np.target_dmg == "all" || np.target_dmg == "self" || np.target_dmg == "none")
			{
				// JUST ADD THE ACTION, NO TARGETING POPUP
				addAction(ACTION_CURRENT,pos,action,0,0);
			}
			else if(np.target_real == "target")
			{
				// need a current servants popup
				popup(0,"function(tar){addAction(ACTION_CURRENT,"+pos+","+action+",tar,0)}","Select target for "+np.name);
			}
			else if(np.target_real == "single")
			{
				// need a current servants popup
				// TODO: MAKE SURE THIS WORKS
				popup(2+WAVE_CURRENT,"function(tar){addAction(ACTION_CURRENT,"+pos+","+action+",tar,0)}","Select target for "+np.name);
			}
		}
	}
	else if(pos == 3){ // 					mystic code action
		if(ACTION_SKILLS[ACTION_SKILLS.length-1][6][action]==0){
			// Can't use skill
			return;
		}
		var skill = MYSTIC_CODES[MYSTIC_CODE]["skill"+(action+1)];
		if(skill.target_real == "aoe" || skill.target_real == "all" || skill.target_real == "self" || skill.target_real == "none")
		{
			// JUST ADD THE ACTION, NO TARGETING POPUP
			addAction(ACTION_CURRENT,pos,action,0,0);
		}
		else if(skill.target_real == "target")
		{
			// need a current servants popup
			popup(0,"function(tar){addAction(ACTION_CURRENT,"+pos+","+action+",tar,0)}","Select target for "+skill.name);
		}
		else if(skill.target_real == "single")
		{
			// need a current servants popup
			popup(2+WAVE_CURRENT,"function(tar){addAction(ACTION_CURRENT,"+pos+","+action+",tar,0)}","Select target for "+skill.name);
		}
		else if(skill.target_real == "orderchange")
		{
			// need an order change
			popup(1,`
			function(tar1){
				popup(1,
					function(tar2,tar1){
						addAction(ACTION_CURRENT,`+pos+`,`+action+`,tar1,tar2,false)
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
// removes action
function clickRemoveAction(action){
	if(action>0)
	{
		removeAction(action);
		calcFull(true);
		viewAction();
	}
}
function serv_popup_setclass(newclass){
	//highlight the class icon
	for(var i=0;i<NUM_CLASS.length-1;i++){
		if(i==newclass){
			$("#class_"+i).css("background-color","#ffffff59");
		}
		else{
			$("#class_"+i).css("background-color","");
		}
	}
	// filter servants
	for(var i=0;i<SERVANTS.length;i++){
		if(newclass == -1 || CLASSES_NUM[SERVANTS[i].class] == newclass){
			$("#servant_"+i).css("display","inline-block");
		}
		else{
			$("#servant_"+i).css("display","none");
		}
	}
}
function compareStrings(a,b) {
	if (a>b) return 1;
	else if (a<b) return -1;
	return 0;
}
function serv_popup_setservant(servant){
	$("#serv_popup_div").css("display","none");
	PARTY[SELECTING_REALPOS]=servant;
	calcFull();
}
function servantPopup(fake_pos){
	var realpos = ACTION_ORDER[ACTION_CURRENT][fake_pos];
	SELECTING_REALPOS=realpos;
	$("#serv_popup_text").text("Select servant for slot "+(realpos+1));
	$("#serv_popup_div").css("display","block");
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
		
		html += `<br><select onchange = "setNP(`+p+`,this.value)" id = "servant_np_sel_`+p+`" class = "servant_np_sel">`;
		for(var i=0;i<5;i++){
			html+=`<option value="`+i+`"`+(PARTY_NP[p]==i?" selected":"")+`>NP `+(i+1)+`</option>`;
		}
		html+=`</select><div class="serv_sel_name" id = "serv_name_`+p+`" onclick = "servantPopup(`+p+`)"></div>`;
		
		// CE SELECTION
		html+=`</div><div id = "ce_sel_div_`+p+`" class = "ce_sel_div"><select onchange = "setCE(`+p+`,this.value)" class = "ce_sel" id = "ce_sel_`+p+`"><option value=-1>Empty</option></select>
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
			
			$("#enemy_"+stage+"_"+enemy).append("<img class = \"enemy_img\" id =\"enemy_img_"+stage+"_"+enemy+"\"><select class = \"enemy_sel\" id = \"enemy_sel_"+stage+"_"+enemy+"\" onchange=\"setEnemy("+stage+","+enemy+",this.value)\"></select><select class = \"enemy_attr_sel\" id = \"enemy_attr_sel_"+stage+"_"+enemy+"\" onchange=\"setEnemyAttr("+stage+","+enemy+",this.value)\"></select><input class = \"enemy_hp\" type = \"number\" step = \"1\" value = \""+ENEMIES_HP[stage][enemy]+"\" onchange=\"setEnemyHP("+stage+","+enemy+",this.value)\"/><div class = \"debuffs\" id = \"debuffs_"+stage+"_"+enemy+"\"></div><div id = \"enemy_damage_"+stage+"_"+enemy+"\" class = \"enemy_damage\"></div>");
			for(var i=0;i<NUM_CLASS.length;i++){
				$("#enemy_sel_"+stage+"_"+enemy).append("<option value="+i+(ENEMIES_CLASS[stage][enemy]==i?" selected":"")+">"+NUM_CLASS[i]+"</option>");
			}
			for(var i=0;i<NUM_ATTR.length;i++){
				$("#enemy_attr_sel_"+stage+"_"+enemy).append("<option value="+i+(ENEMIES_ATTR[stage][enemy]==i?" selected":"")+">"+NUM_ATTR[i]+"</option>");
			}
			displayEnemy(stage,enemy);
		}
	}
	// INITIALIZE TARGET POPUP
	for(var p=0;p<6;p++){
		$("#popup_div").append(`<div class = "cut_btn serv_btn" id = "serv_btn_`+p+`"></div>`);
	}
	for(var w=0;w<3;w++){
		for(var e=0;e<3;e++){
			$("#popup_div").append(`<div class = "cut_btn enemy_btn" id = "enemy_btn_`+w+`_`+e+`"></div>`);
		}
	}
	positionPopup();
	// INITIALIZE SERVANTS POPUP
	// classes
	for(var i=0;i<NUM_CLASS.length-1;i++){
		$("#serv_popup_classes").append(`<div class ="class" id = "class_`+i+`" onclick="serv_popup_setclass(`+i+`)" style="background-image:url(`+CLASSES_ICONS[NUM_CLASS[i]]+`)"></div>`);
	}
	$("#serv_popup_classes").append(`<div class ="class" id = "class_`+i+`" onclick="serv_popup_setclass(-1)" style="background-image:url(`+CLASSES_ICONS['all']+`)"></div>`);
	//servants
	for(var i=0;i<SERVANTS.length;i++){
		$("#serv_popup_servants").append(`<div class ="servant" id = "servant_`+i+`" onclick="serv_popup_setservant(`+i+`)" style="background-image:url(`+SERVANTS[i].pic+`)"><div class = "servant_name">`+SERVANTS[i].name+`</div></div>`);
	}
	// sort them in alphabetical order
	$('#serv_popup_servants').append($('.servant').detach().sort(function(a,b){
		return compareStrings($('.servant_name',a).text(), $('.servant_name',b).text());
	}));
	// empty option
	$("#serv_popup_servants").append(`<div class ="servant" id = "servant_null" onclick="serv_popup_setservant(-1)" style="background-image:url(`+CLASSES_ICONS['empty']+`)"><div class = "servant_name">Empty</div></div>`);
	// calculate entire run
	calcFull();
	viewAction();
});
window.addEventListener("resize", positionPopup);