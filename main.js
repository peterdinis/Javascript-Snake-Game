window.onload = function() {
    Canvas=document.getElementById("Hra");
    CTX=Canvas.getContext("2d");
    BX=Math.floor(Canvas.width/17);
    BY=Math.floor(Canvas.height/17);
    AX=Math.floor(Math.random()*BX);
    AY=Math.floor(Math.random()*BY);
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}

SX=SY=10;
X=Y=0;
Telo=[];
Dlzka = 5;

function game() {
    SX+=X;
    SY+=Y;
    if(SX<0) {SX= BX-1;}
    if(SX>BX-1) {SX= 0;}
    if(SY<0) {SY= BY-1;}
    if(SY>BY-1) {SY= 0;}

    CTX.fillStyle="black";
    CTX.fillRect(0,0,Canvas.width,Canvas.height);

    CTX.fillStyle="lime";
    for(var i=0; i<Telo.length; i++) {
        CTX.fillRect(Telo[i].x*17,Telo[i].y*17,15,15);
        if(Telo[i].x===SX && Telo[i].y===SY) {Dlzka = 5;}
    }
    Telo.push({x:SX,y:SY});
    while(Telo.length>Dlzka) {Telo.shift();}

    if(AX===SX && AY===SY) {
        Dlzka++;
        AX=Math.floor(Math.random()*BX);
        AY=Math.floor(Math.random()*BY);
    }

    CTX.fillStyle="red";
    CTX.fillRect(AX*17,AY*17,15,15);
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            X=-1;Y=0;
            break;
        case 38:
            X=0;Y=-1;
            break;
        case 39:
            X=1;Y=0;
            break;
        case 40:
            X=0;Y=1;
            break;
    }
}