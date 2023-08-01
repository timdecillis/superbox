import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  height: 100%;
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
  margin-top: 3px;
`

export const LogoImage = styled.Image`
  margin-bottom: 20px;
  width:92px;
  height:65px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
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
  height:50px;
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
  height:50px;
  width: 84%;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const InputBarContainer = styled.View`
  background-color: #f0f0f0;
  width: 325px;
`;

export const InputField = styled.TextInput`
  height: 50px;
  border: 1px solid #ccc;
  padding: 5px;
  width:100%;
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