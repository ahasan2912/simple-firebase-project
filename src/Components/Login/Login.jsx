import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
                setUser(null)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            console.log(error);
            setUser(null)
        })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
    }
    return (
        <div>
           {/*  <button onClick={handleGoogleSignOut}>SignOut with Google</button>
            <button onClick={handleGoogleSignIn}>Login with Google</button> */}

            {
                user ? 
                <>
                <button onClick={handleGoogleSignOut}>SignOut with Google</button>
                </> 
                :
                <>
                 <button onClick={handleGoogleSignIn}>Login with Google</button>
                 <button onClick={handleGithubSignIn}>Login with GitHub</button>
                </>
            }
            {
                user && <div>
                    <h2>User Name: {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;