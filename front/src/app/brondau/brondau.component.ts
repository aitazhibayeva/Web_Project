import { Component } from '@angular/core'; 
//import { ApiService } from '../api.service'; 
@Component({ 
  selector: 'app-brondau', 
  templateUrl: './brondau.component.html', 
  styleUrl: './brondau.component.css' 
}) 
export class BrondauComponent { 
  showDateGuestPicker: boolean = false; 
  guests: number = 1; 
  name: string = ''; 
  phoneNumber: string = ''; 
  wishes: string = ''; 
 
/*constructor(private apiService: ApiService) {} // Инжектируем сервис 
 
  sendData() { 
    const data = { 
      name: this.name, 
      phoneNumber: this.phoneNumber, 
      date: 'your_date', 
      guestsCount: this.guests, 
      wishes: this.wishes 
    }; 
 
    this.apiService.sendData(data).subscribe( 
      (response) => { 
        console.log('Data successfully sent:', response); 
      }, 
      (error) => { 
        console.error('Error sending data:', error); 
      } 
    ); 
  } 
 */
  openDateGuestPicker() { 
    this.showDateGuestPicker = true; 
  } 
 
  decreaseGuests() { 
    if (this.guests > 1) { 
      this.guests--; 
    } 
  } 
 
  increaseGuests() { 
    if (this.guests < 10) { 
      this.guests++; 
    } 
  } 
}