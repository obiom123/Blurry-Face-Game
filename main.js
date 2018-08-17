

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
let picNumber = 0
let guessNameNumber = 0
console.log(document.getElementsByClassName('names'))
// buttons[0].innerHTML = 'cool beans'

function startRound() {
  let userGuessed = false;
  picture.setAttribute('src', gameData[picNumber].image)
  let arrayOfGuessNames = gameData[picNumber].guessNames;
  let celebSection = gameData[picNumber]
  let countClock = document.getElementById('timer_div')
  function buttonText() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = `${arrayOfGuessNames[i]}`
    }

  }
  buttonText()

  function winLose() {

    (function deBlur(timeLeft) {
      setTimeout(function () {
        picture.style.filter = `blur(${timeLeft * 4}px)`
  
        // var seconds_left = 10;
        var interval = setInterval(function () {
          document.getElementById('timer_div').innerHTML = --timeLeft;
  
          if (timeLeft <= 0) {
            document.getElementById('timer_div').innerHTML = 'Times Up!';
            clearInterval(interval);
          }
        }, 1000);
  
        if (timeLeft -= 1 && !userGuessed) {          // If blurValue > 0, keep going
          deBlur(timeLeft);       // Call the loop again, and pass it the current value of i
        } else {
          picture.style.filter = `blur(${0}px)`
          console.log('TIMES UP');
  
        }
      }, 1000);
    })(10);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (e) {
        let innerText = e.target.innerHTML;
        let theRightButton = e.target
        console.log(e.target);
        userGuessed = true;
        // set the blur to 0 here
        // set clock inner html to be '' 
        if (innerText === celebSection.name) {
          theRightButton.style.backgroundColor = 'green'
        } else if (innerText !== celebSection.name) {
          theRightButton.style.backgroundColor = 'red'
        }

      });

    }
  }

  let pointsValue = 10;


  // citation: mike helped me write this with use of a link
  // https://scottiestech.info/2014/07/01/javascript-fun-looping-with-a-delay/
  



  guessNameNumber++;
  picNumber++;
  winLose()

}

startRound();
// startRound()


