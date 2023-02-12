import { createSignal, createEffect } from "solid-js";
import { useHitOrder } from "./hitOrder";

function HitOrderPosition(position, hitOrder) {
  return { position: position, hitOrder: hitOrder };
}
export default function Position(props) {
  const { hitOrder, position } = props;
  //const [has, setHas] = createSignal(true);
  const [
    newOrder,
    { resetHitOrder, setPositionWithoutMonster, toggleMonsterClick },
  ] = useHitOrder();
  const toggleHasMonster = () => {
    //setHas((b) => !b);
    setPositionWithoutMonster((pwm) => {
      if (hitOrder == 0) return pwm.filter((n) => n.position != position);
      else return pwm.concat([{ position: position, hitOrder: hitOrder }]);
    });
  };

  return (
    <>
      <div>
        <button
          style={{
            width: `70%`,
            height: `100%`,
            "background-color": props.color,
          }}
          onclick={[resetHitOrder, { position }]}
        >
          {hitOrder}
        </button>
        <button
          style={{
            width: `30%`,
            height: `50%`,
          }}
          onClick={[
            toggleMonsterClick,
            { hasMonster: hitOrder != 0, position: position },
          ]}
        >
          {hitOrder != 0 ? "有" : "無"}
        </button>
      </div>
    </>
  );
}
