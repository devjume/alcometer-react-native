import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles  = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: Constants.statusBarHeight,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  textColor: {
    color: "red"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    minWidth: "100%",
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  inputField: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    height: 48,
    fontSize: 28,
    paddingLeft: 10
  },

  genreSelectorContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },

  genreSelectorChild: {
    flexDirection: "row",
    alignItems: "center",
  },

  genreTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 8
  },

  radioButton: {
    backgroundColor: "red",
    fontSize: 56,
  },

  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 20
  },

  buttonTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  resultTitle: {
    fontSize: 42,
    fontWeight: "bold",
  },

  resultMsg: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    padding: 9,
    color: "#000",
  }, 

  resultContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 5
  },

  themeSwitch: {
    position: "absolute",
    top: 0,
    right: 0,
  }


})

const darkStyles  = StyleSheet.create({
  scrollView: {
    ...styles.scrollView,
    backgroundColor: "#121212",
  },
  contentContainer: {
    ...styles.contentContainer,
  },

  textColor: {
    ...styles.textColor,
    color: "#000"
  },
  title: {
    ...styles.title,
    color: "#fff"
  },
  inputContainer: {
    ...styles.inputContainer
  },
  inputTitle: {
    ...styles.inputTitle,
    color: "#fff"
  },
  inputField: {
    ...styles.inputField,
    backgroundColor: "#121212",
    borderColor: "#fff",
    color: "#fff",
  },

  genreSelectorContainer: {
    ...styles.genreSelectorContainer,
  },

  genreSelectorChild: {
    ...styles.genreSelectorChild,
  },

  genreTitle: {
    ...styles.genreTitle,
    color: "#fff"
  },

  button: {
    ...styles.button,
    backgroundColor: "#fff"
  },

  buttonTitle: {
    ...styles.buttonTitle,
    color: "#121212",
  },

  resultTitle: {
    ...styles.resultTitle
  },

  resultMsg: {
    ...styles.resultMsg,
  }, 

  resultContainer: {
    ...styles.resultContainer
  },

  themeSwitch: {
    ...styles.themeSwitch
  }
})

export { styles, darkStyles }