import React from "react";
import StreetMap from "./StreetMap";
export default function StreetSection() {
  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="mt-10 text-3xl font-bold mb-5">
            Зона нашей доставки:
          </h1>
          <StreetMap />
        </div>
      </section>
    </>
  );
}
