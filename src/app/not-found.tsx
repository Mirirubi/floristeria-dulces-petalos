import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Oh no!</h2>
      <p>La hemos encontrado la página!</p>
      Mejor <Link href="/">volvamos a la página principal!</Link>
    </div>
  );
}
