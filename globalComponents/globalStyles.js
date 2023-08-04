import { styled } from 'styled-components/native';

export const GlobalViewFlat = styled.View`
background-color: #FDFAF4;
`;

export const GlobalView = styled.View`
justify-content: center;
align-items: center;
background-color: #FDFAF4;
display: flex;
height: 100%;
`;

export const GlobalTitle = styled.Text`
font-family: Impact;
font-size: 24px;
font-weight: bold;
color: #EF6461;
`;

export const  GlobalParagraph = styled.Text`
color: #313638;
font-size: 16px;
`;

export const GlobalPrice = styled.Text`
font-size: 14px;
font-weight: bold;
color: #636E72;
text-decoration-line: underline;
`;

export const GlobalText = styled.Text`
color: #313638;
`;

export const GlobalRating = styled.Text`
text-align: center;
font-size: 20px;
font-weight: bold;
color: #E4B363;
`;

export const GlobalCartButton = styled.Pressable`
alignItems: center;
justifyContent: center;
paddingVertical: 12px;
paddingHorizontal: 32px;
border-radius: 3px;
elevation: 3;
backgroundColor: #EF6461;
`;

export const GlobalCartButtonText = styled.Text`
color: #fff;
font-size: 16px;
font-weight: bold;
`;