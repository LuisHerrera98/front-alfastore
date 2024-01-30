import React from "react";
import "./sectionSellsDay.css";
import { useState } from "react";
import { useEffect } from "react";
import fetchSells from "../../utils/fetchSells";
import CreateSell from "../Modals/CreateSell";
import Icon from "./images/alfastore-icon.png";

const SectionSellsDay = ({ date }) => {
  const [sells, setSells] = useState([]);
  const [total, setTotal] = useState("");
  const [ganancy, setGanancy] = useState("");
  const [cash, setCash] = useState("");
  const [transfer, setTransfer] = useState("");
  const [card, setCard] = useState("");

  useEffect(() => {
    fetchSells(
      setSells,
      date,
      setTotal,
      setGanancy,
      setCash,
      setTransfer,
      setCard
    );
  }, []);

  return (
    <div className="section-sells-day">
      <h3>Ventas del {date}</h3>
      {sells.map((sell) => (
        <div key={sell._id} className="box-sell">
          <div className="box-image">
            {sell.image ? (
              <img src={`${sell.image}`} alt="erro de carga" />
            ) : (
              <img
                src={Icon}
                alt="Imagen alternativa"
              />
            )}
          </div>
          <div className="box-data">
            <div className="box-name-size">
              <p className="box-name-sell">{sell.name}</p>
              <p className="box-size-sell">ㅤ{"-->"}ㅤ</p>
              <p>{sell.size_name}</p>
            </div>
            <div className="box-category-hour">
              <p>CATEGORIAㅤ</p>
              <p className="box-arrox-red">{"-->"}ㅤ</p>
              <p>{sell.category_name}</p>
              <p className="hour-sell">Hora {sell.date_hour}</p>
            </div>
            <div className="box-method-payment">
              <p>METODO DE PAGOㅤ</p>
              <p className="box-arrox-red">{"-->"}ㅤ</p>
              <p className={`box-method-${sell.method_payment}`}>
                {sell.method_payment}
              </p>
            </div>
              {sell.cost ? (
              <div className="box-cost-price">
              <p className="box-ganancy">Costoㅤ</p>
              <p className="box-cost-sell"> ${sell.cost}ㅤ</p>
              <p className="box-ganancy">Gananciaㅤ</p>
              <p className="box-ganancy-sell">${sell.price - sell.cost}</p>
              <p className="box-price-sell">${sell.price}</p>
            </div>
            ) : (
                <div className="box-cost-price">
                
               
               
                <p className="box-price-sell">${sell.price}</p>
              </div>
            )}
            
          </div>
        </div>
      ))}
      <div className="box-totals">
        <p className="p-cash">Efectivo {cash}</p>
        <p className="p-transfer">Transferencia {transfer}</p>
        <p className="p-card">Tarjeta {card}</p>
      </div>
      <div className="box-totals-info">
        {/* <p className='p-ganancy'>Ganancia {ganancy}</p> */}
        <p className="p-total">Total ${total}</p>
      </div>

      <CreateSell />
    </div>
  );
};

export default SectionSellsDay;
