if(require('is-node')){
    const { BufferToImg, ImgToBuffer, PIDExport, R } = require('causality-utils');
}

class MnistDataset {
    
    constructor(Configure={}){
        this.IMAGE_H = 28;
        this.IMAGE_W = 28;
        this.IMAGE_SIZE = this.IMAGE_H * this.IMAGE_W;
        this.NUM_CLASSES = 10;
        this.NUM_DATASET_ELEMENTS = 65000;

        this.NUM_TRAIN_ELEMENTS = 55000;
        this.NUM_TEST_ELEMENTS = this.NUM_DATASET_ELEMENTS - this.NUM_TRAIN_ELEMENTS;
        this.MNIST_IMAGE = 'mnist_images.png';
        this.MNIST_LABEL = 'mnist_labels_uint8';
        this.LINK = 'https://storage.googleapis.com/learnjs-data/model-builder/';
        this.MNIST_IMAGES_SPRITE_PATH = this.LINK + this.MNIST_IMAGE;
        this.MNIST_LABELS_PATH = this.LINK + this.MNIST_LABEL;
        this.SAVE_DIR = './';
    }

    async download_file(){
        let data_fetch = new FetchStream(this.MNIST_IMAGES_SPRITE_PATH).pipe(fs.createWriteStream(this.MNIST_IMAGE));
        let label_fetch = new FetchStream(this.MNIST_LABELS_PATH).pipe(fs.createWriteStream(this.MNIST_LABEL));
        return Promise.all([data_fetch, label_fetch]);
    }

    loadDataSync(saveSample=-1){
        var data = fs.readFileSync(this.SAVE_DIR + this.MNIST_IMAGE);
        var png = PNG.sync.read(data);
        let images = R.splitEvery(this.IMAGE_SIZE*4)(png.data);
        return png.data;
    }

    async load_data(saveSample=-1){
        return fs.createReadStream(this.SAVE_DIR + this.MNIST_IMAGE)
                .pipe(new PNG({
                    filterType: 4,
                    IMAGE_SIZE: this.IMAGE_SIZE,
                    IMAGE_H: this.IMAGE_H,
                    IMAGE_W: this.IMAGE_W,
                    SAVE_DIR: this.SAVE_DIR
                }))
                .on('parsed', function() {
                    
                    const options = this._parser._options;
                    const IMAGE_SIZE = options.IMAGE_SIZE,
                          IMAGE_W = options.IMAGE_W,
                          IMAGE_H = options.IMAGE_H,
                          SAVE_DIR = options.SAVE_DIR;
                    
                    let images = R.splitEvery(IMAGE_SIZE*4)(this.data);
                    this.images = images;
                    console.log({option: this._parser._options, len: this.images.length});
                    if(saveSample){
                        BufferToImg(images, IMAGE_W, IMAGE_H, SAVE_DIR + 'sample.png');
                    }
                }); 
    }

    loadLabelSync(){
        const labels = new Uint8Array(fs.readFileSync(this.SAVE_DIR + this.MNIST_LABEL));
        const encodedLabels = R.splitEvery(10)(labels);//onehot encode of 10 digt classes 
        return labels;
    }       
};
