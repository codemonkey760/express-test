const {
    logger_middleware,
    validate_token_middleware,
} = require('./middleware')

const {
    create_user,
    update_user,
    login_user,
    logout_user,
} = require('./users')

const configure_server_routes = (app) => {
    app.use(logger_middleware)

    app.post('/create_user', (req, res) => {
        try {
            create_user(req.body)
            res.status(201).end()
        } catch (err) {
            res.status(400).send({
                "error": err.message
            })
        }
    })

    app.use('/user', validate_token_middleware)

    app.patch('/user', (req, res) => {
        update_user(req.user_id, req.body)
    })

    app.post('/user/logout', (req, res) => {
        logout_user(req.user_id)
    })

    app.post('/login', (req, res) => {
        try {
            const response = {
                'token': login_user(req.body)
            }

            res.json(response)
        } catch (err) {
            res.status(400).json({
                'error': err.message
            })
        }
    })
}

module.exports = {
    configure_server_routes
}
