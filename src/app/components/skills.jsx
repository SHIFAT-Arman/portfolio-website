"use client";
import { CplusplusPlain } from "devicons-react";
import { JavaOriginalWordmark } from "devicons-react";
import { OracleOriginal } from "devicons-react";
import { JavascriptOriginal } from "devicons-react";
import { ReactOriginalWordmark } from "devicons-react";
import { NodejsOriginalWordmark } from "devicons-react";
import { NextjsOriginalWordmark } from "devicons-react";

import { PythonOriginalWordmark } from "devicons-react";
import { PandasOriginalWordmark } from "devicons-react";
import { NumpyOriginalWordmark } from "devicons-react";

export default function Skills() {
  return (
    <div className="bg-white py-24 sm:py-32" id="sk">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 ">
              Skills matter most
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I have experience in these programming languages and frameworks. I
              intend to learn new technologies and frameworks to keep up with
              the latest trends in the industry.
            </p>
            <div className="mt-8 flex items-center gap-x-6"></div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 justify-items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <CplusplusPlain size={60} />
            <JavaOriginalWordmark size={60} />
            <OracleOriginal size={80} />
            <JavascriptOriginal size={60} />
            <ReactOriginalWordmark size={60} />
            <NodejsOriginalWordmark size={80} />
            <NextjsOriginalWordmark size={80} />
            <PythonOriginalWordmark size={60} />
            <NumpyOriginalWordmark size={90} />
            <PandasOriginalWordmark size={70} />
          </div>
        </div>
      </div>
    </div>
  );
}
