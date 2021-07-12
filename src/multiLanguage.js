import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MultiLanguage = () => {
  const [languages, setLanguages] = useState(false);
  const [value, setValue] = useState('en');
  const {t, i18n} = useTranslation();

  const handleLanguage = () => {
    if (value === 'en') {
      setValue('in');
      i18n.changeLanguage('in');
    } else {
      setValue('en');
      i18n.changeLanguage('en');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btn}
        onPress={() => {
          setLanguages(!languages);
          handleLanguage();
          //   i18n.changeLanguage(value)
        }}>
        <Text style={{color: 'white', fontSize: 24}}>
          {!languages ? 'English' : 'Indonesia'}
        </Text>
      </TouchableOpacity>
      <Text style={{marginTop: 40}}>{t('WelcomeText')}</Text>
    </View>
  );
};

export default MultiLanguage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 54,
    width: 250,
    backgroundColor: 'maroon',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
