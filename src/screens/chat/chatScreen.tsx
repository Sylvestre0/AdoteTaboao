import { Text } from "react-native";
import styled from "styled-components/native";


const Imagem = styled.Image `
width: 100px;
height:100px;
border-radius:20px;
`
const Nome = styled.Text`
padding-left: 10px;
`
const Container = styled.View`
width:80%;
border: black;
`
const BarraUser = styled.View`
width:100%;
height: 110px;
flex-direction: row;
background-color:pink;
align-items:center;
`
const ContainerPrincipal = styled.View`
margin-top:10%;
justify-content:center;
align-items:center;`

const BalaoEnvia = styled.View`
background-color: green;
width:80%;
height:45px;
justify-content:center;
align-items: left;
padding-left:10px;`

const BalaoRecebe = styled.View`
background-color: pink;
width:80%;
height:45px;
justify-content:center;
align-items: left;
margin-left:20%;
padding-left:10px;`

export default function ChatScreen (){
    return(
        <ContainerPrincipal>
            <Container>
                <BarraUser>
                    <Imagem source={require("@/assets/images/exemplo.png")}/>
                    <Nome>Rafael</Nome>
                </BarraUser>
                <BalaoEnvia>
                    <Text>
                        viado
                    </Text>
                </BalaoEnvia>

                <BalaoRecebe>
                    <Text>
                        è você
                    </Text>
                </BalaoRecebe>
            </Container>
        </ContainerPrincipal>
    )
}