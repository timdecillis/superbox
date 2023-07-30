import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './pages/SignIn';
import styled from 'styled-components/native'

const Container = styled.View`
display:flex;
flex-direction: column;
height:100%;
  background-color:#E4B363;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (

    <Container>
        <SignIn />
    </Container>

  );
}

