import Head from "next/head";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
//
import Input from "../../components/Input";
//
import styles from "./styles.module.css";

const SignUp = () => {
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
          <form className={styles.formContainer}>
            <Input name="name" placeholder="name" icon={FiUser} />
            <Input name="email" placeholder="email" icon={FiMail} />
            <Input name="password" placeholder="password" icon={FiLock} />
            <button>Sign Up!</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
