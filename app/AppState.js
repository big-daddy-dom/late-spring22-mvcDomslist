import { Car } from "./Models/Car.js";
import { Job } from "./Models/Job.js";
import { House } from "./Models/House.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = [];
  /** @type {import('./Models/Car').Car[]} */
  cars = [];
  /** @type {import('./Models/House').House[]} */

  houses = [];
  /** @type {import('./Models/Job').Job[]} */

  jobs = [
    new Job({
      title: "fry cook",
      pay: 5,
      description: "flip burg",
      company: "macdonal",
      imgUrl:
        "https://images-ext-1.discordapp.net/external/ihAN1A2k0ISgMMsBjlKL7EPiKjdiT3LmwwFQNaOcDN8/https/pbs.twimg.com/media/FTkU-RoUAAABM0A.jpg?width=493&height=676",
    }),
  ];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
