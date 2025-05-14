import { useState } from "react";
import {InputText,Props} from '@/src/components/inputs/inputs.style'

export default function Email({ placeholder = "Digite seu email:" }: Props) {
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