let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let left = document.querySelector(".left");
let center = document.querySelector(".center");
let right = document.querySelector(".right");
let upper = document.querySelector(".upper");
let lower = document.querySelector(".lower");
let cap = document.querySelector(".cap");
let clear = document.querySelector(".clears");
let input = document.querySelector(".area")

function boldText(){
    document.getElementById("area").style.fontWeight='bold';
};

function italicText(){
    document.getElementById("area").style.fontStyle='italic';
};

function leftAlign(){
    document.getElementById("area").style.textAlign='left';
};

function centerAlign(){
    document.getElementById("area").style.textAlign='center';
};

function rightAlign(){
    document.getElementById("area").style.textAlign='right';
}

function upperCase(){
    document.getElementById("area").style.textTransform='uppercase';
}

function lowerCase(){
    document.getElementById("area").style.textTransform='lowercase';
}

function Capitalize(){
    document.getElementById("area").style.textTransform='capitalize';
}
