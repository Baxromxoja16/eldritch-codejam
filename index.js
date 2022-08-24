const images = document.querySelectorAll('.start_images img');
const diff = document.querySelectorAll('.diff-container .diff');
const diffContainer = document.querySelector('.diff-container');
const deckContainer = document.querySelector('.deck-container');
const shuffleButton = document.querySelector('.shuffle-button');
const currentState = document.querySelector('.current-state');
alert('сначала нажмите на карту, затем начните уровень и игру. затем повторите это снова');

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
let id = 0
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

                    currentState.innerHTML = `
                    <div class="stage-container"><span class="stage-text">Первая стадия</span>
                        <div class="dots-container">
                            <div class="dot green">${data.firstStage.greenCards}</div>
                            <div class="dot brown">${data.firstStage.brownCards}</div>
                            <div class="dot blue">${data.firstStage.blueCards}</div>
                        </div>
                     </div>
                    <div class="stage-container"><span class="stage-text">Вторая стадия</span>
                        <div class="dots-container">
                            <div class="dot green">${data.secondStage.greenCards}</div>
                            <div class="dot brown">${data.secondStage.brownCards}</div>
                            <div class="dot blue">${data.secondStage.blueCards}</div>
                        </div>
                    </div>
                    <div class="stage-container"><span class="stage-text">Третья стадия</span>
                        <div class="dots-container">
                            <div class="dot green">${data.thirdStage.greenCards}</div>
                            <div class="dot brown">${data.thirdStage.brownCards}</div>
                            <div class="dot blue">${data.thirdStage.blueCards}</div>
                        </div>
                    </div>
                    <div class="deck" style="background: url(./assets/mythicCardBackground.png)"></div>
                    <div class="last-card" ></div>
                    `
                    const deck = document.querySelector('.deck');

                    deck.addEventListener('click', () => {
                        const lastCard = document.querySelector('.last-card');
                        const stageText = document.querySelectorAll('.stage-text');
                        i = Math.floor(Math.random() * 3)
                        id = Math.floor(Math.random() + 1) * 12
                        const dot = document.querySelectorAll('.dot');

                        console.log();
                        const names = dot[i].getAttribute("class").split(" ")[1]
                        lastCard.style.background = `url(./assets/MythicCards/${names}/${names}${id}.png)`
                        lastCard.style.backgroundSize = "cover"

                        if (dot[0].textContent > 0 || dot[1].textContent > 0 || dot[2].textContent > 0) {
                            if (dot[i].textContent > 0) {
                                dot[i].textContent = dot[i].textContent - 1
                            } else if (dot[i + 1] > 0) {
                                dot[i].textContent = dot[i].textContent - 1
                            } else if (dot[i - 1] > 0) {
                                dot[i].textContent = dot[i].textContent - 1
                            }
                            if (dot[0].textContent == 0 && dot[1].textContent == 0 && dot[2].textContent == 0) {
                                stageText[0].classList.add("done")
                            }
                        } else if (dot[3].textContent > 0 || dot[4].textContent > 0 || dot[5].textContent > 0) {
                            if (dot[i + 3].textContent > 0) {
                                dot[i + 3].textContent = dot[i + 3].textContent - 1
                            } else if (dot[i + 3 + 1] > 0) {
                                dot[i + 3].textContent = dot[i + 3].textContent - 1
                            } else if (dot[i + 3 - 1] > 0) {
                                dot[i + 3].textContent = dot[i + 3].textContent - 1
                            }
                            if (dot[3].textContent == 0 && dot[4].textContent == 0 && dot[5].textContent == 0) {
                                stageText[1].classList.add("done")
                            }
                        } else if (dot[6].textContent > 0 || dot[7].textContent > 0 || dot[8].textContent > 0) {
                            if (dot[i + 6].textContent > 0) {
                                dot[i + 6].textContent = dot[i + 6].textContent - 1
                            } else if (dot[i + 6 + 1] > 0) {
                                dot[i + 6].textContent = dot[i + 6].textContent - 1
                            } else if (dot[i + 6 - 1] > 0) {
                                dot[i + 6].textContent = dot[i + 6].textContent - 1
                            }
                            if (dot[6].textContent == 0 && dot[7].textContent == 0 && dot[8].textContent == 0) {
                                stageText[2].classList.add("done")
                            }
                        }

                        currentState.appendChild(lastCard)

                    })
                })
            })
        })
    })
})

// if (dot[i + 6].classList.contains("green")) {
//     lastCard.style.background = `url(./assets/MythicCards/green/green${id}.png)`
// }


