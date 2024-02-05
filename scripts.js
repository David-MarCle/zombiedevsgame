

// se crea un Array donde se mete cada parte de la tarjeta (card) 
const decisions = [
    {
      id: 1,
      text: "Llevas horas estudiando Javascript y no te enteras de nada.¿Que mierda es un bucle For(;;)?",
      text2: "¿Sigues estudiando?",
      imageSrc: "img/protagonista.png",
      okcome: "Bien hecho, solo te quedan 10 años para entender Javascript.                                                                                                                                                                                                                                                                                                                                                                                                 ",
      kocome: "¿No? Ya veras cuando empieces con React",
      isCorrect: true,
    },
    {
      id: 2,
      text: "Te entra un meme en tu ordenador.",
      text2: "¿Te hace gracia?",
      imageSrc: "img/memeMerge.jpg",
      okcome: "Bien, ya empiezas a reirte con los chistes de Friki",
      kocome: "Bueno, llevas pocos  git merges, ya lo entenderas",
      isCorrect: true,
    },
    
    {
        id: 3,
        text: "En tu ventana ves un tipo raro con cara de Zombie. Te recuerda a... ¡A Javi tu profe del bootcamp!",
        text2: "¿Crees que es él?",
        imageSrc: "img/zombieJavi.png",
        okcome: "No puede ser eso es un ¡¡¡ZOMBIE!!!. El javascript te esta afectando mas de los que piensas",
        kocome: "No puede ser esta en Barcelona y ademas... Eso es un ZOMBIE",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Sales a ver y es un Zombie. Y encima lleva una camiseta de Javascript, ahora si que te ha enfadado",
        text2: "¿Le pegas con tu ordenador (si) o con una de tus cuatro pantallas (no)?",
        imageSrc: "img/camisetaJS.png",
        okcome: "Eso es, una mas, una menos... le das fuerte y el zombie cae hecho una bola",
        kocome: "Con el ordenador no, hay que cuidarlo. Aún así le das con todas tus fuerzas y el zombie cae hecho una bola",
        isCorrect: false,
      },
      {
        id: 5,
        text: "Miras a la calle y ves que hay muchos más zombies. Ha empezado el apocalipsis zombie y tu no te has enterado",
        text2: "¿Vuelves a casa (si) o sales corriendo a un lugar mas seguro (no)?",
        imageSrc: "img/zombiesCity.png",
        okcome: "Llevas encerrado en casa estudiando dos semanas, es hora de tomar aire fresco",
        kocome: "Te has dejado las llaves dentro de la casa. Vaya Cabeza, solo te queda salir a la calle y correr",
        isCorrect: false,
      },
      {
        id: 6,
        text: "Sales a la calle y empiezas a correr. Vaya agujetas, tengo que hacer mas deporte",
        text2: "¿Coges tu coche (no) o vas andando (si)?",
        imageSrc: "img/coche.png",
        okcome: "Nunca es tarde para hacer deporte, corres y corres y corres",
        kocome: "A ver si te has dejado las llaves de casa dentro, crees que llevas las del coche.",
        isCorrect: true,
      },
      {
        id: 7,
        text: "Doblas una esquina y ves a Arancha en el suelo, repitiendo una y otra vez (Esto es muy facilito, esto es muy facilito)",
        text2: "¿Le echas una mano?",
        imageSrc: "img/aranchaZombie.jpg",
        okcome: "Facilito???? Corre que ahora empieza lo difícil",
        kocome: ".Claro, si dice que es facilito, es por que es facilito. Avanzas hacia ella y cuando te fijas bien, te das cuenta que ya se ha convertido en zombie",
        isCorrect: false,
      },
      {
        id: 8,
        text: "Sales a la calle y empiezas a correr. Vaya agujetas, tengo que hacer mas deporte",
        text2: "¿Coges tu coche (no) o vas andando (si)?",
        imageSrc: "img/coche.png",
        okcome: "Nunca es tarde para hacer deporte, corres y corres y corres",
        kocome: "A ver si te has dejado las llaves de casa dentro, crees que llevas las del coche.",
        isCorrect: true,
      },
      {
        id: 9,
        text: "Sales a la calle y empiezas a correr. Vaya agujetas, tengo que hacer mas deporte",
        text2: "¿Coges tu coche (no) o vas andando (si)?",
        imageSrc: "img/coche.png",
        okcome: "Nunca es tarde para hacer deporte, corres y corres y corres",
        kocome: "A ver si te has dejado las llaves de casa dentro, crees que llevas las del coche.",
        isCorrect: true,
      },
      {
        id: 10,
        text: "Sales a la calle y empiezas a correr. Vaya agujetas, tengo que hacer mas deporte",
        text2: "¿Coges tu coche (no) o vas andando (si)?",
        imageSrc: "img/coche.png",
        okcome: "Nunca es tarde para hacer deporte, corres y corres y corres",
        kocome: "A ver si te has dejado las llaves de casa dentro, crees que llevas las del coche.",
        isCorrect: true,
      },
      {
        id: 11,
        text: "Sales a la calle y empiezas a correr. Vaya agujetas, tengo que hacer mas deporte",
        text2: "¿Coges tu coche (no) o vas andando (si)?",
        imageSrc: "img/coche.png",
        okcome: "Nunca es tarde para hacer deporte, corres y corres y corres",
        kocome: "A ver si te has dejado las llaves de casa dentro, crees que llevas las del coche.",
        isCorrect: true,
      },
      {
        id: 12,
        text: "Te despiertas en tu casa, parece que todo habia sido un sueño. Estas frente a tu ordenador y a lo lejos se escuhan sonidos extraños",
        text2: "¿Piensas que sigues dormido",
        imageSrc: "img/ProtagonistaDormido.png",
        okcome: "No, se que estoy despierto y anda que no me queda por estudiar",
        kocome: "No, lamentablmente no es un sueño, esto es lo que hace en tu mente Javascript",
        isCorrect: false,
      },
];


//Ordenamos el Array para que vaya en el órden del Id (id1, Id2...)

decisions.sort((a, b) => a.id - b.id);

const gameContainer = document.getElementById("game-container");

let currentIndex = 0;
let score = 5;
const threshold = 100;

function showCard(index) {
    const decision = decisions[index];
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = decision.imageSrc;
    image.alt = decision.imageAlt;  
    card.appendChild(image);

    const text = document.createElement("p");
    text.textContent = decision.text;
    card.appendChild(text);

    const text2 = document.createElement("p");
    text2.textContent = decision.text2;
    card.appendChild(text2);

    card.classList.add("card-enter");

    card.addEventListener("animationend", () => {
        card.classList.remove("card-enter");
    });

    gameContainer.innerHTML = "";
    gameContainer.appendChild(card);
}

function hideCard() {
    const exitDirection = event.key === "ArrowLeft" ? "left" : "right";

    gameContainer.firstChild.style.transition = "transform 0.5s ease";

    if (exitDirection === "left") {
        gameContainer.firstChild.style.transform = "translateX(-100vh)";
    } else {
        gameContainer.firstChild.style.transform = "translateX(100vh)";
    }

    setTimeout(() => {
        showNextCard();
    }, 300);
}


function decide(isPositive) {
    const currentDecision = decisions[currentIndex];
   

    if (isPositive) {
        if (currentDecision.isCorrect) {
            alert(`Has decidido 'Sí'. ¡Correcto!\n${currentDecision.okcome}`);
            score++;
        } else {
            alert(`Has decidido 'Sí'. Incorrecto.\n${currentDecision.kocome}`);
            score--;
        }
    } else {
        if (!currentDecision.isCorrect) {
            alert(`Has decidido 'No'. ¡Correcto!\n${currentDecision.okcome}`);
            score++;
        } else {
            alert(`Has decidido 'No'. Incorrecto.\n${currentDecision.kocome}`);
            score--;
        }
    }

    updateScoreDisplay();

    if (score === -1) {
        alert("¡Perdiste, los Zombies son mucho para ti");
        resetGame();
    } else if (score === 10) {
        alert("¡Has ganado. Sobreviviste!");
        resetGame();
    } else {
        hideCard();
    }
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % decisions.length;
    showCard(currentIndex);
}

function resetGame() {
    score = 5;
    currentIndex = 0;
    updateScoreDisplay();
    showCard(currentIndex);
}

function updateScoreDisplay() {
    document.getElementById('currentScore').textContent = score;
}

function handleKeyPress(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        decide(event.key === "ArrowRight");
    }
}

document.addEventListener("keydown", handleKeyPress);

showCard(currentIndex);
