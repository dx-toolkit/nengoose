const database = require('../lib/db');
const  _ = require('lodash');
const User = new database('user.db');
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
.Create({ user: "HEEEY", password: "a"})
.then((result) => {
    console.log(result, "RESULT");
})
.catch((err) => console.log(err))