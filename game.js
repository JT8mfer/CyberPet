const buttonPlayWith = document.getElementById("buttonPlayWith");
const buttonFeed = document.getElementById("buttonFeed");
const buttonWater = document.getElementById("buttonWater");
const buttonWalk = document.getElementById("buttonWalk");
const buttonKillPet = document.getElementById("buttonKillPet");
//get progress bars by ID//
const objectLvlPlay = document.getElementById("objectLvlPlay");
const objectLvlHunger = document.getElementById("objectLvlHunger");
const objectLvlThirst = document.getElementById("objectLvlThirst");
const objectLvlWalks = document.getElementById("objectLvlWalks");
const petBoxSingular = document.getElementById("petBoxSingular");
const buttonRevivePet = document.getElementById("buttonRevivePet");

//petIcon//
document.getElementById("petIcon").src = "./img/cyberPetDogHappy.png";

//Interacting with Pet//
buttonPlayWith.addEventListener("click", () => {
  //increases value of play level when clicked//
  objectLvlPlay.value += 20;
});
buttonPlayWith.addEventListener("mousedown", () => {
  //makes dog happy when interacted with//
  petIcon.src = "./img/cyberPetDogHappy.png";
});
buttonPlayWith.addEventListener("mouseup", () => {
  //returns dog to neutral state on mouse release//
  petIcon.src = "./img/cyberPetDogNeutral.png";
});
buttonFeed.addEventListener("click", () => {
  //increases value of hunger level when clicked//
  objectLvlHunger.value += 20;
});
buttonFeed.addEventListener("mousedown", () => {
  petIcon.src = "./img/cyberPetDogHappy.png";
});
buttonFeed.addEventListener("mouseup", () => {
  petIcon.src = "./img/cyberPetDogNeutral.png";
});
buttonWater.addEventListener("click", () => {
  //increases value of thirst level when clicked//
  objectLvlThirst.value += 20;
});
buttonWater.addEventListener("mousedown", () => {
  petIcon.src = "./img/cyberPetDogHappy.png";
});
buttonWater.addEventListener("mouseup", () => {
  petIcon.src = "./img/cyberPetDogNeutral.png";
});
buttonWalk.addEventListener("click", () => {
  //increases value of walks level when clicked//
  objectLvlWalks.value += 20;
});
buttonWalk.addEventListener("mousedown", () => {
  petIcon.src = "./img/cyberPetDogHappy.png";
});
buttonWalk.addEventListener("mouseup", () => {
  petIcon.src = "./img/cyberPetDogNeutral.png";
});
buttonKillPet.addEventListener("click", () => {
  objectLvlPlay.value = 0;
  objectLvlHunger.value = 0;
  objectLvlThirst.value = 0;
  objectLvlWalks.value = 0;
  petIcon.src = "./img/cyberPetDogRip.png";
  petBoxSingular.style.background = "grey";
  buttonKillPet.style.display = "none";
  buttonRevivePet.style.display = "block";
});
buttonRevivePet.addEventListener("click", () => {
  //to revive dog//
  objectLvlPlay.value = 100;
  objectLvlHunger.value = 10;
  objectLvlThirst.value = 10;
  objectLvlWalks.value = 10;
  petIcon.src = "./img/cyberPetDogRevive.png";
  petBoxSingular.style.background = " #F4CEC7";
  buttonKillPet.style.display = "block";
  buttonRevivePet.style.display = "none";
});

objectLvlPlay.value = 10;
objectLvlHunger.value = 10;
objectLvlThirst.value = 10;
objectLvlWalks.value = 10;

let play = setInterval(() => {
  objectLvlPlay.value--;
}, 100);
let hunger = setInterval(() => {
  objectLvlHunger.value--;
}, 110);
let thirst = setInterval(() => {
  objectLvlThirst.value--;
}, 120);
let walks = setInterval(() => {
  objectLvlWalks.value--;
}, 200);

if (objectLvlPlay.value == 0) {
  clearInterval(play);
}
if (objectLvlHunger.value == 0) {
  clearInterval(hunger);
}
if (objectLvlThirst.value == 0) {
  clearInterval(thirst);
}
if (objectLvlWalks.value == 0) {
  clearInterval(walks);
}
