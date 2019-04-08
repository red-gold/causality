import * as d3 from 'd3';
class Vivid{
    constructor(d3){
        this.d3 = d3;
        this.fs = require('fs');
        this.DefaultWidth = 900;
        this.DefaultHeight = 600;
        this.defaultStyle = { svg:  {font: '10px sans-serif' },
                              '.label': {'fill': 'white'},
                              '.axis path, .axis line': { fill: 'none',
                                    'stroke': '#000; shape-rendering: crispEdges' },
                              '.dot' : { 'stroke': '#000' } };
    }

    connect(target){
        console.log(target);
        if(typeof target === 'string' && target.startsWith('#')){
            this.d3n = this.d3.select(target);
        }
        else{
            throw Error(`cannot connect to ${target}`);
        }
    }

    json2css(objectStyle){
        let cssString = Object.entries(objectStyle).reduce((acc1, cur1) => {
                return `${acc1}\n\n${cur1[0]} ` + 
                    Object.keys(cur1[1])
                        .reduce((acc2, cur2) => 
                            `${acc2}\n\t${cur2}: ${cur1[1][cur2]};`, '{') + '\n}';
            }, '');
        if(document){
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = cssString;
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        return cssString;
    }

    async export2png(outputPath, d3n){
        const fs = this.fs;
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
        return;
        let fileName = title.replace(/\s/g,'_') + '.png';
        return await this.export2png(fileName, plot);
    }


    makeSVGnode({width, height}){
        // var options = { styles, canvasModule, d3 };
        // new D3N(options);
        // const plot = this.makeSVGnode();
        // return plot.createSVG(width, height)
        return this.d3n.append('svg').attr('width', width).attr('height', height);
    }

    makeCanvasNode({width, height}){
        return this.d3n.append('canvas').attr('width', width).attr('height', height);
    }



    basePlot({kwdata, width, height, xLabel, yLabel, style}){
        const d3 = this.d3;
        style = style!==undefined?style:{};
        console.log([style, this.defaultStyle]);
        style = Object.assign({}, this.defaultStyle, style);
        let cssStyle = this.json2css(style);
        width  = width | this.DefaultWidth;
        height = height | this.DefaultHeight;
        const plotMargin = {top: 20, right: 20, bottom: 30, left: 40},
              plotWidth  = width - plotMargin.left - plotMargin.right,
              plotHeight = height - plotMargin.top - plotMargin.bottom;
        var styles = '';
        
        var svg = this.makeSVGnode({width, height});
        
        svg = svg.append("g")
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
            .attr("x", plotWidth).attr("y", 0).style('fill','white')
            .style("text-anchor", "end").text(xLabel);
        svg.append("g").attr("class", "y axis").call(yAxis)
            .append("text").attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6).attr("dy", ".91em").style('fill','white')
            .style("text-anchor", "end").text(yLabel);
        
        var legend = svg.selectAll(".legend")
            .data(color.domain()).enter()
            .append("g").attr("class", "legend")
            .attr("transform", (d,i)=>"translate(0," + i * 20 + ")");

        legend.append("rect").attr("x", plotWidth - 18).attr("width", 18)
            .attr("height", 18).style("fill", color);

        legend.append("text").attr("x", plotWidth - 24).attr("y", 9)
            .attr("dy", ".35em").style("text-anchor", "end").text(d=>d);

        return  { svg, xMap, yMap, color };
    }

    scatter({data, title, xRange, yRange, xLabel, yLabel, style, width, height}){
        let kwdata = Array.isArray(data)?
                data.map(d=>[...d,'data']):
                Object.entries(data).reduce((s,[k, data])=>[...s, ...data.map(d=>[...d, k])],[]);
        let { svg, xMap, yMap, color } = 
            this.basePlot({kwdata, title, xRange, yRange, xLabel, yLabel, style, width, height});
        svg.selectAll("circle")
            .data(kwdata)
            .enter().append("circle")
            .attr("cx", ([x,y, name])=>xMap(x))
            .attr("cy", ([x,y, name])=>xMap(y))
            .attr("r", 5)
            .attr("fill", ([x,y,name])=>color(name));
        this.show({title});
    }

    png({data, width, height, title}){
        let canvas = this.makeCanvasNode({width, height});
        console.log({canvas});
        let context = canvas.node().getContext("2d");
        let imagedata = context.createImageData(width, height);
        for (var x=0; x<width; x++) {
            for (var y=0; y<height; y++) {
                var pixelindex = (y * width + x) * 4;
                imagedata.data[pixelindex]   = data[pixelindex];
                imagedata.data[pixelindex+1] = data[pixelindex+1];
                imagedata.data[pixelindex+2] = data[pixelindex+2];
                imagedata.data[pixelindex+3] = data[pixelindex+3];
            }
        }
        context.putImageData(imagedata, 0, 0);
        this.show({title});
    }

    line({data, title, xRange, yRange, xLabel, yLabel, style, width, height}){
        style = style!==undefined?style:{};
        const defaultStyle = {'.line':{ fill: 'none', stroke: 'steelblue', 'stroke-width': '2px'}};
        style = Object.assign({}, defaultStyle, style);
        let kwdata = Array.isArray(data)?
                data.map((d,ith)=>[...(Array.isArray(d))?d:[ith,d],'data']):
                Object.entries(data).reduce((s,[k, data])=>[...s, 
                    ...data.map((d,ith)=>[...(Array.isArray(d))?d:[ith,d], k])],[]);
        let { svg, xMap, yMap, color } = 
            this.basePlot({kwdata, title, xRange, yRange, xLabel, yLabel, style, width, height});
        var line = d3.line()
            .x(function([x,y]) { return xMap(x); }) // set the x values for the line generator
            .y(function([x,y]) { return yMap(y); }) // set the y values for the line generator 
            .curve(d3.curveMonotoneX);
        svg.append("path")
            .datum(kwdata) // 10. Binds data to the line 
            .attr("class", "line") // Assign a class for styling 
            .attr("d", line);
        svg.selectAll("dot")
            .data(kwdata).enter().append("dot")
            .attr("cx", ([x,y, name])=>xMap(x))
            .attr("cy", ([x,y, name])=>xMap(y))
            .attr("r", 5)
            .attr("fill", ([x,y,name])=>color(name));
        this.show({title});
    }
}
export default new Vivid(d3);