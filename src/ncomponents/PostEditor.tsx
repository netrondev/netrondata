import { useState } from "react";
import Button from "~/ncomponents/Button";
import { Input } from "~/ncomponents/Input";
import { Label } from "~/ncomponents/Label";
import { TextArea } from "~/ncomponents/TextArea";
// import { api } from "~/nutils/api";
import { LayoutAdmin } from "./LayoutAdmin";
import { PostTags } from "./PostTags";
import { PostContent } from "./PostContent";

export function PostEditor() {
  const [title, title_set] = useState("");
  const [content, content_set] = useState("");
  const [tags, tags_set] = useState<string[]>([]);
  // const api_create_post = api.posts.create_post.useMutation();
  // const api_get_posts = api.posts.get_posts.useQuery();

  return (
    <LayoutAdmin>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <Label>Title</Label>
          <Input
            value={title}
            onChange={(e) => {
              title_set(e.target.value);
            }}
          />
          <Label>Content</Label>
          <TextArea
            value={content}
            onChange={(e) => {
              content_set(e.target.value);
            }}
          />

          <Label>Tags</Label>
          <PostTags
            tags={tags}
            // eslint-disable-next-line @typescript-eslint/require-await
            onAdd={async (tag) => {
              tags_set([...tags, tag.title]);
            }}
          />

          <Button
            onClick={() => {
              // void api_create_post.mutateAsync({ title, content, tags });
            }}
          >
            CREATE POST
          </Button>
        </div>

        <PostContent
          title={title}
          content={content}
          tags={tags}
          created_at={new Date()}
          updated_at={new Date()}
        />
      </div>
    </LayoutAdmin>
  );
}
