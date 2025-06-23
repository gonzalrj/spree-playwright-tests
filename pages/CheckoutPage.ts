import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async proceedToCheckout() {
    await this.page.click('a[href="/checkout"]');
  }

  async fillShippingAddress() {
    await this.page.fill('#order_email', 'testuser@example.com');
    await this.page.fill('#order_bill_address_attributes_firstname', 'Test');
    await this.page.fill('#order_bill_address_attributes_lastname', 'User');
    await this.page.fill('#order_bill_address_attributes_address1', '123 Main St');
    await this.page.fill('#order_bill_address_attributes_city', 'New York');
    await this.page.selectOption('#order_bill_address_attributes_state_id', 'NY');
    await this.page.fill('#order_bill_address_attributes_zipcode', '10001');
    await this.page.fill('#order_bill_address_attributes_phone', '1234567890');
    await this.page.click('input[name="commit"]');
  }

  async selectShippingMethod() {
    await this.page.click('input[type="radio"]');
    await this.page.click('input[name="commit"]');
  }

  async selectPaymentAndPlaceOrder() {
    await this.page.click('input[type="radio"]');
    await this.page.click('input[name="commit"]');
  }
}