class Form{
    constructor(){

        this.title = createElement('h1');
        this.class1 = createButton('AP History');
        this.class2 = createButton('AP Biology');
        this.class3 = createButton('Art');
        this.class4 = createButton('Choir');

    }
    display(){
        this.title.html('Keep it Together');
        this.title.position(380, 15);
        this.class1.position(50, 80);
        this.class2.position(300, 80);
        this.class3.position(50,160);
        this.class4.position(300, 160);

    }
}