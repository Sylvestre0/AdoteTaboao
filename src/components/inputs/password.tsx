import { useState } from "react";
import {InputText,Props} from '@/src/components/inputs/inputs.style'

export default function Password({ placeholder = "Digite sua senha:" }: Props) {
  const [text, setText] = useState('');

  return (
        <InputText
            placeholder={placeholder}
            autoFocus={true}
            blurOnSubmit={true}
            value={text}
            onChangeText={setText}
            secureTextEntry={false}
            returnKeyType="done"
        />
  );
}