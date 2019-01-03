function before_each(){
    let mnistData = new MnistData();
    // mnistData.download_file().then((res)=>{});
    let data = mnistData.loadDataSync();
    let labels = mnistData.loadLabelSync();
    console.log({len: data.length, labels: labels.length});
    // mnistData.load_data()
    //     .then(data=>{
    //         console.log({len: data});
    //     });
        // .then(({data, encodedLabels}) => {
        //     console.log({dataLen: data.length, labelLen: encodedLabels.length})
        // });
}