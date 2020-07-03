import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import loginImg from 'Assets/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'Util/Auth';
import history from 'Util/History';
import { CSSObject } from '@emotion/core';
import ThemeConfig from 'Util/ThemeConfig';
import { verifyUser } from 'Redux/AuthSlice';
import { RootState } from 'Redux/Store';
import { sliceTypes } from 'Redux/Helpers/Enums';

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector(
    (state: RootState) => state[sliceTypes.auth].validateUser.response?.token,
  );
  const loading = useSelector((state: RootState) => state[sliceTypes.auth].validateUser.loading);

  const errorMessage = useSelector(
    (state: RootState) => state[sliceTypes.auth].validateUser.messages![0].message,
  );

  useEffect(() => {
    if (token) {
      login(token);
      history.push('/');
    }
  }, [token]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(
      verifyUser({
        username: values.username,
        password: values.password,
        userTypeId: 3,
      }),
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div css={styles.container}>
      <div css={styles.cardContainer}>
        <img src={loginImg} alt="loginImg" />
        <div css={styles.rightSideContainer}>
          <h1 css={styles.h1}>Giriş</h1>
          <p css={styles.p}>Tekrar hoşgeldiniz, Lütfen hesabınızla giriş yapın.</p>
          {errorMessage && <Alert message={errorMessage} type="error" />}
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Kullanıcı Adı"
              name="username"
              rules={[{ required: true, message: 'Lütfen kullanıcı adınızı girin!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Şifre"
              name="password"
              rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Beni Hatırla</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button loading={!!loading} disabled={!!loading} type="primary" htmlType="submit">
                Giriş
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

const styles: CSSObject = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: ThemeConfig.color.gray500,
  },
  cardContainer: {
    display: 'flex',
    color: ThemeConfig.color.black,
    backgroundColor: ThemeConfig.color.white,
    borderRadius: ThemeConfig.borderRadius.default,
    boxShadow: ThemeConfig.boxShadow.lg,
  },
  rightSideContainer: {
    marginBottom: ThemeConfig.spacing[2],
    marginTop: ThemeConfig.spacing[2],
    marginLeft: ThemeConfig.spacing[8],
    marginRight: ThemeConfig.spacing[8],
  },
  h1: {
    fontSize: ThemeConfig.fontSize['2xl'],
    fontWeight: ThemeConfig.fontWeight.bold,
  },
  p: {
    marginBottom: ThemeConfig.spacing[2],
    marginTop: ThemeConfig.spacing[2],
  },
};

export default Login;
