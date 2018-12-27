import fetch from 'cross-fetch';
// const ReadableStream = (responseBody) => {
//     const reader = responseBody.getReader();
//     const rs = new Readable();
//     rs._read = async () => {
//         const result = await reader.read();
//         if(!result.done){
//             rs.push(Buffer.from(result.value));
//         }else{
//             rs.push(null);
//             return;
//         }
//     };
//     return rs;
// };
// async function fetch(url){
//     let response = await ft(url);
//     let body = await response.body;
//     return body;
//     // return ReadableStream(body);
// }
export default fetch;