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
    'causal-net.log': Log
};
const require = (name)=>{
    return CausalityLib[name];
};
export default require;