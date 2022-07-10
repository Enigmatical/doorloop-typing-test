# doorloop-typing-test

A Typing Test as part of the DoorLoop Home Assessment.

## How To Run

### `npm install && npm run start`

## Overview

- A recreation of https://typing-speed-test.aoeu.eu/ in Typescript and React.

- Simply start typing in the "Start Typing" box to begin. The timer starts after the first submission (correct or not).

- The results screen is shown after the test completes.

- The majority of the logic is contained within `<App />`, `<TypingTest />`, `<TypingResults />`.

  - For more in-depth details, I wrote a short doc block for every component, hook, and utility function.

- This is built on top of `create-react-scripts --template typescript` [here](https://create-react-app.dev/docs/adding-typescript/).

- I utilized [tailwindcss](https://tailwindcss.com/) to help with styling.

## Future Improvements

If given more time, I would:

- Improve the overall UI.
  - I think the appearance of the Results screen is a little jarring. A `Transition` would've helped.
- Add tests.
  - I had intended to include a few, but the project went long.
- Further simplified `<App />`.
  - I'm not particularly happy with how much logic is still lingering in `<App />`. I'm pretty sure there is a way to move `words` into `<TypingTest />`, but I wanted to keep the "Test" and the "Results" separated (and both require `words` and `completed`).
