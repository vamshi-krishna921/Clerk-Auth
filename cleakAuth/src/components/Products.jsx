import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'

function Products() {
  return (
     <>
      <SignedIn>
        <h1>Products Page</h1>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl={"/login"} />
      </SignedOut>
    </>
  );
}

export default Products