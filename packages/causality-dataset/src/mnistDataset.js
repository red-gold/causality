import {default as Function} from './function';
import {IO} from 'causal-net-utils';
const MnistConfigure = {
    ImgFileName: 'mnist_images.png',
    LabelFileName: 'mnist_labels_uint8',
    LINK = 'https://storage.googleapis.com/learnjs-data/model-builder/',
    ImgUrl: 'https://storage.googleapis.com/learnjs-data/model-builder/' + 'mnist_images.png',
    LabelUrl = 'https://storage.googleapis.com/learnjs-data/model-builder/' + 'mnist_labels_uint8',
    SaveDir: './tmp_datasets/'
}

export default class MnistDataset {
    
    constructor(configure=MnistConfigure){
        this.ImgW = 28;
        this.ImgH = 28;
        
        this.NUM_DATASET_ELEMENTS = 65000;
        this.DataSize = [65000, 28, 28, 4];
        this.NumClasses = 10;
        
        this.configure = MnistConfigure;
        this.R = (new Function)._;
    }

    async download_file(){
        let labelUrl = this.configure.labelUrl;
        let imgUrl = this.configure.imgUrl;
        let dataFetch = new FetchStream(imgUrl).pipe(fs.createWriteStream(this.MNIST_IMAGE));
        let labelFetch = new FetchStream(labelUrl).pipe(fs.createWriteStream(this.MNIST_LABEL));
        return Promise.all([dataFetch, labelFetch]);
    }

    loadDataSync(saveSample=[]){
        const SaveImgPath = this.configure.SaveDir + this.MNIST_IMAGE;
        var data = fs.readFileSync(SaveImgPath);
        var png = PNG.sync.read(data);
        let images = R.splitEvery(this.IMAGE_SIZE*4)(png.data);
        return png.data;
    }

    loadLabelSync(){
        const SaveLabelPath = this.configure.SaveDir + this.MNIST_IMAGE;
        const labels = new Uint8Array(fs.readFileSync(SaveLabelPath));
        const encodedLabels = R.splitEvery(10)(labels);//onehot encode of 10 digt classes 
        return labels;
    }       
};
