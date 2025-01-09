
---

### **Week 2: Advanced TypeScript + Zod**

---

#### **Day 6: Advanced TypeScript Utility Types**

**Tasks**  
1. Learn about advanced TypeScript utility types: `Record`, `Pick`, `Omit`, `Partial`, `Required`.  
2. Use these utility types to manipulate and manage object structures.  
3. Understand how to apply these utility types in real-world scenarios.  

**Mini-Projects**  
1. **User Data Management**  
   - Use `Pick` to create a simplified version of a user object.  
   - Use `Omit` to exclude certain properties like `password`.  
2. **Form Validation Utility**  
   - Use `Partial` and `Required` to manage optional and required fields in a form schema.  

**Examples**  
```typescript
// User Data Management
type User = {
  name: string;
  email: string;
  password: string;
};

type UserWithoutPassword = Omit<User, "password">;
type UserWithOnlyName = Pick<User, "name">;

const user: User = { name: "John", email: "john@example.com", password: "12345" };
const userWithoutPassword: UserWithoutPassword = { name: "John", email: "john@example.com" };

// Form Validation Utility
type FormFields = {
  username: string;
  email: string;
  password: string;
};

type PartialFormFields = Partial<FormFields>; // All fields are optional
type RequiredFormFields = Required<FormFields>; // All fields are required

const partialForm: PartialFormFields = { email: "test@example.com" };
const requiredForm: RequiredFormFields = { username: "John", email: "john@example.com", password: "12345" };
```

**Resources**  
- [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)  

---

#### **Day 7: TypeScript with APIs**

**Tasks**  
1. Learn how to use TypeScript with APIs.  
2. Define types for API response data.  
3. Use `async/await` for making API requests and type the responses.  

**Mini-Projects**  
1. **Weather API**  
   - Fetch weather data from a public API and define the expected response types using TypeScript.  
2. **User List from API**  
   - Fetch user data from an API and type the response using TypeScript.  

**Examples**  
```typescript
// Weather API
type WeatherResponse = {
  temperature: number;
  condition: string;
  humidity: number;
};

async function getWeather(city: string): Promise<WeatherResponse> {
  const response = await fetch(`https://api.weather.com/v3/weather/${city}`);
  const data: WeatherResponse = await response.json();
  return data;
}

getWeather("New York").then((data) => {
  console.log(`Temperature: ${data.temperature}°C, Condition: ${data.condition}`);
});

// User List from API
type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();
  return data;
}

getUsers().then((users) => {
  console.log(users);
});
```

**Resources**  
- [TypeScript: Fetch API Data](https://www.typescriptlang.org/docs/handbook/2/objects.html#fetching-api-data)  

---

#### **Day 8: Zod Validation Pipelines**

**Tasks**  
1. Learn about validation pipelines in Zod.  
2. Use `.refine()` for custom validation.  
3. Use `.transform()` for data transformation.  

**Mini-Projects**  
1. **Password Strength Validator**  
   - Create a Zod validation schema that checks if a password contains at least one number, one special character, and one uppercase letter.  
2. **Date Validator**  
   - Use `.refine()` to ensure a date is within a valid range (e.g., from today).  

**Examples**  
```typescript
import { z } from "zod";

// Password Strength Validator
const passwordSchema = z
  .string()
  .min(8)
  .refine((password) => /\d/.test(password), {
    message: "Password must contain at least one number",
  })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Password must contain at least one uppercase letter",
  })
  .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
    message: "Password must contain at least one special character",
  });

console.log(passwordSchema.safeParse("Password123!")); // Success

// Date Validator
const dateSchema = z
  .string()
  .refine((date) => new Date(date) >= new Date(), {
    message: "Date must not be in the past",
  });

console.log(dateSchema.safeParse("2025-01-01")); // Success
```

**Resources**  
- [Zod Docs: Refinement and Transformation](https://zod.dev/)  

---

#### **Day 9: Advanced Zod Features**

**Tasks**  
1. Use Zod with nested objects and arrays.  
2. Use `.array()` to validate arrays of objects.  
3. Learn about custom error messages and how to customize validation.  

**Mini-Projects**  
1. **Shopping Cart Validator**  
   - Define a schema to validate a shopping cart array containing products.  
2. **Registration Form with Nested Data**  
   - Validate a user registration form that includes nested address data (e.g., `city`, `postalCode`).  

**Examples**  
```typescript
// Shopping Cart Validator
const CartItemSchema = z.object({
  productId: z.number(),
  quantity: z.number().positive(),
  price: z.number().positive(),
});

const CartSchema = z.array(CartItemSchema);

const cart = [
  { productId: 1, quantity: 2, price: 100 },
  { productId: 2, quantity: 1, price: 50 },
];

console.log(CartSchema.safeParse(cart));

// Registration Form with Nested Data
const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  postalCode: z.string().length(5),
});

const RegistrationSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  address: AddressSchema,
});

const registrationData = {
  username: "john_doe",
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    postalCode: "10001",
  },
};

console.log(RegistrationSchema.safeParse(registrationData));
```

**Resources**  
- [Zod: Arrays and Nested Objects](https://zod.dev/)  

---

#### **Day 10: Advanced TypeScript and Zod Integration**

**Tasks**  
1. Integrate TypeScript and Zod in a real-world example.  
2. Use TypeScript for typing Zod schemas.  
3. Handle async validation and integrate Zod with forms.  

**Mini-Projects**  
1. **Async Login Validator**  
   - Create an async Zod schema that validates user login credentials with a mock API request.  
2. **Form Validation with Zod in React**  
   - Build a React form and use Zod for client-side validation of the form fields.  

**Examples**  
```typescript
// Async Login Validator
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

async function asyncValidate(data: any) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async validation
  return LoginSchema.safeParse(data);
}

asyncValidate({ email: "test@example.com", password: "password123" }).then((result) => {
  console.log(result.success ? "Valid" : "Invalid");
});

// React Form with Zod
import React, { useState } from "react";
import { z } from "zod";

const UserFormSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

function UserForm() {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = () => {
    const result = UserFormSchema.safeParse(formData);
    if (result.success) {
      alert("Form submitted!");
    } else {
      setErrors(result.error.errors.map((err) => err.message));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button onClick={handleSubmit}>Submit</button>
      {errors.length > 0 && <div>{errors.join(", ")}</div>}
    </div>
  );
}

export default UserForm;
```

**Resources**  
- [Zod with Async Validation](https://zod.dev/)  

---
