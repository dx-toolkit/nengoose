const joi = require('@hapi/joi');
const _ = require('lodash');

const CreateJoiSchema = (schema) => {
    const JoiSchema = { };

    _.forOwn(schema, (value, key) => {
        if(value.type.name === 'String') {
            JoiSchema[key] = joi.string()
        } else if (value.type.name === 'number') {
            JoiSchema[key] = joi.number();
        }
    });
    return JoiSchema;
};

const ValidateSchema = (origSchema, optionSchema) => {
    const JoiSchema = CreateJoiSchema(origSchema);
    return new Promise((resolve, reject) => {
        joi.validate(optionSchema, JoiSchema, (err, value) => {
            if(err === null) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
};

module.exports = {
    ValidateSchema
}