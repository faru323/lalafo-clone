const User = require("../models/User");


module.exports = function(app){
    app.post("/api/cards", (req, res) => {
        const newCard = new User({
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
      
      // Get all users
      app.get("/api/users", (req, res) => {
        User.find()
          .populate("cards")
          .then((users) => res.json(users))
          .catch((err) => res.status(400).json({ msg: err.message }));
      });
      
      // Get a user by id
      app.get("/api/users/:id", (req, res) => {
        User.findById(req.params.id)
          .populate("cards")
          .then((user) => res.json(user))
          .catch((err) => res.status(400).json({ msg: err.message }));
      });
      // Update a user by id
      app.put("/api/cards/:id", (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true })
          .then((card) => res.json(card))
          .catch((err) => res.status(400).json({ msg: err.message }));
      });
      
      // Delete a user by id
      app.delete("/api/cards/:id", (req, res) => {
        User.findByIdAndDelete(req.params.id)
          .then((card) => res.json(card))
          .catch((err) => res.status(400).json({ msg: err.message }));
      });
      
}


