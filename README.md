# Avant Garde Movement App
#### NPM

| **Command**   | **Result**           |
| ------------- | -------------------- |
| npm install   | install dependencies |
| npm start     | run project locally  |
| npm run build | build for production |

## Project Description
This project is both a demonstration of some coding techniques and a proof of concept for a "Google-image-search-like" preview component. You can roughly consider 2 layers:
- a macro layer for getting and manipulating data (here, the views)
- a micro layer for presenting data (here, the `VoorhoedeAccordion` component)

The `VoorhoedeAccordion` component is basically an experiment in how to do (or fake) dynamic DOM insertion (appending) with Vue.

## Considerations
This is a proof of concept and by no means a finished product. Consider the following:

#### Data
The API call to get the data is done in the `About` view. In a real-world app, this would probably happen elsewhere. The API request function is neatly tucked away in a separate `repo`, and so is the data manipulation logic which is moved into `utils`. In a real-world app, any specific library code like `Ramda` would probably also be moved into a utility, so the main code stays easy to reason about for Junior developers.

#### CSS
The CSS for this project is not optimized - it is simply whatever popped in my mind first or worked the fastest. The focus for this PoC was not on the CSS. Design could definity improve too ;)

#### PWA
This project is not built a PWA because it didn't add anything to the proof of concept.

#### Unit Testing
There are no tests for this project, if such a component would go into production I would place it under Unit tests.

#### Browser Support
No special care was taken for supporting anything but the most modern browsers.

#### Animation Techniques
I used a variety of animation techniques, just to play with a skill I haven't used for a while. I should probably tone it down and use the proper technique for the proper use-case if this was a production component, because there is some interference.

#### Work in Progress
This project is not finished, and probably never will be. It's more of an experiment really, to try things out with Vue, take it to its limits. The `VoorhoederAccordion` component could wo with *A LOT* of improvements. Truth be told, I probably wouldn't use Vue to build it after doing this experiment. A vanilla plugin could be a better option, and then you could build a light-weight wrapper for Vue, or any other framework for that matter.

#### Comment System
For all the mentioned improvements, there is a comment system in place. These 3 comments demark the most important areas of work:
| **Comment**  | **Meaning**                                |
| ------------ | ------------------------------------------- |
| @TODO        | unfinished code, needs work                 |
| @REFACTOR    | functioning but unoptimized code            |
| @PERFORMANCE | performance quirks or possible optimization |