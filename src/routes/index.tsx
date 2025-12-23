import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="h-screen w-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center">
      <h1 className="text-white font-bold text-8xl">Hi I am desmond</h1>
    </div>
  );
}
