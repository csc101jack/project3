var express = require('express');
var mysql = require('mysql');
var app = express();
 var bodyParser = require("body-parser");
 var async = require("async");

// set the view engine to ejs
app.set('view engine', 'ejs');

 app.use(bodyParser.urlencoded({ extended: true }));

// use res.render to load up an ejs view file
var connection = mysql.createConnection({
    host: '206.12.96.242',
    user: 'group7',
    password: 'untanglingGroup7',
    database: 'ndb'
});
connection.connect();

var listings;
var classType;

connection.query('SELECT * FROM p3items', function(err, rows, fields) {
    if (err) throw err;

    listings = rows;
    console.log("printing data");
    console.log(listings[0]);
    console.log(listings[1]);
    console.log(listings[2]);
    console.log(listings[3]);
    console.log(listings[4]);
});

connection.query('SELECT DISTINCT p3items.class FROM p3items', function(err, rows, fields) {
    if (err) throw err;

    classType = rows;
    console.log("printing data");
    console.log(classType[0]);
    console.log(classType[1]);
    console.log(classType[2]);
    console.log(classType[3]);
    console.log(classType[4]);
    
});

connection.end();

app.get('/', function(req, res) {

 res.render('product1', { classType: classType, listings: listings })
//res.render('product1', JSON.stringify({listings: listings, classType: classType}))
  
})




//query
app.post('/query', function(req, res) {

     console.log(req.body);
    async.series([function(callback) {
            var connection = mysql.createConnection({
                host: '206.12.96.242',
                user: 'group7',
                password: 'untanglingGroup7',
                database: 'ndb'
            });
            connection.connect();
             console.log(req.body.queryStr);
            var q = 'SELECT * FROM p3items WHERE p3items.name LIKE "' + req.body.queryStr + '"';
           
            connection.query(q, function(err, rows, fields) {
                if (err) throw err;

                listings = rows;
                //console.log(rows[0]);
                connection.end();
                callback(null, "query done");
            });


        }, function(callback) {
            res.redirect("/");
            callback(null, "display done");
        }


    ], function(err, results) {
        //console.log(results);
        //could do some error processing here
    });



});

//query

// about page 
// app.get('/about', function(req, res) {
//     var sentence = "this is a test about page, passed as a variable through ejs";
//     var drinks = [
//         { name: 'Bloody Mary', drunkness: 3 },
//         { name: 'Martini', drunkness: 5 },
//         { name: 'Scotch', drunkness: 10 }
//     ];
//     res.render('about', {
//         drinks: drinks,
//         sentence: sentence
//     });
// });

app.listen(8007, function() {
    console.log('Example app listening on port 8007!')
})

//function to output the list of cars in the database

//  function updateLocationsList(transaction, results) {
//     console.log("inside update location list");
// 		console.log(transaction);
//     console.log(results);
//     //initialise the listitems variable
//     var listitems = "";
//     //get the car list holder ul
//     var listholder = document.getElementById("productList");

//     //clear cars list ul
//     listholder.innerHTML = "";

//     var i;
//     //Iterate through the results
//     for (i = 0; i < results.rows.length; i++) {
//         //Get the current row
//         var row = results.rows.item(i);
//         listholder.innerHTML += "<li>" + row.Longitude + " : " + row.Lattitude + " : " + row.Location + " (<a href='javascript:void(0);' onclick='deleteLocation(" + row.id + ");'>Delete Place</a>)";

//         //listholder.innerHTML += "<li>" + row.longitude + " - " + row.lattitude + " (<a href='javascript:void(0);' onclick='deleteCar(" + row.id + ");'>Delete Car</a>)";
//     }

//     var counter =0;
//     for (var i = 0; i < results.rows.length; i++) {  
//         var row = results.rows.item(i);
//       var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(row.Longitude,row.Lattitude),
//         map: map
//       });
//       console.log("the latitude is:" +row.Lattitude);
//             console.log("the longitude is:" +row.Longitude);

//       google.maps.event.addListener(marker, 'click', (function(marker, i) {
//         return function() {
//           counter++;
//         infowindow.setContent(row.Longitude + " " + row.lattitude  + "  Count:" + counter);
//           console.log("logged the click event" + counter);
//           infowindow.open(map, marker);
//         }
//       })(marker, i));
//     }

// }
