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
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const isAndroid = Platform.OS === 'android';

const AcnePrediction = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState<any | null>(null);
  const [submitError, setSubmitError] = useState<String | null>(null);

  async function pickImageFromCamera() {
    console.log('pickImageFromCamera');
    try {
      const status = await ImagePicker.requestCameraPermissionsAsync();
      console.log(status);
      if (!status.granted) {
        return;
      }
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result);
      }
    } catch (error) {
      console.log('pickImageFromCamera', error);
    }
  }

  async function pickImageFromGallery() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        console.log('result', result.assets);
        setImage(result);
      }
    } catch (error) {
      console.log('pickImageFromGallery', error);
    }
  }

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
            Acne Prediction
          </Text>
        </TouchableHighlight>
        {/* <View
          style={{
            marginTop: 55,
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
            Upload your image
          </Text>
        </View> */}
        {/* <View
          style={{
            marginTop: 25,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 200,
              height: 200,
              borderWidth: 1,
              borderColor: '#797878',
              backgroundColor: '#ffffff',
              borderRadius: 20,
            }}></View>
        </View> */}
        <TouchableOpacity onPress={pickImageFromCamera}>
          <View
            style={{
              marginTop: 40,
              marginBottom: 10,
              marginHorizontal: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: '#797878',
                backgroundColor: '#ffffff',
                borderRadius: 10,
                borderStyle: 'dotted',
              }}>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    paddingBottom: 10,
                    backgroundColor: 'rgba(52, 52, 52, 0.0)',
                  }}>
                  <Image
                    source={require('./../assets/images/upload_icon.png')}
                    style={{height: 60, width: 60}}
                  />
                </View>
                <View
                  style={{
                    paddingBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: 15,
                      color: '#797878',
                    }}>
                    Take a Photo
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImageFromGallery}>
          <View
            style={{
              marginTop: 5,
              marginBottom: 10,
              marginHorizontal: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: '#797878',
                backgroundColor: '#ffffff',
                borderRadius: 10,
                borderStyle: 'dotted',
              }}>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    paddingBottom: 10,
                  }}>
                  <Image
                    source={require('./../assets/images/camera_icon.png')}
                    style={{height: 60, width: 60}}
                  />
                </View>
                <View
                  style={{
                    paddingBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: 15,
                      color: '#797878',
                    }}>
                    Browse your image
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 30,
          }}></View>

        {submitError !== null ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: 15,
                color: 'red',
              }}>
              {submitError}
            </Text>
          </View>
        ) : null}
        <Pressable
          style={{
            marginRight: 20,
            marginLeft: 20,
            marginTop: 10,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: '#797878',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (image == null) {
              setSubmitError('Please select an image');
              return;
            } else {
              setSubmitError(null);
            }
            const samplePred = {
              acne_preds: 'The Acne type is Blackheads',
              acne_treatment:
                'Good to use products include Retinoids, Salicylic acid (Bea hydroxy acid- BHA), Benzoyl, peroxide, Lactic acid, Charcoal',
              skin_preds: 'The Skin type is Oily',
              skin_treatment:
                'Good to use products include Dimethicone, lactic, glycolic, and salicylic acid Avoid using products including paraffin, cocoa butter, or oils',
            };
            navigation.navigate('PredictionResult', {samplePred: samplePred});

            // let data = new FormData();
            // console.log(image.assetId);
            // // return;
            // data.append('file', image, name);
            // axios
            //   .post(
            //     'https://46e8-112-134-244-143.ngrok-free.app/app/image',
            //     data,
            //     {
            //       headers: {
            //         accept: 'application/json',
            //         'Accept-Language': 'en-US,en;q=0.8',
            //         'Content-Type': `multipart/form-data;`, // boundary=${data._boundary}
            //       },
            //     },
            //   )
            //   .then((response) => {
            //     console.log(response);
            //     navigation.navigate('PredictionResult', {samplePred: response});
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //     setSubmitError('some error occured');
            //   });
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 15,
              color: '#000000',
            }}>
            SUBMIT
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginRight: 20,
            marginLeft: 20,
            marginTop: 10,
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default AcnePrediction;
