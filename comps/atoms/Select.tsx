export const Select = (
  props: React.SelectHTMLAttributes<HTMLSelectElement>,
) => {
  return (
    <select
      className="w-full h-full p-3 bg-transparent border-2 rounded-sm ring-[2px] ring-transparent outline-none group focus:ring-slate-700 focus:dark:ring-slate-400 focus:"
      {...props}
    />
  )
}
export const Option = (
  props: React.OptionHTMLAttributes<HTMLOptionElement>,
) => {
  return (
    <option
      className="w-full h-full p-3 bg-transparent border-2 rounded-sm ring-[2px] ring-transparent outline-none group focus:ring-slate-700 focus:dark:ring-slate-400 focus:"
      {...props}
    />
  )
}
