import React from 'react';
import { View, Text } from 'react-native';

import Butao from '../../components/Butao';

import { styles } from './styles';

const Information = ({route}) => {
	return (
		<View style={styles.container}>
			<Text>Informações: {route.params?.id}</Text>
      {/* <Butao nome={route.params?.texto}/> */}
		</View>
	);
};

export default Information;
