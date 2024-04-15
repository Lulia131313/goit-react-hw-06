import s from "./Contact.module.css";
import { nanoid } from "nanoid";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContacts }) => {
  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    addContacts(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched }) => (
        <Form className={s.form}>
          <div>
            <label className={s.label} htmlFor="name">
              Name
            </label>
            <Field className={s.input} type="text" name="name" id="name" />
            {errors.name && touched.name && <div>{errors.name}</div>}
          </div>

          <div>
            <label className={s.label} htmlFor="number">
              Number
            </label>
            <Field className={s.input} type="text" name="number" id="number" />
            {errors.number && touched.number && <div>{errors.number}</div>}
          </div>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
