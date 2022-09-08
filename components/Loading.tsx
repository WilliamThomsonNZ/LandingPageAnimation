import React from "react";
import styles from "../styles/index.module.scss";
import { motion } from "framer-motion";

const Loading = () => {
  const logoVariants = {
    initial: {},
    animate: {},
    exit: {
      y: -100,
      transition: {
        ease: [0.5, 0, 0.88, 0.77],
        duration: 0.5,
        delay: 0.2,
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
    <>
      <motion.div
        className={styles.loadingContainer}
        variants={backgroundVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
      ></motion.div>
      <div className={styles.titleContainer}>
        <motion.div
          className={styles.innerContainer}
          variants={logoVariants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <span className={styles.title}>BRAND</span>
          <span className={styles.reservedSign}>&reg;</span>
        </motion.div>
      </div>
    </>
  );
};

export default Loading;
