
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;`;

export const ItemNumberContainer = styled.View`
    flex: 0.15;
    `
export const CartInfoContainer = styled.ScrollView`
    flex: 0.70;
    `
export const SubTotalContainer = styled.View`
    flex: 0.15;
    `
export const CardContainer = styled.View`
        flexDirection: 'row';

    `;
