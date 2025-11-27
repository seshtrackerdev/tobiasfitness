import type { Route } from "./+types/home";
import { HomePage } from "../components/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tobias Ledoux Training | Rhode Island Personal Trainer" },
    {
      name: "description",
      content:
        "1:1 strength coaching with Tobias Ledoux in Rhode Island. Get stronger, feel better, and build consistency with personalized training plans.",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
