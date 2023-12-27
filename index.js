document.querySelectorAll("button")[0].addEventListener("click", handleClick);
document.querySelectorAll("button")[1].addEventListener("click", handleClick);
document.querySelectorAll("button")[2].addEventListener("click", handleClick);
document.querySelectorAll("button")[3].addEventListener("click", handleClick);
document.querySelectorAll("button")[4].addEventListener("click", handleClick);
document.querySelectorAll("button")[5].addEventListener("click", handleClick);
document.querySelectorAll("button")[6].addEventListener("click", handleClick);

function handleClick()
{
    var ch=this.innerHTML;
    playSound(ch); 
    buttonAnimation(ch);
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(ch)
{
    switch(ch)
    {
        case "w":
            var w=new Audio('sounds/crash.mp3');
            w.play();
        break;
        
        case "a":
            var w=new Audio('sounds/kick-bass.mp3');
            w.play();
        break;

        case "s":
            var w=new Audio('sounds/snare.mp3');
            w.play();
        break;

        case "d":
            var w=new Audio('sounds/tom-1.mp3');
            w.play();
        break;

        case "j":
            var w=new Audio('sounds/tom-2.mp3');
            w.play();
        break;

        case "k":
            var w=new Audio('sounds/tom-3.mp3');
            w.play();
        break;

        case "l":
            var w=new Audio('sounds/tom-4.mp3');
            w.play();
        break;

        default:
            consoleLog("Error");
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}