const express = require('express');
const app = express();
const server = app.listen(8001, () => console.log(`noVNC Interface listening at http://localhost:8001`)) // Start HTTP server
const websockify = require('@maximegris/node-websockify');

app.use('/', express.static('/home/novnc/app/novnc-ui/'));
app.get('/', function (req, res) {
	res.redirect(301, '/vnc.html')
})

websockify({
	source: '127.0.0.1:8000',
	target: process.env.VNC_HOST
});