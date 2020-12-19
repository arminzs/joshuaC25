class Bird extends Parent{
  //Parent - super-base
  //Child - sub - derived 
  constructor(x, y) {
     //super() to access the parent's constructor
     super(x,y,50,50);//first line --
    this.image =loadImage("sprites/bird.png")
    
     
  }
  display(){
     this.body.position.x=mouseX;
     this.body.position.y=mouseY;
     super.display();
     
  }
};
