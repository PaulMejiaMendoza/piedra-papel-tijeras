const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijeras = document.getElementById('tijeras')
const creator = document.getElementById('creator')
const winner = document.getElementById('winner')

const wonSpan = document.getElementById('won')
const userText = document.getElementById('userText')
const cpuText = document.getElementById('cpuText')

const userPointsSpan = document.getElementById('userpoints')
const cpuPointsSpan = document.getElementById('cpupoints')

let userPoints = 0;
let cpuPoints = 0;

const updateData = (userElection,cpuElection,finalWinner) => {
    userText.textContent = userElection;
    cpuText.textContent = cpuElection;
    wonSpan.textContent = finalWinner;
}




const winnerShow = () =>{
    creator.style.display = 'none';
    winner.style.display = "block"
}



const getCpuChoice = () =>{
    const choices = ['piedra','papel','tijeras'];
    let randomNumber = Math.random() * 3;
    let randomNumberWhole = Math.floor(randomNumber);
    let cpuChoice = choices[randomNumberWhole]; 
    return cpuChoice
}


const won = () => {
    userPoints++
    userPointsSpan.textContent = userPoints;
}

const lost = () => {
    cpuPoints++
    cpuPointsSpan.textContent = cpuPoints;
}



const checkWinner = (userChoice, cpuChoice) => {
    switch (userChoice + cpuChoice) {
        case 'piedrapiedra':
            console.log(`El usuario eligió ${userChoice} y la maquina ${cpuChoice}, EMPATE`);
            updateData('PIEDRA','PIEDRA','NADIE');            
            break;
        case 'piedrapapel':
            console.log(`El usuario eligió ${userChoice} y la maquina ${cpuChoice}, HAS PERDIDO`);
            updateData('PIEDRA','PAPEL','CPU');
            lost();
            break;
        case 'piedratijeras':
            console.log(`El usuario eligió ${userChoice} y la maquina ${cpuChoice}, HAS GANADO`);
            updateData('PIEDRA','TIJERAS','TU');
            won();            
            break;
        case 'papelpiedra':
            console.log(`El usuario eligió ${userChoice} y la maquina ${cpuChoice}, HAS GANADO`);
            updateData('PAPEL','PIEDRA','TU');
            won();            
            break;
        case 'papelpapel':
            console.log(`El usuario eligió ${userChoice} y la maquina ${cpuChoice}, EMPATE`);            
            updateData('PAPEL','PAPEL','NADIE');
            break;
        case 'papeltijeras':
            console.log(`El usuario eligió ${userChoice} y la maquina ${cpuChoice}, HAS PERDIDO`);
            updateData('PAPEL','TIJERAS','CPU');
            lost();
            break;
        case 'tijeraspiedra':
            console.log(`El usuario eligió ${userChoice} y la maquina ${cpuChoice}, HAS PERDIDO`);            
            updateData('TIJERAS','PIEDRA','CPU');
            lost();
            break;
        case 'tijeraspapel':
            console.log(`El usuario eligió ${userChoice} y la maquina ${cpuChoice}, HAS GANADO`);
            updateData('TIJERAS','PAPEL','TU');
            won();
            break;
        case 'tijerastijeras':
            console.log(`El usuario eligió ${userChoice} y la maquina ${cpuChoice}, EMPATE`);            
            updateData('TIJERAS','TIJERAS','NADIE');
            default:
            break;
   }
}




let userChoice;

piedra.addEventListener('click', () =>{
    userChoice = 'piedra'
    let cpuChoice = getCpuChoice()
    checkWinner(userChoice,cpuChoice)
    winnerShow()
})
papel.addEventListener('click', () =>{
    userChoice = 'papel'
    let cpuChoice = getCpuChoice()
    checkWinner(userChoice,cpuChoice)
    winnerShow()
})
tijeras.addEventListener('click', () =>{
    userChoice = 'tijeras'
    let cpuChoice = getCpuChoice()
    checkWinner(userChoice,cpuChoice)
    winnerShow()
})