import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Poeticsentens",
    description: "Generated by create next app",
  };

export default function ContactLayout ({
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