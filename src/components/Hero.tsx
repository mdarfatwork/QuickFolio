import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Turn Your{" "}
          <span className="text-indigo-600">Resume</span> into a
          <br className="hidden sm:inline" /> Stunning Website — for Free
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-500">
          Upload your resume, pick your style, and instantly get a shareable
          single-page website. No coding. No sign-up. Just your professional
          story — beautifully presented.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
          <Link
            href="#create-form"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition bg-indigo-600 rounded-full shadow hover:bg-indigo-700"
          >
            Create My Website
          </Link>
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium transition border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-900"
          >
            See Demo
          </a>
        </div>
      </div>
    </section>
  );
}
