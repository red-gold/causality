if(require('is-node')){
    var R = require('ramda');
    var fs = require('fs-extra');
    var PNG = require('pngjs').PNG;
    var FetchStream = require("fetch").FetchStream;     
}

const BufferToImg = async (buffer, imgW=10, imgH=10, fileName)=>{
    let img = new PNG({ filterType: 4, width: imgW, height: imgH });
    img.data = buffer;
    return img.pack().pipe(fs.createWriteStream(fileName));
}

const PIDExport = ()=>{
    var process = require('process');
    if (process.pid) {
        console.log('This process is your pid ' + process.pid);
        var exec = require('child_process').exec;
            exec(`echo ${process.pid} > process.pid`, function(error, stdout, stderr) {
            console.dir(stdout);
        });
    }
}

const ImgToBuffer = async ()=>{
    fs.createReadStream('1.png')
        .pipe(new PNG({ filterType: 4}))
        .on('parsed', function() {
            for (var y = 0; y < this.height; y++) {
                for (var x = 0; x < this.width; x++) {
                    var idx = (this.width * y + x) << 2;
                    // invert color
                    this.data[idx] = 128;    //255 - this.data[idx];
                    this.data[idx+1] = 128;  //255 - this.data[idx+1];
                    this.data[idx+2] = 128;  //255 - this.data[idx+2];
                    // and reduce opacity
                    this.data[idx+3] = 128; //this.data[idx+3] >> 1;
                }
            }
            console.log({len:this.data.length, width: this.width, height: this.height});
            this.pack().pipe(fs.createWriteStream('out.png'));
        });
}

module.exports = { BufferToImg, ImgToBuffer, PIDExport, R, FetchStream }