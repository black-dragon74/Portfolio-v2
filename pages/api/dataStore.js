// This app has no API
const defHandler = (req, res) => {
    res.statusCode = 403
    res.json({error: 'Forbidden'})
}

// Start custom fuctions that read and pass the data from the JSON files
const fs = require('fs')

function _toFilePath(route) {
    return 'data/' + route[0].toLocaleUpperCase() + route.substring(1) + '.json'
}

// Generic function that reads data for a route and returns a promise
export function readDataFor(route) {
    const filePath = _toFilePath(route)

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err)
                reject(err)

            resolve(JSON.parse(data.toString()))
        })
    })
}


export default defHandler