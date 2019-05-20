const ServerLink = 'https://jsaidemo.ml/';
// const ServerLink = 'http://0.0.0.0:8080/';
const Config = {
    TokenServer: ServerLink + 'models/tokenizer/vocab.json',
    USEServer: ServerLink + 'models/use/tensorflowjs_model.json',
    MNISTServer: ServerLink + 'datasets/MNIST_dataset/',
    NewsGroupsServer: ServerLink + 'datasets/20newsgroups/',
};
export default Config;