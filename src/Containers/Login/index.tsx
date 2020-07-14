import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import loginImg from 'Assets/login.png';
import { useDispatch } from 'react-redux';
import { login } from 'Util/auth';
import { history } from 'Util/history';
import { CSSObject } from '@emotion/core';
import { ThemeConfig } from 'Util/theme-config';
import { AppDispatch } from 'Redux/store';
import { useTypedSelector } from 'Util/types';
import { Actions } from 'reduxypat';
import { ValidateUserRequestDTO } from 'reduxypat/lib/Api/api-types';

const onFinishFailed = (): void => {};

export const Login = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const token = useTypedSelector((state) => state.auth.validateUser.response?.token);
  const loading = useTypedSelector((state) => state.auth.validateUser.loading);

  const errorMessage = useTypedSelector((state) =>
    state.auth.validateUser.messages ? state.auth.validateUser.messages![0].message : undefined,
  );

  useEffect(() => {
    if (token) {
      login(token);
      history.push('/');
    }
  }, [token]);

  const onFinish = (values: ValidateUserRequestDTO): void => {
    dispatch(
      Actions.auth.verifyUser({
        username: values.username,
        password: values.password,
        userTypeId: 3,
      }),
    );
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
    backgroundColor: ThemeConfig.Color.gray500,
  },
  cardContainer: {
    display: 'flex',
    color: ThemeConfig.Color.black,
    backgroundColor: ThemeConfig.Color.white,
    borderRadius: ThemeConfig.BorderRadius.default,
    boxShadow: ThemeConfig.BoxShadow.lg,
  },
  rightSideContainer: {
    marginBottom: ThemeConfig.Spacing[2],
    marginTop: ThemeConfig.Spacing[2],
    marginLeft: ThemeConfig.Spacing[8],
    marginRight: ThemeConfig.Spacing[8],
  },
  h1: {
    fontSize: ThemeConfig.FontSize['2xl'],
    fontWeight: ThemeConfig.FontWeight.bold,
  },
  p: {
    marginBottom: ThemeConfig.Spacing[2],
    marginTop: ThemeConfig.Spacing[2],
  },
};
