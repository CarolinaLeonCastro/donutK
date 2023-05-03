import React from 'react';
import '../App.css'
import {AddressElement} from '@stripe/react-stripe-js';


const AddressForm = () => {
  return (
    <form>
      <h3>Shipping</h3>
      <AddressElement options={{mode: 'shipping'}} />
    </form>
  );
};

export default AddressForm;