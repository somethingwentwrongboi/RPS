function play() {
    var pscore = 0
    var cscore = 0

    //Start Up
    var playBtn = document.querySelector(".intro button")
    var introscreen = document.querySelector(".intro")
    var match = document.querySelector(".match")
    playBtn.addEventListener("click", () => {
        introscreen.classList.add("fadeOut")
        match.classList.add("fadeIn")
    })


    //MATCH UP
    var options = document.querySelectorAll(".options button")
    var phand = document.querySelector(".player-hand")
    var chand = document.querySelector(".computer-hand")
    var hands = document.querySelectorAll(".hands img")

    hands.forEach(hand => {
        hand.addEventListener('animationend', function () {
            this.style.animation = ""
        })
    })
    //COMPUTER CHOICE
    var computerOptions = ['rock', 'paper', 'scissors']

    //TO SELECT BUTTONS AND THEIR CHOICE
    options.forEach(option => {
        option.addEventListener("click", function () {
            var computerNumber = Math.floor(Math.random() * 3)
            var computerchoice = computerOptions[computerNumber]

            setTimeout(() => {
                //CALL FUNCTIONS
                comparehands(this.textContent, computerchoice)
                //UPDATE PICTURE
                phand.src = `./assets/${this.textContent}.png`
                chand.src = `./assets/${computerchoice}.png`
            }, 2000)
            phand.style.animation = "shakePlayer 2s ease"
            chand.style.animation = "shakeComputer 2s ease"
        })
    })

    const updateScore = () => {
        var playerScore = document.querySelector(".player-score p")
        var computerScore = document.querySelector(".computer-score p")
        playerScore.textContent = pscore
        computerScore.textContent = cscore
    }

    //CONDITIONS
    const comparehands = (playerChoice, computerchoice) => {
        var winner = document.querySelector(".winner")
        if (playerChoice === computerchoice) {
            winner.textContent = "It is a tie"
            return
        }
        //rock
        if (playerChoice === "rock") {
            if (computerchoice === 'scissors') {
                winner.textContent = "Player Wins"
                pscore++
                updateScore()
                return
            } else {
                winner.textContent = "Computer Wins"
                cscore++
                updateScore()
                return
            }
        }
        //paper
        if (playerChoice === "paper") {
            if (computerchoice === 'scissors') {
                winner.textContent = "Computer Wins"
                cscore++
                updateScore()
                return
            } else {
                winner.textContent = "Player Wins"
                pscore++
                updateScore()
                return
            }
        }
        //gunting
        if (playerChoice === "scissors") {
            if (computerchoice === 'rock') {
                winner.textContent = "Computer Wins"
                cscore++
                updateScore()
                return
            } else {
                winner.textContent = "Player Wins"
                pscore++
                updateScore()
                return
            }
        }
    }

}
play()


