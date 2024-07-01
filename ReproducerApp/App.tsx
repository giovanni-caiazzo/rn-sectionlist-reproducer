import React from 'react';
import {Animated, SectionList, StyleSheet, Text} from 'react-native';

const TEST_DATA = Array(6).fill({
  title: 'test Title',
  data: Array(15).fill({
    name: 'data name',
  }),
});

function App(): React.JSX.Element {
  const testRef = React.useRef<Animated.Value>(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(testRef.current, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SectionList
      sections={TEST_DATA}
      stickySectionHeadersEnabled={true}
      renderItem={() => <Text>item</Text>}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.sectionTitle}>{title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    textTransform: 'uppercase',
    paddingLeft: 5,
    backgroundColor: 'yellow',
  },
});

export default App;
