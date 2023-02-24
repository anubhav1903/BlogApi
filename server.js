const blog=require('./models/blog.model')
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const hbs = require('hbs')
const path = require('path')
const cors=require('cors')
const PORT = process.env.PORT || 8000;

app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    })
  );

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

mongoose.connect('mongodb+srv://root:root@cluster0.qfxl9hl.mongodb.net/BlogApi?retryWrites=true&w=majority').then(() => {
    console.log("Databases connected");
})

app.set('views', path.join(__dirname, '/templates/views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/templates/partials'))
hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

app.use('/',require('./routes/index.route'));

app.listen(PORT, () => {
    console.log("server listening in port " + PORT);
})
