import Image, { ImageSourcePropType } from 'react-native'
import styled from 'styled-components/native'


interface CircleImageProps {
    source: ImageSourcePropType; 
    size?: number;
}

const ImageCircle = styled.Image<{size?:number}>`
    border-radius: ${({ size }) => size ? size / 2 : 25}px;
    width: ${({ size }) => size || 50}px;
    height: ${({ size }) => size || 50}px;
`
export default function CircleImage({source, size}: CircleImageProps) {
    return <ImageCircle source={source} size={size}/>
}