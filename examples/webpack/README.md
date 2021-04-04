# Webpack Example

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
npm install && npm run build && npm start
```

Open [http://localhost:8080/output](http://localhost:8080/output)
