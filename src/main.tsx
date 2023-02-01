import { render } from "solid-js/web";
import HitOrderControl from "./hitOrderControl";
import { HitOrderProvider } from "./hitOrder";

render(
  () => (
    <HitOrderProvider>
      <HitOrderControl />
    </HitOrderProvider>
  ),
  document.getElementById("app")!
);
