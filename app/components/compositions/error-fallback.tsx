export default function ErrorFallback({children}: {children?: React.ReactNode}) {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 flex justify-center bg-red-100 pt-4 text-red-500">
        <div className="text-red-brand text-center">
          <div className="text-lg font-bold">Error!</div>
          <div className="px-2 text-base">{children}</div>
        </div>
      </div>
    </div>
  )
}
