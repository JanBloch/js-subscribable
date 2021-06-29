const Subscribable = require("../subscribable-event");

test("can initialize new Subscribable", () => {
    const subscribable = new Subscribable();
});

test("subscriber functions can be added with .subscribe()", () => {
    const event = new Subscribable();
    const func = () => {
        console.log('asdf');
    };
    event.subscribe(func);
    expect(event.subscribed).toStrictEqual({0:func});
});

test("subscriber functions are called when event is invoked", () => {
    const callback = jest.fn();
    const event = new Subscribable();
    event.subscribe(callback);
    event.invoke('asdf');
    expect(callback).toHaveBeenCalledWith('asdf');
    expect(callback).toHaveBeenCalledTimes(1);
})

test("unsubscribed functions should not be called again", () => {
    const callback = jest.fn();
    const event = new Subscribable();
    const unsubscribe = event.subscribe(callback);
    unsubscribe();
    event.invoke();
    expect(callback).toHaveBeenCalledTimes(0);
})