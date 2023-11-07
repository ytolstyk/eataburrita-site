import { BurritoTimer } from "./BurritoTimer";
import { Container, GetAppLink, Margin } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>How long has it been since your last burrito?</h1>
      <BurritoTimer />
      <p>Use this app to help you keep track, and you will never be lost.</p>
      <Margin top={2}>
        <a
          style={{
            textDecoration: "none",
          }}
          href="https://play.google.com/store/apps/details?id=com.ytolstykh.eataburrita"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GetAppLink>Get the app</GetAppLink>
        </a>
      </Margin>
    </Container>
  );
}
