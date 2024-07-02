export interface Product {
    id: number;
  name: string;
  company?: string |undefined;
  img: { url: string, alt: string }[];
  details: string;
  mrp: number;
  price: number;
  discount: number;
  rating: number;
}

export interface Categories {
  Surveillance: Product[];
  Access_Control_Lock: Product[];
  INTERCOM_PABX: Product[];
  Smart_Home_Automation: Product[];
  WIFI_CAMERA_STAND_ALONE_SYSTEM: Product[];
  GPS_TRACKER: Product[];
  ROUTER: Product[];
  NETWORKING_AND_PERIPHERAL: Product[];
  Security_Alarm_System: Product[];
  Cable_Convertor_Connector: Product[];
  Signal_Booster: Product[];
  TOOLS_AND_CLIP_PIN_TAPE: Product[];
  ROBOTICS: Product[];
  Spy_Micro_Hidden_Camera: Product[];
  Public_Parking_Management: Product[];
  Mixed: Product[];
}