import Head from "next/head";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";
//
import Input from "../../components/Input";
//
import styles from "./styles.module.css";
import { useRef } from "react";

const SignUp = () => {
  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um email válido")
          .required("Email obrigatório"),
        name: Yup.string().required("Nome obrigatório"),
        password: Yup.string().min(6, "Mínimo de seis dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      reset();
    } catch (err) {
      const validationErrors = {};
      console.log(err);
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <>
      <Head>
        <title>myFormApp</title>
      </Head>
      <main className={styles.mainContent}>
        <section className={styles.textSection}>
          <div className={styles.textContainer}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              neque volutpat ac tincidunt vitae semper quis. Arcu dui vivamus
              arcu felis bibendum ut. Lacus sed turpis tincidunt id aliquet
              risus. Maecenas ultricies mi eget
            </p>
          </div>
        </section>
        <section className={styles.formSection}>
          <Form
            ref={formRef}
            className={styles.formContainer}
            onSubmit={handleSubmit}
          >
            <Input name="name" placeholder="name" icon={FiUser} />
            <Input
              name="email"
              placeholder="email"
              icon={FiMail}
              type="email"
            />
            <Input
              name="password"
              placeholder="password"
              type="password"
              icon={FiLock}
            />
            <button type="submit" className={styles.formButton}>
              Sign Up!
            </button>
          </Form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
