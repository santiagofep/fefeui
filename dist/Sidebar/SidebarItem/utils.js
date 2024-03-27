"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getButtonVariant = void 0;
const getButtonVariant = (isActive, childrenIsActive) => {
    console.log(isActive);
    if (isActive)
        return "solid";
    if (childrenIsActive)
        return "solid";
    return "ghost";
};
exports.getButtonVariant = getButtonVariant;
