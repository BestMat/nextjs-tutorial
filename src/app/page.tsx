"use client";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Button from "~/_components/Button";
import { useRef, useState } from "react";

export default function App() {
  let email = useRef("")

  return ( 
    <main>
      <SignedOut>
        <SignInButton>
          <Button text="Sign In"/>
        </SignInButton>
        You must sign in to view your users.
      </SignedOut>

      <SignedIn>
        <UserButton />
        <input placeholder="Enter user's email" type="email" ref={email} />
        <input placeholder="Enter user's password" type="password"/>
        <Button text="Sign Up" onClick={() => {
          alert(`${email} ${password}`);
        }}/>

        Data:

      </SignedIn>
    </main>
  );
}