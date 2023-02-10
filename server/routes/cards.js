const Card = require('../models/Card');
module.exports = function(app){

  
// Create a card
app.post("/api/cards", (req, res) => {
    const newCard = new Card({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
    });
  
    newCard
      .save()
      .then((card) => res.json(card))
      .catch((err) => res.status(400).json({ msg: err.message }));
  });
  
  // Get all cards
  app.get("/api/cards", (req, res) => {
    Card.find()
      .populate("owner", "name email")
      .then((cards) => res.json(cards))
      .catch((err) => res.status(400).json({ msg: err.message }));
  });

  // Get a card by id
  app.get("/api/cards/:id", (req, res) => {
    Card.findById(req.params.id)
      .populate("owner", ["username", "email"])
      .then((card) => res.json(card))
      .catch((err) => res.status(400).json({ msg: err.message }));
  });
  
  // Update a card by id
  app.put("/api/cards/:id", (req, res) => {
    Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((card) => res.json(card))
      .catch((err) => res.status(400).json({ msg: err.message }));
  });
  
  // Delete a card by id
  app.delete("/api/cards/:id", (req, res) => {
    Card.findByIdAndDelete(req.params.id)
      .then((card) => res.json(card))
      .catch((err) => res.status(400).json({ msg: err.message }));
  });
  
   
}
