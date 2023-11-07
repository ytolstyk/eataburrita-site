import { BurritoTimer } from "./BurritoTimer";
import { Container, GetAppLink, H1, Margin } from "./styles";

export function Home() {
  return (
    <Container>
      <H1>How long has it been since your last burrito?</H1>
      <Margin bottom={2}>
        <BurritoTimer />
      </Margin>
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
