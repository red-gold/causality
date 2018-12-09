var {TensorBackend} = require('./tensorBackend.js');
const tensorBackend = new TensorBackend();
const Tensor = tensorBackend.tensor
const PipelineLayer = (...args)=>tensorBackend.pipelineLayer(...args);
module.exports = {Tensor, PipelineLayer};