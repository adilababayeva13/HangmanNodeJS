module.exports=(remains)=>{
    var chalk=require("chalk");
if(remains==6){
    console.log(chalk.green(`
  +---+
  |   |
      |
      |
      |
      |
=========
    `))
}
else if(remains==5){
    console.log(chalk.green(`
    +---+
    |   |
    O   |
        |
        |
        |
  =========
    `))
}
else if(remains==4){
    console.log(chalk.yellow(`
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========
    `))
}
else if(remains==3){
    console.log(chalk.yellow(`
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========
    `))
}
else if(remains==2){
    console.log(chalk.red(`
    +---+
    |   |
    O   |
   /|\  |
        |
        |
  =========
    `))
}
else if(remains==1){
    console.log(chalk.red(`
    +---+
    |   |
    O   |
   /|\  |
   /    |
        |
  =========
    `))
}
else if(remains==0){
    console.log(chalk.red(`
    +---+
    |   |
    O   |
   /|\  |
   / \  |
        |
  =========
    `))
}
}