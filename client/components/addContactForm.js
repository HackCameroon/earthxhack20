import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addContact } from '../store/contacts';

function AddContactForm(props) {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => {
    dispatch(addContact(values))
    props.setForm()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label htmlFor="fullName">Full Name</label>
      <input type="text" name="fullName" ref={register} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" ref={register} />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="number" name="phoneNumber" ref={register} />

      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddContactForm
