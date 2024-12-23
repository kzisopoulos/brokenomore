type Constructor<T> =
  | { new (...args: unknown[]): T }
  | ((...args: unknown[]) => T)
  // eslint-disable-next-line @typescript-eslint/ban-types
  | Function;

export function createSpyObject(
  ref: string,
  methods: PropertyKey[],
): { [k: string]: jest.Mock<unknown> };

export function createSpyObject<T>(
  ref: Constructor<T>,
  methods?: PropertyKey[],
): jest.Mocked<T>;

export function createSpyObject<T>(
  ref: string,
  methods?: PropertyKey[],
): jest.Mocked<T>;

export function createSpyObject<T>(
  ref: Constructor<T> | string,
  methods?: PropertyKey[],
) {
  let name = ref;
  if (typeof ref === 'function') {
    name = ref.name || 'createSpyObject';
    if (!methods) {
      methods = [];
      let t: Constructor<T> = ref;
      while (
        t.prototype &&
        typeof t.prototype === 'object' &&
        !(t == undefined || t === Object)
      ) {
        methods.push(...getClassMethods(t));
        ({ constructor: t } = Object.getPrototypeOf(t.prototype));
      }
    }
  } else {
    if (!methods) {
      throw new TypeError('Expected `methods` parameter');
    }
  }

  const nameStr = typeof name === 'string' ? name : name.name;

  return Object.fromEntries(
    methods.map((key) => [
      String(key),
      jest.fn().mockName(`${name}.${String(key)}`),
    ]),
  );
}

function getClassMethods<T>(target: Constructor<T>) {
  const keys = Reflect.ownKeys(target.prototype);
  return keys.filter((key) => {
    if (key === 'constructor') {
      return false;
    }
    const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
    if (descriptor && typeof descriptor.value === 'function') {
      return true;
    }
    return false;
  });
}

export { createSpyObject as createSpyObj };
