import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold font-display text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">This page has drifted away.</p>
        <div className="mt-6">
          <Link to="/" className="btn-primary inline-block">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
