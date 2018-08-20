
const gameData = [
  {
    name: 'Justin Beiber',
    guessNames: ['Lindsey Lohan', 'Eleven, from Stanger Things', 'Justin Beiber', 'Miley Cyrus'],
    image: 'pictures/beiber.jpg'
  },
  {
    name: 'Britney Spears',
    guessNames: ['Adele', 'Lady Gaga', 'Britney Spears', 'Ivanka Trump'],
    image: 'pictures/britney.jpeg'
  },
  {
    name: 'Jesica Alba',
    guessNames: ['Ariana Grande', 'Selena Gomez', 'Gloria from Modern Family', 'Jesica Alba'],
    image: 'pictures/alba.jpeg'
  },
  {
    name: 'Halle Berry',
    guessNames: ['Olivia Pope, Scandal', 'Halle Berry', 'Beyonce', 'Rihanna'],
    image: 'pictures/halle.jpeg'
  },
  {
    name: 'Khaleesi Dragon Queen',
    guessNames: ['Rachel McAdams', 'Kim Kardashian', 'Scarlett Johansson', 'Khaleesi Dragon Queen'],
    image: 'pictures/khaleesi.jpeg'
  },
  {
    name: 'Kobe Bryant',
    guessNames: ['Kobe Bryant', 'Lebron James', 'Michael Jordan', 'Magic Johnson'],
    image: 'pictures/kobe.jpg'
  },
  {
    name: 'President Obama',
    guessNames: ['Kid from Kid&Play', 'The Fresh Prince', 'Cuban Gooding Jr.', 'President Obama'],
    image: 'pictures/Obama.jpg'
  },
  {
    name: 'Chef Ramsay',
    guessNames: ['Regis Philbin', 'Chef Ramsay', 'Dr. Phil', 'Alex Trebek'],
    image: 'pictures/ramsay.jpg'
  },
  {
    name: 'Tom Cruise',
    guessNames: ['Tom Cruise', 'Tom Hanks', 'Leonardo DiCaprio', 'Bradpit'],
    image: 'pictures/tom.jpeg'
  },
  {
    name: 'Mike, Master Coder/Biker',
    guessNames: ['Michael Keaton', 'Magic Mike', 'Mike, Master Coder/Biker', 'Michael J. Fox'],
    image: 'pictures/mike.png'
  },
  {
    name: 'Erlich Bachman, Silicon Valley',
    guessNames: ['Eric Lewis, Master Coder/Youtuber', 'Erlich Bachman, Silicon Valley', 'Chandler, Friends', 'Mark Zuckerberg'],
    image: 'pictures/Erlich.jpg'
  },
  {
    name: 'Kevin Hart',
    guessNames: ['Chris Tucker', 'Kanye West', 'Denzel Washington', 'Kevin Hart'],
    image: 'pictures/Hart.jpg'
  },
  {
    name: 'Trump With A Man-Bun',
    guessNames: ['Merly Streep', 'Trump With A Man-Bun', 'Mrs. Doubtfire', 'Your GrandMother'],
    image: 'pictures/trump.jpg'
  },
  {
    name: 'Hermione, From Harry Potter',
    guessNames: ['Kat, From Class', 'iCarly', 'Hannah Baker, 13 Reasons Why', 'Hermione, From Harry Potter'],
    image: 'pictures/Hermione.jpg'
  },


]

const picture = document.querySelector('.picture');
const buttons = document.getElementsByClassName('names');
let picNumber = 0;
let guessNameNumber = 0;
let scorePoints = 0;
let scoreBoard = document.querySelector('.score');
scoreBoard.innerHTML = `Score: ${scorePoints}`;
const wrongsound = document.getElementById('wrongsound');
const correctsound = document.getElementById('correctsound');

function startRound() {
  let userGuessed = false;
  if (picNumber === gameData.length) {
    confirm(`Your Final Score: ${scorePoints}/150. Play Again?`)
    window.location.reload();
    return;
  }
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
    userGuessed = true;
    if (innerText === celebSection.name) {
      theRightButton.style.backgroundColor = 'green';
      document.getElementById('timer_div').innerHTML = 'Correct!';
      scoreBoard.innerHTML = `Score: ${scorePoints += 10}`
      correctsound.play();
    } else if (innerText !== celebSection.name) {
      theRightButton.style.backgroundColor = 'red';
      document.getElementById('timer_div').innerHTML = 'Wrong!';
      wrongsound.play();
    }
    clearTimeout(to);
    picture.style.filter = `blur(${0}px)`;
    setTimeout(function () {
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
    to = setTimeout(function () {
      document.getElementById('timer_div').innerHTML = timeLeft - 1;
      picture.style.filter = `blur(${timeLeft * 4.2}px)`;
      if ((timeLeft -= 1 && !userGuessed)) {
        deBlur(timeLeft);
      } else {
        picture.style.filter = `blur(${0}px)`;
        document.getElementById('timer_div').innerHTML = 'Times Up!';
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].removeEventListener('click', handleClick);
        }
        clearTimeout(to);
        picture.style.filter = `blur(${0}px)`;
        setTimeout(function () {
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
  picNumber++;
}

startRound();