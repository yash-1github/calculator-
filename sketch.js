var input = document.getElementById("screen");
var buttons =document.querySelectorAll("button");
var empty = "";
for(var i of buttons){
i.addEventListener("click" , (all)=>{
    xyz = all.target.innerText;

    
    if(xyz === "AC"){
    empty ="";
    input.value = empty;
    }else if( xyz ==="="){
    input.value = eval(empty);
    empty = "";
    }else{
        empty = empty+xyz;
        input.value = empty;
    }
    
    })
}

