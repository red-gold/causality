import { default as D3N } from 'vivid.d3-node';
import { default as canvasModule } from 'canvas';
import * as d3 from 'd3';
function genBasePlot(){
    const margin = {top: 20, right: 20, bottom: 30, left: 40, color: 10},
          width  = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;
    var styles = '';
    var options = { styles, canvasModule, d3 };
    const plot = new D3N(options);
    var SVG = plot.createSVG(width + margin.left + margin.right, height + margin.top + margin.bottom)
                    .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var xMap = d3.scaleLinear().range([0, width]);
    var yMap = d3.scaleLinear().range([height, 0]);
    return { SVG, xMap, yMap, plot, margin, width, height };
}

export default genBasePlot;
