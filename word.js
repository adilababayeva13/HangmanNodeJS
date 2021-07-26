module.exports=(array)=>{
var len=array.length;
var i=Math.floor(Math.random() * len)+1;
var word=array[i];
return word.toLowerCase();
}