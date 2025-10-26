'use client';
import { useActionState } from 'react';
import { signup } from '../utils/auth';

const SignupForm = () => {
    const [ state, action, pending ] = useActionState(signup, undefined);

    const handleSignup = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await signup(email.value, password.value);
            alert('Signup successful!');
        } catch (error) {
            alert(`Error during signup: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            {state?.errors?.name && <p style={{ color: 'red' }}>{state.errors.name}</p>}
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            {state?.errors?.email && <p style={{ color: 'red' }}>{state.errors.email}</p>}
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            {state?.errors?.password && (
                <div>
                    <p>Password must: </p>
                    <ul>
                        {state.errors.password.map((err, index) => (
                            <li key={index} style={{ color: 'red' }}>{err}</li>
                        ))}
                    </ul>
                </div>
            )}
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;