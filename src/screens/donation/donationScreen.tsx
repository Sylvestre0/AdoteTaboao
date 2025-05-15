import InputNumber from '@/src/components/inputs/numberInput';
import NumberInput from '@/src/components/inputs/numberInput';
import React from 'react';
import styled from 'styled-components/native';

const Lessbackground = styled.View`
  justify-content: baseline;
  align-items: center;
  background-color: #eeeeee;
  flex: 1;
  padding: 10%;
`
const Div = styled.View`
  background-color: red;
  
`


export default function DonationScreen() {
  return (
    <Lessbackground>
      <Div>
        <InputNumber />
      </Div>
    </Lessbackground>
  );
};
