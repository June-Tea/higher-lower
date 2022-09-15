let max = getMaxNum();

let num = Math.floor(Math.random()*max)+1

let header = document.getElementsByClassName("header")[0];
header.innerHTML = `Guess a number between 1 and ${max}`

let guesses = [];

function hl(){
    let field = document.getElementById("guess");
    
    if (field.value == "") {
        return;
    }
    
    let guess = Number(field.value);
    
    field.value = "";
    
    
    let p  = document.getElementsByClassName("results")[0].children[0];
    
    if (isNaN(guess)) {
        p.innerHTML = "That is not a number!"
    }
    else if (guess < 1 || guess > max) {
        p.innerHTML = "That number is not in range, try again."
    }
    else if (guesses.includes(guess)) {
        p.innerHTML = `You already guessed ${guess}, try something else!`
    }
    else {
        guesses.push(guess);
        if (guess < num) {
            p.innerHTML = "No, try a higher number";
        }
        else if (guess > num) {
            p.innerHTML = "No, try a lower number";
        }
        else if (guess == num) {
            document.getElementById("guess").disabled= true;
            document.getElementById("guess-button").disabled= true;
            let s = "You got it!"
            
            if (guesses.length == 1) {
                s += ` And it only took you ${guesses.length} try!!`
            }
            else {
                s +=  ` It took you ${guesses.length} tries and your guesses were ${guesses[0]}`
                for (let i = 1; i < guesses.length; i++) {
                    s += `, ${guesses[i]}`;
                }
                s += "."
            }
            p.innerHTML = s;
        } 
    }

}

function getMaxNum(){
    let keepGoing = true;
    let num;

    while(keepGoing) {
        num = Number(window.prompt("Enter a maximum number:"));
        
        if (num > 0 && num != NaN) {
            keepGoing = false;
        }
    }
    return Math.round(num);
}
