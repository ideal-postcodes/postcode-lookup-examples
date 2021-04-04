import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";

window.addEventListener("load", async () => {
  let apiKey;
  if (window.idpcConfig) {
    apiKey = window.idpcConfig.apiKey;
  } else {
    apiKey = "iddqd";
  }

  PostcodeLookup.setup({
    apiKey,
    context: "#postcode_lookup_field",
    outputFields: {
      line_1: "#line_1",
      line_2: "#line_2",
      line_3: "#line_3",
      post_town: "#post_town",
      postcode: "#postcode",
    },
  });
});
