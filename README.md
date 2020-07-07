# nodejs-novnc
Simplified comprehensive implementation to get noVNC work in almost any machine.


With Docker Container
To set up app first download files or `git clone https://github.com/sukkamehu/nodejs-novnc`


Set up VNC_HOST address in docker-compose.yml file. Then install Docker Container if you don't have and inside project folder execute `docker-compose up --build`


***********************
Without Docker Container

Clone project, install node.js and inside project folder run `npm install`, edit /app/app.js row 13  `process.env.VNC_HOST` to match your host VNC server. Then copy noVNC ([https://github.com/novnc/noVNC](https://github.com/novnc/noVNC)) -files into /app/novnc-ui/ -folder.
