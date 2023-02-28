import{TypeOfTamagotchi} from "./modules/TypeOfTamagotchi.js";
document.getElementById('form').addEventListener('submit', event=>{
    event.preventDefault();
    const name = document.getElementById('textInput').value;
    const type = document.getElementById('selectType').value;

    const tamagotchi = new TypeOfTamagotchi(name, type);
});