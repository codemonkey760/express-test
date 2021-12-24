const {
    create_user,
    update_user
} = require('./users')

const configure_server_routes = (app) => {
    app.get('/', (req, res) => {
        const response = {
            "message": "Hello World!"
        }
        res.send(response)
    })

    app.post('/user', (req, res) => {
        create_user(req.body)
    })

    app.patch('/user/:id', (req, res) => {
        update_user(req.params.id, req.body)
    })
}

module.exports = {
    configure_server_routes
}