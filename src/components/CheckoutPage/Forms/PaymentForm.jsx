import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField} from '../../FormFields';

export default function PaymentForm(props) {
  const {
    formField: {beneficiaryName, accountNumber, ifsc }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={beneficiaryName.name} label={beneficiaryName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
        </Grid>
        <Grid item xs={12}>
          <InputField name={accountNumber.name} label={accountNumber.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={ifsc.name} label={ifsc.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
