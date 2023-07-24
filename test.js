console.log("hello world");
var http = require("http");
var fs = require("fs")

const host = "127.0.0.1";
const port = 3000;

// ********************SERVE HTML***************************

// http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.readFile("index.html", (err,data) => {
//         if (err)
//             throw err;
//         console.log("Operation Success");
//         res.end(data);

//     })
// }).listen(3000);

// server.listen(port, host, (error) => {
//     if (error) {
//         console.log("error occurred", error);
//     }
//     console.log("Success");
// })

// ********************SERVE JSON***************************

http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "application/json" });
	let json_response = {
		status: 200,
		message: 'succssful',
		result: ['sunday', 'monday', 'tuesday', 'wednesday'],
		code: 2000
	}
	console.log('Server Running');
	res.end(JSON.stringify(json_response));

	// Reading the file Asynchronously 
	fs.readFile('message.txt', (err, data) => {
		if (err)
			throw err;

		console.log("Content :  " + data);
	});
	// Reading the file synchronously 
	var filename = 'message.txt'; //Name of the file to be read
	var content = fs.readFileSync(filename);
	console.log('data : ' + content);

	var content2 = "this is the content in the file";
	fs.writeFile('message.txt', content2, (err) => {
		if (err)
			throw err;
		console.log('It\'s saved!');
	});

}).listen(3000);