import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard
          title="Hawa Mahal"
          imageUri="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ"
          lable="Pink City, Jaipur"
          description="The Hawa Mahal is a palace in the city of Jaipur, India. Build from
            red and pink sandstone, it is on the edge of the City Palace."
        />
        <FancyCard
          title="Ghats of Varanasi"
          imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBIdCYC2ttz7FwD7boqRaVeHPRQWWZuWyDxq1VvBxPg&s"
          lable="Varanasi, Uttar Pradesh"
          description="Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
