import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-20">
      <div className="container text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Turn Your{" "}
          <span className="text-indigo-600">Resume</span> into a
          <br className="hidden sm:inline" /> Stunning Website — for Free
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
          Upload your resume, pick your style, and instantly get a shareable
          single-page website. No coding. No sign-up. Just your professional
          story — beautifully presented.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#create-form"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow hover:bg-indigo-700 transition"
          >
            Create My Website
          </Link>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-base font-medium hover:bg-gray-100 hover:text-gray-900 transition"
          >
            See Demo
          </a>
        </div>
      </div>
    </section>
  );
}
