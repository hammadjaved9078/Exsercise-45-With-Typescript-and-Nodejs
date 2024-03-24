"use strict";
function storeCarInfo(manufacture, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
const car = storeCarInfo('Honda', 'Civic', { color: 'Red' }, { fearures: ['navigation', 'Sunroof'] });
console.log(car);
