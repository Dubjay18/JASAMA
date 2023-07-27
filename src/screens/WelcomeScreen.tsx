import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-black">
      {/* title */}
      <View className="space-y-2">
        <Text
          style={{ fontSize: wp(10) }}
          className="text-center font-bold text-white"
        >
          Jasama
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="text-center tracking-wider font-semibold text-gray-600"
        >
          The future is here, powerd by AI.
        </Text>
      </View>

      {/* assistant image */}
      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/images/jasama-logo.jpg')}
          style={{ height: wp(75), width: wp(75) }}
        />
      </View>

      {/* start button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="bg-sky-500 mx-5 p-4 rounded-2xl"
      >
        <Text
          style={{ fontSize: wp(6) }}
          className="text-center font-bold text-white"
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
