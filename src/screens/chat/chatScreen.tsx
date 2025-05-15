import React, { useState,forwardRef } from "react";
import ChatLogic from "@/src/hook/chatLogic"; 
import { 
    Container,BarraUser, Imagem, Nome, MensagensContainer,
    BalaoEnvia, MensagemTexto, BalaoRecebe, InputArea, Input,
    BotaoEnviar, TextoBotao } from "@/src/screens/chat/chat.style";

export interface ChatScreenProps {}

const ChatScreen: React.FC<ChatScreenProps> = () => {
  const [mensagem, setMensagem] = useState("");
  const chatLogic = ChatLogic({ onSendMessage: (newMessage) => {
    console.log("Nova mensagem enviada:", newMessage);
  }});

  const handleEnviarMensagem = () => {
    chatLogic.handleEnviarMensagem(mensagem);
    setMensagem("");
  };

  return (
    <Container>
      <BarraUser>
        <Imagem source={require("@/src/assets/images/exemplo.png")} />
        <Nome>Rafael</Nome>
      </BarraUser>

      <MensagensContainer ref={chatLogic.scrollViewRef}>
        {chatLogic.mensagens.map((msg) => (
          <React.Fragment key={msg.id}>
            {msg.enviada ? (
              <BalaoEnvia>
                <MensagemTexto>{msg.texto}</MensagemTexto>
              </BalaoEnvia>
            ) : (
              <BalaoRecebe>
                <MensagemTexto>{msg.texto}</MensagemTexto>
              </BalaoRecebe>
            )}
          </React.Fragment>
        ))}
      </MensagensContainer>

      <InputArea>
        <Input
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChangeText={setMensagem}
        />
        <BotaoEnviar onPress={handleEnviarMensagem}>
          <TextoBotao>{">"}</TextoBotao>
        </BotaoEnviar>
      </InputArea>
    </Container>
  );
};

export default ChatScreen;