import React, { useState } from 'react';
import { AddressForm } from '../components';
import { AddressType } from '../interfaces/AddressType';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addAddress } from '../redux/addresses/addressActions';
import { Box, Spinner } from '@chakra-ui/react';

const AddAddressPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = (data: AddressType) => {
    setLoading(true);
    dispatch(addAddress(data));
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height='100%'>
        <Spinner size="xl" />
      </Box>
    );
  }

  return <AddressForm onSubmit={onSubmit} />;
};

export default AddAddressPage;