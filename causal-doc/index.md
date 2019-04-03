***This project is immature and under active development. Contents will be updated rapidly***

# Portable deep learning models with Causality

![Photo on Unsplash](./manual/asset/coffee-main.jpg)

Causality is a free and open source javascript library that allows building isomorphic machine learning pipeline. Roundly speaking, your trained model can be deployed on client's devices via web environment without re-piping your code. 

On top of Tensorflowjs, our set of reusable components handle data preprocessing, infer data representation, visualizing, training and evaluation on both node and web environment with the same APIs. Thus reduce engineering efforts for making production AI services. By using the same language, developers can simplify development setup, mitigate the communication cost, better coding pattern and share more ideas. 

Moreover, with AI models are loaded as client' devices for performing inference, personal or sensitive data is not exposed to the service providers. We also invest in ensemble learning and the recent federated learning approach for distributed training while preserving data privacy without requiring any global data storage. 

Researchers can utilize built-in datasets and the prebuilt pipelines to prototype new model ideas and make research results easy to review, present and reproduce. We hope developers and researchers can find this project a meaningful work to contribute and collaborate to push forward a new class of affordable, transparent deep learning services. 

The commercial version of this library, Moderator, is our effort for moderating social network contents heading to protecting community culture. The AI moderator, which is built up by community voted training data, transparently prevent bad contents from propagating, and re-ranking relevant contents prior to client views without revealing any personal preference. The Causality, Moderator alongside with React Social Network are the ideas from our startup, Red Gold, for building a smarter social network with community culture respect and transparent AI moderator.

Example:

Building a simple Logistic regression model with dummy dataset

[EXAMPLE ../examples/causalNet/logisticsRegression.babel.js]

and the ensemble version

[EXAMPLE ../examples/causalNet/ensemble.logisticRegression.babel.js]


