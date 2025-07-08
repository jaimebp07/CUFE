import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CufeService } from '../../services/cufe.service';
import { CufePayload, ResultCufe } from '../../../../core/models/cufe.model';

const decimalValidator = Validators.pattern(/^\d+\.\d{2}$/);
const numericValidator = Validators.pattern(/^\d+$/);

@Component({
  selector: 'app-register-bill',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './register-bill.component.html',
  styleUrl: './register-bill.component.scss',
  providers: [CufeService]
})
export class RegisterBillComponent implements OnInit {

  cufeForm!: FormGroup ;
  resultCufe: ResultCufe | undefined;
  
  constructor(
    private fb: FormBuilder, 
    private cufeService: CufeService
  ) { }
  
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.cufeForm = this.fb.group({
      numFac: ['', Validators.required],
      fecFac: ['', Validators.required],
      horFac: ['', Validators.required],
      valFac: ['', [Validators.required, decimalValidator]],
      vallmp1: ['', [Validators.required, decimalValidator]],
      vallmp2: ['', [Validators.required, decimalValidator]],
      vallmp3: ['', [Validators.required, decimalValidator]],
      valTot: ['', [Validators.required, decimalValidator]],
      nitFE: ['', [Validators.required, numericValidator]],
      numAdq: ['', [Validators.required, numericValidator]],
      ciTec: ['', Validators.required],
      tipoAmbiente: ['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
    });
  }

  submit() {
    if (this.cufeForm.valid) {
      const values = this.cufeForm.value;
      const payload: CufePayload = {
        ...values,
        codimp1: '01',
        codimp2: '04',
        codimp3: '03'
      };
     this.cufeService.generarCufe(payload).subscribe(res => this.resultCufe = {cufe:res.cufe});
    }
  }
}
