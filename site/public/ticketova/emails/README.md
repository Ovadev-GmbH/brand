# E-mails

Every mail a visitor or a partner receives from a TICKETOVA shop. The mail wears the tenant's brand; TICKETOVA appears only as the sender name and in the footer.

## The mails

| Mail | File | Sent when | Subject (de) | To |
|---|---|---|---|---|
| Order confirmation | `order-paid.html` | the payment is confirmed | Bestellung {pid} bestätigt | the buyer |
| Refund | `order-refund.html` | an order is refunded, in part or in full | Erstattung für Bestellung {pid}; in full: Bestellung {pid} storniert und erstattet | the buyer |
| Partner validation | `partner-validation.html` | a ticket needs a partner to confirm the holder | Validierung erforderlich – {partnerCode} | the partner |
| Partner login | `partner-login.html` | a partner asks for a new login link | Ihr Login-Link für TICKETOVA | the partner |
| Validation accepted | `validation-success.html` | the check of a ticket succeeded | Ticket-Prüfung erfolgreich #{pid} | the buyer |
| Validation rejected | `validation-failed.html` | the check of a ticket failed | Ticket-Prüfung fehlgeschlagen #{pid} | the buyer |

Every mail exists in German and English; the order's language decides. No mail carries attachments: the button leads to the order page, where tickets and receipt are downloaded.

## Sender

The sender name is always `TICKETOVA`, from the platform's own address. Reply-To is the tenant's contact address, so a reply reaches the venue. Partner mails say TICKETOVA in the subject, because partners sign in to TICKETOVA, not to the venue.

## Layout

One column, 540 px wide, on `#F5F5F5`.

| Part | Rule |
|---|---|
| Header | a band in the tenant's brand colour with its wordmark centred, 28 px high |
| Card | white, a 1 px `#E5E5E5` border, no rounded corners, 28 px padding |
| Title | 20 px bold, in ink; green `#166534` when a check succeeded, red `#991B1B` when it failed or on a refund |
| Details | label and value rows, the label in `#737373`, the value right-aligned; amounts and order numbers bold |
| Button | the tenant's action colour, white text, square corners; the full link printed under it for mail clients that block buttons |
| Sign-off | a thank-you line and the tenant's team line |
| Footer | shop host, Impressum · Datenschutz · AGB, and "Ermöglicht durch TICKETOVA", 10 px grey |

Type is Oswald, falling back to the system sans. `color-scheme: light` keeps Apple Mail from inverting the header in dark mode.

## Tenant settings

| Setting | Türlersee | Mettmenstetten |
|---|---|---|
| Brand colour (header) | `#20365F` | `#CBDDED` |
| Action colour (button) | `#20365F` | `#000000` |
| Form of address | du | Sie |
| Team line | Dein Strandbad Türlersee Team | Ihr Badi Mettmenstetten Team |

The wordmark is a PNG: Gmail and Outlook do not show SVG in mail. Use the same file as the Apple Wallet `logo@2x.png`; a light brand colour takes the dark wordmark, a dark one the white.

`tuerlersee/` and `mettmi/` are rendered from the templates of the 2026 system with sample data. A tenant's real settings live with the tenant, not here.
