import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';

export default function AddressForm(props) {
  const {
    formField: {
      merchantName,
      mobileNumber,
      registeredBusinessName,
      email,
      password,
      pan,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Merchant
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={merchantName.name} label={merchantName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={mobileNumber.name} label={mobileNumber.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={registeredBusinessName.name} label={registeredBusinessName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={password.name} label={password.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={pan.name} label={pan.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
