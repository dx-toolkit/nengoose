const nedb = require('nedb');
const Model = require('./model');

class Db {
    constructor(pathDb, inMemoryOnly, onload) {
        this._path = pathDb;
        this.database = new nedb({
            autoload: true,
            filename: pathDb,
            inMemoryOnly,
            onload,
            timestampData: true,
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
