"use client";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ShortUrl } from "@/app/shortUrl/page";
import Link from "next/link";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const FormUrl = () => {
  const [Urlshort, setUrlshort] = useState("");
  const formRef = useRef();
  const shortuUrlNew = async (formData) => {
    const data = await ShortUrl(formData);
    console.log(data)
    if (data) setUrlshort(data.shortUrl);
    formRef.current?.reset();
  };
  const clipboard = (copy) => {
    navigator.clipboard
      .writeText(copy)
      .then(() => {
        toast(`Copy url ${copy}`, {
          duration: 4000,
          position: 'top-center',
        
          icon: <CopyAllIcon />,
        
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },
        
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        });
      })
      .catch(function () {
        console.error("Error al copiar texto al portapapeles");
      });
  };
  return (
    <form ref={formRef} action={shortuUrlNew} className="form-acortador">
      <Toaster position="top-center" reverseOrder={false} />
      <input type="text" name="url" id="url" placeholder="Acortar Url" />
      <button>Acortar</button>
      {Urlshort !== "" && (
        <div className="container-shortlink">
          Url:
          <Link target="_blank" rel="noreferrer" href={Urlshort}>{`${window.location.origin}/${Urlshort}`}</Link>
          <ContentCopyIcon
            onClick={() => clipboard(`${window.location.origin}/${Urlshort}`)}
            fontSize="medium"
          />
        </div>
      )}
    </form>
  );
};
