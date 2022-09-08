import React from "react";
import styles from "../styles/index.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  const logoVariants = {
    initial: {},
    animate: {},
    exit: {
      y: -100,
      transition: {
        ease: [0.165, 0.84, 0.44, 1],
        duration: 2.5,
        delay: 0.4,
      },
    },
  };

  const backgroundVariants = {
    initial: {},
    animate: {},
    exit: {
      y: "-100vh",
      transition: {
        ease: [0.77, 0, 0.175, 1],
        duration: 1.2,
      },
    },
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.text}>BRAND</span>
        <span className={styles.reservedSign}>&reg;</span>
      </div>
      <nav className={styles.nav}>
        <a href={"#"}>The Duffle</a>
        <a href={"#"}>About</a>
        <a href={"#"}>Contact</a>
      </nav>
      <button className={styles.orderButton}>ORDER - $100</button>
    </header>
  );
};

export default Header;
