function handleClick(event){
        
    var my_event = event;

    // var buttonInnerHTML = this.innerHTML; to check a specific click
    // console.log(event) so we can check on the dictionary and relate the correct keys
    switch (my_event["key"]){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        default:
            console.log(my_event);
    }
}

function ButtonAnimation(event){
    var animation_event = event;
    switch (animation_event["key"]){
        case "w":
            document.querySelector(".w").classList.add("pressed");
            setTimeout(function (){
                document.querySelector(".w").classList.remove("pressed");
            }, 100);
            break;
        case "a":
            document.querySelector(".a").classList.add("pressed");
            setTimeout(function (){
                document.querySelector(".a").classList.remove("pressed");
            }, 100);
            break;
        case "s":
            document.querySelector(".s").classList.add("pressed");
            setTimeout(function (){
                document.querySelector(".s").classList.remove("pressed");
            }, 100);
            break;
        case "d":
            document.querySelector(".d").classList.add("pressed");
            setTimeout(function (){
                document.querySelector(".d").classList.remove("pressed");
            }, 100);
            break;
        case "j":
            document.querySelector(".j").classList.add("pressed");
            setTimeout(function (){
                document.querySelector(".j").classList.remove("pressed");
            }, 100);
            break;
        case "k":
            document.querySelector(".k").classList.add("pressed");
            setTimeout(function (){
                document.querySelector(".k").classList.remove("pressed");
            }, 100);
            break;
        case "l":
            document.querySelector(".l").classList.add("pressed");
            setTimeout(function (){
                document.querySelector(".l").classList.remove("pressed");
            }, 100);
            break;
    }   
}

function touchFun(innerHTML){
    switch(innerHTML){
        case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "a":
        var kick_bass = new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;
    case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "d":
        var tom_1 = new Audio("sounds/tom-1.mp3");
        tom_1.play();
        break;
    case "j":
        var tom_2 = new Audio("sounds/tom-2.mp3");
        tom_2.play();
        break;
    case "k":
        var tom_3 = new Audio("sounds/tom-3.mp3");
        tom_3.play();
        break;
    case "l":
        var tom_4 = new Audio("sounds/tom-4.mp3");
        tom_4.play();
        break;
    default:
        console.log(my_event);           
    }
}

function myFunction(mediaqueryList){
    if (mediaqueryList.matches){
        document.addEventListener("keydown", function (event){
        handleClick(event);
        ButtonAnimation(event);
    });
    }
    else{
        for (var i=0; i<document.querySelectorAll(".drum").length; i++){
            document.querySelectorAll(".drum")[i].addEventListener("click", function (){
            var innerHTML = this.innerHTML;
            touchFun(innerHTML)});
        }
        for (var i=0; i<document.querySelectorAll(".drum").length; i++){
            document.querySelectorAll(".drum")[i].addEventListener("touchend", function (){
            var innerHTML = this.innerHTML;
            touchFun(innerHTML)});
        }
    }
}

var mediaqueryList = window.matchMedia("(min-width: 768px)")
myFunction(mediaqueryList)
//mediaqueryList.addListener(myFunction);