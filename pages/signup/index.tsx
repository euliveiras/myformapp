import Head from "next/head";
//
import styles from "./signUp.module.css";

const SignUp = () => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon.png"
        />
        <title>myFormApp</title>
      </Head>
      <main className={styles.mainContent}>
        <section className={styles.textSection}>
          <div className={styles.textContainer}>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
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
          <div className={styles.formContainer}>
            <form>
              <input name="name"></input>
              <input name="email"></input>
              <input name="password"></input>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;
