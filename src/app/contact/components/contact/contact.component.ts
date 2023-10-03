import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactForm!: FormGroup;
  emailCtrl!: FormControl;
  descriptionCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    // this.initFormControl();
    // this.initContactForm()
  }

  // initFormControl(){
  //   this.emailCtrl = this.formBuilder.control('', [Validators.required, Validators.email]);
  //   this.descriptionCtrl = this.formBuilder.control('', Validators.required)
  // }

  // initContactForm(){
  //   this.contactForm = this.formBuilder.group({
  //     email: this.emailCtrl,
  //     description: this.descriptionCtrl
  //   },
  //   {
  //     updateOn: 'blur'
  //   });
  // }

  // onSubmit(){
  //   if (this.contactForm.valid) {

  //     this.contactForm.reset();
  //   }
  // }

  // getFormControlError(ctrl: AbstractControl) {
  //   if (ctrl.hasError('required')) {
  //     return 'Ce champ est requis'
  //   } else if (ctrl.hasError('email')) {
  //     return 'Cette email n\'est pas valide'
  //   } else {
  //     return 'Ce champ contient une erreur'
  //   }
  // }
}
