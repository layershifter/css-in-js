/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import { Button } from "../components/button";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Button onClick={() => router.back()}>Go Back</Button>

      <h1
        css={{
          maxWidth: "75vw",
          fontSize: "1.5rem",
        }}
      >
        Another route
      </h1>

      <p>
        Styles should be code-splitted, loaded only when the route is loaded.
      </p>

      <p>
        The button is loaded on the main route also, so it should not be fetched
        twice.
      </p>
    </main>
  );
}
