1. npm init -y

2. npm i nodemon

3. in package.json add main: app.js and setup nodemon with script
  - "start": "nodemon app.js"

4. in package add "type": "module"

5. requires now become import statements, ie fs below
AWESOME - bc esmodules are by default asynchronously loaded, top level await work on each js file, so you dont need to call async, just await as shown below

6. Remove 'use strict' from everywhere because by default esmodules use strict-mode

7. __filename and __dirname no longer work in esmodules but you can instead use
     import * as url from 'url';
     const __filename = url.fileURLToPath(import.meta.url);
     const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


- require is old way(commonJs) to do imports ie const fs = require('fs'); and const util = require('./util');

- top level async doesnt work in old way

- Using new esModules is better bc that matches the way the front end works 
and most importantly library authors are updating from commonJs to esm modules, however, commonJs cannot import an esm module whereas a esm module CAN import a commonJs