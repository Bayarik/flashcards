const router = require('express').Router();
const { Deck } = require('../db/models');
const { Card } = require('../db/models');
const { Round } = require('../db/models');
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  const allDecks = await Deck.findAll();
  res.render('index', { allDecks });
});

router.post('/cards', async (req, res) => {
  const deckId = req.body.deckid;
  const allCards = await Card.findAll({
    where: {
      deck_id: deckId,
    },
  });
  res.json({ allCards });
});

router.post('/round', async (req, res) => {
  const { score } = req.body;
  const userId = req.body.userid;
  const deckId = req.body.deckid;

  await Round.create({ user_id: userId, deck_id: deckId, score });

  const findUser = User.findByPk(userId);
  const userName = findUser.name;

  const findDeck = Deck.findByPk(deckId);
  const deckTitle = findDeck.title;

  res.json({ userName, deckTitle, score }); // юзер, название деки, очки
});

module.exports = router;
