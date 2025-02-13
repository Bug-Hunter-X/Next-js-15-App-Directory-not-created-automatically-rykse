# Next.js 15 App Directory not created automatically

This issue demonstrates a problem where the `app` directory is not automatically generated when creating a new Next.js 15 app using TypeScript. This prevents the usage of the App Router which is a key feature in Next.js 15.

## Bug

The `app` directory is missing after running the command `npm create next-app my-app --typescript`.

## Solution

Manually create the `app` directory in the project root and add `pages/index.js` to it.  Add any necessary files within the `app` directory to leverage the App Router.