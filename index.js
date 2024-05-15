//alert("hy");

var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        this.style.color = "white";    
        // var audio1 = new Audio('/sounds/tom-2.mp3');
        // audio1.play();
        }
    );
}
