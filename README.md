# Subscribable

## Example

```js
const Subscribable = require('@janbloch/subscribable-event');

const event = new Subscribable();
const unsubscribe = event.subscribe((arg)=>{
    console.log('Hello ' + arg);
});

event.invoke('World');
unsubscribe();
event.invoke('This will not be printed to the console');
```

Output: `Hello World`
