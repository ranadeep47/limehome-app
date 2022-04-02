export interface Root {
  message: string;
  success: boolean;
  payload: LimeHome[];
}

export interface LimeHome {
  id: number;
  external_id: string;
  review_widget_id?: string;
  name: string;
  city: string;
  city_id: number;
  street: string;
  location: Location;
  distance: number;
  images: Image[];
  lowest_price_per_night: any;
  lowest_price_per_month: any;
}

export interface Location {
  lat: number;
  lng: number;
  city: string;
  postalCode: string;
  countryCode: string;
  addressLine1: string;
  countryName: string;
}

export interface Image {
  url: string;
  is_portrait: boolean;
  position: number;
  unit_group_ids: number[];
  tags: string[];
}

export interface LimeHomeDetail {
  id: number;
  external_id: string;
  review_widget_id: any;
  name: string;
  city: string;
  city_id: number;
  street: string;
  location: Location;
  distance: number;
  description: string;
  additional_services: any;
  parking: string;
  things_to_know: string;
  house_rules: string;
  images: Image[];
  lowest_price_per_night: any;
  lowest_price_per_month: any;
  default_check_in_time: string;
  default_check_out_time: string;
  unit_groups: UnitGroup[];
}

export interface UnitGroup {
  id: number;
  title: string;
  description: string;
  custom_title: string;
  external_id: string;
  name: string;
  max_guests: number;
  rental_type: string;
  lowest_price_per_night: any;
  lowest_price_per_month: any;
  spaces: Space[];
  amenities: Amenity[];
  images: Image2[];
}

export interface Space {
  icon: string;
  name: string;
  name_plural: string;
  slug: string;
  value: number;
}

export interface Amenity {
  icon: string;
  name: string;
}

export interface Image2 {
  url: string;
  is_portrait: boolean;
  position: number;
}
