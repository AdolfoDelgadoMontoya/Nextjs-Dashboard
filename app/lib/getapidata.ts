export async function GetApiData() {
    try {
        const [res1, res2, res3, res4] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://api.adviceslip.com/advice'),
            fetch('https://bored-api.appbrewery.com/random'),
            fetch('https://dog.ceo/api/breeds/image/random'),
        ]);

        // Verificamos si las respuestas fueron exitosas
        if (!res1.ok || !res2.ok || !res3.ok || !res4.ok) {
            throw new Error('Error al obtener los datos');
        }

        const [users, advice, activity, image] = await Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]);

        return {
            props: {
                data: { users, advice, activity, image },
            },
            revalidate: 60, // ISR: revalida cada 60 segundos
        };
    } catch (err) {
        return {
            props: {
                data: null,
                error: err,
            },
        };
    }
}