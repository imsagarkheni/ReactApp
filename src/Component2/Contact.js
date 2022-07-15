import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  mobile: ''
}

const myStyle={
   borderRadius:'20px',
   border:'5px solid pink',
   boxShadow:'5px 5px 5px gray'
}

const onSubmit = (values) => {
  console.log('form', values)
  alert("Thank You " + " " + values.name + " " + "For Submit This Form.")

};

const validationSchema = Yup.object({
  name: Yup.string().required('Required this field*'),
  email: Yup.string().email('Invalid format').required('Required this field'),
  mobile: Yup.string().required('Required this field*')
})
const Contact = () => {

  return (
    <div className="container d-flex justify-content-center w-25 p-5 d-flex  align-items-center" style={myStyle}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form>
        <label htmlFor="name">Name</label><br />
        <Field
          type="text"
          id='name'
          name='name'
        />

        <br />
        <ErrorMessage name='name' />
        <br />

        <label htmlFor="email">E-mail</label><br />
        <Field
          type="email"
          id='email'
          name='email'
        /><br />
        <ErrorMessage name='email' /><br />

        <label htmlFor="mobile">Phone</label><br />
        <Field
          type="number"
          id='mobile'
          name='mobile'
        /><br />
        <ErrorMessage name='mobile' />
        <br />

        <button type='submit' className='py-1 px-3'>Submit</button>
      </Form>
    </Formik>
    </div>
  )
}

export default Contact;

