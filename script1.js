let modeButton = document.querySelector("button");
let body= document.querySelector("body");
let currentMode= "light";

modeButton.addEventListener("click",() => {
    if(currentMode=== "light" || modeButton.classList.contains("dark-text") ){
        currentMode= "dark";
        modeButton.classList.remove("dark-text");
        modeButton.classList.add("light-text");
        modeButton.textContent="CLICK FOR LIGHT";
        // body.style.backgroundColor="black";
         modeButton.style.backgroundColor="white";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currentMode="light";
        modeButton.classList.remove("light-text"
    );
    modeButton.classList.add("dark-text");
    modeButton.textContent="CLICK FOR DARK"
    
       modeButton.style.backgroundColor="black";
        body.classList.add("light");
        body.classList.remove("dark");
    }
console.log(currentMode);
});
