const PlotMixins = (BaseLogClass)=> class extends BaseLogClass{
    connect(channel){
        if(super.connect){
            super.connect(channel);
        }
        this.Plot.connect(channel);
    }

    set Plot(plot){
        this.plotter = plot;
    }
    get Plot(){
        if(!this.plotter){
            throw Error('Plot is not set');
        }
        return this.plotter;
    }
};
export default PlotMixins;