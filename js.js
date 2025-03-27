// random-color
const colorContainer = document.querySelector('.color-container')
for (let i = 0; i < 10; i++) {
    const creat = document.createElement('div')
    creat.classList.add('color')
    colorContainer.appendChild(creat)
}
const palette = ['A', 'B', 'C', 'E', 'D', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function findColor() {
    let newCol = '#'
    for (let i = 0; i < 6; i++) {
        const changCol = Math.floor(Math.random() * palette.length)
        newCol += palette[changCol]
    }
    return newCol
}
const colorDiv = document.querySelectorAll('.color')
colorDiv.forEach((color) => {
    const colorCode = findColor()
    color.style.backgroundColor = colorCode
    color.innerText = colorCode
    color.addEventListener('click', () => {
        colorContainer.style.backgroundColor = colorCode
    })
})
// search-container
const searchEl = document.querySelector('.search-container')
const magnifier = document.querySelector('.magnifier')

magnifier.addEventListener('click', () => {
    searchEl.classList.toggle('active')
})
// pomodoro timer
const timerEl = document.querySelector('.timer')
const start = document.querySelector('.start')
const stopEl = document.querySelector('.stop')
const reset = document.querySelector('.reset')

let letTimer
let timercount = 1500
function updateTimerDisplay() {
    let minutes = Math.floor(timercount / 60)
    let seconds = timercount % 60
    let formattedTimer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    timerEl.innerHTML = formattedTimer
}
function starTimer() {
    letTimer = setInterval(() => {
        timercount--
        updateTimerDisplay()
        if (timercount === 0) {
            clearInterval(letTimer)
            timercount = 1500
            alert("Time's up")
        }
    }, 1000)
}
function stopTimer() {
    clearInterval(letTimer)
}
function resetBtn() {
    clearInterval(letTimer); // Stop the timer
    timercount = 1500; // Reset timer to 25 minutes
    updateTimerDisplay(); // Update the UI once (after reset)
}
start.addEventListener('click', starTimer)
stopEl.addEventListener('click', stopTimer)
reset.addEventListener('click', resetBtn)
// age-colculate 

const ageBtn = document.getElementById('age-btn')
const birthday = document.getElementById('birthday')
const resaltEl = document.getElementById('resaltEl')


ageBtn.addEventListener('click', calculateAge)

function calculateAge() {
    const birthdayValue = birthday.value
    if (birthdayValue === '') {
        alert('Please enter your birthday')
    } else {
        const age = getAge(birthdayValue)
        resaltEl.innerText = `Your age is ${age} ${age > 1 ? 'years' : 'year'}  old`
    }
}
function getAge(birthdayValue) {
    const currentDate = new Date()
    const birthdayDate = new Date(birthdayValue)
    let age = currentDate.getFullYear() - birthdayDate.getFullYear(birthdayValue)
    const month = currentDate.getMonth() - birthdayDate.getMonth(birthdayValue)
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--

    }
    return age
}
// 
const filmOpen = document.querySelector('.film-open')
const filmClose = document.querySelector('.film-close')
const filmVideo = document.querySelector('.film-video')
const videoEl = document.querySelector('.video')

filmOpen.addEventListener('click', () => {
    filmVideo.classList.add('active')
})
filmClose.addEventListener('click', () => {
    filmVideo.classList.remove('active')
    videoEl.pause()
    videoEl.currentTime = 0
})
// drum-kits

const kits = ['kick', 'snare', 'tom']
const drumKits = document.querySelector('.drum-kits')

kits.forEach((kit) => {
    const btnKit = document.createElement('button');
    btnKit.classList.add('btns');
    btnKit.innerText = kit;
    const audioEl = document.createElement('audio');
    audioEl.src = 'sounds/' + kit + '.mp3';
    btnKit.appendChild(audioEl);
    btnKit.addEventListener('click', () => {
        audioEl.currentTime = 0;
        audioEl.play();
    });
    drumKits.appendChild(btnKit);
    const imgEl = document.createElement('img')
    imgEl.classList.add('kit-img')
    imgEl.src = 'img/' + kit + '.jpg'
    btnKit.appendChild(imgEl)
});
