![Photo by Iker Urteaga on Unsplash](./asset/iker-urteaga-246955-unsplash.jpg)
# Introduction
Causality intensively uses [mixin](https://en.wikipedia.org/wiki/Mixin) for composing class. Mixins allow constructing elastic class that imports just enough methods for target usages. We try to mitigate redundant methods and reduce bundle size. The main mixins for building a pipeline class can be found at the `/src/` folder which pre-built `CausalNet` pipeline ready to use (check tutorials session). Advance mixins 
are seperated into different sub-packages under the `/packages/` folder. Each sub-package exports at most one mixin for building pipeline, For example, causality-optimizer provide trainerMixins for optimizing parameters.

Key design principles:
- Make everything isomorphic.
- Make everything easy to extend.
- Make everything open to view.
- Make data processing as functional blocks. 

We not use type script because we try to mitigate early technical debt from unpaid [type tax](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b). 



## Pipeline
Causality attempts to standardize the pipeline into those steps:
- Sampling from raw data.
- Preprocessing data.
- Infering representation of data.
- Training/ensemble training.
- Evaluation/ensemble evaluation.
## Project module view
![overview](./asset/block_diagram.png)

Here are some machine learning concepts:
- Parameters: TBU
- Hyper parameters: TBU
- Layers: TBU
- Optimizers: TBU
- Sampling: TBU
