export const getButtonVariant = (
  isActive: boolean,
  childrenIsActive: boolean
) => {
  console.log(isActive);

  if (isActive) return "solid";
  if (childrenIsActive) return "solid";
  return "ghost";
};
