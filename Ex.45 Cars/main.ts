function cars(Manufacturer: string, ModelName: string, ...More: { [Key: string]: any }[]): object 
{
    const car = 
    {
        Manufacturer,
        ModelName,...Object.assign({}, ...More)
    };
    return car;
}

 let Car = cars('BUGATTI',' Centodieci 1st Generation',{Color: 'White'}, 
 {Drivetrain_Feature: 'AWD'},{Transmission_Feature: 'Automatic (Dual-clutch), 7-speed'});
console.log(Car);