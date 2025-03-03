
const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-[40%] -left-[20%] h-[800px] w-[800px] rounded-full bg-accent/20 blur-[120px] opacity-60" />
      <div className="absolute -bottom-[40%] -right-[20%] h-[800px] w-[800px] rounded-full bg-primary/20 blur-[120px] opacity-60" />
    </div>
  );
};

export default BackgroundGradient;
