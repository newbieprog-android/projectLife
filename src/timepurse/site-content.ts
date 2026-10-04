/** Set to true only after the public Google Play listing is confirmed live. */
export const GOOGLE_PLAY_LIVE = true;
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.projectlifebycv.timetag";

/** Add uploaded, authentic Android screenshots here in display order. Never use mock screens. */
const home = { url: "/timepurse/assets/01-home.webp" };
const purchase = { url: "/timepurse/assets/02-purchase-detail.webp" };
const insights = { url: "/timepurse/assets/03-insights.webp" };
const wishlist = { url: "/timepurse/assets/04-wishlist-cost.webp" };
const history = { url: "/timepurse/assets/05-history-wishlist.webp" };

export const screenshots: { src: string; alt: string; caption: string }[] = [
  { src: home.url, alt: "timePurse home screen showing monthly spending, pay rate, and recent purchases with their cost in time", caption: "Your spending at a glance" },
  { src: purchase.url, alt: "Purchase detail for groceries showing a $50 price and its equivalent of 2.2 hours of work", caption: "See the time behind a purchase" },
  { src: insights.url, alt: "Insights screen showing monthly hours, daily average, category breakdown, and weekly spending trend", caption: "Notice your spending patterns" },
  { src: wishlist.url, alt: "New wishlist entry for headphones showing a $100 price, 4.3 hours of work, and an Add to Wishlist action", caption: "Think before you buy" },
  { src: history.url, alt: "History and Wishlist screen listing headphones as a wishlist item alongside recent purchases", caption: "Keep wishes separate from spending" },
];
