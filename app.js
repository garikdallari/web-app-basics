const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const app = express();
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
  extname: 'hbs',
}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/products', (req, res) => {
  res.render('products', { products, cssFileName: 'products' })
});

app.get('/product/:productId', (req, res) => {
  const product = products.find(p => p.id === req.params.productId);
  res.render('product', { product })
});




app.listen(4444, () => {
  console.log('App is runign on server 4444');
});

