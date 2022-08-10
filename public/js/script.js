/* eslint-disable no-var */
const allButtons = document.querySelector('.decks-block');
const container = document.querySelector('.container');

var score = 0;

function check(obj, answer) {
  // console.log(obj);
  if (((obj.answer === true) && (answer === 'yes')) || (obj.answer === false && answer === 'no')) {
    score += 1;
    console.log(score);
    // alert(obj.comment);
    return true;
  }
  alert(`💩\n ${obj.comment}`);
  return false;
}

function showCard(arrayOfCards) {
  const arrayOfQuest = arrayOfCards.map((element) => element.question);
  //   console.log(arrayOfQuest);
  const index = Math.floor((Math.random() * arrayOfCards.length - 1) + 1);
  container.innerHTML = `
  <div data-card>
    <div class="text">
        <p data-q>${arrayOfQuest[index]}</p>
    </div>
    <div class="buttons-group">
        <button class="scroll" type="button" data-type="yes">Yes</button>
        <button class="scroll" type="button" data-type="no">No</button>
    </div>
  </div>
`;

  const card = container.querySelector('[data-card]');
  //   console.log(card);

  card.addEventListener('click', (e) => {
    // console.log('lol 2', e);
    e.preventDefault();
    if (e.target.type === 'button') {
      const button = e.target;
      console.log(button);
      const answer = button.dataset.type;
      console.log(answer);
      if (check(arrayOfCards[index], answer)) {
        arrayOfCards.splice(index, 1);
        // console.log(arrayOfCards);
        showCard(arrayOfCards);
      } else {
        showCard(arrayOfCards);
      }
      if (arrayOfCards.length === 0) {
        container.innerHTML = `
               <h2 class="game-title">Flashcards decks</h2>
                <div class="text">
                  <p>DAAAAMN! YOU'RE SMART!</p>
                  <p><img src="/img/meme.png"></p>
                </div>
                  `;
      }
    }
  });
}

allButtons.addEventListener('click', async (e) => {
  console.log('lol');
  if (e.target.dataset.type === 'deck') {
    const { deckid } = e.target.dataset;
    const response = await fetch('/cards', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ deckid }),
    });
    if (response.ok) {
      const data = await response.json();
      const { allCards } = data;
      const forShow = [...allCards];
      showCard(forShow);
    } else {
      response.send(418);
    }
  }
});
