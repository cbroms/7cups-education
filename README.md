# 7 Cups Difficult Member Scenarios

A member and listener scenario that helps teach how to deal with bad behavior when it's encountered on 7 Cups.

This is a [Next.js](https://nextjs.org/) project; it can be built as a series of static pages.

## Getting Started

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

Each page is defined in `/pages/scenario/...`. There are two scenarios, `listener` and `member`. The data that each uses can be found in `/db`, currently each is a JSON file. In the future having a real database to collect actual member and listener responses would be ideal.

Each scenario is comprised of a series of _steps_. The data for these steps is an object in the array of `steps` in the member and listner json files. The route that handles rendering each step is in `/pages/scenario/[scenarioId]/step/[stepId].js`. Each step has a few parts:

1. Vote on what to do in the given scenario
2. Show the results of the vote (which is recommended, and the percent of others that picked each choice)
3. How would you respond to the scenario? (free response)
4. Vote on others' responses
5. Model 7 Cups response

Then the step is complete, the next bad message is added, and the process repeats for the next step. Note that parts 3 - 5 are optional and can be omitted, but the data for steps 1 - 2 must always be present in the json file.

## Deploy

This project is currently hosted on Vercel as a demo, find it at [7cups-education.vercel.app](https://7cups-education.vercel.app/).

Build the project by running:

```bash
npm run build
```
