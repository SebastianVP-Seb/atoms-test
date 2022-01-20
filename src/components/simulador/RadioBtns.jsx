import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { purple } from '@mui/material/colors';

function RadioBtns() {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return (
    <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Plazo en meses</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                >
                <FormControlLabel value="female" control={<Radio 
                   {...controlProps('q')}
                    sx={{
                      color: purple[800],
                      '&.Mui-checked': {
                        color: purple[600],
                      },
                    }}
                />} label="12" labelPlacement="bottom"/>
                <FormControlLabel value="male" control={<Radio 
                   {...controlProps('b')}
                    sx={{
                      color: purple[800],
                      '&.Mui-checked': {
                        color: purple[600],
                      },
                    }}
                />} label="24" labelPlacement="bottom"/>
                <FormControlLabel value="other" control={<Radio 
                   {...controlProps('c')}
                    sx={{
                      color: purple[800],
                      '&.Mui-checked': {
                        color: purple[600],
                      },
                    }}
                />} label="36" labelPlacement="bottom"/>
            </RadioGroup>
  </FormControl>
    );
};

export default RadioBtns;
