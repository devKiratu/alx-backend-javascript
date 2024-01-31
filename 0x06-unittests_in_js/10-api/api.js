const Express = require('express');

const app = Express();
app.use(Express.json());

const validateId = (req, res, next) => {
  const id = req.params.id;
  const idRegex = /^\d+$/;
  if (!idRegex.test(id)) {
    return res.status(404).send('invalid id');
  }
  next();
};

app.get('/', (req, res) => {
  return res.send('Welcome to the payment system');
});

app.get('/cart/:id', validateId, (req, res) => {
  const id = req.params.id;
  return res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  return res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  try {
    const { userName } = req.body;
    if (!userName) {
      return res.status(400).send('Invalid credentials');
    }
    return res.send(`Welcome ${userName}`);
  } catch (error) {
    return res.status(400).json(req.body);
  }
});

app.listen(7865, () =>
  console.log('API available on localhost port 7865')
);
