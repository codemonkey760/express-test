const { get_token_by_value } = require('./database_mock')

const logger_middleware = (req, res, next) => {
    console.log(`Received ${req.method} request from ${req.ip} for ${req.path}`)

    res.on('finish', () => {
        console.log(`Responded with HTTP ${res.statusCode}`)
    })

    next()
}

const validate_token_middleware = (req, res, next) => {
    let token_value = req.authorization || ''
    token_value = token_value.replace('Bearer ', '').trim()
    if (token_value.length === 0) {
        throw new Error('Token not set in authorization header')
    }

    const token_obj = get_token_by_value(token_value)
    validate_token(token_obj)

    req.user_id = token_obj.user_id
    next()
}

module.exports = {
    logger_middleware,
    validate_token_middleware,
}
