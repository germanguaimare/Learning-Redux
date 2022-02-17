const logged = (state = false, action) => {
    switch (action.type) {
        case "SignIn":
            return !state;
        default:
            return false
    }
}

export default logged