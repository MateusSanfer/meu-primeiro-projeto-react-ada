// import { useState } from "react";
// import styles from './button.module.css'
// export default function MeuContador() {
//     const [contador, setContador] = useState(0)

//     function aumentar() {
//         setContador(contador + 1)

//     }

//     return (
//       <div className="container">
//         <h1>Meu Contador: </h1>
//         <h3>{contador}</h3>
//         <button className={styles.myButton} onClick={aumentar}>aumentar</button>
//       </div>
//     )
//   }

import { useState } from "react";
import styles from './button.module.css'

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }
  function diminuir() {
    setContador(contador - 1);
  }

  if (contador > 5) {
    return (
      <div className="container">
        <h1>Valor muito alto {contador}</h1>
          <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
          <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
      </div>
    )
  }else if(contador < -5){
    return (
      <div className="container">
        <h1>Valor muito baixo {contador}</h1>
          <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
          <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Meu Contador: {contador}</h1>
      <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
          <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
    </div>
  );
}
