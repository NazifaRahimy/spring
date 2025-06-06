import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Poems",
    description: "Generated by create next app",
  };

export default function PoemsLayout ({
    children,
} : Readonly<{
    children: React.ReactNode
}>){

    return (
      <div>
          {children}
      </div>
    )
}