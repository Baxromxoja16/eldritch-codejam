const images = document.querySelectorAll('.start_images img');
const diff = document.querySelectorAll('.diff-container .diff');
const diffContainer = document.querySelector('.diff-container');
const deckContainer = document.querySelector('.deck-container');
const shuffleButton = document.querySelector('.shuffle-button');
const currentState = document.querySelector('.current-state');

const ancients = {
    azathoth: './Azathoth.png',
    cthulhu: './Cthulthu.png',
    iogSothoth: './IogSothoth.png',
    shubNiggurath: './ShubNiggurath.png'
}
const ancientsData = [
    {
        id: 'azathoth',
        name: 'azathoth',
        cardFace: ancients.azathoth,
        firstStage: {
            greenCards: 1,
            blueCards: 1,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 2,
            blueCards: 1,
            brownCards: 3,
        },
        thirdStage: {
            greenCards: 2,
            blueCards: 0,
            brownCards: 4,
        },
    },
    {
        id: 'cthulhu',
        name: 'cthulhu',
        cardFace: ancients.cthulhu,
        firstStage: {
            greenCards: 0,
            blueCards: 2,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 1,
            blueCards: 0,
            brownCards: 3,
        },
        thirdStage: {
            greenCards: 3,
            blueCards: 0,
            brownCards: 4,
        },
    },
    {
        id: 'iogSothoth',
        name: 'iogSothoth',
        cardFace: ancients.iogSothoth,
        firstStage: {
            greenCards: 0,
            blueCards: 1,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 2,
            blueCards: 1,
            brownCards: 3,
        },
        thirdStage: {
            greenCards: 3,
            blueCards: 0,
            brownCards: 4,
        },
    },
    {
        id: 'shubNiggurath',
        name: 'shubNiggurath',
        cardFace: ancients.shubNiggurath,
        firstStage: {
            greenCards: 1,
            blueCards: 1,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 3,
            blueCards: 1,
            brownCards: 2,
        },
        thirdStage: {
            greenCards: 2,
            blueCards: 0,
            brownCards: 4,
        },
    },
]

let i
images.forEach((x, i) => {
    x.addEventListener("click", () => {
        shuffleButton.classList.remove("d-none")
        images.forEach((item) => {
            item.classList.remove("border")
        })
        x.classList.add("border")
        diffContainer.classList.remove("d-none")

        diff.forEach(stages => {
            stages.addEventListener("click", () => {
                diff.forEach(stg => stg.classList.remove("active"))
                deckContainer.classList.remove("d-none")
                stages.classList.add("active")

                shuffleButton.addEventListener("click", () => {
                    shuffleButton.classList.add("d-none")
                    const data = ancientsData[i]

                    let arrLine = []
                    let arrFirst = []
                    let arrSecond = []
                    let arrThird = []

                    arrFirst.push(data.firstStage.greenCards)
                    arrFirst.push(data.firstStage.brownCards)
                    arrFirst.push(data.firstStage.blueCards)

                    arrSecond.push(data.secondStage.greenCards)
                    arrSecond.push(data.secondStage.brownCards)
                    arrSecond.push(data.secondStage.blueCards)

                    arrThird.push(data.thirdStage.greenCards)
                    arrThird.push(data.thirdStage.brownCards)
                    arrThird.push(data.thirdStage.blueCards)

                    arrLine.push(arrFirst)
                    arrLine.push(arrSecond)
                    arrLine.push(arrThird)

                    currentState.innerHTML = `
                    <div class="stage-container"><span class="stage-text ">Первая стадия</span>
                        <div class="dots-container">
                            <div class="dot green">${arrLine[0][0]}</div>
                            <div class="dot brown">${arrLine[0][1]}</div>
                            <div class="dot blue">${arrLine[0][2]}</div>
                        </div>
                     </div>
                    <div class="stage-container"><span class="stage-text ">Вторая стадия</span>
                        <div class="dots-container">
                            <div class="dot green">${arrLine[1][0]}</div>
                            <div class="dot brown">${arrLine[1][1]}</div>
                            <div class="dot blue">${arrLine[1][2]}</div>
                        </div>
                    </div>
                    <div class="stage-container"><span class="stage-text ">Третья стадия</span>
                        <div class="dots-container">
                            <div class="dot green">${arrLine[2][0]}</div>
                            <div class="dot brown">${arrLine[2][1]}</div>
                            <div class="dot blue">${arrLine[2][2]}</div>
                        </div>
                    </div>
                    <div class="deck" style="background: url(./assets/mythicCardBackground.png);></div>
                    <div class="last-card" ></div>
                    `
                    const deck = document.querySelector('.deck');
                    deck.addEventListener('click', () => {
                        i = Math.floor(Math.random() * 3)
                        
                        // add your code

                    })
                })
            })
        })
    })
})





