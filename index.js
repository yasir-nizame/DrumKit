
//for a safe case we should not select button here because if we add more buttons it will also press a sound for it
// so we will be using a class here instead
var mouseclick = document.querySelectorAll(".drum")


// we have  to  use keyword "function" in lowercase to defien a fucntion
// function name is optional in js if we dont include anme then it is called an anonymous function
//event listener has two parameterss,first is an any event and second is the function to be called when a certain event is performed


//  for(i=0;i<keypess.length;i++){
//      keypess[i].addEventListener("click", function  myfunction(){alert("i got clicked");});

//  }

//or

//detects mouseclick
for (i = 0; i < mouseclick.length; i++) {
    // stores  which key was pressed
    mouseclick[i].addEventListener("click", function () {
        var clicked = this.innerHTML;
        makesound(clicked);
        animation(clicked);
    });

    // dont add () here otherwise it will not wait for event to occur and directly calll the fucntion instead

}

//detects keypress
document.addEventListener("keydown", function (event) { // here event is the object that is created automatically when a certain event(i.e keypress here) occurs. this object contains all the necessary info abt the event for example it's type,duration etc
    makesound(event.key);// and we use the object(i.e event here to acceess it's attribute i.e key here)
    /*
    some sort of this scenario will happen when the event occurs
    var event={
       type:click,
       duration:2 sec,
       key:"w"
    }
so now to know which key was pressed, we will use dot notaion to access value of key 
 
Terminal" event.key
Output: W
    */
animation(event.key); // calls animation fucntion
})


function makesound(keyorclick) {



    switch (keyorclick) {
        case "z":
            var crash = new Audio("sounds/crash.mp3"); //Audio is a constructor function here
            crash.play();


            break;
        case "x":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();

            break;
        case "c":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();

            break;
        case "v":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

            break;
        case "b":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

            break;
        case "n":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();

            break;
        case "m":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

            break;

        default:
            break;
    }


};

function animation(animateme)
{
    var activebtn = document.querySelector("."+animateme);
    activebtn.classList.add("pressed");
  
    setTimeout(() => {
        activebtn.classList.remove("pressed");
        
    }, 100);



}

