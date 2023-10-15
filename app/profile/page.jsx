"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <p>
          Welcome, {user.displayName} - you are logged in to the profile page -
          a protected route.
          <App />
        </p>
      ) : (
          <p className="w-full h-screen flex items-center justify-center">Login or Sign Up to see amazing Gifs!!</p>
      )}
       
    </div>
   
  );
};
export default page;
