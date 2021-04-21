const express = require ("express")
const path = require ("path")
const fs = require ("fs")

const https = require ("https")
const http = require ("http")


const key = fs.readFileSync('/etc/ssl/private/kaderarnold.com.key')  
const cert = fs.readFileSync('/etc/ssl/kaderarnold_com.crt')

const app = express()
app.use(express.static(path.join(__dirname, "build")))


const server = https.createServer({key: key, cert: cert}, app)


app.get ('/', function (request, response) {
	response.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get ('/resume.kaderarnold.com.pdf', function (request, response) {
	response.sendFile(path.join(__dirname, 'public', 'resume.kaderarnold.com.pdf'))
})

app.get ('/more', function (request, response) {
	response.sendFile(path.join(__dirname, 'build', 'index.html'))
})

server.listen(443, () => {console.log("listening on 443...")})

var srv = http.createServer()
srv.on ('request', function (req, res) {
	res.writeHead(301, {"Location": "https://kaderarnold.com"})
	res.end()
}).listen(80)
