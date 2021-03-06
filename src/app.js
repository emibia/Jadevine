// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import { greet } from './hello_world/hello_world'; // code authored by you in this project
import env from './env';
// import titlebar from 'titlebar';

console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

 // var t = titlebar();
 
console.log('The author of this app is:', appDir.read('package.json', 'json').author);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('greet').innerHTML = greet();
    document.getElementById('platform-info').innerHTML = os.platform();
    document.getElementById('env-name').innerHTML = env.name;

    // TODO: integrate the titlebar (frameless window)
 //    t.appendTo(document.body);
 //    t.on('close', function(e) {
    //     console.log('close');
    // });
     
    // // t.element exposes the root dom element 
    // t.element.appendChild(document.createElement('div'));
});