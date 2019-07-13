# Nengoose

This is a ODM wrapper for nedb.

# Looking for contributors!


## Overview

### Connecting to Nedb

First, we need to define a connection. If your app uses only one database, you should import the package. If you need to create additional connections, just create a new variable to contain the connection.

```js
const database = require('mongoose');

const User =  new database("path/to/db");
```
