window.onload=function() {
    Canvas=document.getElementById("gc");
    CTX=Canvas.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}

SnakeX=SnakeY=10;
scale=17;
AppleX=AppleY=15;
DirX=DirY=0;
Body=[];
DefalutLength = 5;

function game() {
    bx=Math.floor(Canvas.width/scale);
    by=Math.floor(Canvas.height/scale);
    SnakeX+=DirX;
    SnakeY+=DirY;
    if(SnakeX<0) {SnakeX= bx-1;}
    if(SnakeX>bx-1) {SnakeX= 0;}
    if(SnakeY<0) {SnakeY= by-1;}
    if(SnakeY>by-1) {SnakeY= 0;}

    CTX.fillStyle="black";
    CTX.fillRect(0,0,Canvas.width,Canvas.height);

    CTX.fillStyle="lime";
    for(var i=0; i<Body.length; i++) {
        CTX.fillRect(Body[i].x*scale,Body[i].y*scale,scale-2,scale-2);
        if(Body[i].x===SnakeX && Body[i].y===SnakeY) {DefalutLength = 5;}
    }
    Body.push({x:SnakeX,y:SnakeY});
    while(Body.length>DefalutLength) {Body.shift();}

    if(AppleX===SnakeX && AppleY===SnakeY) {
        DefalutLength++;
        AppleX=Math.floor(Math.random()*tc);
        AppleY=Math.floor(Math.random()*tc);
    }

    CTX.fillStyle="red";
    CTX.fillRect(AppleX*scale,AppleY*scale,scale-2,scale-2);
}

function keyPush(evt) {
    switch(evt.keyCode) {
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
