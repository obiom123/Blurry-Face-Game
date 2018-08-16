const pictures = [
    {
        name: 'Justin Beiber',
        guessNames: ['Justin Beiber', 'Eleven, from Stanger Things', 'Lindsay Lohan', 'Aaron Carter'],
        image: 'pictures/beiber.jpeg'
    },
    {
        name: 'Britney Spears',
        guessNames: ['correct name', 'false name', 'false name', 'false name'],
        image: 'pictures/britney.jpeg'
    },
    {
        name: 'Jesica Alba',
        guessNames: ['correct name', 'false name', 'false name', 'false name'],
        image: 'pictures/alba.jpeg'
    },
    {
        name: 'Halle Berry',
        guessNames: ['correct name', 'false name', 'false name', 'false name'],
        image: 'pictures/halle.jpeg'
    },
    {
        name: 'Khaleesi Dragon Queen',
        guessNames: ['correct name', 'false name', 'false name', 'false name'],
        image: 'pictures/khaleesi.jpeg'
    },
    {
        name: 'Kobe Bryant',
        guessNames: ['correct name', 'false name', 'false name', 'false name'],
        image: 'pictures/kobe.jpg'
    },
    {
        name: 'President Obama',
        guessNames: ['correct name', 'false name', 'false name', 'false name'],
        image: 'pictures/Obama.jpg'
    },
    {
        name: 'Chef Ramsay',
        guessNames: ['correct name', 'false name', 'false name', 'false name'],
        image: 'pictures/ramsay.jpg'
    },
    {
        name: 'Tom Cruise',
        guessNames: ['correct name', 'false name', 'false name', 'false name'],
        image: 'pictures/tom.jpeg'
    },
    {
        name: 'Will Smith',
        guessNames: ['correct name', 'false name', 'false name', 'false name'],
        image: 'pictures/will.jpg'
    },

]

const picture = document.querySelector('.picture')
picture.setAttribute('src', pictures[0].image)