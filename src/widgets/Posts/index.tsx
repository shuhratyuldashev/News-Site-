import { Tabs, TabsContent } from "@/shared/ui/tabs";
import TagsWidget from "./ui/tags-posts";
import TabsPosts from "./ui/tabs-posts";
import { TabsTriggers } from "./models";

const PostsWidget = ({ isAuth }: { isAuth: boolean }) => {
  const defaultChecked = TabsTriggers.find((t) => t.isDefault === true);

  return (
    <Tabs
      defaultValue={defaultChecked?.value || ""}
      className="w-full lg:w-auto"
    >
      <TabsPosts isAuth={isAuth} />
      {TabsTriggers.map((t) => (
        <TabsContent key={t.value} value={t.value}>
          <main className="flex justify-between">
            <h1>{t.label}</h1>
            <TagsWidget />
          </main>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PostsWidget;
