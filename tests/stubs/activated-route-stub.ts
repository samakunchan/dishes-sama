import { Injectable } from '@angular/core';

import { convertToParamMap, ParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActivatedRouteStub {
  // Observable that contains a map of the parameters
  private subjectParamMap = new BehaviorSubject(convertToParamMap(this.getTestParamMap));
  paramMap = this.subjectParamMap.asObservable();

  private testParamMap: ParamMap;
  get getTestParamMap() {
    return this.testParamMap;
  }
  set setTestParamMap(params: {}) {
    this.testParamMap = convertToParamMap(params);
    this.subjectParamMap.next(this.testParamMap);
  }

  // Observable that contains a map of the query parameters
  private subjectQueryParamMap = new BehaviorSubject(convertToParamMap(this.testParamMap));
  queryParamMap = this.subjectQueryParamMap.asObservable();

  private testQueryParamMap: ParamMap;
  get getTestQueryParamMap() {
    return this.testQueryParamMap;
  }
  set setTestQueryParamMap(params: {}) {
    this.testQueryParamMap = convertToParamMap(params);
    this.subjectQueryParamMap.next(this.testQueryParamMap);
  }

  get snapshot() {
    return {
      paramMap: this.testParamMap,
      queryParamMap: this.getTestQueryParamMap,
    };
  }
}
