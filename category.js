module.exports=async ()=>{
  var chalk=require("chalk");
  var inquirer = require('inquirer');
  var word=require("./word.js");
  var letter=require("./letter.js");
  var run=require("./play.js");
  var begining;
  var array; 
  var word;
  var result=await inquirer.prompt(
      { 
        type: 'list',
        name: 'category',
        message:'Which topic are you assertive about?',
        choices: [ "Movies","Music", "Books" ]
      }
                            )
    if(result.category=="Movies"){
     array=require("./topic/movie.js");
     word=word(array);
     begining= letter(word);
     run(word,begining);

    }
    else if(result.category=="Music"){
     array=require("./topic/song.js");
     word=word(array);
     begining= letter(word);
     run(word,begining);
    }    
    else if(result.category=="Books"){
     array=require("./topic/book.js");
     word=word(array);
     begining= letter(word);
     run(word,begining);
    }  

    }