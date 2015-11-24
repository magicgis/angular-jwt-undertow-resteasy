README
======

This repo is based on the following two repos:

* <a href="https://github.com/nzhong/simple-server">simple-server</a>: A small embedded java server, which can serve static content, and REST APIs. It's based on Undertow and RESTEasy.
* <a href="https://github.com/nzhong/angularjs-minimal">angularjs-minimal</a>: A simple starter project template for AngularJS.


What is this?
---------------------------------------------------------
This project adds the following items to the above two base repo:

* Filter intercept on the server
* login form
* JWT token authentication (JWT=Json Web Token).



How to run?
---------------------------------------------------------
* ```cd src/main/resources/static/```
* ```npm install -g bower ```
* ```bower install bootstrap ui.bootstrap angular-bootstrap angular-ui-router ```
* ```cd ../../../../ ```
* ```mvn clean package```
* ```java -jar target/app.jar```

* Point browser to: http://localhost:6060/static/  

- (use one of the following to login)
- guest/welcome
- hello/world
- world/peace
