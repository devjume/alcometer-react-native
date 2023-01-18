import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, TextInput, View, Pressable, Switch } from 'react-native';
import { styles, darkStyles } from "./styles"
import { useState } from 'react';
import InputContainer from './components/InputContainer';
import GenreSelector from './components/GenreSelector';
import NumericInput from 'react-native-numeric-input'

export default function App() {

  const [darkmode, setDarkmode] = useState(false);
  const changeTheme = () => setDarkmode(previousState => !previousState);
  
  const theme = darkmode ? darkStyles : styles
  const darkColor = darkmode ? "#fff" : "#000"
  const lightColor = darkmode ? "#000" : "#fff"

  const [errorMsg, setErrorMsg] = useState("")
  const [weight, setWeight] = useState(undefined)
  const [bottles, setBottles] = useState()
  const [hours, setHours] = useState()
  const [genre, setGenre] = useState(false)
  const [result, setResult] = useState(undefined)
  const [color, setColor] = useState("")

  function calculation() {
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - burning * hours
    let bloodLevel = 0

    if (weight <= 0 || weight == undefined ) {
      setErrorMsg("Set weight!")
      return
    } else {
      setErrorMsg("")
    }

    {/* If female, else male */}
    if (genre) {
      bloodLevel = gramsLeft / (weight * 0.6)
    } else {
      bloodLevel = gramsLeft / (weight * 0.7)
    }

    {/* Set background color based on result */}
    if (bloodLevel < 0.5) {
      setColor("green")
    } else if(bloodLevel >= 0.5 && bloodLevel < 1.2) {
      setColor("yellow")
    } else {
      setColor("red")
    }

    if (bloodLevel >= 0) {
      setResult(bloodLevel.toFixed(2))
    } else {
      setResult(0)
    }
  }

  return (
    <ScrollView style={theme.scrollView} contentContainerStyle={theme.contentContainer}>
      <Text style={theme.title}>Alcometer</Text>
      <InputContainer title="Weight" theme={theme}>
        <TextInput 
          keyboardType='numeric' 
          style={theme.inputField}
          onChangeText={setWeight}
          />
      </InputContainer>
      <InputContainer title="Bottles" theme={theme}>
        <NumericInput 
          onChange={value => setBottles(value)} 
          totalWidth={350}
          totalHeight={56}
          separatorWidth={0}
          iconStyle={{color: darkColor}}
          borderColor={darkColor}
          rightButtonBackgroundColor={lightColor}
          leftButtonBackgroundColor={lightColor}
          textColor={darkColor}
          minValue={0}
          />
      </InputContainer>
      <InputContainer title="Hours" theme={theme}>
        <NumericInput 
            onChange={value => setHours(value)} 
            totalWidth={350}
            totalHeight={56}
            iconStyle={{color: darkColor}}
            separatorWidth={0}
            borderColor={darkColor}
            rightButtonBackgroundColor={lightColor}
            leftButtonBackgroundColor={lightColor}
            textColor={darkColor}
            minValue={0}
            />
        </InputContainer>

      <GenreSelector genre={genre} setGenre={setGenre} theme={theme}/>
      
      <View style={theme.resultContainer}>
        {!!errorMsg &&  <Text style={[theme.resultMsg, {color: "red"}]}>{errorMsg}</Text>}
        {result != undefined && <Text style={[theme.resultMsg,{backgroundColor: color}]}>Blood Alcohol Level: {result}‰</Text> }
      </View>
      
      <Pressable style={({pressed}) => [{backgroundColor: pressed ? "#555" : "#000"}, theme.button]} onPress={calculation}>
        <Text style={theme.buttonTitle}>Calculate</Text>
      </Pressable>

      <View
        style={theme.themeSwitch}
      >
        <Text style={{fontWeight: "bold", color: darkmode ? "#fff" : "#000" }}>Dark mode:</Text>
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={darkmode ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={changeTheme}
        value={darkmode}
        />
      </View>

      <StatusBar style="auto"/>
    </ScrollView>
  );
}
