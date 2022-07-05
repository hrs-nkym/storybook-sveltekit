# reference

Site: https://codingcat.dev/tutorial/integrating-storybook-with-sveltekit#steps
Youtube: https://www.youtube.com/watch?v=Kc1ULlfyUcw

# history

```sh
npm init svelte@next storybook-sveltekit
cd storybook-sveltekit/
npm install
npm run dev
npx sb@next init
npm run storybook
npx svelte-add@latest tailwindcss
npm i -D @storybook/addon-postcss
```

# package version
storybook ^6.5.9
svelte ^3.48.0
tailwindcss ^3.1.4
postcss ^8.4.14

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
