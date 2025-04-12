import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1987, 1983, 1992, 2009, 2019, 2020],
    logo: 'https://i.pinimg.com/736x/6b/1a/e5/6b1ae5c77a7d21315a0069835775f883.jpg'
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022],
    logo: 'https://i.pinimg.com/736x/40/a2/9b/40a29b600497737cce7010d0af0d8289.jpg'
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024],
    logo: 'https://i.pinimg.com/736x/05/28/26/05282618c2a06467a26eb0fed3dafa2e.jpg'
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025],
    logo: 'https://i.pinimg.com/736x/75/99/a5/7599a55a3def48a552c94ce6690f3787.jpg'
  },
];

const TitulosScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black'}}>
      <View style={{ alignItems: 'center', marginVertical: 20,  backgroundColor: 'black' }}>
        <Card style={{ backgroundColor: 'black', width: 120, borderRadius: 60 }}>
          <Card.Cover
            source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
            style={{width: 100, height: 100, borderRadius: 50,backgroundColor:'black'}}
          />
        </Card>
      </View>

      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Card style={{ backgroundColor: '#1a1a1a', marginVertical: 10 }}>
            <Card.Title
              title={item.nome}
              titleStyle={{ color: 'red', fontWeight: 'bold' }}
              left={() => (
                <Image
                  source={{ uri: item.logo }}
                  style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
                />
              )}
            />
            <Card.Content>
              <Paragraph style={{ color: 'red' }}>
                Anos: <Text style={{ color: 'red' }}>{item.anos.join(', ')}</Text>
              </Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default TitulosScreen;
