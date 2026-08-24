const razones = [
  "Por tu amor incondicional que nunca cambia sin importar la situación.",
  "Por cada abrazo cálido que me reconforta el alma cuando más lo necesito.",
  "Por tus desvelos infinitos cuidándome desde que era muy pequeñito/a.",
  "Por enseñarme a ser una persona fuerte, digna y trabajadora.",
  "Por tu paciencia gigante cuando cometo errores y me ayudas a corregirlos.",
  "Por la sazón inigualable de tu comida hecha siempre con tanto cariño.",
  "Por escucharme con paciencia y atención sin juzgarme jamás.",
  "Por celebrar mis alegrías y logros como si fueran tuyos propios.",
  "Por secar mis lágrimas y sacarme una sonrisa en mis días oscuros.",
  "Por ser el pilar indestructible que mantiene unida a nuestra familia.",
  "Por tu sonrisa contagiosa que ilumina cualquier lugar donde estás.",
  "Por el olor a hogar que se siente siempre donde tú te encuentras.",
  "Por darme los mejores consejos en los momentos más difíciles.",
  "Por priorizar mi bienestar y felicidad por encima de todo.",
  "Por enseñarme el valor de la gratitud y la humildad.",
  "Por tus palabras de aliento cuando siento que ya no puedo más.",
  "Por defenderme siempre con uñas y dientes ante cualquier problema.",
  "Por ser mi cómplice en los mejores momentos de mi vida.",
  "Por enseñarme a perdonar y a no guardar rencores en el corazón.",
  "Por cada sacrificio silencioso que has hecho por mi futuro.",
  "Por el brillo en tus ojos cuando me ves alcanzar una meta.",
  "Por hacerme sentir la persona más querida y especial del mundo.",
  "Por el cariño con el que preparas cada detalle para la familia.",
  "Por tu capacidad inagotable de dar amor sin esperar nada a cambio.",
  "Por ser la primera persona a la que quiero contarle una buena noticia.",
  "Por enseñarme a levantarme con valentía cada vez que caigo.",
  "Por la tranquilidad que siento con solo escuchar tu voz.",
  "Por tus bendiciones diarias que me acompañan a donde voy.",
  "Por tu gran sentido del humor y por hacerme reír tanto.",
  "Por ser un modelo de mujer luchadora y admirable.",
  "Por enseñarme a respetar a los demás y a valorar las cosas simples.",
  "Por guardarme siempre la mejor porción o el mejor detalle.",
  "Por la delicadeza y dulzura con la que tratas a quienes amas.",
  "Por ser mi refugio seguro cuando el mundo afuera se complica.",
  "Por enseñarme que con esfuerzo y fe todo se puede lograr.",
  "Por aguantar mis malos ratos y devolverme siempre comprensión.",
  "Por hacer de nuestra casa un lugar lleno de calidez y paz.",
  "Por recordar siempre mis fechas y momentos importantes.",
  "Por la sabiduría con la que entiendes la vida y a las personas.",
  "Por ser mi guía y mi norte cuando no sé qué camino tomar.",
  "Por el corazón tan generoso que tienes con quienes lo necesitan.",
  "Por nunca dejar que me falte nada esencial para crecer feliz.",
  "Por ser mi mejor amiga, consejera y confidente.",
  "Por enseñarme a ser responsable y a cumplir mi palabra.",
  "Por contagiar esa energía linda y positiva donde quiera que vas.",
  "Por tus remedios caseros y tus cuidados cuando me he enfermado.",
  "Por la elegancia y amabilidad con la que tratas a todo el mundo.",
  "Por creer en mí incluso cuando yo mismo/a dudo de mis capacidades.",
  "Por tus abrazos largos que recargan de energía todo mi ser.",
  "Por haberme enseñado el verdadero valor de la familia.",
  "Por los hermosos recuerdos de mi infancia que me regalaste.",
  "Por tener siempre una solución práctica para cualquier problema.",
  "Por tu ternura inigualable que cura cualquier herida.",
  "Por enseñarme a apreciar la naturaleza, el arte y lo bonito de la vida.",
  "Por perdonar mis faltas con tanta facilidad y amor puro.",
  "Por ser el motor que me impulsa a querer ser mejor persona.",
  "Por tu fe inquebrantable que me da esperanzas en momentos duros.",
  "Por cada café o té compartido conversando de la vida.",
  "Por enseñarme a luchar por mis sueños sin rendirme jamás.",
  "Por valorar el esfuerzo que hago día a día.",
  "Por darme la libertad de ser yo mismo/a sin condicionamientos.",
  "Por tu bondad que inspira a todos los que tienen la suerte de conocerte.",
  "Por tus miradas cómplices que lo dicen todo sin hablar.",
  "Por la fortaleza que demuestras ante cualquier adversidad.",
  "Por cuidar mis secretos más profundos con total lealtad.",
  "Por el amor con el que cuidas cada planta y rincón de la casa.",
  "Por transmitirme valores firmes que guían mis decisiones.",
  "Por tus historias y vivencias de las que siempre aprendo algo nuevo.",
  "Por darme un techo lleno de amor y serenidad.",
  "Por tu enorme generosidad que no conoce límites.",
  "Por inspirarme a sonreír incluso cuando las cosas se ponen difíciles.",
  "Por enseñarme a tratar a los demás con empatía y educación.",
  "Por ser esa luz constante que nunca se apaga en mi camino.",
  "Por compartir tu alegría contagiosa en cada celebración.",
  "Por la serenidad que transmites cuando todo parece un caos.",
  "Por acordarte de todo lo que me gusta y consentirme.",
  "Por no dejar que me rinda cuando estoy a punto de tirar la toalla.",
  "Por el enorme orgullo que siento cada vez que digo que eres mi mamá.",
  "Por tus caricias que calman cualquier ansiedad.",
  "Por ser el pilar de apoyo en mis proyectos e ideas.",
  "Por enseñarme a disfrutar del presente y de los pequeños momentos.",
  "Por tus mensajes diarios preguntando cómo estoy.",
  "Por darme el mejor ejemplo de lo que significa amar de verdad.",
  "Por tu capacidad para perdonar y volver a empezar con una sonrisa.",
  "Por ser mi fan número uno en cada paso que doy.",
  "Por haber creado un hogar donde siempre quiero regresar.",
  "Por tu honestidad directa y sincera que siempre me ayuda a mejorar.",
  "Por tus expresiones y dichos que me sacan mil sonrisas.",
  "Por estar presente en cada momento clave de mi vida.",
  "Por regalarme una vida llena de momentos inolvidables.",
  "Por ser una mujer fuerte, independiente y valiente.",
  "Por enseñarme que la verdadera riqueza está en el corazón.",
  "Por darme alas para volar y un nido seguro al cual volver.",
  "Por amar sin juzgar, aceptar sin exigir y dar sin pedir.",
  "Por tus besos en la frente que me hacen sentir protegido/a.",
  "Por el entusiasmo que le pones a cada cosa que haces.",
  "Por ser mi gran maestra de vida en todos los sentidos.",
  "Por existir y regalarme el honor de ser tu hijo/a.",
  "Por ser la persona más hermosa por dentro y por fuera.",
  "¡Porque no existe en este universo entero una mamá tan maravillosa como tú, Cristina! ❤️"
];

const flowerIcons = ['🌸', '🌺', '🌷', '🌹', '🌻', '🌼'];
let readSet = new Set();
let currentIndex = 0;

const introScreen = document.getElementById('introScreen');
const enterBtn = document.getElementById('enterBtn');
const mainContainer = document.getElementById('mainContainer');
const flowerGrid = document.getElementById('flowerGrid');
const counterEl = document.getElementById('counter');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalIcon = document.getElementById('modalIcon');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');

const finalOverlay = document.getElementById('finalOverlay');
const heartContainer = document.getElementById('heartContainer');
const childHeart = document.getElementById('childHeart');
const finalMessage = document.getElementById('finalMessage');

enterBtn.addEventListener('click', () => {
  introScreen.classList.add('fade-out');
  setTimeout(() => mainContainer.classList.remove('hidden'), 500);
});

razones.forEach((_, index) => {
  const btn = document.createElement('div');
  btn.className = 'flower-item';
  const randomIcon = flowerIcons[index % flowerIcons.length];
  btn.innerHTML = `<span class="icon">${randomIcon}</span><span>${index + 1}</span>`;
  
  btn.addEventListener('click', () => openModal(index, randomIcon));
  flowerGrid.appendChild(btn);
});

function openModal(index, icon) {
  currentIndex = index;
  modalTitle.innerText = `Razón #${index + 1}`;
  modalText.innerText = razones[index];
  modalIcon.innerText = icon || '🌻';
  
  readSet.add(index);
  counterEl.innerText = readSet.size;
  
  flowerGrid.children[index].classList.add('read');
  modalOverlay.classList.add('active');

  if (readSet.size === 100) {
    nextBtn.innerText = "Ver Sorpresa Final ✨";
  }
}

function closeModal() {
  modalOverlay.classList.remove('active');
  if (readSet.size === 100) {
    setTimeout(() => finalOverlay.classList.add('active'), 500);
  }
}

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

nextBtn.addEventListener('click', () => {
  if (readSet.size === 100 && currentIndex === 99) {
    closeModal();
  } else {
    const nextIndex = (currentIndex + 1) % 100;
    openModal(nextIndex, flowerIcons[nextIndex % flowerIcons.length]);
  }
});

heartContainer.addEventListener('click', () => {
  childHeart.classList.remove('hidden');
  finalMessage.classList.remove('hidden');
});

// ANIMACIÓN DE PÉTALOS FLOTANTES
const canvas = document.getElementById('petalsCanvas');
const ctx = canvas.getContext('2d');
let width, height;
const petals = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Petal {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * width;
    this.y = -20;
    this.size = 5 + Math.random() * 8;
    this.speedY = 1 + Math.random() * 1.5;
    this.speedX = -0.5 + Math.random() * 1;
    this.opacity = 0.3 + Math.random() * 0.5;
    this.color = Math.random() > 0.4 ? '#f8c8dc' : '#fbc531';
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    if (this.y > height) this.reset();
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 40; i++) petals.push(new Petal());

function animate() {
  ctx.clearRect(0, 0, width, height);
  petals.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();