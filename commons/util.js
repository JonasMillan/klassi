
const effectiveDate = () => { 
    let today = new Date()
    return today.toISOString()
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
}

module.exports = {
    effectiveDate, asyncForEach
}