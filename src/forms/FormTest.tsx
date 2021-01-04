import * as React from 'react';
import { Field, FormikProps, withFormik, FormikBag, FormikValues, Form, FormikErrors } from 'formik';

export function MyForm (props: FormikProps<IForm>) {

  const { handleSubmit, errors, touched } = props;

  return (
    <form 
      onSubmit = {handleSubmit}
      style = {{
        width: "50%",
        height: "500px",
        margin: "auto",
        border: "solid black 2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >

      {errors.email &&
        <div>
          asdadsad
        </div>
      }

      <Field 
        type = "email"
        name = "email"
        style = {{
            width: "50%",
            marginBottom: "10px"
        }}      
        />
       {touched.email && errors.email && <div>{errors.email}</div>}

      <Field
        type = "password"
        name = "password"
        style = {{
          width: "50%",
          marginBottom: "10px"
        }}       
      />
       {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit">Guardar</button>
      
    </form>
  );
}

interface IForm {
  email: string,
  password: string
}

interface IOtherProps {

}


export default withFormik<IOtherProps, IForm>({


  validate: (values: IForm, props: IOtherProps) => {

    const errors : FormikErrors<IForm> = {};

    if(!values.password) errors.password = "Password is required";
    
    else if(values.password.length < 5) errors.password = "Your password is short";
    
    if(!values.email) errors.email = "Email is Required";

    console.log(errors);


  },

  handleSubmit: (values: IForm, formikBag: FormikBag<object, IForm>) => {
    console.log(values);
  },



})(MyForm);
