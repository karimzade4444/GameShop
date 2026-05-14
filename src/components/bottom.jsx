import minecraft from "./imgs/Rectangle 3313 (2).png";
import journey from "./imgs/Rectangle 3313 (1).png";
import shape from "./imgs/Rectangle 3313.png";
import hike from "./imgs/Rectangle 3313 (3).png";
import ghost from "./imgs/1645538281_9-kartinkin-net-p-kartinki-mainkraft-kriper-9 1.png";
import persons from "./imgs/b049ed609965dcfa0b713e3f95b26966c49e8cc3.png";

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
                  <p className="text-gray-500">{Math.ceil(el.cost * 1.15)} Р</p>
                </div>
                <p className=" font-bold text-2xl">{el.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-20">
        <div className="w-150 h-70 bg-linear-to-br from-green-400 to-yellow-300 rounded-3xl relative mt-30">
          <div>
            <p className=" font-extrabold text-3xl text-white w-80 pt-5 pl-10">Играй уже сейчас в Minecraft</p>
            <div className="flex items-center pl-10 gap-5 pt-5 text-xl">
              <p className=" font-bold text-white">4 999 Р</p>
              <p className=" text-yellow-200">-25%</p>
              <p className=" text-gray-500">6 999 Р</p>
            </div>
           <div className="pt-15 pl-10 flex items-center gap-10"><button className="w-30 h-12 bg-black/20 rounded-2xl text-white font-bold cursor-pointer">Купить</button><button className="w-30 h-12 font-bold text-white cursor-pointer">В избранное</button></div>
          </div>
          <div>
            <img src={ghost} alt=""  className=" w-60 absolute -top-20 right-0"/>
          </div>
        </div>

                <div className="w-150 h-70 bg-linear-to-br from-orange-600 to-orange-300 rounded-3xl relative mt-30">
          <div>
            <p className=" font-extrabold text-3xl text-white w-90 pt-5 pl-10">Играй уже сейчас в Minecraft dangerous</p>
            <div className="flex items-center pl-10 gap-5 pt-5 text-xl">
              <p className=" font-bold text-white">4 999 Р</p>
              <p className=" text-yellow-200">-25%</p>
              <p className=" text-gray-500">6 999 Р</p>
            </div>
           <div className="pt-15 pl-10 flex items-center gap-10"><button className="w-30 h-12 bg-black/20 rounded-2xl text-white font-bold cursor-pointer">Купить</button><button className="w-30 h-12 font-bold text-white cursor-pointer">В избранное</button></div>
          </div>
          <div>
            <img src={persons} alt=""  className=" w-90 absolute -top-10 -right-20"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
