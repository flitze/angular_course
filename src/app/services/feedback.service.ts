import { Injectable } from '@angular/core';
import { Feedback, ContactType } from '../shared/feedback';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { baseURL } from '../shared/baseurl';
import { Restangular, RestangularModule } from 'ngx-restangular';

@Injectable()
export class FeedbackService {

  allFeedbacks: Feedback;
  postedFeedback: Feedback;

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(newFeedback: Feedback): Observable<Feedback> {
    // Create Feedback Object
    let feedback = this.restangular.all('feedback');
    
    return feedback.post(newFeedback);
  }
}
