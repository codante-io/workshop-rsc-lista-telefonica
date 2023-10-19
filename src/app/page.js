import ContactList from './contact-list';

export default function Home({searchParams}) {
  return (
    <main className="min-h-screen p-24 bg-gray-100 ">
      <ContactList searchParams={searchParams} />
    </main>
  );
}
