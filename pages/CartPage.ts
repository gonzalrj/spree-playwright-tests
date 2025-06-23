import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async goToCart() {
    await this.page.click('a[href="/cart"]');
  }
}