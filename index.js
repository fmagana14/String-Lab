// console.log('Hello World')

const str = 'hello world'

console.log( str[0] )
console.log ( str.length )
console.log( str.toUpperCase() )

console.log( str.slice(1) )

const first = str[0].toUpperCase()
const rest = str.slice(1)

console.log(first + rest)

function capitalize(str){
    const first = str[0].toUpperCase()
    const rest = str.slice(1)
    return first+rest
}

console.log( capitalize(str) )
console.log( capitalize('foo bar'))