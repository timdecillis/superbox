import React, {useState} from "react";
import styled from 'styled-components/native'
import Logo from '../assets/logo.png'


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LogoImage = styled.Image`
  width: 75px;
  height: 75px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #EF6461;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;


const SubHeader = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  background-color: #2196F3;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;


const Signin = () => {
  const [logIn, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false)

  const handleClick = (input) => {
    if (input === 'logIn') {
      setLogin(true);
      setSignUp(false);

    } else {
      setLogin(false);
      setSignUp(true);
    }

  };

  return (
    <Container>
      <LogoImage source={Logo} />
      <Title>Welcome to <BoldText>SUPERBOX</BoldText></Title>
      <SubHeader>Login to continue</SubHeader>
      <ButtonContainer>
              <Button onPress={() => {handleClick('logIn')}}>
        <ButtonText>Log In</ButtonText>
      </Button>
      <Button onPress={() => {handleClick('signUp')}}>
        <ButtonText>Sign Up</ButtonText>
      </Button>
      </ButtonContainer>

  </Container>
  )
}
export default Signin;