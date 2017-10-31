import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()

export class Service{

    infoObject:any;
        constructor(private http: Http){
	}

    private url:string = "http://10.193.74.111:5000/";

   getResponse(body: Object) : Observable<any> {

        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option


         return this.http.post(this.url, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
      

     }

     loadJson():Observable<any>{
         return this.http.get("assets/json/test-data.json")
         .map(res => res.json())
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
     setInfoObject(dataObject:any){
         this.infoObject = dataObject;
     }

     getInfoObject(){
         return this.infoObject;
     }

}