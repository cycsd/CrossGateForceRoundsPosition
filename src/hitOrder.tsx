import { createSignal, createContext, useContext } from "solid-js";
import { mergeConfig } from "vite";

const HitOrderContext = createContext();

export function HitOrderProvider(props) {
  const defaultHitOrder = {
    1: [
      { position: 1, hitOrder: 1 },
      { position: 2, hitOrder: 2 },
      { position: 3, hitOrder: 3 },
      { position: 4, hitOrder: 10 },
      { position: 5, hitOrder: 8 },
      { position: 6, hitOrder: 5 },
      { position: 7, hitOrder: 4 },
      { position: 8, hitOrder: 6 },
      { position: 9, hitOrder: 7 },
      { position: 10, hitOrder: 9 },
    ],
    2: [
      { position: 1, hitOrder: 6 },
      { position: 2, hitOrder: 1 },
      { position: 3, hitOrder: 4 },
      { position: 4, hitOrder: 8 },
      { position: 5, hitOrder: 9 },
      { position: 6, hitOrder: 3 },
      { position: 7, hitOrder: 5 },
      { position: 8, hitOrder: 7 },
      { position: 9, hitOrder: 2 },
      { position: 10, hitOrder: 10 },
    ],
    3: [
      { position: 1, hitOrder: 8 },
      { position: 2, hitOrder: 5 },
      { position: 3, hitOrder: 1 },
      { position: 4, hitOrder: 3 },
      { position: 5, hitOrder: 9 },
      { position: 6, hitOrder: 10 },
      { position: 7, hitOrder: 2 },
      { position: 8, hitOrder: 7 },
      { position: 9, hitOrder: 4 },
      { position: 10, hitOrder: 6 },
    ],
    4: [
      { position: 1, hitOrder: 10 },
      { position: 2, hitOrder: 8 },
      { position: 3, hitOrder: 5 },
      { position: 4, hitOrder: 1 },
      { position: 5, hitOrder: 7 },
      { position: 6, hitOrder: 9 },
      { position: 7, hitOrder: 6 },
      { position: 8, hitOrder: 3 },
      { position: 9, hitOrder: 4 },
      { position: 10, hitOrder: 2 },
    ],
    5: [
      { position: 1, hitOrder: 9 },
      { position: 2, hitOrder: 8 },
      { position: 3, hitOrder: 4 },
      { position: 4, hitOrder: 5 },
      { position: 5, hitOrder: 1 },
      { position: 6, hitOrder: 10 },
      { position: 7, hitOrder: 7 },
      { position: 8, hitOrder: 2 },
      { position: 9, hitOrder: 3 },
      { position: 10, hitOrder: 6 },
    ],
    6: [
      { position: 1, hitOrder: 5 },
      { position: 2, hitOrder: 4 },
      { position: 3, hitOrder: 6 },
      { position: 4, hitOrder: 7 },
      { position: 5, hitOrder: 9 },
      { position: 6, hitOrder: 1 },
      { position: 7, hitOrder: 2 },
      { position: 8, hitOrder: 3 },
      { position: 9, hitOrder: 10 },
      { position: 10, hitOrder: 8 },
    ],
    7: [
      { position: 1, hitOrder: 3 },
      { position: 2, hitOrder: 5 },
      { position: 3, hitOrder: 7 },
      { position: 4, hitOrder: 2 },
      { position: 5, hitOrder: 10 },
      { position: 6, hitOrder: 6 },
      { position: 7, hitOrder: 1 },
      { position: 8, hitOrder: 4 },
      { position: 9, hitOrder: 8 },
      { position: 10, hitOrder: 9 },
    ],
    8: [
      { position: 1, hitOrder: 10 },
      { position: 2, hitOrder: 2 },
      { position: 3, hitOrder: 7 },
      { position: 4, hitOrder: 4 },
      { position: 5, hitOrder: 6 },
      { position: 6, hitOrder: 8 },
      { position: 7, hitOrder: 5 },
      { position: 8, hitOrder: 1 },
      { position: 9, hitOrder: 3 },
      { position: 10, hitOrder: 9 },
    ],
    9: [
      { position: 1, hitOrder: 9 },
      { position: 2, hitOrder: 6 },
      { position: 3, hitOrder: 3 },
      { position: 4, hitOrder: 4 },
      { position: 5, hitOrder: 2 },
      { position: 6, hitOrder: 10 },
      { position: 7, hitOrder: 8 },
      { position: 8, hitOrder: 5 },
      { position: 9, hitOrder: 1 },
      { position: 10, hitOrder: 7 },
    ],
    10: [
      { position: 1, hitOrder: 10 },
      { position: 2, hitOrder: 7 },
      { position: 3, hitOrder: 2 },
      { position: 4, hitOrder: 3 },
      { position: 5, hitOrder: 6 },
      { position: 6, hitOrder: 9 },
      { position: 7, hitOrder: 8 },
      { position: 8, hitOrder: 4 },
      { position: 9, hitOrder: 5 },
      { position: 10, hitOrder: 1 },
    ],
  };

  const [hitOrderByPosition, setHitOrderByPosition] = createSignal([
    { position: 1, hitOrder: 0 },
    { position: 2, hitOrder: 0 },
    { position: 3, hitOrder: 0 },
    { position: 4, hitOrder: 0 },
    { position: 5, hitOrder: 0 },
    { position: 6, hitOrder: 0 },
    { position: 7, hitOrder: 0 },
    { position: 8, hitOrder: 0 },
    { position: 9, hitOrder: 0 },
    { position: 10, hitOrder: 0 },
  ]);

  const [positionWithoutMonster, setPositionWithoutMonster] = createSignal([
    { position: 11, hitOrder: 11 },
  ]);

  function HitOrderPosition(position, hitOrder) {
    return { position: position, hitOrder: hitOrder };
  }
  const newOrder = () => {
    const psWm = positionWithoutMonster();
    //console.log(psWm);
    return hitOrderByPosition().map((hop, index) =>
      psWm.some((n) => n.position == hop.position)
        ? new HitOrderPosition(hop.position, "0")
        : new HitOrderPosition(
            hop.position,
            hop.hitOrder - psWm.filter((n) => n.hitOrder < hop.hitOrder).length
          )
    );
    //setHitOrderByPosition(newHitOrder);
  };

  const toggleMonsterClick = (data, event) => {
    //console.log(data);
    setPositionWithoutMonster((pwm) =>
      data.hasMonster
        ? pwm.concat([
            {
              position: data.position,
              hitOrder: hitOrderByPosition().find(
                (h) => h.position == data.position
              ).hitOrder,
            },
          ])
        : pwm.filter((n) => n.position != data.position)
    );
  };
  const resetHitOrder = (data, event) => {
    setHitOrderByPosition(defaultHitOrder[data.position]);
    setPositionWithoutMonster((pwm) =>
      pwm
        .map(
          (m) =>
            hitOrderByPosition().find((ho) => ho.position == m.position) || m
        )
        .filter((m) => m.position != data.position)
    );
  };
  const clearAllMonster =()=>{
    setPositionWithoutMonster(hitOrderByPosition());
  }

  const hitOrder = [
    newOrder,
    {
      resetHitOrder,
      setPositionWithoutMonster,
      clearAllMonster,
      toggleMonsterClick,
    },
  ];

  return (
    <HitOrderContext.Provider value={hitOrder}>
      {props.children}
    </HitOrderContext.Provider>
  );
}

export function useHitOrder() {
  return useContext(HitOrderContext);
}
