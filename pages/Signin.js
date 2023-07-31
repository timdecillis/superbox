import React, {useState} from "react";
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import Logo from '../assets/logo.png'
import { Firebase_Auth} from '../FirebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const NoAccountContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
`

const LogoImage = styled.Image`
  width: 75px;
  height: 75px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2196F3;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  height:50px;
`;

const ContinueBtn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2196F3;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 6px;
  height:50px;
  width: 84%;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

const InputBarContainer = styled.View`
  background-color: #f0f0f0;
  width: 325px;
`;

const InputField = styled.TextInput`
  height: 50px;
  border: 1px solid #ccc;
  padding: 5px;
  width:100%;
`;

const SignUpText = styled.Text`
  color: #2196F3;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;
const NoAccountText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 14px;
`;

const SignIn = () => {
  const [logIn, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = Firebase_Auth;

  const signInFunc = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Sign In Success')

    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message)
    }
  }

  const signUpFunc = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Sign In Success')

    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message)
    }
  }

  const handleClick = (input) => {
    if (input === 'logIn') {
      setLogin(true);
      setSignUp(false);

    } else {
      setLogin(false);
      setSignUp(true);
    }

  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  if (logIn === false && signUp === false) {
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

  )} else if (logIn === true) {
    return (
      <Container>

        <LogoImage source={Logo} />
        <Title>Welcome back</Title>

        <InputBarContainer>
            <InputField onChangeText={(text) => setEmail(text)} value={email} placeholder="Email address" autocapitalize="none"/>
        </InputBarContainer>
        <InputBarContainer>
            <InputField onChangeText={(text) => setPassword(text)} value={password} placeholder="Password" secureTextEntry={true}/>
        </InputBarContainer>

        <ButtonContainer>
            <ContinueBtn onPress={signInFunc} ><ButtonText>Continue</ButtonText></ContinueBtn>
        </ButtonContainer>

        <NoAccountContainer>
          <NoAccountText>Don't have an account? </NoAccountText>
          <TouchableOpacity onPress={() => {handleClick('signUp')}}>
            <SignUpText> Sign Up</SignUpText>
          </TouchableOpacity>
        </NoAccountContainer>

      </Container>
    )
  } else if (signUp === true) {
    return (
      <Container>

        <LogoImage source={Logo} />
        <Title>Create your account</Title>

        <InputBarContainer>
            <InputField onChangeText={(text) => setEmail(text)} value={email} placeholder="Email address" autocapitalize="none"/>
        </InputBarContainer>
        <InputBarContainer>
            <InputField onChangeText={(text) => setPassword(text)} value={password} placeholder="Password" secureTextEntry={true}/>
        </InputBarContainer>

        <ButtonContainer>
            <ContinueBtn onPress={signUpFunc} ><ButtonText>Continue</ButtonText></ContinueBtn>
        </ButtonContainer>

        <NoAccountContainer>
          <NoAccountText>Already have an account? </NoAccountText>
          <TouchableOpacity onPress={() => {handleClick('logIn')}}>
            <SignUpText> Log in</SignUpText>
          </TouchableOpacity>
        </NoAccountContainer>

    </Container>
    )
  }

}
export default SignIn;