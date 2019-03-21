import d3 from 'd3';
import { default as D3N } from 'vivid.d3-node';
import { default as canvasModule } from 'canvas';
import { default as svg2png } from 'svg2png';
class Vivid{
    constructor(){
    }
    
    genBasePlot(){
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

    line(data, ...args){

    }

    async export2png(outputPath, d3n){
        if (d3n.options.canvas) {
            const canvas = d3n.options.canvas;
            canvas.pngStream().pipe(fs.createWriteStream(outputPath));
        }
        var svgBuffer = Buffer.from(d3n.svgString(), 'utf-8');
        let buffer = await svg2png(svgBuffer);
        return fs.writeFileSync(outputPath, buffer);
    }

    scatter(data, name, ...args){
        var { SVG, xMap, yMap, plot, margin, width, height } = this.genBasePlot();

        xMap.domain(d3.extent(data, ([d0, d1])=>d0));
        yMap.domain(d3.extent(data, ([d0, d1])=>d1));
        var xAxis = d3.axisBottom(xMap);
        var yAxis = d3.axisLeft(yMap);
        var color = d3.scaleOrdinal(d3.schemeCategory10);
        SVG.append("g").attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")").call(xAxis)
            .append("text").attr("class", "label").attr("x", width)
            .attr("y", 0).style("text-anchor", "end").text("Sepal Width (cm)");
        SVG.append("g").attr("class", "y axis").call(yAxis)
            .append("text").attr("class", "label").attr("transform", "rotate(-90)")
            .attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("Sepal Length (cm)");
        SVG.selectAll(".dot").data(data).enter().append("circle")
            .attr("class", "dot").attr("r", 3.5).attr("cx", (d)=>xMap(d[0]))
            .attr("cy", (d)=>yMap(d[1])).style("fill", (d)=>color(d[2]));
        var legend = SVG.selectAll(".legend").data(color.domain()).enter()
                .append("g").attr("class", "legend")
                .attr("transform", (d,i)=>"translate(0," + i * 20 + ")");

        legend.append("rect").attr("x", width - 18).attr("width", 18)
            .attr("height", 18).style("fill", color);

        legend.append("text").attr("x", width - 24).attr("y", 9)
            .attr("dy", ".35em").style("text-anchor", "end").text(d=>d);

        plot.style = `body {font: 10px sans-serif;}
                    .axis path, .axis line {
                        fill: none; stroke: #000; shape-rendering: crispEdges; }
                    .dot { stroke: #000; }`;
        this.export2png(name, plot);
    }
}

export default new Vivid();