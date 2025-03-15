import { TabsTriggerType } from "../types/types";

export const TabsTriggers: TabsTriggerType[] =[
    { value: "news", label: "Новые", needAuth: false, isDefault: true},
    { value: "popular", label: "Популярные", needAuth: false},
    { value: "my", label: "Личные", needAuth: true},
]