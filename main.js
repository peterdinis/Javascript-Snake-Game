window.onload=function() {
    Canvas=document.getElementById("game");
    CTX=Canvas.getContext("2d");
    document.addEventListener("keydown",StlacenieSipky);
    setInterval(game,1000/15);
}

Bx=By=0;
SnakeX=SnakeY=10;
AppleX=AppleY=5;
Telo=[];
Dlzka = 5;
Bx=Math.floor(Canvas.width/scale);
By=Math.floor(Canvas.height/scale);

function stena() {
    if(SnakeX<0) {SnakeX= Bx-1;}
    if(SnakeX>Bx-1) {SnakeX= 0;}
    if(SnakeY<0) {SnakeY= By-1;}
    if(SnakeY>By-1) {SnakeY= 0;}
}

function game() {
    stena();
    SnakeX+=DirX;
    SnakeY+=DirY;
    CTX.fillStyle="black";
    CTX.fillRect(0,0,Canvas.width,Canvas.height);

    CTX.fillStyle="lime";
    for(var i=0; i<Telo.length; i++) {
        CTX.fillRect(Telo[i].x*scale,Telo[i].y*scale,15,15);
        if(Telo[i].x===SnakeX && Telo[i].y===SnakeY) {Dlzka = 5;}
    }
    Telo.push({x:SnakeX,y:SnakeY});
    while(Telo.length>Dlzka) {Telo.shift();}

    if(AppleX===SnakeX && AppleY===SnakeY) {
        Dlzka++;
        AppleX=Math.floor(Math.random()*Bx);
        AppleY=Math.floor(Math.random()*By);
    }

    CTX.fillStyle="red";
    CTX.fillRect(AppleX*17,AppleY*17,15,15);
}

function StlacenieSipky(Sipka) {
    switch(Sipka.keyCode) {
        case 37:
            DirX=-1;DirY=0;
            break;
        case 38:
            DirX=0;DirY=-1;
            break;
        case 39:
            DirX=1;DirY=0;
            break;
        case 40:
            DirX=0;DirY=1;
            break;
    }

}
