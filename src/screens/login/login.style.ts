import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Colors = {
  corPrimaria: '#F4B4C5',
  corSecundaria: '#D68498',
  corTextoPrimaria: '#333333',
  corBranca: '#FFFFFF'
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.corPrimaria};
  padding: 30px;
`;


export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.corTextoPrimaria};
  margin-bottom: 30px;
  text-align: center;
`;


export const LoginButton = styled(TouchableOpacity)`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: ${Colors.corSecundaria};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.corBranca};
`;

export const Conteudo = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  top: -14%;
  width: 100%;
`
