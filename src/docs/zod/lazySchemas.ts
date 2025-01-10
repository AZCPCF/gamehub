import { z } from 'zod';

// Define the tree schema type first
const tree:any = z.lazy(() =>
  z.object({
    value: z.string(),
    left: tree.optional(),
    right: tree.optional(),
  })
);

const validTree = tree.parse({
  value: "root",
  left: { value: "left",left:{value:"12"} },
  right: { value: "right", left: { value: "left-left" } },
});

console.log(validTree);


//////////


// Recursive schema
const categorySchema:any = z.object({
  name: z.string(),
  subcategories: z.array(z.lazy(() => categorySchema)), // Recursive
});

console.log(
  categorySchema.parse({
    name: "Parent",
    subcategories: [{ name: "Child", subcategories: [] }],
  })
);

