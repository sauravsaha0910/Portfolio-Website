const texts=[
    "TUTOR",
    "FRONTEND DEVELOPER",
    "SINGER",
    "GUITARIST"
]

let speed =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex= 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex)
        characterIndex++;
        setTimeout(typeWriter,speed)
    }
    else{
        setTimeout(eraseText,1000)
    }

}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML=textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex =(textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload=typeWriter

const hamburger = document.querySelector('.hamburg');
const cancel = document.querySelector('.cancel');
const dropdown = document.querySelector('.dropdown');

hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked');
    dropdown.classList.add('active'); // Show dropdown
    cancel.classList.add('active'); // Show cancel
    hamburger.style.display = 'none'; // Hide hamburger
});

cancel.addEventListener('click', () => {
    console.log('Cancel clicked');
    dropdown.classList.remove('active'); // Hide dropdown
    cancel.classList.remove('active'); // Hide cancel
    hamburger.style.display = 'block'; // Show hamburger
});
