import Form from "@/components/Form";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="container p-5 mx-auto mt-20 space-y-20 max-w-7xl">
      <Hero />
      <Form />
    </main>
  );
}
