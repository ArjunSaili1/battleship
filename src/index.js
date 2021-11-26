import './styles.css';

const ShipFactory = ((length) => {
    let ShipArray = makeShip();

    function isSunk(){
        let sunk = true;
        for(let i = 0; i < ShipArray.length; i++){
            if(ShipArray[i].isHit == false){
                sunk = false;
            }
        }
        return sunk;
    }

    const getShipArray = () => ShipArray

    function makeShip(){
        let tempShipArray = []
        for(let i = 0; i < length; i++){
            tempShipArray[i] = {position: i, isHit: false}
        }
        return tempShipArray;
    }
    
    const getLength = () => length

    function hit(hitPosition){
        for(let i = 0; i <= ShipArray.length; i++){
            if(i == hitPosition){
                ShipArray[i].isHit = true;
            }
        }
    }
    return{getShipArray, isSunk, hit, getLength}
});

export { ShipFactory }