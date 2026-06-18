import React from "react";
import styles from "./styles.module.css"
// 1. Criamos o "contrato" do componente
type HeadingProps = {
  children: React.ReactNode; // Inicialmente, dizemos que children será apenas texto
};

// 2. Aplicamos o tipo ao parâmetro da função (props: HeadingProps)
export function Heading({children}: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}