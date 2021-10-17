import React, { useState } from 'react';
import Link from 'next/link';

import { auth } from '../../services/firebase';

const AccountPasswordReset = () => {
	const [email, setEmail] = useState("");
	const [resetSent, setResetSent] = useState(false);

	const sendPasswordResetEmail = async (e, email) => {
		e.preventDefault();
		try {
			await auth.sendPasswordResetEmail(email);
			setResetSent(true);
		}
		catch (err) {
			console.log(err);
		}
	};

	if (resetSent) {
		return (
			<div>
				<p>Password reset sent! Check your email.</p>
			</div>
        );
    }

	return (
		<div className="account">
			<form onSubmit={(e) => sendPasswordResetEmail(e, email)}>
				<label htmlFor="email">Email Address</label>
				<input
					type="text"
					id="email"
					className="login__textBox"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<button className="login__btn">Reset Password</button>
			</form>
			<p>
				<Link href={`/account/login`}>
					<a>Log in to your account.</a>
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

export default AccountPasswordReset;