
const upper = function (name) {

    let a = name.toUpperCase()
    console.log(`Converted to upper case : ${a}`)

}

const lower = function (name) {

    let b = name.toLowerCase() 
    console.log(`Converted to lower case : ${b}`)

}

const trim=function(text){
    let c = text.trim() 
    console.log(`Converted to trim: ${c}`)

}

module.exports.upper = upper
module.exports.lower = lower
module.exports.trim=trim;