var request = require('request');
var url = 'http://192.168.1.200:5984';


//	Create new document
//	request({ method: 'PUT', uri:'http://192.168.1.200:5984/movies/123', json: { title: 'Unforgiven', year: 1985 }}	, function (error, response, body) {
//		console.log(error,body);
//	});
	
//	Read document
//	request({ method: 'GET', uri:'http://192.168.1.200:5984/movies/123'}, function (error, response, body) {
//		console.log(error,body);
//	});

//	Update document
//	request({ method: 'GET', uri:'http://192.168.1.200:5984/movies/123'}, function (error, response, body) {
//		request({ method: 'PUT', uri:'http://192.168.1.200:5984/movies/123', json: { _rev: JSON.parse(body)._rev, title: 'Unforgiven', year: 1986 }}	, function (error, response, body) {
//			console.log(body);
//		});
//	});

//	Delete document
//	request({ method: 'GET', uri:'http://192.168.1.200:5984/movies/123'}, function (error, response, body) {
//		request({ method: 'DELETE', uri:'http://192.168.1.200:5984/movies/123?rev='+JSON.parse(body)._rev}, function (error, response, body) {
//			console.log(body);
//		});
//	});

// Search document
		request({ method: 'POST', uri:'http://192.168.1.200:5984/movies/_find', json: { "selector": { "year": 1986} } }, function (error, response, body) {
			console.log(body);
		});
