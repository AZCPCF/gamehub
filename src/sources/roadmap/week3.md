
---

### **Week 3: Redux + React Query**

---

#### **Day 11: Introduction to Redux**

**Tasks**  
1. Learn about Redux fundamentals: actions, reducers, and store.  
2. Set up Redux Toolkit in a React app.  
3. Understand the concept of global state and how to manage it with Redux.  

**Mini-Projects**  
1. **Simple Counter App**  
   - Create a Redux store to manage a counter.  
   - Implement actions to increment and decrement the counter.  
2. **To-Do App (Redux Version)**  
   - Manage a list of tasks using Redux, including actions to add, remove, and mark tasks as complete.  

**Examples**  
```typescript
// Simple Counter App
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

// Dispatch actions
store.dispatch(counterSlice.actions.increment());
console.log(store.getState().counter.value); // 1
```

**Resources**  
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)  

---

#### **Day 12: Setting Up Redux Toolkit**

**Tasks**  
1. Learn how to configure Redux with Redux Toolkit.  
2. Understand reducers and actions.  
3. Use `createSlice` for automatic action creators and reducers.  

**Mini-Projects**  
1. **Counter with Actions**  
   - Create actions to increment and decrement the counter using `createSlice`.  
2. **User Profile**  
   - Set up Redux state to manage user data (e.g., name, email).  

**Examples**  
```typescript
// User Profile with Redux Toolkit
const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', email: '' },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
});

store.dispatch(userSlice.actions.setUser({ name: 'John', email: 'john@example.com' }));
console.log(store.getState().user); // { name: 'John', email: 'john@example.com' }
```

**Resources**  
- [Redux Toolkit: Getting Started](https://redux-toolkit.js.org/introduction/getting-started)  

---

#### **Day 13: Introduction to React Query**

**Tasks**  
1. Learn the basics of React Query: `useQuery`, `useMutation`, and `useQueryClient`.  
2. Understand how React Query manages server-state.  
3. Set up a basic query to fetch data.  

**Mini-Projects**  
1. **Fetch Users with React Query**  
   - Use `useQuery` to fetch data from an API (e.g., list of users).  
2. **Submit Data with React Query**  
   - Use `useMutation` to submit data to an API (e.g., create a new user).  

**Examples**  
```tsx
// Fetch Users with React Query
import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

function UserList() {
  const { data, error, isLoading } = useQuery('users', fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user: { id: number; name: string }) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

**Resources**  
- [React Query Documentation](https://tanstack.com/query/latest)  

---

#### **Day 14: Combining Redux with React Query**

**Tasks**  
1. Learn how to combine React Query with Redux for global state management and server-state handling.  
2. Understand how to manage cached data with React Query and store it in Redux.  

**Mini-Projects**  
1. **Task Management with React Query and Redux**  
   - Use Redux to store user information (e.g., logged-in user) and React Query to manage task data.  
2. **Sync State between Redux and React Query**  
   - Use React Query to fetch and update data, and sync it with Redux state.  

**Examples**  
```tsx
// Sync State between Redux and React Query
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/userSlice';

const fetchUserData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  return data;
};

function UserComponent() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state: any) => state.user);

  const { data, error, isLoading } = useQuery('user', fetchUserData);

  const updateUser = useMutation(
    (newUserData: any) => fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(newUserData),
    }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
        dispatch(setUser(newUserData));
      },
    }
  );

  const handleUpdate = () => {
    updateUser.mutate({ name: 'Updated Name', email: 'updated@example.com' });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UserComponent;
```

**Resources**  
- [React Query + Redux Integration Guide](https://react-query.tanstack.com/)  

---

#### **Day 15: Advanced Redux Concepts**

**Tasks**  
1. Learn advanced Redux patterns: selectors, normalized state, and Redux DevTools.  
2. Implement middleware like logging or error tracking in Redux.  
3. Use Redux DevTools for state debugging.  

**Mini-Projects**  
1. **Normalized State for Tasks**  
   - Use normalized state in Redux for managing tasks efficiently (instead of storing an array of tasks).  
2. **Logging Middleware**  
   - Set up a middleware that logs actions and state changes.  

**Examples**  
```typescript
// Normalized State for Tasks
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    entities: { 1: { id: 1, title: 'Learn Redux', completed: false } },
    ids: [1],
  },
  reducers: {
    addTask: (state, action) => {
      const task = action.payload;
      state.entities[task.id] = task;
      state.ids.push(task.id);
    },
    toggleTask: (state, action) => {
      const taskId = action.payload;
      const task = state.entities[taskId];
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

const store = configureStore({
  reducer: { tasks: tasksSlice.reducer },
});

console.log(store.getState().tasks);
```

**Resources**  
- [Redux Advanced Patterns](https://redux.js.org/advanced/usage-patterns)  

---

#### **Day 16: Advanced React Query Features**

**Tasks**  
1. Learn about React Query’s advanced features: dependent queries, paginated queries, and optimistic updates.  
2. Handle multiple queries in parallel and manage query dependencies.  

**Mini-Projects**  
1. **Pagination with React Query**  
   - Implement pagination for an API that returns paginated data.  
2. **Optimistic Update for Task Management**  
   - Implement optimistic updates for adding and removing tasks.  

**Examples**  
```tsx
// Pagination with React Query
import { useQuery } from 'react-query';

const fetchPage = async (page: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
  return response.json();
};

function PostsList() {
  const { data, isLoading, isError, error } = useQuery('posts', () => fetchPage(1));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((post: { id: number; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

**Resources**  
- [React Query Advanced Features](https://tanstack.com/query/v4/docs/guides/advanced)  

---
