const database = require('../lib/db');
const  _ = require('lodash');
const User = new database('C:/Users/Dell/AppData/Roaming/rip-system/database/user.db');
// const Invoice = new database('C:/Users/Dell/AppData/Roaming/rip-system/database/invoice.db');

const user = User.Schema({
    user: {
        type: String
    },
    password: {
        type: String
    }
});

user
.Create({ name: 1, password: 1})
.then((result) => {
    console.log(result);
})