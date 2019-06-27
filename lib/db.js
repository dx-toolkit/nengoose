const nedb = require('nedb');
const _ = require('lodash');
const Model = require('./model');

class Db {
    constructor(pathDb, inMemory, onload) {
        this._path = pathDb;
        this.database = new nedb({
            filename: pathDb,
            autoload: true,
            timestampData: true,
            inMemoryOnly: inMemory,
            onload: onload
        })
    }
    /**
     * 
     * @param {*} schema 
     */
    Schema(schema) {
        return new Model(this.database, schema);
    }
    /**
     * @returns String
     */
    getDatabaseLocation() {
        return this._path;
    }

}

module.exports = Db;
