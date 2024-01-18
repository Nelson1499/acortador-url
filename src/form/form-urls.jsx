"use client";
import { ShortUrl } from "@/app/shortUrl/page";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const FormUrl = () => {
  const [Urlshort, setUrlshort] = useState("");
  const pathname = usePathname();
  const formRef = useRef();
  const shortuUrlNew = async (formData) => {
    const data = await ShortUrl(formData);
    setUrlshort(data.shortUrl);
    console.log(data);
    formRef.current?.reset();
  };
  return (
    <form ref={formRef} action={shortuUrlNew} className="form-acortador">
      <input type="text" name="url" id="url" placeholder="Acortar Url" />
      <button>Acortar</button>
      <div>
        Url:
        <Link href={Urlshort}> {`${window.location.origin}/${Urlshort}`} </Link>
      </div>
    </form>
  );
};
