const cardsContainer = document.getElementById("cardsContainer");
const sectionHeader = document.getElementById("section-header");
const countView = document.getElementById("countView");

const headersFilter = [
  "Хиты продаж",
  "Для города",
  "Для взрослых",
  "Для детей",
];

const cardsElement = [
  {
    name: "Kugoo Kirin M4",
    acumulator: "2000 mAh",
    power: "1,2 л.с.",
    speed: "60 км/ч",
    time: "5 часов",
    price: "29 900 ₽",
  },
  {
    name: "Kugoo Kirin M4",
    acumulator: "2000 mAh",
    power: "1,2 л.с.",
    speed: "60 км/ч",
    time: "5 часов",
    price: "29 900 ₽",
  },
  {
    name: "Kugoo Kirin M4",
    acumulator: "2000 mAh",
    power: "1,2 л.с.",
    speed: "60 км/ч",
    time: "5 часов",
    price: "29 900 ₽",
  },
  {
    name: "Kugoo Kirin M4",
    acumulator: "2000 mAh",
    power: "1,2 л.с.",
    speed: "60 км/ч",
    time: "5 часов",
    price: "29 900 ₽",
  },
  {
    name: "Kugoo Kirin M4",
    acumulator: "2000 mAh",
    power: "1,2 л.с.",
    speed: "60 км/ч",
    time: "5 часов",
    price: "29 900 ₽",
  },
  {
    name: "Kugoo Kirin M4",
    acumulator: "2000 mAh",
    power: "1,2 л.с.",
    speed: "60 км/ч",
    time: "5 часов",
    price: "29 900 ₽",
  },
  {
    name: "Kugoo Kirin M4",
    acumulator: "2000 mAh",
    power: "1,2 л.с.",
    speed: "60 км/ч",
    time: "5 часов",
    price: "29 900 ₽",
  },
  {
    name: "Kugoo Kirin M4",
    acumulator: "2000 mAh",
    power: "1,2 л.с.",
    speed: "60 км/ч",
    time: "5 часов",
    price: "29 900 ₽",
  },
];

{
  /*  */
}

let counter = 0;

headersFilter.map((h) => {
  sectionHeader.innerHTML += `<li>
      <a href='#' class="list-none hover:border border-[#6F73EE] hover:text-[#6F73EE] bg-[#F4F7FB] px-5 py-2.5">${h}</a>
    </li>`;
});

cardsElement.map((c) => {
  cardsContainer.innerHTML += `<div class="border-[1.5px] border-[#EAEBED] flex flex-col gap-5 items-start justify-center">
  <div class="min-w-full">
    <img class="w-full object-cover" src="img/samokat.png" alt="" />
  </div>
  <div class='px-6 flex flex-col items-start justify-center gap-5'>
    <h4 class="font-semibold text-lg text-primary-black">${c.name}</h4>
    <ul class='grid grid-cols-2 items-center justify-center gap-x-4 gap-y-4 w-full'>
      <li class="text-gray-600 flex gap-1"><img src="img/accumulator.svg" alt="" /><span>${c.acumulator}</span></li>
      <li class="text-gray-600 flex gap-1"><img src="img/power.svg" alt="" />${c.power}</li>
      <li class="text-gray-600 flex gap-1"><img src="img/speedometer.svg" alt="" />${c.speed}</li>
      <li class="text-gray-600 flex gap-1"><img src="img/timer.svg" alt="" />${c.time}</li>
    </ul>
    <div class="flex justify-between w-full mb-4">
      <h4 class="font-semibold text-xl text-primary-black">${c.price}</h4>
      <div class="cardBtn border rounded-full p-2.5 border-gray-600"><img  src="img/shopping-cart.svg" alt="" />
      </div>
    </div>
  </div>
</div>`;
});

const cardBtn = document.querySelectorAll(".cardBtn");
cardBtn &&
  cardBtn.forEach((card) => {
    console.log(card);
    card &&
      card.addEventListener("click", function () {
        counter++;
        countView.textContent = counter;
      });
  });

countView.textContent = counter;
