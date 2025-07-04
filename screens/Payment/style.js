import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(50),
  },
  button: {
    marginHorizontal: horizontalScale(24),
  },
  donationAmountDescription: {
    marginTop: verticalScale(12),
  },
  cardForm: {
    height: verticalScale(250),
    marginTop: verticalScale(12),
  },
});

export default style;
