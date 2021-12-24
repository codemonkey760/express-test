const configure_server_middleware = (app) => {
    app.use((req, res, next) => {
        console.log(`Received ${req.method} request from ${req.ip} for ${req.path}`)

        res.on('finish', () => {
            console.log(`Responded with HTTP ${res.statusCode}`)
        })

        next()
    })
}

module.exports = {
    configure_server_middleware
}