import {  forwardRef as reactForwardRef } from "react"; 
import { ScrollView, ScrollViewProps } from "react-native";
import styled from "styled-components/native";

export const StyledScrollView = styled(
  reactForwardRef<ScrollView, ScrollViewProps>((props, ref) => (
    <ScrollView {...props} ref={ref} />
  ))
)`
  flex-grow: 1;
`;
