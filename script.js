var number = 0;

function random(){
    number = Math.floor(Math.random()*100 +1);
    document.getElementById("number").textContent = number;
}

random();

