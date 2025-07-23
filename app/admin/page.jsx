'use client'
import {TAGS} from "./../_lib/tags";


export const metadata = {
    title: 'проверь себя',
};

export default function Page() {

    const handleRevalidate = async () => {
        try {
            await fetch(`/api/revalidate?tag=${TAGS.INSIGHT}`);
        } catch (error) {
            console.log('Ошибка')
        }
    };

    return (
        <>
            <button  onClick={() => handleRevalidate()}>Обновить</button>
        </>
    );
}
