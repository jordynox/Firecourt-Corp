import fs from 'fs/promises';
import path from 'path';

interface PageProps {
  params: { slug: string };
}

export default async function DocumentPage({ params }: PageProps) {
  const { slug } = params;

  try {
    const filePath = path.join(process.cwd(), 'public', 'documents', `${slug}.txt`);
    const content = await fs.readFile(filePath, 'utf8');

    return (
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-white">{slug.replace(/-/g, ' ')}</h1>
          <div className="prose prose-invert">
            {content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-white">Document Not Found</h1>
          <p className="text-gray-300">The requested document could not be found.</p>
        </div>
      </div>
    );
  }
}

export async function generateStaticParams() {
  const documentsPath = path.join(process.cwd(), 'public', 'documents');
  const files = await fs.readdir(documentsPath);
  return files
    .filter(file => file.endsWith('.txt'))
    .map(file => ({
      slug: file.replace('.txt', ''),
    }));
}
