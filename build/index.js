
// LEFT DICE


function getRandomNumber1 () {
    var randomNumber1 = Math.floor(Math.random() *6) + 1;
    return randomNumber1; 
}



    var leftDice = getRandomNumber1();

    switch (leftDice) {
        case 1:
            document.querySelector('.dice1').setAttribute("src", "img/dice1.png")
            break;
        case 2:
            document.querySelector('.dice1').setAttribute("src", "img/dice2.png")
            break;
        case 3:
            document.querySelector('.dice1').setAttribute("src", "img/dice3.png")
            break;
        case 4:
            document.querySelector('.dice1').setAttribute("src", "img/dice4.png")
            break;
        case 5:
            document.querySelector('.dice1').setAttribute("src", "img/dice5.png")
            break;
        case 6:
            document.querySelector('.dice1').setAttribute("src", "img/dice6.png")
            break;
        
        default:
            break;
    }


  //  RIGHT DICE

    function getRandomNumber2 () {
        var randomNumber2 = Math.floor(Math.random() *6) + 1;
        return randomNumber2; 
    }
    
    
    
        var rightDice = getRandomNumber2();
    
        switch (rightDice) { 
            case 1:
                document.querySelector('.dice2').setAttribute("src", "img/dice1.png")
                break;
            case 2:
                document.querySelector('.dice2').setAttribute("src", "img/dice2.png")
                break;
            case 3:
                document.querySelector('.dice2').setAttribute("src", "img/dice3.png")
                break;
            case 4:
                document.querySelector('.dice2').setAttribute("src", "img/dice4.png")
                break;
            case 5:
                document.querySelector('.dice2').setAttribute("src", "img/dice5.png")
                break;
            case 6:
                document.querySelector('.dice2').setAttribute("src", "img/dice6.png")
                break;
            
            default:
                break;
        }



// DECISION LOGIC

        if (leftDice > rightDice) {
            document.querySelector('.title').innerHTML = "Player 1 Wins!";
        }
        else if (rightDice > leftDice) {
            document.querySelector('.title').innerHTML = "Player 2 Wins!";
        }
        else {
            document.querySelector('.title').innerHTML = "Draw!";
        }


