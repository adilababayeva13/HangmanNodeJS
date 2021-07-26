module.exports=(word,Begining)=>{
var inquirer=require("inquirer");
var Again=require("./category.js");
var chalk=require("chalk");
var incorrect=require("./hangman.js");
var guessedLetter=[];
var remains=7;
function play(){
   AskTheGuess();
}

async function PlayAgain (){
    var result=await inquirer.prompt(
        { 
            type: 'confirm',
            name: 'playAgain',
            message:"Would you like to play again?",
        }                           );
        if(result.playAgain){
            Again();
        }
        else{
            console.log(chalk.yellow("It was great GAME, see you soon!"));
            process.exit();  
        }
    
}

async function AskTheGuess() {
    var n=Begining.search("⭐");
    if(n==-1){
        console.log('Hey,congratulations.You won!!!');
        return PlayAgain();
    }
var result=await inquirer.prompt(
    { 
        type: 'input',
        name: 'letter',
        message:"What's your guess?",
        validate: (result)=>{
            return /[a-z0-9]/i.test(result);
                            }
    }
    
                                );
var letter=result.letter.toLowerCase();
CheckLetter(letter);
                                   }

function CheckLetter(letter){
    var check=0;
    var index;
    var herf;
    var ar = Begining.split('');
 for(let i=0;i<Begining.length;i++){
     if(word[i]==letter){
         check++;
         guessedLetter.push({
            index:i,
            letter:word[i]
        });
     }
 }
 for(let i=0;i<guessedLetter.length;i++){
     index=guessedLetter[i].index;
     herf=guessedLetter[i].letter;
     ar.splice(index, 1, herf);
 };
Begining=ar.join('')
 if(check==0){
     remains--;

if(remains==0){
    console.log(chalk.cyan("YOU LOST!!!"));
    incorrect(remains);
    PlayAgain();
    return;
}
else{
console.log(chalk.red("Your guees was incorrect!"));
incorrect(remains);
}
 }

console.log(Begining);
 AskTheGuess();
}                                   


play();

}