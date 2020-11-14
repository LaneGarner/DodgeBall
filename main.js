// 'use strict';
// const assert = require('assert');

const arrOfPeople = [
    {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
    yearsExperience: 5
    },
    {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
    yearsExperience: 7
    },
    {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
    yearsExperience: 10
    },
    {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
    yearsExperience: 3
    },
    {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
    yearsExperience: 6
    },
    {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
    yearsExperience: 9
    },
    {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    yearsExperience: 20
    },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.id = id;
        this.name = name;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
}
class BlueTeammate {
    constructor(id, name, teamColor, mascot){
        this.id = id;
        this.name = name;
        this.teamColor = teamColor;
        this.mascot = mascot;
    }
}
class RedTeammate {
    constructor(id, name, teamColor, mascot){
        this.id = id;
        this.name = name;
        this.teamColor = teamColor;
        this.mascot = mascot;
    }}

const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    document.getElementById('people-heading').style.display = 'block'
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', () => {
            makePlayer(person.id)
            listElement.removeChild(li)
        })
        li.appendChild(button)
        li.appendChild(document.createTextNode(`${person.name} - Skills: ${person.skillSet}`))
        listElement.append(li)
    })
    const listPeopleButton = document.getElementById('listPeople');
    listPeopleButton.style.display = 'none';
}

const makePlayer = (id) => {
    let person = arrOfPeople.find(player => player.id === id)
    let index = arrOfPeople.indexOf(person)
    arrOfPeople.splice(index,1)
    const newPlayer = new Player(person.id, person.name, true, true, true, true, person.yearsExperience)
    listOfPlayers.push(newPlayer)
    const listElement = document.getElementById('players')
    const li = document.createElement("li")
    const blueButton = document.createElement("button")
    blueButton.innerHTML = "Blue team"
    blueButton.style = "background: #0074D9; color: white;"
    blueButton.addEventListener('click', () => {
        makeBlueTeam(person.id)
        listElement.removeChild(li)
    })
    const redButton = document.createElement("button")
    redButton.innerHTML = "Red team"
    redButton.style = "background: tomato; color: white;"
    redButton.addEventListener('click', () => {
        makeRedTeam(person.id)
        listElement.removeChild(li)
    })
    li.appendChild(blueButton)
    li.appendChild(redButton)
    listElement.append(li)
    li.appendChild(document.createTextNode(`${person.name} - Years Experience: ${person.yearsExperience}`))
    hideEmpty();
    return `${person.name} - Years Experience: ${person.yearsExperience}`
}

const makeBlueTeam = (id) => {
    let person = listOfPlayers.find(player => player.id === id)
    let index = listOfPlayers.indexOf(person)
    listOfPlayers.splice(index,1)
    const newBlueTeammate = new BlueTeammate(person.id, person.name, 'Blue', 'Burros')
    blueTeam.push(newBlueTeammate)
    let bluePerson = blueTeam.find(player => player.id === id)
    const listElement = document.getElementById('blue')
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`${bluePerson.name} is now a member of the ${bluePerson.teamColor} ${bluePerson.mascot} team`))
    listElement.append(li)
    hideEmpty();
    return `${bluePerson.name} is now a member of the ${bluePerson.teamColor} ${bluePerson.mascot} team`
}

const makeRedTeam = (id) => {
    let person = listOfPlayers.find(player => player.id === id)
    console.log(person)
    let index = listOfPlayers.indexOf(person)
    listOfPlayers.splice(index,1)
    const newRedTeammate = new RedTeammate(person.id, person.name, 'Red', 'Elefantes')
    redTeam.push(newRedTeammate)
    let redPerson = redTeam.find(player => player.id === id)
    const listElement = document.getElementById('red')
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`${redPerson.name} is now a member of the ${redPerson.teamColor} ${redPerson.mascot} team`))
    listElement.append(li)
    hideEmpty();
    return`${redPerson.name} is now a member of the ${redPerson.teamColor} ${redPerson.mascot} team`
}

const hideEmpty = () => {
    const people = document.getElementById('people-heading')
    const players = document.getElementById('dodgeball-players')
    const blue = document.getElementById('blue-team')
    const red = document.getElementById('red-team')
    
    if (listOfPlayers.length === 0){
        players.style.display = 'none'
    } 
    else {
        players.style.display = 'block'
    }
    if (blueTeam.length === 0){
        blue.style.display = 'none'
    } 
    else {
        blue.style.display = 'block'
    }
    if (redTeam.length === 0){
        red.style.display = 'none'
    } 
    else {
        red.style.display = 'block'
    }
    if (arrOfPeople.length === 0){
        people.style.display = 'none'
    } 
}

hideEmpty();


// if (typeof describe === 'function') {

//     // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
//     describe('#makePlayer()', () => {
//     it('should create a new player', () => {
//         assert.equal(makePlayer('2'), "Charles Young - Years Experience: 5");
//         assert.equal(makePlayer('3'), "Judy Twilight - Years Experience: 7");
//         assert.equal(makePlayer('4'), "Cynthia Doolittle - Years Experience: 10");
//     });

//     });

// }