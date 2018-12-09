function before_each(){
    const { BufferToImg, ImgToBuffer, PIDExport, R } = require('./index.js');
}
// ImgToBuffer();
// BufferToImg();
// let data = new Float32Array(10*10*4).map((d,i)=>{
//     c = i%4;
//     if(c == 0){return 0;}
//     else if(c == 1){return 0;}
//     else if(c == 2){return 255;}
//     else {return 255;}
// });

// BufferToImg(data, 10, 10, 'sample.png')
//     .then(res=>{
//         // console.log(res);
//     });