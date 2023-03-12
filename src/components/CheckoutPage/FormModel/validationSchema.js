import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    merchantName,
    mobileNumber,
    registeredBusinessName,
    email,
    password,
    pan,
    storeName,
    address,
    contactNumber,
    storePhotos,
    ifsc,
    beneficiaryName,
    accountNumber,
  }
} = checkoutFormModel;

const mobileNumberRegex = /^[+]?\d{1,3}[-.\s]?\d{9,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
const panRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;;
// const fileSchema = Yup.mixed()
//   .when('file', {
//     is: (file) => !!file,
//     then: Yup.mixed().test(
//       'fileFormat',
//       `${storePhotos.invalidErrorMsg}`,
//       (value) => value && value.type === 'image/jpeg'
//     ),
//     otherwise: Yup.mixed()
//   });

export default [
  Yup.object().shape({
    [merchantName.name]: Yup.string().required(`${merchantName.requiredErrorMsg}`),
    [email.name]: Yup.string()
      .required(`${email.requiredErrorMsg}`)
      .matches(emailRegex, email.invalidErrorMsg),
    [mobileNumber.name]: Yup.string()
      .required(`${mobileNumber.requiredErrorMsg}`)
      .matches(mobileNumberRegex, mobileNumber.invalidErrorMsg),
    [registeredBusinessName.name]: Yup.string().required(`${registeredBusinessName.requiredErrorMsg}`),
    [password.name]: Yup.string()
      .required(`${password.requiredErrorMsg}`)
      .matches(passwordRegex, password.invalidErrorMsg),
    [pan.name]: Yup.string()
      .required(`${pan.requiredErrorMsg}`)
      .matches(panRegex, pan.invalidErrorMsg),
  }),
  Yup.object().shape({
    [storeName.name]: Yup.string().required(`${storeName.requiredErrorMsg}`),
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
    [contactNumber.name]: Yup.string()
    .required(`${contactNumber.requiredErrorMsg}`)
    .matches(mobileNumberRegex, contactNumber.invalidErrorMsg),
    // [storePhotos.name]: fileSchema
  }),
  Yup.object().shape({
    [ifsc.name]: Yup.string()
      .required(`${ifsc.requiredErrorMsg}`)
      .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, {
        message: `${ifsc.invalidErrorMsg}`,
        excludeEmptyString: true,
      }),
    [accountNumber.name]: Yup.string()
      .required(`${accountNumber.requiredErrorMsg}`)
      .matches(/^\d{9,18}$/, {
        message: `${accountNumber.invalidErrorMsg}`,
        excludeEmptyString: true,
      }),
    [beneficiaryName.name]: Yup.string().required(`${beneficiaryName.requiredErrorMsg}`),
  })
  
];
