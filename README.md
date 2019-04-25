# conditional-react
Conditional React Rendering for better code readability

### Without Conditional
```jsx
render() {
  return (
    <div>
      <h1>Title</h1>
      {
        this.state.list.length > 0 && (
          <h1>List</h1>
          <List data={this.state.list} />
        )
      }

      {
        this.state.bool 
        ? <h1>Bool is true</h1>
        : null
      }
    </div>
  );
}
```

### With Conditional
```jsx
import Conditional from 'conditional-react';

render() {
  return (
    <div>
      <h1>Title</h1>
      
      <Conditional if={this.state.list.length > 0}>
        <h1>List</h1>
        <List data={this.state.list} />
      </Conditional>

      <Conditional if={this.state.bool}>
        <h1>Bool is true</h1>
      </Conditional>
    </div>
  );
}
```