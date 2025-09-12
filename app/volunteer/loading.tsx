export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Skeleton */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-12 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-4 w-4 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="h-12 w-80 bg-slate-200 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="space-y-2 mb-8">
            <div className="h-6 w-full bg-slate-200 rounded animate-pulse"></div>
            <div className="h-6 w-3/4 bg-slate-200 rounded mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Form Skeleton */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg border p-6">
            <div className="h-8 w-48 bg-slate-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 w-full bg-slate-200 rounded mb-6 animate-pulse"></div>

            <div className="space-y-6">
              {/* Form fields skeleton */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-10 w-full bg-slate-200 rounded animate-pulse"></div>
                </div>
              ))}

              <div className="pt-4">
                <div className="h-10 w-full bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom section skeleton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="h-8 w-64 bg-slate-200 rounded mx-auto mb-8 animate-pulse"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg border p-6">
                <div className="h-8 w-8 bg-slate-200 rounded mb-2 animate-pulse"></div>
                <div className="h-6 w-32 bg-slate-200 rounded mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
