class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.shapeColor="blue";
        stroke("yellow");
        title.html("CAR RACING GAME");
        title.position(870,100);
        var button = createButton('PLAY');
        button.position(250,200);
       if(mousePressedOver(button)){
           console.log("seema");
       }

    }
    play(){
        form.hide();
    }
}