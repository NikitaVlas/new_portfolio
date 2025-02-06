import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";
import {useLang} from "../../../hooks/useLang.ts";

const DownloadButton = () => {
    const {lang, translations} = useLang()

    const handleDownload = () => {
        const cvUrl = "/cv.pdf"; // Путь к файлу в папке public
        const link = document.createElement("a");
        link.href = cvUrl;
        link.setAttribute("download", "CV.pdf"); // Принудительное скачивание
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <DownloadStyled
            onClick={handleDownload}
        >
            {translations[lang].hero.download} {"\u2193"}
        </DownloadStyled>
    );
};

const DownloadStyled = styled.button`
    all: unset;
    margin-top: 26px;
    margin-left: 32px;
    color: ${theme.colors.secondary};
    transition: color 0.3s ease;
    cursor: pointer;


    &:hover {
        color: ${theme.hoverColor.hover};
    }
`

export default DownloadButton;
