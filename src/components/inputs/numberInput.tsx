import React, { useState } from 'react';
import { NumberInput, Props } from './inputs.style';

export default function InputNumber({ placeholder = "R$:", ...rest }: Props) {
  const [value, setValue] = useState('');

  const handleTextChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setValue(numericText);
  };

  return (
    <NumberInput
      placeholder={placeholder}
      value={value}
      onChangeText={handleTextChange}
      keyboardType="numeric"
      inputMode="numeric"
      {...rest}
    />
  );
}
