// importing stylesheet 
import "/src/css/style.css";

// grabbing stuff ...
const inputAmount = document.getElementById("inputAmount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const balanceFromDom = document.getElementById("balanceFromDom");
const msgFromDom = document.getElementById("msgFromDom");
const msgBox = document.querySelector(".msg-box");

// grabbing imaginary elements which probably doesn't exists
const meta_theme_tag = document.querySelector(`meta[name="theme-color"]`);
const title_tag = document.querySelector("head title");
const favicon_link_tag = document.querySelector(`link[rel="icon"]`);
const ios_status_bar = document.querySelector(
	`meta[name="apple-mobile-web-app-status-bar-style"]`
);

// importing helper functions 
import {
	injectMetaThemeTag,
	injectTitle,
	injectFavicon,
	injectIosStatusBar
} from "./lib/injections.js";

// importing constants
import {
	theme_color,
	new_title,
	faviconProps,
	icon_path
} from "./constants/index.js";

// injeting necessary shits 
(() => {
	injectMetaThemeTag(meta_theme_tag, theme_color);
	injectTitle(title_tag, new_title);
	injectFavicon(favicon_link_tag, faviconProps);
	injectIosStatusBar(ios_status_bar, theme_color);
})();


class Bank {
	constructor(balance) {
		this.balance = balance;
	}

	deposit(amount) {
		this.balance += amount;
		msgFromDom.innerText = `Have a nice day!!!!`;
		msgFromDom.style.color = `#fff`;
	}

	withdraw(amount) {
		// guard clause ...
		if (this.balance - amount < 0) {
			msgFromDom.innerText = `What a stupid piece of shit....`;
			msgFromDom.style.color = `#f00`;
			return;
		} else {
			msgFromDom.innerText = `Have a nice day!!!!`;
			msgFromDom.style.color = `#fff`;
		}
		this.balance -= amount;
	}
}

const user = new Bank(100);

balanceFromDom.innerText = user.balance;

depositBtn.addEventListener("click", () => {
    user.deposit(Number(inputAmount.value));
	balanceFromDom.innerText = user.balance;
	inputAmount.value = "";
});


withdrawBtn.addEventListener("click", () => {
    user.withdraw(Number(inputAmount.value));
	balanceFromDom.innerText = user.balance;
	inputAmount.value = "";
});
