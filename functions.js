
//a FUNCTION that accepts two parameters

function letterFinder(word, match) {
    for (var i = 0; i <= word.length; i++) {
        //this loop exists when i is equal to the length of the word
        if (word[i] ==  match) {
            //check if the current character, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        }
            else {
                console.log('---No match found at', i)
            }
    }
}
letterFinder('test', 't');

//console output:
/* Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3
---No match found at 4 */