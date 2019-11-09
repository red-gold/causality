import assert from 'assert';
import * as schemaGenerator from 'generate-schema';
import * as ajvValidator from 'ajv';
/**
 * This Assert class provides asserting methods based on builtin 
 * [generate-schema](https://www.npmjs.com/package/generate-schema), 
 * and schema checking [ajv](https://www.npmjs.com/package/ajv) 
 *
 * @class Assert
 * @example
 * [EXAMPLE ../examples/assert.babel.js]
 */
class IsoAssert{
    /**
     * Creates an instance of assert.
     * @param { Any } assert - assert instance
     * @param { Any } schemaGenerator - schema generator
     * @param { Any } validator - validator
     * @memberof assert
     */
    constructor(assert, generateSchema, validator){
        /** 
         * @private 
         * @type { Object } assert
        */
        this.assert = assert;
        this.schemaGenerator = schemaGenerator;
        this.validator = validator;
        this.primitiveType = [ 'string', 'number', 'array' ];
    }
    /**
     * Try to check if the sample pattern matchs with input value pattern. 
     * Since the auto-learnt sample pattern could be incompleted, 
     * this function usage should follow the examples.
     * @param { Any } value - input value
     * @param { Any } sample - sample value pattern
     * @param { String } [name='sample'] - value name
     * @memberof assert
     */
    seemMatchSample(value, sample, name='sample'){
        let schema = this.schemaGenerator.json(name, sample);
        delete schema.$schema;
        let validator = new Validator(); 
        let valid = validator.addSchema(schema, name).validate(name, value);
        if(!valid){ 
            throw Error(`value ${JSON.stringify(value)} not match schema \n${JSON.stringify(schema)}`);
        }
    }
    
    /**
     * assert object to be instance of class
     * @param { Object } instance
     * @param { Class } targetClass
     * @memberof assert
     */
    isInstanceOf(instance, targetClass){
        if(!(instance instanceof targetClass)){
            throw Error(`${JSON.stringify(instance)} must be instance of ${targetClass.name}`);
        }
    }
    
    /*
    * assert object for the type
    * @param { Object } instance
    * @param { type } targetClass
    * @memberof assert
    */
    isTypeOf(instance, type){
        if(this.primitiveType.indexOf(type) === -1){
            throw Error(`${type} to check is not support by primitive type ${JSON.decode(this.primitiveType)}`);
        }
        if(type == 'array'){
            if( !Array.isArray(instance) ){
                throw Error(`${instance} is not type of ${type}`);
            }
        }
        if(typeof instance !== type){
            throw Error(`${instance} is not type of ${type}`);
        }
    }
} 
const isoAssert = new IsoAssert(assert, schemaGenerator, ajvValidator);
export default isoAssert;