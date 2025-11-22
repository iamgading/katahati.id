export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {/* Header skeleton */}
      <div className="h-8 bg-muted rounded w-3/4"></div>
      <div className="h-4 bg-muted rounded w-1/2"></div>
      
      {/* Content skeleton */}
      <div className="space-y-3 pt-4">
        <div className="h-4 bg-muted rounded"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
        <div className="h-4 bg-muted rounded w-4/6"></div>
      </div>

      {/* Card skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-muted rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-muted rounded-lg mb-4"></div>
      <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-muted rounded w-1/2"></div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="animate-pulse space-y-4 p-6 border rounded-lg">
      {/* Avatar */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-muted rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-muted rounded w-1/3"></div>
          <div className="h-3 bg-muted rounded w-1/4"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded"></div>
        <div className="h-3 bg-muted rounded w-5/6"></div>
        <div className="h-3 bg-muted rounded w-4/6"></div>
      </div>
    </div>
  );
}
