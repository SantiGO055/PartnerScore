import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  OAuthResponse,
  Session,
  SupabaseClient,
  User
} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  profile(user?: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user?.id)
      .single()
  }
  changes: Profile = {
    username: '',
    website: '',
    avatar_url: ''
  };
  handleChanges = ((payload: any) => {
    console.log(payload.new)
    const { username, website, id, avatar_url } = payload.new

    this.changes.avatar_url = avatar_url;
    this.changes.username = username;
    this.changes.website = website;
    this.changes.id = id;
  });
  async getChangesProfile() {

    return await this.supabase
      .channel('custom-all-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, this.handleChanges
      ).subscribe();
  }


  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signInWithEmail(email: string) {
    return this.supabase.auth.signInWithOtp({ email })
  }
  async signInWithGoogle(): Promise<OAuthResponse> {

    return await this.supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    // console.log(data)
    // console.log(error)
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update)
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }

  async getProfile(): Promise<Profile | null> {
    try {

      let { data: profile, error, status } = await this.profile(this.session?.user)
      console.log(profile)
      if (error && status !== 406) {
        throw error
      }

      return profile;
    } catch (error) {
      if (error instanceof Error) {

      }
      var errorA: Profile = {
        username: "error",
        website: "error",
        avatar_url: "error"
      };
      return errorA;
    }
  }
}
