import React from 'react';
import { Button, View } from 'react-native';

// import { Container } from './styles';

const Butao = ({nome}) => {
	return (
		<View>
			<Button title={nome} />
		</View>
	);
};

export default Butao;
