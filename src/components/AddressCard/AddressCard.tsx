import {
  Box, Button, Circle, Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text, useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddressType } from '../../interfaces/AddressType';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { deleteAddress } from '../../redux/addresses/addressActions';

interface AddressCardProps {
  address: AddressType;
  isSelected: boolean;
  onSelect: () => void;
}

const AddressCard: React.FC<AddressCardProps> = ({ address, isSelected, onSelect }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = () => {
    navigate(`/edit/${address.id}`);
  };

  const handleDelete = () => {
    onOpen();
    setIsDeleting(true);
  };

  const confirmDelete = () => {
    dispatch(deleteAddress(address.id));
    setIsDeleting(false);
    onClose();
  };

  const cancelDelete = () => {
    setIsDeleting(false);
    onClose();
  };

  const colorLabel = address.addressLabel === 'casa' ? 'blueViolet' : 'orange';

  return (
    <>
      <Box
        borderWidth="1px"
        onClick={onSelect}
        cursor={'pointer'}
        borderRadius="lg"
        minW={'400px'}
        position={'relative'}
        p={4}
        mb={4}
        borderColor={isSelected ? 'purple.500' : 'gray.200'}>
        <Flex align="center" justify="space-between" >
          <Flex flexDir={'column'} gap={1}>
            <Circle size="30px" position={'absolute'} right={'0'} bg={isSelected ? 'purple.500' : 'gray.200'} color="white" mr={3}>
              {isSelected && <Text textAlign="center">✓</Text>}
            </Circle>
            <Box borderRadius={4} bgColor={colorLabel} p={1} w={'fit-content'}>
              <Text fontSize={12}>{address.addressLabel}</Text>
            </Box>
            <Text fontWeight={'bold'} fontSize={20}>{address.fullName}</Text>
            <Text fontWeight={'bold'}>{address.mobilePhone}</Text>
            <Text fontSize={'12'} overflowWrap="break-word" wordBreak="break-word">{address.addressLine}</Text>

            {isSelected && (
              <Flex gap={2}>
                <Button aria-label="Edit address" disabled={!isSelected} colorScheme="gray" onClick={handleEdit} mr={2}>Editar endereço</Button>
                <Button aria-label="Delete address" disabled={!isSelected} colorScheme="red" onClick={handleDelete}>Deletar endereço</Button>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Box>


      <Modal isOpen={isOpen && isDeleting} onClose={cancelDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Deseja realmente deletar esse endereço?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={cancelDelete}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={confirmDelete}>
              Deletar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddressCard;
