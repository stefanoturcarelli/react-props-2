# React Props

props, short for properties, are what make React components reusable. Props are a way to pass data from a parent component to its child components. Props are read-only (immutable) and can not be modified by the child component. Props never go up, from child to parent.

Props are like function arguments, and you send them into the component as attributes.

```jsx
// Parent component
function ParentComponent() {
  const name = "John";
  const age = 25;

  return <ChildComponent name={name} age={age} />;
}

// Child component
function ChildComponent(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  );
}
```
