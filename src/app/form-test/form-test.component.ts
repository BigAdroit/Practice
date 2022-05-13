import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { passwordCheck } from './passValidator';


@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  public filename : string = "" 
  public content : string = ""
  public extension : string = ""
  public uploadedFileName : string = ""
  public uploadedFileContent : string = ""

  // creating a getter for the alternate email
  get alternateEmail(){
    return this.regForm.get('alternateEmail') as FormArray
  }

  // creating a function to call the getter abnd add to the form array
  addAlternateEmail(){
    this.regForm.get('alternateEmail').push(this.fb.control(''))
  }
  constructor(private fb : FormBuilder ) { }
  regForm! : any
  emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  passwordPattern : string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$"
  postalPattern : string = "^[0-9]{6,}"
  ngOnInit(): void {
    
    this.regForm = this.fb.group({
      userName :['', [Validators.required, Validators.minLength(3)]],
      email : ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password : ['', [Validators.required, Validators.pattern(this.passwordPattern)], ],
      cpass : [''],
      pmail : [''],
      offer : [false],
      address : this.fb.group({
        state : [''],
        postalcode : ['',[Validators.required, Validators.pattern(this.postalPattern)]],
        street : [''],
        alternateEmail :this.fb.array([])
      })
    },{validator : passwordCheck})  
    
    this.regForm.get('offer').valueChanges.subscribe((valueChnaged:boolean) =>{ 
        const pmail = this.regForm.get('pmail')
        if(valueChnaged) {
          pmail.setValidators([Validators.required, Validators.pattern(this.emailPattern)])
        }else {
          pmail.clearValidators()
        }
        pmail.updateValueAndValidity()
    })
  }

  loadData() {
    this.regForm.patchValue({
      userName : "Seyi",
      email : "seyi@gmail.com",
      address :({
        state: "Ogun state",
        postalcode : "1234",
        street: "dosunmu close"
      })
    })
  }

  onSave() {
    let fileName = `${this.filename}.${this.extension}`
    let fileContent = this.content

    const file =new Blob([fileContent], {type :"text/plain"})
    const link = document.createElement("a")
    link.href = URL.createObjectURL(file)
    link.download= fileName
    link.click()
    link.remove()
  }

  async onFileSelect(event: any){
    const fila : any = event.target.files[0];
    this.uploadedFileName = fila.name;
    this.uploadedFileContent = await fila.text()
  }
}