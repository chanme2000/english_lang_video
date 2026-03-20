import { cn } from "@/lib/utils"

export default function Section({ 
  children, 
  className, 
  id,
  title,
  description,
  container = true 
}) {
  return (
    <section 
      id={id} 
      className={cn("py-16 md:py-24 lg:py-32", className)}
    >
      <div className={cn(container && "container mx-auto px-4 md:px-6")}>
        {(title || description) && (
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
