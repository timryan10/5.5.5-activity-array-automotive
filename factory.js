class Factory{
    constructor(location, owner){
        this.location = location
        this.owner = owner
        this.vehicles = []
}
createVehicle(vehicle){
    this.vehicles.push(vehicle)
}
listVehicles(){
    return this.vehicles
}
paintVehicle(vin, paintColor){
    let vIndex = this.vehicles. findIndex(v => v.vin === vin)
    this.vehicles[vIndex].paint(paintColor)
}
    }