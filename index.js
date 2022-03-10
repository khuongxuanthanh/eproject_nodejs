const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const port = process.env.PORT || 1402;

const app = express();

app.use(morgan('combined'));
app.use(expressLayouts);
// cap quyền truy cập cho các file tĩnh (static file): css jquery.js, images...
app.use(express.static("public"));// cho quyền truy cập toàn bộ các file tĩnh bên trong thư mục public
app.use(express.static("public/images"));// cho quyền truy cập toàn bộ các file tĩnh bên trong thư mục public

// Template engine

// khai bao su dung view engine la ejs
app.set('views', path.join(__dirname, 'views'));
app.set('layout', './layouts/main');
app.set("view engine","ejs");

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/Equipment', (req, res) => {
    res.render('equipment/equipment')
})

app.get('/Equipment/Accessories_01', (req, res) => {
    res.render('equipment/accessories_01')
})

app.get('/News', (req, res) => {
    res.render('news')
})

app.get('/News/Stars-01', (req, res) => {
    res.render('news/stars01')
})

app.get('/Observing', (req, res) => {
    res.render('observing')
})

//Phan cua Dũng******bắt đầu
app.get('/SolarSystem', (req, res) => {
    res.render('solarsystem')
})
app.get('/SolarSystem/solarsystemintroduction', (req, res) => {
    res.render('solar/solarsystemintroduction')
})

app.get('/SolarSystem/sun', (req, res) => {
    res.render('solar/sun')
})

app.get('/SolarSystem/mercury', (req, res) => {
    res.render('solar/mercury')
})
app.get('/SolarSystem/venus', (req, res) => {
    res.render('solar/venus')
})
app.get('/SolarSystem/earth', (req, res) => {
    res.render('solar/earth')
})
app.get('/SolarSystem/mars', (req, res) => {
    res.render('solar/mars')
})
app.get('/SolarSystem/jupiter', (req, res) => {
    res.render('solar/jupiter')
})
app.get('/SolarSystem/saturn', (req, res) => {
    res.render('solar/saturn')
})
app.get('/SolarSystem/uranus', (req, res) => {
    res.render('solar/uranus')
})
app.get('/SolarSystem/neptune', (req, res) => {
    res.render('solar/neptune')
})
app.get('/SolarSystem/pluto', (req, res) => {
    res.render('solar/pluto')
})
app.get('/SolarSystem/asteroids', (req, res) => {
    res.render('solar/asteroids')
})
app.get('/SolarSystem/comets', (req, res) => {
    res.render('solar/comets')
})
app.get('/SolarSystem/meteoroids', (req, res) => {
    res.render('solar/meteoroids')
})
app.get('/Contact', (req, res) => {
    res.render('contact')
})
//Kết thúc phần của dũng*************
app.get('/Constellation', (req, res) => {
    res.render('constellation')
})

app.get('/Constellation/Aquarius', (req, res) => {
    res.render('constell/aquarius')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})