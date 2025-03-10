import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  headingText: string;
};

export const PageLayout = ({ children, headingText }: Props) => {
  return (<div className="min-h-screen bg-gray-100">
  <div className="max-w-6xl mx-auto p-6">
    <h1 className={cn("font-bold text-3xl mb-6 text-gray-900")}>{headingText}</h1>
    {children}
  </div>
</div>)

  return (
    <div className="h-[100vh]">
        <h1 className={cn("m-4 font-bold text-3xl")}>{headingText}</h1>
      {children}
    </div>
  );
};
