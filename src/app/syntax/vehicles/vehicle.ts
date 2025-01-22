type ApiVehicle = {
  vin: string;
  make: string;
  model: string;
  year: number;
  drivers?: string[];
};

export type Vehicle = Readonly<ApiVehicle>;

type VehicleUpdateable = Omit<ApiVehicle, 'vin'>;
type VehicleUpdateableProperties = keyof VehicleUpdateable;

export function doAllowedVehicleUpdate<
  T extends Vehicle,
  P extends VehicleUpdateableProperties,
  V extends T[P],
>(vehicle: T, prop: P, value: V): Vehicle {
  return { ...vehicle, [prop]: value };
}

// we want the user to be able to udpate only certain parts of the vehicle
// everything but the vin

export function updateVehicleMake(v: Vehicle, newMake: string) {
  // send it to the API, and then return the updated vehicle
  return doAllowedVehicleUpdate(v, 'make', newMake);
}

export function updateVehicleModel(v: Vehicle, newMake: string) {
  // send it to the API, and then return the updated vehicle
  const result = {
    ...v,
    model: newMake,
  };
  return result;
}

export function updateVehicleYear(v: Vehicle, year: number): Vehicle {
  // send it to the API, and then return the updated vehicle
  const result = {
    ...v,
    year: year,
  };
  return result;
}
