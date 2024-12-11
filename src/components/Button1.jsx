import React from 'react'
import Button from '@mui/material/Button'

const Button1= ({text}) => {
  return (
    <>
     <Button variant="contained" 
     sx={{
      backgroundColor: "#8CEA28"
     }}
     >
       {text}
     </Button>
    </>
  )
}

export default Button1