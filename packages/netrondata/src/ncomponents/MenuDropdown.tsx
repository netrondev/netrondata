import React, { useState } from 'react'
// import { AiOutlineCheck } from "react-icons/ai";
// import { BsChevronDown } from "react-icons/bs";
import { cn } from '../nutils/cn'
import Button from './Button'

const contents_data: {
  title: string
  exercises: string[]
  is_done?: boolean
}[] = [
  {
    title: 'Advanced Props',
    is_done: true,
    exercises: [
      'Type-Checking React Props With Discriminated Unions',
      'Destructuring Discriminated Unions in React Props',
      'Adding a Prop Required Across Discriminated Union Variants',
      'Differentiating Props With a Boolean Discriminator',
      'Using the Record Type to Represent an Empty Object',
      'Conditionally Require Props With Discriminated Unions',
      'Finding a Better Type Definition For A Mapped Component',
      'Syncing Types without Manual Updates',
      'The Partial Autocompletion Quirk',
      'Extracting Keys and Values from a Type',
      'Ensuring Correct Inference for Prop Types',
      'Inference from a Single Source of Truth',
    ],
  },

  {
    title: 'Using Generics with Components',
    is_done: true,
    exercises: [
      'DRY out Code with Generic Type Helpers',
      'Refactoring to a Type Helper',
      'Constraining a Type Helper to Accept Specific Values',
      'Adding Type Arguments to a Hook',
      'Wrapping a Generic Function Inside of Another',
      'Applying Generics to Components',
      'Generics in Class Components',
      'Passing Type Arguments To Components',
      'Generic Inference through Multiple Type Helpers',
      'Build a useMutation hook',
      'Generics vs Discriminated Unions',
    ],
  },

  {
    title: 'Advanced Hooks',
    exercises: [
      'Fixing Type Inference in a Custom React Hook',
      'Strongly Typing React Context',
      'Using TypeScript to Manage Complex State',
      'Using Discriminated Unions in useState',
      'Discriminated Tuples in Custom Hooks',
      'Use Function Overloads for Better Type Inference',
      'Mimicking useState Behavior with Function Overloads',
      'Currying Hooks',
    ],
  },
  {
    title: 'Types Deep Dive',
    exercises: [
      'Exploring the React Namespace',
      'JSX.Element, React.ReactElement, and React.ReactNode',
      'Strongly Typing Children in React',
      'Exploring JSX.IntrinsicElements',
      "Understanding React's ElementType and ComponentType",
      "Appending to React's Global Namespace",
      'Modify Existing Interfaces in the Global React Namespace',
      'Add a New Global Element in TypeScript',
      'Exploring HTML Attribute and Element Types',
      'Add Attributes to All Elements with Declaration Merging',
    ],
  },

  {
    title: 'Advanced Patterns',
    exercises: [
      'Strongly Typed Lazy Loading',
      'Render Props',
      'Records of Components with the Same Props',
      'The Problem With forwardRef',
      'Fixing forwardRef Locally',
      'Typing Higher Order Components',
      'Using Higher Order Components with Generic Components',
      'The `as` Prop in React',
      'The `as` Prop with Custom Components',
      'The `as` Prop with Defaults',
      'The `as` Prop with `forwardRef`',
    ],
  },
  {
    title: 'Working with External Libraries',
    exercises: [
      "React Hook Form's Types",
      'Wrapping the useForm Hook from React Hook Form',
      "React-Select's Generics",
      "Understanding React Query's Overloads",
      'Wrapping useQuery',
    ],
  },
]

function ContentMenu(props: { title: string; exercises: string[]; is_done?: boolean }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded border text-neutral-600">
      <Button
        className="flex w-full items-center rounded"
        onClick={() => {
          setExpanded(!expanded)
        }}
      >
        <div className="flex-1 whitespace-nowrap text-left">{props.title}</div>
        {/* {props.is_done && } */}
        {/* <BsChevronDown
          className={cn("transition", expanded ? "rotate-0" : "rotate-180")}
        /> */}
        toggle
      </Button>
      <div
        className={cn(
          'flex flex-col divide-y overflow-hidden text-sm transition-all',
          expanded ? 'h-80' : 'h-0'
        )}
      >
        {props.exercises.map((i) => (
          <div key={i} className="flex cursor-pointer gap-2 p-1 transition hover:bg-sky-50">
            check
            {/* <AiOutlineCheck
              className={cn(
                "mt-1",
                props.is_done ? "opacity-100" : "opacity-5"
              )}
            /> */}
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}

export function MenuDropdown() {
  return (
    <section className="flex flex-col gap-1">
      {contents_data.map((i) => (
        <ContentMenu key={i.title} title={i.title} exercises={i.exercises} is_done={i.is_done} />
      ))}
    </section>
  )
}
