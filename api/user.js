// import auth from '@react-native-firebase/auth';
import { auth } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import store from '../redux/store';
import { updateToken } from '../redux/Reducers/User';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth,email, password);updateProfile(auth.currentUser, {
      displayName: fullName})
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'Email bạn nhập đã được sử dụng.'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Vui lòng nhập địa chỉ email hợp lệ.'};
    }
    return {error: 'Đã xảy ra lỗi.'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth,email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'Vui lòng nhập đúng mật khẩu'};
    } else if (error.code === 'auth/user-not-found') {
      return {
        status: false,
        error:
          'Email bạn nhập không tồn tại. Vui lòng tạo một tài khoản mới.',
      };
    }
    return {status: false, error: 'Mật Khẩu sai hoặc tài khoản chưa đăng ký'};
  }
  
};

export const logOut = async () => {
  await signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
};

export const checkToken = async () => {
  try {
    let response = await auth.currentUser.getIdToken(true);
    console.log('da update token');
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
