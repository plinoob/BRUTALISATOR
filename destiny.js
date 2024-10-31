
function unApplySkillModifiers (brute, skill){
    const updatedBrute = { ...brute };
    // Vitality modifier
    if (skill === 'vitality') {
        updatedBrute.enduranceModifier /= 1.5;
        updatedBrute.enduranceStat -= 3;
    }
    // Immortality modifier
    if (skill === 'immortality') {
        updatedBrute.enduranceModifier /= 3.5;
        updatedBrute.strengthModifier /= 0.75;
        updatedBrute.agilityModifier /= 0.75;
        updatedBrute.speedModifier /= 0.75;
    }
    // Herculean strength modifier
    if (skill === 'herculeanStrength') {
        updatedBrute.strengthModifier /= 1.5;
        updatedBrute.strengthStat -= 3;
    }
    // Feline agility modifier
    if (skill === 'felineAgility') {
        updatedBrute.agilityModifier /= 1.5;
        updatedBrute.agilityStat -= 3;
    }
    // Lightning bolt modifier
    if (skill === 'lightningBolt') {
        updatedBrute.speedModifier /= 1.5;
        updatedBrute.speedStat -= 3;
    }
    // Reconnaissance modifier
    if (skill === 'reconnaissance') {
        updatedBrute.speedModifier /= 2.5;
        updatedBrute.speedStat -= 5;
    }
    // Armor modifier
    if (skill === 'armor') {
        updatedBrute.speedModifier /= 0.9;
    };
    return refreshStats(updatedBrute);
};



function refreshStats (brute){
    const updatedBrute = { ...brute };


    // Final stat values
    updatedBrute.enduranceValue = Math.floor(updatedBrute.enduranceStat * updatedBrute.enduranceModifier);
    updatedBrute.strengthValue = Math.floor(updatedBrute.strengthStat * updatedBrute.strengthModifier);
    updatedBrute.agilityValue = Math.floor(updatedBrute.agilityStat * updatedBrute.agilityModifier);
    updatedBrute.speedValue = Math.floor(updatedBrute.speedStat * updatedBrute.speedModifier);
    // Final HP
    updatedBrute.hp = (0, getHP)(updatedBrute.level, updatedBrute.enduranceValue);
    return updatedBrute;
};

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

var getFinalStat = (brute, stat, modifiers) => {
    var multiplier = stat === 'agility' ? modifiers.includes(FightModifier.doubleAgility) ? 2 : 1 : 1;
    var randomSkill = (0, getTempSkill)(brute, modifiers);
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
var getFinalHP = (brute, modifiers) => {
    var randomSkill = (0, getTempSkill)(brute, modifiers);
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
  ascend: 'ascend',
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

var randomBetween = (min, max, generator) => {
    if (min > max)
        return 0;
    if (min === max)
        return min;
    var random = generator ? generator.next() : Math.random();
    return Math.floor(random * (max - min + 1) + min);
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
        { stat: FightStat.DAMAGE, value: -25, percent: true },
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
    [SkillName.hideaway]: [
        { stat: FightStat.BLOCK, value: 25, percent: true, details: 'againstThrows' },
    ],
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
  EmberFang: 'EmberFang',
  Cerberus: 'Cerberus'
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

var ILLEGAL_BODY
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
        if(!ILLEGAL_BODY)alert("L'utilisateur Ambryal a été pris la main dans le sac a modifier des fringues !!!");
    }
};

var ILLEGAL_COLORS
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
        if(!ILLEGAL_COLORS)alert("L'utilisateur Ambryal a été pris la main dans le sac a modifier des couleurs !!!");
    }
    // col0, col0a, col0c must be the same
    if (inputs.col0 !== inputs.col0a || inputs.col0 !== inputs.col0c) {
        if(!ILLEGAL_COLORS)alert("L'utilisateur Ambryal a été pris la main dans le sac a modifier des couleurs !!! (col0, col0a, col0c must be the same)");
    }
    // col1, col1a, col1b, col1c, col1d must be the same
    if (inputs.col1 !== inputs.col1a
        || inputs.col1 !== inputs.col1b
        || inputs.col1 !== inputs.col1c
        || inputs.col1 !== inputs.col1d) {
        if(!ILLEGAL_COLORS)alert("L'utilisateur Ambryal a été pris la main dans le sac a modifier des couleurs !!! (col1, col1a, col1b, col1c, col1d must be the same)");

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
var getTempWeapon = void 0;
var getTempWeapon = (brute, modifiers) => {
    if (!modifiers.includes(FightModifier.randomWeapon)) {
        return null;
    }
    // Seeded random number
    var random = new rand_seed(`${brute.id}-randomWeapon-${moment.utc().format('YYYY-MM-DD')}`);
    var weaponIndex = (0, randomBetween)(0, 200, random);
    var unownedWeapons = weapons.filter((weapon) => !brute.weapons.includes(weapon.name));
    if (unownedWeapons.length === 0) {
        return null;
    }
    var tempWeapon = unownedWeapons[weaponIndex % unownedWeapons.length];
    if (!tempWeapon) {
        throw new Error('No temp weapon found');
    }
    return tempWeapon.name;
};
var getTempWeapon = getTempWeapon;

var getTempSkill = void 0;
var unavailableTemporarySkills = [SkillName.backup];
var getTempSkill = (brute, modifiers) => {
    if (!modifiers.includes(FightModifier.randomSkill)) {
        return null;
    }
    // Seeded random number
    var random = new rand_seed(`${brute.id}-randomSkill-${moment.utc().format('YYYY-MM-DD')}`);
    var skillIndex = (0, randomBetween)(0, 200, random);
    var unownedSkills = skills.filter((skill) => !brute.skills.includes(skill.name)
        && !unavailableTemporarySkills.includes(skill.name));
    if (unownedSkills.length === 0) {
        return null;
    }
    var tempSkill = unownedSkills[skillIndex % unownedSkills.length];
    if (!tempSkill) {
        throw new Error('No temp skill found');
    }
    return tempSkill.name;
};
var getTempSkill = getTempSkill;

var DestinyChoiceType = /*exports.*//*$Enums.*/DestinyChoiceType = {
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
        if (skillName === SkillName.regeneration && !brute.eventId) {
            updatedBrute.fightsLeft = (0, getFightsLeft)(updatedBrute, []) + 2;
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

function getFightsLeft(){}
var preventSomeBonuses = (brute, perkType, perkName) => {
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
var FR = {
  "MyBrute": "LaBrute",
  "MyBruteIllustration": "Illustration LaBrute",
  "background": "Arrière-plan",
  "alreadyRegistered": "Déjà inscrit ?",
  "enter!": "Entrer !",
  "cancel": "Annuler",
  "continue": "Continuer",
  "toBeABrute": "ÊTRE UNE BRUTE...",
  "createBrute": "Pour créer ta Brute unique, il suffit de taper un nom. Tu pourras ensuite combattre les autres brutes dans l'arène et recruter des élèves ! Gagne de l'expérience et fais-toi une place dans le classement pour devenir... LA Brute !",
  "orNotToBe": "... OU NE PAS L'ÊTRE",
  "otherGames": "Si toute cette violence sans pitié te tape sur le système, tu peux toujours essayer nos autres jeux rigolos ci-dessous : Jeux de réflexion, jeux de mots, aventure, gestion :",
  "chooseName": "Choisis un nom",
  "arrow": "Flèche",
  "character": "Personnage",
  "changeAppearance": "Changer l'apparence",
  "changeColors": "Changer les couleurs",
  "validate": "Valider",
  "moreGames": "Plus de jeux EternalTwin",
  "myHordes": "MyHordes",
  "myHordes.desc": "MyHordes: Le premier jeu de survie zombie gratuit se déroulant dans un monde hostile peuplé de morts-vivants !",
  "eMush": "eMush",
  "eMush.desc": "eMush: Vous êtes sur le point de vous réveiller à bord du Daedalus avec 15 autres rebelles. Comme vous, ils fuient le Mush, un champignon parasite qui ravage la Terre et menace l'Humanité.",
  "dinorpg": "DinoRPG",
  "dinorpg.desc": "DinoRPG: Raise your dinoz in an extraordinary adventure game!",
  "neoparc": "Neoparc",
  "neoparc.desc": "Neoparc: Combattez d'autres Dinoz et gagnez ainsi petit à petit de l'expérience lors de combats sans merci !",
  "eternalfest": "Eternalfest",
  "eternalfest.desc": "Eternalfest: Plus de 200 niveaux ! Une grande variété d'ennemis très très méchants !",
  "eternalKingdom": "Eternal Kingdom",
  "eternalKingdom.desc": "Eternal Kingdom: Faites prospérer votre capitale. Recrutez des soldats et devenez... Empereur !",
  "directquiz": "Directquiz",
  "directquiz.desc": "Directquiz: Mettez votre culture à rude épreuve dans Direct Quiz, le jeu de quiz le plus déjanté du web !",
  "ePopotamo": "ePopotamo",
  "ePopotamo.desc": "ePopotamo: Le jeu de mots relax jouable en toute situation !",
  "connect": "Se connecter",
  "serverTime": "Heure du serveur",
  "lightMode": "Mode clair",
  "darkMode": "Mode sombre",
  "betaTitle": "Version Bêta",
  "betaDescription": "Ce jeu est toujours en version bêta. Les choses sont susceptibles de changer et des bugs peuvent se produire. Veuillez signaler tout bug que vous trouvez sur notre",
  "discord": "Discord",
  "betaReset": "N'oubliez pas que tout sera réinitialisé à la fin de la bêta.",
  "shadow": "Ombre",
  "log.fight.0": "{{winner}} a écrasé {{loser}}.",
  "log.fight.1": "{{winner}} a remis la pendule de {{loser}} à l'heure.",
  "log.fight.2": "{{winner}} a fait de la ratatouille avec {{loser}}.",
  "log.fight.3": "{{winner}} a vitrifié {{loser}}.",
  "log.fight.4": "{{winner}} a tiré les oreilles de {{loser}}.",
  "log.fight.5": "{{winner}} a sonné les cloches de {{loser}}.",
  "log.fight.6": "{{winner}} a fait tomber {{loser}} dans les pommes.",
  "log.fight.7": "{{winner}} n'a même pas bougé le petit doigt contre {{loser}}.",
  "log.fight.8": "{{winner}} a envoyé {{loser}} aux urgences.",
  "log.fight.9": "{{winner}} a envoyé {{loser}} à l'EHPAD.",
  "log.fight.10": "{{winner}} n'a fait qu'une bouchée de {{loser}}.",
  "log.fight.11": "{{winner}} n'a pas épargné {{loser}}.",
  "log.fight.12": "{{winner}} n'y est pas allé avec le dos de la cuillère contre {{loser}}.",
  "log.fight.13": "{{winner}} n'a pas fait dans la dentelle avec {{loser}}.",
  "log.fight.14": "{{loser}} s'est fait rouler dessus par {{winner}}.",
  "log.fight.15": "{{loser}} n'aurait pas dû croiser le regard de {{winner}}.",
  "log.fight.16": "{{loser}} n'a pas fait le poids face à {{winner}}.",
  "log.fight.17": "{{loser}} a trébuché contre {{winner}}.",
  "log.fight.18": "{{loser}} s'est pris les pieds dans le tapis de {{winner}}.",
  "log.fight.19": "{{loser}} s'est incliné devant {{winner}}.",
  "log.fight.20": "{{loser}} va bien dormir ce soir.",
  "log.fight.21": "{{loser}} n'a pas demandé la monnaie de sa pièce.",
  "log.fight.22": "{{loser}} portera désormais un dentier.",
  "log.fight.23": "{{loser}} aurait dû prendre une assurance.",
  "log.fight.24": "{{loser}} est tombé sur un os.",
  "log.fight.25": "{{loser}} s'est mis le doigt dans l'œil.",
  "log.fight.26": "{{winner}} a survécu à {{loser}}.",
  "log.fight.27": "{{winner}} a aplati {{loser}}.",
  "log.fight.28": "{{winner}} a annulé {{loser}}.",
  "log.fight.29": "{{winner}} a trop salé la soupe de {{loser}}.",
  "log.fight.30": "{{winner}} a piétiné {{loser}}.",
  "log.fight.31": "{{loser}} a choisi le mauvais moment pour embêter {{winner}}.",
  "log.fight.32": "{{loser}} a marché sur les LEGO de {{winner}}.",
  "log.fight.33": "{{winner}} a froissé les plumes de {{loser}}.",
  "log.fight.34": "{{winner}} a dit à {{loser}} que le Père Noël n'existe pas.",
  "log.fight.35": "{{winner}} a mis une flèche dans le genou de {{loser}}.",
  "log.fight.36": "{{winner}} a montré le chemin à {{loser}}.",
  "log.fight.37": "{{loser}} a perdu des dents contre {{winner}}.",
  "log.fight.38": "{{winner}} a mis un bug dans le code de {{loser}}.",
  "log.fight.39": "{{winner}} a brossé {{loser}} à rebrousse-poil.",
  "log.fight.40": "{{winner}} a donné à {{loser}} une leçon d'humilité.",
  "log.fight.41": "{{winner}} a mis une balle dans le camp de {{loser}}.",
  "log.fight.42": "{{winner}} a endormi {{loser}}.",
  "log.fight.43": "{{loser}} a lancé un 1 naturel contre {{winner}}.",
  "log.fight.44": "{{winner}} a tiré le caleçon de {{loser}}.",
  "log.fight.45": "{{winner}} a obligé {{loser}} à se cogner le petit doigt.",
  "log.fight.46": "{{winner}} a créé une entrée rouge dans le journal de combat de {{loser}}.",
  "log.fight.47": "{{winner}} a joué Astronomia pour {{loser}}.",
  "log.child": "Nouvel élève : {{value}} !",
  "log.childup": "Ton élève {{value}} est passé au niveau suivant.",
  "log.up": "{{brute}} a atteint le niveau {{value}}.",
  "log.lvl": "{{brute}} a atteint le rang {{value}}.",
  "log.ascend": "{{brute}} s'est élevé.",
  "log.ascends": "{{brute}} s'est maintenant élevé {{value}} fois.",
  "log.tournament": "Le tournoi du {{date}} a été annulé, retente ta chance !",
  "log.tournamentXp": "Tournois d'hier",
  "log.fight": "Ta brute a combattu {{value}}.",
  "log.win": "Ta brute a écrasé {{value}}.",
  "log.lose": "{{value}} a battu ta brute.",
  "lvl_0": "Légende Brutale",
  "lvl_1": "Dentiste du Chaos",
  "lvl_2": "Biceps de Satan",
  "lvl_3": "Avaleur de Sabres",
  "lvl_4": "Hemogrobil",
  "lvl_5": "Âme de Berserk",
  "lvl_6": "Flamme du Vengeur",
  "lvl_7": "Poing d'acier",
  "lvl_8": "Baffe de Richter",
  "lvl_9": "Arracheur de pansements",
  "lvl_10": "Pichenette du Désert",
  "lvl_11": "Padawan",
  "log.xp": "{{xp}} points d'expérience gagnés.",
  "log.xps": "{{xp}} points d'expérience gagnés.",
  "log.gold": "{{gold}} Or gagné.",
  "log.xpAndGold": "{{xp}} XP + {{gold}} Or gagné.",
  "log.itemAndGold": "{{count}}x {{item}}, {{gold}} Or gagné.",
  "log.bossDefeat": "Vous avez vaincu le Boss!",
  "seeFight": "Cliquez ici pour revoir le combat",
  "master": "Maitre",
  "ranking": "Classement",
  "victories": "Victoires",
  "pupils": "Élèves",
  "weaponsBonuses": "Armes et bonus disponibles en combat",
  "inventory": "Inventaire",
  "refLink": "Donne cette adresse à tes amis ou mets-la sur ton blog, ça te permettra de recruter des élèves et de gagner de l'expérience !",
  "clan": "Clan",
  "joinAClan": "Rejoins un clan !",
  "clansRanking": "Classement des clans",
  "goBackToYourCell": "Retourner à votre cellule",
  "myClan": "Mon clan",
  "forum": "Forum",
  "createAClan": "Créer un clan",
  "points": "Points",
  "members": "Membres",
  "previous": "Précédent",
  "next": "Suivant",
  "chooseClanName": "Choisissez un nom pour votre clan",
  "create": "Créer",
  "clanNameLength": "Le nom de votre clan doit contenir entre 3 et 50 caractères.",
  "clanCreated": "Votre clan a été créé.",
  "brutes": "Brutes",
  "externalRewards": "Récompenses externes",
  "askToJoin": "Demander à rejoindre",
  "confirmJoin": "Voulez-vous vraiment rejoindre ce clan ?",
  "requestSent": "Votre demande a été envoyée.",
  "cancelJoinRequest": "Annuler la demande d'inscription",
  "confirmCancelRequest": "Voulez-vous vraiment annuler votre demande d'inscription ?",
  "requestCanceled": "Votre demande a été annulée.",
  "joinRequests": "Demandes d'inscription",
  "actions": "Actions",
  "accept": "Accepter",
  "reject": "Refuser",
  "acceptJoinRequest": "Accepter la demande d'inscription",
  "confirmAcceptRequest": "Voulez-vous vraiment accepter cette demande d'inscription ?",
  "requestAccepted": "La demande a été acceptée.",
  "rejectJoinRequest": "Refuser la demande d'inscription",
  "confirmRejectRequest": "Voulez-vous vraiment refuser cette demande d'inscription ?",
  "requestRejected": "La demande a été refusée.",
  "removeFromClan": "Retirer du clan",
  "confirmRemoveFromClan": "Voulez-vous vraiment retirer ce membre du clan ?",
  "bruteRemoved": "Le membre a été retiré du clan.",
  "leave": "Quitter",
  "leaveClan": "Quitter le clan",
  "confirmLeaveClan": "Voulez-vous vraiment quitter ce clan ?",
  "clanLeft": "Vous avez quitté le clan.",
  "startThread": "Démarrer un sujet",
  "reply": "Répondre",
  "missingTitle": "Veuillez saisir un titre.",
  "missingContent": "Veuillez saisir un message.",
  "threadCreated": "Le sujet a été créé.",
  "replyPosted": "La réponse a été publiée.",
  "title": "Titre",
  "send": "Envoyer",
  "creator": "Créateur",
  "msg": "Msg.",
  "lastReply": "Dernière réponse",
  "lockThread": "Verrouiller le sujet",
  "confirmLockThread": "Voulez-vous vraiment verrouiller ce sujet ?",
  "threadLocked": "Le sujet a été verrouillé.",
  "first": "Premier",
  "last": "Dernier",
  "noFightsLeft": "Vous n'avez plus de combats aujourd'hui.",
  "challengeBoss": "Affronter le boss",
  "showDamage": "Afficher le détail des dégâts",
  "hideDamage": "Masquer le détail des dégâts",
  "boss": "Boss",
  "clanWar": "Guerre de clan",
  "clanWarsEnabled": "Guerres de clan activées",
  "toggleWar": "Participer aux guerres de clan",
  "elo": "Elo",
  "clanWarHistory": "Historique des guerres du clan",
  "attacker": "Attaquant",
  "attackers": "Attaquants",
  "defender": "Défenseur",
  "defenders": "Défenseurs",
  "W/L": "V/D",
  "clanWar.pending": "En attente",
  "clanWar.ongoing": "En cours",
  "clanWar.waitingForRewards": "En attente de récompenses",
  "clanWar.finished": "Terminée",
  "clanWar.friendly": "Guerre amicale",
  "clanWar.earlyEnd": "Cette guerre a pris fin plus tôt parce que l'un des clans est à court de combattants.",
  "clanWar.earlyEndVictories": "Cette guerre a pris fin plus tôt parce que l'un des clans a atteint le nombre de victoires requis.",
  "confirmFriendlyWar": "Voulez-vous vraiment déclencher une guerre amicale avec ce clan ? Ça vous empêchera de participer à une guerre officielle pendant toute la durée de la guerre amicale.",
  "friendlyWarDeclared": "Une guerre amicale a été déclarée.",
  "warCanceled": "La guerre a été annulée.",
  "warAccepted": "La guerre a été acceptée.",
  "nextFighters": "Prochains combattants",
  "nextFighters.desc": "Vous pouvez sélectionner jusqu'à 7 combattants pour le prochain combat. Si aucun n'est sélectionné, ils seront choisis au hasard. Une fois qu'un combattant est sélectionné, il ne sera pas disponible pour le reste de la guerre.",
  "nextFighters.noFighters": "Votre clan n'a aucun combattant disponible pour le prochain combat. Recrutez-en avant le prochain combat ou vous perdrez la guerre !",
  "breakRoom": "Salle de repos",
  "breakRoom.desc": "Ces combattants se sont déjà battus et sont en train de se reposer. Ils ne seront pas disponibles pour le reste de la guerre.",
  "day": "Jour {{day}}",
  "fights": "Combats",
  "pinThread": "Épingler le sujet",
  "unpinThread": "Désépingler le sujet",
  "deleteThread": "Supprimer le sujet",
  "editThread": "Modifier le sujet",
  "threadPinned": "Le sujet a été épinglé.",
  "threadUnpinned": "Le sujet a été désépinglé.",
  "threadDeleted": "Le sujet a été supprimé.",
  "threadEdited": "Le sujet a été modifié.",
  "pinned": "Épinglé",
  "locked": "Verrouillé",
  "clanMaster": "Maître du Clan",
  "searchByName": "Chercher par nom",
  "setAsClanMaster": "Définir comme maître du clan",
  "setNewMaster": "Définir un nouveau maître",
  "confirmSetNewMaster": "Voulez-vous vraiment définir ce membre comme nouveau maître du clan ?",
  "clanMasterChanged": "Le maître du clan a été changé.",
  "herculeanStrength": "Force herculéenne",
  "herculeanStrength.desc": "Avec ta force, tu es capable de déplacer des montagnes ! Mais pour l'instant, t'as un adversaire à cogner.",
  "herculeanStrength.effect": "",
  "felineAgility": "Agilité du félin",
  "felineAgility.desc": "Tu n'as pas de pelote de laine pour t'amuser, mais tu peux toujours embêter la brute en face.",
  "felineAgility.effect": "",
  "lightningBolt": "Frappe éclair",
  "lightningBolt.desc": "Tu distribues des coups plus vite que ton ombre et souvent dans les dents de ton adversaire",
  "lightningBolt.effect": "",
  "vitality": "Vitalité",
  "vitality.desc": "Ton espérance de vie a augmenté ! Désormais tu tiendras debout plus longtemps dans l'arène.",
  "vitality.effect": "",
  "immortality": "Immortel",
  "immortality.desc": "Ta santé a atteint un niveau inimaginable ! Il est devenu très difficile de te terrasser lors d'un combat !",
  "immortality.effect": "",
  "weaponsMaster": "Maître d'armes",
  "weaponsMaster.desc": "Grâce à ta maîtrise, tu causes plus de dégâts à ton adversaire avec les armes tranchantes.",
  "weaponsMaster.effect": "",
  "martialArts": "Arts martiaux",
  "martialArts.desc": "Les cours de Chuck Norris ont porté leurs fruits ! Maintenant tu mets les pieds où tu veux… et c'est souvent dans la tronche !",
  "martialArts.effect": "",
  "sixthSense": "Sixième sens",
  "sixthSense.desc": "Ta vigilance aiguisée te permet d'anticiper les fourberies de ton adversaire et de frapper avant lui.",
  "sixthSense.effect": "",
  "hostility": "Pugnace",
  "hostility.desc": "Dans l'arène tu n'es vraiment pas ingrat… Quand on te donne un coup, tu le rends aussitôt, et gratuitement !",
  "hostility.effect": "",
  "fistsOfFury": "Tornade de coups",
  "fistsOfFury.desc": "… et tu tapes, tapes, tapes, c'est ta façon d'aimer, ce rythme qui t'entraîne jusqu'au bout de la nuit, éveille en toi le tourbillon d'un vent de foliiiiiie !",
  "fistsOfFury.effect": "",
  "shield": "Bouclier",
  "shield.desc": "Un bouclier. Pour parer les coups… des fois.",
  "shield.effect": "",
  "armor": "Armure",
  "armor.desc": "Ça, c'est une armure. Un truc qu'on met par-dessus son t-shirt pour pas le salir. En même temps, ça permet de mieux résister aux attaques",
  "armor.effect": "",
  "toughenedSkin": "Peau renforcée",
  "toughenedSkin.desc": "A force de se faire taper, on finit par évoluer. Ta brute possède maintenant une peau plus résistante.",
  "toughenedSkin.effect": "",
  "untouchable": "Intouchable",
  "untouchable.desc": "Tu évites les coups plus facilement. C'est très énervant, surtout pour ton adversaire !",
  "untouchable.effect": "",
  "sabotage": "Vandalisme",
  "sabotage.desc": "Certaines brutes font du vandalisme dans la rue, mais toi tu préfères vandaliser ton adversaire. Chaque coup peut détruire une de ses armes.",
  "sabotage.effect": "90% de chances de détruire une arme en réserve à chaque coup qui blesse",
  "shock": "Choc",
  "shock.desc": "Tes coups sont tellement surprenants que ton adversaire en laisse tomber son arme… Profites-en pour leur en montrer d'autres !",
  "shock.effect": "",
  "bodybuilder": "Gros-bras",
  "bodybuilder.desc": "Grâce à tes gros bras, tu manipules les armes lourdes aussi facilement qu'un micro. Tu es le Philippe Risoli de la massue !",
  "bodybuilder.effect": "",
  "relentless": "Implacable",
  "relentless.desc": "Lorsque tu colles des baffes, elles arrivent toujours à destination. Personne ne peut les arrêter. En tout cas pas ton adversaire !",
  "relentless.effect": "",
  "survival": "Survie",
  "survival.desc": "Les années de lutte t'ont rendu increvable. Les coups mortels te laissent 1 point de vie au lieu de t'abattre.",
  "survival.effect": "Le premier coup t'amenant à 0 PV ou moins te laisse à 1 PV.",
  "thief": "Voleur",
  "thief.desc": "Cette compétence te permet d'emprunter discrètement l'arme de ton adversaire et de l'essayer sur eux.",
  "thief.effect": "Action (x{{uses}}) Ta brute prend l'arme de son adversaire",
  "fierceBrute": "Brute féroce",
  "fierceBrute.desc": "Maintenant, t'es une vraie brute. Encore plus qu'avant. Tu peux effectuer une charge puissante pendant un combat.",
  "fierceBrute.effect": "Action (x{{uses}}) Ta brute double les dégâts du prochain assaut.",
  "tragicPotion": "Potion tragique",
  "tragicPotion.desc": "Boooooire un p'tit coup, c'est agréaaableuuu ! Oui, mais pas pour tout le monde…. Ce jus de pêche restaure une partie de ton énergie au cours du combat.",
  "tragicPotion.effect": "Action (x{{uses}}) Ta brute récupère 25 à 50 % de ses PV. Soigne aussi le poison du Cuisinier.",
  "net": "Filet",
  "net.desc": "Un filet classique. Pas aussi cool que la toile de Spiderman, mais faudra faire avec… Ton adversaire sera immobilisé jusqu'à ce que tu leur portes un coup.",
  "net.effect": "Action (x{{uses}}) Le filet empêche la cible de bouger/esquiver/parer jusqu'au prochain coup reçu",
  "bomb": "Bombe",
  "bomb.desc": "Un peu comme une bombe à eau, mais en plus méchant !",
  "bomb.effect": "Action (x{{uses}}) Entre 15 et 25 dégâts sur tous les adversaires.",
  "hammer": "Marteau-pilon",
  "hammer.desc": "Une technique de catch qui consiste à sauter avec l'adversaire et retomber dessus.",
  "hammer.effect": "Action (x{{uses}}) Ta brute inflige de gros dégâts qui dépendent de la force de ton adversaire.",
  "cryOfTheDamned": "Cri-qui-poutre",
  "cryOfTheDamned.desc": "Des bêtes féroces, ça ? Pfffff… Il suffit de crier un peu pour les faire fuir !",
  "cryOfTheDamned.effect": "Action (x{{uses}}) Cri repoussant les animaux (50% de réussite)",
  "hypnosis": "Hypnose",
  "hypnosis.desc": "Lorsqu'il s'agit de faire du charme aux animaux domestiques, personne ne t'égale. Ils te suivent au doigt et à l'œil.",
  "hypnosis.effect": "Action (x{{uses}}) Ta brute prend le contrôle des animaux de ton adversaire.",
  "flashFlood": "Déluge",
  "flashFlood.desc": "Puisque se balader avec 100 kilos d'armes t'est devenu insupportable, tu as trouvé un astucieux stratagème pour voyager léger.",
  "flashFlood.effect": "Action (x{{uses}}) Votre Brute inflige instantanément des dégâts massifs à son adversaire avec 3 armes.",
  "leadSkeleton": "Squelette Plomb",
  "leadSkeleton.desc": "Pas toujours pratique pour se déplacer, le plombage intégral de la cage thoracique permet néanmoins de réduire considérablement les dégâts des armes contondantes.",
  "leadSkeleton.effect": "Les armes contondantes t'infligent 30% de dégâts de moins",
  "balletShoes": "Ballerines",
  "balletShoes.desc": "La danse des cygnes n'a aucun secret pour toi, impossible que ton adversaire t'atteigne, enfin, tant qu'ils ne pigent pas le truc !",
  "balletShoes.effect": "Le premier coup de chaque combat est automatiquement esquivé",
  "determination": "Persévérant",
  "determination.desc": "Rien ne te décourage, chaque échec te rend plus fort. Lorsqu'un coup ne porte pas, tu en lances un autre !",
  "determination.effect": "Tant que le coup ne blesse pas, 70% de chance d'attaquer à nouveau.",
  "firstStrike": "Sang-Chaud",
  "firstStrike.desc": "Tes adversaires entrent dans l'arène, mais toi tu préfères rentrer dans tes adversaires, tu es toujours le premier à frapper !",
  "firstStrike.effect": "",
  "resistant": "Increvable",
  "resistant.desc": "Pour te mettre au tapis, il faut s'y prendre à plusieurs fois… C'est cinq beignes minimum, sinon rien",
  "resistant.effect": "Chaque coup reçu ne peut pas te faire perdre plus de 20% de ta barre.",
  "counterAttack": "Contre",
  "counterAttack.desc": "La meilleure attaque ? C'est la défense bien entendu ! Pour chaque coup paré, tu ripostes automatiquement.",
  "counterAttack.effect": "",
  "ironHead": "Tête de fer",
  "ironHead.desc": "Lorsque tu prends un coup, c'est ton adversaire qui doit résister à l'impact !",
  "ironHead.effect": "Pour chaque coup te ciblant, ton adversaire a 50% de chance de perdre son arme.",
  "reconnaissance": "Méditation",
  "reconnaissance.desc": "Pour analyser les failles de ton adversaire, tu es prêt à prendre ton temps, mais lorsque tu démarres, rien ne t'arrête.",
  "reconnaissance.effect": "",
  "tamer": "Trappeur",
  "tamer.desc": "Rien ne se perd, tout se transforme. Tu consommes toutes les viandes mortes de l'arène.",
  "tamer.effect": "Action (x{{uses}}) Ta brute récupère entre 20 et 50% de sa vie selon la qualité de la viande.",
  "regeneration": "Régénération",
  "regeneration.desc": "Grâce à ta capacité de cicatrisation hors normes, tu ne rates jamais un combat !",
  "regeneration.effect": "Tu peux faire deux combats de plus par jour.",
  "chef": "Cuisinier",
  "chef.desc": "Toutes les brutes le savent, le gros du combat se joue avant l'arène. Le plus souvent du côté de la cantine !",
  "chef.effect": "Tes adversaires subissent 2% de dégâts à la fin de chacune de leurs actions.",
  "spy": "Espion",
  "spy.desc": "Vous êtes devenu un maître dans l'art du détournement d'attention. Vos adversaires ne sauront jamais avec \"quoi\" vous les avez frappés.",
  "spy.effect": "Échangez une version légèrement endommagée de vos armes avec votre adversaire (Adversaire -25% de dégâts d'arme)",
  "saboteur": "Saboteur",
  "saboteur.desc": "Du marteau en mousse à l'épée en plastique, tu es le roi de l'imitation, tes adversaires n'y voient que du feu.",
  "saboteur.effect": "Sabote une arme de ton adversaire (initiative adverse -100 lorsqu'elle est utilisée)",
  "backup": "Renforts",
  "backup.desc": "Parce que l'amitié, c'est le partage, tu as appris à partager tes baffes pour que les adversaires de tes collègues profitent aussi un peu !",
  "backup.effect": "Ta brute peut intervenir dans les combats de ses collègues de niveau supérieur.",
  "hideaway": "Planqué",
  "hideaway.desc": "Tu n'as vraiment pas envie de t'approcher de ton adversaire, tu préfères rester à distance et leur envoyer tout ton arsenal à la figure.",
  "hideaway.effect": "Chances d'envoyer son arme : 50%. Les armes ne disparaissent pas après un lancer",
  "monk": "Moine combattant",
  "monk.desc": "Tu peux voir les coups venir avant que ton adversaire ait le temps d'y penser si tu restes parfaitement calme.",
  "monk.effect": "",
  "vampirism": "Vampirisme",
  "vampirism.desc": "Dracula peut se reposer paisiblement, parce qu’en son absence, c’est toi qui prends le relais !",
  "vampirism.effect": "Action (x{{uses}}) Inflige 25% de vos points de vie manquants et vous soigne jusqu'à deux fois ce montant.",
  "chaining": "Enchaînement",
  "chaining.desc": "Ton dada c’est de faire sonner les cloches ? Ce combo est fait pour toi !",
  "chaining.effect": "Chaque 3e coup consécutif de mêlée étourdira ton adversaire.",
  "haste": "Célérité",
  "haste.desc": "Tu as toujours rêvé de te déplacer aussi vite qu’un ninja ? Ça tombe bien, c’est le moment !",
  "haste.effect": "Action (x{{uses}}) Ta brute se précipite à travers son adversaire, infligeant des dégâts supplémentaires qui augmentent avec sa vitesse.",
  "treat": "Friandise",
  "treat.desc": "Se battre, ça creuse. C’est pourquoi j’emporte toujours une friandise pour remettre mes familiers d’aplomb !",
  "treat.effect": "Action (x{{uses}}) Ta brute soigne l'un de ses familiers à hauteur de 50% de leur santé, les rend immunisés à la prochaine attaque et les force à attaquer.",
  "repulse": "Repoussoir",
  "repulse.desc": "Des étoiles ninja se dirigent vers vous ? Aucun problème ! Canalisez le héros de film d'arts martiaux qui sommeille en vous et renvoyez les armes lancées comme des mouches.",
  "repulse.effect": "",
  "fan": "Éventail",
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
  "sword": "Épée",
  "level": "Niveau",
  "healthPoints": "points de vie",
  "endurance": "Endurance",
  "multiplier": "Multiplicateur",
  "strength": "Force",
  "Str": "F",
  "agility": "Agilité",
  "Agi": "A",
  "speed": "Rapidité",
  "Spe": "R",
  "HP": "PV",
  "dog1": "Chien",
  "dog2": "Chien",
  "dog3": "Chien",
  "panther": "Loup",
  "bear": "Ours",
  "stat": "Stat",
  "value": "Valeur",
  "types": "Types",
  "fast": "rapide",
  "sharp": "tranchant",
  "heavy": "lourd",
  "long": "long",
  "thrown": "distance",
  "blunt": "contondant",
  "odds": "Obtention",
  "enduranceMalus": "Malus d'endurance",
  "hitSpeed": "Vitesse de frappe",
  "initiative": "Initiative",
  "counter": "Contre",
  "reversal": "Riposte",
  "evasion": "Esquive",
  "dexterity": "Dextérité",
  "block": "Parade",
  "accuracy": "Précision",
  "disarm": "Désarmement",
  "combo": "Combo",
  "deflect": "Renvoi",
  "damage": "Dégâts",
  "drawChance": "Chance d'utilisation",
  "reach": "Portée",
  "account": "Compte",
  "login": "Log in",
  "loginError": "Erreur de connexion",
  "logout": "Log out",
  "settings": "Settings",
  "logoutSuccess": "Déconnexion réussie",
  "loginSuccess": "Connexion réussie",
  "invalidName": "Nom invalide. Les caractères autorisés sont a-z, A-Z, 0-9, _ et -. Il doit faire entre 3 et 16 caractères.",
  "nameUnavailable": "Nom indisponible",
  "pleaseLogin": "Veuillez vous connecter pour créer une brute",
  "previousBrute": "Brute précédente",
  "nextBrute": "Brute suivante",
  "hall": "Hall",
  "userProfile": "Profil de {{user}}",
  "profile": "Profile",
  "wiki": "Wiki",
  "feed": "Feed",
  "notifications": "Notifications",
  "allRead": "All read",
  "newBrute": "Nouvelle brute",
  "gold": "Or",
  "sacrifice": "Sacrifier",
  "sacrificeConfirm": "Voulez-vous vraiment sacrifier votre brute pour {{gold}} Or ? Cette action est irréversible.",
  "sacrificeSuccess": "Sacrifice réussi, vous avez gagné {{gold}} Or",
  "reset": "Réinitialiser",
  "resetConfirm": "Êtes-vous sûr de vouloir réinitialiser votre brute au niveau 1 ? Cela vous coûtera {{gold}} Or. Cette action ne peut pas être annulée.",
  "resetEventConfirm": "Êtes-vous sûr de vouloir réinitialiser votre brute au niveau 1 ? Vous obtiendrez assez d'expérience pour revenir à votre niveau actuel. Cela vous coûtera {{gold}} Or. Cette action ne peut pas être annulée.",
  "resetSuccess": "Réinitialisation réussie",
  "resetVisuals": "Changer d'apparence",
  "resetVisualsDescription": "Vous pouvez changer l'apparence de votre brute ici. Attention, cette action ne peut pas être annulée.",
  "resetVisualsConfirm": "Êtes-vous sûr de vouloir réinitialiser l'apparence de votre brute ? Cette action ne peut pas être annulée.",
  "resetVisualsSuccess": "Apparence réinitialisée avec succès",
  "callToFight": "Si tu as envie de te défouler sur quelqu'un, fait le ici ! Il y a plein d'autres Brutes dans l'arène qui ne demandent qu'à échanger quelques gnons !",
  "arena": "Arène",
  "arena.search": "GO !",
  "fightsLeft": "Il te reste {{value}} combats aujourd'hui.",
  "fightLeft": "Il te reste un combat aujourd'hui.",
  "levelUp": "Nouveau niveau !",
  "tournament": "Tournoi",
  "tournamentOf": "Tournoi du",
  "globalTournament": "Tournoi global",
  "globalTournamentOf": "Tournoi global du",
  "automaticallyQualified": "Qualifié d'office",
  "eliminatedBy": "Ta brute a été éliminée par {{value}}. Quelle humiliation !",
  "nextOpponent": "Ton prochain adversaire est",
  "comeBackInOneHour": "Reviens dans une heure pour le prochain tour.",
  "setAsWatched": "Marquer comme vu",
  "rankUp": "Monter de rang",
  "tournamentVictoriesUntilRankUp": "Vous avez besoin de {{value}} victoires de tournoi quotidien pour monter de rang.",
  "tournamentVictoriesUntilAscend": "Vous avez besoin de {{value}} victoires de tournoi quotidien pour vous élever.",
  "rankUpConfirm": "Voulez-vous vraiment monter de rang ? Votre brute repassera au niveau 1 avec la même destinée.",
  "ascendConfirmShort": "Voulez-vous vraiment vous élever ?",
  "ascendConfirm": "Votre brute retournera au niveau 1 et gardera son rang, les récompenses de ses ascensions précédentes ainsi que l'attribut sélectionné, qui sera remplacé par des statistiques partout dans sa destinée.",
  "finals": "Finale",
  "semiFinals": "Demi-finale",
  "quarterFinals": "Quart de finale",
  "round": "Tour {{value}}",
  "bruteRegistered": "Brute inscrite.",
  "bruteNotRegistered": "Brute non inscrite.",
  "youCanRegisterYourBrute": "Tu peux inscrire ta brute pour le prochain tournoi.",
  "arena.search.notFound": "Aucune brute ne correspond à ta recherche.",
  "arena.search.noSelf": "Tu ne peux pas te défouler sur toi-même.",
  "arena.search.atLeastThreeCharacters": "Tu dois saisir au moins 3 caractères.",
  "en-version": "English version",
  "fr-version": "Version française",
  "es-version": "Versión española",
  "de-version": "Deutsche Version",
  "ru-version": "Русская версия",
  "pt-version": "Versão portuguesa",
  "newLevelFor": "Niveau supplémentaire pour",
  "reached": "a atteint le",
  "levelLower": "niveau",
  "chooseOneOfTheFollowingBonuses": "Choisissez l'un des avantages suivants",
  "newWeapon": "Nouvelle arme",
  "newSkill": "Nouvelle compétence",
  "newPet": "Nouveau familier",
  "in": "en",
  "choiceBackground": "Arrière-plan du choix",
  "bruteIsResting": "{{brute}} se repose.",
  "newFightsTomorrow": "{{amount}} nouveaux combats dès demain !",
  "bruteIsPreparing": "{{brute}} se prépare.",
  "comeBackInAFew": "Revenez dans quelques minutes !",
  "youHaveXFightsLeft": "Il te reste {{value}} combats aujourd'hui !",
  "youHaveOneFightLeft": "Il te reste un combat aujourd'hui !",
  "selectedOpponents": "Bienvenue dans l'arène ! J'ai sélectionné quelques adversaires à ta taille. Choisis-en un, et on commence le combat !",
  "backToCell": "Retour en cellule",
  "dareChallenge": "Vous avez osé défier {{value}} !",
  "startFight": "Lancer le combat",
  "fight.discoverGames": "Découvrez nos autres jeux",
  "fight.step.saboteur": "{{weapon}} était saboté !",
  "fight.step.leave": "{{name}} a pris la fuite !",
  "fight.step.arrive": "{{name}} est arrivé !",
  "fight.step.trash": "{{brute}} a jeté {{name}}.",
  "fight.step.steal": "{{brute}} a volé {{name}} de {{target}}.",
  "fight.step.trap": "{{brute}} a jeté un filet sur {{target}}.",
  "fight.step.heal": "{{brute}} s'est soigné de {{amount}} PV.",
  "fight.step.resist": "{{brute}} a résisté et réduit les dégâts.",
  "fight.step.survive": "{{brute}} a survécu à 1PV, la chance !",
  "fight.step.hit": "{{fighter}} a infligé {{damage}} dégâts à {{target}}.",
  "fight.step.hitWith": "{{fighter}} a infligé {{damage}} dégâts à {{target}} avec {{weapon}}.",
  "fight.step.bomb": "{{fighter}} a infligé {{damage}} dégâts avec une bombe.",
  "fight.step.hammer": "{{brute}} a infligé {{damage}} dégâts à {{target}} avec une technique de catch.",
  "fight.step.flashFlood": "{{brute}} a infligé {{damage}} dégâts à {{target}} en lui jetant violemment {{weapon}}.",
  "fight.step.poison": "{{brute}} a infligé {{damage}} dégâts de poison à {{target}}.",
  "fight.step.hypnotise": "{{brute}} a hypnotisé les familiers de son adversaire.",
  "fight.step.moveTo": "{{fighter}} s'est déplacé au contact de {{target}}.",
  "fight.step.eat": "{{brute}} a mangé {{target}} et a récupéré {{heal}}PV.",
  "fight.step.moveBack": "{{fighter}} est revenu à sa position.",
  "fight.step.equip": "{{brute}} s'est équipé de {{name}}.",
  "fight.step.attemptHit": "{{fighter}} a tenté d'attaquer {{target}}.",
  "fight.step.block": "{{fighter}} a bloqué l'attaque.",
  "fight.step.evade": "{{fighter}} a esquivé l'attaque.",
  "fight.step.break": "{{fighter}} a brisé le bouclier de {{opponent}}.",
  "fight.step.sabotage": "{{fighter}} a fait tomber {{weapon}} de {{opponent}}.",
  "fight.step.disarm": "{{fighter}} a fait tomber {{weapon}} de {{opponent}}.",
  "fight.step.death": "{{fighter}} a succombé à ses blessures !",
  "fight.step.throw": "{{fighter}} a lancé {{weapon}} sur {{opponent}}.",
  "fight.step.end": "{{winner}} a gagné le combat contre {{loser}}!",
  "fight.step.counter": "{{fighter}} a contré {{opponent}}.",
  "fight.step.skillExpire": "{{skill}} de {{brute}} a expiré.",
  "fight.step.skillActivate": "{{brute}} a utilisé {{skill}}.",
  "fight.step.spy": "{{brute}} a échangé ses armes avec {{opponent}}.",
  "fight.step.vampirism": "{{brute}} a sucé le sang de {{opponent}}, infligeant {{damage}} dégâts et récupérant {{heal}}PV.",
  "fight.step.stun": "{{brute}} a été étourdi.",
  "fight.step.haste": "{{brute}} s'est précipité sur {{opponent}} et lui a infligé {{damage}} dégâts.",
  "fight.step.treat": "{{brute}} a donné une friandise à son familier {{target}} et l'a soigné de {{heal}}PV.",
  "fight.wonTheFight": "{{brute}} a gagné le match",
  "fight.play": "Jouer",
  "fight.pause": "Pause",
  "fight.favorite": "Ajouter aux favoris",
  "fight.unfavorite": "Enlever des favoris",
  "fight.favoriteAdded": "Favori ajouté",
  "fight.favoriteRemoved": "Favori supprimé",
  "fight.toggleLogs": "Afficher/masquer les logs",
  "bruteCell": "Cellule de {{name}}",
  "experience": "Expérience",
  "brute": "Brute",
  "destinyOf": "Destinée de",
  "adminPanel": "Panneau d'administration",
  "disableSound": "Désactiver le son",
  "enableSound": "Activer le son",
  "disableBackgroundMusic": "Désactiver la musique de fond",
  "enableBackgroundMusic": "Activer la musique de fond",
  "tournaments": "Tournois",
  "tournamentHistory": "Historique des tournois",
  "date": "Date",
  "dailyTournament": "Tournoi quotidien",
  "achievements": "Succès",
  "achievements.wins": "Combats gagnés",
  "achievements.wins.description": "Combats gagnés.",
  "achievements.defeats": "Combats perdus",
  "achievements.defeats.description": "Combats perdus.",
  "achievements.flawless": "Perfection",
  "achievements.flawless.description": "Combats gagnés sans subir de dégâts.",
  "achievements.winWith1HP": "Survivant",
  "achievements.winWith1HP.description": "Combats gagnés avec 1PV restant.",
  "achievements.steal2Weapons": "Vol de 2 armes",
  "achievements.steal2Weapons.description": "Combats où vous avez volé 2 armes.",
  "achievements.singleHitWin": "Coup fatal",
  "achievements.singleHitWin.description": "Combats gagnés en un seul coup.",
  "achievements.combo3": "Combo 3",
  "achievements.combo3.description": "Combos de 3 coups effectués par une de vos brutes.",
  "achievements.combo4": "Combo 4",
  "achievements.combo4.description": "Combos de 4 coups effectués par une de vos brutes.",
  "achievements.combo5": "Combo 5",
  "achievements.combo5.description": "Combos de 5 coups effectués par une de vos brutes.",
  "achievements.counter5": "5 Contres",
  "achievements.counter5.description": "Contrez 5 fois en un seul combat.",
  "achievements.evade10": "10 Esquives",
  "achievements.evade10.description": "Esquivez 10 fois en un seul combat.",
  "achievements.block25": "25 Parades",
  "achievements.block25.description": "Parez 25 coups en un seul combat.",
  "achievements.counter4b2b": "Cocococontre attaque !",
  "achievements.counter4b2b.description": "Votre brute a contre-attaqué 4 fois de suite.",
  "achievements.reversal4b2b": "Ripopopoposte !",
  "achievements.reversal4b2b.description": "Votre brute a fait une riposte 4 fois de suite.",
  "achievements.block4b2b": "blobloblobloc !",
  "achievements.block4b2b.description": "Votre brute a bloqué 4 fois de suite.",
  "achievements.evade4b2b": "Esquiquiquiquive !",
  "achievements.evade4b2b.description": "Votre brute a esquivé 4 fois de suite.",
  "achievements.throw10b2b": "10 Lancers consécutifs",
  "achievements.throw10b2b.description": "Votre brute a lancé son arme 10 fois de suite.",
  "achievements.disarm4": "Désarmeur",
  "achievements.disarm4.description": "Votre brute a fait tomber 4 armes de son adversaire en un seul combat.",
  "achievements.disarm8": "LE désarmeur",
  "achievements.disarm8.description": "Votre brute a désarmé son adversaire 8 fois en un seul combat.",
  "achievements.damage50once": "50 dégâts",
  "achievements.damage50once.description": "Votre brute a infligé 50 points de dégâts en un seul coup.",
  "achievements.damage100once": "100 dégâts",
  "achievements.damage100once.description": "Votre brute a infligé 100 points de dégâts en un seul coup.",
  "achievements.hit20times": "20 coups",
  "achievements.hit20times.description": "Combats où votre brute a attaqué 20 fois.",
  "achievements.kill3pets": "3 familiers tués",
  "achievements.kill3pets.description": "3 familiers tués dans un seul combat.",
  "achievements.maxDamage": "Dégâts maximum",
  "achievements.maxDamage.description": "Dégâts maximum infligés en un seul coup.",
  "achievements.hpHealed": "PV guéris",
  "achievements.hpHealed.description": "Total des PV soignés.",
  "achievements.use10skills": "10 compétences",
  "achievements.use10skills.description": "Combats où votre brute a utilisé 10 compétences.",
  "achievements.saboteur": "Armes sabotées",
  "achievements.saboteur.description": "Nombre d'armes sabotées.",
  "achievements.dog": "Chien",
  "achievements.dog.description": "Chiens débloqués.",
  "achievements.panther": "Loup",
  "achievements.panther.description": "Loups débloqués.",
  "achievements.bear": "Ours",
  "achievements.bear.description": "Ours débloqués.",
  "achievements.panther_bear": "Ursoloup",
  "achievements.panther_bear.description": "Loup et ours débloqués sur une même brute.",
  "achievements.felAg_fistsOfF": "Combo gagnant",
  "achievements.felAg_fistsOfF.description": "Brutes avec les compétences Agilité du Félin et Tornade de coups.",
  "achievements.felAg_fistsOfF_untouch_relentless": "Scrum master",
  "achievements.felAg_fistsOfF_untouch_relentless.description": "Brutes avec les compétences Agilité du Félin, Tornade de coups, Intouchable et Implacable.",
  "achievements.vita_armor_toughened": "Panzer",
  "achievements.vita_armor_toughened.description": "Brutes avec les compétences Vitalité, Armure et Peau renforcée.",
  "achievements.herculStr_hammer_fierceBrute": "Nucléaire",
  "achievements.herculStr_hammer_fierceBrute.description": "Brutes avec les compétences Force Herculéenne, Marteau-Pilon et Brute Féroce.",
  "achievements.shock": "Choc",
  "achievements.shock.description": "Brutes avec la compétence Choc.",
  "achievements.balletShoes_survival": "Ponctuation",
  "achievements.balletShoes_survival.description": "Brutes avec les compétences Ballerines et Survie.",
  "achievements.cryOfTheDamned_hypnosis": "Redondant",
  "achievements.cryOfTheDamned_hypnosis.description": "Brutes avec les compétences Cri-qui-poutre et Hypnose.",
  "achievements.shield_counterAttack": "Trop fort",
  "achievements.shield_counterAttack.description": "Brutes avec les compétences Bouclier et Contre.",
  "achievements.reconnaissance_monk": "En retard",
  "achievements.reconnaissance_monk.description": "Brutes avec les compétences Méditation et Moine combattant.",
  "achievements.immortality": "Fontaine de jouvence",
  "achievements.immortality.description": "Brutes avec la compétence Immortel.",
  "achievements.doubleBoost": "Double boost",
  "achievements.doubleBoost.description": "Brutes avec deux compétences qui augmentent des statistiques.",
  "achievements.tripleBoost": "Hat trick",
  "achievements.tripleBoost.description": "Brutes avec trois compétences qui augmentent des statistiques.",
  "achievements.quadrupleBoost": "4 roues motrices",
  "achievements.quadrupleBoost.description": "Brutes avec quatre compétences qui augmentent des statistiques.",
  "achievements.regeneration_potion": "Médecin",
  "achievements.regeneration_potion.description": "Brutes avec les compétences Régénération et Potion tragique.",
  "achievements.bear_tamer": "Gros appétit",
  "achievements.bear_tamer.description": "Brutes avec un ours et la compétence Trappeur.",
  "achievements.tripleDogs": "Nos meilleurs amis",
  "achievements.tripleDogs.description": "Brutes avec trois chiens.",
  "achievements.fiveWeapons": "Jusqu'aux dents",
  "achievements.fiveWeapons.description": "Brutes avec cinq armes.",
  "achievements.tenWeapons": "Toujours plus",
  "achievements.tenWeapons.description": "Brutes avec dix armes.",
  "achievements.fifteenWeapons": "Porc-épic",
  "achievements.fifteenWeapons.description": "Brutes avec quinze armes.",
  "achievements.twentyWeapons": "Collectionneur",
  "achievements.twentyWeapons.description": "Brutes avec vingt armes.",
  "achievements.twentyThreeWeapons": "Fétichiste des armes",
  "achievements.twentyThreeWeapons.description": "Brutes avec vingt-trois armes.",
  "achievements.monk_sixthSense_whip": "Vraiment intouchable",
  "achievements.monk_sixthSense_whip.description": "Brutes avec les compétences Moine combattant, Sixième sens et le Fouet.",
  "achievements.weaponsMaster_sharp_bodybuilder_heavy": "Polymath",
  "achievements.weaponsMaster_sharp_bodybuilder_heavy.description": "Brutes avec les compétences Maître des armes, Gros-bras et au moins une arme tranchante et lourde.",
  "achievements.hostility_counterWeapon": "Loi du talion",
  "achievements.hostility_counterWeapon.description": "Brutes avec la compétence Pugnace et une arme qui riposte facilement.",
  "achievements.flashFlood_twelveWeapons": "Uzi",
  "achievements.flashFlood_twelveWeapons.description": "Brutes avec les compétences Déluge et douze armes.",
  "achievements.lightningBolt_firstStrike": "Pressé",
  "achievements.lightningBolt_firstStrike.description": "Brutes avec les compétences Frappe éclair et Sang chaud.",
  "achievements.herculeanStrength": "Force herculéenne",
  "achievements.herculeanStrength.description": "Brutes avec la compétence Force herculéenne.",
  "achievements.felineAgility": "Agilité du félin",
  "achievements.felineAgility.description": "Brutes avec la compétence Agilité du félin.",
  "achievements.lightningBolt": "Frappe éclair",
  "achievements.lightningBolt.description": "Brutes avec la compétence Frappe éclair.",
  "achievements.vitality": "Vitalité",
  "achievements.vitality.description": "Brutes avec la compétence Vitalité.",
  "achievements.potion_chef": "Trop de Sel",
  "achievements.potion_chef.description": "Brutes avec les compétences Potion tragique et Cuisinier.",
  "achievements.tamer_net": "Chasseur",
  "achievements.tamer_net.description": "Brutes avec les compétences Trappeur et Filet.",
  "achievements.untouchable_balletShoes": "Danseuse",
  "achievements.untouchable_balletShoes.description": "Brutes avec les compétences Intouchable et Ballerines.",
  "achievements.survival_resistant": "Éternel",
  "achievements.survival_resistant.description": "Brutes avec les compétences Survie et Increvable.",
  "achievements.hideaway_spy": "Discrétion infinie",
  "achievements.hideaway_spy.description": "Brutes avec les compétences Planqué et Espion.",
  "achievements.weaponsFast3": "Sonic",
  "achievements.weaponsFast3.description": "Brutes avec trois armes rapides.",
  "achievements.weaponsSharp3": "Coupe-Coupe",
  "achievements.weaponsSharp3.description": "Brutes avec trois armes tranchantes.",
  "achievements.weaponsHeavy3": "Tu as pris du poids non ?",
  "achievements.weaponsHeavy3.description": "Brutes avec trois armes lourdes.",
  "achievements.weaponsLong3": "C'est pas la taille qui compte ?",
  "achievements.weaponsLong3.description": "Brutes avec trois armes longues.",
  "achievements.weaponsThrown3": "Ne m'approche pas",
  "achievements.weaponsThrown3.description": "Brutes avec trois armes de jet.",
  "achievements.weaponsBlunt3": "Je suis cont-ont-ont-ant",
  "achievements.weaponsBlunt3.description": "Brutes avec trois armes contondantes.",
  "achievements.thor": "Thor",
  "achievements.thor.description": "Brute avec un marteau et la compétence Planqué.",
  "achievements.deflector": "Déflecteur",
  "achievements.deflector.description": "Brutes avec la compétence Repoussoir et deux armes qui renvoient facilement.",
  "achievements.allFastWeapons": "Sonic",
  "achievements.allFastWeapons.description": "Brutes avec toutes les armes rapides.",
  "achievements.allSharpWeapons": "Coupe-Coupe",
  "achievements.allSharpWeapons.description": "Brutes avec toutes les armes tranchantes.",
  "achievements.allHeavyWeapons": "Tu as pris du poids non ?",
  "achievements.allHeavyWeapons.description": "Brutes avec toutes les armes lourdes.",
  "achievements.allLongWeapons": "C'est pas la taille qui compte ?",
  "achievements.allLongWeapons.description": "Brutes avec toutes les armes longues.",
  "achievements.allThrownWeapons": "Ne m'approche pas",
  "achievements.allThrownWeapons.description": "Brutes avec toutes les armes à distance.",
  "achievements.allBluntWeapons": "Masse-toc",
  "achievements.allBluntWeapons.description": "Brutes avec toutes les armes contondantes.",
  "achievements.agility50": "50 Agilité",
  "achievements.agility50.description": "Brutes avec 50 points d'agilité.",
  "achievements.agility100": "100 Agilité",
  "achievements.agility100.description": "Brutes avec 100 points d'agilité.",
  "achievements.speed50": "50 Rapidité",
  "achievements.speed50.description": "Brutes avec 50 points de rapidité.",
  "achievements.speed100": "100 Rapidité",
  "achievements.speed100.description": "Brutes avec 100 points de rapidité.",
  "achievements.strength50": "50 Force",
  "achievements.strength50.description": "Brutes avec 50 points de force.",
  "achievements.strength100": "100 Force",
  "achievements.strength100.description": "Brutes avec 100 points de force.",
  "achievements.hp300": "300 PV",
  "achievements.hp300.description": "Brutes avec 300 points de vie.",
  "achievements.hp600": "600 PV",
  "achievements.hp600.description": "Brutes avec 600 PV.",
  "achievements.maxLevel": "Niveau maximum",
  "achievements.maxLevel.description": "Niveau maximum d'une brute.",
  "achievements.allAchievements": "Tous les succès",
  "achievements.allAchievements.description": "Tous les succès débloqués.",
  "achievements.winTournamentAs20": "Bon élève",
  "achievements.winTournamentAs20.description": "Gagnez un tournoi avec une Brute de niveau 20 ou moins.",
  "achievements.winTournamentAs15": "Prodige",
  "achievements.winTournamentAs15.description": "Gagnez un tournoi avec une Brute de niveau 15 ou moins.",
  "achievements.looseAgainst2": "Mauvais jour",
  "achievements.looseAgainst2.description": "Perdez un combat contre une brute dont le niveau est deux fois inférieur au vôtre.",
  "achievements.looseAgainst3": "La faute à pas de chance",
  "achievements.looseAgainst3.description": "Perdez un combat contre une brute dont le niveau est trois fois inférieur au vôtre.",
  "achievements.looseAgainst4": "Peau de banane",
  "achievements.looseAgainst4.description": "Perdez un combat contre une brute dont le niveau est quatre fois inférieur au vôtre.",
  "achievements.winAgainst2": "Bon jour",
  "achievements.winAgainst2.description": "Gagnez un combat contre une brute dont le niveau est deux fois supérieur au vôtre.",
  "achievements.winAgainst3": "Place aux jeunes",
  "achievements.winAgainst3.description": "Gagnez un combat contre une brute dont le niveau est trois fois supérieur au vôtre.",
  "achievements.winAgainst4": "Future légende",
  "achievements.winAgainst4.description": "Gagnez un combat contre une brute dont le niveau est quatre fois supérieur au vôtre.",
  "achievements.winAsLower": "Début prometteur",
  "achievements.winAsLower.description": "Gagnez un tournoi contre une brute dont le niveau est supérieur au vôtre.",
  "achievements.win": "Premier succès",
  "achievements.win.description": "Gagnez un tournoi.",
  "achievements.battleRoyaleWin": "Vainqueur de Battle Royale",
  "achievements.battleRoyaleWin.description": "Gagnez un événement Battle Royale.",
  "achievements.rankUp10": "Petite frappe",
  "achievements.rankUp10.description": "Montez une brute au rang de Pichenette du Désert",
  "achievements.rankUp9": "Épilation forcée",
  "achievements.rankUp9.description": "Montez une brute au rang d'Arracheur de pansement",
  "achievements.rankUp8": "Tatoueur de joue",
  "achievements.rankUp8.description": "Montez une brute au rang de Baffe de Richter",
  "achievements.rankUp7": "Main de fer",
  "achievements.rankUp7.description": "Montez une brute au rang de Poing d'acier",
  "achievements.rankUp6": "Grillade de brutes",
  "achievements.rankUp6.description": "Montez une brute au rang de Flamme du Vengeur",
  "achievements.rankUp5": "Carnage",
  "achievements.rankUp5.description": "Montez une brute au rang d'Âme de Berserk",
  "achievements.rankUp4": "Rivières pourpres",
  "achievements.rankUp4.description": "Montez une brute au rang d'Hemogrobil",
  "achievements.rankUp3": "Banquet",
  "achievements.rankUp3.description": "Montez une brute au rang d'Avaleur de Sabre",
  "achievements.rankUp2": "Rituel dangereux",
  "achievements.rankUp2.description": "Montez une brute au rang de Biceps de Satan",
  "achievements.rankUp1": "Édenteur",
  "achievements.rankUp1.description": "Montez une brute au rang de Dentiste du Chaos",
  "achievements.rankUp0": "Entrée dans la légende",
  "achievements.rankUp0.description": "Montez une brute au rang de Légende Brutale",
  "achievements.sacrifice": "Sacrifice",
  "achievements.sacrifice.description": "Sacrifiez une brute.",
  "achievements.beta": "Bêta",
  "achievements.beta.description": "Merci d'avoir participé à la bêta de LaBrute !",
  "achievements.bug": "Punaise !",
  "achievements.bug.description": "Signalez et aidez à corriger un bug.",
  "common": "Commun",
  "uncommon": "Inhabituel",
  "rare": "Rare",
  "epic": "Épique",
  "legendary": "Légendaire",
  "maxPerFight": "Max par combat",
  "maxPerBrute": "Max par brute",
  "weapons": "Armes",
  "none": "Aucunes",
  "supers": "Supers",
  "skills": "Compétences",
  "total": "Total",
  "notFound.title": "Page introuvable",
  "notFound.subtitle": "La page que vous cherchez n'existe pas.",
  "home": "Accueil",
  "bruteNotFound.title": "Brute introuvable",
  "bruteNotFound.subtitle": "La brute que vous cherchez n'existe pas ou a été sacrifiée.",
  "pleaseWait": "Veuillez patienter...",
  "generatingTournaments": "Nous générons les tournois d'aujourd'hui. Merci d'attendre quelques minutes.",
  "report": "signaler",
  "reportName": "Signaler un nom inapproprié",
  "reportConfirm": "Êtes-vous sûr de vouloir signaler le nom de la brute {{brute}} comme inapproprié ?",
  "reportSuccess": "Signalement envoyé avec succès.",
  "chooseAsFavorite": "Choisir comme favori (max {{amount}})",
  "removeFromFavorites": "Retirer des favoris",
  "bareHands": "Mains nues",
  "titles": "Titres",
  "wins.title.1": "Ramasse miettes",
  "wins.title.2": "Dur à cuire",
  "wins.title.3": "Videur",
  "wins.title.4": "Chuck Norris",
  "wins.title.5": "LA BRUTE",
  "defeats.title.1": "Pleurnichard",
  "defeats.title.2": "Chiffe molle",
  "defeats.title.3": "Sac de frappe",
  "defeats.title.4": "Unijambiste",
  "defeats.title.5": "Honte de LaBrute",
  "flawless.title.1": "Impeccable",
  "flawless.title.2": "Intouchable",
  "flawless.title.3": "Guerrier rusé",
  "flawless.title.4": "Sans bavure",
  "flawless.title.5": "Bête enragée",
  "winWith1HP.title.1": "Au bord du gouffre",
  "winWith1HP.title.2": "Volonté d'acier",
  "winWith1HP.title.3": "Patte de lapin",
  "winWith1HP.title.4": "Incassable",
  "winWith1HP.title.5": "Baroud d'honneur",
  "steal2Weapons.title.1": "Brigand",
  "steal2Weapons.title.2": "Fanatique d'armes",
  "steal2Weapons.title.3": "Cleptomane",
  "steal2Weapons.title.4": "Vendeur du marché noir",
  "steal2Weapons.title.5": "Le \"British Museum\"'",
  "singleHitWin.title.1": "Concasseur",
  "singleHitWin.title.2": "Iron Fist",
  "singleHitWin.title.3": "Teminator",
  "singleHitWin.title.4": "Étoile de la Mort",
  "singleHitWin.title.5": "One Punch Man",
  "combo3.title.1": "Tercet",
  "combo3.title.2": "Jamais deux sans trois",
  "combo3.title.3": "1, 2, 3, soleil !",
  "combo3.title.4": "Oh baby, a triple!",
  "combo3.title.5": "Sainte Trinité",
  "combo4.title.1": "Quartet",
  "combo4.title.2": "À quatre pattes",
  "combo4.title.3": "Combattant saisonnier",
  "combo4.title.4": "Brûlure au quatrième degré",
  "combo4.title.5": "La Quatrième Dimension",
  "combo5.title.1": "Quintet",
  "combo5.title.2": "Ora Ora Ora Ora Ora",
  "combo5.title.3": "Lapin Duracell",
  "combo5.title.4": "Super Saiyan",
  "combo5.title.5": "Perpetuum Mobile",
  "counter5.title.1": "Répondeur réactif",
  "counter5.title.2": "Contre novice",
  "counter5.title.3": "Retaliator",
  "counter5.title.4": "Riposte Défensive",
  "counter5.title.5": "Maître Paragon",
  "evade10.title.1": "Novice agile",
  "evade10.title.2": "Adept évasif",
  "evade10.title.3": "Esquive Rapide",
  "evade10.title.4": "Fantôme Illusif",
  "evade10.title.5": "Danseur Fantôme",
  "block25.title.1": "Pousse de blindage",
  "block25.title.2": "Bloqueur débutant",
  "block25.title.3": "Baron Barrière",
  "block25.title.4": "Gardien gladiateur",
  "block25.title.5": "Démon de la forteresse",
  "counter4b2b.title.1": "Counter Combo Cadet",
  "counter4b2b.title.2": "Recrue de la Riposte",
  "counter4b2b.title.3": "Reflex Recruit",
  "counter4b2b.title.4": "Parry Padawan",
  "counter4b2b.title.5": "Backlash Boss",
  "reversal4b2b.title.1": "Reversal Rookie",
  "reversal4b2b.title.2": "Apprenti Flipper",
  "reversal4b2b.title.3": "Counterflip Cadet",
  "reversal4b2b.title.4": "Reverse Rascal",
  "reversal4b2b.title.5": "Flip Master",
  "block4b2b.title.1": "Bloqueur",
  "block4b2b.title.2": "",
  "block4b2b.title.3": "Maître du bouclier",
  "block4b2b.title.4": "",
  "block4b2b.title.5": "",
  "evade4b2b.title.1": "",
  "evade4b2b.title.2": "",
  "evade4b2b.title.3": "",
  "evade4b2b.title.4": "",
  "evade4b2b.title.5": "",
  "throw10b2b.title.1": "",
  "throw10b2b.title.2": "",
  "throw10b2b.title.3": "",
  "throw10b2b.title.4": "",
  "throw10b2b.title.5": "",
  "disarm4.title.1": "",
  "disarm4.title.2": "",
  "disarm4.title.3": "",
  "disarm4.title.4": "",
  "disarm4.title.5": "",
  "disarm8.title.1": "",
  "disarm8.title.2": "",
  "disarm8.title.3": "",
  "disarm8.title.4": "",
  "disarm8.title.5": "",
  "damage50once.title.1": "Karate Kid",
  "damage50once.title.2": "Gants rembourrés",
  "damage50once.title.3": "Tyson",
  "damage50once.title.4": "Haricot de Lima",
  "damage50once.title.5": "Poids lourd",
  "damage100once.title.1": "Bulldozer",
  "damage100once.title.2": "Boulet de démolition",
  "damage100once.title.3": "Adam Smasher",
  "damage100once.title.4": "Hulk",
  "damage100once.title.5": "Choc Météore",
  "hit20times.title.1": "",
  "hit20times.title.2": "",
  "hit20times.title.3": "",
  "hit20times.title.4": "",
  "hit20times.title.5": "",
  "use10skills.title.1": "",
  "use10skills.title.2": "",
  "use10skills.title.3": "",
  "use10skills.title.4": "",
  "use10skills.title.5": "",
  "kill3pets.title.1": "",
  "kill3pets.title.2": "",
  "kill3pets.title.3": "",
  "kill3pets.title.4": "",
  "kill3pets.title.5": "",
  "maxDamage.title.1": "Bagarreur",
  "maxDamage.title.2": "Force Bringer",
  "maxDamage.title.3": "Powerhouse",
  "maxDamage.title.4": "Annihilateur",
  "maxDamage.title.5": "Doombringer",
  "hpHealed.title.1": "Porteur de bandage",
  "hpHealed.title.2": "Aid Apprentice",
  "hpHealed.title.3": "Gardien de Vitalité",
  "hpHealed.title.4": "Tisseur de vie",
  "hpHealed.title.5": "Guérisseur Divin",
  "saboteur.title.1": "",
  "saboteur.title.2": "",
  "saboteur.title.3": "",
  "saboteur.title.4": "",
  "saboteur.title.5": "",
  "dog.title.1": "Paf le chien",
  "dog.title.2": "",
  "dog.title.3": "",
  "dog.title.4": "",
  "dog.title.5": "César Millán",
  "panther.title.1": "Chien gris à 150%",
  "panther.title.2": "",
  "panther.title.3": "",
  "panther.title.4": "Druide",
  "panther.title.5": "Folie féline",
  "bear.title.1": "Nounours",
  "bear.title.2": "Soigneur d'ours",
  "bear.title.3": "Kalinka",
  "bear.title.4": "Menace rouge",
  "bear.title.5": "",
  "panther_bear.title.1": "Ami des animaux",
  "panther_bear.title.2": "Amoureux des animaux",
  "panther_bear.title.3": "Propriétaire de cirque",
  "panther_bear.title.4": "Gardien de zoo",
  "panther_bear.title.5": "Chimère",
  "felAg_fistsOfF.title.1": "",
  "felAg_fistsOfF.title.2": "",
  "felAg_fistsOfF.title.3": "",
  "felAg_fistsOfF.title.4": "",
  "felAg_fistsOfF.title.5": "",
  "felAg_fistsOfF_untouch_relentless.title.1": "",
  "felAg_fistsOfF_untouch_relentless.title.2": "",
  "felAg_fistsOfF_untouch_relentless.title.3": "",
  "felAg_fistsOfF_untouch_relentless.title.4": "",
  "felAg_fistsOfF_untouch_relentless.title.5": "",
  "vita_armor_toughened.title.1": "",
  "vita_armor_toughened.title.2": "",
  "vita_armor_toughened.title.3": "",
  "vita_armor_toughened.title.4": "",
  "vita_armor_toughened.title.5": "",
  "herculStr_hammer_fierceBrute.title.1": "Bras de fer",
  "herculStr_hammer_fierceBrute.title.2": "Haltérophile",
  "herculStr_hammer_fierceBrute.title.3": "Force inarrêtable",
  "herculStr_hammer_fierceBrute.title.4": "",
  "herculStr_hammer_fierceBrute.title.5": "",
  "shock.title.1": "Coup bas",
  "shock.title.2": "Sucker Punch",
  "shock.title.3": "",
  "shock.title.4": "",
  "shock.title.5": "",
  "balletShoes_survival.title.1": "",
  "balletShoes_survival.title.2": "",
  "balletShoes_survival.title.3": "",
  "balletShoes_survival.title.4": "",
  "balletShoes_survival.title.5": "",
  "cryOfTheDamned_hypnosis.title.1": "Anti-synergie",
  "cryOfTheDamned_hypnosis.title.2": "Gorge enrouée",
  "cryOfTheDamned_hypnosis.title.3": "",
  "cryOfTheDamned_hypnosis.title.4": "",
  "cryOfTheDamned_hypnosis.title.5": "",
  "shield_counterAttack.title.1": "Équipe de rêve",
  "shield_counterAttack.title.2": "",
  "shield_counterAttack.title.3": "",
  "shield_counterAttack.title.4": "",
  "shield_counterAttack.title.5": "",
  "reconnaissance_monk.title.1": "",
  "reconnaissance_monk.title.2": "",
  "reconnaissance_monk.title.3": "",
  "reconnaissance_monk.title.4": "",
  "reconnaissance_monk.title.5": "",
  "immortality.title.1": "Roi",
  "immortality.title.2": "Empereur",
  "immortality.title.3": "Objet inamovible",
  "immortality.title.4": "Tricheur",
  "immortality.title.5": "Éternel",
  "doubleBoost.title.1": "",
  "doubleBoost.title.2": "",
  "doubleBoost.title.3": "",
  "doubleBoost.title.4": "",
  "doubleBoost.title.5": "",
  "tripleBoost.title.1": "",
  "tripleBoost.title.2": "",
  "tripleBoost.title.3": "",
  "tripleBoost.title.4": "",
  "tripleBoost.title.5": "",
  "quadrupleBoost.title.1": "Les Quatre Éléments",
  "quadrupleBoost.title.2": "Couteau-suisse",
  "quadrupleBoost.title.3": "Polyvalent",
  "quadrupleBoost.title.4": "Multitalents",
  "quadrupleBoost.title.5": "L'Avatar",
  "regeneration_potion.title.1": "",
  "regeneration_potion.title.2": "",
  "regeneration_potion.title.3": "",
  "regeneration_potion.title.4": "",
  "regeneration_potion.title.5": "",
  "bear_tamer.title.1": "Glouton",
  "bear_tamer.title.2": "Pacman",
  "bear_tamer.title.3": "Kirby",
  "bear_tamer.title.4": "",
  "bear_tamer.title.5": "Trou noir",
  "tripleDogs.title.1": "",
  "tripleDogs.title.2": "",
  "tripleDogs.title.3": "",
  "tripleDogs.title.4": "",
  "tripleDogs.title.5": "Cerbère",
  "fiveWeapons.title.1": "",
  "fiveWeapons.title.2": "",
  "fiveWeapons.title.3": "",
  "fiveWeapons.title.4": "",
  "fiveWeapons.title.5": "",
  "tenWeapons.title.1": "",
  "tenWeapons.title.2": "",
  "tenWeapons.title.3": "",
  "tenWeapons.title.4": "",
  "tenWeapons.title.5": "",
  "fifteenWeapons.title.1": "",
  "fifteenWeapons.title.2": "",
  "fifteenWeapons.title.3": "",
  "fifteenWeapons.title.4": "",
  "fifteenWeapons.title.5": "",
  "twentyWeapons.title.1": "",
  "twentyWeapons.title.2": "",
  "twentyWeapons.title.3": "",
  "twentyWeapons.title.4": "",
  "twentyWeapons.title.5": "",
  "twentyThreeWeapons.title.1": "",
  "twentyThreeWeapons.title.2": "",
  "twentyThreeWeapons.title.3": "",
  "twentyThreeWeapons.title.4": "",
  "twentyThreeWeapons.title.5": "",
  "monk_sixthSense_whip.title.1": "",
  "monk_sixthSense_whip.title.2": "",
  "monk_sixthSense_whip.title.3": "",
  "monk_sixthSense_whip.title.4": "",
  "monk_sixthSense_whip.title.5": "",
  "weaponsMaster_sharp_bodybuilder_heavy.title.1": "",
  "weaponsMaster_sharp_bodybuilder_heavy.title.2": "",
  "weaponsMaster_sharp_bodybuilder_heavy.title.3": "",
  "weaponsMaster_sharp_bodybuilder_heavy.title.4": "",
  "weaponsMaster_sharp_bodybuilder_heavy.title.5": "",
  "hostility_counterWeapon.title.1": "",
  "hostility_counterWeapon.title.2": "",
  "hostility_counterWeapon.title.3": "",
  "hostility_counterWeapon.title.4": "",
  "hostility_counterWeapon.title.5": "",
  "flashFlood_twelveWeapons.title.1": "",
  "flashFlood_twelveWeapons.title.2": "",
  "flashFlood_twelveWeapons.title.3": "",
  "flashFlood_twelveWeapons.title.4": "",
  "flashFlood_twelveWeapons.title.5": "",
  "lightningBolt_firstStrike.title.1": "",
  "lightningBolt_firstStrike.title.2": "",
  "lightningBolt_firstStrike.title.3": "",
  "lightningBolt_firstStrike.title.4": "",
  "lightningBolt_firstStrike.title.5": "",
  "herculeanStrength.title.1": "",
  "herculeanStrength.title.2": "",
  "herculeanStrength.title.3": "",
  "herculeanStrength.title.4": "",
  "herculeanStrength.title.5": "Hercule",
  "felineAgility.title.1": "",
  "felineAgility.title.2": "",
  "felineAgility.title.3": "",
  "felineAgility.title.4": "",
  "felineAgility.title.5": "",
  "lightningBolt.title.1": "",
  "lightningBolt.title.2": "",
  "lightningBolt.title.3": "",
  "lightningBolt.title.4": "",
  "lightningBolt.title.5": "",
  "vitality.title.1": "",
  "vitality.title.2": "",
  "vitality.title.3": "",
  "vitality.title.4": "",
  "vitality.title.5": "",
  "potion_chef.title.1": "",
  "potion_chef.title.2": "",
  "potion_chef.title.3": "",
  "potion_chef.title.4": "",
  "potion_chef.title.5": "Gordon Ramsay",
  "tamer_net.title.1": "",
  "tamer_net.title.2": "",
  "tamer_net.title.3": "",
  "tamer_net.title.4": "",
  "tamer_net.title.5": "",
  "untouchable_balletShoes.title.1": "",
  "untouchable_balletShoes.title.2": "",
  "untouchable_balletShoes.title.3": "",
  "untouchable_balletShoes.title.4": "",
  "untouchable_balletShoes.title.5": "",
  "survival_resistant.title.1": "",
  "survival_resistant.title.2": "",
  "survival_resistant.title.3": "",
  "survival_resistant.title.4": "",
  "survival_resistant.title.5": "",
  "hideaway_spy.title.1": "",
  "hideaway_spy.title.2": "",
  "hideaway_spy.title.3": "",
  "hideaway_spy.title.4": "",
  "hideaway_spy.title.5": "Agent 007",
  "weaponsFast3.title.1": "",
  "weaponsFast3.title.2": "",
  "weaponsFast3.title.3": "",
  "weaponsFast3.title.4": "",
  "weaponsFast3.title.5": "",
  "weaponsSharp3.title.1": "",
  "weaponsSharp3.title.2": "",
  "weaponsSharp3.title.3": "",
  "weaponsSharp3.title.4": "",
  "weaponsSharp3.title.5": "",
  "weaponsHeavy3.title.1": "",
  "weaponsHeavy3.title.2": "",
  "weaponsHeavy3.title.3": "",
  "weaponsHeavy3.title.4": "",
  "weaponsHeavy3.title.5": "",
  "weaponsLong3.title.1": "",
  "weaponsLong3.title.2": "",
  "weaponsLong3.title.3": "",
  "weaponsLong3.title.4": "",
  "weaponsLong3.title.5": "",
  "weaponsThrown3.title.1": "",
  "weaponsThrown3.title.2": "",
  "weaponsThrown3.title.3": "",
  "weaponsThrown3.title.4": "",
  "weaponsThrown3.title.5": "",
  "weaponsBlunt3.title.1": "",
  "weaponsBlunt3.title.2": "",
  "weaponsBlunt3.title.3": "",
  "weaponsBlunt3.title.4": "",
  "weaponsBlunt3.title.5": "",
  "thor.title.1": "",
  "thor.title.2": "",
  "thor.title.3": "",
  "thor.title.4": "",
  "thor.title.5": "",
  "deflector.title.1": "Novice Deflector",
  "deflector.title.2": "Projectile Parry Pro",
  "deflector.title.3": "Deflection Master",
  "deflector.title.4": "Unstoppable Armadillo",
  "deflector.title.5": "Projectile Perfectionist",
  "allFastWeapons.title.1": "Speed Starter",
  "allFastWeapons.title.2": "Quick Arsenal",
  "allFastWeapons.title.3": "Rapid Firepower",
  "allFastWeapons.title.4": "Swift Armory",
  "allFastWeapons.title.5": "Velocity Virtuoso",
  "allSharpWeapons.title.1": "Blade Beginner",
  "allSharpWeapons.title.2": "Edge Enthusiast",
  "allSharpWeapons.title.3": "Sharp Collector",
  "allSharpWeapons.title.4": "Cutting Connoisseur",
  "allSharpWeapons.title.5": "Blade Master",
  "allHeavyWeapons.title.1": "Heavy Hitter",
  "allHeavyWeapons.title.2": "Weighty Warrior",
  "allHeavyWeapons.title.3": "Powerhouse Pro",
  "allHeavyWeapons.title.4": "Massive Mauler",
  "allHeavyWeapons.title.5": "Colossal Crusher",
  "allLongWeapons.title.1": "Long Arm",
  "allLongWeapons.title.2": "Extended Reach",
  "allLongWeapons.title.3": "Polearm Pro",
  "allLongWeapons.title.4": "Lance Lord",
  "allLongWeapons.title.5": "Spear Specialist",
  "allThrownWeapons.title.1": "Throwing Novice",
  "allThrownWeapons.title.2": "Hurling Hero",
  "allThrownWeapons.title.3": "Projectile Pro",
  "allThrownWeapons.title.4": "Aimed Assassin",
  "allThrownWeapons.title.5": "Throwing Master",
  "allBluntWeapons.title.1": "Blunt Beginner",
  "allBluntWeapons.title.2": "Hammer Handler",
  "allBluntWeapons.title.3": "Mace Master",
  "allBluntWeapons.title.4": "Crusher Connoisseur",
  "allBluntWeapons.title.5": "Bludgeon Expert",
  "agility50.title.1": "",
  "agility50.title.2": "",
  "agility50.title.3": "",
  "agility50.title.4": "",
  "agility50.title.5": "",
  "agility100.title.1": "",
  "agility100.title.2": "",
  "agility100.title.3": "",
  "agility100.title.4": "",
  "agility100.title.5": "",
  "speed50.title.1": "",
  "speed50.title.2": "",
  "speed50.title.3": "",
  "speed50.title.4": "",
  "speed50.title.5": "",
  "speed100.title.1": "",
  "speed100.title.2": "",
  "speed100.title.3": "",
  "speed100.title.4": "",
  "speed100.title.5": "",
  "strength50.title.1": "Gym Bro",
  "strength50.title.2": "",
  "strength50.title.3": "",
  "strength50.title.4": "",
  "strength50.title.5": "",
  "strength100.title.1": "Tu soulèves de la fonte ?",
  "strength100.title.2": "",
  "strength100.title.3": "Arnold",
  "strength100.title.4": "",
  "strength100.title.5": "",
  "hp300.title.1": "",
  "hp300.title.2": "The Rock",
  "hp300.title.3": "",
  "hp300.title.4": "",
  "hp300.title.5": "",
  "hp600.title.1": "",
  "hp600.title.2": "La montagne",
  "hp600.title.3": "",
  "hp600.title.4": "",
  "hp600.title.5": "Juggernaut",
  "maxLevel.title.1": "",
  "maxLevel.title.2": "",
  "maxLevel.title.3": "",
  "maxLevel.title.4": "",
  "maxLevel.title.5": "",
  "allAchievements.title.1": "",
  "allAchievements.title.2": "",
  "allAchievements.title.3": "",
  "allAchievements.title.4": "",
  "allAchievements.title.5": "",
  "winTournamentAs20.title.1": "",
  "winTournamentAs20.title.2": "",
  "winTournamentAs20.title.3": "",
  "winTournamentAs20.title.4": "",
  "winTournamentAs20.title.5": "Total Domination",
  "winTournamentAs15.title.1": "Loterie",
  "winTournamentAs15.title.2": "Véritable prodige",
  "winTournamentAs15.title.3": "Improbable",
  "winTournamentAs15.title.4": "Improbable",
  "winTournamentAs15.title.5": "Impossible",
  "looseAgainst2.title.1": "",
  "looseAgainst2.title.2": "",
  "looseAgainst2.title.3": "",
  "looseAgainst2.title.4": "",
  "looseAgainst2.title.5": "",
  "looseAgainst3.title.1": "",
  "looseAgainst3.title.2": "",
  "looseAgainst3.title.3": "",
  "looseAgainst3.title.4": "",
  "looseAgainst3.title.5": "",
  "looseAgainst4.title.1": "La faute à pas de chance",
  "looseAgainst4.title.2": "La poisse",
  "looseAgainst4.title.3": "Maudit",
  "looseAgainst4.title.4": "Le sol est une banane",
  "looseAgainst4.title.5": "Expert en pelage de bananes",
  "winAgainst2.title.1": "",
  "winAgainst2.title.2": "",
  "winAgainst2.title.3": "",
  "winAgainst2.title.4": "",
  "winAgainst2.title.5": "",
  "winAgainst3.title.1": "",
  "winAgainst3.title.2": "",
  "winAgainst3.title.3": "",
  "winAgainst3.title.4": "",
  "winAgainst3.title.5": "",
  "winAgainst4.title.1": "",
  "winAgainst4.title.2": "",
  "winAgainst4.title.3": "",
  "winAgainst4.title.4": "",
  "winAgainst4.title.5": "",
  "winAsLower.title.1": "",
  "winAsLower.title.2": "",
  "winAsLower.title.3": "",
  "winAsLower.title.4": "",
  "winAsLower.title.5": "",
  "win.title.1": "",
  "win.title.2": "",
  "win.title.3": "",
  "win.title.4": "",
  "win.title.5": "",
  "rankUp10.title.1": "",
  "rankUp10.title.2": "",
  "rankUp10.title.3": "",
  "rankUp10.title.4": "",
  "rankUp10.title.5": "",
  "rankUp9.title.1": "",
  "rankUp9.title.2": "",
  "rankUp9.title.3": "",
  "rankUp9.title.4": "",
  "rankUp9.title.5": "",
  "rankUp8.title.1": "",
  "rankUp8.title.2": "",
  "rankUp8.title.3": "",
  "rankUp8.title.4": "",
  "rankUp8.title.5": "",
  "rankUp7.title.1": "",
  "rankUp7.title.2": "",
  "rankUp7.title.3": "",
  "rankUp7.title.4": "",
  "rankUp7.title.5": "",
  "rankUp6.title.1": "",
  "rankUp6.title.2": "",
  "rankUp6.title.3": "",
  "rankUp6.title.4": "",
  "rankUp6.title.5": "",
  "rankUp5.title.1": "",
  "rankUp5.title.2": "",
  "rankUp5.title.3": "",
  "rankUp5.title.4": "",
  "rankUp5.title.5": "",
  "rankUp4.title.1": "",
  "rankUp4.title.2": "",
  "rankUp4.title.3": "",
  "rankUp4.title.4": "",
  "rankUp4.title.5": "",
  "rankUp3.title.1": "",
  "rankUp3.title.2": "",
  "rankUp3.title.3": "",
  "rankUp3.title.4": "",
  "rankUp3.title.5": "",
  "rankUp2.title.1": "",
  "rankUp2.title.2": "",
  "rankUp2.title.3": "",
  "rankUp2.title.4": "",
  "rankUp2.title.5": "",
  "rankUp1.title.1": "",
  "rankUp1.title.2": "",
  "rankUp1.title.3": "",
  "rankUp1.title.4": "",
  "rankUp1.title.5": "",
  "rankUp0.title.1": "",
  "rankUp0.title.2": "",
  "rankUp0.title.3": "",
  "rankUp0.title.4": "",
  "rankUp0.title.5": "",
  "sacrifice.title.1": "Bourreau",
  "sacrifice.title.2": "Guillotine",
  "sacrifice.title.3": "Rien de personnel",
  "sacrifice.title.4": "Boucher en série",
  "sacrifice.title.5": "Maya",
  "beta.title.1": "Père fondateur",
  "beta.title.2": "Souvenez-vous des SacriPoints",
  "beta.title.3": "Matinal",
  "beta.title.4": "Dévoué",
  "beta.title.5": "OG",
  "bug.title.1": "admin=true",
  "bug.title.2": "Cyberpunk",
  "bug.title.3": "Hackerman",
  "bug.title.4": "Anonymous",
  "bug.title.5": "Elliot",
  "result": "Résultat",
  "tournament.result.finishingWith.1": "er",
  "tournament.result.finishingWith.2": "e",
  "tournament.result.finishingWith.3": "e",
  "tournament.result.finishingWith.other": "e",
  "achievementRankings": "Classement des succès",
  "achievement": "Succès",
  "byUser": "Par utilisateur",
  "dinoRpgRewardsSuccess": "Félicitations ! Vous avez gagné un combat supplémentaire pour chacune de vos brutes.",
  "inventory.desc": "Ici vous pouvez voir tous les objets que vous avez accumulés. Utilisez-les judicieusement !",
  "inventory.item.visualReset": "Changement d'apparence",
  "inventory.item.bossTicket": "Ticket Boss",
  "inventory.item.nameChange": "Changement de nom",
  "inventory.item.favoriteFight": "Combat favori",
  "inventory.item.favoriteFight.desc": "Vous pouvez définir un combat comme votre favori sur la page de combat. Il ne sera pas supprimé après 30 jours.",
  "inventory.itemNotImplemented": "Cet objet n'est pas encore implémenté.",
  "taggedForDeletion": "Votre brute sera supprimée dans {{days}} jours.",
  "deletionReason.DUPLICATE_NAME": "Votre brute a le même nom qu'une autre brute. Utilisez l'objet dans votre inventaire pour le modifier et éviter la suppression.",
  "deletionReason.INNAPROPRIATE_NAME": "Votre brute a un nom inapproprié. Utilisez l'objet dans votre inventaire pour le modifier et éviter la suppression.",
  "deletionReason.EVENT_LOSS": "Votre brute a perdu lors de l'événement. Elle sera supprimée dans {{days}} jours.",
  "nameChangeConfirm": "Êtes-vous sûr de vouloir changer le nom de votre brute en {{name}}?",
  "activeModifiers": "Modificateurs actifs",
  "modifier.noThrows": "Mains collantes",
  "modifier.noThrows.desc": "Qui a collé ces armes ?! Vous ne pouvez plus jeter vos armes.",
  "modifier.focusOpponent": "Concentration",
  "modifier.focusOpponent.desc": "Vous n'avez jamais perdu une bataille de regard. Vous ciblerez toujours votre adversaire principal.",
  "modifier.alwaysUseSupers": "Pouvoir illimité",
  "modifier.alwaysUseSupers.desc": "Vous avez passé du temps à apprendre ces compétences, il serait dommage de ne pas les utiliser. Vous utiliserez toujours vos compétences disponibles.",
  "modifier.drawEveryWeapon": "Ravitaillement infini",
  "modifier.drawEveryWeapon.desc": "Vous êtes un maître de l'extraction. Vous sortirez toujours une arme si vous en avez de disponible.",
  "modifier.doubleAgility": "Gravité atténuée",
  "modifier.doubleAgility.desc": "Vous vous sentez plus léger que d'habitude aujourd'hui. Votre agilité est doublée.",
  "modifier.randomSkill": "Compétence opportune",
  "modifier.randomSkill.desc": "Vous avez regardé tellement de combats que vous avez réussi à apprendre une nouvelle compétence. Vous gagnez une compétence aléatoire pour la journée.",
  "modifier.randomWeapon": "Arme opportune",
  "modifier.randomWeapon.desc": "Vous avez trouvé une arme sur le sol. Vous gagnez une arme aléatoire pour la journée.",
  "modifier.bareHandsFirstHit": "Combat honorable",
  "modifier.bareHandsFirstHit.desc": "Un vrai gentleman salue son ennemi avec ses poings. Vous ne tirerez pas d'arme tant que vous n'aurez pas touché votre adversaire avec vos mains nues.",
  "modifier.startWithWeapon": "Paré au combat",
  "modifier.startWithWeapon.desc": "Pas de temps pour les plaisanteries, il est temps de se battre ! Vous commencerez le combat avec une arme déjà tirée.",
  "patchNotes": "Notes de patch",
  "newPatchNotesAvailable": "Une nouvelle version a été publiée.",
  "go": "Go",
  "features": "Fonctionnalités",
  "fixes": "Corrections",
  "showMore": "Afficher plus",
  "lockBruteAppearance": "Verrouiller l'apparence",
  "unlockBruteAppearance": "Déverrouiller l'apparence",
  "default": "Défaut",
  "unban": "Débannir",
  "unbanConfirm": "Êtes-vous sûr de vouloir dé-bannir cet utilisateur ?",
  "unbanSuccess": "Utilisateur dé-banni avec succès.",
  "ban": "Bannir",
  "banConfirm": "Êtes-vous sûr de vouloir bannir cet utilisateur ?",
  "banSuccess": "Utilisateur banni avec succès.",
  "banReason.innapropriateName": "Nom inapproprié",
  "banReason.innapropriateBruteName": "Nom de brute inapproprié",
  "banReason.multipleAccounts": "Comptes multiples",
  "afterBlock": "après blocage",
  "againstThrows": "against throws",
  "created": "Créée le {{date}}",
  "copyUserId": "Copier l'ID utilisateur",
  "userIdCopied": "ID de l'utilisateur copié dans le presse-papiers.",
  "favoriteFights": "Combats favoris",
  "vs": "vs",
  "fight": "Combat",
  "followingFeed": "Fil d'abonnements",
  "follow": "Suivre",
  "unfollow": "Ne plus suivre",
  "followed": "Suivi",
  "unfollowed": "Désabonné",
  "eventBrute": "Cette brute a été créée pour l'événement en cours.",
  "event": "Événement",
  "noEvent": "Il n'y a pas d'événement en cours, revenez plus tard !",
  "eventHistory": "Historique des événements",
  "event.battleRoyale": "Battle Royale",
  "event.battleRoyale.desc": "Dans cet événement, les joueurs peuvent créer une nouvelle brute spéciale qui participera à un Battle Royale. Le gagnant de l'événement pourra conserver sa brute. Les autres brutes seront définitivement supprimées après l'événement.",
  "createABrute": "Créer une brute",
  "event.rules": "Règles de l'événement",
  "event.battleRoyale.rule.0": "Une brute par joueur",
  "event.battleRoyale.rule.1": "Tournois quotidiens et globaux désactivés",
  "event.battleRoyale.rule.2": "Clans désactivés",
  "event.battleRoyale.rule.3": "{{count}} combats par jour, un niveau par victoire",
  "event.battleRoyale.rule.4": "{{count}} réinitialisations gratuites. Les réinitialisations vous donnent assez d'expérience pour revenir à votre niveau actuel",
  "event.battleRoyale.rule.5": "Une manche de tournoi sera jouée tous les jours jusqu'à ce qu'il ne reste qu'une seule brute",
  "event.battleRoyale.rule.6": "Le gagnant conservera sa destinée, sera réinitialisé au niveau 1 et deviendra une brute normale",
  "event.battleRoyale.rule.7": "Toutes les autres brutes seront définitivement supprimées",
  "event.battleRoyale.rule.8": "Le prochain événement commencera {{count}} jours après la fin de l'événement en cours",
  "event.battleRoyale.rule.9": "Chaque événement a un niveau maximum aléatoire, le niveau maximum de l'événement actuel est {{count}}",
  "event.ongoing": "Cet événement est en cours, vous ne pouvez plus participer avec une brute.",
  "event.started": "Un nouvel événement vient de commencer, participez avant qu'il ne soit trop tard !",
  "perkType.weapon": "Arme",
  "perkType.skill": "Compétence",
  "perkType.pet": "Familier",
  "ascensions": "Ascensions",
  "ascendWith.firstDog": "un Chien",
  "ascendWith.secondDog": "un second Chien",
  "ascendWith.thirdDog": "un troisième Chien",
  "youAreAboutToAscend": "Vous êtes sur le point de vous élever",
  "youWillAscendWithDog": "Vous vous élèverez avec {{one_or_a_second_pet_dog}}",
  "youWillAscendWith": "Vous avez choisi de vous élever avec l'attribut suivant : {{perkName}} ({{perkType}}).",
  "youMustSelectToAscend": "Vous devez sélectionner une arme, une compétence ou un familier pour vous élever.",
  "ascensionExplanationText": "L'Ascension vous permet de recommencer avec un attribut permanent supplémentaire. Vous reviendrez au niveau 1 mais conserverez votre rang, les récompenses de vos ascensions précédentes, ainsi que l'attribut que vous êtes sur le point de sélectionner.",
  "rankingPrioritizeAscensions": "Le classement priorise le nombre d'ascensions par rapport au niveau et à l'expérience !",
  "fasterFights": "Faster fights",
  "displayVersusPage": "Display versus page",
  "wiki.howToRankup": "How to rank up?",
  "wiki.winDaily": "Win daily tournament(s)",
  "wiki.wins_one": "{{count}} win",
  "wiki.wins_other": "{{count}} wins",
  "wiki.restartAfterRankup": "You will then restart at lvl 1 with the same destiny, but with the possibility to make different level up choices if you want to.",
  "wiki.previousDestiny": "The previous destiny will be highlighted in red when leveling up.",
  "wiki.howToGetGold": "How to get gold?",
  "wiki.sacrifice": "Sacrifice a brute",
  "wiki.level": "lvl {{count}}",
  "wiki.noSacrificeSameDay": "You can't sacrifice a brute the day of its creation.",
  "wiki.sameNameAfterSacrifice": "Once sacrified, you can create a new brute using the same name.",
  "wiki.winDailyTourney": "Win a daily tournament",
  "wiki.winGlobalTourney": "Win a global tournament",
  "wiki.beatClanBoss": "Beat the clan boss",
  "wiki.howWork": "How do they work?",
  "wiki.manualRegister": "Manual registration",
  "wiki.allowRankUp": "Allows you to rank up",
  "wiki.xpPerWin": "{{count}} XP per fight won",
  "wiki.autoRegister": "Automatic registration",
  "wiki.activePreviousDay": "Must have fought the previous day",
  "wiki.addedDelayedXP": "If you won {{daily}} fights in the daily tournament and {{global}} fights in the global tournament, you'll get {{total}} XP the following day.",
  "wiki.howToUseGold": "How to use your gold?",
  "wiki.createNewBrutes": "Create new brutes",
  "wiki.count": "{{count}}th",
  "wiki.resetBrute": "Reset your brute",
  "wiki.resetExample": "At some point you might want to reset your brute because you didn't like what you got after level 10 for example; or you might want to explore another branch of your destiny.",
  "wiki.resetExample2": "It will cost you 100 gold and your brute will restart at level 1 with the same rank.",
  "wiki.clans": "Clans",
  "wiki.increaseClanCapacity": "How to increase its capacity?",
  "wiki.defeatBoss": "Defeat the boss",
  "wiki.bossExplanation": "The boss has a given amount of HP, it will require multiple daily fights to beat it. Once you defeat it, you will unlock 5 more brutes slots for your clan (50 members limit). You will also earn a boss ticket (no utility yet) & gold.",
  "wiki.pupils": "Pupils",
  "wiki.whatPupilBenefits": "What are their benefits?",
  "wiki.pupilBenefits": "None (for now)",
  "wiki.pupilExplanation": "Pupils don't give XP as they used to in previous game versions. But you can still get pupils by sharing the link in the top right corner of your cell."
}
;/**
 * vis-network
 * https://visjs.github.io/vis-network/
 *
 * A dynamic, browser-based visualization library.
 *
 * @version 9.1.9
 * @date    2023-11-03T01:42:27.418Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */
!function(g,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((g="undefined"!=typeof globalThis?globalThis:g||self).vis=g.vis||{})}(this,(function(g){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function A(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var e=function(g){return g&&g.Math===Math&&g},C=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||t||Function("return this")(),I=function(g){try{return!!g()}catch(g){return!0}},i=!I((function(){var g=function(){}.bind();return"function"!=typeof g||g.hasOwnProperty("prototype")})),o=i,n=Function.prototype,r=n.apply,s=n.call,a="object"==typeof Reflect&&Reflect.apply||(o?s.bind(r):function(){return s.apply(r,arguments)}),d=i,h=Function.prototype,l=h.call,c=d&&h.bind.bind(l,l),u=d?c:function(g){return function(){return l.apply(g,arguments)}},p=u,f=p({}.toString),v=p("".slice),y=function(g){return v(f(g),8,-1)},m=y,b=u,w=function(g){if("Function"===m(g))return b(g)},k="object"==typeof document&&document.all,x={all:k,IS_HTMLDDA:void 0===k&&void 0!==k},E=x.all,O=x.IS_HTMLDDA?function(g){return"function"==typeof g||g===E}:function(g){return"function"==typeof g},T={},D=!I((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})),N=i,R=Function.prototype.call,P=N?R.bind(R):function(){return R.apply(R,arguments)},M={},B={}.propertyIsEnumerable,z=Object.getOwnPropertyDescriptor,S=z&&!B.call({1:2},1);M.f=S?function(g){var t=z(this,g);return!!t&&t.enumerable}:B;var Z,F,G=function(g,t){return{enumerable:!(1&g),configurable:!(2&g),writable:!(4&g),value:t}},j=I,L=y,V=Object,Y=u("".split),W=j((function(){return!V("z").propertyIsEnumerable(0)}))?function(g){return"String"===L(g)?Y(g,""):V(g)}:V,Q=function(g){return null==g},U=Q,_=TypeError,K=function(g){if(U(g))throw new _("Can't call method on "+g);return g},H=W,X=K,J=function(g){return H(X(g))},q=O,$=x.all,gg=x.IS_HTMLDDA?function(g){return"object"==typeof g?null!==g:q(g)||g===$}:function(g){return"object"==typeof g?null!==g:q(g)},tg={},Ag=tg,eg=C,Cg=O,Ig=function(g){return Cg(g)?g:void 0},ig=function(g,t){return arguments.length<2?Ig(Ag[g])||Ig(eg[g]):Ag[g]&&Ag[g][t]||eg[g]&&eg[g][t]},og=u({}.isPrototypeOf),ng="undefined"!=typeof navigator&&String(navigator.userAgent)||"",rg=C,sg=ng,ag=rg.process,dg=rg.Deno,hg=ag&&ag.versions||dg&&dg.version,lg=hg&&hg.v8;lg&&(F=(Z=lg.split("."))[0]>0&&Z[0]<4?1:+(Z[0]+Z[1])),!F&&sg&&(!(Z=sg.match(/Edge\/(\d+)/))||Z[1]>=74)&&(Z=sg.match(/Chrome\/(\d+)/))&&(F=+Z[1]);var cg=F,ug=cg,pg=I,fg=C.String,vg=!!Object.getOwnPropertySymbols&&!pg((function(){var g=Symbol("symbol detection");return!fg(g)||!(Object(g)instanceof Symbol)||!Symbol.sham&&ug&&ug<41})),yg=vg&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,mg=ig,bg=O,wg=og,kg=Object,xg=yg?function(g){return"symbol"==typeof g}:function(g){var t=mg("Symbol");return bg(t)&&wg(t.prototype,kg(g))},Eg=String,Og=function(g){try{return Eg(g)}catch(g){return"Object"}},Tg=O,Dg=Og,Ng=TypeError,Rg=function(g){if(Tg(g))return g;throw new Ng(Dg(g)+" is not a function")},Pg=Rg,Mg=Q,Bg=function(g,t){var A=g[t];return Mg(A)?void 0:Pg(A)},zg=P,Sg=O,Zg=gg,Fg=TypeError,Gg={exports:{}},jg=C,Lg=Object.defineProperty,Vg=function(g,t){try{Lg(jg,g,{value:t,configurable:!0,writable:!0})}catch(A){jg[g]=t}return t},Yg="__core-js_shared__",Wg=C[Yg]||Vg(Yg,{}),Qg=Wg;(Gg.exports=function(g,t){return Qg[g]||(Qg[g]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:"pure",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Ug=Gg.exports,_g=K,Kg=Object,Hg=function(g){return Kg(_g(g))},Xg=Hg,Jg=u({}.hasOwnProperty),qg=Object.hasOwn||function(g,t){return Jg(Xg(g),t)},$g=u,gt=0,tt=Math.random(),At=$g(1..toString),et=function(g){return"Symbol("+(void 0===g?"":g)+")_"+At(++gt+tt,36)},Ct=Ug,It=qg,it=et,ot=vg,nt=yg,rt=C.Symbol,st=Ct("wks"),at=nt?rt.for||rt:rt&&rt.withoutSetter||it,dt=function(g){return It(st,g)||(st[g]=ot&&It(rt,g)?rt[g]:at("Symbol."+g)),st[g]},ht=P,lt=gg,ct=xg,ut=Bg,pt=function(g,t){var A,e;if("string"===t&&Sg(A=g.toString)&&!Zg(e=zg(A,g)))return e;if(Sg(A=g.valueOf)&&!Zg(e=zg(A,g)))return e;if("string"!==t&&Sg(A=g.toString)&&!Zg(e=zg(A,g)))return e;throw new Fg("Can't convert object to primitive value")},ft=TypeError,vt=dt("toPrimitive"),yt=function(g,t){if(!lt(g)||ct(g))return g;var A,e=ut(g,vt);if(e){if(void 0===t&&(t="default"),A=ht(e,g,t),!lt(A)||ct(A))return A;throw new ft("Can't convert object to primitive value")}return void 0===t&&(t="number"),pt(g,t)},mt=xg,bt=function(g){var t=yt(g,"string");return mt(t)?t:t+""},wt=gg,kt=C.document,xt=wt(kt)&&wt(kt.createElement),Et=function(g){return xt?kt.createElement(g):{}},Ot=Et,Tt=!D&&!I((function(){return 7!==Object.defineProperty(Ot("div"),"a",{get:function(){return 7}}).a})),Dt=D,Nt=P,Rt=M,Pt=G,Mt=J,Bt=bt,zt=qg,St=Tt,Zt=Object.getOwnPropertyDescriptor;T.f=Dt?Zt:function(g,t){if(g=Mt(g),t=Bt(t),St)try{return Zt(g,t)}catch(g){}if(zt(g,t))return Pt(!Nt(Rt.f,g,t),g[t])};var Ft=I,Gt=O,jt=/#|\.prototype\./,Lt=function(g,t){var A=Yt[Vt(g)];return A===Qt||A!==Wt&&(Gt(t)?Ft(t):!!t)},Vt=Lt.normalize=function(g){return String(g).replace(jt,".").toLowerCase()},Yt=Lt.data={},Wt=Lt.NATIVE="N",Qt=Lt.POLYFILL="P",Ut=Lt,_t=Rg,Kt=i,Ht=w(w.bind),Xt=function(g,t){return _t(g),void 0===t?g:Kt?Ht(g,t):function(){return g.apply(t,arguments)}},Jt={},qt=D&&I((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),$t=gg,gA=String,tA=TypeError,AA=function(g){if($t(g))return g;throw new tA(gA(g)+" is not an object")},eA=D,CA=Tt,IA=qt,iA=AA,oA=bt,nA=TypeError,rA=Object.defineProperty,sA=Object.getOwnPropertyDescriptor,aA="enumerable",dA="configurable",hA="writable";Jt.f=eA?IA?function(g,t,A){if(iA(g),t=oA(t),iA(A),"function"==typeof g&&"prototype"===t&&"value"in A&&hA in A&&!A[hA]){var e=sA(g,t);e&&e[hA]&&(g[t]=A.value,A={configurable:dA in A?A[dA]:e[dA],enumerable:aA in A?A[aA]:e[aA],writable:!1})}return rA(g,t,A)}:rA:function(g,t,A){if(iA(g),t=oA(t),iA(A),CA)try{return rA(g,t,A)}catch(g){}if("get"in A||"set"in A)throw new nA("Accessors not supported");return"value"in A&&(g[t]=A.value),g};var lA=Jt,cA=G,uA=D?function(g,t,A){return lA.f(g,t,cA(1,A))}:function(g,t,A){return g[t]=A,g},pA=C,fA=a,vA=w,yA=O,mA=T.f,bA=Ut,wA=tg,kA=Xt,xA=uA,EA=qg,OA=function(g){var t=function(A,e,C){if(this instanceof t){switch(arguments.length){case 0:return new g;case 1:return new g(A);case 2:return new g(A,e)}return new g(A,e,C)}return fA(g,this,arguments)};return t.prototype=g.prototype,t},TA=function(g,t){var A,e,C,I,i,o,n,r,s,a=g.target,d=g.global,h=g.stat,l=g.proto,c=d?pA:h?pA[a]:(pA[a]||{}).prototype,u=d?wA:wA[a]||xA(wA,a,{})[a],p=u.prototype;for(I in t)e=!(A=bA(d?I:a+(h?".":"#")+I,g.forced))&&c&&EA(c,I),o=u[I],e&&(n=g.dontCallGetSet?(s=mA(c,I))&&s.value:c[I]),i=e&&n?n:t[I],e&&typeof o==typeof i||(r=g.bind&&e?kA(i,pA):g.wrap&&e?OA(i):l&&yA(i)?vA(i):i,(g.sham||i&&i.sham||o&&o.sham)&&xA(r,"sham",!0),xA(u,I,r),l&&(EA(wA,C=a+"Prototype")||xA(wA,C,{}),xA(wA[C],I,i),g.real&&p&&(A||!p[I])&&xA(p,I,i)))},DA=Math.ceil,NA=Math.floor,RA=Math.trunc||function(g){var t=+g;return(t>0?NA:DA)(t)},PA=function(g){var t=+g;return t!=t||0===t?0:RA(t)},MA=PA,BA=Math.max,zA=Math.min,SA=function(g,t){var A=MA(g);return A<0?BA(A+t,0):zA(A,t)},ZA=PA,FA=Math.min,GA=function(g){return g>0?FA(ZA(g),9007199254740991):0},jA=function(g){return GA(g.length)},LA=J,VA=SA,YA=jA,WA=function(g){return function(t,A,e){var C,I=LA(t),i=YA(I),o=VA(e,i);if(g&&A!=A){for(;i>o;)if((C=I[o++])!=C)return!0}else for(;i>o;o++)if((g||o in I)&&I[o]===A)return g||o||0;return!g&&-1}},QA={includes:WA(!0),indexOf:WA(!1)},UA={},_A=qg,KA=J,HA=QA.indexOf,XA=UA,JA=u([].push),qA=function(g,t){var A,e=KA(g),C=0,I=[];for(A in e)!_A(XA,A)&&_A(e,A)&&JA(I,A);for(;t.length>C;)_A(e,A=t[C++])&&(~HA(I,A)||JA(I,A));return I},$A=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ge=qA,te=$A,Ae=Object.keys||function(g){return ge(g,te)},ee={};ee.f=Object.getOwnPropertySymbols;var Ce=D,Ie=u,ie=P,oe=I,ne=Ae,re=ee,se=M,ae=Hg,de=W,he=Object.assign,le=Object.defineProperty,ce=Ie([].concat),ue=!he||oe((function(){if(Ce&&1!==he({b:1},he(le({},"a",{enumerable:!0,get:function(){le(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var g={},t={},A=Symbol("assign detection"),e="abcdefghijklmnopqrst";return g[A]=7,e.split("").forEach((function(g){t[g]=g})),7!==he({},g)[A]||ne(he({},t)).join("")!==e}))?function(g,t){for(var A=ae(g),e=arguments.length,C=1,I=re.f,i=se.f;e>C;)for(var o,n=de(arguments[C++]),r=I?ce(ne(n),I(n)):ne(n),s=r.length,a=0;s>a;)o=r[a++],Ce&&!ie(i,n,o)||(A[o]=n[o]);return A}:he,pe=ue;TA({target:"Object",stat:!0,arity:2,forced:Object.assign!==pe},{assign:pe});var fe=A(tg.Object.assign),ve=u([].slice),ye=u,me=Rg,be=gg,we=qg,ke=ve,xe=i,Ee=Function,Oe=ye([].concat),Te=ye([].join),De={},Ne=xe?Ee.bind:function(g){var t=me(this),A=t.prototype,e=ke(arguments,1),C=function(){var A=Oe(e,ke(arguments));return this instanceof C?function(g,t,A){if(!we(De,t)){for(var e=[],C=0;C<t;C++)e[C]="a["+C+"]";De[t]=Ee("C,a","return new C("+Te(e,",")+")")}return De[t](g,A)}(t,A.length,A):t.apply(g,A)};return be(A)&&(C.prototype=A),C},Re=Ne;TA({target:"Function",proto:!0,forced:Function.bind!==Re},{bind:Re});var Pe=tg,Me=function(g){return Pe[g+"Prototype"]},Be=Me("Function").bind,ze=og,Se=Be,Ze=Function.prototype,Fe=function(g){var t=g.bind;return g===Ze||ze(Ze,g)&&t===Ze.bind?Se:t},Ge=Fe,je=A(Ge);function Le(g,t,A,e){g.beginPath(),g.arc(t,A,e,0,2*Math.PI,!1),g.closePath()}function Ve(g,t,A,e,C,I){var i=Math.PI/180;e-2*I<0&&(I=e/2),C-2*I<0&&(I=C/2),g.beginPath(),g.moveTo(t+I,A),g.lineTo(t+e-I,A),g.arc(t+e-I,A+I,I,270*i,360*i,!1),g.lineTo(t+e,A+C-I),g.arc(t+e-I,A+C-I,I,0,90*i,!1),g.lineTo(t+I,A+C),g.arc(t+I,A+C-I,I,90*i,180*i,!1),g.lineTo(t,A+I),g.arc(t+I,A+I,I,180*i,270*i,!1),g.closePath()}function Ye(g,t,A,e,C){var I=.5522848,i=e/2*I,o=C/2*I,n=t+e,r=A+C,s=t+e/2,a=A+C/2;g.beginPath(),g.moveTo(t,a),g.bezierCurveTo(t,a-o,s-i,A,s,A),g.bezierCurveTo(s+i,A,n,a-o,n,a),g.bezierCurveTo(n,a+o,s+i,r,s,r),g.bezierCurveTo(s-i,r,t,a+o,t,a),g.closePath()}function We(g,t,A,e,C){var I=C*(1/3),i=.5522848,o=e/2*i,n=I/2*i,r=t+e,s=A+I,a=t+e/2,d=A+I/2,h=A+(C-I/2),l=A+C;g.beginPath(),g.moveTo(r,d),g.bezierCurveTo(r,d+n,a+o,s,a,s),g.bezierCurveTo(a-o,s,t,d+n,t,d),g.bezierCurveTo(t,d-n,a-o,A,a,A),g.bezierCurveTo(a+o,A,r,d-n,r,d),g.lineTo(r,h),g.bezierCurveTo(r,h+n,a+o,l,a,l),g.bezierCurveTo(a-o,l,t,h+n,t,h),g.lineTo(t,d)}function Qe(g,t,A,e,C,I){g.beginPath(),g.moveTo(t,A);for(var i=I.length,o=e-t,n=C-A,r=n/o,s=Math.sqrt(o*o+n*n),a=0,d=!0,h=0,l=+I[0];s>=.1;)(l=+I[a++%i])>s&&(l=s),h=Math.sqrt(l*l/(1+r*r)),t+=h=o<0?-h:h,A+=r*h,!0===d?g.lineTo(t,A):g.moveTo(t,A),s-=l,d=!d}var Ue={circle:Le,dashedLine:Qe,database:We,diamond:function(g,t,A,e){g.beginPath(),g.lineTo(t,A+e),g.lineTo(t+e,A),g.lineTo(t,A-e),g.lineTo(t-e,A),g.closePath()},ellipse:Ye,ellipse_vis:Ye,hexagon:function(g,t,A,e){g.beginPath();var C=2*Math.PI/6;g.moveTo(t+e,A);for(var I=1;I<6;I++)g.lineTo(t+e*Math.cos(C*I),A+e*Math.sin(C*I));g.closePath()},roundRect:Ve,square:function(g,t,A,e){g.beginPath(),g.rect(t-e,A-e,2*e,2*e),g.closePath()},star:function(g,t,A,e){g.beginPath(),A+=.1*(e*=.82);for(var C=0;C<10;C++){var I=C%2==0?1.3*e:.5*e;g.lineTo(t+I*Math.sin(2*C*Math.PI/10),A-I*Math.cos(2*C*Math.PI/10))}g.closePath()},triangle:function(g,t,A,e){g.beginPath(),A+=.275*(e*=1.15);var C=2*e,I=C/2,i=Math.sqrt(3)/6*C,o=Math.sqrt(C*C-I*I);g.moveTo(t,A-(o-i)),g.lineTo(t+I,A+i),g.lineTo(t-I,A+i),g.lineTo(t,A-(o-i)),g.closePath()},triangleDown:function(g,t,A,e){g.beginPath(),A-=.275*(e*=1.15);var C=2*e,I=C/2,i=Math.sqrt(3)/6*C,o=Math.sqrt(C*C-I*I);g.moveTo(t,A+(o-i)),g.lineTo(t+I,A-i),g.lineTo(t-I,A-i),g.lineTo(t,A+(o-i)),g.closePath()}};function _e(g,t){void 0===t&&(t={});var A=t.insertAt;if(g&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],C=document.createElement("style");C.type="text/css","top"===A&&e.firstChild?e.insertBefore(C,e.firstChild):e.appendChild(C),C.styleSheet?C.styleSheet.cssText=g:C.appendChild(document.createTextNode(g))}}_e(".vis-overlay{bottom:0;left:0;position:absolute;right:0;top:0;z-index:10}.vis-active{box-shadow:0 0 10px #86d5f8}");_e(".vis [class*=span]{min-height:0;width:auto}");_e('div.vis-color-picker{background-color:#fff;border-radius:15px;box-shadow:0 0 10px 0 rgba(0,0,0,.5);display:none;height:444px;left:30px;margin-left:30px;margin-top:-140px;padding:10px;position:absolute;top:0;width:310px;z-index:1}div.vis-color-picker div.vis-arrow{left:5px;position:absolute;top:147px}div.vis-color-picker div.vis-arrow:after,div.vis-color-picker div.vis-arrow:before{border:solid transparent;content:" ";height:0;pointer-events:none;position:absolute;right:100%;top:50%;width:0}div.vis-color-picker div.vis-arrow:after{border-color:hsla(0,0%,100%,0) #fff hsla(0,0%,100%,0) hsla(0,0%,100%,0);border-width:30px;margin-top:-30px}div.vis-color-picker div.vis-color{cursor:pointer;height:289px;position:absolute;width:289px}div.vis-color-picker div.vis-brightness{position:absolute;top:313px}div.vis-color-picker div.vis-opacity{position:absolute;top:350px}div.vis-color-picker div.vis-selector{background:#4c4c4c;background:-moz-linear-gradient(top,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#4c4c4c),color-stop(12%,#595959),color-stop(25%,#666),color-stop(39%,#474747),color-stop(50%,#2c2c2c),color-stop(51%,#000),color-stop(60%,#111),color-stop(76%,#2b2b2b),color-stop(91%,#1c1c1c),color-stop(100%,#131313));background:-webkit-linear-gradient(top,#4c4c4c,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313);background:-o-linear-gradient(top,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);background:-ms-linear-gradient(top,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);background:linear-gradient(180deg,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313);border:1px solid #fff;border-radius:15px;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#4c4c4c",endColorstr="#131313",GradientType=0);height:15px;left:137px;position:absolute;top:137px;width:15px}div.vis-color-picker div.vis-new-color{left:159px;padding-right:2px;text-align:right}div.vis-color-picker div.vis-initial-color,div.vis-color-picker div.vis-new-color{border:1px solid rgba(0,0,0,.1);border-radius:5px;color:rgba(0,0,0,.4);font-size:10px;height:20px;line-height:20px;position:absolute;top:380px;vertical-align:middle;width:140px}div.vis-color-picker div.vis-initial-color{left:10px;padding-left:2px;text-align:left}div.vis-color-picker div.vis-label{left:10px;position:absolute;width:300px}div.vis-color-picker div.vis-label.vis-brightness{top:300px}div.vis-color-picker div.vis-label.vis-opacity{top:338px}div.vis-color-picker div.vis-button{background-color:#f7f7f7;border:2px solid #d9d9d9;border-radius:10px;cursor:pointer;height:25px;line-height:25px;position:absolute;text-align:center;top:410px;vertical-align:middle;width:68px}div.vis-color-picker div.vis-button.vis-cancel{left:5px}div.vis-color-picker div.vis-button.vis-load{left:82px}div.vis-color-picker div.vis-button.vis-apply{left:159px}div.vis-color-picker div.vis-button.vis-save{left:236px}div.vis-color-picker input.vis-range{height:20px;width:290px}');_e('div.vis-configuration{display:block;float:left;font-size:12px;position:relative}div.vis-configuration-wrapper{display:block;width:700px}div.vis-configuration-wrapper:after{clear:both;content:"";display:block}div.vis-configuration.vis-config-option-container{background-color:#fff;border:2px solid #f7f8fa;border-radius:4px;display:block;left:10px;margin-top:20px;padding-left:5px;width:495px}div.vis-configuration.vis-config-button{background-color:#f7f8fa;border:2px solid #ceced0;border-radius:4px;cursor:pointer;display:block;height:25px;left:10px;line-height:25px;margin-bottom:30px;margin-top:20px;padding-left:5px;vertical-align:middle;width:495px}div.vis-configuration.vis-config-button.hover{background-color:#4588e6;border:2px solid #214373;color:#fff}div.vis-configuration.vis-config-item{display:block;float:left;height:25px;line-height:25px;vertical-align:middle;width:495px}div.vis-configuration.vis-config-item.vis-config-s2{background-color:#f7f8fa;border-radius:3px;left:10px;padding-left:5px}div.vis-configuration.vis-config-item.vis-config-s3{background-color:#e4e9f0;border-radius:3px;left:20px;padding-left:5px}div.vis-configuration.vis-config-item.vis-config-s4{background-color:#cfd8e6;border-radius:3px;left:30px;padding-left:5px}div.vis-configuration.vis-config-header{font-size:18px;font-weight:700}div.vis-configuration.vis-config-label{height:25px;line-height:25px;width:120px}div.vis-configuration.vis-config-label.vis-config-s3{width:110px}div.vis-configuration.vis-config-label.vis-config-s4{width:100px}div.vis-configuration.vis-config-colorBlock{border:1px solid #444;border-radius:2px;cursor:pointer;height:19px;margin:0;padding:0;top:1px;width:30px}input.vis-configuration.vis-config-checkbox{left:-5px}input.vis-configuration.vis-config-rangeinput{margin:0;padding:1px;pointer-events:none;position:relative;top:-5px;width:60px}input.vis-configuration.vis-config-range{-webkit-appearance:none;background-color:transparent;border:0 solid #fff;height:20px;width:300px}input.vis-configuration.vis-config-range::-webkit-slider-runnable-track{background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);border:1px solid #999;border-radius:3px;box-shadow:0 0 3px 0 #aaa;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);height:5px;width:300px}input.vis-configuration.vis-config-range::-webkit-slider-thumb{-webkit-appearance:none;background:#3876c2;background:-moz-linear-gradient(top,#3876c2 0,#385380 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#3876c2),color-stop(100%,#385380));background:-webkit-linear-gradient(top,#3876c2,#385380);background:-o-linear-gradient(top,#3876c2 0,#385380 100%);background:-ms-linear-gradient(top,#3876c2 0,#385380 100%);background:linear-gradient(180deg,#3876c2 0,#385380);border:1px solid #14334b;border-radius:50%;box-shadow:0 0 1px 0 #111927;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#3876c2",endColorstr="#385380",GradientType=0);height:17px;margin-top:-7px;width:17px}input.vis-configuration.vis-config-range:focus{outline:none}input.vis-configuration.vis-config-range:focus::-webkit-slider-runnable-track{background:#9d9d9d;background:-moz-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#9d9d9d),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#9d9d9d,#c8c8c8 99%);background:-o-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:linear-gradient(180deg,#9d9d9d 0,#c8c8c8 99%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#9d9d9d",endColorstr="#c8c8c8",GradientType=0)}input.vis-configuration.vis-config-range::-moz-range-track{background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);border:1px solid #999;border-radius:3px;box-shadow:0 0 3px 0 #aaa;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);height:10px;width:300px}input.vis-configuration.vis-config-range::-moz-range-thumb{background:#385380;border:none;border-radius:50%;height:16px;width:16px}input.vis-configuration.vis-config-range:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input.vis-configuration.vis-config-range::-ms-track{background:transparent;border-color:transparent;border-width:6px 0;color:transparent;height:5px;width:300px}input.vis-configuration.vis-config-range::-ms-fill-lower{background:#777;border-radius:10px}input.vis-configuration.vis-config-range::-ms-fill-upper{background:#ddd;border-radius:10px}input.vis-configuration.vis-config-range::-ms-thumb{background:#385380;border:none;border-radius:50%;height:16px;width:16px}input.vis-configuration.vis-config-range:focus::-ms-fill-lower{background:#888}input.vis-configuration.vis-config-range:focus::-ms-fill-upper{background:#ccc}.vis-configuration-popup{background:rgba(57,76,89,.85);border:2px solid #f2faff;border-radius:4px;color:#fff;font-size:14px;height:30px;line-height:30px;position:absolute;text-align:center;-webkit-transition:opacity .3s ease-in-out;-moz-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;width:150px}.vis-configuration-popup:after,.vis-configuration-popup:before{border:solid transparent;content:" ";height:0;left:100%;pointer-events:none;position:absolute;top:50%;width:0}.vis-configuration-popup:after{border-color:rgba(136,183,213,0) rgba(136,183,213,0) rgba(136,183,213,0) rgba(57,76,89,.85);border-width:8px;margin-top:-8px}.vis-configuration-popup:before{border-color:rgba(194,225,245,0) rgba(194,225,245,0) rgba(194,225,245,0) #f2faff;border-width:12px;margin-top:-12px}');_e("div.vis-tooltip{background-color:#f5f4ed;border:1px solid #808074;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;box-shadow:3px 3px 10px rgba(0,0,0,.2);color:#000;font-family:verdana;font-size:14px;padding:5px;pointer-events:none;position:absolute;visibility:hidden;white-space:nowrap;z-index:5}");var Ke={exports:{}};!function(g){function t(g){if(g)return function(g){for(var A in t.prototype)g[A]=t.prototype[A];return g}(g)}g.exports=t,t.prototype.on=t.prototype.addEventListener=function(g,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+g]=this._callbacks["$"+g]||[]).push(t),this},t.prototype.once=function(g,t){function A(){this.off(g,A),t.apply(this,arguments)}return A.fn=t,this.on(g,A),this},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(g,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var A,e=this._callbacks["$"+g];if(!e)return this;if(1==arguments.length)return delete this._callbacks["$"+g],this;for(var C=0;C<e.length;C++)if((A=e[C])===t||A.fn===t){e.splice(C,1);break}return 0===e.length&&delete this._callbacks["$"+g],this},t.prototype.emit=function(g){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),A=this._callbacks["$"+g],e=1;e<arguments.length;e++)t[e-1]=arguments[e];if(A){e=0;for(var C=(A=A.slice(0)).length;e<C;++e)A[e].apply(this,t)}return this},t.prototype.listeners=function(g){return this._callbacks=this._callbacks||{},this._callbacks["$"+g]||[]},t.prototype.hasListeners=function(g){return!!this.listeners(g).length}}(Ke);var He=A(Ke.exports),Xe={};Xe[dt("toStringTag")]="z";var Je,qe,$e,gC="[object z]"===String(Xe),tC=gC,AC=O,eC=y,CC=dt("toStringTag"),IC=Object,iC="Arguments"===eC(function(){return arguments}()),oC=tC?eC:function(g){var t,A,e;return void 0===g?"Undefined":null===g?"Null":"string"==typeof(A=function(g,t){try{return g[t]}catch(g){}}(t=IC(g),CC))?A:iC?eC(t):"Object"===(e=eC(t))&&AC(t.callee)?"Arguments":e},nC=oC,rC=String,sC=function(g){if("Symbol"===nC(g))throw new TypeError("Cannot convert a Symbol value to a string");return rC(g)},aC=u,dC=PA,hC=sC,lC=K,cC=aC("".charAt),uC=aC("".charCodeAt),pC=aC("".slice),fC=function(g){return function(t,A){var e,C,I=hC(lC(t)),i=dC(A),o=I.length;return i<0||i>=o?g?"":void 0:(e=uC(I,i))<55296||e>56319||i+1===o||(C=uC(I,i+1))<56320||C>57343?g?cC(I,i):e:g?pC(I,i,i+2):C-56320+(e-55296<<10)+65536}},vC={codeAt:fC(!1),charAt:fC(!0)},yC=O,mC=C.WeakMap,bC=yC(mC)&&/native code/.test(String(mC)),wC=et,kC=Ug("keys"),xC=function(g){return kC[g]||(kC[g]=wC(g))},EC=bC,OC=C,TC=gg,DC=uA,NC=qg,RC=Wg,PC=xC,MC=UA,BC="Object already initialized",zC=OC.TypeError,SC=OC.WeakMap;if(EC||RC.state){var ZC=RC.state||(RC.state=new SC);ZC.get=ZC.get,ZC.has=ZC.has,ZC.set=ZC.set,Je=function(g,t){if(ZC.has(g))throw new zC(BC);return t.facade=g,ZC.set(g,t),t},qe=function(g){return ZC.get(g)||{}},$e=function(g){return ZC.has(g)}}else{var FC=PC("state");MC[FC]=!0,Je=function(g,t){if(NC(g,FC))throw new zC(BC);return t.facade=g,DC(g,FC,t),t},qe=function(g){return NC(g,FC)?g[FC]:{}},$e=function(g){return NC(g,FC)}}var GC={set:Je,get:qe,has:$e,enforce:function(g){return $e(g)?qe(g):Je(g,{})},getterFor:function(g){return function(t){var A;if(!TC(t)||(A=qe(t)).type!==g)throw new zC("Incompatible receiver, "+g+" required");return A}}},jC=D,LC=qg,VC=Function.prototype,YC=jC&&Object.getOwnPropertyDescriptor,WC=LC(VC,"name"),QC={EXISTS:WC,PROPER:WC&&"something"===function(){}.name,CONFIGURABLE:WC&&(!jC||jC&&YC(VC,"name").configurable)},UC={},_C=D,KC=qt,HC=Jt,XC=AA,JC=J,qC=Ae;UC.f=_C&&!KC?Object.defineProperties:function(g,t){XC(g);for(var A,e=JC(t),C=qC(t),I=C.length,i=0;I>i;)HC.f(g,A=C[i++],e[A]);return g};var $C,gI=ig("document","documentElement"),tI=AA,AI=UC,eI=$A,CI=UA,II=gI,iI=Et,oI="prototype",nI="script",rI=xC("IE_PROTO"),sI=function(){},aI=function(g){return"<"+nI+">"+g+"</"+nI+">"},dI=function(g){g.write(aI("")),g.close();var t=g.parentWindow.Object;return g=null,t},hI=function(){try{$C=new ActiveXObject("htmlfile")}catch(g){}var g,t,A;hI="undefined"!=typeof document?document.domain&&$C?dI($C):(t=iI("iframe"),A="java"+nI+":",t.style.display="none",II.appendChild(t),t.src=String(A),(g=t.contentWindow.document).open(),g.write(aI("document.F=Object")),g.close(),g.F):dI($C);for(var e=eI.length;e--;)delete hI[oI][eI[e]];return hI()};CI[rI]=!0;var lI,cI,uI,pI=Object.create||function(g,t){var A;return null!==g?(sI[oI]=tI(g),A=new sI,sI[oI]=null,A[rI]=g):A=hI(),void 0===t?A:AI.f(A,t)},fI=!I((function(){function g(){}return g.prototype.constructor=null,Object.getPrototypeOf(new g)!==g.prototype})),vI=qg,yI=O,mI=Hg,bI=fI,wI=xC("IE_PROTO"),kI=Object,xI=kI.prototype,EI=bI?kI.getPrototypeOf:function(g){var t=mI(g);if(vI(t,wI))return t[wI];var A=t.constructor;return yI(A)&&t instanceof A?A.prototype:t instanceof kI?xI:null},OI=uA,TI=function(g,t,A,e){return e&&e.enumerable?g[t]=A:OI(g,t,A),g},DI=I,NI=O,RI=gg,PI=pI,MI=EI,BI=TI,zI=dt("iterator"),SI=!1;[].keys&&("next"in(uI=[].keys())?(cI=MI(MI(uI)))!==Object.prototype&&(lI=cI):SI=!0);var ZI=!RI(lI)||DI((function(){var g={};return lI[zI].call(g)!==g}));NI((lI=ZI?{}:PI(lI))[zI])||BI(lI,zI,(function(){return this}));var FI={IteratorPrototype:lI,BUGGY_SAFARI_ITERATORS:SI},GI=oC,jI=gC?{}.toString:function(){return"[object "+GI(this)+"]"},LI=gC,VI=Jt.f,YI=uA,WI=qg,QI=jI,UI=dt("toStringTag"),_I=function(g,t,A,e){if(g){var C=A?g:g.prototype;WI(C,UI)||VI(C,UI,{configurable:!0,value:t}),e&&!LI&&YI(C,"toString",QI)}},KI={},HI=FI.IteratorPrototype,XI=pI,JI=G,qI=_I,$I=KI,gi=function(){return this},ti=u,Ai=Rg,ei=O,Ci=String,Ii=TypeError,ii=function(g,t,A){try{return ti(Ai(Object.getOwnPropertyDescriptor(g,t)[A]))}catch(g){}},oi=AA,ni=function(g){if("object"==typeof g||ei(g))return g;throw new Ii("Can't set "+Ci(g)+" as a prototype")},ri=Object.setPrototypeOf||("__proto__"in{}?function(){var g,t=!1,A={};try{(g=ii(Object.prototype,"__proto__","set"))(A,[]),t=A instanceof Array}catch(g){}return function(A,e){return oi(A),ni(e),t?g(A,e):A.__proto__=e,A}}():void 0),si=TA,ai=P,di=QC,hi=function(g,t,A,e){var C=t+" Iterator";return g.prototype=XI(HI,{next:JI(+!e,A)}),qI(g,C,!1,!0),$I[C]=gi,g},li=EI,ci=_I,ui=TI,pi=KI,fi=FI,vi=di.PROPER,yi=fi.BUGGY_SAFARI_ITERATORS,mi=dt("iterator"),bi="keys",wi="values",ki="entries",xi=function(){return this},Ei=function(g,t,A,e,C,I,i){hi(A,t,e);var o,n,r,s=function(g){if(g===C&&c)return c;if(!yi&&g&&g in h)return h[g];switch(g){case bi:case wi:case ki:return function(){return new A(this,g)}}return function(){return new A(this)}},a=t+" Iterator",d=!1,h=g.prototype,l=h[mi]||h["@@iterator"]||C&&h[C],c=!yi&&l||s(C),u="Array"===t&&h.entries||l;if(u&&(o=li(u.call(new g)))!==Object.prototype&&o.next&&(ci(o,a,!0,!0),pi[a]=xi),vi&&C===wi&&l&&l.name!==wi&&(d=!0,c=function(){return ai(l,this)}),C)if(n={values:s(wi),keys:I?c:s(bi),entries:s(ki)},i)for(r in n)(yi||d||!(r in h))&&ui(h,r,n[r]);else si({target:t,proto:!0,forced:yi||d},n);return i&&h[mi]!==c&&ui(h,mi,c,{name:C}),pi[t]=c,n},Oi=function(g,t){return{value:g,done:t}},Ti=vC.charAt,Di=sC,Ni=GC,Ri=Ei,Pi=Oi,Mi="String Iterator",Bi=Ni.set,zi=Ni.getterFor(Mi);Ri(String,"String",(function(g){Bi(this,{type:Mi,string:Di(g),index:0})}),(function(){var g,t=zi(this),A=t.string,e=t.index;return e>=A.length?Pi(void 0,!0):(g=Ti(A,e),t.index+=g.length,Pi(g,!1))}));var Si=P,Zi=AA,Fi=Bg,Gi=function(g,t,A){var e,C;Zi(g);try{if(!(e=Fi(g,"return"))){if("throw"===t)throw A;return A}e=Si(e,g)}catch(g){C=!0,e=g}if("throw"===t)throw A;if(C)throw e;return Zi(e),A},ji=AA,Li=Gi,Vi=KI,Yi=dt("iterator"),Wi=Array.prototype,Qi=function(g){return void 0!==g&&(Vi.Array===g||Wi[Yi]===g)},Ui=O,_i=Wg,Ki=u(Function.toString);Ui(_i.inspectSource)||(_i.inspectSource=function(g){return Ki(g)});var Hi=_i.inspectSource,Xi=u,Ji=I,qi=O,$i=oC,go=Hi,to=function(){},Ao=[],eo=ig("Reflect","construct"),Co=/^\s*(?:class|function)\b/,Io=Xi(Co.exec),io=!Co.test(to),oo=function(g){if(!qi(g))return!1;try{return eo(to,Ao,g),!0}catch(g){return!1}},no=function(g){if(!qi(g))return!1;switch($i(g)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return io||!!Io(Co,go(g))}catch(g){return!0}};no.sham=!0;var ro=!eo||Ji((function(){var g;return oo(oo.call)||!oo(Object)||!oo((function(){g=!0}))||g}))?no:oo,so=bt,ao=Jt,ho=G,lo=function(g,t,A){var e=so(t);e in g?ao.f(g,e,ho(0,A)):g[e]=A},co=oC,uo=Bg,po=Q,fo=KI,vo=dt("iterator"),yo=function(g){if(!po(g))return uo(g,vo)||uo(g,"@@iterator")||fo[co(g)]},mo=P,bo=Rg,wo=AA,ko=Og,xo=yo,Eo=TypeError,Oo=function(g,t){var A=arguments.length<2?xo(g):t;if(bo(A))return wo(mo(A,g));throw new Eo(ko(g)+" is not iterable")},To=Xt,Do=P,No=Hg,Ro=function(g,t,A,e){try{return e?t(ji(A)[0],A[1]):t(A)}catch(t){Li(g,"throw",t)}},Po=Qi,Mo=ro,Bo=jA,zo=lo,So=Oo,Zo=yo,Fo=Array,Go=dt("iterator"),jo=!1;try{var Lo=0,Vo={next:function(){return{done:!!Lo++}},return:function(){jo=!0}};Vo[Go]=function(){return this},Array.from(Vo,(function(){throw 2}))}catch(g){}var Yo=function(g,t){try{if(!t&&!jo)return!1}catch(g){return!1}var A=!1;try{var e={};e[Go]=function(){return{next:function(){return{done:A=!0}}}},g(e)}catch(g){}return A},Wo=function(g){var t=No(g),A=Mo(this),e=arguments.length,C=e>1?arguments[1]:void 0,I=void 0!==C;I&&(C=To(C,e>2?arguments[2]:void 0));var i,o,n,r,s,a,d=Zo(t),h=0;if(!d||this===Fo&&Po(d))for(i=Bo(t),o=A?new this(i):Fo(i);i>h;h++)a=I?C(t[h],h):t[h],zo(o,h,a);else for(s=(r=So(t,d)).next,o=A?new this:[];!(n=Do(s,r)).done;h++)a=I?Ro(r,C,[n.value,h],!0):n.value,zo(o,h,a);return o.length=h,o};TA({target:"Array",stat:!0,forced:!Yo((function(g){Array.from(g)}))},{from:Wo});var Qo=tg.Array.from,Uo=A(Qo),_o=J,Ko=KI,Ho=GC;Jt.f;var Xo=Ei,Jo=Oi,qo="Array Iterator",$o=Ho.set,gn=Ho.getterFor(qo);Xo(Array,"Array",(function(g,t){$o(this,{type:qo,target:_o(g),index:0,kind:t})}),(function(){var g=gn(this),t=g.target,A=g.kind,e=g.index++;if(!t||e>=t.length)return g.target=void 0,Jo(void 0,!0);switch(A){case"keys":return Jo(e,!1);case"values":return Jo(t[e],!1)}return Jo([e,t[e]],!1)}),"values"),Ko.Arguments=Ko.Array;var tn=yo,An={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},en=C,Cn=oC,In=uA,on=KI,nn=dt("toStringTag");for(var rn in An){var sn=en[rn],an=sn&&sn.prototype;an&&Cn(an)!==nn&&In(an,nn,rn),on[rn]=on.Array}var dn=tn,hn=A(dn),ln=A(dn);function cn(g,t){if(!(g instanceof t))throw new TypeError("Cannot call a class as a function")}var un={exports:{}},pn=TA,fn=D,vn=Jt.f;pn({target:"Object",stat:!0,forced:Object.defineProperty!==vn,sham:!fn},{defineProperty:vn});var yn=tg.Object,mn=un.exports=function(g,t,A){return yn.defineProperty(g,t,A)};yn.defineProperty.sham&&(mn.sham=!0);var bn=un.exports,wn=bn,kn=A(wn),xn=y,En=Array.isArray||function(g){return"Array"===xn(g)},On=TypeError,Tn=function(g){if(g>9007199254740991)throw On("Maximum allowed index exceeded");return g},Dn=En,Nn=ro,Rn=gg,Pn=dt("species"),Mn=Array,Bn=function(g){var t;return Dn(g)&&(t=g.constructor,(Nn(t)&&(t===Mn||Dn(t.prototype))||Rn(t)&&null===(t=t[Pn]))&&(t=void 0)),void 0===t?Mn:t},zn=function(g,t){return new(Bn(g))(0===t?0:t)},Sn=I,Zn=cg,Fn=dt("species"),Gn=function(g){return Zn>=51||!Sn((function(){var t=[];return(t.constructor={})[Fn]=function(){return{foo:1}},1!==t[g](Boolean).foo}))},jn=TA,Ln=I,Vn=En,Yn=gg,Wn=Hg,Qn=jA,Un=Tn,_n=lo,Kn=zn,Hn=Gn,Xn=cg,Jn=dt("isConcatSpreadable"),qn=Xn>=51||!Ln((function(){var g=[];return g[Jn]=!1,g.concat()[0]!==g})),$n=function(g){if(!Yn(g))return!1;var t=g[Jn];return void 0!==t?!!t:Vn(g)};jn({target:"Array",proto:!0,arity:1,forced:!qn||!Hn("concat")},{concat:function(g){var t,A,e,C,I,i=Wn(this),o=Kn(i,0),n=0;for(t=-1,e=arguments.length;t<e;t++)if($n(I=-1===t?i:arguments[t]))for(C=Qn(I),Un(n+C),A=0;A<C;A++,n++)A in I&&_n(o,n,I[A]);else Un(n+1),_n(o,n++,I);return o.length=n,o}});var gr={},tr=qA,Ar=$A.concat("length","prototype");gr.f=Object.getOwnPropertyNames||function(g){return tr(g,Ar)};var er={},Cr=SA,Ir=jA,ir=lo,or=Array,nr=Math.max,rr=function(g,t,A){for(var e=Ir(g),C=Cr(t,e),I=Cr(void 0===A?e:A,e),i=or(nr(I-C,0)),o=0;C<I;C++,o++)ir(i,o,g[C]);return i.length=o,i},sr=y,ar=J,dr=gr.f,hr=rr,lr="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];er.f=function(g){return lr&&"Window"===sr(g)?function(g){try{return dr(g)}catch(g){return hr(lr)}}(g):dr(ar(g))};var cr=Jt,ur=function(g,t,A){return cr.f(g,t,A)},pr={},fr=dt;pr.f=fr;var vr=tg,yr=qg,mr=pr,br=Jt.f,wr=function(g){var t=vr.Symbol||(vr.Symbol={});yr(t,g)||br(t,g,{value:mr.f(g)})},kr=P,xr=ig,Er=dt,Or=TI,Tr=function(){var g=xr("Symbol"),t=g&&g.prototype,A=t&&t.valueOf,e=Er("toPrimitive");t&&!t[e]&&Or(t,e,(function(g){return kr(A,this)}),{arity:1})},Dr=Xt,Nr=W,Rr=Hg,Pr=jA,Mr=zn,Br=u([].push),zr=function(g){var t=1===g,A=2===g,e=3===g,C=4===g,I=6===g,i=7===g,o=5===g||I;return function(n,r,s,a){for(var d,h,l=Rr(n),c=Nr(l),u=Dr(r,s),p=Pr(c),f=0,v=a||Mr,y=t?v(n,p):A||i?v(n,0):void 0;p>f;f++)if((o||f in c)&&(h=u(d=c[f],f,l),g))if(t)y[f]=h;else if(h)switch(g){case 3:return!0;case 5:return d;case 6:return f;case 2:Br(y,d)}else switch(g){case 4:return!1;case 7:Br(y,d)}return I?-1:e||C?C:y}},Sr={forEach:zr(0),map:zr(1),filter:zr(2),some:zr(3),every:zr(4),find:zr(5),findIndex:zr(6),filterReject:zr(7)},Zr=TA,Fr=C,Gr=P,jr=u,Lr=D,Vr=vg,Yr=I,Wr=qg,Qr=og,Ur=AA,_r=J,Kr=bt,Hr=sC,Xr=G,Jr=pI,qr=Ae,$r=gr,gs=er,ts=ee,As=T,es=Jt,Cs=UC,Is=M,is=TI,os=ur,ns=Ug,rs=UA,ss=et,as=dt,ds=pr,hs=wr,ls=Tr,cs=_I,us=GC,ps=Sr.forEach,fs=xC("hidden"),vs="Symbol",ys="prototype",ms=us.set,bs=us.getterFor(vs),ws=Object[ys],ks=Fr.Symbol,xs=ks&&ks[ys],Es=Fr.RangeError,Os=Fr.TypeError,Ts=Fr.QObject,Ds=As.f,Ns=es.f,Rs=gs.f,Ps=Is.f,Ms=jr([].push),Bs=ns("symbols"),zs=ns("op-symbols"),Ss=ns("wks"),Zs=!Ts||!Ts[ys]||!Ts[ys].findChild,Fs=function(g,t,A){var e=Ds(ws,t);e&&delete ws[t],Ns(g,t,A),e&&g!==ws&&Ns(ws,t,e)},Gs=Lr&&Yr((function(){return 7!==Jr(Ns({},"a",{get:function(){return Ns(this,"a",{value:7}).a}})).a}))?Fs:Ns,js=function(g,t){var A=Bs[g]=Jr(xs);return ms(A,{type:vs,tag:g,description:t}),Lr||(A.description=t),A},Ls=function(g,t,A){g===ws&&Ls(zs,t,A),Ur(g);var e=Kr(t);return Ur(A),Wr(Bs,e)?(A.enumerable?(Wr(g,fs)&&g[fs][e]&&(g[fs][e]=!1),A=Jr(A,{enumerable:Xr(0,!1)})):(Wr(g,fs)||Ns(g,fs,Xr(1,{})),g[fs][e]=!0),Gs(g,e,A)):Ns(g,e,A)},Vs=function(g,t){Ur(g);var A=_r(t),e=qr(A).concat(Us(A));return ps(e,(function(t){Lr&&!Gr(Ys,A,t)||Ls(g,t,A[t])})),g},Ys=function(g){var t=Kr(g),A=Gr(Ps,this,t);return!(this===ws&&Wr(Bs,t)&&!Wr(zs,t))&&(!(A||!Wr(this,t)||!Wr(Bs,t)||Wr(this,fs)&&this[fs][t])||A)},Ws=function(g,t){var A=_r(g),e=Kr(t);if(A!==ws||!Wr(Bs,e)||Wr(zs,e)){var C=Ds(A,e);return!C||!Wr(Bs,e)||Wr(A,fs)&&A[fs][e]||(C.enumerable=!0),C}},Qs=function(g){var t=Rs(_r(g)),A=[];return ps(t,(function(g){Wr(Bs,g)||Wr(rs,g)||Ms(A,g)})),A},Us=function(g){var t=g===ws,A=Rs(t?zs:_r(g)),e=[];return ps(A,(function(g){!Wr(Bs,g)||t&&!Wr(ws,g)||Ms(e,Bs[g])})),e};Vr||(ks=function(){if(Qr(xs,this))throw new Os("Symbol is not a constructor");var g=arguments.length&&void 0!==arguments[0]?Hr(arguments[0]):void 0,t=ss(g),A=function(g){this===ws&&Gr(A,zs,g),Wr(this,fs)&&Wr(this[fs],t)&&(this[fs][t]=!1);var e=Xr(1,g);try{Gs(this,t,e)}catch(g){if(!(g instanceof Es))throw g;Fs(this,t,e)}};return Lr&&Zs&&Gs(ws,t,{configurable:!0,set:A}),js(t,g)},is(xs=ks[ys],"toString",(function(){return bs(this).tag})),is(ks,"withoutSetter",(function(g){return js(ss(g),g)})),Is.f=Ys,es.f=Ls,Cs.f=Vs,As.f=Ws,$r.f=gs.f=Qs,ts.f=Us,ds.f=function(g){return js(as(g),g)},Lr&&os(xs,"description",{configurable:!0,get:function(){return bs(this).description}})),Zr({global:!0,constructor:!0,wrap:!0,forced:!Vr,sham:!Vr},{Symbol:ks}),ps(qr(Ss),(function(g){hs(g)})),Zr({target:vs,stat:!0,forced:!Vr},{useSetter:function(){Zs=!0},useSimple:function(){Zs=!1}}),Zr({target:"Object",stat:!0,forced:!Vr,sham:!Lr},{create:function(g,t){return void 0===t?Jr(g):Vs(Jr(g),t)},defineProperty:Ls,defineProperties:Vs,getOwnPropertyDescriptor:Ws}),Zr({target:"Object",stat:!0,forced:!Vr},{getOwnPropertyNames:Qs}),ls(),cs(ks,vs),rs[fs]=!0;var _s=vg&&!!Symbol.for&&!!Symbol.keyFor,Ks=TA,Hs=ig,Xs=qg,Js=sC,qs=Ug,$s=_s,ga=qs("string-to-symbol-registry"),ta=qs("symbol-to-string-registry");Ks({target:"Symbol",stat:!0,forced:!$s},{for:function(g){var t=Js(g);if(Xs(ga,t))return ga[t];var A=Hs("Symbol")(t);return ga[t]=A,ta[A]=t,A}});var Aa=TA,ea=qg,Ca=xg,Ia=Og,ia=_s,oa=Ug("symbol-to-string-registry");Aa({target:"Symbol",stat:!0,forced:!ia},{keyFor:function(g){if(!Ca(g))throw new TypeError(Ia(g)+" is not a symbol");if(ea(oa,g))return oa[g]}});var na=En,ra=O,sa=y,aa=sC,da=u([].push),ha=TA,la=ig,ca=a,ua=P,pa=u,fa=I,va=O,ya=xg,ma=ve,ba=function(g){if(ra(g))return g;if(na(g)){for(var t=g.length,A=[],e=0;e<t;e++){var C=g[e];"string"==typeof C?da(A,C):"number"!=typeof C&&"Number"!==sa(C)&&"String"!==sa(C)||da(A,aa(C))}var I=A.length,i=!0;return function(g,t){if(i)return i=!1,t;if(na(this))return t;for(var e=0;e<I;e++)if(A[e]===g)return t}}},wa=vg,ka=String,xa=la("JSON","stringify"),Ea=pa(/./.exec),Oa=pa("".charAt),Ta=pa("".charCodeAt),Da=pa("".replace),Na=pa(1..toString),Ra=/[\uD800-\uDFFF]/g,Pa=/^[\uD800-\uDBFF]$/,Ma=/^[\uDC00-\uDFFF]$/,Ba=!wa||fa((function(){var g=la("Symbol")("stringify detection");return"[null]"!==xa([g])||"{}"!==xa({a:g})||"{}"!==xa(Object(g))})),za=fa((function(){return'"\\udf06\\ud834"'!==xa("\udf06\ud834")||'"\\udead"'!==xa("\udead")})),Sa=function(g,t){var A=ma(arguments),e=ba(t);if(va(e)||void 0!==g&&!ya(g))return A[1]=function(g,t){if(va(e)&&(t=ua(e,this,ka(g),t)),!ya(t))return t},ca(xa,null,A)},Za=function(g,t,A){var e=Oa(A,t-1),C=Oa(A,t+1);return Ea(Pa,g)&&!Ea(Ma,C)||Ea(Ma,g)&&!Ea(Pa,e)?"\\u"+Na(Ta(g,0),16):g};xa&&ha({target:"JSON",stat:!0,arity:3,forced:Ba||za},{stringify:function(g,t,A){var e=ma(arguments),C=ca(Ba?Sa:xa,null,e);return za&&"string"==typeof C?Da(C,Ra,Za):C}});var Fa=ee,Ga=Hg;TA({target:"Object",stat:!0,forced:!vg||I((function(){Fa.f(1)}))},{getOwnPropertySymbols:function(g){var t=Fa.f;return t?t(Ga(g)):[]}}),wr("asyncIterator"),wr("hasInstance"),wr("isConcatSpreadable"),wr("iterator"),wr("match"),wr("matchAll"),wr("replace"),wr("search"),wr("species"),wr("split");var ja=Tr;wr("toPrimitive"),ja();var La=ig,Va=_I;wr("toStringTag"),Va(La("Symbol"),"Symbol"),wr("unscopables"),_I(C.JSON,"JSON",!0);var Ya=tg.Symbol,Wa=dt,Qa=Jt.f,Ua=Wa("metadata"),_a=Function.prototype;void 0===_a[Ua]&&Qa(_a,Ua,{value:null}),wr("asyncDispose"),wr("dispose"),wr("metadata");var Ka=Ya,Ha=u,Xa=ig("Symbol"),Ja=Xa.keyFor,qa=Ha(Xa.prototype.valueOf),$a=Xa.isRegisteredSymbol||function(g){try{return void 0!==Ja(qa(g))}catch(g){return!1}};TA({target:"Symbol",stat:!0},{isRegisteredSymbol:$a});for(var gd=Ug,td=ig,Ad=u,ed=xg,Cd=dt,Id=td("Symbol"),id=Id.isWellKnownSymbol,od=td("Object","getOwnPropertyNames"),nd=Ad(Id.prototype.valueOf),rd=gd("wks"),sd=0,ad=od(Id),dd=ad.length;sd<dd;sd++)try{var hd=ad[sd];ed(Id[hd])&&Cd(hd)}catch(g){}var ld=function(g){if(id&&id(g))return!0;try{for(var t=nd(g),A=0,e=od(rd),C=e.length;A<C;A++)if(rd[e[A]]==t)return!0}catch(g){}return!1};TA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:ld}),wr("matcher"),wr("observable"),TA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:$a}),TA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:ld}),wr("metadataKey"),wr("patternMatch"),wr("replaceAll");var cd=Ka,ud=A(cd),pd=pr.f("iterator"),fd=pd,vd=A(fd);function yd(g){return yd="function"==typeof ud&&"symbol"==typeof vd?function(g){return typeof g}:function(g){return g&&"function"==typeof ud&&g.constructor===ud&&g!==ud.prototype?"symbol":typeof g},yd(g)}var md=A(pr.f("toPrimitive"));function bd(g){var t=function(g,t){if("object"!==yd(g)||null===g)return g;var A=g[md];if(void 0!==A){var e=A.call(g,t||"default");if("object"!==yd(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(g)}(g,"string");return"symbol"===yd(t)?t:String(t)}function wd(g,t){for(var A=0;A<t.length;A++){var e=t[A];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),kn(g,bd(e.key),e)}}function kd(g,t,A){return t&&wd(g.prototype,t),A&&wd(g,A),kn(g,"prototype",{writable:!1}),g}TA({target:"Array",stat:!0},{isArray:En});var xd=tg.Array.isArray,Ed=A(xd);var Od=D,Td=En,Dd=TypeError,Nd=Object.getOwnPropertyDescriptor,Rd=Od&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(g){return g instanceof TypeError}}()?function(g,t){if(Td(g)&&!Nd(g,"length").writable)throw new Dd("Cannot set read only .length");return g.length=t}:function(g,t){return g.length=t},Pd=Hg,Md=jA,Bd=Rd,zd=Tn;TA({target:"Array",proto:!0,arity:1,forced:I((function(){return 4294967297!==[].push.call({length:4294967296},1)}))||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(g){return g instanceof TypeError}}()},{push:function(g){var t=Pd(this),A=Md(t),e=arguments.length;zd(A+e);for(var C=0;C<e;C++)t[A]=arguments[C],A++;return Bd(t,A),A}});var Sd=Me("Array").push,Zd=og,Fd=Sd,Gd=Array.prototype,jd=function(g){var t=g.push;return g===Gd||Zd(Gd,g)&&t===Gd.push?Fd:t},Ld=jd,Vd=A(Ld);var Yd=TA,Wd=En,Qd=ro,Ud=gg,_d=SA,Kd=jA,Hd=J,Xd=lo,Jd=dt,qd=ve,$d=Gn("slice"),gh=Jd("species"),th=Array,Ah=Math.max;Yd({target:"Array",proto:!0,forced:!$d},{slice:function(g,t){var A,e,C,I=Hd(this),i=Kd(I),o=_d(g,i),n=_d(void 0===t?i:t,i);if(Wd(I)&&(A=I.constructor,(Qd(A)&&(A===th||Wd(A.prototype))||Ud(A)&&null===(A=A[gh]))&&(A=void 0),A===th||void 0===A))return qd(I,o,n);for(e=new(void 0===A?th:A)(Ah(n-o,0)),C=0;o<n;o++,C++)o in I&&Xd(e,C,I[o]);return e.length=C,e}});var eh=Me("Array").slice,Ch=og,Ih=eh,ih=Array.prototype,oh=function(g){var t=g.slice;return g===ih||Ch(ih,g)&&t===ih.slice?Ih:t},nh=oh,rh=nh,sh=A(rh),ah=A(Qo);function dh(g,t){(null==t||t>g.length)&&(t=g.length);for(var A=0,e=new Array(t);A<t;A++)e[A]=g[A];return e}function hh(g,t){var A;if(g){if("string"==typeof g)return dh(g,t);var e=sh(A=Object.prototype.toString.call(g)).call(A,8,-1);return"Object"===e&&g.constructor&&(e=g.constructor.name),"Map"===e||"Set"===e?ah(g):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?dh(g,t):void 0}}function lh(g,t){return function(g){if(Ed(g))return g}(g)||function(g,t){var A=null==g?null:void 0!==ud&&hn(g)||g["@@iterator"];if(null!=A){var e,C,I,i,o=[],n=!0,r=!1;try{if(I=(A=A.call(g)).next,0===t){if(Object(A)!==A)return;n=!1}else for(;!(n=(e=I.call(A)).done)&&(Vd(o).call(o,e.value),o.length!==t);n=!0);}catch(g){r=!0,C=g}finally{try{if(!n&&null!=A.return&&(i=A.return(),Object(i)!==i))return}finally{if(r)throw C}}return o}}(g,t)||hh(g,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ch(g){return function(g){if(Ed(g))return dh(g)}(g)||function(g){if(void 0!==ud&&null!=hn(g)||null!=g["@@iterator"])return ah(g)}(g)||hh(g)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var uh=A(Ya),ph=Me("Array").concat,fh=og,vh=ph,yh=Array.prototype,mh=function(g){var t=g.concat;return g===yh||fh(yh,g)&&t===yh.concat?vh:t},bh=A(mh),wh=A(nh),kh=ig,xh=gr,Eh=ee,Oh=AA,Th=u([].concat),Dh=kh("Reflect","ownKeys")||function(g){var t=xh.f(Oh(g)),A=Eh.f;return A?Th(t,A(g)):t};TA({target:"Reflect",stat:!0},{ownKeys:Dh});var Nh=A(tg.Reflect.ownKeys),Rh=A(xd),Ph=Sr.map;TA({target:"Array",proto:!0,forced:!Gn("map")},{map:function(g){return Ph(this,g,arguments.length>1?arguments[1]:void 0)}});var Mh=Me("Array").map,Bh=og,zh=Mh,Sh=Array.prototype,Zh=function(g){var t=g.map;return g===Sh||Bh(Sh,g)&&t===Sh.map?zh:t},Fh=A(Zh),Gh=Hg,jh=Ae;TA({target:"Object",stat:!0,forced:I((function(){jh(1)}))},{keys:function(g){return jh(Gh(g))}});var Lh=A(tg.Object.keys),Vh=TA,Yh=Date,Wh=u(Yh.prototype.getTime);Vh({target:"Date",stat:!0},{now:function(){return Wh(new Yh)}});var Qh=A(tg.Date.now),Uh=I,_h=function(g,t){var A=[][g];return!!A&&Uh((function(){A.call(null,t||function(){return 1},1)}))},Kh=Sr.forEach,Hh=_h("forEach")?[].forEach:function(g){return Kh(this,g,arguments.length>1?arguments[1]:void 0)};TA({target:"Array",proto:!0,forced:[].forEach!==Hh},{forEach:Hh});var Xh=Me("Array").forEach,Jh=oC,qh=qg,$h=og,gl=Xh,tl=Array.prototype,Al={DOMTokenList:!0,NodeList:!0},el=function(g){var t=g.forEach;return g===tl||$h(tl,g)&&t===tl.forEach||qh(Al,Jh(g))?gl:t},Cl=A(el),Il=TA,il=En,ol=u([].reverse),nl=[1,2];Il({target:"Array",proto:!0,forced:String(nl)===String(nl.reverse())},{reverse:function(){return il(this)&&(this.length=this.length),ol(this)}});var rl=Me("Array").reverse,sl=og,al=rl,dl=Array.prototype,hl=function(g){var t=g.reverse;return g===dl||sl(dl,g)&&t===dl.reverse?al:t},ll=hl,cl=A(ll),ul=Og,pl=TypeError,fl=function(g,t){if(!delete g[t])throw new pl("Cannot delete property "+ul(t)+" of "+ul(g))},vl=TA,yl=Hg,ml=SA,bl=PA,wl=jA,kl=Rd,xl=Tn,El=zn,Ol=lo,Tl=fl,Dl=Gn("splice"),Nl=Math.max,Rl=Math.min;vl({target:"Array",proto:!0,forced:!Dl},{splice:function(g,t){var A,e,C,I,i,o,n=yl(this),r=wl(n),s=ml(g,r),a=arguments.length;for(0===a?A=e=0:1===a?(A=0,e=r-s):(A=a-2,e=Rl(Nl(bl(t),0),r-s)),xl(r+A-e),C=El(n,e),I=0;I<e;I++)(i=s+I)in n&&Ol(C,I,n[i]);if(C.length=e,A<e){for(I=s;I<r-e;I++)o=I+A,(i=I+e)in n?n[o]=n[i]:Tl(n,o);for(I=r;I>r-e+A;I--)Tl(n,I-1)}else if(A>e)for(I=r-e;I>s;I--)o=I+A-1,(i=I+e-1)in n?n[o]=n[i]:Tl(n,o);for(I=0;I<A;I++)n[I+s]=arguments[I+2];return kl(n,r-e+A),C}});var Pl=Me("Array").splice,Ml=og,Bl=Pl,zl=Array.prototype,Sl=function(g){var t=g.splice;return g===zl||Ml(zl,g)&&t===zl.splice?Bl:t},Zl=A(Sl),Fl=QA.includes;TA({target:"Array",proto:!0,forced:I((function(){return!Array(1).includes()}))},{includes:function(g){return Fl(this,g,arguments.length>1?arguments[1]:void 0)}});var Gl=Me("Array").includes,jl=gg,Ll=y,Vl=dt("match"),Yl=function(g){var t;return jl(g)&&(void 0!==(t=g[Vl])?!!t:"RegExp"===Ll(g))},Wl=TypeError,Ql=dt("match"),Ul=TA,_l=function(g){if(Yl(g))throw new Wl("The method doesn't accept regular expressions");return g},Kl=K,Hl=sC,Xl=function(g){var t=/./;try{"/./"[g](t)}catch(A){try{return t[Ql]=!1,"/./"[g](t)}catch(g){}}return!1},Jl=u("".indexOf);Ul({target:"String",proto:!0,forced:!Xl("includes")},{includes:function(g){return!!~Jl(Hl(Kl(this)),Hl(_l(g)),arguments.length>1?arguments[1]:void 0)}});var ql=Me("String").includes,$l=og,gc=Gl,tc=ql,Ac=Array.prototype,ec=String.prototype,Cc=function(g){var t=g.includes;return g===Ac||$l(Ac,g)&&t===Ac.includes?gc:"string"==typeof g||g===ec||$l(ec,g)&&t===ec.includes?tc:t},Ic=A(Cc),ic=Hg,oc=EI,nc=fI;TA({target:"Object",stat:!0,forced:I((function(){oc(1)})),sham:!nc},{getPrototypeOf:function(g){return oc(ic(g))}});var rc=tg.Object.getPrototypeOf,sc=A(rc),ac=Sr.filter;TA({target:"Array",proto:!0,forced:!Gn("filter")},{filter:function(g){return ac(this,g,arguments.length>1?arguments[1]:void 0)}});var dc=Me("Array").filter,hc=og,lc=dc,cc=Array.prototype,uc=function(g){var t=g.filter;return g===cc||hc(cc,g)&&t===cc.filter?lc:t},pc=A(uc),fc="\t\n\v\f\r                　\u2028\u2029\ufeff",vc=K,yc=sC,mc=fc,bc=u("".replace),wc=RegExp("^["+mc+"]+"),kc=RegExp("(^|[^"+mc+"])["+mc+"]+$"),xc=function(g){return function(t){var A=yc(vc(t));return 1&g&&(A=bc(A,wc,"")),2&g&&(A=bc(A,kc,"$1")),A}},Ec={start:xc(1),end:xc(2),trim:xc(3)},Oc=C,Tc=I,Dc=u,Nc=sC,Rc=Ec.trim,Pc=fc,Mc=Oc.parseInt,Bc=Oc.Symbol,zc=Bc&&Bc.iterator,Sc=/^[+-]?0x/i,Zc=Dc(Sc.exec),Fc=8!==Mc(Pc+"08")||22!==Mc(Pc+"0x16")||zc&&!Tc((function(){Mc(Object(zc))}))?function(g,t){var A=Rc(Nc(g));return Mc(A,t>>>0||(Zc(Sc,A)?16:10))}:Mc;TA({global:!0,forced:parseInt!==Fc},{parseInt:Fc});var Gc=A(tg.parseInt),jc=TA,Lc=QA.indexOf,Vc=_h,Yc=w([].indexOf),Wc=!!Yc&&1/Yc([1],1,-0)<0;jc({target:"Array",proto:!0,forced:Wc||!Vc("indexOf")},{indexOf:function(g){var t=arguments.length>1?arguments[1]:void 0;return Wc?Yc(this,g,t)||0:Lc(this,g,t)}});var Qc=Me("Array").indexOf,Uc=og,_c=Qc,Kc=Array.prototype,Hc=function(g){var t=g.indexOf;return g===Kc||Uc(Kc,g)&&t===Kc.indexOf?_c:t},Xc=A(Hc);TA({target:"Object",stat:!0,sham:!D},{create:pI});var Jc=tg.Object,qc=function(g,t){return Jc.create(g,t)},$c=A(qc),gu=tg,tu=a;gu.JSON||(gu.JSON={stringify:JSON.stringify});var Au=function(g,t,A){return tu(gu.JSON.stringify,null,arguments)},eu=A(Au),Cu="function"==typeof Bun&&Bun&&"string"==typeof Bun.version,Iu=TypeError,iu=function(g,t){if(g<t)throw new Iu("Not enough arguments");return g},ou=C,nu=a,ru=O,su=Cu,au=ng,du=ve,hu=iu,lu=ou.Function,cu=/MSIE .\./.test(au)||su&&function(){var g=ou.Bun.version.split(".");return g.length<3||"0"===g[0]&&(g[1]<3||"3"===g[1]&&"0"===g[2])}(),uu=function(g,t){var A=t?2:1;return cu?function(e,C){var I=hu(arguments.length,1)>A,i=ru(e)?e:lu(e),o=I?du(arguments,A):[],n=I?function(){nu(i,this,o)}:i;return t?g(n,C):g(n)}:g},pu=TA,fu=C,vu=uu(fu.setInterval,!0);pu({global:!0,bind:!0,forced:fu.setInterval!==vu},{setInterval:vu});var yu=TA,mu=C,bu=uu(mu.setTimeout,!0);yu({global:!0,bind:!0,forced:mu.setTimeout!==bu},{setTimeout:bu});var wu=A(tg.setTimeout),ku=Hg,xu=SA,Eu=jA,Ou=function(g){for(var t=ku(this),A=Eu(t),e=arguments.length,C=xu(e>1?arguments[1]:void 0,A),I=e>2?arguments[2]:void 0,i=void 0===I?A:xu(I,A);i>C;)t[C++]=g;return t};TA({target:"Array",proto:!0},{fill:Ou});var Tu,Du=Me("Array").fill,Nu=og,Ru=Du,Pu=Array.prototype,Mu=function(g){var t=g.fill;return g===Pu||Nu(Pu,g)&&t===Pu.fill?Ru:t},Bu=A(Mu);
/*! Hammer.JS - v2.0.17-rc - 2019-12-16
	 * http://naver.github.io/egjs
	 *
	 * Forked By Naver egjs
	 * Copyright (c) hammerjs
	 * Licensed under the MIT license */
function zu(){return zu=Object.assign||function(g){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var e in A)Object.prototype.hasOwnProperty.call(A,e)&&(g[e]=A[e])}return g},zu.apply(this,arguments)}function Su(g,t){g.prototype=Object.create(t.prototype),g.prototype.constructor=g,g.__proto__=t}function Zu(g){if(void 0===g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}Tu="function"!=typeof Object.assign?function(g){if(null==g)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(g),A=1;A<arguments.length;A++){var e=arguments[A];if(null!=e)for(var C in e)e.hasOwnProperty(C)&&(t[C]=e[C])}return t}:Object.assign;var Fu,Gu=Tu,ju=["","webkit","Moz","MS","ms","o"],Lu="undefined"==typeof document?{style:{}}:document.createElement("div"),Vu=Math.round,Yu=Math.abs,Wu=Date.now;function Qu(g,t){for(var A,e,C=t[0].toUpperCase()+t.slice(1),I=0;I<ju.length;){if((e=(A=ju[I])?A+C:t)in g)return e;I++}}Fu="undefined"==typeof window?{}:window;var Uu=Qu(Lu.style,"touchAction"),_u=void 0!==Uu;var Ku="compute",Hu="auto",Xu="manipulation",Ju="none",qu="pan-x",$u="pan-y",gp=function(){if(!_u)return!1;var g={},t=Fu.CSS&&Fu.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(A){return g[A]=!t||Fu.CSS.supports("touch-action",A)})),g}(),tp="ontouchstart"in Fu,Ap=void 0!==Qu(Fu,"PointerEvent"),ep=tp&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),Cp="touch",Ip="mouse",ip=25,op=1,np=4,rp=8,sp=1,ap=2,dp=4,hp=8,lp=16,cp=ap|dp,up=hp|lp,pp=cp|up,fp=["x","y"],vp=["clientX","clientY"];function yp(g,t,A){var e;if(g)if(g.forEach)g.forEach(t,A);else if(void 0!==g.length)for(e=0;e<g.length;)t.call(A,g[e],e,g),e++;else for(e in g)g.hasOwnProperty(e)&&t.call(A,g[e],e,g)}function mp(g,t){return"function"==typeof g?g.apply(t&&t[0]||void 0,t):g}function bp(g,t){return g.indexOf(t)>-1}var wp=function(){function g(g,t){this.manager=g,this.set(t)}var t=g.prototype;return t.set=function(g){g===Ku&&(g=this.compute()),_u&&this.manager.element.style&&gp[g]&&(this.manager.element.style[Uu]=g),this.actions=g.toLowerCase().trim()},t.update=function(){this.set(this.manager.options.touchAction)},t.compute=function(){var g=[];return yp(this.manager.recognizers,(function(t){mp(t.options.enable,[t])&&(g=g.concat(t.getTouchAction()))})),function(g){if(bp(g,Ju))return Ju;var t=bp(g,qu),A=bp(g,$u);return t&&A?Ju:t||A?t?qu:$u:bp(g,Xu)?Xu:Hu}(g.join(" "))},t.preventDefaults=function(g){var t=g.srcEvent,A=g.offsetDirection;if(this.manager.session.prevented)t.preventDefault();else{var e=this.actions,C=bp(e,Ju)&&!gp[Ju],I=bp(e,$u)&&!gp[$u],i=bp(e,qu)&&!gp[qu];if(C){var o=1===g.pointers.length,n=g.distance<2,r=g.deltaTime<250;if(o&&n&&r)return}if(!i||!I)return C||I&&A&cp||i&&A&up?this.preventSrc(t):void 0}},t.preventSrc=function(g){this.manager.session.prevented=!0,g.preventDefault()},g}();function kp(g,t){for(;g;){if(g===t)return!0;g=g.parentNode}return!1}function xp(g){var t=g.length;if(1===t)return{x:Vu(g[0].clientX),y:Vu(g[0].clientY)};for(var A=0,e=0,C=0;C<t;)A+=g[C].clientX,e+=g[C].clientY,C++;return{x:Vu(A/t),y:Vu(e/t)}}function Ep(g){for(var t=[],A=0;A<g.pointers.length;)t[A]={clientX:Vu(g.pointers[A].clientX),clientY:Vu(g.pointers[A].clientY)},A++;return{timeStamp:Wu(),pointers:t,center:xp(t),deltaX:g.deltaX,deltaY:g.deltaY}}function Op(g,t,A){A||(A=fp);var e=t[A[0]]-g[A[0]],C=t[A[1]]-g[A[1]];return Math.sqrt(e*e+C*C)}function Tp(g,t,A){A||(A=fp);var e=t[A[0]]-g[A[0]],C=t[A[1]]-g[A[1]];return 180*Math.atan2(C,e)/Math.PI}function Dp(g,t){return g===t?sp:Yu(g)>=Yu(t)?g<0?ap:dp:t<0?hp:lp}function Np(g,t,A){return{x:t/g||0,y:A/g||0}}function Rp(g,t){var A=g.session,e=t.pointers,C=e.length;A.firstInput||(A.firstInput=Ep(t)),C>1&&!A.firstMultiple?A.firstMultiple=Ep(t):1===C&&(A.firstMultiple=!1);var I=A.firstInput,i=A.firstMultiple,o=i?i.center:I.center,n=t.center=xp(e);t.timeStamp=Wu(),t.deltaTime=t.timeStamp-I.timeStamp,t.angle=Tp(o,n),t.distance=Op(o,n),function(g,t){var A=t.center,e=g.offsetDelta||{},C=g.prevDelta||{},I=g.prevInput||{};t.eventType!==op&&I.eventType!==np||(C=g.prevDelta={x:I.deltaX||0,y:I.deltaY||0},e=g.offsetDelta={x:A.x,y:A.y}),t.deltaX=C.x+(A.x-e.x),t.deltaY=C.y+(A.y-e.y)}(A,t),t.offsetDirection=Dp(t.deltaX,t.deltaY);var r,s,a=Np(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=a.x,t.overallVelocityY=a.y,t.overallVelocity=Yu(a.x)>Yu(a.y)?a.x:a.y,t.scale=i?(r=i.pointers,Op((s=e)[0],s[1],vp)/Op(r[0],r[1],vp)):1,t.rotation=i?function(g,t){return Tp(t[1],t[0],vp)+Tp(g[1],g[0],vp)}(i.pointers,e):0,t.maxPointers=A.prevInput?t.pointers.length>A.prevInput.maxPointers?t.pointers.length:A.prevInput.maxPointers:t.pointers.length,function(g,t){var A,e,C,I,i=g.lastInterval||t,o=t.timeStamp-i.timeStamp;if(t.eventType!==rp&&(o>ip||void 0===i.velocity)){var n=t.deltaX-i.deltaX,r=t.deltaY-i.deltaY,s=Np(o,n,r);e=s.x,C=s.y,A=Yu(s.x)>Yu(s.y)?s.x:s.y,I=Dp(n,r),g.lastInterval=t}else A=i.velocity,e=i.velocityX,C=i.velocityY,I=i.direction;t.velocity=A,t.velocityX=e,t.velocityY=C,t.direction=I}(A,t);var d,h=g.element,l=t.srcEvent;kp(d=l.composedPath?l.composedPath()[0]:l.path?l.path[0]:l.target,h)&&(h=d),t.target=h}function Pp(g,t,A){var e=A.pointers.length,C=A.changedPointers.length,I=t&op&&e-C==0,i=t&(np|rp)&&e-C==0;A.isFirst=!!I,A.isFinal=!!i,I&&(g.session={}),A.eventType=t,Rp(g,A),g.emit("hammer.input",A),g.recognize(A),g.session.prevInput=A}function Mp(g){return g.trim().split(/\s+/g)}function Bp(g,t,A){yp(Mp(t),(function(t){g.addEventListener(t,A,!1)}))}function zp(g,t,A){yp(Mp(t),(function(t){g.removeEventListener(t,A,!1)}))}function Sp(g){var t=g.ownerDocument||g;return t.defaultView||t.parentWindow||window}var Zp=function(){function g(g,t){var A=this;this.manager=g,this.callback=t,this.element=g.element,this.target=g.options.inputTarget,this.domHandler=function(t){mp(g.options.enable,[g])&&A.handler(t)},this.init()}var t=g.prototype;return t.handler=function(){},t.init=function(){this.evEl&&Bp(this.element,this.evEl,this.domHandler),this.evTarget&&Bp(this.target,this.evTarget,this.domHandler),this.evWin&&Bp(Sp(this.element),this.evWin,this.domHandler)},t.destroy=function(){this.evEl&&zp(this.element,this.evEl,this.domHandler),this.evTarget&&zp(this.target,this.evTarget,this.domHandler),this.evWin&&zp(Sp(this.element),this.evWin,this.domHandler)},g}();function Fp(g,t,A){if(g.indexOf&&!A)return g.indexOf(t);for(var e=0;e<g.length;){if(A&&g[e][A]==t||!A&&g[e]===t)return e;e++}return-1}var Gp={pointerdown:op,pointermove:2,pointerup:np,pointercancel:rp,pointerout:rp},jp={2:Cp,3:"pen",4:Ip,5:"kinect"},Lp="pointerdown",Vp="pointermove pointerup pointercancel";Fu.MSPointerEvent&&!Fu.PointerEvent&&(Lp="MSPointerDown",Vp="MSPointerMove MSPointerUp MSPointerCancel");var Yp=function(g){function t(){var A,e=t.prototype;return e.evEl=Lp,e.evWin=Vp,(A=g.apply(this,arguments)||this).store=A.manager.session.pointerEvents=[],A}return Su(t,g),t.prototype.handler=function(g){var t=this.store,A=!1,e=g.type.toLowerCase().replace("ms",""),C=Gp[e],I=jp[g.pointerType]||g.pointerType,i=I===Cp,o=Fp(t,g.pointerId,"pointerId");C&op&&(0===g.button||i)?o<0&&(t.push(g),o=t.length-1):C&(np|rp)&&(A=!0),o<0||(t[o]=g,this.callback(this.manager,C,{pointers:t,changedPointers:[g],pointerType:I,srcEvent:g}),A&&t.splice(o,1))},t}(Zp);function Wp(g){return Array.prototype.slice.call(g,0)}function Qp(g,t,A){for(var e=[],C=[],I=0;I<g.length;){var i=t?g[I][t]:g[I];Fp(C,i)<0&&e.push(g[I]),C[I]=i,I++}return A&&(e=t?e.sort((function(g,A){return g[t]>A[t]})):e.sort()),e}var Up={touchstart:op,touchmove:2,touchend:np,touchcancel:rp},_p=function(g){function t(){var A;return t.prototype.evTarget="touchstart touchmove touchend touchcancel",(A=g.apply(this,arguments)||this).targetIds={},A}return Su(t,g),t.prototype.handler=function(g){var t=Up[g.type],A=Kp.call(this,g,t);A&&this.callback(this.manager,t,{pointers:A[0],changedPointers:A[1],pointerType:Cp,srcEvent:g})},t}(Zp);function Kp(g,t){var A,e,C=Wp(g.touches),I=this.targetIds;if(t&(2|op)&&1===C.length)return I[C[0].identifier]=!0,[C,C];var i=Wp(g.changedTouches),o=[],n=this.target;if(e=C.filter((function(g){return kp(g.target,n)})),t===op)for(A=0;A<e.length;)I[e[A].identifier]=!0,A++;for(A=0;A<i.length;)I[i[A].identifier]&&o.push(i[A]),t&(np|rp)&&delete I[i[A].identifier],A++;return o.length?[Qp(e.concat(o),"identifier",!0),o]:void 0}var Hp={mousedown:op,mousemove:2,mouseup:np},Xp=function(g){function t(){var A,e=t.prototype;return e.evEl="mousedown",e.evWin="mousemove mouseup",(A=g.apply(this,arguments)||this).pressed=!1,A}return Su(t,g),t.prototype.handler=function(g){var t=Hp[g.type];t&op&&0===g.button&&(this.pressed=!0),2&t&&1!==g.which&&(t=np),this.pressed&&(t&np&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[g],changedPointers:[g],pointerType:Ip,srcEvent:g}))},t}(Zp),Jp=2500;function qp(g){var t=g.changedPointers[0];if(t.identifier===this.primaryTouch){var A={x:t.clientX,y:t.clientY},e=this.lastTouches;this.lastTouches.push(A);setTimeout((function(){var g=e.indexOf(A);g>-1&&e.splice(g,1)}),Jp)}}function $p(g,t){g&op?(this.primaryTouch=t.changedPointers[0].identifier,qp.call(this,t)):g&(np|rp)&&qp.call(this,t)}function gf(g){for(var t=g.srcEvent.clientX,A=g.srcEvent.clientY,e=0;e<this.lastTouches.length;e++){var C=this.lastTouches[e],I=Math.abs(t-C.x),i=Math.abs(A-C.y);if(I<=25&&i<=25)return!0}return!1}var tf=function(){return function(g){function t(t,A){var e;return(e=g.call(this,t,A)||this).handler=function(g,t,A){var C=A.pointerType===Cp,I=A.pointerType===Ip;if(!(I&&A.sourceCapabilities&&A.sourceCapabilities.firesTouchEvents)){if(C)$p.call(Zu(Zu(e)),t,A);else if(I&&gf.call(Zu(Zu(e)),A))return;e.callback(g,t,A)}},e.touch=new _p(e.manager,e.handler),e.mouse=new Xp(e.manager,e.handler),e.primaryTouch=null,e.lastTouches=[],e}return Su(t,g),t.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},t}(Zp)}();function Af(g,t,A){return!!Array.isArray(g)&&(yp(g,A[t],A),!0)}var ef=32,Cf=1;function If(g,t){var A=t.manager;return A?A.get(g):g}function of(g){return 16&g?"cancel":8&g?"end":4&g?"move":2&g?"start":""}var nf=function(){function g(g){void 0===g&&(g={}),this.options=zu({enable:!0},g),this.id=Cf++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var t=g.prototype;return t.set=function(g){return Gu(this.options,g),this.manager&&this.manager.touchAction.update(),this},t.recognizeWith=function(g){if(Af(g,"recognizeWith",this))return this;var t=this.simultaneous;return t[(g=If(g,this)).id]||(t[g.id]=g,g.recognizeWith(this)),this},t.dropRecognizeWith=function(g){return Af(g,"dropRecognizeWith",this)||(g=If(g,this),delete this.simultaneous[g.id]),this},t.requireFailure=function(g){if(Af(g,"requireFailure",this))return this;var t=this.requireFail;return-1===Fp(t,g=If(g,this))&&(t.push(g),g.requireFailure(this)),this},t.dropRequireFailure=function(g){if(Af(g,"dropRequireFailure",this))return this;g=If(g,this);var t=Fp(this.requireFail,g);return t>-1&&this.requireFail.splice(t,1),this},t.hasRequireFailures=function(){return this.requireFail.length>0},t.canRecognizeWith=function(g){return!!this.simultaneous[g.id]},t.emit=function(g){var t=this,A=this.state;function e(A){t.manager.emit(A,g)}A<8&&e(t.options.event+of(A)),e(t.options.event),g.additionalEvent&&e(g.additionalEvent),A>=8&&e(t.options.event+of(A))},t.tryEmit=function(g){if(this.canEmit())return this.emit(g);this.state=ef},t.canEmit=function(){for(var g=0;g<this.requireFail.length;){if(!(33&this.requireFail[g].state))return!1;g++}return!0},t.recognize=function(g){var t=Gu({},g);if(!mp(this.options.enable,[this,t]))return this.reset(),void(this.state=ef);56&this.state&&(this.state=1),this.state=this.process(t),30&this.state&&this.tryEmit(t)},t.process=function(g){},t.getTouchAction=function(){},t.reset=function(){},g}(),rf=function(g){function t(t){var A;return void 0===t&&(t={}),(A=g.call(this,zu({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},t))||this).pTime=!1,A.pCenter=!1,A._timer=null,A._input=null,A.count=0,A}Su(t,g);var A=t.prototype;return A.getTouchAction=function(){return[Xu]},A.process=function(g){var t=this,A=this.options,e=g.pointers.length===A.pointers,C=g.distance<A.threshold,I=g.deltaTime<A.time;if(this.reset(),g.eventType&op&&0===this.count)return this.failTimeout();if(C&&I&&e){if(g.eventType!==np)return this.failTimeout();var i=!this.pTime||g.timeStamp-this.pTime<A.interval,o=!this.pCenter||Op(this.pCenter,g.center)<A.posThreshold;if(this.pTime=g.timeStamp,this.pCenter=g.center,o&&i?this.count+=1:this.count=1,this._input=g,0===this.count%A.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),A.interval),2):8}return ef},A.failTimeout=function(){var g=this;return this._timer=setTimeout((function(){g.state=ef}),this.options.interval),ef},A.reset=function(){clearTimeout(this._timer)},A.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},t}(nf),sf=function(g){function t(t){return void 0===t&&(t={}),g.call(this,zu({pointers:1},t))||this}Su(t,g);var A=t.prototype;return A.attrTest=function(g){var t=this.options.pointers;return 0===t||g.pointers.length===t},A.process=function(g){var t=this.state,A=g.eventType,e=6&t,C=this.attrTest(g);return e&&(A&rp||!C)?16|t:e||C?A&np?8|t:2&t?4|t:2:ef},t}(nf);function af(g){return g===lp?"down":g===hp?"up":g===ap?"left":g===dp?"right":""}var df=function(g){function t(t){var A;return void 0===t&&(t={}),(A=g.call(this,zu({event:"pan",threshold:10,pointers:1,direction:pp},t))||this).pX=null,A.pY=null,A}Su(t,g);var A=t.prototype;return A.getTouchAction=function(){var g=this.options.direction,t=[];return g&cp&&t.push($u),g&up&&t.push(qu),t},A.directionTest=function(g){var t=this.options,A=!0,e=g.distance,C=g.direction,I=g.deltaX,i=g.deltaY;return C&t.direction||(t.direction&cp?(C=0===I?sp:I<0?ap:dp,A=I!==this.pX,e=Math.abs(g.deltaX)):(C=0===i?sp:i<0?hp:lp,A=i!==this.pY,e=Math.abs(g.deltaY))),g.direction=C,A&&e>t.threshold&&C&t.direction},A.attrTest=function(g){return sf.prototype.attrTest.call(this,g)&&(2&this.state||!(2&this.state)&&this.directionTest(g))},A.emit=function(t){this.pX=t.deltaX,this.pY=t.deltaY;var A=af(t.direction);A&&(t.additionalEvent=this.options.event+A),g.prototype.emit.call(this,t)},t}(sf),hf=function(g){function t(t){return void 0===t&&(t={}),g.call(this,zu({event:"swipe",threshold:10,velocity:.3,direction:cp|up,pointers:1},t))||this}Su(t,g);var A=t.prototype;return A.getTouchAction=function(){return df.prototype.getTouchAction.call(this)},A.attrTest=function(t){var A,e=this.options.direction;return e&(cp|up)?A=t.overallVelocity:e&cp?A=t.overallVelocityX:e&up&&(A=t.overallVelocityY),g.prototype.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers===this.options.pointers&&Yu(A)>this.options.velocity&&t.eventType&np},A.emit=function(g){var t=af(g.offsetDirection);t&&this.manager.emit(this.options.event+t,g),this.manager.emit(this.options.event,g)},t}(sf),lf=function(g){function t(t){return void 0===t&&(t={}),g.call(this,zu({event:"pinch",threshold:0,pointers:2},t))||this}Su(t,g);var A=t.prototype;return A.getTouchAction=function(){return[Ju]},A.attrTest=function(t){return g.prototype.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},A.emit=function(t){if(1!==t.scale){var A=t.scale<1?"in":"out";t.additionalEvent=this.options.event+A}g.prototype.emit.call(this,t)},t}(sf),cf=function(g){function t(t){return void 0===t&&(t={}),g.call(this,zu({event:"rotate",threshold:0,pointers:2},t))||this}Su(t,g);var A=t.prototype;return A.getTouchAction=function(){return[Ju]},A.attrTest=function(t){return g.prototype.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)},t}(sf),uf=function(g){function t(t){var A;return void 0===t&&(t={}),(A=g.call(this,zu({event:"press",pointers:1,time:251,threshold:9},t))||this)._timer=null,A._input=null,A}Su(t,g);var A=t.prototype;return A.getTouchAction=function(){return[Hu]},A.process=function(g){var t=this,A=this.options,e=g.pointers.length===A.pointers,C=g.distance<A.threshold,I=g.deltaTime>A.time;if(this._input=g,!C||!e||g.eventType&(np|rp)&&!I)this.reset();else if(g.eventType&op)this.reset(),this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),A.time);else if(g.eventType&np)return 8;return ef},A.reset=function(){clearTimeout(this._timer)},A.emit=function(g){8===this.state&&(g&&g.eventType&np?this.manager.emit(this.options.event+"up",g):(this._input.timeStamp=Wu(),this.manager.emit(this.options.event,this._input)))},t}(nf),pf={domEvents:!1,touchAction:Ku,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},ff=[[cf,{enable:!1}],[lf,{enable:!1},["rotate"]],[hf,{direction:cp}],[df,{direction:cp},["swipe"]],[rf],[rf,{event:"doubletap",taps:2},["tap"]],[uf]];function vf(g,t){var A,e=g.element;e.style&&(yp(g.options.cssProps,(function(C,I){A=Qu(e.style,I),t?(g.oldCssProps[A]=e.style[A],e.style[A]=C):e.style[A]=g.oldCssProps[A]||""})),t||(g.oldCssProps={}))}var yf=function(){function g(g,t){var A,e=this;this.options=Gu({},pf,t||{}),this.options.inputTarget=this.options.inputTarget||g,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=g,this.input=new((A=this).options.inputClass||(Ap?Yp:ep?_p:tp?tf:Xp))(A,Pp),this.touchAction=new wp(this,this.options.touchAction),vf(this,!0),yp(this.options.recognizers,(function(g){var t=e.add(new g[0](g[1]));g[2]&&t.recognizeWith(g[2]),g[3]&&t.requireFailure(g[3])}),this)}var t=g.prototype;return t.set=function(g){return Gu(this.options,g),g.touchAction&&this.touchAction.update(),g.inputTarget&&(this.input.destroy(),this.input.target=g.inputTarget,this.input.init()),this},t.stop=function(g){this.session.stopped=g?2:1},t.recognize=function(g){var t=this.session;if(!t.stopped){var A;this.touchAction.preventDefaults(g);var e=this.recognizers,C=t.curRecognizer;(!C||C&&8&C.state)&&(t.curRecognizer=null,C=null);for(var I=0;I<e.length;)A=e[I],2===t.stopped||C&&A!==C&&!A.canRecognizeWith(C)?A.reset():A.recognize(g),!C&&14&A.state&&(t.curRecognizer=A,C=A),I++}},t.get=function(g){if(g instanceof nf)return g;for(var t=this.recognizers,A=0;A<t.length;A++)if(t[A].options.event===g)return t[A];return null},t.add=function(g){if(Af(g,"add",this))return this;var t=this.get(g.options.event);return t&&this.remove(t),this.recognizers.push(g),g.manager=this,this.touchAction.update(),g},t.remove=function(g){if(Af(g,"remove",this))return this;var t=this.get(g);if(g){var A=this.recognizers,e=Fp(A,t);-1!==e&&(A.splice(e,1),this.touchAction.update())}return this},t.on=function(g,t){if(void 0===g||void 0===t)return this;var A=this.handlers;return yp(Mp(g),(function(g){A[g]=A[g]||[],A[g].push(t)})),this},t.off=function(g,t){if(void 0===g)return this;var A=this.handlers;return yp(Mp(g),(function(g){t?A[g]&&A[g].splice(Fp(A[g],t),1):delete A[g]})),this},t.emit=function(g,t){this.options.domEvents&&function(g,t){var A=document.createEvent("Event");A.initEvent(g,!0,!0),A.gesture=t,t.target.dispatchEvent(A)}(g,t);var A=this.handlers[g]&&this.handlers[g].slice();if(A&&A.length){t.type=g,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var e=0;e<A.length;)A[e](t),e++}},t.destroy=function(){this.element&&vf(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},g}(),mf={touchstart:op,touchmove:2,touchend:np,touchcancel:rp},bf=function(g){function t(){var A,e=t.prototype;return e.evTarget="touchstart",e.evWin="touchstart touchmove touchend touchcancel",(A=g.apply(this,arguments)||this).started=!1,A}return Su(t,g),t.prototype.handler=function(g){var t=mf[g.type];if(t===op&&(this.started=!0),this.started){var A=wf.call(this,g,t);t&(np|rp)&&A[0].length-A[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:A[0],changedPointers:A[1],pointerType:Cp,srcEvent:g})}},t}(Zp);function wf(g,t){var A=Wp(g.touches),e=Wp(g.changedTouches);return t&(np|rp)&&(A=Qp(A.concat(e),"identifier",!0)),[A,e]}function kf(g,t,A){var e="DEPRECATED METHOD: "+t+"\n"+A+" AT \n";return function(){var t=new Error("get-stack-trace"),A=t&&t.stack?t.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",C=window.console&&(window.console.warn||window.console.log);return C&&C.call(window.console,e,A),g.apply(this,arguments)}}var xf=kf((function(g,t,A){for(var e=Object.keys(t),C=0;C<e.length;)(!A||A&&void 0===g[e[C]])&&(g[e[C]]=t[e[C]]),C++;return g}),"extend","Use `assign`."),Ef=kf((function(g,t){return xf(g,t,!0)}),"merge","Use `assign`.");function Of(g,t,A){var e,C=t.prototype;(e=g.prototype=Object.create(C)).constructor=g,e._super=C,A&&Gu(e,A)}function Tf(g,t){return function(){return g.apply(t,arguments)}}var Df=function(){var g=function(g,t){return void 0===t&&(t={}),new yf(g,zu({recognizers:ff.concat()},t))};return g.VERSION="2.0.17-rc",g.DIRECTION_ALL=pp,g.DIRECTION_DOWN=lp,g.DIRECTION_LEFT=ap,g.DIRECTION_RIGHT=dp,g.DIRECTION_UP=hp,g.DIRECTION_HORIZONTAL=cp,g.DIRECTION_VERTICAL=up,g.DIRECTION_NONE=sp,g.DIRECTION_DOWN=lp,g.INPUT_START=op,g.INPUT_MOVE=2,g.INPUT_END=np,g.INPUT_CANCEL=rp,g.STATE_POSSIBLE=1,g.STATE_BEGAN=2,g.STATE_CHANGED=4,g.STATE_ENDED=8,g.STATE_RECOGNIZED=8,g.STATE_CANCELLED=16,g.STATE_FAILED=ef,g.Manager=yf,g.Input=Zp,g.TouchAction=wp,g.TouchInput=_p,g.MouseInput=Xp,g.PointerEventInput=Yp,g.TouchMouseInput=tf,g.SingleTouchInput=bf,g.Recognizer=nf,g.AttrRecognizer=sf,g.Tap=rf,g.Pan=df,g.Swipe=hf,g.Pinch=lf,g.Rotate=cf,g.Press=uf,g.on=Bp,g.off=zp,g.each=yp,g.merge=Ef,g.extend=xf,g.bindFn=Tf,g.assign=Gu,g.inherit=Of,g.bindFn=Tf,g.prefixed=Qu,g.toArray=Wp,g.inArray=Fp,g.uniqueArray=Qp,g.splitStr=Mp,g.boolOrFn=mp,g.hasParent=kp,g.addEventListeners=Bp,g.removeEventListeners=zp,g.defaults=Gu({},pf,{preset:ff}),g}();Df.defaults;var Nf=Df;function Rf(g,t){var A=void 0!==uh&&ln(g)||g["@@iterator"];if(!A){if(Rh(g)||(A=function(g,t){var A;if(!g)return;if("string"==typeof g)return Pf(g,t);var e=wh(A=Object.prototype.toString.call(g)).call(A,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return Uo(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Pf(g,t)}(g))||t&&g&&"number"==typeof g.length){A&&(g=A);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){A=A.call(g)},n:function(){var g=A.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==A.return||A.return()}finally{if(o)throw I}}}}function Pf(g,t){(null==t||t>g.length)&&(t=g.length);for(var A=0,e=new Array(t);A<t;A++)e[A]=g[A];return e}var Mf=uh("DELETE");function Bf(){var g=zf.apply(void 0,arguments);return Zf(g),g}function zf(){for(var g=arguments.length,t=new Array(g),A=0;A<g;A++)t[A]=arguments[A];if(t.length<2)return t[0];var e;if(t.length>2)return zf.apply(void 0,bh(e=[Bf(t[0],t[1])]).call(e,ch(wh(t).call(t,2))));var C=t[0],I=t[1];if(C instanceof Date&&I instanceof Date)return C.setTime(I.getTime()),C;var i,o=Rf(Nh(I));try{for(o.s();!(i=o.n()).done;){var n=i.value;Object.prototype.propertyIsEnumerable.call(I,n)&&(I[n]===Mf?delete C[n]:null===C[n]||null===I[n]||"object"!==yd(C[n])||"object"!==yd(I[n])||Rh(C[n])||Rh(I[n])?C[n]=Sf(I[n]):C[n]=zf(C[n],I[n]))}}catch(g){o.e(g)}finally{o.f()}return C}function Sf(g){return Rh(g)?Fh(g).call(g,(function(g){return Sf(g)})):"object"===yd(g)&&null!==g?g instanceof Date?new Date(g.getTime()):zf({},g):g}function Zf(g){for(var t=0,A=Lh(g);t<A.length;t++){var e=A[t];g[e]===Mf?delete g[e]:"object"===yd(g[e])&&null!==g[e]&&Zf(g[e])}}function Ff(){for(var g=arguments.length,t=new Array(g),A=0;A<g;A++)t[A]=arguments[A];return function(g){var t=function(){for(var g=function(){var g=4022871197;return function(t){for(var A=t.toString(),e=0;e<A.length;e++){var C=.02519603282416938*(g+=A.charCodeAt(e));C-=g=C>>>0,g=(C*=g)>>>0,g+=4294967296*(C-=g)}return 2.3283064365386963e-10*(g>>>0)}}(),t=g(" "),A=g(" "),e=g(" "),C=0;C<arguments.length;C++)(t-=g(C<0||arguments.length<=C?void 0:arguments[C]))<0&&(t+=1),(A-=g(C<0||arguments.length<=C?void 0:arguments[C]))<0&&(A+=1),(e-=g(C<0||arguments.length<=C?void 0:arguments[C]))<0&&(e+=1);return[t,A,e]}(g),A=lh(t,3),e=A[0],C=A[1],I=A[2],i=1,o=function(){var g=2091639*e+2.3283064365386963e-10*i;return e=C,C=I,I=g-(i=0|g)};return o.uint32=function(){return 4294967296*o()},o.fract53=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.algorithm="Alea",o.seed=g,o.version="0.9",o}(t.length?t:[Qh()])}var Gf="undefined"!=typeof window?window.Hammer||Nf:function(){return function(){var g=function(){};return{on:g,off:g,destroy:g,emit:g,get:function(){return{set:g}}}}()};function jf(g){var t,A=this;this._cleanupQueue=[],this.active=!1,this._dom={container:g,overlay:document.createElement("div")},this._dom.overlay.classList.add("vis-overlay"),this._dom.container.appendChild(this._dom.overlay),this._cleanupQueue.push((function(){A._dom.overlay.parentNode.removeChild(A._dom.overlay)}));var e=Gf(this._dom.overlay);e.on("tap",je(t=this._onTapOverlay).call(t,this)),this._cleanupQueue.push((function(){e.destroy()}));var C=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"];Cl(C).call(C,(function(g){e.on(g,(function(g){g.srcEvent.stopPropagation()}))})),document&&document.body&&(this._onClick=function(t){(function(g,t){for(;g;){if(g===t)return!0;g=g.parentNode}return!1})(t.target,g)||A.deactivate()},document.body.addEventListener("click",this._onClick),this._cleanupQueue.push((function(){document.body.removeEventListener("click",A._onClick)}))),this._escListener=function(g){("key"in g?"Escape"===g.key:27===g.keyCode)&&A.deactivate()}}He(jf.prototype),jf.current=null,jf.prototype.destroy=function(){var g,t;this.deactivate();var A,e=Rf(cl(g=Zl(t=this._cleanupQueue).call(t,0)).call(g));try{for(e.s();!(A=e.n()).done;){(0,A.value)()}}catch(g){e.e(g)}finally{e.f()}},jf.prototype.activate=function(){jf.current&&jf.current.deactivate(),jf.current=this,this.active=!0,this._dom.overlay.style.display="none",this._dom.container.classList.add("vis-active"),this.emit("change"),this.emit("activate"),document.body.addEventListener("keydown",this._escListener)},jf.prototype.deactivate=function(){this.active=!1,this._dom.overlay.style.display="block",this._dom.container.classList.remove("vis-active"),document.body.removeEventListener("keydown",this._escListener),this.emit("change"),this.emit("deactivate")},jf.prototype._onTapOverlay=function(g){this.activate(),g.srcEvent.stopPropagation()};var Lf=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,Vf=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,Yf=/^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i,Wf=/^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;function Qf(g){if(g)for(;!0===g.hasChildNodes();){var t=g.firstChild;t&&(Qf(t),g.removeChild(t))}}function Uf(g){return g instanceof String||"string"==typeof g}function _f(g){return"object"===yd(g)&&null!==g}function Kf(g,t,A,e){var C=!1;!0===e&&(C=null===t[A]&&void 0!==g[A]),C?delete g[A]:g[A]=t[A]}function Hf(g,t){var A=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var e in g)if(void 0!==t[e])if(null===t[e]||"object"!==yd(t[e]))Kf(g,t,e,A);else{var C=g[e],I=t[e];_f(C)&&_f(I)&&Hf(C,I,A)}}function Xf(g,t,A){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Rh(A))throw new TypeError("Arrays are not supported by deepExtend");for(var C=0;C<g.length;C++){var I=g[C];if(Object.prototype.hasOwnProperty.call(A,I))if(A[I]&&A[I].constructor===Object)void 0===t[I]&&(t[I]={}),t[I].constructor===Object?qf(t[I],A[I],!1,e):Kf(t,A,I,e);else{if(Rh(A[I]))throw new TypeError("Arrays are not supported by deepExtend");Kf(t,A,I,e)}}return t}function Jf(g,t,A){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Rh(A))throw new TypeError("Arrays are not supported by deepExtend");for(var C in A)if(Object.prototype.hasOwnProperty.call(A,C)&&!Ic(g).call(g,C))if(A[C]&&A[C].constructor===Object)void 0===t[C]&&(t[C]={}),t[C].constructor===Object?qf(t[C],A[C]):Kf(t,A,C,e);else if(Rh(A[C])){t[C]=[];for(var I=0;I<A[C].length;I++)t[C].push(A[C][I])}else Kf(t,A,C,e);return t}function qf(g,t){var A=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];for(var C in t)if(Object.prototype.hasOwnProperty.call(t,C)||!0===A)if("object"===yd(t[C])&&null!==t[C]&&sc(t[C])===Object.prototype)void 0===g[C]?g[C]=qf({},t[C],A):"object"===yd(g[C])&&null!==g[C]&&sc(g[C])===Object.prototype?qf(g[C],t[C],A):Kf(g,t,C,e);else if(Rh(t[C])){var I;g[C]=wh(I=t[C]).call(I)}else Kf(g,t,C,e);return g}function $f(g,t){var A;return bh(A=[]).call(A,ch(g),[t])}function gv(g){return g.getBoundingClientRect().top}function tv(g,t){if(Rh(g))for(var A=g.length,e=0;e<A;e++)t(g[e],e,g);else for(var C in g)Object.prototype.hasOwnProperty.call(g,C)&&t(g[C],C,g)}function Av(g){var t;switch(g.length){case 3:case 4:return(t=Vf.exec(g))?{r:Gc(t[1]+t[1],16),g:Gc(t[2]+t[2],16),b:Gc(t[3]+t[3],16)}:null;case 6:case 7:return(t=Lf.exec(g))?{r:Gc(t[1],16),g:Gc(t[2],16),b:Gc(t[3],16)}:null;default:return null}}function ev(g,t){if(Ic(g).call(g,"rgba"))return g;if(Ic(g).call(g,"rgb")){var A=g.substr(Xc(g).call(g,"(")+1).replace(")","").split(",");return"rgba("+A[0]+","+A[1]+","+A[2]+","+t+")"}var e=Av(g);return null==e?g:"rgba("+e.r+","+e.g+","+e.b+","+t+")"}function Cv(g,t,A){var e;return"#"+wh(e=((1<<24)+(g<<16)+(t<<8)+A).toString(16)).call(e,1)}function Iv(g,t){if(Uf(g)){var A=g;if(sv(A)){var e,C=Fh(e=A.substr(4).substr(0,A.length-5).split(",")).call(e,(function(g){return Gc(g)}));A=Cv(C[0],C[1],C[2])}if(!0===rv(A)){var I=function(g){var t=Av(g);if(!t)throw new TypeError("'".concat(g,"' is not a valid color."));return iv(t.r,t.g,t.b)}(A),i={h:I.h,s:.8*I.s,v:Math.min(1,1.02*I.v)},o={h:I.h,s:Math.min(1,1.25*I.s),v:.8*I.v},n=nv(o.h,o.s,o.v),r=nv(i.h,i.s,i.v);return{background:A,border:n,highlight:{background:r,border:n},hover:{background:r,border:n}}}return{background:A,border:A,highlight:{background:A,border:A},hover:{background:A,border:A}}}return t?{background:g.background||t.background,border:g.border||t.border,highlight:Uf(g.highlight)?{border:g.highlight,background:g.highlight}:{background:g.highlight&&g.highlight.background||t.highlight.background,border:g.highlight&&g.highlight.border||t.highlight.border},hover:Uf(g.hover)?{border:g.hover,background:g.hover}:{border:g.hover&&g.hover.border||t.hover.border,background:g.hover&&g.hover.background||t.hover.background}}:{background:g.background||void 0,border:g.border||void 0,highlight:Uf(g.highlight)?{border:g.highlight,background:g.highlight}:{background:g.highlight&&g.highlight.background||void 0,border:g.highlight&&g.highlight.border||void 0},hover:Uf(g.hover)?{border:g.hover,background:g.hover}:{border:g.hover&&g.hover.border||void 0,background:g.hover&&g.hover.background||void 0}}}function iv(g,t,A){g/=255,t/=255,A/=255;var e=Math.min(g,Math.min(t,A)),C=Math.max(g,Math.max(t,A));return e===C?{h:0,s:0,v:e}:{h:60*((g===e?3:A===e?1:5)-(g===e?t-A:A===e?g-t:A-g)/(C-e))/360,s:(C-e)/C,v:C}}function ov(g,t,A){var e,C,I,i=Math.floor(6*g),o=6*g-i,n=A*(1-t),r=A*(1-o*t),s=A*(1-(1-o)*t);switch(i%6){case 0:e=A,C=s,I=n;break;case 1:e=r,C=A,I=n;break;case 2:e=n,C=A,I=s;break;case 3:e=n,C=r,I=A;break;case 4:e=s,C=n,I=A;break;case 5:e=A,C=n,I=r}return{r:Math.floor(255*e),g:Math.floor(255*C),b:Math.floor(255*I)}}function nv(g,t,A){var e=ov(g,t,A);return Cv(e.r,e.g,e.b)}function rv(g){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(g)}function sv(g){return Yf.test(g)}function av(g){if(null===g||"object"!==yd(g))return null;if(g instanceof Element)return g;var t=$c(g);for(var A in g)Object.prototype.hasOwnProperty.call(g,A)&&"object"==yd(g[A])&&(t[A]=av(g[A]));return t}function dv(g,t,A){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},C=function(g){return null!=g},I=function(g){return null!==g&&"object"===yd(g)};if(!I(g))throw new Error("Parameter mergeTarget must be an object");if(!I(t))throw new Error("Parameter options must be an object");if(!C(A))throw new Error("Parameter option must have a value");if(!I(e))throw new Error("Parameter globalOptions must be an object");var i=t[A],o=I(e)&&!function(g){for(var t in g)if(Object.prototype.hasOwnProperty.call(g,t))return!1;return!0}(e)?e[A]:void 0,n=o?o.enabled:void 0;if(void 0!==i){if("boolean"==typeof i)return I(g[A])||(g[A]={}),void(g[A].enabled=i);if(null===i&&!I(g[A])){if(!C(o))return;g[A]=$c(o)}if(I(i)){var r=!0;void 0!==i.enabled?r=i.enabled:void 0!==n&&(r=o.enabled),function(g,t,A){I(g[A])||(g[A]={});var e=t[A],C=g[A];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(C[i]=e[i])}(g,t,A),g[A].enabled=r}}}var hv={linear:function(g){return g},easeInQuad:function(g){return g*g},easeOutQuad:function(g){return g*(2-g)},easeInOutQuad:function(g){return g<.5?2*g*g:(4-2*g)*g-1},easeInCubic:function(g){return g*g*g},easeOutCubic:function(g){return--g*g*g+1},easeInOutCubic:function(g){return g<.5?4*g*g*g:(g-1)*(2*g-2)*(2*g-2)+1},easeInQuart:function(g){return g*g*g*g},easeOutQuart:function(g){return 1- --g*g*g*g},easeInOutQuart:function(g){return g<.5?8*g*g*g*g:1-8*--g*g*g*g},easeInQuint:function(g){return g*g*g*g*g},easeOutQuint:function(g){return 1+--g*g*g*g*g},easeInOutQuint:function(g){return g<.5?16*g*g*g*g*g:1+16*--g*g*g*g*g}};function lv(g,t){var A;Rh(t)||(t=[t]);var e,C=Rf(g);try{for(C.s();!(e=C.n()).done;){var I=e.value;if(I){A=I[t[0]];for(var i=1;i<t.length;i++)A&&(A=A[t[i]]);if(void 0!==A)break}}}catch(g){C.e(g)}finally{C.f()}return A}var cv={black:"#000000",navy:"#000080",darkblue:"#00008B",mediumblue:"#0000CD",blue:"#0000FF",darkgreen:"#006400",green:"#008000",teal:"#008080",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",lime:"#00FF00",springgreen:"#00FF7F",aqua:"#00FFFF",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",mediumaquamarine:"#66CDAA",dimgray:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",lightslategray:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",maroon:"#800000",purple:"#800080",olive:"#808000",gray:"#808080",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370D8",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",silver:"#C0C0C0",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgrey:"#D3D3D3",palevioletred:"#D87093",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",red:"#FF0000",fuchsia:"#FF00FF",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",yellow:"#FFFF00",lightyellow:"#FFFFE0",ivory:"#FFFFF0",white:"#FFFFFF"},uv=function(){function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;cn(this,g),this.pixelRatio=t,this.generated=!1,this.centerCoordinates={x:144.5,y:144.5},this.r=289*.49,this.color={r:255,g:255,b:255,a:1},this.hueCircle=void 0,this.initialColor={r:255,g:255,b:255,a:1},this.previousColor=void 0,this.applied=!1,this.updateCallback=function(){},this.closeCallback=function(){},this._create()}return kd(g,[{key:"insertTo",value:function(g){void 0!==this.hammer&&(this.hammer.destroy(),this.hammer=void 0),this.container=g,this.container.appendChild(this.frame),this._bindHammer(),this._setSize()}},{key:"setUpdateCallback",value:function(g){if("function"!=typeof g)throw new Error("Function attempted to set as colorPicker update callback is not a function.");this.updateCallback=g}},{key:"setCloseCallback",value:function(g){if("function"!=typeof g)throw new Error("Function attempted to set as colorPicker closing callback is not a function.");this.closeCallback=g}},{key:"_isColorString",value:function(g){if("string"==typeof g)return cv[g]}},{key:"setColor",value:function(g){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("none"!==g){var A,e=this._isColorString(g);if(void 0!==e&&(g=e),!0===Uf(g)){if(!0===sv(g)){var C=g.substr(4).substr(0,g.length-5).split(",");A={r:C[0],g:C[1],b:C[2],a:1}}else if(!0===function(g){return Wf.test(g)}(g)){var I=g.substr(5).substr(0,g.length-6).split(",");A={r:I[0],g:I[1],b:I[2],a:I[3]}}else if(!0===rv(g)){var i=Av(g);A={r:i.r,g:i.g,b:i.b,a:1}}}else if(g instanceof Object&&void 0!==g.r&&void 0!==g.g&&void 0!==g.b){var o=void 0!==g.a?g.a:"1.0";A={r:g.r,g:g.g,b:g.b,a:o}}if(void 0===A)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+eu(g));this._setColor(A,t)}}},{key:"show",value:function(){void 0!==this.closeCallback&&(this.closeCallback(),this.closeCallback=void 0),this.applied=!1,this.frame.style.display="block",this._generateHueCircle()}},{key:"_hide",value:function(){var g=this;!0===(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(this.previousColor=fe({},this.color)),!0===this.applied&&this.updateCallback(this.initialColor),this.frame.style.display="none",wu((function(){void 0!==g.closeCallback&&(g.closeCallback(),g.closeCallback=void 0)}),0)}},{key:"_save",value:function(){this.updateCallback(this.color),this.applied=!1,this._hide()}},{key:"_apply",value:function(){this.applied=!0,this.updateCallback(this.color),this._updatePicker(this.color)}},{key:"_loadLast",value:function(){void 0!==this.previousColor?this.setColor(this.previousColor,!1):alert("There is no last color to load...")}},{key:"_setColor",value:function(g){!0===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&(this.initialColor=fe({},g)),this.color=g;var t=iv(g.r,g.g,g.b),A=2*Math.PI,e=this.r*t.s,C=this.centerCoordinates.x+e*Math.sin(A*t.h),I=this.centerCoordinates.y+e*Math.cos(A*t.h);this.colorPickerSelector.style.left=C-.5*this.colorPickerSelector.clientWidth+"px",this.colorPickerSelector.style.top=I-.5*this.colorPickerSelector.clientHeight+"px",this._updatePicker(g)}},{key:"_setOpacity",value:function(g){this.color.a=g/100,this._updatePicker(this.color)}},{key:"_setBrightness",value:function(g){var t=iv(this.color.r,this.color.g,this.color.b);t.v=g/100;var A=ov(t.h,t.s,t.v);A.a=this.color.a,this.color=A,this._updatePicker()}},{key:"_updatePicker",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.color,t=iv(g.r,g.g,g.b),A=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(A.webkitBackingStorePixelRatio||A.mozBackingStorePixelRatio||A.msBackingStorePixelRatio||A.oBackingStorePixelRatio||A.backingStorePixelRatio||1)),A.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var e=this.colorPickerCanvas.clientWidth,C=this.colorPickerCanvas.clientHeight;A.clearRect(0,0,e,C),A.putImageData(this.hueCircle,0,0),A.fillStyle="rgba(0,0,0,"+(1-t.v)+")",A.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),Bu(A).call(A),this.brightnessRange.value=100*t.v,this.opacityRange.value=100*g.a,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}},{key:"_setSize",value:function(){this.colorPickerCanvas.style.width="100%",this.colorPickerCanvas.style.height="100%",this.colorPickerCanvas.width=289*this.pixelRatio,this.colorPickerCanvas.height=289*this.pixelRatio}},{key:"_create",value:function(){var g,t,A,e;if(this.frame=document.createElement("div"),this.frame.className="vis-color-picker",this.colorPickerDiv=document.createElement("div"),this.colorPickerSelector=document.createElement("div"),this.colorPickerSelector.className="vis-selector",this.colorPickerDiv.appendChild(this.colorPickerSelector),this.colorPickerCanvas=document.createElement("canvas"),this.colorPickerDiv.appendChild(this.colorPickerCanvas),this.colorPickerCanvas.getContext){var C=this.colorPickerCanvas.getContext("2d");this.pixelRatio=(window.devicePixelRatio||1)/(C.webkitBackingStorePixelRatio||C.mozBackingStorePixelRatio||C.msBackingStorePixelRatio||C.oBackingStorePixelRatio||C.backingStorePixelRatio||1),this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}else{var I=document.createElement("DIV");I.style.color="red",I.style.fontWeight="bold",I.style.padding="10px",I.innerText="Error: your browser does not support HTML canvas",this.colorPickerCanvas.appendChild(I)}this.colorPickerDiv.className="vis-color",this.opacityDiv=document.createElement("div"),this.opacityDiv.className="vis-opacity",this.brightnessDiv=document.createElement("div"),this.brightnessDiv.className="vis-brightness",this.arrowDiv=document.createElement("div"),this.arrowDiv.className="vis-arrow",this.opacityRange=document.createElement("input");try{this.opacityRange.type="range",this.opacityRange.min="0",this.opacityRange.max="100"}catch(g){}this.opacityRange.value="100",this.opacityRange.className="vis-range",this.brightnessRange=document.createElement("input");try{this.brightnessRange.type="range",this.brightnessRange.min="0",this.brightnessRange.max="100"}catch(g){}this.brightnessRange.value="100",this.brightnessRange.className="vis-range",this.opacityDiv.appendChild(this.opacityRange),this.brightnessDiv.appendChild(this.brightnessRange);var i=this;this.opacityRange.onchange=function(){i._setOpacity(this.value)},this.opacityRange.oninput=function(){i._setOpacity(this.value)},this.brightnessRange.onchange=function(){i._setBrightness(this.value)},this.brightnessRange.oninput=function(){i._setBrightness(this.value)},this.brightnessLabel=document.createElement("div"),this.brightnessLabel.className="vis-label vis-brightness",this.brightnessLabel.innerText="brightness:",this.opacityLabel=document.createElement("div"),this.opacityLabel.className="vis-label vis-opacity",this.opacityLabel.innerText="opacity:",this.newColorDiv=document.createElement("div"),this.newColorDiv.className="vis-new-color",this.newColorDiv.innerText="new",this.initialColorDiv=document.createElement("div"),this.initialColorDiv.className="vis-initial-color",this.initialColorDiv.innerText="initial",this.cancelButton=document.createElement("div"),this.cancelButton.className="vis-button vis-cancel",this.cancelButton.innerText="cancel",this.cancelButton.onclick=je(g=this._hide).call(g,this,!1),this.applyButton=document.createElement("div"),this.applyButton.className="vis-button vis-apply",this.applyButton.innerText="apply",this.applyButton.onclick=je(t=this._apply).call(t,this),this.saveButton=document.createElement("div"),this.saveButton.className="vis-button vis-save",this.saveButton.innerText="save",this.saveButton.onclick=je(A=this._save).call(A,this),this.loadButton=document.createElement("div"),this.loadButton.className="vis-button vis-load",this.loadButton.innerText="load last",this.loadButton.onclick=je(e=this._loadLast).call(e,this),this.frame.appendChild(this.colorPickerDiv),this.frame.appendChild(this.arrowDiv),this.frame.appendChild(this.brightnessLabel),this.frame.appendChild(this.brightnessDiv),this.frame.appendChild(this.opacityLabel),this.frame.appendChild(this.opacityDiv),this.frame.appendChild(this.newColorDiv),this.frame.appendChild(this.initialColorDiv),this.frame.appendChild(this.cancelButton),this.frame.appendChild(this.applyButton),this.frame.appendChild(this.saveButton),this.frame.appendChild(this.loadButton)}},{key:"_bindHammer",value:function(){var g=this;this.drag={},this.pinch={},this.hammer=new Gf(this.colorPickerCanvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.on("hammer.input",(function(t){t.isFirst&&g._moveSelector(t)})),this.hammer.on("tap",(function(t){g._moveSelector(t)})),this.hammer.on("panstart",(function(t){g._moveSelector(t)})),this.hammer.on("panmove",(function(t){g._moveSelector(t)})),this.hammer.on("panend",(function(t){g._moveSelector(t)}))}},{key:"_generateHueCircle",value:function(){if(!1===this.generated){var g=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(g.webkitBackingStorePixelRatio||g.mozBackingStorePixelRatio||g.msBackingStorePixelRatio||g.oBackingStorePixelRatio||g.backingStorePixelRatio||1)),g.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var t,A,e,C,I=this.colorPickerCanvas.clientWidth,i=this.colorPickerCanvas.clientHeight;g.clearRect(0,0,I,i),this.centerCoordinates={x:.5*I,y:.5*i},this.r=.49*I;var o,n=2*Math.PI/360,r=1/this.r;for(e=0;e<360;e++)for(C=0;C<this.r;C++)t=this.centerCoordinates.x+C*Math.sin(n*e),A=this.centerCoordinates.y+C*Math.cos(n*e),o=ov(.002777777777777778*e,C*r,1),g.fillStyle="rgb("+o.r+","+o.g+","+o.b+")",g.fillRect(t-.5,A-.5,2,2);g.strokeStyle="rgba(0,0,0,1)",g.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),g.stroke(),this.hueCircle=g.getImageData(0,0,I,i)}this.generated=!0}},{key:"_moveSelector",value:function(g){var t=this.colorPickerDiv.getBoundingClientRect(),A=g.center.x-t.left,e=g.center.y-t.top,C=.5*this.colorPickerDiv.clientHeight,I=.5*this.colorPickerDiv.clientWidth,i=A-I,o=e-C,n=Math.atan2(i,o),r=.98*Math.min(Math.sqrt(i*i+o*o),I),s=Math.cos(n)*r+C,a=Math.sin(n)*r+I;this.colorPickerSelector.style.top=s-.5*this.colorPickerSelector.clientHeight+"px",this.colorPickerSelector.style.left=a-.5*this.colorPickerSelector.clientWidth+"px";var d=n/(2*Math.PI);d=d<0?d+1:d;var h=r/this.r,l=iv(this.color.r,this.color.g,this.color.b);l.h=d,l.s=h;var c=ov(l.h,l.s,l.v);c.a=this.color.a,this.color=c,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}}]),g}();function pv(){for(var g=arguments.length,t=new Array(g),A=0;A<g;A++)t[A]=arguments[A];if(t.length<1)throw new TypeError("Invalid arguments.");if(1===t.length)return document.createTextNode(t[0]);var e=document.createElement(t[0]);return e.appendChild(pv.apply(void 0,ch(wh(t).call(t,1)))),e}var fv,vv=function(){function g(t,A,e){var C=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,I=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){return!1};cn(this,g),this.parent=t,this.changedOptions=[],this.container=A,this.allowCreation=!1,this.hideOption=I,this.options={},this.initialized=!1,this.popupCounter=0,this.defaultOptions={enabled:!1,filter:!0,container:void 0,showButton:!0},fe(this.options,this.defaultOptions),this.configureOptions=e,this.moduleOptions={},this.domElements=[],this.popupDiv={},this.popupLimit=5,this.popupHistory={},this.colorPicker=new uv(C),this.wrapper=void 0}return kd(g,[{key:"setOptions",value:function(g){if(void 0!==g){this.popupHistory={},this._removePopup();var t=!0;if("string"==typeof g)this.options.filter=g;else if(Rh(g))this.options.filter=g.join();else if("object"===yd(g)){if(null==g)throw new TypeError("options cannot be null");void 0!==g.container&&(this.options.container=g.container),void 0!==pc(g)&&(this.options.filter=pc(g)),void 0!==g.showButton&&(this.options.showButton=g.showButton),void 0!==g.enabled&&(t=g.enabled)}else"boolean"==typeof g?(this.options.filter=!0,t=g):"function"==typeof g&&(this.options.filter=g,t=!0);!1===pc(this.options)&&(t=!1),this.options.enabled=t}this._clean()}},{key:"setModuleOptions",value:function(g){this.moduleOptions=g,!0===this.options.enabled&&(this._clean(),void 0!==this.options.container&&(this.container=this.options.container),this._create())}},{key:"_create",value:function(){this._clean(),this.changedOptions=[];var g=pc(this.options),t=0,A=!1;for(var e in this.configureOptions)Object.prototype.hasOwnProperty.call(this.configureOptions,e)&&(this.allowCreation=!1,A=!1,"function"==typeof g?A=(A=g(e,[]))||this._handleObject(this.configureOptions[e],[e],!0):!0!==g&&-1===Xc(g).call(g,e)||(A=!0),!1!==A&&(this.allowCreation=!0,t>0&&this._makeItem([]),this._makeHeader(e),this._handleObject(this.configureOptions[e],[e])),t++);this._makeButton(),this._push()}},{key:"_push",value:function(){this.wrapper=document.createElement("div"),this.wrapper.className="vis-configuration-wrapper",this.container.appendChild(this.wrapper);for(var g=0;g<this.domElements.length;g++)this.wrapper.appendChild(this.domElements[g]);this._showPopupIfNeeded()}},{key:"_clean",value:function(){for(var g=0;g<this.domElements.length;g++)this.wrapper.removeChild(this.domElements[g]);void 0!==this.wrapper&&(this.container.removeChild(this.wrapper),this.wrapper=void 0),this.domElements=[],this._removePopup()}},{key:"_getValue",value:function(g){for(var t=this.moduleOptions,A=0;A<g.length;A++){if(void 0===t[g[A]]){t=void 0;break}t=t[g[A]]}return t}},{key:"_makeItem",value:function(g){if(!0===this.allowCreation){var t=document.createElement("div");t.className="vis-configuration vis-config-item vis-config-s"+g.length;for(var A=arguments.length,e=new Array(A>1?A-1:0),C=1;C<A;C++)e[C-1]=arguments[C];return Cl(e).call(e,(function(g){t.appendChild(g)})),this.domElements.push(t),this.domElements.length}return 0}},{key:"_makeHeader",value:function(g){var t=document.createElement("div");t.className="vis-configuration vis-config-header",t.innerText=g,this._makeItem([],t)}},{key:"_makeLabel",value:function(g,t){var A=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=document.createElement("div");if(e.className="vis-configuration vis-config-label vis-config-s"+t.length,!0===A){for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(pv("i","b",g))}else e.innerText=g+":";return e}},{key:"_makeDropdown",value:function(g,t,A){var e=document.createElement("select");e.className="vis-configuration vis-config-select";var C=0;void 0!==t&&-1!==Xc(g).call(g,t)&&(C=Xc(g).call(g,t));for(var I=0;I<g.length;I++){var i=document.createElement("option");i.value=g[I],I===C&&(i.selected="selected"),i.innerText=g[I],e.appendChild(i)}var o=this;e.onchange=function(){o._update(this.value,A)};var n=this._makeLabel(A[A.length-1],A);this._makeItem(A,n,e)}},{key:"_makeRange",value:function(g,t,A){var e=g[0],C=g[1],I=g[2],i=g[3],o=document.createElement("input");o.className="vis-configuration vis-config-range";try{o.type="range",o.min=C,o.max=I}catch(g){}o.step=i;var n="",r=0;if(void 0!==t){var s=1.2;t<0&&t*s<C?(o.min=Math.ceil(t*s),r=o.min,n="range increased"):t/s<C&&(o.min=Math.ceil(t/s),r=o.min,n="range increased"),t*s>I&&1!==I&&(o.max=Math.ceil(t*s),r=o.max,n="range increased"),o.value=t}else o.value=e;var a=document.createElement("input");a.className="vis-configuration vis-config-rangeinput",a.value=o.value;var d=this;o.onchange=function(){a.value=this.value,d._update(Number(this.value),A)},o.oninput=function(){a.value=this.value};var h=this._makeLabel(A[A.length-1],A),l=this._makeItem(A,h,o,a);""!==n&&this.popupHistory[l]!==r&&(this.popupHistory[l]=r,this._setupPopup(n,l))}},{key:"_makeButton",value:function(){var g=this;if(!0===this.options.showButton){var t=document.createElement("div");t.className="vis-configuration vis-config-button",t.innerText="generate options",t.onclick=function(){g._printOptions()},t.onmouseover=function(){t.className="vis-configuration vis-config-button hover"},t.onmouseout=function(){t.className="vis-configuration vis-config-button"},this.optionsContainer=document.createElement("div"),this.optionsContainer.className="vis-configuration vis-config-option-container",this.domElements.push(this.optionsContainer),this.domElements.push(t)}}},{key:"_setupPopup",value:function(g,t){var A=this;if(!0===this.initialized&&!0===this.allowCreation&&this.popupCounter<this.popupLimit){var e=document.createElement("div");e.id="vis-configuration-popup",e.className="vis-configuration-popup",e.innerText=g,e.onclick=function(){A._removePopup()},this.popupCounter+=1,this.popupDiv={html:e,index:t}}}},{key:"_removePopup",value:function(){void 0!==this.popupDiv.html&&(this.popupDiv.html.parentNode.removeChild(this.popupDiv.html),clearTimeout(this.popupDiv.hideTimeout),clearTimeout(this.popupDiv.deleteTimeout),this.popupDiv={})}},{key:"_showPopupIfNeeded",value:function(){var g=this;if(void 0!==this.popupDiv.html){var t=this.domElements[this.popupDiv.index].getBoundingClientRect();this.popupDiv.html.style.left=t.left+"px",this.popupDiv.html.style.top=t.top-30+"px",document.body.appendChild(this.popupDiv.html),this.popupDiv.hideTimeout=wu((function(){g.popupDiv.html.style.opacity=0}),1500),this.popupDiv.deleteTimeout=wu((function(){g._removePopup()}),1800)}}},{key:"_makeCheckbox",value:function(g,t,A){var e=document.createElement("input");e.type="checkbox",e.className="vis-configuration vis-config-checkbox",e.checked=g,void 0!==t&&(e.checked=t,t!==g&&("object"===yd(g)?t!==g.enabled&&this.changedOptions.push({path:A,value:t}):this.changedOptions.push({path:A,value:t})));var C=this;e.onchange=function(){C._update(this.checked,A)};var I=this._makeLabel(A[A.length-1],A);this._makeItem(A,I,e)}},{key:"_makeTextInput",value:function(g,t,A){var e=document.createElement("input");e.type="text",e.className="vis-configuration vis-config-text",e.value=t,t!==g&&this.changedOptions.push({path:A,value:t});var C=this;e.onchange=function(){C._update(this.value,A)};var I=this._makeLabel(A[A.length-1],A);this._makeItem(A,I,e)}},{key:"_makeColorField",value:function(g,t,A){var e=this,C=g[1],I=document.createElement("div");"none"!==(t=void 0===t?C:t)?(I.className="vis-configuration vis-config-colorBlock",I.style.backgroundColor=t):I.className="vis-configuration vis-config-colorBlock none",t=void 0===t?C:t,I.onclick=function(){e._showColorPicker(t,I,A)};var i=this._makeLabel(A[A.length-1],A);this._makeItem(A,i,I)}},{key:"_showColorPicker",value:function(g,t,A){var e=this;t.onclick=function(){},this.colorPicker.insertTo(t),this.colorPicker.show(),this.colorPicker.setColor(g),this.colorPicker.setUpdateCallback((function(g){var C="rgba("+g.r+","+g.g+","+g.b+","+g.a+")";t.style.backgroundColor=C,e._update(C,A)})),this.colorPicker.setCloseCallback((function(){t.onclick=function(){e._showColorPicker(g,t,A)}}))}},{key:"_handleObject",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],A=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=!1,C=pc(this.options),I=!1;for(var i in g)if(Object.prototype.hasOwnProperty.call(g,i)){e=!0;var o=g[i],n=$f(t,i);if("function"==typeof C&&!1===(e=C(i,t))&&!Rh(o)&&"string"!=typeof o&&"boolean"!=typeof o&&o instanceof Object&&(this.allowCreation=!1,e=this._handleObject(o,n,!0),this.allowCreation=!1===A),!1!==e){I=!0;var r=this._getValue(n);if(Rh(o))this._handleArray(o,r,n);else if("string"==typeof o)this._makeTextInput(o,r,n);else if("boolean"==typeof o)this._makeCheckbox(o,r,n);else if(o instanceof Object){if(!this.hideOption(t,i,this.moduleOptions))if(void 0!==o.enabled){var s=$f(n,"enabled"),a=this._getValue(s);if(!0===a){var d=this._makeLabel(i,n,!0);this._makeItem(n,d),I=this._handleObject(o,n)||I}else this._makeCheckbox(o,a,n)}else{var h=this._makeLabel(i,n,!0);this._makeItem(n,h),I=this._handleObject(o,n)||I}}else console.error("dont know how to handle",o,i,n)}}return I}},{key:"_handleArray",value:function(g,t,A){"string"==typeof g[0]&&"color"===g[0]?(this._makeColorField(g,t,A),g[1]!==t&&this.changedOptions.push({path:A,value:t})):"string"==typeof g[0]?(this._makeDropdown(g,t,A),g[0]!==t&&this.changedOptions.push({path:A,value:t})):"number"==typeof g[0]&&(this._makeRange(g,t,A),g[0]!==t&&this.changedOptions.push({path:A,value:Number(t)}))}},{key:"_update",value:function(g,t){var A=this._constructOptions(g,t);this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange",A),this.initialized=!0,this.parent.setOptions(A)}},{key:"_constructOptions",value:function(g,t){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e=A;g="false"!==(g="true"===g||g)&&g;for(var C=0;C<t.length;C++)"global"!==t[C]&&(void 0===e[t[C]]&&(e[t[C]]={}),C!==t.length-1?e=e[t[C]]:e[t[C]]=g);return A}},{key:"_printOptions",value:function(){for(var g=this.getOptions();this.optionsContainer.firstChild;)this.optionsContainer.removeChild(this.optionsContainer.firstChild);this.optionsContainer.appendChild(pv("pre","const options = "+eu(g,null,2)))}},{key:"getOptions",value:function(){for(var g={},t=0;t<this.changedOptions.length;t++)this._constructOptions(this.changedOptions[t].value,this.changedOptions[t].path,g);return g}}]),g}(),yv=function(){function g(t,A){cn(this,g),this.container=t,this.overflowMethod=A||"cap",this.x=0,this.y=0,this.padding=5,this.hidden=!1,this.frame=document.createElement("div"),this.frame.className="vis-tooltip",this.container.appendChild(this.frame)}return kd(g,[{key:"setPosition",value:function(g,t){this.x=Gc(g),this.y=Gc(t)}},{key:"setText",value:function(g){if(g instanceof Element){for(;this.frame.firstChild;)this.frame.removeChild(this.frame.firstChild);this.frame.appendChild(g)}else this.frame.innerText=g}},{key:"show",value:function(g){if(void 0===g&&(g=!0),!0===g){var t=this.frame.clientHeight,A=this.frame.clientWidth,e=this.frame.parentNode.clientHeight,C=this.frame.parentNode.clientWidth,I=0,i=0;if("flip"==this.overflowMethod){var o=!1,n=!0;this.y-t<this.padding&&(n=!1),this.x+A>C-this.padding&&(o=!0),I=o?this.x-A:this.x,i=n?this.y-t:this.y}else(i=this.y-t)+t+this.padding>e&&(i=e-t-this.padding),i<this.padding&&(i=this.padding),(I=this.x)+A+this.padding>C&&(I=C-A-this.padding),I<this.padding&&(I=this.padding);this.frame.style.left=I+"px",this.frame.style.top=i+"px",this.frame.style.visibility="visible",this.hidden=!1}else this.hide()}},{key:"hide",value:function(){this.hidden=!0,this.frame.style.left="0",this.frame.style.top="0",this.frame.style.visibility="hidden"}},{key:"destroy",value:function(){this.frame.parentNode.removeChild(this.frame)}}]),g}(),mv=!1,bv="background: #FFeeee; color: #dd0000",wv=function(){function g(){cn(this,g)}return kd(g,null,[{key:"validate",value:function(t,A,e){mv=!1,fv=A;var C=A;return void 0!==e&&(C=A[e]),g.parse(t,C,[]),mv}},{key:"parse",value:function(t,A,e){for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&g.check(C,t,A,e)}},{key:"check",value:function(t,A,e,C){if(void 0!==e[t]||void 0!==e.__any__){var I=t,i=!0;void 0===e[t]&&void 0!==e.__any__&&(I="__any__",i="object"===g.getType(A[t]));var o=e[I];i&&void 0!==o.__type__&&(o=o.__type__),g.checkFields(t,A,e,I,o,C)}else g.getSuggestion(t,e,C)}},{key:"checkFields",value:function(t,A,e,C,I,i){var o=function(A){console.error("%c"+A+g.printLocation(i,t),bv)},n=g.getType(A[t]),r=I[n];void 0!==r?"array"===g.getType(r)&&-1===Xc(r).call(r,A[t])?(o('Invalid option detected in "'+t+'". Allowed values are:'+g.print(r)+' not "'+A[t]+'". '),mv=!0):"object"===n&&"__any__"!==C&&(i=$f(i,t),g.parse(A[t],e[C],i)):void 0===I.any&&(o('Invalid type received for "'+t+'". Expected: '+g.print(Lh(I))+". Received ["+n+'] "'+A[t]+'"'),mv=!0)}},{key:"getType",value:function(g){var t=yd(g);return"object"===t?null===g?"null":g instanceof Boolean?"boolean":g instanceof Number?"number":g instanceof String?"string":Rh(g)?"array":g instanceof Date?"date":void 0!==g.nodeType?"dom":!0===g._isAMomentObject?"moment":"object":"number"===t?"number":"boolean"===t?"boolean":"string"===t?"string":void 0===t?"undefined":t}},{key:"getSuggestion",value:function(t,A,e){var C,I=g.findInOptions(t,A,e,!1),i=g.findInOptions(t,fv,[],!0);C=void 0!==I.indexMatch?" in "+g.printLocation(I.path,t,"")+'Perhaps it was incomplete? Did you mean: "'+I.indexMatch+'"?\n\n':i.distance<=4&&I.distance>i.distance?" in "+g.printLocation(I.path,t,"")+"Perhaps it was misplaced? Matching option found at: "+g.printLocation(i.path,i.closestMatch,""):I.distance<=8?'. Did you mean "'+I.closestMatch+'"?'+g.printLocation(I.path,t):". Did you mean one of these: "+g.print(Lh(A))+g.printLocation(e,t),console.error('%cUnknown option detected: "'+t+'"'+C,bv),mv=!0}},{key:"findInOptions",value:function(t,A,e){var C,I=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=1e9,o="",n=[],r=t.toLowerCase(),s=void 0;for(var a in A){var d=void 0;if(void 0!==A[a].__type__&&!0===I){var h=g.findInOptions(t,A[a],$f(e,a));i>h.distance&&(o=h.closestMatch,n=h.path,i=h.distance,s=h.indexMatch)}else{var l;-1!==Xc(l=a.toLowerCase()).call(l,r)&&(s=a),i>(d=g.levenshteinDistance(t,a))&&(o=a,n=wh(C=e).call(C),i=d)}}return{closestMatch:o,path:n,distance:i,indexMatch:s}}},{key:"printLocation",value:function(g,t){for(var A="\n\n"+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Problem value found at: \n")+"options = {\n",e=0;e<g.length;e++){for(var C=0;C<e+1;C++)A+="  ";A+=g[e]+": {\n"}for(var I=0;I<g.length+1;I++)A+="  ";A+=t+"\n";for(var i=0;i<g.length+1;i++){for(var o=0;o<g.length-i;o++)A+="  ";A+="}\n"}return A+"\n\n"}},{key:"print",value:function(g){return eu(g).replace(/(")|(\[)|(\])|(,"__type__")/g,"").replace(/(,)/g,", ")}},{key:"levenshteinDistance",value:function(g,t){if(0===g.length)return t.length;if(0===t.length)return g.length;var A,e,C=[];for(A=0;A<=t.length;A++)C[A]=[A];for(e=0;e<=g.length;e++)C[0][e]=e;for(A=1;A<=t.length;A++)for(e=1;e<=g.length;e++)t.charAt(A-1)==g.charAt(e-1)?C[A][e]=C[A-1][e-1]:C[A][e]=Math.min(C[A-1][e-1]+1,Math.min(C[A][e-1]+1,C[A-1][e]+1));return C[t.length][g.length]}}]),g}(),kv=jf,xv=vv,Ev=Gf,Ov=yv,Tv=bv,Dv=wv;function Nv(g){return zv=g,function(){var g={};Sv=0,void(Zv=zv.charAt(0)),Kv(),"strict"===Fv&&(g.strict=!0,Kv());"graph"!==Fv&&"digraph"!==Fv||(g.type=Fv,Kv());Gv===Mv.IDENTIFIER&&(g.id=Fv,Kv());if("{"!=Fv)throw gy("Angle bracket { expected");if(Kv(),Hv(g),"}"!=Fv)throw gy("Angle bracket } expected");if(Kv(),""!==Fv)throw gy("End of file expected");return Kv(),delete g.node,delete g.edge,delete g.graph,g}()}var Rv={fontsize:"font.size",fontcolor:"font.color",labelfontcolor:"font.color",fontname:"font.face",color:["color.border","color.background"],fillcolor:"color.background",tooltip:"title",labeltooltip:"title"},Pv=$c(Rv);Pv.color="color.color",Pv.style="dashes";var Mv={NULL:0,DELIMITER:1,IDENTIFIER:2,UNKNOWN:3},Bv={"{":!0,"}":!0,"[":!0,"]":!0,";":!0,"=":!0,",":!0,"->":!0,"--":!0},zv="",Sv=0,Zv="",Fv="",Gv=Mv.NULL;function jv(){Sv++,Zv=zv.charAt(Sv)}function Lv(){return zv.charAt(Sv+1)}function Vv(g){var t=g.charCodeAt(0);return t<47?35===t||46===t:t<59?t>47:t<91?t>64:t<96?95===t:t<123&&t>96}function Yv(g,t){if(g||(g={}),t)for(var A in t)t.hasOwnProperty(A)&&(g[A]=t[A]);return g}function Wv(g,t,A){for(var e=t.split("."),C=g;e.length;){var I=e.shift();e.length?(C[I]||(C[I]={}),C=C[I]):C[I]=A}}function Qv(g,t){for(var A,e,C=null,I=[g],i=g;i.parent;)I.push(i.parent),i=i.parent;if(i.nodes)for(A=0,e=i.nodes.length;A<e;A++)if(t.id===i.nodes[A].id){C=i.nodes[A];break}for(C||(C={id:t.id},g.node&&(C.attr=Yv(C.attr,g.node))),A=I.length-1;A>=0;A--){var o,n=I[A];n.nodes||(n.nodes=[]),-1===Xc(o=n.nodes).call(o,C)&&n.nodes.push(C)}t.attr&&(C.attr=Yv(C.attr,t.attr))}function Uv(g,t){if(g.edges||(g.edges=[]),g.edges.push(t),g.edge){var A=Yv({},g.edge);t.attr=Yv(A,t.attr)}}function _v(g,t,A,e,C){var I={from:t,to:A,type:e};return g.edge&&(I.attr=Yv({},g.edge)),I.attr=Yv(I.attr||{},C),null!=C&&C.hasOwnProperty("arrows")&&null!=C.arrows&&(I.arrows={to:{enabled:!0,type:C.arrows.type}},C.arrows=null),I}function Kv(){for(Gv=Mv.NULL,Fv="";" "===Zv||"\t"===Zv||"\n"===Zv||"\r"===Zv;)jv();do{var g=!1;if("#"===Zv){for(var t=Sv-1;" "===zv.charAt(t)||"\t"===zv.charAt(t);)t--;if("\n"===zv.charAt(t)||""===zv.charAt(t)){for(;""!=Zv&&"\n"!=Zv;)jv();g=!0}}if("/"===Zv&&"/"===Lv()){for(;""!=Zv&&"\n"!=Zv;)jv();g=!0}if("/"===Zv&&"*"===Lv()){for(;""!=Zv;){if("*"===Zv&&"/"===Lv()){jv(),jv();break}jv()}g=!0}for(;" "===Zv||"\t"===Zv||"\n"===Zv||"\r"===Zv;)jv()}while(g);if(""!==Zv){var A=Zv+Lv();if(Bv[A])return Gv=Mv.DELIMITER,Fv=A,jv(),void jv();if(Bv[Zv])return Gv=Mv.DELIMITER,Fv=Zv,void jv();if(Vv(Zv)||"-"===Zv){for(Fv+=Zv,jv();Vv(Zv);)Fv+=Zv,jv();return"false"===Fv?Fv=!1:"true"===Fv?Fv=!0:isNaN(Number(Fv))||(Fv=Number(Fv)),void(Gv=Mv.IDENTIFIER)}if('"'===Zv){for(jv();""!=Zv&&('"'!=Zv||'"'===Zv&&'"'===Lv());)'"'===Zv?(Fv+=Zv,jv()):"\\"===Zv&&"n"===Lv()?(Fv+="\n",jv()):Fv+=Zv,jv();if('"'!=Zv)throw gy('End of string " expected');return jv(),void(Gv=Mv.IDENTIFIER)}for(Gv=Mv.UNKNOWN;""!=Zv;)Fv+=Zv,jv();throw new SyntaxError('Syntax error in part "'+ty(Fv,30)+'"')}Gv=Mv.DELIMITER}function Hv(g){for(;""!==Fv&&"}"!=Fv;)Xv(g),";"===Fv&&Kv()}function Xv(g){var t=Jv(g);if(t)qv(g,t);else{var A=function(g){if("node"===Fv)return Kv(),g.node=$v(),"node";if("edge"===Fv)return Kv(),g.edge=$v(),"edge";if("graph"===Fv)return Kv(),g.graph=$v(),"graph";return null}(g);if(!A){if(Gv!=Mv.IDENTIFIER)throw gy("Identifier expected");var e=Fv;if(Kv(),"="===Fv){if(Kv(),Gv!=Mv.IDENTIFIER)throw gy("Identifier expected");g[e]=Fv,Kv()}else!function(g,t){var A={id:t},e=$v();e&&(A.attr=e);Qv(g,A),qv(g,t)}(g,e)}}}function Jv(g){var t=null;if("subgraph"===Fv&&((t={}).type="subgraph",Kv(),Gv===Mv.IDENTIFIER&&(t.id=Fv,Kv())),"{"===Fv){if(Kv(),t||(t={}),t.parent=g,t.node=g.node,t.edge=g.edge,t.graph=g.graph,Hv(t),"}"!=Fv)throw gy("Angle bracket } expected");Kv(),delete t.node,delete t.edge,delete t.graph,delete t.parent,g.subgraphs||(g.subgraphs=[]),g.subgraphs.push(t)}return t}function qv(g,t){for(;"->"===Fv||"--"===Fv;){var A,e=Fv;Kv();var C=Jv(g);if(C)A=C;else{if(Gv!=Mv.IDENTIFIER)throw gy("Identifier or subgraph expected");Qv(g,{id:A=Fv}),Kv()}Uv(g,_v(g,t,A,e,$v())),t=A}}function $v(){for(var g,t,A=null,e={dashed:!0,solid:!1,dotted:[1,5]},C={dot:"circle",box:"box",crow:"crow",curve:"curve",icurve:"inv_curve",normal:"triangle",inv:"inv_triangle",diamond:"diamond",tee:"bar",vee:"vee"},I=new Array,i=new Array;"["===Fv;){for(Kv(),A={};""!==Fv&&"]"!=Fv;){if(Gv!=Mv.IDENTIFIER)throw gy("Attribute name expected");var o=Fv;if(Kv(),"="!=Fv)throw gy("Equal sign = expected");if(Kv(),Gv!=Mv.IDENTIFIER)throw gy("Attribute value expected");var n=Fv;"style"===o&&(n=e[n]),"arrowhead"===o&&(o="arrows",n={to:{enabled:!0,type:C[n]}}),"arrowtail"===o&&(o="arrows",n={from:{enabled:!0,type:C[n]}}),I.push({attr:A,name:o,value:n}),i.push(o),Kv(),","==Fv&&Kv()}if("]"!=Fv)throw gy("Bracket ] expected");Kv()}if(Ic(i).call(i,"dir")){var r={arrows:{}};for(g=0;g<I.length;g++)if("arrows"===I[g].name)if(null!=I[g].value.to)r.arrows.to=g;else{if(null==I[g].value.from)throw gy("Invalid value of arrows");r.arrows.from=g}else"dir"===I[g].name&&(r.dir=g);var s,a,d=I[r.dir].value;if(!Ic(i).call(i,"arrows"))if("both"===d)I.push({attr:I[r.dir].attr,name:"arrows",value:{to:{enabled:!0}}}),r.arrows.to=I.length-1,I.push({attr:I[r.dir].attr,name:"arrows",value:{from:{enabled:!0}}}),r.arrows.from=I.length-1;else if("forward"===d)I.push({attr:I[r.dir].attr,name:"arrows",value:{to:{enabled:!0}}}),r.arrows.to=I.length-1;else if("back"===d)I.push({attr:I[r.dir].attr,name:"arrows",value:{from:{enabled:!0}}}),r.arrows.from=I.length-1;else{if("none"!==d)throw gy('Invalid dir type "'+d+'"');I.push({attr:I[r.dir].attr,name:"arrows",value:""}),r.arrows.to=I.length-1}if("both"===d)r.arrows.to&&r.arrows.from?(a=I[r.arrows.to].value.to.type,s=I[r.arrows.from].value.from.type,I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}},Zl(I).call(I,r.arrows.from,1)):r.arrows.to?(a=I[r.arrows.to].value.to.type,s="arrow",I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}):r.arrows.from&&(a="arrow",s=I[r.arrows.from].value.from.type,I[r.arrows.from]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}});else if("back"===d)r.arrows.to&&r.arrows.from?(a="",s=I[r.arrows.from].value.from.type,I[r.arrows.from]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}):r.arrows.to?(a="",s="arrow",r.arrows.from=r.arrows.to,I[r.arrows.from]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}):r.arrows.from&&(a="",s=I[r.arrows.from].value.from.type,I[r.arrows.to]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}),I[r.arrows.from]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{from:{enabled:!0,type:I[r.arrows.from].value.from.type}}};else if("none"===d){var h;I[h=r.arrows.to?r.arrows.to:r.arrows.from]={attr:I[h].attr,name:I[h].name,value:""}}else{if("forward"!==d)throw gy('Invalid dir type "'+d+'"');r.arrows.to&&r.arrows.from||r.arrows.to?(a=I[r.arrows.to].value.to.type,s="",I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}):r.arrows.from&&(a="arrow",s="",r.arrows.to=r.arrows.from,I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}),I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:I[r.arrows.to].value.to.type}}}}Zl(I).call(I,r.dir,1)}if(Ic(i).call(i,"penwidth")){var l=[];for(t=I.length,g=0;g<t;g++)"width"!==I[g].name&&("penwidth"===I[g].name&&(I[g].name="width"),l.push(I[g]));I=l}for(t=I.length,g=0;g<t;g++)Wv(I[g].attr,I[g].name,I[g].value);return A}function gy(g){return new SyntaxError(g+', got "'+ty(Fv,30)+'" (char '+Sv+")")}function ty(g,t){return g.length<=t?g:g.substr(0,27)+"..."}function Ay(g,t,A){for(var e=t.split("."),C=e.pop(),I=g,i=0;i<e.length;i++){var o=e[i];o in I||(I[o]={}),I=I[o]}return I[C]=A,g}function ey(g,t){var A={};for(var e in g)if(g.hasOwnProperty(e)){var C=t[e];Rh(C)?Cl(C).call(C,(function(t){Ay(A,t,g[e])})):Ay(A,"string"==typeof C?C:e,g[e])}return A}function Cy(g){var t,A=Nv(g),e={nodes:[],edges:[],options:{}};A.nodes&&Cl(t=A.nodes).call(t,(function(g){var t={id:g.id,label:String(g.label||g.id)};Yv(t,ey(g.attr,Rv)),t.image&&(t.shape="image"),e.nodes.push(t)}));if(A.edges){var C,I=function(g){var t={from:g.from,to:g.to};return Yv(t,ey(g.attr,Pv)),null==t.arrows&&"->"===g.type&&(t.arrows="to"),t};Cl(C=A.edges).call(C,(function(g){var t,A,C,i,o,n,r;(t=g.from instanceof Object?g.from.nodes:{id:g.from},A=g.to instanceof Object?g.to.nodes:{id:g.to},g.from instanceof Object&&g.from.edges)&&Cl(C=g.from.edges).call(C,(function(g){var t=I(g);e.edges.push(t)}));(o=A,n=function(t,A){var C=_v(e,t.id,A.id,g.type,g.attr),i=I(C);e.edges.push(i)},Rh(i=t)?Cl(i).call(i,(function(g){Rh(o)?Cl(o).call(o,(function(t){n(g,t)})):n(g,o)})):Rh(o)?Cl(o).call(o,(function(g){n(i,g)})):n(i,o),g.to instanceof Object&&g.to.edges)&&Cl(r=g.to.edges).call(r,(function(g){var t=I(g);e.edges.push(t)}))}))}return A.attr&&(e.options=A.attr),e}var Iy=Object.freeze({__proto__:null,DOTToGraph:Cy,parseDOT:Nv});function iy(g,t){var A,e={edges:{inheritColor:!1},nodes:{fixed:!1,parseColor:!1}};null!=t&&(null!=t.fixed&&(e.nodes.fixed=t.fixed),null!=t.parseColor&&(e.nodes.parseColor=t.parseColor),null!=t.inheritColor&&(e.edges.inheritColor=t.inheritColor));var C=g.edges,I=Fh(C).call(C,(function(g){var t={from:g.source,id:g.id,to:g.target};return null!=g.attributes&&(t.attributes=g.attributes),null!=g.label&&(t.label=g.label),null!=g.attributes&&null!=g.attributes.title&&(t.title=g.attributes.title),"Directed"===g.type&&(t.arrows="to"),g.color&&!1===e.edges.inheritColor&&(t.color=g.color),t}));return{nodes:Fh(A=g.nodes).call(A,(function(g){var t={id:g.id,fixed:e.nodes.fixed&&null!=g.x&&null!=g.y};return null!=g.attributes&&(t.attributes=g.attributes),null!=g.label&&(t.label=g.label),null!=g.size&&(t.size=g.size),null!=g.attributes&&null!=g.attributes.title&&(t.title=g.attributes.title),null!=g.title&&(t.title=g.title),null!=g.x&&(t.x=g.x),null!=g.y&&(t.y=g.y),null!=g.color&&(!0===e.nodes.parseColor?t.color=g.color:t.color={background:g.color,border:g.color,highlight:{background:g.color,border:g.color},hover:{background:g.color,border:g.color}}),t})),edges:I}}var oy=Object.freeze({__proto__:null,parseGephi:iy}),ny=Object.freeze({__proto__:null,cn:{addDescription:"单击空白处放置新节点。",addEdge:"添加连接线",addNode:"添加节点",back:"返回",close:"關閉",createEdgeError:"无法将连接线连接到群集。",del:"删除选定",deleteClusterError:"无法删除群集。",edgeDescription:"单击某个节点并将该连接线拖动到另一个节点以连接它们。",edit:"编辑",editClusterError:"无法编辑群集。",editEdge:"编辑连接线",editEdgeDescription:"单击控制节点并将它们拖到节点上连接。",editNode:"编辑节点"},cs:{addDescription:"Kluknutím do prázdného prostoru můžete přidat nový vrchol.",addEdge:"Přidat hranu",addNode:"Přidat vrchol",back:"Zpět",close:"Zavřít",createEdgeError:"Nelze připojit hranu ke shluku.",del:"Smazat výběr",deleteClusterError:"Nelze mazat shluky.",edgeDescription:"Přetažením z jednoho vrcholu do druhého můžete spojit tyto vrcholy novou hranou.",edit:"Upravit",editClusterError:"Nelze upravovat shluky.",editEdge:"Upravit hranu",editEdgeDescription:"Přetažením kontrolního vrcholu hrany ji můžete připojit k jinému vrcholu.",editNode:"Upravit vrchol"},de:{addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",addEdge:"Kante hinzufügen",addNode:"Knoten hinzufügen",back:"Zurück",close:"Schließen",createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",del:"Lösche Auswahl",deleteClusterError:"Cluster können nicht gelöscht werden.",edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",edit:"Editieren",editClusterError:"Cluster können nicht editiert werden.",editEdge:"Kante editieren",editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",editNode:"Knoten editieren"},en:{addDescription:"Click in an empty space to place a new node.",addEdge:"Add Edge",addNode:"Add Node",back:"Back",close:"Close",createEdgeError:"Cannot link edges to a cluster.",del:"Delete selected",deleteClusterError:"Clusters cannot be deleted.",edgeDescription:"Click on a node and drag the edge to another node to connect them.",edit:"Edit",editClusterError:"Clusters cannot be edited.",editEdge:"Edit Edge",editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",editNode:"Edit Node"},es:{addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",addEdge:"Añadir arista",addNode:"Añadir nodo",back:"Atrás",close:"Cerrar",createEdgeError:"No se puede conectar una arista a un grupo.",del:"Eliminar selección",deleteClusterError:"No es posible eliminar grupos.",edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",edit:"Editar",editClusterError:"No es posible editar grupos.",editEdge:"Editar arista",editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",editNode:"Editar nodo"},fr:{addDescription:"Cliquez dans un endroit vide pour placer un nœud.",addEdge:"Ajouter un lien",addNode:"Ajouter un nœud",back:"Retour",close:"Fermer",createEdgeError:"Impossible de créer un lien vers un cluster.",del:"Effacer la sélection",deleteClusterError:"Les clusters ne peuvent pas être effacés.",edgeDescription:"Cliquez sur un nœud et glissez le lien vers un autre nœud pour les connecter.",edit:"Éditer",editClusterError:"Les clusters ne peuvent pas être édités.",editEdge:"Éditer le lien",editEdgeDescription:"Cliquez sur les points de contrôle et glissez-les pour connecter un nœud.",editNode:"Éditer le nœud"},it:{addDescription:"Clicca per aggiungere un nuovo nodo",addEdge:"Aggiungi un vertice",addNode:"Aggiungi un nodo",back:"Indietro",close:"Chiudere",createEdgeError:"Non si possono collegare vertici ad un cluster",del:"Cancella la selezione",deleteClusterError:"I cluster non possono essere cancellati",edgeDescription:"Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",edit:"Modifica",editClusterError:"I clusters non possono essere modificati.",editEdge:"Modifica il vertice",editEdgeDescription:"Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",editNode:"Modifica il nodo"},nl:{addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",addEdge:"Link toevoegen",addNode:"Node toevoegen",back:"Terug",close:"Sluiten",createEdgeError:"Kan geen link maken naar een cluster.",del:"Selectie verwijderen",deleteClusterError:"Clusters kunnen niet worden verwijderd.",edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",edit:"Wijzigen",editClusterError:"Clusters kunnen niet worden aangepast.",editEdge:"Link wijzigen",editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",editNode:"Node wijzigen"},pt:{addDescription:"Clique em um espaço em branco para adicionar um novo nó",addEdge:"Adicionar aresta",addNode:"Adicionar nó",back:"Voltar",close:"Fechar",createEdgeError:"Não foi possível linkar arestas a um cluster.",del:"Remover selecionado",deleteClusterError:"Clusters não puderam ser removidos.",edgeDescription:"Clique em um nó e arraste a aresta até outro nó para conectá-los",edit:"Editar",editClusterError:"Clusters não puderam ser editados.",editEdge:"Editar aresta",editEdgeDescription:"Clique nos pontos de controle e os arraste para um nó para conectá-los",editNode:"Editar nó"},ru:{addDescription:"Кликните в свободное место, чтобы добавить новый узел.",addEdge:"Добавить ребро",addNode:"Добавить узел",back:"Назад",close:"Закрывать",createEdgeError:"Невозможно соединить ребра в кластер.",del:"Удалить выбранное",deleteClusterError:"Кластеры не могут быть удалены",edgeDescription:"Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",edit:"Редактировать",editClusterError:"Кластеры недоступны для редактирования.",editEdge:"Редактировать ребро",editEdgeDescription:"Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",editNode:"Редактировать узел"},uk:{addDescription:"Kлікніть на вільне місце, щоб додати новий вузол.",addEdge:"Додати край",addNode:"Додати вузол",back:"Назад",close:"Закрити",createEdgeError:"Не можливо об'єднати краї в групу.",del:"Видалити обране",deleteClusterError:"Групи не можуть бути видалені.",edgeDescription:"Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",edit:"Редагувати",editClusterError:"Групи недоступні для редагування.",editEdge:"Редагувати край",editEdgeDescription:"Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.",editNode:"Редагувати вузол"}});var ry=function(){function g(){cn(this,g),this.NUM_ITERATIONS=4,this.image=new Image,this.canvas=document.createElement("canvas")}return kd(g,[{key:"init",value:function(){if(!this.initialized()){this.src=this.image.src;var g=this.image.width,t=this.image.height;this.width=g,this.height=t;var A=Math.floor(t/2),e=Math.floor(t/4),C=Math.floor(t/8),I=Math.floor(t/16),i=Math.floor(g/2),o=Math.floor(g/4),n=Math.floor(g/8),r=Math.floor(g/16);this.canvas.width=3*o,this.canvas.height=A,this.coordinates=[[0,0,i,A],[i,0,o,e],[i,e,n,C],[5*n,e,r,I]],this._fillMipMap()}}},{key:"initialized",value:function(){return void 0!==this.coordinates}},{key:"_fillMipMap",value:function(){var g=this.canvas.getContext("2d"),t=this.coordinates[0];g.drawImage(this.image,t[0],t[1],t[2],t[3]);for(var A=1;A<this.NUM_ITERATIONS;A++){var e=this.coordinates[A-1],C=this.coordinates[A];g.drawImage(this.canvas,e[0],e[1],e[2],e[3],C[0],C[1],C[2],C[3])}}},{key:"drawImageAtPosition",value:function(g,t,A,e,C,I){if(this.initialized())if(t>2){t*=.5;for(var i=0;t>2&&i<this.NUM_ITERATIONS;)t*=.5,i+=1;i>=this.NUM_ITERATIONS&&(i=this.NUM_ITERATIONS-1);var o=this.coordinates[i];g.drawImage(this.canvas,o[0],o[1],o[2],o[3],A,e,C,I)}else g.drawImage(this.image,A,e,C,I)}}]),g}(),sy=function(){function g(t){cn(this,g),this.images={},this.imageBroken={},this.callback=t}return kd(g,[{key:"_tryloadBrokenUrl",value:function(g,t,A){void 0!==g&&void 0!==A&&(void 0!==t?(A.image.onerror=function(){console.error("Could not load brokenImage:",t)},A.image.src=t):console.warn("No broken url image defined"))}},{key:"_redrawWithImage",value:function(g){this.callback&&this.callback(g)}},{key:"load",value:function(g,t){var A=this,e=this.images[g];if(e)return e;var C=new ry;return this.images[g]=C,C.image.onload=function(){A._fixImageCoordinates(C.image),C.init(),A._redrawWithImage(C)},C.image.onerror=function(){console.error("Could not load image:",g),A._tryloadBrokenUrl(g,t,C)},C.image.src=g,C}},{key:"_fixImageCoordinates",value:function(g){0===g.width&&(document.body.appendChild(g),g.width=g.offsetWidth,g.height=g.offsetHeight,document.body.removeChild(g))}}]),g}(),ay={exports:{}},dy=I((function(){if("function"==typeof ArrayBuffer){var g=new ArrayBuffer(8);Object.isExtensible(g)&&Object.defineProperty(g,"a",{value:8})}})),hy=I,ly=gg,cy=y,uy=dy,py=Object.isExtensible,fy=hy((function(){py(1)}))||uy?function(g){return!!ly(g)&&((!uy||"ArrayBuffer"!==cy(g))&&(!py||py(g)))}:py,vy=!I((function(){return Object.isExtensible(Object.preventExtensions({}))})),yy=TA,my=u,by=UA,wy=gg,ky=qg,xy=Jt.f,Ey=gr,Oy=er,Ty=fy,Dy=vy,Ny=!1,Ry=et("meta"),Py=0,My=function(g){xy(g,Ry,{value:{objectID:"O"+Py++,weakData:{}}})},By=ay.exports={enable:function(){By.enable=function(){},Ny=!0;var g=Ey.f,t=my([].splice),A={};A[Ry]=1,g(A).length&&(Ey.f=function(A){for(var e=g(A),C=0,I=e.length;C<I;C++)if(e[C]===Ry){t(e,C,1);break}return e},yy({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:Oy.f}))},fastKey:function(g,t){if(!wy(g))return"symbol"==typeof g?g:("string"==typeof g?"S":"P")+g;if(!ky(g,Ry)){if(!Ty(g))return"F";if(!t)return"E";My(g)}return g[Ry].objectID},getWeakData:function(g,t){if(!ky(g,Ry)){if(!Ty(g))return!0;if(!t)return!1;My(g)}return g[Ry].weakData},onFreeze:function(g){return Dy&&Ny&&Ty(g)&&!ky(g,Ry)&&My(g),g}};by[Ry]=!0;var zy=ay.exports,Sy=Xt,Zy=P,Fy=AA,Gy=Og,jy=Qi,Ly=jA,Vy=og,Yy=Oo,Wy=yo,Qy=Gi,Uy=TypeError,_y=function(g,t){this.stopped=g,this.result=t},Ky=_y.prototype,Hy=function(g,t,A){var e,C,I,i,o,n,r,s=A&&A.that,a=!(!A||!A.AS_ENTRIES),d=!(!A||!A.IS_RECORD),h=!(!A||!A.IS_ITERATOR),l=!(!A||!A.INTERRUPTED),c=Sy(t,s),u=function(g){return e&&Qy(e,"normal",g),new _y(!0,g)},p=function(g){return a?(Fy(g),l?c(g[0],g[1],u):c(g[0],g[1])):l?c(g,u):c(g)};if(d)e=g.iterator;else if(h)e=g;else{if(!(C=Wy(g)))throw new Uy(Gy(g)+" is not iterable");if(jy(C)){for(I=0,i=Ly(g);i>I;I++)if((o=p(g[I]))&&Vy(Ky,o))return o;return new _y(!1)}e=Yy(g,C)}for(n=d?g.next:e.next;!(r=Zy(n,e)).done;){try{o=p(r.value)}catch(g){Qy(e,"throw",g)}if("object"==typeof o&&o&&Vy(Ky,o))return o}return new _y(!1)},Xy=og,Jy=TypeError,qy=function(g,t){if(Xy(t,g))return g;throw new Jy("Incorrect invocation")},$y=TA,gm=C,tm=zy,Am=I,em=uA,Cm=Hy,Im=qy,im=O,om=gg,nm=Q,rm=_I,sm=Jt.f,am=Sr.forEach,dm=D,hm=GC.set,lm=GC.getterFor,cm=function(g,t,A){var e,C=-1!==g.indexOf("Map"),I=-1!==g.indexOf("Weak"),i=C?"set":"add",o=gm[g],n=o&&o.prototype,r={};if(dm&&im(o)&&(I||n.forEach&&!Am((function(){(new o).entries().next()})))){var s=(e=t((function(t,A){hm(Im(t,s),{type:g,collection:new o}),nm(A)||Cm(A,t[i],{that:t,AS_ENTRIES:C})}))).prototype,a=lm(g);am(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(g){var t="add"===g||"set"===g;!(g in n)||I&&"clear"===g||em(s,g,(function(A,e){var C=a(this).collection;if(!t&&I&&!om(A))return"get"===g&&void 0;var i=C[g](0===A?0:A,e);return t?this:i}))})),I||sm(s,"size",{configurable:!0,get:function(){return a(this).collection.size}})}else e=A.getConstructor(t,g,C,i),tm.enable();return rm(e,g,!1,!0),r[g]=e,$y({global:!0,forced:!0},r),I||A.setStrong(e,g,C),e},um=TI,pm=function(g,t,A){for(var e in t)A&&A.unsafe&&g[e]?g[e]=t[e]:um(g,e,t[e],A);return g},fm=ig,vm=ur,ym=D,mm=dt("species"),bm=function(g){var t=fm(g);ym&&t&&!t[mm]&&vm(t,mm,{configurable:!0,get:function(){return this}})},wm=pI,km=ur,xm=pm,Em=Xt,Om=qy,Tm=Q,Dm=Hy,Nm=Ei,Rm=Oi,Pm=bm,Mm=D,Bm=zy.fastKey,zm=GC.set,Sm=GC.getterFor,Zm={getConstructor:function(g,t,A,e){var C=g((function(g,C){Om(g,I),zm(g,{type:t,index:wm(null),first:void 0,last:void 0,size:0}),Mm||(g.size=0),Tm(C)||Dm(C,g[e],{that:g,AS_ENTRIES:A})})),I=C.prototype,i=Sm(t),o=function(g,t,A){var e,C,I=i(g),o=n(g,t);return o?o.value=A:(I.last=o={index:C=Bm(t,!0),key:t,value:A,previous:e=I.last,next:void 0,removed:!1},I.first||(I.first=o),e&&(e.next=o),Mm?I.size++:g.size++,"F"!==C&&(I.index[C]=o)),g},n=function(g,t){var A,e=i(g),C=Bm(t);if("F"!==C)return e.index[C];for(A=e.first;A;A=A.next)if(A.key===t)return A};return xm(I,{clear:function(){for(var g=i(this),t=g.index,A=g.first;A;)A.removed=!0,A.previous&&(A.previous=A.previous.next=void 0),delete t[A.index],A=A.next;g.first=g.last=void 0,Mm?g.size=0:this.size=0},delete:function(g){var t=this,A=i(t),e=n(t,g);if(e){var C=e.next,I=e.previous;delete A.index[e.index],e.removed=!0,I&&(I.next=C),C&&(C.previous=I),A.first===e&&(A.first=C),A.last===e&&(A.last=I),Mm?A.size--:t.size--}return!!e},forEach:function(g){for(var t,A=i(this),e=Em(g,arguments.length>1?arguments[1]:void 0);t=t?t.next:A.first;)for(e(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(g){return!!n(this,g)}}),xm(I,A?{get:function(g){var t=n(this,g);return t&&t.value},set:function(g,t){return o(this,0===g?0:g,t)}}:{add:function(g){return o(this,g=0===g?0:g,g)}}),Mm&&km(I,"size",{configurable:!0,get:function(){return i(this).size}}),C},setStrong:function(g,t,A){var e=t+" Iterator",C=Sm(t),I=Sm(e);Nm(g,t,(function(g,t){zm(this,{type:e,target:g,state:C(g),kind:t,last:void 0})}),(function(){for(var g=I(this),t=g.kind,A=g.last;A&&A.removed;)A=A.previous;return g.target&&(g.last=A=A?A.next:g.state.first)?Rm("keys"===t?A.key:"values"===t?A.value:[A.key,A.value],!1):(g.target=void 0,Rm(void 0,!0))}),A?"entries":"values",!A,!0),Pm(t)}};cm("Map",(function(g){return function(){return g(this,arguments.length?arguments[0]:void 0)}}),Zm);var Fm=A(tg.Map),Gm=function(){function g(){cn(this,g),this.clear(),this._defaultIndex=0,this._groupIndex=0,this._defaultGroups=[{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},{border:"#FFA500",background:"#FFFF00",highlight:{border:"#FFA500",background:"#FFFFA3"},hover:{border:"#FFA500",background:"#FFFFA3"}},{border:"#FA0A10",background:"#FB7E81",highlight:{border:"#FA0A10",background:"#FFAFB1"},hover:{border:"#FA0A10",background:"#FFAFB1"}},{border:"#41A906",background:"#7BE141",highlight:{border:"#41A906",background:"#A1EC76"},hover:{border:"#41A906",background:"#A1EC76"}},{border:"#E129F0",background:"#EB7DF4",highlight:{border:"#E129F0",background:"#F0B3F5"},hover:{border:"#E129F0",background:"#F0B3F5"}},{border:"#7C29F0",background:"#AD85E4",highlight:{border:"#7C29F0",background:"#D3BDF0"},hover:{border:"#7C29F0",background:"#D3BDF0"}},{border:"#C37F00",background:"#FFA807",highlight:{border:"#C37F00",background:"#FFCA66"},hover:{border:"#C37F00",background:"#FFCA66"}},{border:"#4220FB",background:"#6E6EFD",highlight:{border:"#4220FB",background:"#9B9BFD"},hover:{border:"#4220FB",background:"#9B9BFD"}},{border:"#FD5A77",background:"#FFC0CB",highlight:{border:"#FD5A77",background:"#FFD1D9"},hover:{border:"#FD5A77",background:"#FFD1D9"}},{border:"#4AD63A",background:"#C2FABC",highlight:{border:"#4AD63A",background:"#E6FFE3"},hover:{border:"#4AD63A",background:"#E6FFE3"}},{border:"#990000",background:"#EE0000",highlight:{border:"#BB0000",background:"#FF3333"},hover:{border:"#BB0000",background:"#FF3333"}},{border:"#FF6000",background:"#FF6000",highlight:{border:"#FF6000",background:"#FF6000"},hover:{border:"#FF6000",background:"#FF6000"}},{border:"#97C2FC",background:"#2B7CE9",highlight:{border:"#D2E5FF",background:"#2B7CE9"},hover:{border:"#D2E5FF",background:"#2B7CE9"}},{border:"#399605",background:"#255C03",highlight:{border:"#399605",background:"#255C03"},hover:{border:"#399605",background:"#255C03"}},{border:"#B70054",background:"#FF007E",highlight:{border:"#B70054",background:"#FF007E"},hover:{border:"#B70054",background:"#FF007E"}},{border:"#AD85E4",background:"#7C29F0",highlight:{border:"#D3BDF0",background:"#7C29F0"},hover:{border:"#D3BDF0",background:"#7C29F0"}},{border:"#4557FA",background:"#000EA1",highlight:{border:"#6E6EFD",background:"#000EA1"},hover:{border:"#6E6EFD",background:"#000EA1"}},{border:"#FFC0CB",background:"#FD5A77",highlight:{border:"#FFD1D9",background:"#FD5A77"},hover:{border:"#FFD1D9",background:"#FD5A77"}},{border:"#C2FABC",background:"#74D66A",highlight:{border:"#E6FFE3",background:"#74D66A"},hover:{border:"#E6FFE3",background:"#74D66A"}},{border:"#EE0000",background:"#990000",highlight:{border:"#FF3333",background:"#BB0000"},hover:{border:"#FF3333",background:"#BB0000"}}],this.options={},this.defaultOptions={useDefaultGroups:!0},fe(this.options,this.defaultOptions)}return kd(g,[{key:"setOptions",value:function(g){var t=["useDefaultGroups"];if(void 0!==g)for(var A in g)if(Object.prototype.hasOwnProperty.call(g,A)&&-1===Xc(t).call(t,A)){var e=g[A];this.add(A,e)}}},{key:"clear",value:function(){this._groups=new Fm,this._groupNames=[]}},{key:"get",value:function(g){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],A=this._groups.get(g);if(void 0===A&&t)if(!1===this.options.useDefaultGroups&&this._groupNames.length>0){var e=this._groupIndex%this._groupNames.length;++this._groupIndex,(A={}).color=this._groups.get(this._groupNames[e]),this._groups.set(g,A)}else{var C=this._defaultIndex%this._defaultGroups.length;this._defaultIndex++,(A={}).color=this._defaultGroups[C],this._groups.set(g,A)}return A}},{key:"add",value:function(g,t){return this._groups.has(g)||this._groupNames.push(g),this._groups.set(g,t),t}}]),g}();TA({target:"Number",stat:!0},{isNaN:function(g){return g!=g}});var jm=A(tg.Number.isNaN),Lm=C.isFinite,Vm=Number.isFinite||function(g){return"number"==typeof g&&Lm(g)};TA({target:"Number",stat:!0},{isFinite:Vm});var Ym=A(tg.Number.isFinite),Wm=Sr.some;TA({target:"Array",proto:!0,forced:!_h("some")},{some:function(g){return Wm(this,g,arguments.length>1?arguments[1]:void 0)}});var Qm=Me("Array").some,Um=og,_m=Qm,Km=Array.prototype,Hm=function(g){var t=g.some;return g===Km||Um(Km,g)&&t===Km.some?_m:t},Xm=A(Hm);function Jm(g){if(void 0===g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}var qm=qc,$m=A(qm);TA({target:"Object",stat:!0},{setPrototypeOf:ri});var gb=tg.Object.setPrototypeOf,tb=A(gb),Ab=A(Ge);function eb(g,t){var A;return eb=tb?Ab(A=tb).call(A):function(g,t){return g.__proto__=t,g},eb(g,t)}function Cb(g,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");g.prototype=$m(t&&t.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),kn(g,"prototype",{writable:!1}),t&&eb(g,t)}function Ib(g,t){if(t&&("object"===yd(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Jm(g)}var ib=rc,ob=A(ib);function nb(g){var t;return nb=tb?Ab(t=ob).call(t):function(g){return g.__proto__||ob(g)},nb(g)}function rb(g,t,A){return(t=bd(t))in g?kn(g,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):g[t]=A,g}var sb={exports:{}},ab={exports:{}};!function(g){var t=cd,A=fd;function e(C){return g.exports=e="function"==typeof t&&"symbol"==typeof A?function(g){return typeof g}:function(g){return g&&"function"==typeof t&&g.constructor===t&&g!==t.prototype?"symbol":typeof g},g./*exports.*/__esModule=!0,g./*exports.*/default=g.exports,e(C)}g.exports=e,g./*exports.*/__esModule=!0,g./*exports.*/default=g.exports}(ab);var db=ab.exports,hb=el,lb=qg,cb=Dh,ub=T,pb=Jt,fb=gg,vb=uA,yb=Error,mb=u("".replace),bb=String(new yb("zxcasd").stack),wb=/\n\s*at [^:]*:[^\n]*/,kb=wb.test(bb),xb=G,Eb=!I((function(){var g=new Error("a");return!("stack"in g)||(Object.defineProperty(g,"stack",xb(1,7)),7!==g.stack)})),Ob=uA,Tb=function(g,t){if(kb&&"string"==typeof g&&!yb.prepareStackTrace)for(;t--;)g=mb(g,wb,"");return g},Db=Eb,Nb=Error.captureStackTrace,Rb=sC,Pb=TA,Mb=og,Bb=EI,zb=ri,Sb=function(g,t,A){for(var e=cb(t),C=pb.f,I=ub.f,i=0;i<e.length;i++){var o=e[i];lb(g,o)||A&&lb(A,o)||C(g,o,I(t,o))}},Zb=pI,Fb=uA,Gb=G,jb=function(g,t){fb(t)&&"cause"in t&&vb(g,"cause",t.cause)},Lb=function(g,t,A,e){Db&&(Nb?Nb(g,t):Ob(g,"stack",Tb(A,e)))},Vb=Hy,Yb=function(g,t){return void 0===g?arguments.length<2?"":t:Rb(g)},Wb=dt("toStringTag"),Qb=Error,Ub=[].push,_b=function(g,t){var A,e=Mb(Kb,this);zb?A=zb(new Qb,e?Bb(this):Kb):(A=e?this:Zb(Kb),Fb(A,Wb,"Error")),void 0!==t&&Fb(A,"message",Yb(t)),Lb(A,_b,A.stack,1),arguments.length>2&&jb(A,arguments[2]);var C=[];return Vb(g,Ub,{that:C}),Fb(A,"errors",C),A};zb?zb(_b,Qb):Sb(_b,Qb,{name:!0});var Kb=_b.prototype=Zb(Qb.prototype,{constructor:Gb(1,_b),message:Gb(1,""),name:Gb(1,"AggregateError")});Pb({global:!0,constructor:!0,arity:2},{AggregateError:_b});var Hb,Xb,Jb,qb,$b="process"===y(C.process),gw=ro,tw=Og,Aw=TypeError,ew=function(g){if(gw(g))return g;throw new Aw(tw(g)+" is not a constructor")},Cw=AA,Iw=ew,iw=Q,ow=dt("species"),nw=function(g,t){var A,e=Cw(g).constructor;return void 0===e||iw(A=Cw(e)[ow])?t:Iw(A)},rw=/(?:ipad|iphone|ipod).*applewebkit/i.test(ng),sw=C,aw=a,dw=Xt,hw=O,lw=qg,cw=I,uw=gI,pw=ve,fw=Et,vw=iu,yw=rw,mw=$b,bw=sw.setImmediate,ww=sw.clearImmediate,kw=sw.process,xw=sw.Dispatch,Ew=sw.Function,Ow=sw.MessageChannel,Tw=sw.String,Dw=0,Nw={},Rw="onreadystatechange";cw((function(){Hb=sw.location}));var Pw=function(g){if(lw(Nw,g)){var t=Nw[g];delete Nw[g],t()}},Mw=function(g){return function(){Pw(g)}},Bw=function(g){Pw(g.data)},zw=function(g){sw.postMessage(Tw(g),Hb.protocol+"//"+Hb.host)};bw&&ww||(bw=function(g){vw(arguments.length,1);var t=hw(g)?g:Ew(g),A=pw(arguments,1);return Nw[++Dw]=function(){aw(t,void 0,A)},Xb(Dw),Dw},ww=function(g){delete Nw[g]},mw?Xb=function(g){kw.nextTick(Mw(g))}:xw&&xw.now?Xb=function(g){xw.now(Mw(g))}:Ow&&!yw?(qb=(Jb=new Ow).port2,Jb.port1.onmessage=Bw,Xb=dw(qb.postMessage,qb)):sw.addEventListener&&hw(sw.postMessage)&&!sw.importScripts&&Hb&&"file:"!==Hb.protocol&&!cw(zw)?(Xb=zw,sw.addEventListener("message",Bw,!1)):Xb=Rw in fw("script")?function(g){uw.appendChild(fw("script"))[Rw]=function(){uw.removeChild(this),Pw(g)}}:function(g){setTimeout(Mw(g),0)});var Sw={set:bw,clear:ww},Zw=function(){this.head=null,this.tail=null};Zw.prototype={add:function(g){var t={item:g,next:null},A=this.tail;A?A.next=t:this.head=t,this.tail=t},get:function(){var g=this.head;if(g)return null===(this.head=g.next)&&(this.tail=null),g.item}};var Fw,Gw,jw,Lw,Vw,Yw=Zw,Ww=/ipad|iphone|ipod/i.test(ng)&&"undefined"!=typeof Pebble,Qw=/web0s(?!.*chrome)/i.test(ng),Uw=C,_w=Xt,Kw=T.f,Hw=Sw.set,Xw=Yw,Jw=rw,qw=Ww,$w=Qw,gk=$b,tk=Uw.MutationObserver||Uw.WebKitMutationObserver,Ak=Uw.document,ek=Uw.process,Ck=Uw.Promise,Ik=Kw(Uw,"queueMicrotask"),ik=Ik&&Ik.value;if(!ik){var ok=new Xw,nk=function(){var g,t;for(gk&&(g=ek.domain)&&g.exit();t=ok.get();)try{t()}catch(g){throw ok.head&&Fw(),g}g&&g.enter()};Jw||gk||$w||!tk||!Ak?!qw&&Ck&&Ck.resolve?((Lw=Ck.resolve(void 0)).constructor=Ck,Vw=_w(Lw.then,Lw),Fw=function(){Vw(nk)}):gk?Fw=function(){ek.nextTick(nk)}:(Hw=_w(Hw,Uw),Fw=function(){Hw(nk)}):(Gw=!0,jw=Ak.createTextNode(""),new tk(nk).observe(jw,{characterData:!0}),Fw=function(){jw.data=Gw=!Gw}),ik=function(g){ok.head||Fw(),ok.add(g)}}var rk=ik,sk=function(g){try{return{error:!1,value:g()}}catch(g){return{error:!0,value:g}}},ak=C.Promise,dk="object"==typeof Deno&&Deno&&"object"==typeof Deno.version,hk=!dk&&!$b&&"object"==typeof window&&"object"==typeof document,lk=C,ck=ak,uk=O,pk=Ut,fk=Hi,vk=dt,yk=hk,mk=dk,bk=cg,wk=ck&&ck.prototype,kk=vk("species"),xk=!1,Ek=uk(lk.PromiseRejectionEvent),Ok=pk("Promise",(function(){var g=fk(ck),t=g!==String(ck);if(!t&&66===bk)return!0;if(!wk.catch||!wk.finally)return!0;if(!bk||bk<51||!/native code/.test(g)){var A=new ck((function(g){g(1)})),e=function(g){g((function(){}),(function(){}))};if((A.constructor={})[kk]=e,!(xk=A.then((function(){}))instanceof e))return!0}return!t&&(yk||mk)&&!Ek})),Tk={CONSTRUCTOR:Ok,REJECTION_EVENT:Ek,SUBCLASSING:xk},Dk={},Nk=Rg,Rk=TypeError,Pk=function(g){var t,A;this.promise=new g((function(g,e){if(void 0!==t||void 0!==A)throw new Rk("Bad Promise constructor");t=g,A=e})),this.resolve=Nk(t),this.reject=Nk(A)};Dk.f=function(g){return new Pk(g)};var Mk,Bk,zk=TA,Sk=$b,Zk=C,Fk=P,Gk=TI,jk=_I,Lk=bm,Vk=Rg,Yk=O,Wk=gg,Qk=qy,Uk=nw,_k=Sw.set,Kk=rk,Hk=function(g,t){try{1===arguments.length?console.error(g):console.error(g,t)}catch(g){}},Xk=sk,Jk=Yw,qk=GC,$k=ak,gx=Tk,tx=Dk,Ax="Promise",ex=gx.CONSTRUCTOR,Cx=gx.REJECTION_EVENT,Ix=qk.getterFor(Ax),ix=qk.set,ox=$k&&$k.prototype,nx=$k,rx=ox,sx=Zk.TypeError,ax=Zk.document,dx=Zk.process,hx=tx.f,lx=hx,cx=!!(ax&&ax.createEvent&&Zk.dispatchEvent),ux="unhandledrejection",px=function(g){var t;return!(!Wk(g)||!Yk(t=g.then))&&t},fx=function(g,t){var A,e,C,I=t.value,i=1===t.state,o=i?g.ok:g.fail,n=g.resolve,r=g.reject,s=g.domain;try{o?(i||(2===t.rejection&&wx(t),t.rejection=1),!0===o?A=I:(s&&s.enter(),A=o(I),s&&(s.exit(),C=!0)),A===g.promise?r(new sx("Promise-chain cycle")):(e=px(A))?Fk(e,A,n,r):n(A)):r(I)}catch(g){s&&!C&&s.exit(),r(g)}},vx=function(g,t){g.notified||(g.notified=!0,Kk((function(){for(var A,e=g.reactions;A=e.get();)fx(A,g);g.notified=!1,t&&!g.rejection&&mx(g)})))},yx=function(g,t,A){var e,C;cx?((e=ax.createEvent("Event")).promise=t,e.reason=A,e.initEvent(g,!1,!0),Zk.dispatchEvent(e)):e={promise:t,reason:A},!Cx&&(C=Zk["on"+g])?C(e):g===ux&&Hk("Unhandled promise rejection",A)},mx=function(g){Fk(_k,Zk,(function(){var t,A=g.facade,e=g.value;if(bx(g)&&(t=Xk((function(){Sk?dx.emit("unhandledRejection",e,A):yx(ux,A,e)})),g.rejection=Sk||bx(g)?2:1,t.error))throw t.value}))},bx=function(g){return 1!==g.rejection&&!g.parent},wx=function(g){Fk(_k,Zk,(function(){var t=g.facade;Sk?dx.emit("rejectionHandled",t):yx("rejectionhandled",t,g.value)}))},kx=function(g,t,A){return function(e){g(t,e,A)}},xx=function(g,t,A){g.done||(g.done=!0,A&&(g=A),g.value=t,g.state=2,vx(g,!0))},Ex=function(g,t,A){if(!g.done){g.done=!0,A&&(g=A);try{if(g.facade===t)throw new sx("Promise can't be resolved itself");var e=px(t);e?Kk((function(){var A={done:!1};try{Fk(e,t,kx(Ex,A,g),kx(xx,A,g))}catch(t){xx(A,t,g)}})):(g.value=t,g.state=1,vx(g,!1))}catch(t){xx({done:!1},t,g)}}};ex&&(rx=(nx=function(g){Qk(this,rx),Vk(g),Fk(Mk,this);var t=Ix(this);try{g(kx(Ex,t),kx(xx,t))}catch(g){xx(t,g)}}).prototype,(Mk=function(g){ix(this,{type:Ax,done:!1,notified:!1,parent:!1,reactions:new Jk,rejection:!1,state:0,value:void 0})}).prototype=Gk(rx,"then",(function(g,t){var A=Ix(this),e=hx(Uk(this,nx));return A.parent=!0,e.ok=!Yk(g)||g,e.fail=Yk(t)&&t,e.domain=Sk?dx.domain:void 0,0===A.state?A.reactions.add(e):Kk((function(){fx(e,A)})),e.promise})),Bk=function(){var g=new Mk,t=Ix(g);this.promise=g,this.resolve=kx(Ex,t),this.reject=kx(xx,t)},tx.f=hx=function(g){return g===nx||undefined===g?new Bk(g):lx(g)}),zk({global:!0,constructor:!0,wrap:!0,forced:ex},{Promise:nx}),jk(nx,Ax,!1,!0),Lk(Ax);var Ox=ak,Tx=Tk.CONSTRUCTOR||!Yo((function(g){Ox.all(g).then(void 0,(function(){}))})),Dx=P,Nx=Rg,Rx=Dk,Px=sk,Mx=Hy;TA({target:"Promise",stat:!0,forced:Tx},{all:function(g){var t=this,A=Rx.f(t),e=A.resolve,C=A.reject,I=Px((function(){var A=Nx(t.resolve),I=[],i=0,o=1;Mx(g,(function(g){var n=i++,r=!1;o++,Dx(A,t,g).then((function(g){r||(r=!0,I[n]=g,--o||e(I))}),C)})),--o||e(I)}));return I.error&&C(I.value),A.promise}});var Bx=TA,zx=Tk.CONSTRUCTOR;ak&&ak.prototype,Bx({target:"Promise",proto:!0,forced:zx,real:!0},{catch:function(g){return this.then(void 0,g)}});var Sx=P,Zx=Rg,Fx=Dk,Gx=sk,jx=Hy;TA({target:"Promise",stat:!0,forced:Tx},{race:function(g){var t=this,A=Fx.f(t),e=A.reject,C=Gx((function(){var C=Zx(t.resolve);jx(g,(function(g){Sx(C,t,g).then(A.resolve,e)}))}));return C.error&&e(C.value),A.promise}});var Lx=P,Vx=Dk;TA({target:"Promise",stat:!0,forced:Tk.CONSTRUCTOR},{reject:function(g){var t=Vx.f(this);return Lx(t.reject,void 0,g),t.promise}});var Yx=AA,Wx=gg,Qx=Dk,Ux=function(g,t){if(Yx(g),Wx(t)&&t.constructor===g)return t;var A=Qx.f(g);return(0,A.resolve)(t),A.promise},_x=TA,Kx=ak,Hx=Tk.CONSTRUCTOR,Xx=Ux,Jx=ig("Promise"),qx=!Hx;_x({target:"Promise",stat:!0,forced:true},{resolve:function(g){return Xx(qx&&this===Jx?Kx:this,g)}});var $x=P,gE=Rg,tE=Dk,AE=sk,eE=Hy;TA({target:"Promise",stat:!0,forced:Tx},{allSettled:function(g){var t=this,A=tE.f(t),e=A.resolve,C=A.reject,I=AE((function(){var A=gE(t.resolve),C=[],I=0,i=1;eE(g,(function(g){var o=I++,n=!1;i++,$x(A,t,g).then((function(g){n||(n=!0,C[o]={status:"fulfilled",value:g},--i||e(C))}),(function(g){n||(n=!0,C[o]={status:"rejected",reason:g},--i||e(C))}))})),--i||e(C)}));return I.error&&C(I.value),A.promise}});var CE=P,IE=Rg,iE=ig,oE=Dk,nE=sk,rE=Hy,sE="No one promise resolved";TA({target:"Promise",stat:!0,forced:Tx},{any:function(g){var t=this,A=iE("AggregateError"),e=oE.f(t),C=e.resolve,I=e.reject,i=nE((function(){var e=IE(t.resolve),i=[],o=0,n=1,r=!1;rE(g,(function(g){var s=o++,a=!1;n++,CE(e,t,g).then((function(g){a||r||(r=!0,C(g))}),(function(g){a||r||(a=!0,i[s]=g,--n||I(new A(i,sE)))}))})),--n||I(new A(i,sE))}));return i.error&&I(i.value),e.promise}});var aE=TA,dE=ak,hE=I,lE=ig,cE=O,uE=nw,pE=Ux,fE=dE&&dE.prototype;aE({target:"Promise",proto:!0,real:!0,forced:!!dE&&hE((function(){fE.finally.call({then:function(){}},(function(){}))}))},{finally:function(g){var t=uE(this,lE("Promise")),A=cE(g);return this.then(A?function(A){return pE(t,g()).then((function(){return A}))}:g,A?function(A){return pE(t,g()).then((function(){throw A}))}:g)}});var vE=tg.Promise,yE=Dk;TA({target:"Promise",stat:!0},{withResolvers:function(){var g=yE.f(this);return{promise:g.promise,resolve:g.resolve,reject:g.reject}}});var mE=vE,bE=Dk,wE=sk;TA({target:"Promise",stat:!0,forced:!0},{try:function(g){var t=bE.f(this),A=wE(g);return(A.error?t.reject:t.resolve)(A.value),t.promise}});var kE=mE,xE=ll;!function(g){var t=db.default,A=wn,e=cd,C=qm,I=ib,i=hb,o=Ld,n=gb,r=kE,s=xE,a=rh;function d(){g.exports=d=function(){return l},g./*exports.*/__esModule=!0,g./*exports.*/default=g.exports;var h,l={},c=Object.prototype,u=c.hasOwnProperty,p=A||function(g,t,A){g[t]=A.value},f="function"==typeof e?e:{},v=f.iterator||"@@iterator",y=f.asyncIterator||"@@asyncIterator",m=f.toStringTag||"@@toStringTag";function b(g,t,e){return A(g,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),g[t]}try{b({},"")}catch(h){b=function(g,t,A){return g[t]=A}}function w(g,t,A,e){var I=t&&t.prototype instanceof N?t:N,i=C(I.prototype),o=new V(e||[]);return p(i,"_invoke",{value:F(g,A,o)}),i}function k(g,t,A){try{return{type:"normal",arg:g.call(t,A)}}catch(g){return{type:"throw",arg:g}}}l.wrap=w;var x="suspendedStart",E="suspendedYield",O="executing",T="completed",D={};function N(){}function R(){}function P(){}var M={};b(M,v,(function(){return this}));var B=I&&I(I(Y([])));B&&B!==c&&u.call(B,v)&&(M=B);var z=P.prototype=N.prototype=C(M);function S(g){var t;i(t=["next","throw","return"]).call(t,(function(t){b(g,t,(function(g){return this._invoke(t,g)}))}))}function Z(g,A){function e(C,I,i,o){var n=k(g[C],g,I);if("throw"!==n.type){var r=n.arg,s=r.value;return s&&"object"==t(s)&&u.call(s,"__await")?A.resolve(s.__await).then((function(g){e("next",g,i,o)}),(function(g){e("throw",g,i,o)})):A.resolve(s).then((function(g){r.value=g,i(r)}),(function(g){return e("throw",g,i,o)}))}o(n.arg)}var C;p(this,"_invoke",{value:function(g,t){function I(){return new A((function(A,C){e(g,t,A,C)}))}return C=C?C.then(I,I):I()}})}function F(g,t,A){var e=x;return function(C,I){if(e===O)throw new Error("Generator is already running");if(e===T){if("throw"===C)throw I;return{value:h,done:!0}}for(A.method=C,A.arg=I;;){var i=A.delegate;if(i){var o=G(i,A);if(o){if(o===D)continue;return o}}if("next"===A.method)A.sent=A._sent=A.arg;else if("throw"===A.method){if(e===x)throw e=T,A.arg;A.dispatchException(A.arg)}else"return"===A.method&&A.abrupt("return",A.arg);e=O;var n=k(g,t,A);if("normal"===n.type){if(e=A.done?T:E,n.arg===D)continue;return{value:n.arg,done:A.done}}"throw"===n.type&&(e=T,A.method="throw",A.arg=n.arg)}}}function G(g,t){var A=t.method,e=g.iterator[A];if(e===h)return t.delegate=null,"throw"===A&&g.iterator.return&&(t.method="return",t.arg=h,G(g,t),"throw"===t.method)||"return"!==A&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+A+"' method")),D;var C=k(e,g.iterator,t.arg);if("throw"===C.type)return t.method="throw",t.arg=C.arg,t.delegate=null,D;var I=C.arg;return I?I.done?(t[g.resultName]=I.value,t.next=g.nextLoc,"return"!==t.method&&(t.method="next",t.arg=h),t.delegate=null,D):I:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,D)}function j(g){var t,A={tryLoc:g[0]};1 in g&&(A.catchLoc=g[1]),2 in g&&(A.finallyLoc=g[2],A.afterLoc=g[3]),o(t=this.tryEntries).call(t,A)}function L(g){var t=g.completion||{};t.type="normal",delete t.arg,g.completion=t}function V(g){this.tryEntries=[{tryLoc:"root"}],i(g).call(g,j,this),this.reset(!0)}function Y(g){if(g||""===g){var A=g[v];if(A)return A.call(g);if("function"==typeof g.next)return g;if(!isNaN(g.length)){var e=-1,C=function t(){for(;++e<g.length;)if(u.call(g,e))return t.value=g[e],t.done=!1,t;return t.value=h,t.done=!0,t};return C.next=C}}throw new TypeError(t(g)+" is not iterable")}return R.prototype=P,p(z,"constructor",{value:P,configurable:!0}),p(P,"constructor",{value:R,configurable:!0}),R.displayName=b(P,m,"GeneratorFunction"),l.isGeneratorFunction=function(g){var t="function"==typeof g&&g.constructor;return!!t&&(t===R||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(g){return n?n(g,P):(g.__proto__=P,b(g,m,"GeneratorFunction")),g.prototype=C(z),g},l.awrap=function(g){return{__await:g}},S(Z.prototype),b(Z.prototype,y,(function(){return this})),l.AsyncIterator=Z,l.async=function(g,t,A,e,C){void 0===C&&(C=r);var I=new Z(w(g,t,A,e),C);return l.isGeneratorFunction(t)?I:I.next().then((function(g){return g.done?g.value:I.next()}))},S(z),b(z,m,"Generator"),b(z,v,(function(){return this})),b(z,"toString",(function(){return"[object Generator]"})),l.keys=function(g){var t=Object(g),A=[];for(var e in t)o(A).call(A,e);return s(A).call(A),function g(){for(;A.length;){var e=A.pop();if(e in t)return g.value=e,g.done=!1,g}return g.done=!0,g}},l.values=Y,V.prototype={constructor:V,reset:function(g){var t;if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,i(t=this.tryEntries).call(t,L),!g)for(var A in this)"t"===A.charAt(0)&&u.call(this,A)&&!isNaN(+a(A).call(A,1))&&(this[A]=h)},stop:function(){this.done=!0;var g=this.tryEntries[0].completion;if("throw"===g.type)throw g.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var t=this;function A(A,e){return I.type="throw",I.arg=g,t.next=A,e&&(t.method="next",t.arg=h),!!e}for(var e=this.tryEntries.length-1;e>=0;--e){var C=this.tryEntries[e],I=C.completion;if("root"===C.tryLoc)return A("end");if(C.tryLoc<=this.prev){var i=u.call(C,"catchLoc"),o=u.call(C,"finallyLoc");if(i&&o){if(this.prev<C.catchLoc)return A(C.catchLoc,!0);if(this.prev<C.finallyLoc)return A(C.finallyLoc)}else if(i){if(this.prev<C.catchLoc)return A(C.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<C.finallyLoc)return A(C.finallyLoc)}}}},abrupt:function(g,t){for(var A=this.tryEntries.length-1;A>=0;--A){var e=this.tryEntries[A];if(e.tryLoc<=this.prev&&u.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var C=e;break}}C&&("break"===g||"continue"===g)&&C.tryLoc<=t&&t<=C.finallyLoc&&(C=null);var I=C?C.completion:{};return I.type=g,I.arg=t,C?(this.method="next",this.next=C.finallyLoc,D):this.complete(I)},complete:function(g,t){if("throw"===g.type)throw g.arg;return"break"===g.type||"continue"===g.type?this.next=g.arg:"return"===g.type?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):"normal"===g.type&&t&&(this.next=t),D},finish:function(g){for(var t=this.tryEntries.length-1;t>=0;--t){var A=this.tryEntries[t];if(A.finallyLoc===g)return this.complete(A.completion,A.afterLoc),L(A),D}},catch:function(g){for(var t=this.tryEntries.length-1;t>=0;--t){var A=this.tryEntries[t];if(A.tryLoc===g){var e=A.completion;if("throw"===e.type){var C=e.arg;L(A)}return C}}throw new Error("illegal catch attempt")},delegateYield:function(g,t,A){return this.delegate={iterator:Y(g),resultName:t,nextLoc:A},"next"===this.method&&(this.arg=h),D}},l}g.exports=d,g./*exports.*/__esModule=!0,g./*exports.*/default=g.exports}(sb);var EE=(0,sb.exports)(),OE=EE;try{regeneratorRuntime=EE}catch(g){"object"==typeof globalThis?globalThis.regeneratorRuntime=EE:Function("r","regeneratorRuntime = r")(EE)}var TE=A(OE),DE=Rg,NE=Hg,RE=W,PE=jA,ME=TypeError,BE=function(g){return function(t,A,e,C){DE(A);var I=NE(t),i=RE(I),o=PE(I),n=g?o-1:0,r=g?-1:1;if(e<2)for(;;){if(n in i){C=i[n],n+=r;break}if(n+=r,g?n<0:o<=n)throw new ME("Reduce of empty array with no initial value")}for(;g?n>=0:o>n;n+=r)n in i&&(C=A(C,i[n],n,I));return C}},zE={left:BE(!1),right:BE(!0)}.left;TA({target:"Array",proto:!0,forced:!$b&&cg>79&&cg<83||!_h("reduce")},{reduce:function(g){var t=arguments.length;return zE(this,g,t,t>1?arguments[1]:void 0)}});var SE=Me("Array").reduce,ZE=og,FE=SE,GE=Array.prototype,jE=function(g){var t=g.reduce;return g===GE||ZE(GE,g)&&t===GE.reduce?FE:t},LE=A(jE),VE=En,YE=jA,WE=Tn,QE=Xt,UE=function(g,t,A,e,C,I,i,o){for(var n,r,s=C,a=0,d=!!i&&QE(i,o);a<e;)a in A&&(n=d?d(A[a],a,t):A[a],I>0&&VE(n)?(r=YE(n),s=UE(g,t,n,r,s,I-1)-1):(WE(s+1),g[s]=n),s++),a++;return s},_E=UE,KE=Rg,HE=Hg,XE=jA,JE=zn;TA({target:"Array",proto:!0},{flatMap:function(g){var t,A=HE(this),e=XE(A);return KE(g),(t=JE(A,0)).length=_E(t,A,A,e,0,1,g,arguments.length>1?arguments[1]:void 0),t}});var qE=Me("Array").flatMap,$E=og,gO=qE,tO=Array.prototype,AO=function(g){var t=g.flatMap;return g===tO||$E(tO,g)&&t===tO.flatMap?gO:t},eO=A(AO);cm("Set",(function(g){return function(){return g(this,arguments.length?arguments[0]:void 0)}}),Zm);var CO=A(tg.Set),IO=A(pd),iO=A(Oo),oO=rr,nO=Math.floor,rO=function(g,t){var A=g.length,e=nO(A/2);return A<8?sO(g,t):aO(g,rO(oO(g,0,e),t),rO(oO(g,e),t),t)},sO=function(g,t){for(var A,e,C=g.length,I=1;I<C;){for(e=I,A=g[I];e&&t(g[e-1],A)>0;)g[e]=g[--e];e!==I++&&(g[e]=A)}return g},aO=function(g,t,A,e){for(var C=t.length,I=A.length,i=0,o=0;i<C||o<I;)g[i+o]=i<C&&o<I?e(t[i],A[o])<=0?t[i++]:A[o++]:i<C?t[i++]:A[o++];return g},dO=rO,hO=ng.match(/firefox\/(\d+)/i),lO=!!hO&&+hO[1],cO=/MSIE|Trident/.test(ng),uO=ng.match(/AppleWebKit\/(\d+)\./),pO=!!uO&&+uO[1],fO=TA,vO=u,yO=Rg,mO=Hg,bO=jA,wO=fl,kO=sC,xO=I,EO=dO,OO=_h,TO=lO,DO=cO,NO=cg,RO=pO,PO=[],MO=vO(PO.sort),BO=vO(PO.push),zO=xO((function(){PO.sort(void 0)})),SO=xO((function(){PO.sort(null)})),ZO=OO("sort"),FO=!xO((function(){if(NO)return NO<70;if(!(TO&&TO>3)){if(DO)return!0;if(RO)return RO<603;var g,t,A,e,C="";for(g=65;g<76;g++){switch(t=String.fromCharCode(g),g){case 66:case 69:case 70:case 72:A=3;break;case 68:case 71:A=4;break;default:A=2}for(e=0;e<47;e++)PO.push({k:t+e,v:A})}for(PO.sort((function(g,t){return t.v-g.v})),e=0;e<PO.length;e++)t=PO[e].k.charAt(0),C.charAt(C.length-1)!==t&&(C+=t);return"DGBEFHACIJK"!==C}}));fO({target:"Array",proto:!0,forced:zO||!SO||!ZO||!FO},{sort:function(g){void 0!==g&&yO(g);var t=mO(this);if(FO)return void 0===g?MO(t):MO(t,g);var A,e,C=[],I=bO(t);for(e=0;e<I;e++)e in t&&BO(C,t[e]);for(EO(C,function(g){return function(t,A){return void 0===A?-1:void 0===t?1:void 0!==g?+g(t,A)||0:kO(t)>kO(A)?1:-1}}(g)),A=bO(C),e=0;e<A;)t[e]=C[e++];for(;e<I;)wO(t,e++);return t}});var GO=Me("Array").sort,jO=og,LO=GO,VO=Array.prototype,YO=function(g){var t=g.sort;return g===VO||jO(VO,g)&&t===VO.sort?LO:t},WO=A(YO),QO=Me("Array").keys,UO=oC,_O=qg,KO=og,HO=QO,XO=Array.prototype,JO={DOMTokenList:!0,NodeList:!0},qO=function(g){var t=g.keys;return g===XO||KO(XO,g)&&t===XO.keys||_O(JO,UO(g))?HO:t},$O=A(qO),gT=Me("Array").values,tT=oC,AT=qg,eT=og,CT=gT,IT=Array.prototype,iT={DOMTokenList:!0,NodeList:!0},oT=function(g){var t=g.values;return g===IT||eT(IT,g)&&t===IT.values||AT(iT,tT(g))?CT:t},nT=A(oT),rT=Me("Array").entries,sT=oC,aT=qg,dT=og,hT=rT,lT=Array.prototype,cT={DOMTokenList:!0,NodeList:!0},uT=function(g){var t=g.entries;return g===lT||dT(lT,g)&&t===lT.entries||aT(cT,sT(g))?hT:t},pT=A(uT),fT=A(bn),vT=TA,yT=a,mT=Ne,bT=ew,wT=AA,kT=gg,xT=pI,ET=I,OT=ig("Reflect","construct"),TT=Object.prototype,DT=[].push,NT=ET((function(){function g(){}return!(OT((function(){}),[],g)instanceof g)})),RT=!ET((function(){OT((function(){}))})),PT=NT||RT;vT({target:"Reflect",stat:!0,forced:PT,sham:PT},{construct:function(g,t){bT(g),wT(t);var A=arguments.length<3?g:bT(arguments[2]);if(RT&&!NT)return OT(g,t,A);if(g===A){switch(t.length){case 0:return new g;case 1:return new g(t[0]);case 2:return new g(t[0],t[1]);case 3:return new g(t[0],t[1],t[2]);case 4:return new g(t[0],t[1],t[2],t[3])}var e=[null];return yT(DT,e,t),new(yT(mT,g,e))}var C=A.prototype,I=xT(kT(C)?C:TT),i=yT(g,I,t);return kT(i)?i:I}});var MT=A(tg.Reflect.construct),BT=A(tg.Object.getOwnPropertySymbols),zT={exports:{}},ST=TA,ZT=I,FT=J,GT=T.f,jT=D;ST({target:"Object",stat:!0,forced:!jT||ZT((function(){GT(1)})),sham:!jT},{getOwnPropertyDescriptor:function(g,t){return GT(FT(g),t)}});var LT=tg.Object,VT=zT.exports=function(g,t){return LT.getOwnPropertyDescriptor(g,t)};LT.getOwnPropertyDescriptor.sham&&(VT.sham=!0);var YT=zT.exports,WT=A(YT),QT=Dh,UT=J,_T=T,KT=lo;TA({target:"Object",stat:!0,sham:!D},{getOwnPropertyDescriptors:function(g){for(var t,A,e=UT(g),C=_T.f,I=QT(e),i={},o=0;I.length>o;)void 0!==(A=C(e,t=I[o++]))&&KT(i,t,A);return i}});var HT=A(tg.Object.getOwnPropertyDescriptors),XT={exports:{}},JT=TA,qT=D,$T=UC.f;JT({target:"Object",stat:!0,forced:Object.defineProperties!==$T,sham:!qT},{defineProperties:$T});var gD=tg.Object,tD=XT.exports=function(g,t){return gD.defineProperties(g,t)};gD.defineProperties.sham&&(tD.sham=!0);var AD=A(XT.exports);let eD;const CD=new Uint8Array(16);function ID(){if(!eD&&(eD="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!eD))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return eD(CD)}const iD=[];for(let g=0;g<256;++g)iD.push((g+256).toString(16).slice(1));var oD,nD={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function rD(g,t,A){if(nD.randomUUID&&!t&&!g)return nD.randomUUID();const e=(g=g||{}).random||(g.rng||ID)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,t){A=A||0;for(let g=0;g<16;++g)t[A+g]=e[g];return t}return function(g,t=0){return iD[g[t+0]]+iD[g[t+1]]+iD[g[t+2]]+iD[g[t+3]]+"-"+iD[g[t+4]]+iD[g[t+5]]+"-"+iD[g[t+6]]+iD[g[t+7]]+"-"+iD[g[t+8]]+iD[g[t+9]]+"-"+iD[g[t+10]]+iD[g[t+11]]+iD[g[t+12]]+iD[g[t+13]]+iD[g[t+14]]+iD[g[t+15]]}(e)}function sD(g,t){var A=Lh(g);if(BT){var e=BT(g);t&&(e=pc(e).call(e,(function(t){return WT(g,t).enumerable}))),A.push.apply(A,e)}return A}function aD(g){for(var t=1;t<arguments.length;t++){var A,e,C=null!=arguments[t]?arguments[t]:{};t%2?Cl(A=sD(Object(C),!0)).call(A,(function(t){rb(g,t,C[t])})):HT?AD(g,HT(C)):Cl(e=sD(Object(C))).call(e,(function(t){fT(g,t,WT(C,t))}))}return g}function dD(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}function hD(g,t){var A=void 0!==uh&&ln(g)||g["@@iterator"];if(!A){if(Rh(g)||(A=function(g,t){var A;if(!g)return;if("string"==typeof g)return lD(g,t);var e=wh(A=Object.prototype.toString.call(g)).call(A,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return Uo(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return lD(g,t)}(g))||t&&g&&"number"==typeof g.length){A&&(g=A);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){A=A.call(g)},n:function(){var g=A.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==A.return||A.return()}finally{if(o)throw I}}}}function lD(g,t){(null==t||t>g.length)&&(t=g.length);for(var A=0,e=new Array(t);A<t;A++)e[A]=g[A];return e}var cD=function(){function g(t,A,e){var C,I,i;cn(this,g),rb(this,"_source",void 0),rb(this,"_transformers",void 0),rb(this,"_target",void 0),rb(this,"_listeners",{add:je(C=this._add).call(C,this),remove:je(I=this._remove).call(I,this),update:je(i=this._update).call(i,this)}),this._source=t,this._transformers=A,this._target=e}return kd(g,[{key:"all",value:function(){return this._target.update(this._transformItems(this._source.get())),this}},{key:"start",value:function(){return this._source.on("add",this._listeners.add),this._source.on("remove",this._listeners.remove),this._source.on("update",this._listeners.update),this}},{key:"stop",value:function(){return this._source.off("add",this._listeners.add),this._source.off("remove",this._listeners.remove),this._source.off("update",this._listeners.update),this}},{key:"_transformItems",value:function(g){var t;return LE(t=this._transformers).call(t,(function(g,t){return t(g)}),g)}},{key:"_add",value:function(g,t){null!=t&&this._target.add(this._transformItems(this._source.get(t.items)))}},{key:"_update",value:function(g,t){null!=t&&this._target.update(this._transformItems(this._source.get(t.items)))}},{key:"_remove",value:function(g,t){null!=t&&this._target.remove(this._transformItems(t.oldData))}}]),g}(),uD=function(){function g(t){cn(this,g),rb(this,"_source",void 0),rb(this,"_transformers",[]),this._source=t}return kd(g,[{key:"filter",value:function(g){return this._transformers.push((function(t){return pc(t).call(t,g)})),this}},{key:"map",value:function(g){return this._transformers.push((function(t){return Fh(t).call(t,g)})),this}},{key:"flatMap",value:function(g){return this._transformers.push((function(t){return eO(t).call(t,g)})),this}},{key:"to",value:function(g){return new cD(this._source,this._transformers,g)}}]),g}();function pD(g){return"string"==typeof g||"number"==typeof g}var fD=function(){function g(t){cn(this,g),rb(this,"delay",void 0),rb(this,"max",void 0),rb(this,"_queue",[]),rb(this,"_timeout",null),rb(this,"_extended",null),this.delay=null,this.max=1/0,this.setOptions(t)}return kd(g,[{key:"setOptions",value:function(g){g&&void 0!==g.delay&&(this.delay=g.delay),g&&void 0!==g.max&&(this.max=g.max),this._flushIfNeeded()}},{key:"destroy",value:function(){if(this.flush(),this._extended){for(var g=this._extended.object,t=this._extended.methods,A=0;A<t.length;A++){var e=t[A];e.original?g[e.name]=e.original:delete g[e.name]}this._extended=null}}},{key:"replace",value:function(g,t){var A=this,e=g[t];if(!e)throw new Error("Method "+t+" undefined");g[t]=function(){for(var g=arguments.length,t=new Array(g),C=0;C<g;C++)t[C]=arguments[C];A.queue({args:t,fn:e,context:this})}}},{key:"queue",value:function(g){"function"==typeof g?this._queue.push({fn:g}):this._queue.push(g),this._flushIfNeeded()}},{key:"_flushIfNeeded",value:function(){var g=this;this._queue.length>this.max&&this.flush(),null!=this._timeout&&(clearTimeout(this._timeout),this._timeout=null),this.queue.length>0&&"number"==typeof this.delay&&(this._timeout=wu((function(){g.flush()}),this.delay))}},{key:"flush",value:function(){var g,t;Cl(g=Zl(t=this._queue).call(t,0)).call(g,(function(g){g.fn.apply(g.context||g.fn,g.args||[])}))}}],[{key:"extend",value:function(t,A){var e=new g(A);if(void 0!==t.flush)throw new Error("Target object already has a property flush");t.flush=function(){e.flush()};var C=[{name:"flush",original:void 0}];if(A&&A.replace)for(var I=0;I<A.replace.length;I++){var i=A.replace[I];C.push({name:i,original:t[i]}),e.replace(t,i)}return e._extended={object:t,methods:C},e}}]),g}(),vD=function(){function g(){cn(this,g),rb(this,"_subscribers",{"*":[],add:[],remove:[],update:[]}),rb(this,"subscribe",g.prototype.on),rb(this,"unsubscribe",g.prototype.off)}return kd(g,[{key:"_trigger",value:function(g,t,A){var e,C;if("*"===g)throw new Error("Cannot trigger event *");Cl(e=bh(C=[]).call(C,ch(this._subscribers[g]),ch(this._subscribers["*"]))).call(e,(function(e){e(g,t,null!=A?A:null)}))}},{key:"on",value:function(g,t){"function"==typeof t&&this._subscribers[g].push(t)}},{key:"off",value:function(g,t){var A;this._subscribers[g]=pc(A=this._subscribers[g]).call(A,(function(g){return g!==t}))}}]),g}();oD=IO;var yD=function(){function g(t){cn(this,g),rb(this,"_pairs",void 0),this._pairs=t}return kd(g,[{key:oD,value:TE.mark((function g(){var t,A,e,C,I;return TE.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:t=hD(this._pairs),g.prev=1,t.s();case 3:if((A=t.n()).done){g.next=9;break}return e=lh(A.value,2),C=e[0],I=e[1],g.next=7,[C,I];case 7:g.next=3;break;case 9:g.next=14;break;case 11:g.prev=11,g.t0=g.catch(1),t.e(g.t0);case 14:return g.prev=14,t.f(),g.finish(14);case 17:case"end":return g.stop()}}),g,this,[[1,11,14,17]])}))},{key:"entries",value:TE.mark((function g(){var t,A,e,C,I;return TE.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:t=hD(this._pairs),g.prev=1,t.s();case 3:if((A=t.n()).done){g.next=9;break}return e=lh(A.value,2),C=e[0],I=e[1],g.next=7,[C,I];case 7:g.next=3;break;case 9:g.next=14;break;case 11:g.prev=11,g.t0=g.catch(1),t.e(g.t0);case 14:return g.prev=14,t.f(),g.finish(14);case 17:case"end":return g.stop()}}),g,this,[[1,11,14,17]])}))},{key:"keys",value:TE.mark((function g(){var t,A,e,C;return TE.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:t=hD(this._pairs),g.prev=1,t.s();case 3:if((A=t.n()).done){g.next=9;break}return e=lh(A.value,1),C=e[0],g.next=7,C;case 7:g.next=3;break;case 9:g.next=14;break;case 11:g.prev=11,g.t0=g.catch(1),t.e(g.t0);case 14:return g.prev=14,t.f(),g.finish(14);case 17:case"end":return g.stop()}}),g,this,[[1,11,14,17]])}))},{key:"values",value:TE.mark((function g(){var t,A,e,C;return TE.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:t=hD(this._pairs),g.prev=1,t.s();case 3:if((A=t.n()).done){g.next=9;break}return e=lh(A.value,2),C=e[1],g.next=7,C;case 7:g.next=3;break;case 9:g.next=14;break;case 11:g.prev=11,g.t0=g.catch(1),t.e(g.t0);case 14:return g.prev=14,t.f(),g.finish(14);case 17:case"end":return g.stop()}}),g,this,[[1,11,14,17]])}))},{key:"toIdArray",value:function(){var g;return Fh(g=ch(this._pairs)).call(g,(function(g){return g[0]}))}},{key:"toItemArray",value:function(){var g;return Fh(g=ch(this._pairs)).call(g,(function(g){return g[1]}))}},{key:"toEntryArray",value:function(){return ch(this._pairs)}},{key:"toObjectMap",value:function(){var g,t=$c(null),A=hD(this._pairs);try{for(A.s();!(g=A.n()).done;){var e=lh(g.value,2),C=e[0],I=e[1];t[C]=I}}catch(g){A.e(g)}finally{A.f()}return t}},{key:"toMap",value:function(){return new Fm(this._pairs)}},{key:"toIdSet",value:function(){return new CO(this.toIdArray())}},{key:"toItemSet",value:function(){return new CO(this.toItemArray())}},{key:"cache",value:function(){return new g(ch(this._pairs))}},{key:"distinct",value:function(g){var t,A=new CO,e=hD(this._pairs);try{for(e.s();!(t=e.n()).done;){var C=lh(t.value,2),I=C[0],i=C[1];A.add(g(i,I))}}catch(g){e.e(g)}finally{e.f()}return A}},{key:"filter",value:function(t){var A=this._pairs;return new g(rb({},IO,TE.mark((function g(){var e,C,I,i,o;return TE.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:e=hD(A),g.prev=1,e.s();case 3:if((C=e.n()).done){g.next=10;break}if(I=lh(C.value,2),i=I[0],o=I[1],!t(o,i)){g.next=8;break}return g.next=8,[i,o];case 8:g.next=3;break;case 10:g.next=15;break;case 12:g.prev=12,g.t0=g.catch(1),e.e(g.t0);case 15:return g.prev=15,e.f(),g.finish(15);case 18:case"end":return g.stop()}}),g,null,[[1,12,15,18]])}))))}},{key:"forEach",value:function(g){var t,A=hD(this._pairs);try{for(A.s();!(t=A.n()).done;){var e=lh(t.value,2),C=e[0];g(e[1],C)}}catch(g){A.e(g)}finally{A.f()}}},{key:"map",value:function(t){var A=this._pairs;return new g(rb({},IO,TE.mark((function g(){var e,C,I,i,o;return TE.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:e=hD(A),g.prev=1,e.s();case 3:if((C=e.n()).done){g.next=9;break}return I=lh(C.value,2),i=I[0],o=I[1],g.next=7,[i,t(o,i)];case 7:g.next=3;break;case 9:g.next=14;break;case 11:g.prev=11,g.t0=g.catch(1),e.e(g.t0);case 14:return g.prev=14,e.f(),g.finish(14);case 17:case"end":return g.stop()}}),g,null,[[1,11,14,17]])}))))}},{key:"max",value:function(g){var t=iO(this._pairs),A=t.next();if(A.done)return null;for(var e=A.value[1],C=g(A.value[1],A.value[0]);!(A=t.next()).done;){var I=lh(A.value,2),i=I[0],o=I[1],n=g(o,i);n>C&&(C=n,e=o)}return e}},{key:"min",value:function(g){var t=iO(this._pairs),A=t.next();if(A.done)return null;for(var e=A.value[1],C=g(A.value[1],A.value[0]);!(A=t.next()).done;){var I=lh(A.value,2),i=I[0],o=I[1],n=g(o,i);n<C&&(C=n,e=o)}return e}},{key:"reduce",value:function(g,t){var A,e=hD(this._pairs);try{for(e.s();!(A=e.n()).done;){var C=lh(A.value,2),I=C[0];t=g(t,C[1],I)}}catch(g){e.e(g)}finally{e.f()}return t}},{key:"sort",value:function(t){var A=this;return new g(rb({},IO,(function(){var g;return iO(WO(g=ch(A._pairs)).call(g,(function(g,A){var e=lh(g,2),C=e[0],I=e[1],i=lh(A,2),o=i[0],n=i[1];return t(I,n,C,o)})))})))}}]),g}();var mD=function(g){Cb(A,g);var t=dD(A);function A(g,e){var C;return cn(this,A),rb(Jm(C=t.call(this)),"flush",void 0),rb(Jm(C),"length",void 0),rb(Jm(C),"_options",void 0),rb(Jm(C),"_data",void 0),rb(Jm(C),"_idProp",void 0),rb(Jm(C),"_queue",null),g&&!Rh(g)&&(e=g,g=[]),C._options=e||{},C._data=new Fm,C.length=0,C._idProp=C._options.fieldId||"id",g&&g.length&&C.add(g),C.setOptions(e),C}return kd(A,[{key:"idProp",get:function(){return this._idProp}},{key:"setOptions",value:function(g){g&&void 0!==g.queue&&(!1===g.queue?this._queue&&(this._queue.destroy(),this._queue=null):(this._queue||(this._queue=fD.extend(this,{replace:["add","update","remove"]})),g.queue&&"object"===yd(g.queue)&&this._queue.setOptions(g.queue)))}},{key:"add",value:function(g,t){var A,e=this,C=[];if(Rh(g)){var I=Fh(g).call(g,(function(g){return g[e._idProp]}));if(Xm(I).call(I,(function(g){return e._data.has(g)})))throw new Error("A duplicate id was found in the parameter array.");for(var i=0,o=g.length;i<o;i++)A=this._addItem(g[i]),C.push(A)}else{if(!g||"object"!==yd(g))throw new Error("Unknown dataType");A=this._addItem(g),C.push(A)}return C.length&&this._trigger("add",{items:C},t),C}},{key:"update",value:function(g,t){var A=this,e=[],C=[],I=[],i=[],o=this._idProp,n=function(g){var t=g[o];if(null!=t&&A._data.has(t)){var n=g,r=fe({},A._data.get(t)),s=A._updateItem(n);C.push(s),i.push(n),I.push(r)}else{var a=A._addItem(g);e.push(a)}};if(Rh(g))for(var r=0,s=g.length;r<s;r++)g[r]&&"object"===yd(g[r])?n(g[r]):console.warn("Ignoring input item, which is not an object at index "+r);else{if(!g||"object"!==yd(g))throw new Error("Unknown dataType");n(g)}if(e.length&&this._trigger("add",{items:e},t),C.length){var a={items:C,oldData:I,data:i};this._trigger("update",a,t)}return bh(e).call(e,C)}},{key:"updateOnly",value:function(g,t){var A,e=this;Rh(g)||(g=[g]);var C=Fh(A=Fh(g).call(g,(function(g){var t=e._data.get(g[e._idProp]);if(null==t)throw new Error("Updating non-existent items is not allowed.");return{oldData:t,update:g}}))).call(A,(function(g){var t=g.oldData,A=g.update,C=t[e._idProp],I=function(g){for(var t,A=arguments.length,e=new Array(A>1?A-1:0),C=1;C<A;C++)e[C-1]=arguments[C];return Bf.apply(void 0,bh(t=[{},g]).call(t,e))}(t,A);return e._data.set(C,I),{id:C,oldData:t,updatedData:I}}));if(C.length){var I={items:Fh(C).call(C,(function(g){return g.id})),oldData:Fh(C).call(C,(function(g){return g.oldData})),data:Fh(C).call(C,(function(g){return g.updatedData}))};return this._trigger("update",I,t),I.items}return[]}},{key:"get",value:function(g,t){var A=void 0,e=void 0,C=void 0;pD(g)?(A=g,C=t):Rh(g)?(e=g,C=t):C=g;var I,i=C&&"Object"===C.returnType?"Object":"Array",o=C&&pc(C),n=[],r=void 0,s=void 0,a=void 0;if(null!=A)(r=this._data.get(A))&&o&&!o(r)&&(r=void 0);else if(null!=e)for(var d=0,h=e.length;d<h;d++)null==(r=this._data.get(e[d]))||o&&!o(r)||n.push(r);else for(var l,c=0,u=(s=ch($O(l=this._data).call(l))).length;c<u;c++)a=s[c],null==(r=this._data.get(a))||o&&!o(r)||n.push(r);if(C&&C.order&&null==A&&this._sort(n,C.order),C&&C.fields){var p=C.fields;if(null!=A&&null!=r)r=this._filterFields(r,p);else for(var f=0,v=n.length;f<v;f++)n[f]=this._filterFields(n[f],p)}if("Object"==i){for(var y={},m=0,b=n.length;m<b;m++){var w=n[m];y[w[this._idProp]]=w}return y}return null!=A?null!==(I=r)&&void 0!==I?I:null:n}},{key:"getIds",value:function(g){var t=this._data,A=g&&pc(g),e=g&&g.order,C=ch($O(t).call(t)),I=[];if(A)if(e){for(var i=[],o=0,n=C.length;o<n;o++){var r=C[o],s=this._data.get(r);null!=s&&A(s)&&i.push(s)}this._sort(i,e);for(var a=0,d=i.length;a<d;a++)I.push(i[a][this._idProp])}else for(var h=0,l=C.length;h<l;h++){var c=C[h],u=this._data.get(c);null!=u&&A(u)&&I.push(u[this._idProp])}else if(e){for(var p=[],f=0,v=C.length;f<v;f++){var y=C[f];p.push(t.get(y))}this._sort(p,e);for(var m=0,b=p.length;m<b;m++)I.push(p[m][this._idProp])}else for(var w=0,k=C.length;w<k;w++){var x=C[w],E=t.get(x);null!=E&&I.push(E[this._idProp])}return I}},{key:"getDataSet",value:function(){return this}},{key:"forEach",value:function(g,t){var A=t&&pc(t),e=this._data,C=ch($O(e).call(e));if(t&&t.order)for(var I=this.get(t),i=0,o=I.length;i<o;i++){var n=I[i];g(n,n[this._idProp])}else for(var r=0,s=C.length;r<s;r++){var a=C[r],d=this._data.get(a);null==d||A&&!A(d)||g(d,a)}}},{key:"map",value:function(g,t){for(var A=t&&pc(t),e=[],C=this._data,I=ch($O(C).call(C)),i=0,o=I.length;i<o;i++){var n=I[i],r=this._data.get(n);null==r||A&&!A(r)||e.push(g(r,n))}return t&&t.order&&this._sort(e,t.order),e}},{key:"_filterFields",value:function(g,t){var A;return g?LE(A=Rh(t)?t:Lh(t)).call(A,(function(t,A){return t[A]=g[A],t}),{}):g}},{key:"_sort",value:function(g,t){if("string"==typeof t){var A=t;WO(g).call(g,(function(g,t){var e=g[A],C=t[A];return e>C?1:e<C?-1:0}))}else{if("function"!=typeof t)throw new TypeError("Order must be a function or a string");WO(g).call(g,t)}}},{key:"remove",value:function(g,t){for(var A=[],e=[],C=Rh(g)?g:[g],I=0,i=C.length;I<i;I++){var o=this._remove(C[I]);if(o){var n=o[this._idProp];null!=n&&(A.push(n),e.push(o))}}return A.length&&this._trigger("remove",{items:A,oldData:e},t),A}},{key:"_remove",value:function(g){var t;if(pD(g)?t=g:g&&"object"===yd(g)&&(t=g[this._idProp]),null!=t&&this._data.has(t)){var A=this._data.get(t)||null;return this._data.delete(t),--this.length,A}return null}},{key:"clear",value:function(g){for(var t,A=ch($O(t=this._data).call(t)),e=[],C=0,I=A.length;C<I;C++)e.push(this._data.get(A[C]));return this._data.clear(),this.length=0,this._trigger("remove",{items:A,oldData:e},g),A}},{key:"max",value:function(g){var t,A,e=null,C=null,I=hD(nT(t=this._data).call(t));try{for(I.s();!(A=I.n()).done;){var i=A.value,o=i[g];"number"==typeof o&&(null==C||o>C)&&(e=i,C=o)}}catch(g){I.e(g)}finally{I.f()}return e||null}},{key:"min",value:function(g){var t,A,e=null,C=null,I=hD(nT(t=this._data).call(t));try{for(I.s();!(A=I.n()).done;){var i=A.value,o=i[g];"number"==typeof o&&(null==C||o<C)&&(e=i,C=o)}}catch(g){I.e(g)}finally{I.f()}return e||null}},{key:"distinct",value:function(g){for(var t=this._data,A=ch($O(t).call(t)),e=[],C=0,I=0,i=A.length;I<i;I++){for(var o=A[I],n=t.get(o)[g],r=!1,s=0;s<C;s++)if(e[s]==n){r=!0;break}r||void 0===n||(e[C]=n,C++)}return e}},{key:"_addItem",value:function(g){var t=function(g,t){return null==g[t]&&(g[t]=rD()),g}(g,this._idProp),A=t[this._idProp];if(this._data.has(A))throw new Error("Cannot add item: item with id "+A+" already exists");return this._data.set(A,t),++this.length,A}},{key:"_updateItem",value:function(g){var t=g[this._idProp];if(null==t)throw new Error("Cannot update item: item has no id (item: "+eu(g)+")");var A=this._data.get(t);if(!A)throw new Error("Cannot update item: no item with id "+t+" found");return this._data.set(t,aD(aD({},A),g)),t}},{key:"stream",value:function(g){if(g){var t=this._data;return new yD(rb({},IO,TE.mark((function A(){var e,C,I,i;return TE.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:e=hD(g),A.prev=1,e.s();case 3:if((C=e.n()).done){A.next=11;break}if(I=C.value,null==(i=t.get(I))){A.next=9;break}return A.next=9,[I,i];case 9:A.next=3;break;case 11:A.next=16;break;case 13:A.prev=13,A.t0=A.catch(1),e.e(A.t0);case 16:return A.prev=16,e.f(),A.finish(16);case 19:case"end":return A.stop()}}),A,null,[[1,13,16,19]])}))))}var A;return new yD(rb({},IO,je(A=pT(this._data)).call(A,this._data)))}}]),A}(vD),bD=function(g){Cb(A,g);var t=dD(A);function A(g,e){var C,I;return cn(this,A),rb(Jm(I=t.call(this)),"length",0),rb(Jm(I),"_listener",void 0),rb(Jm(I),"_data",void 0),rb(Jm(I),"_ids",new CO),rb(Jm(I),"_options",void 0),I._options=e||{},I._listener=je(C=I._onEvent).call(C,Jm(I)),I.setData(g),I}return kd(A,[{key:"idProp",get:function(){return this.getDataSet().idProp}},{key:"setData",value:function(g){if(this._data){this._data.off&&this._data.off("*",this._listener);var t=this._data.getIds({filter:pc(this._options)}),A=this._data.get(t);this._ids.clear(),this.length=0,this._trigger("remove",{items:t,oldData:A})}if(null!=g){this._data=g;for(var e=this._data.getIds({filter:pc(this._options)}),C=0,I=e.length;C<I;C++){var i=e[C];this._ids.add(i)}this.length=e.length,this._trigger("add",{items:e})}else this._data=new mD;this._data.on&&this._data.on("*",this._listener)}},{key:"refresh",value:function(){for(var g=this._data.getIds({filter:pc(this._options)}),t=ch(this._ids),A={},e=[],C=[],I=[],i=0,o=g.length;i<o;i++){var n=g[i];A[n]=!0,this._ids.has(n)||(e.push(n),this._ids.add(n))}for(var r=0,s=t.length;r<s;r++){var a=t[r],d=this._data.get(a);null==d?console.error("If you see this, report it please."):A[a]||(C.push(a),I.push(d),this._ids.delete(a))}this.length+=e.length-C.length,e.length&&this._trigger("add",{items:e}),C.length&&this._trigger("remove",{items:C,oldData:I})}},{key:"get",value:function(g,t){if(null==this._data)return null;var A,e=null;pD(g)||Rh(g)?(e=g,A=t):A=g;var C=fe({},this._options,A),I=pc(this._options),i=A&&pc(A);return I&&i&&(C.filter=function(g){return I(g)&&i(g)}),null==e?this._data.get(C):this._data.get(e,C)}},{key:"getIds",value:function(g){if(this._data.length){var t,A=pc(this._options),e=null!=g?pc(g):null;return t=e?A?function(g){return A(g)&&e(g)}:e:A,this._data.getIds({filter:t,order:g&&g.order})}return[]}},{key:"forEach",value:function(g,t){if(this._data){var A,e,C=pc(this._options),I=t&&pc(t);e=I?C?function(g){return C(g)&&I(g)}:I:C,Cl(A=this._data).call(A,g,{filter:e,order:t&&t.order})}}},{key:"map",value:function(g,t){if(this._data){var A,e,C=pc(this._options),I=t&&pc(t);return e=I?C?function(g){return C(g)&&I(g)}:I:C,Fh(A=this._data).call(A,g,{filter:e,order:t&&t.order})}return[]}},{key:"getDataSet",value:function(){return this._data.getDataSet()}},{key:"stream",value:function(g){var t;return this._data.stream(g||rb({},IO,je(t=$O(this._ids)).call(t,this._ids)))}},{key:"dispose",value:function(){var g;null!==(g=this._data)&&void 0!==g&&g.off&&this._data.off("*",this._listener);var t,e="This data view has already been disposed of.",C={get:function(){throw new Error(e)},set:function(){throw new Error(e)},configurable:!1},I=hD(Nh(A.prototype));try{for(I.s();!(t=I.n()).done;){var i=t.value;fT(this,i,C)}}catch(g){I.e(g)}finally{I.f()}}},{key:"_onEvent",value:function(g,t,A){if(t&&t.items&&this._data){var e=t.items,C=[],I=[],i=[],o=[],n=[],r=[];switch(g){case"add":for(var s=0,a=e.length;s<a;s++){var d=e[s];this.get(d)&&(this._ids.add(d),C.push(d))}break;case"update":for(var h=0,l=e.length;h<l;h++){var c=e[h];this.get(c)?this._ids.has(c)?(I.push(c),n.push(t.data[h]),o.push(t.oldData[h])):(this._ids.add(c),C.push(c)):this._ids.has(c)&&(this._ids.delete(c),i.push(c),r.push(t.oldData[h]))}break;case"remove":for(var u=0,p=e.length;u<p;u++){var f=e[u];this._ids.has(f)&&(this._ids.delete(f),i.push(f),r.push(t.oldData[u]))}}this.length+=C.length-i.length,C.length&&this._trigger("add",{items:C},A),I.length&&this._trigger("update",{items:I,oldData:o,data:n},A),i.length&&this._trigger("remove",{items:i,oldData:r},A)}}}]),A}(vD);function wD(g,t){return"object"===yd(t)&&null!==t&&g===t.idProp&&"function"==typeof t.add&&"function"==typeof t.clear&&"function"==typeof t.distinct&&"function"==typeof Cl(t)&&"function"==typeof t.get&&"function"==typeof t.getDataSet&&"function"==typeof t.getIds&&"number"==typeof t.length&&"function"==typeof Fh(t)&&"function"==typeof t.max&&"function"==typeof t.min&&"function"==typeof t.off&&"function"==typeof t.on&&"function"==typeof t.remove&&"function"==typeof t.setOptions&&"function"==typeof t.stream&&"function"==typeof t.update&&"function"==typeof t.updateOnly}function kD(g,t){return"object"===yd(t)&&null!==t&&g===t.idProp&&"function"==typeof Cl(t)&&"function"==typeof t.get&&"function"==typeof t.getDataSet&&"function"==typeof t.getIds&&"number"==typeof t.length&&"function"==typeof Fh(t)&&"function"==typeof t.off&&"function"==typeof t.on&&"function"==typeof t.stream&&wD(g,t.getDataSet())}var xD=Object.freeze({__proto__:null,DELETE:Mf,DataSet:mD,DataStream:yD,DataView:bD,Queue:fD,createNewDataPipeFrom:function(g){return new uD(g)},isDataSetLike:wD,isDataViewLike:kD}),ED=C,OD=I,TD=sC,DD=Ec.trim,ND=fc,RD=u("".charAt),PD=ED.parseFloat,MD=ED.Symbol,BD=MD&&MD.iterator,zD=1/PD(ND+"-0")!=-1/0||BD&&!OD((function(){PD(Object(BD))}))?function(g){var t=DD(TD(g)),A=PD(t);return 0===A&&"-"===RD(t,0)?-0:A}:PD;TA({global:!0,forced:parseFloat!==zD},{parseFloat:zD});var SD=A(tg.parseFloat),ZD=TA,FD=I,GD=er.f;ZD({target:"Object",stat:!0,forced:FD((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:GD});var jD=tg.Object,LD=function(g){return jD.getOwnPropertyNames(g)},VD=A(LD);function YD(g,t){var A=["node","edge","label"],e=!0,C=lv(t,"chosen");if("boolean"==typeof C)e=C;else if("object"===yd(C)){if(-1===Xc(A).call(A,g))throw new Error("choosify: subOption '"+g+"' should be one of '"+A.join("', '")+"'");var I=lv(t,["chosen",g]);"boolean"!=typeof I&&"function"!=typeof I||(e=I)}return e}function WD(g,t,A){if(g.width<=0||g.height<=0)return!1;if(void 0!==A){var e={x:t.x-A.x,y:t.y-A.y};if(0!==A.angle){var C=-A.angle;t={x:Math.cos(C)*e.x-Math.sin(C)*e.y,y:Math.sin(C)*e.x+Math.cos(C)*e.y}}else t=e}var I=g.x+g.width,i=g.y+g.width;return g.left<t.x&&I>t.x&&g.top<t.y&&i>t.y}function QD(g){return"string"==typeof g&&""!==g}function UD(g,t,A,e){var C=e.x,I=e.y;if("function"==typeof e.distanceToBorder){var i=e.distanceToBorder(g,t),o=Math.sin(t)*i,n=Math.cos(t)*i;n===i?(C+=i,I=e.y):o===i?(C=e.x,I-=i):(C+=n,I-=o)}else e.shape.width>e.shape.height?(C=e.x+.5*e.shape.width,I=e.y-A):(C=e.x+A,I=e.y-.5*e.shape.height);return{x:C,y:I}}var _D=function(){function g(t){cn(this,g),this.measureText=t,this.current=0,this.width=0,this.height=0,this.lines=[]}return kd(g,[{key:"_add",value:function(g,t){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";void 0===this.lines[g]&&(this.lines[g]={width:0,height:0,blocks:[]});var e=t;void 0!==t&&""!==t||(e=" ");var C=this.measureText(e,A),I=fe({},nT(C));I.text=t,I.width=C.width,I.mod=A,void 0!==t&&""!==t||(I.width=0),this.lines[g].blocks.push(I),this.lines[g].width+=I.width}},{key:"curWidth",value:function(){var g=this.lines[this.current];return void 0===g?0:g.width}},{key:"append",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,g,t)}},{key:"newLine",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,g,t),this.current++}},{key:"determineLineHeights",value:function(){for(var g=0;g<this.lines.length;g++){var t=this.lines[g],A=0;if(void 0!==t.blocks)for(var e=0;e<t.blocks.length;e++){var C=t.blocks[e];A<C.height&&(A=C.height)}t.height=A}}},{key:"determineLabelSize",value:function(){for(var g=0,t=0,A=0;A<this.lines.length;A++){var e=this.lines[A];e.width>g&&(g=e.width),t+=e.height}this.width=g,this.height=t}},{key:"removeEmptyBlocks",value:function(){for(var g=[],t=0;t<this.lines.length;t++){var A=this.lines[t];if(0!==A.blocks.length&&(t!==this.lines.length-1||0!==A.width)){var e={};fe(e,A),e.blocks=[];for(var C=void 0,I=[],i=0;i<A.blocks.length;i++){var o=A.blocks[i];0!==o.width?I.push(o):void 0===C&&(C=o)}0===I.length&&void 0!==C&&I.push(C),e.blocks=I,g.push(e)}}return g}},{key:"finalize",value:function(){this.determineLineHeights(),this.determineLabelSize();var g=this.removeEmptyBlocks();return{width:this.width,height:this.height,lines:g}}}]),g}(),KD={"<b>":/<b>/,"<i>":/<i>/,"<code>":/<code>/,"</b>":/<\/b>/,"</i>":/<\/i>/,"</code>":/<\/code>/,"*":/\*/,_:/_/,"`":/`/,afterBold:/[^*]/,afterItal:/[^_]/,afterMono:/[^`]/},HD=function(){function g(t){cn(this,g),this.text=t,this.bold=!1,this.ital=!1,this.mono=!1,this.spacing=!1,this.position=0,this.buffer="",this.modStack=[],this.blocks=[]}return kd(g,[{key:"mod",value:function(){return 0===this.modStack.length?"normal":this.modStack[0]}},{key:"modName",value:function(){return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":this.bold&&this.ital?"boldital":this.bold?"bold":this.ital?"ital":void 0}},{key:"emitBlock",value:function(){this.spacing&&(this.add(" "),this.spacing=!1),this.buffer.length>0&&(this.blocks.push({text:this.buffer,mod:this.modName()}),this.buffer="")}},{key:"add",value:function(g){" "===g&&(this.spacing=!0),this.spacing&&(this.buffer+=" ",this.spacing=!1)," "!=g&&(this.buffer+=g)}},{key:"parseWS",value:function(g){return!!/[ \t]/.test(g)&&(this.mono?this.add(g):this.spacing=!0,!0)}},{key:"setTag",value:function(g){this.emitBlock(),this[g]=!0,this.modStack.unshift(g)}},{key:"unsetTag",value:function(g){this.emitBlock(),this[g]=!1,this.modStack.shift()}},{key:"parseStartTag",value:function(g,t){return!(this.mono||this[g]||!this.match(t))&&(this.setTag(g),!0)}},{key:"match",value:function(g){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],A=lh(this.prepareRegExp(g),2),e=A[0],C=A[1],I=e.test(this.text.substr(this.position,C));return I&&t&&(this.position+=C-1),I}},{key:"parseEndTag",value:function(g,t,A){var e=this.mod()===g;return!(!(e="mono"===g?e&&this.mono:e&&!this.mono)||!this.match(t))&&(void 0!==A?(this.position===this.text.length-1||this.match(A,!1))&&this.unsetTag(g):this.unsetTag(g),!0)}},{key:"replace",value:function(g,t){return!!this.match(g)&&(this.add(t),this.position+=length-1,!0)}},{key:"prepareRegExp",value:function(g){var t,A;if(g instanceof RegExp)A=g,t=1;else{var e=KD[g];A=void 0!==e?e:new RegExp(g),t=g.length}return[A,t]}}]),g}(),XD=function(){function g(t,A,e,C){var I=this;cn(this,g),this.ctx=t,this.parent=A,this.selected=e,this.hover=C;this.lines=new _D((function(g,A){if(void 0===g)return 0;var i=I.parent.getFormattingValues(t,e,C,A),o=0;""!==g&&(o=I.ctx.measureText(g).width);return{width:o,values:i}}))}return kd(g,[{key:"process",value:function(g){if(!QD(g))return this.lines.finalize();var t=this.parent.fontOptions;g=(g=g.replace(/\r\n/g,"\n")).replace(/\r/g,"\n");var A=String(g).split("\n"),e=A.length;if(t.multi)for(var C=0;C<e;C++){var I=this.splitBlocks(A[C],t.multi);if(void 0!==I)if(0!==I.length){if(t.maxWdt>0)for(var i=0;i<I.length;i++){var o=I[i].mod,n=I[i].text;this.splitStringIntoLines(n,o,!0)}else for(var r=0;r<I.length;r++){var s=I[r].mod,a=I[r].text;this.lines.append(a,s)}this.lines.newLine()}else this.lines.newLine("")}else if(t.maxWdt>0)for(var d=0;d<e;d++)this.splitStringIntoLines(A[d]);else for(var h=0;h<e;h++)this.lines.newLine(A[h]);return this.lines.finalize()}},{key:"decodeMarkupSystem",value:function(g){var t="none";return"markdown"===g||"md"===g?t="markdown":!0!==g&&"html"!==g||(t="html"),t}},{key:"splitHtmlBlocks",value:function(g){for(var t=new HD(g),A=function(g){return!!/&/.test(g)&&(t.replace(t.text,"&lt;","<")||t.replace(t.text,"&amp;","&")||t.add("&"),!0)};t.position<t.text.length;){var e=t.text.charAt(t.position);t.parseWS(e)||/</.test(e)&&(t.parseStartTag("bold","<b>")||t.parseStartTag("ital","<i>")||t.parseStartTag("mono","<code>")||t.parseEndTag("bold","</b>")||t.parseEndTag("ital","</i>")||t.parseEndTag("mono","</code>"))||A(e)||t.add(e),t.position++}return t.emitBlock(),t.blocks}},{key:"splitMarkdownBlocks",value:function(g){for(var t=this,A=new HD(g),e=!0,C=function(g){return!!/\\/.test(g)&&(A.position<t.text.length+1&&(A.position++,g=t.text.charAt(A.position),/ \t/.test(g)?A.spacing=!0:(A.add(g),e=!1)),!0)};A.position<A.text.length;){var I=A.text.charAt(A.position);A.parseWS(I)||C(I)||(e||A.spacing)&&(A.parseStartTag("bold","*")||A.parseStartTag("ital","_")||A.parseStartTag("mono","`"))||A.parseEndTag("bold","*","afterBold")||A.parseEndTag("ital","_","afterItal")||A.parseEndTag("mono","`","afterMono")||(A.add(I),e=!1),A.position++}return A.emitBlock(),A.blocks}},{key:"splitBlocks",value:function(g,t){var A=this.decodeMarkupSystem(t);return"none"===A?[{text:g,mod:"normal"}]:"markdown"===A?this.splitMarkdownBlocks(g):"html"===A?this.splitHtmlBlocks(g):void 0}},{key:"overMaxWidth",value:function(g){var t=this.ctx.measureText(g).width;return this.lines.curWidth()+t>this.parent.fontOptions.maxWdt}},{key:"getLongestFit",value:function(g){for(var t="",A=0;A<g.length;){var e=t+(""===t?"":" ")+g[A];if(this.overMaxWidth(e))break;t=e,A++}return A}},{key:"getLongestFitWord",value:function(g){for(var t=0;t<g.length&&!this.overMaxWidth(wh(g).call(g,0,t));)t++;return t}},{key:"splitStringIntoLines",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",A=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.parent.getFormattingValues(this.ctx,this.selected,this.hover,t);for(var e=(g=(g=g.replace(/^( +)/g,"$1\r")).replace(/([^\r][^ ]*)( +)/g,"$1\r$2\r")).split("\r");e.length>0;){var C=this.getLongestFit(e);if(0===C){var I=e[0],i=this.getLongestFitWord(I);this.lines.newLine(wh(I).call(I,0,i),t),e[0]=wh(I).call(I,i)}else{var o=C;" "===e[C-1]?C--:" "===e[o]&&o++;var n=wh(e).call(e,0,C).join("");C==e.length&&A?this.lines.append(n,t):this.lines.newLine(n,t),e=wh(e).call(e,o)}}}}]),g}(),JD=["bold","ital","boldital","mono"],qD=function(){function g(t,A){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];cn(this,g),this.body=t,this.pointToSelf=!1,this.baseSize=void 0,this.fontOptions={},this.setOptions(A),this.size={top:0,left:0,width:0,height:0,yLine:0},this.isEdgeLabel=e}return kd(g,[{key:"setOptions",value:function(g){if(this.elementOptions=g,this.initFontOptions(g.font),QD(g.label)?this.labelDirty=!0:g.label=void 0,void 0!==g.font&&null!==g.font)if("string"==typeof g.font)this.baseSize=this.fontOptions.size;else if("object"===yd(g.font)){var t=g.font.size;void 0!==t&&(this.baseSize=t)}}},{key:"initFontOptions",value:function(t){var A=this;tv(JD,(function(g){A.fontOptions[g]={}})),g.parseFontString(this.fontOptions,t)?this.fontOptions.vadjust=0:tv(t,(function(g,t){null!=g&&"object"!==yd(g)&&(A.fontOptions[t]=g)}))}},{key:"constrain",value:function(g){var t={constrainWidth:!1,maxWdt:-1,minWdt:-1,constrainHeight:!1,minHgt:-1,valign:"middle"},A=lv(g,"widthConstraint");if("number"==typeof A)t.maxWdt=Number(A),t.minWdt=Number(A);else if("object"===yd(A)){var e=lv(g,["widthConstraint","maximum"]);"number"==typeof e&&(t.maxWdt=Number(e));var C=lv(g,["widthConstraint","minimum"]);"number"==typeof C&&(t.minWdt=Number(C))}var I=lv(g,"heightConstraint");if("number"==typeof I)t.minHgt=Number(I);else if("object"===yd(I)){var i=lv(g,["heightConstraint","minimum"]);"number"==typeof i&&(t.minHgt=Number(i));var o=lv(g,["heightConstraint","valign"]);"string"==typeof o&&("top"!==o&&"bottom"!==o||(t.valign=o))}return t}},{key:"update",value:function(g,t){this.setOptions(g,!0),this.propagateFonts(t),qf(this.fontOptions,this.constrain(t)),this.fontOptions.chooser=YD("label",t)}},{key:"adjustSizes",value:function(g){var t=g?g.right+g.left:0;this.fontOptions.constrainWidth&&(this.fontOptions.maxWdt-=t,this.fontOptions.minWdt-=t);var A=g?g.top+g.bottom:0;this.fontOptions.constrainHeight&&(this.fontOptions.minHgt-=A)}},{key:"addFontOptionsToPile",value:function(g,t){for(var A=0;A<t.length;++A)this.addFontToPile(g,t[A])}},{key:"addFontToPile",value:function(g,t){if(void 0!==t&&void 0!==t.font&&null!==t.font){var A=t.font;g.push(A)}}},{key:"getBasicOptions",value:function(t){for(var A={},e=0;e<t.length;++e){var C=t[e],I={};g.parseFontString(I,C)&&(C=I),tv(C,(function(g,t){void 0!==g&&(Object.prototype.hasOwnProperty.call(A,t)||(-1!==Xc(JD).call(JD,t)?A[t]={}:A[t]=g))}))}return A}},{key:"getFontOption",value:function(t,A,e){for(var C,I=0;I<t.length;++I){var i=t[I];if(Object.prototype.hasOwnProperty.call(i,A)){if(null==(C=i[A]))continue;var o={};if(g.parseFontString(o,C)&&(C=o),Object.prototype.hasOwnProperty.call(C,e))return C[e]}}if(Object.prototype.hasOwnProperty.call(this.fontOptions,e))return this.fontOptions[e];throw new Error("Did not find value for multi-font for property: '"+e+"'")}},{key:"getFontOptions",value:function(g,t){for(var A={},e=["color","size","face","mod","vadjust"],C=0;C<e.length;++C){var I=e[C];A[I]=this.getFontOption(g,t,I)}return A}},{key:"propagateFonts",value:function(g){var t=this,A=[];this.addFontOptionsToPile(A,g),this.fontOptions=this.getBasicOptions(A);for(var e=function(){var g=JD[C],e=t.fontOptions[g];tv(t.getFontOptions(A,g),(function(g,t){e[t]=g})),e.size=Number(e.size),e.vadjust=Number(e.vadjust)},C=0;C<JD.length;++C)e()}},{key:"draw",value:function(g,t,A,e,C){var I=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";if(void 0!==this.elementOptions.label){var i=this.fontOptions.size*this.body.view.scale;this.elementOptions.label&&i<this.elementOptions.scaling.label.drawThreshold-1||(i>=this.elementOptions.scaling.label.maxVisible&&(i=Number(this.elementOptions.scaling.label.maxVisible)/this.body.view.scale),this.calculateLabelSize(g,e,C,t,A,I),this._drawBackground(g),this._drawText(g,t,this.size.yLine,I,i))}}},{key:"_drawBackground",value:function(g){if(void 0!==this.fontOptions.background&&"none"!==this.fontOptions.background){g.fillStyle=this.fontOptions.background;var t=this.getSize();g.fillRect(t.left,t.top,t.width,t.height)}}},{key:"_drawText",value:function(g,t,A){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"middle",C=arguments.length>4?arguments[4]:void 0,I=lh(this._setAlignment(g,t,A,e),2);t=I[0],A=I[1],g.textAlign="left",t-=this.size.width/2,this.fontOptions.valign&&this.size.height>this.size.labelHeight&&("top"===this.fontOptions.valign&&(A-=(this.size.height-this.size.labelHeight)/2),"bottom"===this.fontOptions.valign&&(A+=(this.size.height-this.size.labelHeight)/2));for(var i=0;i<this.lineCount;i++){var o=this.lines[i];if(o&&o.blocks){var n=0;this.isEdgeLabel||"center"===this.fontOptions.align?n+=(this.size.width-o.width)/2:"right"===this.fontOptions.align&&(n+=this.size.width-o.width);for(var r=0;r<o.blocks.length;r++){var s=o.blocks[r];g.font=s.font;var a=lh(this._getColor(s.color,C,s.strokeColor),2),d=a[0],h=a[1];s.strokeWidth>0&&(g.lineWidth=s.strokeWidth,g.strokeStyle=h,g.lineJoin="round"),g.fillStyle=d,s.strokeWidth>0&&g.strokeText(s.text,t+n,A+s.vadjust),g.fillText(s.text,t+n,A+s.vadjust),n+=s.width}A+=o.height}}}},{key:"_setAlignment",value:function(g,t,A,e){if(this.isEdgeLabel&&"horizontal"!==this.fontOptions.align&&!1===this.pointToSelf){t=0,A=0;"top"===this.fontOptions.align?(g.textBaseline="alphabetic",A-=4):"bottom"===this.fontOptions.align?(g.textBaseline="hanging",A+=4):g.textBaseline="middle"}else g.textBaseline=e;return[t,A]}},{key:"_getColor",value:function(g,t,A){var e=g||"#000000",C=A||"#ffffff";if(t<=this.elementOptions.scaling.label.drawThreshold){var I=Math.max(0,Math.min(1,1-(this.elementOptions.scaling.label.drawThreshold-t)));e=ev(e,I),C=ev(C,I)}return[e,C]}},{key:"getTextSize",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],A=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._processLabel(g,t,A),{width:this.size.width,height:this.size.height,lineCount:this.lineCount}}},{key:"getSize",value:function(){var g=this.size.left,t=this.size.top-1;if(this.isEdgeLabel){var A=.5*-this.size.width;switch(this.fontOptions.align){case"middle":g=A,t=.5*-this.size.height;break;case"top":g=A,t=-(this.size.height+2);break;case"bottom":g=A,t=2}}return{left:g,top:t,width:this.size.width,height:this.size.height}}},{key:"calculateLabelSize",value:function(g,t,A){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,C=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,I=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";this._processLabel(g,t,A),this.size.left=e-.5*this.size.width,this.size.top=C-.5*this.size.height,this.size.yLine=C+.5*(1-this.lineCount)*this.fontOptions.size,"hanging"===I&&(this.size.top+=.5*this.fontOptions.size,this.size.top+=4,this.size.yLine+=4)}},{key:"getFormattingValues",value:function(g,t,A,e){var C=function(g,t,A){return"normal"===t?"mod"===A?"":g[A]:void 0!==g[t][A]?g[t][A]:g[A]},I={color:C(this.fontOptions,e,"color"),size:C(this.fontOptions,e,"size"),face:C(this.fontOptions,e,"face"),mod:C(this.fontOptions,e,"mod"),vadjust:C(this.fontOptions,e,"vadjust"),strokeWidth:this.fontOptions.strokeWidth,strokeColor:this.fontOptions.strokeColor};(t||A)&&("normal"===e&&!0===this.fontOptions.chooser&&this.elementOptions.labelHighlightBold?I.mod="bold":"function"==typeof this.fontOptions.chooser&&this.fontOptions.chooser(I,this.elementOptions.id,t,A));var i="";return void 0!==I.mod&&""!==I.mod&&(i+=I.mod+" "),i+=I.size+"px "+I.face,g.font=i.replace(/"/g,""),I.font=g.font,I.height=I.size,I}},{key:"differentState",value:function(g,t){return g!==this.selectedState||t!==this.hoverState}},{key:"_processLabelText",value:function(g,t,A,e){return new XD(g,this,t,A).process(e)}},{key:"_processLabel",value:function(g,t,A){if(!1!==this.labelDirty||this.differentState(t,A)){var e=this._processLabelText(g,t,A,this.elementOptions.label);this.fontOptions.minWdt>0&&e.width<this.fontOptions.minWdt&&(e.width=this.fontOptions.minWdt),this.size.labelHeight=e.height,this.fontOptions.minHgt>0&&e.height<this.fontOptions.minHgt&&(e.height=this.fontOptions.minHgt),this.lines=e.lines,this.lineCount=e.lines.length,this.size.width=e.width,this.size.height=e.height,this.selectedState=t,this.hoverState=A,this.labelDirty=!1}}},{key:"visible",value:function(){return 0!==this.size.width&&0!==this.size.height&&void 0!==this.elementOptions.label&&!(this.fontOptions.size*this.body.view.scale<this.elementOptions.scaling.label.drawThreshold-1)}}],[{key:"parseFontString",value:function(g,t){if(!t||"string"!=typeof t)return!1;var A=t.split(" ");return g.size=+A[0].replace("px",""),g.face=A[1],g.color=A[2],!0}}]),g}(),$D=function(){function g(t,A,e){cn(this,g),this.body=A,this.labelModule=e,this.setOptions(t),this.top=void 0,this.left=void 0,this.height=void 0,this.width=void 0,this.radius=void 0,this.margin=void 0,this.refreshNeeded=!0,this.boundingBox={top:0,left:0,right:0,bottom:0}}return kd(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"_setMargins",value:function(g){this.margin={},this.options.margin&&("object"==yd(this.options.margin)?(this.margin.top=this.options.margin.top,this.margin.right=this.options.margin.right,this.margin.bottom=this.options.margin.bottom,this.margin.left=this.options.margin.left):(this.margin.top=this.options.margin,this.margin.right=this.options.margin,this.margin.bottom=this.options.margin,this.margin.left=this.options.margin)),g.adjustSizes(this.margin)}},{key:"_distanceToBorder",value:function(g,t){var A=this.options.borderWidth;return g&&this.resize(g),Math.min(Math.abs(this.width/2/Math.cos(t)),Math.abs(this.height/2/Math.sin(t)))+A}},{key:"enableShadow",value:function(g,t){t.shadow&&(g.shadowColor=t.shadowColor,g.shadowBlur=t.shadowSize,g.shadowOffsetX=t.shadowX,g.shadowOffsetY=t.shadowY)}},{key:"disableShadow",value:function(g,t){t.shadow&&(g.shadowColor="rgba(0,0,0,0)",g.shadowBlur=0,g.shadowOffsetX=0,g.shadowOffsetY=0)}},{key:"enableBorderDashes",value:function(g,t){if(!1!==t.borderDashes)if(void 0!==g.setLineDash){var A=t.borderDashes;!0===A&&(A=[5,15]),g.setLineDash(A)}else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,t.borderDashes=!1}},{key:"disableBorderDashes",value:function(g,t){!1!==t.borderDashes&&(void 0!==g.setLineDash?g.setLineDash([0]):(console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,t.borderDashes=!1))}},{key:"needsRefresh",value:function(g,t){return!0===this.refreshNeeded?(this.refreshNeeded=!1,!0):void 0===this.width||this.labelModule.differentState(g,t)}},{key:"initContextForDraw",value:function(g,t){var A=t.borderWidth/this.body.view.scale;g.lineWidth=Math.min(this.width,A),g.strokeStyle=t.borderColor,g.fillStyle=t.color}},{key:"performStroke",value:function(g,t){var A=t.borderWidth/this.body.view.scale;g.save(),A>0&&(this.enableBorderDashes(g,t),g.stroke(),this.disableBorderDashes(g,t)),g.restore()}},{key:"performFill",value:function(g,t){g.save(),g.fillStyle=t.color,this.enableShadow(g,t),Bu(g).call(g),this.disableShadow(g,t),g.restore(),this.performStroke(g,t)}},{key:"_addBoundingBoxMargin",value:function(g){this.boundingBox.left-=g,this.boundingBox.top-=g,this.boundingBox.bottom+=g,this.boundingBox.right+=g}},{key:"_updateBoundingBox",value:function(g,t,A,e,C){void 0!==A&&this.resize(A,e,C),this.left=g-this.width/2,this.top=t-this.height/2,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"updateBoundingBox",value:function(g,t,A,e,C){this._updateBoundingBox(g,t,A,e,C)}},{key:"getDimensionsFromLabel",value:function(g,t,A){this.textSize=this.labelModule.getTextSize(g,t,A);var e=this.textSize.width,C=this.textSize.height;return 0===e&&(e=14,C=14),{width:e,height:C}}}]),g}();function gN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var tN=function(g){Cb(A,g);var t=gN(A);function A(g,e,C){var I;return cn(this,A),(I=t.call(this,g,e,C))._setMargins(C),I}return kd(A,[{key:"resize",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(t,A)){var e=this.getDimensionsFromLabel(g,t,A);this.width=e.width+this.margin.right+this.margin.left,this.height=e.height+this.margin.top+this.margin.bottom,this.radius=this.width/2}}},{key:"draw",value:function(g,t,A,e,C,I){this.resize(g,e,C),this.left=t-this.width/2,this.top=A-this.height/2,this.initContextForDraw(g,I),Ve(g,this.left,this.top,this.width,this.height,I.borderRadius),this.performFill(g,I),this.updateBoundingBox(t,A,g,e,C),this.labelModule.draw(g,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,e,C)}},{key:"updateBoundingBox",value:function(g,t,A,e,C){this._updateBoundingBox(g,t,A,e,C);var I=this.options.shapeProperties.borderRadius;this._addBoundingBoxMargin(I)}},{key:"distanceToBorder",value:function(g,t){g&&this.resize(g);var A=this.options.borderWidth;return Math.min(Math.abs(this.width/2/Math.cos(t)),Math.abs(this.height/2/Math.sin(t)))+A}}]),A}($D);function AN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var eN=function(g){Cb(A,g);var t=AN(A);function A(g,e,C){var I;return cn(this,A),(I=t.call(this,g,e,C)).labelOffset=0,I.selected=!1,I}return kd(A,[{key:"setOptions",value:function(g,t,A){this.options=g,void 0===t&&void 0===A||this.setImages(t,A)}},{key:"setImages",value:function(g,t){t&&this.selected?(this.imageObj=t,this.imageObjAlt=g):(this.imageObj=g,this.imageObjAlt=t)}},{key:"switchImages",value:function(g){var t=g&&!this.selected||!g&&this.selected;if(this.selected=g,void 0!==this.imageObjAlt&&t){var A=this.imageObj;this.imageObj=this.imageObjAlt,this.imageObjAlt=A}}},{key:"_getImagePadding",value:function(){var g={top:0,right:0,bottom:0,left:0};if(this.options.imagePadding){var t=this.options.imagePadding;"object"==yd(t)?(g.top=t.top,g.right=t.right,g.bottom=t.bottom,g.left=t.left):(g.top=t,g.right=t,g.bottom=t,g.left=t)}return g}},{key:"_resizeImage",value:function(){var g,t;if(!1===this.options.shapeProperties.useImageSize){var A=1,e=1;this.imageObj.width&&this.imageObj.height&&(this.imageObj.width>this.imageObj.height?A=this.imageObj.width/this.imageObj.height:e=this.imageObj.height/this.imageObj.width),g=2*this.options.size*A,t=2*this.options.size*e}else{var C=this._getImagePadding();g=this.imageObj.width+C.left+C.right,t=this.imageObj.height+C.top+C.bottom}this.width=g,this.height=t,this.radius=.5*this.width}},{key:"_drawRawCircle",value:function(g,t,A,e){this.initContextForDraw(g,e),Le(g,t,A,e.size),this.performFill(g,e)}},{key:"_drawImageAtPosition",value:function(g,t){if(0!=this.imageObj.width){g.globalAlpha=void 0!==t.opacity?t.opacity:1,this.enableShadow(g,t);var A=1;!0===this.options.shapeProperties.interpolation&&(A=this.imageObj.width/this.width/this.body.view.scale);var e=this._getImagePadding(),C=this.left+e.left,I=this.top+e.top,i=this.width-e.left-e.right,o=this.height-e.top-e.bottom;this.imageObj.drawImageAtPosition(g,A,C,I,i,o),this.disableShadow(g,t)}}},{key:"_drawImageLabel",value:function(g,t,A,e,C){var I=0;if(void 0!==this.height){I=.5*this.height;var i=this.labelModule.getTextSize(g,e,C);i.lineCount>=1&&(I+=i.height/2)}var o=A+I;this.options.label&&(this.labelOffset=I),this.labelModule.draw(g,t,o,e,C,"hanging")}}]),A}($D);function CN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var IN=function(g){Cb(A,g);var t=CN(A);function A(g,e,C){var I;return cn(this,A),(I=t.call(this,g,e,C))._setMargins(C),I}return kd(A,[{key:"resize",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(t,A)){var e=this.getDimensionsFromLabel(g,t,A),C=Math.max(e.width+this.margin.right+this.margin.left,e.height+this.margin.top+this.margin.bottom);this.options.size=C/2,this.width=C,this.height=C,this.radius=this.width/2}}},{key:"draw",value:function(g,t,A,e,C,I){this.resize(g,e,C),this.left=t-this.width/2,this.top=A-this.height/2,this._drawRawCircle(g,t,A,I),this.updateBoundingBox(t,A),this.labelModule.draw(g,this.left+this.textSize.width/2+this.margin.left,A,e,C)}},{key:"updateBoundingBox",value:function(g,t){this.boundingBox.top=t-this.options.size,this.boundingBox.left=g-this.options.size,this.boundingBox.right=g+this.options.size,this.boundingBox.bottom=t+this.options.size}},{key:"distanceToBorder",value:function(g){return g&&this.resize(g),.5*this.width}}]),A}(eN);function iN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var oN=function(g){Cb(A,g);var t=iN(A);function A(g,e,C,I,i){var o;return cn(this,A),(o=t.call(this,g,e,C)).setImages(I,i),o}return kd(A,[{key:"resize",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height){var e=2*this.options.size;return this.width=e,this.height=e,void(this.radius=.5*this.width)}this.needsRefresh(t,A)&&this._resizeImage()}},{key:"draw",value:function(g,t,A,e,C,I){this.switchImages(e),this.resize();var i=t,o=A;"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=t,this.top=A,i+=this.width/2,o+=this.height/2):(this.left=t-this.width/2,this.top=A-this.height/2),this._drawRawCircle(g,i,o,I),g.save(),g.clip(),this._drawImageAtPosition(g,I),g.restore(),this._drawImageLabel(g,i,o,e,C),this.updateBoundingBox(t,A)}},{key:"updateBoundingBox",value:function(g,t){"top-left"===this.options.shapeProperties.coordinateOrigin?(this.boundingBox.top=t,this.boundingBox.left=g,this.boundingBox.right=g+2*this.options.size,this.boundingBox.bottom=t+2*this.options.size):(this.boundingBox.top=t-this.options.size,this.boundingBox.left=g-this.options.size,this.boundingBox.right=g+this.options.size,this.boundingBox.bottom=t+this.options.size),this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)}},{key:"distanceToBorder",value:function(g){return g&&this.resize(g),.5*this.width}}]),A}(eN);function nN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var rN=function(g){Cb(A,g);var t=nN(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"resize",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{size:this.options.size};if(this.needsRefresh(t,A)){var C,I;this.labelModule.getTextSize(g,t,A);var i=2*e.size;this.width=null!==(C=this.customSizeWidth)&&void 0!==C?C:i,this.height=null!==(I=this.customSizeHeight)&&void 0!==I?I:i,this.radius=.5*this.width}}},{key:"_drawShape",value:function(g,t,A,e,C,I,i,o){var n,r=this;return this.resize(g,I,i,o),this.left=e-this.width/2,this.top=C-this.height/2,this.initContextForDraw(g,o),(n=t,Object.prototype.hasOwnProperty.call(Ue,n)?Ue[n]:function(g){for(var t=arguments.length,A=new Array(t>1?t-1:0),e=1;e<t;e++)A[e-1]=arguments[e];CanvasRenderingContext2D.prototype[n].call(g,A)})(g,e,C,o.size),this.performFill(g,o),void 0!==this.options.icon&&void 0!==this.options.icon.code&&(g.font=(I?"bold ":"")+this.height/2+"px "+(this.options.icon.face||"FontAwesome"),g.fillStyle=this.options.icon.color||"black",g.textAlign="center",g.textBaseline="middle",g.fillText(this.options.icon.code,e,C)),{drawExternalLabel:function(){if(void 0!==r.options.label){r.labelModule.calculateLabelSize(g,I,i,e,C,"hanging");var t=C+.5*r.height+.5*r.labelModule.size.height;r.labelModule.draw(g,e,t,I,i,"hanging")}r.updateBoundingBox(e,C)}}}},{key:"updateBoundingBox",value:function(g,t){this.boundingBox.top=t-this.options.size,this.boundingBox.left=g-this.options.size,this.boundingBox.right=g+this.options.size,this.boundingBox.bottom=t+this.options.size,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height))}}]),A}($D);function sN(g,t){var A=Lh(g);if(BT){var e=BT(g);t&&(e=pc(e).call(e,(function(t){return WT(g,t).enumerable}))),A.push.apply(A,e)}return A}function aN(g){for(var t=1;t<arguments.length;t++){var A,e,C=null!=arguments[t]?arguments[t]:{};t%2?Cl(A=sN(Object(C),!0)).call(A,(function(t){rb(g,t,C[t])})):HT?AD(g,HT(C)):Cl(e=sN(Object(C))).call(e,(function(t){fT(g,t,WT(C,t))}))}return g}function dN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var hN=function(g){Cb(A,g);var t=dN(A);function A(g,e,C,I){var i;return cn(this,A),(i=t.call(this,g,e,C,I)).ctxRenderer=I,i}return kd(A,[{key:"draw",value:function(g,t,A,e,C,I){this.resize(g,e,C,I),this.left=t-this.width/2,this.top=A-this.height/2,g.save();var i=this.ctxRenderer({ctx:g,id:this.options.id,x:t,y:A,state:{selected:e,hover:C},style:aN({},I),label:this.options.label});if(null!=i.drawNode&&i.drawNode(),g.restore(),i.drawExternalLabel){var o=i.drawExternalLabel;i.drawExternalLabel=function(){g.save(),o(),g.restore()}}return i.nodeDimensions&&(this.customSizeWidth=i.nodeDimensions.width,this.customSizeHeight=i.nodeDimensions.height),i}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}(rN);function lN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var cN=function(g){Cb(A,g);var t=lN(A);function A(g,e,C){var I;return cn(this,A),(I=t.call(this,g,e,C))._setMargins(C),I}return kd(A,[{key:"resize",value:function(g,t,A){if(this.needsRefresh(t,A)){var e=this.getDimensionsFromLabel(g,t,A).width+this.margin.right+this.margin.left;this.width=e,this.height=e,this.radius=this.width/2}}},{key:"draw",value:function(g,t,A,e,C,I){this.resize(g,e,C),this.left=t-this.width/2,this.top=A-this.height/2,this.initContextForDraw(g,I),We(g,t-this.width/2,A-this.height/2,this.width,this.height),this.performFill(g,I),this.updateBoundingBox(t,A,g,e,C),this.labelModule.draw(g,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,e,C)}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}($D);function uN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var pN=function(g){Cb(A,g);var t=uN(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"draw",value:function(g,t,A,e,C,I){return this._drawShape(g,"diamond",4,t,A,e,C,I)}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}(rN);function fN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var vN=function(g){Cb(A,g);var t=fN(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"draw",value:function(g,t,A,e,C,I){return this._drawShape(g,"circle",2,t,A,e,C,I)}},{key:"distanceToBorder",value:function(g){return g&&this.resize(g),this.options.size}}]),A}(rN);function yN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var mN=function(g){Cb(A,g);var t=yN(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"resize",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(t,A)){var e=this.getDimensionsFromLabel(g,t,A);this.height=2*e.height,this.width=e.width+e.height,this.radius=.5*this.width}}},{key:"draw",value:function(g,t,A,e,C,I){this.resize(g,e,C),this.left=t-.5*this.width,this.top=A-.5*this.height,this.initContextForDraw(g,I),Ye(g,this.left,this.top,this.width,this.height),this.performFill(g,I),this.updateBoundingBox(t,A,g,e,C),this.labelModule.draw(g,t,A,e,C)}},{key:"distanceToBorder",value:function(g,t){g&&this.resize(g);var A=.5*this.width,e=.5*this.height,C=Math.sin(t)*A,I=Math.cos(t)*e;return A*e/Math.sqrt(C*C+I*I)}}]),A}($D);function bN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var wN=function(g){Cb(A,g);var t=bN(A);function A(g,e,C){var I;return cn(this,A),(I=t.call(this,g,e,C))._setMargins(C),I}return kd(A,[{key:"resize",value:function(g,t,A){this.needsRefresh(t,A)&&(this.iconSize={width:Number(this.options.icon.size),height:Number(this.options.icon.size)},this.width=this.iconSize.width+this.margin.right+this.margin.left,this.height=this.iconSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(g,t,A,e,C,I){var i=this;return this.resize(g,e,C),this.options.icon.size=this.options.icon.size||50,this.left=t-this.width/2,this.top=A-this.height/2,this._icon(g,t,A,e,C,I),{drawExternalLabel:function(){if(void 0!==i.options.label){i.labelModule.draw(g,i.left+i.iconSize.width/2+i.margin.left,A+i.height/2+5,e)}i.updateBoundingBox(t,A)}}}},{key:"updateBoundingBox",value:function(g,t){if(this.boundingBox.top=t-.5*this.options.icon.size,this.boundingBox.left=g-.5*this.options.icon.size,this.boundingBox.right=g+.5*this.options.icon.size,this.boundingBox.bottom=t+.5*this.options.icon.size,void 0!==this.options.label&&this.labelModule.size.width>0){this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+5)}}},{key:"_icon",value:function(g,t,A,e,C,I){var i=Number(this.options.icon.size);void 0!==this.options.icon.code?(g.font=[null!=this.options.icon.weight?this.options.icon.weight:e?"bold":"",(null!=this.options.icon.weight&&e?5:0)+i+"px",this.options.icon.face].join(" "),g.fillStyle=this.options.icon.color||"black",g.textAlign="center",g.textBaseline="middle",this.enableShadow(g,I),g.fillText(this.options.icon.code,t,A),this.disableShadow(g,I)):console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}($D);function kN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var xN=function(g){Cb(A,g);var t=kN(A);function A(g,e,C,I,i){var o;return cn(this,A),(o=t.call(this,g,e,C)).setImages(I,i),o}return kd(A,[{key:"resize",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height){var e=2*this.options.size;return this.width=e,void(this.height=e)}this.needsRefresh(t,A)&&this._resizeImage()}},{key:"draw",value:function(g,t,A,e,C,I){g.save(),this.switchImages(e),this.resize();var i=t,o=A;if("top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=t,this.top=A,i+=this.width/2,o+=this.height/2):(this.left=t-this.width/2,this.top=A-this.height/2),!0===this.options.shapeProperties.useBorderWithImage){var n=this.options.borderWidth,r=this.options.borderWidthSelected||2*this.options.borderWidth,s=(e?r:n)/this.body.view.scale;g.lineWidth=Math.min(this.width,s),g.beginPath();var a=e?this.options.color.highlight.border:C?this.options.color.hover.border:this.options.color.border,d=e?this.options.color.highlight.background:C?this.options.color.hover.background:this.options.color.background;void 0!==I.opacity&&(a=ev(a,I.opacity),d=ev(d,I.opacity)),g.strokeStyle=a,g.fillStyle=d,g.rect(this.left-.5*g.lineWidth,this.top-.5*g.lineWidth,this.width+g.lineWidth,this.height+g.lineWidth),Bu(g).call(g),this.performStroke(g,I),g.closePath()}this._drawImageAtPosition(g,I),this._drawImageLabel(g,i,o,e,C),this.updateBoundingBox(t,A),g.restore()}},{key:"updateBoundingBox",value:function(g,t){this.resize(),"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=g,this.top=t):(this.left=g-this.width/2,this.top=t-this.height/2),this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset))}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}(eN);function EN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var ON=function(g){Cb(A,g);var t=EN(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"draw",value:function(g,t,A,e,C,I){return this._drawShape(g,"square",2,t,A,e,C,I)}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}(rN);function TN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var DN=function(g){Cb(A,g);var t=TN(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"draw",value:function(g,t,A,e,C,I){return this._drawShape(g,"hexagon",4,t,A,e,C,I)}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}(rN);function NN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var RN=function(g){Cb(A,g);var t=NN(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"draw",value:function(g,t,A,e,C,I){return this._drawShape(g,"star",4,t,A,e,C,I)}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}(rN);function PN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var MN=function(g){Cb(A,g);var t=PN(A);function A(g,e,C){var I;return cn(this,A),(I=t.call(this,g,e,C))._setMargins(C),I}return kd(A,[{key:"resize",value:function(g,t,A){this.needsRefresh(t,A)&&(this.textSize=this.labelModule.getTextSize(g,t,A),this.width=this.textSize.width+this.margin.right+this.margin.left,this.height=this.textSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(g,t,A,e,C,I){this.resize(g,e,C),this.left=t-this.width/2,this.top=A-this.height/2,this.enableShadow(g,I),this.labelModule.draw(g,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,e,C),this.disableShadow(g,I),this.updateBoundingBox(t,A,g,e,C)}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}($D);function BN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var zN=function(g){Cb(A,g);var t=BN(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"draw",value:function(g,t,A,e,C,I){return this._drawShape(g,"triangle",3,t,A,e,C,I)}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}(rN);function SN(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var ZN=function(g){Cb(A,g);var t=SN(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"draw",value:function(g,t,A,e,C,I){return this._drawShape(g,"triangleDown",3,t,A,e,C,I)}},{key:"distanceToBorder",value:function(g,t){return this._distanceToBorder(g,t)}}]),A}(rN);function FN(g,t){var A=Lh(g);if(BT){var e=BT(g);t&&(e=pc(e).call(e,(function(t){return WT(g,t).enumerable}))),A.push.apply(A,e)}return A}function GN(g){for(var t=1;t<arguments.length;t++){var A,e,C=null!=arguments[t]?arguments[t]:{};t%2?Cl(A=FN(Object(C),!0)).call(A,(function(t){rb(g,t,C[t])})):HT?AD(g,HT(C)):Cl(e=FN(Object(C))).call(e,(function(t){fT(g,t,WT(C,t))}))}return g}var jN=function(){function g(t,A,e,C,I,i){cn(this,g),this.options=av(I),this.globalOptions=I,this.defaultOptions=i,this.body=A,this.edges=[],this.id=void 0,this.imagelist=e,this.grouplist=C,this.x=void 0,this.y=void 0,this.baseSize=this.options.size,this.baseFontSize=this.options.font.size,this.predefinedPosition=!1,this.selected=!1,this.hover=!1,this.labelModule=new qD(this.body,this.options,!1),this.setOptions(t)}return kd(g,[{key:"attachEdge",value:function(g){var t;-1===Xc(t=this.edges).call(t,g)&&this.edges.push(g)}},{key:"detachEdge",value:function(g){var t,A,e=Xc(t=this.edges).call(t,g);-1!=e&&Zl(A=this.edges).call(A,e,1)}},{key:"setOptions",value:function(t){var A=this.options.shape;if(t){if(void 0!==t.color&&(this._localColor=t.color),void 0!==t.id&&(this.id=t.id),void 0===this.id)throw new Error("Node must have an id");g.checkMass(t,this.id),void 0!==t.x&&(null===t.x?(this.x=void 0,this.predefinedPosition=!1):(this.x=Gc(t.x),this.predefinedPosition=!0)),void 0!==t.y&&(null===t.y?(this.y=void 0,this.predefinedPosition=!1):(this.y=Gc(t.y),this.predefinedPosition=!0)),void 0!==t.size&&(this.baseSize=t.size),void 0!==t.value&&(t.value=SD(t.value)),g.parseOptions(this.options,t,!0,this.globalOptions,this.grouplist);var e=[t,this.options,this.defaultOptions];return this.chooser=YD("node",e),this._load_images(),this.updateLabelModule(t),void 0!==t.opacity&&g.checkOpacity(t.opacity)&&(this.options.opacity=t.opacity),this.updateShape(A),void 0!==t.hidden||void 0!==t.physics}}},{key:"_load_images",value:function(){if(("circularImage"===this.options.shape||"image"===this.options.shape)&&void 0===this.options.image)throw new Error("Option image must be defined for node type '"+this.options.shape+"'");if(void 0!==this.options.image){if(void 0===this.imagelist)throw new Error("Internal Error: No images provided");if("string"==typeof this.options.image)this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id);else{if(void 0===this.options.image.unselected)throw new Error("No unselected image provided");this.imageObj=this.imagelist.load(this.options.image.unselected,this.options.brokenImage,this.id),void 0!==this.options.image.selected?this.imageObjAlt=this.imagelist.load(this.options.image.selected,this.options.brokenImage,this.id):this.imageObjAlt=void 0}}}},{key:"getFormattingValues",value:function(){var g={color:this.options.color.background,opacity:this.options.opacity,borderWidth:this.options.borderWidth,borderColor:this.options.color.border,size:this.options.size,borderDashes:this.options.shapeProperties.borderDashes,borderRadius:this.options.shapeProperties.borderRadius,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y};if(this.selected||this.hover?!0===this.chooser?this.selected?(null!=this.options.borderWidthSelected?g.borderWidth=this.options.borderWidthSelected:g.borderWidth*=2,g.color=this.options.color.highlight.background,g.borderColor=this.options.color.highlight.border,g.shadow=this.options.shadow.enabled):this.hover&&(g.color=this.options.color.hover.background,g.borderColor=this.options.color.hover.border,g.shadow=this.options.shadow.enabled):"function"==typeof this.chooser&&(this.chooser(g,this.options.id,this.selected,this.hover),!1===g.shadow&&(g.shadowColor===this.options.shadow.color&&g.shadowSize===this.options.shadow.size&&g.shadowX===this.options.shadow.x&&g.shadowY===this.options.shadow.y||(g.shadow=!0))):g.shadow=this.options.shadow.enabled,void 0!==this.options.opacity){var t=this.options.opacity;g.borderColor=ev(g.borderColor,t),g.color=ev(g.color,t),g.shadowColor=ev(g.shadowColor,t)}return g}},{key:"updateLabelModule",value:function(t){void 0!==this.options.label&&null!==this.options.label||(this.options.label=""),g.updateGroupOptions(this.options,GN(GN({},t),{},{color:t&&t.color||this._localColor||void 0}),this.grouplist);var A=this.grouplist.get(this.options.group,!1),e=[t,this.options,A,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,e),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateShape",value:function(g){if(g===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj,this.imageObjAlt);else switch(this.options.shape){case"box":this.shape=new tN(this.options,this.body,this.labelModule);break;case"circle":this.shape=new IN(this.options,this.body,this.labelModule);break;case"circularImage":this.shape=new oN(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"custom":this.shape=new hN(this.options,this.body,this.labelModule,this.options.ctxRenderer);break;case"database":this.shape=new cN(this.options,this.body,this.labelModule);break;case"diamond":this.shape=new pN(this.options,this.body,this.labelModule);break;case"dot":this.shape=new vN(this.options,this.body,this.labelModule);break;case"ellipse":default:this.shape=new mN(this.options,this.body,this.labelModule);break;case"icon":this.shape=new wN(this.options,this.body,this.labelModule);break;case"image":this.shape=new xN(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"square":this.shape=new ON(this.options,this.body,this.labelModule);break;case"hexagon":this.shape=new DN(this.options,this.body,this.labelModule);break;case"star":this.shape=new RN(this.options,this.body,this.labelModule);break;case"text":this.shape=new MN(this.options,this.body,this.labelModule);break;case"triangle":this.shape=new zN(this.options,this.body,this.labelModule);break;case"triangleDown":this.shape=new ZN(this.options,this.body,this.labelModule)}this.needsRefresh()}},{key:"select",value:function(){this.selected=!0,this.needsRefresh()}},{key:"unselect",value:function(){this.selected=!1,this.needsRefresh()}},{key:"needsRefresh",value:function(){this.shape.refreshNeeded=!0}},{key:"getTitle",value:function(){return this.options.title}},{key:"distanceToBorder",value:function(g,t){return this.shape.distanceToBorder(g,t)}},{key:"isFixed",value:function(){return this.options.fixed.x&&this.options.fixed.y}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"getLabelSize",value:function(){return this.labelModule.size()}},{key:"setValueRange",value:function(g,t,A){if(void 0!==this.options.value){var e=this.options.scaling.customScalingFunction(g,t,A,this.options.value),C=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var I=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+e*I}this.options.size=this.options.scaling.min+e*C}else this.options.size=this.baseSize,this.options.font.size=this.baseFontSize;this.updateLabelModule()}},{key:"draw",value:function(g){var t=this.getFormattingValues();return this.shape.draw(g,this.x,this.y,this.selected,this.hover,t)||{}}},{key:"updateBoundingBox",value:function(g){this.shape.updateBoundingBox(this.x,this.y,g)}},{key:"resize",value:function(g){var t=this.getFormattingValues();this.shape.resize(g,this.selected,this.hover,t)}},{key:"getItemsOnPoint",value:function(g){var t=[];return this.labelModule.visible()&&WD(this.labelModule.getSize(),g)&&t.push({nodeId:this.id,labelId:0}),WD(this.shape.boundingBox,g)&&t.push({nodeId:this.id}),t}},{key:"isOverlappingWith",value:function(g){return this.shape.left<g.right&&this.shape.left+this.shape.width>g.left&&this.shape.top<g.bottom&&this.shape.top+this.shape.height>g.top}},{key:"isBoundingBoxOverlappingWith",value:function(g){return this.shape.boundingBox.left<g.right&&this.shape.boundingBox.right>g.left&&this.shape.boundingBox.top<g.bottom&&this.shape.boundingBox.bottom>g.top}}],[{key:"checkOpacity",value:function(g){return 0<=g&&g<=1}},{key:"checkCoordinateOrigin",value:function(g){return void 0===g||"center"===g||"top-left"===g}},{key:"updateGroupOptions",value:function(t,A,e){var C;if(void 0!==e){var I=t.group;if(void 0!==A&&void 0!==A.group&&I!==A.group)throw new Error("updateGroupOptions: group values in options don't match.");if("number"==typeof I||"string"==typeof I&&""!=I){var i=e.get(I);void 0!==i.opacity&&void 0===A.opacity&&(g.checkOpacity(i.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+i.opacity),i.opacity=void 0));var o=pc(C=VD(A)).call(C,(function(g){return null!=A[g]}));o.push("font"),Jf(o,t,i),t.color=Iv(t.color)}}}},{key:"parseOptions",value:function(t,A){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],C=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},I=arguments.length>4?arguments[4]:void 0;if(Jf(["color","fixed","shadow"],t,A,e),g.checkMass(A),void 0!==t.opacity&&(g.checkOpacity(t.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+t.opacity),t.opacity=void 0)),void 0!==A.opacity&&(g.checkOpacity(A.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+A.opacity),A.opacity=void 0)),A.shapeProperties&&!g.checkCoordinateOrigin(A.shapeProperties.coordinateOrigin)&&console.error("Invalid option for node coordinateOrigin, found: "+A.shapeProperties.coordinateOrigin),dv(t,A,"shadow",C),void 0!==A.color&&null!==A.color){var i=Iv(A.color);Hf(t.color,i)}else!0===e&&null===A.color&&(t.color=av(C.color));void 0!==A.fixed&&null!==A.fixed&&("boolean"==typeof A.fixed?(t.fixed.x=A.fixed,t.fixed.y=A.fixed):(void 0!==A.fixed.x&&"boolean"==typeof A.fixed.x&&(t.fixed.x=A.fixed.x),void 0!==A.fixed.y&&"boolean"==typeof A.fixed.y&&(t.fixed.y=A.fixed.y))),!0===e&&null===A.font&&(t.font=av(C.font)),g.updateGroupOptions(t,A,I),void 0!==A.scaling&&dv(t.scaling,A.scaling,"label",C.scaling)}},{key:"checkMass",value:function(g,t){if(void 0!==g.mass&&g.mass<=0){var A="";void 0!==t&&(A=" in node id: "+t),console.error("%cNegative or zero mass disallowed"+A+", setting mass to 1.",Tv),g.mass=1}}}]),g}();function LN(g,t){var A=void 0!==uh&&ln(g)||g["@@iterator"];if(!A){if(Rh(g)||(A=function(g,t){var A;if(!g)return;if("string"==typeof g)return VN(g,t);var e=wh(A=Object.prototype.toString.call(g)).call(A,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return Uo(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return VN(g,t)}(g))||t&&g&&"number"==typeof g.length){A&&(g=A);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){A=A.call(g)},n:function(){var g=A.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==A.return||A.return()}finally{if(o)throw I}}}}function VN(g,t){(null==t||t>g.length)&&(t=g.length);for(var A=0,e=new Array(t);A<t;A++)e[A]=g[A];return e}var YN=function(){function g(t,A,e,C){var I,i=this;if(cn(this,g),this.body=t,this.images=A,this.groups=e,this.layoutEngine=C,this.body.functions.createNode=je(I=this.create).call(I,this),this.nodesListeners={add:function(g,t){i.add(t.items)},update:function(g,t){i.update(t.items,t.data,t.oldData)},remove:function(g,t){i.remove(t.items)}},this.defaultOptions={borderWidth:1,borderWidthSelected:void 0,brokenImage:void 0,color:{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},opacity:void 0,fixed:{x:!1,y:!1},font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:0,strokeColor:"#ffffff",align:"center",vadjust:0,multi:!1,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"monospace",vadjust:2}},group:void 0,hidden:!1,icon:{face:"FontAwesome",code:void 0,size:50,color:"#2B7CE9"},image:void 0,imagePadding:{top:0,right:0,bottom:0,left:0},label:void 0,labelHighlightBold:!0,level:void 0,margin:{top:5,right:5,bottom:5,left:5},mass:1,physics:!0,scaling:{min:10,max:30,label:{enabled:!1,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(g,t,A,e){if(t===g)return.5;var C=1/(t-g);return Math.max(0,(e-g)*C)}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},shape:"ellipse",shapeProperties:{borderDashes:!1,borderRadius:6,interpolation:!0,useImageSize:!1,useBorderWithImage:!1,coordinateOrigin:"center"},size:25,title:void 0,value:void 0,x:void 0,y:void 0},this.defaultOptions.mass<=0)throw"Internal error: mass in defaultOptions of NodesHandler may not be zero or negative";this.options=av(this.defaultOptions),this.bindEventListeners()}return kd(g,[{key:"bindEventListeners",value:function(){var g,t,A=this;this.body.emitter.on("refreshNodes",je(g=this.refresh).call(g,this)),this.body.emitter.on("refresh",je(t=this.refresh).call(t,this)),this.body.emitter.on("destroy",(function(){tv(A.nodesListeners,(function(g,t){A.body.data.nodes&&A.body.data.nodes.off(t,g)})),delete A.body.functions.createNode,delete A.nodesListeners.add,delete A.nodesListeners.update,delete A.nodesListeners.remove,delete A.nodesListeners}))}},{key:"setOptions",value:function(g){if(void 0!==g){if(jN.parseOptions(this.options,g),void 0!==g.opacity&&(jm(g.opacity)||!Ym(g.opacity)||g.opacity<0||g.opacity>1?console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+g.opacity):this.options.opacity=g.opacity),void 0!==g.shape)for(var t in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&this.body.nodes[t].updateShape();if(void 0!==g.font||void 0!==g.widthConstraint||void 0!==g.heightConstraint)for(var A=0,e=Lh(this.body.nodes);A<e.length;A++){var C=e[A];this.body.nodes[C].updateLabelModule(),this.body.nodes[C].needsRefresh()}if(void 0!==g.size)for(var I in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,I)&&this.body.nodes[I].needsRefresh();void 0===g.hidden&&void 0===g.physics||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],A=this.body.data.nodes;if(kD("id",g))this.body.data.nodes=g;else if(Rh(g))this.body.data.nodes=new mD,this.body.data.nodes.add(g);else{if(g)throw new TypeError("Array or DataSet expected");this.body.data.nodes=new mD}if(A&&tv(this.nodesListeners,(function(g,t){A.off(t,g)})),this.body.nodes={},this.body.data.nodes){var e=this;tv(this.nodesListeners,(function(g,t){e.body.data.nodes.on(t,g)}));var C=this.body.data.nodes.getIds();this.add(C,!0)}!1===t&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(g){for(var t,A=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=[],C=0;C<g.length;C++){t=g[C];var I=this.body.data.nodes.get(t),i=this.create(I);e.push(i),this.body.nodes[t]=i}this.layoutEngine.positionInitially(e),!1===A&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(g,t,A){for(var e=this.body.nodes,C=!1,I=0;I<g.length;I++){var i=g[I],o=e[i],n=t[I];void 0!==o?o.setOptions(n)&&(C=!0):(C=!0,o=this.create(n),e[i]=o)}C||void 0===A||(C=Xm(t).call(t,(function(g,t){var e=A[t];return e&&e.level!==g.level}))),!0===C?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(g){for(var t=this.body.nodes,A=0;A<g.length;A++){delete t[g[A]]}this.body.emitter.emit("_dataChanged")}},{key:"create",value:function(g){return new(arguments.length>1&&void 0!==arguments[1]?arguments[1]:jN)(g,this.body,this.images,this.groups,this.options,this.defaultOptions)}},{key:"refresh",value:function(){var g=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];tv(this.body.nodes,(function(A,e){var C=g.body.data.nodes.get(e);void 0!==C&&(!0===t&&A.setOptions({x:null,y:null}),A.setOptions({fixed:!1}),A.setOptions(C))}))}},{key:"getPositions",value:function(g){var t={};if(void 0!==g){if(!0===Rh(g)){for(var A=0;A<g.length;A++)if(void 0!==this.body.nodes[g[A]]){var e=this.body.nodes[g[A]];t[g[A]]={x:Math.round(e.x),y:Math.round(e.y)}}}else if(void 0!==this.body.nodes[g]){var C=this.body.nodes[g];t[g]={x:Math.round(C.x),y:Math.round(C.y)}}}else for(var I=0;I<this.body.nodeIndices.length;I++){var i=this.body.nodes[this.body.nodeIndices[I]];t[this.body.nodeIndices[I]]={x:Math.round(i.x),y:Math.round(i.y)}}return t}},{key:"getPosition",value:function(g){if(null==g)throw new TypeError("No id was specified for getPosition method.");if(null==this.body.nodes[g])throw new ReferenceError("NodeId provided for getPosition does not exist. Provided: ".concat(g));return{x:Math.round(this.body.nodes[g].x),y:Math.round(this.body.nodes[g].y)}}},{key:"storePositions",value:function(){var g,t=[],A=this.body.data.nodes.getDataSet(),e=LN(A.get());try{for(e.s();!(g=e.n()).done;){var C=g.value,I=C.id,i=this.body.nodes[I],o=Math.round(i.x),n=Math.round(i.y);C.x===o&&C.y===n||t.push({id:I,x:o,y:n})}}catch(g){e.e(g)}finally{e.f()}A.update(t)}},{key:"getBoundingBox",value:function(g){if(void 0!==this.body.nodes[g])return this.body.nodes[g].shape.boundingBox}},{key:"getConnectedNodes",value:function(g,t){var A=[];if(void 0!==this.body.nodes[g])for(var e=this.body.nodes[g],C={},I=0;I<e.edges.length;I++){var i=e.edges[I];"to"!==t&&i.toId==e.id?void 0===C[i.fromId]&&(A.push(i.fromId),C[i.fromId]=!0):"from"!==t&&i.fromId==e.id&&void 0===C[i.toId]&&(A.push(i.toId),C[i.toId]=!0)}return A}},{key:"getConnectedEdges",value:function(g){var t=[];if(void 0!==this.body.nodes[g])for(var A=this.body.nodes[g],e=0;e<A.edges.length;e++)t.push(A.edges[e].id);else console.error("NodeId provided for getConnectedEdges does not exist. Provided: ",g);return t}},{key:"moveNode",value:function(g,t,A){var e=this;void 0!==this.body.nodes[g]?(this.body.nodes[g].x=Number(t),this.body.nodes[g].y=Number(A),wu((function(){e.body.emitter.emit("startSimulation")}),0)):console.error("Node id supplied to moveNode does not exist. Provided: ",g)}}]),g}(),WN=qg,QN=P,UN=gg,_N=AA,KN=function(g){return void 0!==g&&(WN(g,"value")||WN(g,"writable"))},HN=T,XN=EI;TA({target:"Reflect",stat:!0},{get:function g(t,A){var e,C,I=arguments.length<3?t:arguments[2];return _N(t)===I?t[A]:(e=HN.f(t,A))?KN(e)?e.value:void 0===e.get?void 0:QN(e.get,I):UN(C=XN(t))?g(C,A,I):void 0}});var JN=A(tg.Reflect.get),qN=A(YT);function $N(){var g;"undefined"!=typeof Reflect&&JN?$N=Ab(g=JN).call(g):$N=function(g,t,A){var e=function(g,t){for(;!Object.prototype.hasOwnProperty.call(g,t)&&null!==(g=nb(g)););return g}(g,t);if(e){var C=qN(e,t);return C.get?C.get.call(arguments.length<3?g:A):C.value}};return $N.apply(this,arguments)}var gR=TA,tR=Math.hypot,AR=Math.abs,eR=Math.sqrt;gR({target:"Math",stat:!0,arity:2,forced:!!tR&&tR(1/0,NaN)!==1/0},{hypot:function(g,t){for(var A,e,C=0,I=0,i=arguments.length,o=0;I<i;)o<(A=AR(arguments[I++]))?(C=C*(e=o/A)*e+1,o=A):C+=A>0?(e=A/o)*e:A;return o===1/0?1/0:o*eR(C)}});var CR=A(tg.Math.hypot);function IR(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var iR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"transform",value:function(g,t){Rh(g)||(g=[g]);for(var A=t.point.x,e=t.point.y,C=t.angle,I=t.length,i=0;i<g.length;++i){var o=g[i],n=o.x*Math.cos(C)-o.y*Math.sin(C),r=o.x*Math.sin(C)+o.y*Math.cos(C);o.x=A+I*n,o.y=e+I*r}}},{key:"drawPath",value:function(g,t){g.beginPath(),g.moveTo(t[0].x,t[0].y);for(var A=1;A<t.length;++A)g.lineTo(t[A].x,t[A].y);g.closePath()}}]),g}(),oR=function(g){Cb(A,g);var t=IR(A);function A(){return cn(this,A),t.apply(this,arguments)}return kd(A,null,[{key:"draw",value:function(g,t){if(t.image){g.save(),g.translate(t.point.x,t.point.y),g.rotate(Math.PI/2+t.angle);var A=null!=t.imageWidth?t.imageWidth:t.image.width,e=null!=t.imageHeight?t.imageHeight:t.image.height;t.image.drawImageAtPosition(g,1,-A/2,0,A,e),g.restore()}return!1}}]),A}(iR),nR=function(g){Cb(A,g);var t=IR(A);function A(){return cn(this,A),t.apply(this,arguments)}return kd(A,null,[{key:"draw",value:function(g,t){var A=[{x:0,y:0},{x:-1,y:.3},{x:-.9,y:0},{x:-1,y:-.3}];return iR.transform(A,t),iR.drawPath(g,A),!0}}]),A}(iR),rR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A=[{x:-1,y:0},{x:0,y:.3},{x:-.4,y:0},{x:0,y:-.3}];return iR.transform(A,t),iR.drawPath(g,A),!0}}]),g}(),sR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A={x:-.4,y:0};iR.transform(A,t),g.strokeStyle=g.fillStyle,g.fillStyle="rgba(0, 0, 0, 0)";var e=Math.PI,C=t.angle-e/2,I=t.angle+e/2;return g.beginPath(),g.arc(A.x,A.y,.4*t.length,C,I,!1),g.stroke(),!0}}]),g}(),aR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A={x:-.3,y:0};iR.transform(A,t),g.strokeStyle=g.fillStyle,g.fillStyle="rgba(0, 0, 0, 0)";var e=Math.PI,C=t.angle+e/2,I=t.angle+3*e/2;return g.beginPath(),g.arc(A.x,A.y,.4*t.length,C,I,!1),g.stroke(),!0}}]),g}(),dR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A=[{x:.02,y:0},{x:-1,y:.3},{x:-1,y:-.3}];return iR.transform(A,t),iR.drawPath(g,A),!0}}]),g}(),hR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A=[{x:0,y:.3},{x:0,y:-.3},{x:-1,y:0}];return iR.transform(A,t),iR.drawPath(g,A),!0}}]),g}(),lR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A={x:-.4,y:0};return iR.transform(A,t),Le(g,A.x,A.y,.4*t.length),!0}}]),g}(),cR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A=[{x:0,y:.5},{x:0,y:-.5},{x:-.15,y:-.5},{x:-.15,y:.5}];return iR.transform(A,t),iR.drawPath(g,A),!0}}]),g}(),uR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A=[{x:0,y:.3},{x:0,y:-.3},{x:-.6,y:-.3},{x:-.6,y:.3}];return iR.transform(A,t),iR.drawPath(g,A),!0}}]),g}(),pR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A=[{x:0,y:0},{x:-.5,y:-.3},{x:-1,y:0},{x:-.5,y:.3}];return iR.transform(A,t),iR.drawPath(g,A),!0}}]),g}(),fR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A=[{x:-1,y:.3},{x:-.5,y:0},{x:-1,y:-.3},{x:0,y:0}];return iR.transform(A,t),iR.drawPath(g,A),!0}}]),g}(),vR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"draw",value:function(g,t){var A;switch(t.type&&(A=t.type.toLowerCase()),A){case"image":return oR.draw(g,t);case"circle":return lR.draw(g,t);case"box":return uR.draw(g,t);case"crow":return rR.draw(g,t);case"curve":return sR.draw(g,t);case"diamond":return pR.draw(g,t);case"inv_curve":return aR.draw(g,t);case"triangle":return dR.draw(g,t);case"inv_triangle":return hR.draw(g,t);case"bar":return cR.draw(g,t);case"vee":return fR.draw(g,t);default:return nR.draw(g,t)}}}]),g}();function yR(g,t){var A=Lh(g);if(BT){var e=BT(g);t&&(e=pc(e).call(e,(function(t){return WT(g,t).enumerable}))),A.push.apply(A,e)}return A}function mR(g){for(var t=1;t<arguments.length;t++){var A,e,C=null!=arguments[t]?arguments[t]:{};t%2?Cl(A=yR(Object(C),!0)).call(A,(function(t){rb(g,t,C[t])})):HT?AD(g,HT(C)):Cl(e=yR(Object(C))).call(e,(function(t){fT(g,t,WT(C,t))}))}return g}var bR=function(){function g(t,A,e){cn(this,g),this._body=A,this._labelModule=e,this.color={},this.colorDirty=!0,this.hoverWidth=1.5,this.selectionWidth=2,this.setOptions(t),this.fromPoint=this.from,this.toPoint=this.to}return kd(g,[{key:"connect",value:function(){this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to]}},{key:"cleanup",value:function(){return!1}},{key:"setOptions",value:function(g){this.options=g,this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],this.id=this.options.id}},{key:"drawLine",value:function(g,t,A,e){var C=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.getViaNode();g.strokeStyle=this.getColor(g,t),g.lineWidth=t.width,!1!==t.dashes?this._drawDashedLine(g,t,C):this._drawLine(g,t,C)}},{key:"_drawLine",value:function(g,t,A,e,C){if(this.from!=this.to)this._line(g,t,A,e,C);else{var I=lh(this._getCircleData(g),3),i=I[0],o=I[1],n=I[2];this._circle(g,t,i,o,n)}}},{key:"_drawDashedLine",value:function(g,t,A,e,C){g.lineCap="round";var I=Rh(t.dashes)?t.dashes:[5,5];if(void 0!==g.setLineDash){if(g.save(),g.setLineDash(I),g.lineDashOffset=0,this.from!=this.to)this._line(g,t,A);else{var i=lh(this._getCircleData(g),3),o=i[0],n=i[1],r=i[2];this._circle(g,t,o,n,r)}g.setLineDash([0]),g.lineDashOffset=0,g.restore()}else{if(this.from!=this.to)Qe(g,this.from.x,this.from.y,this.to.x,this.to.y,I);else{var s=lh(this._getCircleData(g),3),a=s[0],d=s[1],h=s[2];this._circle(g,t,a,d,h)}this.enableShadow(g,t),g.stroke(),this.disableShadow(g,t)}}},{key:"findBorderPosition",value:function(g,t,A){return this.from!=this.to?this._findBorderPosition(g,t,A):this._findBorderPositionCircle(g,t,A)}},{key:"findBorderPositions",value:function(g){if(this.from!=this.to)return{from:this._findBorderPosition(this.from,g),to:this._findBorderPosition(this.to,g)};var t,A=lh(wh(t=this._getCircleData(g)).call(t,0,2),2),e=A[0],C=A[1];return{from:this._findBorderPositionCircle(this.from,g,{x:e,y:C,low:.25,high:.6,direction:-1}),to:this._findBorderPositionCircle(this.from,g,{x:e,y:C,low:.6,high:.8,direction:1})}}},{key:"_getCircleData",value:function(g){var t=this.options.selfReference.size;void 0!==g&&void 0===this.from.shape.width&&this.from.shape.resize(g);var A=UD(g,this.options.selfReference.angle,t,this.from);return[A.x,A.y,t]}},{key:"_pointOnCircle",value:function(g,t,A,e){var C=2*e*Math.PI;return{x:g+A*Math.cos(C),y:t-A*Math.sin(C)}}},{key:"_findBorderPositionCircle",value:function(g,t,A){var e,C=A.x,I=A.y,i=A.low,o=A.high,n=A.direction,r=this.options.selfReference.size,s=.5*(i+o),a=0;!0===this.options.arrowStrikethrough&&(-1===n?a=this.options.endPointOffset.from:1===n&&(a=this.options.endPointOffset.to));var d=0;do{s=.5*(i+o),e=this._pointOnCircle(C,I,r,s);var h=Math.atan2(g.y-e.y,g.x-e.x),l=g.distanceToBorder(t,h)+a-Math.sqrt(Math.pow(e.x-g.x,2)+Math.pow(e.y-g.y,2));if(Math.abs(l)<.05)break;l>0?n>0?i=s:o=s:n>0?o=s:i=s,++d}while(i<=o&&d<10);return mR(mR({},e),{},{t:s})}},{key:"getLineWidth",value:function(g,t){return!0===g?Math.max(this.selectionWidth,.3/this._body.view.scale):!0===t?Math.max(this.hoverWidth,.3/this._body.view.scale):Math.max(this.options.width,.3/this._body.view.scale)}},{key:"getColor",value:function(g,t){if(!1!==t.inheritsColor){if("both"===t.inheritsColor&&this.from.id!==this.to.id){var A=g.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y),e=this.from.options.color.highlight.border,C=this.to.options.color.highlight.border;return!1===this.from.selected&&!1===this.to.selected?(e=ev(this.from.options.color.border,t.opacity),C=ev(this.to.options.color.border,t.opacity)):!0===this.from.selected&&!1===this.to.selected?C=this.to.options.color.border:!1===this.from.selected&&!0===this.to.selected&&(e=this.from.options.color.border),A.addColorStop(0,e),A.addColorStop(1,C),A}return"to"===t.inheritsColor?ev(this.to.options.color.border,t.opacity):ev(this.from.options.color.border,t.opacity)}return ev(t.color,t.opacity)}},{key:"_circle",value:function(g,t,A,e,C){this.enableShadow(g,t);var I=0,i=2*Math.PI;if(!this.options.selfReference.renderBehindTheNode){var o=this.options.selfReference.angle,n=this.options.selfReference.angle+Math.PI,r=this._findBorderPositionCircle(this.from,g,{x:A,y:e,low:o,high:n,direction:-1}),s=this._findBorderPositionCircle(this.from,g,{x:A,y:e,low:o,high:n,direction:1});I=Math.atan2(r.y-e,r.x-A),i=Math.atan2(s.y-e,s.x-A)}g.beginPath(),g.arc(A,e,C,I,i,!1),g.stroke(),this.disableShadow(g,t)}},{key:"getDistanceToEdge",value:function(g,t,A,e,C,I){if(this.from!=this.to)return this._getDistanceToEdge(g,t,A,e,C,I);var i=lh(this._getCircleData(void 0),3),o=i[0],n=i[1],r=i[2],s=o-C,a=n-I;return Math.abs(Math.sqrt(s*s+a*a)-r)}},{key:"_getDistanceToLine",value:function(g,t,A,e,C,I){var i=A-g,o=e-t,n=((C-g)*i+(I-t)*o)/(i*i+o*o);n>1?n=1:n<0&&(n=0);var r=g+n*i-C,s=t+n*o-I;return Math.sqrt(r*r+s*s)}},{key:"getArrowData",value:function(g,t,A,e,C,I){var i,o,n,r,s,a,d,h=I.width;"from"===t?(n=this.from,r=this.to,s=I.fromArrowScale<0,a=Math.abs(I.fromArrowScale),d=I.fromArrowType):"to"===t?(n=this.to,r=this.from,s=I.toArrowScale<0,a=Math.abs(I.toArrowScale),d=I.toArrowType):(n=this.to,r=this.from,s=I.middleArrowScale<0,a=Math.abs(I.middleArrowScale),d=I.middleArrowType);var l=15*a+3*h;if(n!=r){var c=l/CR(n.x-r.x,n.y-r.y);if("middle"!==t)if(!0===this.options.smooth.enabled){var u=this._findBorderPosition(n,g,{via:A}),p=this.getPoint(u.t+c*("from"===t?1:-1),A);i=Math.atan2(u.y-p.y,u.x-p.x),o=u}else i=Math.atan2(n.y-r.y,n.x-r.x),o=this._findBorderPosition(n,g);else{var f=(s?-c:c)/2,v=this.getPoint(.5+f,A),y=this.getPoint(.5-f,A);i=Math.atan2(v.y-y.y,v.x-y.x),o=this.getPoint(.5,A)}}else{var m=lh(this._getCircleData(g),3),b=m[0],w=m[1],k=m[2];if("from"===t){var x=this.options.selfReference.angle,E=this.options.selfReference.angle+Math.PI,O=this._findBorderPositionCircle(this.from,g,{x:b,y:w,low:x,high:E,direction:-1});i=-2*O.t*Math.PI+1.5*Math.PI+.1*Math.PI,o=O}else if("to"===t){var T=this.options.selfReference.angle,D=this.options.selfReference.angle+Math.PI,N=this._findBorderPositionCircle(this.from,g,{x:b,y:w,low:T,high:D,direction:1});i=-2*N.t*Math.PI+1.5*Math.PI-1.1*Math.PI,o=N}else{var R=this.options.selfReference.angle/(2*Math.PI);o=this._pointOnCircle(b,w,k,R),i=-2*R*Math.PI+1.5*Math.PI+.1*Math.PI}}return{point:o,core:{x:o.x-.9*l*Math.cos(i),y:o.y-.9*l*Math.sin(i)},angle:i,length:l,type:d}}},{key:"drawArrowHead",value:function(g,t,A,e,C){g.strokeStyle=this.getColor(g,t),g.fillStyle=g.strokeStyle,g.lineWidth=t.width,vR.draw(g,C)&&(this.enableShadow(g,t),Bu(g).call(g),this.disableShadow(g,t))}},{key:"enableShadow",value:function(g,t){!0===t.shadow&&(g.shadowColor=t.shadowColor,g.shadowBlur=t.shadowSize,g.shadowOffsetX=t.shadowX,g.shadowOffsetY=t.shadowY)}},{key:"disableShadow",value:function(g,t){!0===t.shadow&&(g.shadowColor="rgba(0,0,0,0)",g.shadowBlur=0,g.shadowOffsetX=0,g.shadowOffsetY=0)}},{key:"drawBackground",value:function(g,t){if(!1!==t.background){var A={strokeStyle:g.strokeStyle,lineWidth:g.lineWidth,dashes:g.dashes};g.strokeStyle=t.backgroundColor,g.lineWidth=t.backgroundSize,this.setStrokeDashed(g,t.backgroundDashes),g.stroke(),g.strokeStyle=A.strokeStyle,g.lineWidth=A.lineWidth,g.dashes=A.dashes,this.setStrokeDashed(g,t.dashes)}}},{key:"setStrokeDashed",value:function(g,t){if(!1!==t)if(void 0!==g.setLineDash){var A=Rh(t)?t:[5,5];g.setLineDash(A)}else console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");else void 0!==g.setLineDash?g.setLineDash([]):console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.")}}]),g}();function wR(g,t){var A=Lh(g);if(BT){var e=BT(g);t&&(e=pc(e).call(e,(function(t){return WT(g,t).enumerable}))),A.push.apply(A,e)}return A}function kR(g){for(var t=1;t<arguments.length;t++){var A,e,C=null!=arguments[t]?arguments[t]:{};t%2?Cl(A=wR(Object(C),!0)).call(A,(function(t){rb(g,t,C[t])})):HT?AD(g,HT(C)):Cl(e=wR(Object(C))).call(e,(function(t){fT(g,t,WT(C,t))}))}return g}function xR(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var ER=function(g){Cb(A,g);var t=xR(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"_findBorderPositionBezier",value:function(g,t){var A,e,C=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._getViaCoordinates(),I=!1,i=1,o=0,n=this.to,r=this.options.endPointOffset?this.options.endPointOffset.to:0;g.id===this.from.id&&(n=this.from,I=!0,r=this.options.endPointOffset?this.options.endPointOffset.from:0),!1===this.options.arrowStrikethrough&&(r=0);var s=0;do{e=.5*(o+i),A=this.getPoint(e,C);var a=Math.atan2(n.y-A.y,n.x-A.x),d=n.distanceToBorder(t,a)+r-Math.sqrt(Math.pow(A.x-n.x,2)+Math.pow(A.y-n.y,2));if(Math.abs(d)<.2)break;d<0?!1===I?o=e:i=e:!1===I?i=e:o=e,++s}while(o<=i&&s<10);return kR(kR({},A),{},{t:e})}},{key:"_getDistanceToBezierEdge",value:function(g,t,A,e,C,I,i){var o,n,r,s,a,d=1e9,h=g,l=t;for(n=1;n<10;n++)r=.1*n,s=Math.pow(1-r,2)*g+2*r*(1-r)*i.x+Math.pow(r,2)*A,a=Math.pow(1-r,2)*t+2*r*(1-r)*i.y+Math.pow(r,2)*e,n>0&&(d=(o=this._getDistanceToLine(h,l,s,a,C,I))<d?o:d),h=s,l=a;return d}},{key:"_bezierCurve",value:function(g,t,A,e){g.beginPath(),g.moveTo(this.fromPoint.x,this.fromPoint.y),null!=A&&null!=A.x?null!=e&&null!=e.x?g.bezierCurveTo(A.x,A.y,e.x,e.y,this.toPoint.x,this.toPoint.y):g.quadraticCurveTo(A.x,A.y,this.toPoint.x,this.toPoint.y):g.lineTo(this.toPoint.x,this.toPoint.y),this.drawBackground(g,t),this.enableShadow(g,t),g.stroke(),this.disableShadow(g,t)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}}]),A}(bR);function OR(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var TR=function(g){Cb(A,g);var t=OR(A);function A(g,e,C){var I;return cn(this,A),(I=t.call(this,g,e,C)).via=I.via,I._boundFunction=function(){I.positionBezierNode()},I._body.emitter.on("_repositionBezierNodes",I._boundFunction),I}return kd(A,[{key:"setOptions",value:function(g){$N(nb(A.prototype),"setOptions",this).call(this,g);var t=!1;this.options.physics!==g.physics&&(t=!0),this.options=g,this.id=this.options.id,this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],this.setupSupportNode(),this.connect(),!0===t&&(this.via.setOptions({physics:this.options.physics}),this.positionBezierNode())}},{key:"connect",value:function(){this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],void 0===this.from||void 0===this.to||!1===this.options.physics||this.from.id===this.to.id?this.via.setOptions({physics:!1}):this.via.setOptions({physics:!0})}},{key:"cleanup",value:function(){return this._body.emitter.off("_repositionBezierNodes",this._boundFunction),void 0!==this.via&&(delete this._body.nodes[this.via.id],this.via=void 0,!0)}},{key:"setupSupportNode",value:function(){if(void 0===this.via){var g="edgeId:"+this.id,t=this._body.functions.createNode({id:g,shape:"circle",physics:!0,hidden:!0});this._body.nodes[g]=t,this.via=t,this.via.parentEdgeId=this.id,this.positionBezierNode()}}},{key:"positionBezierNode",value:function(){void 0!==this.via&&void 0!==this.from&&void 0!==this.to?(this.via.x=.5*(this.from.x+this.to.x),this.via.y=.5*(this.from.y+this.to.y)):void 0!==this.via&&(this.via.x=0,this.via.y=0)}},{key:"_line",value:function(g,t,A){this._bezierCurve(g,t,A)}},{key:"_getViaCoordinates",value:function(){return this.via}},{key:"getViaNode",value:function(){return this.via}},{key:"getPoint",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.via;if(this.from===this.to){var A=lh(this._getCircleData(),3),e=A[0],C=A[1],I=A[2],i=2*Math.PI*(1-g);return{x:e+I*Math.sin(i),y:C+I-I*(1-Math.cos(i))}}return{x:Math.pow(1-g,2)*this.fromPoint.x+2*g*(1-g)*t.x+Math.pow(g,2)*this.toPoint.x,y:Math.pow(1-g,2)*this.fromPoint.y+2*g*(1-g)*t.y+Math.pow(g,2)*this.toPoint.y}}},{key:"_findBorderPosition",value:function(g,t){return this._findBorderPositionBezier(g,t,this.via)}},{key:"_getDistanceToEdge",value:function(g,t,A,e,C,I){return this._getDistanceToBezierEdge(g,t,A,e,C,I,this.via)}}]),A}(ER);function DR(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var NR=function(g){Cb(A,g);var t=DR(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"_line",value:function(g,t,A){this._bezierCurve(g,t,A)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_getViaCoordinates",value:function(){var g,t,A=this.options.smooth.roundness,e=this.options.smooth.type,C=Math.abs(this.from.x-this.to.x),I=Math.abs(this.from.y-this.to.y);if("discrete"===e||"diagonalCross"===e){var i,o;i=o=C<=I?A*I:A*C,this.from.x>this.to.x&&(i=-i),this.from.y>=this.to.y&&(o=-o);var n=this.from.x+i,r=this.from.y+o;return"discrete"===e&&(C<=I?n=C<A*I?this.from.x:n:r=I<A*C?this.from.y:r),{x:n,y:r}}if("straightCross"===e){var s=(1-A)*C,a=(1-A)*I;return C<=I?(s=0,this.from.y<this.to.y&&(a=-a)):(this.from.x<this.to.x&&(s=-s),a=0),{x:this.to.x+s,y:this.to.y+a}}if("horizontal"===e){var d=(1-A)*C;return this.from.x<this.to.x&&(d=-d),{x:this.to.x+d,y:this.from.y}}if("vertical"===e){var h=(1-A)*I;return this.from.y<this.to.y&&(h=-h),{x:this.from.x,y:this.to.y+h}}if("curvedCW"===e){C=this.to.x-this.from.x,I=this.from.y-this.to.y;var l=Math.sqrt(C*C+I*I),c=Math.PI,u=(Math.atan2(I,C)+(.5*A+.5)*c)%(2*c);return{x:this.from.x+(.5*A+.5)*l*Math.sin(u),y:this.from.y+(.5*A+.5)*l*Math.cos(u)}}if("curvedCCW"===e){C=this.to.x-this.from.x,I=this.from.y-this.to.y;var p=Math.sqrt(C*C+I*I),f=Math.PI,v=(Math.atan2(I,C)+(.5*-A+.5)*f)%(2*f);return{x:this.from.x+(.5*A+.5)*p*Math.sin(v),y:this.from.y+(.5*A+.5)*p*Math.cos(v)}}g=t=C<=I?A*I:A*C,this.from.x>this.to.x&&(g=-g),this.from.y>=this.to.y&&(t=-t);var y=this.from.x+g,m=this.from.y+t;return C<=I?y=this.from.x<=this.to.x?this.to.x<y?this.to.x:y:this.to.x>y?this.to.x:y:m=this.from.y>=this.to.y?this.to.y>m?this.to.y:m:this.to.y<m?this.to.y:m,{x:y,y:m}}},{key:"_findBorderPosition",value:function(g,t){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._findBorderPositionBezier(g,t,A.via)}},{key:"_getDistanceToEdge",value:function(g,t,A,e,C,I){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates();return this._getDistanceToBezierEdge(g,t,A,e,C,I,i)}},{key:"getPoint",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),A=g;return{x:Math.pow(1-A,2)*this.fromPoint.x+2*A*(1-A)*t.x+Math.pow(A,2)*this.toPoint.x,y:Math.pow(1-A,2)*this.fromPoint.y+2*A*(1-A)*t.y+Math.pow(A,2)*this.toPoint.y}}}]),A}(ER);function RR(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var PR=function(g){Cb(A,g);var t=RR(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"_getDistanceToBezierEdge2",value:function(g,t,A,e,C,I,i,o){for(var n=1e9,r=g,s=t,a=[0,0,0,0],d=1;d<10;d++){var h=.1*d;a[0]=Math.pow(1-h,3),a[1]=3*h*Math.pow(1-h,2),a[2]=3*Math.pow(h,2)*(1-h),a[3]=Math.pow(h,3);var l=a[0]*g+a[1]*i.x+a[2]*o.x+a[3]*A,c=a[0]*t+a[1]*i.y+a[2]*o.y+a[3]*e;if(d>0){var u=this._getDistanceToLine(r,s,l,c,C,I);n=u<n?u:n}r=l,s=c}return n}}]),A}(ER);function MR(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var BR=function(g){Cb(A,g);var t=MR(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"_line",value:function(g,t,A){var e=A[0],C=A[1];this._bezierCurve(g,t,e,C)}},{key:"_getViaCoordinates",value:function(){var g,t,A,e,C=this.from.x-this.to.x,I=this.from.y-this.to.y,i=this.options.smooth.roundness;return(Math.abs(C)>Math.abs(I)||!0===this.options.smooth.forceDirection||"horizontal"===this.options.smooth.forceDirection)&&"vertical"!==this.options.smooth.forceDirection?(t=this.from.y,e=this.to.y,g=this.from.x-i*C,A=this.to.x+i*C):(t=this.from.y-i*I,e=this.to.y+i*I,g=this.from.x,A=this.to.x),[{x:g,y:t},{x:A,y:e}]}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_findBorderPosition",value:function(g,t){return this._findBorderPositionBezier(g,t)}},{key:"_getDistanceToEdge",value:function(g,t,A,e,C,I){var i=lh(arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates(),2),o=i[0],n=i[1];return this._getDistanceToBezierEdge2(g,t,A,e,C,I,o,n)}},{key:"getPoint",value:function(g){var t=lh(arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),2),A=t[0],e=t[1],C=g,I=[Math.pow(1-C,3),3*C*Math.pow(1-C,2),3*Math.pow(C,2)*(1-C),Math.pow(C,3)];return{x:I[0]*this.fromPoint.x+I[1]*A.x+I[2]*e.x+I[3]*this.toPoint.x,y:I[0]*this.fromPoint.y+I[1]*A.y+I[2]*e.y+I[3]*this.toPoint.y}}}]),A}(PR);function zR(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var SR=function(g){Cb(A,g);var t=zR(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"_line",value:function(g,t){g.beginPath(),g.moveTo(this.fromPoint.x,this.fromPoint.y),g.lineTo(this.toPoint.x,this.toPoint.y),this.enableShadow(g,t),g.stroke(),this.disableShadow(g,t)}},{key:"getViaNode",value:function(){}},{key:"getPoint",value:function(g){return{x:(1-g)*this.fromPoint.x+g*this.toPoint.x,y:(1-g)*this.fromPoint.y+g*this.toPoint.y}}},{key:"_findBorderPosition",value:function(g,t){var A=this.to,e=this.from;g.id===this.from.id&&(A=this.from,e=this.to);var C=Math.atan2(A.y-e.y,A.x-e.x),I=A.x-e.x,i=A.y-e.y,o=Math.sqrt(I*I+i*i),n=(o-g.distanceToBorder(t,C))/o;return{x:(1-n)*e.x+n*A.x,y:(1-n)*e.y+n*A.y,t:0}}},{key:"_getDistanceToEdge",value:function(g,t,A,e,C,I){return this._getDistanceToLine(g,t,A,e,C,I)}}]),A}(bR),ZR=function(){function g(t,A,e,C,I){if(cn(this,g),void 0===A)throw new Error("No body provided");this.options=av(C),this.globalOptions=C,this.defaultOptions=I,this.body=A,this.imagelist=e,this.id=void 0,this.fromId=void 0,this.toId=void 0,this.selected=!1,this.hover=!1,this.labelDirty=!0,this.baseWidth=this.options.width,this.baseFontSize=this.options.font.size,this.from=void 0,this.to=void 0,this.edgeType=void 0,this.connected=!1,this.labelModule=new qD(this.body,this.options,!0),this.setOptions(t)}return kd(g,[{key:"setOptions",value:function(t){if(t){var A=void 0!==t.physics&&this.options.physics!==t.physics||void 0!==t.hidden&&(this.options.hidden||!1)!==(t.hidden||!1)||void 0!==t.from&&this.options.from!==t.from||void 0!==t.to&&this.options.to!==t.to;g.parseOptions(this.options,t,!0,this.globalOptions),void 0!==t.id&&(this.id=t.id),void 0!==t.from&&(this.fromId=t.from),void 0!==t.to&&(this.toId=t.to),void 0!==t.title&&(this.title=t.title),void 0!==t.value&&(t.value=SD(t.value));var e=[t,this.options,this.defaultOptions];return this.chooser=YD("edge",e),this.updateLabelModule(t),A=this.updateEdgeType()||A,this._setInteractionWidths(),this.connect(),A}}},{key:"getFormattingValues",value:function(){var g=!0===this.options.arrows.to||!0===this.options.arrows.to.enabled,t=!0===this.options.arrows.from||!0===this.options.arrows.from.enabled,A=!0===this.options.arrows.middle||!0===this.options.arrows.middle.enabled,e=this.options.color.inherit,C={toArrow:g,toArrowScale:this.options.arrows.to.scaleFactor,toArrowType:this.options.arrows.to.type,toArrowSrc:this.options.arrows.to.src,toArrowImageWidth:this.options.arrows.to.imageWidth,toArrowImageHeight:this.options.arrows.to.imageHeight,middleArrow:A,middleArrowScale:this.options.arrows.middle.scaleFactor,middleArrowType:this.options.arrows.middle.type,middleArrowSrc:this.options.arrows.middle.src,middleArrowImageWidth:this.options.arrows.middle.imageWidth,middleArrowImageHeight:this.options.arrows.middle.imageHeight,fromArrow:t,fromArrowScale:this.options.arrows.from.scaleFactor,fromArrowType:this.options.arrows.from.type,fromArrowSrc:this.options.arrows.from.src,fromArrowImageWidth:this.options.arrows.from.imageWidth,fromArrowImageHeight:this.options.arrows.from.imageHeight,arrowStrikethrough:this.options.arrowStrikethrough,color:e?void 0:this.options.color.color,inheritsColor:e,opacity:this.options.color.opacity,hidden:this.options.hidden,length:this.options.length,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y,dashes:this.options.dashes,width:this.options.width,background:this.options.background.enabled,backgroundColor:this.options.background.color,backgroundSize:this.options.background.size,backgroundDashes:this.options.background.dashes};if(this.selected||this.hover)if(!0===this.chooser){if(this.selected){var I=this.options.selectionWidth;"function"==typeof I?C.width=I(C.width):"number"==typeof I&&(C.width+=I),C.width=Math.max(C.width,.3/this.body.view.scale),C.color=this.options.color.highlight,C.shadow=this.options.shadow.enabled}else if(this.hover){var i=this.options.hoverWidth;"function"==typeof i?C.width=i(C.width):"number"==typeof i&&(C.width+=i),C.width=Math.max(C.width,.3/this.body.view.scale),C.color=this.options.color.hover,C.shadow=this.options.shadow.enabled}}else"function"==typeof this.chooser&&(this.chooser(C,this.options.id,this.selected,this.hover),void 0!==C.color&&(C.inheritsColor=!1),!1===C.shadow&&(C.shadowColor===this.options.shadow.color&&C.shadowSize===this.options.shadow.size&&C.shadowX===this.options.shadow.x&&C.shadowY===this.options.shadow.y||(C.shadow=!0)));else C.shadow=this.options.shadow.enabled,C.width=Math.max(C.width,.3/this.body.view.scale);return C}},{key:"updateLabelModule",value:function(g){var t=[g,this.options,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,t),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateEdgeType",value:function(){var g=this.options.smooth,t=!1,A=!0;return void 0!==this.edgeType&&((this.edgeType instanceof TR&&!0===g.enabled&&"dynamic"===g.type||this.edgeType instanceof BR&&!0===g.enabled&&"cubicBezier"===g.type||this.edgeType instanceof NR&&!0===g.enabled&&"dynamic"!==g.type&&"cubicBezier"!==g.type||this.edgeType instanceof SR&&!1===g.type.enabled)&&(A=!1),!0===A&&(t=this.cleanup())),!0===A?!0===g.enabled?"dynamic"===g.type?(t=!0,this.edgeType=new TR(this.options,this.body,this.labelModule)):"cubicBezier"===g.type?this.edgeType=new BR(this.options,this.body,this.labelModule):this.edgeType=new NR(this.options,this.body,this.labelModule):this.edgeType=new SR(this.options,this.body,this.labelModule):this.edgeType.setOptions(this.options),t}},{key:"connect",value:function(){this.disconnect(),this.from=this.body.nodes[this.fromId]||void 0,this.to=this.body.nodes[this.toId]||void 0,this.connected=void 0!==this.from&&void 0!==this.to,!0===this.connected?(this.from.attachEdge(this),this.to.attachEdge(this)):(this.from&&this.from.detachEdge(this),this.to&&this.to.detachEdge(this)),this.edgeType.connect()}},{key:"disconnect",value:function(){this.from&&(this.from.detachEdge(this),this.from=void 0),this.to&&(this.to.detachEdge(this),this.to=void 0),this.connected=!1}},{key:"getTitle",value:function(){return this.title}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"setValueRange",value:function(g,t,A){if(void 0!==this.options.value){var e=this.options.scaling.customScalingFunction(g,t,A,this.options.value),C=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var I=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+e*I}this.options.width=this.options.scaling.min+e*C}else this.options.width=this.baseWidth,this.options.font.size=this.baseFontSize;this._setInteractionWidths(),this.updateLabelModule()}},{key:"_setInteractionWidths",value:function(){"function"==typeof this.options.hoverWidth?this.edgeType.hoverWidth=this.options.hoverWidth(this.options.width):this.edgeType.hoverWidth=this.options.hoverWidth+this.options.width,"function"==typeof this.options.selectionWidth?this.edgeType.selectionWidth=this.options.selectionWidth(this.options.width):this.edgeType.selectionWidth=this.options.selectionWidth+this.options.width}},{key:"draw",value:function(g){var t=this.getFormattingValues();if(!t.hidden){var A=this.edgeType.getViaNode();this.edgeType.drawLine(g,t,this.selected,this.hover,A),this.drawLabel(g,A)}}},{key:"drawArrows",value:function(g){var t=this.getFormattingValues();if(!t.hidden){var A=this.edgeType.getViaNode(),e={};this.edgeType.fromPoint=this.edgeType.from,this.edgeType.toPoint=this.edgeType.to,t.fromArrow&&(e.from=this.edgeType.getArrowData(g,"from",A,this.selected,this.hover,t),!1===t.arrowStrikethrough&&(this.edgeType.fromPoint=e.from.core),t.fromArrowSrc&&(e.from.image=this.imagelist.load(t.fromArrowSrc)),t.fromArrowImageWidth&&(e.from.imageWidth=t.fromArrowImageWidth),t.fromArrowImageHeight&&(e.from.imageHeight=t.fromArrowImageHeight)),t.toArrow&&(e.to=this.edgeType.getArrowData(g,"to",A,this.selected,this.hover,t),!1===t.arrowStrikethrough&&(this.edgeType.toPoint=e.to.core),t.toArrowSrc&&(e.to.image=this.imagelist.load(t.toArrowSrc)),t.toArrowImageWidth&&(e.to.imageWidth=t.toArrowImageWidth),t.toArrowImageHeight&&(e.to.imageHeight=t.toArrowImageHeight)),t.middleArrow&&(e.middle=this.edgeType.getArrowData(g,"middle",A,this.selected,this.hover,t),t.middleArrowSrc&&(e.middle.image=this.imagelist.load(t.middleArrowSrc)),t.middleArrowImageWidth&&(e.middle.imageWidth=t.middleArrowImageWidth),t.middleArrowImageHeight&&(e.middle.imageHeight=t.middleArrowImageHeight)),t.fromArrow&&this.edgeType.drawArrowHead(g,t,this.selected,this.hover,e.from),t.middleArrow&&this.edgeType.drawArrowHead(g,t,this.selected,this.hover,e.middle),t.toArrow&&this.edgeType.drawArrowHead(g,t,this.selected,this.hover,e.to)}}},{key:"drawLabel",value:function(g,t){if(void 0!==this.options.label){var A,e=this.from,C=this.to;if(this.labelModule.differentState(this.selected,this.hover)&&this.labelModule.getTextSize(g,this.selected,this.hover),e.id!=C.id){this.labelModule.pointToSelf=!1,A=this.edgeType.getPoint(.5,t),g.save();var I=this._getRotation(g);0!=I.angle&&(g.translate(I.x,I.y),g.rotate(I.angle)),this.labelModule.draw(g,A.x,A.y,this.selected,this.hover),g.restore()}else{this.labelModule.pointToSelf=!0;var i=UD(g,this.options.selfReference.angle,this.options.selfReference.size,e);A=this._pointOnCircle(i.x,i.y,this.options.selfReference.size,this.options.selfReference.angle),this.labelModule.draw(g,A.x,A.y,this.selected,this.hover)}}}},{key:"getItemsOnPoint",value:function(g){var t=[];if(this.labelModule.visible()){var A=this._getRotation();WD(this.labelModule.getSize(),g,A)&&t.push({edgeId:this.id,labelId:0})}var e={left:g.x,top:g.y};return this.isOverlappingWith(e)&&t.push({edgeId:this.id}),t}},{key:"isOverlappingWith",value:function(g){if(this.connected){var t=this.from.x,A=this.from.y,e=this.to.x,C=this.to.y,I=g.left,i=g.top;return this.edgeType.getDistanceToEdge(t,A,e,C,I,i)<10}return!1}},{key:"_getRotation",value:function(g){var t=this.edgeType.getViaNode(),A=this.edgeType.getPoint(.5,t);void 0!==g&&this.labelModule.calculateLabelSize(g,this.selected,this.hover,A.x,A.y);var e={x:A.x,y:this.labelModule.size.yLine,angle:0};if(!this.labelModule.visible())return e;if("horizontal"===this.options.font.align)return e;var C=this.from.y-this.to.y,I=this.from.x-this.to.x,i=Math.atan2(C,I);return(i<-1&&I<0||i>0&&I<0)&&(i+=Math.PI),e.angle=i,e}},{key:"_pointOnCircle",value:function(g,t,A,e){return{x:g+A*Math.cos(e),y:t-A*Math.sin(e)}}},{key:"select",value:function(){this.selected=!0}},{key:"unselect",value:function(){this.selected=!1}},{key:"cleanup",value:function(){return this.edgeType.cleanup()}},{key:"remove",value:function(){this.cleanup(),this.disconnect(),delete this.body.edges[this.id]}},{key:"endPointsValid",value:function(){return void 0!==this.body.nodes[this.fromId]&&void 0!==this.body.nodes[this.toId]}}],[{key:"parseOptions",value:function(g,t){var A=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},C=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Xf(["endPointOffset","arrowStrikethrough","id","from","hidden","hoverWidth","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","selfReference","to","title","value","width","font","chosen","widthConstraint"],g,t,A),void 0!==t.endPointOffset&&void 0!==t.endPointOffset.from&&(Ym(t.endPointOffset.from)?g.endPointOffset.from=t.endPointOffset.from:(g.endPointOffset.from=void 0!==e.endPointOffset.from?e.endPointOffset.from:0,console.error("endPointOffset.from is not a valid number"))),void 0!==t.endPointOffset&&void 0!==t.endPointOffset.to&&(Ym(t.endPointOffset.to)?g.endPointOffset.to=t.endPointOffset.to:(g.endPointOffset.to=void 0!==e.endPointOffset.to?e.endPointOffset.to:0,console.error("endPointOffset.to is not a valid number"))),QD(t.label)?g.label=t.label:QD(g.label)||(g.label=void 0),dv(g,t,"smooth",e),dv(g,t,"shadow",e),dv(g,t,"background",e),void 0!==t.dashes&&null!==t.dashes?g.dashes=t.dashes:!0===A&&null===t.dashes&&(g.dashes=$c(e.dashes)),void 0!==t.scaling&&null!==t.scaling?(void 0!==t.scaling.min&&(g.scaling.min=t.scaling.min),void 0!==t.scaling.max&&(g.scaling.max=t.scaling.max),dv(g.scaling,t.scaling,"label",e.scaling)):!0===A&&null===t.scaling&&(g.scaling=$c(e.scaling)),void 0!==t.arrows&&null!==t.arrows)if("string"==typeof t.arrows){var I=t.arrows.toLowerCase();g.arrows.to.enabled=-1!=Xc(I).call(I,"to"),g.arrows.middle.enabled=-1!=Xc(I).call(I,"middle"),g.arrows.from.enabled=-1!=Xc(I).call(I,"from")}else{if("object"!==yd(t.arrows))throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+eu(t.arrows));dv(g.arrows,t.arrows,"to",e.arrows),dv(g.arrows,t.arrows,"middle",e.arrows),dv(g.arrows,t.arrows,"from",e.arrows)}else!0===A&&null===t.arrows&&(g.arrows=$c(e.arrows));if(void 0!==t.color&&null!==t.color){var i=Uf(t.color)?{color:t.color,highlight:t.color,hover:t.color,inherit:!1,opacity:1}:t.color,o=g.color;if(C)qf(o,e.color,!1,A);else for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&delete o[n];if(Uf(o))o.color=o,o.highlight=o,o.hover=o,o.inherit=!1,void 0===i.opacity&&(o.opacity=1);else{var r=!1;void 0!==i.color&&(o.color=i.color,r=!0),void 0!==i.highlight&&(o.highlight=i.highlight,r=!0),void 0!==i.hover&&(o.hover=i.hover,r=!0),void 0!==i.inherit&&(o.inherit=i.inherit),void 0!==i.opacity&&(o.opacity=Math.min(1,Math.max(0,i.opacity))),!0===r?o.inherit=!1:void 0===o.inherit&&(o.inherit="from")}}else!0===A&&null===t.color&&(g.color=av(e.color));!0===A&&null===t.font&&(g.font=av(e.font)),Object.prototype.hasOwnProperty.call(t,"selfReferenceSize")&&(console.warn("The selfReferenceSize property has been deprecated. Please use selfReference property instead. The selfReference can be set like thise selfReference:{size:30, angle:Math.PI / 4}"),g.selfReference.size=t.selfReferenceSize)}}]),g}(),FR=function(){function g(t,A,e){var C,I=this;cn(this,g),this.body=t,this.images=A,this.groups=e,this.body.functions.createEdge=je(C=this.create).call(C,this),this.edgesListeners={add:function(g,t){I.add(t.items)},update:function(g,t){I.update(t.items)},remove:function(g,t){I.remove(t.items)}},this.options={},this.defaultOptions={arrows:{to:{enabled:!1,scaleFactor:1,type:"arrow"},middle:{enabled:!1,scaleFactor:1,type:"arrow"},from:{enabled:!1,scaleFactor:1,type:"arrow"}},endPointOffset:{from:0,to:0},arrowStrikethrough:!0,color:{color:"#848484",highlight:"#848484",hover:"#848484",inherit:"from",opacity:1},dashes:!1,font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:2,strokeColor:"#ffffff",align:"horizontal",multi:!1,vadjust:0,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"courier new",vadjust:2}},hidden:!1,hoverWidth:1.5,label:void 0,labelHighlightBold:!0,length:void 0,physics:!0,scaling:{min:1,max:15,label:{enabled:!0,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(g,t,A,e){if(t===g)return.5;var C=1/(t-g);return Math.max(0,(e-g)*C)}},selectionWidth:1.5,selfReference:{size:20,angle:Math.PI/4,renderBehindTheNode:!0},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},background:{enabled:!1,color:"rgba(111,111,111,1)",size:10,dashes:!1},smooth:{enabled:!0,type:"dynamic",forceDirection:"none",roundness:.5},title:void 0,width:1,value:void 0},qf(this.options,this.defaultOptions),this.bindEventListeners()}return kd(g,[{key:"bindEventListeners",value:function(){var g,t,A=this;this.body.emitter.on("_forceDisableDynamicCurves",(function(g){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"dynamic"===g&&(g="continuous");var e=!1;for(var C in A.body.edges)if(Object.prototype.hasOwnProperty.call(A.body.edges,C)){var I=A.body.edges[C],i=A.body.data.edges.get(C);if(null!=i){var o=i.smooth;void 0!==o&&!0===o.enabled&&"dynamic"===o.type&&(void 0===g?I.setOptions({smooth:!1}):I.setOptions({smooth:{type:g}}),e=!0)}}!0===t&&!0===e&&A.body.emitter.emit("_dataChanged")})),this.body.emitter.on("_dataUpdated",(function(){A.reconnectEdges()})),this.body.emitter.on("refreshEdges",je(g=this.refresh).call(g,this)),this.body.emitter.on("refresh",je(t=this.refresh).call(t,this)),this.body.emitter.on("destroy",(function(){tv(A.edgesListeners,(function(g,t){A.body.data.edges&&A.body.data.edges.off(t,g)})),delete A.body.functions.createEdge,delete A.edgesListeners.add,delete A.edgesListeners.update,delete A.edgesListeners.remove,delete A.edgesListeners}))}},{key:"setOptions",value:function(g){if(void 0!==g){ZR.parseOptions(this.options,g,!0,this.defaultOptions,!0);var t=!1;if(void 0!==g.smooth)for(var A in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,A)&&(t=this.body.edges[A].updateEdgeType()||t);if(void 0!==g.font)for(var e in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,e)&&this.body.edges[e].updateLabelModule();void 0===g.hidden&&void 0===g.physics&&!0!==t||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(g){var t=this,A=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=this.body.data.edges;if(kD("id",g))this.body.data.edges=g;else if(Rh(g))this.body.data.edges=new mD,this.body.data.edges.add(g);else{if(g)throw new TypeError("Array or DataSet expected");this.body.data.edges=new mD}if(e&&tv(this.edgesListeners,(function(g,t){e.off(t,g)})),this.body.edges={},this.body.data.edges){tv(this.edgesListeners,(function(g,A){t.body.data.edges.on(A,g)}));var C=this.body.data.edges.getIds();this.add(C,!0)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===A&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(g){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],A=this.body.edges,e=this.body.data.edges,C=0;C<g.length;C++){var I=g[C],i=A[I];i&&i.disconnect();var o=e.get(I,{showInternalIds:!0});A[I]=this.create(o)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===t&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(g){for(var t=this.body.edges,A=this.body.data.edges,e=!1,C=0;C<g.length;C++){var I=g[C],i=A.get(I),o=t[I];void 0!==o?(o.disconnect(),e=o.setOptions(i)||e,o.connect()):(this.body.edges[I]=this.create(i),e=!0)}!0===e?(this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),this.body.emitter.emit("_dataChanged")):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(g){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(0!==g.length){var A=this.body.edges;tv(g,(function(g){var t=A[g];void 0!==t&&t.remove()})),t&&this.body.emitter.emit("_dataChanged")}}},{key:"refresh",value:function(){var g=this;tv(this.body.edges,(function(t,A){var e=g.body.data.edges.get(A);void 0!==e&&t.setOptions(e)}))}},{key:"create",value:function(g){return new ZR(g,this.body,this.images,this.options,this.defaultOptions)}},{key:"reconnectEdges",value:function(){var g,t=this.body.nodes,A=this.body.edges;for(g in t)Object.prototype.hasOwnProperty.call(t,g)&&(t[g].edges=[]);for(g in A)if(Object.prototype.hasOwnProperty.call(A,g)){var e=A[g];e.from=null,e.to=null,e.connect()}}},{key:"getConnectedNodes",value:function(g){var t=[];if(void 0!==this.body.edges[g]){var A=this.body.edges[g];void 0!==A.fromId&&t.push(A.fromId),void 0!==A.toId&&t.push(A.toId)}return t}},{key:"_updateState",value:function(){this._addMissingEdges(),this._removeInvalidEdges()}},{key:"_removeInvalidEdges",value:function(){var g=this,t=[];tv(this.body.edges,(function(A,e){var C=g.body.nodes[A.toId],I=g.body.nodes[A.fromId];void 0!==C&&!0===C.isCluster||void 0!==I&&!0===I.isCluster||void 0!==C&&void 0!==I||t.push(e)})),this.remove(t,!1)}},{key:"_addMissingEdges",value:function(){var g=this.body.data.edges;if(null!=g){var t=this.body.edges,A=[];Cl(g).call(g,(function(g,e){void 0===t[e]&&A.push(e)})),this.add(A,!0)}}}]),g}(),GR=function(){function g(t,A,e){cn(this,g),this.body=t,this.physicsBody=A,this.barnesHutTree,this.setOptions(e),this._rng=Ff("BARNES HUT SOLVER")}return kd(g,[{key:"setOptions",value:function(g){this.options=g,this.thetaInversed=1/this.options.theta,this.overlapAvoidanceFactor=1-Math.max(0,Math.min(1,this.options.avoidOverlap))}},{key:"solve",value:function(){if(0!==this.options.gravitationalConstant&&this.physicsBody.physicsNodeIndices.length>0){var g,t=this.body.nodes,A=this.physicsBody.physicsNodeIndices,e=A.length,C=this._formBarnesHutTree(t,A);this.barnesHutTree=C;for(var I=0;I<e;I++)(g=t[A[I]]).options.mass>0&&this._getForceContributions(C.root,g)}}},{key:"_getForceContributions",value:function(g,t){this._getForceContribution(g.children.NW,t),this._getForceContribution(g.children.NE,t),this._getForceContribution(g.children.SW,t),this._getForceContribution(g.children.SE,t)}},{key:"_getForceContribution",value:function(g,t){if(g.childrenCount>0){var A=g.centerOfMass.x-t.x,e=g.centerOfMass.y-t.y,C=Math.sqrt(A*A+e*e);C*g.calcSize>this.thetaInversed?this._calculateForces(C,A,e,t,g):4===g.childrenCount?this._getForceContributions(g,t):g.children.data.id!=t.id&&this._calculateForces(C,A,e,t,g)}}},{key:"_calculateForces",value:function(g,t,A,e,C){0===g&&(t=g=.1),this.overlapAvoidanceFactor<1&&e.shape.radius&&(g=Math.max(.1+this.overlapAvoidanceFactor*e.shape.radius,g-e.shape.radius));var I=this.options.gravitationalConstant*C.mass*e.options.mass/Math.pow(g,3),i=t*I,o=A*I;this.physicsBody.forces[e.id].x+=i,this.physicsBody.forces[e.id].y+=o}},{key:"_formBarnesHutTree",value:function(g,t){for(var A,e=t.length,C=g[t[0]].x,I=g[t[0]].y,i=g[t[0]].x,o=g[t[0]].y,n=1;n<e;n++){var r=g[t[n]],s=r.x,a=r.y;r.options.mass>0&&(s<C&&(C=s),s>i&&(i=s),a<I&&(I=a),a>o&&(o=a))}var d=Math.abs(i-C)-Math.abs(o-I);d>0?(I-=.5*d,o+=.5*d):(C+=.5*d,i-=.5*d);var h=Math.max(1e-5,Math.abs(i-C)),l=.5*h,c=.5*(C+i),u=.5*(I+o),p={root:{centerOfMass:{x:0,y:0},mass:0,range:{minX:c-l,maxX:c+l,minY:u-l,maxY:u+l},size:h,calcSize:1/h,children:{data:null},maxWidth:0,level:0,childrenCount:4}};this._splitBranch(p.root);for(var f=0;f<e;f++)(A=g[t[f]]).options.mass>0&&this._placeInTree(p.root,A);return p}},{key:"_updateBranchMass",value:function(g,t){var A=g.centerOfMass,e=g.mass+t.options.mass,C=1/e;A.x=A.x*g.mass+t.x*t.options.mass,A.x*=C,A.y=A.y*g.mass+t.y*t.options.mass,A.y*=C,g.mass=e;var I=Math.max(Math.max(t.height,t.radius),t.width);g.maxWidth=g.maxWidth<I?I:g.maxWidth}},{key:"_placeInTree",value:function(g,t,A){1==A&&void 0!==A||this._updateBranchMass(g,t);var e,C=g.children.NW.range;e=C.maxX>t.x?C.maxY>t.y?"NW":"SW":C.maxY>t.y?"NE":"SE",this._placeInRegion(g,t,e)}},{key:"_placeInRegion",value:function(g,t,A){var e=g.children[A];switch(e.childrenCount){case 0:e.children.data=t,e.childrenCount=1,this._updateBranchMass(e,t);break;case 1:e.children.data.x===t.x&&e.children.data.y===t.y?(t.x+=this._rng(),t.y+=this._rng()):(this._splitBranch(e),this._placeInTree(e,t));break;case 4:this._placeInTree(e,t)}}},{key:"_splitBranch",value:function(g){var t=null;1===g.childrenCount&&(t=g.children.data,g.mass=0,g.centerOfMass.x=0,g.centerOfMass.y=0),g.childrenCount=4,g.children.data=null,this._insertRegion(g,"NW"),this._insertRegion(g,"NE"),this._insertRegion(g,"SW"),this._insertRegion(g,"SE"),null!=t&&this._placeInTree(g,t)}},{key:"_insertRegion",value:function(g,t){var A,e,C,I,i=.5*g.size;switch(t){case"NW":A=g.range.minX,e=g.range.minX+i,C=g.range.minY,I=g.range.minY+i;break;case"NE":A=g.range.minX+i,e=g.range.maxX,C=g.range.minY,I=g.range.minY+i;break;case"SW":A=g.range.minX,e=g.range.minX+i,C=g.range.minY+i,I=g.range.maxY;break;case"SE":A=g.range.minX+i,e=g.range.maxX,C=g.range.minY+i,I=g.range.maxY}g.children[t]={centerOfMass:{x:0,y:0},mass:0,range:{minX:A,maxX:e,minY:C,maxY:I},size:.5*g.size,calcSize:2*g.calcSize,children:{data:null},maxWidth:0,level:g.level+1,childrenCount:0}}},{key:"_debug",value:function(g,t){void 0!==this.barnesHutTree&&(g.lineWidth=1,this._drawBranch(this.barnesHutTree.root,g,t))}},{key:"_drawBranch",value:function(g,t,A){void 0===A&&(A="#FF0000"),4===g.childrenCount&&(this._drawBranch(g.children.NW,t),this._drawBranch(g.children.NE,t),this._drawBranch(g.children.SE,t),this._drawBranch(g.children.SW,t)),t.strokeStyle=A,t.beginPath(),t.moveTo(g.range.minX,g.range.minY),t.lineTo(g.range.maxX,g.range.minY),t.stroke(),t.beginPath(),t.moveTo(g.range.maxX,g.range.minY),t.lineTo(g.range.maxX,g.range.maxY),t.stroke(),t.beginPath(),t.moveTo(g.range.maxX,g.range.maxY),t.lineTo(g.range.minX,g.range.maxY),t.stroke(),t.beginPath(),t.moveTo(g.range.minX,g.range.maxY),t.lineTo(g.range.minX,g.range.minY),t.stroke()}}]),g}(),jR=function(){function g(t,A,e){cn(this,g),this._rng=Ff("REPULSION SOLVER"),this.body=t,this.physicsBody=A,this.setOptions(e)}return kd(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"solve",value:function(){for(var g,t,A,e,C,I,i,o,n=this.body.nodes,r=this.physicsBody.physicsNodeIndices,s=this.physicsBody.forces,a=this.options.nodeDistance,d=-2/3/a,h=0;h<r.length-1;h++){i=n[r[h]];for(var l=h+1;l<r.length;l++)g=(o=n[r[l]]).x-i.x,t=o.y-i.y,0===(A=Math.sqrt(g*g+t*t))&&(g=A=.1*this._rng()),A<2*a&&(I=A<.5*a?1:d*A+1.3333333333333333,e=g*(I/=A),C=t*I,s[i.id].x-=e,s[i.id].y-=C,s[o.id].x+=e,s[o.id].y+=C)}}}]),g}(),LR=function(){function g(t,A,e){cn(this,g),this.body=t,this.physicsBody=A,this.setOptions(e)}return kd(g,[{key:"setOptions",value:function(g){this.options=g,this.overlapAvoidanceFactor=Math.max(0,Math.min(1,this.options.avoidOverlap||0))}},{key:"solve",value:function(){for(var g=this.body.nodes,t=this.physicsBody.physicsNodeIndices,A=this.physicsBody.forces,e=this.options.nodeDistance,C=0;C<t.length-1;C++)for(var I=g[t[C]],i=C+1;i<t.length;i++){var o=g[t[i]];if(I.level===o.level){var n=e+this.overlapAvoidanceFactor*((I.shape.radius||0)/2+(o.shape.radius||0)/2),r=o.x-I.x,s=o.y-I.y,a=Math.sqrt(r*r+s*s),d=void 0;d=a<n?-Math.pow(.05*a,2)+Math.pow(.05*n,2):0,0!==a&&(d/=a);var h=r*d,l=s*d;A[I.id].x-=h,A[I.id].y-=l,A[o.id].x+=h,A[o.id].y+=l}}}}]),g}(),VR=function(){function g(t,A,e){cn(this,g),this.body=t,this.physicsBody=A,this.setOptions(e)}return kd(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"solve",value:function(){for(var g,t,A,e,C,I=this.physicsBody.physicsEdgeIndices,i=this.body.edges,o=0;o<I.length;o++)!0===(t=i[I[o]]).connected&&t.toId!==t.fromId&&void 0!==this.body.nodes[t.toId]&&void 0!==this.body.nodes[t.fromId]&&(void 0!==t.edgeType.via?(g=void 0===t.options.length?this.options.springLength:t.options.length,A=t.to,e=t.edgeType.via,C=t.from,this._calculateSpringForce(A,e,.5*g),this._calculateSpringForce(e,C,.5*g)):(g=void 0===t.options.length?1.5*this.options.springLength:t.options.length,this._calculateSpringForce(t.from,t.to,g)))}},{key:"_calculateSpringForce",value:function(g,t,A){var e=g.x-t.x,C=g.y-t.y,I=Math.max(Math.sqrt(e*e+C*C),.01),i=this.options.springConstant*(A-I)/I,o=e*i,n=C*i;void 0!==this.physicsBody.forces[g.id]&&(this.physicsBody.forces[g.id].x+=o,this.physicsBody.forces[g.id].y+=n),void 0!==this.physicsBody.forces[t.id]&&(this.physicsBody.forces[t.id].x-=o,this.physicsBody.forces[t.id].y-=n)}}]),g}(),YR=function(){function g(t,A,e){cn(this,g),this.body=t,this.physicsBody=A,this.setOptions(e)}return kd(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"solve",value:function(){for(var g,t,A,e,C,I,i,o,n,r,s=this.body.edges,a=.5,d=this.physicsBody.physicsEdgeIndices,h=this.physicsBody.physicsNodeIndices,l=this.physicsBody.forces,c=0;c<h.length;c++){var u=h[c];l[u].springFx=0,l[u].springFy=0}for(var p=0;p<d.length;p++)!0===(t=s[d[p]]).connected&&(g=void 0===t.options.length?this.options.springLength:t.options.length,A=t.from.x-t.to.x,e=t.from.y-t.to.y,o=0===(o=Math.sqrt(A*A+e*e))?.01:o,C=A*(i=this.options.springConstant*(g-o)/o),I=e*i,t.to.level!=t.from.level?(void 0!==l[t.toId]&&(l[t.toId].springFx-=C,l[t.toId].springFy-=I),void 0!==l[t.fromId]&&(l[t.fromId].springFx+=C,l[t.fromId].springFy+=I)):(void 0!==l[t.toId]&&(l[t.toId].x-=a*C,l[t.toId].y-=a*I),void 0!==l[t.fromId]&&(l[t.fromId].x+=a*C,l[t.fromId].y+=a*I)));i=1;for(var f=0;f<h.length;f++){var v=h[f];n=Math.min(i,Math.max(-i,l[v].springFx)),r=Math.min(i,Math.max(-i,l[v].springFy)),l[v].x+=n,l[v].y+=r}for(var y=0,m=0,b=0;b<h.length;b++){var w=h[b];y+=l[w].x,m+=l[w].y}for(var k=y/h.length,x=m/h.length,E=0;E<h.length;E++){var O=h[E];l[O].x-=k,l[O].y-=x}}}]),g}(),WR=function(){function g(t,A,e){cn(this,g),this.body=t,this.physicsBody=A,this.setOptions(e)}return kd(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"solve",value:function(){for(var g,t,A,e,C=this.body.nodes,I=this.physicsBody.physicsNodeIndices,i=this.physicsBody.forces,o=0;o<I.length;o++){g=-(e=C[I[o]]).x,t=-e.y,A=Math.sqrt(g*g+t*t),this._calculateForces(A,g,t,i,e)}}},{key:"_calculateForces",value:function(g,t,A,e,C){var I=0===g?0:this.options.centralGravity/g;e[C.id].x=t*I,e[C.id].y=A*I}}]),g}();function QR(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var UR=function(g){Cb(A,g);var t=QR(A);function A(g,e,C){var I;return cn(this,A),(I=t.call(this,g,e,C))._rng=Ff("FORCE ATLAS 2 BASED REPULSION SOLVER"),I}return kd(A,[{key:"_calculateForces",value:function(g,t,A,e,C){0===g&&(t=g=.1*this._rng()),this.overlapAvoidanceFactor<1&&e.shape.radius&&(g=Math.max(.1+this.overlapAvoidanceFactor*e.shape.radius,g-e.shape.radius));var I=e.edges.length+1,i=this.options.gravitationalConstant*C.mass*e.options.mass*I/Math.pow(g,2),o=t*i,n=A*i;this.physicsBody.forces[e.id].x+=o,this.physicsBody.forces[e.id].y+=n}}]),A}(GR);function _R(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var KR=function(g){Cb(A,g);var t=_R(A);function A(g,e,C){return cn(this,A),t.call(this,g,e,C)}return kd(A,[{key:"_calculateForces",value:function(g,t,A,e,C){if(g>0){var I=C.edges.length+1,i=this.options.centralGravity*I*C.options.mass;e[C.id].x=t*i,e[C.id].y=A*i}}}]),A}(WR),HR=function(){function g(t){cn(this,g),this.body=t,this.physicsBody={physicsNodeIndices:[],physicsEdgeIndices:[],forces:{},velocities:{}},this.physicsEnabled=!0,this.simulationInterval=1e3/60,this.requiresTimeout=!0,this.previousStates={},this.referenceState={},this.freezeCache={},this.renderTimer=void 0,this.adaptiveTimestep=!1,this.adaptiveTimestepEnabled=!1,this.adaptiveCounter=0,this.adaptiveInterval=3,this.stabilized=!1,this.startedStabilization=!1,this.stabilizationIterations=0,this.ready=!1,this.options={},this.defaultOptions={enabled:!0,barnesHut:{theta:.5,gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0},forceAtlas2Based:{theta:.5,gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0},repulsion:{centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09,avoidOverlap:0},hierarchicalRepulsion:{centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09},maxVelocity:50,minVelocity:.75,solver:"barnesHut",stabilization:{enabled:!0,iterations:1e3,updateInterval:50,onlyDynamicEdges:!1,fit:!0},timestep:.5,adaptiveTimestep:!0,wind:{x:0,y:0}},fe(this.options,this.defaultOptions),this.timestep=.5,this.layoutFailed=!1,this.bindEventListeners()}return kd(g,[{key:"bindEventListeners",value:function(){var g=this;this.body.emitter.on("initPhysics",(function(){g.initPhysics()})),this.body.emitter.on("_layoutFailed",(function(){g.layoutFailed=!0})),this.body.emitter.on("resetPhysics",(function(){g.stopSimulation(),g.ready=!1})),this.body.emitter.on("disablePhysics",(function(){g.physicsEnabled=!1,g.stopSimulation()})),this.body.emitter.on("restorePhysics",(function(){g.setOptions(g.options),!0===g.ready&&g.startSimulation()})),this.body.emitter.on("startSimulation",(function(){!0===g.ready&&g.startSimulation()})),this.body.emitter.on("stopSimulation",(function(){g.stopSimulation()})),this.body.emitter.on("destroy",(function(){g.stopSimulation(!1),g.body.emitter.off()})),this.body.emitter.on("_dataChanged",(function(){g.updatePhysicsData()}))}},{key:"setOptions",value:function(g){if(void 0!==g)if(!1===g)this.options.enabled=!1,this.physicsEnabled=!1,this.stopSimulation();else if(!0===g)this.options.enabled=!0,this.physicsEnabled=!0,this.startSimulation();else{this.physicsEnabled=!0,Jf(["stabilization"],this.options,g),dv(this.options,g,"stabilization"),void 0===g.enabled&&(this.options.enabled=!0),!1===this.options.enabled&&(this.physicsEnabled=!1,this.stopSimulation());var t=this.options.wind;t&&(("number"!=typeof t.x||jm(t.x))&&(t.x=0),("number"!=typeof t.y||jm(t.y))&&(t.y=0)),this.timestep=this.options.timestep}this.init()}},{key:"init",value:function(){var g;"forceAtlas2Based"===this.options.solver?(g=this.options.forceAtlas2Based,this.nodesSolver=new UR(this.body,this.physicsBody,g),this.edgesSolver=new VR(this.body,this.physicsBody,g),this.gravitySolver=new KR(this.body,this.physicsBody,g)):"repulsion"===this.options.solver?(g=this.options.repulsion,this.nodesSolver=new jR(this.body,this.physicsBody,g),this.edgesSolver=new VR(this.body,this.physicsBody,g),this.gravitySolver=new WR(this.body,this.physicsBody,g)):"hierarchicalRepulsion"===this.options.solver?(g=this.options.hierarchicalRepulsion,this.nodesSolver=new LR(this.body,this.physicsBody,g),this.edgesSolver=new YR(this.body,this.physicsBody,g),this.gravitySolver=new WR(this.body,this.physicsBody,g)):(g=this.options.barnesHut,this.nodesSolver=new GR(this.body,this.physicsBody,g),this.edgesSolver=new VR(this.body,this.physicsBody,g),this.gravitySolver=new WR(this.body,this.physicsBody,g)),this.modelOptions=g}},{key:"initPhysics",value:function(){!0===this.physicsEnabled&&!0===this.options.enabled?!0===this.options.stabilization.enabled?this.stabilize():(this.stabilized=!1,this.ready=!0,this.body.emitter.emit("fit",{},this.layoutFailed),this.startSimulation()):(this.ready=!0,this.body.emitter.emit("fit"))}},{key:"startSimulation",value:function(){var g;!0===this.physicsEnabled&&!0===this.options.enabled?(this.stabilized=!1,this.adaptiveTimestep=!1,this.body.emitter.emit("_resizeNodes"),void 0===this.viewFunction&&(this.viewFunction=je(g=this.simulationStep).call(g,this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))):this.body.emitter.emit("_redraw")}},{key:"stopSimulation",value:function(){var g=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.stabilized=!0,!0===g&&this._emitStabilized(),void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.viewFunction=void 0,!0===g&&this.body.emitter.emit("_stopRendering"))}},{key:"simulationStep",value:function(){var g=Qh();this.physicsTick(),(Qh()-g<.4*this.simulationInterval||!0===this.runDoubleSpeed)&&!1===this.stabilized&&(this.physicsTick(),this.runDoubleSpeed=!0),!0===this.stabilized&&this.stopSimulation()}},{key:"_emitStabilized",value:function(){var g=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.stabilizationIterations;(this.stabilizationIterations>1||!0===this.startedStabilization)&&wu((function(){g.body.emitter.emit("stabilized",{iterations:t}),g.startedStabilization=!1,g.stabilizationIterations=0}),0)}},{key:"physicsStep",value:function(){this.gravitySolver.solve(),this.nodesSolver.solve(),this.edgesSolver.solve(),this.moveNodes()}},{key:"adjustTimeStep",value:function(){!0===this._evaluateStepQuality()?this.timestep=1.2*this.timestep:this.timestep/1.2<this.options.timestep?this.timestep=this.options.timestep:(this.adaptiveCounter=-1,this.timestep=Math.max(this.options.timestep,this.timestep/1.2))}},{key:"physicsTick",value:function(){if(this._startStabilizing(),!0!==this.stabilized){if(!0===this.adaptiveTimestep&&!0===this.adaptiveTimestepEnabled)this.adaptiveCounter%this.adaptiveInterval==0?(this.timestep=2*this.timestep,this.physicsStep(),this.revert(),this.timestep=.5*this.timestep,this.physicsStep(),this.physicsStep(),this.adjustTimeStep()):this.physicsStep(),this.adaptiveCounter+=1;else this.timestep=this.options.timestep,this.physicsStep();!0===this.stabilized&&this.revert(),this.stabilizationIterations++}}},{key:"updatePhysicsData",value:function(){this.physicsBody.forces={},this.physicsBody.physicsNodeIndices=[],this.physicsBody.physicsEdgeIndices=[];var g=this.body.nodes,t=this.body.edges;for(var A in g)Object.prototype.hasOwnProperty.call(g,A)&&!0===g[A].options.physics&&this.physicsBody.physicsNodeIndices.push(g[A].id);for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&!0===t[e].options.physics&&this.physicsBody.physicsEdgeIndices.push(t[e].id);for(var C=0;C<this.physicsBody.physicsNodeIndices.length;C++){var I=this.physicsBody.physicsNodeIndices[C];this.physicsBody.forces[I]={x:0,y:0},void 0===this.physicsBody.velocities[I]&&(this.physicsBody.velocities[I]={x:0,y:0})}for(var i in this.physicsBody.velocities)void 0===g[i]&&delete this.physicsBody.velocities[i]}},{key:"revert",value:function(){var g=Lh(this.previousStates),t=this.body.nodes,A=this.physicsBody.velocities;this.referenceState={};for(var e=0;e<g.length;e++){var C=g[e];void 0!==t[C]?!0===t[C].options.physics&&(this.referenceState[C]={positions:{x:t[C].x,y:t[C].y}},A[C].x=this.previousStates[C].vx,A[C].y=this.previousStates[C].vy,t[C].x=this.previousStates[C].x,t[C].y=this.previousStates[C].y):delete this.previousStates[C]}}},{key:"_evaluateStepQuality",value:function(){var g,t,A=this.body.nodes,e=this.referenceState;for(var C in this.referenceState)if(Object.prototype.hasOwnProperty.call(this.referenceState,C)&&void 0!==A[C]&&(g=A[C].x-e[C].positions.x,t=A[C].y-e[C].positions.y,Math.sqrt(Math.pow(g,2)+Math.pow(t,2))>.3))return!1;return!0}},{key:"moveNodes",value:function(){for(var g=this.physicsBody.physicsNodeIndices,t=0,A=0,e=0;e<g.length;e++){var C=g[e],I=this._performStep(C);t=Math.max(t,I),A+=I}this.adaptiveTimestepEnabled=A/g.length<5,this.stabilized=t<this.options.minVelocity}},{key:"calculateComponentVelocity",value:function(g,t,A){g+=(t-this.modelOptions.damping*g)/A*this.timestep;var e=this.options.maxVelocity||1e9;return Math.abs(g)>e&&(g=g>0?e:-e),g}},{key:"_performStep",value:function(g){var t=this.body.nodes[g],A=this.physicsBody.forces[g];this.options.wind&&(A.x+=this.options.wind.x,A.y+=this.options.wind.y);var e=this.physicsBody.velocities[g];return this.previousStates[g]={x:t.x,y:t.y,vx:e.x,vy:e.y},!1===t.options.fixed.x?(e.x=this.calculateComponentVelocity(e.x,A.x,t.options.mass),t.x+=e.x*this.timestep):(A.x=0,e.x=0),!1===t.options.fixed.y?(e.y=this.calculateComponentVelocity(e.y,A.y,t.options.mass),t.y+=e.y*this.timestep):(A.y=0,e.y=0),Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))}},{key:"_freezeNodes",value:function(){var g=this.body.nodes;for(var t in g)if(Object.prototype.hasOwnProperty.call(g,t)&&g[t].x&&g[t].y){var A=g[t].options.fixed;this.freezeCache[t]={x:A.x,y:A.y},A.x=!0,A.y=!0}}},{key:"_restoreFrozenNodes",value:function(){var g=this.body.nodes;for(var t in g)Object.prototype.hasOwnProperty.call(g,t)&&void 0!==this.freezeCache[t]&&(g[t].options.fixed.x=this.freezeCache[t].x,g[t].options.fixed.y=this.freezeCache[t].y);this.freezeCache={}}},{key:"stabilize",value:function(){var g=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.stabilization.iterations;"number"!=typeof t&&(t=this.options.stabilization.iterations,console.error("The stabilize method needs a numeric amount of iterations. Switching to default: ",t)),0!==this.physicsBody.physicsNodeIndices.length?(this.adaptiveTimestep=this.options.adaptiveTimestep,this.body.emitter.emit("_resizeNodes"),this.stopSimulation(),this.stabilized=!1,this.body.emitter.emit("_blockRedraw"),this.targetIterations=t,!0===this.options.stabilization.onlyDynamicEdges&&this._freezeNodes(),this.stabilizationIterations=0,wu((function(){return g._stabilizationBatch()}),0)):this.ready=!0}},{key:"_startStabilizing",value:function(){return!0!==this.startedStabilization&&(this.body.emitter.emit("startStabilizing"),this.startedStabilization=!0,!0)}},{key:"_stabilizationBatch",value:function(){var g=this,t=function(){return!1===g.stabilized&&g.stabilizationIterations<g.targetIterations},A=function(){g.body.emitter.emit("stabilizationProgress",{iterations:g.stabilizationIterations,total:g.targetIterations})};this._startStabilizing()&&A();for(var e,C=0;t()&&C<this.options.stabilization.updateInterval;)this.physicsTick(),C++;(A(),t())?wu(je(e=this._stabilizationBatch).call(e,this),0):this._finalizeStabilization()}},{key:"_finalizeStabilization",value:function(){this.body.emitter.emit("_allowRedraw"),!0===this.options.stabilization.fit&&this.body.emitter.emit("fit"),!0===this.options.stabilization.onlyDynamicEdges&&this._restoreFrozenNodes(),this.body.emitter.emit("stabilizationIterationsDone"),this.body.emitter.emit("_requestRedraw"),!0===this.stabilized?this._emitStabilized():this.startSimulation(),this.ready=!0}},{key:"_drawForces",value:function(g){for(var t=0;t<this.physicsBody.physicsNodeIndices.length;t++){var A=this.physicsBody.physicsNodeIndices[t],e=this.body.nodes[A],C=this.physicsBody.forces[A],I=Math.sqrt(Math.pow(C.x,2)+Math.pow(C.x,2)),i=Math.min(Math.max(5,I),15),o=3*i,n=nv((180-180*Math.min(1,Math.max(0,.03*I)))/360,1,1),r={x:e.x+20*C.x,y:e.y+20*C.y};g.lineWidth=i,g.strokeStyle=n,g.beginPath(),g.moveTo(e.x,e.y),g.lineTo(r.x,r.y),g.stroke();var s=Math.atan2(C.y,C.x);g.fillStyle=n,vR.draw(g,{type:"arrow",point:r,angle:s,length:o}),Bu(g).call(g)}}}]),g}(),XR=function(){function g(){cn(this,g)}return kd(g,null,[{key:"getRange",value:function(g){var t,A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=1e9,C=-1e9,I=1e9,i=-1e9;if(A.length>0)for(var o=0;o<A.length;o++)I>(t=g[A[o]]).shape.boundingBox.left&&(I=t.shape.boundingBox.left),i<t.shape.boundingBox.right&&(i=t.shape.boundingBox.right),e>t.shape.boundingBox.top&&(e=t.shape.boundingBox.top),C<t.shape.boundingBox.bottom&&(C=t.shape.boundingBox.bottom);return 1e9===I&&-1e9===i&&1e9===e&&-1e9===C&&(e=0,C=0,I=0,i=0),{minX:I,maxX:i,minY:e,maxY:C}}},{key:"getRangeCore",value:function(g){var t,A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=1e9,C=-1e9,I=1e9,i=-1e9;if(A.length>0)for(var o=0;o<A.length;o++)I>(t=g[A[o]]).x&&(I=t.x),i<t.x&&(i=t.x),e>t.y&&(e=t.y),C<t.y&&(C=t.y);return 1e9===I&&-1e9===i&&1e9===e&&-1e9===C&&(e=0,C=0,I=0,i=0),{minX:I,maxX:i,minY:e,maxY:C}}},{key:"findCenter",value:function(g){return{x:.5*(g.maxX+g.minX),y:.5*(g.maxY+g.minY)}}},{key:"cloneOptions",value:function(g,t){var A={};return void 0===t||"node"===t?(qf(A,g.options,!0),A.x=g.x,A.y=g.y,A.amountOfConnections=g.edges.length):qf(A,g.options,!0),A}}]),g}();function JR(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var qR=function(g){Cb(A,g);var t=JR(A);function A(g,e,C,I,i,o){var n;return cn(this,A),(n=t.call(this,g,e,C,I,i,o)).isCluster=!0,n.containedNodes={},n.containedEdges={},n}return kd(A,[{key:"_openChildCluster",value:function(g){var t=this,A=this.body.nodes[g];if(void 0===this.containedNodes[g])throw new Error("node with id: "+g+" not in current cluster");if(!A.isCluster)throw new Error("node with id: "+g+" is not a cluster");delete this.containedNodes[g],tv(A.edges,(function(g){delete t.containedEdges[g.id]})),tv(A.containedNodes,(function(g,A){t.containedNodes[A]=g})),A.containedNodes={},tv(A.containedEdges,(function(g,A){t.containedEdges[A]=g})),A.containedEdges={},tv(A.edges,(function(g){tv(t.edges,(function(A){var e,C,I=Xc(e=A.clusteringEdgeReplacingIds).call(e,g.id);-1!==I&&(tv(g.clusteringEdgeReplacingIds,(function(g){A.clusteringEdgeReplacingIds.push(g),t.body.edges[g].edgeReplacedById=A.id})),Zl(C=A.clusteringEdgeReplacingIds).call(C,I,1))}))})),A.edges=[]}}]),A}(jN),$R=function(){function g(t){var A=this;cn(this,g),this.body=t,this.clusteredNodes={},this.clusteredEdges={},this.options={},this.defaultOptions={},fe(this.options,this.defaultOptions),this.body.emitter.on("_resetData",(function(){A.clusteredNodes={},A.clusteredEdges={}}))}return kd(g,[{key:"clusterByHubsize",value:function(g,t){void 0===g?g=this._getHubSize():"object"===yd(g)&&(t=this._checkOptions(g),g=this._getHubSize());for(var A=[],e=0;e<this.body.nodeIndices.length;e++){var C=this.body.nodes[this.body.nodeIndices[e]];C.edges.length>=g&&A.push(C.id)}for(var I=0;I<A.length;I++)this.clusterByConnection(A[I],t,!0);this.body.emitter.emit("_dataChanged")}},{key:"cluster",value:function(){var g=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===t.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");t=this._checkOptions(t);var e={},C={};tv(this.body.nodes,(function(A,I){A.options&&!0===t.joinCondition(A.options)&&(e[I]=A,tv(A.edges,(function(t){void 0===g.clusteredEdges[t.id]&&(C[t.id]=t)})))})),this._cluster(e,C,t,A)}},{key:"clusterByEdgeCount",value:function(g,t){var A=this,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t=this._checkOptions(t);for(var C,I,i,o=[],n={},r=function(){var e={},r={},a=A.body.nodeIndices[s],d=A.body.nodes[a];if(void 0===n[a]){i=0,I=[];for(var h=0;h<d.edges.length;h++)C=d.edges[h],void 0===A.clusteredEdges[C.id]&&(C.toId!==C.fromId&&i++,I.push(C));if(i===g){for(var l=function(g){if(void 0===t.joinCondition||null===t.joinCondition)return!0;var A=XR.cloneOptions(g);return t.joinCondition(A)},c=!0,u=0;u<I.length;u++){C=I[u];var p=A._getConnectedId(C,a);if(!l(d)){c=!1;break}r[C.id]=C,e[a]=d,e[p]=A.body.nodes[p],n[a]=!0}if(Lh(e).length>0&&Lh(r).length>0&&!0===c){var f=function(){for(var g=0;g<o.length;++g)for(var t in e)if(void 0!==o[g].nodes[t])return o[g]}();if(void 0!==f){for(var v in e)void 0===f.nodes[v]&&(f.nodes[v]=e[v]);for(var y in r)void 0===f.edges[y]&&(f.edges[y]=r[y])}else o.push({nodes:e,edges:r})}}}},s=0;s<this.body.nodeIndices.length;s++)r();for(var a=0;a<o.length;a++)this._cluster(o[a].nodes,o[a].edges,t,!1);!0===e&&this.body.emitter.emit("_dataChanged")}},{key:"clusterOutliers",value:function(g){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(1,g,t)}},{key:"clusterBridges",value:function(g){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(2,g,t)}},{key:"clusterByConnection",value:function(g,t){var A,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===g)throw new Error("No nodeId supplied to clusterByConnection!");if(void 0===this.body.nodes[g])throw new Error("The nodeId given to clusterByConnection does not exist!");var C=this.body.nodes[g];void 0===(t=this._checkOptions(t,C)).clusterNodeProperties.x&&(t.clusterNodeProperties.x=C.x),void 0===t.clusterNodeProperties.y&&(t.clusterNodeProperties.y=C.y),void 0===t.clusterNodeProperties.fixed&&(t.clusterNodeProperties.fixed={},t.clusterNodeProperties.fixed.x=C.options.fixed.x,t.clusterNodeProperties.fixed.y=C.options.fixed.y);var I={},i={},o=C.id,n=XR.cloneOptions(C);I[o]=C;for(var r=0;r<C.edges.length;r++){var s=C.edges[r];if(void 0===this.clusteredEdges[s.id]){var a=this._getConnectedId(s,o);if(void 0===this.clusteredNodes[a])if(a!==o)if(void 0===t.joinCondition)i[s.id]=s,I[a]=this.body.nodes[a];else{var d=XR.cloneOptions(this.body.nodes[a]);!0===t.joinCondition(n,d)&&(i[s.id]=s,I[a]=this.body.nodes[a])}else i[s.id]=s}}var h=Fh(A=Lh(I)).call(A,(function(g){return I[g].id}));for(var l in I)if(Object.prototype.hasOwnProperty.call(I,l))for(var c=I[l],u=0;u<c.edges.length;u++){var p=c.edges[u];Xc(h).call(h,this._getConnectedId(p,c.id))>-1&&(i[p.id]=p)}this._cluster(I,i,t,e)}},{key:"_createClusterEdges",value:function(g,t,A,e){for(var C,I,i,o,n,r,s=Lh(g),a=[],d=0;d<s.length;d++){i=g[I=s[d]];for(var h=0;h<i.edges.length;h++)C=i.edges[h],void 0===this.clusteredEdges[C.id]&&(C.toId==C.fromId?t[C.id]=C:C.toId==I?(o=A.id,r=n=C.fromId):(o=C.toId,n=A.id,r=o),void 0===g[r]&&a.push({edge:C,fromId:n,toId:o}))}for(var l=[],c=function(g){for(var t=0;t<l.length;t++){var A=l[t],e=g.fromId===A.fromId&&g.toId===A.toId,C=g.fromId===A.toId&&g.toId===A.fromId;if(e||C)return A}return null},u=0;u<a.length;u++){var p=a[u],f=p.edge,v=c(p);null===v?(v=this._createClusteredEdge(p.fromId,p.toId,f,e),l.push(v)):v.clusteringEdgeReplacingIds.push(f.id),this.body.edges[f.id].edgeReplacedById=v.id,this._backupEdgeOptions(f),f.setOptions({physics:!1})}}},{key:"_checkOptions",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===g.clusterEdgeProperties&&(g.clusterEdgeProperties={}),void 0===g.clusterNodeProperties&&(g.clusterNodeProperties={}),g}},{key:"_cluster",value:function(g,t,A){var e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],C=[];for(var I in g)Object.prototype.hasOwnProperty.call(g,I)&&void 0!==this.clusteredNodes[I]&&C.push(I);for(var i=0;i<C.length;++i)delete g[C[i]];if(0!=Lh(g).length&&(1!=Lh(g).length||1==A.clusterNodeProperties.allowSingleNodeCluster)){var o=qf({},A.clusterNodeProperties);if(void 0!==A.processProperties){var n=[];for(var r in g)if(Object.prototype.hasOwnProperty.call(g,r)){var s=XR.cloneOptions(g[r]);n.push(s)}var a=[];for(var d in t)if(Object.prototype.hasOwnProperty.call(t,d)&&"clusterEdge:"!==d.substr(0,12)){var h=XR.cloneOptions(t[d],"edge");a.push(h)}if(!(o=A.processProperties(o,n,a)))throw new Error("The processProperties function does not return properties!")}void 0===o.id&&(o.id="cluster:"+rD());var l=o.id;void 0===o.label&&(o.label="cluster");var c=void 0;void 0===o.x&&(c=this._getClusterPosition(g),o.x=c.x),void 0===o.y&&(void 0===c&&(c=this._getClusterPosition(g)),o.y=c.y),o.id=l;var u=this.body.functions.createNode(o,qR);u.containedNodes=g,u.containedEdges=t,u.clusterEdgeProperties=A.clusterEdgeProperties,this.body.nodes[o.id]=u,this._clusterEdges(g,t,o,A.clusterEdgeProperties),o.id=void 0,!0===e&&this.body.emitter.emit("_dataChanged")}}},{key:"_backupEdgeOptions",value:function(g){void 0===this.clusteredEdges[g.id]&&(this.clusteredEdges[g.id]={physics:g.options.physics})}},{key:"_restoreEdge",value:function(g){var t=this.clusteredEdges[g.id];void 0!==t&&(g.setOptions({physics:t.physics}),delete this.clusteredEdges[g.id])}},{key:"isCluster",value:function(g){return void 0!==this.body.nodes[g]?!0===this.body.nodes[g].isCluster:(console.error("Node does not exist."),!1)}},{key:"_getClusterPosition",value:function(g){for(var t,A=Lh(g),e=g[A[0]].x,C=g[A[0]].x,I=g[A[0]].y,i=g[A[0]].y,o=1;o<A.length;o++)e=(t=g[A[o]]).x<e?t.x:e,C=t.x>C?t.x:C,I=t.y<I?t.y:I,i=t.y>i?t.y:i;return{x:.5*(e+C),y:.5*(I+i)}}},{key:"openCluster",value:function(g,t){var A=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===g)throw new Error("No clusterNodeId supplied to openCluster.");var e=this.body.nodes[g];if(void 0===e)throw new Error("The clusterNodeId supplied to openCluster does not exist.");if(!0!==e.isCluster||void 0===e.containedNodes||void 0===e.containedEdges)throw new Error("The node:"+g+" is not a valid cluster.");var C=this.findNode(g),I=Xc(C).call(C,g)-1;if(I>=0){var i=C[I];return this.body.nodes[i]._openChildCluster(g),delete this.body.nodes[g],void(!0===A&&this.body.emitter.emit("_dataChanged"))}var o=e.containedNodes,n=e.containedEdges;if(void 0!==t&&void 0!==t.releaseFunction&&"function"==typeof t.releaseFunction){var r={},s={x:e.x,y:e.y};for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)){var d=this.body.nodes[a];r[a]={x:d.x,y:d.y}}var h=t.releaseFunction(s,r);for(var l in o)if(Object.prototype.hasOwnProperty.call(o,l)){var c=this.body.nodes[l];void 0!==h[l]&&(c.x=void 0===h[l].x?e.x:h[l].x,c.y=void 0===h[l].y?e.y:h[l].y)}}else tv(o,(function(g){!1===g.options.fixed.x&&(g.x=e.x),!1===g.options.fixed.y&&(g.y=e.y)}));for(var u in o)if(Object.prototype.hasOwnProperty.call(o,u)){var p=this.body.nodes[u];p.vx=e.vx,p.vy=e.vy,p.setOptions({physics:!0}),delete this.clusteredNodes[u]}for(var f=[],v=0;v<e.edges.length;v++)f.push(e.edges[v]);for(var y=0;y<f.length;y++){for(var m=f[y],b=this._getConnectedId(m,g),w=this.clusteredNodes[b],k=0;k<m.clusteringEdgeReplacingIds.length;k++){var x=m.clusteringEdgeReplacingIds[k],E=this.body.edges[x];if(void 0!==E)if(void 0!==w){var O=this.body.nodes[w.clusterId];O.containedEdges[E.id]=E,delete n[E.id];var T=E.fromId,D=E.toId;E.toId==b?D=w.clusterId:T=w.clusterId,this._createClusteredEdge(T,D,E,O.clusterEdgeProperties,{hidden:!1,physics:!0})}else this._restoreEdge(E)}m.remove()}for(var N in n)Object.prototype.hasOwnProperty.call(n,N)&&this._restoreEdge(n[N]);delete this.body.nodes[g],!0===A&&this.body.emitter.emit("_dataChanged")}},{key:"getNodesInCluster",value:function(g){var t=[];if(!0===this.isCluster(g)){var A=this.body.nodes[g].containedNodes;for(var e in A)Object.prototype.hasOwnProperty.call(A,e)&&t.push(this.body.nodes[e].id)}return t}},{key:"findNode",value:function(g){for(var t,A=[],e=0;void 0!==this.clusteredNodes[g]&&e<100;){if(void 0===(t=this.body.nodes[g]))return[];A.push(t.id),g=this.clusteredNodes[g].clusterId,e++}return void 0===(t=this.body.nodes[g])?[]:(A.push(t.id),cl(A).call(A),A)}},{key:"updateClusteredNode",value:function(g,t){if(void 0===g)throw new Error("No clusteredNodeId supplied to updateClusteredNode.");if(void 0===t)throw new Error("No newOptions supplied to updateClusteredNode.");if(void 0===this.body.nodes[g])throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");this.body.nodes[g].setOptions(t),this.body.emitter.emit("_dataChanged")}},{key:"updateEdge",value:function(g,t){if(void 0===g)throw new Error("No startEdgeId supplied to updateEdge.");if(void 0===t)throw new Error("No newOptions supplied to updateEdge.");if(void 0===this.body.edges[g])throw new Error("The startEdgeId supplied to updateEdge does not exist.");for(var A=this.getClusteredEdges(g),e=0;e<A.length;e++){this.body.edges[A[e]].setOptions(t)}this.body.emitter.emit("_dataChanged")}},{key:"getClusteredEdges",value:function(g){for(var t=[],A=0;void 0!==g&&void 0!==this.body.edges[g]&&A<100;)t.push(this.body.edges[g].id),g=this.body.edges[g].edgeReplacedById,A++;return cl(t).call(t),t}},{key:"getBaseEdge",value:function(g){return this.getBaseEdges(g)[0]}},{key:"getBaseEdges",value:function(g){for(var t=[g],A=[],e=[],C=0;t.length>0&&C<100;){var I=t.pop();if(void 0!==I){var i=this.body.edges[I];if(void 0!==i){C++;var o=i.clusteringEdgeReplacingIds;if(void 0===o)e.push(I);else for(var n=0;n<o.length;++n){var r=o[n];-1===Xc(t).call(t,o)&&-1===Xc(A).call(A,o)&&t.push(r)}A.push(I)}}}return e}},{key:"_getConnectedId",value:function(g,t){return g.toId!=t?g.toId:(g.fromId,g.fromId)}},{key:"_getHubSize",value:function(){for(var g=0,t=0,A=0,e=0,C=0;C<this.body.nodeIndices.length;C++){var I=this.body.nodes[this.body.nodeIndices[C]];I.edges.length>e&&(e=I.edges.length),g+=I.edges.length,t+=Math.pow(I.edges.length,2),A+=1}g/=A;var i=(t/=A)-Math.pow(g,2),o=Math.sqrt(i),n=Math.floor(g+2*o);return n>e&&(n=e),n}},{key:"_createClusteredEdge",value:function(g,t,A,e,C){var I=XR.cloneOptions(A,"edge");qf(I,e),I.from=g,I.to=t,I.id="clusterEdge:"+rD(),void 0!==C&&qf(I,C);var i=this.body.functions.createEdge(I);return i.clusteringEdgeReplacingIds=[A.id],i.connect(),this.body.edges[i.id]=i,i}},{key:"_clusterEdges",value:function(g,t,A,e){if(t instanceof ZR){var C=t,I={};I[C.id]=C,t=I}if(g instanceof jN){var i=g,o={};o[i.id]=i,g=o}if(null==A)throw new Error("_clusterEdges: parameter clusterNode required");for(var n in void 0===e&&(e=A.clusterEdgeProperties),this._createClusterEdges(g,t,A,e),t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==this.body.edges[n]){var r=this.body.edges[n];this._backupEdgeOptions(r),r.setOptions({physics:!1})}for(var s in g)Object.prototype.hasOwnProperty.call(g,s)&&(this.clusteredNodes[s]={clusterId:A.id,node:this.body.nodes[s]},this.body.nodes[s].setOptions({physics:!1}))}},{key:"_getClusterNodeForNode",value:function(g){if(void 0!==g){var t=this.clusteredNodes[g];if(void 0!==t){var A=t.clusterId;if(void 0!==A)return this.body.nodes[A]}}}},{key:"_filter",value:function(g,t){var A=[];return tv(g,(function(g){t(g)&&A.push(g)})),A}},{key:"_updateState",value:function(){var g,t=this,A=[],e={},C=function(g){tv(t.body.nodes,(function(t){!0===t.isCluster&&g(t)}))};for(g in this.clusteredNodes){if(Object.prototype.hasOwnProperty.call(this.clusteredNodes,g))void 0===this.body.nodes[g]&&A.push(g)}C((function(g){for(var t=0;t<A.length;t++)delete g.containedNodes[A[t]]}));for(var I=0;I<A.length;I++)delete this.clusteredNodes[A[I]];tv(this.clusteredEdges,(function(g){var A=t.body.edges[g];void 0!==A&&A.endPointsValid()||(e[g]=g)})),C((function(g){tv(g.containedEdges,(function(g,t){g.endPointsValid()||e[t]||(e[t]=t)}))})),tv(this.body.edges,(function(g,A){var C=!0,I=g.clusteringEdgeReplacingIds;if(void 0!==I){var i=0;tv(I,(function(g){var A=t.body.edges[g];void 0!==A&&A.endPointsValid()&&(i+=1)})),C=i>0}g.endPointsValid()&&C||(e[A]=A)})),C((function(g){tv(e,(function(A){delete g.containedEdges[A],tv(g.edges,(function(C,I){C.id!==A?C.clusteringEdgeReplacingIds=t._filter(C.clusteringEdgeReplacingIds,(function(g){return!e[g]})):g.edges[I]=null})),g.edges=t._filter(g.edges,(function(g){return null!==g}))}))})),tv(e,(function(g){delete t.clusteredEdges[g]})),tv(e,(function(g){delete t.body.edges[g]})),tv(Lh(this.body.edges),(function(g){var A=t.body.edges[g],e=t._isClusteredNode(A.fromId)||t._isClusteredNode(A.toId);if(e!==t._isClusteredEdge(A.id))if(e){var C=t._getClusterNodeForNode(A.fromId);void 0!==C&&t._clusterEdges(t.body.nodes[A.fromId],A,C);var I=t._getClusterNodeForNode(A.toId);void 0!==I&&t._clusterEdges(t.body.nodes[A.toId],A,I)}else delete t._clusterEdges[g],t._restoreEdge(A)}));for(var i=!1,o=!0,n=function(){var g=[];C((function(t){var A=Lh(t.containedNodes).length,e=!0===t.options.allowSingleNodeCluster;(e&&A<1||!e&&A<2)&&g.push(t.id)}));for(var A=0;A<g.length;++A)t.openCluster(g[A],{},!1);o=g.length>0,i=i||o};o;)n();i&&this._updateState()}},{key:"_isClusteredNode",value:function(g){return void 0!==this.clusteredNodes[g]}},{key:"_isClusteredEdge",value:function(g){return void 0!==this.clusteredEdges[g]}}]),g}();var gP=function(){function g(t,A){var e;cn(this,g),void 0!==window&&(e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame),window.requestAnimationFrame=void 0===e?function(g){g()}:e,this.body=t,this.canvas=A,this.redrawRequested=!1,this.renderTimer=void 0,this.requiresTimeout=!0,this.renderingActive=!1,this.renderRequests=0,this.allowRedraw=!0,this.dragging=!1,this.zooming=!1,this.options={},this.defaultOptions={hideEdgesOnDrag:!1,hideEdgesOnZoom:!1,hideNodesOnDrag:!1},fe(this.options,this.defaultOptions),this._determineBrowserMethod(),this.bindEventListeners()}return kd(g,[{key:"bindEventListeners",value:function(){var g,t=this;this.body.emitter.on("dragStart",(function(){t.dragging=!0})),this.body.emitter.on("dragEnd",(function(){t.dragging=!1})),this.body.emitter.on("zoom",(function(){t.zooming=!0,window.clearTimeout(t.zoomTimeoutId),t.zoomTimeoutId=wu((function(){var g;t.zooming=!1,je(g=t._requestRedraw).call(g,t)()}),250)})),this.body.emitter.on("_resizeNodes",(function(){t._resizeNodes()})),this.body.emitter.on("_redraw",(function(){!1===t.renderingActive&&t._redraw()})),this.body.emitter.on("_blockRedraw",(function(){t.allowRedraw=!1})),this.body.emitter.on("_allowRedraw",(function(){t.allowRedraw=!0,t.redrawRequested=!1})),this.body.emitter.on("_requestRedraw",je(g=this._requestRedraw).call(g,this)),this.body.emitter.on("_startRendering",(function(){t.renderRequests+=1,t.renderingActive=!0,t._startRendering()})),this.body.emitter.on("_stopRendering",(function(){t.renderRequests-=1,t.renderingActive=t.renderRequests>0,t.renderTimer=void 0})),this.body.emitter.on("destroy",(function(){t.renderRequests=0,t.allowRedraw=!1,t.renderingActive=!1,!0===t.requiresTimeout?clearTimeout(t.renderTimer):window.cancelAnimationFrame(t.renderTimer),t.body.emitter.off()}))}},{key:"setOptions",value:function(g){if(void 0!==g){Xf(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag"],this.options,g)}}},{key:"_requestNextFrame",value:function(g,t){if("undefined"!=typeof window){var A,e=window;return!0===this.requiresTimeout?A=wu(g,t):e.requestAnimationFrame&&(A=e.requestAnimationFrame(g)),A}}},{key:"_startRendering",value:function(){var g;!0===this.renderingActive&&(void 0===this.renderTimer&&(this.renderTimer=this._requestNextFrame(je(g=this._renderStep).call(g,this),this.simulationInterval)))}},{key:"_renderStep",value:function(){!0===this.renderingActive&&(this.renderTimer=void 0,!0===this.requiresTimeout&&this._startRendering(),this._redraw(),!1===this.requiresTimeout&&this._startRendering())}},{key:"redraw",value:function(){this.body.emitter.emit("setSize"),this._redraw()}},{key:"_requestRedraw",value:function(){var g=this;!0!==this.redrawRequested&&!1===this.renderingActive&&!0===this.allowRedraw&&(this.redrawRequested=!0,this._requestNextFrame((function(){g._redraw(!1)}),0))}},{key:"_redraw",value:function(){var g=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!0===this.allowRedraw){this.body.emitter.emit("initRedraw"),this.redrawRequested=!1;var t={drawExternalLabels:null};0!==this.canvas.frame.canvas.width&&0!==this.canvas.frame.canvas.height||this.canvas.setSize(),this.canvas.setTransform();var A=this.canvas.getContext(),e=this.canvas.frame.canvas.clientWidth,C=this.canvas.frame.canvas.clientHeight;if(A.clearRect(0,0,e,C),0===this.canvas.frame.clientWidth)return;if(A.save(),A.translate(this.body.view.translation.x,this.body.view.translation.y),A.scale(this.body.view.scale,this.body.view.scale),A.beginPath(),this.body.emitter.emit("beforeDrawing",A),A.closePath(),!1===g&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawEdges(A),!1===this.dragging||!0===this.dragging&&!1===this.options.hideNodesOnDrag){var I=this._drawNodes(A,g).drawExternalLabels;t.drawExternalLabels=I}!1===g&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawArrows(A),null!=t.drawExternalLabels&&t.drawExternalLabels(),!1===g&&this._drawSelectionBox(A),A.beginPath(),this.body.emitter.emit("afterDrawing",A),A.closePath(),A.restore(),!0===g&&A.clearRect(0,0,e,C)}}},{key:"_resizeNodes",value:function(){this.canvas.setTransform();var g=this.canvas.getContext();g.save(),g.translate(this.body.view.translation.x,this.body.view.translation.y),g.scale(this.body.view.scale,this.body.view.scale);var t,A=this.body.nodes;for(var e in A)Object.prototype.hasOwnProperty.call(A,e)&&((t=A[e]).resize(g),t.updateBoundingBox(g,t.selected));g.restore()}},{key:"_drawNodes",value:function(g){for(var t,A,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],C=this.body.nodes,I=this.body.nodeIndices,i=[],o=[],n=this.canvas.DOMtoCanvas({x:-20,y:-20}),r=this.canvas.DOMtoCanvas({x:this.canvas.frame.canvas.clientWidth+20,y:this.canvas.frame.canvas.clientHeight+20}),s={top:n.y,left:n.x,bottom:r.y,right:r.x},a=[],d=0;d<I.length;d++)if((t=C[I[d]]).hover)o.push(I[d]);else if(t.isSelected())i.push(I[d]);else if(!0===e){var h=t.draw(g);null!=h.drawExternalLabel&&a.push(h.drawExternalLabel)}else if(!0===t.isBoundingBoxOverlappingWith(s)){var l=t.draw(g);null!=l.drawExternalLabel&&a.push(l.drawExternalLabel)}else t.updateBoundingBox(g,t.selected);var c=i.length,u=o.length;for(A=0;A<c;A++){var p=(t=C[i[A]]).draw(g);null!=p.drawExternalLabel&&a.push(p.drawExternalLabel)}for(A=0;A<u;A++){var f=(t=C[o[A]]).draw(g);null!=f.drawExternalLabel&&a.push(f.drawExternalLabel)}return{drawExternalLabels:function(){for(var g=0,t=a;g<t.length;g++){(0,t[g])()}}}}},{key:"_drawEdges",value:function(g){for(var t=this.body.edges,A=this.body.edgeIndices,e=0;e<A.length;e++){var C=t[A[e]];!0===C.connected&&C.draw(g)}}},{key:"_drawArrows",value:function(g){for(var t=this.body.edges,A=this.body.edgeIndices,e=0;e<A.length;e++){var C=t[A[e]];!0===C.connected&&C.drawArrows(g)}}},{key:"_determineBrowserMethod",value:function(){if("undefined"!=typeof window){var g=navigator.userAgent.toLowerCase();this.requiresTimeout=!1,(-1!=Xc(g).call(g,"msie 9.0")||-1!=Xc(g).call(g,"safari")&&Xc(g).call(g,"chrome")<=-1)&&(this.requiresTimeout=!0)}else this.requiresTimeout=!0}},{key:"_drawSelectionBox",value:function(g){if(this.body.selectionBox.show){g.beginPath();var t=this.body.selectionBox.position.end.x-this.body.selectionBox.position.start.x,A=this.body.selectionBox.position.end.y-this.body.selectionBox.position.start.y;g.rect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,t,A),g.fillStyle="rgba(151, 194, 252, 0.2)",g.fillRect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,t,A),g.strokeStyle="rgba(151, 194, 252, 1)",g.stroke()}else g.closePath()}}]),g}(),tP=A(tg.setInterval);function AP(g,t){t.inputHandler=function(g){g.isFirst&&t(g)},g.on("hammer.input",t.inputHandler)}function eP(g,t){return t.inputHandler=function(g){g.isFinal&&t(g)},g.on("hammer.input",t.inputHandler)}var CP=function(){function g(t){cn(this,g),this.body=t,this.pixelRatio=1,this.cameraState={},this.initialized=!1,this.canvasViewCenter={},this._cleanupCallbacks=[],this.options={},this.defaultOptions={autoResize:!0,height:"100%",width:"100%"},fe(this.options,this.defaultOptions),this.bindEventListeners()}return kd(g,[{key:"bindEventListeners",value:function(){var g,t=this;this.body.emitter.once("resize",(function(g){0!==g.width&&(t.body.view.translation.x=.5*g.width),0!==g.height&&(t.body.view.translation.y=.5*g.height)})),this.body.emitter.on("setSize",je(g=this.setSize).call(g,this)),this.body.emitter.on("destroy",(function(){t.hammerFrame.destroy(),t.hammer.destroy(),t._cleanUp()}))}},{key:"setOptions",value:function(g){var t=this;if(void 0!==g){Xf(["width","height","autoResize"],this.options,g)}if(this._cleanUp(),!0===this.options.autoResize){var A;if(window.ResizeObserver){var e=new ResizeObserver((function(){!0===t.setSize()&&t.body.emitter.emit("_requestRedraw")})),C=this.frame;e.observe(C),this._cleanupCallbacks.push((function(){e.unobserve(C)}))}else{var I=tP((function(){!0===t.setSize()&&t.body.emitter.emit("_requestRedraw")}),1e3);this._cleanupCallbacks.push((function(){clearInterval(I)}))}var i=je(A=this._onResize).call(A,this);window.addEventListener("resize",i),this._cleanupCallbacks.push((function(){window.removeEventListener("resize",i)}))}}},{key:"_cleanUp",value:function(){var g,t,A;Cl(g=cl(t=Zl(A=this._cleanupCallbacks).call(A,0)).call(t)).call(g,(function(g){try{g()}catch(g){console.error(g)}}))}},{key:"_onResize",value:function(){this.setSize(),this.body.emitter.emit("_redraw")}},{key:"_getCameraState",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pixelRatio;!0===this.initialized&&(this.cameraState.previousWidth=this.frame.canvas.width/g,this.cameraState.previousHeight=this.frame.canvas.height/g,this.cameraState.scale=this.body.view.scale,this.cameraState.position=this.DOMtoCanvas({x:.5*this.frame.canvas.width/g,y:.5*this.frame.canvas.height/g}))}},{key:"_setCameraState",value:function(){if(void 0!==this.cameraState.scale&&0!==this.frame.canvas.clientWidth&&0!==this.frame.canvas.clientHeight&&0!==this.pixelRatio&&this.cameraState.previousWidth>0&&this.cameraState.previousHeight>0){var g=this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth,t=this.frame.canvas.height/this.pixelRatio/this.cameraState.previousHeight,A=this.cameraState.scale;1!=g&&1!=t?A=.5*this.cameraState.scale*(g+t):1!=g?A=this.cameraState.scale*g:1!=t&&(A=this.cameraState.scale*t),this.body.view.scale=A;var e=this.DOMtoCanvas({x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight}),C={x:e.x-this.cameraState.position.x,y:e.y-this.cameraState.position.y};this.body.view.translation.x+=C.x*this.body.view.scale,this.body.view.translation.y+=C.y*this.body.view.scale}}},{key:"_prepareValue",value:function(g){if("number"==typeof g)return g+"px";if("string"==typeof g){if(-1!==Xc(g).call(g,"%")||-1!==Xc(g).call(g,"px"))return g;if(-1===Xc(g).call(g,"%"))return g+"px"}throw new Error("Could not use the value supplied for width or height:"+g)}},{key:"_create",value:function(){for(;this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild);if(this.frame=document.createElement("div"),this.frame.className="vis-network",this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.tabIndex=0,this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas),this.frame.canvas.getContext)this._setPixelRatio(),this.setTransform();else{var g=document.createElement("DIV");g.style.color="red",g.style.fontWeight="bold",g.style.padding="10px",g.innerText="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(g)}this.body.container.appendChild(this.frame),this.body.view.scale=1,this.body.view.translation={x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight},this._bindHammer()}},{key:"_bindHammer",value:function(){var g=this;void 0!==this.hammer&&this.hammer.destroy(),this.drag={},this.pinch={},this.hammer=new Ev(this.frame.canvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.get("pan").set({threshold:5,direction:Ev.DIRECTION_ALL}),AP(this.hammer,(function(t){g.body.eventListeners.onTouch(t)})),this.hammer.on("tap",(function(t){g.body.eventListeners.onTap(t)})),this.hammer.on("doubletap",(function(t){g.body.eventListeners.onDoubleTap(t)})),this.hammer.on("press",(function(t){g.body.eventListeners.onHold(t)})),this.hammer.on("panstart",(function(t){g.body.eventListeners.onDragStart(t)})),this.hammer.on("panmove",(function(t){g.body.eventListeners.onDrag(t)})),this.hammer.on("panend",(function(t){g.body.eventListeners.onDragEnd(t)})),this.hammer.on("pinch",(function(t){g.body.eventListeners.onPinch(t)})),this.frame.canvas.addEventListener("wheel",(function(t){g.body.eventListeners.onMouseWheel(t)})),this.frame.canvas.addEventListener("mousemove",(function(t){g.body.eventListeners.onMouseMove(t)})),this.frame.canvas.addEventListener("contextmenu",(function(t){g.body.eventListeners.onContext(t)})),this.hammerFrame=new Ev(this.frame),eP(this.hammerFrame,(function(t){g.body.eventListeners.onRelease(t)}))}},{key:"setSize",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.width,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.height;g=this._prepareValue(g),t=this._prepareValue(t);var A=!1,e=this.frame.canvas.width,C=this.frame.canvas.height,I=this.pixelRatio;if(this._setPixelRatio(),g!=this.options.width||t!=this.options.height||this.frame.style.width!=g||this.frame.style.height!=t)this._getCameraState(I),this.frame.style.width=g,this.frame.style.height=t,this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),this.options.width=g,this.options.height=t,this.canvasViewCenter={x:.5*this.frame.clientWidth,y:.5*this.frame.clientHeight},A=!0;else{var i=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),o=Math.round(this.frame.canvas.clientHeight*this.pixelRatio);this.frame.canvas.width===i&&this.frame.canvas.height===o||this._getCameraState(I),this.frame.canvas.width!==i&&(this.frame.canvas.width=i,A=!0),this.frame.canvas.height!==o&&(this.frame.canvas.height=o,A=!0)}return!0===A&&(this.body.emitter.emit("resize",{width:Math.round(this.frame.canvas.width/this.pixelRatio),height:Math.round(this.frame.canvas.height/this.pixelRatio),oldWidth:Math.round(e/this.pixelRatio),oldHeight:Math.round(C/this.pixelRatio)}),this._setCameraState()),this.initialized=!0,A}},{key:"getContext",value:function(){return this.frame.canvas.getContext("2d")}},{key:"_determinePixelRatio",value:function(){var g=this.getContext();if(void 0===g)throw new Error("Could not get canvax context");var t=1;return"undefined"!=typeof window&&(t=window.devicePixelRatio||1),t/(g.webkitBackingStorePixelRatio||g.mozBackingStorePixelRatio||g.msBackingStorePixelRatio||g.oBackingStorePixelRatio||g.backingStorePixelRatio||1)}},{key:"_setPixelRatio",value:function(){this.pixelRatio=this._determinePixelRatio()}},{key:"setTransform",value:function(){var g=this.getContext();if(void 0===g)throw new Error("Could not get canvax context");g.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}},{key:"_XconvertDOMtoCanvas",value:function(g){return(g-this.body.view.translation.x)/this.body.view.scale}},{key:"_XconvertCanvasToDOM",value:function(g){return g*this.body.view.scale+this.body.view.translation.x}},{key:"_YconvertDOMtoCanvas",value:function(g){return(g-this.body.view.translation.y)/this.body.view.scale}},{key:"_YconvertCanvasToDOM",value:function(g){return g*this.body.view.scale+this.body.view.translation.y}},{key:"canvasToDOM",value:function(g){return{x:this._XconvertCanvasToDOM(g.x),y:this._YconvertCanvasToDOM(g.y)}}},{key:"DOMtoCanvas",value:function(g){return{x:this._XconvertDOMtoCanvas(g.x),y:this._YconvertDOMtoCanvas(g.y)}}}]),g}();var IP=function(){function g(t,A){var e,C,I=this;cn(this,g),this.body=t,this.canvas=A,this.animationSpeed=1/this.renderRefreshRate,this.animationEasingFunction="easeInOutQuint",this.easingTime=0,this.sourceScale=0,this.targetScale=0,this.sourceTranslation=0,this.targetTranslation=0,this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0,this.touchTime=0,this.viewFunction=void 0,this.body.emitter.on("fit",je(e=this.fit).call(e,this)),this.body.emitter.on("animationFinished",(function(){I.body.emitter.emit("_stopRendering")})),this.body.emitter.on("unlockNode",je(C=this.releaseNode).call(C,this))}return kd(g,[{key:"setOptions",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=g}},{key:"fit",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g=function(g,t){var A=fe({nodes:t,minZoomLevel:Number.MIN_VALUE,maxZoomLevel:1},null!=g?g:{});if(!Rh(A.nodes))throw new TypeError("Nodes has to be an array of ids.");if(0===A.nodes.length&&(A.nodes=t),!("number"==typeof A.minZoomLevel&&A.minZoomLevel>0))throw new TypeError("Min zoom level has to be a number higher than zero.");if(!("number"==typeof A.maxZoomLevel&&A.minZoomLevel<=A.maxZoomLevel))throw new TypeError("Max zoom level has to be a number higher than min zoom level.");return A}(g,this.body.nodeIndices);var A,e,C=this.canvas.frame.canvas.clientWidth,I=this.canvas.frame.canvas.clientHeight;if(0===C||0===I)e=1,A=XR.getRange(this.body.nodes,g.nodes);else if(!0===t){var i=0;for(var o in this.body.nodes){if(Object.prototype.hasOwnProperty.call(this.body.nodes,o))!0===this.body.nodes[o].predefinedPosition&&(i+=1)}if(i>.5*this.body.nodeIndices.length)return void this.fit(g,!1);A=XR.getRange(this.body.nodes,g.nodes),e=12.662/(this.body.nodeIndices.length+7.4147)+.0964822,e*=Math.min(C/600,I/600)}else{this.body.emitter.emit("_resizeNodes"),A=XR.getRange(this.body.nodes,g.nodes);var n=C/(1.1*Math.abs(A.maxX-A.minX)),r=I/(1.1*Math.abs(A.maxY-A.minY));e=n<=r?n:r}e>g.maxZoomLevel?e=g.maxZoomLevel:e<g.minZoomLevel&&(e=g.minZoomLevel);var s={position:XR.findCenter(A),scale:e,animation:g.animation};this.moveTo(s)}},{key:"focus",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(void 0!==this.body.nodes[g]){var A={x:this.body.nodes[g].x,y:this.body.nodes[g].y};t.position=A,t.lockedOnNode=g,this.moveTo(t)}else console.error("Node: "+g+" cannot be found.")}},{key:"moveTo",value:function(g){if(void 0!==g){if(null!=g.offset){if(null!=g.offset.x){if(g.offset.x=+g.offset.x,!Ym(g.offset.x))throw new TypeError('The option "offset.x" has to be a finite number.')}else g.offset.x=0;if(null!=g.offset.y){if(g.offset.y=+g.offset.y,!Ym(g.offset.y))throw new TypeError('The option "offset.y" has to be a finite number.')}else g.offset.x=0}else g.offset={x:0,y:0};if(null!=g.position){if(null!=g.position.x){if(g.position.x=+g.position.x,!Ym(g.position.x))throw new TypeError('The option "position.x" has to be a finite number.')}else g.position.x=0;if(null!=g.position.y){if(g.position.y=+g.position.y,!Ym(g.position.y))throw new TypeError('The option "position.y" has to be a finite number.')}else g.position.x=0}else g.position=this.getViewPosition();if(null!=g.scale){if(g.scale=+g.scale,!(g.scale>0))throw new TypeError('The option "scale" has to be a number greater than zero.')}else g.scale=this.body.view.scale;void 0===g.animation&&(g.animation={duration:0}),!1===g.animation&&(g.animation={duration:0}),!0===g.animation&&(g.animation={}),void 0===g.animation.duration&&(g.animation.duration=1e3),void 0===g.animation.easingFunction&&(g.animation.easingFunction="easeInOutQuad"),this.animateView(g)}else g={}}},{key:"animateView",value:function(g){if(void 0!==g){this.animationEasingFunction=g.animation.easingFunction,this.releaseNode(),!0===g.locked&&(this.lockedOnNodeId=g.lockedOnNode,this.lockedOnNodeOffset=g.offset),0!=this.easingTime&&this._transitionRedraw(!0),this.sourceScale=this.body.view.scale,this.sourceTranslation=this.body.view.translation,this.targetScale=g.scale,this.body.view.scale=this.targetScale;var t,A,e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),C=e.x-g.position.x,I=e.y-g.position.y;if(this.targetTranslation={x:this.sourceTranslation.x+C*this.targetScale+g.offset.x,y:this.sourceTranslation.y+I*this.targetScale+g.offset.y},0===g.animation.duration)if(null!=this.lockedOnNodeId)this.viewFunction=je(t=this._lockedRedraw).call(t,this),this.body.emitter.on("initRedraw",this.viewFunction);else this.body.view.scale=this.targetScale,this.body.view.translation=this.targetTranslation,this.body.emitter.emit("_requestRedraw");else this.animationSpeed=1/(60*g.animation.duration*.001)||1/60,this.animationEasingFunction=g.animation.easingFunction,this.viewFunction=je(A=this._transitionRedraw).call(A,this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering")}}},{key:"_lockedRedraw",value:function(){var g=this.body.nodes[this.lockedOnNodeId].x,t=this.body.nodes[this.lockedOnNodeId].y,A=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),e=A.x-g,C=A.y-t,I=this.body.view.translation,i={x:I.x+e*this.body.view.scale+this.lockedOnNodeOffset.x,y:I.y+C*this.body.view.scale+this.lockedOnNodeOffset.y};this.body.view.translation=i}},{key:"releaseNode",value:function(){void 0!==this.lockedOnNodeId&&void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0)}},{key:"_transitionRedraw",value:function(){var g=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.easingTime+=this.animationSpeed,this.easingTime=!0===g?1:this.easingTime;var t=hv[this.animationEasingFunction](this.easingTime);if(this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*t,this.body.view.translation={x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*t,y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*t},this.easingTime>=1){var A;if(this.body.emitter.off("initRedraw",this.viewFunction),this.easingTime=0,null!=this.lockedOnNodeId)this.viewFunction=je(A=this._lockedRedraw).call(A,this),this.body.emitter.on("initRedraw",this.viewFunction);this.body.emitter.emit("animationFinished")}}},{key:"getScale",value:function(){return this.body.view.scale}},{key:"getViewPosition",value:function(){return this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight})}}]),g}();function iP(g){var t,A=g&&g.preventDefault||!1,e=g&&g.container||window,C={},I={keydown:{},keyup:{}},i={};for(t=97;t<=122;t++)i[String.fromCharCode(t)]={code:t-97+65,shift:!1};for(t=65;t<=90;t++)i[String.fromCharCode(t)]={code:t,shift:!0};for(t=0;t<=9;t++)i[""+t]={code:48+t,shift:!1};for(t=1;t<=12;t++)i["F"+t]={code:111+t,shift:!1};for(t=0;t<=9;t++)i["num"+t]={code:96+t,shift:!1};i["num*"]={code:106,shift:!1},i["num+"]={code:107,shift:!1},i["num-"]={code:109,shift:!1},i["num/"]={code:111,shift:!1},i["num."]={code:110,shift:!1},i.left={code:37,shift:!1},i.up={code:38,shift:!1},i.right={code:39,shift:!1},i.down={code:40,shift:!1},i.space={code:32,shift:!1},i.enter={code:13,shift:!1},i.shift={code:16,shift:void 0},i.esc={code:27,shift:!1},i.backspace={code:8,shift:!1},i.tab={code:9,shift:!1},i.ctrl={code:17,shift:!1},i.alt={code:18,shift:!1},i.delete={code:46,shift:!1},i.pageup={code:33,shift:!1},i.pagedown={code:34,shift:!1},i["="]={code:187,shift:!1},i["-"]={code:189,shift:!1},i["]"]={code:221,shift:!1},i["["]={code:219,shift:!1};var o=function(g){r(g,"keydown")},n=function(g){r(g,"keyup")},r=function(g,t){if(void 0!==I[t][g.keyCode]){for(var e=I[t][g.keyCode],C=0;C<e.length;C++)(void 0===e[C].shift||1==e[C].shift&&1==g.shiftKey||0==e[C].shift&&0==g.shiftKey)&&e[C].fn(g);1==A&&g.preventDefault()}};return C.bind=function(g,t,A){if(void 0===A&&(A="keydown"),void 0===i[g])throw new Error("unsupported key: "+g);void 0===I[A][i[g].code]&&(I[A][i[g].code]=[]),I[A][i[g].code].push({fn:t,shift:i[g].shift})},C.bindAll=function(g,t){for(var A in void 0===t&&(t="keydown"),i)i.hasOwnProperty(A)&&C.bind(A,g,t)},C.getKey=function(g){for(var t in i)if(i.hasOwnProperty(t)){if(1==g.shiftKey&&1==i[t].shift&&g.keyCode==i[t].code)return t;if(0==g.shiftKey&&0==i[t].shift&&g.keyCode==i[t].code)return t;if(g.keyCode==i[t].code&&"shift"==t)return t}return"unknown key, currently not supported"},C.unbind=function(g,t,A){if(void 0===A&&(A="keydown"),void 0===i[g])throw new Error("unsupported key: "+g);if(void 0!==t){var e=[],C=I[A][i[g].code];if(void 0!==C)for(var o=0;o<C.length;o++)C[o].fn==t&&C[o].shift==i[g].shift||e.push(I[A][i[g].code][o]);I[A][i[g].code]=e}else I[A][i[g].code]=[]},C.reset=function(){I={keydown:{},keyup:{}}},C.destroy=function(){I={keydown:{},keyup:{}},e.removeEventListener("keydown",o,!0),e.removeEventListener("keyup",n,!0)},e.addEventListener("keydown",o,!0),e.addEventListener("keyup",n,!0),C}_e('div.vis-network div.vis-navigation div.vis-button{-webkit-touch-callout:none;background-position:2px 2px;background-repeat:no-repeat;-moz-border-radius:17px;border-radius:17px;cursor:pointer;display:inline-block;height:34px;position:absolute;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:34px}div.vis-network div.vis-navigation div.vis-button:hover{box-shadow:0 0 3px 3px rgba(56,207,21,.3)}div.vis-network div.vis-navigation div.vis-button:active{box-shadow:0 0 1px 3px rgba(56,207,21,.95)}div.vis-network div.vis-navigation div.vis-button.vis-up{background-image:url("data:image/png;base64,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");bottom:50px;left:55px}div.vis-network div.vis-navigation div.vis-button.vis-down{background-image:url("data:image/png;base64,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");bottom:10px;left:55px}div.vis-network div.vis-navigation div.vis-button.vis-left{background-image:url("data:image/png;base64,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");bottom:10px;left:15px}div.vis-network div.vis-navigation div.vis-button.vis-right{background-image:url("data:image/png;base64,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");bottom:10px;left:95px}div.vis-network div.vis-navigation div.vis-button.vis-zoomIn{background-image:url("data:image/png;base64,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");bottom:10px;right:15px}div.vis-network div.vis-navigation div.vis-button.vis-zoomOut{background-image:url("data:image/png;base64,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");bottom:10px;right:55px}div.vis-network div.vis-navigation div.vis-button.vis-zoomExtends{background-image:url("data:image/png;base64,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");bottom:50px;right:15px}');var oP=function(){function g(t,A){var e=this;cn(this,g),this.body=t,this.canvas=A,this.iconsCreated=!1,this.navigationHammers=[],this.boundFunctions={},this.touchTime=0,this.activated=!1,this.body.emitter.on("activate",(function(){e.activated=!0,e.configureKeyboardBindings()})),this.body.emitter.on("deactivate",(function(){e.activated=!1,e.configureKeyboardBindings()})),this.body.emitter.on("destroy",(function(){void 0!==e.keycharm&&e.keycharm.destroy()})),this.options={}}return kd(g,[{key:"setOptions",value:function(g){void 0!==g&&(this.options=g,this.create())}},{key:"create",value:function(){!0===this.options.navigationButtons?!1===this.iconsCreated&&this.loadNavigationElements():!0===this.iconsCreated&&this.cleanNavigation(),this.configureKeyboardBindings()}},{key:"cleanNavigation",value:function(){if(0!=this.navigationHammers.length){for(var g=0;g<this.navigationHammers.length;g++)this.navigationHammers[g].destroy();this.navigationHammers=[]}this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper),this.iconsCreated=!1}},{key:"loadNavigationElements",value:function(){var g=this;this.cleanNavigation(),this.navigationDOM={};var t=["up","down","left","right","zoomIn","zoomOut","zoomExtends"],A=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"];this.navigationDOM.wrapper=document.createElement("div"),this.navigationDOM.wrapper.className="vis-navigation",this.canvas.frame.appendChild(this.navigationDOM.wrapper);for(var e=0;e<t.length;e++){this.navigationDOM[t[e]]=document.createElement("div"),this.navigationDOM[t[e]].className="vis-button vis-"+t[e],this.navigationDOM.wrapper.appendChild(this.navigationDOM[t[e]]);var C,I,i=new Ev(this.navigationDOM[t[e]]);if("_fit"===A[e])AP(i,je(C=this._fit).call(C,this));else AP(i,je(I=this.bindToRedraw).call(I,this,A[e]));this.navigationHammers.push(i)}var o=new Ev(this.canvas.frame);eP(o,(function(){g._stopMovement()})),this.navigationHammers.push(o),this.iconsCreated=!0}},{key:"bindToRedraw",value:function(g){var t;void 0===this.boundFunctions[g]&&(this.boundFunctions[g]=je(t=this[g]).call(t,this),this.body.emitter.on("initRedraw",this.boundFunctions[g]),this.body.emitter.emit("_startRendering"))}},{key:"unbindFromRedraw",value:function(g){void 0!==this.boundFunctions[g]&&(this.body.emitter.off("initRedraw",this.boundFunctions[g]),this.body.emitter.emit("_stopRendering"),delete this.boundFunctions[g])}},{key:"_fit",value:function(){(new Date).valueOf()-this.touchTime>700&&(this.body.emitter.emit("fit",{duration:700}),this.touchTime=(new Date).valueOf())}},{key:"_stopMovement",value:function(){for(var g in this.boundFunctions)Object.prototype.hasOwnProperty.call(this.boundFunctions,g)&&(this.body.emitter.off("initRedraw",this.boundFunctions[g]),this.body.emitter.emit("_stopRendering"));this.boundFunctions={}}},{key:"_moveUp",value:function(){this.body.view.translation.y+=this.options.keyboard.speed.y}},{key:"_moveDown",value:function(){this.body.view.translation.y-=this.options.keyboard.speed.y}},{key:"_moveLeft",value:function(){this.body.view.translation.x+=this.options.keyboard.speed.x}},{key:"_moveRight",value:function(){this.body.view.translation.x-=this.options.keyboard.speed.x}},{key:"_zoomIn",value:function(){var g=this.body.view.scale,t=this.body.view.scale*(1+this.options.keyboard.speed.zoom),A=this.body.view.translation,e=t/g,C=(1-e)*this.canvas.canvasViewCenter.x+A.x*e,I=(1-e)*this.canvas.canvasViewCenter.y+A.y*e;this.body.view.scale=t,this.body.view.translation={x:C,y:I},this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:null})}},{key:"_zoomOut",value:function(){var g=this.body.view.scale,t=this.body.view.scale/(1+this.options.keyboard.speed.zoom),A=this.body.view.translation,e=t/g,C=(1-e)*this.canvas.canvasViewCenter.x+A.x*e,I=(1-e)*this.canvas.canvasViewCenter.y+A.y*e;this.body.view.scale=t,this.body.view.translation={x:C,y:I},this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:null})}},{key:"configureKeyboardBindings",value:function(){var g,t,A,e,C,I,i,o,n,r,s,a,d,h,l,c,u,p,f,v,y,m,b,w,k=this;(void 0!==this.keycharm&&this.keycharm.destroy(),!0===this.options.keyboard.enabled)&&(!0===this.options.keyboard.bindToWindow?this.keycharm=iP({container:window,preventDefault:!0}):this.keycharm=iP({container:this.canvas.frame,preventDefault:!0}),this.keycharm.reset(),!0===this.activated&&(je(g=this.keycharm).call(g,"up",(function(){k.bindToRedraw("_moveUp")}),"keydown"),je(t=this.keycharm).call(t,"down",(function(){k.bindToRedraw("_moveDown")}),"keydown"),je(A=this.keycharm).call(A,"left",(function(){k.bindToRedraw("_moveLeft")}),"keydown"),je(e=this.keycharm).call(e,"right",(function(){k.bindToRedraw("_moveRight")}),"keydown"),je(C=this.keycharm).call(C,"=",(function(){k.bindToRedraw("_zoomIn")}),"keydown"),je(I=this.keycharm).call(I,"num+",(function(){k.bindToRedraw("_zoomIn")}),"keydown"),je(i=this.keycharm).call(i,"num-",(function(){k.bindToRedraw("_zoomOut")}),"keydown"),je(o=this.keycharm).call(o,"-",(function(){k.bindToRedraw("_zoomOut")}),"keydown"),je(n=this.keycharm).call(n,"[",(function(){k.bindToRedraw("_zoomOut")}),"keydown"),je(r=this.keycharm).call(r,"]",(function(){k.bindToRedraw("_zoomIn")}),"keydown"),je(s=this.keycharm).call(s,"pageup",(function(){k.bindToRedraw("_zoomIn")}),"keydown"),je(a=this.keycharm).call(a,"pagedown",(function(){k.bindToRedraw("_zoomOut")}),"keydown"),je(d=this.keycharm).call(d,"up",(function(){k.unbindFromRedraw("_moveUp")}),"keyup"),je(h=this.keycharm).call(h,"down",(function(){k.unbindFromRedraw("_moveDown")}),"keyup"),je(l=this.keycharm).call(l,"left",(function(){k.unbindFromRedraw("_moveLeft")}),"keyup"),je(c=this.keycharm).call(c,"right",(function(){k.unbindFromRedraw("_moveRight")}),"keyup"),je(u=this.keycharm).call(u,"=",(function(){k.unbindFromRedraw("_zoomIn")}),"keyup"),je(p=this.keycharm).call(p,"num+",(function(){k.unbindFromRedraw("_zoomIn")}),"keyup"),je(f=this.keycharm).call(f,"num-",(function(){k.unbindFromRedraw("_zoomOut")}),"keyup"),je(v=this.keycharm).call(v,"-",(function(){k.unbindFromRedraw("_zoomOut")}),"keyup"),je(y=this.keycharm).call(y,"[",(function(){k.unbindFromRedraw("_zoomOut")}),"keyup"),je(m=this.keycharm).call(m,"]",(function(){k.unbindFromRedraw("_zoomIn")}),"keyup"),je(b=this.keycharm).call(b,"pageup",(function(){k.unbindFromRedraw("_zoomIn")}),"keyup"),je(w=this.keycharm).call(w,"pagedown",(function(){k.unbindFromRedraw("_zoomOut")}),"keyup")))}}]),g}();function nP(g,t){var A=void 0!==uh&&ln(g)||g["@@iterator"];if(!A){if(Rh(g)||(A=function(g,t){var A;if(!g)return;if("string"==typeof g)return rP(g,t);var e=wh(A=Object.prototype.toString.call(g)).call(A,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return Uo(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return rP(g,t)}(g))||t&&g&&"number"==typeof g.length){A&&(g=A);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){A=A.call(g)},n:function(){var g=A.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==A.return||A.return()}finally{if(o)throw I}}}}function rP(g,t){(null==t||t>g.length)&&(t=g.length);for(var A=0,e=new Array(t);A<t;A++)e[A]=g[A];return e}var sP=function(){function g(t,A,e){var C,I,i,o,n,r,s,a,d,h,l,c,u;cn(this,g),this.body=t,this.canvas=A,this.selectionHandler=e,this.navigationHandler=new oP(t,A),this.body.eventListeners.onTap=je(C=this.onTap).call(C,this),this.body.eventListeners.onTouch=je(I=this.onTouch).call(I,this),this.body.eventListeners.onDoubleTap=je(i=this.onDoubleTap).call(i,this),this.body.eventListeners.onHold=je(o=this.onHold).call(o,this),this.body.eventListeners.onDragStart=je(n=this.onDragStart).call(n,this),this.body.eventListeners.onDrag=je(r=this.onDrag).call(r,this),this.body.eventListeners.onDragEnd=je(s=this.onDragEnd).call(s,this),this.body.eventListeners.onMouseWheel=je(a=this.onMouseWheel).call(a,this),this.body.eventListeners.onPinch=je(d=this.onPinch).call(d,this),this.body.eventListeners.onMouseMove=je(h=this.onMouseMove).call(h,this),this.body.eventListeners.onRelease=je(l=this.onRelease).call(l,this),this.body.eventListeners.onContext=je(c=this.onContext).call(c,this),this.touchTime=0,this.drag={},this.pinch={},this.popup=void 0,this.popupObj=void 0,this.popupTimer=void 0,this.body.functions.getPointer=je(u=this.getPointer).call(u,this),this.options={},this.defaultOptions={dragNodes:!0,dragView:!0,hover:!1,keyboard:{enabled:!1,speed:{x:10,y:10,zoom:.02},bindToWindow:!0,autoFocus:!0},navigationButtons:!1,tooltipDelay:300,zoomView:!0,zoomSpeed:1},fe(this.options,this.defaultOptions),this.bindEventListeners()}return kd(g,[{key:"bindEventListeners",value:function(){var g=this;this.body.emitter.on("destroy",(function(){clearTimeout(g.popupTimer),delete g.body.functions.getPointer}))}},{key:"setOptions",value:function(g){if(void 0!==g){Jf(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"],this.options,g),dv(this.options,g,"keyboard"),g.tooltip&&(fe(this.options.tooltip,g.tooltip),g.tooltip.color&&(this.options.tooltip.color=Iv(g.tooltip.color)))}this.navigationHandler.setOptions(this.options)}},{key:"getPointer",value:function(g){return{x:g.x-(t=this.canvas.frame.canvas,t.getBoundingClientRect().left),y:g.y-gv(this.canvas.frame.canvas)};var t}},{key:"onTouch",value:function(g){(new Date).valueOf()-this.touchTime>50&&(this.drag.pointer=this.getPointer(g.center),this.drag.pinched=!1,this.pinch.scale=this.body.view.scale,this.touchTime=(new Date).valueOf())}},{key:"onTap",value:function(g){var t=this.getPointer(g.center),A=this.selectionHandler.options.multiselect&&(g.changedPointers[0].ctrlKey||g.changedPointers[0].metaKey);this.checkSelectionChanges(t,A),this.selectionHandler.commitAndEmit(t,g),this.selectionHandler.generateClickEvent("click",g,t)}},{key:"onDoubleTap",value:function(g){var t=this.getPointer(g.center);this.selectionHandler.generateClickEvent("doubleClick",g,t)}},{key:"onHold",value:function(g){var t=this.getPointer(g.center),A=this.selectionHandler.options.multiselect;this.checkSelectionChanges(t,A),this.selectionHandler.commitAndEmit(t,g),this.selectionHandler.generateClickEvent("click",g,t),this.selectionHandler.generateClickEvent("hold",g,t)}},{key:"onRelease",value:function(g){if((new Date).valueOf()-this.touchTime>10){var t=this.getPointer(g.center);this.selectionHandler.generateClickEvent("release",g,t),this.touchTime=(new Date).valueOf()}}},{key:"onContext",value:function(g){var t=this.getPointer({x:g.clientX,y:g.clientY});this.selectionHandler.generateClickEvent("oncontext",g,t)}},{key:"checkSelectionChanges",value:function(g){!0===(arguments.length>1&&void 0!==arguments[1]&&arguments[1])?this.selectionHandler.selectAdditionalOnPoint(g):this.selectionHandler.selectOnPoint(g)}},{key:"_determineDifference",value:function(g,t){var A=function(g,t){for(var A=[],e=0;e<g.length;e++){var C=g[e];-1===Xc(t).call(t,C)&&A.push(C)}return A};return{nodes:A(g.nodes,t.nodes),edges:A(g.edges,t.edges)}}},{key:"onDragStart",value:function(g){if(!this.drag.dragging){void 0===this.drag.pointer&&this.onTouch(g);var t=this.selectionHandler.getNodeAt(this.drag.pointer);if(this.drag.dragging=!0,this.drag.selection=[],this.drag.translation=fe({},this.body.view.translation),this.drag.nodeId=void 0,g.srcEvent.shiftKey){this.body.selectionBox.show=!0;var A=this.getPointer(g.center);this.body.selectionBox.position.start={x:this.canvas._XconvertDOMtoCanvas(A.x),y:this.canvas._YconvertDOMtoCanvas(A.y)},this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(A.x),y:this.canvas._YconvertDOMtoCanvas(A.y)}}else if(void 0!==t&&!0===this.options.dragNodes){this.drag.nodeId=t.id,!1===t.isSelected()&&this.selectionHandler.setSelection({nodes:[t.id]}),this.selectionHandler.generateClickEvent("dragStart",g,this.drag.pointer);var e,C=nP(this.selectionHandler.getSelectedNodes());try{for(C.s();!(e=C.n()).done;){var I=e.value,i={id:I.id,node:I,x:I.x,y:I.y,xFixed:I.options.fixed.x,yFixed:I.options.fixed.y};I.options.fixed.x=!0,I.options.fixed.y=!0,this.drag.selection.push(i)}}catch(g){C.e(g)}finally{C.f()}}else this.selectionHandler.generateClickEvent("dragStart",g,this.drag.pointer,void 0,!0)}}},{key:"onDrag",value:function(g){var t=this;if(!0!==this.drag.pinched){this.body.emitter.emit("unlockNode");var A=this.getPointer(g.center),e=this.drag.selection;if(e&&e.length&&!0===this.options.dragNodes){this.selectionHandler.generateClickEvent("dragging",g,A);var C=A.x-this.drag.pointer.x,I=A.y-this.drag.pointer.y;Cl(e).call(e,(function(g){var A=g.node;!1===g.xFixed&&(A.x=t.canvas._XconvertDOMtoCanvas(t.canvas._XconvertCanvasToDOM(g.x)+C)),!1===g.yFixed&&(A.y=t.canvas._YconvertDOMtoCanvas(t.canvas._YconvertCanvasToDOM(g.y)+I))})),this.body.emitter.emit("startSimulation")}else{if(g.srcEvent.shiftKey){if(this.selectionHandler.generateClickEvent("dragging",g,A,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(g);this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(A.x),y:this.canvas._YconvertDOMtoCanvas(A.y)},this.body.emitter.emit("_requestRedraw")}if(!0===this.options.dragView&&!g.srcEvent.shiftKey){if(this.selectionHandler.generateClickEvent("dragging",g,A,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(g);var i=A.x-this.drag.pointer.x,o=A.y-this.drag.pointer.y;this.body.view.translation={x:this.drag.translation.x+i,y:this.drag.translation.y+o},this.body.emitter.emit("_requestRedraw")}}}}},{key:"onDragEnd",value:function(g){var t=this;if(this.drag.dragging=!1,this.body.selectionBox.show){var A;this.body.selectionBox.show=!1;var e=this.body.selectionBox.position,C={minX:Math.min(e.start.x,e.end.x),minY:Math.min(e.start.y,e.end.y),maxX:Math.max(e.start.x,e.end.x),maxY:Math.max(e.start.y,e.end.y)},I=pc(A=this.body.nodeIndices).call(A,(function(g){var A=t.body.nodes[g];return A.x>=C.minX&&A.x<=C.maxX&&A.y>=C.minY&&A.y<=C.maxY}));Cl(I).call(I,(function(g){return t.selectionHandler.selectObject(t.body.nodes[g])}));var i=this.getPointer(g.center);this.selectionHandler.commitAndEmit(i,g),this.selectionHandler.generateClickEvent("dragEnd",g,this.getPointer(g.center),void 0,!0),this.body.emitter.emit("_requestRedraw")}else{var o=this.drag.selection;o&&o.length?(Cl(o).call(o,(function(g){g.node.options.fixed.x=g.xFixed,g.node.options.fixed.y=g.yFixed})),this.selectionHandler.generateClickEvent("dragEnd",g,this.getPointer(g.center)),this.body.emitter.emit("startSimulation")):(this.selectionHandler.generateClickEvent("dragEnd",g,this.getPointer(g.center),void 0,!0),this.body.emitter.emit("_requestRedraw"))}}},{key:"onPinch",value:function(g){var t=this.getPointer(g.center);this.drag.pinched=!0,void 0===this.pinch.scale&&(this.pinch.scale=1);var A=this.pinch.scale*g.scale;this.zoom(A,t)}},{key:"zoom",value:function(g,t){if(!0===this.options.zoomView){var A=this.body.view.scale;g<1e-5&&(g=1e-5),g>10&&(g=10);var e=void 0;void 0!==this.drag&&!0===this.drag.dragging&&(e=this.canvas.DOMtoCanvas(this.drag.pointer));var C=this.body.view.translation,I=g/A,i=(1-I)*t.x+C.x*I,o=(1-I)*t.y+C.y*I;if(this.body.view.scale=g,this.body.view.translation={x:i,y:o},null!=e){var n=this.canvas.canvasToDOM(e);this.drag.pointer.x=n.x,this.drag.pointer.y=n.y}this.body.emitter.emit("_requestRedraw"),A<g?this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:t}):this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:t})}}},{key:"onMouseWheel",value:function(g){if(!0===this.options.zoomView){if(0!==g.deltaY){var t=this.body.view.scale;t*=1+(g.deltaY<0?1:-1)*(.1*this.options.zoomSpeed);var A=this.getPointer({x:g.clientX,y:g.clientY});this.zoom(t,A)}g.preventDefault()}}},{key:"onMouseMove",value:function(g){var t=this,A=this.getPointer({x:g.clientX,y:g.clientY}),e=!1;void 0!==this.popup&&(!1===this.popup.hidden&&this._checkHidePopup(A),!1===this.popup.hidden&&(e=!0,this.popup.setPosition(A.x+3,A.y-5),this.popup.show())),this.options.keyboard.autoFocus&&!1===this.options.keyboard.bindToWindow&&!0===this.options.keyboard.enabled&&this.canvas.frame.focus(),!1===e&&(void 0!==this.popupTimer&&(clearInterval(this.popupTimer),this.popupTimer=void 0),this.drag.dragging||(this.popupTimer=wu((function(){return t._checkShowPopup(A)}),this.options.tooltipDelay))),!0===this.options.hover&&this.selectionHandler.hoverObject(g,A)}},{key:"_checkShowPopup",value:function(g){var t=this.canvas._XconvertDOMtoCanvas(g.x),A=this.canvas._YconvertDOMtoCanvas(g.y),e={left:t,top:A,right:t,bottom:A},C=void 0===this.popupObj?void 0:this.popupObj.id,I=!1,i="node";if(void 0===this.popupObj){for(var o,n=this.body.nodeIndices,r=this.body.nodes,s=[],a=0;a<n.length;a++)!0===(o=r[n[a]]).isOverlappingWith(e)&&(I=!0,void 0!==o.getTitle()&&s.push(n[a]));s.length>0&&(this.popupObj=r[s[s.length-1]],I=!0)}if(void 0===this.popupObj&&!1===I){for(var d,h=this.body.edgeIndices,l=this.body.edges,c=[],u=0;u<h.length;u++)!0===(d=l[h[u]]).isOverlappingWith(e)&&!0===d.connected&&void 0!==d.getTitle()&&c.push(h[u]);c.length>0&&(this.popupObj=l[c[c.length-1]],i="edge")}void 0!==this.popupObj?this.popupObj.id!==C&&(void 0===this.popup&&(this.popup=new Ov(this.canvas.frame)),this.popup.popupTargetType=i,this.popup.popupTargetId=this.popupObj.id,this.popup.setPosition(g.x+3,g.y-5),this.popup.setText(this.popupObj.getTitle()),this.popup.show(),this.body.emitter.emit("showPopup",this.popupObj.id)):void 0!==this.popup&&(this.popup.hide(),this.body.emitter.emit("hidePopup"))}},{key:"_checkHidePopup",value:function(g){var t=this.selectionHandler._pointerToPositionObject(g),A=!1;if("node"===this.popup.popupTargetType){if(void 0!==this.body.nodes[this.popup.popupTargetId]&&!0===(A=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(t))){var e=this.selectionHandler.getNodeAt(g);A=void 0!==e&&e.id===this.popup.popupTargetId}}else void 0===this.selectionHandler.getNodeAt(g)&&void 0!==this.body.edges[this.popup.popupTargetId]&&(A=this.body.edges[this.popup.popupTargetId].isOverlappingWith(t));!1===A&&(this.popupObj=void 0,this.popup.hide(),this.body.emitter.emit("hidePopup"))}}]),g}(),aP=u,dP=pm,hP=zy.getWeakData,lP=qy,cP=AA,uP=Q,pP=gg,fP=Hy,vP=qg,yP=GC.set,mP=GC.getterFor,bP=Sr.find,wP=Sr.findIndex,kP=aP([].splice),xP=0,EP=function(g){return g.frozen||(g.frozen=new OP)},OP=function(){this.entries=[]},TP=function(g,t){return bP(g.entries,(function(g){return g[0]===t}))};OP.prototype={get:function(g){var t=TP(this,g);if(t)return t[1]},has:function(g){return!!TP(this,g)},set:function(g,t){var A=TP(this,g);A?A[1]=t:this.entries.push([g,t])},delete:function(g){var t=wP(this.entries,(function(t){return t[0]===g}));return~t&&kP(this.entries,t,1),!!~t}};var DP,NP={getConstructor:function(g,t,A,e){var C=g((function(g,C){lP(g,I),yP(g,{type:t,id:xP++,frozen:void 0}),uP(C)||fP(C,g[e],{that:g,AS_ENTRIES:A})})),I=C.prototype,i=mP(t),o=function(g,t,A){var e=i(g),C=hP(cP(t),!0);return!0===C?EP(e).set(t,A):C[e.id]=A,g};return dP(I,{delete:function(g){var t=i(this);if(!pP(g))return!1;var A=hP(g);return!0===A?EP(t).delete(g):A&&vP(A,t.id)&&delete A[t.id]},has:function(g){var t=i(this);if(!pP(g))return!1;var A=hP(g);return!0===A?EP(t).has(g):A&&vP(A,t.id)}}),dP(I,A?{get:function(g){var t=i(this);if(pP(g)){var A=hP(g);return!0===A?EP(t).get(g):A?A[t.id]:void 0}},set:function(g,t){return o(this,g,t)}}:{add:function(g){return o(this,g,!0)}}),C}},RP=vy,PP=C,MP=u,BP=pm,zP=zy,SP=cm,ZP=NP,FP=gg,GP=GC.enforce,jP=I,LP=bC,VP=Object,YP=Array.isArray,WP=VP.isExtensible,QP=VP.isFrozen,UP=VP.isSealed,_P=VP.freeze,KP=VP.seal,HP={},XP={},JP=!PP.ActiveXObject&&"ActiveXObject"in PP,qP=function(g){return function(){return g(this,arguments.length?arguments[0]:void 0)}},$P=SP("WeakMap",qP,ZP),gM=$P.prototype,tM=MP(gM.set);if(LP)if(JP){DP=ZP.getConstructor(qP,"WeakMap",!0),zP.enable();var AM=MP(gM.delete),eM=MP(gM.has),CM=MP(gM.get);BP(gM,{delete:function(g){if(FP(g)&&!WP(g)){var t=GP(this);return t.frozen||(t.frozen=new DP),AM(this,g)||t.frozen.delete(g)}return AM(this,g)},has:function(g){if(FP(g)&&!WP(g)){var t=GP(this);return t.frozen||(t.frozen=new DP),eM(this,g)||t.frozen.has(g)}return eM(this,g)},get:function(g){if(FP(g)&&!WP(g)){var t=GP(this);return t.frozen||(t.frozen=new DP),eM(this,g)?CM(this,g):t.frozen.get(g)}return CM(this,g)},set:function(g,t){if(FP(g)&&!WP(g)){var A=GP(this);A.frozen||(A.frozen=new DP),eM(this,g)?tM(this,g,t):A.frozen.set(g,t)}else tM(this,g,t);return this}})}else RP&&jP((function(){var g=_P([]);return tM(new $P,g,1),!QP(g)}))&&BP(gM,{set:function(g,t){var A;return YP(g)&&(QP(g)?A=HP:UP(g)&&(A=XP)),tM(this,g,t),A===HP&&_P(g),A===XP&&KP(g),this}});var IM,iM,oM,nM,rM,sM=A(tg.WeakMap);function aM(g,t,A,e){if("a"===A&&!e)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?g!==t||!e:!t.has(g))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===A?e:"a"===A?e.call(g):e?e.value:t.get(g)}function dM(g,t,A,e,C){if("m"===e)throw new TypeError("Private method is not writable");if("a"===e&&!C)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?g!==t||!C:!t.has(g))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===e?C.call(g,A):C?C.value=A:t.set(g,A),A}function hM(g,t){var A=void 0!==uh&&ln(g)||g["@@iterator"];if(!A){if(Rh(g)||(A=function(g,t){var A;if(!g)return;if("string"==typeof g)return lM(g,t);var e=wh(A=Object.prototype.toString.call(g)).call(A,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return Uo(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return lM(g,t)}(g))||t&&g&&"number"==typeof g.length){A&&(g=A);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){A=A.call(g)},n:function(){var g=A.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==A.return||A.return()}finally{if(o)throw I}}}}function lM(g,t){(null==t||t>g.length)&&(t=g.length);for(var A=0,e=new Array(t);A<t;A++)e[A]=g[A];return e}function cM(g,t){var A,e=new CO,C=hM(t);try{for(C.s();!(A=C.n()).done;){var I=A.value;g.has(I)||e.add(I)}}catch(g){C.e(g)}finally{C.f()}return e}"function"==typeof SuppressedError&&SuppressedError;var uM=function(){function g(){cn(this,g),IM.set(this,new CO),iM.set(this,new CO)}return kd(g,[{key:"size",get:function(){return aM(this,iM,"f").size}},{key:"add",value:function(){for(var g=arguments.length,t=new Array(g),A=0;A<g;A++)t[A]=arguments[A];for(var e=0,C=t;e<C.length;e++){var I=C[e];aM(this,iM,"f").add(I)}}},{key:"delete",value:function(){for(var g=arguments.length,t=new Array(g),A=0;A<g;A++)t[A]=arguments[A];for(var e=0,C=t;e<C.length;e++){var I=C[e];aM(this,iM,"f").delete(I)}}},{key:"clear",value:function(){aM(this,iM,"f").clear()}},{key:"getSelection",value:function(){return ch(aM(this,iM,"f"))}},{key:"getChanges",value:function(){return{added:ch(cM(aM(this,IM,"f"),aM(this,iM,"f"))),deleted:ch(cM(aM(this,iM,"f"),aM(this,IM,"f"))),previous:ch(new CO(aM(this,IM,"f"))),current:ch(new CO(aM(this,iM,"f")))}}},{key:"commit",value:function(){var g=this.getChanges();dM(this,IM,aM(this,iM,"f"),"f"),dM(this,iM,new CO(aM(this,IM,"f")),"f");var t,A=hM(g.added);try{for(A.s();!(t=A.n()).done;){t.value.select()}}catch(g){A.e(g)}finally{A.f()}var e,C=hM(g.deleted);try{for(C.s();!(e=C.n()).done;){e.value.unselect()}}catch(g){C.e(g)}finally{C.f()}return g}}]),g}();IM=new sM,iM=new sM;var pM=function(){function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};cn(this,g),oM.set(this,new uM),nM.set(this,new uM),rM.set(this,void 0),dM(this,rM,t,"f")}return kd(g,[{key:"sizeNodes",get:function(){return aM(this,oM,"f").size}},{key:"sizeEdges",get:function(){return aM(this,nM,"f").size}},{key:"getNodes",value:function(){return aM(this,oM,"f").getSelection()}},{key:"getEdges",value:function(){return aM(this,nM,"f").getSelection()}},{key:"addNodes",value:function(){var g;(g=aM(this,oM,"f")).add.apply(g,arguments)}},{key:"addEdges",value:function(){var g;(g=aM(this,nM,"f")).add.apply(g,arguments)}},{key:"deleteNodes",value:function(g){aM(this,oM,"f").delete(g)}},{key:"deleteEdges",value:function(g){aM(this,nM,"f").delete(g)}},{key:"clear",value:function(){aM(this,oM,"f").clear(),aM(this,nM,"f").clear()}},{key:"commit",value:function(){for(var g,t,A={nodes:aM(this,oM,"f").commit(),edges:aM(this,nM,"f").commit()},e=arguments.length,C=new Array(e),I=0;I<e;I++)C[I]=arguments[I];return(g=aM(this,rM,"f")).call.apply(g,bh(t=[this,A]).call(t,C)),A}}]),g}();function fM(g,t){var A=void 0!==uh&&ln(g)||g["@@iterator"];if(!A){if(Rh(g)||(A=function(g,t){var A;if(!g)return;if("string"==typeof g)return vM(g,t);var e=wh(A=Object.prototype.toString.call(g)).call(A,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return Uo(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return vM(g,t)}(g))||t&&g&&"number"==typeof g.length){A&&(g=A);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){A=A.call(g)},n:function(){var g=A.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==A.return||A.return()}finally{if(o)throw I}}}}function vM(g,t){(null==t||t>g.length)&&(t=g.length);for(var A=0,e=new Array(t);A<t;A++)e[A]=g[A];return e}oM=new sM,nM=new sM,rM=new sM;var yM=function(){function g(t,A){var e=this;cn(this,g),this.body=t,this.canvas=A,this._selectionAccumulator=new pM,this.hoverObj={nodes:{},edges:{}},this.options={},this.defaultOptions={multiselect:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0},fe(this.options,this.defaultOptions),this.body.emitter.on("_dataChanged",(function(){e.updateSelection()}))}return kd(g,[{key:"setOptions",value:function(g){if(void 0!==g){Xf(["multiselect","hoverConnectedEdges","selectable","selectConnectedEdges"],this.options,g)}}},{key:"selectOnPoint",value:function(g){var t=!1;if(!0===this.options.selectable){var A=this.getNodeAt(g)||this.getEdgeAt(g);this.unselectAll(),void 0!==A&&(t=this.selectObject(A)),this.body.emitter.emit("_requestRedraw")}return t}},{key:"selectAdditionalOnPoint",value:function(g){var t=!1;if(!0===this.options.selectable){var A=this.getNodeAt(g)||this.getEdgeAt(g);void 0!==A&&(t=!0,!0===A.isSelected()?this.deselectObject(A):this.selectObject(A),this.body.emitter.emit("_requestRedraw"))}return t}},{key:"_initBaseEvent",value:function(g,t){var A={};return A.pointer={DOM:{x:t.x,y:t.y},canvas:this.canvas.DOMtoCanvas(t)},A.event=g,A}},{key:"generateClickEvent",value:function(g,t,A,e){var C=arguments.length>4&&void 0!==arguments[4]&&arguments[4],I=this._initBaseEvent(t,A);if(!0===C)I.nodes=[],I.edges=[];else{var i=this.getSelection();I.nodes=i.nodes,I.edges=i.edges}void 0!==e&&(I.previousSelection=e),"click"==g&&(I.items=this.getClickedItems(A)),void 0!==t.controlEdge&&(I.controlEdge=t.controlEdge),this.body.emitter.emit(g,I)}},{key:"selectObject",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.selectConnectedEdges;if(void 0!==g){if(g instanceof jN){var A;if(!0===t)(A=this._selectionAccumulator).addEdges.apply(A,ch(g.edges));this._selectionAccumulator.addNodes(g)}else this._selectionAccumulator.addEdges(g);return!0}return!1}},{key:"deselectObject",value:function(g){!0===g.isSelected()&&(g.selected=!1,this._removeFromSelection(g))}},{key:"_getAllNodesOverlappingWith",value:function(g){for(var t=[],A=this.body.nodes,e=0;e<this.body.nodeIndices.length;e++){var C=this.body.nodeIndices[e];A[C].isOverlappingWith(g)&&t.push(C)}return t}},{key:"_pointerToPositionObject",value:function(g){var t=this.canvas.DOMtoCanvas(g);return{left:t.x-1,top:t.y+1,right:t.x+1,bottom:t.y-1}}},{key:"getNodeAt",value:function(g){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],A=this._pointerToPositionObject(g),e=this._getAllNodesOverlappingWith(A);return e.length>0?!0===t?this.body.nodes[e[e.length-1]]:e[e.length-1]:void 0}},{key:"_getEdgesOverlappingWith",value:function(g,t){for(var A=this.body.edges,e=0;e<this.body.edgeIndices.length;e++){var C=this.body.edgeIndices[e];A[C].isOverlappingWith(g)&&t.push(C)}}},{key:"_getAllEdgesOverlappingWith",value:function(g){var t=[];return this._getEdgesOverlappingWith(g,t),t}},{key:"getEdgeAt",value:function(g){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],A=this.canvas.DOMtoCanvas(g),e=10,C=null,I=this.body.edges,i=0;i<this.body.edgeIndices.length;i++){var o=this.body.edgeIndices[i],n=I[o];if(n.connected){var r=n.from.x,s=n.from.y,a=n.to.x,d=n.to.y,h=n.edgeType.getDistanceToEdge(r,s,a,d,A.x,A.y);h<e&&(C=o,e=h)}}return null!==C?!0===t?this.body.edges[C]:C:void 0}},{key:"_addToHover",value:function(g){g instanceof jN?this.hoverObj.nodes[g.id]=g:this.hoverObj.edges[g.id]=g}},{key:"_removeFromSelection",value:function(g){var t;g instanceof jN?(this._selectionAccumulator.deleteNodes(g),(t=this._selectionAccumulator).deleteEdges.apply(t,ch(g.edges))):this._selectionAccumulator.deleteEdges(g)}},{key:"unselectAll",value:function(){this._selectionAccumulator.clear()}},{key:"getSelectedNodeCount",value:function(){return this._selectionAccumulator.sizeNodes}},{key:"getSelectedEdgeCount",value:function(){return this._selectionAccumulator.sizeEdges}},{key:"_hoverConnectedEdges",value:function(g){for(var t=0;t<g.edges.length;t++){var A=g.edges[t];A.hover=!0,this._addToHover(A)}}},{key:"emitBlurEvent",value:function(g,t,A){var e=this._initBaseEvent(g,t);!0===A.hover&&(A.hover=!1,A instanceof jN?(e.node=A.id,this.body.emitter.emit("blurNode",e)):(e.edge=A.id,this.body.emitter.emit("blurEdge",e)))}},{key:"emitHoverEvent",value:function(g,t,A){var e=this._initBaseEvent(g,t),C=!1;return!1===A.hover&&(A.hover=!0,this._addToHover(A),C=!0,A instanceof jN?(e.node=A.id,this.body.emitter.emit("hoverNode",e)):(e.edge=A.id,this.body.emitter.emit("hoverEdge",e))),C}},{key:"hoverObject",value:function(g,t){var A=this.getNodeAt(t);void 0===A&&(A=this.getEdgeAt(t));var e=!1;for(var C in this.hoverObj.nodes)Object.prototype.hasOwnProperty.call(this.hoverObj.nodes,C)&&(void 0===A||A instanceof jN&&A.id!=C||A instanceof ZR)&&(this.emitBlurEvent(g,t,this.hoverObj.nodes[C]),delete this.hoverObj.nodes[C],e=!0);for(var I in this.hoverObj.edges)Object.prototype.hasOwnProperty.call(this.hoverObj.edges,I)&&(!0===e?(this.hoverObj.edges[I].hover=!1,delete this.hoverObj.edges[I]):(void 0===A||A instanceof ZR&&A.id!=I||A instanceof jN&&!A.hover)&&(this.emitBlurEvent(g,t,this.hoverObj.edges[I]),delete this.hoverObj.edges[I],e=!0));if(void 0!==A){var i=Lh(this.hoverObj.edges).length,o=Lh(this.hoverObj.nodes).length;(e||A instanceof ZR&&0===i&&0===o||A instanceof jN&&0===i&&0===o)&&(e=this.emitHoverEvent(g,t,A)),A instanceof jN&&!0===this.options.hoverConnectedEdges&&this._hoverConnectedEdges(A)}!0===e&&this.body.emitter.emit("_requestRedraw")}},{key:"commitWithoutEmitting",value:function(){this._selectionAccumulator.commit()}},{key:"commitAndEmit",value:function(g,t){var A=!1,e=this._selectionAccumulator.commit(),C={nodes:e.nodes.previous,edges:e.edges.previous};e.edges.deleted.length>0&&(this.generateClickEvent("deselectEdge",t,g,C),A=!0),e.nodes.deleted.length>0&&(this.generateClickEvent("deselectNode",t,g,C),A=!0),e.nodes.added.length>0&&(this.generateClickEvent("selectNode",t,g),A=!0),e.edges.added.length>0&&(this.generateClickEvent("selectEdge",t,g),A=!0),!0===A&&this.generateClickEvent("select",t,g)}},{key:"getSelection",value:function(){return{nodes:this.getSelectedNodeIds(),edges:this.getSelectedEdgeIds()}}},{key:"getSelectedNodes",value:function(){return this._selectionAccumulator.getNodes()}},{key:"getSelectedEdges",value:function(){return this._selectionAccumulator.getEdges()}},{key:"getSelectedNodeIds",value:function(){var g;return Fh(g=this._selectionAccumulator.getNodes()).call(g,(function(g){return g.id}))}},{key:"getSelectedEdgeIds",value:function(){var g;return Fh(g=this._selectionAccumulator.getEdges()).call(g,(function(g){return g.id}))}},{key:"setSelection",value:function(g){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!g||!g.nodes&&!g.edges)throw new TypeError("Selection must be an object with nodes and/or edges properties");if((t.unselectAll||void 0===t.unselectAll)&&this.unselectAll(),g.nodes){var A,e=fM(g.nodes);try{for(e.s();!(A=e.n()).done;){var C=A.value,I=this.body.nodes[C];if(!I)throw new RangeError('Node with id "'+C+'" not found');this.selectObject(I,t.highlightEdges)}}catch(g){e.e(g)}finally{e.f()}}if(g.edges){var i,o=fM(g.edges);try{for(o.s();!(i=o.n()).done;){var n=i.value,r=this.body.edges[n];if(!r)throw new RangeError('Edge with id "'+n+'" not found');this.selectObject(r)}}catch(g){o.e(g)}finally{o.f()}}this.body.emitter.emit("_requestRedraw"),this._selectionAccumulator.commit()}},{key:"selectNodes",value:function(g){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!g||void 0===g.length)throw"Selection must be an array with ids";this.setSelection({nodes:g},{highlightEdges:t})}},{key:"selectEdges",value:function(g){if(!g||void 0===g.length)throw"Selection must be an array with ids";this.setSelection({edges:g})}},{key:"updateSelection",value:function(){for(var g in this._selectionAccumulator.getNodes())Object.prototype.hasOwnProperty.call(this.body.nodes,g.id)||this._selectionAccumulator.deleteNodes(g);for(var t in this._selectionAccumulator.getEdges())Object.prototype.hasOwnProperty.call(this.body.edges,t.id)||this._selectionAccumulator.deleteEdges(t)}},{key:"getClickedItems",value:function(g){for(var t=this.canvas.DOMtoCanvas(g),A=[],e=this.body.nodeIndices,C=this.body.nodes,I=e.length-1;I>=0;I--){var i=C[e[I]].getItemsOnPoint(t);A.push.apply(A,i)}for(var o=this.body.edgeIndices,n=this.body.edges,r=o.length-1;r>=0;r--){var s=n[o[r]].getItemsOnPoint(t);A.push.apply(A,s)}return A}}]),g}();function mM(g){var t=function(){if("undefined"==typeof Reflect||!MT)return!1;if(MT.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(MT(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var A,e=nb(g);if(t){var C=nb(this).constructor;A=MT(e,arguments,C)}else A=e.apply(this,arguments);return Ib(this,A)}}var bM=function(){function g(){cn(this,g)}return kd(g,[{key:"abstract",value:function(){throw new Error("Can't instantiate abstract class!")}},{key:"fake_use",value:function(){}},{key:"curveType",value:function(){return this.abstract()}},{key:"getPosition",value:function(g){return this.fake_use(g),this.abstract()}},{key:"setPosition",value:function(g,t){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.fake_use(g,t,A),this.abstract()}},{key:"getTreeSize",value:function(g){return this.fake_use(g),this.abstract()}},{key:"sort",value:function(g){this.fake_use(g),this.abstract()}},{key:"fix",value:function(g,t){this.fake_use(g,t),this.abstract()}},{key:"shift",value:function(g,t){this.fake_use(g,t),this.abstract()}}]),g}(),wM=function(g){Cb(A,g);var t=mM(A);function A(g){var e;return cn(this,A),(e=t.call(this)).layout=g,e}return kd(A,[{key:"curveType",value:function(){return"horizontal"}},{key:"getPosition",value:function(g){return g.x}},{key:"setPosition",value:function(g,t){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;void 0!==A&&this.layout.hierarchical.addToOrdering(g,A),g.x=t}},{key:"getTreeSize",value:function(g){var t=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,g);return{min:t.min_x,max:t.max_x}}},{key:"sort",value:function(g){WO(g).call(g,(function(g,t){return g.x-t.x}))}},{key:"fix",value:function(g,t){g.y=this.layout.options.hierarchical.levelSeparation*t,g.options.fixed.y=!0}},{key:"shift",value:function(g,t){this.layout.body.nodes[g].x+=t}}]),A}(bM),kM=function(g){Cb(A,g);var t=mM(A);function A(g){var e;return cn(this,A),(e=t.call(this)).layout=g,e}return kd(A,[{key:"curveType",value:function(){return"vertical"}},{key:"getPosition",value:function(g){return g.y}},{key:"setPosition",value:function(g,t){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;void 0!==A&&this.layout.hierarchical.addToOrdering(g,A),g.y=t}},{key:"getTreeSize",value:function(g){var t=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,g);return{min:t.min_y,max:t.max_y}}},{key:"sort",value:function(g){WO(g).call(g,(function(g,t){return g.y-t.y}))}},{key:"fix",value:function(g,t){g.x=this.layout.options.hierarchical.levelSeparation*t,g.options.fixed.x=!0}},{key:"shift",value:function(g,t){this.layout.body.nodes[g].y+=t}}]),A}(bM),xM=Sr.every;TA({target:"Array",proto:!0,forced:!_h("every")},{every:function(g){return xM(this,g,arguments.length>1?arguments[1]:void 0)}});var EM=Me("Array").every,OM=og,TM=EM,DM=Array.prototype,NM=function(g){var t=g.every;return g===DM||OM(DM,g)&&t===DM.every?TM:t},RM=A(NM);function PM(g,t){var A=void 0!==uh&&ln(g)||g["@@iterator"];if(!A){if(Rh(g)||(A=function(g,t){var A;if(!g)return;if("string"==typeof g)return MM(g,t);var e=wh(A=Object.prototype.toString.call(g)).call(A,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return Uo(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return MM(g,t)}(g))||t&&g&&"number"==typeof g.length){A&&(g=A);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){A=A.call(g)},n:function(){var g=A.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==A.return||A.return()}finally{if(o)throw I}}}}function MM(g,t){(null==t||t>g.length)&&(t=g.length);for(var A=0,e=new Array(t);A<t;A++)e[A]=g[A];return e}function BM(g,t){var A=new CO;return Cl(g).call(g,(function(g){var t;Cl(t=g.edges).call(t,(function(g){g.connected&&A.add(g)}))})),Cl(A).call(A,(function(g){var A=g.from.id,e=g.to.id;null==t[A]&&(t[A]=0),(null==t[e]||t[A]>=t[e])&&(t[e]=t[A]+1)})),t}function zM(g,t,A,e){var C,I,i=$c(null),o=LE(C=ch(nT(e).call(e))).call(C,(function(g,t){return g+1+t.edges.length}),0),n=A+"Id",r="to"===A?1:-1,s=PM(e);try{var a,d=function(){var C=lh(I.value,2),s=C[0],a=C[1];if(!e.has(s)||!g(a))return 0;i[s]=0;for(var d,h,l=[a],c=0,u=function(){var g,C;if(!e.has(s))return 0;var I=i[d.id]+r;if(Cl(g=pc(C=d.edges).call(C,(function(g){return g.connected&&g.to!==g.from&&g[A]!==d&&e.has(g.toId)&&e.has(g.fromId)}))).call(g,(function(g){var e=g[n],C=i[e];(null==C||t(I,C))&&(i[e]=I,l.push(g[A]))})),c>o)return{v:{v:BM(e,i)}};++c};d=l.pop();)if(0!==(h=u())&&h)return h.v};for(s.s();!(I=s.n()).done;)if(0!==(a=d())&&a)return a.v}catch(g){s.e(g)}finally{s.f()}return i}var SM=function(){function g(){cn(this,g),this.childrenReference={},this.parentReference={},this.trees={},this.distributionOrdering={},this.levels={},this.distributionIndex={},this.isTree=!1,this.treeIndex=-1}return kd(g,[{key:"addRelation",value:function(g,t){void 0===this.childrenReference[g]&&(this.childrenReference[g]=[]),this.childrenReference[g].push(t),void 0===this.parentReference[t]&&(this.parentReference[t]=[]),this.parentReference[t].push(g)}},{key:"checkIfTree",value:function(){for(var g in this.parentReference)if(this.parentReference[g].length>1)return void(this.isTree=!1);this.isTree=!0}},{key:"numTrees",value:function(){return this.treeIndex+1}},{key:"setTreeIndex",value:function(g,t){void 0!==t&&void 0===this.trees[g.id]&&(this.trees[g.id]=t,this.treeIndex=Math.max(t,this.treeIndex))}},{key:"ensureLevel",value:function(g){void 0===this.levels[g]&&(this.levels[g]=0)}},{key:"getMaxLevel",value:function(g){var t=this,A={};return function g(e){if(void 0!==A[e])return A[e];var C=t.levels[e];if(t.childrenReference[e]){var I=t.childrenReference[e];if(I.length>0)for(var i=0;i<I.length;i++)C=Math.max(C,g(I[i]))}return A[e]=C,C}(g)}},{key:"levelDownstream",value:function(g,t){void 0===this.levels[t.id]&&(void 0===this.levels[g.id]&&(this.levels[g.id]=0),this.levels[t.id]=this.levels[g.id]+1)}},{key:"setMinLevelToZero",value:function(g){var t=1e9;for(var A in g)Object.prototype.hasOwnProperty.call(g,A)&&void 0!==this.levels[A]&&(t=Math.min(this.levels[A],t));for(var e in g)Object.prototype.hasOwnProperty.call(g,e)&&void 0!==this.levels[e]&&(this.levels[e]-=t)}},{key:"getTreeSize",value:function(g,t){var A=1e9,e=-1e9,C=1e9,I=-1e9;for(var i in this.trees)if(Object.prototype.hasOwnProperty.call(this.trees,i)&&this.trees[i]===t){var o=g[i];A=Math.min(o.x,A),e=Math.max(o.x,e),C=Math.min(o.y,C),I=Math.max(o.y,I)}return{min_x:A,max_x:e,min_y:C,max_y:I}}},{key:"hasSameParent",value:function(g,t){var A=this.parentReference[g.id],e=this.parentReference[t.id];if(void 0===A||void 0===e)return!1;for(var C=0;C<A.length;C++)for(var I=0;I<e.length;I++)if(A[C]==e[I])return!0;return!1}},{key:"inSameSubNetwork",value:function(g,t){return this.trees[g.id]===this.trees[t.id]}},{key:"getLevels",value:function(){return Lh(this.distributionOrdering)}},{key:"addToOrdering",value:function(g,t){void 0===this.distributionOrdering[t]&&(this.distributionOrdering[t]=[]);var A=!1,e=this.distributionOrdering[t];for(var C in e)if(e[C]===g){A=!0;break}A||(this.distributionOrdering[t].push(g),this.distributionIndex[g.id]=this.distributionOrdering[t].length-1)}}]),g}(),ZM=function(){function g(t){cn(this,g),this.body=t,this._resetRNG(Math.random()+":"+Qh()),this.setPhysics=!1,this.options={},this.optionsBackup={physics:{}},this.defaultOptions={randomSeed:void 0,improvedLayout:!0,clusterThreshold:150,hierarchical:{enabled:!1,levelSeparation:150,nodeSpacing:100,treeSpacing:200,blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:"UD",sortMethod:"hubsize"}},fe(this.options,this.defaultOptions),this.bindEventListeners()}return kd(g,[{key:"bindEventListeners",value:function(){var g=this;this.body.emitter.on("_dataChanged",(function(){g.setupHierarchicalLayout()})),this.body.emitter.on("_dataLoaded",(function(){g.layoutNetwork()})),this.body.emitter.on("_resetHierarchicalLayout",(function(){g.setupHierarchicalLayout()})),this.body.emitter.on("_adjustEdgesForHierarchicalLayout",(function(){if(!0===g.options.hierarchical.enabled){var t=g.direction.curveType();g.body.emitter.emit("_forceDisableDynamicCurves",t,!1)}}))}},{key:"setOptions",value:function(g,t){if(void 0!==g){var A=this.options.hierarchical,e=A.enabled;if(Xf(["randomSeed","improvedLayout","clusterThreshold"],this.options,g),dv(this.options,g,"hierarchical"),void 0!==g.randomSeed&&this._resetRNG(g.randomSeed),!0===A.enabled)return!0===e&&this.body.emitter.emit("refresh",!0),"RL"===A.direction||"DU"===A.direction?A.levelSeparation>0&&(A.levelSeparation*=-1):A.levelSeparation<0&&(A.levelSeparation*=-1),this.setDirectionStrategy(),this.body.emitter.emit("_resetHierarchicalLayout"),this.adaptAllOptionsForHierarchicalLayout(t);if(!0===e)return this.body.emitter.emit("refresh"),qf(t,this.optionsBackup)}return t}},{key:"_resetRNG",value:function(g){this.initialRandomSeed=g,this._rng=Ff(this.initialRandomSeed)}},{key:"adaptAllOptionsForHierarchicalLayout",value:function(g){if(!0===this.options.hierarchical.enabled){var t=this.optionsBackup.physics;void 0===g.physics||!0===g.physics?(g.physics={enabled:void 0===t.enabled||t.enabled,solver:"hierarchicalRepulsion"},t.enabled=void 0===t.enabled||t.enabled,t.solver=t.solver||"barnesHut"):"object"===yd(g.physics)?(t.enabled=void 0===g.physics.enabled||g.physics.enabled,t.solver=g.physics.solver||"barnesHut",g.physics.solver="hierarchicalRepulsion"):!1!==g.physics&&(t.solver="barnesHut",g.physics={solver:"hierarchicalRepulsion"});var A=this.direction.curveType();if(void 0===g.edges)this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},g.edges={smooth:!1};else if(void 0===g.edges.smooth)this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},g.edges.smooth=!1;else if("boolean"==typeof g.edges.smooth)this.optionsBackup.edges={smooth:g.edges.smooth},g.edges.smooth={enabled:g.edges.smooth,type:A};else{var e=g.edges.smooth;void 0!==e.type&&"dynamic"!==e.type&&(A=e.type),this.optionsBackup.edges={smooth:{enabled:void 0===e.enabled||e.enabled,type:void 0===e.type?"dynamic":e.type,roundness:void 0===e.roundness?.5:e.roundness,forceDirection:void 0!==e.forceDirection&&e.forceDirection}},g.edges.smooth={enabled:void 0===e.enabled||e.enabled,type:A,roundness:void 0===e.roundness?.5:e.roundness,forceDirection:void 0!==e.forceDirection&&e.forceDirection}}this.body.emitter.emit("_forceDisableDynamicCurves",A)}return g}},{key:"positionInitially",value:function(g){if(!0!==this.options.hierarchical.enabled){this._resetRNG(this.initialRandomSeed);for(var t=g.length+50,A=0;A<g.length;A++){var e=g[A],C=2*Math.PI*this._rng();void 0===e.x&&(e.x=t*Math.cos(C)),void 0===e.y&&(e.y=t*Math.sin(C))}}}},{key:"layoutNetwork",value:function(){if(!0!==this.options.hierarchical.enabled&&!0===this.options.improvedLayout){for(var g=this.body.nodeIndices,t=0,A=0;A<g.length;A++){!0===this.body.nodes[g[A]].predefinedPosition&&(t+=1)}if(t<.5*g.length){var e=0,C=this.options.clusterThreshold,I={clusterNodeProperties:{shape:"ellipse",label:"",group:"",font:{multi:!1}},clusterEdgeProperties:{label:"",font:{multi:!1},smooth:{enabled:!1}}};if(g.length>C){for(var i=g.length;g.length>C&&e<=10;){e+=1;var o=g.length;if(e%3==0?this.body.modules.clustering.clusterBridges(I):this.body.modules.clustering.clusterOutliers(I),o==g.length&&e%3!=0)return this._declusterAll(),this.body.emitter.emit("_layoutFailed"),void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")}this.body.modules.kamadaKawai.setOptions({springLength:Math.max(150,2*i)})}e>10&&console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result."),this.body.modules.kamadaKawai.solve(g,this.body.edgeIndices,!0),this._shiftToCenter();for(var n=0;n<g.length;n++){var r=this.body.nodes[g[n]];!1===r.predefinedPosition&&(r.x+=70*(.5-this._rng()),r.y+=70*(.5-this._rng()))}this._declusterAll(),this.body.emitter.emit("_repositionBezierNodes")}}}},{key:"_shiftToCenter",value:function(){for(var g=XR.getRangeCore(this.body.nodes,this.body.nodeIndices),t=XR.findCenter(g),A=0;A<this.body.nodeIndices.length;A++){var e=this.body.nodes[this.body.nodeIndices[A]];e.x-=t.x,e.y-=t.y}}},{key:"_declusterAll",value:function(){for(var g=!0;!0===g;){g=!1;for(var t=0;t<this.body.nodeIndices.length;t++)!0===this.body.nodes[this.body.nodeIndices[t]].isCluster&&(g=!0,this.body.modules.clustering.openCluster(this.body.nodeIndices[t],{},!1));!0===g&&this.body.emitter.emit("_dataChanged")}}},{key:"getSeed",value:function(){return this.initialRandomSeed}},{key:"setupHierarchicalLayout",value:function(){if(!0===this.options.hierarchical.enabled&&this.body.nodeIndices.length>0){var g,t,A=!1,e=!1;for(t in this.lastNodeOnLevel={},this.hierarchical=new SM,this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&(void 0!==(g=this.body.nodes[t]).options.level?(A=!0,this.hierarchical.levels[t]=g.options.level):e=!0);if(!0===e&&!0===A)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.");if(!0===e){var C=this.options.hierarchical.sortMethod;"hubsize"===C?this._determineLevelsByHubsize():"directed"===C?this._determineLevelsDirected():"custom"===C&&this._determineLevelsCustomCallback()}for(var I in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,I)&&this.hierarchical.ensureLevel(I);var i=this._getDistribution();this._generateMap(),this._placeNodesByHierarchy(i),this._condenseHierarchy(),this._shiftToCenter()}}},{key:"_condenseHierarchy",value:function(){var g=this,t=!1,A={},e=function(t,A){var e=g.hierarchical.trees;for(var C in e)Object.prototype.hasOwnProperty.call(e,C)&&e[C]===t&&g.direction.shift(C,A)},C=function(){for(var t=[],A=0;A<g.hierarchical.numTrees();A++)t.push(g.direction.getTreeSize(A));return t},I=function t(A,e){if(!e[A.id]&&(e[A.id]=!0,g.hierarchical.childrenReference[A.id])){var C=g.hierarchical.childrenReference[A.id];if(C.length>0)for(var I=0;I<C.length;I++)t(g.body.nodes[C[I]],e)}},i=function(t){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e9,e=1e9,C=1e9,I=1e9,i=-1e9;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var n=g.body.nodes[o],r=g.hierarchical.levels[n.id],s=g.direction.getPosition(n),a=lh(g._getSpaceAroundNode(n,t),2),d=a[0],h=a[1];e=Math.min(d,e),C=Math.min(h,C),r<=A&&(I=Math.min(s,I),i=Math.max(s,i))}return[I,i,e,C]},o=function(t,A,e){for(var C=g.hierarchical,I=0;I<A.length;I++){var i=A[I],o=C.distributionOrdering[i];if(o.length>1)for(var n=0;n<o.length-1;n++){var r=o[n],s=o[n+1];C.hasSameParent(r,s)&&C.inSameSubNetwork(r,s)&&t(r,s,e)}}},n=function(A,e){var C=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=g.direction.getPosition(A),n=g.direction.getPosition(e),r=Math.abs(n-o),s=g.options.hierarchical.nodeSpacing;if(r>s){var a={},d={};I(A,a),I(e,d);var h=function(t,A){var e=g.hierarchical.getMaxLevel(t.id),C=g.hierarchical.getMaxLevel(A.id);return Math.min(e,C)}(A,e),l=i(a,h),c=i(d,h),u=l[1],p=c[0],f=c[2];if(Math.abs(u-p)>s){var v=u-p+s;v<-f+s&&(v=-f+s),v<0&&(g._shiftBlock(e.id,v),t=!0,!0===C&&g._centerParent(e))}}},r=function(e,C){for(var o=C.id,n=C.edges,r=g.hierarchical.levels[C.id],s=g.options.hierarchical.levelSeparation*g.options.hierarchical.levelSeparation,a={},d=[],h=0;h<n.length;h++){var l=n[h];if(l.toId!=l.fromId){var c=l.toId==o?l.from:l.to;a[n[h].id]=c,g.hierarchical.levels[c.id]<r&&d.push(l)}}var u=function(t,A){for(var e=0,C=0;C<A.length;C++)if(void 0!==a[A[C].id]){var I=g.direction.getPosition(a[A[C].id])-t;e+=I/Math.sqrt(I*I+s)}return e},p=function(t,A){for(var e=0,C=0;C<A.length;C++)if(void 0!==a[A[C].id]){var I=g.direction.getPosition(a[A[C].id])-t;e-=s*Math.pow(I*I+s,-1.5)}return e},f=function(t,A){for(var e=g.direction.getPosition(C),I={},i=0;i<t;i++){var o=u(e,A),n=p(e,A);if(void 0!==I[e-=Math.max(-40,Math.min(40,Math.round(o/n)))])break;I[e]=i}return e},v=f(e,d);!function(e){var o=g.direction.getPosition(C);if(void 0===A[C.id]){var n={};I(C,n),A[C.id]=n}var r=i(A[C.id]),s=r[2],a=r[3],d=e-o,h=0;d>0?h=Math.min(d,a-g.options.hierarchical.nodeSpacing):d<0&&(h=-Math.min(-d,s-g.options.hierarchical.nodeSpacing)),0!=h&&(g._shiftBlock(C.id,h),t=!0)}(v),function(A){var e=g.direction.getPosition(C),I=lh(g._getSpaceAroundNode(C),2),i=I[0],o=I[1],n=A-e,r=e;n>0?r=Math.min(e+(o-g.options.hierarchical.nodeSpacing),A):n<0&&(r=Math.max(e-(i-g.options.hierarchical.nodeSpacing),A)),r!==e&&(g.direction.setPosition(C,r),t=!0)}(v=f(e,n))};!0===this.options.hierarchical.blockShifting&&(function(A){var e=g.hierarchical.getLevels();e=cl(e).call(e);for(var C=0;C<A&&(t=!1,o(n,e,!0),!0===t);C++);}(5),function(){for(var t in g.body.nodes)Object.prototype.hasOwnProperty.call(g.body.nodes,t)&&g._centerParent(g.body.nodes[t])}()),!0===this.options.hierarchical.edgeMinimization&&function(A){var e=g.hierarchical.getLevels();e=cl(e).call(e);for(var C=0;C<A;C++){t=!1;for(var I=0;I<e.length;I++)for(var i=e[I],o=g.hierarchical.distributionOrdering[i],n=0;n<o.length;n++)r(1e3,o[n]);if(!0!==t)break}}(20),!0===this.options.hierarchical.parentCentralization&&function(){var t=g.hierarchical.getLevels();t=cl(t).call(t);for(var A=0;A<t.length;A++)for(var e=t[A],C=g.hierarchical.distributionOrdering[e],I=0;I<C.length;I++)g._centerParent(C[I])}(),function(){for(var t=C(),A=0,I=0;I<t.length-1;I++){A+=t[I].max-t[I+1].min+g.options.hierarchical.treeSpacing,e(I+1,A)}}()}},{key:"_getSpaceAroundNode",value:function(g,t){var A=!0;void 0===t&&(A=!1);var e=this.hierarchical.levels[g.id];if(void 0!==e){var C=this.hierarchical.distributionIndex[g.id],I=this.direction.getPosition(g),i=this.hierarchical.distributionOrdering[e],o=1e9,n=1e9;if(0!==C){var r=i[C-1];if(!0===A&&void 0===t[r.id]||!1===A)o=I-this.direction.getPosition(r)}if(C!=i.length-1){var s=i[C+1];if(!0===A&&void 0===t[s.id]||!1===A){var a=this.direction.getPosition(s);n=Math.min(n,a-I)}}return[o,n]}return[0,0]}},{key:"_centerParent",value:function(g){if(this.hierarchical.parentReference[g.id])for(var t=this.hierarchical.parentReference[g.id],A=0;A<t.length;A++){var e=t[A],C=this.body.nodes[e],I=this.hierarchical.childrenReference[e];if(void 0!==I){var i=this._getCenterPosition(I),o=this.direction.getPosition(C),n=lh(this._getSpaceAroundNode(C),2),r=n[0],s=n[1],a=o-i;(a<0&&Math.abs(a)<s-this.options.hierarchical.nodeSpacing||a>0&&Math.abs(a)<r-this.options.hierarchical.nodeSpacing)&&this.direction.setPosition(C,i)}}}},{key:"_placeNodesByHierarchy",value:function(g){for(var t in this.positionedNodes={},g)if(Object.prototype.hasOwnProperty.call(g,t)){var A,e=Lh(g[t]);e=this._indexArrayToNodes(e),WO(A=this.direction).call(A,e);for(var C=0,I=0;I<e.length;I++){var i=e[I];if(void 0===this.positionedNodes[i.id]){var o=this.options.hierarchical.nodeSpacing,n=o*C;C>0&&(n=this.direction.getPosition(e[I-1])+o),this.direction.setPosition(i,n,t),this._validatePositionAndContinue(i,t,n),C++}}}}},{key:"_placeBranchNodes",value:function(g,t){var A,e=this.hierarchical.childrenReference[g];if(void 0!==e){for(var C=[],I=0;I<e.length;I++)C.push(this.body.nodes[e[I]]);WO(A=this.direction).call(A,C);for(var i=0;i<C.length;i++){var o=C[i],n=this.hierarchical.levels[o.id];if(!(n>t&&void 0===this.positionedNodes[o.id]))return;var r=this.options.hierarchical.nodeSpacing,s=void 0;s=0===i?this.direction.getPosition(this.body.nodes[g]):this.direction.getPosition(C[i-1])+r,this.direction.setPosition(o,s,n),this._validatePositionAndContinue(o,n,s)}var a=this._getCenterPosition(C);this.direction.setPosition(this.body.nodes[g],a,t)}}},{key:"_validatePositionAndContinue",value:function(g,t,A){if(this.hierarchical.isTree){if(void 0!==this.lastNodeOnLevel[t]){var e=this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[t]]);if(A-e<this.options.hierarchical.nodeSpacing){var C=e+this.options.hierarchical.nodeSpacing-A,I=this._findCommonParent(this.lastNodeOnLevel[t],g.id);this._shiftBlock(I.withChild,C)}}this.lastNodeOnLevel[t]=g.id,this.positionedNodes[g.id]=!0,this._placeBranchNodes(g.id,t)}}},{key:"_indexArrayToNodes",value:function(g){for(var t=[],A=0;A<g.length;A++)t.push(this.body.nodes[g[A]]);return t}},{key:"_getDistribution",value:function(){var g,t,A={};for(g in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,g)){t=this.body.nodes[g];var e=void 0===this.hierarchical.levels[g]?0:this.hierarchical.levels[g];this.direction.fix(t,e),void 0===A[e]&&(A[e]={}),A[e][g]=t}return A}},{key:"_getActiveEdges",value:function(g){var t=this,A=[];return tv(g.edges,(function(g){var e;-1!==Xc(e=t.body.edgeIndices).call(e,g.id)&&A.push(g)})),A}},{key:"_getHubSizes",value:function(){var g=this,t={};tv(this.body.nodeIndices,(function(A){var e=g.body.nodes[A],C=g._getActiveEdges(e).length;t[C]=!0}));var A=[];return tv(t,(function(g){A.push(Number(g))})),WO(A).call(A,(function(g,t){return t-g})),A}},{key:"_determineLevelsByHubsize",value:function(){for(var g=this,t=function(t,A){g.hierarchical.levelDownstream(t,A)},A=this._getHubSizes(),e=function(){var e=A[C];if(0===e)return 1;tv(g.body.nodeIndices,(function(A){var C=g.body.nodes[A];e===g._getActiveEdges(C).length&&g._crawlNetwork(t,A)}))},C=0;C<A.length&&!e();++C);}},{key:"_determineLevelsCustomCallback",value:function(){var g=this;this._crawlNetwork((function(t,A,e){var C=g.hierarchical.levels[t.id];void 0===C&&(C=g.hierarchical.levels[t.id]=1e5);var I=(XR.cloneOptions(t,"node"),XR.cloneOptions(A,"node"),void XR.cloneOptions(e,"edge"));g.hierarchical.levels[A.id]=C+I})),this.hierarchical.setMinLevelToZero(this.body.nodes)}},{key:"_determineLevelsDirected",value:function(){var g,t=this,A=LE(g=this.body.nodeIndices).call(g,(function(g,A){return g.set(A,t.body.nodes[A]),g}),new Fm);"roots"===this.options.hierarchical.shakeTowards?this.hierarchical.levels=function(g){return zM((function(t){var A,e;return RM(A=pc(e=t.edges).call(e,(function(t){return g.has(t.toId)}))).call(A,(function(g){return g.from===t}))}),(function(g,t){return t<g}),"to",g)}(A):this.hierarchical.levels=function(g){return zM((function(t){var A,e;return RM(A=pc(e=t.edges).call(e,(function(t){return g.has(t.toId)}))).call(A,(function(g){return g.to===t}))}),(function(g,t){return t>g}),"from",g)}(A),this.hierarchical.setMinLevelToZero(this.body.nodes)}},{key:"_generateMap",value:function(){var g=this;this._crawlNetwork((function(t,A){g.hierarchical.levels[A.id]>g.hierarchical.levels[t.id]&&g.hierarchical.addRelation(t.id,A.id)})),this.hierarchical.checkIfTree()}},{key:"_crawlNetwork",value:function(){var g=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},A=arguments.length>1?arguments[1]:void 0,e={},C=function A(C,I){if(void 0===e[C.id]){var i;g.hierarchical.setTreeIndex(C,I),e[C.id]=!0;for(var o=g._getActiveEdges(C),n=0;n<o.length;n++){var r=o[n];!0===r.connected&&(i=r.toId==C.id?r.from:r.to,C.id!=i.id&&(t(C,i,r),A(i,I)))}}};if(void 0===A)for(var I=0,i=0;i<this.body.nodeIndices.length;i++){var o=this.body.nodeIndices[i];if(void 0===e[o])C(this.body.nodes[o],I),I+=1}else{var n=this.body.nodes[A];if(void 0===n)return void console.error("Node not found:",A);C(n)}}},{key:"_shiftBlock",value:function(g,t){var A=this,e={};!function g(C){if(!e[C]){e[C]=!0,A.direction.shift(C,t);var I=A.hierarchical.childrenReference[C];if(void 0!==I)for(var i=0;i<I.length;i++)g(I[i])}}(g)}},{key:"_findCommonParent",value:function(g,t){var A=this,e={};return function g(t,e){var C=A.hierarchical.parentReference[e];if(void 0!==C)for(var I=0;I<C.length;I++){var i=C[I];t[i]=!0,g(t,i)}}(e,g),function g(t,e){var C=A.hierarchical.parentReference[e];if(void 0!==C)for(var I=0;I<C.length;I++){var i=C[I];if(void 0!==t[i])return{foundParent:i,withChild:e};var o=g(t,i);if(null!==o.foundParent)return o}return{foundParent:null,withChild:e}}(e,t)}},{key:"setDirectionStrategy",value:function(){var g="UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction;this.direction=g?new wM(this):new kM(this)}},{key:"_getCenterPosition",value:function(g){for(var t=1e9,A=-1e9,e=0;e<g.length;e++){var C=void 0;if(void 0!==g[e].id)C=g[e];else{var I=g[e];C=this.body.nodes[I]}var i=this.direction.getPosition(C);t=Math.min(t,i),A=Math.max(A,i)}return.5*(t+A)}}]),g}();function FM(g,t){var A=void 0!==uh&&ln(g)||g["@@iterator"];if(!A){if(Rh(g)||(A=function(g,t){var A;if(!g)return;if("string"==typeof g)return GM(g,t);var e=wh(A=Object.prototype.toString.call(g)).call(A,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return Uo(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return GM(g,t)}(g))||t&&g&&"number"==typeof g.length){A&&(g=A);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){A=A.call(g)},n:function(){var g=A.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==A.return||A.return()}finally{if(o)throw I}}}}function GM(g,t){(null==t||t>g.length)&&(t=g.length);for(var A=0,e=new Array(t);A<t;A++)e[A]=g[A];return e}_e('div.vis-network div.vis-manipulation{background:#fff;background:-moz-linear-gradient(top,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),color-stop(48%,#fcfcfc),color-stop(50%,#fafafa),color-stop(100%,#fcfcfc));background:-webkit-linear-gradient(top,#fff,#fcfcfc 48%,#fafafa 50%,#fcfcfc);background:-o-linear-gradient(top,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc 100%);background:-ms-linear-gradient(top,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc 100%);background:linear-gradient(180deg,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc);border:0 solid #d6d9d8;border-bottom:1px;box-sizing:content-box;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#fcfcfc",GradientType=0);height:28px;left:0;padding-top:4px;position:absolute;top:0;width:100%}div.vis-network button.vis-edit-mode,div.vis-network div.vis-edit-mode{height:30px;left:0;position:absolute;top:5px}div.vis-network button.vis-close{-webkit-touch-callout:none;background-color:transparent;background-image:url("data:image/png;base64,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/GMzLdsAADvGaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDItMTRUMTE6NTU6MzUrMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE0LTAyLTE0VDEyOjA1OjE3KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNC0wMi0xNFQxMjowNToxNyswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NjU0YmM5YmQtMWI2Yi1jYjRhLTllOWQtNWY2MzgxNDVjZjk0PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjk4MmM2MGIwLWUzZjMtMDk0MC04MjU0LTFiZTliNWE0ZTE4MzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjk4MmM2MGIwLWUzZjMtMDk0MC04MjU0LTFiZTliNWE0ZTE4MzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo5ODJjNjBiMC1lM2YzLTA5NDAtODI1NC0xYmU5YjVhNGUxODM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMTRUMTE6NTU6MzUrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjIxODYxNmM2LTM1MWMtNDI0OS04YWFkLWJkZDQ2ZTczNWE0NDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0xNFQxMTo1NTozNSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjU0YmM5YmQtMWI2Yi1jYjRhLTllOWQtNWY2MzgxNDVjZjk0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTE0VDEyOjA1OjE3KzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjc8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+cZUZMwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAA2ElEQVR42gDLADT/AS0tLUQFBQUVFxcXtPHx8fPl5eUNCAgITCkpKesEHx8fGgYGBjH+/v4a+Pj4qgQEBFU6OjodMTExzwQUFBSvEBAQEfX19SD19fVqNDQ0CElJSd/9/f2vAwEBAfrn5+fkBwcHLRYWFgsXFxfz29vbo9LS0uwDDQ0NDfPz81orKysXIyMj+ODg4Avh4eEa/f391gMkJCRYPz8/KUhISOMCAgKh8fHxHRsbGx4UFBQQBDk5OeY7Ozv7CAgItPb29vMEBASaJSUlTQ0NDesDAEwpT0Ko8Ri2AAAAAElFTkSuQmCC");background-position:20px 3px;background-repeat:no-repeat;border:none;cursor:pointer;height:30px;position:absolute;right:0;top:0;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:30px}div.vis-network button.vis-close:hover{opacity:.6}div.vis-network div.vis-edit-mode button.vis-button,div.vis-network div.vis-manipulation button.vis-button{-webkit-touch-callout:none;background-color:transparent;background-position:0 0;background-repeat:no-repeat;border:none;-moz-border-radius:15px;border-radius:15px;box-sizing:content-box;cursor:pointer;float:left;font-family:verdana;font-size:12px;height:24px;margin-left:10px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.vis-network div.vis-manipulation button.vis-button:hover{box-shadow:1px 1px 8px rgba(0,0,0,.2)}div.vis-network div.vis-manipulation button.vis-button:active{box-shadow:1px 1px 8px rgba(0,0,0,.5)}div.vis-network div.vis-manipulation button.vis-button.vis-back{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNTowMTowOSswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTU6MDE6MDkrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmI2YjQwMjVkLTAxNjQtMzU0OC1hOTdlLTQ4ZmYxMWM3NTYzMzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpmOWQ3OGY4ZC1lNzY0LTc1NDgtODZiNy1iNmQ1OGMzZDg2OTc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTU6MDE6MDkrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmI2YjQwMjVkLTAxNjQtMzU0OC1hOTdlLTQ4ZmYxMWM3NTYzMzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNTowMTowOSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOmY5ZDc4ZjhkLWU3NjQtNzU0OC04NmI3LWI2ZDU4YzNkODY5Nzwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4jq1U/AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAVTSURBVHjanFVfTFNnFP+d77ve8qeVFbBrpcVgRrCRFikFByLxwSAaE32oRCHD6JMxxhhn8G2RxxH3MsOTbyYsmCAxPMmMMYtkIUYmK60OO0qAK23BFlNob0uh3x7WS5jLZPpLbm6+k/P9zrm5v9855PF4UFhYCABgjIExBgAgIqRSqRIi6gDQRkQ1RGTB3wgR0e8AHgH4Sa/XR/EBiAiJRAJ04cIF5Ofng4g2n0gkUkxENwF0c843LzHGQEQQQkCLExEA9ALotVgsUQAQQmgNQhJCbF5kjCEUCl0moj4t5na7fTU1NUpVVVXUYrEkASAcDhe8efOmxOfzWScmJqoBdBNR99LS0hWz2dynNSSEAF28eBGFhYVgjCEcDn9HRD1EhIMHD3o9Hs9kWVlZAh9BKBQqGB4edr58+dKZ+6JbJpOpBwBWV1fB6+rqIMsyIpHIFcZYL2MMra2tY5cuXRrfuXNnBtvAYDBk3G63oqpqZm5uzgrgSDKZjBoMhueZTAbc5XIhFouVEtFTxhiOHTs2dv78eS8+Efv374+oqpqZnZ21cs5PJJPJPlmWkyynnBuMMTQ0NHi7uro+mVyDx+Pxulwu71ZOlkqlSonoJhGhvb39s8k1nDx50ss5hyRJN9PpdKlERB2aWjSVaEilUvzBgwcORVEs5eXloXPnzk1sV8BkMiUdDofP7/dXZ7PZDilnIhw4cGBeS1pbW2P37t1zBwKBikQiUUREWFhYsHHO0d7evm0Ru90+/+rVq2rO+XGJiJxEhMrKyhgAjI6OWoeHh5tWVla+4JzDZrO9bW5unhwcHGzz+/32np4e+xaDbfoHAMxmc6ijo2O0oqIiJkkSNjY2HBIRmRljMJvNyWfPnln7+/tPMMZQXl6+0NbW9qK2tjYcj8floaEhqKpq+HCkbD3PzMwYBgYG0NXV9UuusFna2kEgELAQEQ4dOvSis7PzN41Ar9dnrl27NqCNkv/C3bt3zy4tLVmICJxzEBFJRBQmorLFxcWCqqqq0Pj4eO3Y2JhbUZTdra2tL2pra8OJRGLHnTt3zkqS9K+huHU4EhHMZnMoGo0W5OIh7nK5jjLGKq1W69vDhw8rRqMxMjc3t2t5eXnX5ORklc/nM+fl5SWnpqa+0uv1K/n5+Ws6nW5NluXNd15e3ppOp1uz2WyzZ86cGQ0Gg6ZAIFCZzWZ/lYjokRDiuN/vt7W0tMw3NTUpbrd78P79++5gMFgRiUTKHj58WMYYQ3V19etTp05tq6Lp6Wkb5xxCiEfc7XZPM8a6FxcXTfX19a/1en2Gcy5qamreNjY2/qGq6joRZe12+9Tp06e3JY/FYgWPHz8+mhvr3/CWlpbk+vp6PmOseWVlBS6XS9GSJUkSdrs93NDQ8Oe+ffvC/8fJIyMjddFo9Esi6pVleVjT2m0A8Hq9zqGhIefnjoknT544A4GAM/eDbxMReFNTE0pKSpKqqsaI6Pj8/LxVVdWM3W6PfCr5xMTE1zllXS0uLn6aSqXAGxsbodPpoNfrn6uqCs75EUVRrJFIZMfevXsXdTrdxseIE4mEPDIyUu/3++tynd8yGo29RIR0Og26fv06ioqKwBgD5xzv3r27zBjrIyJIkgSHwzFZWVmp7NmzJ1ZaWpoAgGg0WqgoSvHMzIw1GAw6tvjhitFo7NPW5fv370Hd3d0oKCgA53zTQMvLy+VCiKuSJH0rSdLmztZytIWv5RPRD0T0Y3Fx8dzWfby6ugopHo//w4mcc8iyPMc5v5FOp7/PZrOdQohWInIC2C2EgBBigYi8Qoifs9lsv06nWyIiaFxagXg8jr8GAGxuIe7LBeWhAAAAAElFTkSuQmCC")}div.vis-network div.vis-manipulation div.vis-none:hover{box-shadow:1px 1px 8px transparent;cursor:default}div.vis-network div.vis-manipulation div.vis-none:active{box-shadow:1px 1px 8px transparent}div.vis-network div.vis-manipulation div.vis-none{line-height:23px;padding:0}div.vis-network div.vis-manipulation div.notification{font-weight:700;margin:2px}div.vis-network div.vis-manipulation button.vis-button.vis-add{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNDo0MDoyOSswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTQ6NDA6MjkrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjVkNWIwNmQwLTVmMjAtOGE0NC1hMzIwLWZmMTEzMzQwNDc0YjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo2OWVmYWE1NS01ZTI5LTIzNGUtYTUzMy0xNDkxYjM1NDNmYmE8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTQ6NDA6MjkrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjVkNWIwNmQwLTVmMjAtOGE0NC1hMzIwLWZmMTEzMzQwNDc0Yjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNDo0MDoyOSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjY5ZWZhYTU1LTVlMjktMjM0ZS1hNTMzLTE0OTFiMzU0M2ZiYTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5WKqp9AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAYXSURBVHjafFZtUFTXGX7e9z27sveuMCwYV8ElrA7YSFYHtJUPkaaI0aRqG8wP00zUzljDINNSA/2ROtpO24SxnahlxjYd7SSjmUkymcxYlDhQPzHGisEVp8HwYWCVVVgEsrsuLnL74+5uqTF9Z+7cO/d8PO95zvO851BlZSV0XQcAMDOYGQBARDhX3JRmMDYZwLPMWAzGHACYIgwS46oBNBNwtOL8CwE8EkSEUCgE2rJlC2w2G4go8Zwo/bMDgnoG6gxLfAAAYvPDMCCszKTAMIAGAhrWnf15AAAMwwARIRKJgDZv3gy73Q4iAjPjxIr9VVOMRhbAYKB8zvrO0llrfEsdKwLZek6YAPSFvtSu3GtLawu0ZJ6625SHGBQB1T88t6MxvopgMAjaunUrdF0HM+P4yv27DMYeJmB1RqW3Jnf3tQX2p0L4P9EXuqEd7PmDp+XuMU9sRbvXnnt1TxxACgoKYLVacbzsQDUJGkSATe6qi28uPtzusM6Kxie6NHLGUX3lxVUNX9StPHnn4wy3njuUYcu6n2pNi66avcEXnByP/nv8aiaIyrqz2gO5A9+9FI1GIfn5+WhZdTAdjFMkwMvZOy7uWnTAOz3L4Yk71m3t69fdfTDoUGTBeHTUfiHQ6lo7Z2OXJvpDAChKe+aOCdKRKWxZ2+1qb3yyd3GYmRkQ7GQBVs99wfv6on3eR2k4PdTkDEbH7IuS8/svld/561PJS/pDk1/bzwx94pze7xc5v/H+YPY6r5BAkdrJzODTK46lE6PeYEJt7u+8j+OZwCBiEAgAoNgKJoEQf6PvNvdrXgtZoNhSf7q0KZ3B2AQmVMze0Jmt54S/DcDCVig2NcvEUGxJAE4Pl+YOr0iv6BRSIPAmBeBZAmHlE2sH4p1uhrq1s0MnnEQMBsf8wRASAICQQCCITN1X7/sOuc0kgOVp3/fPs2WHv+coG7gQOJUnLGsUCTxEjPzUohEA+NfIWUdtx0+efzA1kSSkIGyBAQNCKgHAEBAJ3u79U7kiAcWoem/gb5Fd33nrH3kp+SMWtuAB+GllMJxMjCx9QRgA3uiqL5kwHiTlpxb3smlfMDGYGPP1hcMAkJvs8ScpfdJspdj+MK6Pf+5+u29vyb4lR4+BGEziVESAkEpw6Av1OhUpHCz4qOXbzFWz4Ncdj/v/o08Lt92ODDgZDCEFJYoUGH4mzugP92puPTf0pD3H7wvfdFZdqSxnMtWjoGAAmG9fOLxjwesdjT2/XzIQ7ks3sycYMSEwGHNtWf5bkX5NkYCJBxUBXiGV0XHvosOt54Zey33j/K+8P33++vjnbiGJbbLE+J9SANAb6nJ2B79wcUwETAwQQ7fMjPzMvfP8ja87HUIKMOiaAqMZhrGmLdAy78eZrwwsTS0eObTs+IdtgVanxBUExqGbb5VzrIISGIoUXsmqbgEhJldCQWqRf27SvPAn/o8XmgLhZsUkR4ll37mhk3n94Z4OlzY/7NLcYZfm7o1z2zT4vsvUNSXqprBCkmiTFbPX90/fh8GIT2sf+zTPdDMf4dVnNg4z+E0ixsGeBs9jd5ViSgLHjCb/peaR+MD3d4/ZJg2llyuG2Vwy7QWAs8PNnn1f7vkGSGxAzE6mk+kxkx/p/4unffSCR0hAoL1EBCYiPNdWNcwkNQTCR7feWX6g+7f/A7I8rcw/U6UEe0Ndrhc/W7mtL9ztmqlSgstSS/zTJ28dalpOpkRryrwbhwBACgsLMWPGDOT4ll3qyeqAkJTdCF7P/CrUY/GkLL1rE+2hTbSH8+0Lb/WEuhzhyaA905blf9Vd/895WnZwLHrPevir/cvOB1oLYpTtLrm6oYGIMDExAaqtrUVKSgqYGSKCk0WHq5ikkWEWtNL0imv5qUW+RclLRjJsrhBAuH1/QL8R7HR4xy5nescuP23E6hOA6mLv+sb4uTw6Ogqqq6uDpmkQkcStorX4XRcM1FjZ+kvFFjCJKU1WpkNJJUqIMtX1RyLeX3JtQ0JRhmGYZ/L27duRnJycuFGISOJ9pqh5lrB6iYgqGOxRrOaa54DcZmKvkJxk8JHC9rKh+KVhOsD4+Dj+MwADIf8n5m4xGwAAAABJRU5ErkJggg==")}div.vis-network div.vis-edit-mode button.vis-button.vis-edit,div.vis-network div.vis-manipulation button.vis-button.vis-edit{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNVQxNDoxMjoyNSswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDVUMTQ6MTI6MjUrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjY5OTM3ZGZjLTJjNzQtYTU0YS05OTIzLTQyMmZhNDNkMjljNDwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDozOWNhNzE5ZC03YzNlLTUyNGEtYmY1NS03NGVmMmM1MzE0YTc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDVUMTQ6MTI6MjUrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjY5OTM3ZGZjLTJjNzQtYTU0YS05OTIzLTQyMmZhNDNkMjljNDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNVQxNDoxMjoyNSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjM5Y2E3MTlkLTdjM2UtNTI0YS1iZjU1LTc0ZWYyYzUzMTRhNzwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4ykninAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAYpSURBVHjafFZtTFvnFX7Oea+NudiY2Hwam4CBlgQwXdKREDKUoYg0jbRJ29RJ2VZ1mjRFUxSpA3VTfkzJfkQbS7spU6rtx5Z2UtppScjaHxvLuiatWi2jLEoMIUDCh23g2gbj7+tPuPvhOurawPl1dc99n+c55z33fV46ceIEZFkGADAziAgAQERoe/9ZK4GPM/AcgbsIXAcABCgMvkfAqAa89eDoJyF8LogIqqqChoaGYDAYHr8kItS8uc8iIH6iAa9IkAo5EAQX8pqmgUVBCBggYFgDhv0/GAsBgKZpICJkMhnQ4OAgZFkGEYGZUXmp+0cS+CKBwWA0DVRPOg5Zl2q6zaHyJlnVAMQXVTkwHrUqH0Xsvn+tdQAAMQDgpPLS2MViFY8rkGUZzIzaS/t/xqCzGggtz9e697zsnKhoLUtim4jOq/LE6x7X0nsh16dEZ5a/O3a2SCAOHjwInU6Hujd6ThJ4mCDQ+b2G232v7v6vwarPbQn8MGlMr+X0kpE3Wr5Zt5hL5HPhqYSdQIfKJ+yhxDPKWC6Xg+jt7UXD5b5KBt1kCHS85Ljd8/On3NupfnhFaZj4rWff1B98B1R/hnUmKd36bdtCNl4g0en4edNE/cXwLq8qMTMIPAQwmo/WuHvObA8+9c58k/dKtD0TyZWXN5YGA7ej7epKxspM//7SoNOdWc/Jyq2wiwhDzPxT8cP0jys3VMM7OmL0/77zn4Ydui3b8uiK0jD7RrA77c9Wd57cefPpF+2T6bWsFPWkaiPTCWvTsZpHFU+XrS+8G3AR08F6X+1FJvBxQQzHQOWk2SmrW4FPX/U2LVwPuDZj+fJKl2khPpeyAqA9rzR/YqwuiWXX8taN/CabGkrVuq9YJlkQQDjOAJ5jAhz9Vt9W4N5/rNp8I+vtMV/aZm4zLnUNNt0urdYnF68HWoJj4Wo1mLGUNRr8LEgDgNqeCh8xQIKOsgC7iAjVe83rT9zQa8uNM28u70kspessu8q8zq/V3NcZpVzb9+0zmVhOvvvrhaMVzrJg0zeq7xMVCCwdpnWSGBqjUyJwLTFgbvxie3w31uoWR1Y74r60rdxZqrR8q85t2W2MGCp12bm/KC3hyaSTiMhxuGrKcahqpbjOaDOoEhOEoFqJQCCJvqA85I6bfTdDjQlf2lbxVNlS6wt19yy7jRHZZlDnrinNj/6sHMhnNw2Ogco7O79e5fm/xQywRBBCEAuwn4gQ96bkYj4Vyuq9N1Z3Bj4Od5bs0MXt/dZZ21ctiqFan174q985P+Lfp+U1g7XDON/1ctP458WlVjLyJhOISZE0wM0S1QfuRC3lTjkJAKKEtNC9eIOhSh9xHLZOJRZTFuXDsEoStLkR/768ummsaJG9Pb9oe+9J+xaeSVokiQDSJphAo5uaBuWjiKP4QTqS1cUWU7ayesN66wu22frD1vmVW6GW6T8u9eVjGyZzs+w78Nqu0a2mbvVu1KEJQAgeZRL0liQYyx+GOmKeQpu0rMYsAJPNEFGD2dLodLIy6c9Ys7G8yeSUl3tf2/X3rcBVJSOv34l3sCBogi7z1LH/rBHjl4IJ93/ncQFAnjeImJD0Z8zuCwu9q3djDXqTlAKID5xv+9t2R8n8VcUFBljQ8Gyfe40BYBM4DwDLt8Kue79ZcFkbzfEdbUbv+oN4c9KTtsfm1MbYQqqh+2zrVZYKs/7Ef+byimt1POYiJhDhPBFBIiIEXhxfs7/dfYoIF+auBfYTE/pebx/V8hqBP2ODvD34yvuh/WCAmU75Bx6sIgaI/v5+6PV6JLqUsYr7dpDAoehs0h73pHTWrvKgThYbRSt9UmSjef3MpaUvBz4O72UmADgTOPJguGiZor+/HyUlJWBmJFz+D8xTtlUiOpbwpmrmrweeSXrT+g11k4SBN3RGKUcAVCVdFhyP1nreDbY//NPyEXUlU/Pp4XYycGT6V0Ux2WwWdO7cOZSWlkII8diX7SPPNgDaKdbxoNAxwATBAEkEEgSWCEQAqPAMwqvMdCEwMO0tVqZpWsGTT58+DaPR+PhGIYQAAAgh0P7B3ioW/B0iGiCGiwXbCuOHFSJys6AbYFye2T+xWhT3WYJEIoH/DQBMw3kes8OJPgAAAABJRU5ErkJggg==")}div.vis-network div.vis-edit-mode button.vis-button.vis-edit.vis-edit-mode{background-color:#fcfcfc;border:1px solid #ccc}div.vis-network div.vis-manipulation button.vis-button.vis-connect{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNDozODo1NyswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTQ6Mzg6NTcrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjlmYjUwMDU0LWE3ODEtMWQ0OC05ZTllLTU2ZWQ5YzhlYjdjNjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo3ZWRhMjI0MC0yYTQxLTNlNDQtYWM2My1iNzNiYTE5OWI3Y2E8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTQ6Mzg6NTcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjlmYjUwMDU0LWE3ODEtMWQ0OC05ZTllLTU2ZWQ5YzhlYjdjNjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNDozODo1NyswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjdlZGEyMjQwLTJhNDEtM2U0NC1hYzYzLWI3M2JhMTk5YjdjYTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4ubxs+AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUtSURBVHjajJZ/bNT1Gcdfz/P53PV6B4W7VltLqdAaplIOiMOoyxxJCSs/Gv/yB4gzJroAosmmDklwkYWR0bQsdmkykoojTpcsWYLxD/lRZdMQkTHRtkLZRqG0tIVe7662vTu43n32x/VKZ/jh89cn38/zvN7P5/l88zwf2blzJz6fDwARQUSm1n8s31CM0/VAnbNmsUPuAsDpgEO+Bg4C7//iyv5hvmMiQiqVQpqamvB6vVNwEeG1JZtCBrYi/MrkAwDNgjhwAlbzICBLA0rDb0+/839C6XQaaWxspLCw8Dp86cbNmqVFJQddE6KzdjZ9D89g+B6fSyCOcyn1nxil+O9xKg5HqWFSHGXLjrP7W/ICqVQK2bNnDz6fDxFh65KNvxbHDhF4rJj2bXPo+IGfcW5h5xL4f99P+FCEMIAob75x9t0dAMlkElNXV4e1lteXbNqiQoMaeOFOjrdU868SD2luYyEP6dUh+sYmSHeOU6GO5Z8VLx5+NNZxIpPJ5AS2L3upROCoCvz8Lo7vnkf77cAHhpiz/zIL9vWz8L8p/NvupmM0Q7pjnAoLqz8tDrc8MnQqYVUVhVdF4LEg7b+rvDn8wDDlH0WoPpukLJImSBaMwjcJqmwWts2jPZLG/8kwYVFeVdXXZcFf4yVDc2cNKfBFmD9X+0ncCP58F48eG+Feo2CAUkvs4dl0V/uJvdXLiiV+ut++n7YLSfxPfMMG54ChzB3WIesVWB2i82bw1AR6fJR7C4VsfYiv6u/k3A9nEgP4zXke8DiYHyAOMK+QxPIgnZ9GqSHr1itQJ8DK2fTerDQ+S/bHRXQJaHSCwNIZ2Xh+7+S3VAmwNMBA/tuPZtErgKquUmdMWIFlRURvdamRNEXGwIWrlP47pTMzLiunxghGMwTLvcTWlHAp77s4QNSrYMQtss6ZMgWqCm5cHoDHO1nbk6K8zEN8+3zatv2Hn1b59EqJZdxmYUERg9P9KwpIiAOTdWUWBXuLzB/vZG3P1Un4PNp2d1MbmyD45TWCxuCsQm0x56bHGHFYEZwxok7toAA9Sfw3hCcoL/NOwi9QO5wmWO1j4JEgZxTkodmcWRGkf3pcX0r8xoAaBixKu4U5/xwndM+0tpAvS6mP+PZK2nb1UBvPEKwKMLDvPj4ESGc55lGy303sdJKQdZB2rkMdctAB/4gzN+/Q2ENNd4LyUi/xN+bTtquX2thk5nk4wI3gAF+OMNcA1nFQDfK+BY5GqbkwWabTY5QZhXWlnNx1ntrY1Rz87fuvw29m/Sn8J+PUGAFj5T19baA1IspuBZp7cx1x4SwG1cEf+lgRSROs8jGwb+Ht4QB/GSSsAhYano39LWIBxNEIbP14hPDuiyS2VtJuHXQlKKvxM/jiXDq/D/xPlwifGMkJZB2NIoKpr69nxeiZxLHicFSFVWfGqBidIP3LSjrWltD94CyufF/4kQgPuVz2Lz93+dDRa9eu5QQ8Hg8/iXee+Dy4CKMs7xqn4nwKz9IirhQqmVuB42m8ey+x7LMoD6iAON782eChhqmRuXfvXgKBAKqKqtI0/8nNKrQI4BVYXkzHgzPpC88gWuHL/caXrhLoGiN0apSKr0ZZRBZM7q2w5ZnLR1oAnHOMjY0hra2tFBQUYIyZmstvVT1Z6eDlAuEVq7merxmwueNPDXy9PvybjKP5mctHLk4/XTKZRJqbm/H7/VNw1VyEMYbW4FN3WNWnnchKoy5sHeVGBRX6VWi3ymFx7r11Ix8MTX/y5C2RSPC/AQB61erowbpqSwAAAABJRU5ErkJggg==")}div.vis-network div.vis-manipulation button.vis-button.vis-delete{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNDo0MTowNCswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTQ6NDE6MDQrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjc3NDkzYmUxLTEyZGItOTg0NC1iNDYyLTg2NGVmNGIzMzM3MTwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDowNmE3NWYwMy04MDdhLWUzNGYtYjk1Zi1jZGU2MjM0Mzg4OGY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTQ6NDE6MDQrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjc3NDkzYmUxLTEyZGItOTg0NC1iNDYyLTg2NGVmNGIzMzM3MTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNDo0MTowNCswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjA2YTc1ZjAzLTgwN2EtZTM0Zi1iOTVmLWNkZTYyMzQzODg4Zjwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4aYJzYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAYGSURBVHjalJZ7UJTnFcZ/73m/72PdJY1RbhoQp6lkXRAvmIYxdCUadLVOozPNtGObap1JsKipjiShbdoRbeKEiQHpQK3xj0xa03aamTbaTGyAYV1QGeqFi+JyiZFLAlmESBkWRmS3fyzslGkmnZ5/v/M873Oe75zzvqqoqAibzQaAiKCUAkApRdHIK/NFsx2NR91nOSILADDoJyzNaM4xxbtvPHh0iC+JiYkJ1OHDh4mJiUEpFSXPv/ziPC28TIiXDCOSrAClQDSEpsCwJPIhrEBRQpiSytXlQwDhcBilFPfu3UMVFxdjt9ujFTzfcLBADCoEEAFr1ZbrrNjch2vtEImPBgHob7fTcWE+bVXJNJ/NiFQlEGLvieXHKmYqGB8fRx05cgSbzYaIsPvywV8pKFaA7fGtLTzz61YWpo/xVTHQbufsq5lcez9zWuWhk5mvFwMEg0H0+vXrMU2Tn1wp3CtCiQ5DjGd3A/m/v8IDCZP8r4iNmyRrWx/j/5qktykZpXKzAjVDVxPzGqemptDr1q1jX3NRnIJarcDKK2hgR2ULXRfncv7UYv7xpovhnhiW5Mz+kefeSKO6LJ1A1xzEuk/Ojm4mRibpuZaMZW3OCtRUND60NmiICCIUShisx7a2sLMiQn4s77uEQgIabnqdfHIlgT1/qQeg8vs5dHhdCNB1wYn3RIiC995j26stjAbsNH+YiZJCESnS1Y/XxIXu8r4YIPv/VkVs3CTnTy2ms34xro1+sp9po6sxlTu34ultmsPVvy6is86FCHgO+DDs49zpjufBpCG+seYOC9OHaTidieicb9ouVAhKtouAseI710ma7pLuqwmgYfHqAFt+6WdLoQ/LBl11Lm7VudAa8vb72PCin9TlAWIsGGhLACD+kSAZnusYBii1XQAPYWDllt6ov2lrBkDBR2+6Ofuak2//3M+G/T4wAAPW7fPhKfRTVeqk9qQbFKRmDUTxS3N7QYGYmwzCkqklBGlPDEcTNv+sg9tNCbTXuvBWujE0bHrZj9JE1B/wU1Pm5PwJN6YBS9a2kVvQEcWnrh5GTFD3lxkYkqRMgYQlwVldUvDnen73LHTUuqitdKM0eAr9AFQfd1J/yo2aJn+2sn4Wdn5qEFODJskgBIjx5T0uCrQA08pnIjS9PERDjPnfOKXAMEBECUoGEIHBj+2zkt76UQ6dXheGAev3+cg74Kf6uJPqcicbfuond7cPy4SOiy7+tD9nFvZurx00KOk3CNEC+mE+vjSPBc7IWqgqTaPT60IMcO/xsXGa3HfKjRgRdbl7/KDg0jtubje6aHj7c7J3dgLQ2zoPwwQ91SooOQdAW1VKVMHty0kA5Bb48BycJn/LjWFGbLv4thvvb53kFvjJ+XEdWkPfjQVR/CcNKYgGMc8JWt5Fa2j+MIPPuyI2pa4IoHSkt6vLIuRaQ9q32khzt4GCxtNu6k46GeiIR2lIfDQQsafPzq1LGRGL9Gk9d+vrwewvfHPQOoexQVjxdB/auk/zmaUMdsfz6bVUtIalT7bxveP1ZHh6GPDPYeSzeD69kcpIfxymFWLNrka+ljhBTWkWwz2JiJT84YHnz2iPx0P20PkmRF5i6HYiwZFJsn/YzdezbzE3cQibY5xV266z6RfXohakb+xB9CjanCD9qTbW7Grk4WV38VZm0l6dhQiEw9taHSuDqrS0FIfDwXM3X9mHMsvRAk/sauDpQy38P+GtzOTGB9mEpkD0C2dS8n8zOjqK9ng8WJZFU+JTjasGvaCNXPpvJBPoMlm0OoDNMfWVxONfWNSUPUZ7TUQ56tCZlPwSgMnJSVRpaSmxsbFE1raw82ZxAZZRQUiBYUKGp5UlOX2krBzmoUVjiIKhHge9rfPo+Wcy3ZeXIYASgL1/X5RfMXMvj46OosrLy7HZbGitUUohIuzoem0RofALaOsghgWGjky0MiJTL8b0lOvI8hN1DKXKP0jd3TNTWDgcJhgMoo4ePYrD4Yi+KmaeLlprnrtXFo9h/AAlG1AqE8yFmBrC+jO0bgH9EVpO/1F2Dc5g//OAsbEx/j0Af+USsQynL1UAAAAASUVORK5CYII=")}div.vis-network div.vis-edit-mode div.vis-label,div.vis-network div.vis-manipulation div.vis-label{line-height:25px;margin:0 0 0 23px}div.vis-network div.vis-manipulation div.vis-separator-line{background-color:#bdbdbd;display:inline-block;float:left;height:21px;margin:0 7px 0 15px;width:1px}');var jM=function(){function g(t,A,e,C){var I,i,o=this;cn(this,g),this.body=t,this.canvas=A,this.selectionHandler=e,this.interactionHandler=C,this.editMode=!1,this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0,this._domEventListenerCleanupQueue=[],this.temporaryUIFunctions={},this.temporaryEventFunctions=[],this.touchTime=0,this.temporaryIds={nodes:[],edges:[]},this.guiEnabled=!1,this.inMode=!1,this.selectedControlNode=void 0,this.options={},this.defaultOptions={enabled:!1,initiallyActive:!1,addNode:!0,addEdge:!0,editNode:void 0,editEdge:!0,deleteNode:!0,deleteEdge:!0,controlNodeStyle:{shape:"dot",size:6,color:{background:"#ff0000",border:"#3c3c3c",highlight:{background:"#07f968",border:"#3c3c3c"}},borderWidth:2,borderWidthSelected:2}},fe(this.options,this.defaultOptions),this.body.emitter.on("destroy",(function(){o._clean()})),this.body.emitter.on("_dataChanged",je(I=this._restore).call(I,this)),this.body.emitter.on("_resetData",je(i=this._restore).call(i,this))}return kd(g,[{key:"_restore",value:function(){!1!==this.inMode&&(!0===this.options.initiallyActive?this.enableEditMode():this.disableEditMode())}},{key:"setOptions",value:function(g,t,A){void 0!==t&&(void 0!==t.locale?this.options.locale=t.locale:this.options.locale=A.locale,void 0!==t.locales?this.options.locales=t.locales:this.options.locales=A.locales),void 0!==g&&("boolean"==typeof g?this.options.enabled=g:(this.options.enabled=!0,qf(this.options,g)),!0===this.options.initiallyActive&&(this.editMode=!0),this._setup())}},{key:"toggleEditMode",value:function(){!0===this.editMode?this.disableEditMode():this.enableEditMode()}},{key:"enableEditMode",value:function(){this.editMode=!0,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="block",this.closeDiv.style.display="block",this.editModeDiv.style.display="none",this.showManipulatorToolbar())}},{key:"disableEditMode",value:function(){this.editMode=!1,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="none",this.closeDiv.style.display="none",this.editModeDiv.style.display="block",this._createEditButton())}},{key:"showManipulatorToolbar",value:function(){if(this._clean(),this.manipulationDOM={},!0===this.guiEnabled){var g,t;this.editMode=!0,this.manipulationDiv.style.display="block",this.closeDiv.style.display="block";var A=this.selectionHandler.getSelectedNodeCount(),e=this.selectionHandler.getSelectedEdgeCount(),C=A+e,I=this.options.locales[this.options.locale],i=!1;!1!==this.options.addNode&&(this._createAddNodeButton(I),i=!0),!1!==this.options.addEdge&&(!0===i?this._createSeperator(1):i=!0,this._createAddEdgeButton(I)),1===A&&"function"==typeof this.options.editNode?(!0===i?this._createSeperator(2):i=!0,this._createEditNodeButton(I)):1===e&&0===A&&!1!==this.options.editEdge&&(!0===i?this._createSeperator(3):i=!0,this._createEditEdgeButton(I)),0!==C&&(A>0&&!1!==this.options.deleteNode||0===A&&!1!==this.options.deleteEdge)&&(!0===i&&this._createSeperator(4),this._createDeleteButton(I)),this._bindElementEvents(this.closeDiv,je(g=this.toggleEditMode).call(g,this)),this._temporaryBindEvent("select",je(t=this.showManipulatorToolbar).call(t,this))}this.body.emitter.emit("_redraw")}},{key:"addNodeMode",value:function(){var g;if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="addNode",!0===this.guiEnabled){var t,A=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(A),this._createSeperator(),this._createDescription(A.addDescription||this.options.locales.en.addDescription),this._bindElementEvents(this.closeDiv,je(t=this.toggleEditMode).call(t,this))}this._temporaryBindEvent("click",je(g=this._performAddNode).call(g,this))}},{key:"editNode",value:function(){var g=this;!0!==this.editMode&&this.enableEditMode(),this._clean();var t=this.selectionHandler.getSelectedNodes()[0];if(void 0!==t){if(this.inMode="editNode","function"!=typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes.");if(!0!==t.isCluster){var A=qf({},t.options,!1);if(A.x=t.x,A.y=t.y,2!==this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)");this.options.editNode(A,(function(t){null!=t&&"editNode"===g.inMode&&g.body.data.nodes.getDataSet().update(t),g.showManipulatorToolbar()}))}else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)}else this.showManipulatorToolbar()}},{key:"addEdgeMode",value:function(){var g,t,A,e,C;if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="addEdge",!0===this.guiEnabled){var I,i=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(i),this._createSeperator(),this._createDescription(i.edgeDescription||this.options.locales.en.edgeDescription),this._bindElementEvents(this.closeDiv,je(I=this.toggleEditMode).call(I,this))}this._temporaryBindUI("onTouch",je(g=this._handleConnect).call(g,this)),this._temporaryBindUI("onDragEnd",je(t=this._finishConnect).call(t,this)),this._temporaryBindUI("onDrag",je(A=this._dragControlNode).call(A,this)),this._temporaryBindUI("onRelease",je(e=this._finishConnect).call(e,this)),this._temporaryBindUI("onDragStart",je(C=this._dragStartEdge).call(C,this)),this._temporaryBindUI("onHold",(function(){}))}},{key:"editEdgeMode",value:function(){if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="editEdge","object"!==yd(this.options.editEdge)||"function"!=typeof this.options.editEdge.editWithoutDrag||(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0],void 0===this.edgeBeingEditedId)){if(!0===this.guiEnabled){var g,t=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(t),this._createSeperator(),this._createDescription(t.editEdgeDescription||this.options.locales.en.editEdgeDescription),this._bindElementEvents(this.closeDiv,je(g=this.toggleEditMode).call(g,this))}if(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0],void 0!==this.edgeBeingEditedId){var A,e,C,I,i=this.body.edges[this.edgeBeingEditedId],o=this._getNewTargetNode(i.from.x,i.from.y),n=this._getNewTargetNode(i.to.x,i.to.y);this.temporaryIds.nodes.push(o.id),this.temporaryIds.nodes.push(n.id),this.body.nodes[o.id]=o,this.body.nodeIndices.push(o.id),this.body.nodes[n.id]=n,this.body.nodeIndices.push(n.id),this._temporaryBindUI("onTouch",je(A=this._controlNodeTouch).call(A,this)),this._temporaryBindUI("onTap",(function(){})),this._temporaryBindUI("onHold",(function(){})),this._temporaryBindUI("onDragStart",je(e=this._controlNodeDragStart).call(e,this)),this._temporaryBindUI("onDrag",je(C=this._controlNodeDrag).call(C,this)),this._temporaryBindUI("onDragEnd",je(I=this._controlNodeDragEnd).call(I,this)),this._temporaryBindUI("onMouseMove",(function(){})),this._temporaryBindEvent("beforeDrawing",(function(g){var t=i.edgeType.findBorderPositions(g);!1===o.selected&&(o.x=t.from.x,o.y=t.from.y),!1===n.selected&&(n.x=t.to.x,n.y=t.to.y)})),this.body.emitter.emit("_redraw")}else this.showManipulatorToolbar()}else{var r=this.body.edges[this.edgeBeingEditedId];this._performEditEdge(r.from.id,r.to.id)}}},{key:"deleteSelected",value:function(){var g=this;!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="delete";var t=this.selectionHandler.getSelectedNodeIds(),A=this.selectionHandler.getSelectedEdgeIds(),e=void 0;if(t.length>0){for(var C=0;C<t.length;C++)if(!0===this.body.nodes[t[C]].isCluster)return void alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError);"function"==typeof this.options.deleteNode&&(e=this.options.deleteNode)}else A.length>0&&"function"==typeof this.options.deleteEdge&&(e=this.options.deleteEdge);if("function"==typeof e){var I={nodes:t,edges:A};if(2!==e.length)throw new Error("The function for delete does not support two arguments (data, callback)");e(I,(function(t){null!=t&&"delete"===g.inMode?(g.body.data.edges.getDataSet().remove(t.edges),g.body.data.nodes.getDataSet().remove(t.nodes),g.body.emitter.emit("startSimulation"),g.showManipulatorToolbar()):(g.body.emitter.emit("startSimulation"),g.showManipulatorToolbar())}))}else this.body.data.edges.getDataSet().remove(A),this.body.data.nodes.getDataSet().remove(t),this.body.emitter.emit("startSimulation"),this.showManipulatorToolbar()}},{key:"_setup",value:function(){!0===this.options.enabled?(this.guiEnabled=!0,this._createWrappers(),!1===this.editMode?this._createEditButton():this.showManipulatorToolbar()):(this._removeManipulationDOM(),this.guiEnabled=!1)}},{key:"_createWrappers",value:function(){var g,t;(void 0===this.manipulationDiv&&(this.manipulationDiv=document.createElement("div"),this.manipulationDiv.className="vis-manipulation",!0===this.editMode?this.manipulationDiv.style.display="block":this.manipulationDiv.style.display="none",this.canvas.frame.appendChild(this.manipulationDiv)),void 0===this.editModeDiv&&(this.editModeDiv=document.createElement("div"),this.editModeDiv.className="vis-edit-mode",!0===this.editMode?this.editModeDiv.style.display="none":this.editModeDiv.style.display="block",this.canvas.frame.appendChild(this.editModeDiv)),void 0===this.closeDiv)&&(this.closeDiv=document.createElement("button"),this.closeDiv.className="vis-close",this.closeDiv.setAttribute("aria-label",null!==(g=null===(t=this.options.locales[this.options.locale])||void 0===t?void 0:t.close)&&void 0!==g?g:this.options.locales.en.close),this.closeDiv.style.display=this.manipulationDiv.style.display,this.canvas.frame.appendChild(this.closeDiv))}},{key:"_getNewTargetNode",value:function(g,t){var A=qf({},this.options.controlNodeStyle);A.id="targetNode"+rD(),A.hidden=!1,A.physics=!1,A.x=g,A.y=t;var e=this.body.functions.createNode(A);return e.shape.boundingBox={left:g,right:g,top:t,bottom:t},e}},{key:"_createEditButton",value:function(){var g;this._clean(),this.manipulationDOM={},Qf(this.editModeDiv);var t=this.options.locales[this.options.locale],A=this._createButton("editMode","vis-edit vis-edit-mode",t.edit||this.options.locales.en.edit);this.editModeDiv.appendChild(A),this._bindElementEvents(A,je(g=this.toggleEditMode).call(g,this))}},{key:"_clean",value:function(){this.inMode=!1,!0===this.guiEnabled&&(Qf(this.editModeDiv),Qf(this.manipulationDiv),this._cleanupDOMEventListeners()),this._cleanupTemporaryNodesAndEdges(),this._unbindTemporaryUIs(),this._unbindTemporaryEvents(),this.body.emitter.emit("restorePhysics")}},{key:"_cleanupDOMEventListeners",value:function(){var g,t,A=FM(Zl(g=this._domEventListenerCleanupQueue).call(g,0));try{for(A.s();!(t=A.n()).done;){(0,t.value)()}}catch(g){A.e(g)}finally{A.f()}}},{key:"_removeManipulationDOM",value:function(){this._clean(),Qf(this.manipulationDiv),Qf(this.editModeDiv),Qf(this.closeDiv),this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv),this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv),this.closeDiv&&this.canvas.frame.removeChild(this.closeDiv),this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0}},{key:"_createSeperator",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.manipulationDOM["seperatorLineDiv"+g]=document.createElement("div"),this.manipulationDOM["seperatorLineDiv"+g].className="vis-separator-line",this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+g])}},{key:"_createAddNodeButton",value:function(g){var t,A=this._createButton("addNode","vis-add",g.addNode||this.options.locales.en.addNode);this.manipulationDiv.appendChild(A),this._bindElementEvents(A,je(t=this.addNodeMode).call(t,this))}},{key:"_createAddEdgeButton",value:function(g){var t,A=this._createButton("addEdge","vis-connect",g.addEdge||this.options.locales.en.addEdge);this.manipulationDiv.appendChild(A),this._bindElementEvents(A,je(t=this.addEdgeMode).call(t,this))}},{key:"_createEditNodeButton",value:function(g){var t,A=this._createButton("editNode","vis-edit",g.editNode||this.options.locales.en.editNode);this.manipulationDiv.appendChild(A),this._bindElementEvents(A,je(t=this.editNode).call(t,this))}},{key:"_createEditEdgeButton",value:function(g){var t,A=this._createButton("editEdge","vis-edit",g.editEdge||this.options.locales.en.editEdge);this.manipulationDiv.appendChild(A),this._bindElementEvents(A,je(t=this.editEdgeMode).call(t,this))}},{key:"_createDeleteButton",value:function(g){var t,A;A=this.options.rtl?"vis-delete-rtl":"vis-delete";var e=this._createButton("delete",A,g.del||this.options.locales.en.del);this.manipulationDiv.appendChild(e),this._bindElementEvents(e,je(t=this.deleteSelected).call(t,this))}},{key:"_createBackButton",value:function(g){var t,A=this._createButton("back","vis-back",g.back||this.options.locales.en.back);this.manipulationDiv.appendChild(A),this._bindElementEvents(A,je(t=this.showManipulatorToolbar).call(t,this))}},{key:"_createButton",value:function(g,t,A){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"vis-label";return this.manipulationDOM[g+"Div"]=document.createElement("button"),this.manipulationDOM[g+"Div"].className="vis-button "+t,this.manipulationDOM[g+"Label"]=document.createElement("div"),this.manipulationDOM[g+"Label"].className=e,this.manipulationDOM[g+"Label"].innerText=A,this.manipulationDOM[g+"Div"].appendChild(this.manipulationDOM[g+"Label"]),this.manipulationDOM[g+"Div"]}},{key:"_createDescription",value:function(g){this.manipulationDOM.descriptionLabel=document.createElement("div"),this.manipulationDOM.descriptionLabel.className="vis-none",this.manipulationDOM.descriptionLabel.innerText=g,this.manipulationDiv.appendChild(this.manipulationDOM.descriptionLabel)}},{key:"_temporaryBindEvent",value:function(g,t){this.temporaryEventFunctions.push({event:g,boundFunction:t}),this.body.emitter.on(g,t)}},{key:"_temporaryBindUI",value:function(g,t){if(void 0===this.body.eventListeners[g])throw new Error("This UI function does not exist. Typo? You tried: "+g+" possible are: "+eu(Lh(this.body.eventListeners)));this.temporaryUIFunctions[g]=this.body.eventListeners[g],this.body.eventListeners[g]=t}},{key:"_unbindTemporaryUIs",value:function(){for(var g in this.temporaryUIFunctions)Object.prototype.hasOwnProperty.call(this.temporaryUIFunctions,g)&&(this.body.eventListeners[g]=this.temporaryUIFunctions[g],delete this.temporaryUIFunctions[g]);this.temporaryUIFunctions={}}},{key:"_unbindTemporaryEvents",value:function(){for(var g=0;g<this.temporaryEventFunctions.length;g++){var t=this.temporaryEventFunctions[g].event,A=this.temporaryEventFunctions[g].boundFunction;this.body.emitter.off(t,A)}this.temporaryEventFunctions=[]}},{key:"_bindElementEvents",value:function(g,t){var A=new Ev(g,{});AP(A,t),this._domEventListenerCleanupQueue.push((function(){A.destroy()}));var e=function(g){var A=g.keyCode,e=g.key;"Enter"!==e&&" "!==e&&13!==A&&32!==A||t()};g.addEventListener("keyup",e,!1),this._domEventListenerCleanupQueue.push((function(){g.removeEventListener("keyup",e,!1)}))}},{key:"_cleanupTemporaryNodesAndEdges",value:function(){for(var g=0;g<this.temporaryIds.edges.length;g++){var t;this.body.edges[this.temporaryIds.edges[g]].disconnect(),delete this.body.edges[this.temporaryIds.edges[g]];var A,e=Xc(t=this.body.edgeIndices).call(t,this.temporaryIds.edges[g]);if(-1!==e)Zl(A=this.body.edgeIndices).call(A,e,1)}for(var C=0;C<this.temporaryIds.nodes.length;C++){var I;delete this.body.nodes[this.temporaryIds.nodes[C]];var i,o=Xc(I=this.body.nodeIndices).call(I,this.temporaryIds.nodes[C]);if(-1!==o)Zl(i=this.body.nodeIndices).call(i,o,1)}this.temporaryIds={nodes:[],edges:[]}}},{key:"_controlNodeTouch",value:function(g){this.selectionHandler.unselectAll(),this.lastTouch=this.body.functions.getPointer(g.center),this.lastTouch.translation=fe({},this.body.view.translation)}},{key:"_controlNodeDragStart",value:function(){var g=this.lastTouch,t=this.selectionHandler._pointerToPositionObject(g),A=this.body.nodes[this.temporaryIds.nodes[0]],e=this.body.nodes[this.temporaryIds.nodes[1]],C=this.body.edges[this.edgeBeingEditedId];this.selectedControlNode=void 0;var I=A.isOverlappingWith(t),i=e.isOverlappingWith(t);!0===I?(this.selectedControlNode=A,C.edgeType.from=A):!0===i&&(this.selectedControlNode=e,C.edgeType.to=e),void 0!==this.selectedControlNode&&this.selectionHandler.selectObject(this.selectedControlNode),this.body.emitter.emit("_redraw")}},{key:"_controlNodeDrag",value:function(g){this.body.emitter.emit("disablePhysics");var t=this.body.functions.getPointer(g.center),A=this.canvas.DOMtoCanvas(t);void 0!==this.selectedControlNode?(this.selectedControlNode.x=A.x,this.selectedControlNode.y=A.y):this.interactionHandler.onDrag(g),this.body.emitter.emit("_redraw")}},{key:"_controlNodeDragEnd",value:function(g){var t=this.body.functions.getPointer(g.center),A=this.selectionHandler._pointerToPositionObject(t),e=this.body.edges[this.edgeBeingEditedId];if(void 0!==this.selectedControlNode){this.selectionHandler.unselectAll();for(var C=this.selectionHandler._getAllNodesOverlappingWith(A),I=void 0,i=C.length-1;i>=0;i--)if(C[i]!==this.selectedControlNode.id){I=this.body.nodes[C[i]];break}if(void 0!==I&&void 0!==this.selectedControlNode)if(!0===I.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var o=this.body.nodes[this.temporaryIds.nodes[0]];this.selectedControlNode.id===o.id?this._performEditEdge(I.id,e.to.id):this._performEditEdge(e.from.id,I.id)}else e.updateEdgeType(),this.body.emitter.emit("restorePhysics");this.body.emitter.emit("_redraw")}}},{key:"_handleConnect",value:function(g){if((new Date).valueOf()-this.touchTime>100){this.lastTouch=this.body.functions.getPointer(g.center),this.lastTouch.translation=fe({},this.body.view.translation),this.interactionHandler.drag.pointer=this.lastTouch,this.interactionHandler.drag.translation=this.lastTouch.translation;var t=this.lastTouch,A=this.selectionHandler.getNodeAt(t);if(void 0!==A)if(!0===A.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var e=this._getNewTargetNode(A.x,A.y);this.body.nodes[e.id]=e,this.body.nodeIndices.push(e.id);var C=this.body.functions.createEdge({id:"connectionEdge"+rD(),from:A.id,to:e.id,physics:!1,smooth:{enabled:!0,type:"continuous",roundness:.5}});this.body.edges[C.id]=C,this.body.edgeIndices.push(C.id),this.temporaryIds.nodes.push(e.id),this.temporaryIds.edges.push(C.id)}this.touchTime=(new Date).valueOf()}}},{key:"_dragControlNode",value:function(g){var t=this.body.functions.getPointer(g.center),A=this.selectionHandler._pointerToPositionObject(t),e=void 0;void 0!==this.temporaryIds.edges[0]&&(e=this.body.edges[this.temporaryIds.edges[0]].fromId);for(var C=this.selectionHandler._getAllNodesOverlappingWith(A),I=void 0,i=C.length-1;i>=0;i--){var o;if(-1===Xc(o=this.temporaryIds.nodes).call(o,C[i])){I=this.body.nodes[C[i]];break}}if(g.controlEdge={from:e,to:I?I.id:void 0},this.selectionHandler.generateClickEvent("controlNodeDragging",g,t),void 0!==this.temporaryIds.nodes[0]){var n=this.body.nodes[this.temporaryIds.nodes[0]];n.x=this.canvas._XconvertDOMtoCanvas(t.x),n.y=this.canvas._YconvertDOMtoCanvas(t.y),this.body.emitter.emit("_redraw")}else this.interactionHandler.onDrag(g)}},{key:"_finishConnect",value:function(g){var t=this.body.functions.getPointer(g.center),A=this.selectionHandler._pointerToPositionObject(t),e=void 0;void 0!==this.temporaryIds.edges[0]&&(e=this.body.edges[this.temporaryIds.edges[0]].fromId);for(var C=this.selectionHandler._getAllNodesOverlappingWith(A),I=void 0,i=C.length-1;i>=0;i--){var o;if(-1===Xc(o=this.temporaryIds.nodes).call(o,C[i])){I=this.body.nodes[C[i]];break}}this._cleanupTemporaryNodesAndEdges(),void 0!==I&&(!0===I.isCluster?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):void 0!==this.body.nodes[e]&&void 0!==this.body.nodes[I.id]&&this._performAddEdge(e,I.id)),g.controlEdge={from:e,to:I?I.id:void 0},this.selectionHandler.generateClickEvent("controlNodeDragEnd",g,t),this.body.emitter.emit("_redraw")}},{key:"_dragStartEdge",value:function(g){var t=this.lastTouch;this.selectionHandler.generateClickEvent("dragStart",g,t,void 0,!0)}},{key:"_performAddNode",value:function(g){var t=this,A={id:rD(),x:g.pointer.canvas.x,y:g.pointer.canvas.y,label:"new"};if("function"==typeof this.options.addNode){if(2!==this.options.addNode.length)throw this.showManipulatorToolbar(),new Error("The function for add does not support two arguments (data,callback)");this.options.addNode(A,(function(g){null!=g&&"addNode"===t.inMode&&t.body.data.nodes.getDataSet().add(g),t.showManipulatorToolbar()}))}else this.body.data.nodes.getDataSet().add(A),this.showManipulatorToolbar()}},{key:"_performAddEdge",value:function(g,t){var A=this,e={from:g,to:t};if("function"==typeof this.options.addEdge){if(2!==this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)");this.options.addEdge(e,(function(g){null!=g&&"addEdge"===A.inMode&&(A.body.data.edges.getDataSet().add(g),A.selectionHandler.unselectAll(),A.showManipulatorToolbar())}))}else this.body.data.edges.getDataSet().add(e),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}},{key:"_performEditEdge",value:function(g,t){var A=this,e={id:this.edgeBeingEditedId,from:g,to:t,label:this.body.data.edges.get(this.edgeBeingEditedId).label},C=this.options.editEdge;if("object"===yd(C)&&(C=C.editWithoutDrag),"function"==typeof C){if(2!==C.length)throw new Error("The function for edit does not support two arguments (data, callback)");C(e,(function(g){null==g||"editEdge"!==A.inMode?(A.body.edges[e.id].updateEdgeType(),A.body.emitter.emit("_redraw"),A.showManipulatorToolbar()):(A.body.data.edges.getDataSet().update(g),A.selectionHandler.unselectAll(),A.showManipulatorToolbar())}))}else this.body.data.edges.getDataSet().update(e),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}}]),g}(),LM="string",VM="boolean",YM="number",WM="array",QM="object",UM=["arrow","bar","box","circle","crow","curve","diamond","image","inv_curve","inv_triangle","triangle","vee"],_M={borderWidth:{number:YM},borderWidthSelected:{number:YM,undefined:"undefined"},brokenImage:{string:LM,undefined:"undefined"},chosen:{label:{boolean:VM,function:"function"},node:{boolean:VM,function:"function"},__type__:{object:QM,boolean:VM}},color:{border:{string:LM},background:{string:LM},highlight:{border:{string:LM},background:{string:LM},__type__:{object:QM,string:LM}},hover:{border:{string:LM},background:{string:LM},__type__:{object:QM,string:LM}},__type__:{object:QM,string:LM}},opacity:{number:YM,undefined:"undefined"},fixed:{x:{boolean:VM},y:{boolean:VM},__type__:{object:QM,boolean:VM}},font:{align:{string:LM},color:{string:LM},size:{number:YM},face:{string:LM},background:{string:LM},strokeWidth:{number:YM},strokeColor:{string:LM},vadjust:{number:YM},multi:{boolean:VM,string:LM},bold:{color:{string:LM},size:{number:YM},face:{string:LM},mod:{string:LM},vadjust:{number:YM},__type__:{object:QM,string:LM}},boldital:{color:{string:LM},size:{number:YM},face:{string:LM},mod:{string:LM},vadjust:{number:YM},__type__:{object:QM,string:LM}},ital:{color:{string:LM},size:{number:YM},face:{string:LM},mod:{string:LM},vadjust:{number:YM},__type__:{object:QM,string:LM}},mono:{color:{string:LM},size:{number:YM},face:{string:LM},mod:{string:LM},vadjust:{number:YM},__type__:{object:QM,string:LM}},__type__:{object:QM,string:LM}},group:{string:LM,number:YM,undefined:"undefined"},heightConstraint:{minimum:{number:YM},valign:{string:LM},__type__:{object:QM,boolean:VM,number:YM}},hidden:{boolean:VM},icon:{face:{string:LM},code:{string:LM},size:{number:YM},color:{string:LM},weight:{string:LM,number:YM},__type__:{object:QM}},id:{string:LM,number:YM},image:{selected:{string:LM,undefined:"undefined"},unselected:{string:LM,undefined:"undefined"},__type__:{object:QM,string:LM}},imagePadding:{top:{number:YM},right:{number:YM},bottom:{number:YM},left:{number:YM},__type__:{object:QM,number:YM}},label:{string:LM,undefined:"undefined"},labelHighlightBold:{boolean:VM},level:{number:YM,undefined:"undefined"},margin:{top:{number:YM},right:{number:YM},bottom:{number:YM},left:{number:YM},__type__:{object:QM,number:YM}},mass:{number:YM},physics:{boolean:VM},scaling:{min:{number:YM},max:{number:YM},label:{enabled:{boolean:VM},min:{number:YM},max:{number:YM},maxVisible:{number:YM},drawThreshold:{number:YM},__type__:{object:QM,boolean:VM}},customScalingFunction:{function:"function"},__type__:{object:QM}},shadow:{enabled:{boolean:VM},color:{string:LM},size:{number:YM},x:{number:YM},y:{number:YM},__type__:{object:QM,boolean:VM}},shape:{string:["custom","ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","square","icon","hexagon"]},ctxRenderer:{function:"function"},shapeProperties:{borderDashes:{boolean:VM,array:WM},borderRadius:{number:YM},interpolation:{boolean:VM},useImageSize:{boolean:VM},useBorderWithImage:{boolean:VM},coordinateOrigin:{string:["center","top-left"]},__type__:{object:QM}},size:{number:YM},title:{string:LM,dom:"dom",undefined:"undefined"},value:{number:YM,undefined:"undefined"},widthConstraint:{minimum:{number:YM},maximum:{number:YM},__type__:{object:QM,boolean:VM,number:YM}},x:{number:YM},y:{number:YM},__type__:{object:QM}},KM={configure:{enabled:{boolean:VM},filter:{boolean:VM,string:LM,array:WM,function:"function"},container:{dom:"dom"},showButton:{boolean:VM},__type__:{object:QM,boolean:VM,string:LM,array:WM,function:"function"}},edges:{arrows:{to:{enabled:{boolean:VM},scaleFactor:{number:YM},type:{string:UM},imageHeight:{number:YM},imageWidth:{number:YM},src:{string:LM},__type__:{object:QM,boolean:VM}},middle:{enabled:{boolean:VM},scaleFactor:{number:YM},type:{string:UM},imageWidth:{number:YM},imageHeight:{number:YM},src:{string:LM},__type__:{object:QM,boolean:VM}},from:{enabled:{boolean:VM},scaleFactor:{number:YM},type:{string:UM},imageWidth:{number:YM},imageHeight:{number:YM},src:{string:LM},__type__:{object:QM,boolean:VM}},__type__:{string:["from","to","middle"],object:QM}},endPointOffset:{from:{number:YM},to:{number:YM},__type__:{object:QM,number:YM}},arrowStrikethrough:{boolean:VM},background:{enabled:{boolean:VM},color:{string:LM},size:{number:YM},dashes:{boolean:VM,array:WM},__type__:{object:QM,boolean:VM}},chosen:{label:{boolean:VM,function:"function"},edge:{boolean:VM,function:"function"},__type__:{object:QM,boolean:VM}},color:{color:{string:LM},highlight:{string:LM},hover:{string:LM},inherit:{string:["from","to","both"],boolean:VM},opacity:{number:YM},__type__:{object:QM,string:LM}},dashes:{boolean:VM,array:WM},font:{color:{string:LM},size:{number:YM},face:{string:LM},background:{string:LM},strokeWidth:{number:YM},strokeColor:{string:LM},align:{string:["horizontal","top","middle","bottom"]},vadjust:{number:YM},multi:{boolean:VM,string:LM},bold:{color:{string:LM},size:{number:YM},face:{string:LM},mod:{string:LM},vadjust:{number:YM},__type__:{object:QM,string:LM}},boldital:{color:{string:LM},size:{number:YM},face:{string:LM},mod:{string:LM},vadjust:{number:YM},__type__:{object:QM,string:LM}},ital:{color:{string:LM},size:{number:YM},face:{string:LM},mod:{string:LM},vadjust:{number:YM},__type__:{object:QM,string:LM}},mono:{color:{string:LM},size:{number:YM},face:{string:LM},mod:{string:LM},vadjust:{number:YM},__type__:{object:QM,string:LM}},__type__:{object:QM,string:LM}},hidden:{boolean:VM},hoverWidth:{function:"function",number:YM},label:{string:LM,undefined:"undefined"},labelHighlightBold:{boolean:VM},length:{number:YM,undefined:"undefined"},physics:{boolean:VM},scaling:{min:{number:YM},max:{number:YM},label:{enabled:{boolean:VM},min:{number:YM},max:{number:YM},maxVisible:{number:YM},drawThreshold:{number:YM},__type__:{object:QM,boolean:VM}},customScalingFunction:{function:"function"},__type__:{object:QM}},selectionWidth:{function:"function",number:YM},selfReferenceSize:{number:YM},selfReference:{size:{number:YM},angle:{number:YM},renderBehindTheNode:{boolean:VM},__type__:{object:QM}},shadow:{enabled:{boolean:VM},color:{string:LM},size:{number:YM},x:{number:YM},y:{number:YM},__type__:{object:QM,boolean:VM}},smooth:{enabled:{boolean:VM},type:{string:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"]},roundness:{number:YM},forceDirection:{string:["horizontal","vertical","none"],boolean:VM},__type__:{object:QM,boolean:VM}},title:{string:LM,undefined:"undefined"},width:{number:YM},widthConstraint:{maximum:{number:YM},__type__:{object:QM,boolean:VM,number:YM}},value:{number:YM,undefined:"undefined"},__type__:{object:QM}},groups:{useDefaultGroups:{boolean:VM},__any__:_M,__type__:{object:QM}},interaction:{dragNodes:{boolean:VM},dragView:{boolean:VM},hideEdgesOnDrag:{boolean:VM},hideEdgesOnZoom:{boolean:VM},hideNodesOnDrag:{boolean:VM},hover:{boolean:VM},keyboard:{enabled:{boolean:VM},speed:{x:{number:YM},y:{number:YM},zoom:{number:YM},__type__:{object:QM}},bindToWindow:{boolean:VM},autoFocus:{boolean:VM},__type__:{object:QM,boolean:VM}},multiselect:{boolean:VM},navigationButtons:{boolean:VM},selectable:{boolean:VM},selectConnectedEdges:{boolean:VM},hoverConnectedEdges:{boolean:VM},tooltipDelay:{number:YM},zoomView:{boolean:VM},zoomSpeed:{number:YM},__type__:{object:QM}},layout:{randomSeed:{undefined:"undefined",number:YM,string:LM},improvedLayout:{boolean:VM},clusterThreshold:{number:YM},hierarchical:{enabled:{boolean:VM},levelSeparation:{number:YM},nodeSpacing:{number:YM},treeSpacing:{number:YM},blockShifting:{boolean:VM},edgeMinimization:{boolean:VM},parentCentralization:{boolean:VM},direction:{string:["UD","DU","LR","RL"]},sortMethod:{string:["hubsize","directed"]},shakeTowards:{string:["leaves","roots"]},__type__:{object:QM,boolean:VM}},__type__:{object:QM}},manipulation:{enabled:{boolean:VM},initiallyActive:{boolean:VM},addNode:{boolean:VM,function:"function"},addEdge:{boolean:VM,function:"function"},editNode:{function:"function"},editEdge:{editWithoutDrag:{function:"function"},__type__:{object:QM,boolean:VM,function:"function"}},deleteNode:{boolean:VM,function:"function"},deleteEdge:{boolean:VM,function:"function"},controlNodeStyle:_M,__type__:{object:QM,boolean:VM}},nodes:_M,physics:{enabled:{boolean:VM},barnesHut:{theta:{number:YM},gravitationalConstant:{number:YM},centralGravity:{number:YM},springLength:{number:YM},springConstant:{number:YM},damping:{number:YM},avoidOverlap:{number:YM},__type__:{object:QM}},forceAtlas2Based:{theta:{number:YM},gravitationalConstant:{number:YM},centralGravity:{number:YM},springLength:{number:YM},springConstant:{number:YM},damping:{number:YM},avoidOverlap:{number:YM},__type__:{object:QM}},repulsion:{centralGravity:{number:YM},springLength:{number:YM},springConstant:{number:YM},nodeDistance:{number:YM},damping:{number:YM},__type__:{object:QM}},hierarchicalRepulsion:{centralGravity:{number:YM},springLength:{number:YM},springConstant:{number:YM},nodeDistance:{number:YM},damping:{number:YM},avoidOverlap:{number:YM},__type__:{object:QM}},maxVelocity:{number:YM},minVelocity:{number:YM},solver:{string:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"]},stabilization:{enabled:{boolean:VM},iterations:{number:YM},updateInterval:{number:YM},onlyDynamicEdges:{boolean:VM},fit:{boolean:VM},__type__:{object:QM,boolean:VM}},timestep:{number:YM},adaptiveTimestep:{boolean:VM},wind:{x:{number:YM},y:{number:YM},__type__:{object:QM}},__type__:{object:QM,boolean:VM}},autoResize:{boolean:VM},clickToUse:{boolean:VM},locale:{string:LM},locales:{__any__:{any:"any"},__type__:{object:QM}},height:{string:LM},width:{string:LM},__type__:{object:QM}},HM={nodes:{borderWidth:[1,0,10,1],borderWidthSelected:[2,0,10,1],color:{border:["color","#2B7CE9"],background:["color","#97C2FC"],highlight:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]},hover:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]}},opacity:[0,0,1,.1],fixed:{x:!1,y:!1},font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[0,0,50,1],strokeColor:["color","#ffffff"]},hidden:!1,labelHighlightBold:!0,physics:!0,scaling:{min:[10,0,200,1],max:[30,0,200,1],label:{enabled:!1,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},shape:["ellipse","box","circle","database","diamond","dot","square","star","text","triangle","triangleDown","hexagon"],shapeProperties:{borderDashes:!1,borderRadius:[6,0,20,1],interpolation:!0,useImageSize:!1},size:[25,0,200,1]},edges:{arrows:{to:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},middle:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},from:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"}},endPointOffset:{from:[0,-10,10,1],to:[0,-10,10,1]},arrowStrikethrough:!0,color:{color:["color","#848484"],highlight:["color","#848484"],hover:["color","#848484"],inherit:["from","to","both",!0,!1],opacity:[1,0,1,.05]},dashes:!1,font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[2,0,50,1],strokeColor:["color","#ffffff"],align:["horizontal","top","middle","bottom"]},hidden:!1,hoverWidth:[1.5,0,5,.1],labelHighlightBold:!0,physics:!0,scaling:{min:[1,0,100,1],max:[15,0,100,1],label:{enabled:!0,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},selectionWidth:[1.5,0,5,.1],selfReferenceSize:[20,0,200,1],selfReference:{size:[20,0,200,1],angle:[Math.PI/2,-6*Math.PI,6*Math.PI,Math.PI/8],renderBehindTheNode:!0},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},smooth:{enabled:!0,type:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"],forceDirection:["horizontal","vertical","none"],roundness:[.5,0,1,.05]},width:[1,0,30,1]},layout:{hierarchical:{enabled:!1,levelSeparation:[150,20,500,5],nodeSpacing:[100,20,500,5],treeSpacing:[200,20,500,5],blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:["UD","DU","LR","RL"],sortMethod:["hubsize","directed"],shakeTowards:["leaves","roots"]}},interaction:{dragNodes:!0,dragView:!0,hideEdgesOnDrag:!1,hideEdgesOnZoom:!1,hideNodesOnDrag:!1,hover:!1,keyboard:{enabled:!1,speed:{x:[10,0,40,1],y:[10,0,40,1],zoom:[.02,0,.1,.005]},bindToWindow:!0,autoFocus:!0},multiselect:!1,navigationButtons:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0,tooltipDelay:[300,0,1e3,25],zoomView:!0,zoomSpeed:[1,.1,2,.1]},manipulation:{enabled:!1,initiallyActive:!1},physics:{enabled:!0,barnesHut:{theta:[.5,.1,1,.05],gravitationalConstant:[-2e3,-3e4,0,50],centralGravity:[.3,0,10,.05],springLength:[95,0,500,5],springConstant:[.04,0,1.2,.005],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},forceAtlas2Based:{theta:[.5,.1,1,.05],gravitationalConstant:[-50,-500,0,1],centralGravity:[.01,0,1,.005],springLength:[95,0,500,5],springConstant:[.08,0,1.2,.005],damping:[.4,0,1,.01],avoidOverlap:[0,0,1,.01]},repulsion:{centralGravity:[.2,0,10,.05],springLength:[200,0,500,5],springConstant:[.05,0,1.2,.005],nodeDistance:[100,0,500,5],damping:[.09,0,1,.01]},hierarchicalRepulsion:{centralGravity:[.2,0,10,.05],springLength:[100,0,500,5],springConstant:[.01,0,1.2,.005],nodeDistance:[120,0,500,5],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},maxVelocity:[50,0,150,1],minVelocity:[.1,.01,.5,.01],solver:["barnesHut","forceAtlas2Based","repulsion","hierarchicalRepulsion"],timestep:[.5,.01,1,.01],wind:{x:[0,-10,10,.1],y:[0,-10,10,.1]}}},XM=function(g,t,A){var e;return!(!Ic(g).call(g,"physics")||!Ic(e=HM.physics.solver).call(e,t)||A.physics.solver===t||"wind"===t)},JM=Object.freeze({__proto__:null,allOptions:KM,configuratorHideOption:XM,configureOptions:HM}),qM=function(){function g(){cn(this,g)}return kd(g,[{key:"getDistances",value:function(g,t,A){for(var e={},C=g.edges,I=0;I<t.length;I++){var i={};e[t[I]]=i;for(var o=0;o<t.length;o++)i[t[o]]=I==o?0:1e9}for(var n=0;n<A.length;n++){var r=C[A[n]];!0===r.connected&&void 0!==e[r.fromId]&&void 0!==e[r.toId]&&(e[r.fromId][r.toId]=1,e[r.toId][r.fromId]=1)}for(var s=t.length,a=0;a<s;a++)for(var d=t[a],h=e[d],l=0;l<s-1;l++)for(var c=t[l],u=e[c],p=l+1;p<s;p++){var f=t[p],v=e[f],y=Math.min(u[f],u[d]+h[f]);u[f]=y,v[c]=y}return e}}]),g}(),$M=function(){function g(t,A,e){cn(this,g),this.body=t,this.springLength=A,this.springConstant=e,this.distanceSolver=new qM}return kd(g,[{key:"setOptions",value:function(g){g&&(g.springLength&&(this.springLength=g.springLength),g.springConstant&&(this.springConstant=g.springConstant))}},{key:"solve",value:function(g,t){var A=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=this.distanceSolver.getDistances(this.body,g,t);this._createL_matrix(e),this._createK_matrix(e),this._createE_matrix();for(var C=0,I=Math.max(1e3,Math.min(10*this.body.nodeIndices.length,6e3)),i=1e9,o=0,n=0,r=0,s=0,a=0;i>.01&&C<I;){C+=1;var d=lh(this._getHighestEnergyNode(A),4);for(o=d[0],i=d[1],n=d[2],r=d[3],s=i,a=0;s>1&&a<5;){a+=1,this._moveNode(o,n,r);var h=lh(this._getEnergy(o),3);s=h[0],n=h[1],r=h[2]}}}},{key:"_getHighestEnergyNode",value:function(g){for(var t=this.body.nodeIndices,A=this.body.nodes,e=0,C=t[0],I=0,i=0,o=0;o<t.length;o++){var n=t[o];if(!0!==A[n].predefinedPosition||!0===A[n].isCluster&&!0===g||!0!==A[n].options.fixed.x||!0!==A[n].options.fixed.y){var r=lh(this._getEnergy(n),3),s=r[0],a=r[1],d=r[2];e<s&&(e=s,C=n,I=a,i=d)}}return[C,e,I,i]}},{key:"_getEnergy",value:function(g){var t=lh(this.E_sums[g],2),A=t[0],e=t[1];return[Math.sqrt(Math.pow(A,2)+Math.pow(e,2)),A,e]}},{key:"_moveNode",value:function(g,t,A){for(var e=this.body.nodeIndices,C=this.body.nodes,I=0,i=0,o=0,n=C[g].x,r=C[g].y,s=this.K_matrix[g],a=this.L_matrix[g],d=0;d<e.length;d++){var h=e[d];if(h!==g){var l=C[h].x,c=C[h].y,u=s[h],p=a[h],f=1/Math.pow(Math.pow(n-l,2)+Math.pow(r-c,2),1.5);I+=u*(1-p*Math.pow(r-c,2)*f),i+=u*(p*(n-l)*(r-c)*f),o+=u*(1-p*Math.pow(n-l,2)*f)}}var v=(t/I+A/i)/(i/I-o/i),y=-(i*v+t)/I;C[g].x+=y,C[g].y+=v,this._updateE_matrix(g)}},{key:"_createL_matrix",value:function(g){var t=this.body.nodeIndices,A=this.springLength;this.L_matrix=[];for(var e=0;e<t.length;e++){this.L_matrix[t[e]]={};for(var C=0;C<t.length;C++)this.L_matrix[t[e]][t[C]]=A*g[t[e]][t[C]]}}},{key:"_createK_matrix",value:function(g){var t=this.body.nodeIndices,A=this.springConstant;this.K_matrix=[];for(var e=0;e<t.length;e++){this.K_matrix[t[e]]={};for(var C=0;C<t.length;C++)this.K_matrix[t[e]][t[C]]=A*Math.pow(g[t[e]][t[C]],-2)}}},{key:"_createE_matrix",value:function(){var g=this.body.nodeIndices,t=this.body.nodes;this.E_matrix={},this.E_sums={};for(var A=0;A<g.length;A++)this.E_matrix[g[A]]=[];for(var e=0;e<g.length;e++){for(var C=g[e],I=t[C].x,i=t[C].y,o=0,n=0,r=e;r<g.length;r++){var s=g[r];if(s!==C){var a=t[s].x,d=t[s].y,h=1/Math.sqrt(Math.pow(I-a,2)+Math.pow(i-d,2));this.E_matrix[C][r]=[this.K_matrix[C][s]*(I-a-this.L_matrix[C][s]*(I-a)*h),this.K_matrix[C][s]*(i-d-this.L_matrix[C][s]*(i-d)*h)],this.E_matrix[s][e]=this.E_matrix[C][r],o+=this.E_matrix[C][r][0],n+=this.E_matrix[C][r][1]}}this.E_sums[C]=[o,n]}}},{key:"_updateE_matrix",value:function(g){for(var t=this.body.nodeIndices,A=this.body.nodes,e=this.E_matrix[g],C=this.K_matrix[g],I=this.L_matrix[g],i=A[g].x,o=A[g].y,n=0,r=0,s=0;s<t.length;s++){var a=t[s];if(a!==g){var d=e[s],h=d[0],l=d[1],c=A[a].x,u=A[a].y,p=1/Math.sqrt(Math.pow(i-c,2)+Math.pow(o-u,2)),f=C[a]*(i-c-I[a]*(i-c)*p),v=C[a]*(o-u-I[a]*(o-u)*p);e[s]=[f,v],n+=f,r+=v;var y=this.E_sums[a];y[0]+=f-h,y[1]+=v-l}}this.E_sums[g]=[n,r]}}]),g}();function gB(g,t,A){var e,C,I,i,o=this;if(!(this instanceof gB))throw new SyntaxError("Constructor must be called with the new operator");this.options={},this.defaultOptions={locale:"en",locales:ny,clickToUse:!1},fe(this.options,this.defaultOptions),this.body={container:g,nodes:{},nodeIndices:[],edges:{},edgeIndices:[],emitter:{on:je(e=this.on).call(e,this),off:je(C=this.off).call(C,this),emit:je(I=this.emit).call(I,this),once:je(i=this.once).call(i,this)},eventListeners:{onTap:function(){},onTouch:function(){},onDoubleTap:function(){},onHold:function(){},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},onMouseWheel:function(){},onPinch:function(){},onMouseMove:function(){},onRelease:function(){},onContext:function(){}},data:{nodes:null,edges:null},functions:{createNode:function(){},createEdge:function(){},getPointer:function(){}},modules:{},view:{scale:1,translation:{x:0,y:0}},selectionBox:{show:!1,position:{start:{x:0,y:0},end:{x:0,y:0}}}},this.bindEventListeners(),this.images=new sy((function(){return o.body.emitter.emit("_requestRedraw")})),this.groups=new Gm,this.canvas=new CP(this.body),this.selectionHandler=new yM(this.body,this.canvas),this.interactionHandler=new sP(this.body,this.canvas,this.selectionHandler),this.view=new IP(this.body,this.canvas),this.renderer=new gP(this.body,this.canvas),this.physics=new HR(this.body),this.layoutEngine=new ZM(this.body),this.clustering=new $R(this.body),this.manipulation=new jM(this.body,this.canvas,this.selectionHandler,this.interactionHandler),this.nodesHandler=new YN(this.body,this.images,this.groups,this.layoutEngine),this.edgesHandler=new FR(this.body,this.images,this.groups),this.body.modules.kamadaKawai=new $M(this.body,150,.05),this.body.modules.clustering=this.clustering,this.canvas._create(),this.setOptions(A),this.setData(t)}He(gB.prototype),gB.prototype.setOptions=function(g){var t=this;if(null===g&&(g=void 0),void 0!==g){!0===Dv.validate(g,KM)&&console.error("%cErrors have been found in the supplied options object.",Tv);if(Xf(["locale","locales","clickToUse"],this.options,g),void 0!==g.locale&&(g.locale=function(g,t){try{var A=lh(t.split(/[-_ /]/,2),2),e=A[0],C=A[1],I=null!=e?e.toLowerCase():null,i=null!=C?C.toUpperCase():null;if(I&&i){var o,n=I+"-"+i;if(Object.prototype.hasOwnProperty.call(g,n))return n;console.warn(bh(o="Unknown variant ".concat(i," of language ")).call(o,I,"."))}if(I){var r=I;if(Object.prototype.hasOwnProperty.call(g,r))return r;console.warn("Unknown language ".concat(I))}return console.warn("Unknown locale ".concat(t,", falling back to English.")),"en"}catch(g){return console.error(g),console.warn("Unexpected error while normalizing locale ".concat(t,", falling back to English.")),"en"}}(g.locales||this.options.locales,g.locale)),g=this.layoutEngine.setOptions(g.layout,g),this.canvas.setOptions(g),this.groups.setOptions(g.groups),this.nodesHandler.setOptions(g.nodes),this.edgesHandler.setOptions(g.edges),this.physics.setOptions(g.physics),this.manipulation.setOptions(g.manipulation,g,this.options),this.interactionHandler.setOptions(g.interaction),this.renderer.setOptions(g.interaction),this.selectionHandler.setOptions(g.interaction),void 0!==g.groups&&this.body.emitter.emit("refreshNodes"),"configure"in g&&(this.configurator||(this.configurator=new xv(this,this.body.container,HM,this.canvas.pixelRatio,XM)),this.configurator.setOptions(g.configure)),this.configurator&&!0===this.configurator.options.enabled){var A={nodes:{},edges:{},layout:{},interaction:{},manipulation:{},physics:{},global:{}};qf(A.nodes,this.nodesHandler.options),qf(A.edges,this.edgesHandler.options),qf(A.layout,this.layoutEngine.options),qf(A.interaction,this.selectionHandler.options),qf(A.interaction,this.renderer.options),qf(A.interaction,this.interactionHandler.options),qf(A.manipulation,this.manipulation.options),qf(A.physics,this.physics.options),qf(A.global,this.canvas.options),qf(A.global,this.options),this.configurator.setModuleOptions(A)}void 0!==g.clickToUse?!0===g.clickToUse?void 0===this.activator&&(this.activator=new kv(this.canvas.frame),this.activator.on("change",(function(){t.body.emitter.emit("activate")}))):(void 0!==this.activator&&(this.activator.destroy(),delete this.activator),this.body.emitter.emit("activate")):this.body.emitter.emit("activate"),this.canvas.setSize(),this.body.emitter.emit("startSimulation")}},gB.prototype._updateVisibleIndices=function(){var g=this.body.nodes,t=this.body.edges;for(var A in this.body.nodeIndices=[],this.body.edgeIndices=[],g)Object.prototype.hasOwnProperty.call(g,A)&&(this.clustering._isClusteredNode(A)||!1!==g[A].options.hidden||this.body.nodeIndices.push(g[A].id));for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var C=t[e],I=g[C.fromId],i=g[C.toId],o=void 0!==I&&void 0!==i;!this.clustering._isClusteredEdge(e)&&!1===C.options.hidden&&o&&!1===I.options.hidden&&!1===i.options.hidden&&this.body.edgeIndices.push(C.id)}},gB.prototype.bindEventListeners=function(){var g=this;this.body.emitter.on("_dataChanged",(function(){g.edgesHandler._updateState(),g.body.emitter.emit("_dataUpdated")})),this.body.emitter.on("_dataUpdated",(function(){g.clustering._updateState(),g._updateVisibleIndices(),g._updateValueRange(g.body.nodes),g._updateValueRange(g.body.edges),g.body.emitter.emit("startSimulation"),g.body.emitter.emit("_requestRedraw")}))},gB.prototype.setData=function(g){if(this.body.emitter.emit("resetPhysics"),this.body.emitter.emit("_resetData"),this.selectionHandler.unselectAll(),g&&g.dot&&(g.nodes||g.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.');if(this.setOptions(g&&g.options),g&&g.dot){console.warn("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);");var t=Cy(g.dot);this.setData(t)}else if(g&&g.gephi){console.warn("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);");var A=iy(g.gephi);this.setData(A)}else this.nodesHandler.setData(g&&g.nodes,!0),this.edgesHandler.setData(g&&g.edges,!0),this.body.emitter.emit("_dataChanged"),this.body.emitter.emit("_dataLoaded"),this.body.emitter.emit("initPhysics")},gB.prototype.destroy=function(){for(var g in this.body.emitter.emit("destroy"),this.body.emitter.off(),this.off(),delete this.groups,delete this.canvas,delete this.selectionHandler,delete this.interactionHandler,delete this.view,delete this.renderer,delete this.physics,delete this.layoutEngine,delete this.clustering,delete this.manipulation,delete this.nodesHandler,delete this.edgesHandler,delete this.configurator,delete this.images,this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,g)&&delete this.body.nodes[g];for(var t in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,t)&&delete this.body.edges[t];Qf(this.body.container)},gB.prototype._updateValueRange=function(g){var t,A=void 0,e=void 0,C=0;for(t in g)if(Object.prototype.hasOwnProperty.call(g,t)){var I=g[t].getValue();void 0!==I&&(A=void 0===A?I:Math.min(I,A),e=void 0===e?I:Math.max(I,e),C+=I)}if(void 0!==A&&void 0!==e)for(t in g)Object.prototype.hasOwnProperty.call(g,t)&&g[t].setValueRange(A,e,C)},gB.prototype.isActive=function(){return!this.activator||this.activator.active},gB.prototype.setSize=function(){return this.canvas.setSize.apply(this.canvas,arguments)},gB.prototype.canvasToDOM=function(){return this.canvas.canvasToDOM.apply(this.canvas,arguments)},gB.prototype.DOMtoCanvas=function(){return this.canvas.DOMtoCanvas.apply(this.canvas,arguments)},gB.prototype.findNode=function(){return this.clustering.findNode.apply(this.clustering,arguments)},gB.prototype.isCluster=function(){return this.clustering.isCluster.apply(this.clustering,arguments)},gB.prototype.openCluster=function(){return this.clustering.openCluster.apply(this.clustering,arguments)},gB.prototype.cluster=function(){return this.clustering.cluster.apply(this.clustering,arguments)},gB.prototype.getNodesInCluster=function(){return this.clustering.getNodesInCluster.apply(this.clustering,arguments)},gB.prototype.clusterByConnection=function(){return this.clustering.clusterByConnection.apply(this.clustering,arguments)},gB.prototype.clusterByHubsize=function(){return this.clustering.clusterByHubsize.apply(this.clustering,arguments)},gB.prototype.updateClusteredNode=function(){return this.clustering.updateClusteredNode.apply(this.clustering,arguments)},gB.prototype.getClusteredEdges=function(){return this.clustering.getClusteredEdges.apply(this.clustering,arguments)},gB.prototype.getBaseEdge=function(){return this.clustering.getBaseEdge.apply(this.clustering,arguments)},gB.prototype.getBaseEdges=function(){return this.clustering.getBaseEdges.apply(this.clustering,arguments)},gB.prototype.updateEdge=function(){return this.clustering.updateEdge.apply(this.clustering,arguments)},gB.prototype.clusterOutliers=function(){return this.clustering.clusterOutliers.apply(this.clustering,arguments)},gB.prototype.getSeed=function(){return this.layoutEngine.getSeed.apply(this.layoutEngine,arguments)},gB.prototype.enableEditMode=function(){return this.manipulation.enableEditMode.apply(this.manipulation,arguments)},gB.prototype.disableEditMode=function(){return this.manipulation.disableEditMode.apply(this.manipulation,arguments)},gB.prototype.addNodeMode=function(){return this.manipulation.addNodeMode.apply(this.manipulation,arguments)},gB.prototype.editNode=function(){return this.manipulation.editNode.apply(this.manipulation,arguments)},gB.prototype.editNodeMode=function(){return console.warn("Deprecated: Please use editNode instead of editNodeMode."),this.manipulation.editNode.apply(this.manipulation,arguments)},gB.prototype.addEdgeMode=function(){return this.manipulation.addEdgeMode.apply(this.manipulation,arguments)},gB.prototype.editEdgeMode=function(){return this.manipulation.editEdgeMode.apply(this.manipulation,arguments)},gB.prototype.deleteSelected=function(){return this.manipulation.deleteSelected.apply(this.manipulation,arguments)},gB.prototype.getPositions=function(){return this.nodesHandler.getPositions.apply(this.nodesHandler,arguments)},gB.prototype.getPosition=function(){return this.nodesHandler.getPosition.apply(this.nodesHandler,arguments)},gB.prototype.storePositions=function(){return this.nodesHandler.storePositions.apply(this.nodesHandler,arguments)},gB.prototype.moveNode=function(){return this.nodesHandler.moveNode.apply(this.nodesHandler,arguments)},gB.prototype.getBoundingBox=function(){return this.nodesHandler.getBoundingBox.apply(this.nodesHandler,arguments)},gB.prototype.getConnectedNodes=function(g){return void 0!==this.body.nodes[g]?this.nodesHandler.getConnectedNodes.apply(this.nodesHandler,arguments):this.edgesHandler.getConnectedNodes.apply(this.edgesHandler,arguments)},gB.prototype.getConnectedEdges=function(){return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler,arguments)},gB.prototype.startSimulation=function(){return this.physics.startSimulation.apply(this.physics,arguments)},gB.prototype.stopSimulation=function(){return this.physics.stopSimulation.apply(this.physics,arguments)},gB.prototype.stabilize=function(){return this.physics.stabilize.apply(this.physics,arguments)},gB.prototype.getSelection=function(){return this.selectionHandler.getSelection.apply(this.selectionHandler,arguments)},gB.prototype.setSelection=function(){return this.selectionHandler.setSelection.apply(this.selectionHandler,arguments)},gB.prototype.getSelectedNodes=function(){return this.selectionHandler.getSelectedNodeIds.apply(this.selectionHandler,arguments)},gB.prototype.getSelectedEdges=function(){return this.selectionHandler.getSelectedEdgeIds.apply(this.selectionHandler,arguments)},gB.prototype.getNodeAt=function(){var g=this.selectionHandler.getNodeAt.apply(this.selectionHandler,arguments);return void 0!==g&&void 0!==g.id?g.id:g},gB.prototype.getEdgeAt=function(){var g=this.selectionHandler.getEdgeAt.apply(this.selectionHandler,arguments);return void 0!==g&&void 0!==g.id?g.id:g},gB.prototype.selectNodes=function(){return this.selectionHandler.selectNodes.apply(this.selectionHandler,arguments)},gB.prototype.selectEdges=function(){return this.selectionHandler.selectEdges.apply(this.selectionHandler,arguments)},gB.prototype.unselectAll=function(){this.selectionHandler.unselectAll.apply(this.selectionHandler,arguments),this.selectionHandler.commitWithoutEmitting.apply(this.selectionHandler),this.redraw()},gB.prototype.redraw=function(){return this.renderer.redraw.apply(this.renderer,arguments)},gB.prototype.getScale=function(){return this.view.getScale.apply(this.view,arguments)},gB.prototype.getViewPosition=function(){return this.view.getViewPosition.apply(this.view,arguments)},gB.prototype.fit=function(){return this.view.fit.apply(this.view,arguments)},gB.prototype.moveTo=function(){return this.view.moveTo.apply(this.view,arguments)},gB.prototype.focus=function(){return this.view.focus.apply(this.view,arguments)},gB.prototype.releaseNode=function(){return this.view.releaseNode.apply(this.view,arguments)},gB.prototype.getOptionsFromConfigurator=function(){var g={};return this.configurator&&(g=this.configurator.getOptions.apply(this.configurator)),g};var tB=Cy;g.DataSet=mD,g.DataView=bD,g.Network=gB,g.NetworkImages=sy,g.Queue=fD,g.data=xD,g.networkDOTParser=Iy,g.networkGephiParser=oy,g.networkOptions=JM,g.parseDOTNetwork=tB,g.parseGephiNetwork=iy}));
//# sourceMappingURL=vis-network.min.js.map




$("#mynetwork").remove()
div({1:"mynetwork",4:0,13:500000000,10:SOMBRE?"#202934":"#EEBB83",12:["100%","100%"]})
    // Exemple de JSON, tu le chargeras probablement via une requête ou localement

function isLeaf(node) {if(node.currentDestiny)return false
  return !node.LEFT && !node.RIGHT; // Un nœud sans enfants est une feuille
}
var NODEID = 1
// Fonction pour parcourir l'arbre et générer des nœuds et des arêtes
function processNode(node, nodeId, nodes, edges, parentId = null,level=1) {
    let label;

	var colors = {
		skill:{
			leaf:"#B2A0BA",
			node:"#D181A4",
		},
		weapon:{
			leaf:"#B5A59F",
			node:"#B7766A",
		},
		pet:{
			leaf:"#C2E0B3",
			node:"#CCC259",
		},
		stats:{
			leaf:"#DBC7B1",
			node:"#CECECE",
		},
		
	
	}
	
    let color = '#CECECE'; // Couleur par défaut
	var borderWidth = 0
	var borderColor = "#000000"
    if (node.type === 'skill') {
        label = (isLeaf(node)?(FR[node.skill]):("<b>"+FR[node.skill]+"</b>"));
		color = isLeaf(node)?colors.skill.leaf:colors.skill.node
    } else if (node.type === 'weapon') {
        label =isLeaf(node)?(FR[node.weapon]):("<b>"+FR[node.weapon]+"</b>");
				color = isLeaf(node)?colors.weapon.leaf:colors.weapon.node
}
     else if (node.type === 'pet') {
        label = isLeaf(node)?(FR[node.pet]):("<b>"+FR[node.pet]+"</b>");
				color = isLeaf(node)?colors.pet.leaf:colors.pet.node

    } else if (node.type === 'stats') {
        label = FR[node.stat1] + (FR[node.stat2] ? '/' + FR[node.stat2] : '');
				color = isLeaf(node)?colors.stats.leaf:colors.stats.node

    }
	cl(label)
    // Définir la couleur en fonction des conditions

	if (!isLeaf(node)) {
		borderWidth = 2
		borderColor = "#777777"
		 if (node.currentDestiny === true) {
			 borderWidth = 3
		borderColor = "#DD6F40"
		} 
    }

    // Ajouter le nœud avec la couleur appropriée
    nodes.push({
		title:"Niveau "+node.level,
        id: nodeId,
        label: label,
		borderWidth:borderWidth,
        color: {
            background: color,  // Couleur de fond du nœud
            border: borderColor    // Couleur de la bordure (noir)
        },
        font: { color: '#000000' ,size:20,face:"arial",bold: '20px arial black', multi: "html"} // Texte en blanc
    });

    // Ajouter les arêtes
    if (parentId !== null) {
        edges.push({ from: parentId, to: nodeId });
    }

    // Processus récursif pour les enfants
    if (node.LEFT) {NODEID+=1
        processNode(node.LEFT, NODEID, nodes, edges, nodeId,level+1);
    }
    if (node.RIGHT) {NODEID+=1;
        processNode(node.RIGHT, NODEID, nodes, edges, nodeId,level+1);
    }
}
var jsonTree


function go(){
// Initialisation des nœuds et des arêtes
let nodes = [];
let edges = [];
processNode(jsonTree, 1, nodes, edges);

// Création du réseau avec vis-network
var container = document.getElementById("mynetwork");
var data = {
    nodes: new vis.DataSet(nodes),
    edges: new vis.DataSet(edges)
};
var options = {
    layout: {
        hierarchical: {sortMethod: 'directed',
		 shakeTowards: 'roots',
            direction: "UD",  // UD = Up to Down (vertical)
            nodeSpacing: 180,  // Espacement entre les nœuds
            levelSeparation: 100  // Séparation verticale entre les niveaux
        }
    },
    nodes: {
        shape: 'box',  // Forme rectangulaire
        font: {
            color: '#ffffff',  // Texte en blanc
            size: 14  // Taille de la police
        },
        margin: 15  // Espacement interne des nœuds
    },
    edges: {
        arrows: 'to',
        color: {
            color: '#848484',  // Couleur des arêtes
            highlight: '#606060',
            hover: '#606060'
        }
    },
    physics: false  // Désactive la physique pour un placement statique
};
var network = new vis.Network(container, data, options);}


fetch("/api/brute/"+BRUTE+"/destiny")
  .then(response => response.text())
  .then(html => {jsonTree=JSON.parse(html)
  
    
fetch("/api/brute/"+BRUTE+"/for-hook")
  .then(response => response.text())
  .then(html => {var brute=JSON.parse(html)
	  
	  
	  var currentNode=jsonTree;
currentNode.currentDestiny=true
for(var step of brute.destinyPath){currentNode=currentNode[step];currentNode.currentDestiny=true}

go()
	  
	  })
  
  })

  
