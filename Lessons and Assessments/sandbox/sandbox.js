

var turnOffTimer=false;

if(!turnOffTimer){
    var resetTimer = setTimeout(resetCanvas,3000);
}

function resetCanvas(){
    ggbApplet.reset();
    return;
}