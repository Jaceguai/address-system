export interface AddressType {
  id:number
  fullName: string;      
  mobilePhone: string;  
  addressLine: string;   
  region: 'NORDESTE' | 'SUDESTE';       
  state: 'SP' | 'RJ' | 'PB';         
  city: string;           
  zipCode: string;        
  addressLabel: 'casa' | 'trabalho'; 
}