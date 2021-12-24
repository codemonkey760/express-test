const { v4: uuidv4 } = require('uuid')

let database = {}
let next_user_id = 0
let next_token_id = 0

const get_user = (id) => {
    return database.users.find(user_obj => user_obj.id === id)
}

const get_user_by_user_name = (user_name) => {
    return database.users.find(user_obj => user_obj.user_name === user_name)
}

const get_user_by_credentials = (user_name, pass_word) => {
    return database.users.find(user_obj => user_obj.user_name === user_name && user_obj.pass_word === pass_word)
}

const create_user = (data) => {
    let user_name = data.user_name
    if (get_user_by_user_name(user_name)) {
        throw new Error('Database constraint violation: user_name must be unique')
    }

    let new_user = {
        user_name,
        pass_word: data.pass_word,
        id: next_user_id++
    }

    database.users.push(new_user)

    return new_user.id
}

const update_user = (id, user_name, pass_word) => {
    let user_obj = get_user(id)
    if (!user_obj) {
        throw new Error('User doesnt exist')
    }

    user_obj.user_name = user_name
    user_obj.pass_word = pass_word
}

const seed_database_with_initial_data = () => {
    database = {
        'users': [
            {
                'id': 0,
                'user_name': 'user1',
                'pass_word': 'pass1',
            },
            {
                'id': 1,
                'user_name': 'user2',
                'pass_word': 'pass2',
            },
        ],
        'tokens': [],
    }

    next_user_id = 2
    next_token_id = 0
}

const get_token_by_value = (token_value) => {
    return database.tokens.find(token_obj => token_obj.value === token_value)
}

const create_token = (id) => {
    if (!get_user(id)) {
        throw new Error('User doesnt exist')
    }

    invalidate_all_user_tokens(id)

    let new_token = {
        'id': next_token_id++,
        'user_id': id,
        'valid': true,
        'token': uuidv4()
    }

    database.tokens.push(new_token)

    return new_token.token
}

const invalidate_all_user_tokens = (id) => {
    database.tokens.forEach((token_obj) => {
        if (token_obj.user_id === id) {
            token_obj.valid = false
        }
    })
}

module.exports = {
    get_user,
    get_user_by_user_name,
    get_user_by_credentials,
    create_user,
    update_user,
    seed_database_with_initial_data,
    get_token_by_value,
    create_token,
    invalidate_all_user_tokens
}
