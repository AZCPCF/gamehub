
---

### **GitHub Repo Structure**

```
frontend-roadmap-projects/
│
├── 01-typescript-zod/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── zodSchemas.ts
│   ├── package.json
│   └── tsconfig.json
│
├── 02-redux-react-query/
│   ├── src/
│   │   ├── features/
│   │   ├── services/
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── 03-zustand-gsap/
│   ├── src/
│   │   ├── animations/
│   │   ├── store/
│   │   ├── components/
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── 04-tailwind-shadcn/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── tailwind.config.js
│   └── package.json
│
├── 05-nextjs-final-project/
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── api/
│   │   └── products/
│   ├── components/
│   ├── styles/
│   └── next.config.js
│
└── README.md
```

---

### **Code Snippets**

#### **1. TypeScript + Zod (User Registration Form)**
```tsx
// zodSchemas.ts
import * as z from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// App.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "./zodSchemas";

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register("password")} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default App;
```

---

#### **2. Redux + React Query (Task Manager)**

**Redux Slice:**
```tsx
// features/tasksSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
```

**React Query Setup:**
```tsx
// services/taskService.ts
import axios from "axios";

export const fetchTasks = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
};
```

**App Component:**
```tsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./services/taskService";
import { addTask } from "./features/tasksSlice";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks);

  const { data, isLoading, error } = useQuery(["tasks"], fetchTasks);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks</p>;

  const addNewTask = () => {
    dispatch(addTask({ id: 101, title: "New Task", completed: false }));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={addNewTask}>Add Task</button>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

---

#### **3. Zustand + GSAP (Portfolio Animations)**

**Zustand Store:**
```tsx
// store/themeStore.ts
import create from "zustand";

export const useThemeStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
```

**GSAP Animation:**
```tsx
// animations/introAnimation.ts
import { gsap } from "gsap";

export const introAnimation = () => {
  gsap.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 2 });
};
```

**App Component:**
```tsx
import React, { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";
import { introAnimation } from "./animations/introAnimation";

const App = () => {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  useEffect(() => {
    introAnimation();
  }, []);

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div className="box">Welcome to My Portfolio</div>
    </div>
  );
};

export default App;
```

---

#### **5. Next.js (Blog with Authentication)**
```tsx
// pages/index.tsx
import React from "react";

const HomePage = () => {
  return <h1>Welcome to My Blog</h1>;
};

export default HomePage;
```

---
