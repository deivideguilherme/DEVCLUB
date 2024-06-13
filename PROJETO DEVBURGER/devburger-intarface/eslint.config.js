import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import js from "@eslint/js";
import { plugins } from "eslint-plugin-react/configs/all";

export default [{
  languageOptions: { 
    globals: globals.browser 
  }
},
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),

  {
    plugins:[
      "react",
      "eslint-plugin-import-helpers"
    ]
  },

  {
    rules: {
        "no-unused-vars": "error",
        "no-undef": "error",
      }
  },

  js.configs.recommended,

    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];