const initialState = [
    {
        name: "Erwin Howell",
        profileName: "Anto",
        email: "ervin@ale.in",
        city: "Paris",
        mobile: "4544446446"
    },
    {
        name: "Erwna sadsda",
        profileName: "Doso",
        email: "ervin@ale.in",
        city: "Paris",
        mobile: "4544446446"
    },
    {
        name: "Era asd",
        profileName: "asdad",
        email: "ervin@ale.in",
        city: "Paris",
        mobile: "4544446446"
    }
]
const createUserReducer = (state= initialState , action) => {
    switch(action.type){
        case 'ADD_USER' :
            return [...state,action.payload];
        default: 
        return state;
    }
}

export default createUserReducer;