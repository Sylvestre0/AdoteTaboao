import { StyledScrollView } from "@/src/components/scrollView/ScrollView.styled";
import styled from "styled-components/native";


export const Imagem = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-left: 10px;
`;
export const Nome = styled.Text`
  padding-left: 10px;
  font-size: 20px;
  margin-left: 10px;
`;
export const Container = styled.View`
  flex: 1;
  background-color: #f0d3db;
  padding-top: 10%;
`;

export const BarraUser = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  background-color: pink;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #dfa6a6;
`;

export const MensagensContainer = styled(StyledScrollView)`
  flex-grow: 1;
`;

export const BalaoEnvia = styled.View`
  background-color: #2ac62a;
  max-width: 80%;
  min-height: 45px;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  margin-top: 8px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  align-self: flex-end;
`;

export const BalaoRecebe = styled.View`
  background-color: #e93452;
  max-width: 80%;
  min-height: 45px;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  margin-top: 8px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const MensagemTexto = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-top-width: 1px;
  border-top-color: #dfa6a6;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  border-radius: 20px;
  background-color: #eee;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 10px;
`;

export const BotaoEnviar = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ec566f;
  justify-content: center;
  align-items: center;
`;

export const TextoBotao = styled.Text`
  font-size: 20px;
  color: white;
`;
