const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const questionBtn = document.querySelector(".fa-question");
const closeBtn = document.querySelector(".close");
const modalShadow = document.querySelector(".modal-shadow");
const time = document.querySelector(".time");
const stopWatch = document.querySelector(".stopwatch");
const timeList = document.querySelector(".time-list");

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement;

const showModal = () => {
    if(!(modalShadow.style.display === 'block')){
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none';
    }
	modalShadow.classList.toggle("modal-animation");
};


const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopWatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopWatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopWatch.textContent = `${minutes}:00`;
		}
	}, 100);
};
const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	if (stopWatch.textContent !== "0:00") {
		time.style.visibility = "visible";
		timesArr.push(stopWatch.textContent);
		time.innerHTML = `Ostatni czas: ${stopWatch.textContent}`;
	}
	clearStuff();
};
const handleReset = () => {
    time.style.visibility = "hidden";
    timesArr = [];
	clearStuff();
};
const clearStuff = () => {
	clearInterval(countTime);
	stopWatch.textContent = "0:00";
	timeList.textContent = "";
	seconds = 0;
	minutes = 0;
};

const showHistory = () => {
    timeList.textContent = "";
    let number = 1;
    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${number}: <span>${time}</span>`;
        timeList.append(newTime);
        number++;
    })
}

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener('click', showHistory);

questionBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false);

colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});

colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
    root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});

colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
    root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
});