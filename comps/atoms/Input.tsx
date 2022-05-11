export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="w-full h-full p-3 bg-transparent border-2 rounded-sm ring-[2px] ring-transparent outline-none group focus:ring-slate-700 focus:dark:ring-slate-400 focus:"
      {...props}
    />
  )
}
