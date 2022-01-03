require('dotenv').config()

const {seed_database_with_initial_data} = require('./database_mock')
const {configure_server_routes} = require('./routes')

seed_database_with_initial_data()

const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.set('etag', false)

configure_server_routes(app)

app.listen(port, () => {
    console.log(`Server live on http://localhost:${port}\n`)
})
