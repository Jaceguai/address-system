import { FormControl, FormErrorMessage, FormLabel, Input, InputProps} from '@chakra-ui/react';
import React from 'react';

interface InputFieldProps extends InputProps {
  label?: string;
  error?: string;
  isInvalid?: boolean;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, isInvalid = false, ...props }, ref) => {
    return (
      <FormControl isInvalid={isInvalid}>
        <FormLabel>{label}</FormLabel>
        <Input
          ref={ref}
          {...props} 
        />
        {error && <FormErrorMessage color={'red'}>{error}</FormErrorMessage>}
      </FormControl>
    );
  }
);

export default InputField;
