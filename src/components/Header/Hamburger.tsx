
export const Hamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="flex flex-col justify-around w-full h-full gap-y-1">
      <div className={`w-6 h-0.5 bg-zinc-800 transition-transform duration-500 ease-in-out ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
      <div className={`w-6 h-0.5 bg-zinc-800 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
      <div className={`w-6 h-0.5 bg-zinc-800 transition-transform duration-500 ease-in-out ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
    </div>
  );
};