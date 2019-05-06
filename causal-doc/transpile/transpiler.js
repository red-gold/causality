var Babel = require("@babel/standalone/babel");
import { registerPreset, registerPlugin } from "@babel/standalone";
import babelPresetEnv from "@babel/preset-env";

registerPlugin('@babel/plugin-transform-runtime', 
    require('@babel/plugin-transform-runtime'));

registerPlugin('@babel/plugin-syntax-dynamic-import', 
    require('@babel/plugin-syntax-dynamic-import'));
registerPlugin('@babel/plugin-proposal-object-rest-spread', 
    require('@babel/plugin-proposal-object-rest-spread'));
registerPreset("env", babelPresetEnv);
var transformOptions = {
    "presets": [[ "env", { "targets": { "browsers": '> 5%' } } ]],
    "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import", 
        "@babel/plugin-proposal-object-rest-spread"
    ]
};
const transpile = (code)=>{
    return Babel.transform(code, transformOptions).code;
};
// const transpileCode = transpile(`
//     import { causalNetCore } from 'causal-net.core';
//     console.log(causalNetCore.CoreTensor);
//     console.log(causalNetCore.CoreFunctor);
// `);
// console.log({transpileCode});
// const Run = new Function(transpileCode);
// Run();
export default transpile;