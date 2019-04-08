import * as d3 from 'd3';
import fs from 'fs';
import { default as D3N } from 'vivid.d3-node';
import { default as canvasModule } from 'canvas';
import { default as svg2png } from 'svg2png';
var open = require("open");

class Vivid{
    constructor(d3){
        this.d3 = d3;
        this.DefaultWidth = 900;
        this.DefaultHeight = 600;
        this.defaultStyle = { body:  {font: '10px sans-serif' },
                              '.axis path, .axis line': { fill: 'none',
                                    'stroke': '#000; shape-rendering: crispEdges' },
                              '.dot' : { 'stroke': '#000' } };
    }

    connect(){

    }

    json2css(objectStyle){
        return Object.entries(objectStyle).reduce((acc1, cur1) => {
                return `${acc1}\n\n${cur1[0]} ` + 
                    Object.keys(cur1[1])
                        .reduce((acc2, cur2) => 
                            `${acc2}\n\t${cur2}: ${cur1[1][cur2]};`, '{') + '\n}'
            }, '');
    }

    line({data, tilte, style}){

    }

    async export2png(outputPath, d3n){
        if (d3n.options.canvas) {
            const canvas = d3n.options.canvas;
            canvas.pngStream().pipe(fs.createWriteStream(outputPath));
        }
        var svgBuffer = Buffer.from(d3n.svgString(), 'utf-8');
        let buffer = await svg2png(svgBuffer);
        return new Promise((resolve, reject)=>{
            fs.writeFile(outputPath, buffer, (err)=>{
                if(err){ 
                    reject('error export file'); 
                }
                else{
                    resolve(outputPath);
                }
            }); });
    }

    async show({title, plot}){
        let fileName = title.replace(/\s/g,'_') + '.png';
        return await this.export2png(fileName, plot);
    }

    


    basePlot({kwdata, width, height, xLabel, yLabel, style}){
        const d3 = this.d3;
        style = style | {};
        console.log(this.defaultStyle);
        style = Object.assign({}, this.defaultStyle, style);
        let cssStyle = this.json2css(style);
        width  = width | this.DefaultWidth;
        height = height | this.DefaultHeight;
        const plotMargin = {top: 20, right: 20, bottom: 30, left: 40},
              plotWidth  = width - plotMargin.left - plotMargin.right,
              plotHeight = height - plotMargin.top - plotMargin.bottom;
        var styles = '';
        var options = { styles, canvasModule, d3 };
        const plot = new D3N(options);
        var svg = plot.createSVG(width, height).append("g")
                    .attr("transform", 
                          "translate(" + plotMargin.left + "," + plotMargin.top + ")");
        let xDomain = d3.extent(kwdata, ([xPoint, yPoint, name])=>xPoint);
        let yDomain = d3.extent(kwdata, ([xPoint, yPoint, name])=>yPoint);
        
        var xMap = d3.scaleLinear().range([0, plotWidth]);
        var yMap = d3.scaleLinear().range([plotHeight, 0]);
        xMap.domain(xDomain);
        yMap.domain(yDomain);
        
        var xAxis = d3.axisBottom(xMap);
        var yAxis = d3.axisLeft(yMap);
        var color = d3.scaleOrdinal(d3.schemeCategory10);
        kwdata.map(([x,y,name])=>color(name));
        console.log({ xLabel, yLabel });    
        svg.append("g").attr("class", "x axis")
            .attr("transform", "translate(0," + plotHeight + ")").call(xAxis)
            .append("text").attr("class", "label")
            .attr("x", plotWidth).attr("y", 0)
            .style("text-anchor", "end").text(xLabel);
        svg.append("g").attr("class", "y axis").call(yAxis)
            .append("text").attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6).attr("dy", ".71em")
            .style("text-anchor", "end").text(yLabel);
        
        var legend = svg.selectAll(".legend")
            .data(color.domain()).enter()
            .append("g").attr("class", "legend")
            .attr("transform", (d,i)=>"translate(0," + i * 20 + ")");

        legend.append("rect").attr("x", plotWidth - 18).attr("width", 18)
            .attr("height", 18).style("fill", color);

        legend.append("text").attr("x", plotWidth - 24).attr("y", 9)
            .attr("dy", ".35em").style("text-anchor", "end").text(d=>d);

        plot.style = `body {font: 10px sans-serif;}
                    .axis path, .axis line {
                        fill: none; stroke: #000; shape-rendering: crispEdges; }
                    .dot { stroke: #000; }`;
        return  { svg, xMap, yMap, color, plot };
    }

    scatter({data, title, xRange, yRange, xLabel, yLabel, style, width, height}){
        let kwdata = Array.isArray(data)?
                data.map(d=>[...d,'data']):
                Object.entries(data).reduce((s,[k, data])=>[...s, ...data.map(d=>[...d, k])],[]);
        let { svg, xMap, yMap, color, plot } = 
            this.basePlot({kwdata, title, xRange, yRange, xLabel, yLabel, style, width, height});
        svg.selectAll("circle")
            .data(kwdata)
            .enter().append("circle")
            .attr("cx", ([x,y, name])=>xMap(x))
            .attr("cy", ([x,y, name])=>xMap(y))
            .attr("r", 5)
            .attr("fill", ([x,y,name])=>color(name));
        this.show({plot, title});
    }
}
let vivid = new Vivid(d3);
const style = { "body": {"font": "11px"} };
vivid.scatter(
    { data: 
        {
          'X': [[0,0],[1,0],[0,1]],
          'Y': [[-1,-1],[-1,0],[0,-1]],
        }, 
      'xRange': [-2,2],
      'yRange': [-2,2],
      'xLabel': 'x unit',
      'yLabel': 'y unit',
      'title': 'test', 
      style } );

      vivid.scatter(
        { data: 
            {
              'X': [[0,0],[1,0],[0,1]],
              'Y': [[-1,-1],[-1,0],[0,-1]],
            }, 
          'xRange': [-2,2],
          'yRange': [-2,2],
          'xLabel': 'x unit',
          'yLabel': 'y unit',
          'title': 'test2', 
          style } );
export default new Vivid(d3);