import { Container } from "@mui/material";
import FormSearchStreamer from "@/components/FormSearchStreamer";
import MyAppBar from "@/components/MyAppBar";

export default function Home() {
  return (
    <main>
      <MyAppBar />
      <Container>
        <FormSearchStreamer />
      </Container>
    </main>
  );
}
