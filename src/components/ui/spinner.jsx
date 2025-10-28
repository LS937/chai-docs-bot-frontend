import { Origami } from "lucide-react"


import { cn } from "@/lib/utils"

function Spinner({
  className,
  ...props
}) {
  return (
    <Origami
      role="status"
      aria-label="Loading"
      className={cn("size-6 animate-spin text-yellow-500", className)}
      {...props} />
  );
}

export { Spinner }
