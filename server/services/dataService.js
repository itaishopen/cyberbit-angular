var DATA = require('./ex_data');

function query() {    
    return Promise.resolve(DATA)
}

function updateData(data) {
    DATA = data
    return Promise.resolve(DATA)
}

module.exports = {
    query,
    updateData,
}