export default function ErrorFallback({children}: {children?: React.ReactNode}) {
  return (
    <div className="h-full">
      <div className="flex justify-center bg-red-100 pt-4 text-red-500 h-[96vh]">
        <div className="text-red-brand text-center">
          <div className="text-lg font-bold">Error!</div>
          <div className="px-2 text-base">{children}</div>
        </div>
      </div>
    </div>
  )
}
