const validate_token = (token) => {
    if (!token) {
        throw new Error('No token found')
    }

    if (!token.valid) {
        throw new Error('No valid token found')
    }
}
