# Hello World Example, with Ionic Integrated

## Making Ionic Work
I had to include - https://github.com/Yonom/ionic the default ionic did not work, was still throwing errors.

```
error - ReferenceError: HTMLElement is not defined
    at Object.<anonymous> (/Users/aaronksaunders/Downloads/qiqlw/node_modules/@ionic/react/dist/index.js:966:30)
    at Module._compile (internal/modules/cjs/loader.js:1151:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1171:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Module.require (internal/modules/cjs/loader.js:1040:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at eval (webpack-internal:///@ionic/react:1:18)
    at Object.@ionic/react (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:237:1)
    at __webpack_require__ (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:23:31)
    at eval (webpack-internal:///./pages/_app.js:4:70)
    at Module../pages/_app.js (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:214:1)
    at __webpack_require__ (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:23:31)
    at Object.0 (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:225:18)
    at __webpack_require__ (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:23:31)
    at /Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:91:18
(node:96683) UnhandledPromiseRejectionWarning: ReferenceError: HTMLElement is not defined
    at Object.<anonymous> (/Users/aaronksaunders/Downloads/qiqlw/node_modules/@ionic/react/dist/index.js:966:30)
    at Module._compile (internal/modules/cjs/loader.js:1151:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1171:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Module.require (internal/modules/cjs/loader.js:1040:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at eval (webpack-internal:///@ionic/react:1:18)
    at Object.@ionic/react (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:237:1)
    at __webpack_require__ (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:23:31)
    at eval (webpack-internal:///./pages/_app.js:4:70)
    at Module../pages/_app.js (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:214:1)
    at __webpack_require__ (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:23:31)
    at Object.0 (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:225:18)
    at __webpack_require__ (/Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:23:31)
    at /Users/aaronksaunders/Downloads/qiqlw/.next/server/pages/_app.js:91:18
(node:96683) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 3)
(node:96683) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
reconfigured my `package.json` file like so
```
"@ionic/react": "file:lib/ionic-react-5.4.4.tgz",
```


This example shows the most basic idea behind Next. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`. Using `next/link` you can add hyperlinks between them with universal routing capabilities. The `day` directory shows that you can have subdirectories.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/aaronksaunders/ionic-nextjs-1)

## How to use


Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
