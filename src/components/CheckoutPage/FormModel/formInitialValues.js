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
    lat,
    long,
    contactNumber,
    storePhotos,
    beneficiaryName,
    accountNumber,
    ifsc
  }
} = checkoutFormModel;

export default {
  [merchantName.name]: '',
  [mobileNumber.name]: '',
  [registeredBusinessName.name]: '',
  [email.name]: '',
  [password.name]: '',
  [pan.name]: '',
  [storeName.name]: '',
  [address.name]: '',
  [lat.name]: '',
  [long.name]: '',
  [contactNumber.name]: '',
  [storePhotos.name]: '',
  [beneficiaryName.name]: '',
  [accountNumber.name]: '',
  [ifsc.name]: '',
};
