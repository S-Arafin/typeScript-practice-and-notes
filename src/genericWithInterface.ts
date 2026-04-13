interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    year: number;
  };
  smartWatch: T;
  bike? : X;
}

interface poorBike<T,X> {
    Model: T;
    engneen: X;
}


const richdev: Developer<{
  heartRate: string;
  stop: boolean;
}
> = {
  name: "Mr.poor",
  salary: 12000,
  device: {
    brand: "lenovo",
    model: "yoga",
    year: 2020,
  },
  smartWatch: {
    heartRate: "20",
    stop: true,
  },
  
};