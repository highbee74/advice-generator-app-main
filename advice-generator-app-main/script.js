const adviceText = document.getElementById("adviceText");
const adviceNumber = document.getElementById("adviceNumber");
const diceBtn = document.getElementById("diceBtn");

const advices = [
  "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Ibrahimovic once said, 'I can’t help but laugh at how perfect I am.",
];



diceBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * advices.length);
  const randomId = Math.floor(Math.random() * 200) + 1;

  adviceText.textContent = `“${advices[randomIndex]}”`;
  adviceNumber.textContent = randomId;
});


console.log(adviceText.textContent);