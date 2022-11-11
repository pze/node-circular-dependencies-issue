import { Base } from "../..";

export class Sub extends Base {
  constructor() {
    super();

    this.runner = Promise.resolve(undefined);
  }
}

export default function builder() {
  return new Sub();
}
