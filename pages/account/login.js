import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

import { auth, logout } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const AccountLogin = () => {
    const router = useRouter();
	const [user] = useAuthState(auth);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const signInWithEmailAndPassword = async (e, email, password) => {
		e.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			console.error(err);
			if (err.code === 'auth/user-not-found') {;
				setError('An account with this email address does not exist.');
			}
			if (err.code === 'auth/invalid-email') {;
				setError('Please enter a valid email address.');
			}
			if (err.code === 'auth/wrong-password') {;
				setError('The password you entered is incorrect.');
			}
		}
	};

	useEffect(() => {
		if (user) {
			router.push(`/`);
		}
	}, [user]);

	if (user) {
		return (
			<div>
				<button onClick={logout}>
					Logout
				</button>
			</div>
        );
    }

	return (
		<div className="account">
			<form onSubmit={(e) => signInWithEmailAndPassword(e, email, password)}>
				<input
					type="text"
					className="login__textBox"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className="login__textBox"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button className="login__btn">Log In</button>
				{error && 
					<p className="error">{error}</p>
				}
			</form>
			<p>
				<Link href={`/account/reset`}>
					<a>Forgot your password?</a>
				</Link>
			</p>
			<p>
				<Link href={`/account/register`}>
					<a>Need to create an account?</a>
				</Link>
			</p>
		</div>
	);
}

export default AccountLogin;