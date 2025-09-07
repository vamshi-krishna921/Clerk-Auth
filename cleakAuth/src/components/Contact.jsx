import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'

function Contact() {
  return (
    <>
      <SignedIn>
        <h1>Contact Page</h1>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/login" />
      </SignedOut>
    </>
  )
}

export default Contact