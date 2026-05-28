import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <Form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </Form>
  );
};

export default Form;
