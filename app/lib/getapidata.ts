export async function GetApiData(nNombre:number, nAdvice:number, typeDog: string) {
    try{
    const [res1, res2, res3] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${nNombre}`),
        fetch(`https://api.adviceslip.com/advice/${nAdvice}`),
        fetch(`https://dog.ceo/api/breed/${typeDog}/images/random`),
    ]);

    // Verificamos si las respuestas fueron exitosas
    if (!res1.ok || !res2.ok || !res3.ok) {
        const primer = res1.status;
        const segundo = res2.status;
        const tercero = res3.status;
        throw new Error(`Error al obtener los datos. Status: ${primer} | ${segundo} | ${tercero}`);
    }

    const [users, advice, image] = await Promise.all([res1.json(), res2.json(), res3.json()]);

    return {
        props: {
            data: { users, advice, image },
        },
        revalidate: 60, // ISR: revalida cada 60 segundos
    };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                data: null,
                error: error,
            },
        };
    }
}