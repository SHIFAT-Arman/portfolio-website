"use client";

import { useState } from "react";

import {
  CplusplusPlain,
  JavaOriginalWordmark,
  OracleOriginal,
  JavascriptOriginal,
  ReactOriginalWordmark,
  NodejsOriginalWordmark,
  NextjsOriginalWordmark,
  PythonOriginalWordmark,
  PandasPlainWordmark,
  NumpyOriginalWordmark,
  LinuxOriginal,
  TensorflowOriginal,
  KerasOriginal,
  MatplotlibOriginal,
  AnacondaOriginalWordmark,
} from "devicons-react";

const iconsMap = {
  CplusplusPlain,
  JavaOriginalWordmark,
  OracleOriginal,
  JavascriptOriginal,
  ReactOriginalWordmark,
  NodejsOriginalWordmark,
  NextjsOriginalWordmark,
  PythonOriginalWordmark,
  PandasPlainWordmark,
  NumpyOriginalWordmark,
  LinuxOriginal,
  TensorflowOriginal,
  KerasOriginal,
  MatplotlibOriginal,
  AnacondaOriginalWordmark,
};

const skillsData = [
  { icon: "CplusplusPlain", size: 60, bgClass: "p-8 sm:p-10" },
  { icon: "JavaOriginalWordmark", size: 60, bgClass: "p-6 sm:p-10" },
  { icon: "OracleOriginal", size: 80, bgClass: "p-6 sm:p-10" },
  { icon: "JavascriptOriginal", size: 60, bgClass: "p-6 sm:p-10" },
  { icon: "ReactOriginalWordmark", size: 60, bgClass: "p-6 sm:p-10" },
  { icon: "NodejsOriginalWordmark", size: 80, bgClass: "p-6 sm:p-10" },
  { icon: "NextjsOriginalWordmark", size: 80, bgClass: "p-6 sm:p-10" },
  { icon: "PythonOriginalWordmark", size: 60, bgClass: "p-6 sm:p-10" },
  { icon: "NumpyOriginalWordmark", size: 90, bgClass: "p-6 sm:p-10" },
  { icon: "PandasPlainWordmark", size: 70, bgClass: "p-6 sm:p-10" },
  { icon: "LinuxOriginal", size: 70, bgClass: "p-6 sm:p-10" },
  { icon: "TensorflowOriginal", size: 70, bgClass: "p-6 sm:p-10" },
  { icon: "KerasOriginal", size: 70, bgClass: "p-6 sm:p-10" },

  { icon: "MatplotlibOriginal", size: 70, bgClass: "p-6 sm:p-10" },
  { icon: "AnacondaOriginalWordmark", size: 70, bgClass: "p-6 sm:p-10" },
];

export default function Skills() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-900 pt-10" id="sk">
        <main className="relative isolate">
          {/* CTA section */}

          <div className="relative isolate -z-10 mt-10">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="mx-auto  max-w-2xl  gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                <div className="relative ">
                  <h2 className="p-3 text-3xl sm:text-5xl font-bold text-white">
                    Skills
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300 italic">
                    I have worked with these following frameworks and tools
                  </p>
                </div>
                <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl sm:grid-cols-3">
                  {skillsData.map((skill, index) => {
                    const IconComponent = iconsMap[skill.icon];
                    return (
                      <div
                        key={index}
                        className={`bg-white/5 ${skill.bgClass}`}
                      >
                        <div className="flex items-center justify-center max-h-12 w-full object-contain">
                          <IconComponent size={skill.size} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
