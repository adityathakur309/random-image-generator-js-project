let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
// generate a random number and images 
let firstButtonHandler = () => {
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    let randomImageSource = "images/natures/nature" + randomNumber + ".jpg";
    document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
    let hexCode = "0123456789abcdef";
    let color1 = "#";
    let color2 = "#"
    for(let i = 0; i<6; i++){
        let randomColor = hexCode[Math.floor(Math.random() * hexCode.length)];
        color1 += randomColor;
    }
    for(let i = 0; i<6; i++){
        let randomColor2 = hexCode[Math.floor(Math.random() * hexCode.length)];
        color2 += randomColor2;
    }
    
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`
    
    
   
}

// end 
// second random number and image generator 
let secondButtonHandler2 = () => {
    let randomNumber2 = Math.floor(Math.random() * 8) + 1;
    let randomImageSource2 = "images/snow/snow" + randomNumber2 + ".jpg";
    document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
    let hexCode = "0123456789abcdef";
    let color1 = "#";
    let color2 = "#"
    for(let i = 0; i<6; i++){
        let randomColor = hexCode[Math.floor(Math.random() * hexCode.length)];
        color1 += randomColor;
    }
    for(let i = 0; i<6; i++){
        let randomColor2 = hexCode[Math.floor(Math.random() * hexCode.length)];
        color2 += randomColor2;
    }
    
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`
    
    

}
// end 
btn1.addEventListener("click", firstButtonHandler);
btn2.addEventListener("click", secondButtonHandler2);
