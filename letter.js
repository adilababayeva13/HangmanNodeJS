module.exports=(word)=>{
    var Begining=word.replace(/[a-z0=9]/gi, "⭐");
    console.log(Begining);
    return Begining;
}