const joi = require('@hapi/joi');
const _ = require('lodash');

/**
 * 
 * @param {object} schema 
 */
const CreateJoiSchema = (schema) => {
    const JoiSchema = { };

    _.forOwn(schema, (value, key) => {
        if(value.type.name === 'String') {
            JoiSchema[key] = joi.string()
        } else if (value.type.name === 'Number') {
            JoiSchema[key] = joi.number();
        } else if(value.type.name === 'Array') {
            JoiSchema[key] = joi.array();
        }
    });
    return JoiSchema;
};

/**
 * 
 * @param {Object} origSchema 
 * @param {Object} optionSchema 
 */
const ValidateSchema = (origSchema, optionSchema) => {
    const JoiSchema = CreateJoiSchema(origSchema);
    return new Promise((resolve, reject) => {
        joi.validate(optionSchema, JoiSchema, (err, value) => {
            if(err === null) {
                resolve(true);
            } else {
                resolve(err.details);
            }
        });
    });
};

module.exports = {
    ValidateSchema
}