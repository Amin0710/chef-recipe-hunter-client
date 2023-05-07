// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (
		email,
		password,
		{ displayName: name, photoURL: photo } = {}
	) => {
		setLoading(true);
		const user = { displayName: name };
		if (photo) {
			user.photoURL = photo;
		}
		return createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				updateProfile(result.user, user);
				logOut();
				return;
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const providerGoogle = new GoogleAuthProvider();
	const handleGoogleLogin = () => {
		signInWithPopup(auth, providerGoogle)
			.then((result) => {
				const logedInUser = result.user;
				setUser(logedInUser);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	const providerGithub = new GithubAuthProvider();
	const handleGithubLogin = () => {
		signInWithPopup(auth, providerGithub)
			.then((result) => {
				const logedInUser = result.user;
				setUser(logedInUser);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	const logOut = () => {
		return signOut(auth);
	};

	// observer user auth state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		// stop observing while unmounting
		return () => {
			return unsubscribe();
		};
	}, []);

	console.log(user);

	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		logOut,
		handleGoogleLogin,
		handleGithubLogin,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;