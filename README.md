> Switching to [`with-memoize`](https://github.com/unclebay143/react-memoization/tree/with-memoize) branch


## Test after memoize: Typing inside the input box:

- Without memoization

![image](https://user-images.githubusercontent.com/58919619/184310886-16dab191-9e57-4a55-b938-bbb199702376.png)

Without memoize the `App`, `TodoForm`, and `TodoList` components are being rendered when we type inside the `TodoForm` input box.

- With memoization

![image](https://user-images.githubusercontent.com/58919619/184310863-fb983e5c-dba6-49f7-b217-a73343acddc2.png)

Only the `App` and `TodoForm` components are being rendered when we type inside the `TodoForm` input box after memoizing our `TodoList` component.

## Test after memoize: Typing inside the input box with `TodoListItem` component:

- Without memoization

![image](https://user-images.githubusercontent.com/58919619/184310838-64a0987d-f429-4c53-9533-4439cef9b57f.png)

Without memoize the `App`, `TodoForm`, `TodoList`, and `TodoListItem` components are being rendered when we type inside the `TodoForm` input box.

- With memoization

![image](https://user-images.githubusercontent.com/58919619/184310814-d17f1a54-96a4-46d3-9c79-b36393ba3dc5.png)

Only the `App` and `TodoForm` components are being rendered when we type inside the `TodoForm` input box after memoizing our `TodoList` component.
