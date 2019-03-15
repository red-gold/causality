![Photo by Iker Urteaga on Unsplash](./asset/iker-urteaga-246955-unsplash.jpg)
# Introduction
Causality intensively uses [mixin](https://en.wikipedia.org/wiki/Mixin) for composing class. Mixins allow constructing elastic class that imports just enough methods for target usages. We try to mitigate redundant methods and reduce bundle size. The main mixins for building a pipeline class can be found at the `/src/` folder which pre-built `CausalNet` pipeline ready to use (check tutorials session). Advance mixins 
are seperated into different sub-packages under the `/packages/` folder. Each sub-package exports at most one mixin for building pipeline, For example, causality-optimizer provide trainerMixins for optimizing parameters.

Key design principles:
- Isomorphic.
- Make everything easy to extend.
- None type to avoid [type tax](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b). 
- Data processing is formed by chaining functional blocks. 


## Pipeline package
Causality attempts to standardize the pipeline into those steps:
- Sampling from raw data.
- Preprocessing data.
- Infering representation of data.
- Training/ensemble training.
- Evaluation/ensemble evaluation.

![overview](./asset/block_diagram.png)

Here are some machine learning concepts:
- Parameters: Each model 
- Hyper parameters: 
- Layers:
- Optimizers:
- Sampling: 

# Sub-packages

[INCLUDE ../../packages/causality-core/DESCRIPTION.md]


[INCLUDE ../../packages/causality-preprocessing/DESCRIPTION.md]

[INCLUDE ../../packages/causality-representation/DESCRIPTION.md]

[INCLUDE ../../packages/causality-sampling/DESCRIPTION.md]

[INCLUDE ../../packages/causality-models/DESCRIPTION.md]

[INCLUDE ../../packages/causality-layers/DESCRIPTION.md]

[INCLUDE ../../packages/causality-memcache/DESCRIPTION.md]

[INCLUDE ../../packages/causality-storage/DESCRIPTION.md]

[INCLUDE ../../packages/causality-utils/DESCRIPTION.md]



