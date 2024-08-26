import Page from "./page";
import { $, expect,browser } from '@wdio/globals';

class Halaman_keranjang extends Page {

    get cartItems() {
        return $$('.cart_item'); 
    }

    get checkoutButton() {
        return $('#checkout'); 
    }

    get removeButtons() {
        return $$('.cart_button'); 
    }

    async open() {
        return super.open("cart.html");
    }

    async validateOnHalamanKeranjang() {
        await expect(this.cartItems).toBeElementsArrayOfSize({gte: 1}); 
        await expect(this.checkoutButton).toBeExisting(); 
        await browser.pause(5000)
    }
}

export default new Halaman_keranjang();
