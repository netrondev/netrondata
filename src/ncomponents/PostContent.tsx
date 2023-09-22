import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTheme } from "next-themes";
import moment from "moment";
import { PostTags } from "./PostTags";
import remarkYoutube from "remark-youtube";
import { type ComponentProps } from "react";
import Link from "next/link";
import slugify from "slugify";

export function PostContent(props: {
  title: string;
  content: string;
  tags: string[];
  updated_at: Date;
  created_at: Date;
  onAddTag?: ComponentProps<typeof PostTags>["onAdd"];
  onDeletePost?: () => Promise<void>;
}) {
  const theme = useTheme();
  const was_updated = props.updated_at.getTime() != props.created_at.getTime();

  return (
    <div className="overflow-clip rounded bg-white shadow-2xl dark:bg-neutral-900/50 dark:text-neutral-400">
      <article>
        <header className="flex flex-col bg-gradient-to-l p-2 py-4 pr-4 dark:from-transparent dark:to-neutral-900/50">
          <Link
            href={`/post/${slugify(props.title).toLowerCase()}`}
            className="pl-1 text-2xl font-bold leading-none dark:text-neutral-300 hover:dark:text-white"
          >
            {props.title}
          </Link>

          <div className="">
            <span className="text-xs opacity-30">
              {/* {moment(props.post.created_at).format("YYYY MMMM Do, HH:mm")} */}
              {was_updated ? "updated" : "posted"}&nbsp;
              {moment(props.updated_at).fromNow()}
            </span>
          </div>

          <div className="flex">
            <PostTags tags={props.tags} onAdd={props.onAddTag} />
            <div className="flex-1" />

            {/* <LayoutAdmin>
              <Button
                onClick={props.onDeletePost}
                className="ml-5 flex h-6 items-center rounded-md border-none"
              >
                delete
              </Button>
            </LayoutAdmin> */}
          </div>
        </header>

        <section className="p-3 pb-2">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkYoutube]}
            remarkRehypeOptions={{ allowDangerousHtml: true }}
            components={{
              code: ({
                node: _node,
                inline,
                className,
                children,
                ...props
              }) => {
                const match = /language-(\w+)/.exec(className ?? "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    style={theme.resolvedTheme === "dark" ? oneDark : oneLight}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {props.content}
          </ReactMarkdown>
        </section>
      </article>
    </div>
  );
}
