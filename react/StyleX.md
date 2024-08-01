# StyleX
StyleX is a simple, easy-to-use JavaScript syntax and compiler for styling web apps.

StyleX combines the strengths and avoids the weaknesses
of both inline styles and static CSS.
Defining and using styles requires only local knowledge within a component,
and avoids specificity issues while retaining features like Media Queries.
StyleX builds optimized styles using collision-free atomic CSS
which is superior to what could be authored and maintained by hand.

## Features at a glance

### Scalable
- Minimize CSS output with atomic CSS.
- The CSS size plateaus even as the number of components grows.
- Styles remain readable and maintainable within growing codebases.

### Predictable
- Class names on an element can only directly style that same element.
- No specificity issues.
- “The last style applied always wins!”

### Composable
- Apply styles conditionally.
- Merge and compose arbitrary styles across component and file boundaries.
- Use local constants and expressions to keep styles DRY. Or repeat styles without worrying about performance.

### Fast
- No runtime style injection.
- All styles are bundled in a static CSS file at compile-time.
- Optimized runtime for merging class names.

### Type-Safe??????????/??
- Type-safe APIs.
- Type-safe styles.
- Type-safe themes.

## Using StyleX

### Configure the compiler
```js
import plugin from '@stylexjs/rollup-plugin';

const config = () => ({
  plugins: [
    plugin({ ...options })
  ]
})

export default config;
```

### Define styles
Styles are defined using an object syntax and the create() API.
```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    width: '100%',
    maxWidth: 800,
    minHeight: 40,
  },
});
```

Any number of rules can be created by using additional keys
and additional calls to create():
```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    width: '100%',
    maxWidth: 800,
    minHeight: 40,
  },
  child: {
    backgroundColor: 'black',
    marginBlock: '1rem',
  },
});

const colorStyles = stylex.create({
  red: {
    backgroundColor: 'red',
    borderColor: 'darkred',
  },
  green: {
    backgroundColor: 'lightgreen',
    borderColor: 'darkgreen',
  },
});

function ReactDiv({ color, isActive, style }) { /* ... */ }
```

### Use styles
To use styles they must be passed to the props() function.
Styles can be combined and applied conditionally
using standard JavaScript expressions.
```jsx
import * as React from 'react';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({ ... });
const colorStyles = stylex.create({ ... });

function ReactDiv({ color, isActive, style }) {
    return <div {...stylex.props(
        styles.main,
        // apply styles conditionally
        isActive && styles.active,
        // choose a style variant based on a prop
        colorStyles[color],
        // styles passed as props
        style,
    )} />;
}
```
The example above uses JSX. StyleX itself is framework agnostic.
The same code works with other frameworks that accept className
strings and style objects such as SolidJS, Preact or Qwik.

### Ideal use cases
StyleX works well in a wide variety of projects.
However, it was designed to meet the challenges of particular use cases.

- #### Authoring UI in JavaScript
- #### Large or growing projects
- #### Reusable components


