
// var numberOfDrumButtons = document.querySelectorAll(".drum").lenght;
// for(var i = 0; i<numberOfDrumButtons; i++) {

// document.querySelectorAll(".drum")[i].addEventListener("click",handelClick);

// }
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // // alert("I am clicked");
        // var audio = new Audio('sound/tom-1.mp3');
        // audio.play();
        // // console.log(this.style.color="white");
        // this.style.color="white";
        var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            case "w":
                var tom1 = new Audio("tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("kick-bass.mp3");
                kick.play();
                break;
            default: console.log(buttonInnerHTML);    
        }
    });

}
document.addEventListener("keypress",function(event){
   
   console.log(event);
});

// function(){
//     alert("I am clicked");
// }
