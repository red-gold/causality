import assert from 'assert';
import * as generateSchema from 'generate-schema';
import * as Validator from 'ajv';
/**
 * This Assert class provides asserting methods based on builtin schema generating, checking
 *
 * @class Assert
 */
class Assert{
    /**
     *Creates an instance of Assert.
     * @memberof Assert
     */
    constructor(){
        /** 
         * @private 
         * @type { Object } assert
        */
        this.assert = assert;
    }
    /**
     * Try to check if the sample pattern matchs with input value pattern. 
     * Since the auto-learnt sample pattern could be incompleted, 
     * this function usage should follow the examples.
     * @param { Any } value - input value
     * @param { Any } sample - sample value pattern
     * @param { String } [name='sample'] - value name
     * @memberof Assert
     * @example
     * import { Assert } from 'causal-net.utils';
     * Assert.seemMatchSample([2,2,3], [1,2,3], 'validate sample');
     * //>> no assertion error
     * Assert.seemMatchSample('sample text', 'pattern text', 'validate sample');
     * //>> no assertion error
     * Assert.seemMatchSample( { 'text' : 'input text', 'number' : 123435456 }, 
     *                         { 'text' : 'text', 'number' : 11 } , 'validate sample');
     * //>> no assertion error
     */
    seemMatchSample(value, sample, name='sample'){
        let schema = generateSchema.json(name, sample);
        delete schema.$schema;
        let validator = new Validator(); 
        let valid = validator.addSchema(schema, name).validate(name, value);
        if(!valid){ 
            throw Error(`value ${JSON.stringify(value)} not match schema \n${JSON.stringify(schema)}`);
        }
    }
} 

export default new Assert();