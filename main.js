const getAlbums = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const response = await fetch(url);
        const data = await response.json();

        data.forEach((album) => {
            if (album.id <= 20) {
                console.log(album.title);
            }
        });

    } catch (error) {
        console.log(error);
    }
};

const retornarMensaje = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Información enviada.");
        }, 3000);
    });
};

const funcionLlamar = async () => {
    let respuesta = await retornarMensaje();
    console.log(respuesta);

    getAlbums();
};

funcionLlamar();