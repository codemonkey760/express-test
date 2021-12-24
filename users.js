const {
    create_user: create_db_user,
    update_user: update_db_user,
    get_user_by_credentials,
    get_user_by_user_name,
    create_token,
    invalidate_all_user_tokens,
} = require('./database_mock')

const create_user = (payload) => {
    let user_name = validate_user_name(payload.user_name)
    let pass_word = validate_pass_word(payload.pass_word)

    return create_db_user({user_name, pass_word})
}

const update_user = (id, payload) => {
    let user_id = validate_id(id)
    let user_name = validate_user_name(payload.user_name)
    let pass_word = validate_pass_word(payload.pass_word)

    update_db_user(user_id, user_name, pass_word)
}

const login_user = (payload) => {
    let user_name = validate_user_name(payload.user_name)
    let pass_word = validate_pass_word(payload.pass_word)

    let user = get_user_by_credentials(user_name, pass_word)
    if (!user) {
        throw new Error('Invalid credentials')
    }

    return create_token(user.id)
}

const logout_user = (id) => {
    invalidate_all_user_tokens(id)
}

const validate_id = (id) => {
    return id
}

const validate_user_name = (user_name) => {
    return user_name
}

const validate_pass_word = (pass_word) => {
    return pass_word
}

module.exports = {
    create_user,
    update_user,
    login_user,
    logout_user
}
