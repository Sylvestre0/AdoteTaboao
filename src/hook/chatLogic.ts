import { useState, useRef, useEffect, RefObject } from "react";
import { ScrollView } from "react-native";

interface Message {
  id: string;
  texto: string;
  enviada: boolean;
}

interface UseChatLogicProps {
  onSendMessage: (newMessage: Message) => void;
}

interface UseChatLogicResult {
  mensagens: Message[];
  scrollViewRef: RefObject<ScrollView>; 
  handleEnviarMensagem: (texto: string) => void;
}

const useChatLogic = ({ onSendMessage }: UseChatLogicProps): UseChatLogicResult => {
  const [mensagens, setMensagens] = useState<Message[]>([
    { id: '1', texto: 'teste1', enviada: true },
    { id: '2', texto: 'teste2', enviada: false },
  ]);

  const scrollViewRef = useRef<ScrollView>(null) as RefObject<ScrollView>;

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [mensagens]);

  const handleEnviarMensagem = (texto: string) => {
    if (texto.trim() !== "") {
      const novaMensagem: Message = { id: String(Date.now()), texto, enviada: true };
      setMensagens([...mensagens, novaMensagem]);
      onSendMessage(novaMensagem);
    }
  };

  return {
    mensagens,
    scrollViewRef,
    handleEnviarMensagem,
  };
};

export default useChatLogic;