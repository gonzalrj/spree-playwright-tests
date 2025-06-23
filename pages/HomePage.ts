import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('/');
  }

  async openLoginMenu() {
    await this.page.locator('a[href="/login"] >> nth=0').click();
  }
}