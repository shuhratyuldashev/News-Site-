import { Button } from "@/shared/ui/button";
import { TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Hash } from "lucide-react";
import { TabsTriggers } from "../models";

const TabsPosts = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <div className="flex items-center justify-between">
      <TabsList>
        {TabsTriggers.map((t) => (
          <TabsTrigger
            className={t.needAuth === isAuth || isAuth ? "block" : "hidden"}
            key={t.value}
            value={t.value}
          >
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <Button className="lg:hidden" size="icon" variant="secondary">
        <Hash />
      </Button>
    </div>
  );
};

export default TabsPosts;
