# Database server tech test - javascript

This tech test is used to demonstrate the understanding of web technologies.

### Description

The program runs a server that is accessible on http://localhost:4000/. When the server receives a request on http://localhost:4000/set?somekey=somevalue it stores the passed key and value in memory. When it receives a request on http://localhost:4000/get?key=somekey it returns the value stored at somekey.

### Instructions for how to start the server
```
$ git clone https://github.com/peter-miklos/db_server_tech_test_js
$ cd db_server_tech_test_js
$ npm install
$ DEBUG=app:* npm start
```
