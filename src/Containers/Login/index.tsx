import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import loginImg from 'Assets/login.png';
import { Actions, Selectors } from 'edkk-redux';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'Util/Auth';
import history from 'Util/History';

const Login = () => {
  const dispatch = useDispatch();
  const token: string = useSelector(Selectors.Auth.tokenSelector);
  const loading: boolean = useSelector(Selectors.Auth.loadingSelector);
  const userDetailError: any = useSelector(Selectors.Auth.userDetailErrorSelector);

  useEffect(() => {
    if (token) {
      login(token);
      history.push('/');
    }
  }, [token]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(
      Actions.Auth.verifyUser({
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
    <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-500">
      <div className="tw-flex tw-text-black tw-bg-white tw-rounded-lg tw-shadow-lg">
        <img src={loginImg} alt="loginImg" />

        <div className="tw-mx-8 tw-my-2">
          <h1 className="tw-text-2xl tw-font-bold">Giriş</h1>
          <p className="tw-my-2">Tekrar hoşgeldiniz, Lütfen hesabınızla giriş yapın.</p>
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
              <Button loading={loading} disabled={loading} type="primary" htmlType="submit">
                Giriş
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
