import React from "react";
import { Alert } from "./Alert";
import { Section } from "./Section";
import { MenuDropdown } from "./MenuDropdown";

export default { title: "MenuDropdown" };

export const MenuDropdownSamples = () => (
  <Section className="flex flex-col">
    <MenuDropdown
      contents={[
        {
          title: "Advanced Props",
          is_done: true,
          subitems: [
            "Type-Checking React Props With Discriminated Unions",
            "Destructuring Discriminated Unions in React Props",
            "Adding a Prop Required Across Discriminated Union Variants",
            "Differentiating Props With a Boolean Discriminator",
            "Using the Record Type to Represent an Empty Object",
            "Conditionally Require Props With Discriminated Unions",
            "Finding a Better Type Definition For A Mapped Component",
            "Syncing Types without Manual Updates",
            "The Partial Autocompletion Quirk",
            "Extracting Keys and Values from a Type",
            "Ensuring Correct Inference for Prop Types",
            "Inference from a Single Source of Truth",
          ].map((i) => ({ title: i })),
        },

        {
          title: "Using Generics with Components",
          is_done: true,
          subitems: [
            "DRY out Code with Generic Type Helpers",
            "Refactoring to a Type Helper",
            "Constraining a Type Helper to Accept Specific Values",
            "Adding Type Arguments to a Hook",
            "Wrapping a Generic Function Inside of Another",
            "Applying Generics to Components",
            "Generics in Class Components",
            "Passing Type Arguments To Components",
            "Generic Inference through Multiple Type Helpers",
            "Build a useMutation hook",
            "Generics vs Discriminated Unions",
          ].map((i) => ({ title: i })),
        },

        {
          title: "Advanced Hooks",
          subitems: [
            "Fixing Type Inference in a Custom React Hook",
            "Strongly Typing React Context",
            "Using TypeScript to Manage Complex State",
            "Using Discriminated Unions in useState",
            "Discriminated Tuples in Custom Hooks",
            "Use Function Overloads for Better Type Inference",
            "Mimicking useState Behavior with Function Overloads",
            "Currying Hooks",
          ].map((i) => ({ title: i })),
        },
        {
          title: "Types Deep Dive",
          subitems: [
            "Exploring the React Namespace",
            "JSX.Element, React.ReactElement, and React.ReactNode",
            "Strongly Typing Children in React",
            "Exploring JSX.IntrinsicElements",
            "Understanding React's ElementType and ComponentType",
            "Appending to React's Global Namespace",
            "Modify Existing Interfaces in the Global React Namespace",
            "Add a New Global Element in TypeScript",
            "Exploring HTML Attribute and Element Types",
            "Add Attributes to All Elements with Declaration Merging",
          ].map((i) => ({ title: i })),
        },

        {
          title: "Advanced Patterns",
          subitems: [
            "Strongly Typed Lazy Loading",
            "Render Props",
            "Records of Components with the Same Props",
            "The Problem With forwardRef",
            "Fixing forwardRef Locally",
            "Typing Higher Order Components",
            "Using Higher Order Components with Generic Components",
            "The `as` Prop in React",
            "The `as` Prop with Custom Components",
            "The `as` Prop with Defaults",
            "The `as` Prop with `forwardRef`",
          ].map((i) => ({ title: i })),
        },
        {
          title: "Working with External Libraries",
          subitems: [
            "React Hook Form's Types",
            "Wrapping the useForm Hook from React Hook Form",
            "React-Select's Generics",
            "Understanding React Query's Overloads",
            "Wrapping useQuery",
          ].map((i) => ({ title: i })),
        },
      ]}
    />
  </Section>
);
