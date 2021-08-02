//Name:     Matt Keplinger
//Org:      devCodeCamp
//Title:    Javascript RPG
//Date:     30 July 2021

'use strict'

// function Hero(){
//     this.title = title;
//     this.hitPoints = hitPoints;
//     this.damage = damage;
//     this.attack = attack[];
//     this.attackDMG = attackDMG[];
// }
// function Monster(){
//     this.title = title;
//     this.hitPoints = hitPoints;
//     this.damage = damage;
//     this.attack = attack[];
//     this.attackDMG = attackDMG[];
// }

//hero object
const hercules={
    title: 'Hercules',
    intro: 'Hercules is the son of Zeus and is nearly invulnerable and possesses super strength.',
    weakness: 'Poison',
    hitPoints: 300,
    damage: 70,
    attack: ['punches', 'kicks', 'throws', 'slams', 'sword'],
    attackDMG: [20,30,40,50,100],
    isAlive: 'true'
}
//monster objects
const cerberus = {
    title: 'Cerberus',
    intro: 'The Cerberus is a three-headed guardian of the underworld.  It has the heads of a Lion, Goat, and Snake.',
    weakness: 'Drugged Honey Cake',
    hitPoints: 200,
    damage: 50,
    attack: ['bites', 'pounces', 'rushes', 'slams'],
    isAlive: 'true'
};

const nemeanLion = {
    title: 'Nemean Lion',
    intro: 'The Nemean Lion is a lion that cannot be killed by mortal weapons because it has golden fur.  Its claws are sharper than mortal steel and can pierce any armor that is presented before it.',
    weakness: 'Strangulation',
    hitPoints: 200,
    damage: 80,
    attack: ['bites', 'pounces', 'rushes'],
    isAlive: 'true'
};

const hydra = {
    title: 'Lernean Hydra',
    intro: 'The Lernaean Hydra is a multi-headed serpent that lives in Lake Lerna.  It must have all heads removed to die.  If even one remains, the hydra will regenerate and live.',
    weakness: 'Remove immortal heads',
    hitPoints: 180,
    damage: 50,
    attack: ['drowns', 'bites', 'coils around', 'bites'],
    isAlive: 'true'
};

//message objects
const messages = {
    glory: `FOR GLORY!`
};

function runGame() {
    introGame();
    ordealMenu();
}

function introGame() {
    alert(`******************************\nWelcome to Javascript RPG\nThe Herculean Ordeals!\n******************************\nBy: Matt Keplinger`);
    alert(`The good king Eurystheus has sought you, Hercules, to undertake the greatest of ordeals:\nSLAY the Nemean Lion\nDEFEAT the Lernaean Hydra\nCAPTURE Cerberus, Guardian of the Underworld`);
    let getSome = prompt(`This game will be played in the console. Do you wish to continue?\nType Y to continue.`);
    if (getSome === 'y' || getSome === 'Y') {
        alert(`Press F12 to open your console if not done already. Prepare for BATTLE!`);
        console.log('LET THE ORDEALS BEGIN!');
    }
    else {
        alert(`Muster your courage, ${hercules.title}.\nTO BATTLE!`);
        runGame();
    }
}

function ordealMenu() {
    alert('Hercules, my Kingdom needs you!  We must show our glory to all of Greece.  For this, I need you, son of Zeus, to complete several ordeals and cement our legacy as the greatest kingdom of Greece.');
    let myOrdeal = prompt(`Choose your ordeal, Hercules:\n1-Nemean Lion\n2-Lernaean Hydra\n3-Cerberus`);
    switch (myOrdeal) {
        case "1":
            ordealChoice(nemeanLion);
            break;
        case "2":
            ordealChoice(hydra);
            break;
        case "3":
            ordealChoice(cerberus);
            break;
        default:
            alert('Hercules, you can not fail me now. Choose your ordeal!');
            ordealMenu();
            break;
    }
}

function ordealChoice(obj){
    alert(`${obj.intro}`);
    alert(messages.glory);
    battleMenu(obj); 
}
function heroHP(obj){
    console.log(`${hercules.title} has ${hercules.hitPoints} / ${hercules.hitPoints} hit points remaining`);
}

function monsterHP(obj){
    let monTitle = obj.title;
    let monHP= obj.hitPoints;
    console.log(`${monTitle} has ${monHP} / ${monHP} hit points remaining.`);
}

function battleMenu(obj){
    let monTitle = obj.title;
    let monHP= obj.hitPoints;
    let battleHP;
    heroHP(hercules);
    monsterHP(obj);
   
    let battleChoice = prompt(`${hercules.title}, choose your attack from the following:\n1-Punch\n2-Kick\n3-Throw\n4-Slam\n5-Sword Attack`);
        if (battleChoice === '1'){
            console.log(`${hercules.title} throws ${hercules.attack[0]} at ${monTitle} for ${hercules.attackDMG[0]} damage`);
            battleHP = monHP - hercules.attackDMG[0];
            console.log(`${monTitle} has ${battleHP} / ${monHP} hit points remaining. `);
        }
        else if (battleChoice === '2'){
            console.log(`${hercules.title} throws ${hercules.attack[1]} at ${monTitle} for ${hercules.attackDMG[1]} damage`);
            battleHP = monHP - hercules.attackDMG[1];
            console.log(`${monTitle} has ${battleHP} / ${monHP} hit points remaining. `);
        }
        else if (battleChoice === '3'){
            console.log(`${hercules.title} ${hercules.attack[2]} the ${monTitle} for ${hercules.attackDMG[2]} damage`);
            battleHP = monHP - hercules.attackDMG[2];
            console.log(`${monTitle} has ${battleHP} / ${monHP} hit points remaining. `);
        }
        else if (battleChoice === '4'){
            console.log(`${hercules.title}  ${hercules.attack[3]} ${monTitle} for ${hercules.attackDMG[3]} damage`);
            battleHP = monHP - hercules.attackDMG[3];
            console.log(`${monTitle} has ${battleHP} / ${monHP} hit points remaining. `);
        }
        else if (battleChoice === '5'){
            console.log(`${hercules.title} swings his ${hercules.attack[4]} at ${monTitle} for ${hercules.attackDMG[4]} damage`);
            battleHP = monHP - hercules.attackDMG[4];
            console.log(`${monTitle} has ${battleHP} / ${monHP} hit points remaining. `);
        }
        else{
            battleMenu();
    }
}
runGame();
