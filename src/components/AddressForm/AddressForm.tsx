
import { Box, Button, Flex, FormControl, FormLabel, Select, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { AddressType } from '../../interfaces/AddressType';
import InputField from '../InputField/InputField';

interface AddressFormProps {
  onSubmit: (data: AddressType) => void;
  initialValues?: Partial<AddressType>;
}

const addressSchema = z.object({
  fullName: z.string().min(4, "O nome completo é obrigatório").max(50, "Não ultrapasse 50 caracteres"),
  mobilePhone: z.string().min(10, "O telefone é obrigatório"),
  addressLine: z.string().min(1, "O endereço é obrigatório"),
  region: z.enum(['NORDESTE', 'SUDESTE']),
  state: z.enum(['SP', 'RJ', 'PB']),
  city: z.string().min(1, "A cidade é obrigatória"),
  zipCode: z.string().min(8, "O CEP é obrigatório").max(9, "CEP inválido, deve conter até 8 dígitos"),
  addressLabel: z.enum(['casa', 'trabalho'])
});

const AddressForm: React.FC<AddressFormProps> = ({ onSubmit, initialValues }) => {
  const formOptions = { resolver: zodResolver(addressSchema), defaultValues: initialValues };
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AddressType>(formOptions);

  return (
    <Box >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Etiqueta do Endereço</FormLabel>
            <Select placeholder="Selecione" {...register('addressLabel')}>
              <option value="casa">Casa</option>
              <option value="trabalho">Trabalho</option>
            </Select>
          </FormControl>

          <Flex w={'100%'} gap={2}>
            <InputField
              label="Nome Completo"
              placeholder="Digite o nome completo"
              {...register('fullName')}
              isInvalid={!!errors.fullName}
              error={errors.fullName?.message}
            />

            <InputField
              label="Telefone Celular"
              placeholder="Digite o telefone celular"
              {...register('mobilePhone')}
              isInvalid={!!errors.mobilePhone}
              error={errors.mobilePhone?.message}
            />
          </Flex>

          <InputField
            label="Endereço"
            placeholder="Digite o endereço"
            {...register('addressLine')}
            isInvalid={!!errors.addressLine}
            error={errors.addressLine?.message}
          />

          <Flex w={'100%'} gap={2}>
            <FormControl isRequired>
              <FormLabel>Região</FormLabel>
              <Select placeholder="Selecione a região" {...register('region')}>
                <option value="NORDESTE">Nordeste</option>
                <option value="SUDESTE">Sudeste</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Estado</FormLabel>
              <Select placeholder="Selecione seu estado" {...register('state')}>
                <option value="PB">Paraíba</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="SP">São Paulo</option>
              </Select>
            </FormControl>
          </Flex>

          <Flex w={'100%'} gap={2}>
            <InputField
              label="Cidade"
              placeholder="Digite a cidade"
              {...register('city')}
              isInvalid={!!errors.city}
              error={errors.city?.message}
            />

            <InputField
              label="CEP"
              placeholder="Digite o CEP"
              {...register('zipCode')}
              isInvalid={!!errors.zipCode}
              error={errors.zipCode?.message}
            />

          </Flex>
          <Flex w={'100%'} justifyContent={'flex-end'} gap={2}>
            <Button mt={6} colorScheme="gray" onClick={() => navigate("/")}>Cancelar</Button>
            <Button mt={6} colorScheme="purple" type="submit">Salvar</Button>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};
export default AddressForm
