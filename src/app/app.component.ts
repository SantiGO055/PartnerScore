import { Component } from '@angular/core';
import { Profile, SupabaseService } from './services/supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  session = this.supabase.session

  constructor(private readonly supabase: SupabaseService) { }
  profile!: Profile;
  ngOnInit() {
    // this.supabase.getProfile().then(a => a ? this.profile = a : null)
    this.supabase.authChanges((_, session) => {

      return (this.session = session)
    })
  }

  title = 'PartnerScore';
}
