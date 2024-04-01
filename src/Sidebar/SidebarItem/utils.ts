export const getButtonVariant = (
  isActive: boolean,
  childrenIsActive: boolean
) => {
  if (isActive) return "solid";
  if (childrenIsActive) return "solid";
  return "ghost";
};
