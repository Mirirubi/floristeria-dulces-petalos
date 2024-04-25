import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col px-auto items-center">
      <div className="italic p-8">
        <div>¿Cómo he terminado aquí?</div>
      </div>
      <Image
        className="levitating-image "
        src="/lost.png"
        alt="MR"
        width={300}
        height={300}
      />
      <div className="italic p-8">
        <div>
          Será mejor que vuelva
          <Link className="underline mx-2" href="/">
            a la página principal!
          </Link>
        </div>
      </div>
    </div>
  );
}
