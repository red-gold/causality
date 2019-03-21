import { default as SVG2PNG } from 'svg2png';
import { default as D3N } from 'vivid.d3-node';
import { default as canvasModule } from 'canvas';
import * as D3 from 'd3';

async function output(outputName, d3n){
    if (d3n.options.canvas) {
        const canvas = d3n.options.canvas;
        console.log('canvas output...', canvas);
        canvas.pngStream().pipe(fs.createWriteStream('./'+outputName+'.png'));
    }
    var svgBuffer = Buffer.from(d3n.svgString(), 'utf-8');
    let buffer = await svg2png(svgBuffer);
    fs.writeFileSync('./'+outputName+'.png', buffer);
    return;
};
var svg2png = SVG2PNG;
var styles = `.bar rect { fill: steelblue; }
              .bar text { fill: #fff; font: 10px sans-serif; }`;
var d3 = D3;
var options = { styles, canvasModule, d3 };
var d3n = new D3N(options);