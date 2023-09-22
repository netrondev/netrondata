// import { type RouterOutputs } from "~/nutils/api";
import { LayoutAdmin } from "./LayoutAdmin";
import { type ComponentProps, useState } from "react";
import { Input } from "./Input";
import Button from "./Button";
import Link from "next/link";

function Tag(props: {
  title: string;
  // tag: RouterOutputs["basic"]["get_posts"]["posts"][number]
}) {
  return (
    <Link
      href={`/tag/${props.title}`}
      className="rounded-md px-2 py-1 text-xs text-neutral-500 dark:bg-neutral-900 hover:dark:bg-neutral-800 hover:dark:text-white"
    >
      <span className="opacity-50">#</span>
      {props.title}
    </Link>
  );
}

function AddTag(props: { onAdd: (tag: { title: string }) => Promise<void> }) {
  const [title, title_set] = useState("");
  return (
    <>
      <div className="flex gap-0">
        <Input
          value={title}
          onChange={(e) => {
            title_set(e.target.value);
          }}
          className="h-6 w-20 rounded-md rounded-r-none text-xs text-neutral-500"
        />
        <Button
          onClick={() => {
            props
              .onAdd({ title })
              .then(() => {
                title_set("");
              })
              .catch(console.error);
          }}
          className="flex h-6 items-center rounded-l-none rounded-r-md border-none"
        >
          +
        </Button>
      </div>
    </>
  );
}

export function PostTags(props: {
  tags: string[];
  onAdd?: ComponentProps<typeof AddTag>["onAdd"];
}) {
  return (
    <section className="flex items-center gap-1">
      {props.tags.map((t) => (
        <Tag key={t} title={t} />
      ))}

      {props.onAdd && (
        <LayoutAdmin>
          <AddTag onAdd={props.onAdd} />
        </LayoutAdmin>
      )}
    </section>
  );
}
