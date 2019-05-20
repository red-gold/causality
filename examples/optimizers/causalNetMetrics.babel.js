import { causalNetMetrics } from 'causal-net.optimizers';
import { causalNetCore } from 'causal-net.core';
(async ()=>{
    const T = causalNetCore.CoreTensor;
    let acc = causalNetMetrics.accuracy(T.tensor([ [[0,1], [0,1], [0,1]],
                                                    [[0,1], [0,1], [0,1]] ]),
                                        T.tensor([ [[1,0], [1,0], [1,0]],
                                                    [[0,1], [0,1], [0,1]] ]) );
    acc.print();
    let mse = causalNetMetrics.mse( T.tensor([ [1, 5, 3],
                                               [2, 4, 4] ]),
                                    T.tensor([ [3, 7, 5],
                                               [4, 6, 6] ]) );
    mse.print();
    let mae = causalNetMetrics.mse( T.tensor([  [1, 5, 3],
                                                [2, 4, 4] ]),
                                    T.tensor([  [2, 6, 4],
                                                [1, 3, 3] ]) );
    mae.print();
})();