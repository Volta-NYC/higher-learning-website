export default function Footer() {
    return (
      <footer className="w-full border-t p-4">
        <div className="mx-auto max-w-6xl text-sm opacity-80">
          © {new Date().getFullYear()} Higher Learning
        </div>
      </footer>
    );
  }
  