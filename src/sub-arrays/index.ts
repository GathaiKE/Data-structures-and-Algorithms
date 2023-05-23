function arrayChunks<arr>(arr: arr[], chunkSize: number): arr[][] {
    const chunkedArray: arr[][] = [];
    let i = 0;

    while (i < arr.length) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
    i += chunkSize;
    }

    return chunkedArray;
}



console.log(arrayChunks([1,5,6,7,9,5,2],2))
