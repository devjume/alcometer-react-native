import { Text, View} from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function GenreSelector({genre, setGenre, theme}) {

  return (
    <View style={[theme.genreSelectorContainer]}>
      <View style={theme.genreSelectorChild}>
        <Text style={theme.genreTitle}>Male</Text>
        <RadioButton 
          value="male"
          status={genre === false ? "checked" : "unchecked"}
          onPress={() => setGenre(false)}
        />
      </View>

      <View style={theme.genreSelectorChild}>
        <Text style={theme.genreTitle}>Female</Text>
        <RadioButton 
          value="female"
          status={genre === true ? "checked" : "unchecked"}
          onPress={() => setGenre(true)}
          style={theme.radioButton}
        />
      </View>
    </View>
  );
}
