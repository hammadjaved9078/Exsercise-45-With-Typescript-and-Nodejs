function storeCarInfo(manufacture: string, modelName: string, ...extraOption: {[key : string]: any }[] ):
object {
    const carInfo ={
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return carInfo

};

const car = storeCarInfo('Honda','Civic', {color:'Red'},{fearures: ['navigation', 'Sunroof' ]});
console.log(car);
