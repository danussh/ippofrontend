export default {
  formId: 'checkoutForm',
  formField: {
    merchantName: {
      name: 'merchantName',
      label: 'Merchant Name*',
      requiredErrorMsg: 'Merchant Name is required'
    },
    mobileNumber: {
      name: 'mobileNumber',
      label: 'Mobile number*',
      requiredErrorMsg: 'Mobile number is required',
      invalidErrorMsg: 'Mobile number is not valid India Mobile Number eg 1234567891'
    },
    registeredBusinessName: {
      name: 'registeredBusinessName',
      label: 'Registered business name*',
      requiredErrorMsg: 'Registered business name is required'
    },
    email: {
      name: 'email',
      label: 'Email*',
      requiredErrorMsg: 'Email is required',
      invalidErrorMsg: 'Email is not valid (e.g. example@mail.com)'
    },
    password: {
      name: 'password',
      label: 'Password*',
      requiredErrorMsg: 'Password is required',
      invalidErrorMsg: 'Should contain more than 8 char with uppercase letters, lowercase letters, and numbers only'
    },
    pan: {
      name: 'pan',
      label: 'PAN*',
      requiredErrorMsg: 'PAN is required',
      invalidErrorMsg: 'PAN is not valid (e.g. AAAAA9999A)'
    },
    storeName: {
      name: 'storeName',
      label: 'Store Name*',
      requiredErrorMsg: 'Store Name is required'
    },
    address: {
      name: 'address',
      label: 'Address*',
      requiredErrorMsg: 'Address is required'
    },
    lat: {
      name: 'lat',
      label: 'Latitude (OPTIONAL)',
    },
    long: {
      name: 'long',
      label: 'Longitude (OPTIONAL)',
    },
    contactNumber: {
      name: 'contactNumber',
      label: 'Contact Number*',
      requiredErrorMsg: 'Contact Number is required'
    },
    storePhotos: {
      name: 'storePhotos',
      label: 'Store Photos (OPTIONAL)',
      type: 'file',
      invalidErrorMsg: 'Place a image/jpeg',
    },
    beneficiaryName: {
      name: 'beneficiaryName',
      label: 'Beneficiary Name*',
      requiredErrorMsg: 'Beneficiary Name is required',
    },
    accountNumber: {
      name: 'accountNumber',
      label: 'Account Number*',
      requiredErrorMsg: 'Account Number is required',
      invalidErrorMsg: 'Account Number (e.g. 123456789)'
    },
    ifsc: {
      name: 'ifsc',
      label: 'IFSC*',
      requiredErrorMsg: 'IFSC is required',
      invalidErrorMsg: 'IFSC is not valid (e.g. HDFC0004000)'
    },
  }
};
