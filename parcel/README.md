# Parcel Example

## Use in your app

### Install

```bash
npm install --save @ideal-postcodes/postcode-lookup
```

### Usage

```javascript
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";

PostcodeLookup.setup({
  context: "#postcode_lookup_field",
  apiKey: "apiKey"
  outputFields: {
    line_1: "#line_1",
    line_2: "#line_2",
    line_3: "#line_3",
    post_town: "#post_town",
    postcode: "#postcode",
  },
});
```

## Run this demo

```bash
npm install && npm start
```

Open [http://localhost:8081](http://localhost:8081)
