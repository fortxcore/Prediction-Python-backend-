import React, {useCallback, useEffect, useState} from 'react';
import {
  Linking,
  Platform,
  TouchableHighlight,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';

const isAndroid = Platform.OS === 'android';

const PredictionResult = ({route, navigation}) => {
  // const navigation = useNavigation();
  const {samplePred} = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableHighlight
          style={{
            marginRight: 20,
            marginLeft: 20,
            marginTop: 10,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#797878',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          underlayColor="#fff">
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 23,
              color: '#000000',
            }}>
            Prediction
          </Text>
        </TouchableHighlight>
        <View style={{marginTop: 50}}></View>

        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 25,
              color: '#000000',
            }}>
            Acne Prediction
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 250,
              paddingVertical: 40,
              paddingHorizontal: 15,

              borderWidth: 1,
              borderColor: '#797878',
              backgroundColor: '#ffffff',
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'center'}}>{samplePred.acne_preds}</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 10,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 25,
              color: '#000000',
            }}>
            Acne Treatment
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 250,
              paddingVertical: 40,
              borderWidth: 1,
              paddingHorizontal: 15,

              borderColor: '#797878',
              backgroundColor: '#ffffff',
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'center'}}>
              {samplePred.acne_treatment}
            </Text>
          </View>
        </View>

        <TouchableHighlight
          style={{
            marginRight: 20,
            marginLeft: 20,
            marginTop: 20,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#797878',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          underlayColor="#fff">
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 23,
              color: '#000000',
            }}>
            Treatment
          </Text>
        </TouchableHighlight>
        <View style={{marginTop: 50}}></View>

        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 25,
              color: '#000000',
            }}>
            Skin Prediction
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 250,
              paddingHorizontal: 15,
              paddingVertical: 40,
              borderWidth: 1,
              borderColor: '#797878',
              backgroundColor: '#ffffff',
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'center'}}>{samplePred.skin_preds}</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 25,
              color: '#000000',
            }}>
            Skin Treatment
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 250,
              paddingVertical: 40,
              paddingHorizontal: 15,

              borderWidth: 1,
              borderColor: '#797878',
              backgroundColor: '#ffffff',
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'center'}}>
              {samplePred.skin_treatment}
            </Text>
          </View>
        </View>

        <Pressable
          style={{
            marginRight: 20,
            marginLeft: 20,
            marginTop: 30,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: '#797878',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 15,
              color: '#000000',
            }}>
            BACK
          </Text>
        </Pressable>
        <View style={{marginTop: 30}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PredictionResult;
