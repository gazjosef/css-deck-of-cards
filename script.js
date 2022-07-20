const cards = document.querySelectorAll(".card");

cards.forEach(addCardElements);

function addCardElements(card) {
  const value = card.dataset.value;
  //   const suit = card.dataset.suit;

  const valueAsNumber = parseInt(value);

  if (isNaN(valueAsNumber)) {
  } else {
    for (let i = 0; i < valueAsNumber; i++) {
      const pip = document.createElement("div");
      pip.classList.add("pip");
      card.append(pip);
    }
  }

  card.append(createCornerNumber("top", value));
  card.append(createCornerNumber("bottom", value));
}

function createCornerNumber(position, value) {
  const corner = document.createElement("div");
  corner.textContent = value;
  corner.classList.add("corner-number");
  corner.classList.add(position);

  return corner;
}
