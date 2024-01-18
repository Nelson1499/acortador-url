import Image from "next/image";
import wave from "@/ilustraciones/wave.svg";
import link1 from "@/ilustraciones/link-1.svg";
import link2 from "@/ilustraciones/link-2.svg";
import { FormUrl } from "@/form/form-urls";

export const metadata = {
  icons: {
    icon: "/icon.png",
  },
};
export default function Home() {
  return (
    <main className="contenedor">
      <header>
        <h1>Acortador de urls</h1>
      </header>
      <Image
        className="image-link1"
        src={link1}
        alt="vector"
        style={{ objectFit: "cover" }}
      />
      <FormUrl />
      <Image
        className="image-wave"
        src={wave}
        alt="vector"
        style={{ objectFit: "cover" }}
      />
      <Image
        className="image-link2"
        src={link2}
        alt="vector"
        style={{ objectFit: "cover" }}
      />
    </main>
  );
}
