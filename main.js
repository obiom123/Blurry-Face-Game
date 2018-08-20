
const gameData = [
  {
    name: 'Justin Beiber',
    guessNames: ['Lindsey Lohan', 'Eleven, from Stanger Things', 'Justin Beiber', 'Aaron Carter'],
    image: 'pictures/beiber.jpeg'
  },
  {
    name: 'Britney Spears',
    guessNames: ['name', 'name', 'Britney Spears', 'name'],
    image: 'pictures/britney.jpeg'
  },
  {
    name: 'Jesica Alba',
    guessNames: ['name', 'name', 'name', 'Jesica Alba'],
    image: 'pictures/alba.jpeg'
  },
  {
    name: 'Halle Berry',
    guessNames: ['name', 'Halle Berry', 'name', 'name'],
    image: 'pictures/halle.jpeg'
  },
  {
    name: 'Khaleesi Dragon Queen',
    guessNames: ['name', 'name', 'name', 'Khaleesi Dragon Queen'],
    image: 'pictures/khaleesi.jpeg'
  },
  {
    name: 'Kobe Bryant',
    guessNames: ['Kobe Bryant', 'name', 'name', 'name'],
    image: 'pictures/kobe.jpg'
  },
  {
    name: 'President Obama',
    guessNames: ['name', 'name', 'name', 'President Obama'],
    image: 'pictures/Obama.jpg'
  },
  {
    name: 'Chef Ramsay',
    guessNames: ['name', 'Chef Ramsay', 'name', 'name'],
    image: 'pictures/ramsay.jpg'
  },
  {
    name: 'Tom Cruise',
    guessNames: ['Tom Cruise', 'name', 'name', 'name'],
    image: 'pictures/tom.jpeg'
  },
  {
    name: 'Will Smith',
    guessNames: ['name', 'name', 'Will Smith', 'name'],
    image: 'pictures/will.jpg'
  },

]

const picture = document.querySelector('.picture');
const buttons = document.getElementsByClassName('names');
let picNumber = 0;
let guessNameNumber = 0;
let scorePoints = 0;
let scoreBoard = document.querySelector('.score');
scoreBoard.innerHTML = `Score: ${scorePoints}`;
console.log(scorePoints)

function startRound() {
  let userGuessed = false;
  picture.setAttribute('src', gameData[picNumber].image);
  let arrayOfGuessNames = gameData[picNumber].guessNames;
  let celebSection = gameData[picNumber];
  let to;

  function buttonText() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = `${arrayOfGuessNames[i]}`;
    }
  }

  function handleClick(e) {
    let innerText = e.target.innerHTML;
    let theRightButton = e.target;
    // console.log(e.target, picNumber);
    userGuessed = true;
    if (innerText === celebSection.name) {
      theRightButton.style.backgroundColor = 'green';
      document.getElementById('timer_div').innerHTML = 'Correct!';
      scoreBoard.innerHTML = `Score: ${scorePoints +=10}`
      console.log(scoreBoard);
    } else if (innerText !== celebSection.name) {
      theRightButton.style.backgroundColor = 'red';
      document.getElementById('timer_div').innerHTML = 'Wrong!';
    }
    clearTimeout(to);
    picture.style.filter = `blur(${0}px)`;
    setTimeout(function() {
      picture.style.filter = `blur(40px)`;
      theRightButton.style.backgroundColor = '';
      document.getElementById('timer_div').innerHTML = 'Who is this?';
      startRound();
    }, 2000);

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].removeEventListener('click', handleClick);
    }
  }

  function winLose() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', handleClick);
    }
  }

  // citation: mike helped me write this with use of a link
  // https://scottiestech.info/2014/07/01/javascript-fun-looping-with-a-delay/
  function deBlur(timeLeft) {
    to = setTimeout(function() {
      document.getElementById('timer_div').innerHTML = timeLeft - 1;
      picture.style.filter = `blur(${timeLeft * 4.2}px)`;
      if ((timeLeft -= 1 && !userGuessed)) {
        // console.log('first');
        deBlur(timeLeft);
      } else {
        // console.log('Second');
        picture.style.filter = `blur(${0}px)`;
        document.getElementById('timer_div').innerHTML = 'Times Up!';
        // clearTimeout(to);
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].removeEventListener('click', handleClick);
        }
        // console.log('TIMES UP');
        clearTimeout(to);
    picture.style.filter = `blur(${0}px)`;
    setTimeout(function() {
      picture.style.filter = `blur(40px)`;
      document.getElementById('timer_div').innerHTML = 'Who is this?';
      startRound();
    }, 2000);
      }
    }, 1000);
  }

  winLose();
  buttonText();
  deBlur(10);

  // guessNameNumber++;
  picNumber++;
}

startRound();