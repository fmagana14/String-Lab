// Challenge 1 

const str = 'hello world'

// console.log( str[0] )
// console.log ( str.length )
// console.log( str.toUpperCase() )
// console.log( str.slice(3) )

function capitalize(str){
    const first = str[0].toUpperCase()
    const rest = str.slice(1)
    return first+rest
}

// challenge 2
function allCaps(str){
    return str.toUpperCase()
}

// challenge 3

function capitalizeWords(str){
    const words = str.split(' ')
    const upperWord = words.map( word => capitalize(word) )
    return upperWord.join(' ')
}

// challenge 4
function removeExtraSpaces(str){
    const trimmed = str.trim()
    const chars = trimmed.split(' ')
    const filtered = chars.filter( (c) => c !== '' )
    return filtered.join(' ')
}
// const sample = '   Hello    world!   '

// challenge 5
function kebobCase(str){
    //  lowercase
    const lower = str.toLowerCase()
    // split ''
    const chars = lower.split(' ')
    // filter
    const filter = chars.filter((c) => {
        const code = c.charCodeAt(0)
        if (code > 96 && code < 58) { //keep letter
            return true
        } else if (code > 47 && code < 58) { //keep number
            return true
        } else if (code === 32 || code === 45) { //keep space and hyphen
            return true
        }
        return false
    })
    // remove extra spaces
    const spaceFree = removeExtraSpaces(filter.join(' '))
    // split, join, return
    return spaceFree.split(' ').join('-')
}



// 

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

// challenge 5 testing:
// const testStr = '    hello   world!!! a-weird-word  1, 2, 4 ,5 and 88'
// console.log(kebobCase(testStr))