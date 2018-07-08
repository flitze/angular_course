import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { FeedbackService } from '../services/feedback.service';
import { flyInOut } from '../animations/app.animation';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  postedFeedback: Feedback;
  showFormData: Boolean;
  contactType = ContactType;

  constructor(private fb: FormBuilder,
    private feedbackService: FeedbackService) {
    this.createForm();
    this.showFormData = false;
   }

  ngOnInit() {
  }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern ] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: 'false',
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'Firstname is required',
      'minlength': 'Firstname must be at least 2 Characters long',
      'maxlength': 'Firstname must be at least 25 Characters long',
    },
    'lastname': {
      'required': 'Lastname is required',
      'minlength': 'Lastname must be at least 2 Characters long',
      'maxlength': 'Lastname cannot be more than 25 Characters long'
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    }
  }

  showFeedbackSuccess () {
    setTimeout(() => {
      this.showFormData = false;
    }, 5000);
  };

  onSubmit() {
    this.postedFeedback = this.feedbackForm.value;
    //console.log(this.feedbackForm.value);
    this.feedbackService.submitFeedback(this.postedFeedback)
      .subscribe(feedback => {this.feedback = feedback; console.log("async feedback: " + this.feedback.firstname); });
    
    this.showFormData = true;
    this.showFeedbackSuccess();
    /*this.feedback
      .subscribe(this.postedFeedback => this.feedbackService.submitFeedback(this.postedFeedback));*/
    console.log("test: " + this.feedback);
    
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: 'false',
      contacttype: 'None',
      message: ''
    });
  }

}
