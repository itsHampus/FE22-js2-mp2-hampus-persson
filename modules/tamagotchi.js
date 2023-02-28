class Tamagotchi {
    #name;
    #type;
    #currentHappiness;
    #currentHunger;
    #happinessId;
    #hungerId;
    constructor(name, type) {
        this.#name = name;
        this.#type = type;
        this.#currentHappiness = 5;
        this.#currentHunger = 5;
    }
    getCurrentHappiness() {
        return this.#currentHappiness;
    }
    getCurrentHunger() {
        return this.#currentHunger;
    }
    getHappinessId() {
        return this.#happinessId;
    }
    getHungerId() {
        return this.#hungerId;
    }
    reduceLevels(happiness, hunger) {
        this.#happinessId = setInterval(() => {
            this.#currentHappiness--;
            happiness.innerText = `${this.#currentHappiness}/10`;
        }, 3000);
        this.#hungerId = setInterval(() => {
            this.#currentHunger--;
            hunger.innerText = `${this.#currentHunger}/10`;
        }, 2000)
    }
    play(happiness) {
        if (this.#currentHappiness < 10) {
            this.#currentHappiness++;
            happiness.innerText = `${this.#currentHappiness}/10`;
        }
    }
    feed(hunger) {
        if (this.#currentHunger < 10) {
            this.#currentHunger++;
            hunger.innerText = `${this.#currentHunger}/10`;
        }
    }
}

export { Tamagotchi };