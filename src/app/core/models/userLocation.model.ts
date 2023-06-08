export interface UserLocation {
  city: string;
  state: string;
  postcode: number;
  country: string;
  timezone: UserTimezone;
  street: UserStreet;
  coordinates: UserCoordinates;
}

interface UserTimezone {
  description: string;
  offset: string;
}

interface UserStreet {
  number: number;
  name: string;
}

interface UserCoordinates {
  latitude: string;
  longitude: string;
}
