import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) { }

  loading = false

  // signInForm = this.formBuilder.group({
  //   email: '',
  // })
  ngOnInit(): void { }

  async onSubmit() {
    try {
      this.loading = true
      // const email = this.signInForm.value.email as string
      const returned = await this.supabase.signInWithGoogle()
      console.log(returned.data)
      console.log(returned.error)
      // if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

}
