const formatString = (str: string): string => {
    const indexMore = str.indexOf('+');

    if(indexMore > 0) {
        const text = str.substring(0, indexMore);
        const lc = text.toLowerCase();
        const textReturn = lc.slice(0, -1);
        const spl = textReturn.split(" ");
        return spl.join("-");
    }

    const lc = str.toLowerCase();
    const spl = lc.split(" ");
    return spl.join("-");
}
export default formatString;