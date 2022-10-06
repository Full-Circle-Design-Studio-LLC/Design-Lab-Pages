declareVariables();
eventListeners();

//setinterval(function,ms);



function declareVariables() {
    root = document.documentElement;
    player = document.getElementById("player");
    topVar = '--top';
    leftVar = '--left';
    topVal = 230;
    leftVal = 390;
}

function eventListeners() {
    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyW') {
            console.log("w");
            movingW = true;
            setInterval(move('w'),5);
        } else if (event.code = 'KeyA') {
            movingA = true;
            setInterval(move('a'),5);
        } else if (event.code = 'KeyS') {
            movingS = true;
            setInterval(move('s'),50);            
        } else if (event.code = 'KeyD') {
            movingD = true;
            setInterval(move('d'),50);            
        }
    });
    document.addEventListener('keyup', function(event) {
        if (event.code == 'KeyW') {
            movingW = false;
        } else if (event.code = 'KeyA') {

        } else if (event.code = 'KeyS') {
            
        } else if (event.code = 'KeyD') {
            
        }
    });
}



function move(dir) {
    if (dir === "w") {
        if (movingW === true) {
            if (topVal >= 5) {
                topVal -= 5;
                setVariable(topVar,topVal);
            }
        }
    } else if (dir === 'a') {
        if (movingA === true) {
            if (leftVal >= 5) {
                leftVal -= 5;
                setVariable(leftVar,leftVal);
            }
        }

    }
}

function stopMoving() {

}

function setVariable(v,val) {
    root.style.setProperty(v,val+'px');
}