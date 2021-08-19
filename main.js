alert("Hru snake spustíme klávseou Enter");


window.onload = function() {
    canv=document.getElementById("Hra");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}

SX = SY = 10;
SirkaStvorca = Stena = 20;
AX = AY = 15;
X = Y = 0;
Telo = [];
Dlzka = 5;
Start = true;
PrveKolo = true;
Prehral = false;

function Reset() {
    Start = true;
    PrveKolo = true;
    SX = SY = 10;
    AX = AY = 15;
    X = Y = 0;
    Telo = [];
}

function Prehra() {
    ctx.clearRect(0,0,canv.width,canv.height);
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    ctx.fillStyle="red";
    ctx.font = "24px Verdana";
    ctx.fillText("Prehral si!",50,50);
    ctx.fillText("Tvoje skore je:",50,80);
    ctx.fillText(Dlzka,200,80);
    ctx.fillText("Stlač klávesu \"Enter\" pre reštart hry",50,100);
    Reset();
}

function game() {
    if (!Start) {
        SX += X;
        SY += Y;
        if (SX < 0) {
            SX = Stena - 1;
        }
        if (SX > Stena - 1) {
            SX = 0;
        }
        if (SY < 0) {
            SY = Stena - 1;
        }
        if (SY > Stena - 1) {
            SY = 0;
        }
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canv.width, canv.height);

        ctx.fillStyle = "lime";
        for (var i = 0; i < Telo.length; i++) {
            ctx.fillRect(Telo[i].x * SirkaStvorca, Telo[i].y * SirkaStvorca, SirkaStvorca - 2, SirkaStvorca - 2);
            if (Telo[i].x === SX && Telo[i].y === SY) {
                if (!PrveKolo) {
                    Prehra();
                    Prehral = true;
                }
                Dlzka = 5;
            }
        }
        if (!Prehral) {
            Telo.push({x: SX, y: SY});
            while (Telo.length > Dlzka) {Telo.shift();}

            if (AX === SX && AY === SY) {
                Dlzka++;
                AX = Math.floor(Math.random() * Stena);
                AY = Math.floor(Math.random() * Stena);
            }
            ctx.fillStyle = "red";
            ctx.fillRect(AX * SirkaStvorca, AY * SirkaStvorca, SirkaStvorca - 2, SirkaStvorca - 2);
        }
    }
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            X=-1;Y=0;
            PrveKolo = false;
            break;
        case 38:
            X=0;Y=-1;
            PrveKolo = false;
            break;
        case 39:
            X=1;Y=0;
            PrveKolo = false;
            break;
        case 40:
            X=0;Y=1;
            PrveKolo = false;
            break;
        case 13:
            Start = false;
            Prehral = false;
            break;
    }
}
