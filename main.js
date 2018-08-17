

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
    picture.setAttribute('src', gameData[picNumber].image)
    let arrayOfGuessNames = gameData[picNumber].guessNames;
    let celebSection = gameData[picNumber]
    function buttonText() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = `${arrayOfGuessNames[i]}`
        }

    }
    buttonText()

    function winLose() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (e) {
                let innerText = e.target.innerHTML;
                let theRightButton = e.target
                console.log(e.target);
                if (innerText === celebSection.name) {
                    theRightButton.style.backgroundColor = 'green'
                }

            });

        }
    }
    // function (e) {
    //     console.log(e.target)
    //     if (buttons[i] === gameData[picNumber].name) {

    //     }

    guessNameNumber++;
    picNumber++;
    winLose()

}

startRound();
startRound()