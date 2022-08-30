---
title: /balance/{walletKey}
---

# /balance/{walletKey}

**Request Type: GET**

Returns the balance information of the wallet to which the wallet key is given.

## Parameters

- Wallet Key
  - A 38-character wallet key.

## Response

```json
{
  "Wallet": "NRHf747BCHuFvpzDWpxrXvKm1hNBruM7eNmUH4",
  "Balance": {
    "NOTUS": {
      "20220721131729188": "0"
    }
  },
  "RowNo": 0,
  "UID": ""
}
```
