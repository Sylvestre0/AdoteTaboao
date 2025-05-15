import InputNumber from '@/src/components/inputs/numberInput';
import React from 'react';
import styled from 'styled-components/native';
import { Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '@/src/components/inputs/inputs.style'; 

const Lessbackground = styled.View`
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.corPrimaria};
  flex: 1;
  padding: 5%;
`;

const ImageContainer = styled.View`
  width: 80%;
  aspect-ratio: 1;
  margin-bottom: 20px;
  background-color: #794e4e; 
  border-radius: 8px;
  overflow: hidden;
  margin-top: 10%;
`;

const DonationInputContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

const ButtonsContainer = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled(TouchableOpacity)`
  background-color: ${Colors.corSecundaria};
  padding: 15px 20px;
  border-radius: 8px;
  flex: 1;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${Colors.corBranca};
  font-size: 16px;
  font-weight: bold;
`;

export default function DonationScreen() {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePayment = () => {
    // Lógica de pagamento aqui
    console.log('Realizar Pagamento');
  };

  return (
    <Lessbackground>
      <ImageContainer>
        {/* Coloque sua imagem aqui */}
        <Image
          source={require('@/src/assets/images/ACEITE.png')} // Substitua pelo caminho da sua imagem
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
        />
      </ImageContainer>

      <DonationInputContainer>
        <InputNumber placeholder="R$:" />
      </DonationInputContainer>

      <ButtonsContainer>
        <Button backgroundColor="#9e9e9e" onPress={handleGoBack}>
          <ButtonText>Voltar</ButtonText>
        </Button>
        <Button onPress={handlePayment}>
          <ButtonText>Pagar</ButtonText>
        </Button>
      </ButtonsContainer>
    </Lessbackground>
  );
}