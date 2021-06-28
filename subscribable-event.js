function Subscribable(){
    let id = 0;
    this.subscribed = {};
    this.subscribe = (callback) => {
        const _id = id;
        id++;
        this.subscribed[_id] =  callback;
        return () => delete this.subscribed[_id];
    };
    this.invoke = (...args) => {
        Object.keys(this.subscribed).forEach(k=>this.subscribed[k](...args));
    };
}

module.exports = Subscribable;