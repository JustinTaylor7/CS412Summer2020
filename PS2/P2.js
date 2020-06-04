//emits each word of the input sentence in turn
function* sentenceToWord (sentence) {
    let wordArr = sentence.split(' ');
    let i;
    for (i = 0; i < wordArr.length; i++) {
        yield wordArr[i]
    }
}

//printing out the words, one per line, of `All I know is something like a bird within her sang`
let words = sentenceToWord(`All I know is something like a bird within her sang`);
count = 11;
while (count --> 0) {
     console.log(`${words.next().value}`)}