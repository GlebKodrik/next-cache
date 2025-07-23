

export const metadata = {
  title: 'проверь себя',
};

export default async function Page() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeWithSeconds = `${hours}:${minutes}:${seconds}`;
  return (
   <>
     <div style={{ color: 'red' }}>
       Время {timeWithSeconds}
     </div>
   </>
  );
}
