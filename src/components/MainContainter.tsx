export const MainContainter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 relative z-10">{children}</div>
  );
};
