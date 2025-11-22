"use client";

export function SkeletonCard() {
  return (
    <div className="bg-card rounded-xl p-6 border border-border animate-pulse">
      <div className="w-12 h-12 bg-muted rounded-full mb-4" />
      <div className="h-6 bg-muted rounded w-3/4 mb-3" />
      <div className="h-4 bg-muted rounded w-full mb-2" />
      <div className="h-4 bg-muted rounded w-5/6" />
    </div>
  );
}

export function SkeletonTestimonial() {
  return (
    <div className="bg-card rounded-xl p-6 border border-border animate-pulse">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-muted rounded" />
        ))}
      </div>
      <div className="h-4 bg-muted rounded w-full mb-2" />
      <div className="h-4 bg-muted rounded w-full mb-2" />
      <div className="h-4 bg-muted rounded w-3/4 mb-4" />
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-muted rounded-full" />
        <div className="flex-1">
          <div className="h-4 bg-muted rounded w-1/2 mb-2" />
          <div className="h-3 bg-muted rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonArticle() {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border animate-pulse">
      <div className="h-48 bg-muted" />
      <div className="p-6">
        <div className="h-6 bg-muted rounded w-3/4 mb-3" />
        <div className="h-4 bg-muted rounded w-full mb-2" />
        <div className="h-4 bg-muted rounded w-5/6 mb-4" />
        <div className="flex items-center justify-between">
          <div className="h-4 bg-muted rounded w-20" />
          <div className="h-8 bg-muted rounded w-24" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonSection() {
  return (
    <div className="py-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="h-10 bg-muted rounded w-1/2 mx-auto mb-4" />
          <div className="h-6 bg-muted rounded w-2/3 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}
