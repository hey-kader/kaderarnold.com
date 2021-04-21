# kaderarnold.com src code 

This is Kader Arnold's online portfolio web app.

## Implementation details 

This website was built using ReactJS, Bootstrap, NodeJS, and Express. 


### Front End

While I usually style my own websites using a stylesheet, I decided to use Bootstrap today because I have never used it before. Bootstrap is a styling library maintained by twitter, and it has a useful api in ReactJS. ReactJS is a javascript framework maintained by Facebook.

### Back End

The serving script is written using NodeJS and Express. All http traffic uses a 301 http response(permanent redirect) to forward traffic through https. 

## To Clone The Repository

```
$ git clone git@github.com:pablopenrose/kaderarnold.com.git
$ cd kaderarnold.com
$ sudo apt-get install nodejs openssl 
$ npm install

// Generate a self-signed ssl key and certificate
$ openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
```

After running these commands, change line 9 of ```server.js``` from 
```const key = fs.readFileSync('/etc/ssl/private/kaderarnold.com.key')```
to ```const key = fs.readFileSync('key.pem')```

Then, change line 10 of ```server.js``` from ``` const cert = fs.readFileSync('/etc/ssl/kaderarnold_com.crt')``` to ```const key = fs.readFileSync('cert.pem')```

To start the server

```$ node server.js```

alternatively, run in the background

```$ node server.js &```

To stop the server

```$ killall node```

