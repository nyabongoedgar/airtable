// return an object containing key value pairs, keys are action options and
// values are concatenated strings comprising of the action and option
type methodsType = { [key: string]: string; }
type defineActionType = {
  (constant: string, options: Array<string>): methodsType
}

const defineAction: defineActionType = (constant, options) => {
  const methods: methodsType = {};
  options.forEach((option) => {
    methods[option] = `${constant}_${option}`;
  });
  return methods;
};

export default defineAction;
