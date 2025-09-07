export const checkValidData = (email,password,name) => {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValid = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
    const isPasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
   

    if(!isEmailValid){
        return "Please enter a valid email address";
    } else if(!isPasswordValid){
        return "Password must be 8-32 characters long and include at least one letter and one number";
    }
    if (name) { // Only validate name if it exists (i.e., in sign-up mode)
        const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
        if (!isNameValid) {
            return "Please enter a valid name";
        }
    }
    return null;
}