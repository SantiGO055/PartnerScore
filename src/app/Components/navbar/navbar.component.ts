import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthSession } from '@supabase/supabase-js';
import { SenderServiceService } from 'src/app/services/sender-service.service';
import { Profile, SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  profileModified!: Profile;

  constructor(
    private supabase: SupabaseService,
    private router: Router,
    private senderService: SenderServiceService
  ) {

    // .then(a => console.log("queonda", a))
    this.supabase.getChangesProfile()
    this.profileModified = this.supabase.changes
    // this.senderService.variable2 = this.profileModified

  }

  goToProfile() {
    this.router.navigate(['/profile-component'])
  }
  goToHome() {
    this.router.navigate(['/'])
  }
  async ngOnInit() {
    this.senderService.variable1 = this.session
    await this.supabase.getProfile().then(profile => {
      if (profile)
        this.profile = profile;
    })





  }
  @Input()
  session!: AuthSession

  @Input()
  profile!: Profile;


}
