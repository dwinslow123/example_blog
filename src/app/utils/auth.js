export async function signup(state, formData) {
    const validatedForms = {
        name: formData.get('name')?.trim(),
        email: formData.get('email')?.trim(),
        password: formData.get('password')?.trim()
    };

    switch (validatedForms) {
        case !validatedForms.name:
            throw new Error('Name is required');
        case !validatedForms.email:
            throw new Error('Email is required');
        case !validatedForms.password:
            throw new Error('Password is required');
    }
};