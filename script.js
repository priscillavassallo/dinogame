const dino = document.querySelector('.dino');

function handlekeyUp(event){
    if(event.keyCode === 32){
        jump();
    }
}

function jump(){
    let position = 0;
    let upInterval = setInterval (() => {
        if(position >= 150){
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval (() => {
                if(position <= 0){
                    clearInterval(downInterval);
                }else{
                    position -= 20;
                    dino.computedStyleMap.bottom = position + 'px';
                }
            }, 20);
        }else{
            //subindo
            position +=20;
            dino.computedStyleMap.bottom = position + 'px'
            
        }
    }, 20);
}

document.addEventListener('keyup', handlekeyUp);
