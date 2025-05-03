
// dark mode


const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const bulbIcon = toggleButton.querySelector('i');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        bulbIcon.style.color = 'black'; 
    } else {
        bulbIcon.style.color = 'white'; 
            }
});



// animation JS


const totalFrames = 300;
const imgElement = document.getElementById("animationImg");
const container = document.querySelector(".container");

let currentFrame = 0;
let targetFrame = 0;
let animationActive = true;


function handleResponsive() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1024) {
        
        imgElement.style.position = "fixed"; 
        imgElement.style.bottom = "0"; 
        imgElement.style.left = "0%";
        imgElement.style.transform = "translateX(-50%)";
        imgElement.style.transform = "translateY(0%)";
        imgElement.style.width = "100%";
        imgElement.style.height = "70%";
        imgElement.style.objectFit = "cover"; 
    } else {
        imgElement.style.position = "fixed";
        imgElement.style.bottom = "0"; 
        imgElement.style.left = "50%";
        imgElement.style.transform = "translateX(-50%)";
        imgElement.style.width = "auto";
        imgElement.style.height = "100vh";
        imgElement.style.objectFit = "cover"; 
    }
}

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let maxScroll = container.clientHeight - window.innerHeight;
    
    targetFrame = Math.min(totalFrames - 1, Math.floor((scrollTop / maxScroll) * totalFrames));
    console.log("Scroll Top:", scrollTop, "Target Frame:", targetFrame); 
});

function animate() {
    if (animationActive) {
        currentFrame += (targetFrame - currentFrame) * 0.03;
        imgElement.src = `male${String(Math.round(currentFrame) + 1).padStart(4, '0')}.png`;
    }
    requestAnimationFrame(animate);
}

handleResponsive();

window.addEventListener("resize", handleResponsive);

animate(); 






// preloader

const enterButton = document.getElementById('enter-button');

setTimeout(() => {
    enterButton.style.opacity = 1; // ৭ সেকেন্ড পর বোতাম দৃশ্যমান হবে
}, 7000);




document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const level = bar.dataset.level;
        bar.style.width = level + '%';
    });
});



AOS.init();
AOS.init({})