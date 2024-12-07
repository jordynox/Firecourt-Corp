"use client";

import { Button } from "@/components/ui/button"
import { FaGoogle, FaFacebook } from 'react-icons/fa'

export function SocialAuth() {
  const handleGoogleSignIn = async () => {
    try {
      const clientId = process.env.GOOGLE_CLIENT_ID;
      const redirectUri = encodeURIComponent(`${window.location.origin}/api/auth/callback/google`);
      const scope = encodeURIComponent('email profile');
      
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;
      
      window.location.href = googleAuthUrl;
    } catch (error) {
      console.error("Google sign in error:", error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const clientId = process.env.FACEBOOK_CLIENT_ID;
      const redirectUri = encodeURIComponent(`${window.location.origin}/api/auth/callback/facebook`);
      
      const facebookAuthUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=email,public_profile`;
      
      window.location.href = facebookAuthUrl;
    } catch (error) {
      console.error("Facebook sign in error:", error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <Button
        variant="outline"
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-2"
      >
        <FaGoogle className="w-5 h-5" />
        Google
      </Button>
      <Button
        variant="outline"
        onClick={handleFacebookSignIn}
        className="w-full flex items-center justify-center gap-2"
      >
        <FaFacebook className="w-5 h-5" />
        Facebook
      </Button>
    </div>
  )
}

