
---

### **Week 4: Advanced Redux + React Query**

---

#### **Day 17: Redux Advanced Patterns**

**Tasks**  
1. Learn about advanced Redux patterns, such as using **selectors** to derive data from the state.  
2. Implement **normalized state** to reduce duplication in the Redux store.  
3. Use **Redux DevTools** for advanced state inspection.  

**Mini-Projects**  
1. **Normalized Task Manager**  
   - Use normalized state to store tasks by their ID and update them efficiently.  
2. **Selector Example**  
   - Create a selector to derive a list of completed tasks from the Redux state.  

**Examples**  
```typescript
// Normalized State for Tasks
import { createSlice, configureStore } from '@reduxjs/toolkit';

type Task = { id: number; title: string; completed: boolean };

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { entities: {} as Record<number, Task>, ids: [] as number[] },
  reducers: {
    addTask: (state, action) => {
      const task = action.payload;
      state.entities[task.id] = task;
      state.ids.push(task.id);
    },
    toggleTask: (state, action) => {
      const taskId = action.payload;
      const task = state.entities[taskId];
      if (task) task.completed = !task.completed;
    },
  },
});

const selectCompletedTasks = (state: any) =>
  state.tasks.ids.filter(id => state.tasks.entities[id].completed);

const store = configureStore({ reducer: { tasks: tasksSlice.reducer } });

store.dispatch(tasksSlice.actions.addTask({ id: 1, title: 'Learn Redux', completed: false }));
store.dispatch(tasksSlice.actions.toggleTask(1));

console.log(store.getState().tasks);  // Logs the tasks state
```

**Resources**  
- [Redux Selectors](https://redux.js.org/usage/deriving-data-selectors)  
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)  

---

#### **Day 18: Middleware in Redux**

**Tasks**  
1. Learn how to add custom **middleware** to Redux for logging, handling errors, etc.  
2. Explore common Redux middleware like **redux-thunk** or **redux-saga** for handling async actions.  

**Mini-Projects**  
1. **Logging Middleware**  
   - Create a Redux middleware that logs all dispatched actions and the resulting state changes.  
2. **Error Handling Middleware**  
   - Implement middleware to catch errors in the Redux store and log them.  

**Examples**  
```typescript
// Logging Middleware
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log('Dispatching action: ', action);
  return next(action);
};

const store = configureStore({
  reducer: { tasks: tasksSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

store.dispatch(tasksSlice.actions.addTask({ id: 2, title: 'Learn Redux Middleware', completed: false }));
```

**Resources**  
- [Redux Middleware Guide](https://redux.js.org/tutorials/fundamentals/part-5-redux-devtools)  

---

#### **Day 19: Advanced React Query Features**

**Tasks**  
1. Learn about **dependent queries** and how to chain them together.  
2. Implement **pagination** with React Query to handle large datasets.  
3. Explore **optimistic updates** for a smoother user experience when mutating data.  

**Mini-Projects**  
1. **Dependent Queries Example**  
   - Implement a project that fetches user details first, and based on that, fetch user posts.  
2. **Pagination Example**  
   - Implement pagination to fetch a list of items (e.g., products or users) from an API.  

**Examples**  
```tsx
// Dependent Queries
import { useQuery } from 'react-query';

const fetchUser = async (userId: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return res.json();
};

const fetchPosts = async (userId: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return res.json();
};

function UserPosts({ userId }: { userId: number }) {
  const { data: user, isLoading: isUserLoading } = useQuery(['user', userId], () => fetchUser(userId));
  const { data: posts, isLoading: isPostsLoading } = useQuery(
    ['posts', userId],
    () => fetchPosts(userId),
    {
      enabled: !!user, // Only run this query when user data is available
    }
  );

  if (isUserLoading || isPostsLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Resources**  
- [React Query Dependent Queries](https://tanstack.com/query/v4/docs/guides/queries#dependent-queries)  
- [React Query Pagination](https://tanstack.com/query/v4/docs/guides/paginated-queries)  

---

#### **Day 20: Handling Server State and Local State Together**

**Tasks**  
1. Learn how to handle both **server-state** and **local-state** efficiently in a React app.  
2. Understand the concept of **data caching** in React Query and how to invalidate cached data.  

**Mini-Projects**  
1. **Task Management App**  
   - Use React Query to fetch tasks and store them in Redux.  
2. **User Profile Page**  
   - Use React Query for user data and Redux for user authentication and global settings.  

**Examples**  
```tsx
// Task Management with React Query and Redux
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { setTasks } from './redux/tasksSlice';

const fetchTasks = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};

function TaskList() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { data: tasks, isLoading, isError } = useQuery('tasks', fetchTasks);

  const addTaskMutation = useMutation(
    (newTask: any) => fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(newTask),
    }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks');
        dispatch(setTasks([...tasks, newTask]));
      },
    }
  );

  const handleAddTask = () => {
    addTaskMutation.mutate({ title: 'New Task', completed: false });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching tasks!</div>;

  return (
    <div>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Resources**  
- [React Query Caching](https://tanstack.com/query/v4/docs/guides/caching)  

---

#### **Day 21: Optimizing Redux + React Query Usage**

**Tasks**  
1. Learn how to **optimize** Redux and React Query usage together.  
2. Explore strategies for reducing **unnecessary renders** when both libraries are used in tandem.  

**Mini-Projects**  
1. **Optimized To-Do App**  
   - Combine Redux and React Query, focusing on reducing redundant API calls and re-renders.  
2. **User Authentication with Caching**  
   - Implement user authentication with React Query and cache authentication status in Redux.  

**Examples**  
```tsx
// Optimized Task App
import { useQuery, useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from './redux/tasksSlice';

const fetchTasks = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};

function OptimizedTaskList() {
  const dispatch = useDispatch();
  const tasksFromRedux = useSelector((state: any) => state.tasks);

  const { data: tasks, isLoading, isError } = useQuery('tasks', fetchTasks, {
    initialData: tasksFromRedux, // Use Redux data initially
  });

  const addTaskMutation = useMutation(
    (newTask: any) => fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(newTask),
    }),
    {
      onSuccess: () => {
        dispatch(setTasks([...tasks, newTask]));
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching tasks!</div>;

  return (
    <div>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Resources**  
- [React Query + Redux Best Practices](https://tanstack.com/query/v4/docs/guides/redux)  

---
