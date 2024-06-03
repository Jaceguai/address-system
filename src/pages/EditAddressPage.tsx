import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Box, Text } from '@chakra-ui/react';
import { AddressForm } from '../components';
import { AddressType } from '../interfaces/AddressType';
import { AppDispatch, RootState } from '../redux/store';
import { fetchAddressById, fetchAddresses, updateAddress } from '../redux/addresses/addressActions';

const EditAddressPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const address = useSelector((state: RootState) => state.addresses.addresses.find(a => a.id.toString() === id));
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchAddressById(Number(id)));
    }
  }, [dispatch, id]);

  const onSubmit = (data: AddressType) => {
    if (address && address.id) {
      setLoading(true);
      const updatedData = { ...data, id: address.id };

      dispatch(updateAddress(updatedData))
        .then(() => {
          dispatch(fetchAddresses());
          setTimeout(() => {
            setLoading(false);
            navigate("/");
          }, 2000);
        });
    } else {
      console.error("Error: Address ID is undefined");
    }
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height='100%'>
        <Spinner size="xl" />
      </Box>
    );
  }

  return address ? (
    <>
      <Text fontSize='medium'  textAlign="center">
        Editando o endereço de (a) {address.fullName}
      </Text>
      <AddressForm onSubmit={onSubmit} initialValues={address} />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default EditAddressPage;
