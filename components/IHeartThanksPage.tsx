import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

interface IHeartThanksPageProps {
  pageNumber: number;
}

const STATIONS = [
  'Power 105.1 FM',
  'Elvis Duran and The Morning Show',
  'Q104 FM Classic Rock',
  'WLTW Lite FM',
  'WKTU-FM 103.5',
  '710 WOR',
  'Premiere Radio',
];

const PEOPLE: { name: string; role: string }[] = [
  {
    name: 'Thea Mitchem:',
    role: ' iHeartMedia E.V.P. of Programming for the Northeast Division and Program Director of Power 105.1 NYC',
  },
  {
    name: 'Bernie Weiss:',
    role: ' Division President of iHeartMedia Multiplatform Group',
  },
  {
    name: 'Steve Delusant:',
    role: ' President of New York  iHeartMedia Multiplatform Group',
  },
  {
    name: 'Tom Poleman:',
    role: ' Chief Programming Officer and President of National Programming for iHeartMedia',
  },
];

const LOGO_WIDTH = getResponsiveValue(220, 240, 260, 290);

export default function IHeartThanksPage({ pageNumber }: IHeartThanksPageProps) {
  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Image
            source={require('../assets/iheart-media-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.heading}>
            I WAS SO PROUD AND HONORED TO BE THE RECEPTIONIST FOR YOU ALL!
          </Text>

          <View style={styles.stationList}>
            {STATIONS.map((station, i) => (
              <Text key={i} style={styles.station}>{station}</Text>
            ))}
          </View>

          <View style={styles.peopleList}>
            {PEOPLE.map((person, i) => (
              <Text key={i} style={styles.person}>
                <Text style={styles.personName}>{person.name}</Text>
                {person.role}
              </Text>
            ))}
          </View>

          <Text style={styles.closing}>
            TO EACH STATION AND EVERY PERSON...THANK YOU, FOR A LIFETIME OF GREAT MEMORIES AND LASTING FRIENDSHIPS!  WITH FOREVER LOVE, ANITA
          </Text>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: moderateScale(30),
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(16),
  },
  logo: {
    width: LOGO_WIDTH,
    height: LOGO_WIDTH * (165 / 500),
    alignSelf: 'center',
    marginBottom: moderateScale(16),
  },
  heading: {
    fontSize: scaleFont(15),
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    lineHeight: scaleFont(21),
    marginBottom: moderateScale(20),
  },
  stationList: {
    alignItems: 'center',
    marginBottom: moderateScale(24),
  },
  station: {
    fontSize: scaleFont(14),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: scaleFont(22),
  },
  peopleList: {
    marginBottom: moderateScale(24),
  },
  person: {
    fontSize: scaleFont(14),
    lineHeight: scaleFont(21),
    color: '#000',
    marginBottom: moderateScale(16),
  },
  personName: {
    fontWeight: 'bold',
  },
  closing: {
    fontSize: scaleFont(14),
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    lineHeight: scaleFont(21),
  },
});
