const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const port = process.env.PORT || 2000;

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

//Connect to Database Azure PhamDung
var mysql=require('mysql');
var db_config = {
    host:'database-projectastronomy.c2bfozqh9syp.ap-southeast-1.rds.amazonaws.com',
    user:'phamdung',
    password:'ducdung1',
    database:'phamdung',
    port:3306,
    stream:false,
    multipleStatements: true,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }
};
var conn;

function handleDisconnect() {
    conn = mysql.createConnection(db_config); // Recreate the connection, since
    // the old one cannot be reused.
    // the old one cannot be reused.

    conn.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }// to avoid a hot loop, and to allow our node script to
        else console.log('Connected to database')// to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    conn.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();
//end connect to database

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/Equipment', (req, res) => {
    res.render('equipment/equipment')
})

app.get('/Equipment/Accessories_01', (req, res) => {
    res.render('equipment/accessories_01')
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

app.get("/News",function (req,res){
    var para = req.query.Title || "";
    var sql_txt = "select * from News where Title like '%"+para+"%'";
    conn.query(sql_txt,function (err, result){
        if(err) res.send(err);
        else{
            // console.log(result);
            res.render("news",{
                News:result
            })
        }
    })
})

app.get("/news-detail-id=100",function (req,res) {
    var sql_txt = "select * from News ; select * from Pictures; select*from Account; select * from Comments;";
    conn.query(sql_txt,function (err,results){
        if(err) res.send(err);
        else {
            // res.send(results);
            res.render("news/newsdetail-id=100",{
                News:results[0][0],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][0]
            })
        }
    })
})

app.get("/news-detail-id=101",function (req,res) {
    var sql_txt = "select * from News;select * from Pictures; select*from Account; select * from Comments";
    conn.query(sql_txt,function (err,results){
        if(err) res.send("Error....");
        else {
            // res.send(rs.recordsets);
            res.render("news/newsdetail-id=101",{
                News:results[0][1],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][1]
            })
        }
    })
})

app.get("/news-detail-id=102",function (req,res) {
    var sql_txt = "select * from News;select * from Pictures; select*from Account; select * from Comments";
    conn.query(sql_txt,function (err,results){
        if(err) res.send("Error....");
        else {
            // res.send(rs.recordsets);
            res.render("news/newsdetail-id=102",{
                News:results[0][2],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][2]
            })
        }
    })
})

app.get("/news-detail-id=103",function (req,res) {
    var sql_txt = "select * from News;select * from Pictures; select*from Account; select * from Comments";
    conn.query(sql_txt,function (err,results){
        if(err) res.send("Error....");
        else {
            // res.send(rs.recordsets);
            res.render("news/newsdetail-id=103",{
                News:results[0][3],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][2]
            })
        }
    })
})

app.get("/news-detail-id=104",function (req,res) {
    var sql_txt = "select * from News;select * from Pictures; select*from Account; select * from Comments";
    conn.query(sql_txt,function (err,results){
        if(err) res.send("Error....");
        else {
            // res.send(rs.recordsets);
            res.render("news/newsdetail-id=104",{
                News:results[0][4],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][2]
            })
        }
    })
})
app.get("/news-detail-id=105",function (req,res) {
    var sql_txt = "select * from News;select * from Pictures; select*from Account; select * from Comments";
    conn.query(sql_txt,function (err,results){
        if(err) res.send("Error....");
        else {
            // res.send(rs.recordsets);
            res.render("news/newsdetail-id=105",{
                News:results[0][5],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][2]
            })
        }
    })
})
app.get("/news-detail-id=106",function (req,res) {
    var sql_txt = "select * from News;select * from Pictures; select*from Account; select * from Comments";
    conn.query(sql_txt,function (err,results){
        if(err) res.send("Error....");
        else {
            // res.send(rs.recordsets);
            res.render("news/newsdetail-id=106",{
                News:results[0][6],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][2]
            })
        }
    })
})

app.get("/news-detail-id=107",function (req,res) {
    var sql_txt = "select * from News;select * from Pictures; select*from Account; select * from Comments";
    conn.query(sql_txt,function (err,results){
        if(err) res.send("Error....");
        else {
            // res.send(rs.recordsets);
            res.render("news/newsdetail-id=107",{
                News:results[0][7],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][2]
            })
        }
    })
})

app.get("/news-detail-id=108",function (req,res) {
    var sql_txt = "select * from News;select * from Pictures; select*from Account; select * from Comments";
    conn.query(sql_txt,function (err,results){
        if(err) res.send("Error....");
        else {
            // res.send(rs.recordsets);
            res.render("news/newsdetail-id=108",{
                News:results[0][8],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][2]
            })
        }
    })
})

app.get("/news-detail-id=109",function (req,res) {
    var sql_txt = "select * from News;select * from Pictures; select*from Account; select * from Comments";
    conn.query(sql_txt,function (err,results){
        if(err) res.send("Error....");
        else {
            // res.send(rs.recordsets);
            res.render("news/newsdetail-id=109",{
                News:results[0][9],
                Pictures:results[1],
                Account:results[2],
                Comments:results[3][2]
            })
        }
    })
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