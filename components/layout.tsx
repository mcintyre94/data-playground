import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import PyodideProvider, { usePyodide } from "./pyodide-provider";
import PyodideManager from "./pyodide-provider";
import PythonEditor from "./python-editor";

export default function Layout({ children }: PropsWithChildren<{}>) {
  const { pyodide, loading } = usePyodide()

  return (
    <>
      <div className="max-w-7xl py-8 px-4 mx-auto lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Pyodide loading message */}

          {/* editors */}
          <div className="flex flex-row gap-8">
            <PythonEditor pyodide={pyodide} pythonLoading={loading} />
            <PythonEditor pyodide={pyodide} pythonLoading={loading} />
          </div>

          {/* navbar */}
          <nav>
            <ul>
              <li><Link href="/">Index</Link></li>
              <li><Link href="/second">Second</Link></li>
            </ul>
          </nav>

          {/* page contents */}
          {children}
        </div>
      </div>
    </>
  )
}
