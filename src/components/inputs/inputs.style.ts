import styled from "styled-components/native";

const Colors = {
  corPrimaria: '#F4B4C5',
  corSecundaria: '#D68498',
  corTextoPrimaria: '#333333',
  corBranca: '#FFFFFF'
}


export const InputText = styled.TextInput`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: ${Colors.corBranca};
  border: 1px solid #DDDDDD;
  font-size: 16px;
  color: ${Colors.corTextoPrimaria};
`;

export const NumberInput = styled.TextInput`
  width: 100%;
  padding: 60px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: ${Colors.corBranca};
  border: 1px solid #DDDDDD;
  font-size: 16px;
  color: ${Colors.corTextoPrimaria};
`
export interface Props {
  placeholder?: string;
}

export default Colors