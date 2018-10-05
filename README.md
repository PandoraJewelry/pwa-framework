# Pandora Cloud PWA Framework

**Getting Started**
- This is a a node script, docker isn't required locally
- Since it's Node you can use either npm or yarn, if installed
- Run `npm install && npm run dev` after cloning this repo
- This guide only provides code examples of how to build a React SPA/PWA


**Javascript**

- Preference for ES6 & [stateless/pure functions](https://gist.github.com/torinagrippa/90ba43f1826a21cf903acbf02d4f8989)
- React 16 via Next.JS
- [Semantic UI React](http://react.semantic-ui.com/) for component framework (SUI is a more advanced Bootstrap)
- JS linting via [eslint](https://eslint.org/) using the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) 
- React props validated via [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html), [Object/Array PropTypes](https://medium.com/@MoeSattler/better-prop-validation-in-react-cc83590d311f)
- State management via Redux
- Unit Testing via [Enzyme](https://github.com/airbnb/enzyme) using [Jest](https://jestjs.io/) as a test runner; no snapshot testing



**Styling**

- [LESS](http://lesscss.org/) and [Semantic UI](https://semantic-ui.com/) for styling
- CSS linting via [stylelint](https://stylelint.io/) & [stylelint ordering](https://github.com/hudochenkov/stylelint-order)



**Next.JS**

- Repo, [Documentation](https://nextjs.org/docs#setup)
- Routing using [next-routes](https://github.com/fridays/next-routes)
- Translations are done via namespaced json files in the server folder via [react-189next](https://react.i18next.com/), [repo](https://github.com/i18next/react-i18next/tree/master/example/nextjs_withAppJS)... example localhost: http://localhost:3000/page1?lng=de



