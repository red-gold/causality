import { default as svg2png } from 'svg2png';
async function export2png(outputPath, d3n){
    if (d3n.options.canvas) {
        const canvas = d3n.options.canvas;
        canvas.pngStream().pipe(fs.createWriteStream(outputPath));
    }
    var svgBuffer = Buffer.from(d3n.svgString(), 'utf-8');
    let buffer = await svg2png(svgBuffer);
    return fs.writeFileSync(outputPath, buffer);
};

export default export2png;