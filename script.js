const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const viewport = document.querySelector('.viewport');
const gameView = document.querySelector('.gameView');
let position = 0;
let isJumping = false;

function handlekeyUp(event){
    if(event.keyCode === 32){
        if (isJumping === false) {
        jump();
        }
    }
}

function jump(){
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
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = gameView.clientWidth;
    let randomTime = Math.random() * 5500 + 500; 

    cactus.classList.add('cactus');
    cactus.style.left = gameView.clientWidth + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            // game over
            clearInterval(leftInterval);
            gameView.innerHTML = '<h2 class="game-over">Fim de jogo</h2>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handlekeyUp);
