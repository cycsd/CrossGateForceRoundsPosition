import { createSignal, Index, For, Show } from "solid-js";
import Position from "./position";
import { useHitOrder } from "./hitOrder";

export default function HitOrderControl() {
  const [
    newOrder,
    { hitClick, setPositionWithoutMonster, toggleMonsterClick },
  ] = useHitOrder();

  const bulletByLevel = {
    1: [1, 1],
    2: [1, 2],
    3: [2, 2],
    4: [2, 3],
    5: [3, 3],
    6: [3, 4],
    7: [3, 5],
    8: [4, 6],
    9: [5, 7],
    10: [7, 8],
    11: [7, 8],
  };

  const [bullet, setBullet] = createSignal([1, 1]);
  const BulletSelectingChange = (event) => {
    setBullet(bulletByLevel[event.currentTarget.value]);
    //console.log(event.currentTarget.value);
  };

  const [bulletColor, setbulletColor] = createSignal([
    `#ff3e00`,
    `#FFFF00`,
    `#FFFFFF`,
  ]);

  const GetColor = (hitOrder) => {
    const index = bullet().findIndex((b) => b >= hitOrder);
    return bulletColor()[index === -1 || hitOrder == 0 ? 2 : index];
  };

  const ChangeColor = (color: string, index: int) => {
    setbulletColor((colorArray) =>
      colorArray.map((c, i) => (i === index ? color : c))
    );
  };

  return (
    <>
      <For each={newOrder()}>
        {(ho, i) => (
          <Show
            when={i() != 5}
            fallback={
              <div style="clear:both">
                <Position
                  color={GetColor(ho.hitOrder)}
                  hitOrder={ho.hitOrder}
                  position={ho.position}
                />
              </div>
            }
          >
            <div>
              <Position
                color={GetColor(ho.hitOrder)}
                hitOrder={ho.hitOrder}
                position={ho.position}
              />
            </div>
          </Show>
        )}
      </For>
      <div style="clear:both">
        <select
          name="bulletLevel"
          id="bulletLevel"
          onChange={BulletSelectingChange}
        >
          <For each={Object.entries(bulletByLevel)}>
            {(arr, i) => (
              <option value={arr[0]}>
                氣功彈LV{arr[0]} 耗魔:{arr[0] * 5} 數量:
                {arr[1][0] == arr[1][1]
                  ? arr[1][0]
                  : `${arr[1][0]}~${arr[1][1]}`}
              </option>
            )}
          </For>
        </select>
      </div>
      <div>
        <label for="mustHitColor">必中顏色:</label>
        <input
          type="color"
          name="mustHitColor"
          value={bulletColor()[0]}
          onInput={(e) => ChangeColor(e.currentTarget.value, 0)}
        />
      </div>
      <div>
        <label for="maybeHitColor">隨機顏色:</label>
        <input
          type="color"
          name="mustHitColor"
          value={bulletColor()[1]}
          onInput={(e) => ChangeColor(e.currentTarget.value, 1)}
        />
      </div>
      <div>
        <label for="notHitColor">不中顏色:</label>
        <input
          type="color"
          name="mustHitColor"
          value={bulletColor()[2]}
          onInput={(e) => ChangeColor(e.currentTarget.value, 2)}
        />
      </div>
    </>
  );
}
