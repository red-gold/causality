![Photo by Iker Urteaga on Unsplash](./asset/iker-urteaga-246955-unsplash.jpg)

# Monorepo

Causality provides sub-package plugins for build up pipeline as follows:

Causality intensively uses [mixin](https://en.wikipedia.org/wiki/Mixin) for composing class. Mixins allow constructing elastic class that imports just enough methods for target usages. We try to mitigate redundant methods and reduce bundle size. The main mixins for building a pipeline class can be found at the `/src/` folder which pre-built `CausalNet` pipeline ready to use (check tutorials session). Advance mixins 
are seperated into different sub-packages under the `/packages/` folder. Each sub-package exports at most one mixin for building pipeline, For example, causality-optimizer provide trainerMixins for optimizing parameters.

## Project module view
![overview](./asset/block_diagram.png)

[INCLUDE ../../packages/causality-core/DESCRIPTION.md]

[INCLUDE ../../packages/causality-datasets/DESCRIPTION.md]

[INCLUDE ../../packages/causality-deployment/DESCRIPTION.md]

[INCLUDE ../../packages/causality-layer/DESCRIPTION.md]

[INCLUDE ../../packages/causality-log/DESCRIPTION.md]

[INCLUDE ../../packages/causality-preprocessing/DESCRIPTION.md]

[INCLUDE ../../packages/causality-representation/DESCRIPTION.md]

[INCLUDE ../../packages/causality-sampling/DESCRIPTION.md]

[INCLUDE ../../packages/causality-models/DESCRIPTION.md]

[INCLUDE ../../packages/causality-optimizers/DESCRIPTION.md]

[INCLUDE ../../packages/causality-memcache/DESCRIPTION.md]

[INCLUDE ../../packages/causality-storage/DESCRIPTION.md]

[INCLUDE ../../packages/causality-utils/DESCRIPTION.md]



