// import { api } from "~/nutils/api";
import { PostContent } from "./PostContent";
import { Loading } from "./Loading";
import { Container } from "./Container";

export function PostList({
  isLoading,
  className,
}: {
  tag?: string;
  post_slug?: string;
  className?: string;
  isLoading?: boolean;
}) {
  // const add_tag = api.posts.add_tag.useMutation();
  // const get_posts = api.posts.get_posts.useQuery({
  //   tag: props?.tag,
  //   post_slug: props?.post_slug,
  // });
  // const delete_post = api.posts.delete_post.useMutation();

  if (isLoading)
    return (
      <div className="animate-pulse rounded-lg bg-neutral-300/50 py-32 dark:bg-neutral-700/50">
        <Loading
          className="mx-auto self-center justify-self-center text-neutral-500"
          size={40}
        />
      </div>
    );

  return (
    <>
      <Container className={className}>
        <section className="flex flex-col gap-5">
          {/* {get_posts.data?.posts.map((p) => (
            <PostContent
              key={p.id}
              title={p.title}
              content={p.content}
              tags={p.tags}
              updated_at={p.updated_at}
              created_at={p.created_at}
              onAddTag={async (tag) => {
                await add_tag.mutateAsync({
                  post_id: p.id,
                  tag_title: tag.title,
                });
                await get_posts.refetch().catch(console.error);
              }}
              onDeletePost={async () => {
                await delete_post.mutateAsync({ post_id: p.id });
                await get_posts.refetch().catch(console.error);
              }}
            />
          ))} */}
        </section>
      </Container>
    </>
  );
}
