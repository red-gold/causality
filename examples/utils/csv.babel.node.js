import { CSVUtils } from 'causal-net.utils';
(async ()=>{
    let data = await CSVUtils.readCSV('../../datasets/credict.csv');
    console.log(data);
})();
