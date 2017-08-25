// here we will require our model/table set up from our database mysql
var db = require("../models");

module.exports = function(app) {

	app.get("/api", function(req,res) {

			// we received req.query object
			// how to create  "where" instance to exclude the empty fields
			// now need to "split" the query string and use the values

			console.log(req.query);

			// var req = req;

			// encode the url string so you eliminate  "&" etc...
			// req = decodeURIComponent(req);

			// console.log(req);

			var query = {};

			if(req.query.address) {
				query.address = req.query.address;
			}

			if(req.query.city) {
				query.city = req.query.city;
			}

			if(req.query.state){
				query.state = req.query.state;
			}

			if(req.query.zip) {
				query.zip = req.query.zip;
			}


			if(req.query.lat) {
				query.lat = req.query.lat;
			}

			if(req.query.long) {
				query.long = req.query.long;
			}

			if(req.query.image_url) {
				query.image_url = req.query.image_url;
			}

			console.log(query);


		db.Apartment.findAll({
			// here we ill use our query var
			where: query

		}).then(function(receivedSearchInfo) {
			res.json(receivedSearchInfo);
		});

	} );

}