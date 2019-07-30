# Nengoose

This is a ODM wrapper for nedb.

# Looking for contributors!!
[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Open Source Helpers](https://www.codetriage.com/roshanjossey/first-contributions/badges/users.svg)](https://www.codetriage.com/roshanjossey/first-contributions)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Motivation   
The goal of this open source project is to create a nedb wrapper like mongoose.

## Getting started
Run `npm install nengoose` into your project

### Connecting to the database
First, we need to define a connection. If your app uses only one database, you should import the package. If you need to create additional connections, just create a new variable to contain the connection.

```js
const database = require('nengoose');

const User =  new database("path/to/db");
```

### Defining a schema
To create a database schema we will have to 

```js
    const User = new database("path/to/db");

    const user = User.Schema({
        user: {
            type: String
        },
        password: {
            type: String
        },
        address: {
            type: Array
        }
    });
```