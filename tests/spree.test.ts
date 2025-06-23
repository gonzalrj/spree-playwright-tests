import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AuthPage } from '../pages/AuthPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { testUser } from '../utils/testData';

test('Spree Commerce E2E flow', async ({ page }) => {
  const home = new HomePage(page);
  const auth = new AuthPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await home.goTo();
  await expect(page).toHaveURL(/spreecommerce/);

  await home.openLoginMenu();
  await expect(page).toHaveURL(/login/);

  await auth.signUp(testUser.email, testUser.password);
  await expect(page.locator('.alert-success')).toHaveText(/Welcome/i);

  await auth.login(testUser.email, testUser.password);
  await expect(page.locator('.alert-success')).toHaveText(/Logged in/i);

  await product.browseAndSelectProduct();
  await expect(page.locator('h1')).toHaveText(/Ruby on Rails Tote/);
  await expect(page.locator('.price.selling')).toBeVisible();

  await product.addToCart();
  await expect(page.locator('.cart-item-description')).toContainText('Ruby on Rails Tote');

  await cart.goToCart();
  await expect(page).toHaveURL(/cart/);
  await expect(page.locator('input.quantity-input')).toHaveValue('1');

  await checkout.proceedToCheckout();
  await expect(page).toHaveURL(/checkout/);

  await checkout.fillShippingAddress();
  await expect(page).toHaveURL(/checkout\/delivery/);

  await checkout.selectShippingMethod();
  await expect(page).toHaveURL(/checkout\/payment/);

  await checkout.selectPaymentAndPlaceOrder();
  await expect(page.locator('h1')).toHaveText(/processed successfully/i);
  await expect(page.locator('.order-number')).not.toBeEmpty();
});