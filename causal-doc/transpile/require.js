import * as Causality from 'causal-net';
import * as Core from 'causal-net.core';
import * as Datasets from 'causal-net.datasets';
import * as Preprocessing from 'causal-net.preprocessing';
import * as Optimizers from 'causal-net.optimizers';
import * as Models from 'causal-net.models';
import * as Layer from 'causal-net.layer';
import * as Utils from 'causal-net.utils';
import * as Deployment from 'causal-net.deployment';
import * as Log from 'causal-net.log';
import * as TransformRuntime from '@babel/plugin-transform-runtime';
import * as DynamicImport from '@babel/plugin-syntax-dynamic-import';
import * as RestSpread from '@babel/plugin-proposal-object-rest-spread';
const CausalityLib = {
    'causal-net': Causality,
    'causal-net.core': Core,
    'causal-net.datasets': Datasets,
    'causal-net.preprocessing': Preprocessing,
    'causal-net.optimizers': Optimizers,
    'causal-net.models': Models,
    'causal-net.layer': Layer,
    'causal-net.utils': Utils,
    'causal-net.deployment': Deployment,
    'causal-net.log': Log,
    '@babel/plugin-transform-runtime': TransformRuntime,
    '@babel/plugin-syntax-dynamic-import': DynamicImport,
    '@babel/plugin-proposal-object-rest-spread': RestSpread
};
const require = (name)=>{
    return CausalityLib[name];
};
export default require;