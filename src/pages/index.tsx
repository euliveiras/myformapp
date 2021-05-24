import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import Link from "next/link";
import * as Yup from "yup";
import React, { useCallback, useRef } from "react";
import { FiLock, FiUser } from "react-icons/fi";
//
import Input from "../components/Input";
import api from "../api";
//
import styles from "../styles/root.module.css";

interface FormData {
  user: string;
  password: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = useCallback(async (data) => {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        user: Yup.string().required("Nome obrigatório"),
        password: Yup.string().min(6, "Mínimo de seis dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      const response = await api.get("/");
      console.log(response);
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
    <main className={styles.mainContent}>
      <section className={styles.formSection}>
        <Form
          ref={formRef}
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
          <Input name="user" placeholder="user" icon={FiUser} />
          <Input
            name="password"
            placeholder="password"
            type="password"
            icon={FiLock}
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.formButton}>
              Entrar
            </button>
            <span>or</span>
            <Link href="/signup">
              <button className={styles.formButton}>Cadastrar</button>
            </Link>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default Home;
