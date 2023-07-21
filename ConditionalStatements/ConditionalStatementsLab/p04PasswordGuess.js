// Да се напише функция, която получава парола (текст) 
// и проверява дали дадената парола съвпада с фразата "s3cr3t!P@ssw0rd". 
// При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!". 

function passwordGuess(input){

    let pass = input[0];

    let correctpPass = "s3cr3t!P@ssw0rd";

    if(pass === correctpPass){
        console.log("Welcome")
    }  else {
        console.log("Wrong password!")
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"]);
