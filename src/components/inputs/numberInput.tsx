import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { NumberInput, Props } from './inputs.style';

interface Number

export default function InputNumber({ ...rest },{ placeholder = "R$:" }: Props) {
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



