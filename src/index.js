import './styles.css';

const ShipFactory = ((length) => {
    let ShipArray = [];

    const getLength = () => length

    function isSunk(){
        let sunk = true;
        for(let i = 0; i <= ShipArray.length; i++){
            if(ShipArray[i].isHit == false){
                sunk = false;
            }
        }
        return sunk;
    }

    const getShipArray = () => ShipArray

    function placeShip(coordinates, orientation){
        for(let i = 0; i < length; i++){
            if(orientation == "horizontal"){
                ShipArray[i] = {coord: [coordinates[0] + i, coordinates[1]], isHit: false}
            }
            else{
                ShipArray[i] = {coord: [coordinates[0], coordinates[1] + i], isHit: false}
            }
        }
    }
    function hit(coordinates){
        for(let i = 0; i <= ShipArray.length; i++){
            if(ShipArray[i][coord] = coordinates){
                ShipArray[i][isHit] = true;
            }
        }
    }
    return{ getLength, getShipArray, placeShip, isSunk, hit }
});

export { ShipFactory }