# tutorials

## 20 group text classification

```javascript
import * as Utils from 'causal-net.utils';
import * as Log from 'causal-net.log';
import * as Preprocessing from 'causal-net.preprocessing';
import { causalNetCore } from 'causal-net.core';
import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from "causal-net.models";
import * as Sampling from 'causal-net.sampling';
import * as Representation from 'causal-net.representation';
import * as fs from 'fs';

var R = causalNetCore.CoreFunction;
var T = causalNetCore.CoreTensor;
var { Loss } = causalNetModels.skipGram();
var { Stream } = Utils;
var { termLogger } = Log;
// var { indexDBStorage } = Storage;
var { nlpPreprocessing } = Preprocessing;
var { causalNetSampling } = Sampling; 
var { CSV, Fetch } = Utils;
var { SentenceEncode, causalNetWordVec } = Representation;
var optimizers = causalNetSGDOptimizer;
```




    'use strict'




```javascript

```


```javascript
var inputData = JSON.parse(fs.readFileSync('./sentenceEmbedd.json'));
inputData.length;
```




    11314




```javascript
var data;
(async ()=>{
    data = await new Promise((resolve, reject)=>{
        let csv = CSV();
        let samples = [], labels = [];
        csv.on('end', ()=>resolve({samples, labels}));
        csv.on('data',(row)=>{
            //console.log(row);
            samples.push(row.sample);
            labels.push(row.label);
        });
        fs.createReadStream('../datasets/20newsgroups/dataset.csv').pipe(csv);
    });
// console.log([data.samples.length, data.labels.length]);
})();
```


```javascript
// var label2int = R.compose(R.fromPairs, R.addIndex(R.map)((label, idx)=>[label, idx]), R.uniq)(data.labels);
// var int2label = R.compose(R.fromPairs, R.addIndex(R.map)((label, idx)=>[idx, label]), R.uniq)(data.labels);
// var labels = data.labels.map(l=>label2int[l]);
// var preprocessingData = inputData.map((d,i)=>[Array.from(d),labels[i]]);
```




    'use strict'




```javascript
import TSNE from 'tsne-js';
 
var model = new TSNE({
  dim: 2,
  perplexity: 30.0,
  earlyExaggeration: 4.0,
  learningRate: 100.0,
  nIter: 1000,
  metric: 'euclidean'
});
model.on('progressStatus', (d)=>{
    console.log(d);
});
```




    TSNE {
      _events: [Object: null prototype] { progressStatus: [Function] },
      _eventsCount: 1,
      _maxListeners: undefined,
      dim: 2,
      perplexity: 30,
      earlyExaggeration: 4,
      learningRate: 100,
      nIter: 1000,
      metric: 'euclidean',
      barneshut: false,
      inputData: null,
      outputEmbedding: null }




```javascript
// inputData is a nested array which can be converted into an ndarray
// alternatively, it can be an array of coordinates (second argument should be specified as 'sparse')
model.init({
  data: inputData,
  type: 'dense'
});
```


```javascript
// `error`,  `iter`: final error and iteration number
// note: computation-heavy action happens here
var [error, iter] = model.run();
console.log({error, iter}); 
```

    Calculating pairwise distances
    Calculating joint probabilities
    Early exaggeration with momentum 0.5
    Early exaggeration with momentum 0.8
    Final optimization with momentum 0.8
    Optimization end
    { error: 5.613068619616683, iter: 102 }



```javascript
// // rerun without re-calculating pairwise distances, etc.
// var [error, iter] = model.rerun();
// console.log({error, iter}); 
// // `output` is unpacked ndarray (regular nested javascript array)
// var output = model.getOutput();
// console.log({output}); 
// `outputScaled` is `output` scaled to a range of [-1, 1]
var outputScaled = model.getOutputScaled();
console.log({outputScaled});
```

    { outputScaled:
       [ [ 0.25597409654565, -0.04056887670985123 ],
         [ -0.05170156736476558, 0.021286714931931697 ],
         [ 0.04074567747699668, 0.0017369462049392926 ],
         [ 0.03883620736981353, -0.012300239449875629 ],
         [ -0.10315145459907042, 0.04521744831830672 ],
         [ 0.02091048832052565, -0.0214023737118922 ],
         [ 0.06722319221594364, -0.0039790907828985 ],
         [ 0.001535915598196999, -0.006288594860118439 ],
         [ 0.10769397074769917, -0.02260179076712454 ],
         [ -0.0015684676864494585, 0.01460974179179793 ],
         [ 0.12249858965836893, -0.008939513834409697 ],
         [ -0.6055676018267737, 0.12346136715526167 ],
         [ 0.05813495499312825, -0.01888958558272283 ],
         [ -0.04240332709795782, -0.033010083531536706 ],
         [ 0.5159978098090463, -0.024533688544269357 ],
         [ -0.14790985156646058, 0.12864818351547014 ],
         [ -0.00284655309039005, 0.018886547708904158 ],
         [ 0.14037592111509473, -0.005898270524707901 ],
         [ 0.029533009010782704, -0.011481209385160476 ],
         [ 0.06975736119775984, -0.05371158895682202 ],
         [ -0.012247717971564279, 0.025332525491600408 ],
         [ -0.046782933607989706, 0.05507967892340332 ],
         [ -0.006955227858382081, -0.03819094509247293 ],
         [ 0.06765917430671352, -0.025345658220933074 ],
         [ 0.03263924847697616, -0.024756857670810997 ],
         [ 0.025653359311746195, -0.005120216550779994 ],
         [ 0.2419314053256673, 0.012484099189211636 ],
         [ -0.06039460344210632, -0.04829599110847267 ],
         [ -0.06554336755802087, 0.08415510433792601 ],
         [ 0.15447335365433867, -0.023033841963548143 ],
         [ 0.12054420930551797, 0.025852423363386643 ],
         [ 0.09529625375089239, -0.16897936317770093 ],
         [ -0.03393714029864129, 0.04334786960442644 ],
         [ -0.028145567085859535, -0.004568508986951968 ],
         [ 0.01670141687623701, 0.006889712780897869 ],
         [ -0.060400940632236895, -0.08624966361505676 ],
         [ 0.10747741643482477, 0.022537088955939564 ],
         [ -0.0440455419609855, 0.0455486886349406 ],
         [ 0.048803551469310875, 0.01759717362017453 ],
         [ 0.06376810664660332, -0.11989391891430619 ],
         [ -0.0057689917961415045, -0.0031217161155964895 ],
         [ 0.07899523141615312, -0.04225317260842497 ],
         [ 0.03510791860541798, -0.027204605147884888 ],
         [ -0.02919417026795631, -0.022234957396533174 ],
         [ -0.014617611118632714, 0.015974902307950033 ],
         [ 0.009946937016808577, -0.004819077807939773 ],
         [ 0.05011284867239233, -0.033691732285359766 ],
         [ 0.04723638551887035, 0.2588711989857712 ],
         [ 0.015322929522779883, 0.010359042249698266 ],
         [ -0.12571033373465212, -0.012388733100725515 ],
         [ 0.08812757663133268, -0.08598845982198404 ],
         [ -0.1117235417133218, 0.1690972055829215 ],
         [ -0.032745254257943564, -0.012885517458701801 ],
         [ 0.0029572635489651736, 0.027337211587787638 ],
         [ -0.43273890009558535, 0.32807266249855116 ],
         [ 0.034168586851176345, -0.02878728818786044 ],
         [ 0.09045227347955256, -0.003761785249054457 ],
         [ -0.04262523461641266, 0.014235870586583798 ],
         [ 0.09506492735551997, -0.07240671641798384 ],
         [ -0.061873903971359785, 0.029164883505350653 ],
         [ 0.04371615755967062, 0.012213968994476736 ],
         [ 0.07052911234174847, -0.03985262299300251 ],
         [ 0.04480653402241442, -0.047762397435447156 ],
         [ -0.12028362174517847, 0.15567364590514537 ],
         [ 0.12885740726108494, 0.00011907007299345926 ],
         [ -0.08541297046258912, 0.027038243497269934 ],
         [ 0.011199045104091327, -0.018710595362020955 ],
         [ 0.017320478111609063, 0.02893383857448864 ],
         [ -0.14354021862794902, -0.043562322150523955 ],
         [ 0.030047376610601657, -0.00308735639121654 ],
         [ -0.36445081186970263, 0.26133470671929926 ],
         [ 0.00902021048861813, -0.0002754020655625276 ],
         [ 0.004728658840979054, -0.020640869978890204 ],
         [ 0.04492872637769877, -0.013987998839039225 ],
         [ -0.014361577476729859, -0.01342937093522633 ],
         [ 0.04501928330248799, -0.00830401837452465 ],
         [ 0.05864333808234354, -0.04727508803648257 ],
         [ 0.23354285439817243, -0.031247238116538508 ],
         [ 0.12991678931564715, -0.1071939379381627 ],
         [ 0.08015114630022666, -0.07218406091230674 ],
         [ -0.13977443654458419, 0.0013962476185253618 ],
         [ -0.013573153261346926, 0.045716395615864054 ],
         [ 0.02928627979809106, -0.02729529831670543 ],
         [ 0.03726521711103131, -0.030975184569835598 ],
         [ 0.04270275473758316, -0.0163072612319185 ],
         [ 0.03379305713231673, 0.005737178298533418 ],
         [ 0.07009761090497457, -0.04803318237596629 ],
         [ 0.05810524997429666, 0.0029375932063160667 ],
         [ -0.007469260443243225, -0.0016413359194835252 ],
         [ 0.0351287160651376, -0.0010800288261569254 ],
         [ 0.011862434316828622, -0.019188948630549044 ],
         [ -0.43965585316843536, 0.34404349393760186 ],
         [ 0.01967668941594196, 0.02548298933211898 ],
         [ 0.050736753171222684, -0.159996945027342 ],
         [ 0.040243178537275145, 0.011780557423540968 ],
         [ 0.09387458065714721, 0.02860646056292929 ],
         [ -0.07242629043295473, -0.2712106324229208 ],
         [ 0.039263562772154315, 0.01587276108656283 ],
         [ -0.11094968779201647, 0.14137936834304535 ],
         [ 0.0373939232579398, -0.008504616596718952 ],
         ... 11214 more items ] }



```javascript
fs.writeFileSync('./outputScaled.json',JSON.stringify(outputScaled))
```


```javascript
var data = outputScaled.map((v,i)=>[...v, data.labels[i]]);
// var data = [[1,1,'A1'],
//             [1,2,'b'],
//             [3,1,'b'],
//             [4,4,'b'],
//             [1,5,'1'],
//             [4,0,'b'],
//             [1,1,'c'],]
```


    evalmachine.<anonymous>:3

    var data = outputScaled.map((v, i) => [...v, data.labels[i]]); // var data = [[1,1,'A1'],

                                                            ^

    

    TypeError: Cannot read property '0' of undefined

        at outputScaled.map (evalmachine.<anonymous>:3:57)

        at Array.map (<anonymous>)

        at evalmachine.<anonymous>:3:25

        at Script.runInThisContext (vm.js:122:20)

        at Object.runInThisContext (vm.js:319:38)

        at run ([eval]:1054:15)

        at onRunRequest ([eval]:888:18)

        at onMessage ([eval]:848:13)

        at process.emit (events.js:182:13)

        at emit (internal/child_process.js:828:12)



```javascript
data[0]
```




    [ 0.25597409654565, -0.04056887670985123, 'rec.autos' ]




```javascript
import { default as genBasePlot } from './plot.base';
import { default as export2png } from './plot.export2png';
import * as d3 from 'd3';
var { SVG, xMap, yMap, plot, margin, width, height } = genBasePlot();

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
export2png('./test.png', plot);
```

<img src="./test.png?123152322221">


```javascript
var data = d3.range(1000).map(d3.randomBates(10));
data = data.map(d=>d+1);
var formatCount = d3.format(",.0f");
var margin = {top: 10, right: 30, bottom: 30, left: 30},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
var x = d3.scaleLinear().rangeRound([0, width]);
    
var bins = d3.histogram().domain(x.domain()).thresholds(x.ticks(20))(data);
var y = d3.scaleLinear()
            .domain([0, d3.max(bins, function(d) { return d.length; })])
            .range([height, 0]);

var svgWidth = width + margin.left + margin.right
var svgHeight = height + margin.top + margin.bottom
    
var svg = d3n.createSVG(svgWidth, svgHeight).append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var bar = svg.selectAll(".bar").data(bins).enter().append("g").attr("class", "bar")
          .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });

bar.append("rect")
      .attr("x", 1)
      .attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
      .attr("height", function(d) { return height - y(d.length); });

bar.append("text")
      .attr("dy", ".75em")
      .attr("y", 6)
      .attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
      .attr("text-anchor", "middle")
      .text(function(d) { return formatCount(d.length); });

svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    
output('../pie-canvas2', d3n).catch( err => console.error({err}) );
```

<img src="../pie-canvas2.png">

<img src="../datasets/MNIST_dataset/data-chunk-90.png?1213">


```javascript

```


```javascript

```


```javascript

```


```javascript
var model;
(async ()=>{
    model = await SentenceEncode.load();
})();
```


```javascript
// // Load the model.
// var fetch = Fetch.fetch;
// var sentenceEmbed = [];
// (async ()=>{
//     let counter = 0;
//     for(let doc of data.samples){
//         console.log(counter);
//         counter += 1;
//         let docTensor = await model.embed([doc]);
//         let docVec = await docTensor.data();
//         sentenceEmbed.push(docVec);
//         docTensor.dispose();
//     }
// })();
```


```javascript
var uniqlabels = R.uniq(labels)
var targets = labels.map(l=>Array.from(T.oneHot(l, 20).dataSync()))
```




    'use strict'




```javascript
var preprocessingData = inputData.map((o,i)=>[o, targets[i]])
```




    'use strict'




```javascript
var [trainSet, testSet] = R.splitAt(10314, preprocessingData)
console.log([trainSet.length, testSet.length])
```

    [ 10314, 1000 ]



```javascript
trainSet[0]
```




    [ [ 0.028369115665555,
        0.03054637648165226,
        0.06017296761274338,
        -0.007304872386157513,
        -0.0015674697933718562,
        0.09297604858875275,
        0.05786536633968353,
        -0.038533542305231094,
        0.07912255078554153,
        0.056372079998254776,
        0.07710565626621246,
        0.014738659374415874,
        0.019380733370780945,
        0.09697484970092773,
        -0.059149663895368576,
        -0.025681007653474808,
        -0.05750536546111107,
        -0.005214315373450518,
        -0.010037926025688648,
        0.057757627218961716,
        -0.057805612683296204,
        -0.06593387573957443,
        -0.081797294318676,
        -0.005358944647014141,
        0.03587067499756813,
        0.0014632497914135456,
        0.02528754435479641,
        -0.00278215273283422,
        -0.020434193313121796,
        -0.049661602824926376,
        0.006134781055152416,
        0.043485455214977264,
        0.03838784620165825,
        -0.02073526382446289,
        0.020247383043169975,
        0.07384887337684631,
        -0.037138067185878754,
        0.03690420463681221,
        -0.050723373889923096,
        -0.050797734409570694,
        0.0015602940693497658,
        0.046804625540971756,
        0.05454980209469795,
        -0.03543425351381302,
        0.028633655980229378,
        -0.05346887558698654,
        -0.04965372383594513,
        0.06031772494316101,
        0.0737055316567421,
        0.016644848510622978,
        0.08203831315040588,
        -0.01976901851594448,
        0.03712771087884903,
        0.061946384608745575,
        -0.04523196071386337,
        -0.028321515768766403,
        -0.04916958138346672,
        -0.018836548551917076,
        0.034534696489572525,
        0.026445839554071426,
        -0.029168272390961647,
        0.012795638293027878,
        0.0008518447866663337,
        -0.0924178808927536,
        0.02323104254901409,
        -0.025104131549596786,
        0.016473859548568726,
        0.08533633500337601,
        0.030979739502072334,
        -0.0744154080748558,
        0.03988564759492874,
        -0.0031794169917702675,
        0.09296718239784241,
        0.05305866152048111,
        -0.06840189546346664,
        -0.023293619975447655,
        -0.030606422573328018,
        -0.025154495611786842,
        -0.047753073275089264,
        0.04643906652927399,
        0.03122655674815178,
        0.017441455274820328,
        -0.056281860917806625,
        0.01134059764444828,
        0.05547363683581352,
        0.060862138867378235,
        -0.022165149450302124,
        0.06792747974395752,
        0.006446392275393009,
        -0.030939623713493347,
        -0.017857827246189117,
        0.009282884187996387,
        0.04081505537033081,
        0.028124496340751648,
        -0.018390782177448273,
        -0.03926783427596092,
        -0.044329237192869186,
        -0.0020572335924953222,
        -0.055307794362306595,
        -0.061544932425022125,
        ... 412 more items ],
      [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]




```javascript
// import CausalNet from 'causal-net';
```




    'use strict'




```javascript
var _NetConfig = {
    HyperParameters: {SampleSize:400},
    Classes: 2,
    Pipeline:[
        {   Name:'dense', Type: 'Tensor', 
            Parameters: { Weight: [512, 2], Bias: [2]  },
            Flow: [ { Op: 'dot', Parameter: 'Weight', Args: [] },
                    { Op: 'add', Parameter: 'Bias',  Args: [] } ] 
        },
        {   Name:'PipeOutput', Type: 'Tensor', 
            Flow: [ { Op: 'reshape', Args: [['$SampleSize', -1]] } ] 
        } 
    ] };
var parameters = {};
var causalNet = new cau(_NetConfig, parameters);
```


    evalmachine.<anonymous>:34

    var causalNet = new SimpleNet(_NetConfig, parameters);

                    ^

    

    ReferenceError: SimpleNet is not defined

        at evalmachine.<anonymous>:34:17

        at Script.runInThisContext (vm.js:122:20)

        at Object.runInThisContext (vm.js:319:38)

        at run ([eval]:1054:15)

        at onRunRequest ([eval]:888:18)

        at onMessage ([eval]:848:13)

        at process.emit (events.js:182:13)

        at emit (internal/child_process.js:828:12)

        at process.internalTickCallback (internal/process/next_tick.js:72:19)



```javascript
(async ()=>{
    const DoBatchTrainSampleGenerator = (epochIdx)=>([{idx:0, batchSize:400, data: [inputs, targets]}]);
    let logTrain = await causalNet.train(DoBatchTrainSampleGenerator, 20);
    termLogger.log(logTrain);
    const DoBatchTestSampleGenerator = ()=>([{idx:0, batchSize:4, data: [inputs, targets]}]);
    let testResult = await causalNet.test(DoBatchTestSampleGenerator);
    termLogger.log({testResult});
    await causalNet.saveParams('save_model.model');
    await causalNet.loadParams('save_model.model');
    testResult = await causalNet.test(DoBatchTestSampleGenerator);
    termLogger.log({testResult});
    testResult = await causalNet.ensembleTest(DoBatchTestSampleGenerator, ['save_model.model']);
    termLogger.log({testResult});
    testResult = await causalNet.ensembleTest(DoBatchTestSampleGenerator, ['save_model.model']);
    termLogger.log({testResult});
})().catch(err=>{
    console.error({err});
});
```


```javascript
(async ()=>{
    const DoBatchTrainSampleGenerator = (epochIdx)=>([{idx:0, batchSize:4, data: [inputs, targets]}]);
    let logTrain = await causalNet.train(DoBatchTrainSampleGenerator, 20);
    termLogger.log(logTrain);
    const DoBatchTestSampleGenerator = ()=>([{idx:0, batchSize:4, data: [inputs, targets]}]);
    let testResult = await causalNet.test(DoBatchTestSampleGenerator);
    termLogger.log({testResult});
    await causalNet.saveParams('save_model.model');
    await causalNet.loadParams('save_model.model');
    testResult = await causalNet.test(DoBatchTestSampleGenerator);
    termLogger.log({testResult});
    testResult = await causalNet.ensembleTest(DoBatchTestSampleGenerator, ['save_model.model']);
    termLogger.log({testResult});
    testResult = await causalNet.ensembleTest(DoBatchTestSampleGenerator, ['save_model.model']);
    termLogger.log({testResult});
})().catch(err=>{
    console.error({err});
});
```
