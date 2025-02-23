"use client";

import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function DrawerDemo() {
  return (
    <div className="flex justify-center">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="my-10 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            What is IEEE
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-2xl p-6">
            <DrawerHeader>
              <DrawerTitle>What is IEEE?</DrawerTitle>
              <DrawerDescription>
                Learn more about the Institute of Electrical and Electronics
                Engineers.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <p className="text-sm text-muted-foreground">
                IEEE, the worlds largest technical professional organization,
                was founded in 1963 to advance technology for humanitys benefit.
                It fosters innovation, develops standards, and promotes science,
                technology, and engineering through publications, conferences,
                and educational activities. With over 420,000 members in 160+
                countries, IEEE spans fields like electrical engineering,
                computer science, and biomedical engineering. It offers
                workshops, certifications, and online courses to enhance
                technical skills and professional growth. IEEE plays a vital
                role in shaping technology, fostering collaboration, and driving
                innovations that address global challenges, while promoting
                knowledge sharing and industry standards for societal benefit.
              </p>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
