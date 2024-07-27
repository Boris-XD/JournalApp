
import { Grid } from '@mui/material'
import React from 'react'

const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="shadow"
        xs={3}
        sx={{
            width: { sm: 450 }, 
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2
        }}
      >
      </Grid>
    </Grid>
  )
}

export default CheckingAuth