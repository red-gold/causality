import fetch  from 'cross-fetch';
import {default as Stream} from './stream';
import {default as Platform} from './platform';
import fetchStream from 'fetch-readablestream';

/**
 * mixins function for Fetch on node environment
 * @class
 */
export const NodeStreamMixins = (FetchClass)=> class extends FetchClass{ 
    /**
     * stream content from server
     * @mixinsmethod
     * @param { String } url - url for content
     * @returns { Readable } content
     */
    async streamData(url){
        const response = await fetch(url);
        if (response.status >= 400) {
            throw Error("Bad response from server");
        }
        return response.body;
    }
};