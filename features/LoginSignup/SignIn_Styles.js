import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  height: ${height}px;
  background-color: #E4B363;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const NoAccountContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${height > 600 ? '10px' : '3px'};
`

export const LogoImage = styled.Image`
  margin-bottom: ${height > 600 ? '20px' : '10px'};
  width: ${width > 350 ? '92px' : '80px'};
  height: ${width > 350 ? '65px' : '55px'};
`;

export const Title = styled.Text`
  font-size: ${width > 350 ? '28px' : '24px'};
  font-weight: bold;
  margin-bottom: ${height > 600 ? '30px' : '20px'};
  color: #EF6461;
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;

export const SubHeader = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2196F3;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  height: 50px;
`;

export const ContinueBtn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2196F3;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 6px;
  height: 50px;
  width: ${width > 350 ? '84%' : '80%'};
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const InputBarContainer = styled.View`
  background-color: #f0f0f0;
  width: ${width > 350 ? '325px' : '300px'};
  margin-bottom: 15px;
`;

export const InputField = styled.TextInput`
  height: 50px;
  border: 1px solid #ccc;
  padding: 5px;
  width: 100%;
`;

export const SignUpText = styled.Text`
  color: #2196F3;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export const NoAccountText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 14px;
`;