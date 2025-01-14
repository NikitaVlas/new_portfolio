import {useUnit} from "effector-react";
import {$lang} from "../context/lang";
import translationsJson from "../public/translation/translation.json"

export const useLang = () => {
    const lang = useUnit($lang)
    const translations = translationsJson

    return {lang, translations}
};
