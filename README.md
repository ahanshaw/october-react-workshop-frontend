# Pokédex Frontend:
October 2021 React Workshop

> "Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession.  

Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go!"
> 

— Professor Oak, 1998

## We're going to build a Pokédex!

Professor Oak wants to bring his Pokédex into the 21st century with a modern API-Driven Mobile-First React App, and has chosen Clique Studios to make it happen.

We're going to start this project out with Front-end (you), and then pass it off to backend next month to connect to the API.

### Designs

This is going to be a ***mobile-first*** project — you can build out your designs for desktop later if you have time, but we're only targeting phones for the official challenge.  For this project we have a sample Figma design you can work off of, but if you'd like you can spend up to 30 minutes to research and explore alternate designs online (there's a bunch, but most of them aren't free Figma files).  

The sample Figma file isn't an exact 1:1 match to the requirements below, and you'll need to use your best judgement on how to modify it to fit the scope of the project.  

To get started with the [sample design](https://www.figma.com/community/file/979132880663340794), visit the link below, log into Figma, and click 'duplicate' to open it up in Figma.

[Figma - Pokédex | Pokédex prototype with Style Guide and Wireframes. Designed for developers who are learning a new...](https://www.figma.com/community/file/979132880663340794)

# Sample API Data

For this project, the client has provided sample API responses for you to work with inside the `samples` folder. They've already been pre-imported into templates as JavaScript objects (so you won't be fetching live APIs with this project, we'll leave that to the backend devs).  

- pokemon.json - a list of the first 151 Pokemon
- eevee.json - Sample data for an individual Pokemon

In the starter files, there are API routes where you can access the APIs in your browser (FireFox is good for exploring API endpoints).  `/api/eevee` for the single Pokémon, or `/api/pokemon` for the list of pokemon.

# Starting Code

Please use this repo as a starter for this project, and commit to a branch using your name. (Sorry for the sloppiness, kiddo didn't want to let me clean it up this morning).

# Goals

***This challenge is for the front-end components and styles only***, and the deliverable will be a handoff to backend.  Feel free to import any static images you'd like into the `/public/images` folder for now (otters, kitties, and puppies are also acceptable placeholders if you'd like 🦦) — backend will handle pulling the images from the API itself.

- Using Next.js (or a react framework of your choice), create the following views/pages:
    - Start / Home page
        - Should contain a search field in either the homepage or in the nav - your call
        - List of the user's favorite Pokémon (up to 6 cards)
    - Search Results page
        - Add state for the total results returned, and have that dynamically display
    - Individual Pokemon page
        - There's a lot of info you could display from the json, but at a minimum we want the name of the pokemon, a picture of the pokemon,  and the description
    - 404 page
- Use [next link](https://nextjs.org/docs/api-reference/next/link) `<Link/>` component to link between pages, and the built-in [Next Image](https://nextjs.org/docs/api-reference/next/image) `<Image/>` component for images.  We might have backend devs us a CDN with this next month. 😈
- When it makes sense, break complex bits of react into their own components (like maybe the search results cards).
- Push up your repo to bitbucket when finished and...
- Have fun!

## Bonus Goals:

- For each page/component, try to use CSS modules where it makes sense instead of global styles
- In search results, add a clickable heart icon to each returned Pokémon to allow the user to favorite the Pokémon.  Pass a user's favorite Pokémon to state.
- Deploy to a server of your choice (Vercel?)
- If you finish early, start a new branch called `(yourname)-backend` and try to work with the live api ([https://pokeapi.co/](https://pokeapi.co/))

# What's Next

We're going to take at least one final front-end from this month's challenge, and pass it off to the backend devs next month to build out the search functionality and wire it up as an app.

&nbsp;

---
&nbsp;

# Original Next.js Readme:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
