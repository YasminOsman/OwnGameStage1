class Form{
    constructor(){

    }
/*
    hideAP(){
        this.class1.hide();
        this.class2.hide();
    }
    hideElec(){
        this.class3.hide();
        this.class4.hide();
        this.class5.hide();
        this.class6.hide();
    }
*/
    display(){
        var title = createElement('h1');
        title.html('Keep it Together');
        title.position(displayWidth/2-80, 60);
        var class1 = createButton('AP History');
        var class2 = createButton('AP Biology');
        class1.position(displayWidth/3-10, displayHeight/2);
        class2.position(2*displayWidth/3-10, displayHeight/2);
        class1.mousePressed(function(){
            class1.hide();
            class2.hide();
                   var class3 = createButton('Art');
            var class4 = createButton('Choir');
            class3.position(displayWidth-60, displayHeight/2);
            class4.position(displayWidth/3-10, displayHeight/2+40);
        })
        class2.mousePressed(function(){
            var class5 = createButton('Computer Science');
            var class6 = createButton('Jewelry');
            class5.position(2*displayWidth/3-10, displayHeight/2+40);
            class6.position(displayWidth-60, displayHeight/2+40);
        })
        class3.mousePressed(function(){
            
        })
    }
}