export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-yellow-300 p-6 relative overflow-hidden">
      {children}
    </div>
  );
};
