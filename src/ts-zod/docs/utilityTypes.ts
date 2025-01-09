
///// Utility Types

// Awaited

type user = {
    name: string;
  };
  type FetchData = Awaited<Promise<number>>;
  
  async function getData(data: FetchData): Promise<number> {
    return await data;
  }
  // Partial
  
  type PartialData = {
    title: string;
    id: number;
    desc: string;
  };
  function updateData(
    data: PartialData,
    updateField: Partial<PartialData>
  ): Partial<PartialData> {
    return { ...data, ...updateData };
  }
  const data: PartialData = {
    desc: "test",
    id: 12,
    title: "test",
  };
  
  const data2: Partial<PartialData> = updateData(data, { desc: "test" });
  
  // Required
  
  type numbers = {
    one?: number;
    two?: number;
  };
  const logNumbers: (data: Required<numbers>) => Required<numbers> = (data) => {
    return data;
  };
  const nums: Required<numbers> = { one: 12, two: 34 };
  console.log(logNumbers(nums));
  
  // Readonly
  
  interface User {
    name: string;
  }
  const userInfo: Readonly<User> = { name: "test" };
  // userInfo.name ='mmd'
  console.log(userInfo.name);
  
  // Record
  
  type CatName = "miffy" | "boris" | "mordred";
  interface CatInfo {
    age?: number;
    breed?: string;
  }
  const cats: Partial<Record<CatName, CatInfo>> = {
    miffy: { age: 12 },
    boris: { breed: "test" },
  };
  console.log(cats);
  
  // Pick
  
  interface Todo {
    title: string;
    desc: string;
    isFinished: boolean;
  }
  type UserTodo = Pick<Todo, "isFinished" | "desc">;
  const userTodo: UserTodo = { isFinished: true, desc: "test" };
  console.log(userTodo.isFinished);
  
  // Omit
  
  interface BookInterface {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
  
  type BookPreview = Omit<BookInterface, "title" | "completed">;
  const book: BookPreview = {
    // title: "test",
    // completed: true,
    createdAt: 120,
    description: "test",
  };
  console.log(book)