# Quick Start

You will learn
- How to create and nest components
- How to add markup and styles
- How to display data
- How to render conditions and lists
- How to respond to events and update the screen
- How to share data between components

## Creating and nesting components
React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.

React components are JavaScript functions that return markup:
```jsx
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```
Now that you’ve declared MyButton, you can nest it into another component:
```jsx
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

#### Notes:
1. React component names must always start with a capital letter, while HTML tags must be lowercase.
2. The export default keywords specify the main component in the file.


## Writing markup with JSX
The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience.

JSX is stricter than HTML. You have to close tags like `br`. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a `div` or an empty `<></>` wrapper:
```jsx
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

## Adding styles
In React, you specify a CSS class with className.

```<img className="avatar" />```

React does not prescribe how you add CSS files.
?????????????????

## Displaying data
JSX lets you put markup into JavaScript.

You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:
```jsx
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```
You can put more complex expressions inside the JSX curly braces too.
String concatenation:
```jsx
export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```
In the above example, style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces. You can use the style attribute when your styles depend on JavaScript variables.

## Conditional rendering
In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:
```jsx
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```
With ternary operator (inside jsx):
```jsx
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```
With logical && syntax (inside jsx):
```jsx
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

## Rendering lists
```jsx
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

## Responding to events
You can respond to events by declaring event handler functions inside your components:
```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```
Notice how onClick={handleClick} has no parentheses at the end!

## Updating the screen
To do this, add state to your component.

First, import useState from React:
```jsx
import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0);
    //...
}
```
You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount).

The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() and pass the new value to it.
```jsx
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```
Notice how each component “remembers” its own count state and doesn’t affect other buttons.

## Using Hooks
Functions starting with `use` are called Hooks.

`useState` is a built-in Hook provided by React.

You can find other built-in Hooks in the [API reference](https://react.dev/reference/react/hooks).

You can also write your own Hooks by combining the existing ones.

You can only call Hooks at the top of your components (or other Hooks)????????????????. If you want to use `useState` in a condition or a loop, extract a new component and put it there.

## Sharing data between components
Often you’ll need components to share data and always update together.

To make both MyButton components display the same count and update together, you need to move the state from the individual buttons “upwards” to the closest component containing all of them.

First, move the state up from MyButton into MyApp:
```jsx
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
```
You can pass information to MyButton using the JSX curly braces:

```jsx
return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
```
The information you pass down like this is called _props_.

Finally, change MyButton to read the props you have passed from its parent component:
```jsx
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```
This is called “lifting state up”. By moving state up, you’ve shared it between components.


