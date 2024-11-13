"use client";

import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context.js";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="landing-page" style={{ fontFamily: 'Courier, monospace', color: '#00FF00' }}>
      {!user ? (
        <div className="flex justify-center items-center h-screen">
          <button
            onClick={gitHubSignIn}
            className="p-4 border rounded"
            style={{
              backgroundColor: '#000000',
              color: '#00FF00',
              borderColor: '#00FF00',
              fontFamily: 'Courier, monospace',
            }}
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div className="logged-in-view flex flex-col items-center space-y-4 mt-8">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button
            onClick={firebaseSignOut}
            className="p-4 border rounded"
            style={{
              backgroundColor: '#000000',
              color: '#00FF00',
              borderColor: '#00FF00',
              fontFamily: 'Courier, monospace',
            }}
          >
            Logout
          </button>
          <Link href="/week-9/shopping-list">
            <span
              className="p-4 border rounded"
              style={{
                backgroundColor: '#000000',
                color: '#00FF00',
                borderColor: '#00FF00',
                fontFamily: 'Courier, monospace',
              }}
            >
              Go to Shopping List
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
