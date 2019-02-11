export default function TokenizerEN(text){
    const Re = /[\s."'/\|;:()\[\]\@\#\$\&]/g;
    return text.split(Re);
}