import React, { useState } from "react";
import axios from 'axios';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from "@material-ui/core";
import { Formik, Form } from "formik";

import AddressForm from "./Forms/AddressForm";
import StoreForm from "./Forms/StoreForm";
import PaymentForm from "./Forms/PaymentForm";
import CheckoutSuccess from "./CheckoutSuccess";

import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";

import useStyles from "./styles";

const steps = ["Merchants Details", "Store details", "Payment Datails"];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <StoreForm formField={formField} />;
    case 2:
      return <PaymentForm formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];

  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    // await _sleep(1000);

    // TO GENERATE A UNIQUE VPA USE EMAIL ID
    const generateVpa = values.email;
    const vpa = generateVpa.split('@')[0].concat("@", values.storeName);
    values.vpa = vpa;

    axios
      .post("http://localhost:5000/register", values)
      .then((resp) => {
        console.log(resp);
        if (resp.data.message == 'Email Id is Already Registered') {
          alert('Email Id is Already Registered');
          setActiveStep(activeStep - 2);
          actions.setTouched({});
          actions.setSubmitting(false);
        } else {
          actions.setSubmitting(false);
          setActiveStep(activeStep + 1);
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function _handleSubmit(values, actions) {
    console.log(values);
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        CHECKOUT
      </Typography>
      <Stepper
        activeStep={activeStep}
        className={classes.stepper}
        orientation="vertical"
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Place order" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
