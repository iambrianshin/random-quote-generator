$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var author;
  getQuote();
  
function getQuote(){
  var quotes = ["Got to catch them all", "Would you kindly?", "But it's me Mario.", "Do a barrel roll", "Welcome to Summoner's Rift", "Hey! Listen!", "Jobs done.", "You must construct additional pylon.", "Finish him!"];
  var author1 = ["-Ash Kethchum", "-Bioshock", "-Mario", "-Star Fox", "-League of Legends", "-League of Zelda: Ocarina of Time", "-Warcraft II", "-StarCraft", "-Mortal Combat"];
  randomNum = Math.floor(Math.random()*quotes.length);
  randomQuote = quotes[randomNum];
  author = author1[randomNum];
  $(".quote").text(randomQuote);
  $(".author").text(author);
}
  
  $("#new-quote").on("click", function(){
    getQuote();
  })
  
  $("#tweet-quote").on("click",function(){
  window.open("http://twitter.com/intent/tweet?text="+randomQuote + " " + author);
  });
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})
