import React from 'react'

function Emailsubs() {
  return (
    <>
    <h2>Join our Newsletter for latest updates on events, technology etc.</h2>
    {/* <p>Substack publication</p> */}
    <form>
      <input type="email" placeholder="Enter your email address" required />
      <button type="submit">Subscribe</button>
    </form>
    </>
  )
}

export default Emailsubs