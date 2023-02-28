import { Tamagotchi } from "./tamagotchi.js";

class TypeOfTamagotchi extends Tamagotchi {
    #name;
    #type;
    #playBtn;
    #feedBtn;
    #hungerLevel;
    #happinessLevel;
    #tamagotchiContainer;
    #screenContainer;
    #happinessId;
    #hungerId;
    #animalIcon;
    #faceIcon;
    constructor(name, type) {
        super(name, type);
        this.#name = name;
        this.#type = type;
        this.createGUI();
        this.currentWellbeing();
    }
    createGUI() {  
        // Skapar element som ska visa Tamagotchi:ns välmående
        const happinessFromStart = this.getCurrentHappiness();
        const hungerFromStart = this.getCurrentHunger();
        this.#happinessLevel = document.createElement('h2');
        this.#hungerLevel = document.createElement('h2');
        this.#happinessLevel.innerText = `${happinessFromStart}/10`;
        this.#hungerLevel.innerText = `${hungerFromStart}/10`;
        
        const heartIcon = document.createElement('img');
        heartIcon.src = './images/icons8-heart-with-pulse-50.png';
        const feedIcon = document.createElement('img');
        const statusContainer = document.createElement('div');
        statusContainer.classList.add('statusContainer');
        statusContainer.append(heartIcon, this.#happinessLevel, feedIcon, this.#hungerLevel);
        
        // Skapar element som ska visa namnet och ikoner för tamagotchin
        this.#animalIcon = document.createElement('img');
        this.#animalIcon.classList.add('animalIcon');
        this.#faceIcon = document.createElement('img');
        this.#faceIcon.classList.add('faceIcon');
        const nameElement = document.createElement('h1');
        nameElement.innerText = `${this.#name} the ${this.#type}`;
        this.#screenContainer = document.createElement('div');
        this.#screenContainer.classList.add('screenContainer');
        this.#screenContainer.append(nameElement, this.#animalIcon, this.#faceIcon, statusContainer);
        
        const borderGradient = document.createElement('div');
        borderGradient.classList.add('borderGradient');
        borderGradient.append(this.#screenContainer);
        
        this.#playBtn = document.createElement('button');
        this.#playBtn.classList.add('playBtn');
        this.#feedBtn = document.createElement('button');
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonContainer');
        buttonContainer.append(this.#playBtn, this.#feedBtn);

        this.#tamagotchiContainer = document.createElement('div');
        this.#tamagotchiContainer.classList.add('tamagotchiContainer', this.#type);
        this.#tamagotchiContainer.append(borderGradient, buttonContainer);

        // Kollar vad för "typ" av tamagotchi som ska skapas
        if(this.#type == 'Moose'){
            this.#animalIcon.src = './images/moose-svgrepo-com.svg';
            feedIcon.src = './images/icons8-apple-50.png';
            this.#feedBtn.classList.add('feedBtnApple');
        }
        else{
            this.#animalIcon.src = './images/wolf-svgrepo-com.svg';
            feedIcon.src = './images/icons8-rack-of-lamb-50.png';
            this.#feedBtn.classList.add('feedBtnLamb');
        }

        document.getElementById('containerForTamagotchi').append(this.#tamagotchiContainer);

        this.#playBtn.addEventListener('click', () => {
            this.play(this.#happinessLevel);
        });
        this.#feedBtn.addEventListener('click', () => {
            this.feed(this.#hungerLevel);
        })

        // Börja reducera Tamagotchi:ns välmående efter den har skapats
        this.reduceLevels(this.#happinessLevel, this.#hungerLevel);
    }
    currentWellbeing() {
        let stopId = setInterval(() => {
            let happiness = super.getCurrentHappiness();
            let hunger = super.getCurrentHunger();
            this.#happinessId = super.getHappinessId();
            this.#hungerId = super.getHungerId();
            // Om den är död
            if (happiness == 0 || hunger == 0) {
                this.#screenContainer.style.backgroundColor = '#fed9b79c';
                clearInterval(stopId);
                clearInterval(this.#happinessId);
                clearInterval(this.#hungerId);
                this.#playBtn.disabled = true;
                this.#feedBtn.disabled = true;
                this.#faceIcon.src = './images/not-feeling-well-sick-sick-emoji-svgrepo-com.svg';
            }
            else if (happiness >= 6 && hunger >= 6) {
                this.#faceIcon.src = './images/happy-happy-face-happy-icon-svgrepo-com.svg';
            }
            else if (happiness > 4 && hunger > 4) {
                this.#faceIcon.src = './images/confuse-confuse-emoji-confused-face-svgrepo-com.svg';
            }
            else if (happiness < 5 || hunger < 5) {
                this.#faceIcon.src = './images/angry-angry-headache-emoji-icon-svgrepo-com.svg';
            }
        }, 100);
    }
}
export { TypeOfTamagotchi };