var Boss = function(name, expansion, health, hasTokens, difficulty) {
    this.name = name
    this.expansion = expansion
    this.health = health
    this.hasTokens = hasTokens
    this.difficulty = difficulty

}

var bosses = [
    new Boss('Hollow Crown','WE', 1, false, 5),
    new Boss('Umbra Titan','WE', 70, true, 3),
    new Boss('Gate Witch','WE', 70, true, 7),
    new Boss('Magus Of Cloaks','WE', 35, true, 7),
    new Boss('Knight Of Shackles','TV', 70, false, 4),
    new Boss('Maiden Of Thorns','TV', 80, true, 4),
    new Boss('Wraithmonger','OD', 70, false, 6),
    new Boss('Thrice Dead Prophet','OD', 40, true, 5),
    new Boss("Blight Lord", 'Nameless', 70, false, 4), //
    new Boss("Carapace Queen", 'AE', 60, false, 3),  //
    new Boss("Crooked Mask", 'AE', 70, false, 5), //
    new Boss("Wayward One", 'Nameless', 60, false, 7), //
    new Boss("Prince Of Gluttons", 'AE', 70, false, 5), //
    new Boss("Horde Crone", 'Depths', 60, false, 6), //
    new Boss("Rageborne", 'AE', 70, true, 2), //
];

var Mage = function(name, expansion){
    this.name = name
    this.expansion = expansion
}



mages = [
    new Mage("Adelheim", 'AE'), 
    new Mage("Phaedraxa", 'AE'), 
    new Mage("Brama", 'AE'), 
    new Mage("Kadir", 'AE'), 
    new Mage("Mist", 'AE'), 
    new Mage("Jian", 'AE'), 
    new Mage("Xaxos", 'AE'), 
    new Mage("Lash", 'AE'),
    new Mage("Zhana", 'Depths'), 
    new Mage("Nym", 'Depths'), 
    new Mage("Reeve", 'Depths'), 
    new Mage("Malastar", 'Nameless'), 
    new Mage('Dezmodia','WE'),
    new Mage('Garu','WE'),
    new Mage('Gex','WE'),
    new Mage('Mazahaedron','WE'),
    new Mage('MistWE','WE'),
    new Mage('Quilius','WE'),
    new Mage('Ulgimor','WE'),
    new Mage('Yan Magda','WE'),
    new Mage('Sparrow','TV'),
    new Mage('XaxosTV','TV'),
    new Mage('Indira','OD'),
    new Mage('Remnant','OD'),
];

var Card = function(name, type, cost, expansion){
    this.name = name
    this.type = type
    this.cost = cost
    this.expansion = expansion
}



cardsGem = [new Card("Jade", 'Gem', 2, 'AE'),new Card("Sifters Pearl", 'Gem', 3, 'AE'),new Card("Vriswood Amber", 'Gem', 3, 'AE'),new Card("Leeching Agate", 'Gem', 3, 'Nameless'),new Card("Diamond Cluster", 'Gem', 4, 'AE'),new Card("Searing Ruby", 'Gem', 4, 'AE'),new Card("Burning Opal", 'Gem', 5, 'AE'),new Card("Banishing Topaz", 'Gem', 5, 'Depths'),new Card("Clouded Sapphire", 'Gem', 6, 'AE'),new Card('Bloodstone Jewel','Gem',6,'WE'),new Card('Breach Ore','Gem',4,'WE'),new Card('Dread Diamond','Gem',3,'WE'),new Card('Erratic Ingot','Gem',5,'WE'),new Card('Frozen Magmite','Gem',3,'WE'),new Card('Scoria Slag','Gem',4,'WE'),new Card('Volcanic Glass','Gem',3,'WE'),new Card('Alien Element','Gem',4,'OD'),new Card('Haunted Berylite','Gem',3,'OD'),new Card('Pain Stone','Gem',6,'OD'),new Card('Fossilized Scarab','Gem',3,'TV')];

cardsSpell = [new Card("Phoenix Flame", 'Spell', 3, 'AE'),new Card("Spectral Echo", 'Spell', 3, 'AE'),new Card("Amplify Vision", 'Spell', 4, 'AE'),new Card("Ignite", 'Spell', 4, 'AE'),new Card("Lava Tendril", 'Spell', 4, 'AE'),new Card("Void Bond", 'Spell', 4, 'Depths'),new Card("Blaze", 'Spell', 4, 'Nameless'),new Card("Dark Fire", 'Spell', 5, 'AE'),new Card("Essence Theft", 'Spell', 5, 'AE'),new Card("Feral Lightning", 'Spell', 5, 'AE'),new Card("Oblivion Swell", 'Spell', 5, 'AE'),new Card("Combustion", 'Spell', 5, 'Depths'),new Card("Chaos Arc", 'Spell', 6, 'AE'),new Card("Planar Insight", 'Spell', 6, 'AE'),new Card("Wildfire Whip", 'Spell', 6, 'AE'),new Card("Devouring Shadow", 'Spell', 6, 'Depths'),new Card("Scrying Bolt", 'Spell', 6, 'Nameless'),new Card("Arcane Nexus", 'Spell', 7, 'AE'),new Card("Consuming Void", 'Spell', 7, 'AE'),new Card("Disintegrating Scythe", 'Spell', 7, 'Depths'),new Card("Sages Brand", 'Spell', 7, 'Nameless'),new Card("Monstrous Inferno", 'Spell', 8, 'Depths'),new Card("Radiance", 'Spell', 8, 'Nameless'), new Card('Aurora','Spell',5,'WE'),new Card('Carbonize','Spell',4,'WE'),new Card('Conjure The Lost','Spell',6,'WE'),new Card('Celestial Spire','Spell',5,'WE'),new Card('Convection Field','Spell',5,'WE'),new Card('Crystallize','Spell',8,'WE'),new Card('Equilibrium','Spell',7,'WE'),new Card('Fiery Torrent','Spell',5,'WE'),new Card('Jagged Lightning','Spell',4,'WE'),new Card('Kindle','Spell',4,'WE'),new Card('Nova Forge','Spell',6,'WE'),new Card('Pyrotechnic Surge','Spell',4,'WE'),new Card('Reduce To Ash','Spell',7,'WE'),new Card('Thoughtform Familiar','Spell',3,'WE'),new Card('Char','Spell',8,'OD'),new Card('Catalyst','Spell',6,'OD'),new Card('Feedback Aura','Spell',5,'OD'),new Card('Nether Conduit','Spell',7,'OD'),new Card('Pyromancy','Spell',7,'OD'),new Card('Scorch','Spell',5,'OD'),new Card('Resonate','Spell',6,'TV'),new Card('Conflagration','Spell',3,'TV'),new Card('Fulminate','Spell',5,'TV'),new Card('Inner Fire','Spell',2,'TV'),new Card('Thermal Dart','Spell',4,'TV')];

cardsRelic = [new Card("Flexing Dagger", 'Relic', 2, 'AE'),new Card("Bottled Vortex", 'Relic', 3, 'AE'),new Card("Unstable Prism", 'Relic', 3, 'AE'),new Card("Blasting Staff", 'Relic', 4, 'AE'),new Card("Focusing Orb", 'Relic', 4, 'AE'),new Card("Transmogrifier", 'Relic', 4, 'Depths'),new Card("Vim Dynamo", 'Relic', 4, 'Depths'),new Card("Mages Talisman", 'Relic', 5, 'AE'),new Card("Molten Hammer", 'Relic', 5, 'Nameless'),new Card("Temporal Helix", 'Relic', 7, 'Nameless'),new Card('Cairn Compass','Relic',4,'WE'),new Card('Conclave Scroll','Relic',3,'WE'),new Card('Fiend Catcher','Relic',3,'WE'),new Card('Mages Totem','Relic',2,'WE'),new Card('Primordial Fetish','Relic',4,'WE'),new Card('Vortex Gauntlet','Relic',6,'WE'),new Card('Astral Cube','Relic',5,'OD'),new Card('Riddle Sphere','Relic',3,'OD'),new Card('Dimensional Key','Relic',8,'TV'),new Card('Eternity Charm','Relic',3,'TV')];


var BossCard = function(name, type, tier, expansion, strength, boss, hasPassive) {
    this.name = name
    this.type = type
    this.tier = tier
    this.expansion = expansion
    this.strength = strength
    this.boss = boss
    this.hasPassive = hasPassive || false
}

var cardsBoss = [

// Basic nemesis cards from AE base set - 22
    new BossCard("Agony Field","Power",1,"AE",2,'basic'),
    new BossCard("Awaken","Attack",2,"AE",null,'basic'),
    new BossCard("Bane Sire","Minion",1,"AE", 6, 'basic'),
    new BossCard("Bleed Static","Power",1,"AE", 3, 'basic'),
    new BossCard("Cauterizer","Minion",2,"AE",3,'basic', true),
    new BossCard("Dispel","Attack",2,"AE",null,'basic'),
    new BossCard("Doom Aegis","Power",3,"AE",1,'basic'),
    new BossCard("Eye of Nothing","Power",1,"AE",2,'basic'),
    new BossCard("Haze Spewer","Minion",1,"AE", 5,'basic'),
    new BossCard("Lay Waste","Attack",2,"AE",null,'basic'),
    new BossCard("Pulverizing Ray","Power",2,"AE",1,'basic'),
    new BossCard("Skewer","Attack",1,"AE", null,'basic'),
    new BossCard("Slaughter","Attack",1,"AE",null,'basic'),
    new BossCard("Needlemaw","Minion",2,"AE",11,'basic'),
    new BossCard("Gather Darkness","Attack",3,"AE",null,'basic'),
    new BossCard("Jagged One","Minion",3,"AE",14,'basic'),
    new BossCard("Obliterate","Attack",3,"AE",null,'basic'),
    new BossCard("Reality Rupture","Power",3,"AE",1,'basic'),
    new BossCard("Sunder","Attack",3,"AE",null,'basic'),
    new BossCard("Topple","Attack",3,"AE",null,'basic'),
    new BossCard("Venomite","Minion",2,"AE",9,'basic'),
    new BossCard("Woven Sky","Power",1,"AE",2,'basic'),

// nemesis cards from War Eternal - 25
    new BossCard("Afflict","Attack",1,"WE", null, 'basic'),
    new BossCard("Aphotic Sun","Power",2,"WE",2,"basic"),
    new BossCard("Apocalypse Ritual","Power",3,"WE",2,"basic"),
    new BossCard("Assail","Attack",2,"OD",null,"basic"),
    new BossCard("Banish","Attack",3,"WE",null,"basic"),
    new BossCard("Baneful Crux","Power",2,"Promos",2,"basic"),
    new BossCard("Chaos Flail","Power",2,"WE",2,"basic"),
    new BossCard("Cataclysmic Fate","Power",3,"WE",1,"basic"),
    new BossCard("Catacomb Drone","Minion",1,"WE",5,"basic"),
    new BossCard("Decimate","Attack",1,"Promos",null,"basic"),
    new BossCard("Dire Abbatoir","Power",3,"OD",2,"basic"),
    new BossCard("Encroach","Attack",1,"WE",null,"basic"),
    new BossCard("Engulf","Attack",3,"WE",null,"basic"),
    new BossCard("Gallowskulk","Minion",3,"Promos",10,"basic"),
    new BossCard("Glyph Enigma","Minion",1,"Promos",7,"basic"),
    new BossCard("Gravity Splinter","Power",2,"Promos",2,"basic"),
    new BossCard("Heart of Nothing","Power",1,"WE",2,"basic"),
    new BossCard("Howling Spinners","Minion",1,"WE",5,"basic"),
    new BossCard("Labyrinth Wisp","Minion",1,"OD", 5,"basic"),
    new BossCard("Mage Ender","Minion",2,"WE",9,"basic"),
    new BossCard("Mangleroot","Minion",2,"WE",12,"basic"),
    new BossCard("Morbid Gyre","Power",2,"WE",1,"basic"),
    new BossCard("Menace","Attack",1,"Promos",null,"basic"),
    new BossCard("Mutilate","Attack",2,"WE",null,"basic"),
    new BossCard("Monstrosity of Omens","Minion",3,"WE",5,"basic", true),
    new BossCard("Negate","Attack",2,"Promos",null,"basic"),
    new BossCard("Night Unending","Power",1,"WE",3,"basic"),
    new BossCard("Nix","Attack",1,"WE",null,"basic"),
    new BossCard("Null Scion","Minion",2,"WE",11,"basic"),
    new BossCard("Planar Collision","Power",1,"WE",2,"basic"),
    new BossCard("Quell","Attack",3,"WE",null,"basic"),
    new BossCard("Spirit Cage","Power",1,"Promos",3,"basic"),
    new BossCard("Smite","Attack",2,"WE",null,"basic"),
    new BossCard("Thrash","Attack",1,"WE",null,"basic"),
    new BossCard("Throttle","Attack",3,"WE",null,"basic"),
    new BossCard("Unmake","Attack",3,"Promos",null,"basic"),
    new BossCard("Withering Beam","Power",3,"WE",2,"basic"),
    new BossCard("World Purge","Power",3,"Promos",2,"basic"),


    new BossCard('Broodwomb','Minion',1,'AE',5,'Carapace Queen', true),
    new BossCard("Endless Throng","Attack",1,"AE",null,'Carapace Queen'),
    new BossCard("Hatch","Attack",1,"AE",null,'Carapace Queen'),
    new BossCard("Blot the Sun","Power",2,"AE",2,'Carapace Queen'),
    new BossCard("Foul Multitudes","Power",2,"AE",3,'Carapace Queen', true),
    new BossCard("Infest","Attack",2,"AE",null,'Carapace Queen'),
    new BossCard("Legion Beacon","Power",3,"AE",2,'Carapace Queen'),
    new BossCard("Maggot Engine","Minion",3,"AE",'*','Carapace Queen'),
    new BossCard("Spawn","Attack",3,"AE",null,'Carapace Queen'),

    new BossCard("Burden","Attack",1,"AE",null,'Crooked Mask'),
    new BossCard("Corrupter","Minion",1,"AE",6,'Crooked Mask', true),
    new BossCard("Tempt","Attack",1,"AE",null,'Crooked Mask'),
    new BossCard("Pain Sower","Minion",2,"AE",11,'Crooked Mask'),
    new BossCard("Twisting Madness","Power",2,"AE",2,'Crooked Mask'),
    new BossCard("Vex","Attack",2,"AE",null,'Crooked Mask'),
    new BossCard("Afflict","Attack",3,"AE",null,'Crooked Mask'),
    new BossCard("Bedlam Sage","Minion",3,"AE",14,'Crooked Mask'),
    new BossCard("Ruin Priest","Minion",3,"AE",17,'Crooked Mask'),

    new BossCard("Gorge","Attack",1,"AE",null,'Prince Of Gluttons'),
    new BossCard("Mindguzzler","Minion",2,"AE",'*','Prince Of Gluttons'),
    new BossCard("Lobotomize","Attack",1,"AE",null,'Prince Of Gluttons'),
    new BossCard("Thought Biter","Minion",1,"AE",6,'Prince Of Gluttons'),
    new BossCard("Cerephage","Minion",2,"AE",7,'Prince Of Gluttons'),
    new BossCard("Godfeeders","Minion",2,"AE",8,'Prince Of Gluttons'),
    new BossCard("Digest","Attack",3,"AE",null,'Prince Of Gluttons'),
    new BossCard("Memory Eater","Minion",3,"AE",16,'Prince Of Gluttons'),
    new BossCard("Vile Feast","Power",3,"AE",2,'Prince Of Gluttons'),

    new BossCard("Cleave","Attack",1,"AE",null,'Rageborne'),
    new BossCard("Provoker","Minion",1,"AE",5,'Rageborne'),
    new BossCard("Unrelenting Ire","Attack",1,"AE",null,'Rageborne'),
    new BossCard("Blood Cry","Power",2,"AE",2,'Rageborne'),
    new BossCard("Invoke Carnage","Power",2,"AE",2,'Rageborne'),
    new BossCard("Scorn","Minion",2,"AE",9,'Rageborne'),
    new BossCard("Avatar of Wrath","Minion",3,"AE",16,'Rageborne'),
    new BossCard("Onslaught","Attack",3,"AE",null,'Rageborne'),
    new BossCard("Rolling Death","Power",3,"AE",2,'Rageborne'),

    new BossCard("Crushing Masses","Power",1,"Depths",2,'Horde Crone'),
    new BossCard("Night Raid","Attack",1,"Depths",null,'Horde Crone'),
    new BossCard("Overwhelm","Attack",1,"Depths",null,'Horde Crone'),
    new BossCard("Horde Hybrid","Minion",2,"Depths",7,'Horde Crone', true),
    new BossCard("Rabid Hysteria","Power",2,"Depths",2,'Horde Crone'),
    new BossCard("Servitude to Evil","Power",2,"Depths",2,'Horde Crone'),
    new BossCard("Besiege","Attack",3,"Depths",null,'Horde Crone'),
    new BossCard("Underworld Totem","Minion",3,"Depths",12,'Horde Crone', true),
    new BossCard("Wreak Havoc","Attack",3,"Depths",null,'Horde Crone'),

    new BossCard("Creeping Viridian","Power",1,"Nameless",3,'Blight Lord'),
    new BossCard("Shard Spitter","Minion",1,"Nameless",5,'Blight Lord'),
    new BossCard("Vitrify","Attack",1,"Nameless",null,'Blight Lord'),
    new BossCard("Dread Plinth","Power",2,"Nameless",2,'Blight Lord'),
    new BossCard("Ossify","Attack",2,"Nameless",null,'Blight Lord'),
    new BossCard("Verdigra","Minion",2,"Nameless",9,'Blight Lord'),
    new BossCard("Glittering Doom","Power",3,"Nameless",2,'Blight Lord'),
    new BossCard("Petrify","Attack",3,"Nameless",null,'Blight Lord'),
    new BossCard("Slag Horror","Minion",3,"Nameless",18,'Blight Lord'),

    new BossCard("Blinking Terror","Minion",1,"Nameless",6,'Wayward One', true),
    new BossCard("Irradiate","Attack",1,"Nameless",null,'Wayward One'),
    new BossCard("Quantum Maze","Power",1,"Nameless",2,'Wayward One'),
    new BossCard("Feedback Coil","Power",2,"Nameless",2,'Wayward One'),
    new BossCard("Fractured Nebula","Power",2,"Nameless",2,'Wayward One'),
    new BossCard("Warper","Minion",2,"Nameless",9,'Wayward One', true),
    new BossCard("Aether Flux","Power",3,"Nameless",2,'Wayward One'),
    new BossCard("Netherspawn","Minion",3,"Nameless",15,'Wayward One', true),
    new BossCard("Shunt","Attack",3,"Nameless",null,'Wayward One'),


    // 10
    new BossCard("Baneful Crux","Power",2,"Promos"),
    new BossCard("Decimate","Attack",1,"Promos"), // no image
    new BossCard("Gallowskulk","Minion",3,"Promos"),
    new BossCard("Glyph Enigma","Minion",1,"Promos"), // no image
    new BossCard("Gravity Splinter","Power",2,"Promo", 2, 'basic'),
    new BossCard("Menace","Attack",1,"Promo",null,'basic'),
    new BossCard("Negate","Attack",2,"Promos"), // no image
    new BossCard("Spirit Cage","Power",1,"Promos"), // no image
    new BossCard("Unmake","Attack",3,"Promos"), // no image
    new BossCard("World Purge","Power",3,"Promo",2,'basic'),









    new BossCard("Beseech","Attack",1,"WE",null,"Hollow Crown"),
    new BossCard("Enslave","Attack",1,"WE",null,"Hollow Crown"),
    new BossCard("Thronewatch","Minion",1,"WE",6,"Hollow Crown"),
    new BossCard("Ascend","Attack",2,"WE",null,"Hollow Crown"),
    new BossCard("Infernal Domain","Power",2,"WE",2,"Hollow Crown"),
    new BossCard("Reign","Attack",2,"WE",null,"Hollow Crown"),
    new BossCard("Dominate","Attack",3,"WE",null,"Hollow Crown"),
    new BossCard("Nameless Faith","Power",3,"WE",1,"Hollow Crown"),
    new BossCard("Viscera Bride","Minion",3,"WE",18,"Hollow Crown"),
    new BossCard("Bezu","Minion-acolyte",0,"WE",2,"Hollow Crown"),
    new BossCard("Edryss Tragg","Minion-acolyte",0,"WE",2,"Hollow Crown"),
    new BossCard("Holadran","Minion-acolyte",0,"WE",2,"Hollow Crown"),
    new BossCard("Kurgax","Minion-acolyte",0,"WE",2,"Hollow Crown"),
    new BossCard("Lurzan","Minion-acolyte",0,"WE",2,"Hollow Crown"),
    new BossCard("Mord","Minion-acolyte",0,"WE",2,"Hollow Crown"),
    new BossCard("Nhavkalas","Minion-acolyte",0,"WE",2,"Hollow Crown"),
    new BossCard("Ren-Goda","Minion-acolyte",0,"WE",2,"Hollow Crown"),
    new BossCard("Solara","Minion-acolyte",0,"WE",2,"Hollow Crown"),
    new BossCard("Fellblade","Minion",1,"TV",6,"Knight Of Shackles"),
    new BossCard("March On Gravehold","Power",1,"TV",2,"Knight Of Shackles"),
    new BossCard("Siege","Attack",1,"TV",null,"Knight Of Shackles"),
    new BossCard("Chainsworn","Minion",2,"TV",10,"Knight Of Shackles"),
    new BossCard("Engine of War","Power",2,"TV",2,"Knight Of Shackles"),
    new BossCard("Rout","Attack",2,"TV",null,"Knight Of Shackles"),
    new BossCard("Deathless Legion","Minion",3,"TV",18,"Knight Of Shackles", true),
    new BossCard("End of All","Power",3,"TV",2,"Knight Of Shackles"),
    new BossCard("Invade","Attack",3,"TV",null,"Knight Of Shackles"),
    new BossCard("Dusk Spawn","Minion",1,"WE",5,"Magus Of Cloaks", true),
    new BossCard("Rising Dark","Power",1,"WE",3,"Magus Of Cloaks", true),
    new BossCard("Twilight Empire","Power",1,"WE",3,"Magus Of Cloaks"),
    new BossCard("Ashen Haruspex","Minion",2,"WE",5,"Magus Of Cloaks", true),
    new BossCard("Black Solstice","Power",2,"WE",2,"Magus Of Cloaks", true),
    new BossCard("Enshroud","Attack",2,"WE",null,"Magus Of Cloaks"),
    new BossCard("Eclipse","Attack",3,"WE",null,"Magus Of Cloaks"),
    new BossCard("Shadows Reach","Power",3,"WE",9,"Magus Of Cloaks"),
    new BossCard("Veil Daughter","Minion",3,"WE",11,"Magus Of Cloaks", true),
    new BossCard("Fate Leech","Minion",1,"OD",6,"Thrice Dead Prophet"),
    new BossCard("Immortal Triumph","Power",1,"OD",3,"Thrice Dead Prophet"),
    new BossCard("Rouse","Attack",1,"OD",null,"Thrice Dead Prophet"),
    new BossCard("Chrysalis Shield","Power",2,"OD",2,"Thrice Dead Prophet"),
    new BossCard("Eternal Edict","Power",2,"OD",2,"Thrice Dead Prophet"),
    new BossCard("Gilded Effigy","Minion",2,"OD",12,"Thrice Dead Prophet"),
    new BossCard("Endure","Attack",3,"OD",null,"Thrice Dead Prophet"),
    new BossCard("Lost Watcher","Minion",3,"OD",17,"Thrice Dead Prophet"),
    new BossCard("Siphon","Attack",3,"OD",null,"Thrice Dead Prophet"),
    new BossCard("Aether Barb","Power",1,"TV",2,"Maiden Of Thorns"),
    new BossCard("Nettlewing","Minion",1,"TV",6,"Maiden Of Thorns"),
    new BossCard("Puncture","Attack",1,"TV",null,"Maiden Of Thorns"),
    new BossCard("Dreadwind Horrors","Minion",2,"TV",10,"Maiden Of Thorns"),
    new BossCard("Gruesome Feast","Power",2,"TV",2,"Maiden Of Thorns"),
    new BossCard("Quillfiend","Minion",2,"TV",8,"Maiden Of Thorns"),
    new BossCard("Molecular Razor","Power",3,"TV",1,"Maiden Of Thorns"),
    new BossCard("Shrapnel Storm","Attack",3,"TV",null,"Maiden Of Thorns"),
    new BossCard("Writhing Obelisk","Minion",3,"TV",16,"Maiden Of Thorns"),
    new BossCard("Crumble","Attack",3,"WE",null,"Umbra Titan"),
    new BossCard("Demi-Ancient","Minion",3,"WE",18,"Umbra Titan"),
    new BossCard("Yawning Black","Power",3,"WE",2,"Umbra Titan"),
    new BossCard("Vault Behemoth","Minion",2,"WE",9,"Umbra Titan"),
    new BossCard("Maul","Attack",2,"WE",null,"Umbra Titan"),
    new BossCard("Tombfright","Minion",2,"WE",8,"Umbra Titan"),
    new BossCard("Cryptid","Minion",1,"WE",6,"Umbra Titan"),
    new BossCard("Grubber","Minion",1,"WE",5,"Umbra Titan"),
    new BossCard("Seismic Roar","Power",1,"WE",3,"Umbra Titan"),
    new BossCard("Deep Abomination","Minion",1,"WE",6,"Gate Witch"),
    new BossCard("Hasten","Attack",1,"WE",null,"Gate Witch"),
    new BossCard("Temporal Nimbus","Power",1,"WE",3,"Gate Witch"),
    new BossCard("Nether Spiral","Power",2,"WE",3,"Gate Witch"),
    new BossCard("Paradox Beast","Minion",2,"WE",8,"Gate Witch"),
    new BossCard("Portal Wretch","Minion",2,"WE",8,"Gate Witch", true),
    new BossCard("Distort","Attack",3,"WE",null,"Gate Witch"),
    new BossCard("Infinite Emnity","Power",3,"WE",2,"Gate Witch"),
    new BossCard("Rift Scourge","Minion",3,"WE",13,"Gate Witch", true),
    new BossCard("Abyssal Nightmare","Minion",1,"OD",5,"Wraithmonger"),
    new BossCard("Horrify","Attack",1,"OD",null,"Wraithmonger"),
    new BossCard("Terror Coil","Power",1,"OD",3,"Wraithmonger"),
    new BossCard("Manifest","Attack",2,"OD",null,"Wraithmonger"),
    new BossCard("Sanity Hemorrhage","Power",2,"OD",2,"Wraithmonger"),
    new BossCard("Somaplast","Minion",2,"OD",10,"Wraithmonger"),
    new BossCard("Beyonder","Minion",3,"OD",16,"Wraithmonger"),
    new BossCard("Pulsing Madness","Power",3,"OD",2,"Wraithmonger"),
    new BossCard("Unhinge","Attack",3,"OD",null,"Wraithmonger"),


]


var rageBorneStrikeDeck = ['Convoke','Devastate','Eviscerate','Frenzy','Raze','Seize',]






