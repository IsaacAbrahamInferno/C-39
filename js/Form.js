class Form {
constructor(){
    this.input=createInput ('Your Name')
    this.button = createButton("Click The Screen")
    this.greeting = createElement('h3')
}
display(){
var title = createElement('h2')
title.html("Multiplayer Car Racing Game")
title.position(displayWidth/2-50,0);
 

 this.input.position(displayWidth/2-40,displayHeight/2-80);

 
 
 this.button.position(displayWidth/2+30,displayHeight/2);
 
 

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();

player.name = this.input.value();
this.greeting.html("Welcome "+player.name)
this.greeting.position(displayWidth/2-70,displayHeight/4);
playerCount=playerCount+1;
player.index=playerCount;
player.update()
player.updateCount(playerCount)
    
})
}

hide(){
    this.input.hide();
    this.button.hide();   
    this.greeting.hide();   
};

}
