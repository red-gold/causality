![Photo by Josh Applegate on Unsplash](./asset/josh-applegate-1479284-unsplash.jpg)

# Introduction

Key design principles:
- All components are isomorphic.
- self-explaning. 

We not use type script because we try to mitigate early technical debt from unpaid [type tax](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b). 



## Pipeline
Causality attempts to standardize the pipeline into those steps:
- Sampling from raw data.
- Preprocessing data.
- Infering representation of data.
- Training/ensemble training.
- Evaluation/ensemble evaluation.

For example, we can build a simple Logistic regression model with dummy dataset

[EXAMPLE ../../examples/causalNet/logisticsRegression.babel.js]

and the ensemble version

[EXAMPLE ../../examples/causalNet/ensemble.logisticRegression.babel.js]
