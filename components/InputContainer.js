import { Text, View } from 'react-native';

export default function InputContainer({children, title, theme}) {

  return (
    <View style={theme.inputContainer}>
      <Text style={theme.inputTitle}>{title}</Text>
      {children}
    </View>
  );
}
