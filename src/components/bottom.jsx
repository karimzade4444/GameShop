import minecraft from "./imgs/Rectangle 3313 (2).png";
import journey from "./imgs/Rectangle 3313 (1).png";
import shape from "./imgs/Rectangle 3313.png";
import hike from "./imgs/Rectangle 3313 (3).png";

const games = [
  { id: 1, img: minecraft, cost: 16400, name: "Minecraft" },
  { id: 2, img: journey, cost: 11000, name: "Journey" },
  { id: 3, img: shape, cost: 6700, name: "Shape" },
  { id: 4, img: hike, cost: 1500, name: "Hike" },
];

const Bottom = () => {
  return (
    <div className="h-[150vh] bg-black ">
      <div>
        <p className="  text-4xl font-bold pl-20 pt-10 text-purple-400">
          ТОП 4⚡
        </p>
      </div>
      <div className="grid grid-cols-4 text-white place-items-center pt-10">
        {games.map((el, i) => {
          return (
            <div key={i}>
              <div>
                <img src={el.img} alt="" className="w-60" />
              </div>
              <div className=" leading-8 pt-4 pl-2">
                <div className=" flex items-center gap-6">
                  <p>{el.cost.toLocaleString("ru-RU")} Р</p>
                  <p className="text-green-300">-15%</p>
                  <p className="text-gray-500">{el.cost * 0.85} Р</p>
                </div>
                <p className=" font-bold text-2xl">{el.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div><div></div><div></div></div>
      </div>
    </div>
  );
};

export default Bottom;
