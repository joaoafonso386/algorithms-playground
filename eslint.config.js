// @ts-check

import js from "@eslint/js";
import tseslint from 'typescript-eslint';
import jsdoc from "eslint-plugin-jsdoc"

export default [
    js.configs.recommended,
    jsdoc.configs['flat/recommended'],
    ...tseslint.configs.recommended,
   {   
        rules: {
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-this-alias": "off",
            "no-undef": "off",
        },
        plugins:{
            jsdoc
        }
   }
];