import Hero from "@/components/Hero";
import Form from "@/components/Form";
import Demo from "@/components/Demo";

export default function Home() {
  return (
    <main className="container p-5 mx-auto mt-20 space-y-20 max-w-7xl">
      <Hero />
      <Form />
      <Demo />
    </main>
  );
}
