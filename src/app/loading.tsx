import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="animate-spin h-12 w-12 mx-8">
        <Image src="/load.png" alt="Loading" width={100} height={100} />
      </div>
    </div>
  );
}
