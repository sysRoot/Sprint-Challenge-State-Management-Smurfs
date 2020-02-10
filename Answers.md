1. What problem does the context API help solve? 
>It aims to provide a native-to-react (not react-native) solution to state hierarchical construct, so that one can implement a parent-to-child relational store.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 
>`Actions` are the initial setup to completing a state change, they take in the arguments and then send over the action and its payload/type to the `reducer`. The `reducer` takes in an `action` and consumes it by type, and processes the required changes to state, and applies the payload if applicable. The `store` is a container for the state and any subsequent changes that are processed in the chain of `action`->`reducer`->`state-change`
3. What is the difference between Application state and Component state? When would be a good time to use one over the other? 
>Application state is state that is probably necessary throughout the application in many places, where as component state is local to the component in question, and only that component. Component level state would be useful for a drawer toggle for instance, where as application level state would be useful for something like a chat widget that appears on all pages of an app.
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
>  `redux-thunk` is a package to enable asynchronous redux, as by default nature, redux is synchronous. A thunk is a function passed to a function. It gives us access to dispatch for instance. The package allows us to interrupt or wait for actions to be complete, and can completely change it's action
5. What is your favorite state management system you've learned and this sprint? Please explain why! 
> Context. It's leaner, cleaner, and neater in my opinion. with useEffect, this is a powerful combo.
