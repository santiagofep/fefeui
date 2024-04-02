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
const Filter = ({ searchBar, urlSearch = "", options = [], onChange, }) => {
    let initialFilterValues = searchBar ? { [searchBar.searchParam]: "" } : {};
    const [filterValues, setFilterValues] = (0, react_1.useState)(initialFilterValues);
    (0, react_1.useEffect)(() => {
        if (urlSearch) {
            const searchParams = new URLSearchParams(urlSearch);
            const values = {};
            searchParams.forEach((value, key) => {
                values[key] = value;
            });
            setFilterValues(values);
        }
    }, [urlSearch]);
    const setNewValue = (key, value) => {
        setFilterValues(Object.assign(Object.assign({}, filterValues), { [key]: value, page: "1" }));
    };
    (0, react_1.useEffect)(() => {
        const searchParams = new URLSearchParams();
        Object.keys(filterValues).forEach((key) => {
            searchParams.set(key, filterValues[key]);
        });
        onChange(searchParams);
    }, [filterValues]);
    return (React.createElement(react_2.VStack, { align: "stretch" },
        searchBar && (React.createElement(react_2.FormControl, null,
            React.createElement(react_2.InputGroup, null,
                React.createElement(react_2.Input, { value: filterValues[searchBar.searchParam], onChange: (e) => {
                        setNewValue(searchBar.searchParam, e.target.value);
                    } }),
                React.createElement(react_2.InputRightAddon, null,
                    React.createElement(md_1.MdSearch, null))),
            searchBar.helperText && (React.createElement(react_2.FormHelperText, null, searchBar.helperText)))),
        options.length > 0 && (React.createElement(react_2.HStack, { align: "stretch" }, options.map((option, index) => {
            var _a;
            if (option.type === "select") {
                return (React.createElement(react_2.FormControl, { key: index },
                    React.createElement(react_2.FormLabel, { fontSize: "xs", marginBottom: "sm" }, option.label),
                    React.createElement(react_2.Select, { size: "xs", value: filterValues[option.key] || "", onChange: (e) => {
                            setNewValue(option.key, e.target.value);
                        } }, (_a = option.values) === null || _a === void 0 ? void 0 : _a.map((value) => (React.createElement("option", { key: value.value, value: value.value }, value.label))))));
            }
            else if (option.type === "date") {
                return (React.createElement(react_2.FormControl, { key: index },
                    React.createElement(react_2.FormLabel, { fontSize: "xs", marginBottom: "sm" }, option.label),
                    React.createElement(react_2.Input, { size: "xs", type: "date", value: filterValues[option.key] || "", onChange: (e) => {
                            setNewValue(option.key, e.target.value);
                        } })));
            }
            return null;
        })))));
};
exports.Filter = Filter;
