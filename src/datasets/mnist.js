// /**
//  * @license
//  * Copyright 2018 Google LLC. All Rights Reserved.
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  * =============================================================================
//  */

// if(require('is-node')){
//     var R = require('ramda');
//     var fs = require('fs-extra');
//     var {promisify} = require('util');
//     var tf = require('@tensorflow/tfjs');
//     var FetchStream = require("fetch").FetchStream;    
//     var {BufferToImg} = require('../utils.js');
//     var {raw_input} = require('raw_input');
//     var pipe = require('promise.pipe');
// }
// console.log({promisify});

// const ReadFile = promisify(fs.readFile);
// const WriteFile = promisify(fs.writeFile);

// /**
//  * A class that fetches the sprited MNIST dataset and provide data as
//  * tf.Tensors.
//  */

// class MnistData {
    
//     constructor(){
//         this.IMAGE_H = 28;
//         this.IMAGE_W = 28;
//         this.IMAGE_SIZE = this.IMAGE_H * this.IMAGE_W;
//         this.NUM_CLASSES = 10;
//         this.NUM_DATASET_ELEMENTS = 65000;

//         this.NUM_TRAIN_ELEMENTS = 55000;
//         this.NUM_TEST_ELEMENTS = this.NUM_DATASET_ELEMENTS - this.NUM_TRAIN_ELEMENTS;
//         this.MNIST_IMAGE = 'mnist_images.png';
//         this.MNIST_LABEL = 'mnist_labels_uint8';
//         this.LINK = 'https://storage.googleapis.com/learnjs-data/model-builder/';
//         this.MNIST_IMAGES_SPRITE_PATH = this.LINK + this.MNIST_IMAGE;
//         this.MNIST_LABELS_PATH = this.LINK + this.MNIST_LABEL;
//         this.SAVE_DIR = './';
//     }

//     async download_file(){
//         let data_fetch = new FetchStream(this.MNIST_IMAGES_SPRITE_PATH).pipe(fs.createWriteStream(this.MNIST_IMAGE));
//         let label_fetch = new FetchStream(this.MNIST_LABELS_PATH).pipe(fs.createWriteStream(this.MNIST_LABEL));
//         return Promise.all([data_fetch, label_fetch]);
//     }

//     loadDataSync(saveSample=-1){
//         var data = fs.readFileSync(this.SAVE_DIR + this.MNIST_IMAGE);
//         var png = PNG.sync.read(data);
//         let images = R.splitEvery(this.IMAGE_SIZE*4)(png.data);
//         return png.data;
//     }

//     async load_data(saveSample=-1){
        

//         return fs.createReadStream(this.SAVE_DIR + this.MNIST_IMAGE)
//                 .pipe(new PNG({
//                     filterType: 4,
//                     IMAGE_SIZE: this.IMAGE_SIZE,
//                     IMAGE_H: this.IMAGE_H,
//                     IMAGE_W: this.IMAGE_W,
//                     SAVE_DIR: this.SAVE_DIR
//                 }))
//                 .on('parsed', function() {
                    
//                     const options = this._parser._options;
//                     const IMAGE_SIZE = options.IMAGE_SIZE,
//                           IMAGE_W = options.IMAGE_W,
//                           IMAGE_H = options.IMAGE_H,
//                           SAVE_DIR = options.SAVE_DIR;
                    
//                     let images = R.splitEvery(IMAGE_SIZE*4)(this.data);
//                     this.images = images;
//                     console.log({option: this._parser._options, len: this.images.length});
//                     if(saveSample){
//                         BufferToImg(images, IMAGE_W, IMAGE_H, SAVE_DIR + 'sample.png');
//                     }
//                 }); 
//     }

//     loadLabelSync(){
//         const labels = new Uint8Array(fs.readFileSync(this.SAVE_DIR + this.MNIST_LABEL));
//         const encodedLabels = R.splitEvery(10)(labels);//onehot encode of 10 digt classes 
//         return labels;
//     }
//     // async load_label(){
//     //     console.log(this.SAVE_DIR + this.MNIST_IMAGE);
//     //     const label = new Uint8Array(await ReadFile(this.SAVE_DIR + this.MNIST_LABEL));
//     //     const encodedLabels = R.splitEvery(10)(labels);//onehot encode of 10 digt classes 
//     //     return encodedLabels;
//     // }

//     // async load(trainRatio=10) {
//     //     const [{images}, encodedLabels] = await Promise.all([this.load_data(), this.load_label()]).map(res=>res);
//     //     return {data, encodedLabels}
//     // }       
// }

// module.exports = {MnistData};

// if(typeof require !== 'undefined' && require.main === module){
//     let mnistData = new MnistData();
//     // mnistData.download_file().then((res)=>{});
//     let data = mnistData.loadDataSync();
//     let labels = mnistData.loadLabelSync();
//     console.log({len: data.length, labels: labels.length});
//     // mnistData.load_data()
//     //     .then(data=>{
//     //         console.log({len: data});
//     //     });
//         // .then(({data, encodedLabels}) => {
//         //     console.log({dataLen: data.length, labelLen: encodedLabels.length})
//         // });
// }
