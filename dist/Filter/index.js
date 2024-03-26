"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const utils_1 = require("../utils");
const index_1 = require("../index");
const Filter = ({ showSearch = true, initialPath = "", options = [], onChange, }) => {
    const [filterValues, setFilterValues] = (0, react_1.useState)({
        search: "",
    });
    const addOriginToPath = (path) => {
        return new URL(path, window.location.origin);
    };
    (0, react_1.useEffect)(() => {
        if (initialPath) {
            const url = addOriginToPath(initialPath);
            const searchParams = url.searchParams;
            const values = {};
            searchParams.forEach((value, key) => {
                values[key] = value;
            });
            setFilterValues(values);
        }
    }, [initialPath]);
    const setNewValue = (key, value) => {
        setFilterValues(Object.assign(Object.assign({}, filterValues), { [key]: value, page: "1" }));
    };
    (0, react_1.useEffect)(() => {
        let newValue = addOriginToPath(initialPath);
        Object.keys(filterValues).forEach((key) => {
            newValue.searchParams.set(key, filterValues[key]);
        });
        onChange((0, utils_1.pathWithSearch)(newValue.toString()));
    }, [filterValues]);
    return (React.createElement(react_2.VStack, { align: "stretch" },
        showSearch && (React.createElement(react_2.FormControl, null,
            React.createElement(react_2.InputGroup, null,
                React.createElement(react_2.Input, { value: filterValues.search, onChange: (e) => {
                        setNewValue("search", e.target.value);
                    } }),
                React.createElement(react_2.InputRightAddon, null,
                    React.createElement(md_1.MdSearch, null))))),
        options.length > 0 && (React.createElement(react_2.HStack, { align: "stretch" }, options.map((option, index) => {
            if (Object.keys(filterValues).includes(option.key) == false) {
                return null;
            }
            if (option.type === "select") {
                return (React.createElement(react_2.Box, { key: index },
                    React.createElement(index_1.Select, { label: option.label, key: index, options: option.values || [], value: filterValues[option.key] || "", onChange: (newValue) => {
                            setNewValue(option.key, newValue);
                        } })));
            }
            else if (option.type === "date") {
                return (React.createElement(react_2.Box, { key: index },
                    React.createElement(react_2.FormControl, null,
                        React.createElement(react_2.FormLabel, null, option.label),
                        React.createElement(react_2.Input, { type: "date", value: filterValues[option.key] || "", onChange: (e) => {
                                setNewValue(option.key, e.target.value);
                            } }))));
            }
            return null;
        })))));
};
exports.Filter = Filter;
