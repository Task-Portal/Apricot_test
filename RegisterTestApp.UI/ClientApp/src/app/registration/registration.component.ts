import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class Registration {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  model = new RegistrationModel();
  error = false
  save = () => {

    let ageInMilliseconds =  new Date().getTime() - new Date(this.model.birthday).getTime();
    let years = Math.floor(ageInMilliseconds/1000/60/60/24/365)

    if (years<18){
      this.error = true
    }else{
      let temp  = this.model.phoneNumbers;
      this.model.phoneNumbers = this.model.phoneNumbers.map(s=>s.replace(/\D/g, '').substring(0,10))
      this.http.post<RegistrationModel>(this.baseUrl + 'register', this.model).subscribe(result => {
        console.log(result);
      }, error => console.error(error));
      this.error=false
      this.model.phoneNumbers = temp
    }

  }
  addPhone = () => {
    this.model.phoneNumbers.push('');
  }
  removePhone = (index: number) => {
    this.model.phoneNumbers.splice(index, 1);
  }
  trackByIndex = (index: number, obj: any): any => index;
}

class RegistrationModel {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  birthday: Date = new Date;
  phoneNumbers: string[] = [''];
}
