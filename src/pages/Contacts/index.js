import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Contacts = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>Contatos</Text>
      <Button title='tela 2' onPress={()=> navigation.navigate({
            name: 'Information',
            params: { id: 263, texto: 'novo texto' },
            merge: true,
          })}/>
		</View>
	);
};

export default Contacts;
