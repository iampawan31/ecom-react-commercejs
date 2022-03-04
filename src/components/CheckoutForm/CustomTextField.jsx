import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'

const CustomTextField = ({ name, label, required }) => {
  const { control } = useForm()
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => (
          <TextField {...field} label={label} required={required} />
        )}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
      />
    </Grid>
  )
}

export default CustomTextField
