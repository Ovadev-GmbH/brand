# Payment method logos

One set, one shape: every logo is a 120 × 80 tile (`viewBox="0 0 120 80"`),
so cards, wallets and local methods line up in a row at any size. Use them
as `<img>` at a fixed height (e.g. 20 px high, 30 px wide) and never mix in
logos from elsewhere.

| Folder | What |
| --- | --- |
| `cards/` | Card schemes: Visa, Mastercard, Maestro, American Express, … |
| `wallets/` | Apple Pay, Google Pay |
| `apm/` | Other methods: TWINT, PostFinance, Klarna, PayPal, Reka, … |
| `generic/` | Neutral card, gift card and invoice tiles for anything without a logo |

`twint-logo.svg` is TWINT's full logo (black plate, wordmark) for places
that show TWINT on its own, larger than a tile.

The logos are trademarks of their owners; show them only to name the
payment method, unaltered.

## Source and licence

The tiles are from [datatrans/payment-logos](https://github.com/datatrans/payment-logos)
(commit `f36c35e`, 2026-07-27) by Datatrans AG, licensed under
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). They are
copied unchanged. If we change one, the changed file stays under CC BY-SA 4.0
and says what was changed.
