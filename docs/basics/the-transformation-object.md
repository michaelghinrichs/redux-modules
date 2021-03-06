# The Transformation Object

The `transformations` array contains objects which define different state transformations. These objects contain `action`, `middleware`, `payloadTypes`, and `reducer` keys.

`createModule` uses these definitions to generate `action creators`, `constants`, the final reducer, and more.

```js
{
  action: 'CREATE',
  middleware: [
    middlware.propCheck(shape({ description: PropTypes.string }))
  ],
  reducer: (state, { payload }) =>
    state.push(fromJS(payload)),
}
```
> Example transformation object

#Usage
> transformations: [ {action, middleware, reducer} ]

## type
> string

The type of transformation. This is used to create a constant `<moduleName>/<action>`. The generated constant is in turn used in the final reducer.

## middleware
> [function({ payload, meta }) => { payload, meta }]

> optional

Middleware is an array of functions that receive {payload, meta} and return {payload, meta}. These functions can be used to decorate the action before it's received by the reducer.

## reducer
> function(state, action)
>
> default: state => state
>
> optional

This is the state transformation associated to the `action`.
