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
     * Adds a schema for the supplied database
     * @param {*} schema 
     */
    Schema(schema) {
        return new Model(this.database, schema);
    }

    /**
     * Return the base location of the database
     * @returns String
     */
    getDatabaseLocation() {
        return this._path;
    }

}

module.exports = Db;
