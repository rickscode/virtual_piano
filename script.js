// Keydown event to play sound and change key color to pink

document.addEventListener("keydown", function(event){
    if (event.code == "KeyA") {
        console.log("The 'A' key is pressed");
        let audio = new Audio("audio/A.mp3");
        audio.play();
        document.getElementById("a").style.backgroundColor = "pink";

    } else if (event.code == "KeyS") {
        console.log("The 'S' key is pressed");
        let audio = new Audio("audio/S.mp3");
        audio.play();
        document.getElementById("s").style.backgroundColor = "pink";

    } else if (event.code == "KeyD") {
        console.log("The 'D' key is pressed");
        let audio = new Audio("audio/D.mp3");
        audio.play();
        document.getElementById("d").style.backgroundColor = "pink";

    } else if (event.code == "KeyF") {
        console.log("The 'F' key is pressed");
        let audio = new Audio("audio/F.mp3");
        audio.play();
        document.getElementById("f").style.backgroundColor = "pink";

    } else if (event.code == "KeyG") {
        console.log("The 'G' key is pressed");
        let audio = new Audio("audio/G.mp3");
        audio.play();
        document.getElementById("g").style.backgroundColor = "pink";

    } else if (event.code == "KeyH") {
        console.log("The 'H' key is pressed");
        let audio = new Audio("audio/H.mp3");
        audio.play();
        document.getElementById("h").style.backgroundColor = "pink";

    } else if (event.code == "KeyJ") {
        console.log("The 'J' key is pressed");
        let audio = new Audio("audio/J.mp3");
        audio.play();
        document.getElementById("j").style.backgroundColor = "pink";

    } else if (event.code == "KeyW") {
        console.log("The 'W' key is pressed");
        let audio = new Audio("audio/W.mp3");
        audio.play();

    } else if (event.code == "KeyE") {
        console.log("The 'E' key is pressed");
        let audio = new Audio("audio/E.mp3");
        audio.play();

    } else if (event.code == "KeyT") {
        console.log("The 'T' key is pressed");
        let audio = new Audio("audio/T.mp3");
        audio.play();

    } else if (event.code == "KeyY") {
        console.log("The 'Y' key is pressed");
        let audio = new Audio("audio/Y.mp3");
        audio.play();

    } else if (event.code == "KeyU") {
        console.log("The 'U' key is pressed");
        let audio = new Audio("audio/U.mp3");
        audio.play();

    } else {
        console.log("Another key was pressed")
    }
});

// Keyup event listener to change keys to white

document.addEventListener("keyup", function(event){
    if (event.code == "KeyA") {
        document.getElementById("a").style.backgroundColor = "white";
    } else if (event.code == "KeyS") {
        document.getElementById("s").style.backgroundColor = "white";
    } else if (event.code == "KeyD") {
        document.getElementById("d").style.backgroundColor = "white";
    } else if (event.code == "KeyF") {
        document.getElementById("f").style.backgroundColor = "white";
    } else if (event.code == "KeyG") {
        document.getElementById("g").style.backgroundColor = "white";
    } else if (event.code == "KeyH") {
        document.getElementById("h").style.backgroundColor = "white";
    } else if (event.code == "KeyJ") {
        document.getElementById("j").style.backgroundColor = "white";
    
    }
});

// Mouse down event to play sound and change key color to pink

document.addEventListener("mousedown", function(event){
    if (event.target.id == "a") {
        console.log("The 'A' key is pressed");
        let audio = new Audio("audio/A.mp3");
        audio.play();
        document.getElementById("a").style.backgroundColor = "pink";


    } else if (event.target.id == "s") {
        console.log("The 'S' key is pressed");
        let audio = new Audio("audio/S.mp3");
        audio.play();
        document.getElementById("s").style.backgroundColor = "pink";

    } else if (event.target.id == "d") {
        console.log("The 'D' key is pressed");
        let audio = new Audio("audio/D.mp3");
        audio.play();
        document.getElementById("d").style.backgroundColor = "pink";

    } else if (event.target.id == "f") {
        console.log("The 'F' key is pressed");
        let audio = new Audio("audio/F.mp3");
        audio.play();
        document.getElementById("f").style.backgroundColor = "pink";

    } else if (event.target.id == "g") {
        console.log("The 'G' key is pressed");
        let audio = new Audio("audio/G.mp3");
        audio.play();
        document.getElementById("g").style.backgroundColor = "pink";

    } else if (event.target.id == "h") {
        console.log("The 'H' key is pressed");
        let audio = new Audio("audio/H.mp3");
        audio.play();
        document.getElementById("h").style.backgroundColor = "pink";

    } else if (event.target.id == "j") {
        console.log("The 'J' key is pressed");
        let audio = new Audio("audio/J.mp3");
        audio.play();
        document.getElementById("j").style.backgroundColor = "pink";
        
    } else if (event.target.id == "W_key") {
            console.log("The 'W' key is pressed");
            let audio = new Audio("audio/W.mp3");
            audio.play();

    } else if (event.target.id == "E_key") {
        console.log("The 'E' key is pressed");
        let audio = new Audio("audio/E.mp3");
        audio.play();

    } else if (event.target.id == "T_key") {
        console.log("The 'T' key is pressed");
        let audio = new Audio("audio/T.mp3");
        audio.play();

    } else if (event.target.id == "Y_key") {
        console.log("The 'Y' key is pressed");
        let audio = new Audio("audio/Y.mp3");
        audio.play();

    } else if (event.target.id == "U_key") {
        console.log("The 'U' key is pressed");
        let audio = new Audio("audio/U.mp3");
        audio.play();
}

}); 

// Mouse down event to change key color to white

document.addEventListener("mouseup", function(event){
    if (event.target.id == "a") {
        document.getElementById("a").style.backgroundColor = "white";

    } else if (event.target.id == "s") {
        document.getElementById("s").style.backgroundColor = "white";

    } else if (event.target.id == "d") {
        document.getElementById("d").style.backgroundColor = "white";

    } else if (event.target.id == "f") {
        document.getElementById("f").style.backgroundColor = "white";

    } else if (event.target.id == "g") {
        document.getElementById("g").style.backgroundColor = "white";

    } else if (event.target.id == "h") {
        document.getElementById("h").style.backgroundColor = "white";

    } else if (event.target.id == "j") {
        document.getElementById("j").style.backgroundColor = "white";
        }

});






