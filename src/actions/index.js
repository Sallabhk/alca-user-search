export const createUser = (payload) => {
    return {
        type: 'ADD_USER',
        payload: payload
    }
}