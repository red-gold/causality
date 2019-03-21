
# Tutorials

## Stream processing with text8 data

Input raw text8 corpus file and return the occurent number of each tokens in corpus.


```javascript
import * as Preprocessing from 'causal-net.preprocessing';
import * as Log from 'causal-net.log';
import * as Utils from 'causal-net.utils';
import * as Storage from 'causal-net.storage';
import * as fs from 'fs';
var { indexDBStorage } = Storage;
var { stream } = Utils;
var { termLogger } = Log;
var { nlpPreprocessing, tokenizerEN } = Preprocessing;
```




    'use strict'



create stream process
- read chunks from file.
- transform each chunk.
- write transformed chunk into new files.


```javascript
var remainingChars = '', wordFreqCount = {}, lineIndex = 0;
function tranformFn(chunkData, chunkEncoding, afterTransformFn){
    let sampleText = chunkData + remainingChars;
    let sampleLines = sampleText.split('\n');
    let transformedData = [];
    for(let line of sampleLines){
        let tokens = tokenizerEN.tokenize(line);
        wordFreqCount = nlpPreprocessing.wordFreqCount(tokens, wordFreqCount);
        lineIndex += 1;
        transformedData.push({lineIndex, tokens});
    }
    afterTransformFn(null, transformedData);
};
var transformer = stream.makeTransform(tranformFn);

function writeTokens(transformedData, chunkEncoding, afterWriteFn){
    const WriteTokensToFile = async (transformedData)=>{
        for(let {lineIndex, tokens} of transformedData){
//             console.log({lineIndex});
            await indexDBStorage.writeFile(`/corpus/line_${lineIndex}`, JSON.stringify(tokens));
        }
    }
    WriteTokensToFile(transformedData).then(()=>{
        afterWriteFn();
    })
}
var writer = stream.makeWritable(writeTokens);
var characterCount = 0;
(async ()=>{
    var corpusReader = fs.createReadStream('../datasets/text8/text8.txt');
    const CorpusStreamer = stream.makePipeline([corpusReader, transformer, writer], (data)=>{
        characterCount += data.length;
    });
    termLogger.groupBegin('stream performance');
    let result = await CorpusStreamer;
    termLogger.groupEnd()
    termLogger.log({ result, characterCount } );
})();
```

    stream performance: begin at Fri Mar 15 2019 16:42:45 GMT+0700 (Indochina Time)
    stream performance: end after 8514 (ms)
    { result: 'Success', characterCount: 100000000 }



```javascript
termLogger.log({'show 100 items': Object.entries(wordFreqCount).slice(0,100)});
```

    { 'show 100 items':
       [ [ 'anarchism', 303 ],
         [ 'originated', 572 ],
         [ 'as', 131819 ],
         [ 'a', 325895 ],
         [ 'term', 7220 ],
         [ 'of', 593676 ],
         [ 'abuse', 563 ],
         [ 'first', 28809 ],
         [ 'used', 22736 ],
         [ 'against', 8431 ],
         [ 'early', 10172 ],
         [ 'working', 2270 ],
         [ 'class', 3412 ],
         [ 'radicals', 116 ],
         [ 'including', 9630 ],
         [ 'the', 1061363 ],
         [ 'diggers', 25 ],
         [ 'english', 11868 ],
         [ 'revolution', 2029 ],
         [ 'and', 416615 ],
         [ 'sans', 68 ],
         [ 'culottes', 6 ],
         [ 'french', 8736 ],
         [ 'whilst', 481 ],
         [ 'is', 183158 ],
         [ 'still', 7378 ],
         [ 'in', 372203 ],
         [ 'pejorative', 114 ],
         [ 'way', 6432 ],
         [ 'to', 316375 ],
         [ 'describe', 1352 ],
         [ 'any', 11804 ],
         [ 'act', 3502 ],
         [ 'that', 109508 ],
         [ 'violent', 653 ],
         [ 'means', 4165 ],
         [ 'destroy', 466 ],
         [ 'organization', 2374 ],
         [ 'society', 4067 ],
         [ 'it', 73335 ],
         [ 'has', 37865 ],
         [ 'also', 44358 ],
         [ 'been', 25381 ],
         [ 'taken', 3043 ],
         [ 'up', 12446 ],
         [ 'positive', 1254 ],
         [ 'label', 646 ],
         [ 'by', 111829 ],
         [ 'self', 2879 ],
         [ 'defined', 2449 ],
         [ 'anarchists', 203 ],
         [ 'word', 5678 ],
         [ 'derived', 1701 ],
         [ 'from', 72865 ],
         [ 'greek', 4577 ],
         [ 'without', 5660 ],
         [ 'archons', 10 ],
         [ 'ruler', 617 ],
         [ 'chief', 2130 ],
         [ 'king', 7457 ],
         [ 'political', 6967 ],
         [ 'philosophy', 2758 ],
         [ 'belief', 1572 ],
         [ 'rulers', 687 ],
         [ 'are', 76523 ],
         [ 'unnecessary', 146 ],
         [ 'should', 5113 ],
         [ 'be', 61283 ],
         [ 'abolished', 399 ],
         [ 'although', 9286 ],
         [ 'there', 22706 ],
         [ 'differing', 231 ],
         [ 'interpretations', 395 ],
         [ 'what', 8581 ],
         [ 'this', 58827 ],
         [ 'refers', 1570 ],
         [ 'related', 3535 ],
         [ 'social', 4307 ],
         [ 'movements', 1002 ],
         [ 'advocate', 331 ],
         [ 'elimination', 216 ],
         [ 'authoritarian', 185 ],
         [ 'institutions', 1021 ],
         [ 'particularly', 2881 ],
         [ 'state', 12905 ],
         [ 'anarchy', 109 ],
         [ 'most', 25562 ],
         [ 'use', 14011 ],
         [ 'does', 5220 ],
         [ 'not', 44030 ],
         [ 'imply', 257 ],
         [ 'chaos', 331 ],
         [ 'nihilism', 42 ],
         [ 'or', 68948 ],
         [ 'anomie', 7 ],
         [ 'but', 35356 ],
         [ 'rather', 4605 ],
         [ 'harmonious', 28 ],
         [ 'anti', 3103 ],
         [ 'place', 5345 ] ] }


After preprocessing, data is saved into files under `/copus/` folder


```javascript
(async ()=>{
    termLogger.groupBegin('get list of preprocessing files')
    let listFiles = await indexDBStorage.getFileList('/corpus/');
    termLogger.groupEnd()
    termLogger.groupBegin('read one file from indexDB')
    let tokens = await indexDBStorage.readFile(listFiles[0]);
    termLogger.groupEnd()
    termLogger.log([ listFiles.length , JSON.parse(tokens).length]);
})()    
```

    get list of preprocessing files: begin at Fri Mar 15 2019 16:42:56 GMT+0700 (Indochina Time)
    get list of preprocessing files: end after 194 (ms)
    read one file from indexDB: begin at Fri Mar 15 2019 16:42:56 GMT+0700 (Indochina Time)
    read one file from indexDB: end after 0 (ms)
    [ 3228, 1293 ]



```javascript

```
