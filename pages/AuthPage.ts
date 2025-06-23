import { Page } from '@playwright/test';

export class AuthPage {
  constructor(private page: Page) {}

  async signUp(email: string, password: string) {
    await this.page.click('a[href="/signup"]');
    await this.page.fill('#spree_user_email', email);
    await this.page.fill('#spree_user_password', password);
    await this.page.fill('#spree_user_password_confirmation', password);
    await this.page.click('input[name="commit"]');
  }

  async login(email: string, password: string) {
    await this.page.fill('#spree_user_email', email);
    await this.page.fill('#spree_user_password', password);
    await this.page.click('input[name="commit"]');
  }
}