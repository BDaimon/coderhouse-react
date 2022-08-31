import { useState } from "react";
import "../App.css";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const suma = () => {
    setContador(contador + 1);
  };
  const resta = () => {
    setContador(contador - 1);
  };
  return (
   

      <div className="suma-resta">
        <button onClick={resta}>-</button>
        <p className="cifra">{contador}</p>
        <button onClick={suma}>+</button>
      </div>

  );
};

export default Contador;
