// Challenge 1 

const str = 'hello world'

// console.log( str[0] )
// console.log ( str.length )
// console.log( str.toUpperCase() )
// console.log( str.slice(3) )

function capitalize(str) {
    if (str === ""){
        return str
    }
    const first = str[0].toUpperCase()
    const rest = str.slice(1)
    return first+rest
}

// challenge 2
function allCaps(str){
    return str.toUpperCase()
}

// challenge 3

function capitalizeWords(str) {
    const words = str.split(' ')
    const upperWord = words.map( word => capitalize(word) )
    return upperWord.join(' ')
}

// challenge 4
function removeExtraSpaces(str) {
    const trimmed = str.trim()
    const chars = trimmed.split(' ')
    const filtered = chars.filter( (c) => c !== '' )
    return filtered.join(' ')
}
// const sample = '   Hello    world!   '
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
// challenge 5
function kebobCase(str, seporator = '-') {
    //  lowercase
    const lower = str.toLowerCase()
    // split ''
    const words = lower.split(' ')
    // filter
    const filter = words.filter((c) => {
        // returns first letter in word
        return isLetter(c[0])
    }) 
    
    // remove extra spaces
    const spaceFree = removeExtraSpaces(filter.join(' '))
    // split, join, return
    return spaceFree.split(' ').join(seporator)
}

// challenge 6
function snake(str) {
    return kebobCase(str, '_')
}

// challenge 7
function camelCase(str) {
    // split on ' '
    const words = str.split(' ')
    // loop over the words
    const camelWords = words.map((word, i) => {
        // lowercase first word
        if (i === 0) {
            return word.toLowerCase( )
        }
        // uppercase other words
        return capitalize(word)
    })
    // join words on ''
    return camelWords.join('')
}

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords,
    camelCase,
    kebobCase,
    removeExtraSpaces,
    snake
}

// // test functions:
// challenge 1 testing:
// console.log( capitalize(str) )
// console.log( capitalize('foo bar')) 

// challenge 2 testing:
// console.log(allCaps(str))

// challege 3 testing:
// console.log( capitalizeWords(str) )
// console.log( capitalizeWords('foo bar') )
// console.log( capitalizeWords('as i was walking to work') )

// challenge 4 testing:
// console.log(removeExtraSpaces(sample))

// challenge 5/6 testing:
// const testStr = '    hello   world a-weird-word  1, 2, 4 ,5 and 88'
// console.log(snake(testStr))

// challenge 7 testing:
// const testStr = 'Hello world foo bar'

// console.log(camelCase(testStr))


// work on connecting your npm to website 
// complete 8-11 challenges 