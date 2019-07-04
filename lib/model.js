const { ValidateSchema } = require('./utils/Validator');

class Model {
    constructor(dbInstance, schema) {
        this.database = dbInstance;
        this._model = schema;
    }

        /**
     * Appends a new document to the nedb instance
     * @param {*} newData 
     */
    Create(newData) {
        return new Promise((resolve, reject) => {
            ValidateSchema(this._model, newData)
                .then((result) => {
                    if(result === true) {
                        this.database.insert(newData, (err, newDoc) => {
                            if(err) reject(err);
                            else resolve(newDoc);
                        });
                    } else {
                        reject({success: false, msg: result});
                    }
                })
        });
    }

    /**
     * Update a document in the database
     * @param {*} query 
     * @param {*} newData 
     * @param {*} options 
     */
    Update(query, newData, options) {
        return new Promise((resolve, reject) => {
            ValidateSchema(this._model, newData)
                .then((result) =>{
                    if(result === true) {
                        this.database.update(query, newData, options, (err, newData) => {
                            if(err) reject(err);
                            else resolve(newData);
                        });
                    } else {
                        reject({success: false, msg: 'Some of the fields are not same with the model'});
                    }
                });
        });
    }

    /**
     * This Updates a document using an id
     * @param {*} id 
     * @param {*} newData 
     * @param {*} options 
     */
    UpdateById(id, newData, options) {
        return new Promise((resolve, reject) => {
            ValidateSchema(this._model, newData)
                .then((result) =>{
                    if(result === true) {
                        this.database.update({_id: id }, newData, options, (err, newData) => {
                            if(err) reject(err);
                            else resolve(newData);
                        });
                    } else {
                        reject({success: false, msg: 'Some of the fields are not same with the model'});
                    }
                });
        })
    }

    /**
     * Finds one using a query
     * @param {*} query 
     * @param {*} options 
     */
    FindAll(query, options) {
        return new Promise((resolve, reject) => {
                if(result === true) {
                    this.database.find(query, (err, newData) => {
                        if(err) reject(err);
                        else resolve(newData);
                    });
                } else {
                    reject({success: false, msg: 'Some of the fields are not same with the model'});
                }
            });
    }

    /**
     * Find by id
     * @param {*} id 
     */
    FindById(id) {
        return new Promise((resolve, reject) => {
            this.database
                .findOne({ _id: id }, (err, newDoc) => {
                    if(err) reject(err);
                    else resolve(newDoc);
                })
        });
    }

    /**
     * This finds an array of document with the id list provided
     * @param {Array of object id} IdList 
     * @param {*} options 
     */
    FindByIdList(IdList) {
        return new Promise( async (resolve, reject) => {
            const test = [];
            for(const id of IdList) {
                await this.FindById(id).then((result) => {
                    test.push(result)
                });
            }
            resolve(test)
        });

    }

    /**
     * Delete a Document
     * @param {*} query 
     * @param {*} options 
     */
    DeleteById(id, options) {
        return new Promise((resolve, reject) => {
            this.database.remove({_id: id}, options, (err, newData) => {
                if(err) reject(err);
                else resolve(newData);
            });
        });
    };
}

module.exports = Model;