import CircleImage from '@/src/components/Image/circuleImage.style';
import Logo from "@/src/assets/images/logo.jpg"
import { WaterMask } from '@/src/components/Marca_D\'agua/cooporation';
import Email from '@/src/components/inputs/email';
import Password from '@/src/components/inputs/password';
import { ButtonText, Container, Conteudo, LoginButton, Title } from './login.style';
import { router } from 'expo-router';

export default function LoginScreen(){
    
    return (
    <Container>
      <CircleImage source={Logo} size={200} />    
      <Conteudo>
        <Title>Adote um Amigo em Taboão</Title>
        <Email/>
        <Password/>
        <LoginButton onPress={() => router.navigate('/(router)/home')}>
          <ButtonText>Login</ButtonText>
        </LoginButton>
      </Conteudo>
      <WaterMask>©Sylvester Coop</WaterMask>
    </Container>
  );
};

