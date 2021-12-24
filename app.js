const {seed_database_with_initial_data} = require('./database_mock')
const {configure_server_routes} = require('./routes')
const {configure_server_middleware} = require('./middleware')

seed_database_with_initial_data()

const express = require('express')
const app = express()
const port = 3000

app.set('etag', false)

configure_server_middleware(app)
configure_server_routes(app)

app.listen(port, () => {
    console.log(`Server live on http://localhost:${port}\n`)
})
