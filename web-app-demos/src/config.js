const ServerLink = 'http://95.46.199.169:8080/';
const Config = {
    TokenServer: ServerLink + 'models/tokenizer/vocab.json',
    USEServer: ServerLink + 'models/use/tensorflowjs_model.json',
    MNISTServer: ServerLink + 'datasets/MNIST_dataset/',
    NewsGroupsServer: ServerLink + 'datasets/20newsgroups/',
};
export default Config;