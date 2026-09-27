# Wallet passes

Every TICKETOVA ticket can be saved to Apple Wallet and Google Wallet. One layout serves every tenant; a tenant brings only its colour and its pictures. There are two kinds of pass: the day ticket and the season ticket.

## Colour

| Kind | Background | Text | Labels |
|---|---|---|---|
| Day ticket | `#000000` | `#FFFFFF` | `#A3A3A3` |
| Season ticket | the tenant's brand colour | `#FFFFFF` on a dark brand colour, `#000000` on a light one | `#A3A3A3` on dark, `#404040` on light |

The day ticket is black for every tenant, so a visitor tells a day from a season at a glance. The season ticket wears the tenant's `--color-brand`; its text colour follows the tenant's `--color-on-brand`. Google Wallet takes only the background and picks the text colour itself.

## Fields

Labels are in capitals, as Wallet sets them.

| Place | Day ticket | Season ticket |
|---|---|---|
| Header, right | GÜLTIGKEIT: the date | SAISON: the season's name |
| Second row | KATEGORIE: the ticket's group | NAME in capitals, GEBURTSDATUM |
| Code | QR code of the ticket number, the number printed under it | the same |
| Back | BESTELL-NR., TICKET-NR., KATEGORIE, GÜLTIG, the operator's name and contact, ERMÖGLICHT DURCH TICKETOVA | the same, plus NAME and GEBURTSDATUM |

Dates are written 14.07.2027 and are in Zurich time. A day ticket expires at 23:59 on its day and is relevant from 08:00; a season ticket is relevant for its whole season and expires at 23:59 on its last day. Vouchers are never Wallet passes.

## Pictures

Each tenant supplies one set; both kinds of pass use it.

| Wallet | File | Size | Content |
|---|---|---|---|
| Apple | `icon.png`, `icon@2x.png` | 29 × 29, 58 × 58 | the tenant's mark on its brand colour, for notifications |
| Apple | `logo.png`, `logo@2x.png` | up to 160 × 50, 320 × 100 | the tenant's wordmark, white or black to read on the season colour, transparent |
| Apple | `logo-day.png`, `logo-day@2x.png` | as `logo` | a white wordmark for the black day ticket; only when `logo` is dark |
| Apple | `strip.png`, `strip@2x.png` | 375 × 123, 750 × 246 | a photograph of the place, behind the second row |
| Google | `logo.png` | 660 × 660 | the tenant's mark filling a circle; Google crops it round |
| Google | `hero.jpg` | 1032 × 336 | the same photograph as the Apple strip, wider |

`tuerlersee/` (dark brand colour) and `mettmi/` (light brand colour) are the two examples this catalog shows. A tenant's real pictures live with the tenant, not here.

## Identity

| | Apple Wallet | Google Wallet |
|---|---|---|
| Account | Ovadev GmbH, team `MA466R3CFR` | Ovadev GmbH, issuer `3388000000023194530` |
| Pass type | `pass.com.ticketova.tickets` | event ticket |
| Name on the pass | the tenant's, over TICKETOVA as organisation | the tenant's, as the issuer name of the class |

Certificates and keys are in 1Password, vault Shared: "TICKETOVA Apple Wallet" and "TICKETOVA Google Wallet".

The buttons that add a pass are in [`/brand/wallet/`](../../brand/wallet/README.md).
