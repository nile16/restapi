
var request  = require('request');
const http   = require('http');
var url      = 'http://192.168.1.200:5984/messages/';

const server = http.createServer((req, res) => {

	res.setHeader('Access-Control-Allow-Origin',   '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods',  '*');
	res.setHeader('Access-Control-Allow-Headers',  '*');

	res.setHeader('Content-Type', 'application/json');

	urlPara = req.url.split('/');

	switch(req.method){

		case 'POST':
			var d = new Date();
			request({ method: 'PUT', uri:url+urlPara[1], json: { time:d.toLocaleString(), title: urlPara[2], priority: urlPara[3], message: urlPara[4], author: urlPara[5] }}, function (error, response, body) {
				res.end(JSON.stringify(body));
			});
			break;
		
		case 'GET':
			if (urlPara[1]=="") urlPara[1]='_all_docs?include_do‌​cs=true';
			request({ method: 'GET', uri:url+urlPara[1]}, function (error, response, body) {
				res.end(body);
			});
			break;
			
		case 'PUT':
			request({ method: 'GET', uri:url+urlPara[1]}, function (error, response, body) {
				let change = JSON.parse(body);
				if (!urlPara[2]=="") change.title    = urlPara[2];
				if (!urlPara[3]=="") change.priority = urlPara[3];
				if (!urlPara[4]=="") change.message  = urlPara[4];
				if (!urlPara[5]=="") change.author   = urlPara[5];
				request({ method: 'PUT', uri:url+urlPara[1], json: change }	, function (error, response, body) {
					res.end(JSON.stringify(body));
				});
			});
			break;
		
		case 'DELETE':
			request({ method: 'GET', uri:url+urlPara[1]}, function (error, response, body) {
				request({ method: 'DELETE', uri:url+urlPara[1]+'?rev='+JSON.parse(body)._rev}, function (error, response, body) {
					res.end(JSON.stringify(body));
				});
			});
		break;

		default:
			res.end(JSON.stringify({error:'Method not supported'}));
			break;
	}		
			
}).listen(1250);


