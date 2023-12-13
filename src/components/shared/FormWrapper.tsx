const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-fit items-center justify-center pb-12 pt-24">
      <div className="flex w-[1050px] flex-col items-center gap-4 rounded-md p-4 shadow-xl shadow-slate-200 md:p-8 ">
        {children}
      </div>
    </div>
  )
}

export default FormWrapper
