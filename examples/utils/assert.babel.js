import { Assert } from 'causal-net.utils';
Assert.seemMatchSample([2,2,3], [1,2,3], 'validate sample');
Assert.seemMatchSample('sample text', 'pattern text', 'validate sample');
Assert.seemMatchSample( { 'text' : 'pattern text 1', 'number' : 1123 }, 
                        { 'text' : 'pattern text', 'number' : 1123 } , 'validate sample');
Assert.seemMatchSample(['2',2,3], [1,2,3], 'validate sample');

