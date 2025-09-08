import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="flex flex-col items-start gap-4 mt-8">
      <Link
        to="/GamesList"
        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded shadow-md text-lg font-semibold"
      >
        🎲 View Games
      </Link>
      <Link
        to="/about"
        className="bg-green-600 hover:bg-green-700 transition-colors text-white px-4 py-2 rounded shadow-md text-lg font-semibold"
      >
        ℹ️ About
      </Link>
    </div>
  ),
});
