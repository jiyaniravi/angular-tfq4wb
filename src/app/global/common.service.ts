import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {}
  
  isUndefinedNullEmptyString(obj) {
    if(!obj || (obj instanceof String && obj === '')){
      return true;
    }
  }
}