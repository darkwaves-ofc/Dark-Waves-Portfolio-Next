import React from "react";
import "./NotFound.css";
import Image from "next/image";
import errorimage from "./404/404.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container w-full flex-center h-full m-auto">
      <div className="flex-col-center p-5">
        <h1 className="font-xl font-weight-800 text-center">404 - Not Found</h1>
        <p className="m-b-4 text-center">Oops! The page you are looking for does not exist.</p>
        <Link href={"/"}>Retun Home</Link>
      </div>
      <div className="flex-col-center notfound-pic p-5">
        <Image src={errorimage} width={500} height={500} />
      </div>
    </div>
  );
}
