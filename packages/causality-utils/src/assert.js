import assert from 'assert';
import * as generateSchema from 'generate-schema';
import * as validator from 'ajv';
class Assert{
    constructor(){
        this.assert = assert;
    }

    existed(value){
        this.assert()
    }

    match(){
        let schema = generateSchema();
    }
} 

export default Assert();