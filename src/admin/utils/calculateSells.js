const calculateSells = (data, setTotal, setGanancy, setCash, setTransfer, setCard) => {
    let total = 0;
    let cost = 0;
    let cash = 0;
    let transfer = 0;
    let card = 0;

    for (let i = 0; i < data.length; i++) {
        total = total + data[i].price;
        cost = cost + data[i].cost;

        if(data[i].method_payment == "EFECTIVO"){
            cash = cash + data[i].price;
        }
        if(data[i].method_payment == "TRANSFERENCIA"){
            transfer = transfer + data[i].price;
        }
        if(data[i].method_payment == "TARJETA"){
            card = card + data[i].price;
        }
    }

    setTotal(total);
    setGanancy(total - cost);
    setCash(cash);
    setTransfer(transfer);
    setCard(card);
}

export default calculateSells;