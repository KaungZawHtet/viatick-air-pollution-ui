import React from 'react'
import { Button } from 'react-bootstrap'
function DeleteAllButton({ onClick }) {
  return (
      <>
      <Button variant="danger" onClick={onClick}>Delete All</Button>
      </>
  )
}

export default DeleteAllButton