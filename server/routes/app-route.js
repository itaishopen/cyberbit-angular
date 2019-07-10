const dataService = require('../services/dataService')
const DATA_URL = '/api/app'


function addAppRoutes(app) {
    // BoardS REST API:

    // UPDATE
    app.put(DATA_URL, (req, res) => {
        const data = req.body;        
        console.log(data);
        dataService.updateData(data)
            .then(data => res.json(data))
    })

    // LIST
    app.get(DATA_URL, (req, res) => {                
        dataService.query().then(data => res.json(data))
    })
}

module.exports = addAppRoutes;