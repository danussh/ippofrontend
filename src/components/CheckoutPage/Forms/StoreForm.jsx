import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';

export default function StoreForm(props) {
  const {
    formField: {
      storeName,
      address,
      lat,
      long,
      contactNumber,
      storePhotos,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Store Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={storeName.name} label={storeName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address.name} label={address.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lat.name} label={lat.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={long.name} label={long.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={contactNumber.name} label={contactNumber.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          {/* <InputField name={storePhotos.name} fullWidth  type={storePhotos.type}/> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
