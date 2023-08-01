import React, {useState} from "react";
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import Logo from '../../assets/logo.png'
import { Firebase_Auth} from '../../FirebaseConfig.js'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {Container, NoAccountContainer, LogoImage, Title, BoldText, SubHeader, ButtonContainer, Button, ContinueBtn, ButtonText, InputBarContainer, InputField, SignUpText, NoAccountText} from './SignIn_Styles'

const SignIn = () => {
  const [logIn, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false)
  const [profilePage, setProfilePage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState({});

  const auth = Firebase_Auth;

  const signInFunc = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setProfile({...profile, 'email': email})
      setSignUp(false);
      setLogin(false);
      setProfilePage(false);
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
      console.log('RESPONSE',response)

      setProfile({
        ...profile,
        'uID': response.user.uid,
        'email': email,
        'tokenID': response.tokenID
      });

      setSignUp(false);
      setLogin(false);
      setProfilePage(true);
      alert('Sign Up Success')

    } catch (error) {
      console.log(error);
      alert('Sign up failed: ' + error.message)

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


  if (logIn === false && signUp === false && profilePage === false) {
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
  } else if (profilePage === true) {
    return (
      <Container>

        <LogoImage source={Logo} />
        <Title>Profile</Title>

        <InputBarContainer>
            <InputField onChangeText={(text) => setProfile({...profile, 'Name': text})} placeholder="Name"/>
        </InputBarContainer>
        <InputBarContainer>
            <InputField onChangeText={(text) => setProfile({...profile, 'Address': text})} placeholder="Address" autocapitalize="none"/>
        </InputBarContainer>
        <InputBarContainer>
            <InputField onChangeText={(text) => setProfile({...profile, 'Interests': text})} placeholder="Interests"/>
        </InputBarContainer>
        <InputBarContainer>
            <InputField onChangeText={(text) => setProfile({...profile, 'Number': text})} placeholder="Number"/>
        </InputBarContainer>


        <ContinueBtn onPress={() => {console.log(profile)}}><ButtonText>Continue</ButtonText></ContinueBtn>

      </Container>
    )

  }

}
export default SignIn;