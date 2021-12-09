var readLineSync = require("readline-sync");
// console.log("How well do you know me ?");
var name = readLineSync.question("What is your name ?\n");
console.log("Welcome "+name+" to HowWellDoYouKnowAnshuman Quiz");

var score =0;
var highestScore=0;
// var nameOfHighestScorer="";

function evaluate(question,option,answer){
  console.log("\n"+question);
  var ans=readLineSync.question(option);
  console.clear();
  if(ans.toUpperCase()==answer.toUpperCase()){
    console.log("Right !!!");
    score=score+1;
  }
  else{
    console.log("Wrong!");
  }
  console.log("\nYour Score is : "+score);
}

questions=[
  {question:"What is my full name ?",option:"A)Ansuman Maity\nB)Anshuman Maity\nC)Ansh Maity\nD)None of the above\n",answer:"b"},
  {question:"Where do I live ?",option:"A)Bhubanswar\nB)Bhdarak\nC)Karanjia\nD)None of the above\n",answer:"c"},
  {question:"What is my college name\n",option:"A)IIIT-Bh\nB)IIT-Bh\nC)CET-Bh\nD)None of the above\n",answer:"a"},
  {question:"Which is my most favorite series ?",option:"A)GOT\nB)The Witcher\nC)Lucifer\nD)Strange Things\n",answer:"b"},
  {question:"Which beverage do I like the most ?",option:"A)Coffee\nB)Black Coffee\nC)Tea\nD)Coke\n",answer:"c"},
  {question:"What would I prefer my Work Office ?",option:"A)Banglore\nB)Mumbai\nC)Delhi\nD)Pune\n",answer:"c"}
  ];
  for(var i=0;i<questions.length;i++){
      evaluate(questions[i].question,questions[i].option,questions[i].answer);
  }
  // if(score>highestScore){
  //   highestScore=score;
  //   console.log("Congratulations, You are the highest Scorer.");
  // }
  // console.log("Top Score : "+highestScore);
  var highScore=[
    {
      name:"sandeep",
      score:6
    },
    {
      name:"Rohan",
      score:5
    }
  ];
  var highest=false;
  console.log("\nHigh Scores :\n");
  console.table(highScore);

  highScore.forEach( person => {
  if(score >=  person.score){
    highest = true;
  }
})
if(highest){
console.log("\n Wohhh! , "+name+", You are one of the Highest Scorer.\nPing me a screnshot of this to be in the leaderboard");
}
else{
  console.log("\n"+name+", Ping me to put your score on the board.")
}
