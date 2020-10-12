
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinko = [];
var divisions = [];

var divisionHeight = 300;


var ground;
//Create a variable score and initialize the score to 0.

//Because there will always be one particle while calculating the score
//, we need to create a particle variable (not an array).

//Create a variable turn and initialize the turn to 0.

//Create a gamestate as start or play.

count = 0;
function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(230, 795, 500, 10);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var j = 15; j <= width; j = j + 50) {
    plinko.push(new Plinko(j, 75, 10));
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinko.push(new Plinko(j, 275, 10));
  }

  for (var j = 30; j <= width - 10; j = j + 50) {
    plinko.push(new Plinko(j, 175, 10));
  }

}


function draw() {
  background(0);
  
  stroke("blue")
  strokeWeight(5)
  textSize(30)
  //Display the score at a desired position using text.
  
  //Specify the points in between the divisions using text. One example is given below:-
  text("500", 10, 550)


  Engine.update(engine);
  ground.display();

  if (gameState === 0) {

    textSize(100);
    text("GameOver", 150, 250);

  }

  for (var b = 0; b < plinko.length; b++) {
    plinko[b].display();
  }

  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>760)
      {
            if (particle.body.position.x < 300) 
            {
                //The score should get updated with the number of points specified in the division where the ball falls.   //
              //if the particle's x position is less than 300 then the score is 500 points.

                particle=null;
                if ( turn>= 5){
                  gameState =0;
                }                           
            }


            else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
            {
                  //The score should get updated with the number of points specified in the division where the ball falls.
                  //f the particle's x position is more than 301 and less than 600 then the score is 100 points.
                  particle=null;
                  if ( turn>= 5){
                    gameState =0;
                  }  

            }
            else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
            {
                  //The score should get updated with the number of points specified in the division where the ball falls.
                  //If the particle's x position is more than 601 and less than 900 then the score is 200 points.
                  particle=null;
                  if ( turn>= 5){
                    gameState =0;
                  }  

            }      
            
      }

    }
  for (var a = 0; a < divisions.length; a++) {
    divisions[a].display();
  }

  //mousePressed();
}

function mousePressed()
{
  //Use a mousePressed() function to create a new particle 
  //and assign it to the “particle” ` variable.
  //Hint is given in Project PDF point #7
  //For every turn played, increase the turn variable by 1.
  /*
  If the player has played 5 times:
The game is over.
gameState is END.
Show that the game has ended.
  */
}
