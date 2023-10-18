class Cyberpet {
    constructor(){ //Sets starting stats
        this.happiness = 50;
        this.hunger = 50;
        this.thirst = 50;
    }
    updateUI(){ //Changes information displayed in HTML document
        document.querySelector(".Hunger").textContent = this.hunger;
        document.querySelector(".Thirst").textContent = this.thirst;
        document.querySelector(".Happiness").textContent = this.happiness;
        document.querySelector(".Pet").style.height = `${this.happiness}px`; //Causes "Pet" to grow based on "Happiness"
        document.querySelector(".Pet").style.width = `${this.happiness}px`; //Causes "Pet" to grow based on "Happiness"
    }
    decreaseStats(){ //Causes stats to change over time
        this.hunger += 2;
        this.thirst += 2;
        this.happiness -= 2;
        console.log(pet)
    }
    eat(){ //Decides what "Eat" button does
       if (this.hunger > 0){
            this.hunger -= 10;
            this.thirst -= 1;
            this.happiness +=1;
            this.updateUI();
            console.log(pet)
       }
    }
    drink(){ //Decides what "Drink" button does
        if (this.thirst > 0){
            this.thirst -= 10;
            this.hunger -= 1;
            this.happiness += 1;
            this.updateUI();
            console.log(pet)
        }
    }
    play(){ //Decides what "Play" button does
        if(this.happiness > 0){
            this.happiness += 10;
            this.hunger += 10;
            this.thirst += 10;
            this.updateUI();
            console.log(pet)
        }
    }
}

const pet = new Cyberpet();

document.querySelector(".EatButton").addEventListener("click", () => {
    pet.eat();
}); //Enables "Eat" button

document.querySelector(".DrinkButton").addEventListener("click", () => {
    pet.drink();
}); //Enables "Drink" button

document.querySelector(".PlayButton").addEventListener("click", () => {
    pet.play();
}); //Enables "Play" button

setInterval(() => {
    pet.decreaseStats();
    pet.updateUI();
}, 2000) //Enables changing of stats over time and determines speed of change