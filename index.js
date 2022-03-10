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

//constellation
app.get('/Constellation', (req, res) => {
    res.render('constellation')
})
app.get('/constellation2', (req, res) => {
    res.render('constellation2')
})
app.get('/constellation/aquarius-details', (req, res) => {
    res.render('constellation/aquarius-details')
})
app.get('/constellation/aries-details', (req, res) => {
    res.render('constellation/aries-details')
})


app.get('/constellation/cancer-details', (req, res) => {
    res.render('constellation/cancer-details')
})
app.get('/constellation/capricon-details', (req, res) => {
    res.render('constellation/capricon-details')
})
app.get('/constellation/gemini-details', (req, res) => {
    res.render('constellation/gemini-details')
})
app.get('/constellation/leo-details', (req, res) => {
    res.render('constellation/leo-details')
})
app.get('/constellation/libra-details', (req, res) => {
    res.render('constellation/libra-details')
})
app.get('/constellation/pisces-details', (req, res) => {
    res.render('constellation/pisces-details')
})
app.get('/constellation/sagittarius-details', (req, res) => {
    res.render('constellation/sagittarius-details')
})
app.get('/constellation/scopio-details', (req, res) => {
    res.render('constellation/scopio-details')
})
app.get('/constellation/taurus-details', (req, res) => {
    res.render('constellation/taurus-details')
})
app.get('/constellation/virgo-details', (req, res) => {
    res.render('constellation/virgo-details')
})

//photos
app.get('/photos', (req, res) => {
    res.render('photos')
})
app.get('/videos', (req, res) => {
    res.render('videos')
})

//location
app.get('/location', (req, res) => {
    res.render('location')
})
app.get('/location/location1', (req, res) => {
    res.render('location/location1')
})
app.get('/location/location2', (req, res) => {
    res.render('location/location2')
})
app.get('/location/location3', (req, res) => {
    res.render('location/location3')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})