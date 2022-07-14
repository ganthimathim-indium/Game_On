function offsetAndLimit(inputs) {
  let { page, size } = inputs;
  if (!page) {
    page = 1;
  }
  if (!size) {
    size = 50;
  }
  const skip = (page - 1) * size;
  return { skip, size };
}

export default offsetAndLimit;
