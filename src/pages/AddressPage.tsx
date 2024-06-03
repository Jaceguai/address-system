import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, Input, VStack, Spinner, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddressCard } from '../components';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { fetchAddresses } from '../redux/addresses/addressActions';
import { AppDispatch, RootState } from '../redux/store';


const AddressPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { addresses, status, error } = useSelector((state: RootState) => state.addresses);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  useOutsideClick(wrapperRef, () => setSelectedId(null));

  const handleSelect = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const handleAddAddress = () => {
    navigate("/add");
  };

  const filteredAddresses = addresses.filter(address =>
    address.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    address.mobilePhone.includes(searchTerm)
  );

  return (
    <VStack spacing={4} align="stretch" ref={wrapperRef}>
      <Flex gap={4} mb={4}>
        <Input
          placeholder="Pesquise por Nome ou Telefone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button bgColor="purple.500" _hover={{}} color={'white'} onClick={handleAddAddress} >
          Novo Endereço
        </Button>
      </Flex>
      {status === 'loading' ? (
        <Spinner size="xl" />
      ) : error ? (
        <Text color="red.500">{error}</Text>
      ) : filteredAddresses.length > 0 ? (
        filteredAddresses.map(address => (
          <AddressCard
            key={address.id}
            address={address}
            isSelected={address.id === selectedId}
            onSelect={() => handleSelect(address.id)}
          />
        ))
      ) : (
        <Box>Não há endereços listados. Por favor adicione-o</Box>
      )}
    </VStack>
  );
};

export default AddressPage;
