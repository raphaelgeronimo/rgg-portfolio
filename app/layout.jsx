import ContentRoot from '../components/ContentRoot';
import { getContent } from '../lib/sanity';

export const metadata = {
  title: 'Raphael Gabriel Geronimo · Pick your Raphael',
  description: 'Full-stack developer and founder. Choose a card and the whole site becomes a different Raphael.',
};

export const revalidate = 60;

export default async function RootLayout({ children }) {
  const content = await getContent();
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ContentRoot content={content}>{children}</ContentRoot>
      </body>
    </html>
  );
}
