import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
baseUrl = environment.baseUrl;
constructor(private http : HttpClient) { }

getServices(start:any, end: any){
  return this.http.get(this.baseUrl+ "/v1/api/Provider/GetServices?start="+start+"&end="+end)
}

getProviderInformation(){
  return this.http.get(this.baseUrl+"/v1/api/Provider/GetProviderInformation");
}

addService(data:any) {
return this.http.put(this.baseUrl+"/v1/api/Provider/AddService", data)
}


}
