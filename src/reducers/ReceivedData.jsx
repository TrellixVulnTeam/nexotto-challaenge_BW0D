const initialValue = { data: [] };

const ReceivedData = (state = initialValue, action) => {
    // const { email, firstName, lastName } = action.user;
    switch (action.type) {
        case "Received_Data": return {
            ...state, data: [...state.data, { email: action.user.email, firstName: action.user.firstName, lastName: action.user.lastName }]
        };
        default: return state;
    }
}

export default ReceivedData;