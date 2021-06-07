var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a75be735-491f-40a8-b6ef-7a747c0f3659","31795314-29b2-449e-8fac-9d0f292ed5c0","894a8ecc-3bd8-4952-9a50-22be222da468","2585fa06-d436-4618-bb4f-169041bf2a8e"],"propsByKey":{"a75be735-491f-40a8-b6ef-7a747c0f3659":{"name":"water","sourceUrl":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png","frameSize":{"x":400,"y":385},"frameCount":1,"looping":true,"frameDelay":2,"version":"bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png"},"31795314-29b2-449e-8fac-9d0f292ed5c0":{"name":"crocodile","sourceUrl":null,"frameSize":{"x":390,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":".A09heGQm5.aNQHhDbSSkcPcKQTSByOk","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":150},"rootRelativePath":"assets/31795314-29b2-449e-8fac-9d0f292ed5c0.png"},"894a8ecc-3bd8-4952-9a50-22be222da468":{"name":"bird","sourceUrl":"assets/api/v1/animation-library/gamelab/7cOQYj6ohupOvwrSJIjaCw2tRI7Z4jnR/category_animals/birdside_05.png","frameSize":{"x":400,"y":294},"frameCount":1,"looping":true,"frameDelay":2,"version":"7cOQYj6ohupOvwrSJIjaCw2tRI7Z4jnR","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":294},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7cOQYj6ohupOvwrSJIjaCw2tRI7Z4jnR/category_animals/birdside_05.png"},"2585fa06-d436-4618-bb4f-169041bf2a8e":{"name":"virus","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backGround;
var crocodile;
var bird,birdGroup;
var corona,coronaGroup;
var rand,rand1;
var gameState="PLAY";

var score=0;
playSound("assets/category_instrumental/digital_music_2.mp3", true);

//creating back ground here
backGround=createSprite(200,200,250,250);
backGround.setAnimation("water");
backGround.scale=1.1;

//creating the crocodile
crocodile=createSprite(110,370,10,10);
crocodile.setAnimation("crocodile");
crocodile.scale=0.4;

birdGroup=new Group();
coronaGroup=new Group();

function draw() {




if(gameState==="PLAY"){
spawnbird();
spawnvirus();

crocodile.y=World.mouseY;
drawSprites();
if(birdGroup.isTouching(crocodile)){
score=score+1;
birdGroup.destroyEach();
}
if(coronaGroup.isTouching(crocodile)){
gameState="END";
fill("black");
textSize(20);
text("GameOver!!WellPlayed!!",110,240);
text("Press space key to restart!!",110,265);
}

}

else if(gameState==="END"){
birdGroup.setVelocityXEach(0);
coronaGroup.setVelocityXEach(0);
coronaGroup.destroyEach();
birdGroup.destroyEach();
stopSound();




}

if(keyDown("space")){
reset();
}






fill("black") ;
textSize(20);
text("Score="+score,280,370);
}



function spawnbird(){
rand=Math.round(random(10,200));

if(frameCount%100==0){
bird=createSprite(420,rand,100,100);
bird.setAnimation("bird");
bird.scale=0.13;
bird.velocityX=-16;
birdGroup.setLifetimeEach(170);
birdGroup.add(bird);
}
}

function spawnvirus(){
rand1=Math.round(random(50,320));

if(frameCount%140==0){
corona=createSprite(410,rand,100,100);
corona.setAnimation("virus");
corona.scale=0.1;
corona.velocityX=-16;
coronaGroup.setLifetimeEach(170);
coronaGroup.add(corona);
}
}

function reset(){
gameState="PLAY";
score=0;
playSound("assets/category_instrumental/digital_music_2.mp3", true);

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
