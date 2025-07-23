import {TAGS} from "./../_lib/tags";


export const metadata = {
  title: 'проверь себя',
};

export default async function Page() {
  const response = await fetch('https://6881440066a7eb81224a8608.mockapi.io/test/user', {next: {tags: [TAGS.INSIGHT]}});
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();


  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeWithSeconds = `${hours}:${minutes}:${seconds}`;
  return (
   <>
     <div style={{ color: 'red' }}>
       Время {timeWithSeconds}

         {data?.map((item) => (<div>{item.name} + {item.id}</div>))}
     </div>
   </>
  );
}
