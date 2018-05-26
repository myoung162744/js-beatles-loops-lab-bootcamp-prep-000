function theBeatlesPlay(arraym, arrayi) {
  var empty = []
  for (let i=0; i < arraym.length; i++) {
    empty.push(arraym[i]+' plays '+arrayi[i])
  }
  return empty
}

function johnLennonFacts(array) {
  let i = 0
  while (i < array.length) {
    var newArray = []
    newArray.push(array[i]+'!!!')
    i++
  }
  return newArray
}
