import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Required").min(4, "Must be 4 character or more!"),
        email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address!"),
        password: Yup.string().required("Required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Please enter a valid password address!, for ex: Testing193!"),
        confirmedPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Password must match!"),
        phone: Yup.string().required("Required").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Please enter a valid phone number!, Ex: 0988888888")
    }),
    onSubmit: (values) => {
        window.alert("Form submitted");
      console.log(values);
    },
  });


//   console.log(formik.errors);

  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />

        {formik.errors.name && (
            <p className="errorMsg">{formik.errors.name}</p>
        )}

        <label>Your Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />

        {formik.errors.email && (
            <p className="errorMsg">{formik.errors.email}</p>
        )}

        <label>Your Phone number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone"
        />

        {formik.errors.phone && (
            <p className="errorMsg">{formik.errors.phone}</p>
        )}

        <label>Your password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />

        {formik.errors.password && (
            <p className="errorMsg">{formik.errors.password}</p>
        )}

        <label>Confirmed Password</label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Enter Confirmed Password"
        />
        
        {formik.errors.confirmedPassword && (
            <p className="errorMsg">{formik.errors.confirmedPassword}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

