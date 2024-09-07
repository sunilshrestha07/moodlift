"use client";

import axios from 'axios';
import { app } from '../../firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUserForGoogleSignup } from '../../redux/features/userSlice';
import { useRouter } from 'next/navigation';
import googleImage from "@/public/search.png"

export default function Oauth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleGoogleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      const { email, displayName, photoURL } = resultFromGoogle.user;

      const userData = {
        email: email,
        name: displayName,
        avatar: photoURL
      };

      const res = await axios.post("/api/googleSignin", userData);

      if (res.status === 200) {
        router.push("/home");
        dispatch(setUserForGoogleSignup(res.data));
      }
    } catch (error: any) {
      console.error('Error during Google sign-in:', error);
    }
  };

  return (
    <button
      className="px-6 py-2 rounded-full flex gap-3 items-center font-Quicksand border-2 border-gray-300 hover:bg-gray-300 font-medium"
      onClick={handleGoogleClick}>
      <img className="h-4" src={googleImage.src} alt="Google" />
      <p>Sign in with Google</p>
    </button>
  );
}
