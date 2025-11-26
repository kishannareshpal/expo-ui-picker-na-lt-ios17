import { Host, Picker, VStack } from "@expo/ui/swift-ui";
import { useState } from "react";
import { StyleSheet } from 'react-native';

/**
 * @type {React.ComponentProps<Picker>['variant'][]}
 */
const PICKER_VARIANTS = ['menu', 'inline', 'palette', 'segmented', 'wheel']

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Host style={styles.container}>
      <VStack spacing={12}>
        {PICKER_VARIANTS.map((variant) => (
          <VStack key={variant} backgroundColor="lightgrey">
            <Picker
              variant={variant}
              options={['$', '$$', '$$$', '$$$$']}
              selectedIndex={selectedIndex}
              onOptionSelected={({ nativeEvent: { index } }) => { setSelectedIndex(index) }}
            />
          </VStack>
        ))}
      </VStack>
    </Host>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
