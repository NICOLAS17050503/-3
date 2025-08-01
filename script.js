const loveMessages = [
    "TE💕AMO💕MUCHOOO💕",
    "GRACIAS💖POR💖ESTAR💖EN💖MI💖VIDA",
    "TE AMO KAMI 💞","💞💞K💞💞",
    "💗JUNTOS POR SIEMPRE 💗",
    "💓TU SONRISA ME ILUMINA💟💟",
    "💓CADA SEGUNDO CONTIGO ES MAGICO💫💫","💓ERES MI 🌏",
    "💓MI CORAZON ES TUYO 💖",
    "💓ERES💞LO MEJOR Q ME HA💞PASADO💖",
    "💓TE💘AMO💘PEQUITAS",
    "💓ME💓ENCANTAS💓💓💓💓","🌺🌺TE AMO🌺🌺"
 ];

function createTextBubble() {
     const bubble = document.createElement("div");
     bubble.className = "text-bubble";
     bubble.innerText = loveMessages[Math.floor(Math.random() * loveMessages.length)];

     const left = Math.random() * 80 + 10;
     const top = Math.random() * 80 + 10 ;

     bubble.style.position="absolute";
     bubble.style.left = left + "vw";
     bubble.style.top = top + "vh";

     const container = document.getElementById("bubbles-text");
     container.appendChild(bubble);

     setTimeout(()=>{
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth){
            const newleft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newleft}px`;
        }

        if (rect.botton > window.innerHeight){
            const newTop = window.innerHeight-rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if (rect.left < 0){
            bubble.style.left = "10px";
        }

        if (rect.top < 0){
            bubble.style.top = "10px";
        }
     },10);

     setTimeout(()=>{
        bubble.remove();
     },5000);
    }

    setInterval(createTextBubble,500);
    const container = document.querySelector('.hearts');
const heartEmojis = ['❤️', '💗', '💖', '💕', '💞'];

function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    // Posición aleatoria
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';

    // Tamaño aleatorio
    heart.style.fontSize = (20 + Math.random() * 40) + 'px';

    container.appendChild(heart);

    // Remover el corazón después de animarse
    setTimeout(() => {
        heart.remove();
    }, 6000);
}


// Generar corazones cada cierto tiempo
setInterval(createHeart, 500);
    

const audio = document.getElementById('my-audio');

function startAudio() {
  audio.play().catch(err => {
    console.log("El navegador bloqueó la reproducción automática");
  });
  document.removeEventListener('click', startAudio);
  document.removeEventListener('touchstart', startAudio);
}

// Se activa al primer clic o toque del usuario
document.addEventListener('click', startAudio);
document.addEventListener('touchstart', startAudio);