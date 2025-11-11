const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

function handlekeyUp(event){
    if(event.keyCode === 32){
        if (isJumping === false) {
        jump();
        }
    }
}

function jump(){
    let position = 0;

    isJumping = true; 

    let upInterval = setInterval (() => { 
        if(position >= 150){
            clearInterval(upInterval);
            // descendo
            let downInterval = setInterval (() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }else{
            // subindo
            position += 20;
            dino.style.bottom = position + 'px'
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 700;

    cactus.classList.add('cactus');
    cactus.style.left = 700 + 'px';
    background.appendChild(cactus);
}

createCactus();
document.addEventListener('keyup', handlekeyUp);
