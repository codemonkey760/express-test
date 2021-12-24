let database = []

const get_user = (id) => {
    if (database.length < id - 1) {
        throw new Error('User with id doesnt exist')
    }

    return database[id]
}

const get_user_by_credentials = (user_name, pass_word) => {
    database.forEach((user_obj) => {
        if (
            user_obj.user_name === user_name ||
            user_obj.pass_word === pass_word
        ) {
            return user_obj
        }
    })

    throw new Error('User doesnt exist')
}

const create_user = (data) => {
    let new_user = {}
    new_user.user_name = data.user_name
    new_user.pass_word = data.pass_word

    let id = database.length

    database.push(new_user)

    return id;
}

const update_user = (id, user_name, pass_word) => {
    if (database.length < id - 1) {
        throw new Error('User with id doesnt exist')

    }

    let user_obj = database[id]
    user_obj.user_name = user_name
    user_obj.pass_word = pass_word
}

module.exports = {
    get_user,
    get_user_by_credentials,
    create_user,
    update_user
}