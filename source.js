

const contracts = [
    [120, 121, 122, 123, 124, 125, 126],
    [130, 131, 132, 133, 134, 135, 136, 137],
    [140, 141, 142, 143, 144, 145, 146, 147, 148]
]

//const contract = 134
//console.log(contracts);

// const rightAnswer = contracts.forEach((el, i) => {
//     el.forEach( subEl => {
//         if (subEl === contract ){
//             console.log( "the contract is in element " + i )
//         }
//     }
// )})
var contract = 120;
for (var i = 0; i <= contracts.length; i++) {
    var temp = contracts[i]
    for (var j = 0; j <= temp.length; j++) {
    }
    if (contract === temp[j]) {
        if (contracts.indexOf(temp) === 0) {
            console.log("Crest")
        } else if (contracts.indexOf(temp) === 1) {
            console.log("Piazza")
        } else {
            console.log("Private")
        }
    }
}
}




const el = document.getElementById('hit')
//el.innerText = rightAnswer

