const joi = require('@hapi/joi');

/**
 * Creates a joi schema
 * @param {object} schema 
 */
function _createJoiSchema(schema) {
    let  _joiSchema = {};
    Object
        .keys(schema)
        .forEach((key, index) => {
            if(schema[key].type.name === 'String') {
                _joiSchema[key] = joi.string();
            } else if(schema[key].type.name === 'Number') {
                _joiSchema[key] = joi.number();
            } else if(schema[key].type.name === 'Array') {
                _joiSchema[key] = joi.array();
            }
        });
    return joi.object().keys(_joiSchema);
}

/**
 * This will validate the schema being saved or updated if it matches the desired schema for the database provided
 * @param {Object} origSchema 
 * @param {Object} compareSchema Supply the schema being compared
 */
const validateSchema = async (origSchema, compareSchema) => {
    const JoiSchema = _createJoiSchema(origSchema);

    try {
        const result = JoiSchema.validate(compareSchema);
        if(result.error === null) return true; 
        else return false;
    } catch(err) {
        throw new Error(err.details);
    }
};

module.exports = {
    validateSchema
}