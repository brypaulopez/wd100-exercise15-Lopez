let robotChoices = ['Rock', 'Paper', 'Scissors'];
let rightImage = document.querySelector("#rightRobot");
let leftImage = document.querySelector("#leftHuman");

let Count = 1;
const playGame = (humanChoice) => {
    let human = humanChoice;

    // Makes the math.random a whole number for robotChoices array Math.round(Math.random() * 2)
    // Implementing a choice for the robot. Number -> Array -> words
    let robot = robotChoices[Math.round(Math.random() * 2)];

    // alert(`The choice of the human is: ${human}`);
    // alert(`The choice of the robot is: ${robot}`);

    if (human == "Rock") {
        leftRock();
        if (robot == "Rock") {
            rockImage();
            historyFunction("tie");
        }
        else if (robot == "Paper") {
            paperImage();
            scoringFunction("Robot");
            historyFunction("Robot");
        }
        else if (robot == "Scissors") {
            scissorImage();
            scoringFunction("Human");
            historyFunction("Human");
        }
        else {
            alert("Invalid choice for Robot");
        }
    }
    if (human == "Paper") {
        leftPaper();
        if (robot == "Rock") {
            rockImage();
            scoringFunction("Human");
            historyFunction("Human");
        }
        else if (robot == "Paper") {
            paperImage();
            historyFunction("tie");
        }
        else if (robot == "Scissors") {
            scissorImage();
            scoringFunction("Robot");
            historyFunction("Robot");
        }
        else {
            alert("Invalid choice for Robot");
        }
    }
    if (human == "Scissors") {
        leftScissor();
        if (robot == "Rock") {
            rockImage();
            scoringFunction("Robot");
            historyFunction("Robot");
        }
        else if (robot == "Paper") {
            paperImage();
            scoringFunction("Human");
            historyFunction("Human");
        }
        else if (robot == "Scissors") {
            scissorImage();
            historyFunction("tie");
        }
        else {
            alert("Invalid choice for Robot");
        }
    }
};

const scoringFunction = (winner) => {
    let humanScore = Number(document.querySelector("#human-score").innerHTML);
    let robotScore = Number(document.querySelector("#robot-score").innerHTML);
    // alert(`Human Score ${humanScore} and Robot Score ${robotScore}`);
    // alert(winner);
    if (winner == "Robot") {
        robotScore++;
        document.querySelector("#robot-score").innerHTML = robotScore;
        document.querySelector("#robot-score1").innerHTML = robotScore;
    }
    else if (winner == "Human") {
        humanScore++;
        document.querySelector("#human-score").innerHTML = humanScore;
        document.querySelector("#human-score1").innerHTML = humanScore;
    }
};

const historyFunction = (winner) => {
    if (winner == "Robot") {
        document.querySelector("#history").innerHTML += `Battle #${Count} winner is: ${winner}` +"<br>"; Count++;
    }
    else if (winner == "Human") {
        document.querySelector("#history").innerHTML += `Battle #${Count} winner is: ${winner}` +"<br>"; Count++;
    }
    else {
        document.querySelector("#history").innerHTML += `Battle #${Count} It's a tie!` +"<br>"; Count++;
    }
};

const rockImage = () => {
    rightImage.src = "img/humanRock.png";
}
const paperImage = () => {
    rightImage.src = "img/humanPaper.png";
}
const scissorImage = () => {
    rightImage.src = "img/humanScissor.png";
}
const leftRock = () => {
    leftImage.src = "img/humanRock.png";
}
const leftPaper = () => {
    leftImage.src = "img/humanPaper.png";
}
const leftScissor = () => {
    leftImage.src = "img/humanScissor.png";
}