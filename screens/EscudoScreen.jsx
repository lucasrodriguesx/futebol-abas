import React from 'react';
import { View, Image } from 'react-native';
import { Title } from 'react-native-paper';

const EscudoScreen = () => {
  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 50, backgroundColor: 'black'}}>
      <Image
        source={{ uri: time.escudo }}
        style={{ width: 400, height: 400, borderRadius: 60, marginBottom: 20 }}
      />
      <Title style={{ color: 'red', fontSize: 28, fontWeight: 'bold' }}>{time.nome}</Title>
    </View>
  );
};

export default EscudoScreen;
