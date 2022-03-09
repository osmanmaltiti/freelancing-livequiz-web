const Validate = () => {
    const validateLogin = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required!';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required!';
        }
    
        return errors;
    }
    const validateSignup = (values) => {
        const errors = {};
        if (!values.Firstname) {
            errors.Firstname = 'Required!';
        } else if (values.Firstname.length > 15) {
            errors.Firstname = 'Must be 25 characters or less';
        }
        if (!values.Lastname) {
            errors.Lastname = 'Required!';
        } else if (values.Lastname.length > 15) {
            errors.Lastname = 'Must be 25 characters or less';
        }
        if (!values.Email) {
            errors.Email = 'Required!';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
            errors.Email = 'Invalid email address';
        }
        if (!values.Password) {
            errors.Password = 'Required!';
        }
        if (!values.Confirm) {
            errors.Confirm = 'Passwords do not match!';
        } else if (values.Confirm !== values.Password) {
            errors.Confirm = 'Passwords do not match!';
        }
        
        return errors;
    }
    return { validateLogin, validateSignup }
}
export default Validate;