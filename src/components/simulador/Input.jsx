import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
    />
  )
}