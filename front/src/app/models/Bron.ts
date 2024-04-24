export interface Bron { 
    id: number; 
    name: string; 
    phoneNumber: string; 
    date: string; // You might need to use the Date type 
    guestCount: number; 
    preferences?: string; // Preferences are optional 
  }