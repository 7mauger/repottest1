//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function Octocat(n,a){
  this.name = n;
  this.arms = a;

  this.slap=function(){
    for(var a=0;a<this.arms;a++){
      console.log("SLAP")
    }
  };
}
//Write your 3 new octocat objects below here.
  var fluffy = new Octocat("Fluffy",6);
  var fuzzy = new Octocat("Fuzzy",7);
  var furry = new Octocat("Furry",8);
