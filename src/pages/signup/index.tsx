import Head from "next/head";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { SubmitHandler, FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useRouter } from "next/router";
//
import Input from "../../components/Input";
//
import styles from "./styles.module.css";
import React, { useCallback, useRef } from "react";

interface FormData {
  user: string;
  email: string;
  password: string;
}

const SignUp: React.ReactNode = ({ children }) => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const handleSubmit: SubmitHandler<FormData> = useCallback(async (data) => {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required("Email obrigatório").email(),
        user: Yup.string().required("Usuário obrigatório"),
        password: Yup.string().min(6, "Mínimo de seis dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      router.push("/");
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
  }, []);
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
            <Input name="user" placeholder="user" icon={FiUser} />
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
              Enviar
            </button>
          </Form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
