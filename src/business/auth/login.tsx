import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import s from './login.module.css';
import { useForm } from 'react-hook-form';
import { User } from '#/core/user/user.types.ts';
import clsx from 'clsx';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '#/core/auth/auth.store.ts';

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm<User>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const loginSubmit = (values: User) => {
    login(values);
    navigate('/');
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center p-3 p-md-0">
      <Card className={clsx(s.login__card)}>
        <Card.Img
          variant="top"
          src="/eways-delivery.webp"
          className={s.login__img}
        />
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form
            noValidate
            onSubmit={handleSubmit(loginSubmit)}
            className="d-flex gap-2 justify-content-center flex-column mt-4"
          >
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-person" />
                </InputGroup.Text>
                <Form.Control
                  required
                  {...register('username')}
                  type="text"
                  placeholder="User123"
                  className={clsx(
                    errors?.username && 'is-invalid',
                    touchedFields?.username && !errors?.username && 'is-valid'
                  )}
                />
              </InputGroup>
              {errors?.username && (
                <p className="text-danger d-block my-1 mb-0">
                  Username is required.
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-asterisk" />
                </InputGroup.Text>
                <Form.Control
                  required
                  {...register('password')}
                  type="password"
                  placeholder="***"
                  className={clsx(
                    errors?.password && 'is-invalid',
                    touchedFields?.password && !errors?.password && 'is-valid'
                  )}
                />
              </InputGroup>
              {errors?.password && (
                <p className="text-danger d-block my-1 mb-0">
                  Password is required.
                </p>
              )}
            </Form.Group>
            <div className="d-flex gap-2">
              <Button type="submit" variant="primary" disabled={!isValid}>
                Login
              </Button>
              <Button type="reset" variant="danger">
                Reset
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
