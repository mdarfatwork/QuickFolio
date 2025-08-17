"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolios = [
  { id: 1, name: "Demo 1", url: "/sample/index1.html" },
  { id: 2, name: "Demo 2", url: "/sample/index2.html" },
  { id: 3, name: "Demo 3", url: "/sample/index3.html" },
  { id: 4, name: "Demo 4", url: "/sample/index4.html" },
];

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  return (
    <section id="demo" className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Portfolio Demos</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {portfolios.map((demo) => (
          <Card
            key={demo.id}
            className="overflow-hidden bg-white shadow-lg rounded-2xl"
          >
            <CardContent className="p-0">
              <iframe
                src={demo.url}
                className="w-full h-64 border-b"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
              <div className="flex items-center justify-between p-4">
                <span className="font-medium">{demo.name}</span>
                <Button
                  className="text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700"
                  size="sm"
                  onClick={() => setActiveDemo(demo.url)}
                >
                  View Full
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {activeDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative bg-white rounded-2xl shadow-xl w-[90%] h-[90%] overflow-hidden">
            <iframe
              src={activeDemo}
              className="w-full h-full"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
            <Button
              className="absolute text-white cursor-pointer top-3 right-3 bg-rose-600 hover:bg-rose-700"
              variant="destructive"
              size="sm"
              onClick={() => setActiveDemo(null)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
