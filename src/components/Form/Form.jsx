import { Input } from '../Pages/Movies.styled';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SerchForm = ({ submit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const submitHandle = data => {
    if (data.query !== '') {
      submit(data.query.trim().toLowerCase());
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit(submitHandle)}>
      <Input
        type="text"
        {...register('query', {
          minLength: {
            value: 2,
          },
          required: {
            value: true,
          },
        })}
      />
      {errors?.query &&
        toast.error('On correct response', {
          theme: 'dark',
        })}
    </form>
  );
};

export default SerchForm;
