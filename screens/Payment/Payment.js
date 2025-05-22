import React from 'react';
import {SafeAreaView, ScrollView, View, Text,Alert} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import style from './style';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import {CardForm, StripeProvider} from '@stripe/stripe-react-native';
import {STRIPE_PUBLISHABLE_KEY} from '../../constants/App';

const Payment = ({navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making Donation'} />
        <Text style={style.donationAmountDescription}>
          Bạn cần phải ủng hổ {donationItemInformation.price} $
        </Text>
        <View>
          <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
            <CardForm style={style.cardForm} />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} onPress={()=>{Alert.alert('Successful', 'Việc thanh toán đã được xác nhận thành công!!');
      navigation.goBack();}} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
