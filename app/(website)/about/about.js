import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        O mnie
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passio.</p>
      </div>

      {/* <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div> */}

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Cześć! 
          Jestem Wyluzowany Kucharz, choć dla znajomych po prostu Kamil.
          Gotowanie jest jedna z moich odskocznia od codziennego zgiełku i stresów.
        </p>
        <p>
          Nie wierzę w nadmierne komplikowanie przepisów.
          Dla mnie gotowanie to przede wszystkim radość
          i prostota – bo najpyszniejsze potrawy to te, które robisz z uśmiechem.
          Moim największym marzeniem jest widzieć,
          jak przy wspólnym stole bliscy się śmieją, rozmawiają i delektują tym,
          co przygotowałem.
        </p>
        <p>
          "Szczypta Radości" to moje miejsce, gdzie dzielę się przepisami,
          które są proste, ale mają to coś – tę nutę luzu, kreatywności i smaku,
          który wywołuje uśmiech.
        </p>
        <p>
          Zapraszam do mojego kulinarnego świata! Bez stresu, 
          z humorem i oczywiście z odrobiną radości w każdym kęsie.
        </p>
      </div>
    </Container>
  );
}
