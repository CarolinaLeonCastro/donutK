import React from 'react';
import { Box } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import AddressForm from '../component/AddressForm';
import '../App.css'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe('https://donutk-backend-pifrn.ondigitalocean.app/');

function Address() {
  const options = {
    // Fully customizable with appearance API.
    appearance: {
      theme: 'stripe',
      variables: {
       
       
        colorPrimary: '#F687B3',
        colorIconTabSelected: '#ffff',
        spacingGridRow: '16px',
      },
      rules: {
        '.Tab, .Input, .Block, .CheckboxInput, .CodeInput': {
          boxShadow: '0px 3px 10px rgba(18, 42, 66, 0.08)',
        },
        '.Block': {
          borderColor: 'transparent',
        },
        '.BlockDivider': {
          backgroundColor: '#ebebeb',
        },
        '.Tab, .Tab:hover, .Tab:focus': {
          border: '0',
        },
        '.Tab--selected, .Tab--selected:hover': {
          backgroundColor: '#f360a6',
          color: '#fff',
        },
      },
    },
  };

  return (
    <Box maxWidth="600px" mx={{base:"4",md:"auto",xl:"auto"}} mt={{base:"4",md:"8",xl:"12"}} fontFamily={'Gloria Hallelujah'}>
      <Elements stripe={stripePromise} options={options}>
        <AddressForm />
      </Elements>
    </Box>
  );
}

export default Address;
