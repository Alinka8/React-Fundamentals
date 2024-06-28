import React from "react";
import  styles from "./header.module.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className="header-title">Your Name or Fictional Character</h1>
    </header>
  );
};

export default Header;
