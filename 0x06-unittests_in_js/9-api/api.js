const Express = require('express');

const app = Express();

const validateId = (req, res, next) => {
  const id = req.params.id;
  const idRegex = /^\d+$/;
  if (!idRegex.test(id)) {
    return res.status(404).send('invalid id');
  }
  next();
};

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', validateId, (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.listen(7865, () =>
  console.log('API available on localhost port 7865')
);
