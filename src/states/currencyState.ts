import { atom, selector } from "recoil";

type Currency = "€" | "$" | "£" | "₺" | "¥";

export const currencyState = atom<Currency>({
    key: "currencyState",
    default: "€",
});

export const currencyStateSelector = selector({
    key: "currencyStateSelector",
    get: ({get}) => {
        const currencyAsText = get(currencyState);
        if (currencyAsText === "€") {
            return "Euro";
        } else if (currencyAsText === "$") {
            return "Dollar";
        } else if (currencyAsText === "£") {
            return "Pound";
        } else if (currencyAsText === "₺") {
            return "Lira";
        } else {
            return "Yen";
        }
    }
})
