const processing = (data)=>{
    let bufData = Buffer.from(data);
    return PNG.sync.read(data,{}).data;
}
let pngdata = await stream(processing);

console.log({pnglen: pngdata.length});