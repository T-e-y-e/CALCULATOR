
var screen = document.getElementById("display");

function insert(num){
        screen.value =
            screen.value + num;
    
} 


function equalTo() {
    if (screen) {
        screen.value = eval(
        screen.value
        );
    }
    
}

function clean(){
    screen.value = ""
}

function back(){
    let del = document.getElementById("display").value;
    document.getElementById("display").value = del.substring(0, del.length-1)
}







