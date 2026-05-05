export default function Footer() {
  return (
    <footer className="border-t hairline py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <div>© {new Date().getFullYear()} Out of Office Studio</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">LinkedIn</a>
          <a href="#" className="hover:text-foreground">Are.na</a>
        </div>
      </div>
    </footer>
  );
}
