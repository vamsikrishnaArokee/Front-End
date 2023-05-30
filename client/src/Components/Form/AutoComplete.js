import React from 'react'
import { Box, Grid, TextField, Typography } from '@material-ui/core'
import { Autocomplete } from '@mui/material'
// import countries from '../../assets/data/countries'

const data = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']


export default function AutoCompleteForm() {
    const [value, setValue] = React.useState(data[0]);
    const [inputValue, setInputValue] = React.useState('three');

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <h1>AutoComplete Form</h1>
        </Grid>
        <Grid item xs={12} md={6}>
            <h1>Combo Box</h1>
            
            <Autocomplete 
                // id="combo-box-demo"
                options={data}
                renderInput={(params) => <TextField {...params} label="Outlined Combo Box" variant="outlined" />}
            />

            <Typography variant="h6">Country Select</Typography>

            {/* <Autocomplete
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                    <Box {...props}>
                        <img 
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""/>
                        {option.label} ({option.code}) +{option.phone}
                    </Box>
                )} */}
                renderInput={(props) => (
                    <TextField
                    {...props}
                    label="Choose a country"
                    variant="outlined"
                    inputProps={{
                        ...props.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    />
                )}
            />

            <Typography variant="h6">States</Typography>
            <Autocomplete
                options={data}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                renderInput={(params) => <TextField {...params} label="GroupBy Continent" variant="outlined" />}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <h1>Free Solo</h1>
            <Autocomplete
                freeSolo
                options={data}
                renderInput={(params) => <TextField {...params} label="Free Solo"/>}
            />

            <Typography variant="h6">Disable Clearable</Typography>
            <Autocomplete
                freeSolo
                disableClearable
                options={data}
                renderInput={(params) => <TextField {...params} label="Disable Clearable"/>}
            />

        </Grid>
        <Grid item xs={12} md={6}>
            <h1>Grouped</h1>
            <Autocomplete
                freeSolo
                options={data}
                groupBy={(option) => option[0].toUpperCase()}
                renderInput={(params) => <TextField {...params} label="GroupBy Continent" variant="outlined" />}
            />
            <Typography variant="h6">Multiple Values</Typography>
            <Autocomplete
                multiple
                options={data}
                groupBy={(option) => option[0].toUpperCase()}
                renderInput={(params) => <TextField {...params} label="GroupBy Continent" variant="outlined" />}
            />
        </Grid>
    </Grid>
  )
}
