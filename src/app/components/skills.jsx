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
            <div className="relative isolate px-6 pt-14 lg:px-8">
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 opacity-30 sm:left-[calc(70%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </div>

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
