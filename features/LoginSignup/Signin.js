import React, {useState, useEffect, useContext } from "react";
import axios from 'axios';
import { TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../../assets/logo.png';
import { Firebase_Auth} from '../../FirebaseConfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {Container, NoAccountContainer, LogoImage, Title, BoldText, SubHeader, ButtonContainer, Button, ContinueBtn, ButtonText, InputBarContainer, InputField, SignUpText, NoAccountText} from './SignIn_Styles';
import { UserProfileContext } from '../../App.js'

const SignIn = () => {
  const [logIn, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false)
  const [profilePage, setProfilePage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { profile, setProfile } = useContext(UserProfileContext);

  const auth = Firebase_Auth;

  // useEffect(() => {
  //   setProfile({});
  // }, [])

  const sendProfileData = async () => {
    try {
      alert('Profile Saved')
      console.log('profile',profile);

      const endpoint = 'http://3.141.17.132/api/u/users';

      const response = await axios.post(endpoint, profile);

      console.log('Response:', response.data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const signInFunc = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('This is the user credential:', userCredential);
        console.log('This is the user :', userCredential.user);
        console.log('This is the token response:', userCredential._tokenResponse);
        setProfile({
          ...profile,
          'firebase_uid': userCredential.user.uid,
          'email': email,
          'idToken': userCredential._tokenResponse.idToken
        });
        setSignUp(false);
        setLogin(false);
        setProfilePage(false);
        return userCredential;
      })
      .then((userCredential) => {
        alert('Sign In Success')
        console.log('idToken:', userCredential._tokenResponse.idToken);
        return userCredential;
      })
      .then((userCredential) => {
        const config = {
          headers: {
            authorization: `${userCredential._tokenResponse.idToken}`,
          },
        };
        return config
      })
      .then((config) => {
        return axios.get(`http://3.141.17.132/api/u/users/${profile.uid}`, config);
      })
      .then((backendResponse) => {
        console.log('Profile Data from Backend:', backendResponse.data[0]);
        setProfile({...profile, ...backendResponse.data[0]});
      })
      .then(() => {
        console.log(profile);
      })
      .catch((error) => {
        console.log(error);
        alert('Sign in failed: ' + error.message)
      });
  }

  const signUpFunc = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
// console.log('IDTOKEN',response._tokenResponse.idToken)
      setProfile({
        ...profile,
        'firebase_uid': response.user.uid,
        'email': email,
        'idToken': response._tokenResponse.idToken
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

  const handlePhoneNumber = (text) => {
    const cleanedText = text.replace(/\D/g, '');

    const match = cleanedText.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);
    const formattedNumber = match ? `(${match[1]})${match[2] ? ` ${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}` : '';

    return formattedNumber;
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
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LogoImage source={Logo} />
      <Title>Profile</Title>
      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, full_name: text })} placeholder="Name" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, username: text })} placeholder="Username" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, address_line_1: text })} placeholder="Address 1" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, address_line_2: text })} placeholder="Address 2 (apt #)" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, city: text })} placeholder="City" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, state_abbr: text })} placeholder="State Abbreviation" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, zip: text })} placeholder="Zip" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, interests: text })} placeholder="Interests" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField
          onChangeText={(text) => {setProfile({ ...profile, phone_number: text });
          }}
          placeholder="Number"
          keyboardType="phone-pad"
        />
      </InputBarContainer>

        <ContinueBtn onPress={sendProfileData}><ButtonText>Save</ButtonText></ContinueBtn>
      </ScrollView>
    </Container>
    )

  }

}
export default SignIn;