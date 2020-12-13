class Player{
    constructor(){
        var options = {
            isStatic: true

        }
        this.body = Bodies.rectangle(200,200,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }

}