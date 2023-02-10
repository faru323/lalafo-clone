
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const saltRounds = 10;
const secretKey = "secretkey";

app.post("/register", async (req, res) => {
  const { name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  res.send("Successfully Registered!");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (!user) {
    return res.status(401).send("User not found");
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).send("Incorrect Password");
  }
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
  res.send({ token });
});
