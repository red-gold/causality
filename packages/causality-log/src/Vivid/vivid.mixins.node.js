import { default as D3N } from 'vivid.d3-node';
import { default as canvasModule } from 'canvas';
import { default as svg2png } from 'svg2png';
// var open = require("open");
const VividNodeMixins = (BaseVividClass)=> class extends BaseVividClass{
    connect(channel){
        this.currentBar = false;
    }
}
export default VividNodeMixins;