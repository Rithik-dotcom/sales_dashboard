import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext/userContext';
import { useFormik } from 'formik';
const Dashboard = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    handleChange: (event) => {
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      alert(`Field ${fieldName} changed to ${fieldValue}`);
      formik.handleChange(event);
    }

  });
  return (
    <div className='text-white ' >
      Hi i am Dashboard Under Development please check Products Section Until....
    </div>
  )
}

export default Dashboard