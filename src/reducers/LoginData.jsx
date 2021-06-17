const initialValues = { data: [] }

const LoginData = (state = initialValues, action) => {
    switch (action.type) {
        case "FetchLoginData":
            const { email, psw } = action.payload;
            return { ...state, data: [...state.data, { email, psw }] }
        default: return state;
    }
}
export default LoginData;