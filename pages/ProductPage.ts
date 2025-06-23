import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async browseAndSelectProduct() {
    await this.page.click('a[href="/products/ruby-on-rails-tote"]');
  }

  async addToCart() {
    await this.page.click('button[name="add-to-cart-button"]');
  }
}