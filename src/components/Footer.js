import React from 'react'
import { Button } from 'react-bootstrap'

export default function Footer() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div class="contact-links">
        <p>Contact me:</p>
        <Button variant='outline-dark' style={{margin: '1px'}} href="mailto:asifulhq13@gmail.com">asifulhq13@gmail.com</Button>
        <Button variant='outline-dark' style={{margin: '1px'}} href="https://www.linkedin.com/in/asiful-hawk/">LinkedIn</Button>
        <Button variant='outline-dark' style={{margin: '1px'}} href="https://github.com/asiful-hawk">github</Button>
        
      </div>
      <br></br>
    </div>
  )
}
