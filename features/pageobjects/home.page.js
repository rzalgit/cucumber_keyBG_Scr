import Page from "./page";
import { $, expect } from '@wdio/globals';

class HomePage extends Page {
    get iconCart() {
        return $('#shopping_cart_container');
    }

    get addButtonCart() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get gambar() {
        return $('#item_4_img_link');
    }

    get checkoutpage(){
        return $ 
    }

    async validateOnHalamanHome() {
        await expect(this.iconCart).toBeExisting();
        await expect(this.addButtonCart).toBeExisting();
        await expect(this.gambar).toBeExisting();
    }

    async addItemToCart() {
        const addButton = await this.addButtonCart;
        await addButton.waitForExist({ timeout: 5000 });
        await addButton.click();
    }

    async goToCart() {
        const cart = await this.iconCart;
        await cart.waitForExist({ timeout: 5000 });
        await cart.click();
    }

    async validateOnCheckoutPage() {
        await expect(this.iconCart).toBeExisting();
        await browser.pause(5000); // Berhenti selama 10 detik
    }

    open() {
        return super.open("inventory.html");
    }
}

export default new HomePage();
