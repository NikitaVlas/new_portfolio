// import cv from "../../../public/docks/CV.pdf"

const DownloadButton = () => {
    const handleDownload = () => {
        const cvUrl = "../../../public/docks/CV.pdf"; // Путь к файлу в папке public
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "CV_NikitaVlasov.pdf"; // Имя файла при скачивании
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
            Скачать CV
        </button>
    );
};

export default DownloadButton;
