export default function ServiceCardPlaceholder() {
  return (
    <div className="flex h-full justify-items-start animate-pulse">
      <div className="px-5 py-8 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg border border-white">
        <div className="h-10 w-10 inline-block bg-bgColor mb-4 rounded" />
        <div className="h-8 w-xs bg-bgColor rounded mb-2" />
        <div class="h-4 w-full bg-bgColor rounded  mb-1" />
        <div class="h-4 w-full bg-bgColor rounded mb-1" />
        <div class="h-4 w-full bg-bgColor rounded mb-1" />
        <div class="h-4 w-full bg-bgColor rounded mb-1" />
        <div class="h-4 w-full bg-bgColor rounded mb-1" />
        <div class="h-4 w-full bg-bgColor rounded mb-1" />
        <div class="h-4 w-1/5 bg-bgColor rounded mb-2" />
      </div>
    </div>
  );
}
