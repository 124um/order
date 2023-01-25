import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Alert, Button, Form, Input, Typography } from 'antd';

import apiLogin from '@services/api/apiLogin.generated';
import authService from '@services/auth/auth.service';

const { Title } = Typography;

type SignInProps = {};

type SignInForm = {
  username: string;
  password: string;
};

const SignIn = ({}: SignInProps) => {
  const navigate = useNavigate();
  const signIn = useMutation(apiLogin.postLogin);
  const [form] = Form.useForm<SignInForm>();

  const error = signIn.error as any;

  const onFinish = async ({ password, username }: SignInForm) => {
    const res = await signIn.mutateAsync({ password, username });
    authService.signIn(res.data.bearerAuth);
    navigate('/d/users');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-3">
      <div className="w-full w-80 max-w-120 bg-white px-8 pt-6 pb-4 rounded-xl shadow">
        <div className="flex items-center justify-center mb-1">
          <img className="w-12" src="/images/logo.png" alt="Лого" />
        </div>
        <Title level={2} className="text-center">
          Вхід
        </Title>
        <Form onFinish={onFinish} layout="vertical" form={form}>
          <Form.Item
            label="Юзернейм"
            name="username"
            rules={[
              // {
              //   type: 'email',
              //   message: 'Повинен бути корректний email',
              // },
              { required: true, message: 'Введіть свій юзернейм' },
            ]}
          >
            <Input placeholder="Введіть свій юзернейм" />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Введіть свій пароль' }]}
          >
            <Input.Password placeholder="Введіть свій пароль" />
          </Form.Item>
          <Form.Item className="mt-8">
            <Button loading={signIn.isLoading} className="w-full" type="primary" htmlType="submit">
              Увійти
            </Button>
          </Form.Item>
          {signIn.isError && (
            <Form.Item>
              {error.status === 400 ? (
                <Alert message={error.error.message} type="error" />
              ) : (
                <Alert message="Помилка сервера. Спробуйте ще раз пізніше" type="error" />
              )}
            </Form.Item>
          )}
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
