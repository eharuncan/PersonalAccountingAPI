# example-personal-accounting-webclient
An Example Web Client 

includes Mock Services

which uses HTML, CSS and TypeScript

## Installing the dependencies

In the projects root directory

```
npm install
```

This will install all the dependencies in the package.json

## Starting the application

> Go into the src directory and run the start script

```
cd ./src
npm start
```
This will run the start script in the package.json (this runs webpack --watch which will automatically recompile index.ts in the src directory on every change)

## Opening the application

You can start your browser with this command to disable CORS. Because the application is sending localhost api requests to communicate with the API.
```
chromium-browser --disable-web-security --user-data-dir="/tmp/chromium-profile"
```

Open: http://localhost:5500/public/ (if you are using visual studio code as your text editor use liveserver extension)

<p>
<span style="font-size: 1.3rem"> 
If all the steps are done correctly the counter-example  show be rendered  in your browser when you open index.html in your browser with liveserver
</span> <br/>

## Using Mock Server for API respons (optional)

You can use Mockoon (https://mockoon.com/) mock server for backend API
  
Import this backup file (mockoon-backup.json) and start your backend mock server.
