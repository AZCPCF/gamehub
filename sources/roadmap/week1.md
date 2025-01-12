
---

### **Week 1: TypeScript Basics + Zod**

---

#### **Day 1: TypeScript Fundamentals**

**Tasks**  
1. Learn about primitive types (`string`, `number`, `boolean`, etc.).  
2. Explore arrays, tuples, and enums.  
3. Study type annotations and type inference in TypeScript.  
4. Practice with union and intersection types.  

**Mini-Projects**  
1. **Shape Calculator**  
   - Create a utility function that calculates the area of different shapes (`circle`, `rectangle`, `triangle`).  
   - Use union types to represent the shape options.  
2. **User Role Manager**  
   - Define user roles (e.g., `admin`, `editor`, `viewer`) using enums.  
   - Build a simple role-based access check function.  

**Examples**  
- Refer to the [previous response](#) for detailed examples of Shape Calculator and User Role Manager.

**Resources**  
- [TypeScript Handbook: Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)  
- [TypeScript Basics Crash Course](https://www.youtube.com/results?search_query=typescript+basics)  

---

#### **Day 2: Arrays, Tuples, and Enums**

**Tasks**  
1. Understand arrays and how to strongly type them.  
2. Learn tuples for fixed-length arrays with specific types.  
3. Use enums for readable and reusable constants.  

**Mini-Projects**  
1. **Product Manager**  
   - Create a list of products with typed arrays and manage product attributes like name, price, and availability.  
2. **Weather Reporter**  
   - Use enums to define weather conditions (e.g., `Sunny`, `Rainy`, `Cloudy`).  
   - Write a function that recommends activities based on the weather condition.  

**Examples**  
```typescript
// Product Manager
type Product = {
  name: string;
  price: number;
  available: boolean;
};

const products: Product[] = [
  { name: "Laptop", price: 1500, available: true },
  { name: "Mouse", price: 25, available: false },
];

console.log(products);

// Weather Reporter
enum Weather {
  Sunny = "Sunny",
  Rainy = "Rainy",
  Cloudy = "Cloudy",
}

function activityRecommendation(weather: Weather): string {
  switch (weather) {
    case Weather.Sunny:
      return "Go for a walk!";
    case Weather.Rainy:
      return "Stay indoors and read.";
    case Weather.Cloudy:
      return "Perfect for a hike!";
    default:
      throw new Error("Unknown weather");
  }
}

console.log(activityRecommendation(Weather.Sunny)); // Go for a walk!
```

**Resources**  
- [TypeScript Handbook: Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)  
- [MDN: Enums](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)  

---

#### **Day 3: Type Inference and Annotations**

**Tasks**  
1. Practice using TypeScript's type inference.  
2. Learn when to use explicit type annotations.  
3. Explore default parameter types and return types in functions.  

**Mini-Projects**  
1. **Currency Converter**  
   - Write a function that converts a value between two currencies using explicit types.  
2. **Task Tracker**  
   - Create a function that filters tasks based on their status (`completed`, `pending`). Use inferred types for parameters.  

**Examples**  
```typescript
// Currency Converter
function convertCurrency(amount: number, rate: number): number {
  return amount * rate;
}

console.log(convertCurrency(100, 1.2)); // 120

// Task Tracker
type Task = { id: number; title: string; status: "completed" | "pending" };

const tasks: Task[] = [
  { id: 1, title: "Learn TypeScript", status: "completed" },
  { id: 2, title: "Practice coding", status: "pending" },
];

const getPendingTasks = (tasks: Task[]) => tasks.filter((task) => task.status === "pending");
console.log(getPendingTasks(tasks));
```

**Resources**  
- [TypeScript Handbook: Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)  

---

#### **Day 4: Introduction to Zod**

**Tasks**  
1. Learn the basics of Zod for runtime schema validation.  
2. Create and validate simple schemas (e.g., objects, strings, numbers).  
3. Integrate Zod with basic React forms.  

**Mini-Projects**  
1. **Login Validator**  
   - Validate a login form with `email` and `password` fields using Zod.  
2. **Profile Schema**  
   - Define a user profile schema with `name`, `age`, and `email` using Zod. Validate sample data.  

**Examples**  
```typescript
import { z } from "zod";

// Login Validator
const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const loginData = { email: "test@example.com", password: "password123" };

console.log(LoginSchema.safeParse(loginData));

// Profile Schema
const ProfileSchema = z.object({
  name: z.string().min(1),
  age: z.number().positive(),
  email: z.string().email(),
});

const profileData = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(ProfileSchema.safeParse(profileData));
```

**Resources**  
- [Zod Official Documentation](https://zod.dev/)  

---

#### **Day 5: Advanced Zod Features**

**Tasks**  
1. Learn about nested schemas and arrays.  
2. Use Zod to create optional and default fields.  
3. Explore validation pipelines and error messages.  

**Mini-Projects**  
1. **Todo List Validator**  
   - Validate an array of todos with fields like `id`, `title`, and `completed`.  
2. **Form with Optional Fields**  
   - Add optional fields (e.g., `phone number`) to a registration form.  

**Examples**  
```typescript
// Todo List Validator
const TodoSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    completed: z.boolean(),
  })
);

const todos = [
  { id: 1, title: "Learn Zod", completed: true },
  { id: 2, title: "Build projects", completed: false },
];

console.log(TodoSchema.safeParse(todos));
```

---